import * as e from "vue";
import { createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, h as a, onBeforeMount as o, onMounted as s, openBlock as c, renderSlot as l, toDisplayString as u } from "vue";
var d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, ee = Object.getOwnPropertyNames, p = Object.prototype.hasOwnProperty, te = (e, t) => {
	let n = {};
	for (var r in e) d(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || d(n, Symbol.toStringTag, { value: "Module" }), n;
}, m = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ee(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !p.call(e, s) && s !== n && d(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = f(t, s)) || r.enumerable
	});
	return e;
}, h = (e, t, n) => (m(e, t, "default"), n && m(n, t, "default"));
function g(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function _(e) {
	return e.split(".").map(g).join("-");
}
function v() {
	let e = i()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(_(t), n ?? {});
	} };
}
function y(e) {
	o(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var b = r({
	__name: "FAQHeader",
	setup(e, { expose: t }) {
		t(), y("FAQHeader");
		let { td: n } = v(), r = { td: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), x = class {
	constructor(e) {
		this.value = e;
	}
	valueOf() {
		return this.value;
	}
}, S = class extends x {
	constructor(e = "???") {
		super(e);
	}
	toString(e) {
		return `{${this.value}}`;
	}
}, C = class extends x {
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
}, w = class e extends x {
	static supportsValue(t) {
		if (typeof t == "number" || t instanceof Date) return !0;
		if (t instanceof x) return e.supportsValue(t.valueOf());
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
		}, t = t.value) : t instanceof x && (t = t.valueOf()), typeof t == "object" && "calendarId" in t && n.calendar === void 0 && (n = {
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
}, T = 100, ne = "⁨", E = "⁩";
function D(e, t, n) {
	return n === t || n instanceof C && t instanceof C && n.value === t.value || t instanceof C && typeof n == "string" && n === e.memoizeIntlObject(Intl.PluralRules, t.opts).select(t.value);
}
function O(e, t, n) {
	return t[n] ? k(e, t[n].value) : (e.reportError(/* @__PURE__ */ RangeError("No default")), new S());
}
function re(e, t) {
	let n = [], r = Object.create(null);
	for (let i of t) i.type === "narg" ? r[i.name] = ie(e, i.value) : n.push(ie(e, i));
	return {
		positional: n,
		named: r
	};
}
function ie(e, t) {
	switch (t.type) {
		case "str": return t.value;
		case "num": return new C(t.value, { minimumFractionDigits: t.precision });
		case "var": return ae(e, t);
		case "mesg": return oe(e, t);
		case "term": return se(e, t);
		case "func": return ce(e, t);
		case "select": return le(e, t);
		default: return new S();
	}
}
function ae(e, { name: t }) {
	let n;
	if (e.params) {
		if (Object.prototype.hasOwnProperty.call(e.params, t)) n = e.params[t];
		else return new S(`$${t}`);
	} else if (e.args && Object.prototype.hasOwnProperty.call(e.args, t)) n = e.args[t];
	else return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown variable: $${t}`)), new S(`$${t}`);
	if (n instanceof x) return n;
	switch (typeof n) {
		case "string": return n;
		case "number": return new C(n);
		case "object": if (w.supportsValue(n)) return new w(n);
		default: return e.reportError(/* @__PURE__ */ TypeError(`Variable type not supported: $${t}, ${typeof n}`)), new S(`$${t}`);
	}
}
function oe(e, { name: t, attr: n }) {
	let r = e.bundle._messages.get(t);
	if (!r) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown message: ${t}`)), new S(t);
	if (n) {
		let i = r.attributes[n];
		return i ? k(e, i) : (e.reportError(/* @__PURE__ */ ReferenceError(`Unknown attribute: ${n}`)), new S(`${t}.${n}`));
	}
	return r.value ? k(e, r.value) : (e.reportError(/* @__PURE__ */ ReferenceError(`No value: ${t}`)), new S(t));
}
function se(e, { name: t, attr: n, args: r }) {
	let i = `-${t}`, a = e.bundle._terms.get(i);
	if (!a) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown term: ${i}`)), new S(i);
	if (n) {
		let t = a.attributes[n];
		if (t) {
			e.params = re(e, r).named;
			let n = k(e, t);
			return e.params = null, n;
		}
		return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown attribute: ${n}`)), new S(`${i}.${n}`);
	}
	e.params = re(e, r).named;
	let o = k(e, a.value);
	return e.params = null, o;
}
function ce(e, { name: t, args: n }) {
	let r = e.bundle._functions[t];
	if (!r) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown function: ${t}()`)), new S(`${t}()`);
	if (typeof r != "function") return e.reportError(/* @__PURE__ */ TypeError(`Function ${t}() is not callable`)), new S(`${t}()`);
	try {
		let t = re(e, n);
		return r(t.positional, t.named);
	} catch (n) {
		return e.reportError(n), new S(`${t}()`);
	}
}
function le(e, { selector: t, variants: n, star: r }) {
	let i = ie(e, t);
	if (i instanceof S) return O(e, n, r);
	for (let t of n) if (D(e, i, ie(e, t.key))) return k(e, t.value);
	return O(e, n, r);
}
function ue(e, t) {
	if (e.dirty.has(t)) return e.reportError(/* @__PURE__ */ RangeError("Cyclic reference")), new S();
	e.dirty.add(t);
	let n = [], r = e.bundle._useIsolating && t.length > 1;
	for (let i of t) {
		if (typeof i == "string") {
			n.push(e.bundle._transform(i));
			continue;
		}
		if (e.placeables++, e.placeables > T) throw e.dirty.delete(t), RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${T}`);
		r && n.push(ne), n.push(ie(e, i).toString(e)), r && n.push(E);
	}
	return e.dirty.delete(t), n.join("");
}
function k(e, t) {
	return typeof t == "string" ? e.bundle._transform(t) : ue(e, t);
}
var de = class {
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
function fe(e, t) {
	let n = Object.create(null);
	for (let [r, i] of Object.entries(e)) t.includes(r) && (n[r] = i.valueOf());
	return n;
}
var pe = [
	"unitDisplay",
	"currencyDisplay",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits"
];
function me(e, t) {
	let n = e[0];
	if (n instanceof S) return new S(`NUMBER(${n.valueOf()})`);
	if (n instanceof C) return new C(n.valueOf(), {
		...n.opts,
		...fe(t, pe)
	});
	if (n instanceof w) return new C(n.toNumber(), { ...fe(t, pe) });
	throw TypeError("Invalid argument to NUMBER");
}
var he = [
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
function ge(e, t) {
	let n = e[0];
	if (n instanceof S) return new S(`DATETIME(${n.valueOf()})`);
	if (n instanceof w || n instanceof C) return new w(n, fe(t, he));
	throw TypeError("Invalid argument to DATETIME");
}
var _e = /* @__PURE__ */ new Map();
function ve(e) {
	let t = Array.isArray(e) ? e.join(" ") : e, n = _e.get(t);
	return n === void 0 && (n = /* @__PURE__ */ new Map(), _e.set(t, n)), n;
}
var ye = class {
	constructor(e, { functions: t, useIsolating: n = !0, transform: r = (e) => e } = {}) {
		this._terms = /* @__PURE__ */ new Map(), this._messages = /* @__PURE__ */ new Map(), this.locales = Array.isArray(e) ? e : [e], this._functions = {
			NUMBER: me,
			DATETIME: ge,
			...t
		}, this._useIsolating = n, this._transform = r, this._intls = ve(e);
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
		let r = new de(this, n, t);
		try {
			return ue(r, e).toString(r);
		} catch (e) {
			if (r.errors && e instanceof Error) return r.errors.push(e), new S().toString(r);
			throw e;
		}
	}
}, be = /^(-?[a-zA-Z][\w-]*) *= */gm, xe = /\.([a-zA-Z][\w-]*) *= */y, Se = /\*?\[/y, Ce = /(-?[0-9]+(?:\.([0-9]+))?)/y, we = /([a-zA-Z][\w-]*)/y, Te = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y, Ee = /^[A-Z][A-Z0-9_-]*$/, De = /([^{}\n\r]+)/y, Oe = /([^\\"\n\r]*)/y, ke = /\\([\\"])/y, Ae = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y, je = /^\n+/, Me = / +$/, Ne = / *\r?\n/g, Pe = /( *)$/, Fe = /{\s*/y, Ie = /\s*}/y, Le = /\[\s*/y, Re = /\s*] */y, ze = /\s*\(\s*/y, Be = /\s*->\s*/y, Ve = /\s*:\s*/y, He = /\s*,?\s*/y, Ue = /\s+/y, A = class {
	constructor(e) {
		this.body = [], be.lastIndex = 0;
		let t = 0;
		for (;;) {
			let n = be.exec(e);
			if (n === null) break;
			t = be.lastIndex;
			try {
				this.body.push(s(n[1]));
			} catch (e) {
				if (e instanceof SyntaxError) continue;
				throw e;
			}
		}
		function n(n) {
			return n.lastIndex = t, n.test(e);
		}
		function r(n, r) {
			if (e[t] === n) return t++, !0;
			if (r) throw new r(`Expected ${n}`);
			return !1;
		}
		function i(e, r) {
			if (n(e)) return t = e.lastIndex, !0;
			if (r) throw new r(`Expected ${e.toString()}`);
			return !1;
		}
		function a(n) {
			n.lastIndex = t;
			let r = n.exec(e);
			if (r === null) throw SyntaxError(`Expected ${n.toString()}`);
			return t = n.lastIndex, r;
		}
		function o(e) {
			return a(e)[1];
		}
		function s(e) {
			let t = l(), n = c();
			if (t === null && Object.keys(n).length === 0) throw SyntaxError("Expected message value or attributes");
			return {
				id: e,
				value: t,
				attributes: n
			};
		}
		function c() {
			let e = Object.create(null);
			for (; n(xe);) {
				let t = o(xe), n = l();
				if (n === null) throw SyntaxError("Expected attribute value");
				e[t] = n;
			}
			return e;
		}
		function l() {
			let r;
			if (n(De) && (r = o(De)), e[t] === "{" || e[t] === "}") return u(r ? [r] : [], Infinity);
			let i = y();
			return i ? r ? u([r, i], i.length) : (i.value = b(i.value, je), u([i], i.length)) : r ? b(r, Me) : null;
		}
		function u(r = [], i) {
			for (;;) {
				if (n(De)) {
					r.push(o(De));
					continue;
				}
				if (e[t] === "{") {
					r.push(d());
					continue;
				}
				if (e[t] === "}") throw SyntaxError("Unbalanced closing brace");
				let a = y();
				if (a) {
					r.push(a), i = Math.min(i, a.length);
					continue;
				}
				break;
			}
			let a = r.length - 1, s = r[a];
			typeof s == "string" && (r[a] = b(s, Me));
			let c = [];
			for (let e of r) e instanceof We && (e = e.value.slice(0, e.value.length - i)), e && c.push(e);
			return c;
		}
		function d() {
			i(Fe, SyntaxError);
			let e = f();
			if (i(Ie)) return e;
			if (i(Be)) {
				let t = te();
				return i(Ie, SyntaxError), {
					type: "select",
					selector: e,
					...t
				};
			}
			throw SyntaxError("Unclosed placeable");
		}
		function f() {
			if (e[t] === "{") return d();
			if (n(Te)) {
				let [, e, t, n = null] = a(Te);
				if (e === "$") return {
					type: "var",
					name: t
				};
				if (i(ze)) {
					let r = ee();
					if (e === "-") return {
						type: "term",
						name: t,
						attr: n,
						args: r
					};
					if (Ee.test(t)) return {
						type: "func",
						name: t,
						args: r
					};
					throw SyntaxError("Function names must be all upper-case");
				}
				return e === "-" ? {
					type: "term",
					name: t,
					attr: n,
					args: []
				} : {
					type: "mesg",
					name: t,
					attr: n
				};
			}
			return h();
		}
		function ee() {
			let n = [];
			for (;;) {
				switch (e[t]) {
					case ")": return t++, n;
					case void 0: throw SyntaxError("Unclosed argument list");
				}
				n.push(p()), i(He);
			}
		}
		function p() {
			let e = f();
			return e.type === "mesg" && i(Ve) ? {
				type: "narg",
				name: e.name,
				value: h()
			} : e;
		}
		function te() {
			let e = [], t = 0, i;
			for (; n(Se);) {
				r("*") && (i = t);
				let n = m(), a = l();
				if (a === null) throw SyntaxError("Expected variant value");
				e[t++] = {
					key: n,
					value: a
				};
			}
			if (t === 0) return null;
			if (i === void 0) throw SyntaxError("Expected default variant");
			return {
				variants: e,
				star: i
			};
		}
		function m() {
			i(Le, SyntaxError);
			let e;
			return e = n(Ce) ? g() : {
				type: "str",
				value: o(we)
			}, i(Re, SyntaxError), e;
		}
		function h() {
			if (n(Ce)) return g();
			if (e[t] === "\"") return _();
			throw SyntaxError("Invalid expression");
		}
		function g() {
			let [, e, t = ""] = a(Ce), n = t.length;
			return {
				type: "num",
				value: parseFloat(e),
				precision: n
			};
		}
		function _() {
			r("\"", SyntaxError);
			let n = "";
			for (;;) {
				if (n += o(Oe), e[t] === "\\") {
					n += v();
					continue;
				}
				if (r("\"")) return {
					type: "str",
					value: n
				};
				throw SyntaxError("Unclosed string literal");
			}
		}
		function v() {
			if (n(ke)) return o(ke);
			if (n(Ae)) {
				let [, e, t] = a(Ae), n = parseInt(e || t, 16);
				return n <= 55295 || 57344 <= n ? String.fromCodePoint(n) : "�";
			}
			throw SyntaxError("Unknown escape sequence");
		}
		function y() {
			let n = t;
			switch (i(Ue), e[t]) {
				case ".":
				case "[":
				case "*":
				case "}":
				case void 0: return !1;
				case "{": return x(e.slice(n, t));
			}
			return e[t - 1] === " " && x(e.slice(n, t));
		}
		function b(e, t) {
			return e.replace(t, "");
		}
		function x(e) {
			let t = e.replace(Ne, "\n"), n = Pe.exec(e)[1].length;
			return new We(t, n);
		}
	}
}, We = class {
	constructor(e, t) {
		this.value = e, this.length = t;
	}
};
function Ge(e) {
	let t = e.options || e;
	t.fluent = t.fluent || {}, t.fluent.en = new A("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Go to GitHub\nheader-home = Home\nheader-methodology = Methodology\nheader-mock-pages = Mock Pages\nheader-products = Products\nheader-pricing = Pricing\nheader-team = Team\nheader-blog = Blog\nheader-careers = Careers\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Settings\nfooter-title = i18n Benchmark\nfooter-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\nfooter-resources = Resources\nfooter-github = GitHub\nfooter-methodology = Methodology\nfooter-contributing = Contributing\nfooter-contact = Contact\nfooter-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.\ntheme-toggle-auto = Theme: Auto\ntheme-toggle-dark = Theme: Dark\ntheme-toggle-light = Theme: Light\ntheme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.\ntheme-toggle-label-other = Theme mode: {mode}. Click to switch mode.\nmock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\nhome-hero-title = i18n Benchmark\nhome-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\nhome-hero-view-results = View Results\nhome-hero-methodology = Methodology\nhome-why-it-matters-title = Why These Metrics Matter\nhome-why-it-matters-bundle-size-title = Bundle Size\nhome-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\nhome-why-it-matters-rendering-title = Rendering & Hydration\nhome-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Dynamic Loading\nhome-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\nhome-understanding-impact-title = Understanding the Impact\nhome-understanding-impact-single-json-title = Why a single large JSON can hurt performance\nhome-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\nhome-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.\nhome-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\nhome-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\nhome-understanding-impact-trade-offs-title = The trade-offs of dynamic loading\nhome-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\nhome-understanding-impact-waterfall-label = Waterfall requests:\nhome-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\nhome-understanding-impact-fouc-label = Flash of untranslated content (FOUC):\nhome-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.\nhome-understanding-impact-cache-label = Cache invalidation:\nhome-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\nhome-understanding-impact-measures-title = What this benchmark measures\nhome-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\nhome-results-table-title = Sample Results\nhome-results-table-library = Library\nhome-results-table-bundle-size = Bundle Size\nhome-results-table-lookup-time = Lookup Time\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Yes\nhome-results-table-manual = Manual\nhome-results-table-built-in = Built-in\nabout-header-title = About This Benchmark\nabout-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\nabout-grid-why-exists-title = Why This Exists\nabout-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\nabout-grid-methodology-title = Methodology\nabout-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\nabout-what-we-measure-title = What We Measure\nabout-what-we-measure-bundle-size-impact = Bundle size impact\nabout-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\nabout-what-we-measure-rendering-overhead = Rendering overhead\nabout-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\nabout-what-we-measure-hydration-cost = Hydration cost\nabout-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\nabout-what-we-measure-lazy-loading = Lazy loading effectiveness\nabout-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\nabout-what-we-measure-locale-switch = Locale switch speed\nabout-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutorials, and analysis from the i18n community.\nblog-list-read-more = Read More →\nblog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive\nblog-list-post1-date = March 15, 2026\nblog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = How to Reduce Your i18n Bundle by 60%\nblog-list-post2-date = March 8, 2026\nblog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = The State of Internationalization in React\nblog-list-post3-date = February 28, 2026\nblog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\nblog-list-post3-category = Analysis\nblog-list-post4-title = Migrating from react-i18next to Lingui\nblog-list-post4-date = February 15, 2026\nblog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components and i18n: What Changes?\nblog-list-post5-date = February 1, 2026\nblog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\nblog-list-post5-category = Analysis\nblog-list-post6-title = Benchmark Methodology: How We Test\nblog-list-post6-date = January 20, 2026\nblog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\nblog-list-post6-category = Meta\ncareers-header-title = Careers\ncareers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Work from anywhere in the world\ncareers-benefits-pay-label = Competitive pay\ncareers-benefits-pay-value = Top-of-market compensation\ncareers-benefits-oss-label = Open source time\ncareers-benefits-oss-value = 20% time for OSS contributions\ncareers-open-positions-title = Open Positions\ncareers-open-positions-apply-now = Apply Now\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Full-time\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\ncareers-open-positions-writer-title = Technical Writer\ncareers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.\ncareers-open-positions-devrel-title = DevRel Engineer\ncareers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\ncareers-open-positions-qa-title = QA Engineer\ncareers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\ncontact-header-title = Get in Touch\ncontact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\ncontact-form-name = Name\ncontact-form-your-name = Your name\ncontact-form-email = Email\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Topic\ncontact-form-bug-report = Bug Report\ncontact-form-new-benchmark-idea = New Benchmark Idea\ncontact-form-methodology-question = Methodology Question\ncontact-form-contribution = Contribution\ncontact-form-other = Other\ncontact-form-message = Message\ncontact-form-message-placeholder = Describe your question or idea...\ncontact-form-send-message = Send Message\nfaq-header-title = Frequently Asked Questions\nfaq-header-description = Everything you need to know about i18n Benchmark.\nfaq-list-q1 = What is i18n Benchmark?\nfaq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\nfaq-list-q2 = How are benchmarks conducted?\nfaq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\nfaq-list-q3 = Which libraries are currently supported?\nfaq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\nfaq-list-q4 = Can I submit my own benchmarks?\nfaq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\nfaq-list-q5 = How often are benchmarks updated?\nfaq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\nfaq-list-q6 = Is the data reliable?\nfaq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\nfaq-list-q7 = Do you offer consulting services?\nfaq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\nfaq-list-q8 = How can I contribute?\nfaq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\npricing-header-title = Simple, Transparent Pricing\npricing-header-description = Choose the plan that fits your team. No hidden fees.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = $0\npricing-tiers-starter-period = forever\npricing-tiers-starter-feature1 = 5 benchmark runs/day\npricing-tiers-starter-feature2 = 3 libraries\npricing-tiers-starter-feature3 = Community support\npricing-tiers-starter-feature4 = Public results\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = $29\npricing-tiers-pro-period = /month\npricing-tiers-pro-feature1 = Unlimited runs\npricing-tiers-pro-feature2 = All libraries\npricing-tiers-pro-feature3 = Priority support\npricing-tiers-pro-feature4 = Private results\npricing-tiers-pro-feature5 = CI integration\npricing-tiers-pro-feature6 = Historical data\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Custom\npricing-tiers-enterprise-feature1 = Everything in Pro\npricing-tiers-enterprise-feature2 = On-premise option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedicated account manager\npricing-tiers-enterprise-feature5 = Custom SLAs\npricing-tiers-enterprise-feature6 = Audit logs\npricing-tiers-enterprise-feature7 = Training sessions\npricing-tiers-contact-sales = Contact Sales\npricing-tiers-get-started = Get Started\nproducts-header-title = Products\nproducts-header-description = Tools and services to streamline your internationalization workflow.\nproducts-grid-learn-more = Learn More\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\nproducts-grid-cli-price = Free\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\nproducts-grid-cloud-price = $29/mo\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\nproducts-grid-enterprise-price = Contact Us\nproducts-grid-migration-name = Migration Assistant\nproducts-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\nproducts-grid-migration-price = $99 one-time\nproducts-grid-qa-name = Translation QA\nproducts-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.\nproducts-grid-qa-price = $19/mo\nproducts-grid-optimizer-name = Bundle Optimizer\nproducts-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\nproducts-grid-optimizer-price = $49/mo\nsettings-header-title = Settings\nsettings-header-description = Manage your account preferences and configuration.\nsettings-profile-title = Profile\nsettings-profile-display-name = Display Name\nsettings-profile-email = Email\nsettings-preferences-title = Preferences\nsettings-preferences-email-notifications = Email Notifications\nsettings-preferences-weekly-reports = Receive weekly benchmark reports\nsettings-preferences-toggle-notifications = Toggle notifications\nsettings-preferences-dark-mode = Dark Mode\nsettings-preferences-dark-color-scheme = Use dark color scheme\nsettings-preferences-toggle-dark-mode = Toggle dark mode\nsettings-preferences-default-language = Default Language\nsettings-preferences-english = English (en)\nsettings-preferences-french = French (fr)\nsettings-preferences-german = German (de)\nsettings-preferences-spanish = Spanish (es)\nsettings-preferences-japanese = Japanese (ja)\nsettings-preferences-chinese = Chinese Simplified (zh-CN)\nsettings-preferences-arabic = Arabic (ar)\nsettings-api-access-title = API Access\nsettings-api-access-api-key = API Key\nsettings-api-access-copy = Copy\nsettings-api-access-description = Use this key to access the benchmarking API programmatically.\nsettings-footer-cancel = Cancel\nsettings-footer-save-changes = Save Changes\nteam-header-title = Our Team\nteam-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Founder & Lead Engineer\nteam-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance Engineer\nteam-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack Developer\nteam-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Data Analyst\nteam-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.\nnot-found-title = 404\nnot-found-description = Oops! Page not found\nnot-found-return-home = Return to Home");
}
function Ke(e) {
	let t = e.options || e;
	t.fluent = t.fluent || {}, t.fluent.fr = new A("shared-app-name = Bench i18n\nshared-site-name = Benchmark i18n\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Aller sur GitHub\nheader-home = Accueil\nheader-methodology = Méthodologie\nheader-mock-pages = Pages fictives\nheader-products = Produits\nheader-pricing = Tarifs\nheader-team = Équipe\nheader-blog = Blog\nheader-careers = Carrières\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Paramètres\nfooter-title = Benchmark i18n\nfooter-description = Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\nfooter-resources = Ressources\nfooter-github = GitHub\nfooter-methodology = Méthodologie\nfooter-contributing = Contribuer\nfooter-contact = Contact\nfooter-built-with = Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.\ntheme-toggle-auto = Thème : automatique\ntheme-toggle-dark = Thème : sombre\ntheme-toggle-light = Thème : clair\ntheme-toggle-label-auto = Mode thème : automatique (système). Cliquez pour passer en mode clair.\ntheme-toggle-label-other = Mode thème : {mode}. Cliquez pour changer de mode.\nmock-banner = ⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.\nhome-hero-title = Benchmark i18n\nhome-hero-description = Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.\nhome-hero-view-results = Voir les résultats\nhome-hero-methodology = Méthodologie\nhome-why-it-matters-title = Pourquoi ces métriques comptent\nhome-why-it-matters-bundle-size-title = Taille du bundle\nhome-why-it-matters-bundle-size-desc = Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.\nhome-why-it-matters-rendering-title = Rendu et hydratation\nhome-why-it-matters-rendering-desc = Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Chargement dynamique\nhome-why-it-matters-dynamic-loading-desc = Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.\nhome-understanding-impact-title = Comprendre l'impact\nhome-understanding-impact-single-json-title = Pourquoi un unique gros JSON peut nuire aux performances\nhome-understanding-impact-single-json-intro = Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :\nhome-understanding-impact-single-json-bullet1 = Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.\nhome-understanding-impact-single-json-bullet2 = Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.\nhome-understanding-impact-single-json-bullet3 = Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.\nhome-understanding-impact-trade-offs-title = Les compromis du chargement dynamique\nhome-understanding-impact-trade-offs-intro = Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :\nhome-understanding-impact-waterfall-label = Requêtes en cascade :\nhome-understanding-impact-waterfall-desc = l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.\nhome-understanding-impact-fouc-label = Flash de contenu non traduit (FOUC) :\nhome-understanding-impact-fouc-desc = l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.\nhome-understanding-impact-cache-label = Invalidation du cache :\nhome-understanding-impact-cache-desc = mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.\nhome-understanding-impact-measures-title = Ce que mesure ce benchmark\nhome-understanding-impact-measures-desc = Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.\nhome-results-table-title = Exemple de résultats\nhome-results-table-library = Bibliothèque\nhome-results-table-bundle-size = Taille du bundle\nhome-results-table-lookup-time = Temps de recherche\nhome-results-table-lazy-loading = Chargement paresseux\nhome-results-table-yes = Oui\nhome-results-table-manual = Manuel\nhome-results-table-built-in = Intégré\nabout-header-title = À propos de ce benchmark\nabout-header-description = Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.\nabout-grid-why-exists-title = Pourquoi ce projet existe\nabout-grid-why-exists-desc = Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.\nabout-grid-methodology-title = Méthodologie\nabout-grid-methodology-desc = La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.\nabout-what-we-measure-title = Ce que nous mesurons\nabout-what-we-measure-bundle-size-impact = Impact sur la taille du bundle\nabout-what-we-measure-bundle-size-impact-desc = Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.\nabout-what-we-measure-rendering-overhead = Surcharge de rendu\nabout-what-we-measure-rendering-overhead-desc = Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.\nabout-what-we-measure-hydration-cost = Coût d'hydratation\nabout-what-we-measure-hydration-cost-desc = En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.\nabout-what-we-measure-lazy-loading = Efficacité du chargement paresseux\nabout-what-we-measure-lazy-loading-desc = Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?\nabout-what-we-measure-locale-switch = Vitesse de changement de langue\nabout-what-we-measure-locale-switch-desc = À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.\nblog-header-title = Blog\nblog-header-description = Articles, tutoriels et analyses de la communauté i18n.\nblog-list-read-more = Lire la suite →\nblog-list-post1-title = Comparer les bibliothèques i18n en 2026 : plongée détaillée\nblog-list-post1-date = 15 mars 2026\nblog-list-post1-excerpt = Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Réduire votre bundle i18n de 60 %\nblog-list-post2-date = 8 mars 2026\nblog-list-post2-excerpt = Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.\nblog-list-post2-category = Tutoriel\nblog-list-post3-title = État de l'internationalisation dans l'écosystème React\nblog-list-post3-date = 28 février 2026\nblog-list-post3-excerpt = Panorama des tendances, patterns émergents et préférences de la communauté.\nblog-list-post3-category = Analyse\nblog-list-post4-title = Migrer de react-i18next vers Lingui\nblog-list-post4-date = 15 février 2026\nblog-list-post4-excerpt = Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.\nblog-list-post4-category = Tutoriel\nblog-list-post5-title = Server Components et i18n : qu'est-ce qui change ?\nblog-list-post5-date = 1er février 2026\nblog-list-post5-excerpt = Les React Server Components introduisent de nouveaux motifs pour l'i18n.\nblog-list-post5-category = Analyse\nblog-list-post6-title = Méthodologie de benchmark : comment nous testons\nblog-list-post6-date = 20 janvier 2026\nblog-list-post6-excerpt = Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.\nblog-list-post6-category = Méta\ncareers-header-title = Carrières\ncareers-header-description = Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Travaillez depuis n'importe où\ncareers-benefits-pay-label = Rémunération compétitive\ncareers-benefits-pay-value = Fourchettes haut de marché\ncareers-benefits-oss-label = Temps open source\ncareers-benefits-oss-value = 20 % du temps pour contribuer à l'OSS\ncareers-open-positions-title = Postes ouverts\ncareers-open-positions-apply-now = Postuler\ncareers-open-positions-remote = À distance\ncareers-open-positions-full-time = Temps plein\ncareers-open-positions-part-time = Temps partiel\ncareers-open-positions-engineering = Ingénierie\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Communauté\ncareers-open-positions-sf-remote = San Francisco / télétravail\ncareers-open-positions-frontend-title = Ingénieur front-end senior\ncareers-open-positions-frontend-desc = Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.\ncareers-open-positions-backend-title = Ingénieur back-end\ncareers-open-positions-backend-desc = Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.\ncareers-open-positions-writer-title = Rédacteur·rice technique\ncareers-open-positions-writer-desc = Guides, références d'API et tutoriels pour la plateforme de benchmark.\ncareers-open-positions-devrel-title = Ingénieur DevRel\ncareers-open-positions-devrel-desc = Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.\ncareers-open-positions-qa-title = Ingénieur QA\ncareers-open-positions-qa-desc = Garantir la fiabilité des résultats par des tests et validations rigoureux.\ncontact-header-title = Contact\ncontact-header-description = Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à\ncontact-form-name = Nom\ncontact-form-your-name = Votre nom\ncontact-form-email = E-mail\ncontact-form-email-placeholder = vous@exemple.com\ncontact-form-topic = Sujet\ncontact-form-bug-report = Rapport de bug\ncontact-form-new-benchmark-idea = Idée de benchmark\ncontact-form-methodology-question = Question de méthodologie\ncontact-form-contribution = Contribution\ncontact-form-other = Autre\ncontact-form-message = Message\ncontact-form-message-placeholder = Décrivez votre question ou idée…\ncontact-form-send-message = Envoyer\nfaq-header-title = Questions fréquentes\nfaq-header-description = Tout savoir sur i18n Benchmark.\nfaq-list-q1 = Qu'est-ce qu'i18n Benchmark ?\nfaq-list-a1 = Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.\nfaq-list-q2 = Comment sont menés les benchmarks ?\nfaq-list-a2 = Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.\nfaq-list-q3 = Quelles bibliothèques sont prises en charge ?\nfaq-list-a3 = react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.\nfaq-list-q4 = Puis-je proposer des benchmarks ?\nfaq-list-a4 = Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.\nfaq-list-q5 = À quelle fréquence sont-ils mis à jour ?\nfaq-list-a5 = Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.\nfaq-list-q6 = Les données sont-elles fiables ?\nfaq-list-a6 = Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.\nfaq-list-q7 = Proposez-vous du conseil ?\nfaq-list-a7 = Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.\nfaq-list-q8 = Comment contribuer ?\nfaq-list-a8 = Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.\npricing-header-title = Tarification simple et transparente\npricing-header-description = Choisissez l'offre adaptée à votre équipe. Sans frais cachés.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 €\npricing-tiers-starter-period = pour toujours\npricing-tiers-starter-feature1 = 5 exécutions de benchmark / jour\npricing-tiers-starter-feature2 = 3 bibliothèques\npricing-tiers-starter-feature3 = Support communautaire\npricing-tiers-starter-feature4 = Résultats publics\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 €\npricing-tiers-pro-period = / mois\npricing-tiers-pro-feature1 = Exécutions illimitées\npricing-tiers-pro-feature2 = Toutes les bibliothèques\npricing-tiers-pro-feature3 = Support prioritaire\npricing-tiers-pro-feature4 = Résultats privés\npricing-tiers-pro-feature5 = Intégration CI\npricing-tiers-pro-feature6 = Historique\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Sur mesure\npricing-tiers-enterprise-feature1 = Tout le Pro\npricing-tiers-enterprise-feature2 = Option on-premise\npricing-tiers-enterprise-feature3 = SSO et SAML\npricing-tiers-enterprise-feature4 = Account manager dédié\npricing-tiers-enterprise-feature5 = SLA sur mesure\npricing-tiers-enterprise-feature6 = Journaux d'audit\npricing-tiers-enterprise-feature7 = Sessions de formation\npricing-tiers-contact-sales = Contacter les ventes\npricing-tiers-get-started = Commencer\nproducts-header-title = Produits\nproducts-header-description = Outils et services pour fluidifier votre flux i18n.\nproducts-grid-learn-more = En savoir plus\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Lancez des benchmarks en local. Configurations personnalisées et CI.\nproducts-grid-cli-price = Gratuit\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.\nproducts-grid-cloud-price = 29 €/mois\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise avec SSO, journaux d'audit, SLA et support dédié.\nproducts-grid-enterprise-price = Nous contacter\nproducts-grid-migration-name = Assistant de migration\nproducts-grid-migration-desc = Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.\nproducts-grid-migration-price = 99 € (unique)\nproducts-grid-qa-name = QA des traductions\nproducts-grid-qa-desc = Contrôles automatiques : clés manquantes, pluriels, contexte.\nproducts-grid-qa-price = 19 €/mois\nproducts-grid-optimizer-name = Optimiseur de bundle\nproducts-grid-optimizer-desc = Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).\nproducts-grid-optimizer-price = 49 €/mois\nsettings-header-title = Paramètres\nsettings-header-description = Gérez les préférences et la configuration de votre compte.\nsettings-profile-title = Profil\nsettings-profile-display-name = Nom affiché\nsettings-profile-email = E-mail\nsettings-preferences-title = Préférences\nsettings-preferences-email-notifications = Notifications e-mail\nsettings-preferences-weekly-reports = Recevoir les rapports hebdomadaires\nsettings-preferences-toggle-notifications = Activer/désactiver les notifications\nsettings-preferences-dark-mode = Mode sombre\nsettings-preferences-dark-color-scheme = Utiliser le thème sombre\nsettings-preferences-toggle-dark-mode = Basculer le mode sombre\nsettings-preferences-default-language = Langue par défaut\nsettings-preferences-english = Anglais (en)\nsettings-preferences-french = Français (fr)\nsettings-preferences-german = Allemand (de)\nsettings-preferences-spanish = Espagnol (es)\nsettings-preferences-japanese = Japonais (ja)\nsettings-preferences-chinese = Chinois simplifié (zh-CN)\nsettings-preferences-arabic = Arabe (ar)\nsettings-api-access-title = Accès API\nsettings-api-access-api-key = Clé API\nsettings-api-access-copy = Copier\nsettings-api-access-description = Utilisez cette clé pour appeler l'API de benchmark par programmation.\nsettings-footer-cancel = Annuler\nsettings-footer-save-changes = Enregistrer\nteam-header-title = Notre équipe\nteam-header-description = Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fondatrice & lead ingénieur\nteam-grid-member1-bio = Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingénieur performance\nteam-grid-member2-bio = Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer advocate\nteam-grid-member3-bio = Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Développeur full-stack\nteam-grid-member4-bio = Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analyste de données\nteam-grid-member5-bio = Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community manager\nteam-grid-member6-bio = Contributions communautaires, partenariats et événements — gouvernance open source.\nnot-found-title = 404\nnot-found-description = Oups ! Page introuvable\nnot-found-return-home = Retour à l'accueil");
}
function qe(e) {
	let t = e.options || e;
	t.fluent = t.fluent || {}, t.fluent.es = new A("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Ir a GitHub\nheader-home = Inicio\nheader-methodology = Metodología\nheader-mock-pages = Páginas de prueba\nheader-products = Productos\nheader-pricing = Precios\nheader-team = Equipo\nheader-blog = Blog\nheader-careers = Carreras\nheader-faq = FAQ\nheader-contact = Contacto\nheader-settings = Ajustes\nfooter-title = i18n Benchmark\nfooter-description = Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.\nfooter-resources = Recursos\nfooter-github = GitHub\nfooter-methodology = Metodología\nfooter-contributing = Contribuir\nfooter-contact = Contacto\nfooter-built-with = i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.\ntheme-toggle-auto = Tema: Auto\ntheme-toggle-dark = Tema: Oscuro\ntheme-toggle-light = Tema: Claro\ntheme-toggle-label-auto = Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.\ntheme-toggle-label-other = Modo de tema: {mode}. Haz clic para cambiar de modo.\nmock-banner = ⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.\nhome-hero-view-results = Ver resultados\nhome-hero-methodology = Metodología\nhome-why-it-matters-title = Por qué son importantes estas métricas\nhome-why-it-matters-bundle-size-title = Tamaño del bundle\nhome-why-it-matters-bundle-size-desc = El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.\nhome-why-it-matters-rendering-title = Renderizado e hidratación\nhome-why-it-matters-rendering-desc = Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Carga dinámica\nhome-why-it-matters-dynamic-loading-desc = Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\nhome-understanding-impact-title = Entendiendo el impacto\nhome-understanding-impact-single-json-title = Por qué un solo JSON grande puede perjudicar el rendimiento\nhome-understanding-impact-single-json-intro = Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\nhome-understanding-impact-single-json-bullet1 = El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\nhome-understanding-impact-single-json-bullet2 = Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.\nhome-understanding-impact-single-json-bullet3 = Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\nhome-understanding-impact-trade-offs-title = Las compensaciones de la carga dinámica\nhome-understanding-impact-trade-offs-intro = Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\nhome-understanding-impact-waterfall-label = Solicitudes en cascada:\nhome-understanding-impact-waterfall-desc = la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.\nhome-understanding-impact-fouc-label = Parpadeo de contenido no traducido (FOUC):\nhome-understanding-impact-fouc-desc = los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\nhome-understanding-impact-cache-label = Invalidación de la caché:\nhome-understanding-impact-cache-desc = actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.\nhome-understanding-impact-measures-title = Qué mide este benchmark\nhome-understanding-impact-measures-desc = Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\nhome-results-table-title = Resultados de muestra\nhome-results-table-library = Biblioteca\nhome-results-table-bundle-size = Tamaño del bundle\nhome-results-table-lookup-time = Tiempo de búsqueda\nhome-results-table-lazy-loading = Carga diferida\nhome-results-table-yes = Sí\nhome-results-table-manual = Manual\nhome-results-table-built-in = Integrado\nabout-header-title = Acerca de este benchmark\nabout-header-description = Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.\nabout-grid-why-exists-title = Por qué existe esto\nabout-grid-why-exists-desc = Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.\nabout-grid-methodology-title = Metodología\nabout-grid-methodology-desc = La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.\nabout-what-we-measure-title = Qué medimos\nabout-what-we-measure-bundle-size-impact = Impacto en el tamaño del bundle\nabout-what-we-measure-bundle-size-impact-desc = Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\nabout-what-we-measure-rendering-overhead = Sobrecarga de renderizado\nabout-what-we-measure-rendering-overhead-desc = Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.\nabout-what-we-measure-hydration-cost = Coste de hidratación\nabout-what-we-measure-hydration-cost-desc = Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\nabout-what-we-measure-lazy-loading = Eficacia de la carga diferida\nabout-what-we-measure-lazy-loading-desc = Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).\nabout-what-we-measure-locale-switch = Velocidad de cambio de idioma\nabout-what-we-measure-locale-switch-desc = Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\nblog-header-title = Blog\nblog-header-description = Información, tutoriales y análisis de la comunidad i18n.\nblog-list-read-more = Leer más →\nblog-list-post1-title = Comparativa de bibliotecas i18n en 2026: Un análisis profundo\nblog-list-post1-date = 15 de marzo de 2026\nblog-list-post1-excerpt = Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Cómo reducir tu bundle i18n en un 60%\nblog-list-post2-date = 8 de marzo de 2026\nblog-list-post2-excerpt = Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = El estado de la internacionalización en React\nblog-list-post3-date = 28 de febrero de 2026\nblog-list-post3-excerpt = Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.\nblog-list-post3-category = Análisis\nblog-list-post4-title = Migración de react-i18next a Lingui\nblog-list-post4-date = 15 de febrero de 2026\nblog-list-post4-excerpt = Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: ¿Qué cambia?\nblog-list-post5-date = 1 de febrero de 2026\nblog-list-post5-excerpt = Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\nblog-list-post5-category = Análisis\nblog-list-post6-title = Metodología de benchmark: Cómo probamos\nblog-list-post6-date = 20 de enero de 2026\nblog-list-post6-excerpt = Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\nblog-list-post6-category = Meta\ncareers-header-title = Carreras\ncareers-header-description = Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.\ncareers-benefits-remote-label = Remoto primero\ncareers-benefits-remote-value = Trabaja desde cualquier lugar del mundo\ncareers-benefits-pay-label = Salario competitivo\ncareers-benefits-pay-value = Compensación superior a la del mercado\ncareers-benefits-oss-label = Tiempo para el código abierto\ncareers-benefits-oss-value = 20% del tiempo para contribuciones a OSS\ncareers-open-positions-title = Puestos vacantes\ncareers-open-positions-apply-now = Postular ahora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tiempo completo\ncareers-open-positions-part-time = Tiempo parcial\ncareers-open-positions-engineering = Ingeniería\ncareers-open-positions-documentation = Documentación\ncareers-open-positions-community = Comunidad\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Ingeniero Frontend Senior\ncareers-open-positions-frontend-desc = Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.\ncareers-open-positions-backend-title = Ingeniero Backend\ncareers-open-positions-backend-desc = Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.\ncareers-open-positions-writer-title = Redactor técnico\ncareers-open-positions-writer-desc = Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\ncareers-open-positions-devrel-title = Ingeniero de DevRel\ncareers-open-positions-devrel-desc = Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.\ncareers-open-positions-qa-title = Ingeniero de QA\ncareers-open-positions-qa-desc = Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.\ncontact-header-title = Ponte en contacto\ncontact-header-description = ¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en\ncontact-form-name = Nombre\ncontact-form-your-name = Tu nombre\ncontact-form-email = Correo electrónico\ncontact-form-email-placeholder = tu@ejemplo.com\ncontact-form-topic = Tema\ncontact-form-bug-report = Informe de error\ncontact-form-new-benchmark-idea = Nueva idea de benchmark\ncontact-form-methodology-question = Pregunta sobre la metodología\ncontact-form-contribution = Contribución\ncontact-form-other = Otro\ncontact-form-message = Mensaje\ncontact-form-message-placeholder = Describe tu pregunta o idea...\ncontact-form-send-message = Enviar mensaje\nfaq-header-title = Preguntas frecuentes\nfaq-header-description = Todo lo que necesitas saber sobre i18n Benchmark.\nfaq-list-q1 = ¿Qué es i18n Benchmark?\nfaq-list-a1 = i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\nfaq-list-q2 = ¿Cómo se realizan los benchmarks?\nfaq-list-a2 = Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.\nfaq-list-q3 = ¿Qué bibliotecas se admiten actualmente?\nfaq-list-a3 = Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\nfaq-list-q4 = ¿Puedo enviar mis propios benchmarks?\nfaq-list-a4 = ¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.\nfaq-list-q5 = ¿Con qué frecuencia se actualizan los benchmarks?\nfaq-list-a5 = Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\nfaq-list-q6 = ¿Son fiables los datos?\nfaq-list-a6 = Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.\nfaq-list-q7 = ¿Ofrecen servicios de consultoría?\nfaq-list-a7 = Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.\nfaq-list-q8 = ¿Cómo puedo contribuir?\nfaq-list-a8 = Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.\npricing-header-title = Precios sencillos y transparentes\npricing-header-description = Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = para siempre\npricing-tiers-starter-feature1 = 5 ejecuciones de benchmark al día\npricing-tiers-starter-feature2 = 3 bibliotecas\npricing-tiers-starter-feature3 = Soporte de la comunidad\npricing-tiers-starter-feature4 = Resultados públicos\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mes\npricing-tiers-pro-feature1 = Ejecuciones ilimitadas\npricing-tiers-pro-feature2 = Todas las bibliotecas\npricing-tiers-pro-feature3 = Soporte prioritario\npricing-tiers-pro-feature4 = Resultados privados\npricing-tiers-pro-feature5 = Integración CI\npricing-tiers-pro-feature6 = Datos históricos\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizado\npricing-tiers-enterprise-feature1 = Todo lo que hay en Pro\npricing-tiers-enterprise-feature2 = Opción on-premise\npricing-tiers-enterprise-feature3 = SSO y SAML\npricing-tiers-enterprise-feature4 = Gestor de cuentas dedicado\npricing-tiers-enterprise-feature5 = SLAs personalizados\npricing-tiers-enterprise-feature6 = Registros de auditoría\npricing-tiers-enterprise-feature7 = Sesiones de formación\npricing-tiers-contact-sales = Contactar con ventas\npricing-tiers-get-started = Empezar\nproducts-header-title = Productos\nproducts-header-description = Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.\nproducts-grid-learn-more = Más información\nproducts-grid-cli-name = CLI de Benchmark\nproducts-grid-cli-desc = Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.\nproducts-grid-cli-price = Gratis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\nproducts-grid-cloud-price = 29 $/mes\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\nproducts-grid-enterprise-price = Contáctanos\nproducts-grid-migration-name = Asistente de migración\nproducts-grid-migration-desc = Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.\nproducts-grid-migration-price = 99 $ pago único\nproducts-grid-qa-name = QA de traducción\nproducts-grid-qa-desc = Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\nproducts-grid-qa-price = 19 $/mes\nproducts-grid-optimizer-name = Optimizador de bundle\nproducts-grid-optimizer-desc = Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.\nproducts-grid-optimizer-price = 49 $/mes\nsettings-header-title = Ajustes\nsettings-header-description = Gestiona las preferencias y la configuración de tu cuenta.\nsettings-profile-title = Perfil\nsettings-profile-display-name = Nombre visible\nsettings-profile-email = Correo electrónico\nsettings-preferences-title = Preferencias\nsettings-preferences-email-notifications = Notificaciones por correo electrónico\nsettings-preferences-weekly-reports = Recibir informes semanales de benchmarks\nsettings-preferences-toggle-notifications = Cambiar notificaciones\nsettings-preferences-dark-mode = Modo oscuro\nsettings-preferences-dark-color-scheme = Usar esquema de colores oscuro\nsettings-preferences-toggle-dark-mode = Cambiar modo oscuro\nsettings-preferences-default-language = Idioma predeterminado\nsettings-preferences-english = Inglés (en)\nsettings-preferences-french = Francés (fr)\nsettings-preferences-german = Alemán (de)\nsettings-preferences-spanish = Español (es)\nsettings-preferences-japanese = Japonés (ja)\nsettings-preferences-chinese = Chino simplificado (zh-CN)\nsettings-preferences-arabic = Árabe (ar)\nsettings-api-access-title = Acceso API\nsettings-api-access-api-key = Llave API\nsettings-api-access-copy = Copiar\nsettings-api-access-description = Usa esta llave para acceder a la API de benchmarking de forma programática.\nsettings-footer-cancel = Cancelar\nsettings-footer-save-changes = Guardar cambios\nteam-header-title = Nuestro equipo\nteam-header-description = Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fundadora e ingeniera principal\nteam-grid-member1-bio = Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingeniero de rendimiento\nteam-grid-member2-bio = Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Desarrollador Full-Stack\nteam-grid-member4-bio = Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista de datos\nteam-grid-member5-bio = Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Responsable de la comunidad\nteam-grid-member6-bio = Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.\nnot-found-title = 404\nnot-found-description = ¡Ups! Página no encontrada\nnot-found-return-home = Volver al inicio");
}
function Je(e) {
	let t = e.options || e;
	t.fluent = t.fluent || {}, t.fluent.de = new A("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Zu GitHub\nheader-home = Home\nheader-methodology = Methodik\nheader-mock-pages = Testseiten\nheader-products = Produkte\nheader-pricing = Preise\nheader-team = Team\nheader-blog = Blog\nheader-careers = Karriere\nheader-faq = FAQ\nheader-contact = Kontakt\nheader-settings = Einstellungen\nfooter-title = i18n Benchmark\nfooter-description = Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.\nfooter-resources = Ressourcen\nfooter-github = GitHub\nfooter-methodology = Methodik\nfooter-contributing = Beitragen\nfooter-contact = Kontakt\nfooter-built-with = i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.\ntheme-toggle-auto = Thema: Auto\ntheme-toggle-dark = Thema: Dunkel\ntheme-toggle-light = Thema: Hell\ntheme-toggle-label-auto = Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.\ntheme-toggle-label-other = Themenmodus: {mode}. Klicken Sie hier, um den Modus zu wechseln.\nmock-banner = ⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.\nhome-hero-view-results = Ergebnisse anzeigen\nhome-hero-methodology = Methodik\nhome-why-it-matters-title = Warum diese Metriken wichtig sind\nhome-why-it-matters-bundle-size-title = Bundle-Größe\nhome-why-it-matters-bundle-size-desc = Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.\nhome-why-it-matters-rendering-title = Rendering & Hydrierung\nhome-why-it-matters-rendering-desc = Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\nhome-why-it-matters-dynamic-loading-title = Dynamisches Laden\nhome-why-it-matters-dynamic-loading-desc = Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.\nhome-understanding-impact-title = Die Auswirkungen verstehen\nhome-understanding-impact-single-json-title = Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\nhome-understanding-impact-single-json-intro = Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:\nhome-understanding-impact-single-json-bullet1 = Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.\nhome-understanding-impact-single-json-bullet2 = Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\nhome-understanding-impact-single-json-bullet3 = Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.\nhome-understanding-impact-trade-offs-title = Die Kompromisse beim dynamischen Laden\nhome-understanding-impact-trade-offs-intro = Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\nhome-understanding-impact-waterfall-label = Waterfall-Anfragen:\nhome-understanding-impact-waterfall-desc = Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.\nhome-understanding-impact-fouc-label = Flash of Untranslated Content (FOUC):\nhome-understanding-impact-fouc-desc = Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.\nhome-understanding-impact-cache-label = Cache-Invalidierung:\nhome-understanding-impact-cache-desc = Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\nhome-understanding-impact-measures-title = Was dieser Benchmark misst\nhome-understanding-impact-measures-desc = Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.\nhome-results-table-title = Beispielergebnisse\nhome-results-table-library = Bibliothek\nhome-results-table-bundle-size = Bundle-Größe\nhome-results-table-lookup-time = Lookup-Zeit\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Ja\nhome-results-table-manual = Manuell\nhome-results-table-built-in = Integriert\nabout-header-title = Über diesen Benchmark\nabout-header-description = Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.\nabout-grid-why-exists-title = Warum dies existiert\nabout-grid-why-exists-desc = Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.\nabout-grid-methodology-title = Methodik\nabout-grid-methodology-desc = Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.\nabout-what-we-measure-title = Was wir messen\nabout-what-we-measure-bundle-size-impact = Auswirkungen auf die Bundle-Größe\nabout-what-we-measure-bundle-size-impact-desc = Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.\nabout-what-we-measure-rendering-overhead = Rendering-Overhead\nabout-what-we-measure-rendering-overhead-desc = Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\nabout-what-we-measure-hydration-cost = Hydrierungskosten\nabout-what-we-measure-hydration-cost-desc = Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.\nabout-what-we-measure-lazy-loading = Effektivität von Lazy Loading\nabout-what-we-measure-lazy-loading-desc = Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\nabout-what-we-measure-locale-switch = Geschwindigkeit des Sprachwechsels\nabout-what-we-measure-locale-switch-desc = Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.\nblog-header-title = Blog\nblog-header-description = Einblicke, Tutorials und Analysen aus der i18n-Community.\nblog-list-read-more = Mehr lesen →\nblog-list-post1-title = Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick\nblog-list-post1-date = 15. März 2026\nblog-list-post1-excerpt = Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Wie Sie Ihr i18n-Bundle um 60 % reduzieren\nblog-list-post2-date = 8. März 2026\nblog-list-post2-excerpt = Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = Der Stand der Internationalisierung in React\nblog-list-post3-date = 28. Februar 2026\nblog-list-post3-excerpt = Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\nblog-list-post3-category = Analyse\nblog-list-post4-title = Migration von react-i18next zu Lingui\nblog-list-post4-date = 15. Februar 2026\nblog-list-post4-excerpt = Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components und i18n: Was ändert sich?\nblog-list-post5-date = 1. Februar 2026\nblog-list-post5-excerpt = React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\nblog-list-post5-category = Analyse\nblog-list-post6-title = Benchmark-Methodik: Wie wir testen\nblog-list-post6-date = 20. Januar 2026\nblog-list-post6-excerpt = Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\nblog-list-post6-category = Meta\ncareers-header-title = Karriere\ncareers-header-description = Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.\ncareers-benefits-remote-label = Remote-First\ncareers-benefits-remote-value = Arbeiten Sie von überall auf der Welt\ncareers-benefits-pay-label = Wettbewerbsfähige Bezahlung\ncareers-benefits-pay-value = Überdurchschnittliche Vergütung\ncareers-benefits-oss-label = Open-Source-Zeit\ncareers-benefits-oss-value = 20 % der Zeit für OSS-Beiträge\ncareers-open-positions-title = Offene Stellen\ncareers-open-positions-apply-now = Jetzt bewerben\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Vollzeit\ncareers-open-positions-part-time = Teilzeit\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Dokumentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.\ncareers-open-positions-backend-title = Backend-Ingenieur\ncareers-open-positions-backend-desc = Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.\ncareers-open-positions-writer-title = Technischer Redakteur\ncareers-open-positions-writer-desc = Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\ncareers-open-positions-devrel-title = DevRel-Ingenieur\ncareers-open-positions-devrel-desc = Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\ncareers-open-positions-qa-title = QA-Ingenieur\ncareers-open-positions-qa-desc = Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.\ncontact-header-title = Kontakt aufnehmen\ncontact-header-description = Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter\ncontact-form-name = Name\ncontact-form-your-name = Ihr Name\ncontact-form-email = E-Mail\ncontact-form-email-placeholder = ihre@beispiel.de\ncontact-form-topic = Thema\ncontact-form-bug-report = Fehlerbericht\ncontact-form-new-benchmark-idea = Neue Benchmark-Idee\ncontact-form-methodology-question = Frage zur Methodik\ncontact-form-contribution = Beitrag\ncontact-form-other = Sonstiges\ncontact-form-message = Nachricht\ncontact-form-message-placeholder = Beschreiben Sie Ihre Frage oder Idee...\ncontact-form-send-message = Nachricht senden\nfaq-header-title = Häufig gestellte Fragen\nfaq-header-description = Alles, was Sie über i18n Benchmark wissen müssen.\nfaq-list-q1 = Was ist i18n Benchmark?\nfaq-list-a1 = i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\nfaq-list-q2 = Wie werden Benchmarks durchgeführt?\nfaq-list-a2 = Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.\nfaq-list-q3 = Welche Bibliotheken werden derzeit unterstützt?\nfaq-list-a3 = Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\nfaq-list-q4 = Kann ich meine eigenen Benchmarks einreichen?\nfaq-list-a4 = Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.\nfaq-list-q5 = Wie oft werden Benchmarks aktualisiert?\nfaq-list-a5 = Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.\nfaq-list-q6 = Sind die Daten zuverlässig?\nfaq-list-a6 = Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\nfaq-list-q7 = Bieten Sie Beratungsdienstleistungen an?\nfaq-list-a7 = Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.\nfaq-list-q8 = Wie kann ich beitragen?\nfaq-list-a8 = Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.\npricing-header-title = Einfache, transparente Preisgestaltung\npricing-header-description = Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = für immer\npricing-tiers-starter-feature1 = 5 Benchmark-Durchläufe/Tag\npricing-tiers-starter-feature2 = 3 Bibliotheken\npricing-tiers-starter-feature3 = Community-Support\npricing-tiers-starter-feature4 = Öffentliche Ergebnisse\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /Monat\npricing-tiers-pro-feature1 = Unbegrenzte Durchläufe\npricing-tiers-pro-feature2 = Alle Bibliotheken\npricing-tiers-pro-feature3 = Priorisierter Support\npricing-tiers-pro-feature4 = Private Ergebnisse\npricing-tiers-pro-feature5 = CI-Integration\npricing-tiers-pro-feature6 = Historische Daten\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Individuell\npricing-tiers-enterprise-feature1 = Alles in Pro enthalten\npricing-tiers-enterprise-feature2 = On-Premise-Option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedizierter Account Manager\npricing-tiers-enterprise-feature5 = Individuelle SLAs\npricing-tiers-enterprise-feature6 = Audit-Protokolle\npricing-tiers-enterprise-feature7 = Schulungssitzungen\npricing-tiers-contact-sales = Vertrieb kontaktieren\npricing-tiers-get-started = Erste Schritte\nproducts-header-title = Produkte\nproducts-header-description = Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.\nproducts-grid-learn-more = Mehr erfahren\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\nproducts-grid-cli-price = Kostenlos\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.\nproducts-grid-cloud-price = 29 $/Monat\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.\nproducts-grid-enterprise-price = Kontaktieren Sie uns\nproducts-grid-migration-name = Migrationsassistent\nproducts-grid-migration-desc = KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.\nproducts-grid-migration-price = Einmalig 99 $\nproducts-grid-qa-name = Übersetzungs-QA\nproducts-grid-qa-desc = Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\nproducts-grid-qa-price = 19 $/Monat\nproducts-grid-optimizer-name = Bundle-Optimierer\nproducts-grid-optimizer-desc = Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\nproducts-grid-optimizer-price = 49 $/Monat\nsettings-header-title = Einstellungen\nsettings-header-description = Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.\nsettings-profile-title = Profil\nsettings-profile-display-name = Anzeigename\nsettings-profile-email = E-Mail\nsettings-preferences-title = Einstellungen\nsettings-preferences-email-notifications = E-Mail-Benachrichtigungen\nsettings-preferences-weekly-reports = Wöchentliche Benchmark-Berichte erhalten\nsettings-preferences-toggle-notifications = Benachrichtigungen umschalten\nsettings-preferences-dark-mode = Dunkelmodus\nsettings-preferences-dark-color-scheme = Dunkles Farbschema verwenden\nsettings-preferences-toggle-dark-mode = Dunkelmodus umschalten\nsettings-preferences-default-language = Standardsprache\nsettings-preferences-english = Englisch (en)\nsettings-preferences-french = Französisch (fr)\nsettings-preferences-german = Deutsch (de)\nsettings-preferences-spanish = Spanisch (es)\nsettings-preferences-japanese = Japanisch (ja)\nsettings-preferences-chinese = Chinesisch vereinfacht (zh-CN)\nsettings-preferences-arabic = Arabisch (ar)\nsettings-api-access-title = API-Zugriff\nsettings-api-access-api-key = API-Schlüssel\nsettings-api-access-copy = Kopieren\nsettings-api-access-description = Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.\nsettings-footer-cancel = Abbrechen\nsettings-footer-save-changes = Änderungen speichern\nteam-header-title = Unser Team\nteam-header-description = Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Gründerin & Leitende Ingenieurin\nteam-grid-member1-bio = Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance-Ingenieur\nteam-grid-member2-bio = Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack-Entwickler\nteam-grid-member4-bio = Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Datenanalyst\nteam-grid-member5-bio = Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\nnot-found-title = 404\nnot-found-description = Hoppla! Seite nicht gefunden\nnot-found-return-home = Zurück zur Startseite");
}
function Ye(e) {
	let t = e.options || e;
	t.fluent = t.fluent || {}, t.fluent.it = new A("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Vai su GitHub\nheader-home = Home\nheader-methodology = Metodologia\nheader-mock-pages = Pagine di test\nheader-products = Prodotti\nheader-pricing = Prezzi\nheader-team = Team\nheader-blog = Blog\nheader-careers = Carriere\nheader-faq = FAQ\nheader-contact = Contatti\nheader-settings = Impostazioni\nfooter-title = i18n Benchmark\nfooter-description = Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.\nfooter-resources = Risorse\nfooter-github = GitHub\nfooter-methodology = Metodologia\nfooter-contributing = Contribuire\nfooter-contact = Contatti\nfooter-built-with = i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.\ntheme-toggle-auto = Tema: Auto\ntheme-toggle-dark = Tema: Scuro\ntheme-toggle-light = Tema: Chiaro\ntheme-toggle-label-auto = Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.\ntheme-toggle-label-other = Modalità tema: {mode}. Clicca per cambiare modalità.\nmock-banner = ⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.\nhome-hero-view-results = Visualizza i risultati\nhome-hero-methodology = Metodologia\nhome-why-it-matters-title = Perché queste metriche sono importanti\nhome-why-it-matters-bundle-size-title = Dimensione del bundle\nhome-why-it-matters-bundle-size-desc = Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\nhome-why-it-matters-rendering-title = Rendering e idratazione\nhome-why-it-matters-rendering-desc = Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Caricamento dinamico\nhome-why-it-matters-dynamic-loading-desc = Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\nhome-understanding-impact-title = Capire l'impatto\nhome-understanding-impact-single-json-title = Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\nhome-understanding-impact-single-json-intro = Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\nhome-understanding-impact-single-json-bullet1 = Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.\nhome-understanding-impact-single-json-bullet2 = Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\nhome-understanding-impact-single-json-bullet3 = Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.\nhome-understanding-impact-trade-offs-title = I compromessi del caricamento dinamico\nhome-understanding-impact-trade-offs-intro = La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\nhome-understanding-impact-waterfall-label = Richieste a cascata:\nhome-understanding-impact-waterfall-desc = l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.\nhome-understanding-impact-fouc-label = Flash di contenuti non tradotti (FOUC):\nhome-understanding-impact-fouc-desc = gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\nhome-understanding-impact-cache-label = Invalidazione della cache:\nhome-understanding-impact-cache-desc = l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.\nhome-understanding-impact-measures-title = Cosa misura questo benchmark\nhome-understanding-impact-measures-desc = Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\nhome-results-table-title = Risultati di esempio\nhome-results-table-library = Libreria\nhome-results-table-bundle-size = Dimensione del bundle\nhome-results-table-lookup-time = Tempo di ricerca\nhome-results-table-lazy-loading = Caricamento lazy\nhome-results-table-yes = Sì\nhome-results-table-manual = Manuale\nhome-results-table-built-in = Integrato\nabout-header-title = Informazioni su questo benchmark\nabout-header-description = Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.\nabout-grid-why-exists-title = Perché esiste\nabout-grid-why-exists-desc = Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\nabout-grid-methodology-title = Metodologia\nabout-grid-methodology-desc = La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\nabout-what-we-measure-title = Cosa misuriamo\nabout-what-we-measure-bundle-size-impact = Impatto sulla dimensione del bundle\nabout-what-we-measure-bundle-size-impact-desc = I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.\nabout-what-we-measure-rendering-overhead = Sovrapprezzo di rendering\nabout-what-we-measure-rendering-overhead-desc = Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\nabout-what-we-measure-hydration-cost = Costo di idratazione\nabout-what-we-measure-hydration-cost-desc = Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.\nabout-what-we-measure-lazy-loading = Efficacia del caricamento pigro\nabout-what-we-measure-lazy-loading-desc = Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).\nabout-what-we-measure-locale-switch = Velocità di cambio lingua\nabout-what-we-measure-locale-switch-desc = Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.\nblog-header-title = Blog\nblog-header-description = Approfondimenti, tutorial e analisi dalla comunità i18n.\nblog-list-read-more = Leggi di più →\nblog-list-post1-title = Confronto delle librerie i18n nel 2026: un'analisi approfondita\nblog-list-post1-date = 15 marzo 2026\nblog-list-post1-excerpt = Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Come ridurre il bundle i18n del 60%\nblog-list-post2-date = 8 marzo 2026\nblog-list-post2-excerpt = Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = Lo stato dell'internazionalizzazione in React\nblog-list-post3-date = 28 febbraio 2026\nblog-list-post3-excerpt = Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\nblog-list-post3-category = Analisi\nblog-list-post4-title = Migrazione da react-i18next a Lingui\nblog-list-post4-date = 15 febbraio 2026\nblog-list-post4-excerpt = Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: cosa cambia?\nblog-list-post5-date = 1 febbraio 2026\nblog-list-post5-excerpt = I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\nblog-list-post5-category = Analisi\nblog-list-post6-title = Metodologia del benchmark: come testiamo\nblog-list-post6-date = 20 gennaio 2026\nblog-list-post6-excerpt = Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.\nblog-list-post6-category = Meta\ncareers-header-title = Carriere\ncareers-header-description = Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Lavora da qualsiasi parte del mondo\ncareers-benefits-pay-label = Retribuzione competitiva\ncareers-benefits-pay-value = Compensazione ai vertici del mercato\ncareers-benefits-oss-label = Tempo per l'open source\ncareers-benefits-oss-value = 20% del tempo per contributi open source\ncareers-open-positions-title = Posizioni aperte\ncareers-open-positions-apply-now = Candidati ora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tempo pieno\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentazione\ncareers-open-positions-community = Comunità\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Ingegnere Frontend Senior\ncareers-open-positions-frontend-desc = Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.\ncareers-open-positions-writer-title = Scrittore tecnico\ncareers-open-positions-writer-desc = Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\ncareers-open-positions-devrel-title = Ingegnere DevRel\ncareers-open-positions-devrel-desc = Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.\ncareers-open-positions-qa-title = Ingegnere QA\ncareers-open-positions-qa-desc = Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\ncontact-header-title = Contattaci\ncontact-header-description = Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo\ncontact-form-name = Nome\ncontact-form-your-name = Il tuo nome\ncontact-form-email = Email\ncontact-form-email-placeholder = tu@esempio.com\ncontact-form-topic = Argomento\ncontact-form-bug-report = Segnalazione bug\ncontact-form-new-benchmark-idea = Nuova idea di benchmark\ncontact-form-methodology-question = Domanda sulla metodologia\ncontact-form-contribution = Contributo\ncontact-form-other = Altro\ncontact-form-message = Messaggio\ncontact-form-message-placeholder = Descrivi la tua domanda o idea...\ncontact-form-send-message = Invia messaggio\nfaq-header-title = Domande frequenti\nfaq-header-description = Tutto quello che c'è da sapere su i18n Benchmark.\nfaq-list-q1 = Cos'è i18n Benchmark?\nfaq-list-a1 = i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.\nfaq-list-q2 = Come vengono condotti i benchmark?\nfaq-list-a2 = Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.\nfaq-list-q3 = Quali librerie sono attualmente supportate?\nfaq-list-a3 = Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\nfaq-list-q4 = Posso inviare i miei benchmark?\nfaq-list-a4 = Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.\nfaq-list-q5 = Con quale frequenza vengono aggiornati i benchmark?\nfaq-list-a5 = Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.\nfaq-list-q6 = I dati sono affidabili?\nfaq-list-a6 = Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.\nfaq-list-q7 = Offrite servizi di consulenza?\nfaq-list-a7 = Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.\nfaq-list-q8 = Come posso contribuire?\nfaq-list-a8 = Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\npricing-header-title = Prezzi semplici e trasparenti\npricing-header-description = Scegli il piano più adatto al tuo team. Nessun costo nascosto.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = per sempre\npricing-tiers-starter-feature1 = 5 esecuzioni benchmark al giorno\npricing-tiers-starter-feature2 = 3 librerie\npricing-tiers-starter-feature3 = Supporto della comunità\npricing-tiers-starter-feature4 = Risultati pubblici\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mese\npricing-tiers-pro-feature1 = Esecuzioni illimitate\npricing-tiers-pro-feature2 = Tutte le librerie\npricing-tiers-pro-feature3 = Supporto prioritario\npricing-tiers-pro-feature4 = Risultati privati\npricing-tiers-pro-feature5 = Integrazione CI\npricing-tiers-pro-feature6 = Dati storici\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizzato\npricing-tiers-enterprise-feature1 = Tutto quello che c'è in Pro\npricing-tiers-enterprise-feature2 = Opzione on-premise\npricing-tiers-enterprise-feature3 = SSO e SAML\npricing-tiers-enterprise-feature4 = Account manager dedicato\npricing-tiers-enterprise-feature5 = SLA personalizzati\npricing-tiers-enterprise-feature6 = Log di controllo\npricing-tiers-enterprise-feature7 = Sessioni di formazione\npricing-tiers-contact-sales = Contatta l'ufficio vendite\npricing-tiers-get-started = Inizia ora\nproducts-header-title = Prodotti\nproducts-header-description = Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.\nproducts-grid-learn-more = Scopri di più\nproducts-grid-cli-name = CLI del Benchmark\nproducts-grid-cli-desc = Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\nproducts-grid-cli-price = Gratis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.\nproducts-grid-cloud-price = 29 $/mese\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.\nproducts-grid-enterprise-price = Contattaci\nproducts-grid-migration-name = Assistente alla migrazione\nproducts-grid-migration-desc = Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.\nproducts-grid-migration-price = 99 $ una tantum\nproducts-grid-qa-name = QA delle traduzioni\nproducts-grid-qa-desc = Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\nproducts-grid-qa-price = 19 $/mese\nproducts-grid-optimizer-name = Ottimizzatore del bundle\nproducts-grid-optimizer-desc = Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\nproducts-grid-optimizer-price = 49 $/mese\nsettings-header-title = Impostazioni\nsettings-header-description = Gestisci le preferenze del tuo account e la configurazione.\nsettings-profile-title = Profilo\nsettings-profile-display-name = Nome visualizzato\nsettings-profile-email = Email\nsettings-preferences-title = Preferenze\nsettings-preferences-email-notifications = Notifiche via email\nsettings-preferences-weekly-reports = Ricevi rapporti settimanali sui benchmark\nsettings-preferences-toggle-notifications = Attiva/disattiva notifiche\nsettings-preferences-dark-mode = Modalità scura\nsettings-preferences-dark-color-scheme = Usa lo schema colori scuro\nsettings-preferences-toggle-dark-mode = Attiva/disattiva modalità scura\nsettings-preferences-default-language = Lingua predefinita\nsettings-preferences-english = Inglese (en)\nsettings-preferences-french = Francese (fr)\nsettings-preferences-german = Tedesco (de)\nsettings-preferences-spanish = Spagnolo (es)\nsettings-preferences-japanese = Giapponese (ja)\nsettings-preferences-chinese = Cinese semplificato (zh-CN)\nsettings-preferences-arabic = Arabo (ar)\nsettings-api-access-title = Accesso API\nsettings-api-access-api-key = Chiave API\nsettings-api-access-copy = Copia\nsettings-api-access-description = Usa questa chiave per accedere programmaticamente alle API di benchmarking.\nsettings-footer-cancel = Annulla\nsettings-footer-save-changes = Salva modifiche\nteam-header-title = Il nostro team\nteam-header-description = Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fondatrice e Responsabile tecnico\nteam-grid-member1-bio = Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingegnere delle prestazioni\nteam-grid-member2-bio = Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Sviluppatore Full-Stack\nteam-grid-member4-bio = Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista dati\nteam-grid-member5-bio = Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Responsable della comunità\nteam-grid-member6-bio = Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\nnot-found-title = 404\nnot-found-description = Ops! Pagina non trovata\nnot-found-return-home = Torna alla Home");
}
function Xe(e) {
	let t = e.options || e;
	t.fluent = t.fluent || {}, t.fluent.pt = new A("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Ir para o GitHub\nheader-home = Início\nheader-methodology = Metodologia\nheader-mock-pages = Páginas de Teste\nheader-products = Produtos\nheader-pricing = Preços\nheader-team = Equipe\nheader-blog = Blog\nheader-careers = Carreiras\nheader-faq = FAQ\nheader-contact = Contato\nheader-settings = Configurações\nfooter-title = i18n Benchmark\nfooter-description = Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.\nfooter-resources = Recursos\nfooter-github = GitHub\nfooter-methodology = Metodologia\nfooter-contributing = Contribuindo\nfooter-contact = Contato\nfooter-built-with = i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.\ntheme-toggle-auto = Tema: Automático\ntheme-toggle-dark = Tema: Escuro\ntheme-toggle-light = Tema: Claro\ntheme-toggle-label-auto = Modo de tema: auto (sistema). Clique para mudar para o modo claro.\ntheme-toggle-label-other = Modo de tema: {mode}. Clique para mudar de modo.\nmock-banner = ⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.\nhome-hero-view-results = Ver Resultados\nhome-hero-methodology = Metodologia\nhome-why-it-matters-title = Por que estas métricas importam\nhome-why-it-matters-bundle-size-title = Tamanho do bundle\nhome-why-it-matters-bundle-size-desc = O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.\nhome-why-it-matters-rendering-title = Renderização e hidratação\nhome-why-it-matters-rendering-desc = Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Carregamento dinâmico\nhome-why-it-matters-dynamic-loading-desc = Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\nhome-understanding-impact-title = Entendendo o impacto\nhome-understanding-impact-single-json-title = Por que um único JSON grande pode prejudicar o desempenho\nhome-understanding-impact-single-json-intro = Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\nhome-understanding-impact-single-json-bullet1 = O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\nhome-understanding-impact-single-json-bullet2 = Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\nhome-understanding-impact-single-json-bullet3 = Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\nhome-understanding-impact-trade-offs-title = Os trade-offs do carregamento dinâmico\nhome-understanding-impact-trade-offs-intro = Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:\nhome-understanding-impact-waterfall-label = Requisições em cascata:\nhome-understanding-impact-waterfall-desc = o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.\nhome-understanding-impact-fouc-label = Flash de conteúdo não traduzido (FOUC):\nhome-understanding-impact-fouc-desc = usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.\nhome-understanding-impact-cache-label = Invalidação de cache:\nhome-understanding-impact-cache-desc = atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.\nhome-understanding-impact-measures-title = O que este benchmark mede\nhome-understanding-impact-measures-desc = Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.\nhome-results-table-title = Resultados de exemplo\nhome-results-table-library = Biblioteca\nhome-results-table-bundle-size = Tamanho do Bundle\nhome-results-table-lookup-time = Tempo de Busca\nhome-results-table-lazy-loading = Carregamento Lento\nhome-results-table-yes = Sim\nhome-results-table-manual = Manual\nhome-results-table-built-in = Integrado\nabout-header-title = Sobre este benchmark\nabout-header-description = Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.\nabout-grid-why-exists-title = Por que isto existe\nabout-grid-why-exists-desc = Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\nabout-grid-methodology-title = Metodologia\nabout-grid-methodology-desc = O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.\nabout-what-we-measure-title = O que medimos\nabout-what-we-measure-bundle-size-impact = Impacto no tamanho do bundle\nabout-what-we-measure-bundle-size-impact-desc = Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\nabout-what-we-measure-rendering-overhead = Sobrecarga de renderização\nabout-what-we-measure-rendering-overhead-desc = Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.\nabout-what-we-measure-hydration-cost = Custo de hidratação\nabout-what-we-measure-hydration-cost-desc = Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.\nabout-what-we-measure-lazy-loading = Eficácia do carregamento lento\nabout-what-we-measure-lazy-loading-desc = Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).\nabout-what-we-measure-locale-switch = Velocidade de troca de localidade\nabout-what-we-measure-locale-switch-desc = Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutoriais e análises da comunidade i18n.\nblog-list-read-more = Ler Mais →\nblog-list-post1-title = Comparando bibliotecas i18n em 2026: um mergulho profundo\nblog-list-post1-date = 15 de março de 2026\nblog-list-post1-excerpt = Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Como reduzir seu bundle i18n em 60%\nblog-list-post2-date = 8 de março de 2026\nblog-list-post2-excerpt = Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = O estado da internacionalização no React\nblog-list-post3-date = 28 de fevereiro de 2026\nblog-list-post3-excerpt = Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\nblog-list-post3-category = Análise\nblog-list-post4-title = Migrando de react-i18next para o Lingui\nblog-list-post4-date = 15 de fevereiro de 2026\nblog-list-post4-excerpt = Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: o que muda?\nblog-list-post5-date = 1 de fevereiro de 2026\nblog-list-post5-excerpt = React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.\nblog-list-post5-category = Análise\nblog-list-post6-title = Metodologia de benchmark: como testamos\nblog-list-post6-date = 20 de janeiro de 2026\nblog-list-post6-excerpt = Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\nblog-list-post6-category = Meta\ncareers-header-title = Carreiras\ncareers-header-description = Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.\ncareers-benefits-remote-label = Remoto primeiro\ncareers-benefits-remote-value = Trabalhe de qualquer lugar do mundo\ncareers-benefits-pay-label = Salário competitivo\ncareers-benefits-pay-value = Remuneração acima do mercado\ncareers-benefits-oss-label = Tempo para o código aberto\ncareers-benefits-oss-value = 20% do tempo para contribuições OSS\ncareers-open-positions-title = Vagas abertas\ncareers-open-positions-apply-now = Candidatar-se agora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tempo integral\ncareers-open-positions-part-time = Tempo parcial\ncareers-open-positions-engineering = Engenharia\ncareers-open-positions-documentation = Documentação\ncareers-open-positions-community = Comunidade\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Engenheiro Frontend Sênior\ncareers-open-positions-frontend-desc = Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\ncareers-open-positions-backend-title = Engenheiro Backend\ncareers-open-positions-backend-desc = Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.\ncareers-open-positions-writer-title = Redator técnico\ncareers-open-positions-writer-desc = Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\ncareers-open-positions-devrel-title = Engenheiro de DevRel\ncareers-open-positions-devrel-desc = Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.\ncareers-open-positions-qa-title = Engenheiro de QA\ncareers-open-positions-qa-desc = Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.\ncontact-header-title = Entre em contato\ncontact-header-description = Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em\ncontact-form-name = Nome\ncontact-form-your-name = Seu nome\ncontact-form-email = E-mail\ncontact-form-email-placeholder = voce@exemplo.com\ncontact-form-topic = Assunto\ncontact-form-bug-report = Relatório de bug\ncontact-form-new-benchmark-idea = Nova ideia de benchmark\ncontact-form-methodology-question = Pergunta sobre metodologia\ncontact-form-contribution = Contribuição\ncontact-form-other = Outro\ncontact-form-message = Mensagem\ncontact-form-message-placeholder = Descreva sua pergunta ou ideia...\ncontact-form-send-message = Enviar mensagem\nfaq-header-title = Perguntas frequentes\nfaq-header-description = Tudo o que você precisa saber sobre o i18n Benchmark.\nfaq-list-q1 = O que é o i18n Benchmark?\nfaq-list-a1 = O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.\nfaq-list-q2 = Como os benchmarks são conduzidos?\nfaq-list-a2 = Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.\nfaq-list-q3 = Quais bibliotecas são suportadas atualmente?\nfaq-list-a3 = Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\nfaq-list-q4 = Posso enviar meus próprios benchmarks?\nfaq-list-a4 = Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\nfaq-list-q5 = Com que frequência os benchmarks são atualizados?\nfaq-list-a5 = Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.\nfaq-list-q6 = Os dados são confiáveis?\nfaq-list-a6 = Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\nfaq-list-q7 = Vocês oferecem serviços de consultoria?\nfaq-list-a7 = Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.\nfaq-list-q8 = Como posso contribuir?\nfaq-list-a8 = Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.\npricing-header-title = Preços simples e transparentes\npricing-header-description = Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = para sempre\npricing-tiers-starter-feature1 = 5 execuções de benchmark/dia\npricing-tiers-starter-feature2 = 3 bibliotecas\npricing-tiers-starter-feature3 = Suporte da comunidade\npricing-tiers-starter-feature4 = Resultados públicos\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mês\npricing-tiers-pro-feature1 = Execuções ilimitadas\npricing-tiers-pro-feature2 = Todas as bibliotecas\npricing-tiers-pro-feature3 = Suporte prioritário\npricing-tiers-pro-feature4 = Resultados privados\npricing-tiers-pro-feature5 = Integração CI\npricing-tiers-pro-feature6 = Dados históricos\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizado\npricing-tiers-enterprise-feature1 = Tudo o que está no Pro\npricing-tiers-enterprise-feature2 = Opção on-premise\npricing-tiers-enterprise-feature3 = SSO e SAML\npricing-tiers-enterprise-feature4 = Gerente de conta dedicado\npricing-tiers-enterprise-feature5 = SLAs personalizados\npricing-tiers-enterprise-feature6 = Logs de auditoria\npricing-tiers-enterprise-feature7 = Sessões de treinamento\npricing-tiers-contact-sales = Contatar vendas\npricing-tiers-get-started = Começar\nproducts-header-title = Produtos\nproducts-header-description = Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.\nproducts-grid-learn-more = Saiba Mais\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.\nproducts-grid-cli-price = Grátis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\nproducts-grid-cloud-price = 29 $/mês\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\nproducts-grid-enterprise-price = Contate-nos\nproducts-grid-migration-name = Assistente de migração\nproducts-grid-migration-desc = Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.\nproducts-grid-migration-price = 99 $ taxa única\nproducts-grid-qa-name = QA de tradução\nproducts-grid-qa-desc = Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.\nproducts-grid-qa-price = 19 $/mês\nproducts-grid-optimizer-name = Otimizador de bundle\nproducts-grid-optimizer-desc = Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\nproducts-grid-optimizer-price = 49 $/mês\nsettings-header-title = Configurações\nsettings-header-description = Gerencie suas preferências de conta e configuração.\nsettings-profile-title = Perfil\nsettings-profile-display-name = Nome de exibição\nsettings-profile-email = E-mail\nsettings-preferences-title = Preferências\nsettings-preferences-email-notifications = Notificações por e-mail\nsettings-preferences-weekly-reports = Receber relatórios semanais de benchmarks\nsettings-preferences-toggle-notifications = Alternar notificações\nsettings-preferences-dark-mode = Modo Escuro\nsettings-preferences-dark-color-scheme = Usar esquema de cores escuro\nsettings-preferences-toggle-dark-mode = Alternar modo escuro\nsettings-preferences-default-language = Idioma padrão\nsettings-preferences-english = Inglês (en)\nsettings-preferences-french = Francés (fr)\nsettings-preferences-german = Alemão (de)\nsettings-preferences-spanish = Espanhol (es)\nsettings-preferences-japanese = Japonês (ja)\nsettings-preferences-chinese = Chinês Simplificado (zh-CN)\nsettings-preferences-arabic = Árabe (ar)\nsettings-api-access-title = Acesso API\nsettings-api-access-api-key = Chave API\nsettings-api-access-copy = Copiar\nsettings-api-access-description = Use esta chave para acessar a API de benchmarking programaticamente.\nsettings-footer-cancel = Cancelar\nsettings-footer-save-changes = Salvar alterações\nteam-header-title = Nossa equipe\nteam-header-description = Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fundadora e Engenheira Líder\nteam-grid-member1-bio = Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Engenheiro de performance\nteam-grid-member2-bio = Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Desenvolvedor Full-Stack\nteam-grid-member4-bio = Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista de dados\nteam-grid-member5-bio = Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Gerente de comunidade\nteam-grid-member6-bio = Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\nnot-found-title = 404\nnot-found-description = Ops! Página não encontrada\nnot-found-return-home = Voltar para o início");
}
function Ze(e) {
	let t = e.options || e;
	t.fluent = t.fluent || {}, t.fluent.zh = new A("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = 前往 GitHub\nheader-home = 首页\nheader-methodology = 方法论\nheader-mock-pages = 模拟页面\nheader-products = 产品\nheader-pricing = 价格\nheader-team = 团队\nheader-blog = 博客\nheader-careers = 招聘\nheader-faq = 常见问题\nheader-contact = 联系我们\nheader-settings = 设置\nfooter-title = i18n Benchmark\nfooter-description = 一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。\nfooter-resources = 资源\nfooter-github = GitHub\nfooter-methodology = 方法论\nfooter-contributing = 贡献\nfooter-contact = 联系我们\nfooter-built-with = i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。\ntheme-toggle-auto = 主题：自动\ntheme-toggle-dark = 主题：深色\ntheme-toggle-light = 主题：浅色\ntheme-toggle-label-auto = 主题模式：自动（系统）。点击切换到浅色模式。\ntheme-toggle-label-other = 主题模式：{mode}。点击切换模式。\nmock-banner = ⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。\nhome-hero-title = i18n Benchmark\nhome-hero-description = 一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。\nhome-hero-view-results = 查看结果\nhome-hero-methodology = 方法论\nhome-why-it-matters-title = 为什么这些指标很重要\nhome-why-it-matters-bundle-size-title = 包大小\nhome-why-it-matters-bundle-size-desc = 包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\nhome-why-it-matters-rendering-title = 渲染与注水\nhome-why-it-matters-rendering-desc = 将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。\nhome-why-it-matters-dynamic-loading-title = 动态加载\nhome-why-it-matters-dynamic-loading-desc = 预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\nhome-understanding-impact-title = 理解影响\nhome-understanding-impact-single-json-title = 为什么单个大型 JSON 会损害性能\nhome-understanding-impact-single-json-intro = 许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：\nhome-understanding-impact-single-json-bullet1 = 每次页面加载时都必须解析 JSON — 阻塞主线程。\nhome-understanding-impact-single-json-bullet2 = 当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。\nhome-understanding-impact-single-json-bullet3 = 在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。\nhome-understanding-impact-trade-offs-title = 动态加载的权衡\nhome-understanding-impact-trade-offs-intro = 将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：\nhome-understanding-impact-waterfall-label = 瀑布流请求：\nhome-understanding-impact-waterfall-desc = 应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。\nhome-understanding-impact-fouc-label = 未翻译内容闪烁 (FOUC)：\nhome-understanding-impact-fouc-desc = 在块到达之前，用户可能会短暂看到翻译键或回退语言。\nhome-understanding-impact-cache-label = 缓存失效：\nhome-understanding-impact-cache-desc = 更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。\nhome-understanding-impact-measures-title = 此基准测试衡量的内容\nhome-understanding-impact-measures-desc = 此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。\nhome-results-table-title = 示例结果\nhome-results-table-library = 库\nhome-results-table-bundle-size = 包大小\nhome-results-table-lookup-time = 查找时间\nhome-results-table-lazy-loading = 延迟加载\nhome-results-table-yes = 是\nhome-results-table-manual = 手动\nhome-results-table-built-in = 内置\nabout-header-title = 关于此基准测试\nabout-header-description = 这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。\nabout-grid-why-exists-title = 为什么存在这个测试\nabout-grid-why-exists-desc = 选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。\nabout-grid-methodology-title = 方法论\nabout-grid-methodology-desc = 相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。\nabout-what-we-measure-title = 衡量指标\nabout-what-we-measure-bundle-size-impact = 包大小影响\nabout-what-we-measure-bundle-size-impact-desc = 包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。\nabout-what-we-measure-rendering-overhead = 渲染开销\nabout-what-we-measure-rendering-overhead-desc = 库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。\nabout-what-we-measure-hydration-cost = 注水成本\nabout-what-we-measure-hydration-cost-desc = 在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。\nabout-what-we-measure-lazy-loading = 延迟加载有效性\nabout-what-we-measure-lazy-loading-desc = 按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。\nabout-what-we-measure-locale-switch = 语言环境切换速度\nabout-what-we-measure-locale-switch-desc = 应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。\nblog-header-title = 博客\nblog-header-description = 来自 i18n 社区的见解、教程和分析。\nblog-list-read-more = 阅读更多 →\nblog-list-post1-title = 2026 年 i18n 库对比：深度分析\nblog-list-post1-date = 2026年3月15日\nblog-list-post1-excerpt = 我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。\nblog-list-post1-category = 基准测试\nblog-list-post2-title = 如何将 i18n 包大小减少 60%\nblog-list-post2-date = 2026年3月8日\nblog-list-post2-excerpt = 优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\nblog-list-post2-category = 教程\nblog-list-post3-title = React 国际化现状\nblog-list-post3-date = 2026年2月28日\nblog-list-post3-excerpt = React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。\nblog-list-post3-category = 分析\nblog-list-post4-title = 从 react-i18next 迁移到 Lingui\nblog-list-post4-date = 2026年2月15日\nblog-list-post4-excerpt = 关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。\nblog-list-post4-category = 教程\nblog-list-post5-title = Server Components 与 i18n：发生了什么变化？\nblog-list-post5-date = 2026年2月1日\nblog-list-post5-excerpt = React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\nblog-list-post5-category = 分析\nblog-list-post6-title = 基准测试方法论：我们如何测试\nblog-list-post6-date = 2026年1月20日\nblog-list-post6-excerpt = 透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。\nblog-list-post6-category = Meta\ncareers-header-title = 招聘\ncareers-header-description = 加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。\ncareers-benefits-remote-label = 远程优先\ncareers-benefits-remote-value = 在世界任何地方工作\ncareers-benefits-pay-label = 具有竞争力的薪酬\ncareers-benefits-pay-value = 市场顶尖的薪资水平\ncareers-benefits-oss-label = 开源时间\ncareers-benefits-oss-value = 20% 的时间用于 OSS 贡献\ncareers-open-positions-title = 开放职位\ncareers-open-positions-apply-now = 立即申请\ncareers-open-positions-remote = 远程\ncareers-open-positions-full-time = 全职\ncareers-open-positions-part-time = 兼职\ncareers-open-positions-engineering = 工程\ncareers-open-positions-documentation = 文档\ncareers-open-positions-community = 社区\ncareers-open-positions-sf-remote = 旧金山 / 远程\ncareers-open-positions-frontend-title = 高级前端工程师\ncareers-open-positions-frontend-desc = 使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\ncareers-open-positions-backend-title = 后端工程师\ncareers-open-positions-backend-desc = 设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。\ncareers-open-positions-writer-title = 技术作家\ncareers-open-positions-writer-desc = 为我们的基准测试平台编写全面的指南、API 参考和教程。\ncareers-open-positions-devrel-title = DevRel 工程师\ncareers-open-positions-devrel-desc = 通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\ncareers-open-positions-qa-title = QA 工程师\ncareers-open-positions-qa-desc = 通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。\ncontact-header-title = 取得联系\ncontact-header-description = 有想法、发现了错误或想贡献基准测试？请联系我们：\ncontact-form-name = 姓名\ncontact-form-your-name = 您的姓名\ncontact-form-email = 电子邮件\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = 主题\ncontact-form-bug-report = 错误报告\ncontact-form-new-benchmark-idea = 新基准测试想法\ncontact-form-methodology-question = 方法论问题\ncontact-form-contribution = 贡献\ncontact-form-other = 其他\ncontact-form-message = 消息\ncontact-form-message-placeholder = 描述您的问题或想法...\ncontact-form-send-message = 发送消息\nfaq-header-title = 常见问题\nfaq-header-description = 关于 i18n 基准测试您需要了解的一切。\nfaq-list-q1 = 什么是 i18n 基准测试？\nfaq-list-a1 = i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。\nfaq-list-q2 = 基准测试是如何进行的？\nfaq-list-a2 = 我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。\nfaq-list-q3 = 目前支持哪些库？\nfaq-list-a3 = 我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。\nfaq-list-q4 = 我可以提交我自己的基准测试吗？\nfaq-list-a4 = 是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。\nfaq-list-q5 = 基准测试多久更新一次？\nfaq-list-a5 = 我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。\nfaq-list-q6 = 数据可靠吗？\nfaq-list-a6 = 我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\nfaq-list-q7 = 你们提供咨询服务吗？\nfaq-list-a7 = 是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。\nfaq-list-q8 = 我该如何贡献？\nfaq-list-a8 = 有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\npricing-header-title = 简单透明的定价\npricing-header-description = 选择适合您团队的计划。无隐藏费用。\npricing-tiers-starter-name = 入门版\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = 永久\npricing-tiers-starter-feature1 = 每天 5 次基准测试运行\npricing-tiers-starter-feature2 = 3 个库\npricing-tiers-starter-feature3 = 社区支持\npricing-tiers-starter-feature4 = 公开结果\npricing-tiers-pro-name = 专业版\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /月\npricing-tiers-pro-feature1 = 无限次运行\npricing-tiers-pro-feature2 = 所有库\npricing-tiers-pro-feature3 = 优先支持\npricing-tiers-pro-feature4 = 私有结果\npricing-tiers-pro-feature5 = CI 集成\npricing-tiers-pro-feature6 = 历史数据\npricing-tiers-enterprise-name = 企业版\npricing-tiers-enterprise-price = 定制\npricing-tiers-enterprise-feature1 = 包含专业版中的所有功能\npricing-tiers-enterprise-feature2 = 本地部署选项\npricing-tiers-enterprise-feature3 = SSO 和 SAML\npricing-tiers-enterprise-feature4 = 专属客户经理\npricing-tiers-enterprise-feature5 = 定制 SLA\npricing-tiers-enterprise-feature6 = 审计日志\npricing-tiers-enterprise-feature7 = 培训课程\npricing-tiers-contact-sales = 联系销售\npricing-tiers-get-started = 开始使用\nproducts-header-title = 产品\nproducts-header-description = 用于简化国际化工作流程的工具和服务。\nproducts-grid-learn-more = 了解更多\nproducts-grid-cli-name = 基准测试 CLI\nproducts-grid-cli-desc = 从您的终端本地运行基准测试。支持自定义配置和 CI 集成。\nproducts-grid-cli-price = 免费\nproducts-grid-cloud-name = 基准测试云\nproducts-grid-cloud-desc = 具有历史追踪、警报和团队仪表板的自动化云基准测试。\nproducts-grid-cloud-price = 29 $/月\nproducts-grid-enterprise-name = 基准测试企业版\nproducts-grid-enterprise-desc = 支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。\nproducts-grid-enterprise-price = 联系我们\nproducts-grid-migration-name = 迁移助手\nproducts-grid-migration-desc = AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。\nproducts-grid-migration-price = 99 $ 一次性费用\nproducts-grid-qa-name = 翻译 QA\nproducts-grid-qa-desc = 自动检查翻译缺失、复数问题和上下文错误。\nproducts-grid-qa-price = 19 $/月\nproducts-grid-optimizer-name = 包优化器\nproducts-grid-optimizer-desc = 通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。\nproducts-grid-optimizer-price = 49 $/月\nsettings-header-title = 设置\nsettings-header-description = 管理您的账户偏好和配置。\nsettings-profile-title = 个人资料\nsettings-profile-display-name = 显示名称\nsettings-profile-email = 电子邮件\nsettings-preferences-title = 偏好\nsettings-preferences-email-notifications = 电子邮件通知\nsettings-preferences-weekly-reports = 接收每周基准测试报告\nsettings-preferences-toggle-notifications = 切换通知\nsettings-preferences-dark-mode = 深色模式\nsettings-preferences-dark-color-scheme = 使用深色配色方案\nsettings-preferences-toggle-dark-mode = 切换深色模式\nsettings-preferences-default-language = 默认语言\nsettings-preferences-english = 英语 (en)\nsettings-preferences-french = 法语 (fr)\nsettings-preferences-german = 德语 (de)\nsettings-preferences-spanish = 西班牙语 (es)\nsettings-preferences-japanese = 日语 (ja)\nsettings-preferences-chinese = 简体中文 (zh-CN)\nsettings-preferences-arabic = 阿拉伯语 (ar)\nsettings-api-access-title = API 访问\nsettings-api-access-api-key = API 密钥\nsettings-api-access-copy = 复制\nsettings-api-access-description = 使用此密钥以编程方式访问基准测试 API。\nsettings-footer-cancel = 取消\nsettings-footer-save-changes = 保存更改\nteam-header-title = 我们的团队\nteam-header-description = 了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = 创始人兼首席工程师\nteam-grid-member1-bio = 前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = 性能工程师\nteam-grid-member2-bio = 专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = 开发者倡导者\nteam-grid-member3-bio = 对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = 全栈开发人员\nteam-grid-member4-bio = 维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = 数据分析师\nteam-grid-member5-bio = 确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = 社区经理\nteam-grid-member6-bio = 管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\nnot-found-title = 404\nnot-found-description = 哎呀！页面未找到\nnot-found-return-home = 返回首页");
}
function Qe(e) {
	let t = e.options || e;
	t.fluent = t.fluent || {}, t.fluent.ja = new A("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = GitHubへ\nheader-home = ホーム\nheader-methodology = 手法\nheader-mock-pages = テストページ\nheader-products = 製品\nheader-pricing = 価格\nheader-team = チーム\nheader-blog = ブログ\nheader-careers = 採用情報\nheader-faq = FAQ\nheader-contact = お問い合わせ\nheader-settings = 設定\nfooter-title = i18n Benchmark\nfooter-description = 国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。\nfooter-resources = リソース\nfooter-github = GitHub\nfooter-methodology = 手法\nfooter-contributing = 貢献する\nfooter-contact = お問い合わせ\nfooter-built-with = i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。\ntheme-toggle-auto = テーマ：自動\ntheme-toggle-dark = テーマ：ダーク\ntheme-toggle-light = テーマ：ライト\ntheme-toggle-label-auto = テーマモード：自動（システム）。クリックするとライトモードに切り替わります。\ntheme-toggle-label-other = テーマモード：{mode}。クリックしてモードを切り替えます。\nmock-banner = ⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。\nhome-hero-title = i18n Benchmark\nhome-hero-description = 国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。\nhome-hero-view-results = 結果を見る\nhome-hero-methodology = 手法\nhome-why-it-matters-title = なぜこれらの指標が重要なのか\nhome-why-it-matters-bundle-size-title = バンドルサイズ\nhome-why-it-matters-bundle-size-desc = バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。\nhome-why-it-matters-rendering-title = レンダリングとハイドレーション\nhome-why-it-matters-rendering-desc = 巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。\nhome-why-it-matters-dynamic-loading-title = 動的読み込み\nhome-why-it-matters-dynamic-loading-desc = すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。\nhome-understanding-impact-title = 影響を理解する\nhome-understanding-impact-single-json-title = なぜ1つの大きなJSONがパフォーマンスを低下させるのか\nhome-understanding-impact-single-json-intro = 多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\nhome-understanding-impact-single-json-bullet1 = ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。\nhome-understanding-impact-single-json-bullet2 = コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。\nhome-understanding-impact-single-json-bullet3 = サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\nhome-understanding-impact-trade-offs-title = 動的読み込みのトレードオフ\nhome-understanding-impact-trade-offs-intro = 翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：\nhome-understanding-impact-waterfall-label = ウォーターフォールリクエスト：\nhome-understanding-impact-waterfall-desc = アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\nhome-understanding-impact-fouc-label = 翻訳されていないコンテンツのフラッシュ (FOUC)：\nhome-understanding-impact-fouc-desc = チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。\nhome-understanding-impact-cache-label = キャッシュの無効化：\nhome-understanding-impact-cache-desc = 翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。\nhome-understanding-impact-measures-title = このベンチマークが測定するもの\nhome-understanding-impact-measures-desc = このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\nhome-results-table-title = サンプル結果\nhome-results-table-library = ライブラリ\nhome-results-table-bundle-size = バンドルサイズ\nhome-results-table-lookup-time = ルックアップ時間\nhome-results-table-lazy-loading = 遅延読み込み\nhome-results-table-yes = はい\nhome-results-table-manual = 手動\nhome-results-table-built-in = 内蔵\nabout-header-title = このベンチマークについて\nabout-header-description = これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。\nabout-grid-why-exists-title = なぜこれが存在するのか\nabout-grid-why-exists-desc = i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。\nabout-grid-methodology-title = 手法\nabout-grid-methodology-desc = 同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。\nabout-what-we-measure-title = 測定項目\nabout-what-we-measure-bundle-size-impact = バンドルサイズへの影響\nabout-what-we-measure-bundle-size-impact-desc = i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。\nabout-what-we-measure-rendering-overhead = レンダリングのオーバーヘッド\nabout-what-we-measure-rendering-overhead-desc = ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\nabout-what-we-measure-hydration-cost = ハイドレーションコスト\nabout-what-we-measure-hydration-cost-desc = SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。\nabout-what-we-measure-lazy-loading = 遅延読み込みの有効性\nabout-what-we-measure-lazy-loading-desc = ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。\nabout-what-we-measure-locale-switch = ロケール切り替え速度\nabout-what-we-measure-locale-switch-desc = 実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\nblog-header-title = ブログ\nblog-header-description = i18nコミュニティからのインサイト、チュートリアル、分析。\nblog-list-read-more = 続きを読む →\nblog-list-post1-title = 2026年のi18nライブラリ比較：ディープダイブ\nblog-list-post1-date = 2026年3月15日\nblog-list-post1-excerpt = パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\nblog-list-post1-category = ベンチマーク\nblog-list-post2-title = i18nバンドルを60%削減する方法\nblog-list-post2-date = 2026年3月8日\nblog-list-post2-excerpt = 遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。\nblog-list-post2-category = チュートリアル\nblog-list-post3-title = Reactにおける国際化の現状\nblog-list-post3-date = 2026年2月28日\nblog-list-post3-excerpt = トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。\nblog-list-post3-category = 分析\nblog-list-post4-title = react-i18nextからLinguiへの移行\nblog-list-post4-date = 2026年2月15日\nblog-list-post4-excerpt = 50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\nblog-list-post4-category = チュートリアル\nblog-list-post5-title = Server Componentsとi18n：何が変わるのか？\nblog-list-post5-date = 2026年2月1日\nblog-list-post5-excerpt = React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\nblog-list-post5-category = 分析\nblog-list-post6-title = ベンチマーク手法：テスト方法について\nblog-list-post6-date = 2026年1月20日\nblog-list-post6-excerpt = テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。\nblog-list-post6-category = メタ\ncareers-header-title = 採用情報\ncareers-header-description = 国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。\ncareers-benefits-remote-label = リモートファースト\ncareers-benefits-remote-value = 世界中のどこからでも仕事ができます\ncareers-benefits-pay-label = 競争力のある給与\ncareers-benefits-pay-value = 市場トップクラスの報酬\ncareers-benefits-oss-label = オープンソースの時間\ncareers-benefits-oss-value = 時間の20%をOSSへの貢献に\ncareers-open-positions-title = 募集中の職種\ncareers-open-positions-apply-now = 今すぐ応募\ncareers-open-positions-remote = リモート\ncareers-open-positions-full-time = フルタイム\ncareers-open-positions-part-time = パートタイム\ncareers-open-positions-engineering = エンジニアリング\ncareers-open-positions-documentation = ドキュメンテーション\ncareers-open-positions-community = コミュニティ\ncareers-open-positions-sf-remote = サンフランシスコ / リモート\ncareers-open-positions-frontend-title = シニアフロントエンドエンジニア\ncareers-open-positions-frontend-desc = React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。\ncareers-open-positions-backend-title = バックエンドエンジニア\ncareers-open-positions-backend-desc = 毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。\ncareers-open-positions-writer-title = テクニカルライター\ncareers-open-positions-writer-desc = ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。\ncareers-open-positions-devrel-title = DevRelエンジニア\ncareers-open-positions-devrel-desc = トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。\ncareers-open-positions-qa-title = QAエンジニア\ncareers-open-positions-qa-desc = 厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\ncontact-header-title = お問い合わせ\ncontact-header-description = アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：\ncontact-form-name = 名前\ncontact-form-your-name = お名前\ncontact-form-email = メールアドレス\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = トピック\ncontact-form-bug-report = バグ報告\ncontact-form-new-benchmark-idea = 新しいベンチマークのアイデア\ncontact-form-methodology-question = 手法に関する質問\ncontact-form-contribution = 貢献\ncontact-form-other = その他\ncontact-form-message = メッセージ\ncontact-form-message-placeholder = ご質問やアイデアを記入してください...\ncontact-form-send-message = メッセージを送信\nfaq-header-title = よくある質問\nfaq-header-description = i18n Benchmarkについて知っておくべきすべてのこと。\nfaq-list-q1 = i18n Benchmarkとは何ですか？\nfaq-list-a1 = i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。\nfaq-list-q2 = ベンチマークはどのように実施されますか？\nfaq-list-a2 = 一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\nfaq-list-q3 = 現在サポートされているライブラリは何ですか？\nfaq-list-a3 = react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。\nfaq-list-q4 = 自分のベンチマークを投稿できますか？\nfaq-list-a4 = はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。\nfaq-list-q5 = ベンチマークはどのくらいの頻度で更新されますか？\nfaq-list-a5 = 各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。\nfaq-list-q6 = データは信頼できますか？\nfaq-list-a6 = ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。\nfaq-list-q7 = コンサルティングサービスは提供していますか？\nfaq-list-a7 = はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\nfaq-list-q8 = どのように貢献できますか？\nfaq-list-a8 = 貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。\npricing-header-title = シンプルで透明性の高い価格設定\npricing-header-description = チームに合ったプランをお選びください。隠れた費用はありません。\npricing-tiers-starter-name = スターター\npricing-tiers-starter-price = 0円\npricing-tiers-starter-period = ずっと無料\npricing-tiers-starter-feature1 = 1日あたり5回のベンチマーク実行\npricing-tiers-starter-feature2 = 3ライブラリ\npricing-tiers-starter-feature3 = コミュニティサポート\npricing-tiers-starter-feature4 = 公開結果\npricing-tiers-pro-name = プロ\npricing-tiers-pro-price = 29ドル\npricing-tiers-pro-period = /月\npricing-tiers-pro-feature1 = 無制限の実行\npricing-tiers-pro-feature2 = すべてのライブラリ\npricing-tiers-pro-feature3 = 優先サポート\npricing-tiers-pro-feature4 = 非公開の結果\npricing-tiers-pro-feature5 = CI統合\npricing-tiers-pro-feature6 = 履歴データ\npricing-tiers-enterprise-name = エンタープライズ\npricing-tiers-enterprise-price = カスタム\npricing-tiers-enterprise-feature1 = Proプランのすべてを含む\npricing-tiers-enterprise-feature2 = オンプレミスオプション\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = 専任のアカウントマネージャー\npricing-tiers-enterprise-feature5 = カスタムSLA\npricing-tiers-enterprise-feature6 = 監査ログ\npricing-tiers-enterprise-feature7 = トレーニングセッション\npricing-tiers-contact-sales = 営業に問い合わせる\npricing-tiers-get-started = 始める\nproducts-header-title = 製品\nproducts-header-description = 国際化ワークフローを効率化するためのツールとサービス。\nproducts-grid-learn-more = 詳細はこちら\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。\nproducts-grid-cli-price = 無料\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = 履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。\nproducts-grid-cloud-price = 29ドル/月\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。\nproducts-grid-enterprise-price = お問い合わせ\nproducts-grid-migration-name = 移行アシスタント\nproducts-grid-migration-desc = ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。\nproducts-grid-migration-price = 99ドル（一回限り）\nproducts-grid-qa-name = 翻訳QA\nproducts-grid-qa-desc = 翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。\nproducts-grid-qa-price = 19ドル/月\nproducts-grid-optimizer-name = バンドルオプティマイザー\nproducts-grid-optimizer-desc = ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。\nproducts-grid-optimizer-price = 49ドル/月\nsettings-header-title = 設定\nsettings-header-description = アカウント設定と構成を管理します。\nsettings-profile-title = プロフィール\nsettings-profile-display-name = 表示名\nsettings-profile-email = メールアドレス\nsettings-preferences-title = 設定\nsettings-preferences-email-notifications = メール通知\nsettings-preferences-weekly-reports = 毎週のベンチマークレポートを受け取る\nsettings-preferences-toggle-notifications = 通知の切り替え\nsettings-preferences-dark-mode = ダークモード\nsettings-preferences-dark-color-scheme = ダークカラー（暗い配色）を使用する\nsettings-preferences-toggle-dark-mode = ダークモードの切り替え\nsettings-preferences-default-language = デフォルトの言語\nsettings-preferences-english = 英語 (en)\nsettings-preferences-french = フランス語 (fr)\nsettings-preferences-german = ドイツ語 (de)\nsettings-preferences-spanish = スペイン語 (es)\nsettings-preferences-japanese = 日本語 (ja)\nsettings-preferences-chinese = 中国語（簡体字） (zh-CN)\nsettings-preferences-arabic = アラビア語 (ar)\nsettings-api-access-title = APIアクセス\nsettings-api-access-api-key = APIキー\nsettings-api-access-copy = コピー\nsettings-api-access-description = このキーを使用して、プログラムでベンチマークAPIにアクセスします。\nsettings-footer-cancel = キャンセル\nsettings-footer-save-changes = 変更を保存\nteam-header-title = 私たちのチーム\nteam-header-description = i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = 創設者 & リードエンジニア\nteam-grid-member1-bio = 大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = パフォーマンスエンジニア\nteam-grid-member2-bio = JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = 開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = フルスタックデベロッパー\nteam-grid-member4-bio = ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = データアナリスト\nteam-grid-member5-bio = すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = コミュニティマネージャー\nteam-grid-member6-bio = コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。\nnot-found-title = 404\nnot-found-description = おっと！ページが見つかりません\nnot-found-return-home = ホームに戻る");
}
function $e(e) {
	let t = e.options || e;
	t.fluent = t.fluent || {}, t.fluent.ko = new A("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Go to GitHub\nheader-home = Home\nheader-methodology = Methodology\nheader-mock-pages = Mock Pages\nheader-products = Products\nheader-pricing = Pricing\nheader-team = Team\nheader-blog = Blog\nheader-careers = Careers\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Settings\nfooter-title = i18n Benchmark\nfooter-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\nfooter-resources = Resources\nfooter-github = GitHub\nfooter-methodology = Methodology\nfooter-contributing = Contributing\nfooter-contact = Contact\nfooter-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.\ntheme-toggle-auto = Theme: Auto\ntheme-toggle-dark = Theme: Dark\ntheme-toggle-light = Theme: Light\ntheme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.\ntheme-toggle-label-other = Theme mode: {mode}. Click to switch mode.\nmock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\nhome-hero-title = i18n Benchmark\nhome-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\nhome-hero-view-results = View Results\nhome-hero-methodology = Methodology\nhome-why-it-matters-title = Why These Metrics Matter\nhome-why-it-matters-bundle-size-title = Bundle Size\nhome-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\nhome-why-it-matters-rendering-title = Rendering & Hydration\nhome-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Dynamic Loading\nhome-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\nhome-understanding-impact-title = Understanding the Impact\nhome-understanding-impact-single-json-title = Why a single large JSON can hurt performance\nhome-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\nhome-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.\nhome-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\nhome-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\nhome-understanding-impact-trade-offs-title = The trade-offs of dynamic loading\nhome-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\nhome-understanding-impact-waterfall-label = Waterfall requests:\nhome-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\nhome-understanding-impact-fouc-label = Flash of untranslated content (FOUC):\nhome-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.\nhome-understanding-impact-cache-label = Cache invalidation:\nhome-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\nhome-understanding-impact-measures-title = What this benchmark measures\nhome-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\nhome-results-table-title = Sample Results\nhome-results-table-library = Library\nhome-results-table-bundle-size = Bundle Size\nhome-results-table-lookup-time = Lookup Time\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Yes\nhome-results-table-manual = Manual\nhome-results-table-built-in = Built-in\nabout-header-title = About This Benchmark\nabout-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\nabout-grid-why-exists-title = Why This Exists\nabout-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\nabout-grid-methodology-title = Methodology\nabout-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\nabout-what-we-measure-title = What We Measure\nabout-what-we-measure-bundle-size-impact = Bundle size impact\nabout-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\nabout-what-we-measure-rendering-overhead = Rendering overhead\nabout-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\nabout-what-we-measure-hydration-cost = Hydration cost\nabout-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\nabout-what-we-measure-lazy-loading = Lazy loading effectiveness\nabout-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\nabout-what-we-measure-locale-switch = Locale switch speed\nabout-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutorials, and analysis from the i18n community.\nblog-list-read-more = Read More →\nblog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive\nblog-list-post1-date = March 15, 2026\nblog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = How to Reduce Your i18n Bundle by 60%\nblog-list-post2-date = March 8, 2026\nblog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = The State of Internationalization in React\nblog-list-post3-date = February 28, 2026\nblog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\nblog-list-post3-category = Analysis\nblog-list-post4-title = Migrating from react-i18next to Lingui\nblog-list-post4-date = February 15, 2026\nblog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components and i18n: What Changes?\nblog-list-post5-date = February 1, 2026\nblog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\nblog-list-post5-category = Analysis\nblog-list-post6-title = Benchmark Methodology: How We Test\nblog-list-post6-date = January 20, 2026\nblog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\nblog-list-post6-category = Meta\ncareers-header-title = Careers\ncareers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Work from anywhere in the world\ncareers-benefits-pay-label = Competitive pay\ncareers-benefits-pay-value = Top-of-market compensation\ncareers-benefits-oss-label = Open source time\ncareers-benefits-oss-value = 20% time for OSS contributions\ncareers-open-positions-title = Open Positions\ncareers-open-positions-apply-now = Apply Now\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Full-time\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\ncareers-open-positions-writer-title = Technical Writer\ncareers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.\ncareers-open-positions-devrel-title = DevRel Engineer\ncareers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\ncareers-open-positions-qa-title = QA Engineer\ncareers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\ncontact-header-title = Get in Touch\ncontact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\ncontact-form-name = Name\ncontact-form-your-name = Your name\ncontact-form-email = Email\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Topic\ncontact-form-bug-report = Bug Report\ncontact-form-new-benchmark-idea = New Benchmark Idea\ncontact-form-methodology-question = Methodology Question\ncontact-form-contribution = Contribution\ncontact-form-other = Other\ncontact-form-message = Message\ncontact-form-message-placeholder = Describe your question or idea...\ncontact-form-send-message = Send Message\nfaq-header-title = Frequently Asked Questions\nfaq-header-description = Everything you need to know about i18n Benchmark.\nfaq-list-q1 = What is i18n Benchmark?\nfaq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\nfaq-list-q2 = How are benchmarks conducted?\nfaq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\nfaq-list-q3 = Which libraries are currently supported?\nfaq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\nfaq-list-q4 = Can I submit my own benchmarks?\nfaq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\nfaq-list-q5 = How often are benchmarks updated?\nfaq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\nfaq-list-q6 = Is the data reliable?\nfaq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\nfaq-list-q7 = Do you offer consulting services?\nfaq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\nfaq-list-q8 = How can I contribute?\nfaq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\npricing-header-title = Simple, Transparent Pricing\npricing-header-description = Choose the plan that fits your team. No hidden fees.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = $0\npricing-tiers-starter-period = forever\npricing-tiers-starter-feature1 = 5 benchmark runs/day\npricing-tiers-starter-feature2 = 3 libraries\npricing-tiers-starter-feature3 = Community support\npricing-tiers-starter-feature4 = Public results\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = $29\npricing-tiers-pro-period = /month\npricing-tiers-pro-feature1 = Unlimited runs\npricing-tiers-pro-feature2 = All libraries\npricing-tiers-pro-feature3 = Priority support\npricing-tiers-pro-feature4 = Private results\npricing-tiers-pro-feature5 = CI integration\npricing-tiers-pro-feature6 = Historical data\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Custom\npricing-tiers-enterprise-feature1 = Everything in Pro\npricing-tiers-enterprise-feature2 = On-premise option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedicated account manager\npricing-tiers-enterprise-feature5 = Custom SLAs\npricing-tiers-enterprise-feature6 = Audit logs\npricing-tiers-enterprise-feature7 = Training sessions\npricing-tiers-contact-sales = Contact Sales\npricing-tiers-get-started = Get Started\nproducts-header-title = Products\nproducts-header-description = Tools and services to streamline your internationalization workflow.\nproducts-grid-learn-more = Learn More\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\nproducts-grid-cli-price = Free\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\nproducts-grid-cloud-price = $29/mo\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\nproducts-grid-enterprise-price = Contact Us\nproducts-grid-migration-name = Migration Assistant\nproducts-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\nproducts-grid-migration-price = $99 one-time\nproducts-grid-qa-name = Translation QA\nproducts-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.\nproducts-grid-qa-price = $19/mo\nproducts-grid-optimizer-name = Bundle Optimizer\nproducts-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\nproducts-grid-optimizer-price = $49/mo\nsettings-header-title = Settings\nsettings-header-description = Manage your account preferences and configuration.\nsettings-profile-title = Profile\nsettings-profile-display-name = Display Name\nsettings-profile-email = Email\nsettings-preferences-title = Preferences\nsettings-preferences-email-notifications = Email Notifications\nsettings-preferences-weekly-reports = Receive weekly benchmark reports\nsettings-preferences-toggle-notifications = Toggle notifications\nsettings-preferences-dark-mode = Dark Mode\nsettings-preferences-dark-color-scheme = Use dark color scheme\nsettings-preferences-toggle-dark-mode = Toggle dark mode\nsettings-preferences-default-language = Default Language\nsettings-preferences-english = English (en)\nsettings-preferences-french = French (fr)\nsettings-preferences-german = German (de)\nsettings-preferences-spanish = Spanish (es)\nsettings-preferences-japanese = Japanese (ja)\nsettings-preferences-chinese = Chinese Simplified (zh-CN)\nsettings-preferences-arabic = Arabic (ar)\nsettings-api-access-title = API Access\nsettings-api-access-api-key = API Key\nsettings-api-access-copy = Copy\nsettings-api-access-description = Use this key to access the benchmarking API programmatically.\nsettings-footer-cancel = Cancel\nsettings-footer-save-changes = Save Changes\nteam-header-title = Our Team\nteam-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Founder & Lead Engineer\nteam-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance Engineer\nteam-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack Developer\nteam-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Data Analyst\nteam-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.\nnot-found-title = 404\nnot-found-description = Oops! Page not found\nnot-found-return-home = Return to Home");
}
function et(e) {
	let t = e.options || e;
	t.fluent = t.fluent || {}, t.fluent.ru = new A("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Перейти на GitHub\nheader-home = Главная\nheader-methodology = Методология\nheader-mock-pages = Тестовые страницы\nheader-products = Продукты\nheader-pricing = Цены\nheader-team = Команда\nheader-blog = Блог\nheader-careers = Вакансии\nheader-faq = FAQ\nheader-contact = Контакт\nheader-settings = Настройки\nfooter-title = i18n Benchmark\nfooter-description = Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.\nfooter-resources = Ресурсы\nfooter-github = GitHub\nfooter-methodology = Методология\nfooter-contributing = Участие в проекте\nfooter-contact = Контакт\nfooter-built-with = i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.\ntheme-toggle-auto = Тема: Авто\ntheme-toggle-dark = Тема: Темная\ntheme-toggle-light = Тема: Светлая\ntheme-toggle-label-auto = Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.\ntheme-toggle-label-other = Режим темы: {mode}. Нажмите, чтобы сменить режим.\nmock-banner = ⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.\nhome-hero-view-results = Посмотреть результаты\nhome-hero-methodology = Методология\nhome-why-it-matters-title = Почему эти метрики важны\nhome-why-it-matters-bundle-size-title = Размер бандла\nhome-why-it-matters-bundle-size-desc = Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.\nhome-why-it-matters-rendering-title = Рендеринг и гидратация\nhome-why-it-matters-rendering-desc = Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).\nhome-why-it-matters-dynamic-loading-title = Динамическая загрузка\nhome-why-it-matters-dynamic-loading-desc = Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.\nhome-understanding-impact-title = Понимание влияния\nhome-understanding-impact-single-json-title = Почему один большой JSON может снизить производительность\nhome-understanding-impact-single-json-intro = Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\nhome-understanding-impact-single-json-bullet1 = JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.\nhome-understanding-impact-single-json-bullet2 = Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.\nhome-understanding-impact-single-json-bullet3 = При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.\nhome-understanding-impact-trade-offs-title = Компромиссы динамической загрузки\nhome-understanding-impact-trade-offs-intro = Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:\nhome-understanding-impact-waterfall-label = Каскадные запросы:\nhome-understanding-impact-waterfall-desc = приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.\nhome-understanding-impact-fouc-label = Мерцание непереведенного контента (FOUC):\nhome-understanding-impact-fouc-desc = пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.\nhome-understanding-impact-cache-label = Инвалидация кэша:\nhome-understanding-impact-cache-desc = обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.\nhome-understanding-impact-measures-title = Что измеряет этот бенчмарк\nhome-understanding-impact-measures-desc = Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\nhome-results-table-title = Примеры результатов\nhome-results-table-library = Библиотека\nhome-results-table-bundle-size = Размер бандла\nhome-results-table-lookup-time = Время поиска\nhome-results-table-lazy-loading = Ленивая загрузка\nhome-results-table-yes = Да\nhome-results-table-manual = Вручную\nhome-results-table-built-in = Встроено\nabout-header-title = Об этом бенчмарке\nabout-header-description = Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.\nabout-grid-why-exists-title = Зачем это нужно\nabout-grid-why-exists-desc = Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\nabout-grid-methodology-title = Методология\nabout-grid-methodology-desc = Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.\nabout-what-we-measure-title = Что мы измеряем\nabout-what-we-measure-bundle-size-impact = Влияние на размер бандла\nabout-what-we-measure-bundle-size-impact-desc = Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\nabout-what-we-measure-rendering-overhead = Накладные расходы на рендеринг\nabout-what-we-measure-rendering-overhead-desc = Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.\nabout-what-we-measure-hydration-cost = Стоимость гидратации\nabout-what-we-measure-hydration-cost-desc = Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\nabout-what-we-measure-lazy-loading = Эффективность ленивой загрузки\nabout-what-we-measure-lazy-loading-desc = Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).\nabout-what-we-measure-locale-switch = Скорость переключения языка\nabout-what-we-measure-locale-switch-desc = Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\nblog-header-title = Блог\nblog-header-description = Инсайты, туториалы и аналитика от сообщества i18n.\nblog-list-read-more = Читать далее →\nblog-list-post1-title = Сравнение библиотек i18n в 2026 году: глубокое погружение\nblog-list-post1-date = 15 марта 2026 г.\nblog-list-post1-excerpt = Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\nblog-list-post1-category = Бенчмарк\nblog-list-post2-title = Как уменьшить бандл i18n на 60%\nblog-list-post2-date = 8 марта 2026 г.\nblog-list-post2-excerpt = Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.\nblog-list-post2-category = Туториал\nblog-list-post3-title = Состояние интернационализации в React\nblog-list-post3-date = 28 февраля 2026 г.\nblog-list-post3-excerpt = Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\nblog-list-post3-category = Анализ\nblog-list-post4-title = Миграция с react-i18next на Lingui\nblog-list-post4-date = 15 февраля 2026 г.\nblog-list-post4-excerpt = Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.\nblog-list-post4-category = Туториал\nblog-list-post5-title = Server Components и i18n: что меняется?\nblog-list-post5-date = 1 февраля 2026 г.\nblog-list-post5-excerpt = React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\nblog-list-post5-category = Анализ\nblog-list-post6-title = Методология бенчмарка: как мы тестируем\nblog-list-post6-date = 20 января 2026 г.\nblog-list-post6-excerpt = Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\nblog-list-post6-category = Мета\ncareers-header-title = Вакансии\ncareers-header-description = Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.\ncareers-benefits-remote-label = Удаленная работа\ncareers-benefits-remote-value = Работайте из любой точки мира\ncareers-benefits-pay-label = Конкурентная зарплата\ncareers-benefits-pay-value = Вознаграждение выше рыночного\ncareers-benefits-oss-label = Время на open source\ncareers-benefits-oss-value = 20% времени на вклад в OSS\ncareers-open-positions-title = Открытые вакансии\ncareers-open-positions-apply-now = Подать заявку\ncareers-open-positions-remote = Удаленно\ncareers-open-positions-full-time = Полная занятость\ncareers-open-positions-part-time = Частичная занятость\ncareers-open-positions-engineering = Разработка\ncareers-open-positions-documentation = Документация\ncareers-open-positions-community = Сообщество\ncareers-open-positions-sf-remote = Сан-Франциско / Удаленно\ncareers-open-positions-frontend-title = Старший фронтенд-инженер\ncareers-open-positions-frontend-desc = Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.\ncareers-open-positions-backend-title = Бэкенд-инженер\ncareers-open-positions-backend-desc = Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.\ncareers-open-positions-writer-title = Технический писатель\ncareers-open-positions-writer-desc = Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.\ncareers-open-positions-devrel-title = DevRel-инженер\ncareers-open-positions-devrel-desc = Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.\ncareers-open-positions-qa-title = QA-инженер\ncareers-open-positions-qa-desc = Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.\ncontact-header-title = Связаться с нами\ncontact-header-description = Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу\ncontact-form-name = Имя\ncontact-form-your-name = Ваше имя\ncontact-form-email = Электронная почта\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Тема\ncontact-form-bug-report = Отчет об ошибке\ncontact-form-new-benchmark-idea = Идея нового бенчмарка\ncontact-form-methodology-question = Вопрос по методологии\ncontact-form-contribution = Вклад в проект\ncontact-form-other = Другое\ncontact-form-message = Сообщение\ncontact-form-message-placeholder = Опишите ваш вопрос или идею...\ncontact-form-send-message = Отправить сообщение\nfaq-header-title = Часто задаваемые вопросы\nfaq-header-description = Все, что вам нужно знать об i18n Benchmark.\nfaq-list-q1 = Что такое i18n Benchmark?\nfaq-list-a1 = i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.\nfaq-list-q2 = Как проводятся бенчмарки?\nfaq-list-a2 = Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.\nfaq-list-q3 = Какие библиотеки поддерживаются в данный момент?\nfaq-list-a3 = Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\nfaq-list-q4 = Могу ли я прислать свои собственные бенчмарки?\nfaq-list-a4 = Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.\nfaq-list-q5 = Как часто обновляются бенчмарки?\nfaq-list-a5 = Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.\nfaq-list-q6 = Можно ли доверять данным?\nfaq-list-a6 = Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.\nfaq-list-q7 = Предоставляете ли вы консалтинговые услуги?\nfaq-list-a7 = Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.\nfaq-list-q8 = Как я могу помочь проекту?\nfaq-list-a8 = Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.\npricing-header-title = Простые и прозрачные цены\npricing-header-description = Выберите подходящий план для вашей команды. Никаких скрытых комиссий.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = навсегда\npricing-tiers-starter-feature1 = 5 запусков бенчмарка в день\npricing-tiers-starter-feature2 = 3 библиотеки\npricing-tiers-starter-feature3 = Поддержка сообщества\npricing-tiers-starter-feature4 = Публичные результаты\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /мес\npricing-tiers-pro-feature1 = Неограниченное число запусков\npricing-tiers-pro-feature2 = Все библиотеки\npricing-tiers-pro-feature3 = Приоритетная поддержка\npricing-tiers-pro-feature4 = Приватные результаты\npricing-tiers-pro-feature5 = Интеграция с CI\npricing-tiers-pro-feature6 = Исторические данные\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Индивидуально\npricing-tiers-enterprise-feature1 = Все, что есть в Pro\npricing-tiers-enterprise-feature2 = Локальная установка\npricing-tiers-enterprise-feature3 = SSO и SAML\npricing-tiers-enterprise-feature4 = Персональный менеджер\npricing-tiers-enterprise-feature5 = Индивидуальные SLA\npricing-tiers-enterprise-feature6 = Журналы аудита\npricing-tiers-enterprise-feature7 = Обучающие сессии\npricing-tiers-contact-sales = Связаться с отделом продаж\npricing-tiers-get-started = Начать работу\nproducts-header-title = Продукты\nproducts-header-description = Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.\nproducts-grid-learn-more = Узнать больше\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.\nproducts-grid-cli-price = Бесплатно\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.\nproducts-grid-cloud-price = 29 $/мес\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.\nproducts-grid-enterprise-price = Связаться с нами\nproducts-grid-migration-name = Помощник по миграции\nproducts-grid-migration-desc = Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.\nproducts-grid-migration-price = 99 $ (разово)\nproducts-grid-qa-name = QA переводов\nproducts-grid-qa-desc = Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.\nproducts-grid-qa-price = 19 $/мес\nproducts-grid-optimizer-name = Оптимизатор бандла\nproducts-grid-optimizer-desc = Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.\nproducts-grid-optimizer-price = 49 $/мес\nsettings-header-title = Настройки\nsettings-header-description = Управляйте предпочтениями и конфигурацией вашей учетной записи.\nsettings-profile-title = Профиль\nsettings-profile-display-name = Отображаемое имя\nsettings-profile-email = Электронная почта\nsettings-preferences-title = Предпочтения\nsettings-preferences-email-notifications = Уведомления по почте\nsettings-preferences-weekly-reports = Получать еженедельные отчеты о бенчмарках\nsettings-preferences-toggle-notifications = Переключить уведомления\nsettings-preferences-dark-mode = Темная тема\nsettings-preferences-dark-color-scheme = Использовать темную цветовую схему\nsettings-preferences-toggle-dark-mode = Переключить темную тему\nsettings-preferences-default-language = Язык по умолчанию\nsettings-preferences-english = Английский (en)\nsettings-preferences-french = Французский (fr)\nsettings-preferences-german = Немецкий (de)\nsettings-preferences-spanish = Испанский (es)\nsettings-preferences-japanese = Японский (ja)\nsettings-preferences-chinese = Китайский упрощенный (zh-CN)\nsettings-preferences-arabic = Арабский (ar)\nsettings-api-access-title = Доступ к API\nsettings-api-access-api-key = Ключ API\nsettings-api-access-copy = Копировать\nsettings-api-access-description = Используйте этот ключ для программного доступа к API бенчмаркинга.\nsettings-footer-cancel = Отмена\nsettings-footer-save-changes = Сохранить изменения\nteam-header-title = Наша команда\nteam-header-description = Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.\nteam-grid-member1-name = Сара Чен\nteam-grid-member1-role = Основатель и ведущий инженер\nteam-grid-member1-bio = Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.\nteam-grid-member2-name = Маркус Вебер\nteam-grid-member2-role = Инженер по производительности\nteam-grid-member2-bio = Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\nteam-grid-member3-name = Айша Патель\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\nteam-grid-member4-name = Томас Родригес\nteam-grid-member4-role = Full-Stack разработчик\nteam-grid-member4-bio = Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.\nteam-grid-member5-name = Юки Танака\nteam-grid-member5-role = Аналитик данных\nteam-grid-member5-bio = Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).\nteam-grid-member6-name = Елена Ковальски\nteam-grid-member6-role = Комьюнити-менеджер\nteam-grid-member6-bio = Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.\nnot-found-title = 404\nnot-found-description = Упс! Страница не найдена\nnot-found-return-home = Вернуться на главную");
}
var tt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, nt = { class: "mb-8 text-center" }, rt = { class: "mb-4 text-3xl font-bold text-foreground" }, it = { class: "mx-auto max-w-2xl text-muted-foreground" };
function at(e, r, i, a, o, s) {
	return c(), t("section", nt, [n("h1", rt, u(a.td("faq.header.title")), 1), n("p", it, u(a.td("faq.header.description")), 1)]);
}
typeof Ge == "function" && Ge(b), typeof Ke == "function" && Ke(b), typeof qe == "function" && qe(b), typeof Je == "function" && Je(b), typeof Ye == "function" && Ye(b), typeof Xe == "function" && Xe(b), typeof Ze == "function" && Ze(b), typeof Qe == "function" && Qe(b), typeof $e == "function" && $e(b), typeof et == "function" && et(b);
var ot = tt(b, [["render", at], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/faq/FAQHeader.vue"]]), j = te({
	Vue: () => e,
	Vue2: () => void 0,
	del: () => ut,
	install: () => ct,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => lt
});
import * as st from "vue";
h(j, st);
function ct() {}
function lt(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function ut(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
var dt = class extends Array {
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
}, ft = class extends dt {
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
function pt(e, t) {
	return Array.isArray(t) ? t.map((t) => mt(e, t)) : mt(e, t);
}
function mt(e, t) {
	for (let n of e) if (n.hasMessage(t)) return n;
	return null;
}
function ht(e, t) {
	let n = new ye(e, {
		functions: t._functions,
		useIsolating: t._useIsolating,
		transform: t._transform
	});
	return n._terms = new Map(t._terms), n._messages = new Map(t._messages), n;
}
function gt(e, t) {
	if (!e) throw Error(`[fluent-vue] ${t}`);
}
function M(e, ...t) {
	console.warn(`[fluent-vue] ${e}`, ...t);
}
var _t = class {
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
		return pt(this.bundles.value, e);
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
		for (let e of i) M(`Error when formatting message with key [${t}]`, e);
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
function* vt(e, t) {
	for (let n of e) yield* t(n);
}
function N(e, t, n = !1) {
	if (t == null) return e;
	let r = t.$options ?? t.type;
	if (r._fluent != null) return r._fluent;
	let i = yt(e, r.fluent);
	return !n && !(typeof window > "u") && (r._fluent = i), i;
}
function yt(e, t) {
	return t == null ? e : new _t((0, j.computed)(() => ft.from(vt(e.bundles.value, (e) => Object.entries(t).map(([t, n]) => {
		let r = t.split(/[\s+,]/);
		if (e.locales.filter((e) => r.includes(e)).length === 0) return e;
		let i = ht(r, e);
		return i.addResource(n, { allowOverrides: !0 }), i;
	})))), e.options);
}
var bt = Symbol("root-context"), xt = Object.create, St = Object.defineProperty, Ct = Object.getOwnPropertyDescriptor, wt = Object.getOwnPropertyNames, Tt = Object.getPrototypeOf, Et = Object.prototype.hasOwnProperty, Dt = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Ot = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = wt(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Et.call(e, s) && s !== n && St(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Ct(t, s)) || r.enumerable
	});
	return e;
}, kt = (e, t, n) => (n = e == null ? {} : xt(Tt(e)), Ot(t || !e || !e.__esModule ? St(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), At = typeof navigator < "u", P = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
P.chrome !== void 0 && P.chrome.devtools, At && (P.self, P.top), typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron"), typeof window < "u" && window.__NUXT__;
var jt = kt(Dt(((e, t) => {
	t.exports = r;
	function n(e) {
		return e instanceof Buffer ? Buffer.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
	}
	function r(e) {
		if (e ||= {}, e.circles) return i(e);
		let t = /* @__PURE__ */ new Map();
		if (t.set(Date, (e) => new Date(e)), t.set(Map, (e, t) => new Map(a(Array.from(e), t))), t.set(Set, (e, t) => new Set(a(Array.from(e), t))), e.constructorHandlers) for (let n of e.constructorHandlers) t.set(n[0], n[1]);
		let r = null;
		return e.proto ? s : o;
		function a(e, i) {
			let a = Object.keys(e), o = Array(a.length);
			for (let s = 0; s < a.length; s++) {
				let c = a[s], l = e[c];
				o[c] = typeof l != "object" || !l ? l : l.constructor !== Object && (r = t.get(l.constructor)) ? r(l, i) : ArrayBuffer.isView(l) ? n(l) : i(l);
			}
			return o;
		}
		function o(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, o);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, o);
			let i = {};
			for (let a in e) {
				if (Object.hasOwnProperty.call(e, a) === !1) continue;
				let s = e[a];
				i[a] = typeof s != "object" || !s ? s : s.constructor !== Object && (r = t.get(s.constructor)) ? r(s, o) : ArrayBuffer.isView(s) ? n(s) : o(s);
			}
			return i;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, s);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, s);
			let i = {};
			for (let a in e) {
				let o = e[a];
				i[a] = typeof o != "object" || !o ? o : o.constructor !== Object && (r = t.get(o.constructor)) ? r(o, s) : ArrayBuffer.isView(o) ? n(o) : s(o);
			}
			return i;
		}
	}
	function i(e) {
		let t = [], r = [], i = /* @__PURE__ */ new Map();
		if (i.set(Date, (e) => new Date(e)), i.set(Map, (e, t) => new Map(o(Array.from(e), t))), i.set(Set, (e, t) => new Set(o(Array.from(e), t))), e.constructorHandlers) for (let t of e.constructorHandlers) i.set(t[0], t[1]);
		let a = null;
		return e.proto ? c : s;
		function o(e, o) {
			let s = Object.keys(e), c = Array(s.length);
			for (let l = 0; l < s.length; l++) {
				let u = s[l], d = e[u];
				if (typeof d != "object" || !d) c[u] = d;
				else if (d.constructor !== Object && (a = i.get(d.constructor))) c[u] = a(d, o);
				else if (ArrayBuffer.isView(d)) c[u] = n(d);
				else {
					let e = t.indexOf(d);
					c[u] = e === -1 ? o(d) : r[e];
				}
			}
			return c;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, s);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, s);
			let c = {};
			t.push(e), r.push(c);
			for (let o in e) {
				if (Object.hasOwnProperty.call(e, o) === !1) continue;
				let l = e[o];
				if (typeof l != "object" || !l) c[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) c[o] = a(l, s);
				else if (ArrayBuffer.isView(l)) c[o] = n(l);
				else {
					let e = t.indexOf(l);
					c[o] = e === -1 ? s(l) : r[e];
				}
			}
			return t.pop(), r.pop(), c;
		}
		function c(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, c);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, c);
			let s = {};
			t.push(e), r.push(s);
			for (let o in e) {
				let l = e[o];
				if (typeof l != "object" || !l) s[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) s[o] = a(l, c);
				else if (ArrayBuffer.isView(l)) s[o] = n(l);
				else {
					let e = t.indexOf(l);
					s[o] = e === -1 ? c(l) : r[e];
				}
			}
			return t.pop(), r.pop(), s;
		}
	}
}))(), 1), Mt = /(?:^|[-_/])(\w)/g;
function Nt(e, t) {
	return t ? t.toUpperCase() : "";
}
function Pt(e) {
	return e && `${e}`.replace(Mt, Nt);
}
function Ft(e, t) {
	let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
	let r = n.lastIndexOf("/"), i = n.substring(r + 1);
	if (t) {
		let e = i.lastIndexOf(t);
		return i.substring(0, e);
	}
	return "";
}
var It = (0, jt.default)({ circles: !0 }), Lt = { trailing: !0 };
function F(e, t = 25, n = {}) {
	if (n = {
		...Lt,
		...n
	}, !Number.isFinite(t)) throw TypeError("Expected `wait` to be a finite number");
	let r, i, a = [], o, s, c = (t, r) => (o = Rt(e, t, r), o.finally(() => {
		if (o = null, n.trailing && s && !i) {
			let e = c(t, s);
			return s = null, e;
		}
	}), o), l = function(...e) {
		return n.trailing && (s = e), o || new Promise((o) => {
			let l = !i && n.leading;
			clearTimeout(i), i = setTimeout(() => {
				i = null;
				let t = n.leading ? r : c(this, e);
				s = null;
				for (let e of a) e(t);
				a = [];
			}, t), l ? (r = c(this, e), o(r)) : a.push(o);
		});
	}, u = (e) => {
		e && (clearTimeout(e), i = null);
	};
	return l.isPending = () => !!i, l.cancel = () => {
		u(i), a = [], s = null;
	}, l.flush = () => {
		if (u(i), !s || o) return;
		let e = s;
		return s = null, c(this, e);
	}, l;
}
async function Rt(e, t, n) {
	return await e.apply(t, n);
}
function zt(e, t = {}, n) {
	for (let r in e) {
		let i = e[r], a = n ? `${n}:${r}` : r;
		typeof i == "object" && i ? zt(i, t, a) : typeof i == "function" && (t[a] = i);
	}
	return t;
}
var Bt = { run: (e) => e() }, Vt = console.createTask === void 0 ? () => Bt : console.createTask;
function Ht(e, t) {
	let n = Vt(t.shift());
	return e.reduce((e, r) => e.then(() => n.run(() => r(...t))), Promise.resolve());
}
function Ut(e, t) {
	let n = Vt(t.shift());
	return Promise.all(e.map((e) => n.run(() => e(...t))));
}
function Wt(e, t) {
	for (let n of [...e]) n(t);
}
var Gt = class {
	constructor() {
		this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
	}
	hook(e, t, n = {}) {
		if (!e || typeof t != "function") return () => {};
		let r = e, i;
		for (; this._deprecatedHooks[e];) i = this._deprecatedHooks[e], e = i.to;
		if (i && !n.allowDeprecated) {
			let e = i.message;
			e ||= `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : ""), this._deprecatedMessages ||= /* @__PURE__ */ new Set(), this._deprecatedMessages.has(e) || (console.warn(e), this._deprecatedMessages.add(e));
		}
		if (!t.name) try {
			Object.defineProperty(t, "name", {
				get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
				configurable: !0
			});
		} catch {}
		return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
			t &&= (this.removeHook(e, t), void 0);
		};
	}
	hookOnce(e, t) {
		let n, r = (...e) => (typeof n == "function" && n(), n = void 0, r = void 0, t(...e));
		return n = this.hook(e, r), n;
	}
	removeHook(e, t) {
		if (this._hooks[e]) {
			let n = this._hooks[e].indexOf(t);
			n !== -1 && this._hooks[e].splice(n, 1), this._hooks[e].length === 0 && delete this._hooks[e];
		}
	}
	deprecateHook(e, t) {
		this._deprecatedHooks[e] = typeof t == "string" ? { to: t } : t;
		let n = this._hooks[e] || [];
		delete this._hooks[e];
		for (let t of n) this.hook(e, t);
	}
	deprecateHooks(e) {
		Object.assign(this._deprecatedHooks, e);
		for (let t in e) this.deprecateHook(t, e[t]);
	}
	addHooks(e) {
		let t = zt(e), n = Object.keys(t).map((e) => this.hook(e, t[e]));
		return () => {
			for (let e of n.splice(0, n.length)) e();
		};
	}
	removeHooks(e) {
		let t = zt(e);
		for (let e in t) this.removeHook(e, t[e]);
	}
	removeAllHooks() {
		for (let e in this._hooks) delete this._hooks[e];
	}
	callHook(e, ...t) {
		return t.unshift(e), this.callHookWith(Ht, e, ...t);
	}
	callHookParallel(e, ...t) {
		return t.unshift(e), this.callHookWith(Ut, e, ...t);
	}
	callHookWith(e, t, ...n) {
		let r = this._before || this._after ? {
			name: t,
			args: n,
			context: {}
		} : void 0;
		this._before && Wt(this._before, r);
		let i = e(t in this._hooks ? [...this._hooks[t]] : [], n);
		return i instanceof Promise ? i.finally(() => {
			this._after && r && Wt(this._after, r);
		}) : (this._after && r && Wt(this._after, r), i);
	}
	beforeEach(e) {
		return this._before = this._before || [], this._before.push(e), () => {
			if (this._before !== void 0) {
				let t = this._before.indexOf(e);
				t !== -1 && this._before.splice(t, 1);
			}
		};
	}
	afterEach(e) {
		return this._after = this._after || [], this._after.push(e), () => {
			if (this._after !== void 0) {
				let t = this._after.indexOf(e);
				t !== -1 && this._after.splice(t, 1);
			}
		};
	}
};
function Kt() {
	return new Gt();
}
var qt = Object.create, Jt = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, Xt = Object.getOwnPropertyNames, Zt = Object.getPrototypeOf, Qt = Object.prototype.hasOwnProperty, $t = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), en = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Xt(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Qt.call(e, s) && s !== n && Jt(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Yt(t, s)) || r.enumerable
	});
	return e;
}, tn = (e, t, n) => (n = e == null ? {} : qt(Zt(e)), en(t || !e || !e.__esModule ? Jt(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
function nn(e) {
	if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
	let t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
	return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function rn(e) {
	let t = e.__file;
	if (t) return Pt(Ft(t, ".vue"));
}
function an(e, t) {
	return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function on(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function sn(e) {
	let t = e.subTree?.type, n = on(e);
	return n ? n?.types?.Fragment === t : !1;
}
function cn(e) {
	let t = nn(e?.type || {});
	if (t) return t;
	if (e?.root === e) return "Root";
	for (let t in e.parent?.type?.components) if (e.parent.type.components[t] === e?.type) return an(e, t);
	for (let t in e.appContext?.components) if (e.appContext.components[t] === e?.type) return an(e, t);
	return rn(e?.type || {}) || "Anonymous Component";
}
function ln(e) {
	return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function un(e, t) {
	return t ||= `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function dn() {
	let e = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		get width() {
			return e.right - e.left;
		},
		get height() {
			return e.bottom - e.top;
		}
	};
	return e;
}
var fn;
function pn(e) {
	return fn ||= document.createRange(), fn.selectNode(e), fn.getBoundingClientRect();
}
function mn(e) {
	let t = dn();
	if (!e.children) return t;
	for (let n = 0, r = e.children.length; n < r; n++) {
		let r = e.children[n], i;
		if (r.component) i = I(r.component);
		else if (r.el) {
			let e = r.el;
			e.nodeType === 1 || e.getBoundingClientRect ? i = e.getBoundingClientRect() : e.nodeType === 3 && e.data.trim() && (i = pn(e));
		}
		i && hn(t, i);
	}
	return t;
}
function hn(e, t) {
	return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var gn = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function I(e) {
	let t = e.subTree.el;
	return typeof window > "u" ? gn : sn(e) ? mn(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? I(e.subTree.component) : gn;
}
function _n(e) {
	return sn(e) ? vn(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function vn(e) {
	if (!e.children) return [];
	let t = [];
	return e.children.forEach((e) => {
		e.component ? t.push(..._n(e.component)) : e?.el && t.push(e.el);
	}), t;
}
var yn = "__vue-devtools-component-inspector__", bn = "__vue-devtools-component-inspector__card__", xn = "__vue-devtools-component-inspector__name__", Sn = "__vue-devtools-component-inspector__indicator__", Cn = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
}, wn = {
	fontFamily: "Arial, Helvetica, sans-serif",
	padding: "5px 8px",
	borderRadius: "4px",
	textAlign: "left",
	position: "absolute",
	left: 0,
	color: "#e9e9e9",
	fontSize: "14px",
	fontWeight: 600,
	lineHeight: "24px",
	backgroundColor: "#42b883",
	boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, Tn = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function L() {
	return document.getElementById(yn);
}
function En() {
	return document.getElementById(bn);
}
function Dn() {
	return document.getElementById(Sn);
}
function On() {
	return document.getElementById(xn);
}
function kn(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`
	};
}
function An(e) {
	let t = document.createElement("div");
	t.id = e.elementId ?? yn, Object.assign(t.style, {
		...Cn,
		...kn(e.bounds),
		...e.style
	});
	let n = document.createElement("span");
	n.id = bn, Object.assign(n.style, {
		...wn,
		top: e.bounds.top < 35 ? 0 : "-35px"
	});
	let r = document.createElement("span");
	r.id = xn, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
	let i = document.createElement("i");
	return i.id = Sn, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, Tn), n.appendChild(r), n.appendChild(i), t.appendChild(n), document.body.appendChild(t), t;
}
function jn(e) {
	let t = L(), n = En(), r = On(), i = Dn();
	t && (Object.assign(t.style, {
		...Cn,
		...kn(e.bounds)
	}), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function Mn(e) {
	let t = I(e);
	if (!t.width && !t.height) return;
	let n = cn(e);
	L() ? jn({
		bounds: t,
		name: n
	}) : An({
		bounds: t,
		name: n
	});
}
function Nn() {
	let e = L();
	e && (e.style.display = "none");
}
var Pn = null;
function Fn(e) {
	let t = e.target;
	if (t) {
		let e = t.__vueParentComponent;
		if (e && (Pn = e, e.vnode.el)) {
			let t = I(e), n = cn(e);
			L() ? jn({
				bounds: t,
				name: n
			}) : An({
				bounds: t,
				name: n
			});
		}
	}
}
function In(e, t) {
	e.preventDefault(), e.stopPropagation(), Pn && t(ln(Pn));
}
var Ln = null;
function Rn() {
	Nn(), window.removeEventListener("mouseover", Fn), window.removeEventListener("click", Ln, !0), Ln = null;
}
function zn() {
	return window.addEventListener("mouseover", Fn), new Promise((e) => {
		function t(n) {
			n.preventDefault(), n.stopPropagation(), In(n, (n) => {
				window.removeEventListener("click", t, !0), Ln = null, window.removeEventListener("mouseover", Fn);
				let r = L();
				r && (r.style.display = "none"), e(JSON.stringify({ id: n }));
			});
		}
		Ln = t, window.addEventListener("click", t, !0);
	});
}
function Bn(e) {
	let t = un(H.value, e.id);
	if (t) {
		let [n] = _n(t);
		if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
		else {
			let e = I(t), n = document.createElement("div"), r = {
				...kn(e),
				position: "absolute"
			};
			Object.assign(n.style, r), document.body.appendChild(n), n.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
				document.body.removeChild(n);
			}, 2e3);
		}
		setTimeout(() => {
			let n = I(t);
			if (n.width || n.height) {
				let r = cn(t), i = L();
				i ? jn({
					...e,
					name: r,
					bounds: n
				}) : An({
					...e,
					name: r,
					bounds: n
				}), setTimeout(() => {
					i && (i.style.display = "none");
				}, 1500);
			}
		}, 1200);
	}
}
P.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ??= !0;
function Vn(e) {
	let t = 0, n = setInterval(() => {
		P.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
	}, 30);
}
function Hn() {
	let e = P.__VUE_INSPECTOR__, t = e.openInEditor;
	e.openInEditor = async (...n) => {
		e.disable(), t(...n);
	};
}
function Un() {
	return new Promise((e) => {
		function t() {
			Hn(), e(P.__VUE_INSPECTOR__);
		}
		P.__VUE_INSPECTOR__ ? t() : Vn(() => {
			t();
		});
	});
}
var Wn = function(e) {
	return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
}({});
function Gn(e) {
	return !!(e && e[Wn.IS_READONLY]);
}
function Kn(e) {
	return Gn(e) ? Kn(e[Wn.RAW]) : !!(e && e[Wn.IS_REACTIVE]);
}
function qn(e) {
	return !!(e && e.__v_isRef === !0);
}
function R(e) {
	let t = e && e[Wn.RAW];
	return t ? R(t) : e;
}
var Jn = class {
	constructor() {
		this.refEditor = new Yn();
	}
	set(e, t, n, r) {
		let i = Array.isArray(t) ? t : t.split(".");
		for (; i.length > 1;) {
			let t = i.shift();
			e = e instanceof Map ? e.get(t) : e instanceof Set ? Array.from(e.values())[t] : e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		let a = i[0], o = this.refEditor.get(e)[a];
		r ? r(e, a, n) : this.refEditor.isRef(o) ? this.refEditor.set(o, n) : e[a] = n;
	}
	get(e, t) {
		let n = Array.isArray(t) ? t : t.split(".");
		for (let t = 0; t < n.length; t++) if (e = e instanceof Map ? e.get(n[t]) : e[n[t]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e) return;
		return e;
	}
	has(e, t, n = !1) {
		if (e === void 0) return !1;
		let r = Array.isArray(t) ? t.slice() : t.split("."), i = n ? 2 : 1;
		for (; e && r.length > i;) {
			let t = r.shift();
			e = e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		return e != null && Object.prototype.hasOwnProperty.call(e, r[0]);
	}
	createDefaultSetCallback(e) {
		return (t, n, r) => {
			if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : R(t) instanceof Map ? t.delete(n) : R(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
				let i = t[e.newKey || n];
				this.refEditor.isRef(i) ? this.refEditor.set(i, r) : R(t) instanceof Map ? t.set(e.newKey || n, r) : R(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
			}
		};
	}
}, Yn = class {
	set(e, t) {
		if (qn(e)) e.value = t;
		else {
			if (e instanceof Set && Array.isArray(t)) {
				e.clear(), t.forEach((t) => e.add(t));
				return;
			}
			let n = Object.keys(t);
			if (e instanceof Map) {
				let r = new Set(e.keys());
				n.forEach((n) => {
					e.set(n, Reflect.get(t, n)), r.delete(n);
				}), r.forEach((t) => e.delete(t));
				return;
			}
			let r = new Set(Object.keys(e));
			n.forEach((n) => {
				Reflect.set(e, n, Reflect.get(t, n)), r.delete(n);
			}), r.forEach((t) => Reflect.deleteProperty(e, t));
		}
	}
	get(e) {
		return qn(e) ? e.value : e;
	}
	isRef(e) {
		return qn(e) || Kn(e);
	}
};
new Jn();
var Xn = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function Zn() {
	if (typeof window > "u" || !At || typeof localStorage > "u" || localStorage === null) return {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
	let e = localStorage.getItem === void 0 ? null : localStorage.getItem(Xn);
	return e ? JSON.parse(e) : {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
}
P.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ??= [];
var Qn = new Proxy(P.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function $n(e, t) {
	U.timelineLayersState[t.id] = !1, Qn.push({
		...e,
		descriptorId: t.id,
		appRecord: on(t.app)
	});
}
P.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
var er = new Proxy(P.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} }), tr = F(() => {
	K.hooks.callHook(V.SEND_INSPECTOR_TO_CLIENT, rr());
});
function nr(e, t) {
	er.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: on(t.app)
	}), tr();
}
function rr() {
	return er.filter((e) => e.descriptor.app === H.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
		let t = e.descriptor, n = e.options;
		return {
			id: n.id,
			label: n.label,
			logo: t.logo,
			icon: `custom-ic-baseline-${n?.icon?.replace(/_/g, "-")}`,
			packageName: t.packageName,
			homepage: t.homepage,
			pluginId: t.id
		};
	});
}
function ir(e, t) {
	return er.find((n) => n.options.id === e && (!t || n.descriptor.app === t));
}
var z = function(e) {
	return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
}({}), B = function(e) {
	return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
}({}), V = function(e) {
	return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
}({});
function ar() {
	let e = Kt();
	e.hook(B.ADD_INSPECTOR, ({ inspector: e, plugin: t }) => {
		nr(e, t.descriptor);
	});
	let t = F(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || U.highPerfModeEnabled) return;
		let r = ir(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			filter: r?.treeFilter || "",
			rootNodes: []
		};
		await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i))), t();
			}, z.GET_INSPECTOR_TREE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				rootNodes: i.rootNodes
			})));
		}, V.SEND_INSPECTOR_TREE_TO_CLIENT);
	}, 120);
	e.hook(B.SEND_INSPECTOR_TREE, t);
	let n = F(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || U.highPerfModeEnabled) return;
		let r = ir(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			nodeId: r?.selectedNodeId || "",
			state: null
		}, a = { currentTab: `custom-inspector:${t}` };
		i.nodeId && await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i, a))), t();
			}, z.GET_INSPECTOR_STATE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				nodeId: i.nodeId,
				state: i.state
			})));
		}, V.SEND_INSPECTOR_STATE_TO_CLIENT);
	}, 120);
	return e.hook(B.SEND_INSPECTOR_STATE, n), e.hook(B.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: e, nodeId: t, plugin: n }) => {
		let r = ir(e, n.descriptor.app);
		r && (r.selectedNodeId = t);
	}), e.hook(B.TIMELINE_LAYER_ADDED, ({ options: e, plugin: t }) => {
		$n(e, t.descriptor);
	}), e.hook(B.TIMELINE_EVENT_ADDED, ({ options: t, plugin: n }) => {
		U.highPerfModeEnabled || !U.timelineLayersState?.[n.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(t.layerId) || e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e(t)));
		}, V.SEND_TIMELINE_EVENT_TO_CLIENT);
	}), e.hook(B.GET_COMPONENT_INSTANCES, async ({ app: e }) => {
		let t = e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!t) return null;
		let n = t.id.toString();
		return [...t.instanceMap].filter(([e]) => e.split(":")[0] === n).map(([, e]) => e);
	}), e.hook(B.GET_COMPONENT_BOUNDS, async ({ instance: e }) => I(e)), e.hook(B.GET_COMPONENT_NAME, ({ instance: e }) => cn(e)), e.hook(B.COMPONENT_HIGHLIGHT, ({ uid: e }) => {
		let t = H.value.instanceMap.get(e);
		t && Mn(t);
	}), e.hook(B.COMPONENT_UNHIGHLIGHT, () => {
		Nn();
	}), e;
}
P.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [], P.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {}, P.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "", P.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [], P.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
var or = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function sr() {
	return {
		connected: !1,
		clientConnected: !1,
		vitePluginDetected: !0,
		appRecords: [],
		activeAppRecordId: "",
		tabs: [],
		commands: [],
		highPerfModeEnabled: !0,
		devtoolsClientDetected: {},
		perfUniqueGroupId: 0,
		timelineLayersState: Zn()
	};
}
P[or] ??= sr();
var cr = F((e) => {
	K.hooks.callHook(V.DEVTOOLS_STATE_UPDATED, { state: e });
});
F((e, t) => {
	K.hooks.callHook(V.DEVTOOLS_CONNECTED_UPDATED, {
		state: e,
		oldState: t
	});
});
var lr = new Proxy(P.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
	return t === "value" ? P.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : P.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), H = new Proxy(P.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
	return t === "value" ? P.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? P.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : P.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function ur() {
	cr({
		...P[or],
		appRecords: lr.value,
		activeAppRecordId: H.id,
		tabs: P.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: P.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function dr(e) {
	P.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, ur();
}
function fr(e) {
	P.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, ur();
}
var U = new Proxy(P[or], {
	get(e, t) {
		return t === "appRecords" ? lr : t === "activeAppRecordId" ? H.id : t === "tabs" ? P.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? P.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : P[or][t];
	},
	deleteProperty(e, t) {
		return delete e[t], !0;
	},
	set(e, t, n) {
		return e[t] = n, P[or][t] = n, !0;
	}
});
function pr(e = {}) {
	let { file: t, host: n, baseUrl: r = window.location.origin, line: i = 0, column: a = 0 } = e;
	if (t) {
		if (n === "chrome-extension") {
			let e = t.replace(/\\/g, "\\\\"), n = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
			fetch(`${n}__open-in-editor?file=${encodeURI(t)}`).then((t) => {
				if (!t.ok) {
					let t = `Opening component ${e} failed`;
					console.log(`%c${t}`, "color:red");
				}
			});
		} else if (U.vitePluginDetected) {
			let e = P.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? r;
			P.__VUE_INSPECTOR__.openInEditor(e, t, i, a);
		}
	}
}
P.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ??= [];
var mr = new Proxy(P.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function hr(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = e[n].defaultValue;
	}), t;
}
function gr(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function _r(e) {
	return (mr.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function vr(e, t) {
	let n = gr(e);
	if (n) {
		let e = localStorage.getItem(n);
		if (e) return JSON.parse(e);
	}
	return hr(e ? (mr.find((t) => t[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function yr(e, t) {
	let n = gr(e);
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(hr(t)));
}
function br(e, t, n) {
	let r = gr(e), i = localStorage.getItem(r), a = JSON.parse(i || "{}"), o = {
		...a,
		[t]: n
	};
	localStorage.setItem(r, JSON.stringify(o)), K.hooks.callHookWith((r) => {
		r.forEach((r) => r({
			pluginId: e,
			key: t,
			oldValue: a[t],
			newValue: n,
			settings: o
		}));
	}, z.SET_PLUGIN_SETTINGS);
}
var W = function(e) {
	return e.APP_INIT = "app:init", e.APP_UNMOUNT = "app:unmount", e.COMPONENT_UPDATED = "component:updated", e.COMPONENT_ADDED = "component:added", e.COMPONENT_REMOVED = "component:removed", e.COMPONENT_EMIT = "component:emit", e.PERFORMANCE_START = "perf:start", e.PERFORMANCE_END = "perf:end", e.ADD_ROUTE = "router:add-route", e.REMOVE_ROUTE = "router:remove-route", e.RENDER_TRACKED = "render:tracked", e.RENDER_TRIGGERED = "render:triggered", e.APP_CONNECTED = "app:connected", e.SETUP_DEVTOOLS_PLUGIN = "devtools-plugin:setup", e;
}({}), G = P.__VUE_DEVTOOLS_HOOK ??= Kt(), xr = {
	on: {
		vueAppInit(e) {
			G.hook(W.APP_INIT, e);
		},
		vueAppUnmount(e) {
			G.hook(W.APP_UNMOUNT, e);
		},
		vueAppConnected(e) {
			G.hook(W.APP_CONNECTED, e);
		},
		componentAdded(e) {
			return G.hook(W.COMPONENT_ADDED, e);
		},
		componentEmit(e) {
			return G.hook(W.COMPONENT_EMIT, e);
		},
		componentUpdated(e) {
			return G.hook(W.COMPONENT_UPDATED, e);
		},
		componentRemoved(e) {
			return G.hook(W.COMPONENT_REMOVED, e);
		},
		setupDevtoolsPlugin(e) {
			G.hook(W.SETUP_DEVTOOLS_PLUGIN, e);
		},
		perfStart(e) {
			return G.hook(W.PERFORMANCE_START, e);
		},
		perfEnd(e) {
			return G.hook(W.PERFORMANCE_END, e);
		}
	},
	setupDevToolsPlugin(e, t) {
		return G.callHook(W.SETUP_DEVTOOLS_PLUGIN, e, t);
	}
}, Sr = class {
	constructor({ plugin: e, ctx: t }) {
		this.hooks = t.hooks, this.plugin = e;
	}
	get on() {
		return {
			visitComponentTree: (e) => {
				this.hooks.hook(z.VISIT_COMPONENT_TREE, e);
			},
			inspectComponent: (e) => {
				this.hooks.hook(z.INSPECT_COMPONENT, e);
			},
			editComponentState: (e) => {
				this.hooks.hook(z.EDIT_COMPONENT_STATE, e);
			},
			getInspectorTree: (e) => {
				this.hooks.hook(z.GET_INSPECTOR_TREE, e);
			},
			getInspectorState: (e) => {
				this.hooks.hook(z.GET_INSPECTOR_STATE, e);
			},
			editInspectorState: (e) => {
				this.hooks.hook(z.EDIT_INSPECTOR_STATE, e);
			},
			inspectTimelineEvent: (e) => {
				this.hooks.hook(z.INSPECT_TIMELINE_EVENT, e);
			},
			timelineCleared: (e) => {
				this.hooks.hook(z.TIMELINE_CLEARED, e);
			},
			setPluginSettings: (e) => {
				this.hooks.hook(z.SET_PLUGIN_SETTINGS, e);
			}
		};
	}
	notifyComponentUpdate(e) {
		if (U.highPerfModeEnabled) return;
		let t = rr().find((e) => e.packageName === this.plugin.descriptor.packageName);
		if (t?.id) {
			if (e) {
				let t = [
					e.appContext.app,
					e.uid,
					e.parent?.uid,
					e
				];
				G.callHook(W.COMPONENT_UPDATED, ...t);
			} else G.callHook(W.COMPONENT_UPDATED);
			this.hooks.callHook(B.SEND_INSPECTOR_STATE, {
				inspectorId: t.id,
				plugin: this.plugin
			});
		}
	}
	addInspector(e) {
		this.hooks.callHook(B.ADD_INSPECTOR, {
			inspector: e,
			plugin: this.plugin
		}), this.plugin.descriptor.settings && yr(e.id, this.plugin.descriptor.settings);
	}
	sendInspectorTree(e) {
		U.highPerfModeEnabled || this.hooks.callHook(B.SEND_INSPECTOR_TREE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	sendInspectorState(e) {
		U.highPerfModeEnabled || this.hooks.callHook(B.SEND_INSPECTOR_STATE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	selectInspectorNode(e, t) {
		this.hooks.callHook(B.CUSTOM_INSPECTOR_SELECT_NODE, {
			inspectorId: e,
			nodeId: t,
			plugin: this.plugin
		});
	}
	visitComponentTree(e) {
		return this.hooks.callHook(z.VISIT_COMPONENT_TREE, e);
	}
	now() {
		return U.highPerfModeEnabled ? 0 : Date.now();
	}
	addTimelineLayer(e) {
		this.hooks.callHook(B.TIMELINE_LAYER_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	addTimelineEvent(e) {
		U.highPerfModeEnabled || this.hooks.callHook(B.TIMELINE_EVENT_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	getSettings(e) {
		return vr(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
	}
	getComponentInstances(e) {
		return this.hooks.callHook(B.GET_COMPONENT_INSTANCES, { app: e });
	}
	getComponentBounds(e) {
		return this.hooks.callHook(B.GET_COMPONENT_BOUNDS, { instance: e });
	}
	getComponentName(e) {
		return this.hooks.callHook(B.GET_COMPONENT_NAME, { instance: e });
	}
	highlightElement(e) {
		let t = e.__VUE_DEVTOOLS_NEXT_UID__;
		return this.hooks.callHook(B.COMPONENT_HIGHLIGHT, { uid: t });
	}
	unhighlightElement() {
		return this.hooks.callHook(B.COMPONENT_UNHIGHLIGHT);
	}
}, Cr = "__vue_devtool_undefined__", wr = "__vue_devtool_infinity__", Tr = "__vue_devtool_negative_infinity__", Er = "__vue_devtool_nan__";
Object.entries({
	[Cr]: "undefined",
	[Er]: "NaN",
	[wr]: "Infinity",
	[Tr]: "-Infinity"
}).reduce((e, [t, n]) => (e[n] = t, e), {}), P.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function Dr(e, t) {
	return xr.setupDevToolsPlugin(e, t);
}
function Or(e, t) {
	let [n, r] = e;
	if (n.app !== t) return;
	let i = new Sr({
		plugin: {
			setupFn: r,
			descriptor: n
		},
		ctx: K
	});
	n.packageName === "vuex" && i.on.editInspectorState((e) => {
		i.sendInspectorState(e.inspectorId);
	}), r(i);
}
function kr(e, t) {
	P.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || (!U.highPerfModeEnabled || t?.inspectingComponent) && (P.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), mr.forEach((t) => {
		Or(t, e);
	}));
}
var Ar = "__VUE_DEVTOOLS_ROUTER__", jr = "__VUE_DEVTOOLS_ROUTER_INFO__";
P[jr] ??= {
	currentRoute: null,
	routes: []
}, P[Ar] ??= {}, new Proxy(P[jr], { get(e, t) {
	return P[jr][t];
} }), new Proxy(P[Ar], { get(e, t) {
	if (t === "value") return P[Ar];
} });
function Mr(e) {
	let t = /* @__PURE__ */ new Map();
	return (e?.getRoutes() || []).filter((e) => !t.has(e.path) && t.set(e.path, 1));
}
function Nr(e) {
	return e.map((e) => {
		let { path: t, name: n, children: r, meta: i } = e;
		return r?.length && (r = Nr(r)), {
			path: t,
			name: n,
			children: r,
			meta: i
		};
	});
}
function Pr(e) {
	if (e) {
		let { fullPath: t, hash: n, href: r, path: i, name: a, matched: o, params: s, query: c } = e;
		return {
			fullPath: t,
			hash: n,
			href: r,
			path: i,
			name: a,
			params: s,
			query: c,
			matched: Nr(o)
		};
	}
	return e;
}
function Fr(e, t) {
	function n() {
		let t = e.app?.config.globalProperties.$router, n = Pr(t?.currentRoute.value), r = Nr(Mr(t)), i = console.warn;
		console.warn = () => {}, P[jr] = {
			currentRoute: n ? It(n) : {},
			routes: It(r)
		}, P[Ar] = t, console.warn = i;
	}
	n(), xr.on.componentUpdated(F(() => {
		t.value?.app === e.app && (n(), !U.highPerfModeEnabled && K.hooks.callHook(V.ROUTER_INFO_UPDATED, { state: P[jr] }));
	}, 200));
}
function Ir(e) {
	return {
		async getInspectorTree(t) {
			let n = {
				...t,
				app: H.value.app,
				rootNodes: []
			};
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n))), t();
				}, z.GET_INSPECTOR_TREE);
			}), n.rootNodes;
		},
		async getInspectorState(t) {
			let n = {
				...t,
				app: H.value.app,
				state: null
			}, r = { currentTab: `custom-inspector:${t.inspectorId}` };
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n, r))), t();
				}, z.GET_INSPECTOR_STATE);
			}), n.state;
		},
		editInspectorState(t) {
			let n = new Jn(), r = {
				...t,
				app: H.value.app,
				set: (e, r = t.path, i = t.state.value, a) => {
					n.set(e, r, i, a || n.createDefaultSetCallback(t.state));
				}
			};
			e.callHookWith((e) => {
				e.forEach((e) => e(r));
			}, z.EDIT_INSPECTOR_STATE);
		},
		sendInspectorState(t) {
			let n = ir(t);
			e.callHook(B.SEND_INSPECTOR_STATE, {
				inspectorId: t,
				plugin: {
					descriptor: n.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return zn();
		},
		cancelInspectComponentInspector() {
			return Rn();
		},
		getComponentRenderCode(e) {
			let t = un(H.value, e);
			if (t) return typeof t?.type == "function" ? t.type.toString() : t.render.toString();
		},
		scrollToComponent(e) {
			return Bn({ id: e });
		},
		openInEditor: pr,
		getVueInspector: Un,
		toggleApp(e, t) {
			let n = lr.value.find((t) => t.id === e);
			n && (fr(e), dr(n), Fr(n, H), tr(), kr(n.app, t));
		},
		inspectDOM(e) {
			let t = un(H.value, e);
			if (t) {
				let [e] = _n(t);
				e && (P.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = e);
			}
		},
		updatePluginSettings(e, t, n) {
			br(e, t, n);
		},
		getPluginSettings(e) {
			return {
				options: _r(e),
				values: vr(e)
			};
		}
	};
}
P.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: !1 };
var Lr = ar();
P.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
	hooks: Lr,
	get state() {
		return {
			...U,
			activeAppRecordId: H.id,
			activeAppRecord: H.value,
			appRecords: lr.value
		};
	},
	api: Ir(Lr)
};
var K = P.__VUE_DEVTOOLS_KIT_CONTEXT__, Rr = $t(((e, t) => {
	(function(e) {
		var n = {
			À: "A",
			Á: "A",
			Â: "A",
			Ã: "A",
			Ä: "Ae",
			Å: "A",
			Æ: "AE",
			Ç: "C",
			È: "E",
			É: "E",
			Ê: "E",
			Ë: "E",
			Ì: "I",
			Í: "I",
			Î: "I",
			Ï: "I",
			Ð: "D",
			Ñ: "N",
			Ò: "O",
			Ó: "O",
			Ô: "O",
			Õ: "O",
			Ö: "Oe",
			Ő: "O",
			Ø: "O",
			Ù: "U",
			Ú: "U",
			Û: "U",
			Ü: "Ue",
			Ű: "U",
			Ý: "Y",
			Þ: "TH",
			ß: "ss",
			à: "a",
			á: "a",
			â: "a",
			ã: "a",
			ä: "ae",
			å: "a",
			æ: "ae",
			ç: "c",
			è: "e",
			é: "e",
			ê: "e",
			ë: "e",
			ì: "i",
			í: "i",
			î: "i",
			ï: "i",
			ð: "d",
			ñ: "n",
			ò: "o",
			ó: "o",
			ô: "o",
			õ: "o",
			ö: "oe",
			ő: "o",
			ø: "o",
			ù: "u",
			ú: "u",
			û: "u",
			ü: "ue",
			ű: "u",
			ý: "y",
			þ: "th",
			ÿ: "y",
			ẞ: "SS",
			ا: "a",
			أ: "a",
			إ: "i",
			آ: "aa",
			ؤ: "u",
			ئ: "e",
			ء: "a",
			ب: "b",
			ت: "t",
			ث: "th",
			ج: "j",
			ح: "h",
			خ: "kh",
			د: "d",
			ذ: "th",
			ر: "r",
			ز: "z",
			س: "s",
			ش: "sh",
			ص: "s",
			ض: "dh",
			ط: "t",
			ظ: "z",
			ع: "a",
			غ: "gh",
			ف: "f",
			ق: "q",
			ك: "k",
			ل: "l",
			م: "m",
			ن: "n",
			ه: "h",
			و: "w",
			ي: "y",
			ى: "a",
			ة: "h",
			ﻻ: "la",
			ﻷ: "laa",
			ﻹ: "lai",
			ﻵ: "laa",
			گ: "g",
			چ: "ch",
			پ: "p",
			ژ: "zh",
			ک: "k",
			ی: "y",
			"َ": "a",
			"ً": "an",
			"ِ": "e",
			"ٍ": "en",
			"ُ": "u",
			"ٌ": "on",
			"ْ": "",
			"٠": "0",
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"۰": "0",
			"۱": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"۶": "6",
			"۷": "7",
			"۸": "8",
			"۹": "9",
			က: "k",
			ခ: "kh",
			ဂ: "g",
			ဃ: "ga",
			င: "ng",
			စ: "s",
			ဆ: "sa",
			ဇ: "z",
			စျ: "za",
			ည: "ny",
			ဋ: "t",
			ဌ: "ta",
			ဍ: "d",
			ဎ: "da",
			ဏ: "na",
			တ: "t",
			ထ: "ta",
			ဒ: "d",
			ဓ: "da",
			န: "n",
			ပ: "p",
			ဖ: "pa",
			ဗ: "b",
			ဘ: "ba",
			မ: "m",
			ယ: "y",
			ရ: "ya",
			လ: "l",
			ဝ: "w",
			သ: "th",
			ဟ: "h",
			ဠ: "la",
			အ: "a",
			"ြ": "y",
			"ျ": "ya",
			"ွ": "w",
			"ြွ": "yw",
			"ျွ": "ywa",
			"ှ": "h",
			ဧ: "e",
			"၏": "-e",
			ဣ: "i",
			ဤ: "-i",
			ဉ: "u",
			ဦ: "-u",
			ဩ: "aw",
			သြော: "aw",
			ဪ: "aw",
			"၀": "0",
			"၁": "1",
			"၂": "2",
			"၃": "3",
			"၄": "4",
			"၅": "5",
			"၆": "6",
			"၇": "7",
			"၈": "8",
			"၉": "9",
			"္": "",
			"့": "",
			"း": "",
			č: "c",
			ď: "d",
			ě: "e",
			ň: "n",
			ř: "r",
			š: "s",
			ť: "t",
			ů: "u",
			ž: "z",
			Č: "C",
			Ď: "D",
			Ě: "E",
			Ň: "N",
			Ř: "R",
			Š: "S",
			Ť: "T",
			Ů: "U",
			Ž: "Z",
			ހ: "h",
			ށ: "sh",
			ނ: "n",
			ރ: "r",
			ބ: "b",
			ޅ: "lh",
			ކ: "k",
			އ: "a",
			ވ: "v",
			މ: "m",
			ފ: "f",
			ދ: "dh",
			ތ: "th",
			ލ: "l",
			ގ: "g",
			ޏ: "gn",
			ސ: "s",
			ޑ: "d",
			ޒ: "z",
			ޓ: "t",
			ޔ: "y",
			ޕ: "p",
			ޖ: "j",
			ޗ: "ch",
			ޘ: "tt",
			ޙ: "hh",
			ޚ: "kh",
			ޛ: "th",
			ޜ: "z",
			ޝ: "sh",
			ޞ: "s",
			ޟ: "d",
			ޠ: "t",
			ޡ: "z",
			ޢ: "a",
			ޣ: "gh",
			ޤ: "q",
			ޥ: "w",
			"ަ": "a",
			"ާ": "aa",
			"ި": "i",
			"ީ": "ee",
			"ު": "u",
			"ޫ": "oo",
			"ެ": "e",
			"ޭ": "ey",
			"ޮ": "o",
			"ޯ": "oa",
			"ް": "",
			ა: "a",
			ბ: "b",
			გ: "g",
			დ: "d",
			ე: "e",
			ვ: "v",
			ზ: "z",
			თ: "t",
			ი: "i",
			კ: "k",
			ლ: "l",
			მ: "m",
			ნ: "n",
			ო: "o",
			პ: "p",
			ჟ: "zh",
			რ: "r",
			ს: "s",
			ტ: "t",
			უ: "u",
			ფ: "p",
			ქ: "k",
			ღ: "gh",
			ყ: "q",
			შ: "sh",
			ჩ: "ch",
			ც: "ts",
			ძ: "dz",
			წ: "ts",
			ჭ: "ch",
			ხ: "kh",
			ჯ: "j",
			ჰ: "h",
			α: "a",
			β: "v",
			γ: "g",
			δ: "d",
			ε: "e",
			ζ: "z",
			η: "i",
			θ: "th",
			ι: "i",
			κ: "k",
			λ: "l",
			μ: "m",
			ν: "n",
			ξ: "ks",
			ο: "o",
			π: "p",
			ρ: "r",
			σ: "s",
			τ: "t",
			υ: "y",
			φ: "f",
			χ: "x",
			ψ: "ps",
			ω: "o",
			ά: "a",
			έ: "e",
			ί: "i",
			ό: "o",
			ύ: "y",
			ή: "i",
			ώ: "o",
			ς: "s",
			ϊ: "i",
			ΰ: "y",
			ϋ: "y",
			ΐ: "i",
			Α: "A",
			Β: "B",
			Γ: "G",
			Δ: "D",
			Ε: "E",
			Ζ: "Z",
			Η: "I",
			Θ: "TH",
			Ι: "I",
			Κ: "K",
			Λ: "L",
			Μ: "M",
			Ν: "N",
			Ξ: "KS",
			Ο: "O",
			Π: "P",
			Ρ: "R",
			Σ: "S",
			Τ: "T",
			Υ: "Y",
			Φ: "F",
			Χ: "X",
			Ψ: "PS",
			Ω: "O",
			Ά: "A",
			Έ: "E",
			Ί: "I",
			Ό: "O",
			Ύ: "Y",
			Ή: "I",
			Ώ: "O",
			Ϊ: "I",
			Ϋ: "Y",
			ā: "a",
			ē: "e",
			ģ: "g",
			ī: "i",
			ķ: "k",
			ļ: "l",
			ņ: "n",
			ū: "u",
			Ā: "A",
			Ē: "E",
			Ģ: "G",
			Ī: "I",
			Ķ: "k",
			Ļ: "L",
			Ņ: "N",
			Ū: "U",
			Ќ: "Kj",
			ќ: "kj",
			Љ: "Lj",
			љ: "lj",
			Њ: "Nj",
			њ: "nj",
			Тс: "Ts",
			тс: "ts",
			ą: "a",
			ć: "c",
			ę: "e",
			ł: "l",
			ń: "n",
			ś: "s",
			ź: "z",
			ż: "z",
			Ą: "A",
			Ć: "C",
			Ę: "E",
			Ł: "L",
			Ń: "N",
			Ś: "S",
			Ź: "Z",
			Ż: "Z",
			Є: "Ye",
			І: "I",
			Ї: "Yi",
			Ґ: "G",
			є: "ye",
			і: "i",
			ї: "yi",
			ґ: "g",
			ă: "a",
			Ă: "A",
			ș: "s",
			Ș: "S",
			ț: "t",
			Ț: "T",
			ţ: "t",
			Ţ: "T",
			а: "a",
			б: "b",
			в: "v",
			г: "g",
			д: "d",
			е: "e",
			ё: "yo",
			ж: "zh",
			з: "z",
			и: "i",
			й: "i",
			к: "k",
			л: "l",
			м: "m",
			н: "n",
			о: "o",
			п: "p",
			р: "r",
			с: "s",
			т: "t",
			у: "u",
			ф: "f",
			х: "kh",
			ц: "c",
			ч: "ch",
			ш: "sh",
			щ: "sh",
			ъ: "",
			ы: "y",
			ь: "",
			э: "e",
			ю: "yu",
			я: "ya",
			А: "A",
			Б: "B",
			В: "V",
			Г: "G",
			Д: "D",
			Е: "E",
			Ё: "Yo",
			Ж: "Zh",
			З: "Z",
			И: "I",
			Й: "I",
			К: "K",
			Л: "L",
			М: "M",
			Н: "N",
			О: "O",
			П: "P",
			Р: "R",
			С: "S",
			Т: "T",
			У: "U",
			Ф: "F",
			Х: "Kh",
			Ц: "C",
			Ч: "Ch",
			Ш: "Sh",
			Щ: "Sh",
			Ъ: "",
			Ы: "Y",
			Ь: "",
			Э: "E",
			Ю: "Yu",
			Я: "Ya",
			ђ: "dj",
			ј: "j",
			ћ: "c",
			џ: "dz",
			Ђ: "Dj",
			Ј: "j",
			Ћ: "C",
			Џ: "Dz",
			ľ: "l",
			ĺ: "l",
			ŕ: "r",
			Ľ: "L",
			Ĺ: "L",
			Ŕ: "R",
			ş: "s",
			Ş: "S",
			ı: "i",
			İ: "I",
			ğ: "g",
			Ğ: "G",
			ả: "a",
			Ả: "A",
			ẳ: "a",
			Ẳ: "A",
			ẩ: "a",
			Ẩ: "A",
			đ: "d",
			Đ: "D",
			ẹ: "e",
			Ẹ: "E",
			ẽ: "e",
			Ẽ: "E",
			ẻ: "e",
			Ẻ: "E",
			ế: "e",
			Ế: "E",
			ề: "e",
			Ề: "E",
			ệ: "e",
			Ệ: "E",
			ễ: "e",
			Ễ: "E",
			ể: "e",
			Ể: "E",
			ỏ: "o",
			ọ: "o",
			Ọ: "o",
			ố: "o",
			Ố: "O",
			ồ: "o",
			Ồ: "O",
			ổ: "o",
			Ổ: "O",
			ộ: "o",
			Ộ: "O",
			ỗ: "o",
			Ỗ: "O",
			ơ: "o",
			Ơ: "O",
			ớ: "o",
			Ớ: "O",
			ờ: "o",
			Ờ: "O",
			ợ: "o",
			Ợ: "O",
			ỡ: "o",
			Ỡ: "O",
			Ở: "o",
			ở: "o",
			ị: "i",
			Ị: "I",
			ĩ: "i",
			Ĩ: "I",
			ỉ: "i",
			Ỉ: "i",
			ủ: "u",
			Ủ: "U",
			ụ: "u",
			Ụ: "U",
			ũ: "u",
			Ũ: "U",
			ư: "u",
			Ư: "U",
			ứ: "u",
			Ứ: "U",
			ừ: "u",
			Ừ: "U",
			ự: "u",
			Ự: "U",
			ữ: "u",
			Ữ: "U",
			ử: "u",
			Ử: "ư",
			ỷ: "y",
			Ỷ: "y",
			ỳ: "y",
			Ỳ: "Y",
			ỵ: "y",
			Ỵ: "Y",
			ỹ: "y",
			Ỹ: "Y",
			ạ: "a",
			Ạ: "A",
			ấ: "a",
			Ấ: "A",
			ầ: "a",
			Ầ: "A",
			ậ: "a",
			Ậ: "A",
			ẫ: "a",
			Ẫ: "A",
			ắ: "a",
			Ắ: "A",
			ằ: "a",
			Ằ: "A",
			ặ: "a",
			Ặ: "A",
			ẵ: "a",
			Ẵ: "A",
			"⓪": "0",
			"①": "1",
			"②": "2",
			"③": "3",
			"④": "4",
			"⑤": "5",
			"⑥": "6",
			"⑦": "7",
			"⑧": "8",
			"⑨": "9",
			"⑩": "10",
			"⑪": "11",
			"⑫": "12",
			"⑬": "13",
			"⑭": "14",
			"⑮": "15",
			"⑯": "16",
			"⑰": "17",
			"⑱": "18",
			"⑲": "18",
			"⑳": "18",
			"⓵": "1",
			"⓶": "2",
			"⓷": "3",
			"⓸": "4",
			"⓹": "5",
			"⓺": "6",
			"⓻": "7",
			"⓼": "8",
			"⓽": "9",
			"⓾": "10",
			"⓿": "0",
			"⓫": "11",
			"⓬": "12",
			"⓭": "13",
			"⓮": "14",
			"⓯": "15",
			"⓰": "16",
			"⓱": "17",
			"⓲": "18",
			"⓳": "19",
			"⓴": "20",
			"Ⓐ": "A",
			"Ⓑ": "B",
			"Ⓒ": "C",
			"Ⓓ": "D",
			"Ⓔ": "E",
			"Ⓕ": "F",
			"Ⓖ": "G",
			"Ⓗ": "H",
			"Ⓘ": "I",
			"Ⓙ": "J",
			"Ⓚ": "K",
			"Ⓛ": "L",
			"Ⓜ": "M",
			"Ⓝ": "N",
			"Ⓞ": "O",
			"Ⓟ": "P",
			"Ⓠ": "Q",
			"Ⓡ": "R",
			"Ⓢ": "S",
			"Ⓣ": "T",
			"Ⓤ": "U",
			"Ⓥ": "V",
			"Ⓦ": "W",
			"Ⓧ": "X",
			"Ⓨ": "Y",
			"Ⓩ": "Z",
			"ⓐ": "a",
			"ⓑ": "b",
			"ⓒ": "c",
			"ⓓ": "d",
			"ⓔ": "e",
			"ⓕ": "f",
			"ⓖ": "g",
			"ⓗ": "h",
			"ⓘ": "i",
			"ⓙ": "j",
			"ⓚ": "k",
			"ⓛ": "l",
			"ⓜ": "m",
			"ⓝ": "n",
			"ⓞ": "o",
			"ⓟ": "p",
			"ⓠ": "q",
			"ⓡ": "r",
			"ⓢ": "s",
			"ⓣ": "t",
			"ⓤ": "u",
			"ⓦ": "v",
			"ⓥ": "w",
			"ⓧ": "x",
			"ⓨ": "y",
			"ⓩ": "z",
			"“": "\"",
			"”": "\"",
			"‘": "'",
			"’": "'",
			"∂": "d",
			ƒ: "f",
			"™": "(TM)",
			"©": "(C)",
			œ: "oe",
			Œ: "OE",
			"®": "(R)",
			"†": "+",
			"℠": "(SM)",
			"…": "...",
			"˚": "o",
			º: "o",
			ª: "a",
			"•": "*",
			"၊": ",",
			"။": ".",
			$: "USD",
			"€": "EUR",
			"₢": "BRN",
			"₣": "FRF",
			"£": "GBP",
			"₤": "ITL",
			"₦": "NGN",
			"₧": "ESP",
			"₩": "KRW",
			"₪": "ILS",
			"₫": "VND",
			"₭": "LAK",
			"₮": "MNT",
			"₯": "GRD",
			"₱": "ARS",
			"₲": "PYG",
			"₳": "ARA",
			"₴": "UAH",
			"₵": "GHS",
			"¢": "cent",
			"¥": "CNY",
			元: "CNY",
			円: "YEN",
			"﷼": "IRR",
			"₠": "EWE",
			"฿": "THB",
			"₨": "INR",
			"₹": "INR",
			"₰": "PF",
			"₺": "TRY",
			"؋": "AFN",
			"₼": "AZN",
			лв: "BGN",
			"៛": "KHR",
			"₡": "CRC",
			"₸": "KZT",
			ден: "MKD",
			zł: "PLN",
			"₽": "RUB",
			"₾": "GEL"
		}, r = ["်", "ް"], i = {
			"ာ": "a",
			"ါ": "a",
			"ေ": "e",
			"ဲ": "e",
			"ိ": "i",
			"ီ": "i",
			"ို": "o",
			"ု": "u",
			"ူ": "u",
			"ေါင်": "aung",
			"ော": "aw",
			"ော်": "aw",
			"ေါ": "aw",
			"ေါ်": "aw",
			"်": "်",
			က်: "et",
			"ိုက်": "aik",
			"ောက်": "auk",
			င်: "in",
			"ိုင်": "aing",
			"ောင်": "aung",
			စ်: "it",
			ည်: "i",
			တ်: "at",
			"ိတ်": "eik",
			"ုတ်": "ok",
			"ွတ်": "ut",
			"ေတ်": "it",
			ဒ်: "d",
			"ိုဒ်": "ok",
			"ုဒ်": "ait",
			န်: "an",
			"ာန်": "an",
			"ိန်": "ein",
			"ုန်": "on",
			"ွန်": "un",
			ပ်: "at",
			"ိပ်": "eik",
			"ုပ်": "ok",
			"ွပ်": "ut",
			န်ုပ်: "nub",
			မ်: "an",
			"ိမ်": "ein",
			"ုမ်": "on",
			"ွမ်": "un",
			ယ်: "e",
			"ိုလ်": "ol",
			ဉ်: "in",
			"ံ": "an",
			"ိံ": "ein",
			"ုံ": "on",
			"ައް": "ah",
			"ަށް": "ah"
		}, a = {
			en: {},
			az: {
				ç: "c",
				ə: "e",
				ğ: "g",
				ı: "i",
				ö: "o",
				ş: "s",
				ü: "u",
				Ç: "C",
				Ə: "E",
				Ğ: "G",
				İ: "I",
				Ö: "O",
				Ş: "S",
				Ü: "U"
			},
			cs: {
				č: "c",
				ď: "d",
				ě: "e",
				ň: "n",
				ř: "r",
				š: "s",
				ť: "t",
				ů: "u",
				ž: "z",
				Č: "C",
				Ď: "D",
				Ě: "E",
				Ň: "N",
				Ř: "R",
				Š: "S",
				Ť: "T",
				Ů: "U",
				Ž: "Z"
			},
			fi: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			hu: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O",
				ü: "u",
				Ü: "U",
				ű: "u",
				Ű: "U"
			},
			lt: {
				ą: "a",
				č: "c",
				ę: "e",
				ė: "e",
				į: "i",
				š: "s",
				ų: "u",
				ū: "u",
				ž: "z",
				Ą: "A",
				Č: "C",
				Ę: "E",
				Ė: "E",
				Į: "I",
				Š: "S",
				Ų: "U",
				Ū: "U"
			},
			lv: {
				ā: "a",
				č: "c",
				ē: "e",
				ģ: "g",
				ī: "i",
				ķ: "k",
				ļ: "l",
				ņ: "n",
				š: "s",
				ū: "u",
				ž: "z",
				Ā: "A",
				Č: "C",
				Ē: "E",
				Ģ: "G",
				Ī: "i",
				Ķ: "k",
				Ļ: "L",
				Ņ: "N",
				Š: "S",
				Ū: "u",
				Ž: "Z"
			},
			pl: {
				ą: "a",
				ć: "c",
				ę: "e",
				ł: "l",
				ń: "n",
				ó: "o",
				ś: "s",
				ź: "z",
				ż: "z",
				Ą: "A",
				Ć: "C",
				Ę: "e",
				Ł: "L",
				Ń: "N",
				Ó: "O",
				Ś: "S",
				Ź: "Z",
				Ż: "Z"
			},
			sv: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			sk: {
				ä: "a",
				Ä: "A"
			},
			sr: {
				љ: "lj",
				њ: "nj",
				Љ: "Lj",
				Њ: "Nj",
				đ: "dj",
				Đ: "Dj"
			},
			tr: {
				Ü: "U",
				Ö: "O",
				ü: "u",
				ö: "o"
			}
		}, o = {
			ar: {
				"∆": "delta",
				"∞": "la-nihaya",
				"♥": "hob",
				"&": "wa",
				"|": "aw",
				"<": "aqal-men",
				">": "akbar-men",
				"∑": "majmou",
				"¤": "omla"
			},
			az: {},
			ca: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "amor",
				"&": "i",
				"|": "o",
				"<": "menys que",
				">": "mes que",
				"∑": "suma dels",
				"¤": "moneda"
			},
			cs: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "nebo",
				"<": "mensi nez",
				">": "vetsi nez",
				"∑": "soucet",
				"¤": "mena"
			},
			de: {
				"∆": "delta",
				"∞": "unendlich",
				"♥": "Liebe",
				"&": "und",
				"|": "oder",
				"<": "kleiner als",
				">": "groesser als",
				"∑": "Summe von",
				"¤": "Waehrung"
			},
			dv: {
				"∆": "delta",
				"∞": "kolunulaa",
				"♥": "loabi",
				"&": "aai",
				"|": "noonee",
				"<": "ah vure kuda",
				">": "ah vure bodu",
				"∑": "jumula",
				"¤": "faisaa"
			},
			en: {
				"∆": "delta",
				"∞": "infinity",
				"♥": "love",
				"&": "and",
				"|": "or",
				"<": "less than",
				">": "greater than",
				"∑": "sum",
				"¤": "currency"
			},
			es: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "y",
				"|": "u",
				"<": "menos que",
				">": "mas que",
				"∑": "suma de los",
				"¤": "moneda"
			},
			fa: {
				"∆": "delta",
				"∞": "bi-nahayat",
				"♥": "eshgh",
				"&": "va",
				"|": "ya",
				"<": "kamtar-az",
				">": "bishtar-az",
				"∑": "majmooe",
				"¤": "vahed"
			},
			fi: {
				"∆": "delta",
				"∞": "aarettomyys",
				"♥": "rakkaus",
				"&": "ja",
				"|": "tai",
				"<": "pienempi kuin",
				">": "suurempi kuin",
				"∑": "summa",
				"¤": "valuutta"
			},
			fr: {
				"∆": "delta",
				"∞": "infiniment",
				"♥": "Amour",
				"&": "et",
				"|": "ou",
				"<": "moins que",
				">": "superieure a",
				"∑": "somme des",
				"¤": "monnaie"
			},
			ge: {
				"∆": "delta",
				"∞": "usasruloba",
				"♥": "siqvaruli",
				"&": "da",
				"|": "an",
				"<": "naklebi",
				">": "meti",
				"∑": "jami",
				"¤": "valuta"
			},
			gr: {},
			hu: {
				"∆": "delta",
				"∞": "vegtelen",
				"♥": "szerelem",
				"&": "es",
				"|": "vagy",
				"<": "kisebb mint",
				">": "nagyobb mint",
				"∑": "szumma",
				"¤": "penznem"
			},
			it: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amore",
				"&": "e",
				"|": "o",
				"<": "minore di",
				">": "maggiore di",
				"∑": "somma",
				"¤": "moneta"
			},
			lt: {
				"∆": "delta",
				"∞": "begalybe",
				"♥": "meile",
				"&": "ir",
				"|": "ar",
				"<": "maziau nei",
				">": "daugiau nei",
				"∑": "suma",
				"¤": "valiuta"
			},
			lv: {
				"∆": "delta",
				"∞": "bezgaliba",
				"♥": "milestiba",
				"&": "un",
				"|": "vai",
				"<": "mazak neka",
				">": "lielaks neka",
				"∑": "summa",
				"¤": "valuta"
			},
			my: {
				"∆": "kwahkhyaet",
				"∞": "asaonasme",
				"♥": "akhyait",
				"&": "nhin",
				"|": "tho",
				"<": "ngethaw",
				">": "kyithaw",
				"∑": "paungld",
				"¤": "ngwekye"
			},
			mk: {},
			nl: {
				"∆": "delta",
				"∞": "oneindig",
				"♥": "liefde",
				"&": "en",
				"|": "of",
				"<": "kleiner dan",
				">": "groter dan",
				"∑": "som",
				"¤": "valuta"
			},
			pl: {
				"∆": "delta",
				"∞": "nieskonczonosc",
				"♥": "milosc",
				"&": "i",
				"|": "lub",
				"<": "mniejsze niz",
				">": "wieksze niz",
				"∑": "suma",
				"¤": "waluta"
			},
			pt: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "e",
				"|": "ou",
				"<": "menor que",
				">": "maior que",
				"∑": "soma",
				"¤": "moeda"
			},
			ro: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "dragoste",
				"&": "si",
				"|": "sau",
				"<": "mai mic ca",
				">": "mai mare ca",
				"∑": "suma",
				"¤": "valuta"
			},
			ru: {
				"∆": "delta",
				"∞": "beskonechno",
				"♥": "lubov",
				"&": "i",
				"|": "ili",
				"<": "menshe",
				">": "bolshe",
				"∑": "summa",
				"¤": "valjuta"
			},
			sk: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "alebo",
				"<": "menej ako",
				">": "viac ako",
				"∑": "sucet",
				"¤": "mena"
			},
			sr: {},
			tr: {
				"∆": "delta",
				"∞": "sonsuzluk",
				"♥": "ask",
				"&": "ve",
				"|": "veya",
				"<": "kucuktur",
				">": "buyuktur",
				"∑": "toplam",
				"¤": "para birimi"
			},
			uk: {
				"∆": "delta",
				"∞": "bezkinechnist",
				"♥": "lubov",
				"&": "i",
				"|": "abo",
				"<": "menshe",
				">": "bilshe",
				"∑": "suma",
				"¤": "valjuta"
			},
			vn: {
				"∆": "delta",
				"∞": "vo cuc",
				"♥": "yeu",
				"&": "va",
				"|": "hoac",
				"<": "nho hon",
				">": "lon hon",
				"∑": "tong",
				"¤": "tien te"
			}
		}, s = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			",",
			"/"
		].join(""), c = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			","
		].join(""), l = [
			".",
			"!",
			"~",
			"*",
			"'",
			"(",
			")"
		].join(""), u = function(e, t) {
			var u = "-", d = "", p = "", te = !0, m = {}, h, g, _, v, y, b, x, S, C, w, T, ne, E, D, O = "";
			if (typeof e != "string") return "";
			if (typeof t == "string" && (u = t), x = o.en, S = a.en, typeof t == "object") for (T in h = t.maintainCase || !1, m = t.custom && typeof t.custom == "object" ? t.custom : m, _ = +t.truncate > 1 && t.truncate || !1, v = t.uric || !1, y = t.uricNoSlash || !1, b = t.mark || !1, te = t.symbols !== !1 && t.lang !== !1, u = t.separator || u, v && (O += s), y && (O += c), b && (O += l), x = t.lang && o[t.lang] && te ? o[t.lang] : te ? o.en : {}, S = t.lang && a[t.lang] ? a[t.lang] : t.lang === !1 || t.lang === !0 ? {} : a.en, t.titleCase && typeof t.titleCase.length == "number" && Array.prototype.toString.call(t.titleCase) ? (t.titleCase.forEach(function(e) {
				m[e + ""] = e + "";
			}), g = !0) : g = !!t.titleCase, t.custom && typeof t.custom.length == "number" && Array.prototype.toString.call(t.custom) && t.custom.forEach(function(e) {
				m[e + ""] = e + "";
			}), Object.keys(m).forEach(function(t) {
				var n = t.length > 1 ? RegExp("\\b" + f(t) + "\\b", "gi") : new RegExp(f(t), "gi");
				e = e.replace(n, m[t]);
			}), m) O += T;
			for (O += u, O = f(O), e = e.replace(/(^\s+|\s+$)/g, ""), E = !1, D = !1, w = 0, ne = e.length; w < ne; w++) T = e[w], ee(T, m) ? E = !1 : S[T] ? (T = E && S[T].match(/[A-Za-z0-9]/) ? " " + S[T] : S[T], E = !1) : T in n ? (w + 1 < ne && r.indexOf(e[w + 1]) >= 0 ? (p += T, T = "") : D === !0 ? (T = i[p] + n[T], p = "") : T = E && n[T].match(/[A-Za-z0-9]/) ? " " + n[T] : n[T], E = !1, D = !1) : T in i ? (p += T, T = "", w === ne - 1 && (T = i[p]), D = !0) : x[T] && !(v && s.indexOf(T) !== -1) && !(y && c.indexOf(T) !== -1) ? (T = E || d.substr(-1).match(/[A-Za-z0-9]/) ? u + x[T] : x[T], T += e[w + 1] !== void 0 && e[w + 1].match(/[A-Za-z0-9]/) ? u : "", E = !0) : (D === !0 ? (T = i[p] + T, p = "", D = !1) : E && (/[A-Za-z0-9]/.test(T) || d.substr(-1).match(/A-Za-z0-9]/)) && (T = " " + T), E = !1), d += T.replace(RegExp("[^\\w\\s" + O + "_-]", "g"), u);
			return g && (d = d.replace(/(\w)(\S*)/g, function(e, t, n) {
				var r = t.toUpperCase() + (n === null ? "" : n);
				return Object.keys(m).indexOf(r.toLowerCase()) < 0 ? r : r.toLowerCase();
			})), d = d.replace(/\s+/g, u).replace(RegExp("\\" + u + "+", "g"), u).replace(RegExp("(^\\" + u + "+|\\" + u + "+$)", "g"), ""), _ && d.length > _ && (C = d.charAt(_) === u, d = d.slice(0, _), C || (d = d.slice(0, d.lastIndexOf(u)))), !h && !g && (d = d.toLowerCase()), d;
		}, d = function(e) {
			return function(t) {
				return u(t, e);
			};
		}, f = function(e) {
			return e.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
		}, ee = function(e, t) {
			for (var n in t) if (t[n] === e) return !0;
		};
		if (t !== void 0 && t.exports) t.exports = u, t.exports.createSlug = d;
		else if (typeof define < "u" && define.amd) define([], function() {
			return u;
		});
		else try {
			if (e.getSlug || e.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
			e.getSlug = u, e.createSlug = d;
		} catch {}
	})(e);
}));
tn($t(((e, t) => {
	t.exports = Rr();
}))(), 1), P.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
};
function zr(e) {
	U.highPerfModeEnabled = e ?? !U.highPerfModeEnabled, !e && H.value && kr(H.value.app);
}
function Br(e) {
	U.devtoolsClientDetected = {
		...U.devtoolsClientDetected,
		...e
	}, zr(!Object.values(U.devtoolsClientDetected).some(Boolean));
}
P.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= Br;
var Vr = class {
	constructor() {
		this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
	}
	set(e, t) {
		this.keyToValue.set(e, t), this.valueToKey.set(t, e);
	}
	getByKey(e) {
		return this.keyToValue.get(e);
	}
	getByValue(e) {
		return this.valueToKey.get(e);
	}
	clear() {
		this.keyToValue.clear(), this.valueToKey.clear();
	}
}, Hr = class {
	constructor(e) {
		this.generateIdentifier = e, this.kv = new Vr();
	}
	register(e, t) {
		this.kv.getByValue(e) || (t ||= this.generateIdentifier(e), this.kv.set(t, e));
	}
	clear() {
		this.kv.clear();
	}
	getIdentifier(e) {
		return this.kv.getByValue(e);
	}
	getValue(e) {
		return this.kv.getByKey(e);
	}
}, Ur = class extends Hr {
	constructor() {
		super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
	}
	register(e, t) {
		typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
	}
	getAllowedProps(e) {
		return this.classToAllowedProps.get(e);
	}
};
function Wr(e) {
	if ("values" in Object) return Object.values(e);
	let t = [];
	for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
	return t;
}
function Gr(e, t) {
	let n = Wr(e);
	if ("find" in n) return n.find(t);
	let r = n;
	for (let e = 0; e < r.length; e++) {
		let n = r[e];
		if (t(n)) return n;
	}
}
function q(e, t) {
	Object.entries(e).forEach(([e, n]) => t(n, e));
}
function Kr(e, t) {
	return e.indexOf(t) !== -1;
}
function qr(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var Jr = class {
	constructor() {
		this.transfomers = {};
	}
	register(e) {
		this.transfomers[e.name] = e;
	}
	findApplicable(e) {
		return Gr(this.transfomers, (t) => t.isApplicable(e));
	}
	findByName(e) {
		return this.transfomers[e];
	}
}, Yr = (e) => Object.prototype.toString.call(e).slice(8, -1), Xr = (e) => e === void 0, Zr = (e) => e === null, Qr = (e) => typeof e != "object" || !e || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null || Object.getPrototypeOf(e) === Object.prototype, $r = (e) => Qr(e) && Object.keys(e).length === 0, J = (e) => Array.isArray(e), ei = (e) => typeof e == "string", ti = (e) => typeof e == "number" && !isNaN(e), ni = (e) => typeof e == "boolean", ri = (e) => e instanceof RegExp, ii = (e) => e instanceof Map, ai = (e) => e instanceof Set, oi = (e) => Yr(e) === "Symbol", si = (e) => e instanceof Date && !isNaN(e.valueOf()), ci = (e) => e instanceof Error, li = (e) => typeof e == "number" && isNaN(e), ui = (e) => ni(e) || Zr(e) || Xr(e) || ti(e) || ei(e) || oi(e), di = (e) => typeof e == "bigint", fi = (e) => e === Infinity || e === -Infinity, pi = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), mi = (e) => e instanceof URL, hi = (e) => e.replace(/\./g, "\\."), gi = (e) => e.map(String).map(hi).join("."), _i = (e) => {
	let t = [], n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "\\" && e.charAt(r + 1) === ".") {
			n += ".", r++;
			continue;
		}
		if (i === ".") {
			t.push(n), n = "";
			continue;
		}
		n += i;
	}
	let r = n;
	return t.push(r), t;
};
function Y(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var vi = [
	Y(Xr, "undefined", () => null, () => void 0),
	Y(di, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
	Y(si, "Date", (e) => e.toISOString(), (e) => new Date(e)),
	Y(ci, "Error", (e, t) => {
		let n = {
			name: e.name,
			message: e.message
		};
		return t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}, (e, t) => {
		let n = Error(e.message);
		return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}),
	Y(ri, "regexp", (e) => "" + e, (e) => {
		let t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
		return new RegExp(t, n);
	}),
	Y(ai, "set", (e) => [...e.values()], (e) => new Set(e)),
	Y(ii, "map", (e) => [...e.entries()], (e) => new Map(e)),
	Y((e) => li(e) || fi(e), "number", (e) => li(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
	Y((e) => e === 0 && 1 / e == -Infinity, "number", () => "-0", Number),
	Y(mi, "URL", (e) => e.toString(), (e) => new URL(e))
];
function yi(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var bi = yi((e, t) => oi(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
	let r = n.symbolRegistry.getValue(t[1]);
	if (!r) throw Error("Trying to deserialize unknown symbol");
	return r;
}), xi = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Si = yi(pi, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
	let n = xi[t[1]];
	if (!n) throw Error("Trying to deserialize unknown typed array");
	return new n(e);
});
function Ci(e, t) {
	return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var wi = yi(Ci, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
	let n = t.classRegistry.getAllowedProps(e.constructor);
	if (!n) return { ...e };
	let r = {};
	return n.forEach((t) => {
		r[t] = e[t];
	}), r;
}, (e, t, n) => {
	let r = n.classRegistry.getValue(t[1]);
	if (!r) throw Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
	return Object.assign(Object.create(r.prototype), e);
}), Ti = yi((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
	let r = n.customTransformerRegistry.findByName(t[1]);
	if (!r) throw Error("Trying to deserialize unknown custom value");
	return r.deserialize(e);
}), Ei = [
	wi,
	bi,
	Ti,
	Si
], Di = (e, t) => {
	let n = qr(Ei, (n) => n.isApplicable(e, t));
	if (n) return {
		value: n.transform(e, t),
		type: n.annotation(e, t)
	};
	let r = qr(vi, (n) => n.isApplicable(e, t));
	if (r) return {
		value: r.transform(e, t),
		type: r.annotation
	};
}, Oi = {};
vi.forEach((e) => {
	Oi[e.annotation] = e;
});
var ki = (e, t, n) => {
	if (J(t)) switch (t[0]) {
		case "symbol": return bi.untransform(e, t, n);
		case "class": return wi.untransform(e, t, n);
		case "custom": return Ti.untransform(e, t, n);
		case "typed-array": return Si.untransform(e, t, n);
		default: throw Error("Unknown transformation: " + t);
	}
	else {
		let r = Oi[t];
		if (!r) throw Error("Unknown transformation: " + t);
		return r.untransform(e, n);
	}
}, X = (e, t) => {
	if (t > e.size) throw Error("index out of bounds");
	let n = e.keys();
	for (; t > 0;) n.next(), t--;
	return n.next().value;
};
function Ai(e) {
	if (Kr(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
	if (Kr(e, "prototype")) throw Error("prototype is not allowed as a property");
	if (Kr(e, "constructor")) throw Error("constructor is not allowed as a property");
}
var ji = (e, t) => {
	Ai(t);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (ai(e)) e = X(e, +r);
		else if (ii(e)) {
			let i = +r, a = +t[++n] == 0 ? "key" : "value", o = X(e, i);
			switch (a) {
				case "key":
					e = o;
					break;
				case "value": e = e.get(o);
			}
		} else e = e[r];
	}
	return e;
}, Mi = (e, t, n) => {
	if (Ai(t), t.length === 0) return n(e);
	let r = e;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (J(r)) {
			let e = +n;
			r = r[e];
		} else if (Qr(r)) r = r[n];
		else if (ai(r)) {
			let e = +n;
			r = X(r, e);
		} else if (ii(r)) {
			if (e === t.length - 2) break;
			let i = +n, a = +t[++e] == 0 ? "key" : "value", o = X(r, i);
			switch (a) {
				case "key":
					r = o;
					break;
				case "value": r = r.get(o);
			}
		}
	}
	let i = t[t.length - 1];
	if (J(r) ? r[+i] = n(r[+i]) : Qr(r) && (r[i] = n(r[i])), ai(r)) {
		let e = X(r, +i), t = n(e);
		e !== t && (r.delete(e), r.add(t));
	}
	if (ii(r)) {
		let e = +t[t.length - 2], a = X(r, e);
		switch (+i == 0 ? "key" : "value") {
			case "key": {
				let e = n(a);
				r.set(e, r.get(a)), e !== a && r.delete(a);
				break;
			}
			case "value": r.set(a, n(r.get(a)));
		}
	}
	return e;
};
function Ni(e, t, n = []) {
	if (!e) return;
	if (!J(e)) {
		q(e, (e, r) => Ni(e, t, [...n, ..._i(r)]));
		return;
	}
	let [r, i] = e;
	i && q(i, (e, r) => {
		Ni(e, t, [...n, ..._i(r)]);
	}), t(r, n);
}
function Pi(e, t, n) {
	return Ni(t, (t, r) => {
		e = Mi(e, r, (e) => ki(e, t, n));
	}), e;
}
function Fi(e, t) {
	function n(t, n) {
		let r = ji(e, _i(n));
		t.map(_i).forEach((t) => {
			e = Mi(e, t, () => r);
		});
	}
	if (J(t)) {
		let [r, i] = t;
		r.forEach((t) => {
			e = Mi(e, _i(t), () => e);
		}), i && q(i, n);
	} else q(t, n);
	return e;
}
var Ii = (e, t) => Qr(e) || J(e) || ii(e) || ai(e) || Ci(e, t);
function Li(e, t, n) {
	let r = n.get(e);
	r ? r.push(t) : n.set(e, [t]);
}
function Ri(e, t) {
	let n = {}, r;
	return e.forEach((e) => {
		if (e.length <= 1) return;
		t || (e = e.map((e) => e.map(String)).sort((e, t) => e.length - t.length));
		let [i, ...a] = e;
		i.length === 0 ? r = a.map(gi) : n[gi(i)] = a.map(gi);
	}), r ? $r(n) ? [r] : [r, n] : $r(n) ? void 0 : n;
}
var zi = (e, t, n, r, i = [], a = [], o = /* @__PURE__ */ new Map()) => {
	let s = ui(e);
	if (!s) {
		Li(e, i, t);
		let n = o.get(e);
		if (n) return r ? { transformedValue: null } : n;
	}
	if (!Ii(e, n)) {
		let t = Di(e, n), r = t ? {
			transformedValue: t.value,
			annotations: [t.type]
		} : { transformedValue: e };
		return s || o.set(e, r), r;
	}
	if (Kr(a, e)) return { transformedValue: null };
	let c = Di(e, n), l = c?.value ?? e, u = J(l) ? [] : {}, d = {};
	q(l, (s, c) => {
		if (c === "__proto__" || c === "constructor" || c === "prototype") throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
		let l = zi(s, t, n, r, [...i, c], [...a, e], o);
		u[c] = l.transformedValue, J(l.annotations) ? d[c] = l.annotations : Qr(l.annotations) && q(l.annotations, (e, t) => {
			d[hi(c) + "." + t] = e;
		});
	});
	let f = $r(d) ? {
		transformedValue: u,
		annotations: c ? [c.type] : void 0
	} : {
		transformedValue: u,
		annotations: c ? [c.type, d] : d
	};
	return s || o.set(e, f), f;
};
function Bi(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function Vi(e) {
	return Bi(e) === "Array";
}
function Hi(e) {
	if (Bi(e) !== "Object") return !1;
	let t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function Ui(e, t, n, r, i) {
	let a = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = n), i && a === "nonenumerable" && Object.defineProperty(e, t, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function Wi(e, t = {}) {
	if (Vi(e)) return e.map((e) => Wi(e, t));
	if (!Hi(e)) return e;
	let n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
	return [...n, ...r].reduce((n, r) => {
		if (Vi(t.props) && !t.props.includes(r)) return n;
		let i = e[r];
		return Ui(n, r, Wi(i, t), e, t.nonenumerable), n;
	}, {});
}
var Z = class {
	constructor({ dedupe: e = !1 } = {}) {
		this.classRegistry = new Ur(), this.symbolRegistry = new Hr((e) => e.description ?? ""), this.customTransformerRegistry = new Jr(), this.allowedErrorProps = [], this.dedupe = e;
	}
	serialize(e) {
		let t = /* @__PURE__ */ new Map(), n = zi(e, t, this, this.dedupe), r = { json: n.transformedValue };
		n.annotations && (r.meta = {
			...r.meta,
			values: n.annotations
		});
		let i = Ri(t, this.dedupe);
		return i && (r.meta = {
			...r.meta,
			referentialEqualities: i
		}), r;
	}
	deserialize(e) {
		let { json: t, meta: n } = e, r = Wi(t);
		return n?.values && (r = Pi(r, n.values, this)), n?.referentialEqualities && (r = Fi(r, n.referentialEqualities)), r;
	}
	stringify(e) {
		return JSON.stringify(this.serialize(e));
	}
	parse(e) {
		return this.deserialize(JSON.parse(e));
	}
	registerClass(e, t) {
		this.classRegistry.register(e, t);
	}
	registerSymbol(e, t) {
		this.symbolRegistry.register(e, t);
	}
	registerCustom(e, t) {
		this.customTransformerRegistry.register({
			name: t,
			...e
		});
	}
	allowErrorProps(...e) {
		this.allowedErrorProps.push(...e);
	}
};
Z.defaultInstance = new Z(), Z.serialize = Z.defaultInstance.serialize.bind(Z.defaultInstance), Z.deserialize = Z.defaultInstance.deserialize.bind(Z.defaultInstance), Z.stringify = Z.defaultInstance.stringify.bind(Z.defaultInstance), Z.parse = Z.defaultInstance.parse.bind(Z.defaultInstance), Z.registerClass = Z.defaultInstance.registerClass.bind(Z.defaultInstance), Z.registerSymbol = Z.defaultInstance.registerSymbol.bind(Z.defaultInstance), Z.registerCustom = Z.defaultInstance.registerCustom.bind(Z.defaultInstance), Z.allowErrorProps = Z.defaultInstance.allowErrorProps.bind(Z.defaultInstance), Z.serialize, Z.deserialize, Z.stringify, Z.parse, Z.registerClass, Z.registerCustom, Z.registerSymbol, Z.allowErrorProps, P.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ??= [], P.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ??= null, P.__VUE_DEVTOOLS_KIT_RPC_SERVER__ ??= null, P.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ??= null, P.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ??= null, P.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ??= null;
var Gi = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", Ki = "âḃćḋèḟĝḫíĵǩĺṁńŏṗɋŕśṭůṿẘẋẏẓḀḂḈḊḔḞḠḢḬĴḴĻḾŊÕṔɊŔṠṮŨṼẄẌŸƵ";
function qi(e, t) {
	let n = "";
	for (let r = 0; r < e.length * t.expand; r++) {
		let i = e[Math.floor(r / t.expand)], a = t.accents ? Ki[Gi.indexOf(i)] ?? i : i;
		n += a;
	}
	return t.prefix + n + t.suffix;
}
function Ji(e, t, n) {
	let r, i = /* @__PURE__ */ new Map(), a = t.warnMissing;
	t.warnMissing = (e) => {
		let t = (0, j.getCurrentInstance)();
		a(e), t && (i.set(t, i.get(t) ?? /* @__PURE__ */ new Set()), i.get(t).add(e));
	};
	let o = /* @__PURE__ */ new WeakSet();
	(0, j.watchEffect)(() => {
		let e = n.bundles;
		for (let t of e) {
			if (o.has(t)) continue;
			let e = t._transform;
			t._transform = (t) => (e != null && (t = e(t)), r != null && (t = r(t)), t), o.add(t);
		}
	}, { flush: "sync" });
	let s = (0, j.computed)(() => [...n.bundles].map((e) => {
		let t = new ye(e.locales, {
			functions: e._functions,
			useIsolating: e._useIsolating
		});
		return t._terms = e._terms, t._messages = e._messages, t;
	}));
	Dr({
		id: "fluent-vue",
		label: "fluent-vue",
		packageName: "fluent-vue",
		homepage: "https://fluent-vue.demivan.me",
		logo: "https://fluent-vue.demivan.me/assets/logo.svg",
		componentStateTypes: ["fluent-vue"],
		app: e,
		settings: {
			components: { label: "Components" },
			showLocalized: {
				defaultValue: !0,
				label: "Mark localized",
				description: "Mark localized components in component tree",
				type: "boolean"
			},
			markMissing: {
				defaultValue: !0,
				label: "Mark missing",
				description: "Mark missing translations in component tree",
				type: "boolean"
			},
			showI18n: {
				defaultValue: !0,
				label: "Mark i18n",
				description: "Mark i18n components in component tree",
				type: "boolean"
			},
			pseudo: { label: "Pseudolocalization" },
			pseudoEnable: {
				defaultValue: !1,
				label: "Enable",
				description: "Enable pseudolocalization",
				type: "boolean"
			},
			pseudoLength: {
				defaultValue: 1,
				label: "Length",
				description: "Pseudolocalization length",
				type: "choice",
				options: [
					{
						label: "100%",
						value: 1
					},
					{
						label: "125%",
						value: 1.25
					},
					{
						label: "150%",
						value: 1.5
					},
					{
						label: "175%",
						value: 1.75
					},
					{
						label: "200%",
						value: 2
					},
					{
						label: "250%",
						value: 2.5
					},
					{
						label: "300%",
						value: 3
					}
				]
			},
			pseudoAccents: {
				defaultValue: !0,
				label: "Accents",
				description: "Enable pseudolocalization accents",
				type: "boolean"
			},
			pseudoPrefix: {
				label: "Prefix",
				type: "text",
				description: "Prefix to wrap translation",
				defaultValue: "["
			},
			pseudoSuffix: {
				label: "Suffix",
				type: "text",
				description: "Suffix to wrap translation",
				defaultValue: "]"
			}
		}
	}, (e) => {
		e.on.visitComponentTree(({ treeNode: n, componentInstance: r }) => {
			let a = e.getSettings();
			a.showI18n && n.name === t.componentName && n.tags.push({
				label: "fluent-vue",
				textColor: 0,
				backgroundColor: 4307075
			}), a.showLocalized && r?.proxy?.$options.fluent != null && n.tags.push({
				label: "localized",
				textColor: 0,
				backgroundColor: 4307075
			});
			let o = i.get(r);
			a.markMissing && o != null && o.size > 0 && n.tags.push({
				label: "missing translations",
				textColor: 16777215,
				backgroundColor: 11534368
			});
		}), e.on.inspectComponent(({ componentInstance: e, instanceData: t }) => {
			let n = i.get(e);
			if (n) for (let e of n.values()) t.state.push({
				type: "Missing translations",
				key: e,
				editable: !1,
				value: { _custom: {
					type: "custom",
					display: "<span style=\"color:#B00020\">Missing</span>"
				} }
			});
			let r = e?.proxy?.$options.fluent;
			if (!r) return;
			let a = s.value;
			for (let [e, n] of Object.entries(r)) {
				let r = a.find((t) => t.locales.includes(e));
				if (r != null) for (let i of n.body) {
					let n = r.hasMessage(i.id);
					t.state.push({
						type: `Component translations (${e})`,
						key: i.id,
						editable: !1,
						value: { _custom: {
							type: "custom",
							display: (i.value ? r.formatPattern(i.value, {}, []) : "") + (n ? "&nbsp;<span style=\"color:#ffa726\">Global</span>" : "")
						} }
					});
				}
			}
		}), e.on.getInspectorTree((e) => {
			e.inspectorId === "fluent-vue-inspector" && (e.rootNodes = [{
				id: "global",
				label: "Global translations"
			}, {
				id: "missing",
				label: "Missing translations"
			}]);
		});
		let a = /* @__PURE__ */ new Set();
		e.on.getInspectorState(async (t) => {
			if (t.inspectorId === "fluent-vue-inspector") {
				if (t.nodeId === "global") {
					t.state = {};
					for (let e of s.value) t.state[e.locales.join(",")] = [...e._messages.entries()].map(([t, n]) => ({
						key: n.id,
						value: n.value ? e.formatPattern(n.value, {}, []) : ""
					}));
				}
				if (t.nodeId === "missing") {
					t.state = {};
					for (let n of s.value) {
						let r = n.locales.join(",");
						for (let [n, o] of i.entries()) for (let i of o) t.state[r] = t.state[r] ?? [], t.state[r].push({
							key: i,
							editable: !0,
							value: { _custom: {
								type: "component",
								value: a.has(n),
								display: await e.getComponentName(n)
							} }
						});
					}
				}
			}
		}), e.on.editInspectorState((t) => {
			if (t.inspectorId === "fluent-vue-inspector" && t.nodeId === "missing") {
				let n = t.path[0], [r] = i.entries().find(([e, t]) => t.has(n)) ?? [];
				r != null && (t.state.value ? (a.add(r), e.highlightElement(r)) : (a.delete(r), e.unhighlightElement()));
			}
		});
		function o(e) {
			r = e.pseudoEnable ? (t) => qi(t, {
				prefix: e.pseudoPrefix ?? "",
				suffix: e.pseudoSuffix ?? "",
				accents: e.pseudoAccents ?? !1,
				expand: e.pseudoLength ?? 1
			}) : void 0, n.bundles = [...n.bundles];
		}
		e.on.setPluginSettings((e) => {
			o(e.settings);
		}), o(e.getSettings()), e.addInspector({
			id: "fluent-vue-inspector",
			label: "fluent-vue"
		});
	});
}
function Yi(e) {
	gt(typeof DOMParser < "u", "DOMParser is not available. Please provide a custom parseMarkup function.");
	let t = new DOMParser().parseFromString(e, "text/html");
	return Array.from(t.body.childNodes);
}
function Xi(e) {
	M(`Could not find translation for key [${e}]`);
}
function Zi(e) {
	return e.warnMissing === !0 || e.warnMissing == null ? Xi : e.warnMissing === !1 ? () => {} : e.warnMissing;
}
function Qi(e) {
	return {
		warnMissing: Zi(e),
		parseMarkup: e.parseMarkup ?? Yi,
		mapVariable: e.mapVariable,
		globalFormatName: e.globals?.functions?.format ?? "$t",
		globalFormatAttrsName: e.globals?.functions?.formatAttrs ?? "$ta",
		directiveName: e.globals?.directive ?? "t",
		componentName: e.globals?.component ?? "i18n",
		componentTag: e.componentTag ?? "span"
	};
}
var $i = /-(\w)/g;
function ea(e) {
	return e.replace($i, (e, t) => t.toUpperCase());
}
var ta = /<|&#?\w+;/;
function na(e, t) {
	return (0, j.defineComponent)({
		name: e.componentName,
		props: {
			path: {
				type: String,
				required: !0
			},
			tag: {
				type: [String, Boolean],
				default: e.componentTag
			},
			args: {
				type: Object,
				default: () => ({})
			},
			html: {
				type: Boolean,
				default: !1
			},
			noTag: {
				type: Boolean,
				default: !1
			}
		},
		setup(e, { slots: n, attrs: r }) {
			let i = (0, j.getCurrentInstance)(), a = N(t, i?.vnode?.ctx ?? i?.proxy?.$vnode?.context), o = (0, j.computed)(() => {
				let t = Object.assign({}, e.args, ...Object.keys(n).map((e) => ({ [e]: `\uFFFF\uFFFE${e}\uFFFF` }))), r = a.formatWithAttrs(e.path, t), i = Object.fromEntries(Object.entries(r.attributes).map(([e, t]) => [ea(e), t]));
				return {
					value: r.value,
					attributes: i
				};
			}), s = (e) => e?.split("￿").map((e) => e.startsWith("￾") ? n[e.replace("￾", "")](o.value.attributes) : e), c = (e) => {
				if (e.nodeType === 3) return s(e.nodeValue);
				if (e.nodeType === 1) {
					let t = e;
					return (0, j.h)(t.nodeName.toLowerCase(), { ...Object.fromEntries(Array.from(t.attributes).map((e) => [e.name, e.value])) }, Array.from(t.childNodes).map((e) => c(e)));
				}
				return M(`Unsupported node type: ${e.nodeType}. If you need support for it, please, create an issue in fluent-vue repository.`), [];
			}, l = (0, j.computed)(() => !e.html || !ta.test(o.value.value) ? s(o.value.value) : a.options.parseMarkup(o.value.value).map(c));
			return () => e.tag === !1 || e.noTag ? l.value : (0, j.h)(e.tag, { ...r }, l.value);
		}
	});
}
var ra = {
	global: [
		"title",
		"aria-label",
		"aria-valuetext",
		"aria-moz-hint"
	],
	a: ["download"],
	area: ["download", "alt"],
	input: ["alt", "placeholder"],
	menuitem: ["label"],
	menu: ["label"],
	optgroup: ["label"],
	option: ["label"],
	track: ["label"],
	img: ["alt"],
	textarea: ["placeholder"],
	th: ["abbr"]
};
function ia(e, t, n = []) {
	if (n.includes(e)) return !0;
	let r = e.toLowerCase(), i = t.localName;
	if (ra.global.includes(r)) return !0;
	if (ra[i] == null) return !1;
	if (ra[i].includes(r)) return !0;
	if (t.namespaceURI === "http://www.w3.org/1999/xhtml" && i === "input" && r === "value") {
		let e = t.type.toLowerCase();
		if (e === "submit" || e === "button" || e === "reset") return !0;
	}
	return !1;
}
function aa(e, t, n) {
	let r = n.arg;
	if (r === void 0) {
		M("v-t directive is missing arg with translation key");
		return;
	}
	let i = t.formatWithAttrs(r, n.value);
	i.hasValue && (e.textContent = i.value);
	let a = Object.keys(n.modifiers);
	for (let [t, n] of Object.entries(i.attributes)) ia(t, e, a) ? e.setAttribute(t, n) : M(`Attribute '${t}' on element <${e.tagName.toLowerCase()}> is not localizable. Remove it from the translation. Translation key: ${r}`);
}
function oa(e) {
	return {
		mounted(t, n) {
			(0, j.watchEffect)(() => {
				aa(t, N(e, n.instance), n);
			});
		},
		updated(t, n) {
			aa(t, N(e, n.instance), n);
		},
		getSSRProps(t) {
			let n = N(e, t.instance);
			if (t.arg === void 0) return M("v-t directive is missing arg with translation key"), {};
			let r = n.formatWithAttrs(t.arg, t.value), i = r.attributes;
			return r.hasValue && (i.textContent = r.value), i;
		}
	};
}
function sa(e) {
	let t = (0, j.shallowRef)(e.bundles), n = Qi(e), r = new _t(t, n);
	return {
		get bundles() {
			return t.value;
		},
		set bundles(e) {
			t.value = e;
		},
		mergedWith: (e) => yt(r, e),
		format: r.format.bind(r),
		formatAttrs: r.formatAttrs.bind(r),
		formatWithAttrs: r.formatWithAttrs.bind(r),
		$t: r.format.bind(r),
		$ta: r.formatAttrs.bind(r),
		install(e) {
			{
				let t = e;
				process.env.NODE_ENV !== "production" && Ji(t, n, this), t.provide(bt, r), t.config.globalProperties[n.globalFormatName] = function(e, t) {
					return N(r, (0, j.getCurrentInstance)()?.proxy).format(e, t);
				}, t.config.globalProperties[n.globalFormatAttrsName] = function(e, t) {
					return N(r, (0, j.getCurrentInstance)()?.proxy).formatAttrs(e, t);
				}, t.directive(n.directiveName, oa(r));
			}
			e.component(n.componentName, na(n, r));
		}
	};
}
var ca = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Zu GitHub\nheader-home = Home\nheader-methodology = Methodik\nheader-mock-pages = Testseiten\nheader-products = Produkte\nheader-pricing = Preise\nheader-team = Team\nheader-blog = Blog\nheader-careers = Karriere\nheader-faq = FAQ\nheader-contact = Kontakt\nheader-settings = Einstellungen\nfooter-title = i18n Benchmark\nfooter-description = Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.\nfooter-resources = Ressourcen\nfooter-github = GitHub\nfooter-methodology = Methodik\nfooter-contributing = Beitragen\nfooter-contact = Kontakt\nfooter-built-with = i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.\ntheme-toggle-auto = Thema: Auto\ntheme-toggle-dark = Thema: Dunkel\ntheme-toggle-light = Thema: Hell\ntheme-toggle-label-auto = Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.\ntheme-toggle-label-other = Themenmodus: {mode}. Klicken Sie hier, um den Modus zu wechseln.\nmock-banner = ⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.\nhome-hero-view-results = Ergebnisse anzeigen\nhome-hero-methodology = Methodik\nhome-why-it-matters-title = Warum diese Metriken wichtig sind\nhome-why-it-matters-bundle-size-title = Bundle-Größe\nhome-why-it-matters-bundle-size-desc = Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.\nhome-why-it-matters-rendering-title = Rendering & Hydrierung\nhome-why-it-matters-rendering-desc = Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\nhome-why-it-matters-dynamic-loading-title = Dynamisches Laden\nhome-why-it-matters-dynamic-loading-desc = Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.\nhome-understanding-impact-title = Die Auswirkungen verstehen\nhome-understanding-impact-single-json-title = Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\nhome-understanding-impact-single-json-intro = Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:\nhome-understanding-impact-single-json-bullet1 = Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.\nhome-understanding-impact-single-json-bullet2 = Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\nhome-understanding-impact-single-json-bullet3 = Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.\nhome-understanding-impact-trade-offs-title = Die Kompromisse beim dynamischen Laden\nhome-understanding-impact-trade-offs-intro = Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\nhome-understanding-impact-waterfall-label = Waterfall-Anfragen:\nhome-understanding-impact-waterfall-desc = Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.\nhome-understanding-impact-fouc-label = Flash of Untranslated Content (FOUC):\nhome-understanding-impact-fouc-desc = Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.\nhome-understanding-impact-cache-label = Cache-Invalidierung:\nhome-understanding-impact-cache-desc = Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\nhome-understanding-impact-measures-title = Was dieser Benchmark misst\nhome-understanding-impact-measures-desc = Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.\nhome-results-table-title = Beispielergebnisse\nhome-results-table-library = Bibliothek\nhome-results-table-bundle-size = Bundle-Größe\nhome-results-table-lookup-time = Lookup-Zeit\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Ja\nhome-results-table-manual = Manuell\nhome-results-table-built-in = Integriert\nabout-header-title = Über diesen Benchmark\nabout-header-description = Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.\nabout-grid-why-exists-title = Warum dies existiert\nabout-grid-why-exists-desc = Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.\nabout-grid-methodology-title = Methodik\nabout-grid-methodology-desc = Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.\nabout-what-we-measure-title = Was wir messen\nabout-what-we-measure-bundle-size-impact = Auswirkungen auf die Bundle-Größe\nabout-what-we-measure-bundle-size-impact-desc = Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.\nabout-what-we-measure-rendering-overhead = Rendering-Overhead\nabout-what-we-measure-rendering-overhead-desc = Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\nabout-what-we-measure-hydration-cost = Hydrierungskosten\nabout-what-we-measure-hydration-cost-desc = Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.\nabout-what-we-measure-lazy-loading = Effektivität von Lazy Loading\nabout-what-we-measure-lazy-loading-desc = Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\nabout-what-we-measure-locale-switch = Geschwindigkeit des Sprachwechsels\nabout-what-we-measure-locale-switch-desc = Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.\nblog-header-title = Blog\nblog-header-description = Einblicke, Tutorials und Analysen aus der i18n-Community.\nblog-list-read-more = Mehr lesen →\nblog-list-post1-title = Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick\nblog-list-post1-date = 15. März 2026\nblog-list-post1-excerpt = Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Wie Sie Ihr i18n-Bundle um 60 % reduzieren\nblog-list-post2-date = 8. März 2026\nblog-list-post2-excerpt = Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = Der Stand der Internationalisierung in React\nblog-list-post3-date = 28. Februar 2026\nblog-list-post3-excerpt = Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\nblog-list-post3-category = Analyse\nblog-list-post4-title = Migration von react-i18next zu Lingui\nblog-list-post4-date = 15. Februar 2026\nblog-list-post4-excerpt = Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components und i18n: Was ändert sich?\nblog-list-post5-date = 1. Februar 2026\nblog-list-post5-excerpt = React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\nblog-list-post5-category = Analyse\nblog-list-post6-title = Benchmark-Methodik: Wie wir testen\nblog-list-post6-date = 20. Januar 2026\nblog-list-post6-excerpt = Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\nblog-list-post6-category = Meta\ncareers-header-title = Karriere\ncareers-header-description = Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.\ncareers-benefits-remote-label = Remote-First\ncareers-benefits-remote-value = Arbeiten Sie von überall auf der Welt\ncareers-benefits-pay-label = Wettbewerbsfähige Bezahlung\ncareers-benefits-pay-value = Überdurchschnittliche Vergütung\ncareers-benefits-oss-label = Open-Source-Zeit\ncareers-benefits-oss-value = 20 % der Zeit für OSS-Beiträge\ncareers-open-positions-title = Offene Stellen\ncareers-open-positions-apply-now = Jetzt bewerben\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Vollzeit\ncareers-open-positions-part-time = Teilzeit\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Dokumentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.\ncareers-open-positions-backend-title = Backend-Ingenieur\ncareers-open-positions-backend-desc = Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.\ncareers-open-positions-writer-title = Technischer Redakteur\ncareers-open-positions-writer-desc = Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\ncareers-open-positions-devrel-title = DevRel-Ingenieur\ncareers-open-positions-devrel-desc = Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\ncareers-open-positions-qa-title = QA-Ingenieur\ncareers-open-positions-qa-desc = Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.\ncontact-header-title = Kontakt aufnehmen\ncontact-header-description = Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter\ncontact-form-name = Name\ncontact-form-your-name = Ihr Name\ncontact-form-email = E-Mail\ncontact-form-email-placeholder = ihre@beispiel.de\ncontact-form-topic = Thema\ncontact-form-bug-report = Fehlerbericht\ncontact-form-new-benchmark-idea = Neue Benchmark-Idee\ncontact-form-methodology-question = Frage zur Methodik\ncontact-form-contribution = Beitrag\ncontact-form-other = Sonstiges\ncontact-form-message = Nachricht\ncontact-form-message-placeholder = Beschreiben Sie Ihre Frage oder Idee...\ncontact-form-send-message = Nachricht senden\nfaq-header-title = Häufig gestellte Fragen\nfaq-header-description = Alles, was Sie über i18n Benchmark wissen müssen.\nfaq-list-q1 = Was ist i18n Benchmark?\nfaq-list-a1 = i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\nfaq-list-q2 = Wie werden Benchmarks durchgeführt?\nfaq-list-a2 = Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.\nfaq-list-q3 = Welche Bibliotheken werden derzeit unterstützt?\nfaq-list-a3 = Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\nfaq-list-q4 = Kann ich meine eigenen Benchmarks einreichen?\nfaq-list-a4 = Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.\nfaq-list-q5 = Wie oft werden Benchmarks aktualisiert?\nfaq-list-a5 = Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.\nfaq-list-q6 = Sind die Daten zuverlässig?\nfaq-list-a6 = Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\nfaq-list-q7 = Bieten Sie Beratungsdienstleistungen an?\nfaq-list-a7 = Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.\nfaq-list-q8 = Wie kann ich beitragen?\nfaq-list-a8 = Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.\npricing-header-title = Einfache, transparente Preisgestaltung\npricing-header-description = Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = für immer\npricing-tiers-starter-feature1 = 5 Benchmark-Durchläufe/Tag\npricing-tiers-starter-feature2 = 3 Bibliotheken\npricing-tiers-starter-feature3 = Community-Support\npricing-tiers-starter-feature4 = Öffentliche Ergebnisse\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /Monat\npricing-tiers-pro-feature1 = Unbegrenzte Durchläufe\npricing-tiers-pro-feature2 = Alle Bibliotheken\npricing-tiers-pro-feature3 = Priorisierter Support\npricing-tiers-pro-feature4 = Private Ergebnisse\npricing-tiers-pro-feature5 = CI-Integration\npricing-tiers-pro-feature6 = Historische Daten\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Individuell\npricing-tiers-enterprise-feature1 = Alles in Pro enthalten\npricing-tiers-enterprise-feature2 = On-Premise-Option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedizierter Account Manager\npricing-tiers-enterprise-feature5 = Individuelle SLAs\npricing-tiers-enterprise-feature6 = Audit-Protokolle\npricing-tiers-enterprise-feature7 = Schulungssitzungen\npricing-tiers-contact-sales = Vertrieb kontaktieren\npricing-tiers-get-started = Erste Schritte\nproducts-header-title = Produkte\nproducts-header-description = Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.\nproducts-grid-learn-more = Mehr erfahren\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\nproducts-grid-cli-price = Kostenlos\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.\nproducts-grid-cloud-price = 29 $/Monat\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.\nproducts-grid-enterprise-price = Kontaktieren Sie uns\nproducts-grid-migration-name = Migrationsassistent\nproducts-grid-migration-desc = KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.\nproducts-grid-migration-price = Einmalig 99 $\nproducts-grid-qa-name = Übersetzungs-QA\nproducts-grid-qa-desc = Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\nproducts-grid-qa-price = 19 $/Monat\nproducts-grid-optimizer-name = Bundle-Optimierer\nproducts-grid-optimizer-desc = Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\nproducts-grid-optimizer-price = 49 $/Monat\nsettings-header-title = Einstellungen\nsettings-header-description = Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.\nsettings-profile-title = Profil\nsettings-profile-display-name = Anzeigename\nsettings-profile-email = E-Mail\nsettings-preferences-title = Einstellungen\nsettings-preferences-email-notifications = E-Mail-Benachrichtigungen\nsettings-preferences-weekly-reports = Wöchentliche Benchmark-Berichte erhalten\nsettings-preferences-toggle-notifications = Benachrichtigungen umschalten\nsettings-preferences-dark-mode = Dunkelmodus\nsettings-preferences-dark-color-scheme = Dunkles Farbschema verwenden\nsettings-preferences-toggle-dark-mode = Dunkelmodus umschalten\nsettings-preferences-default-language = Standardsprache\nsettings-preferences-english = Englisch (en)\nsettings-preferences-french = Französisch (fr)\nsettings-preferences-german = Deutsch (de)\nsettings-preferences-spanish = Spanisch (es)\nsettings-preferences-japanese = Japanisch (ja)\nsettings-preferences-chinese = Chinesisch vereinfacht (zh-CN)\nsettings-preferences-arabic = Arabisch (ar)\nsettings-api-access-title = API-Zugriff\nsettings-api-access-api-key = API-Schlüssel\nsettings-api-access-copy = Kopieren\nsettings-api-access-description = Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.\nsettings-footer-cancel = Abbrechen\nsettings-footer-save-changes = Änderungen speichern\nteam-header-title = Unser Team\nteam-header-description = Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Gründerin & Leitende Ingenieurin\nteam-grid-member1-bio = Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance-Ingenieur\nteam-grid-member2-bio = Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack-Entwickler\nteam-grid-member4-bio = Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Datenanalyst\nteam-grid-member5-bio = Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\nnot-found-title = 404\nnot-found-description = Hoppla! Seite nicht gefunden\nnot-found-return-home = Zurück zur Startseite\n", la = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Go to GitHub\nheader-home = Home\nheader-methodology = Methodology\nheader-mock-pages = Mock Pages\nheader-products = Products\nheader-pricing = Pricing\nheader-team = Team\nheader-blog = Blog\nheader-careers = Careers\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Settings\nfooter-title = i18n Benchmark\nfooter-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\nfooter-resources = Resources\nfooter-github = GitHub\nfooter-methodology = Methodology\nfooter-contributing = Contributing\nfooter-contact = Contact\nfooter-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.\ntheme-toggle-auto = Theme: Auto\ntheme-toggle-dark = Theme: Dark\ntheme-toggle-light = Theme: Light\ntheme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.\ntheme-toggle-label-other = Theme mode: {mode}. Click to switch mode.\nmock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\nhome-hero-title = i18n Benchmark\nhome-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\nhome-hero-view-results = View Results\nhome-hero-methodology = Methodology\nhome-why-it-matters-title = Why These Metrics Matter\nhome-why-it-matters-bundle-size-title = Bundle Size\nhome-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\nhome-why-it-matters-rendering-title = Rendering & Hydration\nhome-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Dynamic Loading\nhome-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\nhome-understanding-impact-title = Understanding the Impact\nhome-understanding-impact-single-json-title = Why a single large JSON can hurt performance\nhome-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\nhome-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.\nhome-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\nhome-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\nhome-understanding-impact-trade-offs-title = The trade-offs of dynamic loading\nhome-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\nhome-understanding-impact-waterfall-label = Waterfall requests:\nhome-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\nhome-understanding-impact-fouc-label = Flash of untranslated content (FOUC):\nhome-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.\nhome-understanding-impact-cache-label = Cache invalidation:\nhome-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\nhome-understanding-impact-measures-title = What this benchmark measures\nhome-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\nhome-results-table-title = Sample Results\nhome-results-table-library = Library\nhome-results-table-bundle-size = Bundle Size\nhome-results-table-lookup-time = Lookup Time\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Yes\nhome-results-table-manual = Manual\nhome-results-table-built-in = Built-in\nabout-header-title = About This Benchmark\nabout-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\nabout-grid-why-exists-title = Why This Exists\nabout-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\nabout-grid-methodology-title = Methodology\nabout-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\nabout-what-we-measure-title = What We Measure\nabout-what-we-measure-bundle-size-impact = Bundle size impact\nabout-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\nabout-what-we-measure-rendering-overhead = Rendering overhead\nabout-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\nabout-what-we-measure-hydration-cost = Hydration cost\nabout-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\nabout-what-we-measure-lazy-loading = Lazy loading effectiveness\nabout-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\nabout-what-we-measure-locale-switch = Locale switch speed\nabout-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutorials, and analysis from the i18n community.\nblog-list-read-more = Read More →\nblog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive\nblog-list-post1-date = March 15, 2026\nblog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = How to Reduce Your i18n Bundle by 60%\nblog-list-post2-date = March 8, 2026\nblog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = The State of Internationalization in React\nblog-list-post3-date = February 28, 2026\nblog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\nblog-list-post3-category = Analysis\nblog-list-post4-title = Migrating from react-i18next to Lingui\nblog-list-post4-date = February 15, 2026\nblog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components and i18n: What Changes?\nblog-list-post5-date = February 1, 2026\nblog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\nblog-list-post5-category = Analysis\nblog-list-post6-title = Benchmark Methodology: How We Test\nblog-list-post6-date = January 20, 2026\nblog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\nblog-list-post6-category = Meta\ncareers-header-title = Careers\ncareers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Work from anywhere in the world\ncareers-benefits-pay-label = Competitive pay\ncareers-benefits-pay-value = Top-of-market compensation\ncareers-benefits-oss-label = Open source time\ncareers-benefits-oss-value = 20% time for OSS contributions\ncareers-open-positions-title = Open Positions\ncareers-open-positions-apply-now = Apply Now\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Full-time\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\ncareers-open-positions-writer-title = Technical Writer\ncareers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.\ncareers-open-positions-devrel-title = DevRel Engineer\ncareers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\ncareers-open-positions-qa-title = QA Engineer\ncareers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\ncontact-header-title = Get in Touch\ncontact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\ncontact-form-name = Name\ncontact-form-your-name = Your name\ncontact-form-email = Email\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Topic\ncontact-form-bug-report = Bug Report\ncontact-form-new-benchmark-idea = New Benchmark Idea\ncontact-form-methodology-question = Methodology Question\ncontact-form-contribution = Contribution\ncontact-form-other = Other\ncontact-form-message = Message\ncontact-form-message-placeholder = Describe your question or idea...\ncontact-form-send-message = Send Message\nfaq-header-title = Frequently Asked Questions\nfaq-header-description = Everything you need to know about i18n Benchmark.\nfaq-list-q1 = What is i18n Benchmark?\nfaq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\nfaq-list-q2 = How are benchmarks conducted?\nfaq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\nfaq-list-q3 = Which libraries are currently supported?\nfaq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\nfaq-list-q4 = Can I submit my own benchmarks?\nfaq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\nfaq-list-q5 = How often are benchmarks updated?\nfaq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\nfaq-list-q6 = Is the data reliable?\nfaq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\nfaq-list-q7 = Do you offer consulting services?\nfaq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\nfaq-list-q8 = How can I contribute?\nfaq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\npricing-header-title = Simple, Transparent Pricing\npricing-header-description = Choose the plan that fits your team. No hidden fees.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = $0\npricing-tiers-starter-period = forever\npricing-tiers-starter-feature1 = 5 benchmark runs/day\npricing-tiers-starter-feature2 = 3 libraries\npricing-tiers-starter-feature3 = Community support\npricing-tiers-starter-feature4 = Public results\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = $29\npricing-tiers-pro-period = /month\npricing-tiers-pro-feature1 = Unlimited runs\npricing-tiers-pro-feature2 = All libraries\npricing-tiers-pro-feature3 = Priority support\npricing-tiers-pro-feature4 = Private results\npricing-tiers-pro-feature5 = CI integration\npricing-tiers-pro-feature6 = Historical data\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Custom\npricing-tiers-enterprise-feature1 = Everything in Pro\npricing-tiers-enterprise-feature2 = On-premise option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedicated account manager\npricing-tiers-enterprise-feature5 = Custom SLAs\npricing-tiers-enterprise-feature6 = Audit logs\npricing-tiers-enterprise-feature7 = Training sessions\npricing-tiers-contact-sales = Contact Sales\npricing-tiers-get-started = Get Started\nproducts-header-title = Products\nproducts-header-description = Tools and services to streamline your internationalization workflow.\nproducts-grid-learn-more = Learn More\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\nproducts-grid-cli-price = Free\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\nproducts-grid-cloud-price = $29/mo\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\nproducts-grid-enterprise-price = Contact Us\nproducts-grid-migration-name = Migration Assistant\nproducts-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\nproducts-grid-migration-price = $99 one-time\nproducts-grid-qa-name = Translation QA\nproducts-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.\nproducts-grid-qa-price = $19/mo\nproducts-grid-optimizer-name = Bundle Optimizer\nproducts-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\nproducts-grid-optimizer-price = $49/mo\nsettings-header-title = Settings\nsettings-header-description = Manage your account preferences and configuration.\nsettings-profile-title = Profile\nsettings-profile-display-name = Display Name\nsettings-profile-email = Email\nsettings-preferences-title = Preferences\nsettings-preferences-email-notifications = Email Notifications\nsettings-preferences-weekly-reports = Receive weekly benchmark reports\nsettings-preferences-toggle-notifications = Toggle notifications\nsettings-preferences-dark-mode = Dark Mode\nsettings-preferences-dark-color-scheme = Use dark color scheme\nsettings-preferences-toggle-dark-mode = Toggle dark mode\nsettings-preferences-default-language = Default Language\nsettings-preferences-english = English (en)\nsettings-preferences-french = French (fr)\nsettings-preferences-german = German (de)\nsettings-preferences-spanish = Spanish (es)\nsettings-preferences-japanese = Japanese (ja)\nsettings-preferences-chinese = Chinese Simplified (zh-CN)\nsettings-preferences-arabic = Arabic (ar)\nsettings-api-access-title = API Access\nsettings-api-access-api-key = API Key\nsettings-api-access-copy = Copy\nsettings-api-access-description = Use this key to access the benchmarking API programmatically.\nsettings-footer-cancel = Cancel\nsettings-footer-save-changes = Save Changes\nteam-header-title = Our Team\nteam-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Founder & Lead Engineer\nteam-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance Engineer\nteam-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack Developer\nteam-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Data Analyst\nteam-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.\nnot-found-title = 404\nnot-found-description = Oops! Page not found\nnot-found-return-home = Return to Home\n", ua = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Ir a GitHub\nheader-home = Inicio\nheader-methodology = Metodología\nheader-mock-pages = Páginas de prueba\nheader-products = Productos\nheader-pricing = Precios\nheader-team = Equipo\nheader-blog = Blog\nheader-careers = Carreras\nheader-faq = FAQ\nheader-contact = Contacto\nheader-settings = Ajustes\nfooter-title = i18n Benchmark\nfooter-description = Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.\nfooter-resources = Recursos\nfooter-github = GitHub\nfooter-methodology = Metodología\nfooter-contributing = Contribuir\nfooter-contact = Contacto\nfooter-built-with = i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.\ntheme-toggle-auto = Tema: Auto\ntheme-toggle-dark = Tema: Oscuro\ntheme-toggle-light = Tema: Claro\ntheme-toggle-label-auto = Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.\ntheme-toggle-label-other = Modo de tema: {mode}. Haz clic para cambiar de modo.\nmock-banner = ⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.\nhome-hero-view-results = Ver resultados\nhome-hero-methodology = Metodología\nhome-why-it-matters-title = Por qué son importantes estas métricas\nhome-why-it-matters-bundle-size-title = Tamaño del bundle\nhome-why-it-matters-bundle-size-desc = El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.\nhome-why-it-matters-rendering-title = Renderizado e hidratación\nhome-why-it-matters-rendering-desc = Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Carga dinámica\nhome-why-it-matters-dynamic-loading-desc = Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\nhome-understanding-impact-title = Entendiendo el impacto\nhome-understanding-impact-single-json-title = Por qué un solo JSON grande puede perjudicar el rendimiento\nhome-understanding-impact-single-json-intro = Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\nhome-understanding-impact-single-json-bullet1 = El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\nhome-understanding-impact-single-json-bullet2 = Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.\nhome-understanding-impact-single-json-bullet3 = Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\nhome-understanding-impact-trade-offs-title = Las compensaciones de la carga dinámica\nhome-understanding-impact-trade-offs-intro = Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\nhome-understanding-impact-waterfall-label = Solicitudes en cascada:\nhome-understanding-impact-waterfall-desc = la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.\nhome-understanding-impact-fouc-label = Parpadeo de contenido no traducido (FOUC):\nhome-understanding-impact-fouc-desc = los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\nhome-understanding-impact-cache-label = Invalidación de la caché:\nhome-understanding-impact-cache-desc = actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.\nhome-understanding-impact-measures-title = Qué mide este benchmark\nhome-understanding-impact-measures-desc = Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\nhome-results-table-title = Resultados de muestra\nhome-results-table-library = Biblioteca\nhome-results-table-bundle-size = Tamaño del bundle\nhome-results-table-lookup-time = Tiempo de búsqueda\nhome-results-table-lazy-loading = Carga diferida\nhome-results-table-yes = Sí\nhome-results-table-manual = Manual\nhome-results-table-built-in = Integrado\nabout-header-title = Acerca de este benchmark\nabout-header-description = Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.\nabout-grid-why-exists-title = Por qué existe esto\nabout-grid-why-exists-desc = Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.\nabout-grid-methodology-title = Metodología\nabout-grid-methodology-desc = La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.\nabout-what-we-measure-title = Qué medimos\nabout-what-we-measure-bundle-size-impact = Impacto en el tamaño del bundle\nabout-what-we-measure-bundle-size-impact-desc = Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\nabout-what-we-measure-rendering-overhead = Sobrecarga de renderizado\nabout-what-we-measure-rendering-overhead-desc = Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.\nabout-what-we-measure-hydration-cost = Coste de hidratación\nabout-what-we-measure-hydration-cost-desc = Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\nabout-what-we-measure-lazy-loading = Eficacia de la carga diferida\nabout-what-we-measure-lazy-loading-desc = Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).\nabout-what-we-measure-locale-switch = Velocidad de cambio de idioma\nabout-what-we-measure-locale-switch-desc = Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\nblog-header-title = Blog\nblog-header-description = Información, tutoriales y análisis de la comunidad i18n.\nblog-list-read-more = Leer más →\nblog-list-post1-title = Comparativa de bibliotecas i18n en 2026: Un análisis profundo\nblog-list-post1-date = 15 de marzo de 2026\nblog-list-post1-excerpt = Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Cómo reducir tu bundle i18n en un 60%\nblog-list-post2-date = 8 de marzo de 2026\nblog-list-post2-excerpt = Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = El estado de la internacionalización en React\nblog-list-post3-date = 28 de febrero de 2026\nblog-list-post3-excerpt = Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.\nblog-list-post3-category = Análisis\nblog-list-post4-title = Migración de react-i18next a Lingui\nblog-list-post4-date = 15 de febrero de 2026\nblog-list-post4-excerpt = Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: ¿Qué cambia?\nblog-list-post5-date = 1 de febrero de 2026\nblog-list-post5-excerpt = Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\nblog-list-post5-category = Análisis\nblog-list-post6-title = Metodología de benchmark: Cómo probamos\nblog-list-post6-date = 20 de enero de 2026\nblog-list-post6-excerpt = Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\nblog-list-post6-category = Meta\ncareers-header-title = Carreras\ncareers-header-description = Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.\ncareers-benefits-remote-label = Remoto primero\ncareers-benefits-remote-value = Trabaja desde cualquier lugar del mundo\ncareers-benefits-pay-label = Salario competitivo\ncareers-benefits-pay-value = Compensación superior a la del mercado\ncareers-benefits-oss-label = Tiempo para el código abierto\ncareers-benefits-oss-value = 20% del tiempo para contribuciones a OSS\ncareers-open-positions-title = Puestos vacantes\ncareers-open-positions-apply-now = Postular ahora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tiempo completo\ncareers-open-positions-part-time = Tiempo parcial\ncareers-open-positions-engineering = Ingeniería\ncareers-open-positions-documentation = Documentación\ncareers-open-positions-community = Comunidad\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Ingeniero Frontend Senior\ncareers-open-positions-frontend-desc = Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.\ncareers-open-positions-backend-title = Ingeniero Backend\ncareers-open-positions-backend-desc = Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.\ncareers-open-positions-writer-title = Redactor técnico\ncareers-open-positions-writer-desc = Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\ncareers-open-positions-devrel-title = Ingeniero de DevRel\ncareers-open-positions-devrel-desc = Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.\ncareers-open-positions-qa-title = Ingeniero de QA\ncareers-open-positions-qa-desc = Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.\ncontact-header-title = Ponte en contacto\ncontact-header-description = ¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en\ncontact-form-name = Nombre\ncontact-form-your-name = Tu nombre\ncontact-form-email = Correo electrónico\ncontact-form-email-placeholder = tu@ejemplo.com\ncontact-form-topic = Tema\ncontact-form-bug-report = Informe de error\ncontact-form-new-benchmark-idea = Nueva idea de benchmark\ncontact-form-methodology-question = Pregunta sobre la metodología\ncontact-form-contribution = Contribución\ncontact-form-other = Otro\ncontact-form-message = Mensaje\ncontact-form-message-placeholder = Describe tu pregunta o idea...\ncontact-form-send-message = Enviar mensaje\nfaq-header-title = Preguntas frecuentes\nfaq-header-description = Todo lo que necesitas saber sobre i18n Benchmark.\nfaq-list-q1 = ¿Qué es i18n Benchmark?\nfaq-list-a1 = i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\nfaq-list-q2 = ¿Cómo se realizan los benchmarks?\nfaq-list-a2 = Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.\nfaq-list-q3 = ¿Qué bibliotecas se admiten actualmente?\nfaq-list-a3 = Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\nfaq-list-q4 = ¿Puedo enviar mis propios benchmarks?\nfaq-list-a4 = ¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.\nfaq-list-q5 = ¿Con qué frecuencia se actualizan los benchmarks?\nfaq-list-a5 = Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\nfaq-list-q6 = ¿Son fiables los datos?\nfaq-list-a6 = Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.\nfaq-list-q7 = ¿Ofrecen servicios de consultoría?\nfaq-list-a7 = Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.\nfaq-list-q8 = ¿Cómo puedo contribuir?\nfaq-list-a8 = Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.\npricing-header-title = Precios sencillos y transparentes\npricing-header-description = Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = para siempre\npricing-tiers-starter-feature1 = 5 ejecuciones de benchmark al día\npricing-tiers-starter-feature2 = 3 bibliotecas\npricing-tiers-starter-feature3 = Soporte de la comunidad\npricing-tiers-starter-feature4 = Resultados públicos\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mes\npricing-tiers-pro-feature1 = Ejecuciones ilimitadas\npricing-tiers-pro-feature2 = Todas las bibliotecas\npricing-tiers-pro-feature3 = Soporte prioritario\npricing-tiers-pro-feature4 = Resultados privados\npricing-tiers-pro-feature5 = Integración CI\npricing-tiers-pro-feature6 = Datos históricos\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizado\npricing-tiers-enterprise-feature1 = Todo lo que hay en Pro\npricing-tiers-enterprise-feature2 = Opción on-premise\npricing-tiers-enterprise-feature3 = SSO y SAML\npricing-tiers-enterprise-feature4 = Gestor de cuentas dedicado\npricing-tiers-enterprise-feature5 = SLAs personalizados\npricing-tiers-enterprise-feature6 = Registros de auditoría\npricing-tiers-enterprise-feature7 = Sesiones de formación\npricing-tiers-contact-sales = Contactar con ventas\npricing-tiers-get-started = Empezar\nproducts-header-title = Productos\nproducts-header-description = Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.\nproducts-grid-learn-more = Más información\nproducts-grid-cli-name = CLI de Benchmark\nproducts-grid-cli-desc = Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.\nproducts-grid-cli-price = Gratis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\nproducts-grid-cloud-price = 29 $/mes\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\nproducts-grid-enterprise-price = Contáctanos\nproducts-grid-migration-name = Asistente de migración\nproducts-grid-migration-desc = Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.\nproducts-grid-migration-price = 99 $ pago único\nproducts-grid-qa-name = QA de traducción\nproducts-grid-qa-desc = Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\nproducts-grid-qa-price = 19 $/mes\nproducts-grid-optimizer-name = Optimizador de bundle\nproducts-grid-optimizer-desc = Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.\nproducts-grid-optimizer-price = 49 $/mes\nsettings-header-title = Ajustes\nsettings-header-description = Gestiona las preferencias y la configuración de tu cuenta.\nsettings-profile-title = Perfil\nsettings-profile-display-name = Nombre visible\nsettings-profile-email = Correo electrónico\nsettings-preferences-title = Preferencias\nsettings-preferences-email-notifications = Notificaciones por correo electrónico\nsettings-preferences-weekly-reports = Recibir informes semanales de benchmarks\nsettings-preferences-toggle-notifications = Cambiar notificaciones\nsettings-preferences-dark-mode = Modo oscuro\nsettings-preferences-dark-color-scheme = Usar esquema de colores oscuro\nsettings-preferences-toggle-dark-mode = Cambiar modo oscuro\nsettings-preferences-default-language = Idioma predeterminado\nsettings-preferences-english = Inglés (en)\nsettings-preferences-french = Francés (fr)\nsettings-preferences-german = Alemán (de)\nsettings-preferences-spanish = Español (es)\nsettings-preferences-japanese = Japonés (ja)\nsettings-preferences-chinese = Chino simplificado (zh-CN)\nsettings-preferences-arabic = Árabe (ar)\nsettings-api-access-title = Acceso API\nsettings-api-access-api-key = Llave API\nsettings-api-access-copy = Copiar\nsettings-api-access-description = Usa esta llave para acceder a la API de benchmarking de forma programática.\nsettings-footer-cancel = Cancelar\nsettings-footer-save-changes = Guardar cambios\nteam-header-title = Nuestro equipo\nteam-header-description = Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fundadora e ingeniera principal\nteam-grid-member1-bio = Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingeniero de rendimiento\nteam-grid-member2-bio = Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Desarrollador Full-Stack\nteam-grid-member4-bio = Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista de datos\nteam-grid-member5-bio = Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Responsable de la comunidad\nteam-grid-member6-bio = Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.\nnot-found-title = 404\nnot-found-description = ¡Ups! Página no encontrada\nnot-found-return-home = Volver al inicio\n", da = "shared-app-name = Bench i18n\nshared-site-name = Benchmark i18n\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Aller sur GitHub\nheader-home = Accueil\nheader-methodology = Méthodologie\nheader-mock-pages = Pages fictives\nheader-products = Produits\nheader-pricing = Tarifs\nheader-team = Équipe\nheader-blog = Blog\nheader-careers = Carrières\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Paramètres\nfooter-title = Benchmark i18n\nfooter-description = Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\nfooter-resources = Ressources\nfooter-github = GitHub\nfooter-methodology = Méthodologie\nfooter-contributing = Contribuer\nfooter-contact = Contact\nfooter-built-with = Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.\ntheme-toggle-auto = Thème : automatique\ntheme-toggle-dark = Thème : sombre\ntheme-toggle-light = Thème : clair\ntheme-toggle-label-auto = Mode thème : automatique (système). Cliquez pour passer en mode clair.\ntheme-toggle-label-other = Mode thème : {mode}. Cliquez pour changer de mode.\nmock-banner = ⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.\nhome-hero-title = Benchmark i18n\nhome-hero-description = Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.\nhome-hero-view-results = Voir les résultats\nhome-hero-methodology = Méthodologie\nhome-why-it-matters-title = Pourquoi ces métriques comptent\nhome-why-it-matters-bundle-size-title = Taille du bundle\nhome-why-it-matters-bundle-size-desc = Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.\nhome-why-it-matters-rendering-title = Rendu et hydratation\nhome-why-it-matters-rendering-desc = Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Chargement dynamique\nhome-why-it-matters-dynamic-loading-desc = Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.\nhome-understanding-impact-title = Comprendre l'impact\nhome-understanding-impact-single-json-title = Pourquoi un unique gros JSON peut nuire aux performances\nhome-understanding-impact-single-json-intro = Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :\nhome-understanding-impact-single-json-bullet1 = Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.\nhome-understanding-impact-single-json-bullet2 = Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.\nhome-understanding-impact-single-json-bullet3 = Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.\nhome-understanding-impact-trade-offs-title = Les compromis du chargement dynamique\nhome-understanding-impact-trade-offs-intro = Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :\nhome-understanding-impact-waterfall-label = Requêtes en cascade :\nhome-understanding-impact-waterfall-desc = l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.\nhome-understanding-impact-fouc-label = Flash de contenu non traduit (FOUC) :\nhome-understanding-impact-fouc-desc = l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.\nhome-understanding-impact-cache-label = Invalidation du cache :\nhome-understanding-impact-cache-desc = mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.\nhome-understanding-impact-measures-title = Ce que mesure ce benchmark\nhome-understanding-impact-measures-desc = Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.\nhome-results-table-title = Exemple de résultats\nhome-results-table-library = Bibliothèque\nhome-results-table-bundle-size = Taille du bundle\nhome-results-table-lookup-time = Temps de recherche\nhome-results-table-lazy-loading = Chargement paresseux\nhome-results-table-yes = Oui\nhome-results-table-manual = Manuel\nhome-results-table-built-in = Intégré\nabout-header-title = À propos de ce benchmark\nabout-header-description = Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.\nabout-grid-why-exists-title = Pourquoi ce projet existe\nabout-grid-why-exists-desc = Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.\nabout-grid-methodology-title = Méthodologie\nabout-grid-methodology-desc = La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.\nabout-what-we-measure-title = Ce que nous mesurons\nabout-what-we-measure-bundle-size-impact = Impact sur la taille du bundle\nabout-what-we-measure-bundle-size-impact-desc = Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.\nabout-what-we-measure-rendering-overhead = Surcharge de rendu\nabout-what-we-measure-rendering-overhead-desc = Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.\nabout-what-we-measure-hydration-cost = Coût d'hydratation\nabout-what-we-measure-hydration-cost-desc = En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.\nabout-what-we-measure-lazy-loading = Efficacité du chargement paresseux\nabout-what-we-measure-lazy-loading-desc = Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?\nabout-what-we-measure-locale-switch = Vitesse de changement de langue\nabout-what-we-measure-locale-switch-desc = À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.\nblog-header-title = Blog\nblog-header-description = Articles, tutoriels et analyses de la communauté i18n.\nblog-list-read-more = Lire la suite →\nblog-list-post1-title = Comparer les bibliothèques i18n en 2026 : plongée détaillée\nblog-list-post1-date = 15 mars 2026\nblog-list-post1-excerpt = Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Réduire votre bundle i18n de 60 %\nblog-list-post2-date = 8 mars 2026\nblog-list-post2-excerpt = Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.\nblog-list-post2-category = Tutoriel\nblog-list-post3-title = État de l'internationalisation dans l'écosystème React\nblog-list-post3-date = 28 février 2026\nblog-list-post3-excerpt = Panorama des tendances, patterns émergents et préférences de la communauté.\nblog-list-post3-category = Analyse\nblog-list-post4-title = Migrer de react-i18next vers Lingui\nblog-list-post4-date = 15 février 2026\nblog-list-post4-excerpt = Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.\nblog-list-post4-category = Tutoriel\nblog-list-post5-title = Server Components et i18n : qu'est-ce qui change ?\nblog-list-post5-date = 1er février 2026\nblog-list-post5-excerpt = Les React Server Components introduisent de nouveaux motifs pour l'i18n.\nblog-list-post5-category = Analyse\nblog-list-post6-title = Méthodologie de benchmark : comment nous testons\nblog-list-post6-date = 20 janvier 2026\nblog-list-post6-excerpt = Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.\nblog-list-post6-category = Méta\ncareers-header-title = Carrières\ncareers-header-description = Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Travaillez depuis n'importe où\ncareers-benefits-pay-label = Rémunération compétitive\ncareers-benefits-pay-value = Fourchettes haut de marché\ncareers-benefits-oss-label = Temps open source\ncareers-benefits-oss-value = 20 % du temps pour contribuer à l'OSS\ncareers-open-positions-title = Postes ouverts\ncareers-open-positions-apply-now = Postuler\ncareers-open-positions-remote = À distance\ncareers-open-positions-full-time = Temps plein\ncareers-open-positions-part-time = Temps partiel\ncareers-open-positions-engineering = Ingénierie\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Communauté\ncareers-open-positions-sf-remote = San Francisco / télétravail\ncareers-open-positions-frontend-title = Ingénieur front-end senior\ncareers-open-positions-frontend-desc = Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.\ncareers-open-positions-backend-title = Ingénieur back-end\ncareers-open-positions-backend-desc = Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.\ncareers-open-positions-writer-title = Rédacteur·rice technique\ncareers-open-positions-writer-desc = Guides, références d'API et tutoriels pour la plateforme de benchmark.\ncareers-open-positions-devrel-title = Ingénieur DevRel\ncareers-open-positions-devrel-desc = Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.\ncareers-open-positions-qa-title = Ingénieur QA\ncareers-open-positions-qa-desc = Garantir la fiabilité des résultats par des tests et validations rigoureux.\ncontact-header-title = Contact\ncontact-header-description = Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à\ncontact-form-name = Nom\ncontact-form-your-name = Votre nom\ncontact-form-email = E-mail\ncontact-form-email-placeholder = vous@exemple.com\ncontact-form-topic = Sujet\ncontact-form-bug-report = Rapport de bug\ncontact-form-new-benchmark-idea = Idée de benchmark\ncontact-form-methodology-question = Question de méthodologie\ncontact-form-contribution = Contribution\ncontact-form-other = Autre\ncontact-form-message = Message\ncontact-form-message-placeholder = Décrivez votre question ou idée…\ncontact-form-send-message = Envoyer\nfaq-header-title = Questions fréquentes\nfaq-header-description = Tout savoir sur i18n Benchmark.\nfaq-list-q1 = Qu'est-ce qu'i18n Benchmark ?\nfaq-list-a1 = Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.\nfaq-list-q2 = Comment sont menés les benchmarks ?\nfaq-list-a2 = Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.\nfaq-list-q3 = Quelles bibliothèques sont prises en charge ?\nfaq-list-a3 = react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.\nfaq-list-q4 = Puis-je proposer des benchmarks ?\nfaq-list-a4 = Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.\nfaq-list-q5 = À quelle fréquence sont-ils mis à jour ?\nfaq-list-a5 = Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.\nfaq-list-q6 = Les données sont-elles fiables ?\nfaq-list-a6 = Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.\nfaq-list-q7 = Proposez-vous du conseil ?\nfaq-list-a7 = Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.\nfaq-list-q8 = Comment contribuer ?\nfaq-list-a8 = Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.\npricing-header-title = Tarification simple et transparente\npricing-header-description = Choisissez l'offre adaptée à votre équipe. Sans frais cachés.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 €\npricing-tiers-starter-period = pour toujours\npricing-tiers-starter-feature1 = 5 exécutions de benchmark / jour\npricing-tiers-starter-feature2 = 3 bibliothèques\npricing-tiers-starter-feature3 = Support communautaire\npricing-tiers-starter-feature4 = Résultats publics\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 €\npricing-tiers-pro-period = / mois\npricing-tiers-pro-feature1 = Exécutions illimitées\npricing-tiers-pro-feature2 = Toutes les bibliothèques\npricing-tiers-pro-feature3 = Support prioritaire\npricing-tiers-pro-feature4 = Résultats privés\npricing-tiers-pro-feature5 = Intégration CI\npricing-tiers-pro-feature6 = Historique\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Sur mesure\npricing-tiers-enterprise-feature1 = Tout le Pro\npricing-tiers-enterprise-feature2 = Option on-premise\npricing-tiers-enterprise-feature3 = SSO et SAML\npricing-tiers-enterprise-feature4 = Account manager dédié\npricing-tiers-enterprise-feature5 = SLA sur mesure\npricing-tiers-enterprise-feature6 = Journaux d'audit\npricing-tiers-enterprise-feature7 = Sessions de formation\npricing-tiers-contact-sales = Contacter les ventes\npricing-tiers-get-started = Commencer\nproducts-header-title = Produits\nproducts-header-description = Outils et services pour fluidifier votre flux i18n.\nproducts-grid-learn-more = En savoir plus\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Lancez des benchmarks en local. Configurations personnalisées et CI.\nproducts-grid-cli-price = Gratuit\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.\nproducts-grid-cloud-price = 29 €/mois\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise avec SSO, journaux d'audit, SLA et support dédié.\nproducts-grid-enterprise-price = Nous contacter\nproducts-grid-migration-name = Assistant de migration\nproducts-grid-migration-desc = Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.\nproducts-grid-migration-price = 99 € (unique)\nproducts-grid-qa-name = QA des traductions\nproducts-grid-qa-desc = Contrôles automatiques : clés manquantes, pluriels, contexte.\nproducts-grid-qa-price = 19 €/mois\nproducts-grid-optimizer-name = Optimiseur de bundle\nproducts-grid-optimizer-desc = Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).\nproducts-grid-optimizer-price = 49 €/mois\nsettings-header-title = Paramètres\nsettings-header-description = Gérez les préférences et la configuration de votre compte.\nsettings-profile-title = Profil\nsettings-profile-display-name = Nom affiché\nsettings-profile-email = E-mail\nsettings-preferences-title = Préférences\nsettings-preferences-email-notifications = Notifications e-mail\nsettings-preferences-weekly-reports = Recevoir les rapports hebdomadaires\nsettings-preferences-toggle-notifications = Activer/désactiver les notifications\nsettings-preferences-dark-mode = Mode sombre\nsettings-preferences-dark-color-scheme = Utiliser le thème sombre\nsettings-preferences-toggle-dark-mode = Basculer le mode sombre\nsettings-preferences-default-language = Langue par défaut\nsettings-preferences-english = Anglais (en)\nsettings-preferences-french = Français (fr)\nsettings-preferences-german = Allemand (de)\nsettings-preferences-spanish = Espagnol (es)\nsettings-preferences-japanese = Japonais (ja)\nsettings-preferences-chinese = Chinois simplifié (zh-CN)\nsettings-preferences-arabic = Arabe (ar)\nsettings-api-access-title = Accès API\nsettings-api-access-api-key = Clé API\nsettings-api-access-copy = Copier\nsettings-api-access-description = Utilisez cette clé pour appeler l'API de benchmark par programmation.\nsettings-footer-cancel = Annuler\nsettings-footer-save-changes = Enregistrer\nteam-header-title = Notre équipe\nteam-header-description = Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fondatrice & lead ingénieur\nteam-grid-member1-bio = Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingénieur performance\nteam-grid-member2-bio = Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer advocate\nteam-grid-member3-bio = Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Développeur full-stack\nteam-grid-member4-bio = Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analyste de données\nteam-grid-member5-bio = Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community manager\nteam-grid-member6-bio = Contributions communautaires, partenariats et événements — gouvernance open source.\nnot-found-title = 404\nnot-found-description = Oups ! Page introuvable\nnot-found-return-home = Retour à l'accueil\n", fa = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Vai su GitHub\nheader-home = Home\nheader-methodology = Metodologia\nheader-mock-pages = Pagine di test\nheader-products = Prodotti\nheader-pricing = Prezzi\nheader-team = Team\nheader-blog = Blog\nheader-careers = Carriere\nheader-faq = FAQ\nheader-contact = Contatti\nheader-settings = Impostazioni\nfooter-title = i18n Benchmark\nfooter-description = Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.\nfooter-resources = Risorse\nfooter-github = GitHub\nfooter-methodology = Metodologia\nfooter-contributing = Contribuire\nfooter-contact = Contatti\nfooter-built-with = i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.\ntheme-toggle-auto = Tema: Auto\ntheme-toggle-dark = Tema: Scuro\ntheme-toggle-light = Tema: Chiaro\ntheme-toggle-label-auto = Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.\ntheme-toggle-label-other = Modalità tema: {mode}. Clicca per cambiare modalità.\nmock-banner = ⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.\nhome-hero-view-results = Visualizza i risultati\nhome-hero-methodology = Metodologia\nhome-why-it-matters-title = Perché queste metriche sono importanti\nhome-why-it-matters-bundle-size-title = Dimensione del bundle\nhome-why-it-matters-bundle-size-desc = Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\nhome-why-it-matters-rendering-title = Rendering e idratazione\nhome-why-it-matters-rendering-desc = Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Caricamento dinamico\nhome-why-it-matters-dynamic-loading-desc = Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\nhome-understanding-impact-title = Capire l'impatto\nhome-understanding-impact-single-json-title = Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\nhome-understanding-impact-single-json-intro = Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\nhome-understanding-impact-single-json-bullet1 = Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.\nhome-understanding-impact-single-json-bullet2 = Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\nhome-understanding-impact-single-json-bullet3 = Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.\nhome-understanding-impact-trade-offs-title = I compromessi del caricamento dinamico\nhome-understanding-impact-trade-offs-intro = La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\nhome-understanding-impact-waterfall-label = Richieste a cascata:\nhome-understanding-impact-waterfall-desc = l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.\nhome-understanding-impact-fouc-label = Flash di contenuti non tradotti (FOUC):\nhome-understanding-impact-fouc-desc = gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\nhome-understanding-impact-cache-label = Invalidazione della cache:\nhome-understanding-impact-cache-desc = l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.\nhome-understanding-impact-measures-title = Cosa misura questo benchmark\nhome-understanding-impact-measures-desc = Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\nhome-results-table-title = Risultati di esempio\nhome-results-table-library = Libreria\nhome-results-table-bundle-size = Dimensione del bundle\nhome-results-table-lookup-time = Tempo di ricerca\nhome-results-table-lazy-loading = Caricamento lazy\nhome-results-table-yes = Sì\nhome-results-table-manual = Manuale\nhome-results-table-built-in = Integrato\nabout-header-title = Informazioni su questo benchmark\nabout-header-description = Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.\nabout-grid-why-exists-title = Perché esiste\nabout-grid-why-exists-desc = Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\nabout-grid-methodology-title = Metodologia\nabout-grid-methodology-desc = La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\nabout-what-we-measure-title = Cosa misuriamo\nabout-what-we-measure-bundle-size-impact = Impatto sulla dimensione del bundle\nabout-what-we-measure-bundle-size-impact-desc = I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.\nabout-what-we-measure-rendering-overhead = Sovrapprezzo di rendering\nabout-what-we-measure-rendering-overhead-desc = Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\nabout-what-we-measure-hydration-cost = Costo di idratazione\nabout-what-we-measure-hydration-cost-desc = Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.\nabout-what-we-measure-lazy-loading = Efficacia del caricamento pigro\nabout-what-we-measure-lazy-loading-desc = Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).\nabout-what-we-measure-locale-switch = Velocità di cambio lingua\nabout-what-we-measure-locale-switch-desc = Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.\nblog-header-title = Blog\nblog-header-description = Approfondimenti, tutorial e analisi dalla comunità i18n.\nblog-list-read-more = Leggi di più →\nblog-list-post1-title = Confronto delle librerie i18n nel 2026: un'analisi approfondita\nblog-list-post1-date = 15 marzo 2026\nblog-list-post1-excerpt = Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Come ridurre il bundle i18n del 60%\nblog-list-post2-date = 8 marzo 2026\nblog-list-post2-excerpt = Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = Lo stato dell'internazionalizzazione in React\nblog-list-post3-date = 28 febbraio 2026\nblog-list-post3-excerpt = Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\nblog-list-post3-category = Analisi\nblog-list-post4-title = Migrazione da react-i18next a Lingui\nblog-list-post4-date = 15 febbraio 2026\nblog-list-post4-excerpt = Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: cosa cambia?\nblog-list-post5-date = 1 febbraio 2026\nblog-list-post5-excerpt = I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\nblog-list-post5-category = Analisi\nblog-list-post6-title = Metodologia del benchmark: come testiamo\nblog-list-post6-date = 20 gennaio 2026\nblog-list-post6-excerpt = Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.\nblog-list-post6-category = Meta\ncareers-header-title = Carriere\ncareers-header-description = Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Lavora da qualsiasi parte del mondo\ncareers-benefits-pay-label = Retribuzione competitiva\ncareers-benefits-pay-value = Compensazione ai vertici del mercato\ncareers-benefits-oss-label = Tempo per l'open source\ncareers-benefits-oss-value = 20% del tempo per contributi open source\ncareers-open-positions-title = Posizioni aperte\ncareers-open-positions-apply-now = Candidati ora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tempo pieno\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentazione\ncareers-open-positions-community = Comunità\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Ingegnere Frontend Senior\ncareers-open-positions-frontend-desc = Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.\ncareers-open-positions-writer-title = Scrittore tecnico\ncareers-open-positions-writer-desc = Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\ncareers-open-positions-devrel-title = Ingegnere DevRel\ncareers-open-positions-devrel-desc = Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.\ncareers-open-positions-qa-title = Ingegnere QA\ncareers-open-positions-qa-desc = Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\ncontact-header-title = Contattaci\ncontact-header-description = Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo\ncontact-form-name = Nome\ncontact-form-your-name = Il tuo nome\ncontact-form-email = Email\ncontact-form-email-placeholder = tu@esempio.com\ncontact-form-topic = Argomento\ncontact-form-bug-report = Segnalazione bug\ncontact-form-new-benchmark-idea = Nuova idea di benchmark\ncontact-form-methodology-question = Domanda sulla metodologia\ncontact-form-contribution = Contributo\ncontact-form-other = Altro\ncontact-form-message = Messaggio\ncontact-form-message-placeholder = Descrivi la tua domanda o idea...\ncontact-form-send-message = Invia messaggio\nfaq-header-title = Domande frequenti\nfaq-header-description = Tutto quello che c'è da sapere su i18n Benchmark.\nfaq-list-q1 = Cos'è i18n Benchmark?\nfaq-list-a1 = i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.\nfaq-list-q2 = Come vengono condotti i benchmark?\nfaq-list-a2 = Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.\nfaq-list-q3 = Quali librerie sono attualmente supportate?\nfaq-list-a3 = Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\nfaq-list-q4 = Posso inviare i miei benchmark?\nfaq-list-a4 = Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.\nfaq-list-q5 = Con quale frequenza vengono aggiornati i benchmark?\nfaq-list-a5 = Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.\nfaq-list-q6 = I dati sono affidabili?\nfaq-list-a6 = Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.\nfaq-list-q7 = Offrite servizi di consulenza?\nfaq-list-a7 = Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.\nfaq-list-q8 = Come posso contribuire?\nfaq-list-a8 = Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\npricing-header-title = Prezzi semplici e trasparenti\npricing-header-description = Scegli il piano più adatto al tuo team. Nessun costo nascosto.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = per sempre\npricing-tiers-starter-feature1 = 5 esecuzioni benchmark al giorno\npricing-tiers-starter-feature2 = 3 librerie\npricing-tiers-starter-feature3 = Supporto della comunità\npricing-tiers-starter-feature4 = Risultati pubblici\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mese\npricing-tiers-pro-feature1 = Esecuzioni illimitate\npricing-tiers-pro-feature2 = Tutte le librerie\npricing-tiers-pro-feature3 = Supporto prioritario\npricing-tiers-pro-feature4 = Risultati privati\npricing-tiers-pro-feature5 = Integrazione CI\npricing-tiers-pro-feature6 = Dati storici\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizzato\npricing-tiers-enterprise-feature1 = Tutto quello che c'è in Pro\npricing-tiers-enterprise-feature2 = Opzione on-premise\npricing-tiers-enterprise-feature3 = SSO e SAML\npricing-tiers-enterprise-feature4 = Account manager dedicato\npricing-tiers-enterprise-feature5 = SLA personalizzati\npricing-tiers-enterprise-feature6 = Log di controllo\npricing-tiers-enterprise-feature7 = Sessioni di formazione\npricing-tiers-contact-sales = Contatta l'ufficio vendite\npricing-tiers-get-started = Inizia ora\nproducts-header-title = Prodotti\nproducts-header-description = Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.\nproducts-grid-learn-more = Scopri di più\nproducts-grid-cli-name = CLI del Benchmark\nproducts-grid-cli-desc = Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\nproducts-grid-cli-price = Gratis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.\nproducts-grid-cloud-price = 29 $/mese\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.\nproducts-grid-enterprise-price = Contattaci\nproducts-grid-migration-name = Assistente alla migrazione\nproducts-grid-migration-desc = Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.\nproducts-grid-migration-price = 99 $ una tantum\nproducts-grid-qa-name = QA delle traduzioni\nproducts-grid-qa-desc = Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\nproducts-grid-qa-price = 19 $/mese\nproducts-grid-optimizer-name = Ottimizzatore del bundle\nproducts-grid-optimizer-desc = Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\nproducts-grid-optimizer-price = 49 $/mese\nsettings-header-title = Impostazioni\nsettings-header-description = Gestisci le preferenze del tuo account e la configurazione.\nsettings-profile-title = Profilo\nsettings-profile-display-name = Nome visualizzato\nsettings-profile-email = Email\nsettings-preferences-title = Preferenze\nsettings-preferences-email-notifications = Notifiche via email\nsettings-preferences-weekly-reports = Ricevi rapporti settimanali sui benchmark\nsettings-preferences-toggle-notifications = Attiva/disattiva notifiche\nsettings-preferences-dark-mode = Modalità scura\nsettings-preferences-dark-color-scheme = Usa lo schema colori scuro\nsettings-preferences-toggle-dark-mode = Attiva/disattiva modalità scura\nsettings-preferences-default-language = Lingua predefinita\nsettings-preferences-english = Inglese (en)\nsettings-preferences-french = Francese (fr)\nsettings-preferences-german = Tedesco (de)\nsettings-preferences-spanish = Spagnolo (es)\nsettings-preferences-japanese = Giapponese (ja)\nsettings-preferences-chinese = Cinese semplificato (zh-CN)\nsettings-preferences-arabic = Arabo (ar)\nsettings-api-access-title = Accesso API\nsettings-api-access-api-key = Chiave API\nsettings-api-access-copy = Copia\nsettings-api-access-description = Usa questa chiave per accedere programmaticamente alle API di benchmarking.\nsettings-footer-cancel = Annulla\nsettings-footer-save-changes = Salva modifiche\nteam-header-title = Il nostro team\nteam-header-description = Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fondatrice e Responsabile tecnico\nteam-grid-member1-bio = Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingegnere delle prestazioni\nteam-grid-member2-bio = Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Sviluppatore Full-Stack\nteam-grid-member4-bio = Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista dati\nteam-grid-member5-bio = Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Responsable della comunità\nteam-grid-member6-bio = Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\nnot-found-title = 404\nnot-found-description = Ops! Pagina non trovata\nnot-found-return-home = Torna alla Home\n", pa = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = GitHubへ\nheader-home = ホーム\nheader-methodology = 手法\nheader-mock-pages = テストページ\nheader-products = 製品\nheader-pricing = 価格\nheader-team = チーム\nheader-blog = ブログ\nheader-careers = 採用情報\nheader-faq = FAQ\nheader-contact = お問い合わせ\nheader-settings = 設定\nfooter-title = i18n Benchmark\nfooter-description = 国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。\nfooter-resources = リソース\nfooter-github = GitHub\nfooter-methodology = 手法\nfooter-contributing = 貢献する\nfooter-contact = お問い合わせ\nfooter-built-with = i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。\ntheme-toggle-auto = テーマ：自動\ntheme-toggle-dark = テーマ：ダーク\ntheme-toggle-light = テーマ：ライト\ntheme-toggle-label-auto = テーマモード：自動（システム）。クリックするとライトモードに切り替わります。\ntheme-toggle-label-other = テーマモード：{mode}。クリックしてモードを切り替えます。\nmock-banner = ⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。\nhome-hero-title = i18n Benchmark\nhome-hero-description = 国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。\nhome-hero-view-results = 結果を見る\nhome-hero-methodology = 手法\nhome-why-it-matters-title = なぜこれらの指標が重要なのか\nhome-why-it-matters-bundle-size-title = バンドルサイズ\nhome-why-it-matters-bundle-size-desc = バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。\nhome-why-it-matters-rendering-title = レンダリングとハイドレーション\nhome-why-it-matters-rendering-desc = 巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。\nhome-why-it-matters-dynamic-loading-title = 動的読み込み\nhome-why-it-matters-dynamic-loading-desc = すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。\nhome-understanding-impact-title = 影響を理解する\nhome-understanding-impact-single-json-title = なぜ1つの大きなJSONがパフォーマンスを低下させるのか\nhome-understanding-impact-single-json-intro = 多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\nhome-understanding-impact-single-json-bullet1 = ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。\nhome-understanding-impact-single-json-bullet2 = コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。\nhome-understanding-impact-single-json-bullet3 = サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\nhome-understanding-impact-trade-offs-title = 動的読み込みのトレードオフ\nhome-understanding-impact-trade-offs-intro = 翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：\nhome-understanding-impact-waterfall-label = ウォーターフォールリクエスト：\nhome-understanding-impact-waterfall-desc = アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\nhome-understanding-impact-fouc-label = 翻訳されていないコンテンツのフラッシュ (FOUC)：\nhome-understanding-impact-fouc-desc = チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。\nhome-understanding-impact-cache-label = キャッシュの無効化：\nhome-understanding-impact-cache-desc = 翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。\nhome-understanding-impact-measures-title = このベンチマークが測定するもの\nhome-understanding-impact-measures-desc = このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\nhome-results-table-title = サンプル結果\nhome-results-table-library = ライブラリ\nhome-results-table-bundle-size = バンドルサイズ\nhome-results-table-lookup-time = ルックアップ時間\nhome-results-table-lazy-loading = 遅延読み込み\nhome-results-table-yes = はい\nhome-results-table-manual = 手動\nhome-results-table-built-in = 内蔵\nabout-header-title = このベンチマークについて\nabout-header-description = これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。\nabout-grid-why-exists-title = なぜこれが存在するのか\nabout-grid-why-exists-desc = i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。\nabout-grid-methodology-title = 手法\nabout-grid-methodology-desc = 同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。\nabout-what-we-measure-title = 測定項目\nabout-what-we-measure-bundle-size-impact = バンドルサイズへの影響\nabout-what-we-measure-bundle-size-impact-desc = i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。\nabout-what-we-measure-rendering-overhead = レンダリングのオーバーヘッド\nabout-what-we-measure-rendering-overhead-desc = ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\nabout-what-we-measure-hydration-cost = ハイドレーションコスト\nabout-what-we-measure-hydration-cost-desc = SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。\nabout-what-we-measure-lazy-loading = 遅延読み込みの有効性\nabout-what-we-measure-lazy-loading-desc = ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。\nabout-what-we-measure-locale-switch = ロケール切り替え速度\nabout-what-we-measure-locale-switch-desc = 実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\nblog-header-title = ブログ\nblog-header-description = i18nコミュニティからのインサイト、チュートリアル、分析。\nblog-list-read-more = 続きを読む →\nblog-list-post1-title = 2026年のi18nライブラリ比較：ディープダイブ\nblog-list-post1-date = 2026年3月15日\nblog-list-post1-excerpt = パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\nblog-list-post1-category = ベンチマーク\nblog-list-post2-title = i18nバンドルを60%削減する方法\nblog-list-post2-date = 2026年3月8日\nblog-list-post2-excerpt = 遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。\nblog-list-post2-category = チュートリアル\nblog-list-post3-title = Reactにおける国際化の現状\nblog-list-post3-date = 2026年2月28日\nblog-list-post3-excerpt = トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。\nblog-list-post3-category = 分析\nblog-list-post4-title = react-i18nextからLinguiへの移行\nblog-list-post4-date = 2026年2月15日\nblog-list-post4-excerpt = 50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\nblog-list-post4-category = チュートリアル\nblog-list-post5-title = Server Componentsとi18n：何が変わるのか？\nblog-list-post5-date = 2026年2月1日\nblog-list-post5-excerpt = React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\nblog-list-post5-category = 分析\nblog-list-post6-title = ベンチマーク手法：テスト方法について\nblog-list-post6-date = 2026年1月20日\nblog-list-post6-excerpt = テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。\nblog-list-post6-category = メタ\ncareers-header-title = 採用情報\ncareers-header-description = 国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。\ncareers-benefits-remote-label = リモートファースト\ncareers-benefits-remote-value = 世界中のどこからでも仕事ができます\ncareers-benefits-pay-label = 競争力のある給与\ncareers-benefits-pay-value = 市場トップクラスの報酬\ncareers-benefits-oss-label = オープンソースの時間\ncareers-benefits-oss-value = 時間の20%をOSSへの貢献に\ncareers-open-positions-title = 募集中の職種\ncareers-open-positions-apply-now = 今すぐ応募\ncareers-open-positions-remote = リモート\ncareers-open-positions-full-time = フルタイム\ncareers-open-positions-part-time = パートタイム\ncareers-open-positions-engineering = エンジニアリング\ncareers-open-positions-documentation = ドキュメンテーション\ncareers-open-positions-community = コミュニティ\ncareers-open-positions-sf-remote = サンフランシスコ / リモート\ncareers-open-positions-frontend-title = シニアフロントエンドエンジニア\ncareers-open-positions-frontend-desc = React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。\ncareers-open-positions-backend-title = バックエンドエンジニア\ncareers-open-positions-backend-desc = 毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。\ncareers-open-positions-writer-title = テクニカルライター\ncareers-open-positions-writer-desc = ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。\ncareers-open-positions-devrel-title = DevRelエンジニア\ncareers-open-positions-devrel-desc = トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。\ncareers-open-positions-qa-title = QAエンジニア\ncareers-open-positions-qa-desc = 厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\ncontact-header-title = お問い合わせ\ncontact-header-description = アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：\ncontact-form-name = 名前\ncontact-form-your-name = お名前\ncontact-form-email = メールアドレス\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = トピック\ncontact-form-bug-report = バグ報告\ncontact-form-new-benchmark-idea = 新しいベンチマークのアイデア\ncontact-form-methodology-question = 手法に関する質問\ncontact-form-contribution = 貢献\ncontact-form-other = その他\ncontact-form-message = メッセージ\ncontact-form-message-placeholder = ご質問やアイデアを記入してください...\ncontact-form-send-message = メッセージを送信\nfaq-header-title = よくある質問\nfaq-header-description = i18n Benchmarkについて知っておくべきすべてのこと。\nfaq-list-q1 = i18n Benchmarkとは何ですか？\nfaq-list-a1 = i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。\nfaq-list-q2 = ベンチマークはどのように実施されますか？\nfaq-list-a2 = 一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\nfaq-list-q3 = 現在サポートされているライブラリは何ですか？\nfaq-list-a3 = react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。\nfaq-list-q4 = 自分のベンチマークを投稿できますか？\nfaq-list-a4 = はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。\nfaq-list-q5 = ベンチマークはどのくらいの頻度で更新されますか？\nfaq-list-a5 = 各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。\nfaq-list-q6 = データは信頼できますか？\nfaq-list-a6 = ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。\nfaq-list-q7 = コンサルティングサービスは提供していますか？\nfaq-list-a7 = はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\nfaq-list-q8 = どのように貢献できますか？\nfaq-list-a8 = 貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。\npricing-header-title = シンプルで透明性の高い価格設定\npricing-header-description = チームに合ったプランをお選びください。隠れた費用はありません。\npricing-tiers-starter-name = スターター\npricing-tiers-starter-price = 0円\npricing-tiers-starter-period = ずっと無料\npricing-tiers-starter-feature1 = 1日あたり5回のベンチマーク実行\npricing-tiers-starter-feature2 = 3ライブラリ\npricing-tiers-starter-feature3 = コミュニティサポート\npricing-tiers-starter-feature4 = 公開結果\npricing-tiers-pro-name = プロ\npricing-tiers-pro-price = 29ドル\npricing-tiers-pro-period = /月\npricing-tiers-pro-feature1 = 無制限の実行\npricing-tiers-pro-feature2 = すべてのライブラリ\npricing-tiers-pro-feature3 = 優先サポート\npricing-tiers-pro-feature4 = 非公開の結果\npricing-tiers-pro-feature5 = CI統合\npricing-tiers-pro-feature6 = 履歴データ\npricing-tiers-enterprise-name = エンタープライズ\npricing-tiers-enterprise-price = カスタム\npricing-tiers-enterprise-feature1 = Proプランのすべてを含む\npricing-tiers-enterprise-feature2 = オンプレミスオプション\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = 専任のアカウントマネージャー\npricing-tiers-enterprise-feature5 = カスタムSLA\npricing-tiers-enterprise-feature6 = 監査ログ\npricing-tiers-enterprise-feature7 = トレーニングセッション\npricing-tiers-contact-sales = 営業に問い合わせる\npricing-tiers-get-started = 始める\nproducts-header-title = 製品\nproducts-header-description = 国際化ワークフローを効率化するためのツールとサービス。\nproducts-grid-learn-more = 詳細はこちら\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。\nproducts-grid-cli-price = 無料\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = 履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。\nproducts-grid-cloud-price = 29ドル/月\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。\nproducts-grid-enterprise-price = お問い合わせ\nproducts-grid-migration-name = 移行アシスタント\nproducts-grid-migration-desc = ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。\nproducts-grid-migration-price = 99ドル（一回限り）\nproducts-grid-qa-name = 翻訳QA\nproducts-grid-qa-desc = 翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。\nproducts-grid-qa-price = 19ドル/月\nproducts-grid-optimizer-name = バンドルオプティマイザー\nproducts-grid-optimizer-desc = ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。\nproducts-grid-optimizer-price = 49ドル/月\nsettings-header-title = 設定\nsettings-header-description = アカウント設定と構成を管理します。\nsettings-profile-title = プロフィール\nsettings-profile-display-name = 表示名\nsettings-profile-email = メールアドレス\nsettings-preferences-title = 設定\nsettings-preferences-email-notifications = メール通知\nsettings-preferences-weekly-reports = 毎週のベンチマークレポートを受け取る\nsettings-preferences-toggle-notifications = 通知の切り替え\nsettings-preferences-dark-mode = ダークモード\nsettings-preferences-dark-color-scheme = ダークカラー（暗い配色）を使用する\nsettings-preferences-toggle-dark-mode = ダークモードの切り替え\nsettings-preferences-default-language = デフォルトの言語\nsettings-preferences-english = 英語 (en)\nsettings-preferences-french = フランス語 (fr)\nsettings-preferences-german = ドイツ語 (de)\nsettings-preferences-spanish = スペイン語 (es)\nsettings-preferences-japanese = 日本語 (ja)\nsettings-preferences-chinese = 中国語（簡体字） (zh-CN)\nsettings-preferences-arabic = アラビア語 (ar)\nsettings-api-access-title = APIアクセス\nsettings-api-access-api-key = APIキー\nsettings-api-access-copy = コピー\nsettings-api-access-description = このキーを使用して、プログラムでベンチマークAPIにアクセスします。\nsettings-footer-cancel = キャンセル\nsettings-footer-save-changes = 変更を保存\nteam-header-title = 私たちのチーム\nteam-header-description = i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = 創設者 & リードエンジニア\nteam-grid-member1-bio = 大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = パフォーマンスエンジニア\nteam-grid-member2-bio = JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = 開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = フルスタックデベロッパー\nteam-grid-member4-bio = ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = データアナリスト\nteam-grid-member5-bio = すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = コミュニティマネージャー\nteam-grid-member6-bio = コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。\nnot-found-title = 404\nnot-found-description = おっと！ページが見つかりません\nnot-found-return-home = ホームに戻る\n", ma = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Go to GitHub\nheader-home = Home\nheader-methodology = Methodology\nheader-mock-pages = Mock Pages\nheader-products = Products\nheader-pricing = Pricing\nheader-team = Team\nheader-blog = Blog\nheader-careers = Careers\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Settings\nfooter-title = i18n Benchmark\nfooter-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\nfooter-resources = Resources\nfooter-github = GitHub\nfooter-methodology = Methodology\nfooter-contributing = Contributing\nfooter-contact = Contact\nfooter-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.\ntheme-toggle-auto = Theme: Auto\ntheme-toggle-dark = Theme: Dark\ntheme-toggle-light = Theme: Light\ntheme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.\ntheme-toggle-label-other = Theme mode: {mode}. Click to switch mode.\nmock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\nhome-hero-title = i18n Benchmark\nhome-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\nhome-hero-view-results = View Results\nhome-hero-methodology = Methodology\nhome-why-it-matters-title = Why These Metrics Matter\nhome-why-it-matters-bundle-size-title = Bundle Size\nhome-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\nhome-why-it-matters-rendering-title = Rendering & Hydration\nhome-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Dynamic Loading\nhome-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\nhome-understanding-impact-title = Understanding the Impact\nhome-understanding-impact-single-json-title = Why a single large JSON can hurt performance\nhome-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\nhome-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.\nhome-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\nhome-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\nhome-understanding-impact-trade-offs-title = The trade-offs of dynamic loading\nhome-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\nhome-understanding-impact-waterfall-label = Waterfall requests:\nhome-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\nhome-understanding-impact-fouc-label = Flash of untranslated content (FOUC):\nhome-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.\nhome-understanding-impact-cache-label = Cache invalidation:\nhome-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\nhome-understanding-impact-measures-title = What this benchmark measures\nhome-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\nhome-results-table-title = Sample Results\nhome-results-table-library = Library\nhome-results-table-bundle-size = Bundle Size\nhome-results-table-lookup-time = Lookup Time\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Yes\nhome-results-table-manual = Manual\nhome-results-table-built-in = Built-in\nabout-header-title = About This Benchmark\nabout-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\nabout-grid-why-exists-title = Why This Exists\nabout-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\nabout-grid-methodology-title = Methodology\nabout-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\nabout-what-we-measure-title = What We Measure\nabout-what-we-measure-bundle-size-impact = Bundle size impact\nabout-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\nabout-what-we-measure-rendering-overhead = Rendering overhead\nabout-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\nabout-what-we-measure-hydration-cost = Hydration cost\nabout-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\nabout-what-we-measure-lazy-loading = Lazy loading effectiveness\nabout-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\nabout-what-we-measure-locale-switch = Locale switch speed\nabout-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutorials, and analysis from the i18n community.\nblog-list-read-more = Read More →\nblog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive\nblog-list-post1-date = March 15, 2026\nblog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = How to Reduce Your i18n Bundle by 60%\nblog-list-post2-date = March 8, 2026\nblog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = The State of Internationalization in React\nblog-list-post3-date = February 28, 2026\nblog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\nblog-list-post3-category = Analysis\nblog-list-post4-title = Migrating from react-i18next to Lingui\nblog-list-post4-date = February 15, 2026\nblog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components and i18n: What Changes?\nblog-list-post5-date = February 1, 2026\nblog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\nblog-list-post5-category = Analysis\nblog-list-post6-title = Benchmark Methodology: How We Test\nblog-list-post6-date = January 20, 2026\nblog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\nblog-list-post6-category = Meta\ncareers-header-title = Careers\ncareers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Work from anywhere in the world\ncareers-benefits-pay-label = Competitive pay\ncareers-benefits-pay-value = Top-of-market compensation\ncareers-benefits-oss-label = Open source time\ncareers-benefits-oss-value = 20% time for OSS contributions\ncareers-open-positions-title = Open Positions\ncareers-open-positions-apply-now = Apply Now\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Full-time\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\ncareers-open-positions-writer-title = Technical Writer\ncareers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.\ncareers-open-positions-devrel-title = DevRel Engineer\ncareers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\ncareers-open-positions-qa-title = QA Engineer\ncareers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\ncontact-header-title = Get in Touch\ncontact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\ncontact-form-name = Name\ncontact-form-your-name = Your name\ncontact-form-email = Email\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Topic\ncontact-form-bug-report = Bug Report\ncontact-form-new-benchmark-idea = New Benchmark Idea\ncontact-form-methodology-question = Methodology Question\ncontact-form-contribution = Contribution\ncontact-form-other = Other\ncontact-form-message = Message\ncontact-form-message-placeholder = Describe your question or idea...\ncontact-form-send-message = Send Message\nfaq-header-title = Frequently Asked Questions\nfaq-header-description = Everything you need to know about i18n Benchmark.\nfaq-list-q1 = What is i18n Benchmark?\nfaq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\nfaq-list-q2 = How are benchmarks conducted?\nfaq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\nfaq-list-q3 = Which libraries are currently supported?\nfaq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\nfaq-list-q4 = Can I submit my own benchmarks?\nfaq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\nfaq-list-q5 = How often are benchmarks updated?\nfaq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\nfaq-list-q6 = Is the data reliable?\nfaq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\nfaq-list-q7 = Do you offer consulting services?\nfaq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\nfaq-list-q8 = How can I contribute?\nfaq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\npricing-header-title = Simple, Transparent Pricing\npricing-header-description = Choose the plan that fits your team. No hidden fees.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = $0\npricing-tiers-starter-period = forever\npricing-tiers-starter-feature1 = 5 benchmark runs/day\npricing-tiers-starter-feature2 = 3 libraries\npricing-tiers-starter-feature3 = Community support\npricing-tiers-starter-feature4 = Public results\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = $29\npricing-tiers-pro-period = /month\npricing-tiers-pro-feature1 = Unlimited runs\npricing-tiers-pro-feature2 = All libraries\npricing-tiers-pro-feature3 = Priority support\npricing-tiers-pro-feature4 = Private results\npricing-tiers-pro-feature5 = CI integration\npricing-tiers-pro-feature6 = Historical data\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Custom\npricing-tiers-enterprise-feature1 = Everything in Pro\npricing-tiers-enterprise-feature2 = On-premise option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedicated account manager\npricing-tiers-enterprise-feature5 = Custom SLAs\npricing-tiers-enterprise-feature6 = Audit logs\npricing-tiers-enterprise-feature7 = Training sessions\npricing-tiers-contact-sales = Contact Sales\npricing-tiers-get-started = Get Started\nproducts-header-title = Products\nproducts-header-description = Tools and services to streamline your internationalization workflow.\nproducts-grid-learn-more = Learn More\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\nproducts-grid-cli-price = Free\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\nproducts-grid-cloud-price = $29/mo\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\nproducts-grid-enterprise-price = Contact Us\nproducts-grid-migration-name = Migration Assistant\nproducts-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\nproducts-grid-migration-price = $99 one-time\nproducts-grid-qa-name = Translation QA\nproducts-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.\nproducts-grid-qa-price = $19/mo\nproducts-grid-optimizer-name = Bundle Optimizer\nproducts-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\nproducts-grid-optimizer-price = $49/mo\nsettings-header-title = Settings\nsettings-header-description = Manage your account preferences and configuration.\nsettings-profile-title = Profile\nsettings-profile-display-name = Display Name\nsettings-profile-email = Email\nsettings-preferences-title = Preferences\nsettings-preferences-email-notifications = Email Notifications\nsettings-preferences-weekly-reports = Receive weekly benchmark reports\nsettings-preferences-toggle-notifications = Toggle notifications\nsettings-preferences-dark-mode = Dark Mode\nsettings-preferences-dark-color-scheme = Use dark color scheme\nsettings-preferences-toggle-dark-mode = Toggle dark mode\nsettings-preferences-default-language = Default Language\nsettings-preferences-english = English (en)\nsettings-preferences-french = French (fr)\nsettings-preferences-german = German (de)\nsettings-preferences-spanish = Spanish (es)\nsettings-preferences-japanese = Japanese (ja)\nsettings-preferences-chinese = Chinese Simplified (zh-CN)\nsettings-preferences-arabic = Arabic (ar)\nsettings-api-access-title = API Access\nsettings-api-access-api-key = API Key\nsettings-api-access-copy = Copy\nsettings-api-access-description = Use this key to access the benchmarking API programmatically.\nsettings-footer-cancel = Cancel\nsettings-footer-save-changes = Save Changes\nteam-header-title = Our Team\nteam-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Founder & Lead Engineer\nteam-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance Engineer\nteam-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack Developer\nteam-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Data Analyst\nteam-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.\nnot-found-title = 404\nnot-found-description = Oops! Page not found\nnot-found-return-home = Return to Home\n", ha = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Ir para o GitHub\nheader-home = Início\nheader-methodology = Metodologia\nheader-mock-pages = Páginas de Teste\nheader-products = Produtos\nheader-pricing = Preços\nheader-team = Equipe\nheader-blog = Blog\nheader-careers = Carreiras\nheader-faq = FAQ\nheader-contact = Contato\nheader-settings = Configurações\nfooter-title = i18n Benchmark\nfooter-description = Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.\nfooter-resources = Recursos\nfooter-github = GitHub\nfooter-methodology = Metodologia\nfooter-contributing = Contribuindo\nfooter-contact = Contato\nfooter-built-with = i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.\ntheme-toggle-auto = Tema: Automático\ntheme-toggle-dark = Tema: Escuro\ntheme-toggle-light = Tema: Claro\ntheme-toggle-label-auto = Modo de tema: auto (sistema). Clique para mudar para o modo claro.\ntheme-toggle-label-other = Modo de tema: {mode}. Clique para mudar de modo.\nmock-banner = ⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.\nhome-hero-view-results = Ver Resultados\nhome-hero-methodology = Metodologia\nhome-why-it-matters-title = Por que estas métricas importam\nhome-why-it-matters-bundle-size-title = Tamanho do bundle\nhome-why-it-matters-bundle-size-desc = O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.\nhome-why-it-matters-rendering-title = Renderização e hidratação\nhome-why-it-matters-rendering-desc = Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Carregamento dinâmico\nhome-why-it-matters-dynamic-loading-desc = Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\nhome-understanding-impact-title = Entendendo o impacto\nhome-understanding-impact-single-json-title = Por que um único JSON grande pode prejudicar o desempenho\nhome-understanding-impact-single-json-intro = Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\nhome-understanding-impact-single-json-bullet1 = O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\nhome-understanding-impact-single-json-bullet2 = Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\nhome-understanding-impact-single-json-bullet3 = Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\nhome-understanding-impact-trade-offs-title = Os trade-offs do carregamento dinâmico\nhome-understanding-impact-trade-offs-intro = Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:\nhome-understanding-impact-waterfall-label = Requisições em cascata:\nhome-understanding-impact-waterfall-desc = o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.\nhome-understanding-impact-fouc-label = Flash de conteúdo não traduzido (FOUC):\nhome-understanding-impact-fouc-desc = usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.\nhome-understanding-impact-cache-label = Invalidação de cache:\nhome-understanding-impact-cache-desc = atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.\nhome-understanding-impact-measures-title = O que este benchmark mede\nhome-understanding-impact-measures-desc = Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.\nhome-results-table-title = Resultados de exemplo\nhome-results-table-library = Biblioteca\nhome-results-table-bundle-size = Tamanho do Bundle\nhome-results-table-lookup-time = Tempo de Busca\nhome-results-table-lazy-loading = Carregamento Lento\nhome-results-table-yes = Sim\nhome-results-table-manual = Manual\nhome-results-table-built-in = Integrado\nabout-header-title = Sobre este benchmark\nabout-header-description = Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.\nabout-grid-why-exists-title = Por que isto existe\nabout-grid-why-exists-desc = Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\nabout-grid-methodology-title = Metodologia\nabout-grid-methodology-desc = O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.\nabout-what-we-measure-title = O que medimos\nabout-what-we-measure-bundle-size-impact = Impacto no tamanho do bundle\nabout-what-we-measure-bundle-size-impact-desc = Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\nabout-what-we-measure-rendering-overhead = Sobrecarga de renderização\nabout-what-we-measure-rendering-overhead-desc = Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.\nabout-what-we-measure-hydration-cost = Custo de hidratação\nabout-what-we-measure-hydration-cost-desc = Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.\nabout-what-we-measure-lazy-loading = Eficácia do carregamento lento\nabout-what-we-measure-lazy-loading-desc = Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).\nabout-what-we-measure-locale-switch = Velocidade de troca de localidade\nabout-what-we-measure-locale-switch-desc = Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutoriais e análises da comunidade i18n.\nblog-list-read-more = Ler Mais →\nblog-list-post1-title = Comparando bibliotecas i18n em 2026: um mergulho profundo\nblog-list-post1-date = 15 de março de 2026\nblog-list-post1-excerpt = Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Como reduzir seu bundle i18n em 60%\nblog-list-post2-date = 8 de março de 2026\nblog-list-post2-excerpt = Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = O estado da internacionalização no React\nblog-list-post3-date = 28 de fevereiro de 2026\nblog-list-post3-excerpt = Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\nblog-list-post3-category = Análise\nblog-list-post4-title = Migrando de react-i18next para o Lingui\nblog-list-post4-date = 15 de fevereiro de 2026\nblog-list-post4-excerpt = Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: o que muda?\nblog-list-post5-date = 1 de fevereiro de 2026\nblog-list-post5-excerpt = React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.\nblog-list-post5-category = Análise\nblog-list-post6-title = Metodologia de benchmark: como testamos\nblog-list-post6-date = 20 de janeiro de 2026\nblog-list-post6-excerpt = Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\nblog-list-post6-category = Meta\ncareers-header-title = Carreiras\ncareers-header-description = Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.\ncareers-benefits-remote-label = Remoto primeiro\ncareers-benefits-remote-value = Trabalhe de qualquer lugar do mundo\ncareers-benefits-pay-label = Salário competitivo\ncareers-benefits-pay-value = Remuneração acima do mercado\ncareers-benefits-oss-label = Tempo para o código aberto\ncareers-benefits-oss-value = 20% do tempo para contribuições OSS\ncareers-open-positions-title = Vagas abertas\ncareers-open-positions-apply-now = Candidatar-se agora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tempo integral\ncareers-open-positions-part-time = Tempo parcial\ncareers-open-positions-engineering = Engenharia\ncareers-open-positions-documentation = Documentação\ncareers-open-positions-community = Comunidade\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Engenheiro Frontend Sênior\ncareers-open-positions-frontend-desc = Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\ncareers-open-positions-backend-title = Engenheiro Backend\ncareers-open-positions-backend-desc = Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.\ncareers-open-positions-writer-title = Redator técnico\ncareers-open-positions-writer-desc = Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\ncareers-open-positions-devrel-title = Engenheiro de DevRel\ncareers-open-positions-devrel-desc = Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.\ncareers-open-positions-qa-title = Engenheiro de QA\ncareers-open-positions-qa-desc = Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.\ncontact-header-title = Entre em contato\ncontact-header-description = Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em\ncontact-form-name = Nome\ncontact-form-your-name = Seu nome\ncontact-form-email = E-mail\ncontact-form-email-placeholder = voce@exemplo.com\ncontact-form-topic = Assunto\ncontact-form-bug-report = Relatório de bug\ncontact-form-new-benchmark-idea = Nova ideia de benchmark\ncontact-form-methodology-question = Pergunta sobre metodologia\ncontact-form-contribution = Contribuição\ncontact-form-other = Outro\ncontact-form-message = Mensagem\ncontact-form-message-placeholder = Descreva sua pergunta ou ideia...\ncontact-form-send-message = Enviar mensagem\nfaq-header-title = Perguntas frequentes\nfaq-header-description = Tudo o que você precisa saber sobre o i18n Benchmark.\nfaq-list-q1 = O que é o i18n Benchmark?\nfaq-list-a1 = O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.\nfaq-list-q2 = Como os benchmarks são conduzidos?\nfaq-list-a2 = Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.\nfaq-list-q3 = Quais bibliotecas são suportadas atualmente?\nfaq-list-a3 = Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\nfaq-list-q4 = Posso enviar meus próprios benchmarks?\nfaq-list-a4 = Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\nfaq-list-q5 = Com que frequência os benchmarks são atualizados?\nfaq-list-a5 = Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.\nfaq-list-q6 = Os dados são confiáveis?\nfaq-list-a6 = Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\nfaq-list-q7 = Vocês oferecem serviços de consultoria?\nfaq-list-a7 = Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.\nfaq-list-q8 = Como posso contribuir?\nfaq-list-a8 = Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.\npricing-header-title = Preços simples e transparentes\npricing-header-description = Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = para sempre\npricing-tiers-starter-feature1 = 5 execuções de benchmark/dia\npricing-tiers-starter-feature2 = 3 bibliotecas\npricing-tiers-starter-feature3 = Suporte da comunidade\npricing-tiers-starter-feature4 = Resultados públicos\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mês\npricing-tiers-pro-feature1 = Execuções ilimitadas\npricing-tiers-pro-feature2 = Todas as bibliotecas\npricing-tiers-pro-feature3 = Suporte prioritário\npricing-tiers-pro-feature4 = Resultados privados\npricing-tiers-pro-feature5 = Integração CI\npricing-tiers-pro-feature6 = Dados históricos\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizado\npricing-tiers-enterprise-feature1 = Tudo o que está no Pro\npricing-tiers-enterprise-feature2 = Opção on-premise\npricing-tiers-enterprise-feature3 = SSO e SAML\npricing-tiers-enterprise-feature4 = Gerente de conta dedicado\npricing-tiers-enterprise-feature5 = SLAs personalizados\npricing-tiers-enterprise-feature6 = Logs de auditoria\npricing-tiers-enterprise-feature7 = Sessões de treinamento\npricing-tiers-contact-sales = Contatar vendas\npricing-tiers-get-started = Começar\nproducts-header-title = Produtos\nproducts-header-description = Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.\nproducts-grid-learn-more = Saiba Mais\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.\nproducts-grid-cli-price = Grátis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\nproducts-grid-cloud-price = 29 $/mês\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\nproducts-grid-enterprise-price = Contate-nos\nproducts-grid-migration-name = Assistente de migração\nproducts-grid-migration-desc = Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.\nproducts-grid-migration-price = 99 $ taxa única\nproducts-grid-qa-name = QA de tradução\nproducts-grid-qa-desc = Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.\nproducts-grid-qa-price = 19 $/mês\nproducts-grid-optimizer-name = Otimizador de bundle\nproducts-grid-optimizer-desc = Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\nproducts-grid-optimizer-price = 49 $/mês\nsettings-header-title = Configurações\nsettings-header-description = Gerencie suas preferências de conta e configuração.\nsettings-profile-title = Perfil\nsettings-profile-display-name = Nome de exibição\nsettings-profile-email = E-mail\nsettings-preferences-title = Preferências\nsettings-preferences-email-notifications = Notificações por e-mail\nsettings-preferences-weekly-reports = Receber relatórios semanais de benchmarks\nsettings-preferences-toggle-notifications = Alternar notificações\nsettings-preferences-dark-mode = Modo Escuro\nsettings-preferences-dark-color-scheme = Usar esquema de cores escuro\nsettings-preferences-toggle-dark-mode = Alternar modo escuro\nsettings-preferences-default-language = Idioma padrão\nsettings-preferences-english = Inglês (en)\nsettings-preferences-french = Francés (fr)\nsettings-preferences-german = Alemão (de)\nsettings-preferences-spanish = Espanhol (es)\nsettings-preferences-japanese = Japonês (ja)\nsettings-preferences-chinese = Chinês Simplificado (zh-CN)\nsettings-preferences-arabic = Árabe (ar)\nsettings-api-access-title = Acesso API\nsettings-api-access-api-key = Chave API\nsettings-api-access-copy = Copiar\nsettings-api-access-description = Use esta chave para acessar a API de benchmarking programaticamente.\nsettings-footer-cancel = Cancelar\nsettings-footer-save-changes = Salvar alterações\nteam-header-title = Nossa equipe\nteam-header-description = Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fundadora e Engenheira Líder\nteam-grid-member1-bio = Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Engenheiro de performance\nteam-grid-member2-bio = Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Desenvolvedor Full-Stack\nteam-grid-member4-bio = Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista de dados\nteam-grid-member5-bio = Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Gerente de comunidade\nteam-grid-member6-bio = Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\nnot-found-title = 404\nnot-found-description = Ops! Página não encontrada\nnot-found-return-home = Voltar para o início\n", ga = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Перейти на GitHub\nheader-home = Главная\nheader-methodology = Методология\nheader-mock-pages = Тестовые страницы\nheader-products = Продукты\nheader-pricing = Цены\nheader-team = Команда\nheader-blog = Блог\nheader-careers = Вакансии\nheader-faq = FAQ\nheader-contact = Контакт\nheader-settings = Настройки\nfooter-title = i18n Benchmark\nfooter-description = Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.\nfooter-resources = Ресурсы\nfooter-github = GitHub\nfooter-methodology = Методология\nfooter-contributing = Участие в проекте\nfooter-contact = Контакт\nfooter-built-with = i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.\ntheme-toggle-auto = Тема: Авто\ntheme-toggle-dark = Тема: Темная\ntheme-toggle-light = Тема: Светлая\ntheme-toggle-label-auto = Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.\ntheme-toggle-label-other = Режим темы: {mode}. Нажмите, чтобы сменить режим.\nmock-banner = ⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.\nhome-hero-view-results = Посмотреть результаты\nhome-hero-methodology = Методология\nhome-why-it-matters-title = Почему эти метрики важны\nhome-why-it-matters-bundle-size-title = Размер бандла\nhome-why-it-matters-bundle-size-desc = Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.\nhome-why-it-matters-rendering-title = Рендеринг и гидратация\nhome-why-it-matters-rendering-desc = Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).\nhome-why-it-matters-dynamic-loading-title = Динамическая загрузка\nhome-why-it-matters-dynamic-loading-desc = Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.\nhome-understanding-impact-title = Понимание влияния\nhome-understanding-impact-single-json-title = Почему один большой JSON может снизить производительность\nhome-understanding-impact-single-json-intro = Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\nhome-understanding-impact-single-json-bullet1 = JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.\nhome-understanding-impact-single-json-bullet2 = Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.\nhome-understanding-impact-single-json-bullet3 = При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.\nhome-understanding-impact-trade-offs-title = Компромиссы динамической загрузки\nhome-understanding-impact-trade-offs-intro = Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:\nhome-understanding-impact-waterfall-label = Каскадные запросы:\nhome-understanding-impact-waterfall-desc = приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.\nhome-understanding-impact-fouc-label = Мерцание непереведенного контента (FOUC):\nhome-understanding-impact-fouc-desc = пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.\nhome-understanding-impact-cache-label = Инвалидация кэша:\nhome-understanding-impact-cache-desc = обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.\nhome-understanding-impact-measures-title = Что измеряет этот бенчмарк\nhome-understanding-impact-measures-desc = Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\nhome-results-table-title = Примеры результатов\nhome-results-table-library = Библиотека\nhome-results-table-bundle-size = Размер бандла\nhome-results-table-lookup-time = Время поиска\nhome-results-table-lazy-loading = Ленивая загрузка\nhome-results-table-yes = Да\nhome-results-table-manual = Вручную\nhome-results-table-built-in = Встроено\nabout-header-title = Об этом бенчмарке\nabout-header-description = Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.\nabout-grid-why-exists-title = Зачем это нужно\nabout-grid-why-exists-desc = Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\nabout-grid-methodology-title = Методология\nabout-grid-methodology-desc = Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.\nabout-what-we-measure-title = Что мы измеряем\nabout-what-we-measure-bundle-size-impact = Влияние на размер бандла\nabout-what-we-measure-bundle-size-impact-desc = Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\nabout-what-we-measure-rendering-overhead = Накладные расходы на рендеринг\nabout-what-we-measure-rendering-overhead-desc = Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.\nabout-what-we-measure-hydration-cost = Стоимость гидратации\nabout-what-we-measure-hydration-cost-desc = Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\nabout-what-we-measure-lazy-loading = Эффективность ленивой загрузки\nabout-what-we-measure-lazy-loading-desc = Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).\nabout-what-we-measure-locale-switch = Скорость переключения языка\nabout-what-we-measure-locale-switch-desc = Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\nblog-header-title = Блог\nblog-header-description = Инсайты, туториалы и аналитика от сообщества i18n.\nblog-list-read-more = Читать далее →\nblog-list-post1-title = Сравнение библиотек i18n в 2026 году: глубокое погружение\nblog-list-post1-date = 15 марта 2026 г.\nblog-list-post1-excerpt = Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\nblog-list-post1-category = Бенчмарк\nblog-list-post2-title = Как уменьшить бандл i18n на 60%\nblog-list-post2-date = 8 марта 2026 г.\nblog-list-post2-excerpt = Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.\nblog-list-post2-category = Туториал\nblog-list-post3-title = Состояние интернационализации в React\nblog-list-post3-date = 28 февраля 2026 г.\nblog-list-post3-excerpt = Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\nblog-list-post3-category = Анализ\nblog-list-post4-title = Миграция с react-i18next на Lingui\nblog-list-post4-date = 15 февраля 2026 г.\nblog-list-post4-excerpt = Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.\nblog-list-post4-category = Туториал\nblog-list-post5-title = Server Components и i18n: что меняется?\nblog-list-post5-date = 1 февраля 2026 г.\nblog-list-post5-excerpt = React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\nblog-list-post5-category = Анализ\nblog-list-post6-title = Методология бенчмарка: как мы тестируем\nblog-list-post6-date = 20 января 2026 г.\nblog-list-post6-excerpt = Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\nblog-list-post6-category = Мета\ncareers-header-title = Вакансии\ncareers-header-description = Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.\ncareers-benefits-remote-label = Удаленная работа\ncareers-benefits-remote-value = Работайте из любой точки мира\ncareers-benefits-pay-label = Конкурентная зарплата\ncareers-benefits-pay-value = Вознаграждение выше рыночного\ncareers-benefits-oss-label = Время на open source\ncareers-benefits-oss-value = 20% времени на вклад в OSS\ncareers-open-positions-title = Открытые вакансии\ncareers-open-positions-apply-now = Подать заявку\ncareers-open-positions-remote = Удаленно\ncareers-open-positions-full-time = Полная занятость\ncareers-open-positions-part-time = Частичная занятость\ncareers-open-positions-engineering = Разработка\ncareers-open-positions-documentation = Документация\ncareers-open-positions-community = Сообщество\ncareers-open-positions-sf-remote = Сан-Франциско / Удаленно\ncareers-open-positions-frontend-title = Старший фронтенд-инженер\ncareers-open-positions-frontend-desc = Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.\ncareers-open-positions-backend-title = Бэкенд-инженер\ncareers-open-positions-backend-desc = Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.\ncareers-open-positions-writer-title = Технический писатель\ncareers-open-positions-writer-desc = Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.\ncareers-open-positions-devrel-title = DevRel-инженер\ncareers-open-positions-devrel-desc = Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.\ncareers-open-positions-qa-title = QA-инженер\ncareers-open-positions-qa-desc = Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.\ncontact-header-title = Связаться с нами\ncontact-header-description = Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу\ncontact-form-name = Имя\ncontact-form-your-name = Ваше имя\ncontact-form-email = Электронная почта\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Тема\ncontact-form-bug-report = Отчет об ошибке\ncontact-form-new-benchmark-idea = Идея нового бенчмарка\ncontact-form-methodology-question = Вопрос по методологии\ncontact-form-contribution = Вклад в проект\ncontact-form-other = Другое\ncontact-form-message = Сообщение\ncontact-form-message-placeholder = Опишите ваш вопрос или идею...\ncontact-form-send-message = Отправить сообщение\nfaq-header-title = Часто задаваемые вопросы\nfaq-header-description = Все, что вам нужно знать об i18n Benchmark.\nfaq-list-q1 = Что такое i18n Benchmark?\nfaq-list-a1 = i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.\nfaq-list-q2 = Как проводятся бенчмарки?\nfaq-list-a2 = Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.\nfaq-list-q3 = Какие библиотеки поддерживаются в данный момент?\nfaq-list-a3 = Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\nfaq-list-q4 = Могу ли я прислать свои собственные бенчмарки?\nfaq-list-a4 = Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.\nfaq-list-q5 = Как часто обновляются бенчмарки?\nfaq-list-a5 = Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.\nfaq-list-q6 = Можно ли доверять данным?\nfaq-list-a6 = Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.\nfaq-list-q7 = Предоставляете ли вы консалтинговые услуги?\nfaq-list-a7 = Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.\nfaq-list-q8 = Как я могу помочь проекту?\nfaq-list-a8 = Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.\npricing-header-title = Простые и прозрачные цены\npricing-header-description = Выберите подходящий план для вашей команды. Никаких скрытых комиссий.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = навсегда\npricing-tiers-starter-feature1 = 5 запусков бенчмарка в день\npricing-tiers-starter-feature2 = 3 библиотеки\npricing-tiers-starter-feature3 = Поддержка сообщества\npricing-tiers-starter-feature4 = Публичные результаты\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /мес\npricing-tiers-pro-feature1 = Неограниченное число запусков\npricing-tiers-pro-feature2 = Все библиотеки\npricing-tiers-pro-feature3 = Приоритетная поддержка\npricing-tiers-pro-feature4 = Приватные результаты\npricing-tiers-pro-feature5 = Интеграция с CI\npricing-tiers-pro-feature6 = Исторические данные\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Индивидуально\npricing-tiers-enterprise-feature1 = Все, что есть в Pro\npricing-tiers-enterprise-feature2 = Локальная установка\npricing-tiers-enterprise-feature3 = SSO и SAML\npricing-tiers-enterprise-feature4 = Персональный менеджер\npricing-tiers-enterprise-feature5 = Индивидуальные SLA\npricing-tiers-enterprise-feature6 = Журналы аудита\npricing-tiers-enterprise-feature7 = Обучающие сессии\npricing-tiers-contact-sales = Связаться с отделом продаж\npricing-tiers-get-started = Начать работу\nproducts-header-title = Продукты\nproducts-header-description = Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.\nproducts-grid-learn-more = Узнать больше\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.\nproducts-grid-cli-price = Бесплатно\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.\nproducts-grid-cloud-price = 29 $/мес\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.\nproducts-grid-enterprise-price = Связаться с нами\nproducts-grid-migration-name = Помощник по миграции\nproducts-grid-migration-desc = Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.\nproducts-grid-migration-price = 99 $ (разово)\nproducts-grid-qa-name = QA переводов\nproducts-grid-qa-desc = Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.\nproducts-grid-qa-price = 19 $/мес\nproducts-grid-optimizer-name = Оптимизатор бандла\nproducts-grid-optimizer-desc = Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.\nproducts-grid-optimizer-price = 49 $/мес\nsettings-header-title = Настройки\nsettings-header-description = Управляйте предпочтениями и конфигурацией вашей учетной записи.\nsettings-profile-title = Профиль\nsettings-profile-display-name = Отображаемое имя\nsettings-profile-email = Электронная почта\nsettings-preferences-title = Предпочтения\nsettings-preferences-email-notifications = Уведомления по почте\nsettings-preferences-weekly-reports = Получать еженедельные отчеты о бенчмарках\nsettings-preferences-toggle-notifications = Переключить уведомления\nsettings-preferences-dark-mode = Темная тема\nsettings-preferences-dark-color-scheme = Использовать темную цветовую схему\nsettings-preferences-toggle-dark-mode = Переключить темную тему\nsettings-preferences-default-language = Язык по умолчанию\nsettings-preferences-english = Английский (en)\nsettings-preferences-french = Французский (fr)\nsettings-preferences-german = Немецкий (de)\nsettings-preferences-spanish = Испанский (es)\nsettings-preferences-japanese = Японский (ja)\nsettings-preferences-chinese = Китайский упрощенный (zh-CN)\nsettings-preferences-arabic = Арабский (ar)\nsettings-api-access-title = Доступ к API\nsettings-api-access-api-key = Ключ API\nsettings-api-access-copy = Копировать\nsettings-api-access-description = Используйте этот ключ для программного доступа к API бенчмаркинга.\nsettings-footer-cancel = Отмена\nsettings-footer-save-changes = Сохранить изменения\nteam-header-title = Наша команда\nteam-header-description = Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.\nteam-grid-member1-name = Сара Чен\nteam-grid-member1-role = Основатель и ведущий инженер\nteam-grid-member1-bio = Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.\nteam-grid-member2-name = Маркус Вебер\nteam-grid-member2-role = Инженер по производительности\nteam-grid-member2-bio = Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\nteam-grid-member3-name = Айша Патель\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\nteam-grid-member4-name = Томас Родригес\nteam-grid-member4-role = Full-Stack разработчик\nteam-grid-member4-bio = Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.\nteam-grid-member5-name = Юки Танака\nteam-grid-member5-role = Аналитик данных\nteam-grid-member5-bio = Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).\nteam-grid-member6-name = Елена Ковальски\nteam-grid-member6-role = Комьюнити-менеджер\nteam-grid-member6-bio = Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.\nnot-found-title = 404\nnot-found-description = Упс! Страница не найдена\nnot-found-return-home = Вернуться на главную\n", _a = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = 前往 GitHub\nheader-home = 首页\nheader-methodology = 方法论\nheader-mock-pages = 模拟页面\nheader-products = 产品\nheader-pricing = 价格\nheader-team = 团队\nheader-blog = 博客\nheader-careers = 招聘\nheader-faq = 常见问题\nheader-contact = 联系我们\nheader-settings = 设置\nfooter-title = i18n Benchmark\nfooter-description = 一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。\nfooter-resources = 资源\nfooter-github = GitHub\nfooter-methodology = 方法论\nfooter-contributing = 贡献\nfooter-contact = 联系我们\nfooter-built-with = i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。\ntheme-toggle-auto = 主题：自动\ntheme-toggle-dark = 主题：深色\ntheme-toggle-light = 主题：浅色\ntheme-toggle-label-auto = 主题模式：自动（系统）。点击切换到浅色模式。\ntheme-toggle-label-other = 主题模式：{mode}。点击切换模式。\nmock-banner = ⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。\nhome-hero-title = i18n Benchmark\nhome-hero-description = 一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。\nhome-hero-view-results = 查看结果\nhome-hero-methodology = 方法论\nhome-why-it-matters-title = 为什么这些指标很重要\nhome-why-it-matters-bundle-size-title = 包大小\nhome-why-it-matters-bundle-size-desc = 包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\nhome-why-it-matters-rendering-title = 渲染与注水\nhome-why-it-matters-rendering-desc = 将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。\nhome-why-it-matters-dynamic-loading-title = 动态加载\nhome-why-it-matters-dynamic-loading-desc = 预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\nhome-understanding-impact-title = 理解影响\nhome-understanding-impact-single-json-title = 为什么单个大型 JSON 会损害性能\nhome-understanding-impact-single-json-intro = 许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：\nhome-understanding-impact-single-json-bullet1 = 每次页面加载时都必须解析 JSON — 阻塞主线程。\nhome-understanding-impact-single-json-bullet2 = 当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。\nhome-understanding-impact-single-json-bullet3 = 在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。\nhome-understanding-impact-trade-offs-title = 动态加载的权衡\nhome-understanding-impact-trade-offs-intro = 将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：\nhome-understanding-impact-waterfall-label = 瀑布流请求：\nhome-understanding-impact-waterfall-desc = 应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。\nhome-understanding-impact-fouc-label = 未翻译内容闪烁 (FOUC)：\nhome-understanding-impact-fouc-desc = 在块到达之前，用户可能会短暂看到翻译键或回退语言。\nhome-understanding-impact-cache-label = 缓存失效：\nhome-understanding-impact-cache-desc = 更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。\nhome-understanding-impact-measures-title = 此基准测试衡量的内容\nhome-understanding-impact-measures-desc = 此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。\nhome-results-table-title = 示例结果\nhome-results-table-library = 库\nhome-results-table-bundle-size = 包大小\nhome-results-table-lookup-time = 查找时间\nhome-results-table-lazy-loading = 延迟加载\nhome-results-table-yes = 是\nhome-results-table-manual = 手动\nhome-results-table-built-in = 内置\nabout-header-title = 关于此基准测试\nabout-header-description = 这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。\nabout-grid-why-exists-title = 为什么存在这个测试\nabout-grid-why-exists-desc = 选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。\nabout-grid-methodology-title = 方法论\nabout-grid-methodology-desc = 相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。\nabout-what-we-measure-title = 衡量指标\nabout-what-we-measure-bundle-size-impact = 包大小影响\nabout-what-we-measure-bundle-size-impact-desc = 包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。\nabout-what-we-measure-rendering-overhead = 渲染开销\nabout-what-we-measure-rendering-overhead-desc = 库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。\nabout-what-we-measure-hydration-cost = 注水成本\nabout-what-we-measure-hydration-cost-desc = 在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。\nabout-what-we-measure-lazy-loading = 延迟加载有效性\nabout-what-we-measure-lazy-loading-desc = 按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。\nabout-what-we-measure-locale-switch = 语言环境切换速度\nabout-what-we-measure-locale-switch-desc = 应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。\nblog-header-title = 博客\nblog-header-description = 来自 i18n 社区的见解、教程和分析。\nblog-list-read-more = 阅读更多 →\nblog-list-post1-title = 2026 年 i18n 库对比：深度分析\nblog-list-post1-date = 2026年3月15日\nblog-list-post1-excerpt = 我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。\nblog-list-post1-category = 基准测试\nblog-list-post2-title = 如何将 i18n 包大小减少 60%\nblog-list-post2-date = 2026年3月8日\nblog-list-post2-excerpt = 优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\nblog-list-post2-category = 教程\nblog-list-post3-title = React 国际化现状\nblog-list-post3-date = 2026年2月28日\nblog-list-post3-excerpt = React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。\nblog-list-post3-category = 分析\nblog-list-post4-title = 从 react-i18next 迁移到 Lingui\nblog-list-post4-date = 2026年2月15日\nblog-list-post4-excerpt = 关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。\nblog-list-post4-category = 教程\nblog-list-post5-title = Server Components 与 i18n：发生了什么变化？\nblog-list-post5-date = 2026年2月1日\nblog-list-post5-excerpt = React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\nblog-list-post5-category = 分析\nblog-list-post6-title = 基准测试方法论：我们如何测试\nblog-list-post6-date = 2026年1月20日\nblog-list-post6-excerpt = 透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。\nblog-list-post6-category = Meta\ncareers-header-title = 招聘\ncareers-header-description = 加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。\ncareers-benefits-remote-label = 远程优先\ncareers-benefits-remote-value = 在世界任何地方工作\ncareers-benefits-pay-label = 具有竞争力的薪酬\ncareers-benefits-pay-value = 市场顶尖的薪资水平\ncareers-benefits-oss-label = 开源时间\ncareers-benefits-oss-value = 20% 的时间用于 OSS 贡献\ncareers-open-positions-title = 开放职位\ncareers-open-positions-apply-now = 立即申请\ncareers-open-positions-remote = 远程\ncareers-open-positions-full-time = 全职\ncareers-open-positions-part-time = 兼职\ncareers-open-positions-engineering = 工程\ncareers-open-positions-documentation = 文档\ncareers-open-positions-community = 社区\ncareers-open-positions-sf-remote = 旧金山 / 远程\ncareers-open-positions-frontend-title = 高级前端工程师\ncareers-open-positions-frontend-desc = 使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\ncareers-open-positions-backend-title = 后端工程师\ncareers-open-positions-backend-desc = 设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。\ncareers-open-positions-writer-title = 技术作家\ncareers-open-positions-writer-desc = 为我们的基准测试平台编写全面的指南、API 参考和教程。\ncareers-open-positions-devrel-title = DevRel 工程师\ncareers-open-positions-devrel-desc = 通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\ncareers-open-positions-qa-title = QA 工程师\ncareers-open-positions-qa-desc = 通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。\ncontact-header-title = 取得联系\ncontact-header-description = 有想法、发现了错误或想贡献基准测试？请联系我们：\ncontact-form-name = 姓名\ncontact-form-your-name = 您的姓名\ncontact-form-email = 电子邮件\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = 主题\ncontact-form-bug-report = 错误报告\ncontact-form-new-benchmark-idea = 新基准测试想法\ncontact-form-methodology-question = 方法论问题\ncontact-form-contribution = 贡献\ncontact-form-other = 其他\ncontact-form-message = 消息\ncontact-form-message-placeholder = 描述您的问题或想法...\ncontact-form-send-message = 发送消息\nfaq-header-title = 常见问题\nfaq-header-description = 关于 i18n 基准测试您需要了解的一切。\nfaq-list-q1 = 什么是 i18n 基准测试？\nfaq-list-a1 = i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。\nfaq-list-q2 = 基准测试是如何进行的？\nfaq-list-a2 = 我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。\nfaq-list-q3 = 目前支持哪些库？\nfaq-list-a3 = 我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。\nfaq-list-q4 = 我可以提交我自己的基准测试吗？\nfaq-list-a4 = 是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。\nfaq-list-q5 = 基准测试多久更新一次？\nfaq-list-a5 = 我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。\nfaq-list-q6 = 数据可靠吗？\nfaq-list-a6 = 我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\nfaq-list-q7 = 你们提供咨询服务吗？\nfaq-list-a7 = 是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。\nfaq-list-q8 = 我该如何贡献？\nfaq-list-a8 = 有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\npricing-header-title = 简单透明的定价\npricing-header-description = 选择适合您团队的计划。无隐藏费用。\npricing-tiers-starter-name = 入门版\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = 永久\npricing-tiers-starter-feature1 = 每天 5 次基准测试运行\npricing-tiers-starter-feature2 = 3 个库\npricing-tiers-starter-feature3 = 社区支持\npricing-tiers-starter-feature4 = 公开结果\npricing-tiers-pro-name = 专业版\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /月\npricing-tiers-pro-feature1 = 无限次运行\npricing-tiers-pro-feature2 = 所有库\npricing-tiers-pro-feature3 = 优先支持\npricing-tiers-pro-feature4 = 私有结果\npricing-tiers-pro-feature5 = CI 集成\npricing-tiers-pro-feature6 = 历史数据\npricing-tiers-enterprise-name = 企业版\npricing-tiers-enterprise-price = 定制\npricing-tiers-enterprise-feature1 = 包含专业版中的所有功能\npricing-tiers-enterprise-feature2 = 本地部署选项\npricing-tiers-enterprise-feature3 = SSO 和 SAML\npricing-tiers-enterprise-feature4 = 专属客户经理\npricing-tiers-enterprise-feature5 = 定制 SLA\npricing-tiers-enterprise-feature6 = 审计日志\npricing-tiers-enterprise-feature7 = 培训课程\npricing-tiers-contact-sales = 联系销售\npricing-tiers-get-started = 开始使用\nproducts-header-title = 产品\nproducts-header-description = 用于简化国际化工作流程的工具和服务。\nproducts-grid-learn-more = 了解更多\nproducts-grid-cli-name = 基准测试 CLI\nproducts-grid-cli-desc = 从您的终端本地运行基准测试。支持自定义配置和 CI 集成。\nproducts-grid-cli-price = 免费\nproducts-grid-cloud-name = 基准测试云\nproducts-grid-cloud-desc = 具有历史追踪、警报和团队仪表板的自动化云基准测试。\nproducts-grid-cloud-price = 29 $/月\nproducts-grid-enterprise-name = 基准测试企业版\nproducts-grid-enterprise-desc = 支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。\nproducts-grid-enterprise-price = 联系我们\nproducts-grid-migration-name = 迁移助手\nproducts-grid-migration-desc = AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。\nproducts-grid-migration-price = 99 $ 一次性费用\nproducts-grid-qa-name = 翻译 QA\nproducts-grid-qa-desc = 自动检查翻译缺失、复数问题和上下文错误。\nproducts-grid-qa-price = 19 $/月\nproducts-grid-optimizer-name = 包优化器\nproducts-grid-optimizer-desc = 通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。\nproducts-grid-optimizer-price = 49 $/月\nsettings-header-title = 设置\nsettings-header-description = 管理您的账户偏好和配置。\nsettings-profile-title = 个人资料\nsettings-profile-display-name = 显示名称\nsettings-profile-email = 电子邮件\nsettings-preferences-title = 偏好\nsettings-preferences-email-notifications = 电子邮件通知\nsettings-preferences-weekly-reports = 接收每周基准测试报告\nsettings-preferences-toggle-notifications = 切换通知\nsettings-preferences-dark-mode = 深色模式\nsettings-preferences-dark-color-scheme = 使用深色配色方案\nsettings-preferences-toggle-dark-mode = 切换深色模式\nsettings-preferences-default-language = 默认语言\nsettings-preferences-english = 英语 (en)\nsettings-preferences-french = 法语 (fr)\nsettings-preferences-german = 德语 (de)\nsettings-preferences-spanish = 西班牙语 (es)\nsettings-preferences-japanese = 日语 (ja)\nsettings-preferences-chinese = 简体中文 (zh-CN)\nsettings-preferences-arabic = 阿拉伯语 (ar)\nsettings-api-access-title = API 访问\nsettings-api-access-api-key = API 密钥\nsettings-api-access-copy = 复制\nsettings-api-access-description = 使用此密钥以编程方式访问基准测试 API。\nsettings-footer-cancel = 取消\nsettings-footer-save-changes = 保存更改\nteam-header-title = 我们的团队\nteam-header-description = 了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = 创始人兼首席工程师\nteam-grid-member1-bio = 前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = 性能工程师\nteam-grid-member2-bio = 专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = 开发者倡导者\nteam-grid-member3-bio = 对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = 全栈开发人员\nteam-grid-member4-bio = 维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = 数据分析师\nteam-grid-member5-bio = 确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = 社区经理\nteam-grid-member6-bio = 管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\nnot-found-title = 404\nnot-found-description = 哎呀！页面未找到\nnot-found-return-home = 返回首页\n", Q = (e, t) => {
	let n = new ye(e);
	return n.addResource(new A(t)), n;
}, va = {
	en: Q("en", la),
	fr: Q("fr", da),
	es: Q("es", ua),
	de: Q("de", ca),
	it: Q("it", fa),
	pt: Q("pt", ha),
	zh: Q("zh", _a),
	ja: Q("ja", pa),
	ko: Q("ko", ma),
	ru: Q("ru", ga)
};
function ya(e) {
	let t = va[e] ?? va.en;
	return t === va.en ? [va.en] : [t, va.en];
}
var ba = sa({ bundles: ya("en") }), xa = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Zu GitHub\nheader-home = Home\nheader-methodology = Methodik\nheader-mock-pages = Testseiten\nheader-products = Produkte\nheader-pricing = Preise\nheader-team = Team\nheader-blog = Blog\nheader-careers = Karriere\nheader-faq = FAQ\nheader-contact = Kontakt\nheader-settings = Einstellungen\nfooter-title = i18n Benchmark\nfooter-description = Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.\nfooter-resources = Ressourcen\nfooter-github = GitHub\nfooter-methodology = Methodik\nfooter-contributing = Beitragen\nfooter-contact = Kontakt\nfooter-built-with = i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.\ntheme-toggle-auto = Thema: Auto\ntheme-toggle-dark = Thema: Dunkel\ntheme-toggle-light = Thema: Hell\ntheme-toggle-label-auto = Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.\ntheme-toggle-label-other = Themenmodus: {mode}. Klicken Sie hier, um den Modus zu wechseln.\nmock-banner = ⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.\nhome-hero-view-results = Ergebnisse anzeigen\nhome-hero-methodology = Methodik\nhome-why-it-matters-title = Warum diese Metriken wichtig sind\nhome-why-it-matters-bundle-size-title = Bundle-Größe\nhome-why-it-matters-bundle-size-desc = Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.\nhome-why-it-matters-rendering-title = Rendering & Hydrierung\nhome-why-it-matters-rendering-desc = Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\nhome-why-it-matters-dynamic-loading-title = Dynamisches Laden\nhome-why-it-matters-dynamic-loading-desc = Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.\nhome-understanding-impact-title = Die Auswirkungen verstehen\nhome-understanding-impact-single-json-title = Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\nhome-understanding-impact-single-json-intro = Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:\nhome-understanding-impact-single-json-bullet1 = Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.\nhome-understanding-impact-single-json-bullet2 = Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\nhome-understanding-impact-single-json-bullet3 = Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.\nhome-understanding-impact-trade-offs-title = Die Kompromisse beim dynamischen Laden\nhome-understanding-impact-trade-offs-intro = Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\nhome-understanding-impact-waterfall-label = Waterfall-Anfragen:\nhome-understanding-impact-waterfall-desc = Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.\nhome-understanding-impact-fouc-label = Flash of Untranslated Content (FOUC):\nhome-understanding-impact-fouc-desc = Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.\nhome-understanding-impact-cache-label = Cache-Invalidierung:\nhome-understanding-impact-cache-desc = Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\nhome-understanding-impact-measures-title = Was dieser Benchmark misst\nhome-understanding-impact-measures-desc = Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.\nhome-results-table-title = Beispielergebnisse\nhome-results-table-library = Bibliothek\nhome-results-table-bundle-size = Bundle-Größe\nhome-results-table-lookup-time = Lookup-Zeit\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Ja\nhome-results-table-manual = Manuell\nhome-results-table-built-in = Integriert\nabout-header-title = Über diesen Benchmark\nabout-header-description = Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.\nabout-grid-why-exists-title = Warum dies existiert\nabout-grid-why-exists-desc = Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.\nabout-grid-methodology-title = Methodik\nabout-grid-methodology-desc = Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.\nabout-what-we-measure-title = Was wir messen\nabout-what-we-measure-bundle-size-impact = Auswirkungen auf die Bundle-Größe\nabout-what-we-measure-bundle-size-impact-desc = Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.\nabout-what-we-measure-rendering-overhead = Rendering-Overhead\nabout-what-we-measure-rendering-overhead-desc = Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\nabout-what-we-measure-hydration-cost = Hydrierungskosten\nabout-what-we-measure-hydration-cost-desc = Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.\nabout-what-we-measure-lazy-loading = Effektivität von Lazy Loading\nabout-what-we-measure-lazy-loading-desc = Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\nabout-what-we-measure-locale-switch = Geschwindigkeit des Sprachwechsels\nabout-what-we-measure-locale-switch-desc = Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.\nblog-header-title = Blog\nblog-header-description = Einblicke, Tutorials und Analysen aus der i18n-Community.\nblog-list-read-more = Mehr lesen →\nblog-list-post1-title = Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick\nblog-list-post1-date = 15. März 2026\nblog-list-post1-excerpt = Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Wie Sie Ihr i18n-Bundle um 60 % reduzieren\nblog-list-post2-date = 8. März 2026\nblog-list-post2-excerpt = Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = Der Stand der Internationalisierung in React\nblog-list-post3-date = 28. Februar 2026\nblog-list-post3-excerpt = Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\nblog-list-post3-category = Analyse\nblog-list-post4-title = Migration von react-i18next zu Lingui\nblog-list-post4-date = 15. Februar 2026\nblog-list-post4-excerpt = Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components und i18n: Was ändert sich?\nblog-list-post5-date = 1. Februar 2026\nblog-list-post5-excerpt = React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\nblog-list-post5-category = Analyse\nblog-list-post6-title = Benchmark-Methodik: Wie wir testen\nblog-list-post6-date = 20. Januar 2026\nblog-list-post6-excerpt = Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\nblog-list-post6-category = Meta\ncareers-header-title = Karriere\ncareers-header-description = Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.\ncareers-benefits-remote-label = Remote-First\ncareers-benefits-remote-value = Arbeiten Sie von überall auf der Welt\ncareers-benefits-pay-label = Wettbewerbsfähige Bezahlung\ncareers-benefits-pay-value = Überdurchschnittliche Vergütung\ncareers-benefits-oss-label = Open-Source-Zeit\ncareers-benefits-oss-value = 20 % der Zeit für OSS-Beiträge\ncareers-open-positions-title = Offene Stellen\ncareers-open-positions-apply-now = Jetzt bewerben\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Vollzeit\ncareers-open-positions-part-time = Teilzeit\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Dokumentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.\ncareers-open-positions-backend-title = Backend-Ingenieur\ncareers-open-positions-backend-desc = Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.\ncareers-open-positions-writer-title = Technischer Redakteur\ncareers-open-positions-writer-desc = Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\ncareers-open-positions-devrel-title = DevRel-Ingenieur\ncareers-open-positions-devrel-desc = Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\ncareers-open-positions-qa-title = QA-Ingenieur\ncareers-open-positions-qa-desc = Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.\ncontact-header-title = Kontakt aufnehmen\ncontact-header-description = Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter\ncontact-form-name = Name\ncontact-form-your-name = Ihr Name\ncontact-form-email = E-Mail\ncontact-form-email-placeholder = ihre@beispiel.de\ncontact-form-topic = Thema\ncontact-form-bug-report = Fehlerbericht\ncontact-form-new-benchmark-idea = Neue Benchmark-Idee\ncontact-form-methodology-question = Frage zur Methodik\ncontact-form-contribution = Beitrag\ncontact-form-other = Sonstiges\ncontact-form-message = Nachricht\ncontact-form-message-placeholder = Beschreiben Sie Ihre Frage oder Idee...\ncontact-form-send-message = Nachricht senden\nfaq-header-title = Häufig gestellte Fragen\nfaq-header-description = Alles, was Sie über i18n Benchmark wissen müssen.\nfaq-list-q1 = Was ist i18n Benchmark?\nfaq-list-a1 = i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\nfaq-list-q2 = Wie werden Benchmarks durchgeführt?\nfaq-list-a2 = Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.\nfaq-list-q3 = Welche Bibliotheken werden derzeit unterstützt?\nfaq-list-a3 = Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\nfaq-list-q4 = Kann ich meine eigenen Benchmarks einreichen?\nfaq-list-a4 = Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.\nfaq-list-q5 = Wie oft werden Benchmarks aktualisiert?\nfaq-list-a5 = Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.\nfaq-list-q6 = Sind die Daten zuverlässig?\nfaq-list-a6 = Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\nfaq-list-q7 = Bieten Sie Beratungsdienstleistungen an?\nfaq-list-a7 = Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.\nfaq-list-q8 = Wie kann ich beitragen?\nfaq-list-a8 = Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.\npricing-header-title = Einfache, transparente Preisgestaltung\npricing-header-description = Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = für immer\npricing-tiers-starter-feature1 = 5 Benchmark-Durchläufe/Tag\npricing-tiers-starter-feature2 = 3 Bibliotheken\npricing-tiers-starter-feature3 = Community-Support\npricing-tiers-starter-feature4 = Öffentliche Ergebnisse\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /Monat\npricing-tiers-pro-feature1 = Unbegrenzte Durchläufe\npricing-tiers-pro-feature2 = Alle Bibliotheken\npricing-tiers-pro-feature3 = Priorisierter Support\npricing-tiers-pro-feature4 = Private Ergebnisse\npricing-tiers-pro-feature5 = CI-Integration\npricing-tiers-pro-feature6 = Historische Daten\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Individuell\npricing-tiers-enterprise-feature1 = Alles in Pro enthalten\npricing-tiers-enterprise-feature2 = On-Premise-Option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedizierter Account Manager\npricing-tiers-enterprise-feature5 = Individuelle SLAs\npricing-tiers-enterprise-feature6 = Audit-Protokolle\npricing-tiers-enterprise-feature7 = Schulungssitzungen\npricing-tiers-contact-sales = Vertrieb kontaktieren\npricing-tiers-get-started = Erste Schritte\nproducts-header-title = Produkte\nproducts-header-description = Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.\nproducts-grid-learn-more = Mehr erfahren\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\nproducts-grid-cli-price = Kostenlos\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.\nproducts-grid-cloud-price = 29 $/Monat\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.\nproducts-grid-enterprise-price = Kontaktieren Sie uns\nproducts-grid-migration-name = Migrationsassistent\nproducts-grid-migration-desc = KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.\nproducts-grid-migration-price = Einmalig 99 $\nproducts-grid-qa-name = Übersetzungs-QA\nproducts-grid-qa-desc = Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\nproducts-grid-qa-price = 19 $/Monat\nproducts-grid-optimizer-name = Bundle-Optimierer\nproducts-grid-optimizer-desc = Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\nproducts-grid-optimizer-price = 49 $/Monat\nsettings-header-title = Einstellungen\nsettings-header-description = Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.\nsettings-profile-title = Profil\nsettings-profile-display-name = Anzeigename\nsettings-profile-email = E-Mail\nsettings-preferences-title = Einstellungen\nsettings-preferences-email-notifications = E-Mail-Benachrichtigungen\nsettings-preferences-weekly-reports = Wöchentliche Benchmark-Berichte erhalten\nsettings-preferences-toggle-notifications = Benachrichtigungen umschalten\nsettings-preferences-dark-mode = Dunkelmodus\nsettings-preferences-dark-color-scheme = Dunkles Farbschema verwenden\nsettings-preferences-toggle-dark-mode = Dunkelmodus umschalten\nsettings-preferences-default-language = Standardsprache\nsettings-preferences-english = Englisch (en)\nsettings-preferences-french = Französisch (fr)\nsettings-preferences-german = Deutsch (de)\nsettings-preferences-spanish = Spanisch (es)\nsettings-preferences-japanese = Japanisch (ja)\nsettings-preferences-chinese = Chinesisch vereinfacht (zh-CN)\nsettings-preferences-arabic = Arabisch (ar)\nsettings-api-access-title = API-Zugriff\nsettings-api-access-api-key = API-Schlüssel\nsettings-api-access-copy = Kopieren\nsettings-api-access-description = Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.\nsettings-footer-cancel = Abbrechen\nsettings-footer-save-changes = Änderungen speichern\nteam-header-title = Unser Team\nteam-header-description = Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Gründerin & Leitende Ingenieurin\nteam-grid-member1-bio = Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance-Ingenieur\nteam-grid-member2-bio = Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack-Entwickler\nteam-grid-member4-bio = Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Datenanalyst\nteam-grid-member5-bio = Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\nnot-found-title = 404\nnot-found-description = Hoppla! Seite nicht gefunden\nnot-found-return-home = Zurück zur Startseite\n", Sa = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Go to GitHub\nheader-home = Home\nheader-methodology = Methodology\nheader-mock-pages = Mock Pages\nheader-products = Products\nheader-pricing = Pricing\nheader-team = Team\nheader-blog = Blog\nheader-careers = Careers\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Settings\nfooter-title = i18n Benchmark\nfooter-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\nfooter-resources = Resources\nfooter-github = GitHub\nfooter-methodology = Methodology\nfooter-contributing = Contributing\nfooter-contact = Contact\nfooter-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.\ntheme-toggle-auto = Theme: Auto\ntheme-toggle-dark = Theme: Dark\ntheme-toggle-light = Theme: Light\ntheme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.\ntheme-toggle-label-other = Theme mode: {mode}. Click to switch mode.\nmock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\nhome-hero-title = i18n Benchmark\nhome-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\nhome-hero-view-results = View Results\nhome-hero-methodology = Methodology\nhome-why-it-matters-title = Why These Metrics Matter\nhome-why-it-matters-bundle-size-title = Bundle Size\nhome-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\nhome-why-it-matters-rendering-title = Rendering & Hydration\nhome-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Dynamic Loading\nhome-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\nhome-understanding-impact-title = Understanding the Impact\nhome-understanding-impact-single-json-title = Why a single large JSON can hurt performance\nhome-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\nhome-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.\nhome-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\nhome-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\nhome-understanding-impact-trade-offs-title = The trade-offs of dynamic loading\nhome-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\nhome-understanding-impact-waterfall-label = Waterfall requests:\nhome-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\nhome-understanding-impact-fouc-label = Flash of untranslated content (FOUC):\nhome-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.\nhome-understanding-impact-cache-label = Cache invalidation:\nhome-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\nhome-understanding-impact-measures-title = What this benchmark measures\nhome-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\nhome-results-table-title = Sample Results\nhome-results-table-library = Library\nhome-results-table-bundle-size = Bundle Size\nhome-results-table-lookup-time = Lookup Time\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Yes\nhome-results-table-manual = Manual\nhome-results-table-built-in = Built-in\nabout-header-title = About This Benchmark\nabout-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\nabout-grid-why-exists-title = Why This Exists\nabout-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\nabout-grid-methodology-title = Methodology\nabout-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\nabout-what-we-measure-title = What We Measure\nabout-what-we-measure-bundle-size-impact = Bundle size impact\nabout-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\nabout-what-we-measure-rendering-overhead = Rendering overhead\nabout-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\nabout-what-we-measure-hydration-cost = Hydration cost\nabout-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\nabout-what-we-measure-lazy-loading = Lazy loading effectiveness\nabout-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\nabout-what-we-measure-locale-switch = Locale switch speed\nabout-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutorials, and analysis from the i18n community.\nblog-list-read-more = Read More →\nblog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive\nblog-list-post1-date = March 15, 2026\nblog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = How to Reduce Your i18n Bundle by 60%\nblog-list-post2-date = March 8, 2026\nblog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = The State of Internationalization in React\nblog-list-post3-date = February 28, 2026\nblog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\nblog-list-post3-category = Analysis\nblog-list-post4-title = Migrating from react-i18next to Lingui\nblog-list-post4-date = February 15, 2026\nblog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components and i18n: What Changes?\nblog-list-post5-date = February 1, 2026\nblog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\nblog-list-post5-category = Analysis\nblog-list-post6-title = Benchmark Methodology: How We Test\nblog-list-post6-date = January 20, 2026\nblog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\nblog-list-post6-category = Meta\ncareers-header-title = Careers\ncareers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Work from anywhere in the world\ncareers-benefits-pay-label = Competitive pay\ncareers-benefits-pay-value = Top-of-market compensation\ncareers-benefits-oss-label = Open source time\ncareers-benefits-oss-value = 20% time for OSS contributions\ncareers-open-positions-title = Open Positions\ncareers-open-positions-apply-now = Apply Now\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Full-time\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\ncareers-open-positions-writer-title = Technical Writer\ncareers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.\ncareers-open-positions-devrel-title = DevRel Engineer\ncareers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\ncareers-open-positions-qa-title = QA Engineer\ncareers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\ncontact-header-title = Get in Touch\ncontact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\ncontact-form-name = Name\ncontact-form-your-name = Your name\ncontact-form-email = Email\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Topic\ncontact-form-bug-report = Bug Report\ncontact-form-new-benchmark-idea = New Benchmark Idea\ncontact-form-methodology-question = Methodology Question\ncontact-form-contribution = Contribution\ncontact-form-other = Other\ncontact-form-message = Message\ncontact-form-message-placeholder = Describe your question or idea...\ncontact-form-send-message = Send Message\nfaq-header-title = Frequently Asked Questions\nfaq-header-description = Everything you need to know about i18n Benchmark.\nfaq-list-q1 = What is i18n Benchmark?\nfaq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\nfaq-list-q2 = How are benchmarks conducted?\nfaq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\nfaq-list-q3 = Which libraries are currently supported?\nfaq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\nfaq-list-q4 = Can I submit my own benchmarks?\nfaq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\nfaq-list-q5 = How often are benchmarks updated?\nfaq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\nfaq-list-q6 = Is the data reliable?\nfaq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\nfaq-list-q7 = Do you offer consulting services?\nfaq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\nfaq-list-q8 = How can I contribute?\nfaq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\npricing-header-title = Simple, Transparent Pricing\npricing-header-description = Choose the plan that fits your team. No hidden fees.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = $0\npricing-tiers-starter-period = forever\npricing-tiers-starter-feature1 = 5 benchmark runs/day\npricing-tiers-starter-feature2 = 3 libraries\npricing-tiers-starter-feature3 = Community support\npricing-tiers-starter-feature4 = Public results\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = $29\npricing-tiers-pro-period = /month\npricing-tiers-pro-feature1 = Unlimited runs\npricing-tiers-pro-feature2 = All libraries\npricing-tiers-pro-feature3 = Priority support\npricing-tiers-pro-feature4 = Private results\npricing-tiers-pro-feature5 = CI integration\npricing-tiers-pro-feature6 = Historical data\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Custom\npricing-tiers-enterprise-feature1 = Everything in Pro\npricing-tiers-enterprise-feature2 = On-premise option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedicated account manager\npricing-tiers-enterprise-feature5 = Custom SLAs\npricing-tiers-enterprise-feature6 = Audit logs\npricing-tiers-enterprise-feature7 = Training sessions\npricing-tiers-contact-sales = Contact Sales\npricing-tiers-get-started = Get Started\nproducts-header-title = Products\nproducts-header-description = Tools and services to streamline your internationalization workflow.\nproducts-grid-learn-more = Learn More\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\nproducts-grid-cli-price = Free\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\nproducts-grid-cloud-price = $29/mo\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\nproducts-grid-enterprise-price = Contact Us\nproducts-grid-migration-name = Migration Assistant\nproducts-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\nproducts-grid-migration-price = $99 one-time\nproducts-grid-qa-name = Translation QA\nproducts-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.\nproducts-grid-qa-price = $19/mo\nproducts-grid-optimizer-name = Bundle Optimizer\nproducts-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\nproducts-grid-optimizer-price = $49/mo\nsettings-header-title = Settings\nsettings-header-description = Manage your account preferences and configuration.\nsettings-profile-title = Profile\nsettings-profile-display-name = Display Name\nsettings-profile-email = Email\nsettings-preferences-title = Preferences\nsettings-preferences-email-notifications = Email Notifications\nsettings-preferences-weekly-reports = Receive weekly benchmark reports\nsettings-preferences-toggle-notifications = Toggle notifications\nsettings-preferences-dark-mode = Dark Mode\nsettings-preferences-dark-color-scheme = Use dark color scheme\nsettings-preferences-toggle-dark-mode = Toggle dark mode\nsettings-preferences-default-language = Default Language\nsettings-preferences-english = English (en)\nsettings-preferences-french = French (fr)\nsettings-preferences-german = German (de)\nsettings-preferences-spanish = Spanish (es)\nsettings-preferences-japanese = Japanese (ja)\nsettings-preferences-chinese = Chinese Simplified (zh-CN)\nsettings-preferences-arabic = Arabic (ar)\nsettings-api-access-title = API Access\nsettings-api-access-api-key = API Key\nsettings-api-access-copy = Copy\nsettings-api-access-description = Use this key to access the benchmarking API programmatically.\nsettings-footer-cancel = Cancel\nsettings-footer-save-changes = Save Changes\nteam-header-title = Our Team\nteam-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Founder & Lead Engineer\nteam-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance Engineer\nteam-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack Developer\nteam-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Data Analyst\nteam-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.\nnot-found-title = 404\nnot-found-description = Oops! Page not found\nnot-found-return-home = Return to Home\n", Ca = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Ir a GitHub\nheader-home = Inicio\nheader-methodology = Metodología\nheader-mock-pages = Páginas de prueba\nheader-products = Productos\nheader-pricing = Precios\nheader-team = Equipo\nheader-blog = Blog\nheader-careers = Carreras\nheader-faq = FAQ\nheader-contact = Contacto\nheader-settings = Ajustes\nfooter-title = i18n Benchmark\nfooter-description = Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.\nfooter-resources = Recursos\nfooter-github = GitHub\nfooter-methodology = Metodología\nfooter-contributing = Contribuir\nfooter-contact = Contacto\nfooter-built-with = i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.\ntheme-toggle-auto = Tema: Auto\ntheme-toggle-dark = Tema: Oscuro\ntheme-toggle-light = Tema: Claro\ntheme-toggle-label-auto = Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.\ntheme-toggle-label-other = Modo de tema: {mode}. Haz clic para cambiar de modo.\nmock-banner = ⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.\nhome-hero-view-results = Ver resultados\nhome-hero-methodology = Metodología\nhome-why-it-matters-title = Por qué son importantes estas métricas\nhome-why-it-matters-bundle-size-title = Tamaño del bundle\nhome-why-it-matters-bundle-size-desc = El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.\nhome-why-it-matters-rendering-title = Renderizado e hidratación\nhome-why-it-matters-rendering-desc = Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Carga dinámica\nhome-why-it-matters-dynamic-loading-desc = Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\nhome-understanding-impact-title = Entendiendo el impacto\nhome-understanding-impact-single-json-title = Por qué un solo JSON grande puede perjudicar el rendimiento\nhome-understanding-impact-single-json-intro = Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\nhome-understanding-impact-single-json-bullet1 = El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\nhome-understanding-impact-single-json-bullet2 = Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.\nhome-understanding-impact-single-json-bullet3 = Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\nhome-understanding-impact-trade-offs-title = Las compensaciones de la carga dinámica\nhome-understanding-impact-trade-offs-intro = Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\nhome-understanding-impact-waterfall-label = Solicitudes en cascada:\nhome-understanding-impact-waterfall-desc = la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.\nhome-understanding-impact-fouc-label = Parpadeo de contenido no traducido (FOUC):\nhome-understanding-impact-fouc-desc = los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\nhome-understanding-impact-cache-label = Invalidación de la caché:\nhome-understanding-impact-cache-desc = actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.\nhome-understanding-impact-measures-title = Qué mide este benchmark\nhome-understanding-impact-measures-desc = Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\nhome-results-table-title = Resultados de muestra\nhome-results-table-library = Biblioteca\nhome-results-table-bundle-size = Tamaño del bundle\nhome-results-table-lookup-time = Tiempo de búsqueda\nhome-results-table-lazy-loading = Carga diferida\nhome-results-table-yes = Sí\nhome-results-table-manual = Manual\nhome-results-table-built-in = Integrado\nabout-header-title = Acerca de este benchmark\nabout-header-description = Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.\nabout-grid-why-exists-title = Por qué existe esto\nabout-grid-why-exists-desc = Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.\nabout-grid-methodology-title = Metodología\nabout-grid-methodology-desc = La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.\nabout-what-we-measure-title = Qué medimos\nabout-what-we-measure-bundle-size-impact = Impacto en el tamaño del bundle\nabout-what-we-measure-bundle-size-impact-desc = Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\nabout-what-we-measure-rendering-overhead = Sobrecarga de renderizado\nabout-what-we-measure-rendering-overhead-desc = Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.\nabout-what-we-measure-hydration-cost = Coste de hidratación\nabout-what-we-measure-hydration-cost-desc = Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\nabout-what-we-measure-lazy-loading = Eficacia de la carga diferida\nabout-what-we-measure-lazy-loading-desc = Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).\nabout-what-we-measure-locale-switch = Velocidad de cambio de idioma\nabout-what-we-measure-locale-switch-desc = Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\nblog-header-title = Blog\nblog-header-description = Información, tutoriales y análisis de la comunidad i18n.\nblog-list-read-more = Leer más →\nblog-list-post1-title = Comparativa de bibliotecas i18n en 2026: Un análisis profundo\nblog-list-post1-date = 15 de marzo de 2026\nblog-list-post1-excerpt = Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Cómo reducir tu bundle i18n en un 60%\nblog-list-post2-date = 8 de marzo de 2026\nblog-list-post2-excerpt = Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = El estado de la internacionalización en React\nblog-list-post3-date = 28 de febrero de 2026\nblog-list-post3-excerpt = Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.\nblog-list-post3-category = Análisis\nblog-list-post4-title = Migración de react-i18next a Lingui\nblog-list-post4-date = 15 de febrero de 2026\nblog-list-post4-excerpt = Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: ¿Qué cambia?\nblog-list-post5-date = 1 de febrero de 2026\nblog-list-post5-excerpt = Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\nblog-list-post5-category = Análisis\nblog-list-post6-title = Metodología de benchmark: Cómo probamos\nblog-list-post6-date = 20 de enero de 2026\nblog-list-post6-excerpt = Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\nblog-list-post6-category = Meta\ncareers-header-title = Carreras\ncareers-header-description = Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.\ncareers-benefits-remote-label = Remoto primero\ncareers-benefits-remote-value = Trabaja desde cualquier lugar del mundo\ncareers-benefits-pay-label = Salario competitivo\ncareers-benefits-pay-value = Compensación superior a la del mercado\ncareers-benefits-oss-label = Tiempo para el código abierto\ncareers-benefits-oss-value = 20% del tiempo para contribuciones a OSS\ncareers-open-positions-title = Puestos vacantes\ncareers-open-positions-apply-now = Postular ahora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tiempo completo\ncareers-open-positions-part-time = Tiempo parcial\ncareers-open-positions-engineering = Ingeniería\ncareers-open-positions-documentation = Documentación\ncareers-open-positions-community = Comunidad\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Ingeniero Frontend Senior\ncareers-open-positions-frontend-desc = Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.\ncareers-open-positions-backend-title = Ingeniero Backend\ncareers-open-positions-backend-desc = Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.\ncareers-open-positions-writer-title = Redactor técnico\ncareers-open-positions-writer-desc = Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\ncareers-open-positions-devrel-title = Ingeniero de DevRel\ncareers-open-positions-devrel-desc = Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.\ncareers-open-positions-qa-title = Ingeniero de QA\ncareers-open-positions-qa-desc = Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.\ncontact-header-title = Ponte en contacto\ncontact-header-description = ¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en\ncontact-form-name = Nombre\ncontact-form-your-name = Tu nombre\ncontact-form-email = Correo electrónico\ncontact-form-email-placeholder = tu@ejemplo.com\ncontact-form-topic = Tema\ncontact-form-bug-report = Informe de error\ncontact-form-new-benchmark-idea = Nueva idea de benchmark\ncontact-form-methodology-question = Pregunta sobre la metodología\ncontact-form-contribution = Contribución\ncontact-form-other = Otro\ncontact-form-message = Mensaje\ncontact-form-message-placeholder = Describe tu pregunta o idea...\ncontact-form-send-message = Enviar mensaje\nfaq-header-title = Preguntas frecuentes\nfaq-header-description = Todo lo que necesitas saber sobre i18n Benchmark.\nfaq-list-q1 = ¿Qué es i18n Benchmark?\nfaq-list-a1 = i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\nfaq-list-q2 = ¿Cómo se realizan los benchmarks?\nfaq-list-a2 = Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.\nfaq-list-q3 = ¿Qué bibliotecas se admiten actualmente?\nfaq-list-a3 = Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\nfaq-list-q4 = ¿Puedo enviar mis propios benchmarks?\nfaq-list-a4 = ¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.\nfaq-list-q5 = ¿Con qué frecuencia se actualizan los benchmarks?\nfaq-list-a5 = Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\nfaq-list-q6 = ¿Son fiables los datos?\nfaq-list-a6 = Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.\nfaq-list-q7 = ¿Ofrecen servicios de consultoría?\nfaq-list-a7 = Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.\nfaq-list-q8 = ¿Cómo puedo contribuir?\nfaq-list-a8 = Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.\npricing-header-title = Precios sencillos y transparentes\npricing-header-description = Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = para siempre\npricing-tiers-starter-feature1 = 5 ejecuciones de benchmark al día\npricing-tiers-starter-feature2 = 3 bibliotecas\npricing-tiers-starter-feature3 = Soporte de la comunidad\npricing-tiers-starter-feature4 = Resultados públicos\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mes\npricing-tiers-pro-feature1 = Ejecuciones ilimitadas\npricing-tiers-pro-feature2 = Todas las bibliotecas\npricing-tiers-pro-feature3 = Soporte prioritario\npricing-tiers-pro-feature4 = Resultados privados\npricing-tiers-pro-feature5 = Integración CI\npricing-tiers-pro-feature6 = Datos históricos\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizado\npricing-tiers-enterprise-feature1 = Todo lo que hay en Pro\npricing-tiers-enterprise-feature2 = Opción on-premise\npricing-tiers-enterprise-feature3 = SSO y SAML\npricing-tiers-enterprise-feature4 = Gestor de cuentas dedicado\npricing-tiers-enterprise-feature5 = SLAs personalizados\npricing-tiers-enterprise-feature6 = Registros de auditoría\npricing-tiers-enterprise-feature7 = Sesiones de formación\npricing-tiers-contact-sales = Contactar con ventas\npricing-tiers-get-started = Empezar\nproducts-header-title = Productos\nproducts-header-description = Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.\nproducts-grid-learn-more = Más información\nproducts-grid-cli-name = CLI de Benchmark\nproducts-grid-cli-desc = Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.\nproducts-grid-cli-price = Gratis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\nproducts-grid-cloud-price = 29 $/mes\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\nproducts-grid-enterprise-price = Contáctanos\nproducts-grid-migration-name = Asistente de migración\nproducts-grid-migration-desc = Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.\nproducts-grid-migration-price = 99 $ pago único\nproducts-grid-qa-name = QA de traducción\nproducts-grid-qa-desc = Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\nproducts-grid-qa-price = 19 $/mes\nproducts-grid-optimizer-name = Optimizador de bundle\nproducts-grid-optimizer-desc = Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.\nproducts-grid-optimizer-price = 49 $/mes\nsettings-header-title = Ajustes\nsettings-header-description = Gestiona las preferencias y la configuración de tu cuenta.\nsettings-profile-title = Perfil\nsettings-profile-display-name = Nombre visible\nsettings-profile-email = Correo electrónico\nsettings-preferences-title = Preferencias\nsettings-preferences-email-notifications = Notificaciones por correo electrónico\nsettings-preferences-weekly-reports = Recibir informes semanales de benchmarks\nsettings-preferences-toggle-notifications = Cambiar notificaciones\nsettings-preferences-dark-mode = Modo oscuro\nsettings-preferences-dark-color-scheme = Usar esquema de colores oscuro\nsettings-preferences-toggle-dark-mode = Cambiar modo oscuro\nsettings-preferences-default-language = Idioma predeterminado\nsettings-preferences-english = Inglés (en)\nsettings-preferences-french = Francés (fr)\nsettings-preferences-german = Alemán (de)\nsettings-preferences-spanish = Español (es)\nsettings-preferences-japanese = Japonés (ja)\nsettings-preferences-chinese = Chino simplificado (zh-CN)\nsettings-preferences-arabic = Árabe (ar)\nsettings-api-access-title = Acceso API\nsettings-api-access-api-key = Llave API\nsettings-api-access-copy = Copiar\nsettings-api-access-description = Usa esta llave para acceder a la API de benchmarking de forma programática.\nsettings-footer-cancel = Cancelar\nsettings-footer-save-changes = Guardar cambios\nteam-header-title = Nuestro equipo\nteam-header-description = Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fundadora e ingeniera principal\nteam-grid-member1-bio = Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingeniero de rendimiento\nteam-grid-member2-bio = Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Desarrollador Full-Stack\nteam-grid-member4-bio = Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista de datos\nteam-grid-member5-bio = Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Responsable de la communauté\nteam-grid-member6-bio = Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.\nnot-found-title = 404\nnot-found-description = ¡Ups! Página no encontrada\nnot-found-return-home = Volver al inicio\n", wa = "shared-app-name = Bench i18n\nshared-site-name = Benchmark i18n\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Aller sur GitHub\nheader-home = Accueil\nheader-methodology = Méthodologie\nheader-mock-pages = Pages fictives\nheader-products = Produits\nheader-pricing = Tarifs\nheader-team = Équipe\nheader-blog = Blog\nheader-careers = Carrières\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Paramètres\nfooter-title = Benchmark i18n\nfooter-description = Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\nfooter-resources = Ressources\nfooter-github = GitHub\nfooter-methodology = Méthodologie\nfooter-contributing = Contribuer\nfooter-contact = Contact\nfooter-built-with = Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.\ntheme-toggle-auto = Thème : automatique\ntheme-toggle-dark = Thème : sombre\ntheme-toggle-light = Thème : clair\ntheme-toggle-label-auto = Mode thème : automatique (système). Cliquez pour passer en mode clair.\ntheme-toggle-label-other = Mode thème : {mode}. Cliquez pour changer de mode.\nmock-banner = ⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.\nhome-hero-title = Benchmark i18n\nhome-hero-description = Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.\nhome-hero-view-results = Voir les résultats\nhome-hero-methodology = Méthodologie\nhome-why-it-matters-title = Pourquoi ces métriques comptent\nhome-why-it-matters-bundle-size-title = Taille du bundle\nhome-why-it-matters-bundle-size-desc = Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.\nhome-why-it-matters-rendering-title = Rendu et hydratation\nhome-why-it-matters-rendering-desc = Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Chargement dynamique\nhome-why-it-matters-dynamic-loading-desc = Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.\nhome-understanding-impact-title = Comprendre l'impact\nhome-understanding-impact-single-json-title = Pourquoi un unique gros JSON peut nuire aux performances\nhome-understanding-impact-single-json-intro = Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :\nhome-understanding-impact-single-json-bullet1 = Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.\nhome-understanding-impact-single-json-bullet2 = Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.\nhome-understanding-impact-single-json-bullet3 = Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.\nhome-understanding-impact-trade-offs-title = Les compromis du chargement dynamique\nhome-understanding-impact-trade-offs-intro = Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :\nhome-understanding-impact-waterfall-label = Requêtes en cascade :\nhome-understanding-impact-waterfall-desc = l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.\nhome-understanding-impact-fouc-label = Flash de contenu non traduit (FOUC) :\nhome-understanding-impact-fouc-desc = l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.\nhome-understanding-impact-cache-label = Invalidation du cache :\nhome-understanding-impact-cache-desc = mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.\nhome-understanding-impact-measures-title = Ce que mesure ce benchmark\nhome-understanding-impact-measures-desc = Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.\nhome-results-table-title = Exemple de résultats\nhome-results-table-library = Bibliothèque\nhome-results-table-bundle-size = Taille du bundle\nhome-results-table-lookup-time = Temps de recherche\nhome-results-table-lazy-loading = Chargement paresseux\nhome-results-table-yes = Oui\nhome-results-table-manual = Manuel\nhome-results-table-built-in = Intégré\nabout-header-title = À propos de ce benchmark\nabout-header-description = Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.\nabout-grid-why-exists-title = Pourquoi ce projet existe\nabout-grid-why-exists-desc = Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.\nabout-grid-methodology-title = Méthodologie\nabout-grid-methodology-desc = La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.\nabout-what-we-measure-title = Ce que nous mesurons\nabout-what-we-measure-bundle-size-impact = Impact sur la taille du bundle\nabout-what-we-measure-bundle-size-impact-desc = Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.\nabout-what-we-measure-rendering-overhead = Surcharge de rendu\nabout-what-we-measure-rendering-overhead-desc = Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.\nabout-what-we-measure-hydration-cost = Coût d'hydratation\nabout-what-we-measure-hydration-cost-desc = En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.\nabout-what-we-measure-lazy-loading = Efficacité du chargement paresseux\nabout-what-we-measure-lazy-loading-desc = Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?\nabout-what-we-measure-locale-switch = Vitesse de changement de langue\nabout-what-we-measure-locale-switch-desc = À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.\nblog-header-title = Blog\nblog-header-description = Articles, tutoriels et analyses de la communauté i18n.\nblog-list-read-more = Lire la suite →\nblog-list-post1-title = Comparer les bibliothèques i18n en 2026 : plongée détaillée\nblog-list-post1-date = 15 mars 2026\nblog-list-post1-excerpt = Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Réduire votre bundle i18n de 60 %\nblog-list-post2-date = 8 mars 2026\nblog-list-post2-excerpt = Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.\nblog-list-post2-category = Tutoriel\nblog-list-post3-title = État de l'internationalisation dans l'écosystème React\nblog-list-post3-date = 28 février 2026\nblog-list-post3-excerpt = Panorama des tendances, patterns émergents et préférences de la communauté.\nblog-list-post3-category = Analyse\nblog-list-post4-title = Migrer de react-i18next vers Lingui\nblog-list-post4-date = 15 février 2026\nblog-list-post4-excerpt = Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.\nblog-list-post4-category = Tutoriel\nblog-list-post5-title = Server Components et i18n : qu'est-ce qui change ?\nblog-list-post5-date = 1er février 2026\nblog-list-post5-excerpt = Les React Server Components introduisent de nouveaux motifs pour l'i18n.\nblog-list-post5-category = Analyse\nblog-list-post6-title = Méthodologie de benchmark : comment nous testons\nblog-list-post6-date = 20 janvier 2026\nblog-list-post6-excerpt = Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.\nblog-list-post6-category = Méta\ncareers-header-title = Carrières\ncareers-header-description = Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Travaillez depuis n'importe où\ncareers-benefits-pay-label = Rémunération compétitive\ncareers-benefits-pay-value = Fourchettes haut de marché\ncareers-benefits-oss-label = Temps open source\ncareers-benefits-oss-value = 20 % du temps pour contribuer à l'OSS\ncareers-open-positions-title = Postes ouverts\ncareers-open-positions-apply-now = Postuler\ncareers-open-positions-remote = À distance\ncareers-open-positions-full-time = Temps plein\ncareers-open-positions-part-time = Temps partiel\ncareers-open-positions-engineering = Ingénierie\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Communauté\ncareers-open-positions-sf-remote = San Francisco / télétravail\ncareers-open-positions-frontend-title = Ingénieur front-end senior\ncareers-open-positions-frontend-desc = Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.\ncareers-open-positions-backend-title = Ingénieur back-end\ncareers-open-positions-backend-desc = Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.\ncareers-open-positions-writer-title = Rédacteur·rice technique\ncareers-open-positions-writer-desc = Guides, références d'API et tutoriels pour la plateforme de benchmark.\ncareers-open-positions-devrel-title = Ingénieur DevRel\ncareers-open-positions-devrel-desc = Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.\ncareers-open-positions-qa-title = Ingénieur QA\ncareers-open-positions-qa-desc = Garantir la fiabilité des résultats par des tests et validations rigoureux.\ncontact-header-title = Contact\ncontact-header-description = Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à\ncontact-form-name = Nom\ncontact-form-your-name = Votre nom\ncontact-form-email = E-mail\ncontact-form-email-placeholder = vous@exemple.com\ncontact-form-topic = Sujet\ncontact-form-bug-report = Rapport de bug\ncontact-form-new-benchmark-idea = Idée de benchmark\ncontact-form-methodology-question = Question de méthodologie\ncontact-form-contribution = Contribution\ncontact-form-other = Autre\ncontact-form-message = Message\ncontact-form-message-placeholder = Décrivez votre question ou idée…\ncontact-form-send-message = Envoyer\nfaq-header-title = Questions fréquentes\nfaq-header-description = Tout savoir sur i18n Benchmark.\nfaq-list-q1 = Qu'est-ce qu'i18n Benchmark ?\nfaq-list-a1 = Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.\nfaq-list-q2 = Comment sont menés les benchmarks ?\nfaq-list-a2 = Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.\nfaq-list-q3 = Quelles bibliothèques sont prises en charge ?\nfaq-list-a3 = react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.\nfaq-list-q4 = Puis-je proposer des benchmarks ?\nfaq-list-a4 = Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.\nfaq-list-q5 = À quelle fréquence sont-ils mis à jour ?\nfaq-list-a5 = Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.\nfaq-list-q6 = Les données sont-elles fiables ?\nfaq-list-a6 = Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.\nfaq-list-q7 = Proposez-vous du conseil ?\nfaq-list-a7 = Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.\nfaq-list-q8 = Comment contribuer ?\nfaq-list-a8 = Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.\npricing-header-title = Tarification simple et transparente\npricing-header-description = Choisissez l'offre adaptée à votre équipe. Sans frais cachés.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 €\npricing-tiers-starter-period = pour toujours\npricing-tiers-starter-feature1 = 5 exécutions de benchmark / jour\npricing-tiers-starter-feature2 = 3 bibliothèques\npricing-tiers-starter-feature3 = Support communautaire\npricing-tiers-starter-feature4 = Résultats publics\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 €\npricing-tiers-pro-period = / mois\npricing-tiers-pro-feature1 = Exécutions illimitées\npricing-tiers-pro-feature2 = Toutes les bibliothèques\npricing-tiers-pro-feature3 = Support prioritaire\npricing-tiers-pro-feature4 = Résultats privés\npricing-tiers-pro-feature5 = Intégration CI\npricing-tiers-pro-feature6 = Historique\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Sur mesure\npricing-tiers-enterprise-feature1 = Tout le Pro\npricing-tiers-enterprise-feature2 = Option on-premise\npricing-tiers-enterprise-feature3 = SSO et SAML\npricing-tiers-enterprise-feature4 = Account manager dédié\npricing-tiers-enterprise-feature5 = SLA sur mesure\npricing-tiers-enterprise-feature6 = Journaux d'audit\npricing-tiers-enterprise-feature7 = Sessions de formation\npricing-tiers-contact-sales = Contacter les ventes\npricing-tiers-get-started = Commencer\nproducts-header-title = Produits\nproducts-header-description = Outils et services pour fluidifier votre flux i18n.\nproducts-grid-learn-more = En savoir plus\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Lancez des benchmarks en local. Configurations personnalisées et CI.\nproducts-grid-cli-price = Gratuit\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.\nproducts-grid-cloud-price = 29 €/mois\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise avec SSO, journaux d'audit, SLA et support dédié.\nproducts-grid-enterprise-price = Nous contacter\nproducts-grid-migration-name = Assistant de migration\nproducts-grid-migration-desc = Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.\nproducts-grid-migration-price = 99 € (unique)\nproducts-grid-qa-name = QA des traductions\nproducts-grid-qa-desc = Contrôles automatiques : clés manquantes, pluriels, contexte.\nproducts-grid-qa-price = 19 €/mois\nproducts-grid-optimizer-name = Optimiseur de bundle\nproducts-grid-optimizer-desc = Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).\nproducts-grid-optimizer-price = 49 €/mois\nsettings-header-title = Paramètres\nsettings-header-description = Gérez les préférences et la configuration de votre compte.\nsettings-profile-title = Profil\nsettings-profile-display-name = Nom affiché\nsettings-profile-email = E-mail\nsettings-preferences-title = Préférences\nsettings-preferences-email-notifications = Notifications e-mail\nsettings-preferences-weekly-reports = Recevoir les rapports hebdomadaires\nsettings-preferences-toggle-notifications = Activer/désactiver les notifications\nsettings-preferences-dark-mode = Mode sombre\nsettings-preferences-dark-color-scheme = Utiliser le thème sombre\nsettings-preferences-toggle-dark-mode = Basculer le mode sombre\nsettings-preferences-default-language = Langue par défaut\nsettings-preferences-english = Anglais (en)\nsettings-preferences-french = Français (fr)\nsettings-preferences-german = Allemand (de)\nsettings-preferences-spanish = Espagnol (es)\nsettings-preferences-japanese = Japonais (ja)\nsettings-preferences-chinese = Chinois simplifié (zh-CN)\nsettings-preferences-arabic = Arabe (ar)\nsettings-api-access-title = Accès API\nsettings-api-access-api-key = Clé API\nsettings-api-access-copy = Copier\nsettings-api-access-description = Utilisez cette clé pour appeler l'API de benchmark par programmation.\nsettings-footer-cancel = Annuler\nsettings-footer-save-changes = Enregistrer\nteam-header-title = Notre équipe\nteam-header-description = Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fondatrice & lead ingénieur\nteam-grid-member1-bio = Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingénieur performance\nteam-grid-member2-bio = Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer advocate\nteam-grid-member3-bio = Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Développeur full-stack\nteam-grid-member4-bio = Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analyste de données\nteam-grid-member5-bio = Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community manager\nteam-grid-member6-bio = Contributions communautaires, partenariats et événements — gouvernance open source.\nnot-found-title = 404\nnot-found-description = Oups ! Page introuvable\nnot-found-return-home = Retour à l'accueil\n", Ta = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Vai su GitHub\nheader-home = Home\nheader-methodology = Metodologia\nheader-mock-pages = Pagine di test\nheader-products = Prodotti\nheader-pricing = Prezzi\nheader-team = Team\nheader-blog = Blog\nheader-careers = Carriere\nheader-faq = FAQ\nheader-contact = Contatti\nheader-settings = Impostazioni\nfooter-title = i18n Benchmark\nfooter-description = Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.\nfooter-resources = Risorse\nfooter-github = GitHub\nfooter-methodology = Metodologia\nfooter-contributing = Contribuire\nfooter-contact = Contatti\nfooter-built-with = i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.\ntheme-toggle-auto = Tema: Auto\ntheme-toggle-dark = Tema: Scuro\ntheme-toggle-light = Tema: Chiaro\ntheme-toggle-label-auto = Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.\ntheme-toggle-label-other = Modalità tema: {mode}. Clicca per cambiare modalità.\nmock-banner = ⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.\nhome-hero-view-results = Visualizza i risultati\nhome-hero-methodology = Metodologia\nhome-why-it-matters-title = Perché queste metriche sono importanti\nhome-why-it-matters-bundle-size-title = Dimensione del bundle\nhome-why-it-matters-bundle-size-desc = Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\nhome-why-it-matters-rendering-title = Rendering e idratazione\nhome-why-it-matters-rendering-desc = Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Caricamento dinamico\nhome-why-it-matters-dynamic-loading-desc = Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\nhome-understanding-impact-title = Capire l'impatto\nhome-understanding-impact-single-json-title = Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\nhome-understanding-impact-single-json-intro = Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\nhome-understanding-impact-single-json-bullet1 = Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.\nhome-understanding-impact-single-json-bullet2 = Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\nhome-understanding-impact-single-json-bullet3 = Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.\nhome-understanding-impact-trade-offs-title = I compromessi del caricamento dinamico\nhome-understanding-impact-trade-offs-intro = La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\nhome-understanding-impact-waterfall-label = Richieste a cascata:\nhome-understanding-impact-waterfall-desc = l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.\nhome-understanding-impact-fouc-label = Flash di contenuti non tradotti (FOUC):\nhome-understanding-impact-fouc-desc = gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\nhome-understanding-impact-cache-label = Invalidazione della cache:\nhome-understanding-impact-cache-desc = l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.\nhome-understanding-impact-measures-title = Cosa misura questo benchmark\nhome-understanding-impact-measures-desc = Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\nhome-results-table-title = Risultati di esempio\nhome-results-table-library = Libreria\nhome-results-table-bundle-size = Dimensione del bundle\nhome-results-table-lookup-time = Tempo di ricerca\nhome-results-table-lazy-loading = Caricamento lazy\nhome-results-table-yes = Sì\nhome-results-table-manual = Manuale\nhome-results-table-built-in = Integrato\nabout-header-title = Informazioni su questo benchmark\nabout-header-description = Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.\nabout-grid-why-exists-title = Perché esiste\nabout-grid-why-exists-desc = Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\nabout-grid-methodology-title = Metodologia\nabout-grid-methodology-desc = La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\nabout-what-we-measure-title = Cosa misuriamo\nabout-what-we-measure-bundle-size-impact = Impatto sulla dimensione del bundle\nabout-what-we-measure-bundle-size-impact-desc = I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.\nabout-what-we-measure-rendering-overhead = Sovrapprezzo di rendering\nabout-what-we-measure-rendering-overhead-desc = Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\nabout-what-we-measure-hydration-cost = Costo di idratazione\nabout-what-we-measure-hydration-cost-desc = Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.\nabout-what-we-measure-lazy-loading = Efficacia del caricamento pigro\nabout-what-we-measure-lazy-loading-desc = Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).\nabout-what-we-measure-locale-switch = Velocità di cambio lingua\nabout-what-we-measure-locale-switch-desc = Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.\nblog-header-title = Blog\nblog-header-description = Approfondimenti, tutorial e analisi dalla comunità i18n.\nblog-list-read-more = Leggi di più →\nblog-list-post1-title = Confronto delle librerie i18n nel 2026: un'analisi approfondita\nblog-list-post1-date = 15 marzo 2026\nblog-list-post1-excerpt = Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Come ridurre il bundle i18n del 60%\nblog-list-post2-date = 8 marzo 2026\nblog-list-post2-excerpt = Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = Lo stato dell'internazionalizzazione in React\nblog-list-post3-date = 28 febbraio 2026\nblog-list-post3-excerpt = Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\nblog-list-post3-category = Analisi\nblog-list-post4-title = Migrazione da react-i18next a Lingui\nblog-list-post4-date = 15 febbraio 2026\nblog-list-post4-excerpt = Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: cosa cambia?\nblog-list-post5-date = 1 febbraio 2026\nblog-list-post5-excerpt = I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\nblog-list-post5-category = Analisi\nblog-list-post6-title = Metodologia del benchmark: come testiamo\nblog-list-post6-date = 20 gennaio 2026\nblog-list-post6-excerpt = Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.\nblog-list-post6-category = Meta\ncareers-header-title = Carriere\ncareers-header-description = Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Lavora da qualsiasi parte del mondo\ncareers-benefits-pay-label = Retribuzione competitiva\ncareers-benefits-pay-value = Compensazione ai vertici del mercato\ncareers-benefits-oss-label = Tempo per l'open source\ncareers-benefits-oss-value = 20% del tempo per contributi open source\ncareers-open-positions-title = Posizioni aperte\ncareers-open-positions-apply-now = Candidati ora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tempo pieno\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentazione\ncareers-open-positions-community = Comunità\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Ingegnere Frontend Senior\ncareers-open-positions-frontend-desc = Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.\ncareers-open-positions-writer-title = Scrittore tecnico\ncareers-open-positions-writer-desc = Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\ncareers-open-positions-devrel-title = Ingegnere DevRel\ncareers-open-positions-devrel-desc = Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.\ncareers-open-positions-qa-title = Ingegnere QA\ncareers-open-positions-qa-desc = Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\ncontact-header-title = Contattaci\ncontact-header-description = Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo\ncontact-form-name = Nome\ncontact-form-your-name = Il tuo nome\ncontact-form-email = Email\ncontact-form-email-placeholder = tu@esempio.com\ncontact-form-topic = Argomento\ncontact-form-bug-report = Segnalazione bug\ncontact-form-new-benchmark-idea = Nuova idea di benchmark\ncontact-form-methodology-question = Domanda sulla metodologia\ncontact-form-contribution = Contributo\ncontact-form-other = Altro\ncontact-form-message = Messaggio\ncontact-form-message-placeholder = Descrivi la tua domanda o idea...\ncontact-form-send-message = Invia messaggio\nfaq-header-title = Domande frequenti\nfaq-header-description = Tutto quello che c'è da sapere su i18n Benchmark.\nfaq-list-q1 = Cos'è i18n Benchmark?\nfaq-list-a1 = i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.\nfaq-list-q2 = Come vengono condotti i benchmark?\nfaq-list-a2 = Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.\nfaq-list-q3 = Quali librerie sono attualmente supportate?\nfaq-list-a3 = Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\nfaq-list-q4 = Posso inviare i miei benchmark?\nfaq-list-a4 = Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.\nfaq-list-q5 = Con quale frequenza vengono aggiornati i benchmark?\nfaq-list-a5 = Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.\nfaq-list-q6 = I dati sono affidabili?\nfaq-list-a6 = Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.\nfaq-list-q7 = Offrite servizi di consulenza?\nfaq-list-a7 = Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.\nfaq-list-q8 = Come posso contribuire?\nfaq-list-a8 = Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\npricing-header-title = Prezzi semplici e trasparenti\npricing-header-description = Scegli il piano più adatto al tuo team. Nessun costo nascosto.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = per sempre\npricing-tiers-starter-feature1 = 5 esecuzioni benchmark al giorno\npricing-tiers-starter-feature2 = 3 librerie\npricing-tiers-starter-feature3 = Supporto della comunità\npricing-tiers-starter-feature4 = Risultati pubblici\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mese\npricing-tiers-pro-feature1 = Esecuzioni illimitate\npricing-tiers-pro-feature2 = Tutte le librerie\npricing-tiers-pro-feature3 = Supporto prioritario\npricing-tiers-pro-feature4 = Risultati privati\npricing-tiers-pro-feature5 = Integrazione CI\npricing-tiers-pro-feature6 = Dati storici\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizzato\npricing-tiers-enterprise-feature1 = Tutto quello che c'è in Pro\npricing-tiers-enterprise-feature2 = Opzione on-premise\npricing-tiers-enterprise-feature3 = SSO e SAML\npricing-tiers-enterprise-feature4 = Account manager dedicato\npricing-tiers-enterprise-feature5 = SLA personalizzati\npricing-tiers-enterprise-feature6 = Log di controllo\npricing-tiers-enterprise-feature7 = Sessioni di formazione\npricing-tiers-contact-sales = Contatta l'ufficio vendite\npricing-tiers-get-started = Inizia ora\nproducts-header-title = Prodotti\nproducts-header-description = Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.\nproducts-grid-learn-more = Scopri di più\nproducts-grid-cli-name = CLI del Benchmark\nproducts-grid-cli-desc = Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\nproducts-grid-cli-price = Gratis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.\nproducts-grid-cloud-price = 29 $/mese\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.\nproducts-grid-enterprise-price = Contattaci\nproducts-grid-migration-name = Assistente alla migrazione\nproducts-grid-migration-desc = Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.\nproducts-grid-migration-price = 99 $ una tantum\nproducts-grid-qa-name = QA delle traduzioni\nproducts-grid-qa-desc = Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\nproducts-grid-qa-price = 19 $/mese\nproducts-grid-optimizer-name = Ottimizzatore del bundle\nproducts-grid-optimizer-desc = Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\nproducts-grid-optimizer-price = 49 $/mese\nsettings-header-title = Impostazioni\nsettings-header-description = Gestisci le preferenze del tuo account e la configurazione.\nsettings-profile-title = Profilo\nsettings-profile-display-name = Nome visualizzato\nsettings-profile-email = Email\nsettings-preferences-title = Preferenze\nsettings-preferences-email-notifications = Notifiche via email\nsettings-preferences-weekly-reports = Ricevi rapporti settimanali sui benchmark\nsettings-preferences-toggle-notifications = Attiva/disattiva notifiche\nsettings-preferences-dark-mode = Modalità scura\nsettings-preferences-dark-color-scheme = Usa lo schema colori scuro\nsettings-preferences-toggle-dark-mode = Attiva/disattiva modalità scura\nsettings-preferences-default-language = Lingua predefinita\nsettings-preferences-english = Inglese (en)\nsettings-preferences-french = Francese (fr)\nsettings-preferences-german = Tedesco (de)\nsettings-preferences-spanish = Spagnolo (es)\nsettings-preferences-japanese = Giapponese (ja)\nsettings-preferences-chinese = Cinese semplificato (zh-CN)\nsettings-preferences-arabic = Arabo (ar)\nsettings-api-access-title = Accesso API\nsettings-api-access-api-key = Chiave API\nsettings-api-access-copy = Copia\nsettings-api-access-description = Usa questa chiave per accedere programmaticamente alle API di benchmarking.\nsettings-footer-cancel = Annulla\nsettings-footer-save-changes = Salva modifiche\nteam-header-title = Il nostro team\nteam-header-description = Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fondatrice e Responsabile tecnico\nteam-grid-member1-bio = Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingegnere delle prestazioni\nteam-grid-member2-bio = Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Sviluppatore Full-Stack\nteam-grid-member4-bio = Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista dati\nteam-grid-member5-bio = Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Responsable della comunità\nteam-grid-member6-bio = Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\nnot-found-title = 404\nnot-found-description = Ops! Pagina non trovata\nnot-found-return-home = Torna alla Home\n", Ea = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = GitHubへ\nheader-home = ホーム\nheader-methodology = 手法\nheader-mock-pages = テストページ\nheader-products = 製品\nheader-pricing = 価格\nheader-team = チーム\nheader-blog = ブログ\nheader-careers = 採用情報\nheader-faq = FAQ\nheader-contact = お問い合わせ\nheader-settings = 設定\nfooter-title = i18n Benchmark\nfooter-description = 国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。\nfooter-resources = リソース\nfooter-github = GitHub\nfooter-methodology = 手法\nfooter-contributing = 貢献する\nfooter-contact = お問い合わせ\nfooter-built-with = i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。\ntheme-toggle-auto = テーマ：自動\ntheme-toggle-dark = テーマ：ダーク\ntheme-toggle-light = テーマ：ライト\ntheme-toggle-label-auto = テーマモード：自動（システム）。クリックするとライトモードに切り替わります。\ntheme-toggle-label-other = テーマモード：{mode}。クリックしてモードを切り替えます。\nmock-banner = ⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。\nhome-hero-title = i18n Benchmark\nhome-hero-description = 国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。\nhome-hero-view-results = 結果を見る\nhome-hero-methodology = 手法\nhome-why-it-matters-title = なぜこれらの指標が重要なのか\nhome-why-it-matters-bundle-size-title = バンドルサイズ\nhome-why-it-matters-bundle-size-desc = バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。\nhome-why-it-matters-rendering-title = レンダリングとハイドレーション\nhome-why-it-matters-rendering-desc = 巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。\nhome-why-it-matters-dynamic-loading-title = 動的読み込み\nhome-why-it-matters-dynamic-loading-desc = すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。\nhome-understanding-impact-title = 影響を理解する\nhome-understanding-impact-single-json-title = なぜ1つの大きなJSONがパフォーマンスを低下させるのか\nhome-understanding-impact-single-json-intro = 多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\nhome-understanding-impact-single-json-bullet1 = ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。\nhome-understanding-impact-single-json-bullet2 = コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。\nhome-understanding-impact-single-json-bullet3 = サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\nhome-understanding-impact-trade-offs-title = 動的読み込みのトレードオフ\nhome-understanding-impact-trade-offs-intro = 翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：\nhome-understanding-impact-waterfall-label = ウォーターフォールリクエスト：\nhome-understanding-impact-waterfall-desc = アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\nhome-understanding-impact-fouc-label = 翻訳されていないコンテンツのフラッシュ (FOUC)：\nhome-understanding-impact-fouc-desc = チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。\nhome-understanding-impact-cache-label = キャッシュの無効化：\nhome-understanding-impact-cache-desc = 翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。\nhome-understanding-impact-measures-title = このベンチマークが測定するもの\nhome-understanding-impact-measures-desc = このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\nhome-results-table-title = サンプル結果\nhome-results-table-library = ライブラリ\nhome-results-table-bundle-size = バンドルサイズ\nhome-results-table-lookup-time = ルックアップ時間\nhome-results-table-lazy-loading = 遅延読み込み\nhome-results-table-yes = はい\nhome-results-table-manual = 手動\nhome-results-table-built-in = 内蔵\nabout-header-title = このベンチマークについて\nabout-header-description = これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。\nabout-grid-why-exists-title = なぜこれが存在するのか\nabout-grid-why-exists-desc = i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。\nabout-grid-methodology-title = 手法\nabout-grid-methodology-desc = 同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。\nabout-what-we-measure-title = 測定項目\nabout-what-we-measure-bundle-size-impact = バンドルサイズへの影響\nabout-what-we-measure-bundle-size-impact-desc = i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。\nabout-what-we-measure-rendering-overhead = レンダリングのオーバーヘッド\nabout-what-we-measure-rendering-overhead-desc = ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\nabout-what-we-measure-hydration-cost = ハイドレーションコスト\nabout-what-we-measure-hydration-cost-desc = SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。\nabout-what-we-measure-lazy-loading = 遅延読み込みの有効性\nabout-what-we-measure-lazy-loading-desc = ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。\nabout-what-we-measure-locale-switch = ロケール切り替え速度\nabout-what-we-measure-locale-switch-desc = 実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\nblog-header-title = ブログ\nblog-header-description = i18nコミュニティからのインサイト、チュートリアル、分析。\nblog-list-read-more = 続きを読む →\nblog-list-post1-title = 2026年のi18nライブラリ比較：ディープダイブ\nblog-list-post1-date = 2026年3月15日\nblog-list-post1-excerpt = パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\nblog-list-post1-category = ベンチマーク\nblog-list-post2-title = i18nバンドルを60%削減する方法\nblog-list-post2-date = 2026年3月8日\nblog-list-post2-excerpt = 遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。\nblog-list-post2-category = チュートリアル\nblog-list-post3-title = Reactにおける国際化の現状\nblog-list-post3-date = 2026年2月28日\nblog-list-post3-excerpt = トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。\nblog-list-post3-category = 分析\nblog-list-post4-title = react-i18nextからLinguiへの移行\nblog-list-post4-date = 2026年2月15日\nblog-list-post4-excerpt = 50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\nblog-list-post4-category = チュートリアル\nblog-list-post5-title = Server Componentsとi18n：何が変わるのか？\nblog-list-post5-date = 2026年2月1日\nblog-list-post5-excerpt = React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\nblog-list-post5-category = 分析\nblog-list-post6-title = ベンチマーク手法：テスト方法について\nblog-list-post6-date = 2026年1月20日\nblog-list-post6-excerpt = テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。\nblog-list-post6-category = メタ\ncareers-header-title = 採用情報\ncareers-header-description = 国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。\ncareers-benefits-remote-label = リモートファースト\ncareers-benefits-remote-value = 世界中のどこからでも仕事ができます\ncareers-benefits-pay-label = 競争力のある給与\ncareers-benefits-pay-value = 市場トップクラスの報酬\ncareers-benefits-oss-label = オープンソースの時間\ncareers-benefits-oss-value = 時間の20%をOSSへの貢献に\ncareers-open-positions-title = 募集中の職種\ncareers-open-positions-apply-now = 今すぐ応募\ncareers-open-positions-remote = リモート\ncareers-open-positions-full-time = フルタイム\ncareers-open-positions-part-time = パートタイム\ncareers-open-positions-engineering = エンジニアリング\ncareers-open-positions-documentation = ドキュメンテーション\ncareers-open-positions-community = コミュニティ\ncareers-open-positions-sf-remote = サンフランシスコ / リモート\ncareers-open-positions-frontend-title = シニアフロントエンドエンジニア\ncareers-open-positions-frontend-desc = React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。\ncareers-open-positions-backend-title = バックエンドエンジニア\ncareers-open-positions-backend-desc = 毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。\ncareers-open-positions-writer-title = テクニカルライター\ncareers-open-positions-writer-desc = ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。\ncareers-open-positions-devrel-title = DevRelエンジニア\ncareers-open-positions-devrel-desc = トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。\ncareers-open-positions-qa-title = QAエンジニア\ncareers-open-positions-qa-desc = 厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\ncontact-header-title = お問い合わせ\ncontact-header-description = アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：\ncontact-form-name = 名前\ncontact-form-your-name = お名前\ncontact-form-email = メールアドレス\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = トピック\ncontact-form-bug-report = バグ報告\ncontact-form-new-benchmark-idea = 新しいベンチマークのアイデア\ncontact-form-methodology-question = 手法に関する質問\ncontact-form-contribution = 貢献\ncontact-form-other = その他\ncontact-form-message = メッセージ\ncontact-form-message-placeholder = ご質問やアイデアを記入してください...\ncontact-form-send-message = メッセージを送信\nfaq-header-title = よくある質問\nfaq-header-description = i18n Benchmarkについて知っておくべきすべてのこと。\nfaq-list-q1 = i18n Benchmarkとは何ですか？\nfaq-list-a1 = i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。\nfaq-list-q2 = ベンチマークはどのように実施されますか？\nfaq-list-a2 = 一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\nfaq-list-q3 = 現在サポートされているライブラリは何ですか？\nfaq-list-a3 = react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。\nfaq-list-q4 = 自分のベンチマークを投稿できますか？\nfaq-list-a4 = はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。\nfaq-list-q5 = ベンチマークはどのくらいの頻度で更新されますか？\nfaq-list-a5 = 各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。\nfaq-list-q6 = データは信頼できますか？\nfaq-list-a6 = ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。\nfaq-list-q7 = コンサルティングサービスは提供していますか？\nfaq-list-a7 = はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\nfaq-list-q8 = どのように貢献できますか？\nfaq-list-a8 = 貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。\npricing-header-title = シンプルで透明性の高い価格設定\npricing-header-description = チームに合ったプランをお選びください。隠れた費用はありません。\npricing-tiers-starter-name = スターター\npricing-tiers-starter-price = 0円\npricing-tiers-starter-period = ずっと無料\npricing-tiers-starter-feature1 = 1日あたり5回のベンチマーク実行\npricing-tiers-starter-feature2 = 3ライブラリ\npricing-tiers-starter-feature3 = コミュニティサポート\npricing-tiers-starter-feature4 = 公開結果\npricing-tiers-pro-name = プロ\npricing-tiers-pro-price = 29ドル\npricing-tiers-pro-period = /月\npricing-tiers-pro-feature1 = 無制限の実行\npricing-tiers-pro-feature2 = すべてのライブラリ\npricing-tiers-pro-feature3 = 優先サポート\npricing-tiers-pro-feature4 = 非公開の結果\npricing-tiers-pro-feature5 = CI統合\npricing-tiers-pro-feature6 = 履歴データ\npricing-tiers-enterprise-name = エンタープライズ\npricing-tiers-enterprise-price = カスタム\npricing-tiers-enterprise-feature1 = Proプランのすべてを含む\npricing-tiers-enterprise-feature2 = オンプレミスオプション\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = 専任のアカウントマネージャー\npricing-tiers-enterprise-feature5 = カスタムSLA\npricing-tiers-enterprise-feature6 = 監査ログ\npricing-tiers-enterprise-feature7 = トレーニングセッション\npricing-tiers-contact-sales = 営業に問い合わせる\npricing-tiers-get-started = 始める\nproducts-header-title = 製品\nproducts-header-description = 国際化ワークフローを効率化するためのツールとサービス。\nproducts-grid-learn-more = 詳細はこちら\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。\nproducts-grid-cli-price = 無料\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = 履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。\nproducts-grid-cloud-price = 29ドル/月\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。\nproducts-grid-enterprise-price = お問い合わせ\nproducts-grid-migration-name = 移行アシスタント\nproducts-grid-migration-desc = ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。\nproducts-grid-migration-price = 99ドル（一回限り）\nproducts-grid-qa-name = 翻訳QA\nproducts-grid-qa-desc = 翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。\nproducts-grid-qa-price = 19ドル/月\nproducts-grid-optimizer-name = バンドルオプティマイザー\nproducts-grid-optimizer-desc = ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。\nproducts-grid-optimizer-price = 49ドル/月\nsettings-header-title = 設定\nsettings-header-description = アカウント設定と構成を管理します。\nsettings-profile-title = プロフィール\nsettings-profile-display-name = 表示名\nsettings-profile-email = メールアドレス\nsettings-preferences-title = 設定\nsettings-preferences-email-notifications = メール通知\nsettings-preferences-weekly-reports = 毎週のベンチマークレポートを受け取る\nsettings-preferences-toggle-notifications = 通知の切り替え\nsettings-preferences-dark-mode = ダークモード\nsettings-preferences-dark-color-scheme = ダークカラー（暗い配色）を使用する\nsettings-preferences-toggle-dark-mode = ダークモードの切り替え\nsettings-preferences-default-language = デフォルトの言語\nsettings-preferences-english = 英語 (en)\nsettings-preferences-french = フランス語 (fr)\nsettings-preferences-german = ドイツ語 (de)\nsettings-preferences-spanish = スペイン語 (es)\nsettings-preferences-japanese = 日本語 (ja)\nsettings-preferences-chinese = 中国語（簡体字） (zh-CN)\nsettings-preferences-arabic = アラビア語 (ar)\nsettings-api-access-title = APIアクセス\nsettings-api-access-api-key = APIキー\nsettings-api-access-copy = コピー\nsettings-api-access-description = このキーを使用して、プログラムでベンチマークAPIにアクセスします。\nsettings-footer-cancel = キャンセル\nsettings-footer-save-changes = 変更を保存\nteam-header-title = 私たちのチーム\nteam-header-description = i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = 創設者 & リードエンジニア\nteam-grid-member1-bio = 大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = パフォーマンスエンジニア\nteam-grid-member2-bio = JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = 開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = フルスタックデベロッパー\nteam-grid-member4-bio = ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = データアナリスト\nteam-grid-member5-bio = すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = コミュニティマネージャー\nteam-grid-member6-bio = コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。\nnot-found-title = 404\nnot-found-description = おっと！ページが見つかりません\nnot-found-return-home = ホームに戻る\n", Da = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Go to GitHub\nheader-home = Home\nheader-methodology = Methodology\nheader-mock-pages = Mock Pages\nheader-products = Products\nheader-pricing = Pricing\nheader-team = Team\nheader-blog = Blog\nheader-careers = Careers\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Settings\nfooter-title = i18n Benchmark\nfooter-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\nfooter-resources = Resources\nfooter-github = GitHub\nfooter-methodology = Methodology\nfooter-contributing = Contributing\nfooter-contact = Contact\nfooter-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.\ntheme-toggle-auto = Theme: Auto\ntheme-toggle-dark = Theme: Dark\ntheme-toggle-light = Theme: Light\ntheme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.\ntheme-toggle-label-other = Theme mode: {mode}. Click to switch mode.\nmock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\nhome-hero-title = i18n Benchmark\nhome-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\nhome-hero-view-results = View Results\nhome-hero-methodology = Methodology\nhome-why-it-matters-title = Why These Metrics Matter\nhome-why-it-matters-bundle-size-title = Bundle Size\nhome-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\nhome-why-it-matters-rendering-title = Rendering & Hydration\nhome-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Dynamic Loading\nhome-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\nhome-understanding-impact-title = Understanding the Impact\nhome-understanding-impact-single-json-title = Why a single large JSON can hurt performance\nhome-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\nhome-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.\nhome-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\nhome-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\nhome-understanding-impact-trade-offs-title = The trade-offs of dynamic loading\nhome-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\nhome-understanding-impact-waterfall-label = Waterfall requests:\nhome-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\nhome-understanding-impact-fouc-label = Flash of untranslated content (FOUC):\nhome-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.\nhome-understanding-impact-cache-label = Cache invalidation:\nhome-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\nhome-understanding-impact-measures-title = What this benchmark measures\nhome-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\nhome-results-table-title = Sample Results\nhome-results-table-library = Library\nhome-results-table-bundle-size = Bundle Size\nhome-results-table-lookup-time = Lookup Time\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Yes\nhome-results-table-manual = Manual\nhome-results-table-built-in = Built-in\nabout-header-title = About This Benchmark\nabout-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\nabout-grid-why-exists-title = Why This Exists\nabout-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\nabout-grid-methodology-title = Methodology\nabout-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\nabout-what-we-measure-title = What We Measure\nabout-what-we-measure-bundle-size-impact = Bundle size impact\nabout-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\nabout-what-we-measure-rendering-overhead = Rendering overhead\nabout-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\nabout-what-we-measure-hydration-cost = Hydration cost\nabout-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\nabout-what-we-measure-lazy-loading = Lazy loading effectiveness\nabout-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\nabout-what-we-measure-locale-switch = Locale switch speed\nabout-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutorials, and analysis from the i18n community.\nblog-list-read-more = Read More →\nblog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive\nblog-list-post1-date = March 15, 2026\nblog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = How to Reduce Your i18n Bundle by 60%\nblog-list-post2-date = March 8, 2026\nblog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = The State of Internationalization in React\nblog-list-post3-date = February 28, 2026\nblog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\nblog-list-post3-category = Analysis\nblog-list-post4-title = Migrating from react-i18next to Lingui\nblog-list-post4-date = February 15, 2026\nblog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components and i18n: What Changes?\nblog-list-post5-date = February 1, 2026\nblog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\nblog-list-post5-category = Analysis\nblog-list-post6-title = Benchmark Methodology: How We Test\nblog-list-post6-date = January 20, 2026\nblog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\nblog-list-post6-category = Meta\ncareers-header-title = Careers\ncareers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Work from anywhere in the world\ncareers-benefits-pay-label = Competitive pay\ncareers-benefits-pay-value = Top-of-market compensation\ncareers-benefits-oss-label = Open source time\ncareers-benefits-oss-value = 20% time for OSS contributions\ncareers-open-positions-title = Open Positions\ncareers-open-positions-apply-now = Apply Now\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Full-time\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\ncareers-open-positions-writer-title = Technical Writer\ncareers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.\ncareers-open-positions-devrel-title = DevRel Engineer\ncareers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\ncareers-open-positions-qa-title = QA Engineer\ncareers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\ncontact-header-title = Get in Touch\ncontact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\ncontact-form-name = Name\ncontact-form-your-name = Your name\ncontact-form-email = Email\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Topic\ncontact-form-bug-report = Bug Report\ncontact-form-new-benchmark-idea = New Benchmark Idea\ncontact-form-methodology-question = Methodology Question\ncontact-form-contribution = Contribution\ncontact-form-other = Other\ncontact-form-message = Message\ncontact-form-message-placeholder = Describe your question or idea...\ncontact-form-send-message = Send Message\nfaq-header-title = Frequently Asked Questions\nfaq-header-description = Everything you need to know about i18n Benchmark.\nfaq-list-q1 = What is i18n Benchmark?\nfaq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\nfaq-list-q2 = How are benchmarks conducted?\nfaq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\nfaq-list-q3 = Which libraries are currently supported?\nfaq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\nfaq-list-q4 = Can I submit my own benchmarks?\nfaq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\nfaq-list-q5 = How often are benchmarks updated?\nfaq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\nfaq-list-q6 = Is the data reliable?\nfaq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\nfaq-list-q7 = Do you offer consulting services?\nfaq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\nfaq-list-q8 = How can I contribute?\nfaq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\npricing-header-title = Simple, Transparent Pricing\npricing-header-description = Choose the plan that fits your team. No hidden fees.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = $0\npricing-tiers-starter-period = forever\npricing-tiers-starter-feature1 = 5 benchmark runs/day\npricing-tiers-starter-feature2 = 3 libraries\npricing-tiers-starter-feature3 = Community support\npricing-tiers-starter-feature4 = Public results\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = $29\npricing-tiers-pro-period = /month\npricing-tiers-pro-feature1 = Unlimited runs\npricing-tiers-pro-feature2 = All libraries\npricing-tiers-pro-feature3 = Priority support\npricing-tiers-pro-feature4 = Private results\npricing-tiers-pro-feature5 = CI integration\npricing-tiers-pro-feature6 = Historical data\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Custom\npricing-tiers-enterprise-feature1 = Everything in Pro\npricing-tiers-enterprise-feature2 = On-premise option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedicated account manager\npricing-tiers-enterprise-feature5 = Custom SLAs\npricing-tiers-enterprise-feature6 = Audit logs\npricing-tiers-enterprise-feature7 = Training sessions\npricing-tiers-contact-sales = Contact Sales\npricing-tiers-get-started = Get Started\nproducts-header-title = Products\nproducts-header-description = Tools and services to streamline your internationalization workflow.\nproducts-grid-learn-more = Learn More\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\nproducts-grid-cli-price = Free\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\nproducts-grid-cloud-price = $29/mo\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\nproducts-grid-enterprise-price = Contact Us\nproducts-grid-migration-name = Migration Assistant\nproducts-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\nproducts-grid-migration-price = $99 one-time\nproducts-grid-qa-name = Translation QA\nproducts-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.\nproducts-grid-qa-price = $19/mo\nproducts-grid-optimizer-name = Bundle Optimizer\nproducts-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\nproducts-grid-optimizer-price = $49/mo\nsettings-header-title = Settings\nsettings-header-description = Manage your account preferences and configuration.\nsettings-profile-title = Profile\nsettings-profile-display-name = Display Name\nsettings-profile-email = Email\nsettings-preferences-title = Preferences\nsettings-preferences-email-notifications = Email Notifications\nsettings-preferences-weekly-reports = Receive weekly benchmark reports\nsettings-preferences-toggle-notifications = Toggle notifications\nsettings-preferences-dark-mode = Dark Mode\nsettings-preferences-dark-color-scheme = Use dark color scheme\nsettings-preferences-toggle-dark-mode = Toggle dark mode\nsettings-preferences-default-language = Default Language\nsettings-preferences-english = English (en)\nsettings-preferences-french = French (fr)\nsettings-preferences-german = German (de)\nsettings-preferences-spanish = Spanish (es)\nsettings-preferences-japanese = Japanese (ja)\nsettings-preferences-chinese = Chinese Simplified (zh-CN)\nsettings-preferences-arabic = Arabic (ar)\nsettings-api-access-title = API Access\nsettings-api-access-api-key = API Key\nsettings-api-access-copy = Copy\nsettings-api-access-description = Use this key to access the benchmarking API programmatically.\nsettings-footer-cancel = Cancel\nsettings-footer-save-changes = Save Changes\nteam-header-title = Our Team\nteam-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Founder & Lead Engineer\nteam-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance Engineer\nteam-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack Developer\nteam-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Data Analyst\nteam-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.\nnot-found-title = 404\nnot-found-description = Oops! Page not found\nnot-found-return-home = Return to Home\n", Oa = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Ir para o GitHub\nheader-home = Início\nheader-methodology = Metodologia\nheader-mock-pages = Páginas de Teste\nheader-products = Produtos\nheader-pricing = Preços\nheader-team = Equipe\nheader-blog = Blog\nheader-careers = Carreiras\nheader-faq = FAQ\nheader-contact = Contato\nheader-settings = Configurações\nfooter-title = i18n Benchmark\nfooter-description = Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.\nfooter-resources = Recursos\nfooter-github = GitHub\nfooter-methodology = Metodologia\nfooter-contributing = Contribuindo\nfooter-contact = Contato\nfooter-built-with = i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.\ntheme-toggle-auto = Tema: Automático\ntheme-toggle-dark = Tema: Escuro\ntheme-toggle-light = Tema: Claro\ntheme-toggle-label-auto = Modo de tema: auto (sistema). Clique para mudar para o modo claro.\ntheme-toggle-label-other = Modo de tema: {mode}. Clique para mudar de modo.\nmock-banner = ⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.\nhome-hero-view-results = Ver Resultados\nhome-hero-methodology = Metodologia\nhome-why-it-matters-title = Por que estas métricas importam\nhome-why-it-matters-bundle-size-title = Tamanho do bundle\nhome-why-it-matters-bundle-size-desc = O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.\nhome-why-it-matters-rendering-title = Renderização e hidratação\nhome-why-it-matters-rendering-desc = Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Carregamento dinâmico\nhome-why-it-matters-dynamic-loading-desc = Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\nhome-understanding-impact-title = Entendendo o impacto\nhome-understanding-impact-single-json-title = Por que um único JSON grande pode prejudicar o desempenho\nhome-understanding-impact-single-json-intro = Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\nhome-understanding-impact-single-json-bullet1 = O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\nhome-understanding-impact-single-json-bullet2 = Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\nhome-understanding-impact-single-json-bullet3 = Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\nhome-understanding-impact-trade-offs-title = Os trade-offs do carregamento dinâmico\nhome-understanding-impact-trade-offs-intro = Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:\nhome-understanding-impact-waterfall-label = Requisições em cascata:\nhome-understanding-impact-waterfall-desc = o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.\nhome-understanding-impact-fouc-label = Flash de conteúdo não traduzido (FOUC):\nhome-understanding-impact-fouc-desc = usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.\nhome-understanding-impact-cache-label = Invalidação de cache:\nhome-understanding-impact-cache-desc = atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.\nhome-understanding-impact-measures-title = O que este benchmark mede\nhome-understanding-impact-measures-desc = Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.\nhome-results-table-title = Resultados de exemplo\nhome-results-table-library = Biblioteca\nhome-results-table-bundle-size = Tamanho do Bundle\nhome-results-table-lookup-time = Tempo de Busca\nhome-results-table-lazy-loading = Carregamento Lento\nhome-results-table-yes = Sim\nhome-results-table-manual = Manual\nhome-results-table-built-in = Integrado\nabout-header-title = Sobre este benchmark\nabout-header-description = Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.\nabout-grid-why-exists-title = Por que isto existe\nabout-grid-why-exists-desc = Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\nabout-grid-methodology-title = Metodologia\nabout-grid-methodology-desc = O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.\nabout-what-we-measure-title = O que medimos\nabout-what-we-measure-bundle-size-impact = Impacto no tamanho do bundle\nabout-what-we-measure-bundle-size-impact-desc = Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\nabout-what-we-measure-rendering-overhead = Sobrecarga de renderização\nabout-what-we-measure-rendering-overhead-desc = Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.\nabout-what-we-measure-hydration-cost = Custo de hidratação\nabout-what-we-measure-hydration-cost-desc = Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.\nabout-what-we-measure-lazy-loading = Eficácia do carregamento lento\nabout-what-we-measure-lazy-loading-desc = Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).\nabout-what-we-measure-locale-switch = Velocidade de troca de localidade\nabout-what-we-measure-locale-switch-desc = Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutoriais e análises da comunidade i18n.\nblog-list-read-more = Ler Mais →\nblog-list-post1-title = Comparando bibliotecas i18n em 2026: um mergulho profundo\nblog-list-post1-date = 15 de março de 2026\nblog-list-post1-excerpt = Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Como reduzir seu bundle i18n em 60%\nblog-list-post2-date = 8 de março de 2026\nblog-list-post2-excerpt = Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = O estado da internacionalização no React\nblog-list-post3-date = 28 de fevereiro de 2026\nblog-list-post3-excerpt = Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\nblog-list-post3-category = Análise\nblog-list-post4-title = Migrando de react-i18next para o Lingui\nblog-list-post4-date = 15 de fevereiro de 2026\nblog-list-post4-excerpt = Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: o que muda?\nblog-list-post5-date = 1 de fevereiro de 2026\nblog-list-post5-excerpt = React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.\nblog-list-post5-category = Análise\nblog-list-post6-title = Metodologia de benchmark: como testamos\nblog-list-post6-date = 20 de janeiro de 2026\nblog-list-post6-excerpt = Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\nblog-list-post6-category = Meta\ncareers-header-title = Carreiras\ncareers-header-description = Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.\ncareers-benefits-remote-label = Remoto primeiro\ncareers-benefits-remote-value = Trabalhe de qualquer lugar do mundo\ncareers-benefits-pay-label = Salário competitivo\ncareers-benefits-pay-value = Remuneração acima do mercado\ncareers-benefits-oss-label = Tempo para o código aberto\ncareers-benefits-oss-value = 20% do tempo para contribuições OSS\ncareers-open-positions-title = Vagas abertas\ncareers-open-positions-apply-now = Candidatar-se agora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tempo integral\ncareers-open-positions-part-time = Tempo parcial\ncareers-open-positions-engineering = Engenharia\ncareers-open-positions-documentation = Documentação\ncareers-open-positions-community = Comunidade\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Engenheiro Frontend Sênior\ncareers-open-positions-frontend-desc = Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\ncareers-open-positions-backend-title = Engenheiro Backend\ncareers-open-positions-backend-desc = Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.\ncareers-open-positions-writer-title = Redator técnico\ncareers-open-positions-writer-desc = Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\ncareers-open-positions-devrel-title = Engenheiro de DevRel\ncareers-open-positions-devrel-desc = Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.\ncareers-open-positions-qa-title = Engenheiro de QA\ncareers-open-positions-qa-desc = Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.\ncontact-header-title = Entre em contato\ncontact-header-description = Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em\ncontact-form-name = Nome\ncontact-form-your-name = Seu nome\ncontact-form-email = E-mail\ncontact-form-email-placeholder = voce@exemplo.com\ncontact-form-topic = Assunto\ncontact-form-bug-report = Relatório de bug\ncontact-form-new-benchmark-idea = Nova ideia de benchmark\ncontact-form-methodology-question = Pergunta sobre metodologia\ncontact-form-contribution = Contribuição\ncontact-form-other = Outro\ncontact-form-message = Mensagem\ncontact-form-message-placeholder = Descreva sua pergunta ou ideia...\ncontact-form-send-message = Enviar mensagem\nfaq-header-title = Perguntas frequentes\nfaq-header-description = Tudo o que você precisa saber sobre o i18n Benchmark.\nfaq-list-q1 = O que é o i18n Benchmark?\nfaq-list-a1 = O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.\nfaq-list-q2 = Como os benchmarks são conduzidos?\nfaq-list-a2 = Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.\nfaq-list-q3 = Quais bibliotecas são suportadas atualmente?\nfaq-list-a3 = Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\nfaq-list-q4 = Posso enviar meus próprios benchmarks?\nfaq-list-a4 = Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\nfaq-list-q5 = Com que frequência os benchmarks são atualizados?\nfaq-list-a5 = Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.\nfaq-list-q6 = Os dados são confiáveis?\nfaq-list-a6 = Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\nfaq-list-q7 = Vocês oferecem serviços de consultoria?\nfaq-list-a7 = Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.\nfaq-list-q8 = Como posso contribuir?\nfaq-list-a8 = Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.\npricing-header-title = Preços simples e transparentes\npricing-header-description = Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = para sempre\npricing-tiers-starter-feature1 = 5 execuções de benchmark/dia\npricing-tiers-starter-feature2 = 3 bibliotecas\npricing-tiers-starter-feature3 = Suporte da comunidade\npricing-tiers-starter-feature4 = Resultados públicos\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mês\npricing-tiers-pro-feature1 = Execuções ilimitadas\npricing-tiers-pro-feature2 = Todas as bibliotecas\npricing-tiers-pro-feature3 = Suporte prioritário\npricing-tiers-pro-feature4 = Resultados privados\npricing-tiers-pro-feature5 = Integração CI\npricing-tiers-pro-feature6 = Dados históricos\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizado\npricing-tiers-enterprise-feature1 = Tudo o que está no Pro\npricing-tiers-enterprise-feature2 = Opção on-premise\npricing-tiers-enterprise-feature3 = SSO e SAML\npricing-tiers-enterprise-feature4 = Gerente de conta dedicado\npricing-tiers-enterprise-feature5 = SLAs personalizados\npricing-tiers-enterprise-feature6 = Logs de auditoria\npricing-tiers-enterprise-feature7 = Sessões de treinamento\npricing-tiers-contact-sales = Contatar vendas\npricing-tiers-get-started = Começar\nproducts-header-title = Produtos\nproducts-header-description = Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.\nproducts-grid-learn-more = Saiba Mais\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.\nproducts-grid-cli-price = Grátis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\nproducts-grid-cloud-price = 29 $/mês\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\nproducts-grid-enterprise-price = Contate-nos\nproducts-grid-migration-name = Assistente de migração\nproducts-grid-migration-desc = Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.\nproducts-grid-migration-price = 99 $ taxa única\nproducts-grid-qa-name = QA de tradução\nproducts-grid-qa-desc = Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.\nproducts-grid-qa-price = 19 $/mês\nproducts-grid-optimizer-name = Otimizador de bundle\nproducts-grid-optimizer-desc = Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\nproducts-grid-optimizer-price = 49 $/mês\nsettings-header-title = Configurações\nsettings-header-description = Gerencie suas preferências de conta e configuração.\nsettings-profile-title = Perfil\nsettings-profile-display-name = Nome de exibição\nsettings-profile-email = E-mail\nsettings-preferences-title = Preferências\nsettings-preferences-email-notifications = Notificações por e-mail\nsettings-preferences-weekly-reports = Receber relatórios semanais de benchmarks\nsettings-preferences-toggle-notifications = Alternar notificações\nsettings-preferences-dark-mode = Modo Escuro\nsettings-preferences-dark-color-scheme = Usar esquema de cores escuro\nsettings-preferences-toggle-dark-mode = Alternar modo escuro\nsettings-preferences-default-language = Idioma padrão\nsettings-preferences-english = Inglês (en)\nsettings-preferences-french = Francés (fr)\nsettings-preferences-german = Alemão (de)\nsettings-preferences-spanish = Espanhol (es)\nsettings-preferences-japanese = Japonês (ja)\nsettings-preferences-chinese = Chinês Simplificado (zh-CN)\nsettings-preferences-arabic = Árabe (ar)\nsettings-api-access-title = Acesso API\nsettings-api-access-api-key = Chave API\nsettings-api-access-copy = Copiar\nsettings-api-access-description = Use esta chave para acessar a API de benchmarking programaticamente.\nsettings-footer-cancel = Cancelar\nsettings-footer-save-changes = Salvar alterações\nteam-header-title = Nossa equipe\nteam-header-description = Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fundadora e Engenheira Líder\nteam-grid-member1-bio = Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Engenheiro de performance\nteam-grid-member2-bio = Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Desenvolvedor Full-Stack\nteam-grid-member4-bio = Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista de dados\nteam-grid-member5-bio = Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Gerente de comunidade\nteam-grid-member6-bio = Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\nnot-found-title = 404\nnot-found-description = Ops! Página não encontrada\nnot-found-return-home = Voltar para o início\n", ka = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Перейти на GitHub\nheader-home = Главная\nheader-methodology = Методология\nheader-mock-pages = Тестовые страницы\nheader-products = Продукты\nheader-pricing = Цены\nheader-team = Команда\nheader-blog = Блог\nheader-careers = Вакансии\nheader-faq = FAQ\nheader-contact = Контакт\nheader-settings = Настройки\nfooter-title = i18n Benchmark\nfooter-description = Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.\nfooter-resources = Ресурсы\nfooter-github = GitHub\nfooter-methodology = Методология\nfooter-contributing = Участие в проекте\nfooter-contact = Контакт\nfooter-built-with = i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.\ntheme-toggle-auto = Тема: Авто\ntheme-toggle-dark = Тема: Темная\ntheme-toggle-light = Тема: Светлая\ntheme-toggle-label-auto = Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.\ntheme-toggle-label-other = Режим темы: {mode}. Нажмите, чтобы сменить режим.\nmock-banner = ⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.\nhome-hero-view-results = Посмотреть результаты\nhome-hero-methodology = Методология\nhome-why-it-matters-title = Почему эти метрики важны\nhome-why-it-matters-bundle-size-title = Размер бандла\nhome-why-it-matters-bundle-size-desc = Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.\nhome-why-it-matters-rendering-title = Рендеринг и гидратация\nhome-why-it-matters-rendering-desc = Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).\nhome-why-it-matters-dynamic-loading-title = Динамическая загрузка\nhome-why-it-matters-dynamic-loading-desc = Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.\nhome-understanding-impact-title = Понимание влияния\nhome-understanding-impact-single-json-title = Почему один большой JSON может снизить производительность\nhome-understanding-impact-single-json-intro = Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\nhome-understanding-impact-single-json-bullet1 = JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.\nhome-understanding-impact-single-json-bullet2 = Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.\nhome-understanding-impact-single-json-bullet3 = При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.\nhome-understanding-impact-trade-offs-title = Компромиссы динамической загрузки\nhome-understanding-impact-trade-offs-intro = Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:\nhome-understanding-impact-waterfall-label = Каскадные запросы:\nhome-understanding-impact-waterfall-desc = приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.\nhome-understanding-impact-fouc-label = Мерцание непереведенного контента (FOUC):\nhome-understanding-impact-fouc-desc = пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.\nhome-understanding-impact-cache-label = Инвалидация кэша:\nhome-understanding-impact-cache-desc = обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.\nhome-understanding-impact-measures-title = Что измеряет этот бенчмарк\nhome-understanding-impact-measures-desc = Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\nhome-results-table-title = Примеры результатов\nhome-results-table-library = Библиотека\nhome-results-table-bundle-size = Размер бандла\nhome-results-table-lookup-time = Время поиска\nhome-results-table-lazy-loading = Ленивая загрузка\nhome-results-table-yes = Да\nhome-results-table-manual = Вручную\nhome-results-table-built-in = Встроено\nabout-header-title = Об этом бенчмарке\nabout-header-description = Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.\nabout-grid-why-exists-title = Зачем это нужно\nabout-grid-why-exists-desc = Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\nabout-grid-methodology-title = Методология\nabout-grid-methodology-desc = Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.\nabout-what-we-measure-title = Что мы измеряем\nabout-what-we-measure-bundle-size-impact = Влияние на размер бандла\nabout-what-we-measure-bundle-size-impact-desc = Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\nabout-what-we-measure-rendering-overhead = Накладные расходы на рендеринг\nabout-what-we-measure-rendering-overhead-desc = Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.\nabout-what-we-measure-hydration-cost = Стоимость гидратации\nabout-what-we-measure-hydration-cost-desc = Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\nabout-what-we-measure-lazy-loading = Эффективность ленивой загрузки\nabout-what-we-measure-lazy-loading-desc = Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).\nabout-what-we-measure-locale-switch = Скорость переключения языка\nabout-what-we-measure-locale-switch-desc = Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\nblog-header-title = Блог\nblog-header-description = Инсайты, туториалы и аналитика от сообщества i18n.\nblog-list-read-more = Читать далее →\nblog-list-post1-title = Сравнение библиотек i18n в 2026 году: глубокое погружение\nblog-list-post1-date = 15 марта 2026 г.\nblog-list-post1-excerpt = Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\nblog-list-post1-category = Бенчмарк\nblog-list-post2-title = Как уменьшить бандл i18n на 60%\nblog-list-post2-date = 8 марта 2026 г.\nblog-list-post2-excerpt = Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.\nblog-list-post2-category = Туториал\nblog-list-post3-title = Состояние интернационализации в React\nblog-list-post3-date = 28 февраля 2026 г.\nblog-list-post3-excerpt = Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\nblog-list-post3-category = Анализ\nblog-list-post4-title = Миграция с react-i18next на Lingui\nblog-list-post4-date = 15 февраля 2026 г.\nblog-list-post4-excerpt = Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.\nblog-list-post4-category = Туториал\nblog-list-post5-title = Server Components и i18n: что меняется?\nblog-list-post5-date = 1 февраля 2026 г.\nblog-list-post5-excerpt = React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\nblog-list-post5-category = Анализ\nblog-list-post6-title = Методология бенчмарка: как мы тестируем\nblog-list-post6-date = 20 января 2026 г.\nblog-list-post6-excerpt = Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\nblog-list-post6-category = Мета\ncareers-header-title = Вакансии\ncareers-header-description = Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.\ncareers-benefits-remote-label = Удаленная работа\ncareers-benefits-remote-value = Работайте из любой точки мира\ncareers-benefits-pay-label = Конкурентная зарплата\ncareers-benefits-pay-value = Вознаграждение выше рыночного\ncareers-benefits-oss-label = Время на open source\ncareers-benefits-oss-value = 20% времени на вклад в OSS\ncareers-open-positions-title = Открытые вакансии\ncareers-open-positions-apply-now = Подать заявку\ncareers-open-positions-remote = Удаленно\ncareers-open-positions-full-time = Полная занятость\ncareers-open-positions-part-time = Частичная занятость\ncareers-open-positions-engineering = Разработка\ncareers-open-positions-documentation = Документация\ncareers-open-positions-community = Сообщество\ncareers-open-positions-sf-remote = Сан-Франциско / Удаленно\ncareers-open-positions-frontend-title = Старший фронтенд-инженер\ncareers-open-positions-frontend-desc = Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.\ncareers-open-positions-backend-title = Бэкенд-инженер\ncareers-open-positions-backend-desc = Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.\ncareers-open-positions-writer-title = Технический писатель\ncareers-open-positions-writer-desc = Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.\ncareers-open-positions-devrel-title = DevRel-инженер\ncareers-open-positions-devrel-desc = Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.\ncareers-open-positions-qa-title = QA-инженер\ncareers-open-positions-qa-desc = Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.\ncontact-header-title = Связаться с нами\ncontact-header-description = Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу\ncontact-form-name = Имя\ncontact-form-your-name = Ваше имя\ncontact-form-email = Электронная почта\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Тема\ncontact-form-bug-report = Отчет об ошибке\ncontact-form-new-benchmark-idea = Идея нового бенчмарка\ncontact-form-methodology-question = Вопрос по методологии\ncontact-form-contribution = Вклад в проект\ncontact-form-other = Другое\ncontact-form-message = Сообщение\ncontact-form-message-placeholder = Опишите ваш вопрос или идею...\ncontact-form-send-message = Отправить сообщение\nfaq-header-title = Часто задаваемые вопросы\nfaq-header-description = Все, что вам нужно знать об i18n Benchmark.\nfaq-list-q1 = Что такое i18n Benchmark?\nfaq-list-a1 = i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.\nfaq-list-q2 = Как проводятся бенчмарки?\nfaq-list-a2 = Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.\nfaq-list-q3 = Какие библиотеки поддерживаются в данный момент?\nfaq-list-a3 = Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\nfaq-list-q4 = Могу ли я прислать свои собственные бенчмарки?\nfaq-list-a4 = Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.\nfaq-list-q5 = Как часто обновляются бенчмарки?\nfaq-list-a5 = Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.\nfaq-list-q6 = Можно ли доверять данным?\nfaq-list-a6 = Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.\nfaq-list-q7 = Предоставляете ли вы консалтинговые услуги?\nfaq-list-a7 = Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.\nfaq-list-q8 = Как я могу помочь проекту?\nfaq-list-a8 = Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.\npricing-header-title = Простые и прозрачные цены\npricing-header-description = Выберите подходящий план для вашей команды. Никаких скрытых комиссий.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = навсегда\npricing-tiers-starter-feature1 = 5 запусков бенчмарка в день\npricing-tiers-starter-feature2 = 3 библиотеки\npricing-tiers-starter-feature3 = Поддержка сообщества\npricing-tiers-starter-feature4 = Публичные результаты\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /мес\npricing-tiers-pro-feature1 = Неограниченное число запусков\npricing-tiers-pro-feature2 = Все библиотеки\npricing-tiers-pro-feature3 = Приоритетная поддержка\npricing-tiers-pro-feature4 = Приватные результаты\npricing-tiers-pro-feature5 = Интеграция с CI\npricing-tiers-pro-feature6 = Исторические данные\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Индивидуально\npricing-tiers-enterprise-feature1 = Все, что есть в Pro\npricing-tiers-enterprise-feature2 = Локальная установка\npricing-tiers-enterprise-feature3 = SSO и SAML\npricing-tiers-enterprise-feature4 = Персональный менеджер\npricing-tiers-enterprise-feature5 = Индивидуальные SLA\npricing-tiers-enterprise-feature6 = Журналы аудита\npricing-tiers-enterprise-feature7 = Обучающие сессии\npricing-tiers-contact-sales = Связаться с отделом продаж\npricing-tiers-get-started = Начать работу\nproducts-header-title = Продукты\nproducts-header-description = Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.\nproducts-grid-learn-more = Узнать больше\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.\nproducts-grid-cli-price = Бесплатно\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.\nproducts-grid-cloud-price = 29 $/мес\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.\nproducts-grid-enterprise-price = Связаться с нами\nproducts-grid-migration-name = Помощник по миграции\nproducts-grid-migration-desc = Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.\nproducts-grid-migration-price = 99 $ (разово)\nproducts-grid-qa-name = QA переводов\nproducts-grid-qa-desc = Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.\nproducts-grid-qa-price = 19 $/мес\nproducts-grid-optimizer-name = Оптимизатор бандла\nproducts-grid-optimizer-desc = Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.\nproducts-grid-optimizer-price = 49 $/мес\nsettings-header-title = Настройки\nsettings-header-description = Управляйте предпочтениями и конфигурацией вашей учетной записи.\nsettings-profile-title = Профиль\nsettings-profile-display-name = Отображаемое имя\nsettings-profile-email = Электронная почта\nsettings-preferences-title = Предпочтения\nsettings-preferences-email-notifications = Уведомления по почте\nsettings-preferences-weekly-reports = Получать еженедельные отчеты о бенчмарках\nsettings-preferences-toggle-notifications = Переключить уведомления\nsettings-preferences-dark-mode = Темная тема\nsettings-preferences-dark-color-scheme = Использовать темную цветовую схему\nsettings-preferences-toggle-dark-mode = Переключить темную тему\nsettings-preferences-default-language = Язык по умолчанию\nsettings-preferences-english = Английский (en)\nsettings-preferences-french = Французский (fr)\nsettings-preferences-german = Немецкий (de)\nsettings-preferences-spanish = Испанский (es)\nsettings-preferences-japanese = Японский (ja)\nsettings-preferences-chinese = Китайский упрощенный (zh-CN)\nsettings-preferences-arabic = Арабский (ar)\nsettings-api-access-title = Доступ к API\nsettings-api-access-api-key = Ключ API\nsettings-api-access-copy = Копировать\nsettings-api-access-description = Используйте этот ключ для программного доступа к API бенчмаркинга.\nsettings-footer-cancel = Отмена\nsettings-footer-save-changes = Сохранить изменения\nteam-header-title = Наша команда\nteam-header-description = Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.\nteam-grid-member1-name = Сара Чен\nteam-grid-member1-role = Основатель и ведущий инженер\nteam-grid-member1-bio = Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.\nteam-grid-member2-name = Маркус Вебер\nteam-grid-member2-role = Инженер по производительности\nteam-grid-member2-bio = Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\nteam-grid-member3-name = Айша Патель\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\nteam-grid-member4-name = Томас Родригес\nteam-grid-member4-role = Full-Stack разработчик\nteam-grid-member4-bio = Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.\nteam-grid-member5-name = Юки Танака\nteam-grid-member5-role = Аналитик данных\nteam-grid-member5-bio = Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).\nteam-grid-member6-name = Елена Ковальски\nteam-grid-member6-role = Комьюнити-менеджер\nteam-grid-member6-bio = Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.\nnot-found-title = 404\nnot-found-description = Упс! Страница не найдена\nnot-found-return-home = Вернуться на главную\n", Aa = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = 前往 GitHub\nheader-home = 首页\nheader-methodology = 方法论\nheader-mock-pages = 模拟页面\nheader-products = 产品\nheader-pricing = 价格\nheader-team = 团队\nheader-blog = 博客\nheader-careers = 招聘\nheader-faq = 常见问题\nheader-contact = 联系我们\nheader-settings = 设置\nfooter-title = i18n Benchmark\nfooter-description = 一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。\nfooter-resources = 资源\nfooter-github = GitHub\nfooter-methodology = 方法论\nfooter-contributing = 贡献\nfooter-contact = 联系我们\nfooter-built-with = i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。\ntheme-toggle-auto = 主题：自动\ntheme-toggle-dark = 主题：深色\ntheme-toggle-light = 主题：浅色\ntheme-toggle-label-auto = 主题模式：自动（系统）。点击切换到浅色模式。\ntheme-toggle-label-other = 主题模式：{mode}。点击切换模式。\nmock-banner = ⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。\nhome-hero-title = i18n Benchmark\nhome-hero-description = 一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。\nhome-hero-view-results = 查看结果\nhome-hero-methodology = 方法论\nhome-why-it-matters-title = 为什么这些指标很重要\nhome-why-it-matters-bundle-size-title = 包大小\nhome-why-it-matters-bundle-size-desc = 包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\nhome-why-it-matters-rendering-title = 渲染与注水\nhome-why-it-matters-rendering-desc = 将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。\nhome-why-it-matters-dynamic-loading-title = 动态加载\nhome-why-it-matters-dynamic-loading-desc = 预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\nhome-understanding-impact-title = 理解影响\nhome-understanding-impact-single-json-title = 为什么单个大型 JSON 会损害性能\nhome-understanding-impact-single-json-intro = 许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：\nhome-understanding-impact-single-json-bullet1 = 每次页面加载时都必须解析 JSON — 阻塞主线程。\nhome-understanding-impact-single-json-bullet2 = 当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。\nhome-understanding-impact-single-json-bullet3 = 在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。\nhome-understanding-impact-trade-offs-title = 动态加载的权衡\nhome-understanding-impact-trade-offs-intro = 将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：\nhome-understanding-impact-waterfall-label = 瀑布流请求：\nhome-understanding-impact-waterfall-desc = 应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。\nhome-understanding-impact-fouc-label = 未翻译内容闪烁 (FOUC)：\nhome-understanding-impact-fouc-desc = 在块到达之前，用户可能会短暂看到翻译键或回退语言。\nhome-understanding-impact-cache-label = 缓存失效：\nhome-understanding-impact-cache-desc = 更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。\nhome-understanding-impact-measures-title = 此基准测试衡量的内容\nhome-understanding-impact-measures-desc = 此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。\nhome-results-table-title = 示例结果\nhome-results-table-library = 库\nhome-results-table-bundle-size = 包大小\nhome-results-table-lookup-time = 查找时间\nhome-results-table-lazy-loading = 延迟加载\nhome-results-table-yes = 是\nhome-results-table-manual = 手动\nhome-results-table-built-in = 内置\nabout-header-title = 关于此基准测试\nabout-header-description = 这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。\nabout-grid-why-exists-title = 为什么存在这个测试\nabout-grid-why-exists-desc = 选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。\nabout-grid-methodology-title = 方法论\nabout-grid-methodology-desc = 相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。\nabout-what-we-measure-title = 衡量指标\nabout-what-we-measure-bundle-size-impact = 包大小影响\nabout-what-we-measure-bundle-size-impact-desc = 包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。\nabout-what-we-measure-rendering-overhead = 渲染开销\nabout-what-we-measure-rendering-overhead-desc = 库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。\nabout-what-we-measure-hydration-cost = 注水成本\nabout-what-we-measure-hydration-cost-desc = 在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。\nabout-what-we-measure-lazy-loading = 延迟加载有效性\nabout-what-we-measure-lazy-loading-desc = 按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。\nabout-what-we-measure-locale-switch = 语言环境切换速度\nabout-what-we-measure-locale-switch-desc = 应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。\nblog-header-title = 博客\nblog-header-description = 来自 i18n 社区的见解、教程和分析。\nblog-list-read-more = 阅读更多 →\nblog-list-post1-title = 2026 年 i18n 库对比：深度分析\nblog-list-post1-date = 2026年3月15日\nblog-list-post1-excerpt = 我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。\nblog-list-post1-category = 基准测试\nblog-list-post2-title = 如何将 i18n 包大小减少 60%\nblog-list-post2-date = 2026年3月8日\nblog-list-post2-excerpt = 优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\nblog-list-post2-category = 教程\nblog-list-post3-title = React 国际化现状\nblog-list-post3-date = 2026年2月28日\nblog-list-post3-excerpt = React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。\nblog-list-post3-category = 分析\nblog-list-post4-title = 从 react-i18next 迁移到 Lingui\nblog-list-post4-date = 2026年2月15日\nblog-list-post4-excerpt = 关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。\nblog-list-post4-category = 教程\nblog-list-post5-title = Server Components 与 i18n：发生了什么变化？\nblog-list-post5-date = 2026年2月1日\nblog-list-post5-excerpt = React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\nblog-list-post5-category = 分析\nblog-list-post6-title = 基准测试方法论：我们如何测试\nblog-list-post6-date = 2026年1月20日\nblog-list-post6-excerpt = 透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。\nblog-list-post6-category = Meta\ncareers-header-title = 招聘\ncareers-header-description = 加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。\ncareers-benefits-remote-label = 远程优先\ncareers-benefits-remote-value = 在世界任何地方工作\ncareers-benefits-pay-label = 具有竞争力的薪酬\ncareers-benefits-pay-value = 市场顶尖的薪资水平\ncareers-benefits-oss-label = 开源时间\ncareers-benefits-oss-value = 20% 的时间用于 OSS 贡献\ncareers-open-positions-title = 开放职位\ncareers-open-positions-apply-now = 立即申请\ncareers-open-positions-remote = 远程\ncareers-open-positions-full-time = 全职\ncareers-open-positions-part-time = 兼职\ncareers-open-positions-engineering = 工程\ncareers-open-positions-documentation = 文档\ncareers-open-positions-community = 社区\ncareers-open-positions-sf-remote = 旧金山 / 远程\ncareers-open-positions-frontend-title = 高级前端工程师\ncareers-open-positions-frontend-desc = 使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\ncareers-open-positions-backend-title = 后端工程师\ncareers-open-positions-backend-desc = 设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。\ncareers-open-positions-writer-title = 技术作家\ncareers-open-positions-writer-desc = 为我们的基准测试平台编写全面的指南、API 参考和教程。\ncareers-open-positions-devrel-title = DevRel 工程师\ncareers-open-positions-devrel-desc = 通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\ncareers-open-positions-qa-title = QA 工程师\ncareers-open-positions-qa-desc = 通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。\ncontact-header-title = 取得联系\ncontact-header-description = 有想法、发现了错误或想贡献基准测试？请联系我们：\ncontact-form-name = 姓名\ncontact-form-your-name = 您的姓名\ncontact-form-email = 电子邮件\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = 主题\ncontact-form-bug-report = 错误报告\ncontact-form-new-benchmark-idea = 新基准测试想法\ncontact-form-methodology-question = 方法论问题\ncontact-form-contribution = 贡献\ncontact-form-other = 其他\ncontact-form-message = 消息\ncontact-form-message-placeholder = 描述您的问题或想法...\ncontact-form-send-message = 发送消息\nfaq-header-title = 常见问题\nfaq-header-description = 关于 i18n 基准测试您需要了解的一切。\nfaq-list-q1 = 什么是 i18n 基准测试？\nfaq-list-a1 = i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。\nfaq-list-q2 = 基准测试是如何进行的？\nfaq-list-a2 = 我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。\nfaq-list-q3 = 目前支持哪些库？\nfaq-list-a3 = 我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。\nfaq-list-q4 = 我可以提交我自己的基准测试吗？\nfaq-list-a4 = 是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。\nfaq-list-q5 = 基准测试多久更新一次？\nfaq-list-a5 = 我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。\nfaq-list-q6 = 数据可靠吗？\nfaq-list-a6 = 我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\nfaq-list-q7 = 你们提供咨询服务吗？\nfaq-list-a7 = 是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。\nfaq-list-q8 = 我该如何贡献？\nfaq-list-a8 = 有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\npricing-header-title = 简单透明的定价\npricing-header-description = 选择适合您团队的计划。无隐藏费用。\npricing-tiers-starter-name = 入门版\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = 永久\npricing-tiers-starter-feature1 = 每天 5 次基准测试运行\npricing-tiers-starter-feature2 = 3 个库\npricing-tiers-starter-feature3 = 社区支持\npricing-tiers-starter-feature4 = 公开结果\npricing-tiers-pro-name = 专业版\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /月\npricing-tiers-pro-feature1 = 无限次运行\npricing-tiers-pro-feature2 = 所有库\npricing-tiers-pro-feature3 = 优先支持\npricing-tiers-pro-feature4 = 私有结果\npricing-tiers-pro-feature5 = CI 集成\npricing-tiers-pro-feature6 = 历史数据\npricing-tiers-enterprise-name = 企业版\npricing-tiers-enterprise-price = 定制\npricing-tiers-enterprise-feature1 = 包含专业版中的所有功能\npricing-tiers-enterprise-feature2 = 本地部署选项\npricing-tiers-enterprise-feature3 = SSO 和 SAML\npricing-tiers-enterprise-feature4 = 专属客户经理\npricing-tiers-enterprise-feature5 = 定制 SLA\npricing-tiers-enterprise-feature6 = 审计日志\npricing-tiers-enterprise-feature7 = 培训课程\npricing-tiers-contact-sales = 联系销售\npricing-tiers-get-started = 开始使用\nproducts-header-title = 产品\nproducts-header-description = 用于简化国际化工作流程的工具和服务。\nproducts-grid-learn-more = 了解更多\nproducts-grid-cli-name = 基准测试 CLI\nproducts-grid-cli-desc = 从您的终端本地运行基准测试。支持自定义配置和 CI 集成。\nproducts-grid-cli-price = 免费\nproducts-grid-cloud-name = 基准测试云\nproducts-grid-cloud-desc = 具有历史追踪、警报和团队仪表板的自动化云基准测试。\nproducts-grid-cloud-price = 29 $/月\nproducts-grid-enterprise-name = 基准测试企业版\nproducts-grid-enterprise-desc = 支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。\nproducts-grid-enterprise-price = 联系我们\nproducts-grid-migration-name = 迁移助手\nproducts-grid-migration-desc = AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。\nproducts-grid-migration-price = 99 $ 一次性费用\nproducts-grid-qa-name = 翻译 QA\nproducts-grid-qa-desc = 自动检查翻译缺失、复数问题和上下文错误。\nproducts-grid-qa-price = 19 $/月\nproducts-grid-optimizer-name = 包优化器\nproducts-grid-optimizer-desc = 通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。\nproducts-grid-optimizer-price = 49 $/月\nsettings-header-title = 设置\nsettings-header-description = 管理您的账户偏好和配置。\nsettings-profile-title = 个人资料\nsettings-profile-display-name = 显示名称\nsettings-profile-email = 电子邮件\nsettings-preferences-title = 偏好\nsettings-preferences-email-notifications = 电子邮件通知\nsettings-preferences-weekly-reports = 接收每周基准测试报告\nsettings-preferences-toggle-notifications = 切换通知\nsettings-preferences-dark-mode = 深色模式\nsettings-preferences-dark-color-scheme = 使用深色配色方案\nsettings-preferences-toggle-dark-mode = 切换深色模式\nsettings-preferences-default-language = 默认语言\nsettings-preferences-english = 英语 (en)\nsettings-preferences-french = 法语 (fr)\nsettings-preferences-german = 德语 (de)\nsettings-preferences-spanish = 西班牙语 (es)\nsettings-preferences-japanese = 日语 (ja)\nsettings-preferences-chinese = 简体中文 (zh-CN)\nsettings-preferences-arabic = 阿拉伯语 (ar)\nsettings-api-access-title = API 访问\nsettings-api-access-api-key = API 密钥\nsettings-api-access-copy = 复制\nsettings-api-access-description = 使用此密钥以编程方式访问基准测试 API。\nsettings-footer-cancel = 取消\nsettings-footer-save-changes = 保存更改\nteam-header-title = 我们的团队\nteam-header-description = 了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = 创始人兼首席工程师\nteam-grid-member1-bio = 前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = 性能工程师\nteam-grid-member2-bio = 专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = 开发者倡导者\nteam-grid-member3-bio = 对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = 全栈开发人员\nteam-grid-member4-bio = 维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = 数据分析师\nteam-grid-member5-bio = 确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = 社区经理\nteam-grid-member6-bio = 管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\nnot-found-title = 404\nnot-found-description = 哎呀！页面未找到\nnot-found-return-home = 返回首页\n", $ = r({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t(), console.log({
			kn: xa,
			An: Sa,
			jn: Ca,
			Mn: wa,
			Jn: Ta,
			Pn: Ea,
			Fn: Da,
			In: Oa,
			Ln: ka,
			Rn: Aa
		});
		let n = i()?.appContext.app;
		n && !n.config.globalProperties.$fluent && n.use(ba);
		let r = {
			kn: xa,
			An: Sa,
			jn: Ca,
			Mn: wa,
			Jn: Ta,
			Pn: Ea,
			Fn: Da,
			In: Oa,
			Ln: ka,
			Rn: Aa,
			app: n
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function ja(e, t, n, r, i, a) {
	return l(e.$slots, "default");
}
typeof Ge == "function" && Ge($), typeof Ke == "function" && Ke($), typeof qe == "function" && qe($), typeof Je == "function" && Je($), typeof Ye == "function" && Ye($), typeof Xe == "function" && Xe($), typeof Ze == "function" && Ze($), typeof Qe == "function" && Qe($), typeof $e == "function" && $e($), typeof et == "function" && et($);
var Ma = tt($, [["render", ja], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/scripts/Wrapper.vue"]]), Na = { render() {
	return a(Ma, {}, { default: () => a(ot) });
} };
export { Na as default };

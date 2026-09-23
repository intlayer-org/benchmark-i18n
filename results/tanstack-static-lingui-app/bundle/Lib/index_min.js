import { createContext as e, useContext as t, useMemo as n } from "react";
import { jsx as r } from "react/jsx-runtime";
import { messages as i } from "../src/locales/en/messages.mjs";
import { messages as a } from "../src/locales/fr/messages.mjs";
import { messages as o } from "../src/locales/es/messages.mjs";
import { messages as s } from "../src/locales/de/messages.mjs";
import { messages as c } from "../src/locales/it/messages.mjs";
import { messages as l } from "../src/locales/pt/messages.mjs";
import { messages as u } from "../src/locales/zh/messages.mjs";
import { messages as d } from "../src/locales/ja/messages.mjs";
import { messages as f } from "../src/locales/ko/messages.mjs";
import { messages as p } from "../src/locales/ru/messages.mjs";
var m = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), h = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), g = (e) => typeof e == "string", _ = (e) => typeof e == "function", v = /* @__PURE__ */ new Map(), y = "en";
function b(e) {
	return [...Array.isArray(e) ? e : [e], y];
}
function x(e, t, n) {
	let r = b(e);
	n ||= "default";
	let i;
	if (typeof n == "string") switch (i = {
		day: "numeric",
		month: "short",
		year: "numeric"
	}, n) {
		case "full": i.weekday = "long";
		case "long":
			i.month = "long";
			break;
		case "short": i.month = "numeric";
	}
	else i = n;
	return T(() => E("date", r, n), () => new Intl.DateTimeFormat(r, i)).format(g(t) ? new Date(t) : t);
}
function S(e, t, n) {
	let r;
	if (n ||= "default", typeof n == "string") switch (r = {
		second: "numeric",
		minute: "numeric",
		hour: "numeric"
	}, n) {
		case "full":
		case "long":
			r.timeZoneName = "short";
			break;
		case "short": delete r.second;
	}
	else r = n;
	return x(e, t, r);
}
function C(e, t, n) {
	let r = b(e);
	return T(() => E("number", r, n), () => new Intl.NumberFormat(r, n)).format(t);
}
function w(e, t, n, { offset: r = 0, ...i }) {
	let a = b(e), o = t ? T(() => E("plural-ordinal", a), () => new Intl.PluralRules(a, { type: "ordinal" })) : T(() => E("plural-cardinal", a), () => new Intl.PluralRules(a, { type: "cardinal" }));
	return i[n] ?? i[o.select(n - r)] ?? i.other;
}
function T(e, t) {
	let n = e(), r = v.get(n);
	return r || (r = t(), v.set(n, r)), r;
}
function E(e, t, n) {
	return `${e}-${t.join("-")}-${JSON.stringify(n)}`;
}
var D = /\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/, O = (e) => e.replace(/\\u([a-fA-F0-9]{4})|\\x([a-fA-F0-9]{2})/g, (e, t, n) => {
	if (t) {
		let e = parseInt(t, 16);
		return String.fromCharCode(e);
	}
	{
		let e = parseInt(n, 16);
		return String.fromCharCode(e);
	}
}), k = "%__lingui_octothorpe__%", A = (e, t, n = {}) => {
	let r = t || e, i = (e) => typeof e == "object" ? e : n[e], a = (e, t) => {
		let a = Object.keys(n).length ? i("number") : void 0, o = C(r, e, a);
		return t.replace(new RegExp(k, "g"), o);
	};
	return {
		plural: (e, t) => {
			let { offset: n = 0 } = t, i = w(r, !1, e, t);
			return a(e - n, i);
		},
		selectordinal: (e, t) => {
			let { offset: n = 0 } = t, i = w(r, !0, e, t);
			return a(e - n, i);
		},
		select: j,
		number: (e, t) => C(r, e, i(t) || { style: t }),
		date: (e, t) => x(r, e, i(t) || t),
		time: (e, t) => S(r, e, i(t) || t)
	};
}, j = (e, t) => t[e] ?? t.other;
function M(e, t, n) {
	return (r = {}, i) => {
		let a = A(t, n, i), o = (e, t = !1) => Array.isArray(e) ? e.reduce((e, n) => {
			if (n === "#" && t) return e + k;
			if (g(n)) return e + n;
			let [i, s, c] = n, l = {};
			s === "plural" || s === "selectordinal" || s === "select" ? Object.entries(c).forEach(([e, t]) => {
				l[e] = o(t, s === "plural" || s === "selectordinal");
			}) : l = c;
			let u;
			if (s) {
				let e = a[s];
				u = e(r[i], l);
			} else u = r[i];
			return u == null ? e : e + u;
		}, "") : e, s = o(e);
		return g(s) && D.test(s) ? O(s) : g(s) ? s : s ? String(s) : "";
	};
}
var N = class {
	_events = {};
	on(e, t) {
		return this._events[e] ??= /* @__PURE__ */ new Set(), this._events[e].add(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		let n = this._events[e];
		n?.delete(t), n?.size === 0 && delete this._events[e];
	}
	emit(e, ...t) {
		let n = this._events[e];
		if (n) for (let e of [...n]) e.apply(this, t);
	}
}, P = class extends N {
	_locale = "";
	_locales;
	_messages = {};
	_missing;
	_messageCompiler;
	constructor(e) {
		super(), e.missing != null && (this._missing = e.missing), e.messages != null && this.load(e.messages), (typeof e.locale == "string" || e.locales) && this.activate(e.locale ?? y, e.locales);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		return this._messages[this._locale] ?? {};
	}
	setMessagesCompiler(e) {
		return this._messageCompiler = e, this;
	}
	_load(e, t) {
		let n = this._messages[e];
		n ? Object.assign(n, t) : this._messages[e] = t;
	}
	load(e, t) {
		typeof e == "string" && typeof t == "object" ? this._load(e, t) : Object.entries(e).forEach(([e, t]) => this._load(e, t)), this.emit("change");
	}
	loadAndActivate({ locale: e, locales: t, messages: n }) {
		this._locale = e, this._locales = t || void 0, this._messages[this._locale] = n, this.emit("change");
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	_(e, t, n) {
		if (!this.locale) throw Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");
		let r = n?.message;
		e ||= "", g(e) || (t = e.values || t, r = e.message, e = e.id);
		let i = this.messages[e], a = i === void 0, o = this._missing;
		if (o && a) return _(o) ? o(this._locale, e) : o;
		a && this.emit("missing", {
			id: e,
			locale: this._locale
		});
		let s = i || r || e;
		return g(s) && (this._messageCompiler ? s = this._messageCompiler(s) : console.warn(`Uncompiled message detected! Message:

> ${s}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message.

Please compile your catalog first.
`)), g(s) && D.test(s) ? O(s) : g(s) ? s : M(s, this._locale, this._locales)(t, n?.formats);
	}
	t = this._.bind(this);
	date(e, t) {
		return x(this._locales || this._locale, e, t);
	}
	number(e, t) {
		return C(this._locales || this._locale, e, t);
	}
};
function F(e = {}) {
	return new P(e);
}
F();
var I = m(((e) => {
	var t = h("react");
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
})), L = m(((e, t) => {
	t.exports = I();
}))(), R = e(null), z = (e) => t(R);
function B() {
	return z();
}
var V = (e, t) => ({
	i18n: new Proxy(e, {}),
	defaultComponent: t,
	_: e.t.bind(e)
}), H = (e, t) => {
	let n = e.locale, r = V(e, t), i = () => {
		n = e.locale, r = V(e, t);
	};
	return {
		getSnapshot: () => (n !== e.locale && i(), r),
		subscribe: (t) => e.on("change", () => {
			i(), t();
		})
	};
}, U = ({ i18n: e, defaultComponent: t, children: i }) => {
	let a = n(() => H(e, t), [e, t]), o = (0, L.useSyncExternalStore)(a.subscribe, a.getSnapshot, a.getSnapshot);
	return o.i18n.locale ? r(R.Provider, {
		value: o,
		children: i
	}) : null;
}, W = F();
W.load("en", {}), W.activate("en");
var G = () => {
	let { _: e, i18n: t } = B();
	return t.locale, null;
};
function K() {
	return r(U, {
		i18n: W,
		children: r(G, {})
	});
}
var q = {
	en: i,
	fr: a,
	es: o,
	de: s,
	it: c,
	pt: l,
	zh: u,
	ja: d,
	ko: f,
	ru: p
};
function J(e) {
	return q[e] || q.en;
}
function Y(e, t) {
	let n = F();
	return n.load(e, t), n.activate(e), n;
}
function X({ children: e }) {
	let t = n(() => J("en"), []), i = n(() => Y("en", t), [t]);
	return r(U, {
		i18n: i,
		children: e
	});
}
function Z() {
	return r(X, { children: r(K, {}) });
}
export { Z as default };

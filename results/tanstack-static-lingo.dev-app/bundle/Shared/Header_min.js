import { t as e } from "./logger-D1nsn_SU.js";
import { Fragment as t, createContext as n, useCallback as r, useContext as i, useEffect as a, useLayoutEffect as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { Link as d, useNavigate as f, useParams as p } from "@tanstack/react-router";
import { ChevronDown as m } from "lucide-react";
var h = n(null);
function g() {
	let e = i(h);
	if (!e) throw Error("useLingoContext must be used within LingoProvider");
	return e;
}
async function _(t, n, r) {
	if (!r || !n || n.length === 0) return {};
	let i = `${r}/translations/${t}`, a = new AbortController(), o = setTimeout(() => a.abort(), 3e4);
	try {
		let r = await fetch(i, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ hashes: n }),
			signal: a.signal
		});
		if (!r.ok) throw Error(`Translation API error: ${r.statusText}`);
		let o = await r.json();
		return e.debug(`Fetched translations for ${t}: ${JSON.stringify(o)}`), o.translations || {};
	} catch (e) {
		throw e instanceof Error && e.name === "AbortError" ? Error(`Translation request to ${t} timed out after 30 seconds`) : e;
	} finally {
		clearTimeout(o);
	}
}
function v() {
	if (typeof document < "u") {
		let e = document.cookie.match(/locale=([^;]+)/);
		if (e) return e[1];
	}
	return "en";
}
function y(e) {
	typeof document < "u" && (document.cookie = `locale=${e}; path=/; max-age=31536000`);
}
var b = () => {}, x = process.env.NODE_ENV === "development", ee = 200, te = x ? C : S;
function S({ initialLocale: t, initialTranslations: n = {}, router: i, children: o }) {
	let [s, u] = c(() => t || (typeof window < "u" ? v() : "en")), [d, f] = c(n), [p, m] = c(!1);
	e.debug(`LingoProvider initialized with locale: ${s}`, n), a(() => {
		typeof document < "u" && (document.documentElement.lang = s);
	}, [s]);
	let g = r(async (t) => {
		if (!(Object.keys(n).length > 0)) {
			m(!0);
			try {
				let n = await fetch(`/translations/${t}.json`);
				if (!n.ok) throw Error(`Failed to load translations for ${t}: ${n.statusText}`);
				let r = await n.json();
				f(r.entries || r), e.debug(`Loaded translations for ${t}:`, Object.keys(r.entries || r).length);
			} catch (n) {
				e.error(`Failed to load translations for ${t}:`, n), f({});
			} finally {
				m(!1);
			}
		}
	}, [n]);
	a(() => {
		Object.keys(n).length === 0 && g(s);
	}, []), a(() => {
		i && f(n);
	}, [n, i]);
	let _ = r(async (e) => {
		y(e), u(e), i ? i.refresh() : await g(e);
	}, [i, g]);
	return l(h.Provider, {
		value: {
			locale: s,
			setLocale: _,
			translations: d,
			registerHashes: b,
			isLoading: p,
			sourceLocale: "en"
		},
		children: o
	});
}
function C({ initialLocale: t, initialTranslations: n = {}, router: i, devWidget: o, children: u }) {
	let [d, f] = c(() => t || v()), [p, m] = c(n), [g, b] = c(!1), [x, te] = c(/* @__PURE__ */ new Set()), S = s(/* @__PURE__ */ new Set()), C = s(/* @__PURE__ */ new Set()), w = s(/* @__PURE__ */ new Set()), T = s(null), E = s(n), D = s(d);
	a(() => {
		E.current = p;
	}, [p]), a(() => {
		D.current = d;
	}, [d]), a(() => {
		typeof document < "u" && (document.documentElement.lang = d);
	}, [d]);
	let O = r((t) => {
		let n = !1;
		t.forEach((e) => {
			n ||= !S.current.has(e), S.current.add(e);
		}), e.debug(`Registering hashes: ${t.join(", ")}. Registered hashes: ${S.current.values()}. wasNew: ${n}`), n && te((n) => {
			let r = n.union(new Set(t));
			return e.debug(`New allSeenHashes: ${[...r.values()]}`), r;
		});
	}, []);
	a(() => {
		e.debug(`LingoProvider checking translations for locale ${d}, seen hashes: ${x.size}`);
		let t = [];
		e.debug("allSeenHashes: ", [...x.values()], [...C.current.values()]);
		for (let e of x) !p[e] && !C.current.has(e) && !w.current.has(e) && (t.push(e), C.current.add(e));
		e.debug("Missing hashes: ", t.join(",")), !(t.length === 0 && D.current == d) && (e.debug(`Requesting translations for ${t.length} hashes in locale ${d}`), T.current && clearTimeout(T.current), T.current = setTimeout(async () => {
			let t = Array.from(C.current);
			if (C.current.clear(), e.debug(`Fetching translations for ${t.length} hashes`), t.length !== 0) {
				b(!0);
				try {
					let n = await _(D.current, t, void 0);
					e.debug(`Fetched translations for ${t.length} hashes:`, n);
					let r = new Set(Object.keys(n)), i = t.filter((e) => !r.has(e));
					if (i.length > 0) {
						e.warn(`Server did not return translations for ${i.length} hashes: ${i.join(", ")}`);
						for (let e of i) w.current.add(e);
					}
					m((e) => ({
						...e,
						...n
					}));
					for (let e of t) S.current.add(e);
				} catch (n) {
					e.warn(`Failed to fetch translations from translation server: ${n}.`);
					for (let e of t) C.current.delete(e), w.current.add(e);
				} finally {
					b(!1);
				}
			}
		}, ee));
	}, [
		x,
		d,
		p
	]), a(() => () => {
		T.current && clearTimeout(T.current);
	}, []);
	let k = r(async (t) => {
		y(t), f(t), i && i.refresh(), b(!0);
		let n = performance.now();
		try {
			e.info(`Fetching translations for locale: ${t}. Server url: undefined`);
			let r = await _(t, [], void 0), i = performance.now();
			e.info(`Translation fetch complete for ${t} in ${(i - n).toFixed(2)}ms`);
			let a = r.entries || {};
			e.debug(`Translations loaded for ${t}:`, a), m(a);
		} catch (n) {
			e.error(`Failed to load translations for ${t}:`, n), m({});
		} finally {
			b(!1);
		}
	}, [i]);
	return a(() => {
		o?.enabled !== !1 && import("./lingo-dev-widget-Cc3Gggpb.js").catch((t) => {
			e.error("Failed to load dev widget:", t, t.message);
		});
	}, [o?.enabled]), a(() => {
		typeof window < "u" && o?.enabled !== !1 && (window.__LINGO_DEV_STATE__ = {
			isLoading: g,
			locale: d,
			sourceLocale: "en",
			pendingCount: C.current.size,
			position: o?.position || "bottom-left"
		}, window.__LINGO_DEV_WS_URL__ = void 0, window.__LINGO_DEV_UPDATE__?.());
	}, [
		g,
		d,
		"en",
		o
	]), l(h.Provider, {
		value: {
			locale: d,
			setLocale: k,
			translations: p,
			registerHashes: O,
			isLoading: g,
			sourceLocale: "en",
			_devStats: {
				pendingCount: C.current.size,
				totalRegisteredCount: S.current.size
			}
		},
		children: u
	});
}
var w = function(e, t) {
	return w = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, w(e, t);
};
function T(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	w(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var E = function() {
	return E = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, E.apply(this, arguments);
};
function D(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function O(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
function k(e, t) {
	var n = t && t.cache ? t.cache : ue, r = t && t.serializer ? t.serializer : ce;
	return (t && t.strategy ? t.strategy : ae)(e, {
		cache: n,
		serializer: r
	});
}
function ne(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function re(e, t, n, r) {
	var i = ne(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function ie(e, t, n) {
	var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function A(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function ae(e, t) {
	var n = e.length === 1 ? re : ie;
	return A(e, this, n, t.cache.create(), t.serializer);
}
function oe(e, t) {
	return A(e, this, ie, t.cache.create(), t.serializer);
}
function se(e, t) {
	return A(e, this, re, t.cache.create(), t.serializer);
}
var ce = function() {
	return JSON.stringify(arguments);
}, le = function() {
	function e() {
		this.cache = Object.create(null);
	}
	return e.prototype.get = function(e) {
		return this.cache[e];
	}, e.prototype.set = function(e, t) {
		this.cache[e] = t;
	}, e;
}(), ue = { create: function() {
	return new le();
} }, j = {
	variadic: oe,
	monadic: se
}, M;
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(M ||= {});
var N;
(function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(N ||= {});
var P;
(function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(P ||= {});
function de(e) {
	return e.type === N.literal;
}
function fe(e) {
	return e.type === N.argument;
}
function F(e) {
	return e.type === N.number;
}
function I(e) {
	return e.type === N.date;
}
function L(e) {
	return e.type === N.time;
}
function R(e) {
	return e.type === N.select;
}
function z(e) {
	return e.type === N.plural;
}
function pe(e) {
	return e.type === N.pound;
}
function B(e) {
	return e.type === N.tag;
}
function V(e) {
	return !!(e && typeof e == "object" && e.type === P.number);
}
function H(e) {
	return !!(e && typeof e == "object" && e.type === P.dateTime);
}
var me = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, he = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ge(e) {
	var t = {};
	return e.replace(he, function(e) {
		var n = e.length;
		switch (e[0]) {
			case "G":
				t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "y":
				t.year = n === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				t.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][n - 1];
				break;
			case "w":
			case "W": throw RangeError("`w/W` (week) patterns are not supported");
			case "d":
				t.day = ["numeric", "2-digit"][n - 1];
				break;
			case "D":
			case "F":
			case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "e":
				if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "c":
				if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "a":
				t.hour12 = !0;
				break;
			case "b":
			case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "H":
				t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "K":
				t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "k":
				t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "j":
			case "J":
			case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				t.minute = ["numeric", "2-digit"][n - 1];
				break;
			case "s":
				t.second = ["numeric", "2-digit"][n - 1];
				break;
			case "S":
			case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				t.timeZoneName = n < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	}), t;
}
var _e = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ve(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	for (var t = e.split(_e).filter(function(e) {
		return e.length > 0;
	}), n = [], r = 0, i = t; r < i.length; r++) {
		var a = i[r].split("/");
		if (a.length === 0) throw Error("Invalid number skeleton");
		for (var o = a[0], s = a.slice(1), c = 0, l = s; c < l.length; c++) if (l[c].length === 0) throw Error("Invalid number skeleton");
		n.push({
			stem: o,
			options: s
		});
	}
	return n;
}
function ye(e) {
	return e.replace(/^(.*?)-/, "");
}
var be = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, U = /^(@+)?(\+|#+)?[rs]?$/g, xe = /(\*)(0+)|(#+)(0+)|(0+)/g, Se = /^(0+)$/;
function Ce(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(U, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function we(e) {
	switch (e) {
		case "sign-auto": return { signDisplay: "auto" };
		case "sign-accounting":
		case "()": return { currencySign: "accounting" };
		case "sign-always":
		case "+!": return { signDisplay: "always" };
		case "sign-accounting-always":
		case "()!": return {
			signDisplay: "always",
			currencySign: "accounting"
		};
		case "sign-except-zero":
		case "+?": return { signDisplay: "exceptZero" };
		case "sign-accounting-except-zero":
		case "()?": return {
			signDisplay: "exceptZero",
			currencySign: "accounting"
		};
		case "sign-never":
		case "+_": return { signDisplay: "never" };
	}
}
function Te(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Se.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function Ee(e) {
	return we(e) || {};
}
function De(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n];
		switch (i.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = i.options[0];
				continue;
			case "group-off":
			case ",_":
				t.useGrouping = !1;
				continue;
			case "precision-integer":
			case ".":
				t.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				t.style = "unit", t.unit = ye(i.options[0]);
				continue;
			case "compact-short":
			case "K":
				t.notation = "compact", t.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				t.notation = "compact", t.compactDisplay = "long";
				continue;
			case "scientific":
				t = E(E(E({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
					return E(E({}, e), Ee(t));
				}, {}));
				continue;
			case "engineering":
				t = E(E(E({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return E(E({}, e), Ee(t));
				}, {}));
				continue;
			case "notation-simple":
				t.notation = "standard";
				continue;
			case "unit-width-narrow":
				t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				t.currencyDisplay = "code", t.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				t.currencyDisplay = "name", t.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				t.currencyDisplay = "symbol";
				continue;
			case "scale":
				t.scale = parseFloat(i.options[0]);
				continue;
			case "rounding-mode-floor":
				t.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				t.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				t.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				t.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				t.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				t.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				t.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				i.options[0].replace(xe, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (Se.test(i.stem)) {
			t.minimumIntegerDigits = i.stem.length;
			continue;
		}
		if (be.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(be, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = E(E({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = E(E({}, t), Ce(a)));
			continue;
		}
		if (U.test(i.stem)) {
			t = E(E({}, t), Ce(i.stem));
			continue;
		}
		var o = we(i.stem);
		o && (t = E(E({}, t), o));
		var s = Te(i.stem);
		s && (t = E(E({}, t), s));
	}
	return t;
}
var W = {
	"001": ["H", "h"],
	419: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AD: ["H", "hB"],
	AE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	AF: [
		"H",
		"hb",
		"hB",
		"h"
	],
	AG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AL: [
		"h",
		"H",
		"hB"
	],
	AM: ["H", "hB"],
	AO: ["H", "hB"],
	AR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AS: ["h", "H"],
	AT: ["H", "hB"],
	AU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AW: ["H", "hB"],
	AX: ["H"],
	AZ: [
		"H",
		"hB",
		"h"
	],
	BA: [
		"H",
		"hB",
		"h"
	],
	BB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BD: [
		"h",
		"hB",
		"H"
	],
	BE: ["H", "hB"],
	BF: ["H", "hB"],
	BG: [
		"H",
		"hB",
		"h"
	],
	BH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	BI: ["H", "h"],
	BJ: ["H", "hB"],
	BL: ["H", "hB"],
	BM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BN: [
		"hb",
		"hB",
		"h",
		"H"
	],
	BO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	BQ: ["H"],
	BR: ["H", "hB"],
	BS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BT: ["h", "H"],
	BW: [
		"H",
		"h",
		"hb",
		"hB"
	],
	BY: ["H", "h"],
	BZ: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CA: [
		"h",
		"hb",
		"H",
		"hB"
	],
	CC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CD: ["hB", "H"],
	CF: [
		"H",
		"h",
		"hB"
	],
	CG: ["H", "hB"],
	CH: [
		"H",
		"hB",
		"h"
	],
	CI: ["H", "hB"],
	CK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CL: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CM: [
		"H",
		"h",
		"hB"
	],
	CN: [
		"H",
		"hB",
		"hb",
		"h"
	],
	CO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CP: ["H"],
	CR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CU: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CV: ["H", "hB"],
	CW: ["H", "hB"],
	CX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CY: [
		"h",
		"H",
		"hb",
		"hB"
	],
	CZ: ["H"],
	DE: ["H", "hB"],
	DG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	DJ: ["h", "H"],
	DK: ["H"],
	DM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	DO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	DZ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	EC: [
		"h",
		"H",
		"hB",
		"hb"
	],
	EE: ["H", "hB"],
	EG: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	ER: ["h", "H"],
	ES: [
		"H",
		"hB",
		"h",
		"hb"
	],
	ET: [
		"hB",
		"hb",
		"h",
		"H"
	],
	FI: ["H"],
	FJ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	FM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FO: ["H", "h"],
	FR: ["H", "hB"],
	GA: ["H", "hB"],
	GB: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GD: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GE: [
		"H",
		"hB",
		"h"
	],
	GF: ["H", "hB"],
	GG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GH: ["h", "H"],
	GI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GL: ["H", "h"],
	GM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GN: ["H", "hB"],
	GP: ["H", "hB"],
	GQ: [
		"H",
		"hB",
		"h",
		"hb"
	],
	GR: [
		"h",
		"H",
		"hb",
		"hB"
	],
	GT: [
		"h",
		"H",
		"hB",
		"hb"
	],
	GU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GW: ["H", "hB"],
	GY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	HK: [
		"h",
		"hB",
		"hb",
		"H"
	],
	HN: [
		"h",
		"H",
		"hB",
		"hb"
	],
	HR: ["H", "hB"],
	HU: ["H", "h"],
	IC: [
		"H",
		"h",
		"hB",
		"hb"
	],
	ID: ["H"],
	IE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IL: ["H", "hB"],
	IM: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IN: ["h", "H"],
	IO: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IQ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	IR: ["hB", "H"],
	IS: ["H"],
	IT: ["H", "hB"],
	JE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	JM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	JO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	JP: [
		"H",
		"K",
		"h"
	],
	KE: [
		"hB",
		"hb",
		"H",
		"h"
	],
	KG: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KH: [
		"hB",
		"h",
		"H",
		"hb"
	],
	KI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KM: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KN: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KP: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KW: [
		"h",
		"hB",
		"hb",
		"H"
	],
	KY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KZ: ["H", "hB"],
	LA: [
		"H",
		"hb",
		"hB",
		"h"
	],
	LB: [
		"h",
		"hB",
		"hb",
		"H"
	],
	LC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LI: [
		"H",
		"hB",
		"h"
	],
	LK: [
		"H",
		"h",
		"hB",
		"hb"
	],
	LR: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LS: ["h", "H"],
	LT: [
		"H",
		"h",
		"hb",
		"hB"
	],
	LU: [
		"H",
		"h",
		"hB"
	],
	LV: [
		"H",
		"hB",
		"hb",
		"h"
	],
	LY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	MC: ["H", "hB"],
	MD: ["H", "hB"],
	ME: [
		"H",
		"hB",
		"h"
	],
	MF: ["H", "hB"],
	MG: ["H", "h"],
	MH: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ML: ["H"],
	MM: [
		"hB",
		"hb",
		"H",
		"h"
	],
	MN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MP: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MQ: ["H", "hB"],
	MR: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MS: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MT: ["H", "h"],
	MU: ["H", "h"],
	MV: ["H", "h"],
	MW: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MX: [
		"h",
		"H",
		"hB",
		"hb"
	],
	MY: [
		"hb",
		"hB",
		"h",
		"H"
	],
	MZ: ["H", "hB"],
	NA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NC: ["H", "hB"],
	NE: ["H"],
	NF: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NI: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NL: ["H", "hB"],
	NO: ["H", "h"],
	NP: [
		"H",
		"h",
		"hB"
	],
	NR: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NU: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	OM: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PF: [
		"H",
		"h",
		"hB"
	],
	PG: ["h", "H"],
	PH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PK: [
		"h",
		"hB",
		"H"
	],
	PL: ["H", "h"],
	PM: ["H", "hB"],
	PN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	PR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PS: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PT: ["H", "hB"],
	PW: ["h", "H"],
	PY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	QA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	RE: ["H", "hB"],
	RO: ["H", "hB"],
	RS: [
		"H",
		"hB",
		"h"
	],
	RU: ["H"],
	RW: ["H", "h"],
	SA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SC: [
		"H",
		"h",
		"hB"
	],
	SD: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SE: ["H"],
	SG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SH: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SI: ["H", "hB"],
	SJ: ["H"],
	SK: ["H"],
	SL: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SM: [
		"H",
		"h",
		"hB"
	],
	SN: [
		"H",
		"h",
		"hB"
	],
	SO: ["h", "H"],
	SR: ["H", "hB"],
	SS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ST: ["H", "hB"],
	SV: [
		"h",
		"H",
		"hB",
		"hb"
	],
	SX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	TC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TD: [
		"h",
		"H",
		"hB"
	],
	TF: [
		"H",
		"h",
		"hB"
	],
	TG: ["H", "hB"],
	TH: ["H", "h"],
	TJ: ["H", "h"],
	TL: [
		"H",
		"hB",
		"hb",
		"h"
	],
	TM: ["H", "h"],
	TN: [
		"h",
		"hB",
		"hb",
		"H"
	],
	TO: ["h", "H"],
	TR: ["H", "hB"],
	TT: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TW: [
		"hB",
		"hb",
		"h",
		"H"
	],
	TZ: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UA: [
		"H",
		"hB",
		"h"
	],
	UG: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	US: [
		"h",
		"hb",
		"H",
		"hB"
	],
	UY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	UZ: [
		"H",
		"hB",
		"h"
	],
	VA: [
		"H",
		"h",
		"hB"
	],
	VC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	VG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VN: ["H", "h"],
	VU: ["h", "H"],
	WF: ["H", "hB"],
	WS: ["h", "H"],
	XK: [
		"H",
		"hB",
		"h"
	],
	YE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	YT: ["H", "hB"],
	ZA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ZM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ZW: ["H", "h"],
	"af-ZA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ar-001": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ca-ES": [
		"H",
		"h",
		"hB"
	],
	"en-001": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-HK": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-IL": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"en-MY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"es-BR": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-ES": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-GQ": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"fr-CA": [
		"H",
		"h",
		"hB"
	],
	"gl-ES": [
		"H",
		"h",
		"hB"
	],
	"gu-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"hi-IN": [
		"hB",
		"h",
		"H"
	],
	"it-CH": [
		"H",
		"h",
		"hB"
	],
	"it-IT": [
		"H",
		"h",
		"hB"
	],
	"kn-IN": [
		"hB",
		"h",
		"H"
	],
	"ml-IN": [
		"hB",
		"h",
		"H"
	],
	"mr-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"pa-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"ta-IN": [
		"hB",
		"h",
		"hb",
		"H"
	],
	"te-IN": [
		"hB",
		"h",
		"H"
	],
	"zu-ZA": [
		"H",
		"hB",
		"hb",
		"h"
	]
};
function Oe(e, t) {
	for (var n = "", r = 0; r < e.length; r++) {
		var i = e.charAt(r);
		if (i === "j") {
			for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = "a", l = ke(t);
			for ((l == "H" || l == "k") && (s = 0); s-- > 0;) n += c;
			for (; o-- > 0;) n = l + n;
		} else i === "J" ? n += "H" : n += i;
	}
	return n;
}
function ke(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (W[r || ""] || W[n || ""] || W[`${n}-001`] || W["001"])[0];
}
var Ae = RegExp(`^${me.source}*`), je = RegExp(`${me.source}*\$`);
function G(e, t) {
	return {
		start: e,
		end: t
	};
}
var Me = !!Object.fromEntries, Ne = !!String.prototype.trimStart, Pe = !!String.prototype.trimEnd, Fe = Me ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, Ie = Ne ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(Ae, "");
}, Le = Pe ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(je, "");
}, Re = /* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function ze(e, t) {
	return Re.lastIndex = t, Re.exec(e)[1] ?? "";
}
var Be = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	return e.prototype.parse = function() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}, e.prototype.parseMessage = function(e, t, n) {
		for (var r = []; !this.isEOF();) {
			var i = this.char();
			if (i === 123) {
				var a = this.parseArgument(e, n);
				if (a.err) return a;
				r.push(a.val);
			} else if (i === 125 && e > 0) break;
			else if (i === 35 && (t === "plural" || t === "selectordinal")) {
				var o = this.clonePosition();
				this.bump(), r.push({
					type: N.pound,
					location: G(o, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(M.UNMATCHED_CLOSING_TAG, G(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && K(this.peek() || 0)) {
				var a = this.parseTag(e, t);
				if (a.err) return a;
				r.push(a.val);
			} else {
				var a = this.parseLiteral(e, t);
				if (a.err) return a;
				r.push(a.val);
			}
		}
		return {
			val: r,
			err: null
		};
	}, e.prototype.parseTag = function(e, t) {
		var n = this.clonePosition();
		this.bump();
		var r = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: N.literal,
				value: `<${r}/>`,
				location: G(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !K(this.char())) return this.error(M.INVALID_TAG, G(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: N.tag,
						value: r,
						children: a,
						location: G(n, this.clonePosition())
					},
					err: null
				} : this.error(M.INVALID_TAG, G(o, this.clonePosition()))) : this.error(M.UNMATCHED_CLOSING_TAG, G(s, this.clonePosition()));
			} else return this.error(M.UNCLOSED_TAG, G(n, this.clonePosition()));
		} else return this.error(M.INVALID_TAG, G(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && He(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}, e.prototype.parseLiteral = function(e, t) {
		for (var n = this.clonePosition(), r = "";;) {
			var i = this.tryParseQuote(t);
			if (i) {
				r += i;
				continue;
			}
			var a = this.tryParseUnquoted(e, t);
			if (a) {
				r += a;
				continue;
			}
			var o = this.tryParseLeftAngleBracket();
			if (o) {
				r += o;
				continue;
			}
			break;
		}
		var s = G(n, this.clonePosition());
		return {
			val: {
				type: N.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Ve(this.peek() || 0)) ? (this.bump(), "<") : null;
	}, e.prototype.tryParseQuote = function(e) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39: return this.bump(), this.bump(), "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (e === "plural" || e === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		var t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			var n = this.char();
			if (n === 39) if (this.peek() === 39) t.push(39), this.bump();
			else {
				this.bump();
				break;
			}
			else t.push(n);
			this.bump();
		}
		return String.fromCodePoint.apply(String, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), String.fromCodePoint(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, G(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(M.EMPTY_ARGUMENT, G(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(M.MALFORMED_ARGUMENT, G(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, G(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: N.argument,
					value: r,
					location: G(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, G(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(M.MALFORMED_ARGUMENT, G(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = ze(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: G(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(M.EXPECT_ARGUMENT_TYPE, G(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
					if (l.err) return l;
					var u = Le(l.val);
					if (u.length === 0) return this.error(M.EXPECT_ARGUMENT_STYLE, G(this.clonePosition(), this.clonePosition()));
					s = {
						style: u,
						styleLocation: G(c, this.clonePosition())
					};
				}
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var f = G(r, this.clonePosition());
				if (s && s.style.startsWith("::")) {
					var p = Ie(s.style.slice(2));
					if (a === "number") {
						var l = this.parseNumberSkeletonFromString(p, s.styleLocation);
						return l.err ? l : {
							val: {
								type: N.number,
								value: n,
								location: f,
								style: l.val
							},
							err: null
						};
					} else {
						if (p.length === 0) return this.error(M.EXPECT_DATE_TIME_SKELETON, f);
						var m = p;
						this.locale && (m = Oe(p, this.locale));
						var u = {
							type: P.dateTime,
							pattern: m,
							location: s.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? ge(m) : {}
						};
						return {
							val: {
								type: a === "date" ? N.date : N.time,
								value: n,
								location: f,
								style: u
							},
							err: null
						};
					}
				}
				return {
					val: {
						type: a === "number" ? N.number : a === "date" ? N.date : N.time,
						value: n,
						location: f,
						style: s?.style ?? null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var h = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(M.EXPECT_SELECT_ARGUMENT_OPTIONS, G(h, E({}, h)));
				this.bumpSpace();
				var g = this.parseIdentifierIfPossible(), _ = 0;
				if (a !== "select" && g.value === "offset") {
					if (!this.bumpIf(":")) return this.error(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, G(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					var l = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, M.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (l.err) return l;
					this.bumpSpace(), g = this.parseIdentifierIfPossible(), _ = l.val;
				}
				var v = this.tryParsePluralOrSelectOptions(e, a, t, g);
				if (v.err) return v;
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var y = G(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: N.select,
						value: n,
						options: Fe(v.val),
						location: y
					},
					err: null
				} : {
					val: {
						type: N.plural,
						value: n,
						options: Fe(v.val),
						offset: _,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: y
					},
					err: null
				};
			default: return this.error(M.INVALID_ARGUMENT_TYPE, G(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(M.EXPECT_ARGUMENT_CLOSING_BRACE, G(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(M.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, G(n, this.clonePosition()));
				this.bump();
				break;
			case 123:
				e += 1, this.bump();
				break;
			case 125:
				if (e > 0) --e;
				else return {
					val: this.message.slice(t.offset, this.offset()),
					err: null
				};
				break;
			default:
				this.bump();
				break;
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
		var n = [];
		try {
			n = ve(e);
		} catch {
			return this.error(M.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: P.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? De(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t !== "select" && this.bumpIf("=")) {
					var d = this.tryParseDecimalInteger(M.EXPECT_PLURAL_ARGUMENT_SELECTOR, M.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = G(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				} else break;
			}
			if (s.has(c)) return this.error(t === "select" ? M.DUPLICATE_SELECT_ARGUMENT_SELECTOR : M.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : M.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, G(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: G(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? M.EXPECT_SELECT_ARGUMENT_SELECTOR : M.EXPECT_PLURAL_ARGUMENT_SELECTOR, G(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(M.MISSING_OTHER_CLAUSE, G(this.clonePosition(), this.clonePosition())) : {
			val: o,
			err: null
		};
	}, e.prototype.tryParseDecimalInteger = function(e, t) {
		var n = 1, r = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (n = -1);
		for (var i = !1, a = 0; !this.isEOF();) {
			var o = this.char();
			if (o >= 48 && o <= 57) i = !0, a = a * 10 + (o - 48), this.bump();
			else break;
		}
		var s = G(r, this.clonePosition());
		return i ? (a *= n, Number.isSafeInteger(a) ? {
			val: a,
			err: null
		} : this.error(t, s)) : this.error(e, s);
	}, e.prototype.offset = function() {
		return this.position.offset;
	}, e.prototype.isEOF = function() {
		return this.offset() === this.message.length;
	}, e.prototype.clonePosition = function() {
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	}, e.prototype.char = function() {
		var e = this.position.offset;
		if (e >= this.message.length) throw Error("out of bound");
		var t = this.message.codePointAt(e);
		if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
		return t;
	}, e.prototype.error = function(e, t) {
		return {
			val: null,
			err: {
				kind: e,
				message: this.message,
				location: t
			}
		};
	}, e.prototype.bump = function() {
		if (!this.isEOF()) {
			var e = this.char();
			e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
		}
	}, e.prototype.bumpIf = function(e) {
		if (this.message.startsWith(e, this.offset())) {
			for (var t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}, e.prototype.bumpUntil = function(e) {
		var t = this.offset(), n = this.message.indexOf(e, t);
		return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
	}, e.prototype.bumpTo = function(e) {
		if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
		for (e = Math.min(e, this.message.length);;) {
			var t = this.offset();
			if (t === e) break;
			if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
			if (this.bump(), this.isEOF()) break;
		}
	}, e.prototype.bumpSpace = function() {
		for (; !this.isEOF() && Ue(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function K(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ve(e) {
	return K(e) || e === 47;
}
function He(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Ue(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function q(e) {
	e.forEach(function(e) {
		if (delete e.location, R(e) || z(e)) for (var t in e.options) delete e.options[t].location, q(e.options[t].value);
		else F(e) && V(e.style) || (I(e) || L(e)) && H(e.style) ? delete e.style.location : B(e) && q(e.children);
	});
}
function We(e, t) {
	t === void 0 && (t = {}), t = E({
		shouldParseSkeletons: !0,
		requiresOtherClause: !0
	}, t);
	var n = new Be(e, t).parse();
	if (n.err) {
		var r = SyntaxError(M[n.err.kind]);
		throw r.location = n.err.location, r.originalMessage = n.err.message, r;
	}
	return t?.captureLocation || q(n.val), n.val;
}
var J;
(function(e) {
	e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(J ||= {});
var Y = function(e) {
	T(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.code = n, i.originalMessage = r, i;
	}
	return t.prototype.toString = function() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}, t;
}(Error), Ge = function(e) {
	T(t, e);
	function t(t, n, r, i) {
		return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, J.INVALID_VALUE, i) || this;
	}
	return t;
}(Y), Ke = function(e) {
	T(t, e);
	function t(t, n, r) {
		return e.call(this, `Value for "${t}" must be of type ${n}`, J.INVALID_VALUE, r) || this;
	}
	return t;
}(Y), qe = function(e) {
	T(t, e);
	function t(t, n) {
		return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, J.MISSING_VALUE, n) || this;
	}
	return t;
}(Y), X;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(X ||= {});
function Je(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== X.literal || t.type !== X.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function Ye(e) {
	return typeof e == "function";
}
function Z(e, t, n, r, i, a, o) {
	if (e.length === 1 && de(e[0])) return [{
		type: X.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (de(u)) {
			s.push({
				type: X.literal,
				value: u.value
			});
			continue;
		}
		if (pe(u)) {
			typeof a == "number" && s.push({
				type: X.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		var d = u.value;
		if (!(i && d in i)) throw new qe(d, o);
		var f = i[d];
		if (fe(u)) {
			(!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? X.literal : X.object,
				value: f
			});
			continue;
		}
		if (I(u)) {
			var p = typeof u.style == "string" ? r.date[u.style] : H(u.style) ? u.style.parsedOptions : void 0;
			s.push({
				type: X.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (L(u)) {
			var p = typeof u.style == "string" ? r.time[u.style] : H(u.style) ? u.style.parsedOptions : r.time.medium;
			s.push({
				type: X.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (F(u)) {
			var p = typeof u.style == "string" ? r.number[u.style] : V(u.style) ? u.style.parsedOptions : void 0;
			p && p.scale && (f *= p.scale || 1), s.push({
				type: X.literal,
				value: n.getNumberFormat(t, p).format(f)
			});
			continue;
		}
		if (B(u)) {
			var m = u.children, h = u.value, g = i[h];
			if (!Ye(g)) throw new Ke(h, "function", o);
			var _ = g(Z(m, t, n, r, i, a).map(function(e) {
				return e.value;
			}));
			Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
				return {
					type: typeof e == "string" ? X.literal : X.object,
					value: e
				};
			}));
		}
		if (R(u)) {
			var v = u.options[f] || u.options.other;
			if (!v) throw new Ge(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, Z(v.value, t, n, r, i));
			continue;
		}
		if (z(u)) {
			var v = u.options[`=${f}`];
			if (!v) {
				if (!Intl.PluralRules) throw new Y("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", J.MISSING_INTL_API, o);
				var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
				v = u.options[y] || u.options.other;
			}
			if (!v) throw new Ge(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, Z(v.value, t, n, r, i, f - (u.offset || 0)));
			continue;
		}
	}
	return Je(s);
}
function Xe(e, t) {
	return t ? E(E(E({}, e), t), Object.keys(e).reduce(function(n, r) {
		return n[r] = E(E({}, e[r]), t[r]), n;
	}, {})) : e;
}
function Ze(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = Xe(e[r], t[r]), n;
	}, E({}, e)) : e;
}
function Q(e) {
	return { create: function() {
		return {
			get: function(t) {
				return e[t];
			},
			set: function(t, n) {
				e[t] = n;
			}
		};
	} };
}
function Qe(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: k(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.NumberFormat).bind.apply(e, O([void 0], t, !1)))();
		}, {
			cache: Q(e.number),
			strategy: j.variadic
		}),
		getDateTimeFormat: k(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, O([void 0], t, !1)))();
		}, {
			cache: Q(e.dateTime),
			strategy: j.variadic
		}),
		getPluralRules: k(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.PluralRules).bind.apply(e, O([void 0], t, !1)))();
		}, {
			cache: Q(e.pluralRules),
			strategy: j.variadic
		})
	};
}
var $e = function() {
	function e(t, n, r, i) {
		n === void 0 && (n = e.defaultLocale);
		var a = this;
		if (this.formatterCache = {
			number: {},
			dateTime: {},
			pluralRules: {}
		}, this.format = function(e) {
			var t = a.formatToParts(e);
			if (t.length === 1) return t[0].value;
			var n = t.reduce(function(e, t) {
				return !e.length || t.type !== X.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
			}, []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = function(e) {
			return Z(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
		}, this.resolvedOptions = function() {
			return { locale: a.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(a.locales)[0] };
		}, this.getAst = function() {
			return a.ast;
		}, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
			if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			var o = D(i || {}, []);
			this.ast = e.__parse(t, E(E({}, o), { locale: this.resolvedLocale }));
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = Ze(e.formats, r), this.formatters = i && i.formatters || Qe(this.formatterCache);
	}
	return Object.defineProperty(e, "defaultLocale", {
		get: function() {
			return e.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale, e.memoizedDefaultLocale;
		},
		enumerable: !1,
		configurable: !0
	}), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
		if (Intl.Locale !== void 0) {
			var t = Intl.NumberFormat.supportedLocalesOf(e);
			return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
		}
	}, e.__parse = We, e.formats = {
		number: {
			integer: { maximumFractionDigits: 0 },
			currency: { style: "currency" },
			percent: { style: "percent" }
		},
		date: {
			short: {
				month: "numeric",
				day: "numeric",
				year: "2-digit"
			},
			medium: {
				month: "short",
				day: "numeric",
				year: "numeric"
			},
			long: {
				month: "long",
				day: "numeric",
				year: "numeric"
			},
			full: {
				weekday: "long",
				month: "long",
				day: "numeric",
				year: "numeric"
			}
		},
		time: {
			short: {
				hour: "numeric",
				minute: "numeric"
			},
			medium: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric"
			},
			long: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "short"
			},
			full: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "short"
			}
		}
	}, e;
}();
function et(e) {
	return function(t) {
		return e(t);
	};
}
function tt(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) typeof r == "function" ? t[n] = et(r) : t[n] = r;
	return t;
}
function nt(n, r, i) {
	try {
		let e = new $e(n, i), a = tt(r), o = e.format(a);
		return Array.isArray(o) ? o.map((e, n) => l(t, { children: e }, n)) : o;
	} catch (t) {
		return e.warn(`Error rendering rich text (${n}): ${t}`), n;
	}
}
var rt = (t) => {
	let { translations: n, registerHashes: i, locale: o, sourceLocale: s } = g();
	return a(() => {
		e.debug(`Registering ${t.length} hashes for component`), i(t);
	}, [
		t,
		i,
		o,
		s
	]), {
		t: r((t, r, i) => {
			e.debug(`Client. The translations for locale ${o} are: ${JSON.stringify(n)}`);
			let a = n[t] || r;
			return i ? nt(a, i, o) : a;
		}, [
			n,
			o,
			s
		]),
		locale: o
	};
};
function it() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function at() {
	let [e, t] = c("auto");
	a(() => {
		let e = it();
		t(e), $(e);
	}, []), a(() => {
		if (e !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	}, [e]);
	function n() {
		let n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		t(n), $(n), window.localStorage.setItem("theme", n);
	}
	let r = e === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${e}. Click to switch mode.`;
	return l("button", {
		type: "button",
		onClick: n,
		"aria-label": r,
		title: r,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e === "auto" ? "Theme: Auto" : e === "dark" ? "Theme: Dark" : "Theme: Light"
	});
}
var ot = [
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
], st = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
function ct() {
	let e = p({ strict: !1 }).locale ?? "en", t = f(), n = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			}),
			replace: !0
		});
	};
	return l("div", {
		className: "flex items-center gap-2",
		children: l("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: ot.map((e) => l("option", {
				value: e,
				children: st(e)
			}, e))
		})
	});
}
function lt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), o(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function ut() {
	let { t: e } = rt([
		"a9f56c050b58",
		"239d52bcab2f",
		"50023d03e021",
		"5a01d1dcc7d0",
		"acd61dd25bee"
	]);
	lt("Header");
	let [t, n] = c(!1), r = p({ strict: !1 }).locale ?? "en";
	return l("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: u("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [u("div", {
				className: "flex items-center gap-8",
				children: [l(d, {
					preload: !1,
					to: "/$locale",
					params: { locale: r },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e("a9f56c050b58", "i18n Bench")
				}), u("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						l(d, {
							preload: !1,
							to: "/$locale",
							params: { locale: r },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("239d52bcab2f", "Home")
						}),
						l(d, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: r },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("50023d03e021", "Methodology")
						}),
						u("div", {
							className: "relative",
							children: [u("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("5a01d1dcc7d0", "Mock Pages"), l(m, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && l("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: l("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: [
										{
											to: "/$locale/products",
											label: "Products"
										},
										{
											to: "/$locale/pricing",
											label: "Pricing"
										},
										{
											to: "/$locale/team",
											label: "Team"
										},
										{
											to: "/$locale/blog",
											label: "Blog"
										},
										{
											to: "/$locale/careers",
											label: "Careers"
										},
										{
											to: "/$locale/faq",
											label: "FAQ"
										},
										{
											to: "/$locale/contact",
											label: "Contact"
										},
										{
											to: "/$locale/settings",
											label: "Settings"
										}
									].map((e) => l(d, {
										preload: !1,
										to: e.to,
										params: { locale: r },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.to))
								})
							})]
						})
					]
				})]
			}), u("div", {
				className: "flex items-center gap-4",
				children: [
					u("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [l("span", {
							className: "sr-only",
							children: e("acd61dd25bee", "Go to GitHub")
						}), l("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: l("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					l(ct, {}),
					l(at, {})
				]
			})]
		})
	});
}
function dt({ children: e }) {
	return l(te, {
		initialLocale: "en",
		children: e
	});
}
function ft() {
	return l(dt, { children: l(ut, {}) });
}
export { ft as default };
import { t as e } from "./logger-D1nsn_SU.js";
var t = class extends HTMLElement {
	shadow;
	state = null;
	ws = null;
	reconnectAttempts = 0;
	maxReconnectAttempts = 5;
	constructor() {
		super(), this.shadow = this.attachShadow({ mode: "open" });
	}
	connectedCallback() {
		window.__LINGO_DEV_UPDATE__ = () => {
			this.state = window.__LINGO_DEV_STATE__ || null, this.render();
		}, window.__LINGO_DEV_STATE__ && (this.state = window.__LINGO_DEV_STATE__, this.render()), this.connectWebSocket();
	}
	disconnectedCallback() {
		window.__LINGO_DEV_UPDATE__ && delete window.__LINGO_DEV_UPDATE__, this.ws &&= (this.ws.close(), null);
	}
	connectWebSocket() {
		let t = window.__LINGO_DEV_WS_URL__;
		if (!t) {
			e.warn("WebSocket URL not available, real-time updates disabled");
			return;
		}
		try {
			let n = new URL(t);
			n.protocol = n.protocol === "https:" ? "wss:" : "ws:", this.ws = new WebSocket(n.toString()), this.ws.onopen = () => {
				e.info("WebSocket connected"), this.reconnectAttempts = 0;
			}, this.ws.onmessage = (t) => {
				try {
					let e = JSON.parse(t.data);
					this.handleServerEvent(e);
				} catch (t) {
					e.error("Failed to parse WebSocket message:", t);
				}
			}, this.ws.onerror = (t) => {
				e.error("WebSocket error:", t);
			}, this.ws.onclose = () => {
				if (e.info("WebSocket disconnected"), this.ws = null, this.reconnectAttempts < this.maxReconnectAttempts) {
					let t = Math.min(1e3 * 2 ** this.reconnectAttempts, 1e4);
					this.reconnectAttempts++, e.info(`Reconnecting in ${t}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`), setTimeout(() => this.connectWebSocket(), t);
				}
			};
		} catch (t) {
			e.error("Failed to create WebSocket connection:", t);
		}
	}
	handleServerEvent(t) {
		switch (t.type) {
			case "connected":
				e.info(`Connected to translation server: ${t.serverUrl}`);
				break;
			case "batch:start":
				this.state && (this.state.serverProgress = {
					locale: t.locale,
					total: t.total,
					completed: 0,
					status: "in-progress"
				}, this.render());
				break;
			case "batch:progress":
				this.state && this.state.serverProgress && (this.state.serverProgress.completed = t.completed, this.render());
				break;
			case "batch:complete":
				this.state && this.state.serverProgress && (this.state.serverProgress.status = "complete", this.render(), setTimeout(() => {
					this.state && (this.state.serverProgress = void 0, this.render());
				}, 2e3));
				break;
			case "batch:error":
				this.state && this.state.serverProgress && (this.state.serverProgress.status = "error", this.render());
				break;
		}
	}
	render() {
		if (!this.state) {
			this.shadow.innerHTML = "";
			return;
		}
		let { isLoading: e, locale: t, pendingCount: n, position: r, serverProgress: i } = this.state, a = e || i?.status === "in-progress";
		this.shadow.innerHTML = `
      <style>
        ${this.getStyles(r)}
      </style>
      <div class="container">
        ${a ? this.renderLoader() : this.renderLogo()}
        <svg height="26" viewBox="0 0 650 171" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M391.372 137.084H373.458V119.326H391.372V137.084Z" fill="white"/>
<path d="M420.766 133.46C415.204 130 410.808 125.121 407.566 118.842C404.329 112.562 402.685 105.422 402.685 97.4631C402.685 89.5033 404.306 82.4043 407.566 76.1645C410.808 69.925 415.227 65.0853 420.766 61.6257C426.327 58.1659 432.506 56.446 439.326 56.446C449.283 56.446 457.245 60.2258 463.222 67.7652H464.001V27.0283H479.56V137.08H466.204L464.624 127.02H463.845C457.764 134.78 449.583 138.66 439.326 138.66C432.506 138.66 426.327 136.94 420.766 133.48V133.46ZM452.606 120.881C456.102 118.681 458.883 115.542 460.943 111.442C462.985 107.362 464.001 102.683 464.001 97.4429C464.001 92.2033 462.985 87.5637 460.943 83.5241C458.906 79.4843 456.126 76.3645 452.606 74.1647C449.087 71.9649 445.285 70.865 441.206 70.865C437.127 70.865 433.187 71.9649 429.726 74.1647C426.264 76.3645 423.506 79.4843 421.464 83.5241C419.427 87.5637 418.406 92.2033 418.406 97.4429C418.406 102.683 419.427 107.482 421.464 111.522C423.506 115.562 426.264 118.681 429.726 120.881C433.187 123.081 437.006 124.181 441.206 124.181C445.406 124.181 449.087 123.081 452.606 120.881Z" fill="white"/>
<path d="M516.206 119.059C521.006 122.619 525.904 125.118 532.083 125.118C536.485 125.118 540.362 124.118 543.725 122.139C547.083 120.139 549.581 117.579 551.266 114.44H567.46C565.043 121.459 560.802 127.258 554.722 131.818C548.641 136.378 541.106 138.658 532.083 138.658C524.745 138.658 518.087 136.897 512.127 133.398C506.145 129.898 501.466 125.018 498.045 118.779C494.647 112.54 492.945 105.44 492.945 97.481C492.945 89.5212 494.647 82.5819 498.045 76.3423C501.448 70.1028 506.145 65.2432 512.127 61.7234C518.104 58.2237 524.745 56.4638 532.083 56.4638C539.422 56.4638 545.462 58.1437 551.185 61.5034C556.902 64.8632 561.402 69.4628 564.702 75.3424C568.002 81.2221 569.664 87.8216 569.664 95.141C569.664 98.8004 569.404 101.581 568.879 103.48H508.447L521.404 91.541H554.283C553.764 85.2618 551.445 80.062 547.366 75.9824C543.281 71.9026 538.181 69.8428 532.124 69.8428C526.066 69.8428 520.545 71.8826 516.247 75.9824C511.948 80.062 509.387 85.2618 508.545 91.541C508.545 91.541 505.227 110.98 516.247 119.119L516.206 119.059Z" fill="white"/>
<path d="M621.998 137.084H599.197L571.378 58.0104H587.74L609.115 119.486H612.259L633.634 58.0104H649.996L622.015 137.084H621.998Z" fill="white"/>
<path d="M96.158 43.0674H79.18V27.3486H96.158V43.0674ZM95.378 137.08H79.82V58.0063H95.378V137.08Z" fill="white"/>
<path d="M112.508 137.082V58.0083H125.867L127.447 66.1877H128.227C130.207 63.6678 133.247 61.428 137.346 59.4281C141.426 57.4283 146.146 56.4484 151.505 56.4484C157.585 56.4484 163.004 57.8483 167.784 60.6081C172.544 63.3879 176.284 67.2876 178.943 72.3272C181.623 77.3668 182.943 83.1266 182.943 89.6257V137.102H167.384V90.8857C167.384 85.2261 165.544 80.5066 161.885 76.7269C158.225 72.9471 153.665 71.0673 148.205 71.0673C144.546 71.0673 141.166 71.9672 138.066 73.7471C134.967 75.5269 132.546 77.9468 130.747 80.9868C128.967 84.0261 128.067 87.3261 128.067 90.8857V137.102H112.508V137.082Z" fill="white"/>
<path d="M214.923 165.84C209.523 163.02 205.403 159.481 202.583 155.221C199.763 150.962 198.244 146.662 198.024 142.243H213.742C214.162 145.902 216.162 149.142 219.722 151.901C223.282 154.682 228.221 156.061 234.501 156.061C240.78 156.061 246.18 154.221 250.06 150.562C253.939 146.882 255.88 142.022 255.88 135.943V123.364H255.1C252.379 126.404 248.96 128.823 244.88 130.603C240.801 132.383 236.281 133.283 231.361 133.283C224.542 133.283 218.402 131.663 212.883 128.403C207.383 125.163 203.063 120.604 199.924 114.725C196.784 108.865 195.204 102.205 195.204 94.766C195.204 87.3266 196.784 80.6873 199.924 74.8875C203.063 69.0679 207.383 64.5482 212.883 61.2885C218.382 58.0487 224.542 56.4088 231.361 56.4088C236.401 56.4088 241.02 57.4088 245.28 59.3887C249.52 61.3885 252.96 64.0483 255.58 67.4081H256.36L257.939 57.9687H271.458V136.103C271.458 142.802 269.998 148.722 267.059 153.861C264.119 159.001 259.859 162.981 254.239 165.801C248.64 168.64 242.06 170.04 234.501 170.04C226.942 170.04 220.322 168.62 214.923 165.801V165.84ZM244.78 116.084C248.18 114.044 250.88 111.165 252.88 107.445C254.879 103.726 255.859 99.5054 255.859 94.7862C255.859 90.0664 254.86 85.8866 252.88 82.2069C250.88 78.5472 248.18 75.6874 244.78 73.6476C241.38 71.6077 237.581 70.5878 233.381 70.5878C226.882 70.5878 221.522 72.8476 217.262 77.3473C213.023 81.8469 210.903 87.6664 210.903 94.8058C210.903 101.945 213.023 107.905 217.262 112.405C221.502 116.904 226.882 119.164 233.381 119.164C237.581 119.164 241.38 118.144 244.78 116.105V116.084Z" fill="white"/>
<path d="M303.031 133.382C297.051 129.883 292.372 125.003 288.952 118.764C285.552 112.524 283.852 105.425 283.852 97.4655C283.852 89.5057 285.552 82.5664 288.952 76.3269C292.351 70.0874 297.051 65.2277 303.031 61.708C309.011 58.2082 315.65 56.4484 322.989 56.4484C330.329 56.4484 336.948 58.2082 342.868 61.708C348.787 65.2277 353.447 70.0874 356.867 76.3269C360.267 82.5664 361.966 89.6061 361.966 97.4655C361.966 105.325 360.267 112.524 356.867 118.764C353.467 125.003 348.787 129.883 342.868 133.382C336.948 136.902 330.309 138.642 322.989 138.642C315.67 138.642 308.99 136.882 303.031 133.382ZM334.848 120.883C338.468 118.684 341.328 115.544 343.408 111.444C345.507 107.364 346.548 102.685 346.548 97.4453C346.548 92.2057 345.507 87.5661 343.408 83.5264C341.308 79.4867 338.448 76.3669 334.848 74.1671C331.228 71.9672 327.269 70.8673 322.989 70.8673C318.71 70.8673 314.73 71.9672 311.13 74.1671C307.511 76.3669 304.651 79.4867 302.571 83.5264C300.471 87.5661 299.431 92.2057 299.431 97.4453C299.431 102.685 300.471 107.345 302.571 111.444C304.67 115.524 307.53 118.684 311.13 120.883C314.75 123.083 318.71 124.183 322.989 124.183C327.269 124.183 331.249 123.083 334.848 120.883Z" fill="white"/>
<path d="M69.795 135.861H0V25.81H16.498V120.143L16.798 135.861L34.097 120.143H69.795V135.861Z" fill="white"/>
</svg>
      </div>
    `;
	}
	getStyles(e) {
		return `
      :host {
        position: fixed;
        z-index: 99999;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
        font-size: 12px;
        pointer-events: auto;
        ${{
			"bottom-left": "bottom: 60px; left: 16px;",
			"bottom-right": "bottom: 60px; right: 16px;",
			"top-left": "top: 16px; left: 16px;",
			"top-right": "top: 16px; right: 16px;"
		}[e]}
      }

      .container {
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s ease-in-out;
        border-radius: 8px;
        padding: 8px 12px;
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 0 0 0 1px #373737, inset 0 0 0 1px rgba(0, 0, 0, 0.24), 0px 16px 32px -8px rgba(0, 0, 0, 0.24);
        backdrop-filter: blur(48px);
      }

      .logo {
        width: 26px;
        height: 26px;
        flex-shrink: 0;
      }
    `;
	}
	renderLogo() {
		return "\n<svg height=\"26\" viewBox=\"0 0 147 171\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0.304987 76.63L54.9149 136.206C55.1326 136.441 55.4362 136.579 55.757 136.579H145.288C146.308 136.579 146.817 135.347 146.096 134.625L106.804 95.3334H75.87V110.801L39.7802 74.711H1.14708C0.150317 74.711 -0.370977 75.8968 0.304987 76.63Z\" fill=\"#69E300\"/>\n<path d=\"M146.304 93.4186L91.6883 33.8424C91.4702 33.6075 91.1668 33.47 90.846 33.47H1.31509C0.289683 33.47 -0.220155 34.7017 0.501637 35.4235L39.7935 74.7153H70.7275V59.2483L106.817 95.3381H145.456C146.453 95.3381 146.974 94.1519 146.298 93.4186H146.304Z\" fill=\"#69E300\"/>\n</g>\n</svg>\n    ";
	}
	renderLoader() {
		return "\n<svg height=\"26\" viewBox=\"0 0 147 171\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<style>\n  @keyframes moveDown {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(12px); }\n  }\n  @keyframes moveUp {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(-12px); }\n  }\n  .bottom-part { animation: moveDown 1.5s ease-in-out infinite; transform-origin: center; }\n  .top-part { animation: moveUp 1.5s ease-in-out infinite; transform-origin: center; }\n</style>\n<path class=\"bottom-part\" d=\"M0.304987 76.63L54.9149 136.206C55.1326 136.441 55.4362 136.579 55.757 136.579H145.288C146.308 136.579 146.817 135.347 146.096 134.625L106.804 95.3334H75.87V110.801L39.7802 74.711H1.14708C0.150317 74.711 -0.370977 75.8968 0.304987 76.63Z\" fill=\"grey\"/>\n<path class=\"top-part\" d=\"M146.304 93.4186L91.6883 33.8424C91.4702 33.6075 91.1668 33.47 90.846 33.47H1.31509C0.289683 33.47 -0.220155 34.7017 0.501637 35.4235L39.7935 74.7153H70.7275V59.2483L106.817 95.3381H145.456C146.453 95.3381 146.974 94.1519 146.298 93.4186H146.304Z\" fill=\"grey\"/>\n</g>\n</svg>\n    ";
	}
};
if (e.debug("Loading Lingo Dev Widget..."), typeof window < "u") {
	customElements.define("lingo-dev-widget", t);
	let e = document.createElement("lingo-dev-widget");
	document.body.appendChild(e), window.__LINGO_DEV_STATE__ || (window.__LINGO_DEV_STATE__ = {
		isLoading: !1,
		locale: "en",
		sourceLocale: "en",
		pendingCount: 0,
		position: "bottom-left"
	}), window.__LINGO_DEV_UPDATE__ && window.__LINGO_DEV_UPDATE__();
}
export { t as LingoDevWidget };
var e = new class {
	config;
	prefix = "\x1B[42m\x1B[30m[Lingo.dev]\x1B[0m";
	constructor(e = {}) {
		this.config = {
			enableDebug: e.enableDebug ?? (typeof process < "u" && process.env?.LINGO_DEBUG === "true"),
			enableConsole: e.enableConsole ?? !0,
			writeToFile: e.writeToFile
		};
	}
	setDebug(e) {
		this.config.enableDebug = e;
	}
	setConsoleEnabled(e) {
		this.config.enableConsole = e;
	}
	setFileWriter(e) {
		this.config.writeToFile = e;
	}
	formatMessage(...e) {
		return e.map((e) => typeof e == "object" ? JSON.stringify(e, null, 2) : String(e)).join(" ");
	}
	log(e, ...t) {
		let n = this.formatMessage(...t);
		this.config.enableConsole && (e === "debug" || e === "info" ? console.log : console[e])(this.prefix, n), this.config.writeToFile && this.config.writeToFile(e, n);
	}
	debug(...e) {
		this.config.enableDebug && this.log("debug", ...e);
	}
	info(...e) {
		this.log("info", ...e);
	}
	warn(...e) {
		this.log("warn", ...e);
	}
	error(...e) {
		this.log("error", ...e);
	}
}({ enableConsole: !0 });
export { e as t };

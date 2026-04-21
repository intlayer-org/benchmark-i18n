import e, { cloneElement as t, createContext as n, isValidElement as r, use as i, useContext as a, useMemo as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
function l(e, t) {
	let n = t && t.cache ? t.cache : ee, r = t && t.serializer ? t.serializer : _;
	return (t && t.strategy ? t.strategy : m)(e, {
		cache: n,
		serializer: r
	});
}
function u(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function d(e, t, n, r) {
	let i = u(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function f(e, t, n) {
	let r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function p(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function m(e, t) {
	let n = e.length === 1 ? d : f;
	return p(e, this, n, t.cache.create(), t.serializer);
}
function h(e, t) {
	return p(e, this, f, t.cache.create(), t.serializer);
}
function g(e, t) {
	return p(e, this, d, t.cache.create(), t.serializer);
}
var _ = function() {
	return JSON.stringify(arguments);
}, v = class {
	cache;
	constructor() {
		this.cache = Object.create(null);
	}
	get(e) {
		return this.cache[e];
	}
	set(e, t) {
		this.cache[e] = t;
	}
}, ee = { create: function() {
	return new v();
} }, y = {
	variadic: h,
	monadic: g
}, b = class extends Error {
	constructor(e, t) {
		let n = e;
		t && (n += ": " + t), super(n), this.code = e, t && (this.originalMessage = t);
	}
}, x = function(e) {
	return e.MISSING_MESSAGE = "MISSING_MESSAGE", e.MISSING_FORMAT = "MISSING_FORMAT", e.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", e.INVALID_MESSAGE = "INVALID_MESSAGE", e.INVALID_KEY = "INVALID_KEY", e.FORMATTING_ERROR = "FORMATTING_ERROR", e;
}(x || {});
function te() {
	return {
		dateTime: {},
		number: {},
		message: {},
		relativeTime: {},
		pluralRules: {},
		list: {},
		displayNames: {}
	};
}
function S(e, t) {
	return l(e, {
		cache: (n = t, { create: () => ({
			get: (e) => n[e],
			set(e, t) {
				n[e] = t;
			}
		}) }),
		strategy: y.variadic
	});
	var n;
}
function C(e, t) {
	return S(((...t) => new e(...t)), t);
}
function ne(e) {
	return {
		getDateTimeFormat: C(Intl.DateTimeFormat, e.dateTime),
		getNumberFormat: C(Intl.NumberFormat, e.number),
		getPluralRules: C(Intl.PluralRules, e.pluralRules),
		getRelativeTimeFormat: C(Intl.RelativeTimeFormat, e.relativeTime),
		getListFormat: C(Intl.ListFormat, e.list),
		getDisplayNames: C(Intl.DisplayNames, e.displayNames)
	};
}
var re = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ie(e) {
	let t = {};
	return e.replace(re, (e) => {
		let n = e.length;
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
var ae = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function oe(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	let t = e.split(ae).filter((e) => e.length > 0), n = [];
	for (let e of t) {
		let t = e.split("/");
		if (t.length === 0) throw Error("Invalid number skeleton");
		let [r, ...i] = t;
		for (let e of i) if (e.length === 0) throw Error("Invalid number skeleton");
		n.push({
			stem: r,
			options: i
		});
	}
	return n;
}
function se(e) {
	return e.replace(/^(.*?)-/, "");
}
var ce = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, le = /^(@+)?(\+|#+)?[rs]?$/g, ue = /(\*)(0+)|(#+)(0+)|(0+)/g, de = /^(0+)$/;
function fe(e) {
	let t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(le, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function pe(e) {
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
function me(e) {
	let t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		let n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !de.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function w(e) {
	return pe(e) || {};
}
function he(e) {
	let t = {};
	for (let n of e) {
		switch (n.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = n.options[0];
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
				t.style = "unit", t.unit = se(n.options[0]);
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
				t = {
					...t,
					notation: "scientific",
					...n.options.reduce((e, t) => ({
						...e,
						...w(t)
					}), {})
				};
				continue;
			case "engineering":
				t = {
					...t,
					notation: "engineering",
					...n.options.reduce((e, t) => ({
						...e,
						...w(t)
					}), {})
				};
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
				t.scale = parseFloat(n.options[0]);
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
				if (n.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				n.options[0].replace(ue, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (de.test(n.stem)) {
			t.minimumIntegerDigits = n.stem.length;
			continue;
		}
		if (ce.test(n.stem)) {
			if (n.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			n.stem.replace(ce, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			let e = n.options[0];
			e === "w" ? t = {
				...t,
				trailingZeroDisplay: "stripIfInteger"
			} : e && (t = {
				...t,
				...fe(e)
			});
			continue;
		}
		if (le.test(n.stem)) {
			t = {
				...t,
				...fe(n.stem)
			};
			continue;
		}
		let e = pe(n.stem);
		e && (t = {
			...t,
			...e
		});
		let r = me(n.stem);
		r && (t = {
			...t,
			...r
		});
	}
	return t;
}
var T = function(e) {
	return e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag", e;
}({}), E = function(e) {
	return e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime", e;
}({});
function D(e) {
	return e.type === T.literal;
}
function ge(e) {
	return e.type === T.argument;
}
function O(e) {
	return e.type === T.number;
}
function k(e) {
	return e.type === T.date;
}
function A(e) {
	return e.type === T.time;
}
function j(e) {
	return e.type === T.select;
}
function M(e) {
	return e.type === T.plural;
}
function _e(e) {
	return e.type === T.pound;
}
function N(e) {
	return e.type === T.tag;
}
function P(e) {
	return !!(e && typeof e == "object" && e.type === E.number);
}
function F(e) {
	return !!(e && typeof e == "object" && e.type === E.dateTime);
}
var I = function(e) {
	return e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", e;
}({}), L = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, R = {
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
	GS: [
		"H",
		"h",
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
	"ku-SY": ["H", "hB"],
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
function ve(e, t) {
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "j") {
			let a = 0;
			for (; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			let o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = ye(t);
			for ((c == "H" || c == "k") && (s = 0); s-- > 0;) n += "a";
			for (; o-- > 0;) n = c + n;
		} else i === "J" ? n += "H" : n += i;
	}
	return n;
}
function ye(e) {
	let t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	let n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (R[r || ""] || R[n || ""] || R[`${n}-001`] || R["001"])[0];
}
var be = RegExp(`^${L.source}*`), xe = RegExp(`${L.source}*$`);
function z(e, t) {
	return {
		start: e,
		end: t
	};
}
var Se = !!Object.fromEntries, Ce = !!String.prototype.trimStart, we = !!String.prototype.trimEnd, B = Se ? Object.fromEntries : function(e) {
	let t = {};
	for (let [n, r] of e) t[n] = r;
	return t;
}, Te = Ce ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(be, "");
}, Ee = we ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(xe, "");
}, V = /* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function De(e, t) {
	return V.lastIndex = t, V.exec(e)[1] ?? "";
}
var Oe = class {
	message;
	position;
	locale;
	ignoreTag;
	requiresOtherClause;
	shouldParseSkeletons;
	constructor(e, t = {}) {
		this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	parse() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}
	parseMessage(e, t, n) {
		let r = [];
		for (; !this.isEOF();) {
			let i = this.char();
			if (i === 123) {
				let t = this.parseArgument(e, n);
				if (t.err) return t;
				r.push(t.val);
			} else if (i === 125 && e > 0) break;
			else if (i === 35 && (t === "plural" || t === "selectordinal")) {
				let e = this.clonePosition();
				this.bump(), r.push({
					type: T.pound,
					location: z(e, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(I.UNMATCHED_CLOSING_TAG, z(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && H(this.peek() || 0)) {
				let n = this.parseTag(e, t);
				if (n.err) return n;
				r.push(n.val);
			} else {
				let n = this.parseLiteral(e, t);
				if (n.err) return n;
				r.push(n.val);
			}
		}
		return {
			val: r,
			err: null
		};
	}
	parseTag(e, t) {
		let n = this.clonePosition();
		this.bump();
		let r = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: T.literal,
				value: `<${r}/>`,
				location: z(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			let i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			let a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !H(this.char())) return this.error(I.INVALID_TAG, z(o, this.clonePosition()));
				let e = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: T.tag,
						value: r,
						children: a,
						location: z(n, this.clonePosition())
					},
					err: null
				} : this.error(I.INVALID_TAG, z(o, this.clonePosition()))) : this.error(I.UNMATCHED_CLOSING_TAG, z(e, this.clonePosition()));
			} else return this.error(I.UNCLOSED_TAG, z(n, this.clonePosition()));
		} else return this.error(I.INVALID_TAG, z(n, this.clonePosition()));
	}
	parseTagName() {
		let e = this.offset();
		for (this.bump(); !this.isEOF() && Ae(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}
	parseLiteral(e, t) {
		let n = this.clonePosition(), r = "";
		for (;;) {
			let n = this.tryParseQuote(t);
			if (n) {
				r += n;
				continue;
			}
			let i = this.tryParseUnquoted(e, t);
			if (i) {
				r += i;
				continue;
			}
			let a = this.tryParseLeftAngleBracket();
			if (a) {
				r += a;
				continue;
			}
			break;
		}
		let i = z(n, this.clonePosition());
		return {
			val: {
				type: T.literal,
				value: r,
				location: i
			},
			err: null
		};
	}
	tryParseLeftAngleBracket() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !ke(this.peek() || 0)) ? (this.bump(), "<") : null;
	}
	tryParseQuote(e) {
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
		let t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			let e = this.char();
			if (e === 39) if (this.peek() === 39) t.push(39), this.bump();
			else {
				this.bump();
				break;
			}
			else t.push(e);
			this.bump();
		}
		return String.fromCodePoint(...t);
	}
	tryParseUnquoted(e, t) {
		if (this.isEOF()) return null;
		let n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), String.fromCodePoint(n));
	}
	parseArgument(e, t) {
		let n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, z(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(I.EMPTY_ARGUMENT, z(n, this.clonePosition()));
		let r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(I.MALFORMED_ARGUMENT, z(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, z(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: T.argument,
					value: r,
					location: z(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, z(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(I.MALFORMED_ARGUMENT, z(n, this.clonePosition()));
		}
	}
	parseIdentifierIfPossible() {
		let e = this.clonePosition(), t = this.offset(), n = De(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: z(e, this.clonePosition())
		};
	}
	parseArgumentOptions(e, t, n, r) {
		let i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(I.EXPECT_ARGUMENT_TYPE, z(i, o));
			case "number":
			case "date":
			case "time": {
				this.bumpSpace();
				let e = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					let t = this.clonePosition(), n = this.parseSimpleArgStyleIfPossible();
					if (n.err) return n;
					let r = Ee(n.val);
					if (r.length === 0) return this.error(I.EXPECT_ARGUMENT_STYLE, z(this.clonePosition(), this.clonePosition()));
					e = {
						style: r,
						styleLocation: z(t, this.clonePosition())
					};
				}
				let t = this.tryParseArgumentClose(r);
				if (t.err) return t;
				let i = z(r, this.clonePosition());
				if (e && e.style.startsWith("::")) {
					let t = Te(e.style.slice(2));
					if (a === "number") {
						let r = this.parseNumberSkeletonFromString(t, e.styleLocation);
						return r.err ? r : {
							val: {
								type: T.number,
								value: n,
								location: i,
								style: r.val
							},
							err: null
						};
					} else {
						if (t.length === 0) return this.error(I.EXPECT_DATE_TIME_SKELETON, i);
						let r = t;
						this.locale && (r = ve(t, this.locale));
						let o = {
							type: E.dateTime,
							pattern: r,
							location: e.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? ie(r) : {}
						};
						return {
							val: {
								type: a === "date" ? T.date : T.time,
								value: n,
								location: i,
								style: o
							},
							err: null
						};
					}
				}
				return {
					val: {
						type: a === "number" ? T.number : a === "date" ? T.date : T.time,
						value: n,
						location: i,
						style: e?.style ?? null
					},
					err: null
				};
			}
			case "plural":
			case "selectordinal":
			case "select": {
				let i = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(I.EXPECT_SELECT_ARGUMENT_OPTIONS, z(i, { ...i }));
				this.bumpSpace();
				let o = this.parseIdentifierIfPossible(), s = 0;
				if (a !== "select" && o.value === "offset") {
					if (!this.bumpIf(":")) return this.error(I.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, z(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					let e = this.tryParseDecimalInteger(I.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, I.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (e.err) return e;
					this.bumpSpace(), o = this.parseIdentifierIfPossible(), s = e.val;
				}
				let c = this.tryParsePluralOrSelectOptions(e, a, t, o);
				if (c.err) return c;
				let l = this.tryParseArgumentClose(r);
				if (l.err) return l;
				let u = z(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: T.select,
						value: n,
						options: B(c.val),
						location: u
					},
					err: null
				} : {
					val: {
						type: T.plural,
						value: n,
						options: B(c.val),
						offset: s,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: u
					},
					err: null
				};
			}
			default: return this.error(I.INVALID_ARGUMENT_TYPE, z(i, o));
		}
	}
	tryParseArgumentClose(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, z(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}
	parseSimpleArgStyleIfPossible() {
		let e = 0, t = this.clonePosition();
		for (; !this.isEOF();) switch (this.char()) {
			case 39: {
				this.bump();
				let e = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(I.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, z(e, this.clonePosition()));
				this.bump();
				break;
			}
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
	}
	parseNumberSkeletonFromString(e, t) {
		let n = [];
		try {
			n = oe(e);
		} catch {
			return this.error(I.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: E.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? he(n) : {}
			},
			err: null
		};
	}
	tryParsePluralOrSelectOptions(e, t, n, r) {
		let i = !1, a = [], o = /* @__PURE__ */ new Set(), { value: s, location: c } = r;
		for (;;) {
			if (s.length === 0) {
				let e = this.clonePosition();
				if (t !== "select" && this.bumpIf("=")) {
					let t = this.tryParseDecimalInteger(I.EXPECT_PLURAL_ARGUMENT_SELECTOR, I.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (t.err) return t;
					c = z(e, this.clonePosition()), s = this.message.slice(e.offset, this.offset());
				} else break;
			}
			if (o.has(s)) return this.error(t === "select" ? I.DUPLICATE_SELECT_ARGUMENT_SELECTOR : I.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
			s === "other" && (i = !0), this.bumpSpace();
			let r = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? I.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : I.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, z(this.clonePosition(), this.clonePosition()));
			let l = this.parseMessage(e + 1, t, n);
			if (l.err) return l;
			let u = this.tryParseArgumentClose(r);
			if (u.err) return u;
			a.push([s, {
				value: l.val,
				location: z(r, this.clonePosition())
			}]), o.add(s), this.bumpSpace(), {value: s, location: c} = this.parseIdentifierIfPossible();
		}
		return a.length === 0 ? this.error(t === "select" ? I.EXPECT_SELECT_ARGUMENT_SELECTOR : I.EXPECT_PLURAL_ARGUMENT_SELECTOR, z(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(I.MISSING_OTHER_CLAUSE, z(this.clonePosition(), this.clonePosition())) : {
			val: a,
			err: null
		};
	}
	tryParseDecimalInteger(e, t) {
		let n = 1, r = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (n = -1);
		let i = !1, a = 0;
		for (; !this.isEOF();) {
			let e = this.char();
			if (e >= 48 && e <= 57) i = !0, a = a * 10 + (e - 48), this.bump();
			else break;
		}
		let o = z(r, this.clonePosition());
		return i ? (a *= n, Number.isSafeInteger(a) ? {
			val: a,
			err: null
		} : this.error(t, o)) : this.error(e, o);
	}
	offset() {
		return this.position.offset;
	}
	isEOF() {
		return this.offset() === this.message.length;
	}
	clonePosition() {
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	}
	char() {
		let e = this.position.offset;
		if (e >= this.message.length) throw Error("out of bound");
		let t = this.message.codePointAt(e);
		if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
		return t;
	}
	error(e, t) {
		return {
			val: null,
			err: {
				kind: e,
				message: this.message,
				location: t
			}
		};
	}
	bump() {
		if (this.isEOF()) return;
		let e = this.char();
		e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
	}
	bumpIf(e) {
		if (this.message.startsWith(e, this.offset())) {
			for (let t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}
	bumpUntil(e) {
		let t = this.offset(), n = this.message.indexOf(e, t);
		return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
	}
	bumpTo(e) {
		if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
		for (e = Math.min(e, this.message.length);;) {
			let t = this.offset();
			if (t === e) break;
			if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
			if (this.bump(), this.isEOF()) break;
		}
	}
	bumpSpace() {
		for (; !this.isEOF() && je(this.char());) this.bump();
	}
	peek() {
		if (this.isEOF()) return null;
		let e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}
};
function H(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function ke(e) {
	return H(e) || e === 47;
}
function Ae(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function je(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function U(e) {
	e.forEach((e) => {
		if (delete e.location, j(e) || M(e)) for (let t in e.options) delete e.options[t].location, U(e.options[t].value);
		else O(e) && P(e.style) || (k(e) || A(e)) && F(e.style) ? delete e.style.location : N(e) && U(e.children);
	});
}
function Me(e, t = {}) {
	t = {
		shouldParseSkeletons: !0,
		requiresOtherClause: !0,
		...t
	};
	let n = new Oe(e, t).parse();
	if (n.err) {
		let e = SyntaxError(I[n.err.kind]);
		throw e.location = n.err.location, e.originalMessage = n.err.message, e;
	}
	return t?.captureLocation || U(n.val), n.val;
}
var W = function(e) {
	return e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API", e;
}({}), G = class extends Error {
	code;
	originalMessage;
	constructor(e, t, n) {
		super(e), this.code = t, this.originalMessage = n;
	}
	toString() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}
}, Ne = class extends G {
	constructor(e, t, n, r) {
		super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(n).join("\", \"")}"`, W.INVALID_VALUE, r);
	}
}, Pe = class extends G {
	constructor(e, t, n) {
		super(`Value for "${e}" must be of type ${t}`, W.INVALID_VALUE, n);
	}
}, Fe = class extends G {
	constructor(e, t) {
		super(`The intl string context variable "${e}" was not provided to the string "${t}"`, W.MISSING_VALUE, t);
	}
}, K = function(e) {
	return e[e.literal = 0] = "literal", e[e.object = 1] = "object", e;
}({});
function Ie(e) {
	return e.length < 2 ? e : e.reduce((e, t) => {
		let n = e[e.length - 1];
		return !n || n.type !== K.literal || t.type !== K.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function Le(e) {
	return typeof e == "function";
}
function q(e, t, n, r, i, a, o) {
	if (e.length === 1 && D(e[0])) return [{
		type: K.literal,
		value: e[0].value
	}];
	let s = [];
	for (let c of e) {
		if (D(c)) {
			s.push({
				type: K.literal,
				value: c.value
			});
			continue;
		}
		if (_e(c)) {
			typeof a == "number" && s.push({
				type: K.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		let { value: e } = c;
		if (!(i && e in i)) throw new Fe(e, o);
		let l = i[e];
		if (ge(c)) {
			(!l || typeof l == "string" || typeof l == "number" || typeof l == "bigint") && (l = typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? String(l) : ""), s.push({
				type: typeof l == "string" ? K.literal : K.object,
				value: l
			});
			continue;
		}
		if (k(c)) {
			let e = typeof c.style == "string" ? r.date[c.style] : F(c.style) ? c.style.parsedOptions : void 0;
			s.push({
				type: K.literal,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (A(c)) {
			let e = typeof c.style == "string" ? r.time[c.style] : F(c.style) ? c.style.parsedOptions : r.time.medium;
			s.push({
				type: K.literal,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (O(c)) {
			let e = typeof c.style == "string" ? r.number[c.style] : P(c.style) ? c.style.parsedOptions : void 0;
			if (e && e.scale) {
				let t = e.scale || 1;
				if (typeof l == "bigint") {
					if (!Number.isInteger(t)) throw TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);
					l *= BigInt(t);
				} else l *= t;
			}
			s.push({
				type: K.literal,
				value: n.getNumberFormat(t, e).format(l)
			});
			continue;
		}
		if (N(c)) {
			let { children: e, value: l } = c, u = i[l];
			if (!Le(u)) throw new Pe(l, "function", o);
			let d = u(q(e, t, n, r, i, a).map((e) => e.value));
			Array.isArray(d) || (d = [d]), s.push(...d.map((e) => ({
				type: typeof e == "string" ? K.literal : K.object,
				value: e
			})));
		}
		if (j(c)) {
			let e = l, a = (Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0) || c.options.other;
			if (!a) throw new Ne(c.value, l, Object.keys(c.options), o);
			s.push(...q(a.value, t, n, r, i));
			continue;
		}
		if (M(c)) {
			let e = `=${l}`, a = Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0;
			if (!a) {
				if (!Intl.PluralRules) throw new G("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", W.MISSING_INTL_API, o);
				let e = typeof l == "bigint" ? Number(l) : l, r = n.getPluralRules(t, { type: c.pluralType }).select(e - (c.offset || 0));
				a = (Object.prototype.hasOwnProperty.call(c.options, r) ? c.options[r] : void 0) || c.options.other;
			}
			if (!a) throw new Ne(c.value, l, Object.keys(c.options), o);
			let u = typeof l == "bigint" ? Number(l) : l;
			s.push(...q(a.value, t, n, r, i, u - (c.offset || 0)));
			continue;
		}
	}
	return Ie(s);
}
function Re(e, t) {
	return t ? {
		...e,
		...t,
		...Object.keys(e).reduce((n, r) => (n[r] = {
			...e[r],
			...t[r]
		}, n), {})
	} : e;
}
function ze(e, t) {
	return t ? Object.keys(e).reduce((n, r) => (n[r] = Re(e[r], t[r]), n), { ...e }) : e;
}
function J(e) {
	return { create() {
		return {
			get(t) {
				return e[t];
			},
			set(t, n) {
				e[t] = n;
			}
		};
	} };
}
function Be(e = {
	number: {},
	dateTime: {},
	pluralRules: {}
}) {
	return {
		getNumberFormat: l((...e) => new Intl.NumberFormat(...e), {
			cache: J(e.number),
			strategy: y.variadic
		}),
		getDateTimeFormat: l((...e) => new Intl.DateTimeFormat(...e), {
			cache: J(e.dateTime),
			strategy: y.variadic
		}),
		getPluralRules: l((...e) => new Intl.PluralRules(...e), {
			cache: J(e.pluralRules),
			strategy: y.variadic
		})
	};
}
var Y = class e {
	ast;
	locales;
	resolvedLocale;
	formatters;
	formats;
	message;
	formatterCache = {
		number: {},
		dateTime: {},
		pluralRules: {}
	};
	constructor(t, n = e.defaultLocale, r, i) {
		if (this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
			if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			let { ...n } = i || {};
			this.ast = e.__parse(t, {
				...n,
				locale: this.resolvedLocale
			});
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = ze(e.formats, r), this.formatters = i && i.formatters || Be(this.formatterCache);
	}
	format = (e) => {
		let t = this.formatToParts(e);
		if (t.length === 1) return t[0].value;
		let n = t.reduce((e, t) => (!e.length || t.type !== K.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e), []);
		return n.length <= 1 ? n[0] || "" : n;
	};
	formatToParts = (e) => q(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message);
	resolvedOptions = () => ({ locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0] });
	getAst = () => this.ast;
	static memoizedDefaultLocale = null;
	static get defaultLocale() {
		return e.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale, e.memoizedDefaultLocale;
	}
	static resolveLocale = (e) => {
		if (Intl.Locale === void 0) return;
		let t = Intl.NumberFormat.supportedLocalesOf(e);
		return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
	};
	static __parse = Me;
	static formats = {
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
	};
};
function Ve(...[e, t, n, i]) {
	if (Array.isArray(t)) throw new b(x.INVALID_MESSAGE, void 0);
	if (typeof t == "object") throw new b(x.INSUFFICIENT_PATH, void 0);
	if (typeof t == "string") {
		let e = function(e, t) {
			return t || /'[{}]/.test(e) ? void 0 : e;
		}(t, n);
		if (e) return e;
	}
	let { cache: a, formats: o, formatters: s, globalFormats: c, locale: l, timeZone: u } = i, d;
	s.getMessageFormat ||= function(e, t) {
		return S(((...e) => new Y(e[0], e[1], e[2], {
			formatters: t,
			...e[3]
		})), e.message);
	}(a, s);
	try {
		d = s.getMessageFormat(t, l, function(e, t, n) {
			let r = Y.formats.date, i = Y.formats.time, a = {
				...e?.dateTime,
				...t?.dateTime
			}, o = {
				date: {
					...r,
					...a
				},
				time: {
					...i,
					...a
				},
				number: {
					...e?.number,
					...t?.number
				}
			};
			return n && ["date", "time"].forEach(((e) => {
				let t = o[e];
				for (let [e, r] of Object.entries(t)) t[e] = {
					timeZone: n,
					...r
				};
			})), o;
		}(c, o, u), { formatters: {
			...s,
			getDateTimeFormat: (e, t) => s.getDateTimeFormat(e, {
				...t,
				timeZone: t?.timeZone ?? u
			})
		} });
	} catch {
		throw new b(x.INVALID_MESSAGE, void 0);
	}
	let f = d.format(n);
	return r(f) || Array.isArray(f) || typeof f == "string" ? f : String(f);
}
Ve.raw = !0;
function X(...e) {
	return e.filter(Boolean).join(".");
}
function He(e) {
	return X(e.namespace, e.key);
}
function Ue(e) {
	console.error(e);
}
function Z(e, t, n, r) {
	let i = X(r, n);
	if (!t) throw Error(i);
	let a = t;
	return n.split(".").forEach(((t) => {
		let n = a[t];
		if (t == null || n == null) throw Error(i + ` (${e})`);
		a = n;
	})), a;
}
function We(e) {
	let n = function(e, t, n) {
		try {
			if (!t) throw Error(void 0);
			let r = n ? Z(e, t, n) : t;
			if (!r) throw Error(n);
			return r;
		} catch (e) {
			return new b(x.MISSING_MESSAGE, e.message);
		}
	}(e.locale, e.messages, e.namespace);
	return function({ cache: e, formats: n, formatters: i, getMessageFallback: a = He, locale: o, messagesOrError: s, namespace: c, onError: l, timeZone: u }) {
		let d = s instanceof b;
		function f(e, t, n, r) {
			let i = new b(t, n);
			return l(i), r ?? a({
				error: i,
				key: e,
				namespace: c
			});
		}
		function p(p, m, h, g) {
			let _ = g, v;
			if (d) {
				if (!_) return l(s), a({
					error: s,
					key: p,
					namespace: c
				});
				v = _;
			} else {
				let e = s;
				try {
					v = Z(o, e, p, c);
				} catch (e) {
					if (!_) return f(p, x.MISSING_MESSAGE, e.message, _);
					v = _;
				}
			}
			try {
				return Ve(X(c, p), v, m && function(e) {
					let n = {};
					return Object.keys(e).forEach(((i) => {
						let a = 0, o = e[i], s;
						s = typeof o == "function" ? (e) => {
							let n = o(e);
							return r(n) ? t(n, { key: i + a++ }) : n;
						} : o, n[i] = s;
					})), n;
				}(m), {
					cache: e,
					formatters: i,
					globalFormats: n,
					formats: h,
					locale: o,
					timeZone: u
				});
			} catch (e) {
				let t, n;
				return e instanceof b ? (t = e.code, n = e.originalMessage) : (t = x.FORMATTING_ERROR, n = e.message), f(p, t, n, _);
			}
		}
		function m(e, t, n, r) {
			let i = p(e, t, n, r);
			return typeof i == "string" ? i : f(e, x.INVALID_MESSAGE, void 0);
		}
		return m.rich = p, m.markup = (e, t, n, r) => p(e, t, n, r), m.raw = (e) => {
			if (d) return l(s), a({
				error: s,
				key: e,
				namespace: c
			});
			let t = s;
			try {
				return Z(o, t, e, c);
			} catch (t) {
				return f(e, x.MISSING_MESSAGE, t.message);
			}
		}, m.has = (e) => {
			if (d) return !1;
			try {
				return Z(o, s, e, c), !0;
			} catch {
				return !1;
			}
		}, m;
	}({
		...e,
		messagesOrError: n
	});
}
function Ge(e, t) {
	return e === t ? void 0 : e.slice((t + ".").length);
}
var Q = 86400;
7 * Q, 365 * Q;
function Ke({ formats: e, getMessageFallback: t, messages: n, onError: r, ...i }) {
	return {
		...i,
		formats: e || void 0,
		messages: n || void 0,
		onError: r || Ue,
		getMessageFallback: t || He
	};
}
var $ = n(void 0);
function qe({ children: e, formats: t, getMessageFallback: n, locale: r, messages: i, now: c, onError: l, timeZone: u }) {
	let d = a($), f = o((() => d?.cache || te()), [r, d?.cache]), p = o((() => d?.formatters || ne(f)), [f, d?.formatters]), m = o((() => ({
		...Ke({
			locale: r,
			formats: t === void 0 ? d?.formats : t,
			getMessageFallback: n || d?.getMessageFallback,
			messages: i === void 0 ? d?.messages : i,
			now: c || d?.now,
			onError: l || d?.onError,
			timeZone: u || d?.timeZone
		}),
		formatters: p,
		cache: f
	})), [
		f,
		t,
		p,
		n,
		r,
		i,
		c,
		l,
		d,
		u
	]);
	return s($.Provider, {
		value: m,
		children: e
	});
}
function Je() {
	let e = a($);
	if (!e) throw Error(void 0);
	return e;
}
var Ye = !1, Xe = typeof window > "u";
function Ze(e) {
	return function(e, t, n) {
		let { cache: r, formats: i, formatters: a, getMessageFallback: s, locale: c, onError: l, timeZone: u } = Je(), d = e[n], f = Ge(t, n);
		return u || Ye || !Xe || (Ye = !0, l(new b(x.ENVIRONMENT_FALLBACK, void 0))), o((() => We({
			cache: r,
			formatters: a,
			getMessageFallback: s,
			messages: d,
			namespace: f,
			onError: l,
			formats: i,
			locale: c,
			timeZone: u
		})), [
			r,
			a,
			s,
			d,
			f,
			l,
			i,
			c,
			u
		]);
	}({ "!": Je().messages }, e ? `!.${e}` : "!", "!");
}
function Qe() {
	let e = Ze("faq-list");
	return s("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: [
			{
				q: e("whatIsI18nBenchmark"),
				a: e("whatIsI18nBenchmarkAnswer")
			},
			{
				q: e("howAreBenchmarksConducted"),
				a: e("weRunStandardizedTestsIn")
			},
			{
				q: e("whichLibrariesAreCurrentlySupported"),
				a: e("weSupportReactI18nextReact")
			},
			{
				q: e("canISubmitMyOwn"),
				a: e("yesCommunityBenchmarkSubmissionsAre")
			},
			{
				q: e("howOftenAreBenchmarksUpdated"),
				a: e("weReRunAllBenchmarks")
			},
			{
				q: e("isTheDataReliable"),
				a: e("weFollowRigorousStatisticalMethodology")
			},
			{
				q: e("doYouOfferConsultingServices"),
				a: e("yesOurEnterprisePlanIncludes")
			},
			{
				q: e("howCanIContribute"),
				a: e("thereAreManyWaysTo")
			}
		].map((e) => c("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [s("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: e.q
			}), s("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: e.a
			})]
		}, e.q))
	});
}
var $e = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
};
async function et(e, t = ["shared", "route"]) {
	let n = {};
	for (let r of t) try {
		let t = await $e(Object.assign({
			"../messages/de/about.ts": () => import("./about-DQHdxTVo.js"),
			"../messages/de/blog.ts": () => import("./blog-C-3ekatC.js"),
			"../messages/de/careers.ts": () => import("./careers-CkORQ7wu.js"),
			"../messages/de/contact.ts": () => import("./contact-5qpzjLEk.js"),
			"../messages/de/faq.ts": () => import("./faq-BqjN2Zk7.js"),
			"../messages/de/home.ts": () => import("./home-C4m78V0E.js"),
			"../messages/de/pricing.ts": () => import("./pricing-CGjzxJ6Q.js"),
			"../messages/de/products.ts": () => import("./products-DMaD5TAO.js"),
			"../messages/de/route.ts": () => import("./route-DUTKSFsr.js"),
			"../messages/de/settings.ts": () => import("./settings-BG1HSlcs.js"),
			"../messages/de/shared.ts": () => import("./shared-Bk6vURr0.js"),
			"../messages/de/team.ts": () => import("./team-CxU_F1jv.js"),
			"../messages/en/about-grid.ts": () => import("./about-grid-B63VEkSj.js"),
			"../messages/en/about-header.ts": () => import("./about-header-BXgTRWCz.js"),
			"../messages/en/about.ts": () => import("./about-D4PZAQ0A.js"),
			"../messages/en/blog-header.ts": () => import("./blog-header-DeZRrdXp.js"),
			"../messages/en/blog-list.ts": () => import("./blog-list-Bvd-60gD.js"),
			"../messages/en/blog.ts": () => import("./blog-DgFJ8tux.js"),
			"../messages/en/careers-benefits.ts": () => import("./careers-benefits-ly-Cf7G4.js"),
			"../messages/en/careers-header.ts": () => import("./careers-header-BcYBdUQF.js"),
			"../messages/en/careers.ts": () => import("./careers-CvSo1APQ.js"),
			"../messages/en/contact-form.ts": () => import("./contact-form-CpTsppWA.js"),
			"../messages/en/contact-header.ts": () => import("./contact-header-IbpBdlru.js"),
			"../messages/en/contact.ts": () => import("./contact-C6Fe257m.js"),
			"../messages/en/faq-header1.ts": () => import("./faq-header1-Ct8huWET.js"),
			"../messages/en/faq-list.ts": () => import("./faq-list-ggzdxJ8Z.js"),
			"../messages/en/faq.ts": () => import("./faq-BsMSbzvB.js"),
			"../messages/en/footer.ts": () => import("./footer-Ckh5TFSl.js"),
			"../messages/en/header.ts": () => import("./header-D0iEvYw-.js"),
			"../messages/en/hero.ts": () => import("./hero-BGAibBLi.js"),
			"../messages/en/home.ts": () => import("./home-a_5NQyF5.js"),
			"../messages/en/open-positions.ts": () => import("./open-positions-CwoAiY4e.js"),
			"../messages/en/pricing.ts": () => import("./pricing-C4tkpxF6.js"),
			"../messages/en/products.ts": () => import("./products-De6MPABv.js"),
			"../messages/en/results-table.ts": () => import("./results-table-CVn3WP9v.js"),
			"../messages/en/route.ts": () => import("./route-ILcLjsev.js"),
			"../messages/en/settings.ts": () => import("./settings-DRtS6bq7.js"),
			"../messages/en/shared.ts": () => import("./shared-BxFI-gLk.js"),
			"../messages/en/team.ts": () => import("./team-IrugJ5zd.js"),
			"../messages/en/theme-toggle.ts": () => import("./theme-toggle-DQEuGV2G.js"),
			"../messages/en/understanding-impact.ts": () => import("./understanding-impact-B4R3WQG3.js"),
			"../messages/en/what-we-measure.ts": () => import("./what-we-measure-Bsn0qti9.js"),
			"../messages/en/why-it-matters.ts": () => import("./why-it-matters-0XE5gkrV.js"),
			"../messages/es/about.ts": () => import("./about-5f-GEIc4.js"),
			"../messages/es/blog.ts": () => import("./blog-Bkv9SCDy.js"),
			"../messages/es/careers.ts": () => import("./careers-Dfo_zoik.js"),
			"../messages/es/contact.ts": () => import("./contact-DpJ7kbmg.js"),
			"../messages/es/faq.ts": () => import("./faq-Cb-TcLjY.js"),
			"../messages/es/home.ts": () => import("./home-BqgfV6B3.js"),
			"../messages/es/pricing.ts": () => import("./pricing-D-PNrFNU.js"),
			"../messages/es/products.ts": () => import("./products-weSa1X5f.js"),
			"../messages/es/route.ts": () => import("./route-Cr5uZ2ch.js"),
			"../messages/es/settings.ts": () => import("./settings-CZeNOtVs.js"),
			"../messages/es/shared.ts": () => import("./shared-DXEA8vyV.js"),
			"../messages/es/team.ts": () => import("./team-CJqfUL0M.js"),
			"../messages/fr/about.ts": () => import("./about-B1kjB4BB.js"),
			"../messages/fr/blog.ts": () => import("./blog-Bcf8TGHI.js"),
			"../messages/fr/careers.ts": () => import("./careers-dZhbODRN.js"),
			"../messages/fr/contact.ts": () => import("./contact-5ulM5cO8.js"),
			"../messages/fr/faq.ts": () => import("./faq-BAfi-JU3.js"),
			"../messages/fr/home.ts": () => import("./home-Bpsbi3Wy.js"),
			"../messages/fr/pricing.ts": () => import("./pricing-R2W80PDv.js"),
			"../messages/fr/products.ts": () => import("./products-DkukmQ16.js"),
			"../messages/fr/route.ts": () => import("./route-BOZavgtf.js"),
			"../messages/fr/settings.ts": () => import("./settings-CvImbSc0.js"),
			"../messages/fr/shared.ts": () => import("./shared-CDaABxgW.js"),
			"../messages/fr/team.ts": () => import("./team-BbpKplaf.js"),
			"../messages/it/about.ts": () => import("./about-BZNA8_oR.js"),
			"../messages/it/blog.ts": () => import("./blog-BN8-gTcW.js"),
			"../messages/it/careers.ts": () => import("./careers-526tU4u2.js"),
			"../messages/it/contact.ts": () => import("./contact-bihRJWYD.js"),
			"../messages/it/faq.ts": () => import("./faq-BWeeaMka.js"),
			"../messages/it/home.ts": () => import("./home-CxVANSx6.js"),
			"../messages/it/pricing.ts": () => import("./pricing-bZMbq0P1.js"),
			"../messages/it/products.ts": () => import("./products-DGbVjMmf.js"),
			"../messages/it/route.ts": () => import("./route-ZiUFHRYg.js"),
			"../messages/it/settings.ts": () => import("./settings-6QR0bO2n.js"),
			"../messages/it/shared.ts": () => import("./shared-C-5vf25y.js"),
			"../messages/it/team.ts": () => import("./team-_j8u7E8p.js"),
			"../messages/ja/about.ts": () => import("./about-Cowjo3D5.js"),
			"../messages/ja/blog.ts": () => import("./blog-ashYzBtK.js"),
			"../messages/ja/careers.ts": () => import("./careers-CP0Nv3bf.js"),
			"../messages/ja/contact.ts": () => import("./contact-BqLC1v9p.js"),
			"../messages/ja/faq.ts": () => import("./faq-BB2FDJer.js"),
			"../messages/ja/home.ts": () => import("./home-C9dUnzw2.js"),
			"../messages/ja/pricing.ts": () => import("./pricing-DGCDqyAN.js"),
			"../messages/ja/products.ts": () => import("./products-CjV2FgcI.js"),
			"../messages/ja/route.ts": () => import("./route-B8Tl6rhi.js"),
			"../messages/ja/settings.ts": () => import("./settings-BtWO8ADO.js"),
			"../messages/ja/shared.ts": () => import("./shared-BArBMb89.js"),
			"../messages/ja/team.ts": () => import("./team-DJLqDYqP.js"),
			"../messages/ko/about.ts": () => import("./about-CGUwvuz1.js"),
			"../messages/ko/blog.ts": () => import("./blog-CQNqP_lg.js"),
			"../messages/ko/careers.ts": () => import("./careers-2DWI7tZW.js"),
			"../messages/ko/contact.ts": () => import("./contact-BSHG1Ixm.js"),
			"../messages/ko/faq.ts": () => import("./faq-DRwVBtKr.js"),
			"../messages/ko/home.ts": () => import("./home-FKgRHNSD.js"),
			"../messages/ko/pricing.ts": () => import("./pricing-BxyzBYn_.js"),
			"../messages/ko/products.ts": () => import("./products-Csdox0XV.js"),
			"../messages/ko/route.ts": () => import("./route-BMJWUrHZ.js"),
			"../messages/ko/settings.ts": () => import("./settings-C6YM33uo.js"),
			"../messages/ko/shared.ts": () => import("./shared-CWCiMQGT.js"),
			"../messages/ko/team.ts": () => import("./team-7CT_kFRa.js"),
			"../messages/pt/about.ts": () => import("./about-BEQFK3J7.js"),
			"../messages/pt/blog.ts": () => import("./blog-B7UQdQaN.js"),
			"../messages/pt/careers.ts": () => import("./careers-CN6T0YZ5.js"),
			"../messages/pt/contact.ts": () => import("./contact-CBuLRXlW.js"),
			"../messages/pt/faq.ts": () => import("./faq-DPsZpj5F.js"),
			"../messages/pt/home.ts": () => import("./home-CaPmFDI1.js"),
			"../messages/pt/pricing.ts": () => import("./pricing-_t3lmsnu.js"),
			"../messages/pt/products.ts": () => import("./products-CfhbfdWP.js"),
			"../messages/pt/route.ts": () => import("./route-DYkQP7sw.js"),
			"../messages/pt/settings.ts": () => import("./settings-BHiRRDKr.js"),
			"../messages/pt/shared.ts": () => import("./shared-BmyynfY1.js"),
			"../messages/pt/team.ts": () => import("./team-BSHknkrY.js"),
			"../messages/ru/about.ts": () => import("./about-C-c-xchh.js"),
			"../messages/ru/blog.ts": () => import("./blog-DSxX-vsf.js"),
			"../messages/ru/careers.ts": () => import("./careers-CxtaYHSk.js"),
			"../messages/ru/contact.ts": () => import("./contact-EvWJ3u7-.js"),
			"../messages/ru/faq.ts": () => import("./faq-DLC_H0vc.js"),
			"../messages/ru/home.ts": () => import("./home-2DYlSSbw.js"),
			"../messages/ru/pricing.ts": () => import("./pricing-Ftl6lFmG.js"),
			"../messages/ru/products.ts": () => import("./products-Dz4IM3MA.js"),
			"../messages/ru/route.ts": () => import("./route-jA9tAS5Y.js"),
			"../messages/ru/settings.ts": () => import("./settings-LmRKCjre.js"),
			"../messages/ru/shared.ts": () => import("./shared-DOJW4Wit.js"),
			"../messages/ru/team.ts": () => import("./team-BrhG530k.js"),
			"../messages/zh/about.ts": () => import("./about-e4Ffkn9W.js"),
			"../messages/zh/blog.ts": () => import("./blog-qk8rOxnx.js"),
			"../messages/zh/careers.ts": () => import("./careers-BPAgogwM.js"),
			"../messages/zh/contact.ts": () => import("./contact-DSi7OSjf.js"),
			"../messages/zh/faq.ts": () => import("./faq-fsx3SnN3.js"),
			"../messages/zh/home.ts": () => import("./home-gczhCSAR.js"),
			"../messages/zh/pricing.ts": () => import("./pricing-POkOUtzZ.js"),
			"../messages/zh/products.ts": () => import("./products-DEC6ljgI.js"),
			"../messages/zh/route.ts": () => import("./route-fud71CG8.js"),
			"../messages/zh/settings.ts": () => import("./settings-BOMsFHH-.js"),
			"../messages/zh/shared.ts": () => import("./shared-B5KVFByD.js"),
			"../messages/zh/team.ts": () => import("./team-DsMdjPiN.js")
		}), `../messages/${e}/${r}.ts`, 4);
		Object.assign(n, t.default);
	} catch {
		console.warn(`Could not load namespace ${r} for locale ${e}`);
	}
	return n;
}
var tt = et("en");
function nt({ children: t }) {
	let n = i(tt);
	return s(e.Suspense, {
		fallback: null,
		children: s(qe, {
			messages: n,
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function rt() {
	return s(nt, { children: s(Qe, {}) });
}
export { rt as default };
var e = {
	"about-header": {
		aboutThisBenchmark: "Sobre este benchmark",
		thisIsAnOpenSource: "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas."
	},
	"about-grid": {
		whyThisExists: "Por qué existe",
		choosingAnI18nLibraryIs: "Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo traslada el coste? Este benchmark responde a estas preguntas con datos reales.",
		methodology: "Metodología",
		theSame10PageApp: "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en un hardware consistente para garantizar resultados reproducibles."
	},
	"what-we-measure": {
		bundleSizeImpact: "Impacto en el tamaño del bundle",
		theAdditionalJavascriptBytesSent: "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluye la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.",
		renderingOverhead: "Sobrecarga de renderizado",
		howMuchExtraTimeThe: "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.",
		hydrationCost: "Coste de hidratación",
		duringSsrTranslationDataIs: "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.",
		lazyLoadingEffectiveness: "Eficacia de la carga diferida",
		whetherSplittingTranslationsByRoute: "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).",
		localeSwitchSpeed: "Velocidad de cambio de idioma",
		howFastTheAppCan: "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.",
		whatWeMeasure: "Qué medimos"
	}
};
export { e as default };
var e = {
	"about-header": {
		aboutThisBenchmark: "À propos de ce benchmark",
		thisIsAnOpenSource: "Il s'agit d'une application de test open source, pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques."
	},
	"about-grid": {
		whyThisExists: "Pourquoi cela existe",
		choosingAnI18nLibraryIs: "Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.",
		methodology: "Méthodologie",
		theSame10PageApp: "La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles."
	},
	"what-we-measure": {
		bundleSizeImpact: "Impact sur la taille du bundle",
		theAdditionalJavascriptBytesSent: "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.",
		renderingOverhead: "Surcharge de rendu",
		howMuchExtraTimeThe: "Combien de temps supplémentaire la bibliothèque ajoute au suite de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.",
		hydrationCost: "Coût d'hydratation",
		duringSsrTranslationDataIs: "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment en que la page devient interactive.",
		lazyLoadingEffectiveness: "Efficacité du chargement différé",
		whetherSplittingTranslationsByRoute: "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).",
		localeSwitchSpeed: "Vitesse de changement de langue",
		howFastTheAppCan: "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
		whatWeMeasure: "Ce que nous mesurons"
	}
};
export { e as default };
var e = {
	"about-header": {
		aboutThisBenchmark: "Sobre este benchmark",
		thisIsAnOpenSource: "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React realista e de várias páginas onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas."
	},
	"about-grid": {
		whyThisExists: "Por que isso existe",
		choosingAnI18nLibraryIs: "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao pacote? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento tardio realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.",
		methodology: "Metodologia",
		theSame10PageApp: "O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis."
	},
	"what-we-measure": {
		bundleSizeImpact: "Impacto no tamanho do bundle",
		theAdditionalJavascriptBytesSent: "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
		renderingOverhead: "Sobrecarga de renderização",
		howMuchExtraTimeThe: "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.",
		hydrationCost: "Costo de hidratação",
		duringSsrTranslationDataIs: "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.",
		lazyLoadingEffectiveness: "Eficácia do carregamento lento",
		whetherSplittingTranslationsByRoute: "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).",
		localeSwitchSpeed: "Velocidade de troca de idioma",
		howFastTheAppCan: "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.",
		whatWeMeasure: "O que medimos"
	}
};
export { e as default };
var e = {
	"about-header": {
		aboutThisBenchmark: "Informazioni su questo benchmark",
		thisIsAnOpenSource: "Questa è un'applicazione di test open-source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'applicazione React multi-pagina realistica dove diverse librerie i18n possono essere integrate e mesurate in condizioni identiche."
	},
	"about-grid": {
		whyThisExists: "Perché esiste questo progetto",
		choosingAnI18nLibraryIs: "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.",
		methodology: "Metodologia",
		theSame10PageApp: "La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili."
	},
	"what-we-measure": {
		bundleSizeImpact: "Impatto sulla dimensione del bundle",
		theAdditionalJavascriptBytesSent: "I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.",
		renderingOverhead: "Sovrapprezzo di rendering",
		howMuchExtraTimeThe: "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.",
		hydrationCost: "Costo di idratazione",
		duringSsrTranslationDataIs: "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.",
		lazyLoadingEffectiveness: "Efficacia del caricamento pigro",
		whetherSplittingTranslationsByRoute: "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).",
		localeSwitchSpeed: "Velocità di cambio lingua",
		howFastTheAppCan: "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.",
		whatWeMeasure: "Cosa misuriamo"
	}
};
export { e as default };
var e = {
	"about-header": {
		aboutThisBenchmark: "Об этом бенчмарке",
		thisIsAnOpenSource: "Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях."
	},
	"about-grid": {
		whyThisExists: "Почему это существует",
		choosingAnI18nLibraryIs: "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.",
		methodology: "Методология",
		theSame10PageApp: "Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов."
	},
	"what-we-measure": {
		bundleSizeImpact: "Влияние на размер бандла",
		theAdditionalJavascriptBytesSent: "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.",
		renderingOverhead: "Затраты на рендеринг",
		howMuchExtraTimeThe: "Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.",
		hydrationCost: "Стоимость гидратации",
		duringSsrTranslationDataIs: "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.",
		lazyLoadingEffectiveness: "Эффективность ленивой загрузки",
		whetherSplittingTranslationsByRoute: "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).",
		localeSwitchSpeed: "Скорость переключения языка",
		howFastTheAppCan: "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
		whatWeMeasure: "Что мы измеряем"
	}
};
export { e as default };
var e = {
	"about-header": {
		aboutThisBenchmark: "이 벤치마크에 대하여",
		thisIsAnOpenSource: "이것은 제품이나 회사가 아닌 오픈 소스 테스트 애플리케이션입니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다."
	},
	"about-grid": {
		whyThisExists: "이것이 존재하는 이유",
		choosingAnI18nLibraryIs: "i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API의 사용 편의성에 중점을 두지만, 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 무게를 더하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 주는가? 지연 로딩이 실제로 도움이 되는가 아니면 단순히 비용을 나중으로 미루는 것인가? 이 벤치마크는 실제 데이터를 사용하여 이러한 질문에 답합니다.",
		methodology: "방법론",
		theSame10PageApp: "동일한 10페이지 앱이 라이브러리마다 한 번씩 구축됩니다. rollup-plugin-visualizer를 통해 프로덕션 번들을 측정하고, 로딩 지표에 대한 Lighthouse 감사를 실행하며, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다."
	},
	"what-we-measure": {
		bundleSizeImpact: "번들 크기 영향",
		theAdditionalJavascriptBytesSent: "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
		renderingOverhead: "렌더링 오버헤드",
		howMuchExtraTimeThe: "라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 일으킬 수 있습니다.",
		hydrationCost: "수화 비용",
		duringSsrTranslationDataIs: "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 수화 속도를 늦춥니다.",
		lazyLoadingEffectiveness: "지연 로딩 효과",
		whetherSplittingTranslationsByRoute: "경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 측정합니다.",
		localeSwitchSpeed: "로케일 전환 속도",
		howFastTheAppCan: "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환될 수 있는지를 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트가 포함됩니다.",
		whatWeMeasure: "측정 항목"
	}
};
export { e as default };
var e = {
	"about-header": {
		aboutThisBenchmark: "このベンチマークについて",
		thisIsAnOpenSource: "これはオープンソースのテストアプリケーションであり、製品や会社ではありません。その唯一の目的は、Identicalな条件下で異なるi18nライブラリを統合して測定できる、現実的な多ページReactアプリを提供することです。"
	},
	"about-grid": {
		whyThisExists: "なぜこれが存在するのか",
		choosingAnI18nLibraryIs: "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使い勝手に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を加えるか？ 数千の翻訳キーがロードされたときにレンダリングにどう影響するか？ 遅延ロードは実際に役立つのか、それともコストを後回しにしているだけなのか？ このベンチマークは、実際のデータを使用してこれらの質問に答えます。",
		methodology: "方法論",
		theSame10PageApp: "同じ10ページのアプリがライブラリごとに1回構築されます。 rollup-plugin-visualizerを通じて生産バンドルを測定し、ロード指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を保証するために、一貫したハードウェアのCIで実行されます。"
	},
	"what-we-measure": {
		bundleSizeImpact: "バンドルサイズへの影響",
		theAdditionalJavascriptBytesSent: "i18nライブラリと翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト数です。これは、低速なネットワークでのダウンロード時間に直接影響します。",
		renderingOverhead: "レンダリングオーバーヘッド",
		howMuchExtraTimeThe: "ライブラリがReactのレンダリングサイクルに追加する時間です。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要なリレンダリングを引き起こす可能性があります。",
		hydrationCost: "ハイドレーションコスト",
		duringSsrTranslationDataIs: "SSR中、翻訳データはHTMLにシリアル化されます。大規模な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。",
		lazyLoadingEffectiveness: "遅延ロードの有効性",
		whetherSplittingTranslationsByRoute: "ルートや名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのかを測定します。",
		localeSwitchSpeed: "ロケール切り替え速度",
		howFastTheAppCan: "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるかを測定します。これには、新しい翻訳の取得、コンポーネントのリレンダリング、DOMの更新が含まれます。",
		whatWeMeasure: "測定項目"
	}
};
export { e as default };
var e = {
	"about-header": {
		aboutThisBenchmark: "About This Benchmark",
		thisIsAnOpenSource: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	},
	"about-grid": {
		whyThisExists: "Why This Exists",
		choosingAnI18nLibraryIs: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		methodology: "Methodology",
		theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
	},
	"what-we-measure": {
		bundleSizeImpact: "Bundle size impact",
		theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		renderingOverhead: "Rendering overhead",
		howMuchExtraTimeThe: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		hydrationCost: "Hydration cost",
		duringSsrTranslationDataIs: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		lazyLoadingEffectiveness: "Lazy loading effectiveness",
		whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
		localeSwitchSpeed: "Locale switch speed",
		howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
		whatWeMeasure: "What We Measure"
	}
};
export { e as default };
var e = {
	"about-header": {
		aboutThisBenchmark: "Über diesen Benchmark",
		thisIsAnOpenSource: "Dies ist eine Open-Source-Testanwendung — kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können."
	},
	"about-grid": {
		whyThisExists: "Warum dieses Projekt existiert",
		choosingAnI18nLibraryIs: "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt sie sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading wirklich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.",
		methodology: "Methodik",
		theSame10PageApp: "Dieselbe 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Gebietsschemawechsel zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten."
	},
	"what-we-measure": {
		bundleSizeImpact: "Auswirkung auf die Bundle-Größe",
		theAdditionalJavascriptBytesSent: "Die zusätzlichen JavaScript-Bytes, die an die Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit bei langsamen Netzwerken aus.",
		renderingOverhead: "Rendering-Overhead",
		howMuchExtraTimeThe: "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontext-Provider injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.",
		hydrationCost: "Hydratisierungskosten",
		duringSsrTranslationDataIs: "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen den HTML-Payload und verlangsamen die Hydratisierung — den Moment, in dem die Seite interaktiv wird.",
		lazyLoadingEffectiveness: "Effektivität von Lazy Loading",
		whetherSplittingTranslationsByRoute: "Ob das Aufteilen von Übersetzungen nach Route oder Namensraum die initiale Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).",
		localeSwitchSpeed: "Geschwindigkeit des Gebietsschemawechsels",
		howFastTheAppCan: "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.",
		whatWeMeasure: "Was wir messen"
	}
};
export { e as default };
var e = {
	"about-header": {
		aboutThisBenchmark: "关于此基准测试",
		thisIsAnOpenSource: "这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。"
	},
	"about-grid": {
		whyThisExists: "为什么存在这个项目",
		choosingAnI18nLibraryIs: "选择 i18n 库是一个具有长期影响的架构决策。大多数比较都集中在 API 的易用性上，但很少有人衡量性能成本：库为捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。",
		methodology: "方法论",
		theSame10PageApp: "同一个 10 页应用为每个库构建一次。我们衡量生产捆绑包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在硬件一致的 CI 中运行，以确保结果可重现。"
	},
	"what-we-measure": {
		bundleSizeImpact: "捆绑包大小影响",
		theAdditionalJavascriptBytesSent: "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。",
		renderingOverhead: "渲染开销",
		howMuchExtraTimeThe: "库为 React 的渲染循环增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树不必要的重新渲染。",
		hydrationCost: "水合成本",
		duringSsrTranslationDataIs: "在 SSR 期间，翻译数据被序列化为 HTML。大型字典会增加 HTML 负载并减慢水合速度——即页面变得可交互的瞬间。",
		lazyLoadingEffectiveness: "延迟加载有效性",
		whetherSplittingTranslationsByRoute: "按路由或命名空间拆分翻译是否真的减少了初始加载，以及它引入了哪些权衡（瀑布式请求、FOUC、缓存复杂性）。",
		localeSwitchSpeed: "语言环境切换速度",
		howFastTheAppCan: "应用程序在运行时从一种语言切换到另一种语言的速度——包括提取新翻译、重新渲染组件和更新 DOM。",
		whatWeMeasure: "衡量指标"
	}
};
export { e as default };
var e = {
	whyThisExists: "Why This Exists",
	choosingAnI18nLibraryIs: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	methodology: "Methodology",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
};
export { e as default };
var e = {
	aboutThisBenchmark: "About This Benchmark",
	thisIsAnOpenSource: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
};
export { e as default };
var e = {
	"blog-header": { insightsTutorialsAndAnalysisFrom: "Insights, tutoriais e análises da comunidade i18n." },
	"blog-list": {
		comparingI18nLibrariesIn2026: "Comparando Bibliotecas i18n em 2026: Uma Análise Profunda",
		weTested12DifferentInternationalization: "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.",
		howToReduceYourI18n: "Como reduzir seu bundle i18n em 60%",
		march82026: "8 de março de 2026",
		practicalStrategiesForOptimizingTranslation: "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.",
		theStateOfInternationalizationIn: "O estado da internacionalização no React",
		february282026: "28 de fevereiro de 2026",
		anOverviewOfTheCurrent: "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.",
		migratingFromReactI18nextTo: "Migrando do react-i18next para o Lingui",
		february152026: "15 de fevereiro de 2026",
		aStepByStepGuide: "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
		serverComponentsAndI18nWhat: "Server Components e i18n: o que muda?",
		february12026: "1 de fevereiro de 2026",
		reactServerComponentsIntroduceNew: "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.",
		benchmarkMethodologyHowWeTest: "Metodologia de Benchmark: como testamos",
		january202026: "20 de janeiro de 2026",
		aTransparentLookAtOur: "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.",
		readMore: "Leia mais →"
	}
};
export { e as default };
var e = {
	"blog-header": { insightsTutorialsAndAnalysisFrom: "Approfondimenti, tutorial e analisi dalla comunità i18n." },
	"blog-list": {
		comparingI18nLibrariesIn2026: "Confronto tra librerie i18n nel 2026: un approfondimento",
		weTested12DifferentInternationalization: "Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.",
		howToReduceYourI18n: "Come ridurre il bundle i18n del 60%",
		march82026: "8 marzo 2026",
		practicalStrategiesForOptimizingTranslation: "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.",
		theStateOfInternationalizationIn: "Lo stato dell'internazionalizzazione in React",
		february282026: "28 febbraio 2026",
		anOverviewOfTheCurrent: "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.",
		migratingFromReactI18nextTo: "Migrazione da react-i18next a Lingui",
		february152026: "15 febbraio 2026",
		aStepByStepGuide: "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
		serverComponentsAndI18nWhat: "Server Components e i18n: cosa cambia?",
		february12026: "1 febbraio 2026",
		reactServerComponentsIntroduceNew: "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.",
		benchmarkMethodologyHowWeTest: "Metodologia del benchmark: come testiamo",
		january202026: "20 gennaio 2026",
		aTransparentLookAtOur: "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.",
		readMore: "Leggi di più →"
	}
};
export { e as default };
var e = {
	"blog-header": { insightsTutorialsAndAnalysisFrom: "Aperçus, tutoriels et analyses de la communauté i18n." },
	"blog-list": {
		comparingI18nLibrariesIn2026: "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie",
		weTested12DifferentInternationalization: "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.",
		howToReduceYourI18n: "Comment réduire votre bundle i18n de 60 %",
		march82026: "8 mars 2026",
		practicalStrategiesForOptimizingTranslation: "Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.",
		theStateOfInternationalizationIn: "L'état de l'internationalisation dans React",
		february282026: "28 février 2026",
		anOverviewOfTheCurrent: "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.",
		migratingFromReactI18nextTo: "Migration de react-i18next vers Lingui",
		february152026: "15 février 2026",
		aStepByStepGuide: "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
		serverComponentsAndI18nWhat: "Server Components et i18n : Qu'est-ce qui change ?",
		february12026: "1er février 2026",
		reactServerComponentsIntroduceNew: "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
		benchmarkMethodologyHowWeTest: "Méthodologie du benchmark : comment nous testons",
		january202026: "20 janvier 2026",
		aTransparentLookAtOur: "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.",
		readMore: "Lire la suite →"
	}
};
export { e as default };
var e = {
	"blog-header": { insightsTutorialsAndAnalysisFrom: "Información, tutoriales y análisis de la comunidad i18n." },
	"blog-list": {
		comparingI18nLibrariesIn2026: "Comparación de bibliotecas i18n en 2026: un análisis profundo",
		weTested12DifferentInternationalization: "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.",
		howToReduceYourI18n: "Cómo reducir tu bundle i18n en un 60%",
		march82026: "8 de marzo de 2026",
		practicalStrategiesForOptimizingTranslation: "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.",
		theStateOfInternationalizationIn: "El estado de la internacionalización en React",
		february282026: "28 de febrero de 2026",
		anOverviewOfTheCurrent: "Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.",
		migratingFromReactI18nextTo: "Migración de react-i18next a Lingui",
		february152026: "15 de febrero de 2026",
		aStepByStepGuide: "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
		serverComponentsAndI18nWhat: "Server Components e i18n: ¿qué cambia?",
		february12026: "1 de febrero de 2026",
		reactServerComponentsIntroduceNew: "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
		benchmarkMethodologyHowWeTest: "Metodología del benchmark: cómo probamos",
		january202026: "20 de enero de 2026",
		aTransparentLookAtOur: "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.",
		readMore: "Leer más →"
	}
};
export { e as default };
var e = {
	"blog-header": { insightsTutorialsAndAnalysisFrom: "Einblicke, Tutorials und Analysen aus der i18n-Community." },
	"blog-list": {
		comparingI18nLibrariesIn2026: "i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick",
		weTested12DifferentInternationalization: "Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.",
		howToReduceYourI18n: "So reduzieren Sie Ihr i18n-Bundle um 60 %",
		march82026: "8. März 2026",
		practicalStrategiesForOptimizingTranslation: "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.",
		theStateOfInternationalizationIn: "Der Stand der Internationalisierung in React",
		february282026: "28. Februar 2026",
		anOverviewOfTheCurrent: "Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.",
		migratingFromReactI18nextTo: "Migration von react-i18next zu Lingui",
		february152026: "15. Februar 2026",
		aStepByStepGuide: "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
		serverComponentsAndI18nWhat: "Server Components und i18n: Was ändert sich?",
		february12026: "1. Februar 2026",
		reactServerComponentsIntroduceNew: "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
		benchmarkMethodologyHowWeTest: "Benchmark-Methodik: Wie wir testen",
		january202026: "20. Januar 2026",
		aTransparentLookAtOur: "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
		readMore: "Weiterlesen →"
	}
};
export { e as default };
var e = {
	"blog-header": { insightsTutorialsAndAnalysisFrom: "i18n 커뮤니티의 인사이트, 튜토리얼 및 분석." },
	"blog-list": {
		comparingI18nLibrariesIn2026: "2026년 i18n 라이브러리 비교: 심층 분석",
		weTested12DifferentInternationalization: "저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.",
		howToReduceYourI18n: "i18n 번들을 60% 줄이는 방법",
		march82026: "2026년 3월 8일",
		practicalStrategiesForOptimizingTranslation: "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.",
		theStateOfInternationalizationIn: "React 국제화의 현주소",
		february282026: "2026년 2월 28일",
		anOverviewOfTheCurrent: "동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.",
		migratingFromReactI18nextTo: "react-i18next에서 Lingui로 마이그레이션하기",
		february152026: "2026년 2월 15일",
		aStepByStepGuide: "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.",
		serverComponentsAndI18nWhat: "Server Components 및 i18n: 무엇이 달라지나요?",
		february12026: "2026년 2월 1일",
		reactServerComponentsIntroduceNew: "React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.",
		benchmarkMethodologyHowWeTest: "벤치마크 방법론: 테스트 방법",
		january202026: "2026년 1월 20일",
		aTransparentLookAtOur: "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.",
		readMore: "더 읽어보기 →"
	}
};
export { e as default };
var e = {
	"blog-header": { insightsTutorialsAndAnalysisFrom: "Инсайты, руководства и анализ от сообщества i18n." },
	"blog-list": {
		comparingI18nLibrariesIn2026: "Сравнение библиотек i18n в 2026 году: глубокое погружение",
		weTested12DifferentInternationalization: "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.",
		howToReduceYourI18n: "Как уменьшить бандл i18n на 60%",
		march82026: "8 марта 2026 года",
		practicalStrategiesForOptimizingTranslation: "Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.",
		theStateOfInternationalizationIn: "Состояние интернационализации в React",
		february282026: "28 февраля 2026 года",
		anOverviewOfTheCurrent: "Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.",
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
	}
};
export { e as default };
var e = {
	"blog-header": { insightsTutorialsAndAnalysisFrom: "Insights, tutorials, and analysis from the i18n community." },
	"blog-list": {
		comparingI18nLibrariesIn2026: "Comparing i18n Libraries in 2026: A Deep Dive",
		weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
		howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
		march82026: "March 8, 2026",
		practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
		theStateOfInternationalizationIn: "The State of Internationalization in React",
		february282026: "February 28, 2026",
		anOverviewOfTheCurrent: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
		migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
		february152026: "February 15, 2026",
		aStepByStepGuide: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
		february12026: "February 1, 2026",
		reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
		benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
		january202026: "January 20, 2026",
		aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		readMore: "Read More →"
	}
};
export { e as default };
var e = {
	"blog-header": { insightsTutorialsAndAnalysisFrom: "i18nコミュニティからの洞察、チュートリアル、分析。" },
	"blog-list": {
		comparingI18nLibrariesIn2026: "2026年のi18nライブラリ比較：ディープダイブ",
		weTested12DifferentInternationalization: "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。",
		howToReduceYourI18n: "i18nバンドルを60%削減する方法",
		march82026: "2026年3月8日",
		practicalStrategiesForOptimizingTranslation: "遅延ロード、コード分割、コンパイル時最適化など、翻訳バンドルを最適化するための実践的な戦略。",
		theStateOfInternationalizationIn: "Reactにおける国際化の現状",
		february282026: "2026年2月28日",
		anOverviewOfTheCurrent: "トレンド、新たなパターン、コミュニティの好みを網羅した、Reactの現在のi18nエコシステムの概要。",
		migratingFromReactI18nextTo: "react-i18nextからLinguiへの移行",
		february152026: "2026年2月15日",
		aStepByStepGuide: "50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。",
		serverComponentsAndI18nWhat: "Server Componentsとi18n：何が変わるのか？",
		february12026: "2026年2月1日",
		reactServerComponentsIntroduceNew: "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。",
		benchmarkMethodologyHowWeTest: "ベンチマーク方法論：テスト方法",
		january202026: "2026年1月20日",
		aTransparentLookAtOur: "テスト環境、統計的手法、再現性を含む、ベンチマーク方法論の透明性の高い紹介。",
		readMore: "詳しく読む →"
	}
};
export { e as default };
var e = { insightsTutorialsAndAnalysisFrom: "Insights, tutorials, and analysis from the i18n community." };
export { e as default };
var e = {
	comparingI18nLibrariesIn2026: "Comparing i18n Libraries in 2026: A Deep Dive",
	weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
	howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
	march82026: "March 8, 2026",
	practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
	theStateOfInternationalizationIn: "The State of Internationalization in React",
	february282026: "February 28, 2026",
	anOverviewOfTheCurrent: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
	migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
	february152026: "February 15, 2026",
	aStepByStepGuide: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
	february12026: "February 1, 2026",
	reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
	january202026: "January 20, 2026",
	aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	readMore: "Read More →"
};
export { e as default };
var e = {
	"blog-header": { insightsTutorialsAndAnalysisFrom: "来自 i18n 社区的洞察、教程和分析。" },
	"blog-list": {
		comparingI18nLibrariesIn2026: "2026 年 i18n 库比较：深度探讨",
		weTested12DifferentInternationalization: "我们在性能、捆绑包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。",
		howToReduceYourI18n: "如何将 i18n 捆绑包减少 60%",
		march82026: "2026 年 3 月 8 日",
		practicalStrategiesForOptimizingTranslation: "优化翻译捆绑包的实用策略，包括延迟加载、代码拆分和编译时优化。",
		theStateOfInternationalizationIn: "React 国际化现状",
		february282026: "2026 年 2 月 28 日",
		anOverviewOfTheCurrent: "React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。",
		migratingFromReactI18nextTo: "从 react-i18next 迁移到 Lingui",
		february152026: "2026 年 2 月 15 日",
		aStepByStepGuide: "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的逐步指南。",
		serverComponentsAndI18nWhat: "Server Components 和 i18n：有哪些变化？",
		february12026: "2026 年 2 月 1 日",
		reactServerComponentsIntroduceNew: "React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。",
		benchmarkMethodologyHowWeTest: "基准测试方法论：我们如何测试",
		january202026: "2026 年 1 月 20 日",
		aTransparentLookAtOur: "透明地了解我们的基准测试方法论，包括测试环境、统计方法和可重现性。",
		readMore: "阅读更多 →"
	}
};
export { e as default };
var e = {
	"careers-header": {
		title: "채용",
		joinOurMissionToImprove: "국제화 생태계를 개선하기 위한 우리의 사명에 동참하세요. 저희는 영향력, 투명성 및 지속적인 학습을 소중히 여기는 원격 근무 우선 팀입니다."
	},
	"careers-benefits": {
		workFromAnywhereInThe: "전 세계 어디서나 근무 가능",
		competitivePay: "경쟁력 있는 급여",
		topOfMarketCompensation: "업계 최고 수준의 보상",
		openSourceTime: "오픈 소스 기여 시간"
	},
	"open-positions": {
		seniorFrontendEngineer: "시니어 프론트엔드 엔지니어",
		buildAndMaintainOurBenchmarking: "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.",
		backendEngineer: "백엔드 엔지니어",
		designAndScaleOurCloud: "매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
		technicalWriter: "테크니컬 라이터",
		createComprehensiveGuidesApiReferences: "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.",
		devrelEngineer: "DevRel 엔지니어",
		sanFranciscoRemote: "샌프란시스코 / 원격",
		engageWithTheI18nCommunity: "발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.",
		qaEngineer: "QA 엔지니어",
		ensureTheAccuracyAndReliability: "철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.",
		openPositions: "채용 중인 포지션",
		applyNow: "지금 지원하기",
		remote: "원격",
		fullTime: "정규직",
		partTime: "아르바이트",
		engineering: "엔지니어링",
		documentation: "문서화",
		community: "커뮤니티"
	}
};
export { e as default };
var e = {
	"careers-header": {
		title: "Carriere",
		joinOurMissionToImprove: "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team che lavora principalmente in remoto e che valorizza l'impatto, la trasparenza e l'apprendimento continuo."
	},
	"careers-benefits": {
		workFromAnywhereInThe: "Lavora da qualsiasi parte del mondo",
		competitivePay: "Retribuzione competitiva",
		topOfMarketCompensation: "Compensazione ai vertici del mercato",
		openSourceTime: "Tempo dedicato all'open source"
	},
	"open-positions": {
		seniorFrontendEngineer: "Ingegnere Frontend Senior",
		buildAndMaintainOurBenchmarking: "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
		backendEngineer: "Ingegnere Backend",
		designAndScaleOurCloud: "Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.",
		technicalWriter: "Scrittore tecnico",
		createComprehensiveGuidesApiReferences: "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
		devrelEngineer: "Ingegnere DevOps",
		sanFranciscoRemote: "San Francisco / Remoto",
		engageWithTheI18nCommunity: "Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.",
		qaEngineer: "Ingegnere QA",
		ensureTheAccuracyAndReliability: "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.",
		openPositions: "Posizioni aperte",
		applyNow: "Candidati ora",
		remote: "Remoto",
		fullTime: "Tempo pieno",
		partTime: "Part-time",
		engineering: "Ingegneria",
		documentation: "Documentazione",
		community: "Comunità"
	}
};
export { e as default };
var e = {
	"careers-header": {
		title: "招聘",
		joinOurMissionToImprove: "加入我们的使命，改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。"
	},
	"careers-benefits": {
		workFromAnywhereInThe: "在世界任何地方工作",
		competitivePay: "具有竞争力的薪酬",
		topOfMarketCompensation: "市场领先的薪酬",
		openSourceTime: "开源贡献时间"
	},
	"open-positions": {
		seniorFrontendEngineer: "高级前端工程师",
		buildAndMaintainOurBenchmarking: "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。",
		backendEngineer: "后端工程师",
		designAndScaleOurCloud: "设计和扩展我们的云基准测试基础设施，处理每天数千次自动化运行。",
		technicalWriter: "技术文档工程师",
		createComprehensiveGuidesApiReferences: "为我们的基准测试平台创建全面的指南、API 参考和教程。",
		devrelEngineer: "开发者关系工程师",
		sanFranciscoRemote: "旧金山 / 远程",
		engageWithTheI18nCommunity: "通过演讲、工作坊、博客文章和开源贡献与 i18n 社区互动。",
		qaEngineer: "测试工程师",
		ensureTheAccuracyAndReliability: "通过严格的测试和验证，确保基准测试结果的准确性和可靠性。",
		openPositions: "开放职位",
		applyNow: "立即申请",
		remote: "远程",
		fullTime: "全职",
		partTime: "兼职",
		engineering: "工程",
		documentation: "文档",
		community: "社区"
	}
};
export { e as default };
var e = {
	"careers-header": {
		title: "Carreiras",
		joinOurMissionToImprove: "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e valora o impacto, a transparência e o aprendizado contínuo."
	},
	"careers-benefits": {
		workFromAnywhereInThe: "Trabalhe de qualquer lugar do mundo",
		competitivePay: "Remuneração competitiva",
		topOfMarketCompensation: "Remuneração acima da média do mercado",
		openSourceTime: "Tempo dedicado ao código aberto"
	},
	"open-positions": {
		seniorFrontendEngineer: "Engenheiro Frontend Sênior",
		buildAndMaintainOurBenchmarking: "Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
		backendEngineer: "Engenheiro Backend",
		designAndScaleOurCloud: "Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.",
		technicalWriter: "Redator Técnico",
		createComprehensiveGuidesApiReferences: "Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
		devrelEngineer: "Engenheiro DevRel",
		sanFranciscoRemote: "San Francisco / Remoto",
		engageWithTheI18nCommunity: "Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.",
		qaEngineer: "Engenheiro QA",
		ensureTheAccuracyAndReliability: "Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.",
		openPositions: "Vagas abertas",
		applyNow: "Candidatar-se agora",
		remote: "Remoto",
		fullTime: "Tempo integral",
		partTime: "Tempo parcial",
		engineering: "Engenharia",
		documentation: "Documentação",
		community: "Comunidade"
	}
};
export { e as default };
var e = {
	"careers-header": {
		title: "採用",
		joinOurMissionToImprove: "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響、透明性、継続的な学習を大切にするリモートファーストのチームです。"
	},
	"careers-benefits": {
		workFromAnywhereInThe: "世界中のどこからでも勤務可能",
		competitivePay: "競争力のある給与",
		topOfMarketCompensation: "市場最高水準の報酬",
		openSourceTime: "オープンソースへの貢献時間"
	},
	"open-positions": {
		seniorFrontendEngineer: "シニアフロントエンドエンジニア",
		buildAndMaintainOurBenchmarking: "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールを構築および保守します。",
		backendEngineer: "バックエンドエンジニア",
		designAndScaleOurCloud: "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計し、拡張します。",
		technicalWriter: "テクニカルライター",
		createComprehensiveGuidesApiReferences: "ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。",
		devrelEngineer: "DevRelエンジニア",
		sanFranciscoRemote: "サンフランシスコ / リモート",
		engageWithTheI18nCommunity: "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じてi18nコミュニティと交流します。",
		qaEngineer: "QAエンジニア",
		ensureTheAccuracyAndReliability: "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。",
		openPositions: "募集中の職種",
		applyNow: "今すぐ応募",
		remote: "リモート",
		fullTime: "フルタイム",
		partTime: "パートタイム",
		engineering: "エンジニアリング",
		documentation: "ドキュメント",
		community: "コミュニティ"
	}
};
export { e as default };
var e = {
	"careers-header": {
		title: "Karriere",
		joinOurMissionToImprove: "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wirkung, Transparenz und kontinuierliches Lernen schätzt."
	},
	"careers-benefits": {
		workFromAnywhereInThe: "Arbeiten Sie von überall auf der Welt",
		competitivePay: "Wettbewerbsfähige Bezahlung",
		topOfMarketCompensation: "Überdurchschnittliche Vergütung",
		openSourceTime: "Zeit für Open Source"
	},
	"open-positions": {
		seniorFrontendEngineer: "Senior Frontend-Entwickler",
		buildAndMaintainOurBenchmarking: "Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.",
		backendEngineer: "Backend-Entwickler",
		designAndScaleOurCloud: "Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.",
		technicalWriter: "Technischer Redakteur",
		createComprehensiveGuidesApiReferences: "Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
		devrelEngineer: "DevRel-Ingenieur",
		sanFranciscoRemote: "San Francisco / Remote",
		engageWithTheI18nCommunity: "Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
		qaEngineer: "QA-Ingenieur",
		ensureTheAccuracyAndReliability: "Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.",
		openPositions: "Offene Stellen",
		applyNow: "Jetzt bewerben",
		remote: "Remote",
		fullTime: "Vollzeit",
		partTime: "Teilzeit",
		engineering: "Entwicklung",
		documentation: "Dokumentation",
		community: "Community"
	}
};
export { e as default };
var e = {
	"careers-header": {
		title: "Careers",
		joinOurMissionToImprove: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
	},
	"careers-benefits": {
		workFromAnywhereInThe: "Work from anywhere in the world",
		competitivePay: "Competitive pay",
		topOfMarketCompensation: "Top-of-market compensation",
		openSourceTime: "Open source time"
	},
	"open-positions": {
		seniorFrontendEngineer: "Senior Frontend Engineer",
		buildAndMaintainOurBenchmarking: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		backendEngineer: "Backend Engineer",
		designAndScaleOurCloud: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		technicalWriter: "Technical Writer",
		createComprehensiveGuidesApiReferences: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		devrelEngineer: "DevRel Engineer",
		sanFranciscoRemote: "San Francisco / Remote",
		engageWithTheI18nCommunity: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		qaEngineer: "QA Engineer",
		ensureTheAccuracyAndReliability: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		openPositions: "Open Positions",
		applyNow: "Apply Now",
		remote: "Remote",
		fullTime: "Full-time",
		partTime: "Part-time",
		engineering: "Engineering",
		documentation: "Documentation",
		community: "Community"
	}
};
export { e as default };
var e = {
	"careers-header": {
		title: "Карьера",
		joinOurMissionToImprove: "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы команда, работающая удаленно, которая ценит влияние, прозрачность и непрерывное обучение."
	},
	"careers-benefits": {
		workFromAnywhereInThe: "Работайте из любой точки мира",
		competitivePay: "Конкурентоспособная оплата",
		topOfMarketCompensation: "Компенсация выше рыночной",
		openSourceTime: "Время на open source"
	},
	"open-positions": {
		seniorFrontendEngineer: "Старший фронтенд-инженер",
		buildAndMaintainOurBenchmarking: "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.",
		backendEngineer: "Бэкенд-инженер",
		designAndScaleOurCloud: "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.",
		technicalWriter: "Технический писатель",
		createComprehensiveGuidesApiReferences: "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.",
		devrelEngineer: "DevRel-инженер",
		sanFranciscoRemote: "Сан-Франциско / Удаленно",
		engageWithTheI18nCommunity: "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.",
		qaEngineer: "QA-инженер",
		ensureTheAccuracyAndReliability: "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.",
		openPositions: "Открытые вакансии",
		applyNow: "Подать заявку",
		remote: "Удаленно",
		fullTime: "Полный рабочий день",
		partTime: "Неполный рабочий день",
		engineering: "Разработка",
		documentation: "Документация",
		community: "Сообщество"
	}
};
export { e as default };
var e = {
	"careers-header": {
		title: "Carreras",
		joinOurMissionToImprove: "Únete a nuestra misión de mejorar el ecosistema de internacionalización. Somos un equipo que prioriza el trabajo remoto y valora el impacto, la transparencia y el aprendizaje continuo."
	},
	"careers-benefits": {
		workFromAnywhereInThe: "Trabaja desde cualquier lugar del mundo",
		competitivePay: "Salario competitivo",
		topOfMarketCompensation: "Compensación superior a la del mercado",
		openSourceTime: "Tiempo dedicado al código abierto"
	},
	"open-positions": {
		seniorFrontendEngineer: "Ingeniero Frontend Senior",
		buildAndMaintainOurBenchmarking: "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.",
		backendEngineer: "Ingeniero Backend",
		designAndScaleOurCloud: "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.",
		technicalWriter: "Escritor técnico",
		createComprehensiveGuidesApiReferences: "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.",
		devrelEngineer: "Ingeniero DevRel",
		sanFranciscoRemote: "San Francisco / Remoto",
		engageWithTheI18nCommunity: "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.",
		qaEngineer: "Ingeniero QA",
		ensureTheAccuracyAndReliability: "Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.",
		openPositions: "Puestos vacantes",
		applyNow: "Postular ahora",
		remote: "Remoto",
		fullTime: "Tiempo completo",
		partTime: "Tiempo parcial",
		engineering: "Ingeniería",
		documentation: "Documentación",
		community: "Comunidad"
	}
};
export { e as default };
var e = {
	workFromAnywhereInThe: "Work from anywhere in the world",
	competitivePay: "Competitive pay",
	topOfMarketCompensation: "Top-of-market compensation",
	openSourceTime: "Open source time"
};
export { e as default };
var e = {
	"careers-header": {
		title: "Carrières",
		joinOurMissionToImprove: "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe privilégiant le télétravail qui valorise l'impact, la transparence et l'apprentissage continu."
	},
	"careers-benefits": {
		workFromAnywhereInThe: "Travaillez de n'importe où dans le monde",
		competitivePay: "Rémunération compétitive",
		topOfMarketCompensation: "Rémunération au-dessus du marché",
		openSourceTime: "Temps dédié à l'open source"
	},
	"open-positions": {
		seniorFrontendEngineer: "Ingénieur Frontend Senior",
		buildAndMaintainOurBenchmarking: "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.",
		backendEngineer: "Ingénieur Backend",
		designAndScaleOurCloud: "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.",
		technicalWriter: "Rédacteur technique",
		createComprehensiveGuidesApiReferences: "Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.",
		devrelEngineer: "Ingénieur DevRel",
		sanFranciscoRemote: "San Francisco / À distance",
		engageWithTheI18nCommunity: "Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.",
		qaEngineer: "Ingénieur QA",
		ensureTheAccuracyAndReliability: "Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.",
		openPositions: "Postes ouverts",
		applyNow: "Postuler maintenant",
		remote: "À distance",
		fullTime: "Temps plein",
		partTime: "Temps partiel",
		engineering: "Ingénierie",
		documentation: "Documentation",
		community: "Communauté"
	}
};
export { e as default };
var e = {
	title: "Careers",
	joinOurMissionToImprove: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
};
export { e as default };
var e = {
	"contact-header": {
		getInTouch: "Kontakt aufnehmen",
		haveIdeasFoundABug: "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter"
	},
	"contact-form": {
		yourName: "Ihr Name",
		bugReport: "Fehlerbericht",
		newBenchmarkIdea: "Neue Benchmark-Idee",
		methodologyQuestion: "Frage zur Methodik",
		describeYourQuestionOrIdea: "Beschreiben Sie Ihre Frage oder Idee...",
		sendMessage: "Nachricht senden"
	}
};
export { e as default };
var e = {
	"contact-header": {
		getInTouch: "Contactez-nous",
		haveIdeasFoundABug: "Vous avez des idées, trouvé un bug ou voulez proposer un benchmark ? Contactez-nous à"
	},
	"contact-form": {
		yourName: "Votre nom",
		bugReport: "Rapport de bug",
		newBenchmarkIdea: "Nouvelle idée de benchmark",
		methodologyQuestion: "Question sur la méthodologie",
		describeYourQuestionOrIdea: "Décrivez votre question ou idée...",
		sendMessage: "Envoyer le message"
	}
};
export { e as default };
var e = {
	"contact-header": {
		getInTouch: "연락하기",
		haveIdeasFoundABug: "아이디어가 있거나 버그를 발견했나요? 아니면 벤치마크를 기여하고 싶으신가요? 다음 주소로 연락주세요."
	},
	"contact-form": {
		yourName: "이름",
		bugReport: "버그 보고",
		newBenchmarkIdea: "새로운 벤치마크 아이디어",
		methodologyQuestion: "방법론 질문",
		describeYourQuestionOrIdea: "질문이나 아이디어를 설명해주세요...",
		sendMessage: "메시지 보내기"
	}
};
export { e as default };
var e = {
	"contact-header": {
		getInTouch: "連絡を取る",
		haveIdeasFoundABug: "アイデアがある、バグを見つけた、またはベンチマークに貢献したいですか？こちらまでご連絡ください："
	},
	"contact-form": {
		yourName: "お名前",
		bugReport: "バグ報告",
		newBenchmarkIdea: "新しいベンチマークのアイデア",
		methodologyQuestion: "方法論に関する質問",
		describeYourQuestionOrIdea: "質問やアイデアを説明してください...",
		sendMessage: "メッセージを送信"
	}
};
export { e as default };
var e = {
	"contact-header": {
		getInTouch: "Get in Touch",
		haveIdeasFoundABug: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
	},
	"contact-form": {
		yourName: "Your name",
		bugReport: "Bug Report",
		newBenchmarkIdea: "New Benchmark Idea",
		methodologyQuestion: "Methodology Question",
		describeYourQuestionOrIdea: "Describe your question or idea...",
		sendMessage: "Send Message"
	}
};
export { e as default };
var e = {
	"contact-header": {
		getInTouch: "Entre em contato",
		haveIdeasFoundABug: "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em"
	},
	"contact-form": {
		yourName: "Seu nome",
		bugReport: "Relatório de bug",
		newBenchmarkIdea: "Nova ideia de benchmark",
		methodologyQuestion: "Pergunta sobre metodologia",
		describeYourQuestionOrIdea: "Descreva sua pergunta ou ideia...",
		sendMessage: "Enviar mensagem"
	}
};
export { e as default };
var e = {
	"contact-header": {
		getInTouch: "取得联系",
		haveIdeasFoundABug: "有想法、发现错误或想贡献基准测试？请通过以下方式联系我们"
	},
	"contact-form": {
		yourName: "您的姓名",
		bugReport: "错误报告",
		newBenchmarkIdea: "新基准测试想法",
		methodologyQuestion: "方法论问题",
		describeYourQuestionOrIdea: "描述您的问题或想法...",
		sendMessage: "发送消息"
	}
};
export { e as default };
var e = {
	"contact-header": {
		getInTouch: "Ponte en contacto",
		haveIdeasFoundABug: "¿Tienes ideas, has encontrado un bug o quieres contribuir con un benchmark? Contáctanos en"
	},
	"contact-form": {
		yourName: "Tu nombre",
		bugReport: "Informe de bug",
		newBenchmarkIdea: "Nueva idea de benchmark",
		methodologyQuestion: "Pregunta sobre metodología",
		describeYourQuestionOrIdea: "Describe tu pregunta o idea...",
		sendMessage: "Enviar mensaje"
	}
};
export { e as default };
var e = {
	"contact-header": {
		getInTouch: "Свяжитесь с нами",
		haveIdeasFoundABug: "Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами по адресу"
	},
	"contact-form": {
		yourName: "Ваше имя",
		bugReport: "Отчет об ошибке",
		newBenchmarkIdea: "Новая идея для бенчмарка",
		methodologyQuestion: "Вопрос по методологии",
		describeYourQuestionOrIdea: "Опишите ваш вопрос или идею...",
		sendMessage: "Отправить сообщение"
	}
};
export { e as default };
var e = {
	"contact-header": {
		getInTouch: "Mettiti in contatto",
		haveIdeasFoundABug: "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo"
	},
	"contact-form": {
		yourName: "Il tuo nome",
		bugReport: "Segnalazione di bug",
		newBenchmarkIdea: "Nuova idea di benchmark",
		methodologyQuestion: "Domanda sulla metodologia",
		describeYourQuestionOrIdea: "Descrivi la tua domanda o idea...",
		sendMessage: "Invia messaggio"
	}
};
export { e as default };
var e = {
	yourName: "Your name",
	bugReport: "Bug Report",
	newBenchmarkIdea: "New Benchmark Idea",
	methodologyQuestion: "Methodology Question",
	describeYourQuestionOrIdea: "Describe your question or idea...",
	sendMessage: "Send Message"
};
export { e as default };
var e = {
	getInTouch: "Get in Touch",
	haveIdeasFoundABug: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
};
export { e as default };
var e = { "faq-list": {
	whatIsI18nBenchmark: "Qu'est-ce qu'i18n Benchmark ?",
	whatIsI18nBenchmarkAnswer: "i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.",
	howAreBenchmarksConducted: "Comment les benchmarks sont-ils menés ?",
	weRunStandardizedTestsIn: "Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.",
	whichLibrariesAreCurrentlySupported: "Quelles bibliothèques sont actuellement supportées ?",
	weSupportReactI18nextReact: "Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.",
	canISubmitMyOwn: "Puis-je soumettre mes propres benchmarks ?",
	yesCommunityBenchmarkSubmissionsAre: "Oui ! Les soumissions de benchmarks par la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.",
	howOftenAreBenchmarksUpdated: "À quelle fréquence les benchmarks sont-ils mis à jour ?",
	weReRunAllBenchmarks: "Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les sorties de versions majeures déclenchent un cycle de re-benchmarking immédiat.",
	isTheDataReliable: "Les données sont-elles fiables ?",
	weFollowRigorousStatisticalMethodology: "Nous suivons une méthodologie statistique rigoureuse, incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec notre analyse pour une transparence totale.",
	doYouOfferConsultingServices: "Offrez-vous des services de conseil ?",
	yesOurEnterprisePlanIncludes: "Oui, notre offre Enterprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes spécifiques.",
	howCanIContribute: "Comment puis-je contribuer ?",
	thereAreManyWaysTo: "Il y a de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails."
} };
export { e as default };
var e = { "faq-list": {
	whatIsI18nBenchmark: "i18n Benchmarkとは何ですか？",
	whatIsI18nBenchmarkAnswer: "i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、開発者体験を測定および比較するオープンソースのベンチマークスイーツです。",
	howAreBenchmarksConducted: "ベンチマークはどのように行われますか？",
	weRunStandardizedTestsIn: "一貫したハードウェアを使用した隔離された環境で標準化されたテストを実行します。各ベンチマークは、統計的有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。",
	whichLibrariesAreCurrentlySupported: "現在サポートされているライブラリは何ですか？",
	weSupportReactI18nextReact: "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、Tolgeeをサポートしています。",
	canISubmitMyOwn: "自分のベンチマークを提出できますか？",
	yesCommunityBenchmarkSubmissionsAre: "はい！コミュニティからのベンチマーク提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、適合する提出物をマージします。",
	howOftenAreBenchmarksUpdated: "ベンチマークはどのくらいの頻度で更新されますか？",
	weReRunAllBenchmarks: "毎週、各ライブラリの最新の安定版に対してすべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即座に再ベンチマークサイクルがトリガーされます。",
	isTheDataReliable: "データは信頼できますか？",
	weFollowRigorousStatisticalMethodology: "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計的手法に従っています。すべての生のデータは、完全な透明性のために分析結果とともに公開されます。",
	doYouOfferConsultingServices: "コンサルティングサービスは提供していますか？",
	yesOurEnterprisePlanIncludes: "はい、エンタープライズプランには、i18nソリューションを評価するチームのためのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいたカスタマイズされた推奨事項を提供できます。",
	howCanIContribute: "どのように貢献できますか？",
	thereAreManyWaysTo: "貢献する方法はたくさんあります：ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトのスポンサーなど。詳細はGitHubリポジトリをご覧ください。"
} };
export { e as default };
var e = { "faq-list": {
	whatIsI18nBenchmark: "Cos'è i18n Benchmark ?",
	whatIsI18nBenchmarkAnswer: "i18n Benchmark è una suite di test open source che misura e confronta le prestazioni, la dimensione del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.",
	howAreBenchmarksConducted: "Come vengono condotti i benchmark ?",
	weRunStandardizedTestsIn: "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub.",
	whichLibrariesAreCurrentlySupported: "Quali librerie sono attualmente supportate ?",
	weSupportReactI18nextReact: "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.",
	canISubmitMyOwn: "Posso inviare i miei benchmark ?",
	yesCommunityBenchmarkSubmissionsAre: "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.",
	howOftenAreBenchmarksUpdated: "Con quale frequenza vengono aggiornati i benchmark ?",
	weReRunAllBenchmarks: "Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. Le versioni principali in uscita attivano un immediato ciclo di re-benchmark.",
	isTheDataReliable: "I dati sono affidabili ?",
	weFollowRigorousStatisticalMethodology: "Seguiamo una rigorosa metodologia statistica che include corse di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per una completa trasparenza.",
	doYouOfferConsultingServices: "Offrite servizi di consulenza ?",
	yesOurEnterprisePlanIncludes: "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Abbiamo la possibilità di fornire raccomandazioni personalizzate basate sul caso d'uso specifico, sulla scala e sui vincoli.",
	howCanIContribute: "Come posso contribuire ?",
	thereAreManyWaysTo: "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli."
} };
export { e as default };
var e = { "faq-list": {
	whatIsI18nBenchmark: "Was ist i18n Benchmark ?",
	whatIsI18nBenchmarkAnswer: "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, welche die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungs-Bibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.",
	howAreBenchmarksConducted: "Wie werden die Benchmarks durchgeführt ?",
	weRunStandardizedTestsIn: "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich zugänglich.",
	whichLibrariesAreCurrentlySupported: "Welche Bibliotheken werden derzeit unterstützt ?",
	weSupportReactI18nextReact: "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.",
	canISubmitMyOwn: "Kann ich meine eigenen Benchmarks einreichen ?",
	yesCommunityBenchmarkSubmissionsAre: "Ja! Einreichungen von Benchmarks durch die Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.",
	howOftenAreBenchmarksUpdated: "Wie oft werden die Benchmarks aktualisiert ?",
	weReRunAllBenchmarks: "Wir führen alle Benchmarks wöchentlich gegen die neuesten stabilen Versionen jeder Bibliothek neu aus. Major-Releases lösen einen sofortigen Re-Benchmark-Zyklus aus.",
	isTheDataReliable: "Sind die Daten zuverlässig ?",
	weFollowRigorousStatisticalMethodology: "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Phasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.",
	doYouOfferConsultingServices: "Bieten Sie Beratungsdienstleistungen an ?",
	yesOurEnterprisePlanIncludes: "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben.",
	howCanIContribute: "Wie kann ich beitragen ?",
	thereAreManyWaysTo: "Es gibt viele Möglichkeiten, beizutragen: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details."
} };
export { e as default };
var e = { "faq-list": {
	whatIsI18nBenchmark: "What is i18n Benchmark?",
	whatIsI18nBenchmarkAnswer: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
	howAreBenchmarksConducted: "How are benchmarks conducted?",
	weRunStandardizedTestsIn: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
	whichLibrariesAreCurrentlySupported: "Which libraries are currently supported?",
	weSupportReactI18nextReact: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
	canISubmitMyOwn: "Can I submit my own benchmarks?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
	howOftenAreBenchmarksUpdated: "How often are benchmarks updated?",
	weReRunAllBenchmarks: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
	isTheDataReliable: "Is the data reliable?",
	weFollowRigorousStatisticalMethodology: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
	doYouOfferConsultingServices: "Do you offer consulting services?",
	yesOurEnterprisePlanIncludes: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
	howCanIContribute: "How can I contribute?",
	thereAreManyWaysTo: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
} };
export { e as default };
var e = { "faq-list": {
	whatIsI18nBenchmark: "¿Qué es i18n Benchmark ?",
	whatIsI18nBenchmarkAnswer: "i18n Benchmark es una suite de pruebas de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del développeur de las bibliotecas de internacionalización para aplicaciones JavaScript y React.",
	howAreBenchmarksConducted: "¿Cómo se realizan los benchmarks ?",
	weRunStandardizedTestsIn: "Realizamos pruebas estandarizadas en entornos aislados utilizando un hardware consistente. Cada benchmark se repite varias veces para garantizar la significancia estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.",
	whichLibrariesAreCurrentlySupported: "¿Qué bibliotecas son compatibles actualmente ?",
	weSupportReactI18nextReact: "Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.",
	canISubmitMyOwn: "¿Puedo enviar mis propios benchmarks ?",
	yesCommunityBenchmarkSubmissionsAre: "¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía un pull request. Nuestro equipo revisará y combinará las presentaciones que califiquen.",
	howOftenAreBenchmarksUpdated: "¿Con qué frecuencia se funcionan los benchmarks ?",
	weReRunAllBenchmarks: "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.",
	isTheDataReliable: "¿Son fiables los datos ?",
	weFollowRigorousStatisticalMethodology: "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.",
	doYouOfferConsultingServices: "¿Ofrecen servicios de consultoría ?",
	yesOurEnterprisePlanIncludes: "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso, escala y limitaciones específicas.",
	howCanIContribute: "¿Cómo puedo contribuir ?",
	thereAreManyWaysTo: "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de bugs, sugerir nuevas métricas o patrocinar el proyecto. Visita nuestro repositorio de GitHub para más detalles."
} };
export { e as default };
var e = { "faq-list": {
	whatIsI18nBenchmark: "Что такое i18n Benchmark ?",
	whatIsI18nBenchmarkAnswer: "i18n Benchmark — это набор тестов с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчика библиотек интернационализации для приложений JavaScript и React.",
	howAreBenchmarksConducted: "Как проводятся бенчмарки ?",
	weRunStandardizedTestsIn: "Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.",
	whichLibrariesAreCurrentlySupported: "Какие библиотеки поддерживаются в настоящее время ?",
	weSupportReactI18nextReact: "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.",
	canISubmitMyOwn: "Могу ли я отправить свои собственные бенчмарки ?",
	yesCommunityBenchmarkSubmissionsAre: "Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.",
	howOftenAreBenchmarksUpdated: "Как часто обновляются бенчмарки ?",
	weReRunAllBenchmarks: "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.",
	isTheDataReliable: "Надежны ли данные ?",
	weFollowRigorousStatisticalMethodology: "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.",
	doYouOfferConsultingServices: "Предлагаете ли вы консультационные услуги ?",
	yesOurEnterprisePlanIncludes: "Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.",
	howCanIContribute: "Как я могу помочь ?",
	thereAreManyWaysTo: "Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации."
} };
export { e as default };
var e = { "faq-list": {
	whatIsI18nBenchmark: "O que é o i18n Benchmark ?",
	whatIsI18nBenchmarkAnswer: "O i18n Benchmark é uma suíte de testes de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do developpeur de bibliotecas de internacionalização para aplicativos JavaScript e React.",
	howAreBenchmarksConducted: "Como os benchmarks são conduzidos ?",
	weRunStandardizedTestsIn: "Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.",
	whichLibrariesAreCurrentlySupported: "Quais bibliotecas são suportadas atualmente ?",
	weSupportReactI18nextReact: "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.",
	canISubmitMyOwn: "Posso enviar meus próprios benchmarks ?",
	yesCommunityBenchmarkSubmissionsAre: "Sim! Submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.",
	howOftenAreBenchmarksUpdated: "Com que frequência os benchmarks são atualizados ?",
	weReRunAllBenchmarks: "Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo imediato de re-benchmark.",
	isTheDataReliable: "Os dados são confiáveis ?",
	weFollowRigorousStatisticalMethodology: "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.",
	doYouOfferConsultingServices: "Vocês oferecem serviços de consultoria ?",
	yesOurEnterprisePlanIncludes: "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Temos a possibilidade de fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicas.",
	howCanIContribute: "Como posso contribuir ?",
	thereAreManyWaysTo: "Existem muitas maneiras de contribuir: envie benchmarks, melhore a documentação, relate bugs, sugira novas métricas ou patrocine o projeto. Visite nosso repositório no GitHub para mais detalhes."
} };
export { e as default };
var e = { "faq-list": {
	whatIsI18nBenchmark: "i18n Benchmark란 무엇인가요?",
	whatIsI18nBenchmarkAnswer: "i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.",
	howAreBenchmarksConducted: "벤치마크는 어떻게 진행되나요?",
	weRunStandardizedTestsIn: "일관된 하드웨어를 사용하는 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 확보하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다.",
	whichLibrariesAreCurrentlySupported: "현재 어떤 라이브러리가 지원되나요?",
	weSupportReactI18nextReact: "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee를 지원합니다.",
	canISubmitMyOwn: "저만의 벤치마크를 제출할 수 있나요?",
	yesCommunityBenchmarkSubmissionsAre: "네! 커뮤니티의 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 검토 후 마지(merge)할 것입니다.",
	howOftenAreBenchmarksUpdated: "벤치마크는 얼마나 자주 업데이트되나요?",
	weReRunAllBenchmarks: "매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 주요 버전이 릴리스되면 즉시 재벤치마크 주기가 시작됩니다.",
	isTheDataReliable: "데이터는 신뢰할 수 있나요?",
	weFollowRigorousStatisticalMethodology: "웜업 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석 결과와 함께 게시됩니다.",
	doYouOfferConsultingServices: "컨설팅 서비스를 제공하나요?",
	yesOurEnterprisePlanIncludes: "네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.",
	howCanIContribute: "어떻게 기여할 수 있나요?",
	thereAreManyWaysTo: "기여하는 방법은 다양합니다: 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원. 자세한 내용은 GitHub 저장소를 방문하세요."
} };
export { e as default };
var e = { "faq-list": {
	whatIsI18nBenchmark: "什么是 i18n Benchmark ?",
	whatIsI18nBenchmarkAnswer: "i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序国际化库的性能、捆绑包大小和开发人员经验。",
	howAreBenchmarksConducted: "如何进行基准测试 ?",
	weRunStandardizedTestsIn: "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都会重复多次以确保统计显著性。所有测试配置都可以在我们的 GitHub 存储库中公开获得。",
	whichLibrariesAreCurrentlySupported: "目前支持哪些库 ?",
	weSupportReactI18nextReact: "我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。",
	canISubmitMyOwn: "我可以提交自己的基准测试吗 ?",
	yesCommunityBenchmarkSubmissionsAre: "是的！欢迎社区提交基准测试。分叉我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审查并合并合格的提交。",
	howOftenAreBenchmarksUpdated: "基准测试更新频率如何 ?",
	weReRunAllBenchmarks: "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。",
	isTheDataReliable: "数据可靠吗 ?",
	weFollowRigorousStatisticalMethodology: "我们遵循严谨的统计方法论，包括预热运行、异常值检测和置信区间。所有原始数据与其分析结果一起发布，以实现完全透明。",
	doYouOfferConsultingServices: "你们提供咨询服务吗 ?",
	yesOurEnterprisePlanIncludes: "是的，我们的企业计划为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的特定用例、规模和限制提供定制建议。",
	howCanIContribute: "我该如何贡献 ?",
	thereAreManyWaysTo: "有很多方式可以贡献：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。"
} };
export { e as default };
var e = {
	frequentlyAskedQuestions: "Frequently Asked Questions",
	everythingYouNeedToKnow: "Everything you need to know about i18n Benchmark."
};
export { e as default };
var e = {
	whatIsI18nBenchmark: "What is i18n Benchmark?",
	whatIsI18nBenchmarkAnswer: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
	howAreBenchmarksConducted: "How are benchmarks conducted?",
	weRunStandardizedTestsIn: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
	whichLibrariesAreCurrentlySupported: "Which libraries are currently supported?",
	weSupportReactI18nextReact: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
	canISubmitMyOwn: "Can I submit my own benchmarks?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
	howOftenAreBenchmarksUpdated: "How often are benchmarks updated?",
	weReRunAllBenchmarks: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
	isTheDataReliable: "Is the data reliable?",
	weFollowRigorousStatisticalMethodology: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
	doYouOfferConsultingServices: "Do you offer consulting services?",
	yesOurEnterprisePlanIncludes: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
	howCanIContribute: "How can I contribute?",
	thereAreManyWaysTo: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
};
export { e as default };
var e = {
	resources: "Resources",
	contact: "Contact",
	github: "GitHub",
	methodology: "Methodology",
	contributing: "Contributing",
	builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
};
export { e as default };
var e = {
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
};
export { e as default };
var e = {
	aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	viewResults: "View Results"
};
export { e as default };
var e = {
	hero: {
		aTestApplicationDesignedTo: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
		viewResults: "Посмотреть результаты"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "Почему эти показатели важны",
		bundleSize: "Размер бандла",
		theBundleIsTheData: "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.",
		renderingHydration: "Рендеринг и гидратация",
		connectingALargeJsonDictionary: "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).",
		dynamicLoading: "Динамическая загрузка",
		loadingAllTranslationsUpfrontOverloads: "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо."
	},
	"understanding-impact": {
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
		thisTestAppProvidesA: "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека измеряется в идентичных условиях."
	},
	"results-table": {
		sampleResults: "Примеры результатов",
		bundleSize: "Размер бандла",
		lookupTime: "Время поиска",
		lazyLoading: "Ленивая загрузка"
	}
};
export { e as default };
var e = {
	hero: {
		aTestApplicationDesignedTo: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
		viewResults: "Voir les résultats"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "Pourquoi ces mesures sont importantes",
		bundleSize: "Taille du bundle",
		theBundleIsTheData: "Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
		renderingHydration: "Rendu & Hydratation",
		connectingALargeJsonDictionary: "La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
		dynamicLoading: "Chargement dynamique",
		loadingAllTranslationsUpfrontOverloads: "Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel."
	},
	"understanding-impact": {
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
	},
	"results-table": {
		sampleResults: "Exemples de résultats",
		bundleSize: "Taille du bundle",
		lookupTime: "Temps de recherche",
		lazyLoading: "Chargement différé"
	}
};
export { e as default };
var e = {
	hero: {
		aTestApplicationDesignedTo: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.",
		viewResults: "Ver resultados"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "Por qué son importantes estas métricas",
		bundleSize: "Tamaño del bundle",
		theBundleIsTheData: "El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.",
		renderingHydration: "Renderizado e hidratación",
		connectingALargeJsonDictionary: "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).",
		dynamicLoading: "Carga dinámica",
		loadingAllTranslationsUpfrontOverloads: "Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial."
	},
	"understanding-impact": {
		understandingTheImpact: "Entendiendo el impacto",
		whyASingleLargeJson: "Por qué un solo JSON grande puede perjudicar el rendimiento",
		manyI18nLibrariesStoreTranslations: "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
		theJsonMustBeParsed: "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.",
		contextBasedArchitecturesCanCause: "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.",
		duringServerSideRenderingThe: "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.",
		theTradeOffsOfDynamic: "Las compensaciones de la carga dinámica",
		splittingTranslationsIntoPerRoute: "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:",
		waterfallRequests: "Solicitudes en cascada:",
		flashOfUntranslatedContentFouc: "Parpadeo de contenido no traducido (FOUC):",
		cacheInvalidation: "Invalidación de la caché:",
		whatThisBenchmarkMeasures: "Qué mide este benchmark",
		thisTestAppProvidesA: "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables."
	},
	"results-table": {
		sampleResults: "Resultados de muestra",
		bundleSize: "Tamaño del bundle",
		lookupTime: "Tiempo de búsqueda",
		lazyLoading: "Carga diferida"
	}
};
export { e as default };
var e = {
	hero: {
		aTestApplicationDesignedTo: "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.",
		viewResults: "Ergebnisse anzeigen"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "Warum diese Metriken wichtig sind",
		bundleSize: "Bundle-Größe",
		theBundleIsTheData: "Das Bundle sind die Daten, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobytes bis zu zig Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.",
		renderingHydration: "Rendering & Hydratisierung",
		connectingALargeJsonDictionary: "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.",
		dynamicLoading: "Dynamisches Laden",
		loadingAllTranslationsUpfrontOverloads: "Das Laden aller Übersetzungen im Voraus überlastet den initialen Payload. Dynamisches (Lazy) Loading teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetzten Inhalten (FOUC) und Cache-Komplexität. Die Messung beider Strategien ist essenziell."
	},
	"understanding-impact": {
		understandingTheImpact: "Die Auswirkungen verstehen",
		whyASingleLargeJson: "Warum ein einziges großes JSON die Leistung beeinträchtigen kann",
		manyI18nLibrariesStoreTranslations: "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
		theJsonMustBeParsed: "Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.",
		contextBasedArchitecturesCanCause: "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
		duringServerSideRenderingThe: "Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.",
		theTradeOffsOfDynamic: "Die Kompromisse beim dynamischen Laden",
		splittingTranslationsIntoPerRoute: "Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
		waterfallRequests: "Waterfall-Anfragen:",
		flashOfUntranslatedContentFouc: "Aufblitzen von nicht übersetztem Inhalt (FOUC):",
		cacheInvalidation: "Cache-Invalidierung:",
		whatThisBenchmarkMeasures: "Was dieser Benchmark misst",
		thisTestAppProvidesA: "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind."
	},
	"results-table": {
		sampleResults: "Beispielergebnisse",
		bundleSize: "Bundle-Größe",
		lookupTime: "Suchzeit",
		lazyLoading: "Lazy Loading"
	}
};
export { e as default };
var e = {
	hero: {
		aTestApplicationDesignedTo: "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーションです。",
		viewResults: "結果を表示"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "なぜこれらの指標が重要なのか",
		bundleSize: "バンドルサイズ",
		theBundleIsTheData: "バンドルとは、世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に、多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリは、ランタイムコードだけで数キロバイトから数十キロバイトまで重量が大きく異なり、さらに翻訳ファイル自体が加わります。",
		renderingHydration: "レンダリングとハイドレーション",
		connectingALargeJsonDictionary: "すべてのコンポーネントに大規模なJSON辞書を接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体のリレンダリングを引き起こす可能性があります。SSRのハイドレーション中に巨大な翻訳オブジェクトを解析してアタッチすると、ページがインタラクティブになるまでの遅延が発生し、Time to Interactive (TTI) に直接影響します。",
		dynamicLoading: "動的ロード",
		loadingAllTranslationsUpfrontOverloads: "すべての翻訳を事前にロードすると、初期ペイロードが過負荷になります。動的（遅延）ロードは、ルートや名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延ロードには、ウォーターフォールリクエスト、翻訳されていないコンテンツのちらつき（FOUC）、キャッシュの複雑さなどのトレードオフが伴います。両方の戦略を測定することが不可欠です。"
	},
	"understanding-impact": {
		understandingTheImpact: "影響を理解する",
		whyASingleLargeJson: "なぜ単一の大きなJSONがパフォーマンスを低下させるのか",
		manyI18nLibrariesStoreTranslations: "多くのi18nライブラリは、Reactコンテキストを通じて提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：",
		theJsonMustBeParsed: "JSONはページロードごとに解析される必要があり、メインスレッドをブロックします。",
		contextBasedArchitecturesCanCause: "コンテキストベースのアーキテクチャでは、ロケールが変更されたときに連鎖的なリレンダリングが発生する可能性があります。特定のキーが変更されていなくても、すべてのコンシューマーに通知が届くためです。",
		duringServerSideRenderingThe: "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増大します。",
		theTradeOffsOfDynamic: "動的ロードのトレードオフ",
		splittingTranslationsIntoPerRoute: "翻訳をルート別または名前空間別のチャンクに分割すると、初期ペイロードを大幅に削減できます。しかし、新たな課題が生じます：",
		waterfallRequests: "ウォーターフォールリクエスト：",
		flashOfUntranslatedContentFouc: "翻訳されていないコンテンツのちらつき (FOUC)：",
		cacheInvalidation: "キャッシュの無効化：",
		whatThisBenchmarkMeasures: "このベンチマークが測定するもの",
		thisTestAppProvidesA: "このテストアプリは、現実的なコンテンツを含む10ページ構成の制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延ロード戦略の有効性です。各ライブラリは同じアプリに統合されるため、結果を直接比較できます。"
	},
	"results-table": {
		sampleResults: "サンプル結果",
		bundleSize: "バンドルサイズ",
		lookupTime: "検索時間",
		lazyLoading: "遅延ロード"
	}
};
export { e as default };
var e = {
	hero: {
		aTestApplicationDesignedTo: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
		viewResults: "Ver Resultados"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "Por que essas métricas são importantes",
		bundleSize: "Tamanho do Bundle",
		theBundleIsTheData: "O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. i18n libraries variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.",
		renderingHydration: "Renderização e Hidratação",
		connectingALargeJsonDictionary: "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
		dynamicLoading: "Carregamento Dinâmico",
		loadingAllTranslationsUpfrontOverloads: "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento tardio introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial."
	},
	"understanding-impact": {
		understandingTheImpact: "Entendendo o impacto",
		whyASingleLargeJson: "Por que um único JSON grande pode prejudicar o desempenho",
		manyI18nLibrariesStoreTranslations: "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa :",
		theJsonMustBeParsed: "O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.",
		contextBasedArchitecturesCanCause: "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.",
		duringServerSideRenderingThe: "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.",
		theTradeOffsOfDynamic: "As compensações do carregamento dinâmico",
		splittingTranslationsIntoPerRoute: "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:",
		waterfallRequests: "Pedidos em cascata:",
		flashOfUntranslatedContentFouc: "Flash de conteúdo não traduzido (FOUC):",
		cacheInvalidation: "Invalidação de cache:",
		whatThisBenchmarkMeasures: "O que este benchmark mede",
		thisTestAppProvidesA: "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis."
	},
	"results-table": {
		sampleResults: "Resultados de amostra",
		bundleSize: "Tamanho do bundle",
		lookupTime: "Tempo de consulta",
		lazyLoading: "Carregamento lento"
	}
};
export { e as default };
var e = {
	hero: {
		aTestApplicationDesignedTo: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
		viewResults: "Visualizza i risultati"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "Perché queste metriche sono importanti",
		bundleSize: "Dimensione del bundle",
		theBundleIsTheData: "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
		renderingHydration: "Rendering e idratazione",
		connectingALargeJsonDictionary: "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
		dynamicLoading: "Caricamento dinamico",
		loadingAllTranslationsUpfrontOverloads: "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale."
	},
	"understanding-impact": {
		understandingTheImpact: "Capire l'impatto",
		whyASingleLargeJson: "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni",
		manyI18nLibrariesStoreTranslations: "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa :",
		theJsonMustBeParsed: "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.",
		contextBasedArchitecturesCanCause: "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
		duringServerSideRenderingThe: "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.",
		theTradeOffsOfDynamic: "I compromessi del caricamento dinamico",
		splittingTranslationsIntoPerRoute: "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:",
		waterfallRequests: "Richieste a cascata:",
		flashOfUntranslatedContentFouc: "Flash di contenuti non tradotti (FOUC):",
		cacheInvalidation: "Invalidazione della cache:",
		whatThisBenchmarkMeasures: "Cosa misura questo benchmark",
		thisTestAppProvidesA: "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili."
	},
	"results-table": {
		sampleResults: "Risultati di esempio",
		bundleSize: "Dimensione del bundle",
		lookupTime: "Tempo di ricerca",
		lazyLoading: "Caricamento lazy"
	}
};
export { e as default };
var e = {
	hero: {
		aTestApplicationDesignedTo: "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
		viewResults: "결과 보기"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "이 지표가 중요한 이유",
		bundleSize: "번들 크기",
		theBundleIsTheData: "번들은 전 세계 모든 사용자에게 전송되는 데이터를 나타냅니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 발생하는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 런타임 코드만으로도 수 킬로바이트에서 수십 킬로바이트까지 무게가 크게 다르며, 여기에 번역 파일 자체가 추가됩니다.",
		renderingHydration: "렌더링 및 수화(Hydration)",
		connectingALargeJsonDictionary: "모든 컴포넌트에 대규모 JSON 사전(dictionary)을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 유발할 수 있습니다. SSR 수화 단계에서 방대한 번역 객체를 파싱하고 연결하면 페이지가 상호작용 가능해지는 시간까지 지연이 발생하며, 이는 Time to Interactive (TTI) 에 직접적인 영향을 미칩니다.",
		dynamicLoading: "동적 로딩",
		loadingAllTranslationsUpfrontOverloads: "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 깜빡임(FOUC), 캐시 복잡성 등 자체적인 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다."
	},
	"understanding-impact": {
		understandingTheImpact: "영향 이해하기",
		whyASingleLargeJson: "왜 단일 대형 JSON이 성능을 저하시키는 이유",
		manyI18nLibrariesStoreTranslations: "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:",
		theJsonMustBeParsed: "JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.",
		contextBasedArchitecturesCanCause: "컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.",
		duringServerSideRenderingThe: "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.",
		theTradeOffsOfDynamic: "동적 로딩의 트레이드오프",
		splittingTranslationsIntoPerRoute: "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:",
		waterfallRequests: "워터폴(Waterfall) 요청:",
		flashOfUntranslatedContentFouc: "번역되지 않은 콘텐츠의 깜빡임 (FOUC):",
		cacheInvalidation: "캐시 무효화:",
		whatThisBenchmarkMeasures: "이 벤치마크가 측정하는 것",
		thisTestAppProvidesA: "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다."
	},
	"results-table": {
		sampleResults: "샘플 결과",
		bundleSize: "번들 크기",
		lookupTime: "조회 시간",
		lazyLoading: "지연 로딩"
	}
};
export { e as default };
var e = {
	hero: {
		aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		viewResults: "View Results"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "Why These Metrics Matter",
		bundleSize: "Bundle Size",
		theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		renderingHydration: "Rendering & Hydration",
		connectingALargeJsonDictionary: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		dynamicLoading: "Dynamic Loading",
		loadingAllTranslationsUpfrontOverloads: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
	},
	"understanding-impact": {
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
	},
	"results-table": {
		sampleResults: "Sample Results",
		bundleSize: "Bundle Size",
		lookupTime: "Lookup Time",
		lazyLoading: "Lazy Loading"
	}
};
export { e as default };
var e = {
	hero: {
		aTestApplicationDesignedTo: "一个测试应用程序，旨在衡量国际化库对捆绑包大小、加载性能和渲染反应性的真实影响。",
		viewResults: "查看结果"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "为什么这些指标很重要",
		bundleSize: "捆绑包大小",
		theBundleIsTheData: "捆绑包是发送给全球每个用户的数据。捆绑包越大意味着下载时间越长——特别是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。",
		renderingHydration: "渲染与水合",
		connectingALargeJsonDictionary: "将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译环境中的任何更改都可能触发整个树的重新渲染。在 SSR 水合期间，解析和附加庞大的翻译对象会增加页面变得可交互之前的延迟——直接影响可交互时间 (TTI)。",
		dynamicLoading: "动态加载",
		loadingAllTranslationsUpfrontOverloads: "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了其自身的权衡：瀑布式请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。"
	},
	"understanding-impact": {
		understandingTheImpact: "了解影响",
		whyASingleLargeJson: "为什么单个大型 JSON 会损害性能",
		manyI18nLibrariesStoreTranslations: "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：",
		theJsonMustBeParsed: "必须在每次页面加载时解析 JSON——阻塞主线程。",
		contextBasedArchitecturesCanCause: "基于上下文的架构可能会在语言环境更改时导致级联重新渲染，因为即使特定键未更改，也会通知每个消费者。",
		duringServerSideRenderingThe: "在服务器端渲染期间，整个字典被序列化为 HTML 负载，增加了必须下载和水合的文档大小。",
		theTradeOffsOfDynamic: "动态加载的权衡",
		splittingTranslationsIntoPerRoute: "将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但这引入了新的挑战：",
		waterfallRequests: "瀑布式请求：",
		flashOfUntranslatedContentFouc: "未翻译内容的闪烁 (FOUC)：",
		cacheInvalidation: "缓存失效：",
		whatThisBenchmarkMeasures: "该基准测试测量什么",
		thisTestAppProvidesA: "本测试应用提供了一个受控环境——10 个包含真实内容的页面——以便从三个轴比较 i18n 库：它们为 JavaScript 捆绑包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和延迟加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。"
	},
	"results-table": {
		sampleResults: "示例结果",
		bundleSize: "捆绑包大小",
		lookupTime: "查找时间",
		lazyLoading: "延迟加载"
	}
};
export { e as default };
var e = {
	seniorFrontendEngineer: "Senior Frontend Engineer",
	buildAndMaintainOurBenchmarking: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	backendEngineer: "Backend Engineer",
	designAndScaleOurCloud: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
	technicalWriter: "Technical Writer",
	createComprehensiveGuidesApiReferences: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
	devrelEngineer: "DevRel Engineer",
	sanFranciscoRemote: "San Francisco / Remote",
	engageWithTheI18nCommunity: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
	qaEngineer: "QA Engineer",
	ensureTheAccuracyAndReliability: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
	openPositions: "Open Positions",
	applyNow: "Apply Now",
	remote: "Remote",
	fullTime: "Full-time",
	partTime: "Part-time",
	engineering: "Engineering",
	documentation: "Documentation",
	community: "Community"
};
export { e as default };
var e = {
	"pricing-header": {
		simpleTransparentPricing: "심플하고 투명한 요금제",
		chooseThePlanThatFits: "팀에 맞는 플랜을 선택하세요. 숨겨진 수수료는 없습니다."
	},
	"pricing-tiers": {
		starter: "스타터",
		price0: "0원",
		forever: "영원히",
		benchmarkRunPerDay: "하루 {runs}회 벤치마크 실행",
		librariesNumber: "{libs}개 라이브러리",
		communitySupport: "커뮤니티 지원",
		publicResults: "결과 공개",
		pro: "프로",
		price29: "39,000원",
		month: "/월",
		unlimitedRuns: "무제한 실행",
		allLibraries: "모든 라이브러리",
		prioritySupport: "우선 지원",
		privateResults: "결과 비공개",
		ciIntegration: "CI 통합",
		historicalData: "기록 데이터",
		enterprise: "엔터프라이즈",
		customPrice: "커스텀",
		everythingInPro: "Pro의 모든 기능 포함",
		onPremiseOption: "온프레미스 옵션",
		ssoSaml: "SSO 및 SAML",
		dedicatedAccountManager: "전담 어카운트 매니저",
		customSlas: "맞춤형 SLA",
		auditLogs: "감사 로그",
		trainingSessions: "교육 세션",
		contactSales: "영업팀 문의",
		getStarted: "시작하기"
	}
};
export { e as default };
var e = {
	"pricing-header": {
		simpleTransparentPricing: "Simple, Transparent Pricing",
		chooseThePlanThatFits: "Choose the plan that fits your team. No hidden fees."
	},
	"pricing-tiers": {
		starter: "Starter",
		price0: "$0",
		forever: "forever",
		benchmarkRunPerDay: "{runs} benchmark runs/day",
		librariesNumber: "{libs} libraries",
		communitySupport: "Community support",
		publicResults: "Public results",
		pro: "Pro",
		price29: "$29",
		month: "/month",
		unlimitedRuns: "Unlimited runs",
		allLibraries: "All libraries",
		prioritySupport: "Priority support",
		privateResults: "Private results",
		ciIntegration: "CI integration",
		historicalData: "Historical data",
		enterprise: "Enterprise",
		customPrice: "Custom",
		everythingInPro: "Everything in Pro",
		onPremiseOption: "On-premise option",
		ssoSaml: "SSO & SAML",
		dedicatedAccountManager: "Dedicated account manager",
		customSlas: "Custom SLAs",
		auditLogs: "Audit logs",
		trainingSessions: "Training sessions",
		contactSales: "Contact Sales",
		getStarted: "Get Started"
	}
};
export { e as default };
var e = {
	"pricing-header": {
		simpleTransparentPricing: "Einfache, transparente Preisgestaltung",
		chooseThePlanThatFits: "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren."
	},
	"pricing-tiers": {
		starter: "Starter",
		price0: "0 $",
		forever: "für immer",
		benchmarkRunPerDay: "{runs} Benchmark-Durchläufe/Tag",
		librariesNumber: "{libs} Bibliotheken",
		communitySupport: "Community-Support",
		publicResults: "Öffentliche Ergebnisse",
		pro: "Pro",
		price29: "29 $",
		month: "/Monat",
		unlimitedRuns: "Unbegrenzte Durchläufe",
		allLibraries: "Alle Bibliotheken",
		prioritySupport: "Prioritäts-Support",
		privateResults: "Private Ergebnisse",
		ciIntegration: "CI-Integration",
		historicalData: "Historische Daten",
		enterprise: "Enterprise",
		customPrice: "Individuell",
		everythingInPro: "Alles in Pro",
		onPremiseOption: "On-Premise-Option",
		ssoSaml: "SSO & SAML",
		dedicatedAccountManager: "Dedizierter Account-Manager",
		customSlas: "Individuelle SLAs",
		auditLogs: "Audit-Logs",
		trainingSessions: "Schulungen",
		contactSales: "Vertrieb kontaktieren",
		getStarted: "Jetzt starten"
	}
};
export { e as default };
var e = {
	"pricing-header": {
		simpleTransparentPricing: "Precios simples y transparentes",
		chooseThePlanThatFits: "Elige el plan que se adapte a tu equipo. Sin cargos ocultos."
	},
	"pricing-tiers": {
		starter: "Starter",
		price0: "0 $",
		forever: "para siempre",
		benchmarkRunPerDay: "{runs} ejecuciones de benchmark/día",
		librariesNumber: "{libs} bibliotecas",
		communitySupport: "Soporte de la comunidad",
		publicResults: "Resultados públicos",
		pro: "Pro",
		price29: "29 $",
		month: "/mes",
		unlimitedRuns: "Ejecuciones ilimitadas",
		allLibraries: "Todas las bibliotecas",
		prioritySupport: "Soporte prioritario",
		privateResults: "Resultados privados",
		ciIntegration: "Integración CI",
		historicalData: "Datos históricos",
		enterprise: "Enterprise",
		customPrice: "Personalizado",
		everythingInPro: "Todo lo que hay en Pro",
		onPremiseOption: "Opción on-premise",
		ssoSaml: "SSO y SAML",
		dedicatedAccountManager: "Gestor de cuentas dedicado",
		customSlas: "SLA personalizados",
		auditLogs: "Registros de auditoría",
		trainingSessions: "Sesiones de formación",
		contactSales: "Contactar con ventas",
		getStarted: "Empezar"
	}
};
export { e as default };
var e = {
	"pricing-header": {
		simpleTransparentPricing: "シンプルで透明性の高い価格設定",
		chooseThePlanThatFits: "チームに合ったプランをお選びください。隠れた費用はありません。"
	},
	"pricing-tiers": {
		starter: "スターター",
		price0: "0円",
		forever: "永久に無料",
		benchmarkRunPerDay: "1日あたり {runs} 回のベンチマーク実行",
		librariesNumber: "{libs} ライブラリ",
		communitySupport: "コミュニティサポート",
		publicResults: "結果を公開",
		pro: "プロ",
		price29: "3,900円",
		month: "/月",
		unlimitedRuns: "無制限の実行",
		allLibraries: "すべてのライブラリ",
		prioritySupport: "優先サポート",
		privateResults: "結果を非公開",
		ciIntegration: "CI統合",
		historicalData: "履歴データ",
		enterprise: "エンタープライズ",
		customPrice: "カスタム",
		everythingInPro: "Proのすべての機能を含む",
		onPremiseOption: "オンプレミスオプション",
		ssoSaml: "SSO & SAML",
		dedicatedAccountManager: "専任のアカウントマネージャー",
		customSlas: "カスタムSLA",
		auditLogs: "監査ログ",
		trainingSessions: "トレーニングセッション",
		contactSales: "営業に問い合わせる",
		getStarted: "始める"
	}
};
export { e as default };
var e = {
	"pricing-header": {
		simpleTransparentPricing: "Простое и прозрачное ценообразование",
		chooseThePlanThatFits: "Выберите план, который подходит вашей команде. Никаких скрытых комиссий."
	},
	"pricing-tiers": {
		starter: "Starter",
		price0: "0 $",
		forever: "навсегда",
		benchmarkRunPerDay: "{runs} запусков бенчмарка в день",
		librariesNumber: "{libs} библиотек",
		communitySupport: "Сообщество поддержки",
		publicResults: "Публичные результаты",
		pro: "Pro",
		price29: "29 $",
		month: "/месяц",
		unlimitedRuns: "Неограниченное количество запусков",
		allLibraries: "Все библиотеки",
		prioritySupport: "Приоритетная поддержка",
		privateResults: "Приватные результаты",
		ciIntegration: "Интеграция с CI",
		historicalData: "Исторические данные",
		enterprise: "Корпоративный",
		customPrice: "Индивидуальная цена",
		everythingInPro: "Все возможности Pro",
		onPremiseOption: "Локальное развертывание",
		ssoSaml: "SSO и SAML",
		dedicatedAccountManager: "Выделенный менеджер",
		customSlas: "Индивидуальные SLA",
		auditLogs: "Журналы аудита",
		trainingSessions: "Сессии обучения",
		contactSales: "Связаться с отделом продаж",
		getStarted: "Начать"
	}
};
export { e as default };
var e = {
	"pricing-header": {
		simpleTransparentPricing: "简单、透明的价格",
		chooseThePlanThatFits: "选择适合您团队的计划。无隐藏费用。"
	},
	"pricing-tiers": {
		starter: "入门版",
		price0: "¥0",
		forever: "永久",
		benchmarkRunPerDay: "每天 {runs} 次基准测试运行",
		librariesNumber: "{libs} 个库",
		communitySupport: "社区支持",
		publicResults: "公开结果",
		pro: "专业版",
		price29: "¥199",
		month: "/月",
		unlimitedRuns: "无限次运行",
		allLibraries: "所有库",
		prioritySupport: "优先支持",
		privateResults: "私有结果",
		ciIntegration: "CI 集成",
		historicalData: "历史数据",
		enterprise: "企业版",
		customPrice: "定制",
		everythingInPro: "包含专业版所有功能",
		onPremiseOption: "本地部署选项",
		ssoSaml: "SSO 和 SAML",
		dedicatedAccountManager: "专属客户经理",
		customSlas: "定制 SLA",
		auditLogs: "审计日志",
		trainingSessions: "培训课程",
		contactSales: "联系销售",
		getStarted: "开始使用"
	}
};
export { e as default };
var e = {
	"pricing-header": {
		simpleTransparentPricing: "Une tarification simple et transparente",
		chooseThePlanThatFits: "Choisissez l'offre qui convient à votre équipe. Pas de frais cachés."
	},
	"pricing-tiers": {
		starter: "Starter",
		price0: "0 €",
		forever: "pour toujours",
		benchmarkRunPerDay: "{runs} passages de benchmark / jour",
		librariesNumber: "{libs} bibliothèques",
		communitySupport: "Support communautaire",
		publicResults: "Résultats publics",
		pro: "Pro",
		price29: "29 €",
		month: "/ mois",
		unlimitedRuns: "Passages illimités",
		allLibraries: "Toutes les bibliothèques",
		prioritySupport: "Support prioritaire",
		privateResults: "Résultats privés",
		ciIntegration: "Intégration CI",
		historicalData: "Données historiques",
		enterprise: "Enterprise",
		customPrice: "Sur mesure",
		everythingInPro: "Tout ce qui est dans Pro",
		onPremiseOption: "Option sur site (on-premise)",
		ssoSaml: "SSO & SAML",
		dedicatedAccountManager: "Gestionnaire de compte dédié",
		customSlas: "SLA personnalisés",
		auditLogs: "Journaux d'audit",
		trainingSessions: "Sessions de formation",
		contactSales: "Contacter le service commercial",
		getStarted: "Démarrer"
	}
};
export { e as default };
var e = {
	"pricing-header": {
		simpleTransparentPricing: "Preços Simples e Trasparentes",
		chooseThePlanThatFits: "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas."
	},
	"pricing-tiers": {
		starter: "Starter",
		price0: "0 $",
		forever: "para sempre",
		benchmarkRunPerDay: "{runs} execuções de benchmark por dia",
		librariesNumber: "{libs} bibliotecas",
		communitySupport: "Suporte da comunidade",
		publicResults: "Resultados públicos",
		pro: "Pro",
		price29: "29 $",
		month: "/mês",
		unlimitedRuns: "Execuções ilimitadas",
		allLibraries: "Todas as bibliotecas",
		prioritySupport: "Suporte prioritário",
		privateResults: "Resultados privados",
		ciIntegration: "Integração CI",
		historicalData: "Dados históricos",
		enterprise: "Enterprise",
		customPrice: "Personalizado",
		everythingInPro: "Tudo o que está no Pro",
		onPremiseOption: "Opção on-premise",
		ssoSaml: "SSO & SAML",
		dedicatedAccountManager: "Gerente de conta dedicado",
		customSlas: "SLAs personalizados",
		auditLogs: "Logs de auditoria",
		trainingSessions: "Sessões de treinamento",
		contactSales: "Contatar Vendas",
		getStarted: "Começar"
	}
};
export { e as default };
var e = {
	"pricing-header": {
		simpleTransparentPricing: "Prezzi Semplici e Trasparenti",
		chooseThePlanThatFits: "Scegli il piano adatto al tuo team. Nessun costo nascosto."
	},
	"pricing-tiers": {
		starter: "Starter",
		price0: "0 $",
		forever: "per sempre",
		benchmarkRunPerDay: "{runs} esecuzioni benchmark/giorno",
		librariesNumber: "{libs} librerie",
		communitySupport: "Supporto della comunità",
		publicResults: "Risultati pubblici",
		pro: "Pro",
		price29: "29 $",
		month: "/mese",
		unlimitedRuns: "Esecuzioni illimitate",
		allLibraries: "Tutte le librerie",
		prioritySupport: "Supporto prioritario",
		privateResults: "Risultati privati",
		ciIntegration: "Integrazione CI",
		historicalData: "Dati storici",
		enterprise: "Enterprise",
		customPrice: "Personalizzato",
		everythingInPro: "Tutto quello che c'è in Pro",
		onPremiseOption: "Opzione in locale",
		ssoSaml: "SSO e SAML",
		dedicatedAccountManager: "Account manager dedicato",
		customSlas: "SLA personalizzati",
		auditLogs: "Registri di controllo",
		trainingSessions: "Sessioni di formazione",
		contactSales: "Contatta l'ufficio vendite",
		getStarted: "Inizia ora"
	}
};
export { e as default };
var e = {
	"products-header": { toolsAndServicesToStreamline: "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização." },
	"products-grid": {
		benchmarkCli: "CLI de Benchmark",
		runBenchmarksLocallyFromYour: "Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.",
		benchmarkCloud: "Benchmark Cloud",
		automatedCloudBasedBenchmarkingWith: "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.",
		benchmarkEnterprise: "Benchmark Enterprise",
		onPremiseDeploymentWithSso: "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.",
		contactUs: "Contate-nos",
		migrationAssistant: "Assistente de Migração",
		aiPoweredToolThatHelps: "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.",
		translationQa: "QA de Tradução",
		automatedQualityChecksForMissing: "Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.",
		bundleOptimizer: "Otimizador de Bundle",
		analyzesAndOptimizesYourI18n: "Analisa e optimiza o seu bundle i18n para produção com tree-shaking e divisão de código.",
		learnMore: "Saiba Mais"
	}
};
export { e as default };
var e = {
	"products-header": { toolsAndServicesToStreamline: "国際化ワークフローを合理化するためのツールとサービス。" },
	"products-grid": {
		benchmarkCli: "Benchmark CLI",
		runBenchmarksLocallyFromYour: "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートします。",
		benchmarkCloud: "Benchmark Cloud",
		automatedCloudBasedBenchmarkingWith: "履歴追跡、アラート、チームダッシュボードを備えた自動化されたクラウドベースのベンチマーク。",
		benchmarkEnterprise: "Benchmark Enterprise",
		onPremiseDeploymentWithSso: "SSO、監査ログ、カスタムSLA、専任のサポートを備えたオンプレミス展開。",
		contactUs: "お問い合わせ",
		migrationAssistant: "移行アシスタント",
		aiPoweredToolThatHelps: "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。",
		translationQa: "翻訳QA",
		automatedQualityChecksForMissing: "欠落している翻訳、複数形の問題、コンテキストエラーに対する自動品質チェック。",
		bundleOptimizer: "バンドルオプティマイザー",
		analyzesAndOptimizesYourI18n: "プロダクション用にi18nバンドルを分析し、ツリーシェイキングやコード分割によって最適化します。",
		learnMore: "詳しく見る"
	}
};
export { e as default };
var e = {
	"products-header": { toolsAndServicesToStreamline: "국제화 워크플로우를 간소화하기 위한 도구 및 서비스." },
	"products-grid": {
		benchmarkCli: "Benchmark CLI",
		runBenchmarksLocallyFromYour: "터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.",
		benchmarkCloud: "Benchmark Cloud",
		automatedCloudBasedBenchmarkingWith: "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.",
		benchmarkEnterprise: "Benchmark Enterprise",
		onPremiseDeploymentWithSso: "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.",
		contactUs: "문의하기",
		migrationAssistant: "마이그레이션 어시스턴트",
		aiPoweredToolThatHelps: "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.",
		translationQa: "번역 QA",
		automatedQualityChecksForMissing: "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.",
		bundleOptimizer: "번들 옵티마이저",
		analyzesAndOptimizesYourI18n: "트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.",
		learnMore: "더 알아보기"
	}
};
export { e as default };
var e = {
	"products-header": { toolsAndServicesToStreamline: "简化国际化工作流程的工具和服务。" },
	"products-grid": {
		benchmarkCli: "基准测试 CLI",
		runBenchmarksLocallyFromYour: "从终端本地运行基准测试。支持自定义配置和 CI 集成。",
		benchmarkCloud: "基准测试云",
		automatedCloudBasedBenchmarkingWith: "自动化的基于云的基准测试，具有历史跟踪、警报和团队仪表板。",
		benchmarkEnterprise: "基准测试企业版",
		onPremiseDeploymentWithSso: "本地部署，具有 SSO、审计日志、定制 SLA 和专属支持。",
		contactUs: "联系我们",
		migrationAssistant: "迁移助手",
		aiPoweredToolThatHelps: "人工智能驱动的工具，可帮助您在 i18n 库之间无缝迁移代码库。",
		translationQa: "翻译质检",
		automatedQualityChecksForMissing: "针对翻译缺失、复数形式问题和上下文错误的自动化质量检查。",
		bundleOptimizer: "捆绑包优化器",
		analyzesAndOptimizesYourI18n: "分析并优化用于生产的 i18n 捆绑包，采用摇树优化 (tree-shaking) 和代码拆分。",
		learnMore: "了解更多"
	}
};
export { e as default };
var e = {
	"products-header": { toolsAndServicesToStreamline: "Strumenti e servizi per snellire il flusso di lavoro dell'internazionalizzazione." },
	"products-grid": {
		benchmarkCli: "CLI del Benchmark",
		runBenchmarksLocallyFromYour: "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.",
		benchmarkCloud: "Benchmark Cloud",
		automatedCloudBasedBenchmarkingWith: "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.",
		benchmarkEnterprise: "Benchmark Enterprise",
		onPremiseDeploymentWithSso: "Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.",
		contactUs: "Contattaci",
		migrationAssistant: "Assistente alla Migrazione",
		aiPoweredToolThatHelps: "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.",
		translationQa: "QA delle Traduzioni",
		automatedQualityChecksForMissing: "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.",
		bundleOptimizer: "Ottimizzatore del Bundle",
		analyzesAndOptimizesYourI18n: "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.",
		learnMore: "Scopri di più"
	}
};
export { e as default };
var e = {
	"products-header": { toolsAndServicesToStreamline: "Tools und Services zur Optimierung Ihres Internationalisierungs-Worflows." },
	"products-grid": {
		benchmarkCli: "Benchmark CLI",
		runBenchmarksLocallyFromYour: "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.",
		benchmarkCloud: "Benchmark Cloud",
		automatedCloudBasedBenchmarkingWith: "Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.",
		benchmarkEnterprise: "Benchmark Enterprise",
		onPremiseDeploymentWithSso: "On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.",
		contactUs: "Kontaktieren Sie uns",
		migrationAssistant: "Migrationsassistent",
		aiPoweredToolThatHelps: "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.",
		translationQa: "Übersetzungs-QA",
		automatedQualityChecksForMissing: "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.",
		bundleOptimizer: "Bundle-Optimierer",
		analyzesAndOptimizesYourI18n: "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.",
		learnMore: "Mehr erfahren"
	}
};
export { e as default };
var e = {
	"products-header": { toolsAndServicesToStreamline: "Tools and services to streamline your internationalization workflow." },
	"products-grid": {
		benchmarkCli: "Benchmark CLI",
		runBenchmarksLocallyFromYour: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
		benchmarkCloud: "Benchmark Cloud",
		automatedCloudBasedBenchmarkingWith: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
		benchmarkEnterprise: "Benchmark Enterprise",
		onPremiseDeploymentWithSso: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
		contactUs: "Contact Us",
		migrationAssistant: "Migration Assistant",
		aiPoweredToolThatHelps: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
		translationQa: "Translation QA",
		automatedQualityChecksForMissing: "Automated quality checks for missing translations, pluralization issues, and context errors.",
		bundleOptimizer: "Bundle Optimizer",
		analyzesAndOptimizesYourI18n: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
		learnMore: "Learn More"
	}
};
export { e as default };
var e = {
	"products-header": { toolsAndServicesToStreamline: "Des outils et services pour rationaliser votre flux de travail d'internationalisation." },
	"products-grid": {
		benchmarkCli: "CLI Benchmark",
		runBenchmarksLocallyFromYour: "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.",
		benchmarkCloud: "Benchmark Cloud",
		automatedCloudBasedBenchmarkingWith: "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.",
		benchmarkEnterprise: "Benchmark Enterprise",
		onPremiseDeploymentWithSso: "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.",
		contactUs: "Contactez-nous",
		migrationAssistant: "Assistant de migration",
		aiPoweredToolThatHelps: "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.",
		translationQa: "QA de traduction",
		automatedQualityChecksForMissing: "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.",
		bundleOptimizer: "Optimiseur de bundle",
		analyzesAndOptimizesYourI18n: "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.",
		learnMore: "En savoir plus"
	}
};
export { e as default };
var e = {
	"products-header": { toolsAndServicesToStreamline: "Инструменты и услуги для оптимизации рабочего процесса интернационализации." },
	"products-grid": {
		benchmarkCli: "CLI для бенчмаркинга",
		runBenchmarksLocallyFromYour: "Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.",
		benchmarkCloud: "Облачный бенчмаркинг",
		automatedCloudBasedBenchmarkingWith: "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.",
		benchmarkEnterprise: "Корпоративный бенчмаркинг",
		onPremiseDeploymentWithSso: "Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.",
		contactUs: "Связаться с нами",
		migrationAssistant: "Помощник по миграции",
		aiPoweredToolThatHelps: "Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.",
		translationQa: "Контроль качества перевода",
		automatedQualityChecksForMissing: "Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.",
		bundleOptimizer: "Оптимизатор бандлов",
		analyzesAndOptimizesYourI18n: "Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.",
		learnMore: "Узнать больше"
	}
};
export { e as default };
var e = {
	"products-header": { toolsAndServicesToStreamline: "Herramientas y servicios para agilizar tu flujo de trabajo de internacionalización." },
	"products-grid": {
		benchmarkCli: "CLI de Benchmark",
		runBenchmarksLocallyFromYour: "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.",
		benchmarkCloud: "Benchmark Cloud",
		automatedCloudBasedBenchmarkingWith: "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.",
		benchmarkEnterprise: "Benchmark Enterprise",
		onPremiseDeploymentWithSso: "Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.",
		contactUs: "Contáctanos",
		migrationAssistant: "Asistente de migración",
		aiPoweredToolThatHelps: "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.",
		translationQa: "QA de traducción",
		automatedQualityChecksForMissing: "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.",
		bundleOptimizer: "Optimizador de bundle",
		analyzesAndOptimizesYourI18n: "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.",
		learnMore: "Más información"
	}
};
export { e as default };
var e = {
	sampleResults: "Sample Results",
	bundleSize: "Bundle Size",
	lookupTime: "Lookup Time",
	lazyLoading: "Lazy Loading"
};
export { e as default };
var e = { route: {
	oopsPageNotFound: "おっと！ページが見つかりません",
	returnToHome: "ホームに戻る",
	couldNotMeasureHydrationDuration: "ハイドレーション期間を測定できませんでした:"
} };
export { e as default };
var e = { route: {
	oopsPageNotFound: "앗! 페이지를 찾을 수 없습니다",
	returnToHome: "홈으로 돌아가기",
	couldNotMeasureHydrationDuration: "수화 지속 시간을 측정할 수 없습니다:"
} };
export { e as default };
var e = { route: {
	oopsPageNotFound: "Oups ! Page non trouvée",
	returnToHome: "Retour à l'accueil",
	couldNotMeasureHydrationDuration: "Impossible de mesurer la durée d'hydratation :"
} };
export { e as default };
var e = { route: {
	oopsPageNotFound: "¡Ups! Página no encontrada",
	returnToHome: "Volver al Inicio",
	couldNotMeasureHydrationDuration: "No se pudo medir la duración de la hidratación:"
} };
export { e as default };
var e = { route: {
	oopsPageNotFound: "Hoppla! Seite nicht gefunden",
	returnToHome: "Zurück zur Startseite",
	couldNotMeasureHydrationDuration: "Hydratisierungsdauer konnte nicht gemessen werden:"
} };
export { e as default };
var e = { route: {
	oopsPageNotFound: "Ops! Página não encontrada",
	returnToHome: "Voltar para o Início",
	couldNotMeasureHydrationDuration: "Não foi possível medir a duração da hidratação:"
} };
export { e as default };
var e = { route: {
	oopsPageNotFound: "Oops! Page not found",
	returnToHome: "Return to Home",
	couldNotMeasureHydrationDuration: "Could not measure hydration duration:"
} };
export { e as default };
var e = { route: {
	oopsPageNotFound: "Ops! Pagina non trovata",
	returnToHome: "Torna alla Home",
	couldNotMeasureHydrationDuration: "Impossibile misurare la durata dell'idratazione:"
} };
export { e as default };
var e = { route: {
	oopsPageNotFound: "哎呀！页面未找到",
	returnToHome: "返回首页",
	couldNotMeasureHydrationDuration: "无法测量水合持续时间："
} };
export { e as default };
var e = { route: {
	oopsPageNotFound: "Упс! Страница не найдена",
	returnToHome: "Вернуться на главную",
	couldNotMeasureHydrationDuration: "Не удалось измерить продолжительность гидратации:"
} };
export { e as default };
var e = {
	"settings-header": { manageYourAccountPreferencesAnd: "Gestisci le preferenze del tuo account e la configurazione." },
	"profile-section": {
		displayName: "Nome visualizzato",
		profile: "Profilo",
		email: "Email"
	},
	"preferences-section": {
		emailNotifications: "Notifiche via email",
		receiveWeeklyBenchmarkReports: "Ricevi rapporti settimanali sui benchmark",
		toggleNotifications: "Attiva/disattiva notifiche",
		darkMode: "Modalità scura",
		useDarkColorScheme: "Usa lo schema colori scuro",
		toggleDarkMode: "Attiva/disattiva modalità scura",
		defaultLanguage: "Lingua predefinita",
		englishEn: "Inglese (en)",
		frenchFr: "Francese (fr)",
		germanDe: "Tedesco (de)",
		spanishEs: "Spagnolo (es)",
		japaneseJa: "Giapponese (ja)",
		chineseSimplifiedZhCn: "Chinese semplificato (zh-CN)",
		arabicAr: "Arabo (ar)"
	},
	"api-access-section": {
		apiAccess: "Accesso API",
		apiKey: "Chiave API",
		useThisKeyToAccess: "Usa questa chiave per accedere programmaticamente alle API di benchmarking."
	},
	"settings-footer": {
		saveChanges: "Salva modifiche",
		cancel: "Annulla"
	}
};
export { e as default };
var e = {
	"settings-header": { manageYourAccountPreferencesAnd: "Verwalten Sie Ihre Kontoeinstellungen und Konfigurationen." },
	"profile-section": {
		displayName: "Anzeigename",
		profile: "Profil",
		email: "E-Mail"
	},
	"preferences-section": {
		emailNotifications: "E-Mail-Benachrichtigungen",
		receiveWeeklyBenchmarkReports: "Wöchentliche Benchmark-Berichte erhalten",
		toggleNotifications: "Benachrichtigungen umschalten",
		darkMode: "Dunkelmodus",
		useDarkColorScheme: "Dunkles Farbschema verwenden",
		toggleDarkMode: "Dunkelmodus umschalten",
		defaultLanguage: "Standardsprache",
		englishEn: "Englisch (en)",
		frenchFr: "Französisch (fr)",
		germanDe: "Deutsch (de)",
		spanishEs: "Spanisch (es)",
		japaneseJa: "Japanisch (ja)",
		chineseSimplifiedZhCn: "Chinesisch vereinfacht (zh-CN)",
		arabicAr: "Arabisch (ar)"
	},
	"api-access-section": {
		apiAccess: "API-Zugriff",
		apiKey: "API-Schlüssel",
		useThisKeyToAccess: "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen."
	},
	"settings-footer": {
		saveChanges: "Änderungen speichern",
		cancel: "Abbrechen"
	}
};
export { e as default };
var e = {
	"settings-header": { manageYourAccountPreferencesAnd: "Gerencie as preferências de sua conta e a configuração." },
	"profile-section": {
		displayName: "Nome de exibição",
		profile: "Perfil",
		email: "E-mail"
	},
	"preferences-section": {
		emailNotifications: "Notificações por e-mail",
		receiveWeeklyBenchmarkReports: "Receber relatórios semanais de benchmarks",
		toggleNotifications: "Alternar notificações",
		darkMode: "Modo Escuro",
		useDarkColorScheme: "Usar esquema de cores escuras",
		toggleDarkMode: "Alternar modo escuro",
		defaultLanguage: "Idioma Padrão",
		englishEn: "Inglês (en)",
		frenchFr: "Francês (fr)",
		germanDe: "Alemão (de)",
		spanishEs: "Espanhol (es)",
		japaneseJa: "Japonês (ja)",
		chineseSimplifiedZhCn: "Chinês simplificado (zh-CN)",
		arabicAr: "Arabe (ar)"
	},
	"api-access-section": {
		apiAccess: "Acesso à API",
		apiKey: "Chave da API",
		useThisKeyToAccess: "Utilize esta chave para acessar a API de benchmarking de forma programática."
	},
	"settings-footer": {
		saveChanges: "Salvar alterações",
		cancel: "Cancelar"
	}
};
export { e as default };
var e = {
	"settings-header": { manageYourAccountPreferencesAnd: "管理您的帐户首选项和配置。" },
	"profile-section": {
		displayName: "显示名称",
		profile: "个人资料",
		email: "电子邮件"
	},
	"preferences-section": {
		emailNotifications: "电子邮件通知",
		receiveWeeklyBenchmarkReports: "接收每周基准测试报告",
		toggleNotifications: "切换通知",
		darkMode: "暗色模式",
		useDarkColorScheme: "使用暗色配色方案",
		toggleDarkMode: "切换暗色模式",
		defaultLanguage: "默认语言",
		englishEn: "英语 (en)",
		frenchFr: "法语 (fr)",
		germanDe: "德语 (de)",
		spanishEs: "西班牙语 (es)",
		japaneseJa: "日语 (ja)",
		chineseSimplifiedZhCn: "中文简体 (zh-CN)",
		arabicAr: "阿拉伯语 (ar)"
	},
	"api-access-section": {
		apiAccess: "API 访问",
		apiKey: "API 密钥",
		useThisKeyToAccess: "使用此密钥以编程方式访问基准测试 API。"
	},
	"settings-footer": {
		saveChanges: "保存更改",
		cancel: "取消"
	}
};
export { e as default };
var e = {
	"settings-header": { manageYourAccountPreferencesAnd: "アカウントの設定と構成を管理します。" },
	"profile-section": {
		displayName: "表示名",
		profile: "プロフィール",
		email: "メールアドレス"
	},
	"preferences-section": {
		emailNotifications: "メール通知",
		receiveWeeklyBenchmarkReports: "週刊ベンチマークレポートを受け取る",
		toggleNotifications: "通知を切り替える",
		darkMode: "ダークモード",
		useDarkColorScheme: "ダークカラー配分を使用",
		toggleDarkMode: "ダークモードを切り替える",
		defaultLanguage: "デフォルトの言語",
		englishEn: "英語 (en)",
		frenchFr: "フランス語 (fr)",
		germanDe: "ドイツ語 (de)",
		spanishEs: "スペイン語 (es)",
		japaneseJa: "日本語 (ja)",
		chineseSimplifiedZhCn: "中国語 簡体字 (zh-CN)",
		arabicAr: "アラビア語 (ar)"
	},
	"api-access-section": {
		apiAccess: "APIアクセス",
		apiKey: "APIキー",
		useThisKeyToAccess: "このキーを使用して、プログラムでベンチマークAPIにアクセスします。"
	},
	"settings-footer": {
		saveChanges: "変更を保存",
		cancel: "キャンセル"
	}
};
export { e as default };
var e = {
	"settings-header": { manageYourAccountPreferencesAnd: "계정 기본 설정 및 구성을 관리합니다." },
	"profile-section": {
		displayName: "표시 이름",
		profile: "프로필",
		email: "이메일 주소"
	},
	"preferences-section": {
		emailNotifications: "이메일 알림",
		receiveWeeklyBenchmarkReports: "주간 벤치마크 보고서 받기",
		toggleNotifications: "알림 토글",
		darkMode: "다크 모드",
		useDarkColorScheme: "어두운 색상 테마 사용",
		toggleDarkMode: "다크 모드 토글",
		defaultLanguage: "기본 언어",
		englishEn: "영어 (en)",
		frenchFr: "프랑스어 (fr)",
		germanDe: "독일어 (de)",
		spanishEs: "스페인어 (es)",
		japaneseJa: "일본어 (ja)",
		chineseSimplifiedZhCn: "중국어 간체 (zh-CN)",
		arabicAr: "아랍어 (ar)"
	},
	"api-access-section": {
		apiAccess: "API 액세스",
		apiKey: "API 키",
		useThisKeyToAccess: "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오."
	},
	"settings-footer": {
		saveChanges: "변경 사항 저장",
		cancel: "취소"
	}
};
export { e as default };
var e = {
	"settings-header": { manageYourAccountPreferencesAnd: "Gestiona las preferencias y la configuración de tu cuenta." },
	"profile-section": {
		displayName: "Nombre visible",
		profile: "Perfil",
		email: "Correo electrónico"
	},
	"preferences-section": {
		emailNotifications: "Notificaciones por correo electrónico",
		receiveWeeklyBenchmarkReports: "Recibir informes semanales de benchmarks",
		toggleNotifications: "Alternar notificaciones",
		darkMode: "Modo oscuro",
		useDarkColorScheme: "Usar esquema de colores oscuro",
		toggleDarkMode: "Alternar modo oscuro",
		defaultLanguage: "Idioma predeterminado",
		englishEn: "Inglés (en)",
		frenchFr: "Francés (fr)",
		germanDe: "Allemand (de)",
		spanishEs: "Español (es)",
		japaneseJa: "Japonés (ja)",
		chineseSimplifiedZhCn: "Chinois simplifié (zh-CN)",
		arabicAr: "Árabe (ar)"
	},
	"api-access-section": {
		apiAccess: "Acceso API",
		apiKey: "Llave API",
		useThisKeyToAccess: "Usa esta llave para acceder a la API de benchmarking de forma programática."
	},
	"settings-footer": {
		saveChanges: "Guardar cambios",
		cancel: "Cancelar"
	}
};
export { e as default };
var e = {
	"settings-header": { manageYourAccountPreferencesAnd: "Gérez vos préférences de compte et votre configuration." },
	"profile-section": {
		displayName: "Nom d'affichage",
		profile: "Profil",
		email: "Email"
	},
	"preferences-section": {
		emailNotifications: "Notifications par email",
		receiveWeeklyBenchmarkReports: "Recevoir des rapports hebdomadaires de benchmark",
		toggleNotifications: "Basculer les notifications",
		darkMode: "Mode sombre",
		useDarkColorScheme: "Utiliser le schéma de couleurs sombres",
		toggleDarkMode: "Basculer le mode sombre",
		defaultLanguage: "Langue par défaut",
		englishEn: "Anglais (en)",
		frenchFr: "Français (fr)",
		germanDe: "Allemand (de)",
		spanishEs: "Espagnol (es)",
		japaneseJa: "Japonais (ja)",
		chineseSimplifiedZhCn: "Chinois simplifié (zh-CN)",
		arabicAr: "Arabe (ar)"
	},
	"api-access-section": {
		apiAccess: "Accès API",
		apiKey: "Clé API",
		useThisKeyToAccess: "Utilisez cette clé pour accéder à l'API de benchmarking par programmation."
	},
	"settings-footer": {
		saveChanges: "Enregistrer les modifications",
		cancel: "Annuler"
	}
};
export { e as default };
var e = {
	"settings-header": { manageYourAccountPreferencesAnd: "Manage your account preferences and configuration." },
	"profile-section": {
		displayName: "Display Name",
		profile: "Profile",
		email: "Email"
	},
	"preferences-section": {
		emailNotifications: "Email Notifications",
		receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
		toggleNotifications: "Toggle notifications",
		darkMode: "Dark Mode",
		useDarkColorScheme: "Use dark color scheme",
		toggleDarkMode: "Toggle dark mode",
		defaultLanguage: "Default Language",
		englishEn: "English (en)",
		frenchFr: "French (fr)",
		germanDe: "German (de)",
		spanishEs: "Spanish (es)",
		japaneseJa: "Japanese (ja)",
		chineseSimplifiedZhCn: "Chinese Simplified (zh-CN)",
		arabicAr: "Arabic (ar)"
	},
	"api-access-section": {
		apiAccess: "API Access",
		apiKey: "API Key",
		useThisKeyToAccess: "Use this key to access the benchmarking API programmatically."
	},
	"settings-footer": {
		saveChanges: "Save Changes",
		cancel: "Cancel"
	}
};
export { e as default };
var e = {
	"settings-header": { manageYourAccountPreferencesAnd: "Управляйте настройками и конфигурацией своего аккаунта." },
	"profile-section": {
		displayName: "Отображаемое имя",
		profile: "Профиль",
		email: "Эл. почта"
	},
	"preferences-section": {
		emailNotifications: "Уведомления по эл. почте",
		receiveWeeklyBenchmarkReports: "Получать еженедельные отчеты о бенчмарках",
		toggleNotifications: "Переключить уведомления",
		darkMode: "Темный режим",
		useDarkColorScheme: "Использовать темную цветовую схему",
		toggleDarkMode: "Переключить темный режим",
		defaultLanguage: "Язык по умолчанию",
		englishEn: "Английский (en)",
		frenchFr: "Французский (fr)",
		germanDe: "Немецкий (de)",
		spanishEs: "Испанский (es)",
		japaneseJa: "Японский (ja)",
		chineseSimplifiedZhCn: "Китайский упрощенный (zh-CN)",
		arabicAr: "Арабский (ar)"
	},
	"api-access-section": {
		apiAccess: "Доступ к API",
		apiKey: "Ключ API",
		useThisKeyToAccess: "Используйте этот ключ для программного доступа к API бенчмаркинга."
	},
	"settings-footer": {
		saveChanges: "Сохранить изменения",
		cancel: "Отмена"
	}
};
export { e as default };
var e = {
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
		settings: "设置",
		goToGithub: "前往 GitHub"
	},
	footer: {
		resources: "资源",
		contact: "联系我们",
		github: "GitHub",
		methodology: "方法论",
		contributing: "贡献",
		builtWith: "i18n Benchmark — 开源项目。使用 React、Vite 和 TanStack Router 构建。",
		anOpenSourceTestApplication: "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。"
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "主题模式：自动（系统）。点击切换到亮色模式。",
		themeModeLightClick: "主题模式：亮色。点击切换到暗色模式。",
		themeModeDarkClick: "主题模式：暗色。点击切换到自动（系统）模式。",
		themeAuto: "主题：自动",
		themeDark: "主题：暗色",
		themeLight: "主题：亮色"
	},
	mockBanner: "⚠️ 本页面包含模拟数据，仅供基准测试之用。与任何真实业务或服务无关。"
};
export { e as default };
var e = {
	header: {
		home: "ホーム",
		methodology: "方法論",
		mockPages: "模擬ページ",
		products: "製品",
		pricing: "料金",
		team: "チーム",
		blog: "ブログ",
		careers: "採用",
		faq: "FAQ",
		contact: "お問い合わせ",
		settings: "設定",
		goToGithub: "GitHubへ移動"
	},
	footer: {
		resources: "リソース",
		contact: "お問い合わせ",
		github: "GitHub",
		methodology: "方法論",
		contributing: "貢献する",
		builtWith: "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。",
		anOpenSourceTestApplication: "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーションです。"
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "テーマモード: 自動 (システム)。クリックしてライトモードに切り替えます。",
		themeModeLightClick: "テーマモード: ライト。クリックしてダークモードに切り替えます。",
		themeModeDarkClick: "テーマモード: ダーク。クリックして自動 (システム) モードに切り替えます。",
		themeAuto: "テーマ: 自動",
		themeDark: "テーマ: ダーク",
		themeLight: "テーマ: ライト"
	},
	mockBanner: "⚠️ このページには、ベンチマーク目的のみの模擬データが含まれています。実際のビジネスやサービスとは関係ありません。"
};
export { e as default };
var e = {
	header: {
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
	},
	footer: {
		resources: "Ressourcen",
		contact: "Kontakt",
		github: "GitHub",
		methodology: "Methodik",
		contributing: "Beitragen",
		builtWith: "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.",
		anOpenSourceTestApplication: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität."
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
		themeModeLightClick: "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
		themeModeDarkClick: "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
		themeAuto: "Thema: Auto",
		themeDark: "Thema: Dunkel",
		themeLight: "Thema: Hell"
	},
	mockBanner: "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung."
};
export { e as default };
var e = {
	header: {
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
	},
	footer: {
		resources: "Recursos",
		contact: "Contato",
		github: "GitHub",
		methodology: "Metodologia",
		contributing: "Contribuir",
		builtWith: "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.",
		anOpenSourceTestApplication: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo."
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
		themeModeLightClick: "Modo de tema: claro. Clique para mudar para o modo escuro.",
		themeModeDarkClick: "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
		themeAuto: "Tema: Auto",
		themeDark: "Tema: Escuro",
		themeLight: "Tema: Claro"
	},
	mockBanner: "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real."
};
export { e as default };
var e = {
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
		settings: "Settings",
		goToGithub: "Go to GitHub"
	},
	footer: {
		resources: "Resources",
		contact: "Contact",
		github: "GitHub",
		methodology: "Methodology",
		contributing: "Contributing",
		builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
		anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
		themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
		themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
		themeAuto: "Theme: Auto",
		themeDark: "Theme: Dark",
		themeLight: "Theme: Light"
	},
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
};
export { e as default };
var e = {
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
		settings: "Impostazioni",
		goToGithub: "Vai su GitHub"
	},
	footer: {
		resources: "Risorse",
		contact: "Contatti",
		github: "GitHub",
		methodology: "Metodologia",
		contributing: "Contribuire",
		builtWith: "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.",
		anOpenSourceTestApplication: "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app."
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
		themeModeLightClick: "Modalità tema: chiara. Clicca per passare alla modalità scura.",
		themeModeDarkClick: "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
		themeAuto: "Tema: Auto",
		themeDark: "Tema: Scuro",
		themeLight: "Tema: Chiaro"
	},
	mockBanner: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale."
};
export { e as default };
var e = {
	header: {
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
	},
	footer: {
		resources: "Ressources",
		contact: "Contact",
		github: "GitHub",
		methodology: "Méthodologie",
		contributing: "Contribuer",
		builtWith: "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.",
		anOpenSourceTestApplication: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application."
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
		themeModeLightClick: "Mode thématique : clair. Cliquez pour passer en mode sombre.",
		themeModeDarkClick: "Mode thématique : sombre. Cliquez pour passer en mode auto (système).",
		themeAuto: "Thème : Auto",
		themeDark: "Thème : Sombre",
		themeLight: "Thème : Clair"
	},
	mockBanner: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel."
};
export { e as default };
var e = {
	header: {
		home: "홈",
		methodology: "방법론",
		mockPages: "모의 페이지",
		products: "제품",
		pricing: "요금",
		team: "팀",
		blog: "블로그",
		careers: "채용",
		faq: "FAQ",
		contact: "문의하기",
		settings: "설정",
		goToGithub: "GitHub으로 이동"
	},
	footer: {
		resources: "리소스",
		contact: "문의하기",
		github: "GitHub",
		methodology: "방법론",
		contributing: "기여하기",
		builtWith: "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
		anOpenSourceTestApplication: "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다."
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.",
		themeModeLightClick: "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.",
		themeModeDarkClick: "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.",
		themeAuto: "테마: 자동",
		themeDark: "테마: 다크",
		themeLight: "테마: 라이트"
	},
	mockBanner: "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다."
};
export { e as default };
var e = {
	header: {
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
	},
	footer: {
		resources: "Ресурсы",
		contact: "Контакт",
		github: "GitHub",
		methodology: "Методология",
		contributing: "Вклад",
		builtWith: "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
		anOpenSourceTestApplication: "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения."
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
		themeModeLightClick: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
		themeModeDarkClick: "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
		themeAuto: "Тема: Авто",
		themeDark: "Тема: Темная",
		themeLight: "Тема: Светлая"
	},
	mockBanner: "⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой."
};
export { e as default };
var e = {
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
		settings: "Ajustes",
		goToGithub: "Ir a GitHub"
	},
	footer: {
		resources: "Recursos",
		contact: "Contacto",
		github: "GitHub",
		methodology: "Metodología",
		contributing: "Contribuir",
		builtWith: "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
		anOpenSourceTestApplication: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación."
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.",
		themeModeLightClick: "Modo de tema: claro. Haz clic para cambiar al modo oscuro.",
		themeModeDarkClick: "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).",
		themeAuto: "Tema: Auto",
		themeDark: "Tema: Oscuro",
		themeLight: "Tema: Claro"
	},
	mockBanner: "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real."
};
export { e as default };
var e = {
	"team-header": {
		ourTeam: "저희 팀",
		meetThePeopleBehindI18n: "i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 공통된 열정으로 뭉친 다양한 팀입니다."
	},
	"team-grid": {
		sarahChen: "Sarah Chen",
		founderLeadEngineer: "설립자 겸 수석 엔지니어",
		formerGoogleEngineerWith10: "규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.",
		marcusWeber: "Marcus Weber",
		performanceEngineer: "성능 엔지니어",
		specializesInJavascriptPerformanceOptimization: "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.",
		aishaPatel: "Aisha Patel",
		developerAdvocate: "개발자 에반젤리스트",
		passionateAboutDeveloperExperienceAnd: "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.",
		tomasRodriguez: "Tomás Rodríguez",
		fullStackDeveloper: "풀스택 개발자",
		maintainsTheBenchmarkingInfrastructureAnd: "벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.",
		yukiTanaka: "Yuki Tanaka",
		dataAnalyst: "데이터 분석가",
		ensuresStatisticalRigorInAll: "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.",
		elenaKowalski: "Elena Kowalski",
		communityManager: "커뮤니티 매니저",
		managesCommunityContributionsPartnershipsAnd: "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다."
	}
};
export { e as default };
var e = {
	"team-header": {
		ourTeam: "Nossa Equipe",
		meetThePeopleBehindI18n: "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas para desenvolvedores."
	},
	"team-grid": {
		sarahChen: "Sarah Chen",
		founderLeadEngineer: "Fundadora e Engenheira Líder",
		formerGoogleEngineerWith10: "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.",
		marcusWeber: "Marcus Weber",
		performanceEngineer: "Engenheiro de Performance",
		specializesInJavascriptPerformanceOptimization: "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
		aishaPatel: "Aisha Patel",
		developerAdvocate: "Developer Advocate",
		passionateAboutDeveloperExperienceAnd: "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
		tomasRodriguez: "Tomás Rodríguez",
		fullStackDeveloper: "Desenvolvedor Full-Stack",
		maintainsTheBenchmarkingInfrastructureAnd: "Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.",
		yukiTanaka: "Yuki Tanaka",
		dataAnalyst: "Analista de Dados",
		ensuresStatisticalRigorInAll: "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.",
		elenaKowalski: "Elena Kowalski",
		communityManager: "Gerente de Comunidade",
		managesCommunityContributionsPartnershipsAnd: "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto."
	}
};
export { e as default };
var e = {
	"team-header": {
		ourTeam: "Notre équipe",
		meetThePeopleBehindI18n: "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour d'excellents outils de développement."
	},
	"team-grid": {
		sarahChen: "Sarah Chen",
		founderLeadEngineer: "Fondatrice & Ingénieure principale",
		formerGoogleEngineerWith10: "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.",
		marcusWeber: "Marcus Weber",
		performanceEngineer: "Ingénieur performance",
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
	}
};
export { e as default };
var e = {
	"team-header": {
		ourTeam: "Наша команда",
		meetThePeopleBehindI18n: "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков."
	},
	"team-grid": {
		sarahChen: "Сара Чен (Sarah Chen)",
		founderLeadEngineer: "Основатель и ведущий инженер",
		formerGoogleEngineerWith10: "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.",
		marcusWeber: "Маркус Вебер (Marcus Weber)",
		performanceEngineer: "Инженер по производительности",
		specializesInJavascriptPerformanceOptimization: "Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.",
		aishaPatel: "Айша Патель (Aisha Patel)",
		developerAdvocate: "Адвокат разработчиков",
		passionateAboutDeveloperExperienceAnd: "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.",
		tomasRodriguez: "Томас Родригес (Tomás Rodríguez)",
		fullStackDeveloper: "Фулстек-разработчик",
		maintainsTheBenchmarkingInfrastructureAnd: "Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.",
		yukiTanaka: "Юки Танака (Yuki Tanaka)",
		dataAnalyst: "Аналитик данных",
		ensuresStatisticalRigorInAll: "Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.",
		elenaKowalski: "Елена Ковальски (Elena Kowalski)",
		communityManager: "Комьюнити-менеджер",
		managesCommunityContributionsPartnershipsAnd: "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом."
	}
};
export { e as default };
var e = {
	"team-header": {
		ourTeam: "Nuestro equipo",
		meetThePeopleBehindI18n: "Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores."
	},
	"team-grid": {
		sarahChen: "Sarah Chen",
		founderLeadEngineer: "Fundadora e ingeniera principal",
		formerGoogleEngineerWith10: "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.",
		marcusWeber: "Marcus Weber",
		performanceEngineer: "Ingeniero de rendimiento",
		specializesInJavascriptPerformanceOptimization: "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.",
		aishaPatel: "Aisha Patel",
		developerAdvocate: "Developer Advocate",
		passionateAboutDeveloperExperienceAnd: "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.",
		tomasRodriguez: "Tomás Rodríguez",
		fullStackDeveloper: "Desarrollador Full-Stack",
		maintainsTheBenchmarkingInfrastructureAnd: "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.",
		yukiTanaka: "Yuki Tanaka",
		dataAnalyst: "Analista de datos",
		ensuresStatisticalRigorInAll: "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.",
		elenaKowalski: "Elena Kowalski",
		communityManager: "Responsable de la comunidad",
		managesCommunityContributionsPartnershipsAnd: "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto."
	}
};
export { e as default };
var e = {
	"team-header": {
		ourTeam: "Unser Team",
		meetThePeopleBehindI18n: "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch die Leidenschaft für großartige Entwickler-Tools."
	},
	"team-grid": {
		sarahChen: "Sarah Chen",
		founderLeadEngineer: "Gründerin & Leitende Ingenieurin",
		formerGoogleEngineerWith10: "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
		marcusWeber: "Marcus Weber",
		performanceEngineer: "Performance-Ingenieur",
		specializesInJavascriptPerformanceOptimization: "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
		aishaPatel: "Aisha Patel",
		developerAdvocate: "Developer Advocate",
		passionateAboutDeveloperExperienceAnd: "Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.",
		tomasRodriguez: "Tomás Rodríguez",
		fullStackDeveloper: "Full-Stack-Entwickler",
		maintainsTheBenchmarkingInfrastructureAnd: "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.",
		yukiTanaka: "Yuki Tanaka",
		dataAnalyst: "Datenanalyst",
		ensuresStatisticalRigorInAll: "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.",
		elenaKowalski: "Elena Kowalski",
		communityManager: "Community-Managerin",
		managesCommunityContributionsPartnershipsAnd: "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance."
	}
};
export { e as default };
var e = {
	"team-header": {
		ourTeam: "私たちのチーム",
		meetThePeopleBehindI18n: "i18n Benchmarkを支える人々を紹介します。優れた開発者ツールに対する共通の情熱によって結ばれた多様なチームです。"
	},
	"team-grid": {
		sarahChen: "Sarah Chen",
		founderLeadEngineer: "創設者 兼 リードエンジニア",
		formerGoogleEngineerWith10: "大規模な国際化システムの構築に10年の経験を持つ元Googleエンジニア。",
		marcusWeber: "Marcus Weber",
		performanceEngineer: "パフォーマンスエンジニア",
		specializesInJavascriptPerformanceOptimization: "JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。",
		aishaPatel: "Aisha Patel",
		developerAdvocate: "デベロッパーアドボケイト",
		passionateAboutDeveloperExperienceAnd: "デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNextのスピーカー。",
		tomasRodriguez: "Tomás Rodríguez",
		fullStackDeveloper: "フルスタックデベロッパー",
		maintainsTheBenchmarkingInfrastructureAnd: "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。",
		yukiTanaka: "Yuki Tanaka",
		dataAnalyst: "データアナリスト",
		ensuresStatisticalRigorInAll: "すべてのベンチマーク結果の統計的厳密さを確保。MITで応用統計学の博士号を取得。",
		elenaKowalski: "Elena Kowalski",
		communityManager: "コミュニティマネージャー",
		managesCommunityContributionsPartnershipsAnd: "コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。"
	}
};
export { e as default };
var e = {
	"team-header": {
		ourTeam: "我们的团队",
		meetThePeopleBehindI18n: "认识 i18n Benchmark 背后的团队。这是一支因对优秀开发者工具的共同热爱而凝聚在一起的多样化团队。"
	},
	"team-grid": {
		sarahChen: "Sarah Chen",
		founderLeadEngineer: "创始人兼首席工程师",
		formerGoogleEngineerWith10: "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。",
		marcusWeber: "Marcus Weber",
		performanceEngineer: "性能工程师",
		specializesInJavascriptPerformanceOptimization: "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。",
		aishaPatel: "Aisha Patel",
		developerAdvocate: "开发者关系倡导者",
		passionateAboutDeveloperExperienceAnd: "对开发者体验和教育充满热情。React Conf、JSConf 和 i18nNext 的讲师。",
		tomasRodriguez: "Tomás Rodríguez",
		fullStackDeveloper: "全栈开发人员",
		maintainsTheBenchmarkingInfrastructureAnd: "维护基准测试基础设施和 CI/CD 管道。Lingui 开源贡献者。",
		yukiTanaka: "Yuki Tanaka",
		dataAnalyst: "数据分析师",
		ensuresStatisticalRigorInAll: "确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。",
		elenaKowalski: "Elena Kowalski",
		communityManager: "社区负责人",
		managesCommunityContributionsPartnershipsAnd: "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。"
	}
};
export { e as default };
var e = {
	"team-header": {
		ourTeam: "Our Team",
		meetThePeopleBehindI18n: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
	},
	"team-grid": {
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
	}
};
export { e as default };
var e = {
	"team-header": {
		ourTeam: "Il nostro team",
		meetThePeopleBehindI18n: "Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori."
	},
	"team-grid": {
		sarahChen: "Sarah Chen",
		founderLeadEngineer: "Fondatrice e Responsabile tecnico",
		formerGoogleEngineerWith10: "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.",
		marcusWeber: "Marcus Weber",
		performanceEngineer: "Ingegnere delle prestazioni",
		specializesInJavascriptPerformanceOptimization: "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.",
		aishaPatel: "Aisha Patel",
		developerAdvocate: "Developer Advocate",
		passionateAboutDeveloperExperienceAnd: "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.",
		tomasRodriguez: "Tomás Rodríguez",
		fullStackDeveloper: "Sviluppatore Full-Stack",
		maintainsTheBenchmarkingInfrastructureAnd: "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.",
		yukiTanaka: "Yuki Tanaka",
		dataAnalyst: "Analista dati",
		ensuresStatisticalRigorInAll: "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.",
		elenaKowalski: "Elena Kowalski",
		communityManager: "Responsable della comunità",
		managesCommunityContributionsPartnershipsAnd: "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source."
	}
};
export { e as default };
var e = {
	themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	themeAuto: "Theme: Auto",
	themeDark: "Theme: Dark",
	themeLight: "Theme: Light"
};
export { e as default };
var e = {
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
};
export { e as default };
var e = {
	bundleSizeImpact: "Bundle size impact",
	theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
	renderingOverhead: "Rendering overhead",
	howMuchExtraTimeThe: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
	hydrationCost: "Hydration cost",
	duringSsrTranslationDataIs: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	lazyLoadingEffectiveness: "Lazy loading effectiveness",
	whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	localeSwitchSpeed: "Locale switch speed",
	howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	whatWeMeasure: "What We Measure"
};
export { e as default };
var e = {
	whyTheseMetricsMatter: "Why These Metrics Matter",
	bundleSize: "Bundle Size",
	theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	renderingHydration: "Rendering & Hydration",
	connectingALargeJsonDictionary: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	dynamicLoading: "Dynamic Loading",
	loadingAllTranslationsUpfrontOverloads: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
};
export { e as default };

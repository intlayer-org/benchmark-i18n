import { Profiler as e, cloneElement as t, createContext as n, isValidElement as r, useContext as i, useEffect as a, useMemo as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
//#region ../../../node_modules/.bun/@formatjs+fast-memoize@3.1.1/node_modules/@formatjs/fast-memoize/index.js
function u(e, t) {
	let n = t && t.cache ? t.cache : ne, r = t && t.serializer ? t.serializer : _;
	return (t && t.strategy ? t.strategy : ee)(e, {
		cache: n,
		serializer: r
	});
}
function d(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function f(e, t, n, r) {
	let i = d(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function p(e, t, n) {
	let r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function m(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function ee(e, t) {
	let n = e.length === 1 ? f : p;
	return m(e, this, n, t.cache.create(), t.serializer);
}
function h(e, t) {
	return m(e, this, p, t.cache.create(), t.serializer);
}
function g(e, t) {
	return m(e, this, f, t.cache.create(), t.serializer);
}
var _ = function() {
	return JSON.stringify(arguments);
}, te = class {
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
}, ne = { create: function() {
	return new te();
} }, v = {
	variadic: h,
	monadic: g
}, y = class extends Error {
	constructor(e, t) {
		let n = e;
		t && (n += ": " + t), super(n), this.code = e, t && (this.originalMessage = t);
	}
}, b = function(e) {
	return e.MISSING_MESSAGE = "MISSING_MESSAGE", e.MISSING_FORMAT = "MISSING_FORMAT", e.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", e.INVALID_MESSAGE = "INVALID_MESSAGE", e.INVALID_KEY = "INVALID_KEY", e.FORMATTING_ERROR = "FORMATTING_ERROR", e;
}(b || {});
function re() {
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
function ie(e, t) {
	return u(e, {
		cache: (n = t, { create: () => ({
			get: (e) => n[e],
			set(e, t) {
				n[e] = t;
			}
		}) }),
		strategy: v.variadic
	});
	var n;
}
function x(e, t) {
	return ie(((...t) => new e(...t)), t);
}
function ae(e) {
	return {
		getDateTimeFormat: x(Intl.DateTimeFormat, e.dateTime),
		getNumberFormat: x(Intl.NumberFormat, e.number),
		getPluralRules: x(Intl.PluralRules, e.pluralRules),
		getRelativeTimeFormat: x(Intl.RelativeTimeFormat, e.relativeTime),
		getListFormat: x(Intl.ListFormat, e.list),
		getDisplayNames: x(Intl.DisplayNames, e.displayNames)
	};
}
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-skeleton-parser@2.1.3/node_modules/@formatjs/icu-skeleton-parser/date-time.js
var oe = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function se(e) {
	let t = {};
	return e.replace(oe, (e) => {
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
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-skeleton-parser@2.1.3/node_modules/@formatjs/icu-skeleton-parser/regex.generated.js
var ce = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-skeleton-parser@2.1.3/node_modules/@formatjs/icu-skeleton-parser/number.js
function le(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	let t = e.split(ce).filter((e) => e.length > 0), n = [];
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
function ue(e) {
	return e.replace(/^(.*?)-/, "");
}
var S = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, C = /^(@+)?(\+|#+)?[rs]?$/g, de = /(\*)(0+)|(#+)(0+)|(0+)/g, w = /^(0+)$/;
function T(e) {
	let t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(C, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function E(e) {
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
function fe(e) {
	let t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		let n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !w.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function D(e) {
	return E(e) || {};
}
function pe(e) {
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
				t.style = "unit", t.unit = ue(n.options[0]);
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
						...D(t)
					}), {})
				};
				continue;
			case "engineering":
				t = {
					...t,
					notation: "engineering",
					...n.options.reduce((e, t) => ({
						...e,
						...D(t)
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
				n.options[0].replace(de, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (w.test(n.stem)) {
			t.minimumIntegerDigits = n.stem.length;
			continue;
		}
		if (S.test(n.stem)) {
			if (n.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			n.stem.replace(S, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			let e = n.options[0];
			e === "w" ? t = {
				...t,
				trailingZeroDisplay: "stripIfInteger"
			} : e && (t = {
				...t,
				...T(e)
			});
			continue;
		}
		if (C.test(n.stem)) {
			t = {
				...t,
				...T(n.stem)
			};
			continue;
		}
		let e = E(n.stem);
		e && (t = {
			...t,
			...e
		});
		let r = fe(n.stem);
		r && (t = {
			...t,
			...r
		});
	}
	return t;
}
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/types.js
var O = function(e) {
	return e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag", e;
}({}), k = function(e) {
	return e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime", e;
}({});
function me(e) {
	return e.type === O.literal;
}
function he(e) {
	return e.type === O.argument;
}
function A(e) {
	return e.type === O.number;
}
function j(e) {
	return e.type === O.date;
}
function ge(e) {
	return e.type === O.time;
}
function M(e) {
	return e.type === O.select;
}
function N(e) {
	return e.type === O.plural;
}
function _e(e) {
	return e.type === O.pound;
}
function P(e) {
	return e.type === O.tag;
}
function ve(e) {
	return !!(e && typeof e == "object" && e.type === k.number);
}
function F(e) {
	return !!(e && typeof e == "object" && e.type === k.dateTime);
}
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/error.js
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
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/date-time-pattern-generator.js
function ye(e, t) {
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "j") {
			let a = 0;
			for (; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			let o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = be(t);
			for ((c == "H" || c == "k") && (s = 0); s-- > 0;) n += "a";
			for (; o-- > 0;) n = c + n;
		} else i === "J" ? n += "H" : n += i;
	}
	return n;
}
function be(e) {
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
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/parser.js
var xe = RegExp(`^${L.source}*`), Se = RegExp(`${L.source}*$`);
function z(e, t) {
	return {
		start: e,
		end: t
	};
}
var Ce = !!Object.fromEntries, we = !!String.prototype.trimStart, Te = !!String.prototype.trimEnd, B = Ce ? Object.fromEntries : function(e) {
	let t = {};
	for (let [n, r] of e) t[n] = r;
	return t;
}, Ee = we ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(xe, "");
}, De = Te ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(Se, "");
}, V = /* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function Oe(e, t) {
	return V.lastIndex = t, V.exec(e)[1] ?? "";
}
var ke = class {
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
					type: O.pound,
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
				type: O.literal,
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
						type: O.tag,
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
		for (this.bump(); !this.isEOF() && je(this.char());) this.bump();
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
				type: O.literal,
				value: r,
				location: i
			},
			err: null
		};
	}
	tryParseLeftAngleBracket() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Ae(this.peek() || 0)) ? (this.bump(), "<") : null;
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
					type: O.argument,
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
		let e = this.clonePosition(), t = this.offset(), n = Oe(this.message, t), r = t + n.length;
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
					let r = De(n.val);
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
					let t = Ee(e.style.slice(2));
					if (a === "number") {
						let r = this.parseNumberSkeletonFromString(t, e.styleLocation);
						return r.err ? r : {
							val: {
								type: O.number,
								value: n,
								location: i,
								style: r.val
							},
							err: null
						};
					} else {
						if (t.length === 0) return this.error(I.EXPECT_DATE_TIME_SKELETON, i);
						let r = t;
						this.locale && (r = ye(t, this.locale));
						let o = {
							type: k.dateTime,
							pattern: r,
							location: e.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? se(r) : {}
						};
						return {
							val: {
								type: a === "date" ? O.date : O.time,
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
						type: a === "number" ? O.number : a === "date" ? O.date : O.time,
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
						type: O.select,
						value: n,
						options: B(c.val),
						location: u
					},
					err: null
				} : {
					val: {
						type: O.plural,
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
			n = le(e);
		} catch {
			return this.error(I.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: k.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? pe(n) : {}
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
		for (; !this.isEOF() && Me(this.char());) this.bump();
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
function Ae(e) {
	return H(e) || e === 47;
}
function je(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Me(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/index.js
function U(e) {
	e.forEach((e) => {
		if (delete e.location, M(e) || N(e)) for (let t in e.options) delete e.options[t].location, U(e.options[t].value);
		else A(e) && ve(e.style) || (j(e) || ge(e)) && F(e.style) ? delete e.style.location : P(e) && U(e.children);
	});
}
function Ne(e, t = {}) {
	t = {
		shouldParseSkeletons: !0,
		requiresOtherClause: !0,
		...t
	};
	let n = new ke(e, t).parse();
	if (n.err) {
		let e = SyntaxError(I[n.err.kind]);
		throw e.location = n.err.location, e.originalMessage = n.err.message, e;
	}
	return t?.captureLocation || U(n.val), n.val;
}
//#endregion
//#region ../../../node_modules/.bun/intl-messageformat@11.2.0/node_modules/intl-messageformat/src/error.js
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
}, K = class extends G {
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
}, q = function(e) {
	return e[e.literal = 0] = "literal", e[e.object = 1] = "object", e;
}({});
function Ie(e) {
	return e.length < 2 ? e : e.reduce((e, t) => {
		let n = e[e.length - 1];
		return !n || n.type !== q.literal || t.type !== q.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function Le(e) {
	return typeof e == "function";
}
function J(e, t, n, r, i, a, o) {
	if (e.length === 1 && me(e[0])) return [{
		type: q.literal,
		value: e[0].value
	}];
	let s = [];
	for (let c of e) {
		if (me(c)) {
			s.push({
				type: q.literal,
				value: c.value
			});
			continue;
		}
		if (_e(c)) {
			typeof a == "number" && s.push({
				type: q.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		let { value: e } = c;
		if (!(i && e in i)) throw new Fe(e, o);
		let l = i[e];
		if (he(c)) {
			(!l || typeof l == "string" || typeof l == "number" || typeof l == "bigint") && (l = typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? String(l) : ""), s.push({
				type: typeof l == "string" ? q.literal : q.object,
				value: l
			});
			continue;
		}
		if (j(c)) {
			let e = typeof c.style == "string" ? r.date[c.style] : F(c.style) ? c.style.parsedOptions : void 0;
			s.push({
				type: q.literal,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (ge(c)) {
			let e = typeof c.style == "string" ? r.time[c.style] : F(c.style) ? c.style.parsedOptions : r.time.medium;
			s.push({
				type: q.literal,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (A(c)) {
			let e = typeof c.style == "string" ? r.number[c.style] : ve(c.style) ? c.style.parsedOptions : void 0;
			if (e && e.scale) {
				let t = e.scale || 1;
				if (typeof l == "bigint") {
					if (!Number.isInteger(t)) throw TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);
					l *= BigInt(t);
				} else l *= t;
			}
			s.push({
				type: q.literal,
				value: n.getNumberFormat(t, e).format(l)
			});
			continue;
		}
		if (P(c)) {
			let { children: e, value: l } = c, u = i[l];
			if (!Le(u)) throw new Pe(l, "function", o);
			let d = u(J(e, t, n, r, i, a).map((e) => e.value));
			Array.isArray(d) || (d = [d]), s.push(...d.map((e) => ({
				type: typeof e == "string" ? q.literal : q.object,
				value: e
			})));
		}
		if (M(c)) {
			let e = l, a = (Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0) || c.options.other;
			if (!a) throw new K(c.value, l, Object.keys(c.options), o);
			s.push(...J(a.value, t, n, r, i));
			continue;
		}
		if (N(c)) {
			let e = `=${l}`, a = Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0;
			if (!a) {
				if (!Intl.PluralRules) throw new G("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", W.MISSING_INTL_API, o);
				let e = typeof l == "bigint" ? Number(l) : l, r = n.getPluralRules(t, { type: c.pluralType }).select(e - (c.offset || 0));
				a = (Object.prototype.hasOwnProperty.call(c.options, r) ? c.options[r] : void 0) || c.options.other;
			}
			if (!a) throw new K(c.value, l, Object.keys(c.options), o);
			let u = typeof l == "bigint" ? Number(l) : l;
			s.push(...J(a.value, t, n, r, i, u - (c.offset || 0)));
			continue;
		}
	}
	return Ie(s);
}
//#endregion
//#region ../../../node_modules/.bun/intl-messageformat@11.2.0/node_modules/intl-messageformat/src/core.js
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
function Y(e) {
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
		getNumberFormat: u((...e) => new Intl.NumberFormat(...e), {
			cache: Y(e.number),
			strategy: v.variadic
		}),
		getDateTimeFormat: u((...e) => new Intl.DateTimeFormat(...e), {
			cache: Y(e.dateTime),
			strategy: v.variadic
		}),
		getPluralRules: u((...e) => new Intl.PluralRules(...e), {
			cache: Y(e.pluralRules),
			strategy: v.variadic
		})
	};
}
var X = class e {
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
		let n = t.reduce((e, t) => (!e.length || t.type !== q.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e), []);
		return n.length <= 1 ? n[0] || "" : n;
	};
	formatToParts = (e) => J(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message);
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
	static __parse = Ne;
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
//#endregion
//#region ../../../node_modules/.bun/use-intl@4.9.1+b1ab299f0a400331/node_modules/use-intl/dist/esm/production/format-message/index.js
function Ve(...[e, t, n, i]) {
	if (Array.isArray(t)) throw new y(b.INVALID_MESSAGE, void 0);
	if (typeof t == "object") throw new y(b.INSUFFICIENT_PATH, void 0);
	if (typeof t == "string") {
		let e = function(e, t) {
			return t || /'[{}]/.test(e) ? void 0 : e;
		}(t, n);
		if (e) return e;
	}
	let { cache: a, formats: o, formatters: s, globalFormats: c, locale: l, timeZone: u } = i, d;
	s.getMessageFormat ||= function(e, t) {
		return ie(((...e) => new X(e[0], e[1], e[2], {
			formatters: t,
			...e[3]
		})), e.message);
	}(a, s);
	try {
		d = s.getMessageFormat(t, l, function(e, t, n) {
			let r = X.formats.date, i = X.formats.time, a = {
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
		throw new y(b.INVALID_MESSAGE, void 0);
	}
	let f = d.format(n);
	return r(f) || Array.isArray(f) || typeof f == "string" ? f : String(f);
}
Ve.raw = !0;
//#endregion
//#region ../../../node_modules/.bun/use-intl@4.9.1+b1ab299f0a400331/node_modules/use-intl/dist/esm/production/initializeConfig-Brh10fyG.js
function Z(...e) {
	return e.filter(Boolean).join(".");
}
function He(e) {
	return Z(e.namespace, e.key);
}
function Ue(e) {
	console.error(e);
}
function Q(e, t, n, r) {
	let i = Z(r, n);
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
			let r = n ? Q(e, t, n) : t;
			if (!r) throw Error(n);
			return r;
		} catch (e) {
			return new y(b.MISSING_MESSAGE, e.message);
		}
	}(e.locale, e.messages, e.namespace);
	return function({ cache: e, formats: n, formatters: i, getMessageFallback: a = He, locale: o, messagesOrError: s, namespace: c, onError: l, timeZone: u }) {
		let d = s instanceof y;
		function f(e, t, n, r) {
			let i = new y(t, n);
			return l(i), r ?? a({
				error: i,
				key: e,
				namespace: c
			});
		}
		function p(p, m, ee, h) {
			let g = h, _;
			if (d) {
				if (!g) return l(s), a({
					error: s,
					key: p,
					namespace: c
				});
				_ = g;
			} else {
				let e = s;
				try {
					_ = Q(o, e, p, c);
				} catch (e) {
					if (!g) return f(p, b.MISSING_MESSAGE, e.message, g);
					_ = g;
				}
			}
			try {
				return Ve(Z(c, p), _, m && function(e) {
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
					formats: ee,
					locale: o,
					timeZone: u
				});
			} catch (e) {
				let t, n;
				return e instanceof y ? (t = e.code, n = e.originalMessage) : (t = b.FORMATTING_ERROR, n = e.message), f(p, t, n, g);
			}
		}
		function m(e, t, n, r) {
			let i = p(e, t, n, r);
			return typeof i == "string" ? i : f(e, b.INVALID_MESSAGE, void 0);
		}
		return m.rich = p, m.markup = (e, t, n, r) => p(e, t, n, r), m.raw = (e) => {
			if (d) return l(s), a({
				error: s,
				key: e,
				namespace: c
			});
			let t = s;
			try {
				return Q(o, t, e, c);
			} catch (t) {
				return f(e, b.MISSING_MESSAGE, t.message);
			}
		}, m.has = (e) => {
			if (d) return !1;
			try {
				return Q(o, s, e, c), !0;
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
var Ke = 86400;
7 * Ke, 365 * Ke;
function qe({ formats: e, getMessageFallback: t, messages: n, onError: r, ...i }) {
	return {
		...i,
		formats: e || void 0,
		messages: n || void 0,
		onError: r || Ue,
		getMessageFallback: t || He
	};
}
//#endregion
//#region ../../../node_modules/.bun/use-intl@4.9.1+b1ab299f0a400331/node_modules/use-intl/dist/esm/production/react.js
var $ = n(void 0);
function Je({ children: e, formats: t, getMessageFallback: n, locale: r, messages: a, now: s, onError: l, timeZone: u }) {
	let d = i($), f = o((() => d?.cache || re()), [r, d?.cache]), p = o((() => d?.formatters || ae(f)), [f, d?.formatters]), m = o((() => ({
		...qe({
			locale: r,
			formats: t === void 0 ? d?.formats : t,
			getMessageFallback: n || d?.getMessageFallback,
			messages: a === void 0 ? d?.messages : a,
			now: s || d?.now,
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
		a,
		s,
		l,
		d,
		u
	]);
	return c($.Provider, {
		value: m,
		children: e
	});
}
function Ye() {
	let e = i($);
	if (!e) throw Error(void 0);
	return e;
}
var Xe = !1, Ze = typeof window > "u";
function Qe(e) {
	return function(e, t, n) {
		let { cache: r, formats: i, formatters: a, getMessageFallback: s, locale: c, onError: l, timeZone: u } = Ye(), d = e[n], f = Ge(t, n);
		return u || Xe || !Ze || (Xe = !0, l(new y(b.ENVIRONMENT_FALLBACK, void 0))), o((() => We({
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
	}({ "!": Ye().messages }, e ? `!.${e}` : "!", "!");
}
//#endregion
//#region ../../../node_modules/.bun/next-intl@4.9.1+77ae5f1145ea432b/node_modules/next-intl/dist/esm/production/react-client/index.js
function $e(e, t) {
	return (...e) => {
		try {
			return t(...e);
		} catch {
			throw Error(void 0);
		}
	};
}
var et = $e(0, Qe);
//#endregion
//#region ../../../node_modules/.bun/next-intl@4.9.1+77ae5f1145ea432b/node_modules/next-intl/dist/esm/production/shared/NextIntlClientProvider.js
function tt({ locale: e, ...t }) {
	if (!e) throw Error(void 0);
	return c(Je, {
		locale: e,
		...t
	});
}
//#endregion
//#region components/MockBanner.tsx
var nt = () => c("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: et()("mockBanner")
});
//#endregion
//#region components/pages/team/TeamHeader.tsx
function rt() {
	let e = et();
	return l(s, { children: [
		c(nt, {}),
		c("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e("team.team-header.ourTeam")
		}),
		c("p", {
			className: "mb-10 text-muted-foreground",
			children: e("team.team-header.meetThePeopleBehindI18n")
		})
	] });
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function it() {
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
function at(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region components/AppProviders.tsx
function ot({ children: t, locale: n, messages: r }) {
	return a(() => {
		document.documentElement.lang = n;
	}, [n]), a(() => {
		it();
	}, []), c(e, {
		id: "AppRoot",
		onRender: at,
		children: c(tt, {
			locale: n,
			messages: r,
			timeZone: "UTC",
			children: t
		})
	});
}
var st = {
	"careers-header": {
		title: "Careers",
		joinOurMissionToImprove: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
	},
	contact: {
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
	},
	"about-header": {
		aboutThisBenchmark: "About This Benchmark",
		thisIsAnOpenSource: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	},
	hero: {
		aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		viewResults: "View Results"
	},
	blog: {
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
	},
	faq: { "faq-list": {
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
	} },
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
	settings: {
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
	},
	"faq-list": {
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
	},
	pricing: {
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
	"contact-header": {
		getInTouch: "Get in Touch",
		haveIdeasFoundABug: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
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
	},
	"results-table": {
		sampleResults: "Sample Results",
		bundleSize: "Bundle Size",
		lookupTime: "Lookup Time",
		lazyLoading: "Lazy Loading"
	},
	careers: {
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
		settings: "Settings",
		goToGithub: "Go to GitHub"
	},
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	team: {
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
	},
	about: {
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
	},
	"contact-form": {
		yourName: "Your name",
		bugReport: "Bug Report",
		newBenchmarkIdea: "New Benchmark Idea",
		methodologyQuestion: "Methodology Question",
		describeYourQuestionOrIdea: "Describe your question or idea...",
		sendMessage: "Send Message"
	},
	products: {
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
			learnMore: "Learn More",
			free: "Free",
			price29mo: "$29/mo",
			price99oneTime: "$99 one-time",
			price19mo: "$19/mo",
			price49mo: "$49/mo"
		}
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
	},
	route: { route: {
		oopsPageNotFound: "Oops! Page not found",
		returnToHome: "Return to Home",
		couldNotMeasureHydrationDuration: "Could not measure hydration duration:"
	} },
	"blog-header": { insightsTutorialsAndAnalysisFrom: "Insights, tutorials, and analysis from the i18n community." },
	"faq-header1": {
		frequentlyAskedQuestions: "Frequently Asked Questions",
		everythingYouNeedToKnow: "Everything you need to know about i18n Benchmark."
	},
	"about-grid": {
		whyThisExists: "Why This Exists",
		choosingAnI18nLibraryIs: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		methodology: "Methodology",
		theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
	},
	home: {
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
	},
	"careers-benefits": {
		workFromAnywhereInThe: "Work from anywhere in the world",
		competitivePay: "Competitive pay",
		topOfMarketCompensation: "Top-of-market compensation",
		openSourceTime: "Open source time"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "Why These Metrics Matter",
		bundleSize: "Bundle Size",
		theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		renderingHydration: "Rendering & Hydration",
		connectingALargeJsonDictionary: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		dynamicLoading: "Dynamic Loading",
		loadingAllTranslationsUpfrontOverloads: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
	}
}, ct = "en";
function lt({ children: e }) {
	return c(ot, {
		locale: ct,
		messages: st,
		children: e
	});
}
//#endregion
//#region components/pages/team/TeamHeader.wrapper.tsx
function ut() {
	return c(lt, { children: c(rt, {}) });
}
//#endregion
export { ut as default };

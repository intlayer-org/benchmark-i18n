import * as React$1 from "react";
import React, { use } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@formatjs+fast-memoize@3.1.1/node_modules/@formatjs/fast-memoize/index.js
function memoize(fn, options) {
	const cache = options && options.cache ? options.cache : cacheDefault;
	const serializer = options && options.serializer ? options.serializer : serializerDefault;
	return (options && options.strategy ? options.strategy : strategyDefault)(fn, {
		cache,
		serializer
	});
}
function isPrimitive(value) {
	return value == null || typeof value === "number" || typeof value === "boolean";
}
function monadic(fn, cache, serializer, arg) {
	const cacheKey = isPrimitive(arg) ? arg : serializer(arg);
	let computedValue = cache.get(cacheKey);
	if (typeof computedValue === "undefined") {
		computedValue = fn.call(this, arg);
		cache.set(cacheKey, computedValue);
	}
	return computedValue;
}
function variadic(fn, cache, serializer) {
	const args = Array.prototype.slice.call(arguments, 3);
	const cacheKey = serializer(args);
	let computedValue = cache.get(cacheKey);
	if (typeof computedValue === "undefined") {
		computedValue = fn.apply(this, args);
		cache.set(cacheKey, computedValue);
	}
	return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
	return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
	const strategy = fn.length === 1 ? monadic : variadic;
	return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
	return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
	return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
var serializerDefault = function() {
	return JSON.stringify(arguments);
};
var ObjectWithoutPrototypeCache = class {
	cache;
	constructor() {
		this.cache = Object.create(null);
	}
	get(key) {
		return this.cache[key];
	}
	set(key, value) {
		this.cache[key] = value;
	}
};
var cacheDefault = { create: function create() {
	return new ObjectWithoutPrototypeCache();
} };
var strategies = {
	variadic: strategyVariadic,
	monadic: strategyMonadic
};
//#endregion
//#region ../../node_modules/.bun/@formatjs+icu-skeleton-parser@2.1.3/node_modules/@formatjs/icu-skeleton-parser/date-time.js
/**
* https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
* with some tweaks
*/
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
* Parse Date time skeleton into Intl.DateTimeFormatOptions
* Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* @public
* @param skeleton skeleton string
*/
function parseDateTimeSkeleton(skeleton) {
	const result = {};
	skeleton.replace(DATE_TIME_REGEX, (match) => {
		const len = match.length;
		switch (match[0]) {
			case "G":
				result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
				break;
			case "y":
				result.year = len === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw new RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				result.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][len - 1];
				break;
			case "w":
			case "W": throw new RangeError("`w/W` (week) patterns are not supported");
			case "d":
				result.day = ["numeric", "2-digit"][len - 1];
				break;
			case "D":
			case "F":
			case "g": throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				result.weekday = len === 4 ? "long" : len === 5 ? "narrow" : "short";
				break;
			case "e":
				if (len < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
				result.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][len - 4];
				break;
			case "c":
				if (len < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
				result.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][len - 4];
				break;
			case "a":
				result.hour12 = true;
				break;
			case "b":
			case "B": throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				result.hourCycle = "h12";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "H":
				result.hourCycle = "h23";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "K":
				result.hourCycle = "h11";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "k":
				result.hourCycle = "h24";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "j":
			case "J":
			case "C": throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				result.minute = ["numeric", "2-digit"][len - 1];
				break;
			case "s":
				result.second = ["numeric", "2-digit"][len - 1];
				break;
			case "S":
			case "A": throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				result.timeZoneName = len < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	});
	return result;
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+icu-skeleton-parser@2.1.3/node_modules/@formatjs/icu-skeleton-parser/regex.generated.js
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
//#endregion
//#region ../../node_modules/.bun/@formatjs+icu-skeleton-parser@2.1.3/node_modules/@formatjs/icu-skeleton-parser/number.js
function parseNumberSkeletonFromString(skeleton) {
	if (skeleton.length === 0) throw new Error("Number skeleton cannot be empty");
	const stringTokens = skeleton.split(WHITE_SPACE_REGEX).filter((x) => x.length > 0);
	const tokens = [];
	for (const stringToken of stringTokens) {
		let stemAndOptions = stringToken.split("/");
		if (stemAndOptions.length === 0) throw new Error("Invalid number skeleton");
		const [stem, ...options] = stemAndOptions;
		for (const option of options) if (option.length === 0) throw new Error("Invalid number skeleton");
		tokens.push({
			stem,
			options
		});
	}
	return tokens;
}
function icuUnitToEcma(unit) {
	return unit.replace(/^(.*?)-/, "");
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
	const result = {};
	if (str[str.length - 1] === "r") result.roundingPriority = "morePrecision";
	else if (str[str.length - 1] === "s") result.roundingPriority = "lessPrecision";
	str.replace(SIGNIFICANT_PRECISION_REGEX, function(_, g1, g2) {
		if (typeof g2 !== "string") {
			result.minimumSignificantDigits = g1.length;
			result.maximumSignificantDigits = g1.length;
		} else if (g2 === "+") result.minimumSignificantDigits = g1.length;
		else if (g1[0] === "#") result.maximumSignificantDigits = g1.length;
		else {
			result.minimumSignificantDigits = g1.length;
			result.maximumSignificantDigits = g1.length + (typeof g2 === "string" ? g2.length : 0);
		}
		return "";
	});
	return result;
}
function parseSign(str) {
	switch (str) {
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
function parseConciseScientificAndEngineeringStem(stem) {
	let result;
	if (stem[0] === "E" && stem[1] === "E") {
		result = { notation: "engineering" };
		stem = stem.slice(2);
	} else if (stem[0] === "E") {
		result = { notation: "scientific" };
		stem = stem.slice(1);
	}
	if (result) {
		const signDisplay = stem.slice(0, 2);
		if (signDisplay === "+!") {
			result.signDisplay = "always";
			stem = stem.slice(2);
		} else if (signDisplay === "+?") {
			result.signDisplay = "exceptZero";
			stem = stem.slice(2);
		}
		if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) throw new Error("Malformed concise eng/scientific notation");
		result.minimumIntegerDigits = stem.length;
	}
	return result;
}
function parseNotationOptions(opt) {
	const result = {};
	const signOpts = parseSign(opt);
	if (signOpts) return signOpts;
	return result;
}
/**
* https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
*/
function parseNumberSkeleton(tokens) {
	let result = {};
	for (const token of tokens) {
		switch (token.stem) {
			case "percent":
			case "%":
				result.style = "percent";
				continue;
			case "%x100":
				result.style = "percent";
				result.scale = 100;
				continue;
			case "currency":
				result.style = "currency";
				result.currency = token.options[0];
				continue;
			case "group-off":
			case ",_":
				result.useGrouping = false;
				continue;
			case "precision-integer":
			case ".":
				result.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				result.style = "unit";
				result.unit = icuUnitToEcma(token.options[0]);
				continue;
			case "compact-short":
			case "K":
				result.notation = "compact";
				result.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				result.notation = "compact";
				result.compactDisplay = "long";
				continue;
			case "scientific":
				result = {
					...result,
					notation: "scientific",
					...token.options.reduce((all, opt) => ({
						...all,
						...parseNotationOptions(opt)
					}), {})
				};
				continue;
			case "engineering":
				result = {
					...result,
					notation: "engineering",
					...token.options.reduce((all, opt) => ({
						...all,
						...parseNotationOptions(opt)
					}), {})
				};
				continue;
			case "notation-simple":
				result.notation = "standard";
				continue;
			case "unit-width-narrow":
				result.currencyDisplay = "narrowSymbol";
				result.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				result.currencyDisplay = "code";
				result.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				result.currencyDisplay = "name";
				result.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				result.currencyDisplay = "symbol";
				continue;
			case "scale":
				result.scale = parseFloat(token.options[0]);
				continue;
			case "rounding-mode-floor":
				result.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				result.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				result.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				result.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				result.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				result.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				result.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (token.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
				token.options[0].replace(INTEGER_WIDTH_REGEX, function(_, g1, g2, g3, g4, g5) {
					if (g1) result.minimumIntegerDigits = g2.length;
					else if (g3 && g4) throw new Error("We currently do not support maximum integer digits");
					else if (g5) throw new Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
			result.minimumIntegerDigits = token.stem.length;
			continue;
		}
		if (FRACTION_PRECISION_REGEX.test(token.stem)) {
			if (token.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
			token.stem.replace(FRACTION_PRECISION_REGEX, function(_, g1, g2, g3, g4, g5) {
				if (g2 === "*") result.minimumFractionDigits = g1.length;
				else if (g3 && g3[0] === "#") result.maximumFractionDigits = g3.length;
				else if (g4 && g5) {
					result.minimumFractionDigits = g4.length;
					result.maximumFractionDigits = g4.length + g5.length;
				} else {
					result.minimumFractionDigits = g1.length;
					result.maximumFractionDigits = g1.length;
				}
				return "";
			});
			const opt = token.options[0];
			if (opt === "w") result = {
				...result,
				trailingZeroDisplay: "stripIfInteger"
			};
			else if (opt) result = {
				...result,
				...parseSignificantPrecision(opt)
			};
			continue;
		}
		if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
			result = {
				...result,
				...parseSignificantPrecision(token.stem)
			};
			continue;
		}
		const signOpts = parseSign(token.stem);
		if (signOpts) result = {
			...result,
			...signOpts
		};
		const conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
		if (conciseScientificAndEngineeringOpts) result = {
			...result,
			...conciseScientificAndEngineeringOpts
		};
	}
	return result;
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/types.js
var TYPE = /* @__PURE__ */ function(TYPE) {
	/**
	* Raw text
	*/
	TYPE[TYPE["literal"] = 0] = "literal";
	/**
	* Variable w/o any format, e.g `var` in `this is a {var}`
	*/
	TYPE[TYPE["argument"] = 1] = "argument";
	/**
	* Variable w/ number format
	*/
	TYPE[TYPE["number"] = 2] = "number";
	/**
	* Variable w/ date format
	*/
	TYPE[TYPE["date"] = 3] = "date";
	/**
	* Variable w/ time format
	*/
	TYPE[TYPE["time"] = 4] = "time";
	/**
	* Variable w/ select format
	*/
	TYPE[TYPE["select"] = 5] = "select";
	/**
	* Variable w/ plural format
	*/
	TYPE[TYPE["plural"] = 6] = "plural";
	/**
	* Only possible within plural argument.
	* This is the `#` symbol that will be substituted with the count.
	*/
	TYPE[TYPE["pound"] = 7] = "pound";
	/**
	* XML-like tag
	*/
	TYPE[TYPE["tag"] = 8] = "tag";
	return TYPE;
}({});
var SKELETON_TYPE = /* @__PURE__ */ function(SKELETON_TYPE) {
	SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
	SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
	return SKELETON_TYPE;
}({});
/**
* Type Guards
*/
function isLiteralElement(el) {
	return el.type === TYPE.literal;
}
function isArgumentElement(el) {
	return el.type === TYPE.argument;
}
function isNumberElement(el) {
	return el.type === TYPE.number;
}
function isDateElement(el) {
	return el.type === TYPE.date;
}
function isTimeElement(el) {
	return el.type === TYPE.time;
}
function isSelectElement(el) {
	return el.type === TYPE.select;
}
function isPluralElement(el) {
	return el.type === TYPE.plural;
}
function isPoundElement(el) {
	return el.type === TYPE.pound;
}
function isTagElement(el) {
	return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
	return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
	return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.dateTime);
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/error.js
var ErrorKind = /* @__PURE__ */ function(ErrorKind) {
	/** Argument is unclosed (e.g. `{0`) */
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
	/** Argument is empty (e.g. `{}`). */
	ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
	/** Argument is malformed (e.g. `{foo!}``) */
	ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
	/** Expect an argument type (e.g. `{foo,}`) */
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
	/** Unsupported argument type (e.g. `{foo,foo}`) */
	ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
	/** Expect an argument style (e.g. `{foo, number, }`) */
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
	/** The number skeleton is invalid. */
	ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
	/** The date time skeleton is invalid. */
	ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
	/** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
	ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
	/** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
	ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
	/** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
	ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
	/** Missing select argument options (e.g. `{foo, select}`) */
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
	/** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
	/** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
	ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
	/** Expecting a selector in `select` argument (e.g `{foo, select}`) */
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
	/** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
	/** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
	/**
	* Expecting a message fragment after the `plural` or `selectordinal` selector
	* (e.g. `{foo, plural, one}`)
	*/
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
	/** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
	ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
	/**
	* Duplicate selectors in `plural` or `selectordinal` argument.
	* (e.g. {foo, plural, one {#} one {#}})
	*/
	ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
	/** Duplicate selectors in `select` argument.
	* (e.g. {foo, select, apple {apple} apple {apple}})
	*/
	ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
	/** Plural or select argument option must have `other` clause. */
	ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
	/** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
	ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
	/** The tag name is invalid. (e.g. `<123>foo</123>`) */
	ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
	/** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
	ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
	/** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
	ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
	return ErrorKind;
}({});
//#endregion
//#region ../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/regex.generated.js
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
//#endregion
//#region ../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/time-data.generated.js
var timeData = {
	"001": ["H", "h"],
	"419": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"AC": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"AD": ["H", "hB"],
	"AE": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"AF": [
		"H",
		"hb",
		"hB",
		"h"
	],
	"AG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"AI": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"AL": [
		"h",
		"H",
		"hB"
	],
	"AM": ["H", "hB"],
	"AO": ["H", "hB"],
	"AR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"AS": ["h", "H"],
	"AT": ["H", "hB"],
	"AU": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"AW": ["H", "hB"],
	"AX": ["H"],
	"AZ": [
		"H",
		"hB",
		"h"
	],
	"BA": [
		"H",
		"hB",
		"h"
	],
	"BB": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BD": [
		"h",
		"hB",
		"H"
	],
	"BE": ["H", "hB"],
	"BF": ["H", "hB"],
	"BG": [
		"H",
		"hB",
		"h"
	],
	"BH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"BI": ["H", "h"],
	"BJ": ["H", "hB"],
	"BL": ["H", "hB"],
	"BM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BN": [
		"hb",
		"hB",
		"h",
		"H"
	],
	"BO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"BQ": ["H"],
	"BR": ["H", "hB"],
	"BS": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BT": ["h", "H"],
	"BW": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"BY": ["H", "h"],
	"BZ": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CA": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"CC": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CD": ["hB", "H"],
	"CF": [
		"H",
		"h",
		"hB"
	],
	"CG": ["H", "hB"],
	"CH": [
		"H",
		"hB",
		"h"
	],
	"CI": ["H", "hB"],
	"CK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CL": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CM": [
		"H",
		"h",
		"hB"
	],
	"CN": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"CO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CP": ["H"],
	"CR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CU": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CV": ["H", "hB"],
	"CW": ["H", "hB"],
	"CX": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CY": [
		"h",
		"H",
		"hb",
		"hB"
	],
	"CZ": ["H"],
	"DE": ["H", "hB"],
	"DG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"DJ": ["h", "H"],
	"DK": ["H"],
	"DM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"DO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"DZ": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"EA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"EC": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"EE": ["H", "hB"],
	"EG": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"EH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ER": ["h", "H"],
	"ES": [
		"H",
		"hB",
		"h",
		"hb"
	],
	"ET": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"FI": ["H"],
	"FJ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"FK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"FM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"FO": ["H", "h"],
	"FR": ["H", "hB"],
	"GA": ["H", "hB"],
	"GB": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GD": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GE": [
		"H",
		"hB",
		"h"
	],
	"GF": ["H", "hB"],
	"GG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GH": ["h", "H"],
	"GI": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GL": ["H", "h"],
	"GM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GN": ["H", "hB"],
	"GP": ["H", "hB"],
	"GQ": [
		"H",
		"hB",
		"h",
		"hb"
	],
	"GR": [
		"h",
		"H",
		"hb",
		"hB"
	],
	"GS": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GT": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"GU": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GW": ["H", "hB"],
	"GY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"HK": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"HN": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"HR": ["H", "hB"],
	"HU": ["H", "h"],
	"IC": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ID": ["H"],
	"IE": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IL": ["H", "hB"],
	"IM": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IN": ["h", "H"],
	"IO": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IQ": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"IR": ["hB", "H"],
	"IS": ["H"],
	"IT": ["H", "hB"],
	"JE": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"JM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"JO": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"JP": [
		"H",
		"K",
		"h"
	],
	"KE": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"KG": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"KH": [
		"hB",
		"h",
		"H",
		"hb"
	],
	"KI": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KM": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"KN": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KP": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"KR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"KW": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"KY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KZ": ["H", "hB"],
	"LA": [
		"H",
		"hb",
		"hB",
		"h"
	],
	"LB": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"LC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"LI": [
		"H",
		"hB",
		"h"
	],
	"LK": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"LR": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"LS": ["h", "H"],
	"LT": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"LU": [
		"H",
		"h",
		"hB"
	],
	"LV": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"LY": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"MC": ["H", "hB"],
	"MD": ["H", "hB"],
	"ME": [
		"H",
		"hB",
		"h"
	],
	"MF": ["H", "hB"],
	"MG": ["H", "h"],
	"MH": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"ML": ["H"],
	"MM": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"MN": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"MO": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MP": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MQ": ["H", "hB"],
	"MR": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MS": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"MT": ["H", "h"],
	"MU": ["H", "h"],
	"MV": ["H", "h"],
	"MW": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MX": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"MY": [
		"hb",
		"hB",
		"h",
		"H"
	],
	"MZ": ["H", "hB"],
	"NA": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"NC": ["H", "hB"],
	"NE": ["H"],
	"NF": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NI": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"NL": ["H", "hB"],
	"NO": ["H", "h"],
	"NP": [
		"H",
		"h",
		"hB"
	],
	"NR": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NU": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NZ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"OM": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PA": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PE": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PF": [
		"H",
		"h",
		"hB"
	],
	"PG": ["h", "H"],
	"PH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PK": [
		"h",
		"hB",
		"H"
	],
	"PL": ["H", "h"],
	"PM": ["H", "hB"],
	"PN": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"PR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PS": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PT": ["H", "hB"],
	"PW": ["h", "H"],
	"PY": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"QA": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"RE": ["H", "hB"],
	"RO": ["H", "hB"],
	"RS": [
		"H",
		"hB",
		"h"
	],
	"RU": ["H"],
	"RW": ["H", "h"],
	"SA": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SB": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SC": [
		"H",
		"h",
		"hB"
	],
	"SD": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SE": ["H"],
	"SG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SH": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"SI": ["H", "hB"],
	"SJ": ["H"],
	"SK": ["H"],
	"SL": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SM": [
		"H",
		"h",
		"hB"
	],
	"SN": [
		"H",
		"h",
		"hB"
	],
	"SO": ["h", "H"],
	"SR": ["H", "hB"],
	"SS": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"ST": ["H", "hB"],
	"SV": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"SX": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"SY": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SZ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TA": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"TC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TD": [
		"h",
		"H",
		"hB"
	],
	"TF": [
		"H",
		"h",
		"hB"
	],
	"TG": ["H", "hB"],
	"TH": ["H", "h"],
	"TJ": ["H", "h"],
	"TL": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"TM": ["H", "h"],
	"TN": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"TO": ["h", "H"],
	"TR": ["H", "hB"],
	"TT": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TW": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"TZ": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"UA": [
		"H",
		"hB",
		"h"
	],
	"UG": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"UM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"US": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"UY": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"UZ": [
		"H",
		"hB",
		"h"
	],
	"VA": [
		"H",
		"h",
		"hB"
	],
	"VC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VE": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"VG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VI": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VN": ["H", "h"],
	"VU": ["h", "H"],
	"WF": ["H", "hB"],
	"WS": ["h", "H"],
	"XK": [
		"H",
		"hB",
		"h"
	],
	"YE": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"YT": ["H", "hB"],
	"ZA": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"ZM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"ZW": ["H", "h"],
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
//#region ../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/date-time-pattern-generator.js
/**
* Returns the best matching date time pattern if a date time skeleton
* pattern is provided with a locale. Follows the Unicode specification:
* https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
* @param skeleton date time skeleton pattern that possibly includes j, J or C
* @param locale
*/
function getBestPattern(skeleton, locale) {
	let skeletonCopy = "";
	for (let patternPos = 0; patternPos < skeleton.length; patternPos++) {
		const patternChar = skeleton.charAt(patternPos);
		if (patternChar === "j") {
			let extraLength = 0;
			while (patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar) {
				extraLength++;
				patternPos++;
			}
			let hourLen = 1 + (extraLength & 1);
			let dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
			let dayPeriodChar = "a";
			let hourChar = getDefaultHourSymbolFromLocale(locale);
			if (hourChar == "H" || hourChar == "k") dayPeriodLen = 0;
			while (dayPeriodLen-- > 0) skeletonCopy += dayPeriodChar;
			while (hourLen-- > 0) skeletonCopy = hourChar + skeletonCopy;
		} else if (patternChar === "J") skeletonCopy += "H";
		else skeletonCopy += patternChar;
	}
	return skeletonCopy;
}
/**
* Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
* of the given `locale` to the corresponding time pattern.
* @param locale
*/
function getDefaultHourSymbolFromLocale(locale) {
	let hourCycle = locale.hourCycle;
	if (hourCycle === void 0 && locale.hourCycles && locale.hourCycles.length) hourCycle = locale.hourCycles[0];
	if (hourCycle) switch (hourCycle) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw new Error("Invalid hourCycle");
	}
	const languageTag = locale.language;
	let regionTag;
	if (languageTag !== "root") regionTag = locale.maximize().region;
	return (timeData[regionTag || ""] || timeData[languageTag || ""] || timeData[`${languageTag}-001`] || timeData["001"])[0];
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/parser.js
var SPACE_SEPARATOR_START_REGEX = new RegExp(`^${SPACE_SEPARATOR_REGEX.source}*`);
var SPACE_SEPARATOR_END_REGEX = new RegExp(`${SPACE_SEPARATOR_REGEX.source}*$`);
function createLocation(start, end) {
	return {
		start,
		end
	};
}
var hasNativeFromEntries = !!Object.fromEntries;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var fromEntries = hasNativeFromEntries ? Object.fromEntries : function fromEntries(entries) {
	const obj = {};
	for (const [k, v] of entries) obj[k] = v;
	return obj;
};
var trimStart = hasTrimStart ? function trimStart(s) {
	return s.trimStart();
} : function trimStart(s) {
	return s.replace(SPACE_SEPARATOR_START_REGEX, "");
};
var trimEnd = hasTrimEnd ? function trimEnd(s) {
	return s.trimEnd();
} : function trimEnd(s) {
	return s.replace(SPACE_SEPARATOR_END_REGEX, "");
};
var IDENTIFIER_PREFIX_RE = /* @__PURE__ */ new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function matchIdentifierAtIndex(s, index) {
	IDENTIFIER_PREFIX_RE.lastIndex = index;
	return IDENTIFIER_PREFIX_RE.exec(s)[1] ?? "";
}
var Parser = class {
	message;
	position;
	locale;
	ignoreTag;
	requiresOtherClause;
	shouldParseSkeletons;
	constructor(message, options = {}) {
		this.message = message;
		this.position = {
			offset: 0,
			line: 1,
			column: 1
		};
		this.ignoreTag = !!options.ignoreTag;
		this.locale = options.locale;
		this.requiresOtherClause = !!options.requiresOtherClause;
		this.shouldParseSkeletons = !!options.shouldParseSkeletons;
	}
	parse() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", false);
	}
	parseMessage(nestingLevel, parentArgType, expectingCloseTag) {
		let elements = [];
		while (!this.isEOF()) {
			const char = this.char();
			if (char === 123) {
				const result = this.parseArgument(nestingLevel, expectingCloseTag);
				if (result.err) return result;
				elements.push(result.val);
			} else if (char === 125 && nestingLevel > 0) break;
			else if (char === 35 && (parentArgType === "plural" || parentArgType === "selectordinal")) {
				const position = this.clonePosition();
				this.bump();
				elements.push({
					type: TYPE.pound,
					location: createLocation(position, this.clonePosition())
				});
			} else if (char === 60 && !this.ignoreTag && this.peek() === 47) if (expectingCloseTag) break;
			else return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
			else if (char === 60 && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
				const result = this.parseTag(nestingLevel, parentArgType);
				if (result.err) return result;
				elements.push(result.val);
			} else {
				const result = this.parseLiteral(nestingLevel, parentArgType);
				if (result.err) return result;
				elements.push(result.val);
			}
		}
		return {
			val: elements,
			err: null
		};
	}
	/**
	* A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
	* [custom element name][] except that a dash is NOT always mandatory and uppercase letters
	* are accepted:
	*
	* ```
	* tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
	* tagName ::= [a-z] (PENChar)*
	* PENChar ::=
	*     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
	*     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
	*     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
	* ```
	*
	* [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
	* NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
	* since other tag-based engines like React allow it
	*/
	parseTag(nestingLevel, parentArgType) {
		const startPosition = this.clonePosition();
		this.bump();
		const tagName = this.parseTagName();
		this.bumpSpace();
		if (this.bumpIf("/>")) return {
			val: {
				type: TYPE.literal,
				value: `<${tagName}/>`,
				location: createLocation(startPosition, this.clonePosition())
			},
			err: null
		};
		else if (this.bumpIf(">")) {
			const childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
			if (childrenResult.err) return childrenResult;
			const children = childrenResult.val;
			const endTagStartPosition = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !_isAlpha(this.char())) return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
				const closingTagNameStartPosition = this.clonePosition();
				if (tagName !== this.parseTagName()) return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
				this.bumpSpace();
				if (!this.bumpIf(">")) return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
				return {
					val: {
						type: TYPE.tag,
						value: tagName,
						children,
						location: createLocation(startPosition, this.clonePosition())
					},
					err: null
				};
			} else return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
		} else return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
	}
	/**
	* This method assumes that the caller has peeked ahead for the first tag character.
	*/
	parseTagName() {
		const startOffset = this.offset();
		this.bump();
		while (!this.isEOF() && _isPotentialElementNameChar(this.char())) this.bump();
		return this.message.slice(startOffset, this.offset());
	}
	parseLiteral(nestingLevel, parentArgType) {
		const start = this.clonePosition();
		let value = "";
		while (true) {
			const parseQuoteResult = this.tryParseQuote(parentArgType);
			if (parseQuoteResult) {
				value += parseQuoteResult;
				continue;
			}
			const parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
			if (parseUnquotedResult) {
				value += parseUnquotedResult;
				continue;
			}
			const parseLeftAngleResult = this.tryParseLeftAngleBracket();
			if (parseLeftAngleResult) {
				value += parseLeftAngleResult;
				continue;
			}
			break;
		}
		const location = createLocation(start, this.clonePosition());
		return {
			val: {
				type: TYPE.literal,
				value,
				location
			},
			err: null
		};
	}
	tryParseLeftAngleBracket() {
		if (!this.isEOF() && this.char() === 60 && (this.ignoreTag || !_isAlphaOrSlash(this.peek() || 0))) {
			this.bump();
			return "<";
		}
		return null;
	}
	/**
	* Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
	* a character that requires quoting (that is, "only where needed"), and works the same in
	* nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
	*/
	tryParseQuote(parentArgType) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39:
				this.bump();
				this.bump();
				return "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (parentArgType === "plural" || parentArgType === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		const codePoints = [this.char()];
		this.bump();
		while (!this.isEOF()) {
			const ch = this.char();
			if (ch === 39) if (this.peek() === 39) {
				codePoints.push(39);
				this.bump();
			} else {
				this.bump();
				break;
			}
			else codePoints.push(ch);
			this.bump();
		}
		return String.fromCodePoint(...codePoints);
	}
	tryParseUnquoted(nestingLevel, parentArgType) {
		if (this.isEOF()) return null;
		const ch = this.char();
		if (ch === 60 || ch === 123 || ch === 35 && (parentArgType === "plural" || parentArgType === "selectordinal") || ch === 125 && nestingLevel > 0) return null;
		else {
			this.bump();
			return String.fromCodePoint(ch);
		}
	}
	parseArgument(nestingLevel, expectingCloseTag) {
		const openingBracePosition = this.clonePosition();
		this.bump();
		this.bumpSpace();
		if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		if (this.char() === 125) {
			this.bump();
			return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		}
		let value = this.parseIdentifierIfPossible().value;
		if (!value) return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		this.bumpSpace();
		if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		switch (this.char()) {
			case 125:
				this.bump();
				return {
					val: {
						type: TYPE.argument,
						value,
						location: createLocation(openingBracePosition, this.clonePosition())
					},
					err: null
				};
			case 44:
				this.bump();
				this.bumpSpace();
				if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
				return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
			default: return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		}
	}
	/**
	* Advance the parser until the end of the identifier, if it is currently on
	* an identifier character. Return an empty string otherwise.
	*/
	parseIdentifierIfPossible() {
		const startingPosition = this.clonePosition();
		const startOffset = this.offset();
		const value = matchIdentifierAtIndex(this.message, startOffset);
		const endOffset = startOffset + value.length;
		this.bumpTo(endOffset);
		return {
			value,
			location: createLocation(startingPosition, this.clonePosition())
		};
	}
	parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition) {
		let typeStartPosition = this.clonePosition();
		let argType = this.parseIdentifierIfPossible().value;
		let typeEndPosition = this.clonePosition();
		switch (argType) {
			case "": return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
			case "number":
			case "date":
			case "time": {
				this.bumpSpace();
				let styleAndLocation = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					const styleStartPosition = this.clonePosition();
					const result = this.parseSimpleArgStyleIfPossible();
					if (result.err) return result;
					const style = trimEnd(result.val);
					if (style.length === 0) return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
					styleAndLocation = {
						style,
						styleLocation: createLocation(styleStartPosition, this.clonePosition())
					};
				}
				const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
				if (argCloseResult.err) return argCloseResult;
				const location = createLocation(openingBracePosition, this.clonePosition());
				if (styleAndLocation && styleAndLocation.style.startsWith("::")) {
					let skeleton = trimStart(styleAndLocation.style.slice(2));
					if (argType === "number") {
						const result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
						if (result.err) return result;
						return {
							val: {
								type: TYPE.number,
								value,
								location,
								style: result.val
							},
							err: null
						};
					} else {
						if (skeleton.length === 0) return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location);
						let dateTimePattern = skeleton;
						if (this.locale) dateTimePattern = getBestPattern(skeleton, this.locale);
						const style = {
							type: SKELETON_TYPE.dateTime,
							pattern: dateTimePattern,
							location: styleAndLocation.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? parseDateTimeSkeleton(dateTimePattern) : {}
						};
						return {
							val: {
								type: argType === "date" ? TYPE.date : TYPE.time,
								value,
								location,
								style
							},
							err: null
						};
					}
				}
				return {
					val: {
						type: argType === "number" ? TYPE.number : argType === "date" ? TYPE.date : TYPE.time,
						value,
						location,
						style: styleAndLocation?.style ?? null
					},
					err: null
				};
			}
			case "plural":
			case "selectordinal":
			case "select": {
				const typeEndPosition = this.clonePosition();
				this.bumpSpace();
				if (!this.bumpIf(",")) return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition, { ...typeEndPosition }));
				this.bumpSpace();
				let identifierAndLocation = this.parseIdentifierIfPossible();
				let pluralOffset = 0;
				if (argType !== "select" && identifierAndLocation.value === "offset") {
					if (!this.bumpIf(":")) return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					const result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (result.err) return result;
					this.bumpSpace();
					identifierAndLocation = this.parseIdentifierIfPossible();
					pluralOffset = result.val;
				}
				const optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
				if (optionsResult.err) return optionsResult;
				const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
				if (argCloseResult.err) return argCloseResult;
				const location = createLocation(openingBracePosition, this.clonePosition());
				if (argType === "select") return {
					val: {
						type: TYPE.select,
						value,
						options: fromEntries(optionsResult.val),
						location
					},
					err: null
				};
				else return {
					val: {
						type: TYPE.plural,
						value,
						options: fromEntries(optionsResult.val),
						offset: pluralOffset,
						pluralType: argType === "plural" ? "cardinal" : "ordinal",
						location
					},
					err: null
				};
			}
			default: return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
		}
	}
	tryParseArgumentClose(openingBracePosition) {
		if (this.isEOF() || this.char() !== 125) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		this.bump();
		return {
			val: true,
			err: null
		};
	}
	/**
	* See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
	*/
	parseSimpleArgStyleIfPossible() {
		let nestedBraces = 0;
		const startPosition = this.clonePosition();
		while (!this.isEOF()) switch (this.char()) {
			case 39: {
				this.bump();
				let apostrophePosition = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
				this.bump();
				break;
			}
			case 123:
				nestedBraces += 1;
				this.bump();
				break;
			case 125:
				if (nestedBraces > 0) nestedBraces -= 1;
				else return {
					val: this.message.slice(startPosition.offset, this.offset()),
					err: null
				};
				break;
			default:
				this.bump();
				break;
		}
		return {
			val: this.message.slice(startPosition.offset, this.offset()),
			err: null
		};
	}
	parseNumberSkeletonFromString(skeleton, location) {
		let tokens = [];
		try {
			tokens = parseNumberSkeletonFromString(skeleton);
		} catch {
			return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
		}
		return {
			val: {
				type: SKELETON_TYPE.number,
				tokens,
				location,
				parsedOptions: this.shouldParseSkeletons ? parseNumberSkeleton(tokens) : {}
			},
			err: null
		};
	}
	/**
	* @param nesting_level The current nesting level of messages.
	*     This can be positive when parsing message fragment in select or plural argument options.
	* @param parent_arg_type The parent argument's type.
	* @param parsed_first_identifier If provided, this is the first identifier-like selector of
	*     the argument. It is a by-product of a previous parsing attempt.
	* @param expecting_close_tag If true, this message is directly or indirectly nested inside
	*     between a pair of opening and closing tags. The nested message will not parse beyond
	*     the closing tag boundary.
	*/
	tryParsePluralOrSelectOptions(nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
		let hasOtherClause = false;
		const options = [];
		const parsedSelectors = /* @__PURE__ */ new Set();
		let { value: selector, location: selectorLocation } = parsedFirstIdentifier;
		while (true) {
			if (selector.length === 0) {
				const startPosition = this.clonePosition();
				if (parentArgType !== "select" && this.bumpIf("=")) {
					const result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (result.err) return result;
					selectorLocation = createLocation(startPosition, this.clonePosition());
					selector = this.message.slice(startPosition.offset, this.offset());
				} else break;
			}
			if (parsedSelectors.has(selector)) return this.error(parentArgType === "select" ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
			if (selector === "other") hasOtherClause = true;
			this.bumpSpace();
			const openingBracePosition = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
			const fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
			if (fragmentResult.err) return fragmentResult;
			const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
			if (argCloseResult.err) return argCloseResult;
			options.push([selector, {
				value: fragmentResult.val,
				location: createLocation(openingBracePosition, this.clonePosition())
			}]);
			parsedSelectors.add(selector);
			this.bumpSpace();
			({value: selector, location: selectorLocation} = this.parseIdentifierIfPossible());
		}
		if (options.length === 0) return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
		if (this.requiresOtherClause && !hasOtherClause) return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
		return {
			val: options,
			err: null
		};
	}
	tryParseDecimalInteger(expectNumberError, invalidNumberError) {
		let sign = 1;
		const startingPosition = this.clonePosition();
		if (this.bumpIf("+")) {} else if (this.bumpIf("-")) sign = -1;
		let hasDigits = false;
		let decimal = 0;
		while (!this.isEOF()) {
			const ch = this.char();
			if (ch >= 48 && ch <= 57) {
				hasDigits = true;
				decimal = decimal * 10 + (ch - 48);
				this.bump();
			} else break;
		}
		const location = createLocation(startingPosition, this.clonePosition());
		if (!hasDigits) return this.error(expectNumberError, location);
		decimal *= sign;
		if (!Number.isSafeInteger(decimal)) return this.error(invalidNumberError, location);
		return {
			val: decimal,
			err: null
		};
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
	/**
	* Return the code point at the current position of the parser.
	* Throws if the index is out of bound.
	*/
	char() {
		const offset = this.position.offset;
		if (offset >= this.message.length) throw Error("out of bound");
		const code = this.message.codePointAt(offset);
		if (code === void 0) throw Error(`Offset ${offset} is at invalid UTF-16 code unit boundary`);
		return code;
	}
	error(kind, location) {
		return {
			val: null,
			err: {
				kind,
				message: this.message,
				location
			}
		};
	}
	/** Bump the parser to the next UTF-16 code unit. */
	bump() {
		if (this.isEOF()) return;
		const code = this.char();
		if (code === 10) {
			this.position.line += 1;
			this.position.column = 1;
			this.position.offset += 1;
		} else {
			this.position.column += 1;
			this.position.offset += code < 65536 ? 1 : 2;
		}
	}
	/**
	* If the substring starting at the current position of the parser has
	* the given prefix, then bump the parser to the character immediately
	* following the prefix and return true. Otherwise, don't bump the parser
	* and return false.
	*/
	bumpIf(prefix) {
		if (this.message.startsWith(prefix, this.offset())) {
			for (let i = 0; i < prefix.length; i++) this.bump();
			return true;
		}
		return false;
	}
	/**
	* Bump the parser until the pattern character is found and return `true`.
	* Otherwise bump to the end of the file and return `false`.
	*/
	bumpUntil(pattern) {
		const currentOffset = this.offset();
		const index = this.message.indexOf(pattern, currentOffset);
		if (index >= 0) {
			this.bumpTo(index);
			return true;
		} else {
			this.bumpTo(this.message.length);
			return false;
		}
	}
	/**
	* Bump the parser to the target offset.
	* If target offset is beyond the end of the input, bump the parser to the end of the input.
	*/
	bumpTo(targetOffset) {
		if (this.offset() > targetOffset) throw Error(`targetOffset ${targetOffset} must be greater than or equal to the current offset ${this.offset()}`);
		targetOffset = Math.min(targetOffset, this.message.length);
		while (true) {
			const offset = this.offset();
			if (offset === targetOffset) break;
			if (offset > targetOffset) throw Error(`targetOffset ${targetOffset} is at invalid UTF-16 code unit boundary`);
			this.bump();
			if (this.isEOF()) break;
		}
	}
	/** advance the parser through all whitespace to the next non-whitespace code unit. */
	bumpSpace() {
		while (!this.isEOF() && _isWhiteSpace(this.char())) this.bump();
	}
	/**
	* Peek at the *next* Unicode codepoint in the input without advancing the parser.
	* If the input has been exhausted, then this returns null.
	*/
	peek() {
		if (this.isEOF()) return null;
		const code = this.char();
		const offset = this.offset();
		return this.message.charCodeAt(offset + (code >= 65536 ? 2 : 1)) ?? null;
	}
};
/**
* This check if codepoint is alphabet (lower & uppercase)
* @param codepoint
* @returns
*/
function _isAlpha(codepoint) {
	return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
}
function _isAlphaOrSlash(codepoint) {
	return _isAlpha(codepoint) || codepoint === 47;
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
	return c === 45 || c === 46 || c >= 48 && c <= 57 || c === 95 || c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 183 || c >= 192 && c <= 214 || c >= 216 && c <= 246 || c >= 248 && c <= 893 || c >= 895 && c <= 8191 || c >= 8204 && c <= 8205 || c >= 8255 && c <= 8256 || c >= 8304 && c <= 8591 || c >= 11264 && c <= 12271 || c >= 12289 && c <= 55295 || c >= 63744 && c <= 64975 || c >= 65008 && c <= 65533 || c >= 65536 && c <= 983039;
}
/**
* Code point equivalent of regex `\p{White_Space}`.
* From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
*/
function _isWhiteSpace(c) {
	return c >= 9 && c <= 13 || c === 32 || c === 133 || c >= 8206 && c <= 8207 || c === 8232 || c === 8233;
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/index.js
function pruneLocation(els) {
	els.forEach((el) => {
		delete el.location;
		if (isSelectElement(el) || isPluralElement(el)) for (const k in el.options) {
			delete el.options[k].location;
			pruneLocation(el.options[k].value);
		}
		else if (isNumberElement(el) && isNumberSkeleton(el.style)) delete el.style.location;
		else if ((isDateElement(el) || isTimeElement(el)) && isDateTimeSkeleton(el.style)) delete el.style.location;
		else if (isTagElement(el)) pruneLocation(el.children);
	});
}
function parse(message, opts = {}) {
	opts = {
		shouldParseSkeletons: true,
		requiresOtherClause: true,
		...opts
	};
	const result = new Parser(message, opts).parse();
	if (result.err) {
		const error = SyntaxError(ErrorKind[result.err.kind]);
		error.location = result.err.location;
		error.originalMessage = result.err.message;
		throw error;
	}
	if (!opts?.captureLocation) pruneLocation(result.val);
	return result.val;
}
//#endregion
//#region ../../node_modules/.bun/intl-messageformat@11.2.0/node_modules/intl-messageformat/src/error.js
var ErrorCode = /* @__PURE__ */ function(ErrorCode) {
	ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
	ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
	ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
	return ErrorCode;
}({});
var FormatError = class extends Error {
	code;
	/**
	* Original message we're trying to format
	* `undefined` if we're only dealing w/ AST
	*
	* @type {(string | undefined)}
	* @memberof FormatError
	*/
	originalMessage;
	constructor(msg, code, originalMessage) {
		super(msg);
		this.code = code;
		this.originalMessage = originalMessage;
	}
	toString() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}
};
var InvalidValueError = class extends FormatError {
	constructor(variableId, value, options, originalMessage) {
		super(`Invalid values for "${variableId}": "${value}". Options are "${Object.keys(options).join("\", \"")}"`, ErrorCode.INVALID_VALUE, originalMessage);
	}
};
var InvalidValueTypeError = class extends FormatError {
	constructor(value, type, originalMessage) {
		super(`Value for "${value}" must be of type ${type}`, ErrorCode.INVALID_VALUE, originalMessage);
	}
};
var MissingValueError = class extends FormatError {
	constructor(variableId, originalMessage) {
		super(`The intl string context variable "${variableId}" was not provided to the string "${originalMessage}"`, ErrorCode.MISSING_VALUE, originalMessage);
	}
};
//#endregion
//#region ../../node_modules/.bun/intl-messageformat@11.2.0/node_modules/intl-messageformat/src/formatters.js
var PART_TYPE = /* @__PURE__ */ function(PART_TYPE) {
	PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
	PART_TYPE[PART_TYPE["object"] = 1] = "object";
	return PART_TYPE;
}({});
function mergeLiteral(parts) {
	if (parts.length < 2) return parts;
	return parts.reduce((all, part) => {
		const lastPart = all[all.length - 1];
		if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) all.push(part);
		else lastPart.value += part.value;
		return all;
	}, []);
}
function isFormatXMLElementFn(el) {
	return typeof el === "function";
}
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, originalMessage) {
	if (els.length === 1 && isLiteralElement(els[0])) return [{
		type: PART_TYPE.literal,
		value: els[0].value
	}];
	const result = [];
	for (const el of els) {
		if (isLiteralElement(el)) {
			result.push({
				type: PART_TYPE.literal,
				value: el.value
			});
			continue;
		}
		if (isPoundElement(el)) {
			if (typeof currentPluralValue === "number") result.push({
				type: PART_TYPE.literal,
				value: formatters.getNumberFormat(locales).format(currentPluralValue)
			});
			continue;
		}
		const { value: varName } = el;
		if (!(values && varName in values)) throw new MissingValueError(varName, originalMessage);
		let value = values[varName];
		if (isArgumentElement(el)) {
			if (!value || typeof value === "string" || typeof value === "number" || typeof value === "bigint") value = typeof value === "string" || typeof value === "number" || typeof value === "bigint" ? String(value) : "";
			result.push({
				type: typeof value === "string" ? PART_TYPE.literal : PART_TYPE.object,
				value
			});
			continue;
		}
		if (isDateElement(el)) {
			const style = typeof el.style === "string" ? formats.date[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : void 0;
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getDateTimeFormat(locales, style).format(value)
			});
			continue;
		}
		if (isTimeElement(el)) {
			const style = typeof el.style === "string" ? formats.time[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : formats.time.medium;
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getDateTimeFormat(locales, style).format(value)
			});
			continue;
		}
		if (isNumberElement(el)) {
			const style = typeof el.style === "string" ? formats.number[el.style] : isNumberSkeleton(el.style) ? el.style.parsedOptions : void 0;
			if (style && style.scale) {
				const scale = style.scale || 1;
				if (typeof value === "bigint") {
					if (!Number.isInteger(scale)) throw new TypeError(`Cannot apply fractional scale ${scale} to bigint value. Scale must be an integer when formatting bigint.`);
					value = value * BigInt(scale);
				} else value = value * scale;
			}
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getNumberFormat(locales, style).format(value)
			});
			continue;
		}
		if (isTagElement(el)) {
			const { children, value } = el;
			const formatFn = values[value];
			if (!isFormatXMLElementFn(formatFn)) throw new InvalidValueTypeError(value, "function", originalMessage);
			let chunks = formatFn(formatToParts(children, locales, formatters, formats, values, currentPluralValue).map((p) => p.value));
			if (!Array.isArray(chunks)) chunks = [chunks];
			result.push(...chunks.map((c) => {
				return {
					type: typeof c === "string" ? PART_TYPE.literal : PART_TYPE.object,
					value: c
				};
			}));
		}
		if (isSelectElement(el)) {
			const key = value;
			const opt = (Object.prototype.hasOwnProperty.call(el.options, key) ? el.options[key] : void 0) || el.options.other;
			if (!opt) throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
			result.push(...formatToParts(opt.value, locales, formatters, formats, values));
			continue;
		}
		if (isPluralElement(el)) {
			const exactKey = `=${value}`;
			let opt = Object.prototype.hasOwnProperty.call(el.options, exactKey) ? el.options[exactKey] : void 0;
			if (!opt) {
				if (!Intl.PluralRules) throw new FormatError(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ErrorCode.MISSING_INTL_API, originalMessage);
				const numericValue = typeof value === "bigint" ? Number(value) : value;
				const rule = formatters.getPluralRules(locales, { type: el.pluralType }).select(numericValue - (el.offset || 0));
				opt = (Object.prototype.hasOwnProperty.call(el.options, rule) ? el.options[rule] : void 0) || el.options.other;
			}
			if (!opt) throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
			const numericValue = typeof value === "bigint" ? Number(value) : value;
			result.push(...formatToParts(opt.value, locales, formatters, formats, values, numericValue - (el.offset || 0)));
			continue;
		}
	}
	return mergeLiteral(result);
}
//#endregion
//#region ../../node_modules/.bun/intl-messageformat@11.2.0/node_modules/intl-messageformat/src/core.js
function mergeConfig(c1, c2) {
	if (!c2) return c1;
	return {
		...c1,
		...c2,
		...Object.keys(c1).reduce((all, k) => {
			all[k] = {
				...c1[k],
				...c2[k]
			};
			return all;
		}, {})
	};
}
function mergeConfigs(defaultConfig, configs) {
	if (!configs) return defaultConfig;
	return Object.keys(defaultConfig).reduce((all, k) => {
		all[k] = mergeConfig(defaultConfig[k], configs[k]);
		return all;
	}, { ...defaultConfig });
}
function createFastMemoizeCache$1(store) {
	return { create() {
		return {
			get(key) {
				return store[key];
			},
			set(key, value) {
				store[key] = value;
			}
		};
	} };
}
function createDefaultFormatters(cache = {
	number: {},
	dateTime: {},
	pluralRules: {}
}) {
	return {
		getNumberFormat: memoize((...args) => new Intl.NumberFormat(...args), {
			cache: createFastMemoizeCache$1(cache.number),
			strategy: strategies.variadic
		}),
		getDateTimeFormat: memoize((...args) => new Intl.DateTimeFormat(...args), {
			cache: createFastMemoizeCache$1(cache.dateTime),
			strategy: strategies.variadic
		}),
		getPluralRules: memoize((...args) => new Intl.PluralRules(...args), {
			cache: createFastMemoizeCache$1(cache.pluralRules),
			strategy: strategies.variadic
		})
	};
}
var IntlMessageFormat = class IntlMessageFormat {
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
	constructor(message, locales = IntlMessageFormat.defaultLocale, overrideFormats, opts) {
		this.locales = locales;
		this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
		if (typeof message === "string") {
			this.message = message;
			if (!IntlMessageFormat.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			const { ...parseOpts } = opts || {};
			this.ast = IntlMessageFormat.__parse(message, {
				...parseOpts,
				locale: this.resolvedLocale
			});
		} else this.ast = message;
		if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
		this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
		this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
	}
	format = (values) => {
		const parts = this.formatToParts(values);
		if (parts.length === 1) return parts[0].value;
		const result = parts.reduce((all, part) => {
			if (!all.length || part.type !== PART_TYPE.literal || typeof all[all.length - 1] !== "string") all.push(part.value);
			else all[all.length - 1] += part.value;
			return all;
		}, []);
		if (result.length <= 1) return result[0] || "";
		return result;
	};
	formatToParts = (values) => formatToParts(this.ast, this.locales, this.formatters, this.formats, values, void 0, this.message);
	resolvedOptions = () => ({ locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0] });
	getAst = () => this.ast;
	static memoizedDefaultLocale = null;
	static get defaultLocale() {
		if (!IntlMessageFormat.memoizedDefaultLocale) IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
		return IntlMessageFormat.memoizedDefaultLocale;
	}
	static resolveLocale = (locales) => {
		if (typeof Intl.Locale === "undefined") return;
		const supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
		if (supportedLocales.length > 0) return new Intl.Locale(supportedLocales[0]);
		return new Intl.Locale(typeof locales === "string" ? locales : locales[0]);
	};
	static __parse = parse;
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
//#region ../../node_modules/.bun/@formatjs+intl@4.1.5/node_modules/@formatjs/intl/src/error.js
var IntlErrorCode = /* @__PURE__ */ function(IntlErrorCode) {
	IntlErrorCode["FORMAT_ERROR"] = "FORMAT_ERROR";
	IntlErrorCode["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
	IntlErrorCode["INVALID_CONFIG"] = "INVALID_CONFIG";
	IntlErrorCode["MISSING_DATA"] = "MISSING_DATA";
	IntlErrorCode["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
	return IntlErrorCode;
}({});
var IntlError = class IntlError extends Error {
	code;
	constructor(code, message, exception) {
		const err = exception ? exception instanceof Error ? exception : new Error(String(exception)) : void 0;
		super(`[@formatjs/intl Error ${code}] ${message}
${err ? `\n${err.message}\n${err.stack}` : ""}`);
		this.code = code;
		if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(this, IntlError);
	}
};
var UnsupportedFormatterError = class extends IntlError {
	constructor(message, exception) {
		super(IntlErrorCode.UNSUPPORTED_FORMATTER, message, exception);
	}
};
var InvalidConfigError = class extends IntlError {
	constructor(message, exception) {
		super(IntlErrorCode.INVALID_CONFIG, message, exception);
	}
};
var MissingDataError = class extends IntlError {
	constructor(message, exception) {
		super(IntlErrorCode.MISSING_DATA, message, exception);
	}
};
var IntlFormatError = class extends IntlError {
	descriptor;
	locale;
	constructor(message, locale, exception) {
		super(IntlErrorCode.FORMAT_ERROR, `${message}
Locale: ${locale}
`, exception);
		this.locale = locale;
	}
};
var MessageFormatError = class extends IntlFormatError {
	descriptor;
	locale;
	constructor(message, locale, descriptor, exception) {
		super(`${message}
MessageID: ${descriptor?.id}
Default Message: ${descriptor?.defaultMessage}
Description: ${descriptor?.description}
`, locale, exception);
		this.descriptor = descriptor;
		this.locale = locale;
	}
};
var MissingTranslationError = class extends IntlError {
	descriptor;
	constructor(descriptor, locale) {
		super(IntlErrorCode.MISSING_TRANSLATION, `Missing message: "${descriptor.id}" for locale "${locale}", using ${descriptor.defaultMessage ? `default message (${typeof descriptor.defaultMessage === "string" ? descriptor.defaultMessage : descriptor.defaultMessage.map((e) => e.value ?? JSON.stringify(e)).join()})` : "id"} as fallback.`);
		this.descriptor = descriptor;
	}
};
//#endregion
//#region ../../node_modules/.bun/@formatjs+intl@4.1.5/node_modules/@formatjs/intl/src/utils.js
function invariant$1(condition, message, Err = Error) {
	if (!condition) throw new Err(message);
}
function filterProps(props, allowlist, defaults = {}) {
	return allowlist.reduce((filtered, name) => {
		if (name in props) filtered[name] = props[name];
		else if (name in defaults) filtered[name] = defaults[name];
		return filtered;
	}, {});
}
var defaultErrorHandler = (error) => {
	if (process.env.NODE_ENV !== "production") console.error(error);
};
var defaultWarnHandler = (warning) => {
	if (process.env.NODE_ENV !== "production") console.warn(warning);
};
var DEFAULT_INTL_CONFIG$1 = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: true,
	onError: defaultErrorHandler,
	onWarn: defaultWarnHandler
};
function createIntlCache() {
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
function createFastMemoizeCache(store) {
	return { create() {
		return {
			get(key) {
				return store[key];
			},
			set(key, value) {
				store[key] = value;
			}
		};
	} };
}
/**
* Create intl formatters and populate cache
* @param cache explicit cache to prevent leaking memory
*/
function createFormatters(cache = createIntlCache()) {
	const RelativeTimeFormat = Intl.RelativeTimeFormat;
	const ListFormat = Intl.ListFormat;
	const DisplayNames = Intl.DisplayNames;
	const getDateTimeFormat = memoize((...args) => new Intl.DateTimeFormat(...args), {
		cache: createFastMemoizeCache(cache.dateTime),
		strategy: strategies.variadic
	});
	const getNumberFormat = memoize((...args) => new Intl.NumberFormat(...args), {
		cache: createFastMemoizeCache(cache.number),
		strategy: strategies.variadic
	});
	const getPluralRules = memoize((...args) => new Intl.PluralRules(...args), {
		cache: createFastMemoizeCache(cache.pluralRules),
		strategy: strategies.variadic
	});
	return {
		getDateTimeFormat,
		getNumberFormat,
		getMessageFormat: memoize((message, locales, overrideFormats, opts) => new IntlMessageFormat(message, locales, overrideFormats, {
			formatters: {
				getNumberFormat,
				getDateTimeFormat,
				getPluralRules
			},
			...opts
		}), {
			cache: createFastMemoizeCache(cache.message),
			strategy: strategies.variadic
		}),
		getRelativeTimeFormat: memoize((...args) => new RelativeTimeFormat(...args), {
			cache: createFastMemoizeCache(cache.relativeTime),
			strategy: strategies.variadic
		}),
		getPluralRules,
		getListFormat: memoize((...args) => new ListFormat(...args), {
			cache: createFastMemoizeCache(cache.list),
			strategy: strategies.variadic
		}),
		getDisplayNames: memoize((...args) => new DisplayNames(...args), {
			cache: createFastMemoizeCache(cache.displayNames),
			strategy: strategies.variadic
		})
	};
}
function getNamedFormat(formats, type, name, onError) {
	const formatType = formats && formats[type];
	let format;
	if (formatType) format = formatType[name];
	if (format) return format;
	onError(new UnsupportedFormatterError(`No ${type} format named: ${name}`));
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+intl@4.1.5/node_modules/@formatjs/intl/src/message.js
function setTimeZoneInOptions(opts, timeZone) {
	return Object.keys(opts).reduce((all, k) => {
		all[k] = {
			timeZone,
			...opts[k]
		};
		return all;
	}, {});
}
function deepMergeOptions(opts1, opts2) {
	return Object.keys({
		...opts1,
		...opts2
	}).reduce((all, k) => {
		all[k] = {
			...opts1[k],
			...opts2[k]
		};
		return all;
	}, {});
}
function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
	if (!timeZone) return f1;
	const mfFormats = IntlMessageFormat.formats;
	return {
		...mfFormats,
		...f1,
		date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)),
		time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone))
	};
}
var formatMessage$1 = ({ locale, formats, messages, defaultLocale, defaultFormats, fallbackOnEmptyString, onError, timeZone, defaultRichTextElements }, state, messageDescriptor = { id: "" }, values, opts) => {
	const { id: msgId, defaultMessage } = messageDescriptor;
	invariant$1(!!msgId, `[@formatjs/intl] An \`id\` must be provided to format a message. You can either:
1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)
or [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR
2. Configure your \`eslint\` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)
to autofix this issue`);
	const id = String(msgId);
	const message = messages && Object.prototype.hasOwnProperty.call(messages, id) && messages[id];
	if (Array.isArray(message) && message.length === 1 && message[0].type === TYPE.literal) return message[0].value;
	values = {
		...defaultRichTextElements,
		...values
	};
	formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
	defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
	if (!message) {
		if (fallbackOnEmptyString === false && message === "") return message;
		if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) onError(new MissingTranslationError(messageDescriptor, locale));
		if (defaultMessage) try {
			return state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts).format(values);
		} catch (e) {
			onError(new MessageFormatError(`Error formatting default message for: "${id}", rendering default message verbatim`, locale, messageDescriptor, e));
			return typeof defaultMessage === "string" ? defaultMessage : id;
		}
		return id;
	}
	try {
		return state.getMessageFormat(message, locale, formats, {
			formatters: state,
			...opts
		}).format(values);
	} catch (e) {
		onError(new MessageFormatError(`Error formatting message: "${id}", using ${defaultMessage ? "default message" : "id"} as fallback.`, locale, messageDescriptor, e));
	}
	if (defaultMessage) try {
		return state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts).format(values);
	} catch (e) {
		onError(new MessageFormatError(`Error formatting the default message for: "${id}", rendering message verbatim`, locale, messageDescriptor, e));
	}
	if (typeof message === "string") return message;
	if (typeof defaultMessage === "string") return defaultMessage;
	return id;
};
//#endregion
//#region ../../node_modules/.bun/@formatjs+intl@4.1.5/node_modules/@formatjs/intl/src/dateTime.js
var DATE_TIME_FORMAT_OPTIONS = [
	"formatMatcher",
	"timeZone",
	"hour12",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"hourCycle",
	"dateStyle",
	"timeStyle",
	"calendar",
	"numberingSystem",
	"fractionalSecondDigits"
];
function getFormatter$2({ locale, formats, onError, timeZone }, type, getDateTimeFormat, options = {}) {
	const { format } = options;
	let filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, {
		...timeZone && { timeZone },
		...format && getNamedFormat(formats, type, format, onError)
	});
	if (type === "time" && !filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second && !filteredOptions.timeStyle && !filteredOptions.dateStyle) filteredOptions = {
		...filteredOptions,
		hour: "numeric",
		minute: "numeric"
	};
	return getDateTimeFormat(locale, filteredOptions);
}
function formatDate(config, getDateTimeFormat, value, options = {}) {
	const date = typeof value === "string" ? new Date(value || 0) : value;
	try {
		return getFormatter$2(config, "date", getDateTimeFormat, options).format(date);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting date.", config.locale, e));
	}
	return String(date);
}
function formatTime(config, getDateTimeFormat, value, options = {}) {
	const date = typeof value === "string" ? new Date(value || 0) : value;
	try {
		return getFormatter$2(config, "time", getDateTimeFormat, options).format(date);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting time.", config.locale, e));
	}
	return String(date);
}
function formatDateTimeRange(config, getDateTimeFormat, from, to, options = {}) {
	const fromDate = typeof from === "string" ? new Date(from || 0) : from;
	const toDate = typeof to === "string" ? new Date(to || 0) : to;
	try {
		return getFormatter$2(config, "dateTimeRange", getDateTimeFormat, options).formatRange(fromDate, toDate);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting date time range.", config.locale, e));
	}
	return String(fromDate);
}
function formatDateToParts(config, getDateTimeFormat, value, options = {}) {
	const date = typeof value === "string" ? new Date(value || 0) : value;
	try {
		return getFormatter$2(config, "date", getDateTimeFormat, options).formatToParts(date);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting date.", config.locale, e));
	}
	return [];
}
function formatTimeToParts(config, getDateTimeFormat, value, options = {}) {
	const date = typeof value === "string" ? new Date(value || 0) : value;
	try {
		return getFormatter$2(config, "time", getDateTimeFormat, options).formatToParts(date);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting time.", config.locale, e));
	}
	return [];
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+intl@4.1.5/node_modules/@formatjs/intl/src/displayName.js
var DISPLAY_NAMES_OPTONS = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function formatDisplayName({ locale, onError }, getDisplayNames, value, options) {
	if (!Intl.DisplayNames) onError(new FormatError(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, ErrorCode.MISSING_INTL_API));
	const filteredOptions = filterProps(options, DISPLAY_NAMES_OPTONS);
	try {
		return getDisplayNames(locale, filteredOptions).of(value);
	} catch (e) {
		onError(new IntlFormatError("Error formatting display name.", locale, e));
	}
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+intl@4.1.5/node_modules/@formatjs/intl/src/list.js
var LIST_FORMAT_OPTIONS = ["type", "style"];
var now = Date.now();
function generateToken(i) {
	return `${now}_${i}_${now}`;
}
function formatList(opts, getListFormat, values, options = {}) {
	const results = formatListToParts(opts, getListFormat, values, options).reduce((all, el) => {
		const val = el.value;
		if (typeof val !== "string") all.push(val);
		else if (typeof all[all.length - 1] === "string") all[all.length - 1] += val;
		else all.push(val);
		return all;
	}, []);
	return results.length === 1 ? results[0] : results.length === 0 ? "" : results;
}
function formatListToParts({ locale, onError }, getListFormat, values, options = {}) {
	if (!Intl.ListFormat) onError(new FormatError(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, ErrorCode.MISSING_INTL_API));
	const filteredOptions = filterProps(options, LIST_FORMAT_OPTIONS);
	try {
		const richValues = {};
		const serializedValues = Array.from(values).map((v, i) => {
			if (typeof v === "object" && v !== null) {
				const id = generateToken(i);
				richValues[id] = v;
				return id;
			}
			return String(v);
		});
		return getListFormat(locale, filteredOptions).formatToParts(serializedValues).map((part) => part.type === "literal" ? part : {
			...part,
			value: richValues[part.value] || part.value
		});
	} catch (e) {
		onError(new IntlFormatError("Error formatting list.", locale, e));
	}
	return values;
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+intl@4.1.5/node_modules/@formatjs/intl/src/plural.js
var PLURAL_FORMAT_OPTIONS = ["type"];
function formatPlural({ locale, onError }, getPluralRules, value, options = {}) {
	if (!Intl.PluralRules) onError(new FormatError(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ErrorCode.MISSING_INTL_API));
	const filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
	try {
		return getPluralRules(locale, filteredOptions).select(value);
	} catch (e) {
		onError(new IntlFormatError("Error formatting plural.", locale, e));
	}
	return "other";
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+intl@4.1.5/node_modules/@formatjs/intl/src/relativeTime.js
var RELATIVE_TIME_FORMAT_OPTIONS = ["numeric", "style"];
function getFormatter$1({ locale, formats, onError }, getRelativeTimeFormat, options = {}) {
	const { format } = options;
	return getRelativeTimeFormat(locale, filterProps(options, RELATIVE_TIME_FORMAT_OPTIONS, !!format && getNamedFormat(formats, "relative", format, onError) || {}));
}
function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options = {}) {
	if (!unit) unit = "second";
	if (!Intl.RelativeTimeFormat) config.onError(new FormatError(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, ErrorCode.MISSING_INTL_API));
	try {
		return getFormatter$1(config, getRelativeTimeFormat, options).format(value, unit);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting relative time.", config.locale, e));
	}
	return String(value);
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+intl@4.1.5/node_modules/@formatjs/intl/src/number.js
var NUMBER_FORMAT_OPTIONS = [
	"style",
	"currency",
	"unit",
	"unitDisplay",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"currencyDisplay",
	"currencySign",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"numberingSystem",
	"trailingZeroDisplay",
	"roundingPriority",
	"roundingIncrement",
	"roundingMode"
];
function getFormatter({ locale, formats, onError }, getNumberFormat, options = {}) {
	const { format } = options;
	return getNumberFormat(locale, filterProps(options, NUMBER_FORMAT_OPTIONS, format && getNamedFormat(formats, "number", format, onError) || {}));
}
function formatNumber(config, getNumberFormat, value, options = {}) {
	try {
		return getFormatter(config, getNumberFormat, options).format(value);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting number.", config.locale, e));
	}
	return String(value);
}
function formatNumberToParts(config, getNumberFormat, value, options = {}) {
	try {
		return getFormatter(config, getNumberFormat, options).formatToParts(value);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting number.", config.locale, e));
	}
	return [];
}
//#endregion
//#region ../../node_modules/.bun/@formatjs+intl@4.1.5/node_modules/@formatjs/intl/src/create-intl.js
function messagesContainString(messages) {
	return typeof (messages ? messages[Object.keys(messages)[0]] : void 0) === "string";
}
function verifyConfigMessages(config) {
	if (config.onWarn && config.defaultRichTextElements && messagesContainString(config.messages || {})) config.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
/**
* Create intl object
* @param config intl config
* @param cache cache for formatter instances to prevent memory leak
*/
function createIntl$1(config, cache) {
	const formatters = createFormatters(cache);
	const resolvedConfig = {
		...DEFAULT_INTL_CONFIG$1,
		...config
	};
	const { locale, defaultLocale, onError } = resolvedConfig;
	if (!locale) {
		if (onError) onError(new InvalidConfigError(`"locale" was not configured, using "${defaultLocale}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`));
		resolvedConfig.locale = resolvedConfig.defaultLocale || "en";
	} else if (!Intl.NumberFormat.supportedLocalesOf(locale).length && onError) onError(new MissingDataError(`Missing locale data for locale: "${locale}" in Intl.NumberFormat. Using default locale: "${defaultLocale}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`));
	else if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length && onError) onError(new MissingDataError(`Missing locale data for locale: "${locale}" in Intl.DateTimeFormat. Using default locale: "${defaultLocale}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`));
	verifyConfigMessages(resolvedConfig);
	return {
		...resolvedConfig,
		formatters,
		formatNumber: formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat),
		formatNumberToParts: formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat),
		formatRelativeTime: formatRelativeTime.bind(null, resolvedConfig, formatters.getRelativeTimeFormat),
		formatDate: formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat),
		formatDateToParts: formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat),
		formatTime: formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat),
		formatDateTimeRange: formatDateTimeRange.bind(null, resolvedConfig, formatters.getDateTimeFormat),
		formatTimeToParts: formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat),
		formatPlural: formatPlural.bind(null, resolvedConfig, formatters.getPluralRules),
		formatMessage: formatMessage$1.bind(null, resolvedConfig, formatters),
		$t: formatMessage$1.bind(null, resolvedConfig, formatters),
		formatList: formatList.bind(null, resolvedConfig, formatters.getListFormat),
		formatListToParts: formatListToParts.bind(null, resolvedConfig, formatters.getListFormat),
		formatDisplayName: formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames)
	};
}
//#endregion
//#region ../../node_modules/.bun/react-intl@10.1.1+b2e33729a97476bf/node_modules/react-intl/src/utils.js
function invariant(condition, message, Err = Error) {
	if (!condition) throw new Err(message);
}
function invariantIntlContext(intl) {
	invariant(intl, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var DEFAULT_INTL_CONFIG = {
	...DEFAULT_INTL_CONFIG$1,
	textComponent: React$1.Fragment
};
/**
* Builds an array of {@link React.ReactNode}s with index-based keys, similar to
* {@link React.Children.toArray}. However, this function tells React that it
* was intentional, so they won't produce a bunch of warnings about it.
*
* React doesn't recommend doing this because it makes reordering inefficient,
* but we mostly need this for message chunks, which don't tend to reorder to
* begin with.
*
*/
var toKeyedReactNodeArray = (children) => {
	return React$1.Children.toArray(children).map((child, index) => {
		if (React$1.isValidElement(child)) return /* @__PURE__ */ jsx(React$1.Fragment, { children: child }, index);
		return child;
	});
};
/**
* Takes a `formatXMLElementFn`, and composes it in function, which passes
* argument `parts` through, assigning unique key to each part, to prevent
* "Each child in a list should have a unique "key"" React error.
* @param formatXMLElementFn
*/
function assignUniqueKeysToParts(formatXMLElementFn) {
	return function(parts) {
		return formatXMLElementFn(toKeyedReactNodeArray(parts));
	};
}
function shallowEqual(objA, objB) {
	if (objA === objB) return true;
	if (!objA || !objB) return false;
	var aKeys = Object.keys(objA);
	var bKeys = Object.keys(objB);
	var len = aKeys.length;
	if (bKeys.length !== len) return false;
	for (var i = 0; i < len; i++) {
		var key = aKeys[i];
		if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) return false;
	}
	return true;
}
//#endregion
//#region ../../node_modules/.bun/react-intl@10.1.1+b2e33729a97476bf/node_modules/react-intl/src/components/context.js
var IntlContext = React$1.createContext(null);
var Provider = IntlContext.Provider;
//#endregion
//#region ../../node_modules/.bun/react-intl@10.1.1+b2e33729a97476bf/node_modules/react-intl/src/components/useIntl.js
function useIntl() {
	const intl = React$1.useContext(IntlContext);
	invariantIntlContext(intl);
	return intl;
}
//#endregion
//#region ../../node_modules/.bun/react-intl@10.1.1+b2e33729a97476bf/node_modules/react-intl/src/components/createIntl.js
function assignUniqueKeysToFormatXMLElementFnArgument(values) {
	if (!values) return values;
	return Object.keys(values).reduce((acc, k) => {
		const v = values[k];
		acc[k] = isFormatXMLElementFn(v) ? assignUniqueKeysToParts(v) : v;
		return acc;
	}, {});
}
var formatMessage = (config, formatters, descriptor, rawValues, ...rest) => {
	const chunks = formatMessage$1(config, formatters, descriptor, assignUniqueKeysToFormatXMLElementFnArgument(rawValues), ...rest);
	if (Array.isArray(chunks)) return toKeyedReactNodeArray(chunks);
	return chunks;
};
/**
* Create intl object
* @param config intl config
* @param cache cache for formatter instances to prevent memory leak
*/
var createIntl = ({ defaultRichTextElements: rawDefaultRichTextElements, ...config }, cache) => {
	const defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements);
	const coreIntl = createIntl$1({
		...DEFAULT_INTL_CONFIG,
		...config,
		defaultRichTextElements
	}, cache);
	const resolvedConfig = {
		locale: coreIntl.locale,
		timeZone: coreIntl.timeZone,
		fallbackOnEmptyString: coreIntl.fallbackOnEmptyString,
		formats: coreIntl.formats,
		defaultLocale: coreIntl.defaultLocale,
		defaultFormats: coreIntl.defaultFormats,
		messages: coreIntl.messages,
		onError: coreIntl.onError,
		defaultRichTextElements
	};
	return {
		...coreIntl,
		formatMessage: formatMessage.bind(null, resolvedConfig, coreIntl.formatters),
		$t: formatMessage.bind(null, resolvedConfig, coreIntl.formatters)
	};
};
//#endregion
//#region ../../node_modules/.bun/react-intl@10.1.1+b2e33729a97476bf/node_modules/react-intl/src/components/message.js
function areEqual(prevProps, nextProps) {
	const { values, ...otherProps } = prevProps;
	const { values: nextValues, ...nextOtherProps } = nextProps;
	return shallowEqual(nextValues, values) && shallowEqual(otherProps, nextOtherProps);
}
function FormattedMessage(props) {
	const { formatMessage, textComponent: Text = React$1.Fragment } = useIntl();
	const { id, description, defaultMessage, values, children, tagName: Component = Text, ignoreTag } = props;
	const nodes = formatMessage({
		id,
		description,
		defaultMessage
	}, values, { ignoreTag });
	if (typeof children === "function") return children(Array.isArray(nodes) ? nodes : [nodes]);
	if (Component) return /* @__PURE__ */ jsx(Component, { children: nodes });
	return /* @__PURE__ */ jsx(Fragment, { children: nodes });
}
FormattedMessage.displayName = "FormattedMessage";
var MemoizedFormattedMessage = React$1.memo(FormattedMessage, areEqual);
MemoizedFormattedMessage.displayName = "MemoizedFormattedMessage";
//#endregion
//#region ../../node_modules/.bun/react-intl@10.1.1+b2e33729a97476bf/node_modules/react-intl/src/components/provider.js
function processIntlConfig(config) {
	return {
		locale: config.locale,
		timeZone: config.timeZone,
		fallbackOnEmptyString: config.fallbackOnEmptyString,
		formats: config.formats,
		textComponent: config.textComponent,
		messages: config.messages,
		defaultLocale: config.defaultLocale,
		defaultFormats: config.defaultFormats,
		onError: config.onError,
		onWarn: config.onWarn,
		wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
		defaultRichTextElements: config.defaultRichTextElements
	};
}
function IntlProviderImpl(props) {
	const cacheRef = React$1.useRef(createIntlCache());
	const prevConfigRef = React$1.useRef(void 0);
	const intlRef = React$1.useRef(void 0);
	const filteredProps = {};
	for (const key in props) if (props[key] !== void 0) filteredProps[key] = props[key];
	const config = processIntlConfig({
		...DEFAULT_INTL_CONFIG,
		...filteredProps
	});
	if (!prevConfigRef.current || !shallowEqual(prevConfigRef.current, config)) {
		prevConfigRef.current = config;
		intlRef.current = createIntl(config, cacheRef.current);
	}
	invariantIntlContext(intlRef.current);
	return /* @__PURE__ */ jsx(Provider, {
		value: intlRef.current,
		children: props.children
	});
}
IntlProviderImpl.displayName = "IntlProvider";
var IntlProvider = IntlProviderImpl;
//#endregion
//#region src/components/pages/home/WhyItMatters.tsx
function WhyItMatters() {
	return /* @__PURE__ */ jsxs("section", {
		className: "mb-16",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: /* @__PURE__ */ jsx(MemoizedFormattedMessage, { id: "why-it-matters.whyTheseMetricsMatter" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: /* @__PURE__ */ jsx(MemoizedFormattedMessage, { id: "why-it-matters.bundleSize" })
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx(MemoizedFormattedMessage, { id: "why-it-matters.theBundleIsTheData" })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: /* @__PURE__ */ jsx(MemoizedFormattedMessage, { id: "why-it-matters.renderingHydration" })
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx(MemoizedFormattedMessage, { id: "why-it-matters.connectingALargeJsonDictionary" })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: /* @__PURE__ */ jsx(MemoizedFormattedMessage, { id: "why-it-matters.dynamicLoading" })
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx(MemoizedFormattedMessage, { id: "why-it-matters.loadingAllTranslationsUpfrontOverloads" })
					})]
				})
			]
		})]
	});
}
//#endregion
//#region \0rolldown_dynamic_import_helper.js
var _rolldown_dynamic_import_helper_default = (glob, path, segments) => {
	const query = path.lastIndexOf("?");
	const v = glob[query === -1 || query < path.lastIndexOf("/") ? path : path.slice(0, query)];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segments ? ". Note that variables only represent file names one level deep." : ""))));
	});
};
//#endregion
//#region src/i18n/getMessages.ts
async function getMessages(locale) {
	return (await _rolldown_dynamic_import_helper_default(/* @__PURE__ */ Object.assign({
		"../messages/de.json": () => import("./de-DW_MnVsP.js"),
		"../messages/en.json": () => import("./en-C1VxQTrn.js"),
		"../messages/es.json": () => import("./es-KrAJ7pBI.js"),
		"../messages/fr.json": () => import("./fr-B-VF3dtP.js"),
		"../messages/it.json": () => import("./it-sqQ0AM7U.js"),
		"../messages/ja.json": () => import("./ja-DHfqPJNu.js"),
		"../messages/ko.json": () => import("./ko-B9TK1L0R.js"),
		"../messages/pt.json": () => import("./pt-B2xqV7gu.js"),
		"../messages/ru.json": () => import("./ru-C1RlmGQ2.js"),
		"../messages/zh.json": () => import("./zh-BDmv97DV.js")
	}), `../messages/${locale}.json`, 3)).default;
}
//#endregion
//#region scripts/Wrapper.tsx
var messagesPromise = getMessages("en");
function Wrapper({ children }) {
	const messages = use(messagesPromise);
	return /* @__PURE__ */ jsx(React.Suspense, {
		fallback: null,
		children: /* @__PURE__ */ jsx(IntlProvider, {
			messages,
			locale: "en",
			defaultLocale: "en",
			children
		})
	});
}
//#endregion
//#region src/components/pages/home/WhyItMatters.wrapper.tsx
function Wrapped() {
	return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(WhyItMatters, {}) });
}
//#endregion
export { Wrapped as default };
//#region src/messages/de.json
var mockBanner = "⚠️ Diese Seite enthält Beispieldaten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder Dienst.";
var de_default = {
	"header.home": "Startseite",
	"header.methodology": "Methodik",
	"header.mockPages": "Testseiten",
	"header.products": "Produkte",
	"header.pricing": "Preise",
	"header.team": "Team",
	"header.blog": "Blog",
	"header.careers": "Karriere",
	"header.faq": "FAQ",
	"header.contact": "Kontakt",
	"header.settings": "Einstellungen",
	"header.goToGithub": "Zu GitHub gehen",
	"footer.resources": "Ressourcen",
	"footer.contact": "Kontakt",
	"footer.github": "GitHub",
	"footer.methodology": "Methodik",
	"footer.contributing": "Mitwirken",
	"footer.builtWith": "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.",
	"footer.anOpenSourceTestApplication": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf die Bundle-Größe, Ladezeit und App-Reaktivität.",
	"route.oopsPageNotFound": "Hoppla! Seite nicht gefunden",
	"route.returnToHome": "Zurück zur Startseite",
	"route.couldNotMeasureHydrationDuration": "Hydratisierungsdauer konnte nicht gemessen werden:",
	"theme-toggle.themeModeAutoSystemClick": "Design-Modus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
	"theme-toggle.themeModeLightClick": "Design-Modus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
	"theme-toggle.themeModeDarkClick": "Design-Modus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
	"theme-toggle.themeAuto": "Design: Auto",
	"theme-toggle.themeDark": "Design: Dunkel",
	"theme-toggle.themeLight": "Design: Hell",
	"hero.aTestApplicationDesignedTo": "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungs-Bibliotheken auf die Bundle-Größe, Ladeleistung und Rendering-Reaktivität zu messen.",
	"hero.viewResults": "Ergebnisse anzeigen",
	"why-it-matters.whyTheseMetricsMatter": "Warum diese Metriken wichtig sind",
	"why-it-matters.bundleSize": "Bundle-Größe",
	"why-it-matters.theBundleIsTheData": "Das Bundle ist die Datenmenge, die an jeden Benutzer weltweit gesendet wird. Ein größeres Bundle bedeutet längere Downloadzeiten – insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobytes bis zu zig Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.",
	"why-it-matters.renderingHydration": "Rendering & Hydratisierung",
	"why-it-matters.connectingALargeJsonDictionary": "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird – was sich direkt auf die Time to Interactive (TTI) auswirkt.",
	"why-it-matters.dynamicLoading": "Dynamisches Laden",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetztem Inhalt und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.",
	"results-table.sampleResults": "Beispielergebnisse",
	"results-table.library": "Bibliothek",
	"results-table.bundleSize": "Bundle-Größe",
	"results-table.lookupTime": "Abfragezeit",
	"results-table.lazyLoading": "Lazy Loading",
	"understanding-impact.understandingTheImpact": "Den Einfluss verstehen",
	"understanding-impact.whyASingleLargeJson": "Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzelnen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
	"understanding-impact.theJsonMustBeParsed": "Das JSON muss bei jedem Seitenaufruf analysiert werden — was den Hauptthread blockiert.",
	"understanding-impact.contextBasedArchitecturesCanCause": "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Locale ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
	"understanding-impact.duringServerSideRenderingThe": "Während des Server-Side-Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.",
	"understanding-impact.theTradeOffsOfDynamic": "Die Kompromisse beim dynamischen Laden",
	"understanding-impact.splittingTranslationsIntoPerRoute": "Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
	"understanding-impact.waterfallRequests": "Waterfall-Anfragen:",
	"understanding-impact.theAppMustFirstLoad": "Die App muss zuerst geladen werden, das Locale bestimmen und dann den richtigen Chunk abrufen — was Netzwerk-Roundtrips hinzufügt.",
	"understanding-impact.flashOfUntranslatedContentFouc": "Aufblitzen von nicht übersetztem Inhalt (FOUC):",
	"understanding-impact.usersMayBrieflySee": "Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.",
	"understanding-impact.cacheInvalidation": "Cache-Invalidierung:",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.",
	"understanding-impact.whatThisBenchmarkMeasures": "Was dieser Benchmark misst",
	"understanding-impact.thisTestAppProvidesA": "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.",
	"about-header.aboutThisBenchmark": "Über diesen Benchmark",
	"about-header.thisIsAnOpenSource": "Dies ist eine Open-Source-Testanwendung – kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können.",
	"about-grid.whyThisExists": "Warum dies existiert",
	"about-grid.choosingAnI18nLibraryIs": "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die API-Ergonomie, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie beeinflusst sie das Rendering, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.",
	"about-grid.methodology": "Methodik",
	"about-grid.theSame10PageApp": "Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden React Profiler, um die Renderzeiten während des Sprachwechsels zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.",
	"what-we-measure.bundleSizeImpact": "Auswirkungen auf die Bundle-Größe",
	"what-we-measure.theAdditionalJavascriptBytesSent": "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit bei langsamen Netzwerken aus.",
	"what-we-measure.renderingOverhead": "Rendering-Overhead",
	"what-we-measure.howMuchExtraTimeThe": "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzelnen Kontextanbieter injizieren, können unnötige Re-Renders im gesamten Komponentenbaum verursachen.",
	"what-we-measure.hydrationCost": "Hydratisierungs-Kosten",
	"what-we-measure.duringSsrTranslationDataIs": "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydratisierung – den Moment, in dem die Seite interaktiv wird.",
	"what-we-measure.lazyLoadingEffectiveness": "Effektivität des Lazy Loadings",
	"what-we-measure.whetherSplittingTranslationsByRoute": "Ob die Aufteilung von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse sie mit sich bringt (Wasserfall-Anfragen, FOUC, Cache-Komplexität).",
	"what-we-measure.localeSwitchSpeed": "Geschwindigkeit beim Sprachwechsel",
	"what-we-measure.howFastTheAppCan": "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufs neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.",
	"what-we-measure.whatWeMeasure": "Was wir messen",
	"blog-header.insightsTutorialsAndAnalysisFrom": "Einblicke, Tutorials und Analysen aus der i18n-Community.",
	"blog-list.comparingI18nLibrariesIn2026": "i18n-Bibliotheken im Jahr 2026 im Vergleich: Eine tiefgehende Analyse",
	"blog-list.weTested12DifferentInternationalization": "Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.",
	"blog-list.howToReduceYourI18n": "So reduzieren Sie Ihr i18n-Bundle um 60 %",
	"blog-list.march82026": "8. März 2026",
	"blog-list.practicalStrategiesForOptimizingTranslation": "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.",
	"blog-list.theStateOfInternationalizationIn": "Der Stand der Internationalisierung in React",
	"blog-list.february282026": "28. Februar 2026",
	"blog-list.anOverviewOfTheCurrent": "Ein Überblick über das aktuelle i18n-Ökosystem in React, einschließlich Trends, aufkommender Muster und Vorlieben der Community.",
	"blog-list.migratingFromReactI18nextTo": "Migration von react-i18next zu Lingui",
	"blog-list.february152026": "15. Februar 2026",
	"blog-list.aStepByStepGuide": "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
	"blog-list.serverComponentsAndI18nWhat": "Server Components und i18n: Was ändert sich?",
	"blog-list.february12026": "1. Februar 2026",
	"blog-list.reactServerComponentsIntroduceNew": "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
	"blog-list.benchmarkMethodologyHowWeTest": "Benchmark-Methodik: Wie wir testen",
	"blog-list.january202026": "20. Januar 2026",
	"blog-list.aTransparentLookAtOur": "Ein transparenter Blick auf unsere Benchmark-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
	"blog-list.readMore": "Weiterlesen →",
	"careers-header.title": "Karriere",
	"careers-header.joinOurMissionToImprove": "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wirkung, Transparenz und kontinuierliches Lernen schätzt.",
	"careers-benefits.workFromAnywhereInThe": "Arbeiten von überall auf der Welt",
	"careers-benefits.competitivePay": "Wettbewerbsfähige Bezahlung",
	"careers-benefits.topOfMarketCompensation": "Spitzenvergütung",
	"careers-benefits.openSourceTime": "Open-Source-Zeit",
	"open-positions.seniorFrontendEngineer": "Senior Frontend-Entwickler",
	"open-positions.buildAndMaintainOurBenchmarking": "Entwickeln und pflegen Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.",
	"open-positions.backendEngineer": "Backend-Entwickler",
	"open-positions.designAndScaleOurCloud": "Entwurf und Skalierung unserer Cloud-Benchmarking-Infrastruktur für Tausende von täglichen automatisierten Durchläufen.",
	"open-positions.technicalWriter": "Technischer Redakteur",
	"open-positions.createComprehensiveGuidesApiReferences": "Erstellen Sie umfassende Anleitungen, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
	"open-positions.devrelEngineer": "DevRel-Ingenieur",
	"open-positions.sanFranciscoRemote": "San Francisco / Remote",
	"open-positions.engageWithTheI18nCommunity": "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
	"open-positions.qaEngineer": "QA-Ingenieur",
	"open-positions.ensureTheAccuracyAndReliability": "Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.",
	"open-positions.openPositions": "Offene Stellen",
	"open-positions.applyNow": "Jetzt bewerben",
	"open-positions.remote": "Remote",
	"open-positions.fullTime": "Vollzeit",
	"open-positions.partTime": "Teilzeit",
	"open-positions.engineering": "Engineering",
	"open-positions.documentation": "Dokumentation",
	"open-positions.community": "Community",
	"contact-header.getInTouch": "Kontaktieren Sie uns",
	"contact-header.haveIdeasFoundABug": "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter",
	"contact-form.name": "Name",
	"contact-form.yourName": "Ihr Name",
	"contact-form.email": "E-Mail",
	"contact-form.emailPlaceholder": "ihre@beispiel.de",
	"contact-form.topic": "Thema",
	"contact-form.bugReport": "Fehlerbericht",
	"contact-form.newBenchmarkIdea": "Neue Benchmark-Idee",
	"contact-form.methodologyQuestion": "Frage zur Methodik",
	"contact-form.contribution": "Beitrag",
	"contact-form.other": "Anderes",
	"contact-form.message": "Nachricht",
	"contact-form.describeYourQuestionOrIdea": "Beschreiben Sie Ihre Frage oder Idee...",
	"contact-form.sendMessage": "Nachricht senden",
	"faq-header1.frequentlyAskedQuestions": "Häufig gestellte Fragen",
	"faq-header1.everythingYouNeedToKnow": "Alles, was Sie über i18n Benchmark wissen müssen.",
	"faq-list.whatIsI18nBenchmark": "Was ist i18n Benchmark?",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, Bundle-Größe und Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.",
	"faq-list.howAreBenchmarksConducted": "Wie werden Benchmarks durchgeführt?",
	"faq-list.weRunStandardizedTestsIn": "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.",
	"faq-list.whichLibrariesAreCurrentlySupported": "Welche Bibliotheken werden derzeit unterstützt?",
	"faq-list.weSupportReactI18nextReact": "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.",
	"faq-list.canISubmitMyOwn": "Kann ich meine eigenen Benchmarks einreichen?",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "Ja! Einreichungen von Benchmarks aus der Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.",
	"faq-list.howOftenAreBenchmarksUpdated": "Wie oft werden Benchmarks aktualisiert?",
	"faq-list.weReRunAllBenchmarks": "Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch. Hauptversionen lösen einen sofortigen Re-Benchmark-Zyklus aus.",
	"faq-list.isTheDataReliable": "Sind die Daten zuverlässig?",
	"faq-list.weFollowRigorousStatisticalMethodology": "Wir folgen einer strengen statistischen Methodik, einschließlich Aufwärmphasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.",
	"faq-list.doYouOfferConsultingServices": "Bieten Sie Beratungsdienstleistungen an?",
	"faq-list.yesOurEnterprisePlanIncludes": "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen bewerten. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Einschränkungen geben.",
	"faq-list.howCanIContribute": "Wie kann ich beitragen?",
	"faq-list.thereAreManyWaysTo": "Es gibt viele Möglichkeiten, beizutragen: Reichen Sie Benchmarks ein, verbessern Sie die Dokumentation, melden Sie Fehler, schlagen Sie neue Metriken vor oder sponsern Sie das Projekt. Besuchen Sie unser GitHub-Repository für weitere Details.",
	"pricing-header.simpleTransparentPricing": "Einfache, transparente Preisgestaltung",
	"pricing-header.chooseThePlanThatFits": "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.",
	"pricing-tiers.starter": "Starter",
	"pricing-tiers.price0": "0 $",
	"pricing-tiers.forever": "für immer",
	"pricing-tiers.benchmarkRunPerDay": "{runs} Benchmark-Durchläufe/Tag",
	"pricing-tiers.librariesNumber": "{libs} Bibliotheken",
	"pricing-tiers.communitySupport": "Community-Support",
	"pricing-tiers.publicResults": "Öffentliche Ergebnisse",
	"pricing-tiers.pro": "Pro",
	"pricing-tiers.price29": "29 $",
	"pricing-tiers.month": "/Monat",
	"pricing-tiers.unlimitedRuns": "Unbegrenzte Durchläufe",
	"pricing-tiers.allLibraries": "Alle Bibliotheken",
	"pricing-tiers.prioritySupport": "Prioritäts-Support",
	"pricing-tiers.privateResults": "Private Ergebnisse",
	"pricing-tiers.ciIntegration": "CI-Integration",
	"pricing-tiers.historicalData": "Historische Daten",
	"pricing-tiers.enterprise": "Enterprise",
	"pricing-tiers.customPrice": "Benutzerdefiniert",
	"pricing-tiers.everythingInPro": "Alles in Pro",
	"pricing-tiers.onPremiseOption": "On-Premise-Option",
	"pricing-tiers.ssoSaml": "SSO & SAML",
	"pricing-tiers.dedicatedAccountManager": "Dedizierter Account-Manager",
	"pricing-tiers.customSlas": "Benutzerdefinierte SLAs",
	"pricing-tiers.auditLogs": "Audit-Logs",
	"pricing-tiers.trainingSessions": "Schulungssitzungen",
	"pricing-tiers.contactSales": "Vertrieb kontaktieren",
	"pricing-tiers.getStarted": "Erste Schritte",
	"products-header.toolsAndServicesToStreamline": "Tools und Dienste zur Optimierung Ihres Internationalisierungs-Workflows.",
	"products-grid.benchmarkCli": "Benchmark CLI",
	"products-grid.runBenchmarksLocallyFromYour": "Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.",
	"products-grid.benchmarkCloud": "Benchmark Cloud",
	"products-grid.automatedCloudBasedBenchmarkingWith": "Automatisierte cloudbasierte Benchmarks mit Verlaufsverfolgung, Benachrichtigungen und Team-Dashboards.",
	"products-grid.benchmarkEnterprise": "Benchmark Enterprise",
	"products-grid.onPremiseDeploymentWithSso": "On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.",
	"products-grid.contactUs": "Kontaktieren Sie uns",
	"products-grid.migrationAssistant": "Migrations-Assistent",
	"products-grid.aiPoweredToolThatHelps": "KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.",
	"products-grid.translationQa": "Übersetzungs-QA",
	"products-grid.automatedQualityChecksForMissing": "Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.",
	"products-grid.bundleOptimizer": "Bundle-Optimierer",
	"products-grid.analyzesAndOptimizesYourI18n": "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code Splitting.",
	"products-grid.learnMore": "Mehr erfahren",
	"team-header.ourTeam": "Unser Team",
	"team-header.meetThePeopleBehindI18n": "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch eine gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.",
	"team-grid.sarahChen": "Sarah Chen",
	"team-grid.founderLeadEngineer": "Gründerin & Leitende Ingenieurin",
	"team-grid.formerGoogleEngineerWith10": "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
	"team-grid.marcusWeber": "Marcus Weber",
	"team-grid.performanceEngineer": "Performance-Ingenieur",
	"team-grid.specializesInJavascriptPerformanceOptimization": "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
	"team-grid.aishaPatel": "Aisha Patel",
	"team-grid.developerAdvocate": "Developer Advocate",
	"team-grid.passionateAboutDeveloperExperienceAnd": "Leidenschaftlich für Developer Experience und Ausbildung. Sprecherin bei React Conf, JSConf und i18nNext.",
	"team-grid.tomasRodriguez": "Tomás Rodríguez",
	"team-grid.fullStackDeveloper": "Full-Stack-Entwickler",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "Pflegt die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Beitragender zu Lingui.",
	"team-grid.yukiTanaka": "Yuki Tanaka",
	"team-grid.dataAnalyst": "Datenanalyst",
	"team-grid.ensuresStatisticalRigorInAll": "Sorgt für statistische Strenge in allen Benchmark-Ergebnissen. PhD in angewandter Statistik vom MIT.",
	"team-grid.elenaKowalski": "Elena Kowalski",
	"team-grid.communityManager": "Community-Manager",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.",
	"settings-header.manageYourAccountPreferencesAnd": "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.",
	"profile-section.profile": "Profil",
	"profile-section.displayName": "Anzeigename",
	"profile-section.email": "E-Mail",
	"preferences-section.preferences": "Einstellungen",
	"preferences-section.emailNotifications": "E-Mail-Benachrichtigungen",
	"preferences-section.receiveWeeklyBenchmarkReports": "Wöchentliche Benchmark-Berichte erhalten",
	"preferences-section.toggleNotifications": "Benachrichtigungen umschalten",
	"preferences-section.darkMode": "Dunkelmodus",
	"preferences-section.useDarkColorScheme": "Dunkles Farbschema verwenden",
	"preferences-section.toggleDarkMode": "Dunkelmodus umschalten",
	"preferences-section.defaultLanguage": "Standardsprache",
	"preferences-section.englishEn": "Englisch (en)",
	"preferences-section.frenchFr": "Französisch (fr)",
	"preferences-section.germanDe": "Deutsch (de)",
	"preferences-section.spanishEs": "Spanisch (es)",
	"preferences-section.japaneseJa": "Japanisch (ja)",
	"preferences-section.chineseSimplifiedZhCn": "Chinesisch vereinfacht (zh-CN)",
	"preferences-section.arabicAr": "Arabisch (ar)",
	"api-access-section.apiAccess": "API-Zugriff",
	"api-access-section.apiKey": "API-Schlüssel",
	"api-access-section.useThisKeyToAccess": "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.",
	"api-access-section.copy": "Kopieren",
	"settings-footer.cancel": "Abbrechen",
	"settings-footer.saveChanges": "Änderungen speichern",
	mockBanner
};
//#endregion
export { de_default as default, mockBanner };
//#region src/messages/en.json
var mockBanner = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.";
var en_default = {
	"header.home": "Home",
	"header.methodology": "Methodology",
	"header.mockPages": "Mock Pages",
	"header.products": "Products",
	"header.pricing": "Pricing",
	"header.team": "Team",
	"header.blog": "Blog",
	"header.careers": "Careers",
	"header.faq": "FAQ",
	"header.contact": "Contact",
	"header.settings": "Settings",
	"header.goToGithub": "Go to GitHub",
	"footer.resources": "Resources",
	"footer.contact": "Contact",
	"footer.github": "GitHub",
	"footer.methodology": "Methodology",
	"footer.contributing": "Contributing",
	"footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
	"theme-toggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"theme-toggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
	"theme-toggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"theme-toggle.themeAuto": "Theme: Auto",
	"theme-toggle.themeDark": "Theme: Dark",
	"theme-toggle.themeLight": "Theme: Light",
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results",
	"why-it-matters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"why-it-matters.bundleSize": "Bundle Size",
	"why-it-matters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"why-it-matters.renderingHydration": "Rendering & Hydration",
	"why-it-matters.connectingALargeJsonDictionary": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"why-it-matters.dynamicLoading": "Dynamic Loading",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"results-table.sampleResults": "Sample Results",
	"results-table.library": "Library",
	"results-table.bundleSize": "Bundle Size",
	"results-table.lookupTime": "Lookup Time",
	"results-table.lazyLoading": "Lazy Loading",
	"understanding-impact.understandingTheImpact": "Understanding the Impact",
	"understanding-impact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understanding-impact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understanding-impact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understanding-impact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understanding-impact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understanding-impact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understanding-impact.waterfallRequests": "Waterfall requests:",
	"understanding-impact.theAppMustFirstLoad": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
	"understanding-impact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understanding-impact.usersMayBrieflySee": "users may briefly see translation keys or a fallback language before the chunk arrives.",
	"understanding-impact.cacheInvalidation": "Cache invalidation:",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
	"understanding-impact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understanding-impact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"about-header.aboutThisBenchmark": "About This Benchmark",
	"about-header.thisIsAnOpenSource": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
	"about-grid.whyThisExists": "Why This Exists",
	"about-grid.choosingAnI18nLibraryIs": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	"about-grid.methodology": "Methodology",
	"about-grid.theSame10PageApp": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	"what-we-measure.bundleSizeImpact": "Bundle size impact",
	"what-we-measure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
	"what-we-measure.renderingOverhead": "Rendering overhead",
	"what-we-measure.howMuchExtraTimeThe": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
	"what-we-measure.hydrationCost": "Hydration cost",
	"what-we-measure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"what-we-measure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"what-we-measure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"what-we-measure.localeSwitchSpeed": "Locale switch speed",
	"what-we-measure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"what-we-measure.whatWeMeasure": "What We Measure",
	"blog-header.insightsTutorialsAndAnalysisFrom": "Insights, tutorials, and analysis from the i18n community.",
	"blog-list.comparingI18nLibrariesIn2026": "Comparing i18n Libraries in 2026: A Deep Dive",
	"blog-list.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
	"blog-list.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blog-list.march82026": "March 8, 2026",
	"blog-list.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
	"blog-list.theStateOfInternationalizationIn": "The State of Internationalization in React",
	"blog-list.february282026": "February 28, 2026",
	"blog-list.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
	"blog-list.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blog-list.february152026": "February 15, 2026",
	"blog-list.aStepByStepGuide": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blog-list.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blog-list.february12026": "February 1, 2026",
	"blog-list.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blog-list.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blog-list.january202026": "January 20, 2026",
	"blog-list.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blog-list.readMore": "Read More →",
	"careers-header.title": "Careers",
	"careers-header.joinOurMissionToImprove": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
	"careers-benefits.workFromAnywhereInThe": "Work from anywhere in the world",
	"careers-benefits.competitivePay": "Competitive pay",
	"careers-benefits.topOfMarketCompensation": "Top-of-market compensation",
	"careers-benefits.openSourceTime": "Open source time",
	"open-positions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"open-positions.buildAndMaintainOurBenchmarking": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"open-positions.backendEngineer": "Backend Engineer",
	"open-positions.designAndScaleOurCloud": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
	"open-positions.technicalWriter": "Technical Writer",
	"open-positions.createComprehensiveGuidesApiReferences": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
	"open-positions.devrelEngineer": "DevRel Engineer",
	"open-positions.sanFranciscoRemote": "San Francisco / Remote",
	"open-positions.engageWithTheI18nCommunity": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
	"open-positions.qaEngineer": "QA Engineer",
	"open-positions.ensureTheAccuracyAndReliability": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
	"open-positions.openPositions": "Open Positions",
	"open-positions.applyNow": "Apply Now",
	"open-positions.remote": "Remote",
	"open-positions.fullTime": "Full-time",
	"open-positions.partTime": "Part-time",
	"open-positions.engineering": "Engineering",
	"open-positions.documentation": "Documentation",
	"open-positions.community": "Community",
	"contact-header.getInTouch": "Get in Touch",
	"contact-header.haveIdeasFoundABug": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at",
	"contact-form.name": "Name",
	"contact-form.yourName": "Your name",
	"contact-form.email": "Email",
	"contact-form.emailPlaceholder": "you@example.com",
	"contact-form.topic": "Topic",
	"contact-form.bugReport": "Bug Report",
	"contact-form.newBenchmarkIdea": "New Benchmark Idea",
	"contact-form.methodologyQuestion": "Methodology Question",
	"contact-form.contribution": "Contribution",
	"contact-form.other": "Other",
	"contact-form.message": "Message",
	"contact-form.describeYourQuestionOrIdea": "Describe your question or idea...",
	"contact-form.sendMessage": "Send Message",
	"faq-header1.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faq-header1.everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark.",
	"faq-list.whatIsI18nBenchmark": "What is i18n Benchmark?",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
	"faq-list.howAreBenchmarksConducted": "How are benchmarks conducted?",
	"faq-list.weRunStandardizedTestsIn": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
	"faq-list.whichLibrariesAreCurrentlySupported": "Which libraries are currently supported?",
	"faq-list.weSupportReactI18nextReact": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
	"faq-list.canISubmitMyOwn": "Can I submit my own benchmarks?",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
	"faq-list.howOftenAreBenchmarksUpdated": "How often are benchmarks updated?",
	"faq-list.weReRunAllBenchmarks": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
	"faq-list.isTheDataReliable": "Is the data reliable?",
	"faq-list.weFollowRigorousStatisticalMethodology": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
	"faq-list.doYouOfferConsultingServices": "Do you offer consulting services?",
	"faq-list.yesOurEnterprisePlanIncludes": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
	"faq-list.howCanIContribute": "How can I contribute?",
	"faq-list.thereAreManyWaysTo": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.",
	"pricing-header.simpleTransparentPricing": "Simple, Transparent Pricing",
	"pricing-header.chooseThePlanThatFits": "Choose the plan that fits your team. No hidden fees.",
	"pricing-tiers.starter": "Starter",
	"pricing-tiers.price0": "$0",
	"pricing-tiers.forever": "forever",
	"pricing-tiers.benchmarkRunPerDay": "{runs} benchmark runs/day",
	"pricing-tiers.librariesNumber": "{libs} libraries",
	"pricing-tiers.communitySupport": "Community support",
	"pricing-tiers.publicResults": "Public results",
	"pricing-tiers.pro": "Pro",
	"pricing-tiers.price29": "$29",
	"pricing-tiers.month": "/month",
	"pricing-tiers.unlimitedRuns": "Unlimited runs",
	"pricing-tiers.allLibraries": "All libraries",
	"pricing-tiers.prioritySupport": "Priority support",
	"pricing-tiers.privateResults": "Private results",
	"pricing-tiers.ciIntegration": "CI integration",
	"pricing-tiers.historicalData": "Historical data",
	"pricing-tiers.enterprise": "Enterprise",
	"pricing-tiers.customPrice": "Custom",
	"pricing-tiers.everythingInPro": "Everything in Pro",
	"pricing-tiers.onPremiseOption": "On-premise option",
	"pricing-tiers.ssoSaml": "SSO & SAML",
	"pricing-tiers.dedicatedAccountManager": "Dedicated account manager",
	"pricing-tiers.customSlas": "Custom SLAs",
	"pricing-tiers.auditLogs": "Audit logs",
	"pricing-tiers.trainingSessions": "Training sessions",
	"pricing-tiers.contactSales": "Contact Sales",
	"pricing-tiers.getStarted": "Get Started",
	"products-header.toolsAndServicesToStreamline": "Tools and services to streamline your internationalization workflow.",
	"products-grid.benchmarkCli": "Benchmark CLI",
	"products-grid.runBenchmarksLocallyFromYour": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	"products-grid.benchmarkCloud": "Benchmark Cloud",
	"products-grid.automatedCloudBasedBenchmarkingWith": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	"products-grid.benchmarkEnterprise": "Benchmark Enterprise",
	"products-grid.onPremiseDeploymentWithSso": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	"products-grid.contactUs": "Contact Us",
	"products-grid.migrationAssistant": "Migration Assistant",
	"products-grid.aiPoweredToolThatHelps": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	"products-grid.translationQa": "Translation QA",
	"products-grid.automatedQualityChecksForMissing": "Automated quality checks for missing translations, pluralization issues, and context errors.",
	"products-grid.bundleOptimizer": "Bundle Optimizer",
	"products-grid.analyzesAndOptimizesYourI18n": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	"products-grid.learnMore": "Learn More",
	"team-header.ourTeam": "Our Team",
	"team-header.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
	"team-grid.sarahChen": "Sarah Chen",
	"team-grid.founderLeadEngineer": "Founder & Lead Engineer",
	"team-grid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"team-grid.marcusWeber": "Marcus Weber",
	"team-grid.performanceEngineer": "Performance Engineer",
	"team-grid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"team-grid.aishaPatel": "Aisha Patel",
	"team-grid.developerAdvocate": "Developer Advocate",
	"team-grid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"team-grid.tomasRodriguez": "Tomás Rodríguez",
	"team-grid.fullStackDeveloper": "Full-Stack Developer",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"team-grid.yukiTanaka": "Yuki Tanaka",
	"team-grid.dataAnalyst": "Data Analyst",
	"team-grid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"team-grid.elenaKowalski": "Elena Kowalski",
	"team-grid.communityManager": "Community Manager",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance.",
	"settings-header.manageYourAccountPreferencesAnd": "Manage your account preferences and configuration.",
	"profile-section.profile": "Profile",
	"profile-section.displayName": "Display Name",
	"profile-section.email": "Email",
	"preferences-section.preferences": "Preferences",
	"preferences-section.emailNotifications": "Email Notifications",
	"preferences-section.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferences-section.toggleNotifications": "Toggle notifications",
	"preferences-section.darkMode": "Dark Mode",
	"preferences-section.useDarkColorScheme": "Use dark color scheme",
	"preferences-section.toggleDarkMode": "Toggle dark mode",
	"preferences-section.defaultLanguage": "Default Language",
	"preferences-section.englishEn": "English (en)",
	"preferences-section.frenchFr": "French (fr)",
	"preferences-section.germanDe": "German (de)",
	"preferences-section.spanishEs": "Spanish (es)",
	"preferences-section.japaneseJa": "Japanese (ja)",
	"preferences-section.chineseSimplifiedZhCn": "Chinese Simplified (zh-CN)",
	"preferences-section.arabicAr": "Arabic (ar)",
	"api-access-section.apiAccess": "API Access",
	"api-access-section.apiKey": "API Key",
	"api-access-section.useThisKeyToAccess": "Use this key to access the benchmarking API programmatically.",
	"api-access-section.copy": "Copy",
	"settings-footer.cancel": "Cancel",
	"settings-footer.saveChanges": "Save Changes",
	mockBanner
};
//#endregion
export { en_default as default, mockBanner };
//#region src/messages/es.json
var mockBanner = "⚠️ Esta página contiene datos de muestra solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real.";
var es_default = {
	"header.home": "Inicio",
	"header.methodology": "Metodología",
	"header.mockPages": "Páginas de Prueba",
	"header.products": "Productos",
	"header.pricing": "Precios",
	"header.team": "Equipo",
	"header.blog": "Blog",
	"header.careers": "Carreras",
	"header.faq": "FAQ",
	"header.contact": "Contacto",
	"header.settings": "Ajustes",
	"header.goToGithub": "Ir a GitHub",
	"footer.resources": "Recursos",
	"footer.contact": "Contacto",
	"footer.github": "GitHub",
	"footer.methodology": "Metodología",
	"footer.contributing": "Contribuir",
	"footer.builtWith": "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
	"footer.anOpenSourceTestApplication": "Una aplicación de prueba de código abierto para medir el impacto en el mundo real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.",
	"route.oopsPageNotFound": "¡Vaya! Página no encontrada",
	"route.returnToHome": "Volver al Inicio",
	"route.couldNotMeasureHydrationDuration": "No se pudo medir la duración de la hidratación:",
	"theme-toggle.themeModeAutoSystemClick": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
	"theme-toggle.themeModeLightClick": "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
	"theme-toggle.themeModeDarkClick": "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
	"theme-toggle.themeAuto": "Tema: Auto",
	"theme-toggle.themeDark": "Tema: Oscuro",
	"theme-toggle.themeLight": "Tema: Claro",
	"hero.aTestApplicationDesignedTo": "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.",
	"hero.viewResults": "Ver Resultados",
	"why-it-matters.whyTheseMetricsMatter": "Por qué estas métricas son importantes",
	"why-it-matters.bundleSize": "Tamaño del Bundle",
	"why-it-matters.theBundleIsTheData": "El bundle es la información que se envía a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas de i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de ejecución, además de los propios archivos de traducción.",
	"why-it-matters.renderingHydration": "Renderizado e Hidratación",
	"why-it-matters.connectingALargeJsonDictionary": "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la fijación de objetos de traducción masivos agregan latencia antes de que la página se vuelva interactiva, lo que afecta directamente al Tiempo de Interacción (TTI).",
	"why-it-matters.dynamicLoading": "Carga Dinámica",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que necesita la página actual. Sin embargo, la carga diferida presenta sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de almacenamiento en caché. Medir ambas estrategias es esencial.",
	"results-table.sampleResults": "Resultados de muestra",
	"results-table.library": "Biblioteca",
	"results-table.bundleSize": "Tamaño del bundle",
	"results-table.lookupTime": "Tiempo de consulta",
	"results-table.lazyLoading": "Carga diferida",
	"understanding-impact.understandingTheImpact": "Entendiendo el impacto",
	"understanding-impact.whyASingleLargeJson": "Por qué un solo JSON grande puede perjudicar el rendimiento",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "Muchas bibliotecas de i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
	"understanding-impact.theJsonMustBeParsed": "El JSON debe ser analizado en cada carga de página, bloqueando el hilo principal.",
	"understanding-impact.contextBasedArchitecturesCanCause": "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el locale, porque cada consumidor es notificado incluso si sus claves específicas no han cambiado.",
	"understanding-impact.duringServerSideRenderingThe": "Durante el renderizado en el lado del servidor, el diccionario completo se serializa en la carga útil de HTML, lo que aumenta el tamaño del documento que debe descargarse e hidratarse.",
	"understanding-impact.theTradeOffsOfDynamic": "Las compensaciones de la carga dinámica",
	"understanding-impact.splittingTranslationsIntoPerRoute": "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:",
	"understanding-impact.waterfallRequests": "Solicitudes en cascada:",
	"understanding-impact.theAppMustFirstLoad": "la aplicación debe cargarse primero, determinar el idioma y luego recuperar el fragmento correcto, lo que añade ciclos de red.",
	"understanding-impact.flashOfUntranslatedContentFouc": "Parpadeo de contenido no traducido (FOUC):",
	"understanding-impact.usersMayBrieflySee": "los usuarios pueden ver brevemente las claves de traducción o un idioma de reserva antes de que llegue el fragmento.",
	"understanding-impact.cacheInvalidation": "Invalidación de caché:",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "actualizar las traducciones requiere estrategias de invalidación de caché para garantizar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos sin cambios.",
	"understanding-impact.whatThisBenchmarkMeasures": "Lo que mide este benchmark",
	"understanding-impact.thisTestAppProvidesA": "Esta aplicación de prueba proporciona un entorno controlado (10 páginas con contenido realista) para comparar bibliotecas de i18n en tres ejes: el peso que añaden a su bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.",
	"about-header.aboutThisBenchmark": "Acerca de este Benchmark",
	"about-header.thisIsAnOpenSource": "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas de i18n en condiciones idénticas.",
	"about-grid.whyThisExists": "¿Por Qué Existe Este Proyecto?",
	"about-grid.choosingAnI18nLibraryIs": "Elegir una biblioteca de i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el costo de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿El lazy loading realmente ayuda o solo traslada el costo? Este benchmark responde a esas preguntas con datos reales.",
	"about-grid.methodology": "Metodología",
	"about-grid.theSame10PageApp": "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y usamos React Profiler para capturar los tiempos de renderizado durante los cambios de locale. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproductibles.",
	"what-we-measure.bundleSizeImpact": "Impacto en el tamaño del bundle",
	"what-we-measure.theAdditionalJavascriptBytesSent": "Los bytes de JavaScript adicionales enviados a los usuarios cuando se incluyen la biblioteca de i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.",
	"what-we-measure.renderingOverhead": "Sobrecarga de renderizado",
	"what-we-measure.howMuchExtraTimeThe": "¿Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React? Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.",
	"what-we-measure.hydrationCost": "Costo de hidratación",
	"what-we-measure.duringSsrTranslationDataIs": "Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.",
	"what-we-measure.lazyLoadingEffectiveness": "Efectividad del lazy loading",
	"what-we-measure.whetherSplittingTranslationsByRoute": "Si dividir las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compromisos introduce (solicitudes en cascada, FOUC, complejidad de la caché).",
	"what-we-measure.localeSwitchSpeed": "Velocidad de cambio de idioma",
	"what-we-measure.howFastTheAppCan": "Qué tan rápido puede cambiar la aplicación de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.",
	"what-we-measure.whatWeMeasure": "Lo que medimos",
	"blog-header.insightsTutorialsAndAnalysisFrom": "Información, tutoriales y análisis de la comunidad i18n.",
	"blog-list.comparingI18nLibrariesIn2026": "Comparativa de bibliotecas i18n en 2026: un análisis profundo",
	"blog-list.weTested12DifferentInternationalization": "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Estos son los resultados sorprendentes.",
	"blog-list.howToReduceYourI18n": "Cómo reducir su bundle i18n en un 60 %",
	"blog-list.march82026": "8 de marzo de 2026",
	"blog-list.practicalStrategiesForOptimizingTranslation": "Estrategias prácticas para optimizar los conjuntos de traducción, incluido el lazy loading, la división del código y las optimizaciones en el momento de la compilación.",
	"blog-list.theStateOfInternationalizationIn": "El estado de la internacionalización en React",
	"blog-list.february282026": "28 de febrero de 2026",
	"blog-list.anOverviewOfTheCurrent": "Una visión general del ecosistema actual de i18n en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.",
	"blog-list.migratingFromReactI18nextTo": "Migración de react-i18next a Lingui",
	"blog-list.february152026": "15 de febrero de 2026",
	"blog-list.aStepByStepGuide": "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
	"blog-list.serverComponentsAndI18nWhat": "Server Components e i18n: ¿Qué cambia?",
	"blog-list.february12026": "1 de febrero de 2026",
	"blog-list.reactServerComponentsIntroduceNew": "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
	"blog-list.benchmarkMethodologyHowWeTest": "Metodología del Benchmark: Cómo probamos",
	"blog-list.january202026": "20 de enero de 2026",
	"blog-list.aTransparentLookAtOur": "Una mirada transparente a nuestra metodología de benchmarking, incluidos los entornos de prueba, los métodos estadísticos y la reproductibilidad.",
	"blog-list.readMore": "Leer más →",
	"careers-header.title": "Carreras",
	"careers-header.joinOurMissionToImprove": "Únete a nuestra misión para mejorar el ecosistema de internacionalización. Somos un equipo remoto primero que valora el impacto, la transparencia y el aprendizaje continuo.",
	"careers-benefits.workFromAnywhereInThe": "Trabaja desde cualquier parte del mundo",
	"careers-benefits.competitivePay": "Salario competitivo",
	"careers-benefits.topOfMarketCompensation": "Compensación superior al mercado",
	"careers-benefits.openSourceTime": "Tiempo dedicado al código abierto",
	"open-positions.seniorFrontendEngineer": "Ingeniero Frontend Principal",
	"open-positions.buildAndMaintainOurBenchmarking": "Construir y mantener nuestro panel de benchmarking y herramientas de desarrollo usando React, TypeScript y Vite.",
	"open-positions.backendEngineer": "Ingeniero Backend",
	"open-positions.designAndScaleOurCloud": "Diseñar y escalar nuestra infraestructura de benchmarking en la nube manejando miles de ejecuciones automatizadas diarias.",
	"open-positions.technicalWriter": "Redactor Técnico",
	"open-positions.createComprehensiveGuidesApiReferences": "Crear guías completas, referencias API y tutoriales para nuestra plataforma de benchmarking.",
	"open-positions.devrelEngineer": "Ingeniero DevRel",
	"open-positions.sanFranciscoRemote": "San Francisco / Remoto",
	"open-positions.engageWithTheI18nCommunity": "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.",
	"open-positions.qaEngineer": "Ingeniero QA",
	"open-positions.ensureTheAccuracyAndReliability": "Asegurar la precisión y fiabilidad de los resultados de benchmark a través de pruebas y validaciones rigurosas.",
	"open-positions.openPositions": "Puestos Abiertos",
	"open-positions.applyNow": "Postular Ahora",
	"open-positions.remote": "Remoto",
	"open-positions.fullTime": "Tiempo completo",
	"open-positions.partTime": "Tiempo parcial",
	"open-positions.engineering": "Ingeniería",
	"open-positions.documentation": "Documentación",
	"open-positions.community": "Comunidad",
	"contact-header.getInTouch": "Póngase en contacto",
	"contact-header.haveIdeasFoundABug": "¿Tienes ideas, encontraste un error o quieres contribuir con un benchmark? Contáctanos en",
	"contact-form.name": "Nombre",
	"contact-form.yourName": "Tu nombre",
	"contact-form.email": "Email",
	"contact-form.emailPlaceholder": "tu@ejemplo.com",
	"contact-form.topic": "Tema",
	"contact-form.bugReport": "Informe de Errores",
	"contact-form.newBenchmarkIdea": "Nueva Idea de Benchmark",
	"contact-form.methodologyQuestion": "Pregunta sobre Metodología",
	"contact-form.contribution": "Contribución",
	"contact-form.other": "Otro",
	"contact-form.message": "Mensaje",
	"contact-form.describeYourQuestionOrIdea": "Describe tu pregunta o idea...",
	"contact-form.sendMessage": "Enviar Mensaje",
	"faq-header1.frequentlyAskedQuestions": "Preguntas Frecuentes",
	"faq-header1.everythingYouNeedToKnow": "Todo lo que necesitas saber sobre i18n Benchmark.",
	"faq-list.whatIsI18nBenchmark": "¿Qué es i18n Benchmark?",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.",
	"faq-list.howAreBenchmarksConducted": "¿Cómo se realizan los benchmarks?",
	"faq-list.weRunStandardizedTestsIn": "Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para garantizar la significación estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.",
	"faq-list.whichLibrariesAreCurrentlySupported": "¿Qué bibliotecas son compatibles actualmente?",
	"faq-list.weSupportReactI18nextReact": "Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.",
	"faq-list.canISubmitMyOwn": "¿Puedo enviar mis propios benchmarks?",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Bifurca nuestro repositorio, agrega tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará las presentaciones que califiquen.",
	"faq-list.howOftenAreBenchmarksUpdated": "¿Con qué frecuencia se actualizan los benchmarks?",
	"faq-list.weReRunAllBenchmarks": "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.",
	"faq-list.isTheDataReliable": "¿Son fiables los datos?",
	"faq-list.weFollowRigorousStatisticalMethodology": "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos sin procesar se publican junto con nuestro análisis para una total transparencia.",
	"faq-list.doYouOfferConsultingServices": "¿Ofrecen servicios de consultoría?",
	"faq-list.yesOurEnterprisePlanIncludes": "¡Sí nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones de i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y restricciones.",
	"faq-list.howCanIContribute": "¿Cómo puedo contribuir?",
	"faq-list.thereAreManyWaysTo": "Hay muchas formas de contribuir: enviando benchmarks, mejorando la documentación, informando errores, sugiriendo nuevas métricas o patrocinando el proyecto. Visite nuestro repositorio de GitHub para más detalles.",
	"pricing-header.simpleTransparentPricing": "Precios Simples y Transparentes",
	"pricing-header.chooseThePlanThatFits": "Elija el plan que se adapte a su equipo. Sin cargos ocultos.",
	"pricing-tiers.starter": "Starter",
	"pricing-tiers.price0": "0 $",
	"pricing-tiers.forever": "para siempre",
	"pricing-tiers.benchmarkRunPerDay": "{runs} ejecuciones de benchmark/día",
	"pricing-tiers.librariesNumber": "{libs} bibliotecas",
	"pricing-tiers.communitySupport": "Soporte de la comunidad",
	"pricing-tiers.publicResults": "Resultados públicos",
	"pricing-tiers.pro": "Pro",
	"pricing-tiers.price29": "29 $",
	"pricing-tiers.month": "/mes",
	"pricing-tiers.unlimitedRuns": "Ejecuciones ilimitadas",
	"pricing-tiers.allLibraries": "Todas las bibliotecas",
	"pricing-tiers.prioritySupport": "Soporte prioritario",
	"pricing-tiers.privateResults": "Resultados privados",
	"pricing-tiers.ciIntegration": "Integración de CI",
	"pricing-tiers.historicalData": "Datos históricos",
	"pricing-tiers.enterprise": "Personalizado",
	"pricing-tiers.customPrice": "Custom",
	"pricing-tiers.everythingInPro": "Todo en Pro",
	"pricing-tiers.onPremiseOption": "Opción local",
	"pricing-tiers.ssoSaml": "SSO y SAML",
	"pricing-tiers.dedicatedAccountManager": "Gerente de cuenta dedicado",
	"pricing-tiers.customSlas": "SLA personalizados",
	"pricing-tiers.auditLogs": "Registros de auditoría",
	"pricing-tiers.trainingSessions": "Sesiones de formación",
	"pricing-tiers.contactSales": "Contactar a Ventas",
	"pricing-tiers.getStarted": "Empezar",
	"products-header.toolsAndServicesToStreamline": "Herramientas y servicios para simplificar su flujo de trabajo de internacionalización.",
	"products-grid.benchmarkCli": "CLI de Benchmark",
	"products-grid.runBenchmarksLocallyFromYour": "Realice benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.",
	"products-grid.benchmarkCloud": "Benchmark Cloud",
	"products-grid.automatedCloudBasedBenchmarkingWith": "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.",
	"products-grid.benchmarkEnterprise": "Benchmark para Empresas",
	"products-grid.onPremiseDeploymentWithSso": "Implementación local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.",
	"products-grid.contactUs": "Contáctenos",
	"products-grid.migrationAssistant": "Asistente de Migración",
	"products-grid.aiPoweredToolThatHelps": "Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas de i18n sin tiempo de inactividad.",
	"products-grid.translationQa": "QA de Traducción",
	"products-grid.automatedQualityChecksForMissing": "Comprobaciones de calidad automatizadas para traducciones faltantes, problemas de pluralización y errores de contexto.",
	"products-grid.bundleOptimizer": "Optimizador de Bundles",
	"products-grid.analyzesAndOptimizesYourI18n": "Analiza y optimiza su bundle i18n para producción con tree-shaking y división de código.",
	"products-grid.learnMore": "Más información",
	"team-header.ourTeam": "Nuestro Equipo",
	"team-header.meetThePeopleBehindI18n": "Conozca a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas de desarrollo.",
	"team-grid.sarahChen": "Sarah Chen",
	"team-grid.founderLeadEngineer": "Fundadora e Ingeniera Principal",
	"team-grid.formerGoogleEngineerWith10": "Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a escala.",
	"team-grid.marcusWeber": "Marcus Weber",
	"team-grid.performanceEngineer": "Ingeniero de Rendimiento",
	"team-grid.specializesInJavascriptPerformanceOptimization": "Especialista en optimización de rendimiento de JavaScript y metodología de benchmarking. Anteriormente en Vercel.",
	"team-grid.aishaPatel": "Aisha Patel",
	"team-grid.developerAdvocate": "Evangelista de Desarrolladores",
	"team-grid.passionateAboutDeveloperExperienceAnd": "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.",
	"team-grid.tomasRodriguez": "Tomás Rodríguez",
	"team-grid.fullStackDeveloper": "Desarrollador Full-Stack",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "Mantiene la infraestructura de benchmarking y el pipeline CI/CD. Colaborador de código abierto en Lingui.",
	"team-grid.yukiTanaka": "Yuki Tanaka",
	"team-grid.dataAnalyst": "Analista de Datos",
	"team-grid.ensuresStatisticalRigorInAll": "Asegura el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada del MIT.",
	"team-grid.elenaKowalski": "Elena Kowalski",
	"team-grid.communityManager": "Gerente de Comunidad",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Experiencia en gobernanza de código abierto.",
	"settings-header.manageYourAccountPreferencesAnd": "Gestione sus preferencias de cuenta y configuración.",
	"profile-section.profile": "Perfil",
	"profile-section.displayName": "Nombre para mostrar",
	"profile-section.email": "Email",
	"preferences-section.preferences": "Preferencias",
	"preferences-section.emailNotifications": "Notificaciones por correo electrónico",
	"preferences-section.receiveWeeklyBenchmarkReports": "Recibir informes semanales de benchmarks",
	"preferences-section.toggleNotifications": "Alternar notificaciones",
	"preferences-section.darkMode": "Modo oscuro",
	"preferences-section.useDarkColorScheme": "Usar esquema de colores oscuros",
	"preferences-section.toggleDarkMode": "Alternar modo oscuro",
	"preferences-section.defaultLanguage": "Idioma predeterminado",
	"preferences-section.englishEn": "Inglés (en)",
	"preferences-section.frenchFr": "Francés (fr)",
	"preferences-section.germanDe": "Alemán (de)",
	"preferences-section.spanishEs": "Español (es)",
	"preferences-section.japaneseJa": "Japonés (ja)",
	"preferences-section.chineseSimplifiedZhCn": "Chino simplificado (zh-CN)",
	"preferences-section.arabicAr": "Árabe (ar)",
	"api-access-section.apiAccess": "Acceso a la API",
	"api-access-section.apiKey": "Clave de API",
	"api-access-section.useThisKeyToAccess": "Utilice esta clave para acceder a la API de benchmarking de forma programada.",
	"api-access-section.copy": "Copiar",
	"settings-footer.cancel": "Cancelar",
	"settings-footer.saveChanges": "Guardar cambios",
	mockBanner
};
//#endregion
export { es_default as default, mockBanner };
//#region src/messages/fr.json
var mockBanner = "⚠️ Cette page contient des données fictives à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.";
var fr_default = {
	"header.home": "Accueil",
	"header.methodology": "Méthodologie",
	"header.mockPages": "Pages de Test",
	"header.products": "Produits",
	"header.pricing": "Tarification",
	"header.team": "Équipe",
	"header.blog": "Blog",
	"header.careers": "Carrières",
	"header.faq": "FAQ",
	"header.contact": "Contact",
	"header.settings": "Paramètres",
	"header.goToGithub": "Aller sur GitHub",
	"footer.resources": "Ressources",
	"footer.contact": "Contact",
	"footer.github": "GitHub",
	"footer.methodology": "Méthodologie",
	"footer.contributing": "Contribuer",
	"footer.builtWith": "i18n Benchmark — Projet open-source. Construit avec React, Vite & TanStack Router.",
	"footer.anOpenSourceTestApplication": "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
	"route.oopsPageNotFound": "Oups ! Page non trouvée",
	"route.returnToHome": "Retour à l'Accueil",
	"route.couldNotMeasureHydrationDuration": "Impossible de mesurer la durée d'hydratation :",
	"theme-toggle.themeModeAutoSystemClick": "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
	"theme-toggle.themeModeLightClick": "Mode de thème : clair. Cliquez pour passer au mode sombre.",
	"theme-toggle.themeModeDarkClick": "Mode de thème : sombre. Cliquez pour passer au mode auto (système).",
	"theme-toggle.themeAuto": "Thème : Auto",
	"theme-toggle.themeDark": "Thème : Sombre",
	"theme-toggle.themeLight": "Thème : Clair",
	"hero.aTestApplicationDesignedTo": "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
	"hero.viewResults": "Voir les Résultats",
	"why-it-matters.whyTheseMetricsMatter": "Pourquoi ces Métriques Comptent",
	"why-it-matters.bundleSize": "Taille du Bundle",
	"why-it-matters.theBundleIsTheData": "Le bundle représente les données envoyées à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement en poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
	"why-it-matters.renderingHydration": "Rendu & Hydratation",
	"why-it-matters.connectingALargeJsonDictionary": "Connecter un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arborescence. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
	"why-it-matters.dynamicLoading": "Chargement Dynamique",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "Charger toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (lazy) divise les traductions par route ou espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade (waterfall), flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.",
	"results-table.sampleResults": "Résultats d'échantillon",
	"results-table.library": "Bibliothèque",
	"results-table.bundleSize": "Taille du bundle",
	"results-table.lookupTime": "Temps de consultation",
	"results-table.lazyLoading": "Chargement différé",
	"understanding-impact.understandingTheImpact": "Comprendre l'impact",
	"understanding-impact.whyASingleLargeJson": "Pourquoi un seul JSON volumineux peut nuire à la performance",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :",
	"understanding-impact.theJsonMustBeParsed": "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.",
	"understanding-impact.contextBasedArchitecturesCanCause": "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la locale change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.",
	"understanding-impact.duringServerSideRenderingThe": "Pendant le rendu côté serveur, le dictionnaire complet est sérialisé dans la charge utile HTML, augmentant la taille du document qui doit être téléchargé et hydraté.",
	"understanding-impact.theTradeOffsOfDynamic": "Les compromis du chargement dynamique",
	"understanding-impact.splittingTranslationsIntoPerRoute": "Diviser les traductions en morceaux par route ou par espace de noms peut réduire considérablement la charge utile initiale. Mais cela introduit de nouveaux défis :",
	"understanding-impact.waterfallRequests": "Requêtes en cascade :",
	"understanding-impact.theAppMustFirstLoad": "l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.",
	"understanding-impact.flashOfUntranslatedContentFouc": "Flash de contenu non traduit (FOUC) :",
	"understanding-impact.usersMayBrieflySee": "les utilisateurs peuvent voir brièvement des clés de traduction ou une langue de secours avant l'arrivée du morceau.",
	"understanding-impact.cacheInvalidation": "Invalidation du cache :",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "la mise à jour des traductions nécessite des stratégies de purge du cache pour garantir que les utilisateurs reçoivent le contenu frais sans re-télécharger les morceaux inchangés.",
	"understanding-impact.whatThisBenchmarkMeasures": "Ce que ce benchmark mesure",
	"understanding-impact.thisTestAppProvidesA": "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.",
	"about-header.aboutThisBenchmark": "À propos de ce Benchmark",
	"about-header.thisIsAnOpenSource": "Ceci est une application de test open-source — pas un produit ou une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.",
	"about-grid.whyThisExists": "Pourquoi ce Projet Existe",
	"about-grid.choosingAnI18nLibraryIs": "Choisir une bibliothèque i18n est une décision d'architecture aux conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performance : quel poids la bibliothèque ajoute-t-elle au bundle ? Quel est son impact sur le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement asynchrone aide-t-il vraiment ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.",
	"about-grid.methodology": "Méthodologie",
	"about-grid.theSame10PageApp": "La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons le React Profiler pour capturer les temps de rendu lors des changements de locale. Tous les tests s'exécutent en CI sur du matériel constant pour garantir des résultats reproductibles.",
	"what-we-measure.bundleSizeImpact": "Impact sur la taille du bundle",
	"what-we-measure.theAdditionalJavascriptBytesSent": "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.",
	"what-we-measure.renderingOverhead": "Surcharge de rendu",
	"what-we-measure.howMuchExtraTimeThe": "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des rendus inutiles dans tout l'arbre des composants.",
	"what-we-measure.hydrationCost": "Coût d'hydratation",
	"what-we-measure.duringSsrTranslationDataIs": "Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
	"what-we-measure.lazyLoadingEffectiveness": "Efficacité du lazy loading",
	"what-we-measure.whetherSplittingTranslationsByRoute": "Si diviser les traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).",
	"what-we-measure.localeSwitchSpeed": "Vitesse de changement de langue",
	"what-we-measure.howFastTheAppCan": "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
	"what-we-measure.whatWeMeasure": "Ce que nous mesurons",
	"blog-header.insightsTutorialsAndAnalysisFrom": "Aperçus, tutoriels et analyses de la communauté i18n.",
	"blog-list.comparingI18nLibrariesIn2026": "Comparer les bibliothèques i18n en 2026 : une analyse approfondie",
	"blog-list.weTested12DifferentInternationalization": "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et la DX. Voici les résultats surprenants.",
	"blog-list.howToReduceYourI18n": "Comment réduire votre bundle i18n de 60 %",
	"blog-list.march82026": "8 mars 2026",
	"blog-list.practicalStrategiesForOptimizingTranslation": "Stratégies pratiques pour optimiser les bundles de traduction, y compris le lazy loading, le fractionnement du code et les optimisations au moment de la compilation.",
	"blog-list.theStateOfInternationalizationIn": "L'état de l'internationalisation dans React",
	"blog-list.february282026": "28 février 2026",
	"blog-list.anOverviewOfTheCurrent": "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.",
	"blog-list.migratingFromReactI18nextTo": "Migrer de react-i18next vers Lingui",
	"blog-list.february152026": "15 février 2026",
	"blog-list.aStepByStepGuide": "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
	"blog-list.serverComponentsAndI18nWhat": "Server Components et i18n : qu'est-ce qui change ?",
	"blog-list.february12026": "1er février 2026",
	"blog-list.reactServerComponentsIntroduceNew": "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
	"blog-list.benchmarkMethodologyHowWeTest": "Méthodologie du Benchmark : comment nous testons",
	"blog-list.january202026": "20 janvier 2026",
	"blog-list.aTransparentLookAtOur": "Un regard transparent sur notre méthodologie de benchmark, incluant les environnements de test, les méthodes statistiques et la reproductibilité.",
	"blog-list.readMore": "Lire la suite →",
	"careers-header.title": "Carrières",
	"careers-header.joinOurMissionToImprove": "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe télétravail d'abord qui valorise l'impact, la transparence et l'apprentissage continu.",
	"careers-benefits.workFromAnywhereInThe": "Travailler de n'importe où dans le monde",
	"careers-benefits.competitivePay": "Rémunération compétitive",
	"careers-benefits.topOfMarketCompensation": "Rémunération au-dessus du marché",
	"careers-benefits.openSourceTime": "Temps alloué à l'open source",
	"open-positions.seniorFrontendEngineer": "Ingénieur Frontend Senior",
	"open-positions.buildAndMaintainOurBenchmarking": "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement utilisant React, TypeScript et Vite.",
	"open-positions.backendEngineer": "Ingénieur Backend",
	"open-positions.designAndScaleOurCloud": "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de lancements automatisés par jour.",
	"open-positions.technicalWriter": "Rédacteur Technique",
	"open-positions.createComprehensiveGuidesApiReferences": "Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.",
	"open-positions.devrelEngineer": "Ingénieur DevRel",
	"open-positions.sanFranciscoRemote": "San Francisco / Télétravail",
	"open-positions.engageWithTheI18nCommunity": "S'engager avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.",
	"open-positions.qaEngineer": "Ingénieur QA",
	"open-positions.ensureTheAccuracyAndReliability": "Assurer la précision et la fiabilité des résultats de benchmark via des tests rigoureux et une validation.",
	"open-positions.openPositions": "Postes Ouverts",
	"open-positions.applyNow": "Postuler Maintenant",
	"open-positions.remote": "Télétravail",
	"open-positions.fullTime": "Temps plein",
	"open-positions.partTime": "Temps partiel",
	"open-positions.engineering": "Ingénierie",
	"open-positions.documentation": "Documentation",
	"open-positions.community": "Communauté",
	"contact-header.getInTouch": "Contactez-nous",
	"contact-header.haveIdeasFoundABug": "Vous avez des idées, trouvé un bug ou vous voulez contribuer à un benchmark ? Contactez-nous à",
	"contact-form.name": "Nom",
	"contact-form.yourName": "Votre nom",
	"contact-form.email": "E-mail",
	"contact-form.emailPlaceholder": "vous@exemple.com",
	"contact-form.topic": "Sujet",
	"contact-form.bugReport": "Rapport de Bug",
	"contact-form.newBenchmarkIdea": "Nouvelle Idée de Benchmark",
	"contact-form.methodologyQuestion": "Question sur la Méthodologie",
	"contact-form.contribution": "Contribution",
	"contact-form.other": "Autre",
	"contact-form.message": "Message",
	"contact-form.describeYourQuestionOrIdea": "Décrivez votre question ou idée...",
	"contact-form.sendMessage": "Envoyer le Message",
	"faq-header1.frequentlyAskedQuestions": "Foire Aux Questions",
	"faq-header1.everythingYouNeedToKnow": "Tout ce que vous devez savoir sur i18n Benchmark.",
	"faq-list.whatIsI18nBenchmark": "Qu'est-ce que i18n Benchmark ?",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmark est une suite de benchmarking open-source qui mesure et compare la performance, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.",
	"faq-list.howAreBenchmarksConducted": "Comment les benchmarks sont-ils menés ?",
	"faq-list.weRunStandardizedTestsIn": "Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.",
	"faq-list.whichLibrariesAreCurrentlySupported": "Quelles bibliothèques sont actuellement supportées ?",
	"faq-list.weSupportReactI18nextReact": "Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.",
	"faq-list.canISubmitMyOwn": "Puis-je soumettre mes propres benchmarks ?",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "Oui ! Les soumissions de benchmarks de la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.",
	"faq-list.howOftenAreBenchmarksUpdated": "À quelle fréquence les benchmarks sont-ils mis à jour ?",
	"faq-list.weReRunAllBenchmarks": "Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les versions majeures déclenchent un cycle immédiat de re-benchmarking.",
	"faq-list.isTheDataReliable": "Les données sont-elles fiables ?",
	"faq-list.weFollowRigorousStatisticalMethodology": "Nous suivons une méthodologie statistique rigoureuse incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées aux côtés de notre analyse pour une transparence totale.",
	"faq-list.doYouOfferConsultingServices": "Proposez-vous des services de conseil ?",
	"faq-list.yesOurEnterprisePlanIncludes": "Oui, notre plan Entreprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation spécifique, votre échelle et vos contraintes.",
	"faq-list.howCanIContribute": "Comment puis-je contribuer ?",
	"faq-list.thereAreManyWaysTo": "Il existe de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.",
	"pricing-header.simpleTransparentPricing": "Tarification Simple et Transparente",
	"pricing-header.chooseThePlanThatFits": "Choisissez le plan qui convient à votre équipe. Pas de frais cachés.",
	"pricing-tiers.starter": "Starter",
	"pricing-tiers.price0": "0 $",
	"pricing-tiers.forever": "pour toujours",
	"pricing-tiers.benchmarkRunPerDay": "{runs} lancements de benchmark/jour",
	"pricing-tiers.librariesNumber": "{libs} bibliothèques",
	"pricing-tiers.communitySupport": "Support de la communauté",
	"pricing-tiers.publicResults": "Résultats publics",
	"pricing-tiers.pro": "Pro",
	"pricing-tiers.price29": "29 $",
	"pricing-tiers.month": "/mois",
	"pricing-tiers.unlimitedRuns": "Lancements illimités",
	"pricing-tiers.allLibraries": "Toutes les bibliothèques",
	"pricing-tiers.prioritySupport": "Support prioritaire",
	"pricing-tiers.privateResults": "Résultats privés",
	"pricing-tiers.ciIntegration": "Intégration CI",
	"pricing-tiers.historicalData": "Données historiques",
	"pricing-tiers.enterprise": "Entreprise",
	"pricing-tiers.customPrice": "Custom",
	"pricing-tiers.everythingInPro": "Tout dans Pro",
	"pricing-tiers.onPremiseOption": "Option sur site",
	"pricing-tiers.ssoSaml": "SSO & SAML",
	"pricing-tiers.dedicatedAccountManager": "Gestionnaire de compte dédié",
	"pricing-tiers.customSlas": "SLA personnalisés",
	"pricing-tiers.auditLogs": "Journaux d'audit",
	"pricing-tiers.trainingSessions": "Sessions de formation",
	"pricing-tiers.contactSales": "Contacter les ventes",
	"pricing-tiers.getStarted": "Commencer",
	"products-header.toolsAndServicesToStreamline": "Outils et services pour rationaliser votre flux de travail d'internationalisation.",
	"products-grid.benchmarkCli": "CLI de Benchmark",
	"products-grid.runBenchmarksLocallyFromYour": "Lancez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.",
	"products-grid.benchmarkCloud": "Benchmark Cloud",
	"products-grid.automatedCloudBasedBenchmarkingWith": "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.",
	"products-grid.benchmarkEnterprise": "Benchmark Entreprise",
	"products-grid.onPremiseDeploymentWithSso": "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.",
	"products-grid.contactUs": "Contactez-nous",
	"products-grid.migrationAssistant": "Assistant de Migration",
	"products-grid.aiPoweredToolThatHelps": "Outil propulsé par l'IA qui aide à migrer votre codebase entre les bibliothèques i18n sans temps d'arrêt.",
	"products-grid.translationQa": "QA de Traduction",
	"products-grid.automatedQualityChecksForMissing": "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.",
	"products-grid.bundleOptimizer": "Optimiseur de Bundle",
	"products-grid.analyzesAndOptimizesYourI18n": "Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le fractionnement du code.",
	"products-grid.learnMore": "En savoir plus",
	"team-header.ourTeam": "Notre Équipe",
	"team-header.meetThePeopleBehindI18n": "Découvrez les personnes derrière i18n Benchmark. Une équipe diverse unie par une passion partagée pour les excellents outils de développement.",
	"team-grid.sarahChen": "Sarah Chen",
	"team-grid.founderLeadEngineer": "Fondatrice & Ingénieure Principale",
	"team-grid.formerGoogleEngineerWith10": "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.",
	"team-grid.marcusWeber": "Marcus Weber",
	"team-grid.performanceEngineer": "Ingénieur Performance",
	"team-grid.specializesInJavascriptPerformanceOptimization": "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Auparavant chez Vercel.",
	"team-grid.aishaPatel": "Aisha Patel",
	"team-grid.developerAdvocate": "Developer Advocate",
	"team-grid.passionateAboutDeveloperExperienceAnd": "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.",
	"team-grid.tomasRodriguez": "Tomás Rodríguez",
	"team-grid.fullStackDeveloper": "Développeur Full-Stack",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.",
	"team-grid.yukiTanaka": "Yuki Tanaka",
	"team-grid.dataAnalyst": "Analyste de Données",
	"team-grid.ensuresStatisticalRigorInAll": "Assure la rigueur statistique dans tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.",
	"team-grid.elenaKowalski": "Elena Kowalski",
	"team-grid.communityManager": "Gestionnaire de Communauté",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.",
	"settings-header.manageYourAccountPreferencesAnd": "Gérez vos préférences de compte et votre configuration.",
	"profile-section.profile": "Profil",
	"profile-section.displayName": "Nom d'affichage",
	"profile-section.email": "E-mail",
	"preferences-section.preferences": "Préférences",
	"preferences-section.emailNotifications": "Notifications par e-mail",
	"preferences-section.receiveWeeklyBenchmarkReports": "Recevoir des rapports hebdomadaires sur les benchmarks",
	"preferences-section.toggleNotifications": "Basculer les notifications",
	"preferences-section.darkMode": "Mode sombre",
	"preferences-section.useDarkColorScheme": "Utiliser le schéma de couleurs sombres",
	"preferences-section.toggleDarkMode": "Basculer le mode sombre",
	"preferences-section.defaultLanguage": "Langue par défaut",
	"preferences-section.englishEn": "Anglais (en)",
	"preferences-section.frenchFr": "Français (fr)",
	"preferences-section.germanDe": "Allemand (de)",
	"preferences-section.spanishEs": "Espagnol (es)",
	"preferences-section.japaneseJa": "Japonais (ja)",
	"preferences-section.chineseSimplifiedZhCn": "Chinois simplifié (zh-CN)",
	"preferences-section.arabicAr": "Arabe (ar)",
	"api-access-section.apiAccess": "Accès API",
	"api-access-section.apiKey": "Clé API",
	"api-access-section.useThisKeyToAccess": "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.",
	"api-access-section.copy": "Copier",
	"settings-footer.cancel": "Annuler",
	"settings-footer.saveChanges": "Enregistrer les modifications",
	mockBanner
};
//#endregion
export { fr_default as default, mockBanner };
//#region src/messages/it.json
var mockBanner = "⚠️ Questa pagina contiene dati di esempio solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.";
var it_default = {
	"header.home": "Home",
	"header.methodology": "Metodologia",
	"header.mockPages": "Pagine di test",
	"header.products": "Prodotti",
	"header.pricing": "Prezzi",
	"header.team": "Team",
	"header.blog": "Blog",
	"header.careers": "Carriere",
	"header.faq": "FAQ",
	"header.contact": "Contatti",
	"header.settings": "Impostazioni",
	"header.goToGithub": "Vai su GitHub",
	"footer.resources": "Risorse",
	"footer.contact": "Contatti",
	"footer.github": "GitHub",
	"footer.methodology": "Metodologia",
	"footer.contributing": "Contribuire",
	"footer.builtWith": "i18n Benchmark — Progetto open source. Costruito con React, Vite e TanStack Router.",
	"footer.anOpenSourceTestApplication": "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.",
	"route.oopsPageNotFound": "Ops! Pagina non trovata",
	"route.returnToHome": "Torna alla Home",
	"route.couldNotMeasureHydrationDuration": "Impossibile misurare la durata dell'idratazione:",
	"theme-toggle.themeModeAutoSystemClick": "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
	"theme-toggle.themeModeLightClick": "Modalità tema: chiara. Clicca per passare alla modalità scura.",
	"theme-toggle.themeModeDarkClick": "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
	"theme-toggle.themeAuto": "Tema: Auto",
	"theme-toggle.themeDark": "Tema: Scuro",
	"theme-toggle.themeLight": "Tema: Chiaro",
	"hero.aTestApplicationDesignedTo": "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
	"hero.viewResults": "Visualizza i risultati",
	"why-it-matters.whyTheseMetricsMatter": "Perché queste metriche sono importanti",
	"why-it-matters.bundleSize": "Dimensioni del bundle",
	"why-it-matters.theBundleIsTheData": "Il bundle rappresenta i dati inviati a ogni utente in tutto il mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
	"why-it-matters.renderingHydration": "Rendering e idratazione",
	"why-it-matters.connectingALargeJsonDictionary": "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può innescare nuovi rendering nell'intero albero. Durante l'idratazione SSR, l'analisi e il collegamento di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
	"why-it-matters.dynamicLoading": "Caricamento dinamico",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "Il caricamento preventivo di tutte le traduzioni sovraccarica il payload iniziale. Il caricamento dinamico (lazy) suddivide le traduzioni per percorso o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromis: richieste a cascata (waterfall), flash di contenuti non tradotti e complessità del caching. Misurare entrambe le strategie è essenziale.",
	"results-table.sampleResults": "Risultati del campione",
	"results-table.library": "Biblioteca",
	"results-table.bundleSize": "Dimensioni del bundle",
	"results-table.lookupTime": "Tempo di ricerca",
	"results-table.lazyLoading": "Caricamento lento",
	"understanding-impact.understandingTheImpact": "Comprendere l'impatto",
	"understanding-impact.whyASingleLargeJson": "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Ciò significa:",
	"understanding-impact.theJsonMustBeParsed": "Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.",
	"understanding-impact.contextBasedArchitecturesCanCause": "Le architetture basate sul contesto possono causare rendering a cascata quando cambia la lingua, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
	"understanding-impact.duringServerSideRenderingThe": "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando le dimensioni del documento che deve essere scaricato e idratato.",
	"understanding-impact.theTradeOffsOfDynamic": "I compromessi del caricamento dinamico",
	"understanding-impact.splittingTranslationsIntoPerRoute": "La suddivisione delle traduzioni in blocchi per percorso o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:",
	"understanding-impact.waterfallRequests": "Richieste a cascata:",
	"understanding-impact.theAppMustFirstLoad": "L'app deve prima caricarsi, determinare la lingua, quindi recuperare il blocco corretto — aggiungendo round-trip di rete.",
	"understanding-impact.flashOfUntranslatedContentFouc": "Flash di contenuto non tradotto (FOUC):",
	"understanding-impact.usersMayBrieflySee": "Gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il blocco.",
	"understanding-impact.cacheInvalidation": "Invalidazione della cache:",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "L'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente i blocchi invariati.",
	"understanding-impact.whatThisBenchmarkMeasures": "Cosa misura questo benchmark",
	"understanding-impact.thisTestAppProvidesA": "Questa app di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al bundle JavaScript, il tempo trascorso ad analizzare e renderizzare i contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.",
	"about-header.aboutThisBenchmark": "Informazioni su questo benchmark",
	"about-header.thisIsAnOpenSource": "Questa è un'applicazione di test open source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'app React realistica e multipagina in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.",
	"about-grid.whyThisExists": "Perché esiste questo progetto",
	"about-grid.choosingAnI18nLibraryIs": "La scelta di una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia dell'API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento lento aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.",
	"about-grid.methodology": "Metodologia",
	"about-grid.theSame10PageApp": "La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per acquisire i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.",
	"what-we-measure.bundleSizeImpact": "Impatto sulla dimensione del bundle",
	"what-we-measure.theAdditionalJavascriptBytesSent": "I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sui tempi di download su reti lente.",
	"what-we-measure.renderingOverhead": "Overhead di rendering",
	"what-we-measure.howMuchExtraTimeThe": "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che inseriscono traduzioni tramite un singolo provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.",
	"what-we-measure.hydrationCost": "Costo di idratazione",
	"what-we-measure.duringSsrTranslationDataIs": "Durante l'SSR, i dati di traduzione vengono serializzati in HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.",
	"what-we-measure.lazyLoadingEffectiveness": "Efficacia del caricamento lento",
	"what-we-measure.whetherSplittingTranslationsByRoute": "Se la suddivisione delle traduzioni per percorso o spazio dei nomi riduce effettivamente il carico iniziale e quali compromessi introduce (richieste a cascata, FOUC, complessità della cache).",
	"what-we-measure.localeSwitchSpeed": "Velocità di cambio lingua",
	"what-we-measure.howFastTheAppCan": "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione, incluso il recupero di nuove traduzioni, il nuovo rendering dei componenti e l'aggiornamento del DOM.",
	"what-we-measure.whatWeMeasure": "Cosa misuriamo",
	"blog-header.insightsTutorialsAndAnalysisFrom": "Approfondimenti, tutorial e analisi dalla comunità i18n.",
	"blog-list.comparingI18nLibrariesIn2026": "Confronto tra librerie i18n nel 2026: un'analisi approfondita",
	"blog-list.weTested12DifferentInternationalization": "Abbiamo testato 12 diverse librerie di internazionalizzazione in base a prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.",
	"blog-list.howToReduceYourI18n": "Come ridurre il bundle i18n del 60%",
	"blog-list.march82026": "8 marzo 2026",
	"blog-list.practicalStrategiesForOptimizingTranslation": "Strategie pratiche per ottimizzare i bundle di traduzione tra cui caricamento lento, suddivisione del codice e ottimizzazioni in fase di compilazione.",
	"blog-list.theStateOfInternationalizationIn": "Lo stato dell'internazionalizzazione in React",
	"blog-list.february282026": "28 febbraio 2026",
	"blog-list.anOverviewOfTheCurrent": "Una panoramica dell'attuale ecosistema i18n in React, con tendenze, pattern emergenti e preferenze della comunità.",
	"blog-list.migratingFromReactI18nextTo": "Migrazione da react-i18next a Lingui",
	"blog-list.february152026": "15 febbraio 2026",
	"blog-list.aStepByStepGuide": "Una guida dettagliata sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
	"blog-list.serverComponentsAndI18nWhat": "Server Components e i18n: cosa cambia?",
	"blog-list.february12026": "1 febbraio 2026",
	"blog-list.reactServerComponentsIntroduceNew": "I React Server Components introducono nuovi pattern per l'internazionalizzazione. Esploriamo implicazioni e best practice.",
	"blog-list.benchmarkMethodologyHowWeTest": "Metodologia del benchmark: come testiamo",
	"blog-list.january202026": "20 gennaio 2026",
	"blog-list.aTransparentLookAtOur": "Uno sguardo trasparente alla nostra metodologia di benchmark, inclusi ambienti di test, metodi statistici e riproducibilità.",
	"blog-list.readMore": "Leggi di più →",
	"careers-header.title": "Carriere",
	"careers-header.joinOurMissionToImprove": "Unisciti alla nostra missione per migliorare l'ecosistema di internazionalizzazione. Siamo un team remote-first che valorizza l'impatto, la trasparenza e l'apprendimento continuo.",
	"careers-benefits.workFromAnywhereInThe": "Lavora da qualsiasi parte del mondo",
	"careers-benefits.competitivePay": "Retribuzione competitiva",
	"careers-benefits.topOfMarketCompensation": "Compensi ai vertici del mercato",
	"careers-benefits.openSourceTime": "Tempo per l'open source",
	"open-positions.seniorFrontendEngineer": "Ingegnere frontend senior",
	"open-positions.buildAndMaintainOurBenchmarking": "Crea e gestisci la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
	"open-positions.backendEngineer": "Ingegnere backend",
	"open-positions.designAndScaleOurCloud": "Progetta e ridimensiona la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.",
	"open-positions.technicalWriter": "Redattore tecnico",
	"open-positions.createComprehensiveGuidesApiReferences": "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
	"open-positions.devrelEngineer": "Ingegnere DevRel",
	"open-positions.sanFranciscoRemote": "San Francisco / Remoto",
	"open-positions.engageWithTheI18nCommunity": "Collabora con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.",
	"open-positions.qaEngineer": "Ingegnere QA",
	"open-positions.ensureTheAccuracyAndReliability": "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.",
	"open-positions.openPositions": "Posizioni aperte",
	"open-positions.applyNow": "Candidati ora",
	"open-positions.remote": "Remoto",
	"open-positions.fullTime": "Tempo pieno",
	"open-positions.partTime": "Part-time",
	"open-positions.engineering": "Ingegneria",
	"open-positions.documentation": "Documentazione",
	"open-positions.community": "Comunità",
	"contact-header.getInTouch": "Mettiti in contatto",
	"contact-header.haveIdeasFoundABug": "Hai delle idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo",
	"contact-form.name": "Nome",
	"contact-form.yourName": "Il tuo nome",
	"contact-form.email": "Email",
	"contact-form.emailPlaceholder": "tuo@esempio.it",
	"contact-form.topic": "Argomento",
	"contact-form.bugReport": "Segnalazione bug",
	"contact-form.newBenchmarkIdea": "Nuova idea di benchmark",
	"contact-form.methodologyQuestion": "Domanda sulla metodologia",
	"contact-form.contribution": "Contributo",
	"contact-form.other": "Altro",
	"contact-form.message": "Messaggio",
	"contact-form.describeYourQuestionOrIdea": "Descrivi la tua domanda o idea...",
	"contact-form.sendMessage": "Invia messaggio",
	"faq-header1.frequentlyAskedQuestions": "Domande frequenti",
	"faq-header1.everythingYouNeedToKnow": "Tutto quello che c'è da sapere su i18n Benchmark.",
	"faq-list.whatIsI18nBenchmark": "Cos'è i18n Benchmark?",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, la dimensione del bundle e l'esperienza dello sviluppatore delle librerie di internazionalizzazione per applicazioni JavaScript e React.",
	"faq-list.howAreBenchmarksConducted": "Come vengono condotti i benchmark?",
	"faq-list.weRunStandardizedTestsIn": "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.",
	"faq-list.whichLibrariesAreCurrentlySupported": "Quali librerie sono attualmente supportate?",
	"faq-list.weSupportReactI18nextReact": "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.",
	"faq-list.canISubmitMyOwn": "Posso inviare i miei benchmark?",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "Sì! I contributi ai benchmark della comunità sono benvenuti. Esegui il fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà i contributi idonei.",
	"faq-list.howOftenAreBenchmarksUpdated": "Ogni quanto vengono aggiornati i benchmark?",
	"faq-list.weReRunAllBenchmarks": "Eseguiamo nuovamente tutti i benchmark settimanalmente con le ultime versioni stabili di ogni libreria. Le versioni principali attivano un ciclo di benchmarking immediato.",
	"faq-list.isTheDataReliable": "I dati sono affidabili?",
	"faq-list.weFollowRigorousStatisticalMethodology": "Seguiamo una rigorosa metodologia statistica che include fasi di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi vengono pubblicati insieme alla nostra analisi per la massima trasparenza.",
	"faq-list.doYouOfferConsultingServices": "Offrite servizi di consulenza?",
	"faq-list.yesOurEnterprisePlanIncludes": "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire consigli su misura in base al tuo caso d'uso specifico, alle dimensioni e ai vincoli.",
	"faq-list.howCanIContribute": "Come posso contribuire?",
	"faq-list.thereAreManyWaysTo": "Esistono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per ulteriori dettagli.",
	"pricing-header.simpleTransparentPricing": "Prezzi semplici e trasparenti",
	"pricing-header.chooseThePlanThatFits": "Scegli il piano più adatto al tuo team. Nessun costo nascosto.",
	"pricing-tiers.starter": "Starter",
	"pricing-tiers.price0": "0 $",
	"pricing-tiers.forever": "per sempre",
	"pricing-tiers.benchmarkRunPerDay": "{runs} esecuzioni di benchmark/giorno",
	"pricing-tiers.librariesNumber": "{libs} librerie",
	"pricing-tiers.communitySupport": "Supporto della comunità",
	"pricing-tiers.publicResults": "Risultati pubblici",
	"pricing-tiers.pro": "Pro",
	"pricing-tiers.price29": "29 $",
	"pricing-tiers.month": "/mese",
	"pricing-tiers.unlimitedRuns": "Esecuzioni illimitate",
	"pricing-tiers.allLibraries": "Tutte le librerie",
	"pricing-tiers.prioritySupport": "Supporto prioritario",
	"pricing-tiers.privateResults": "Risultati privati",
	"pricing-tiers.ciIntegration": "Integrazione CI",
	"pricing-tiers.historicalData": "Dati storici",
	"pricing-tiers.enterprise": "Enterprise",
	"pricing-tiers.customPrice": "Personalizzato",
	"pricing-tiers.everythingInPro": "Tutto in Pro",
	"pricing-tiers.onPremiseOption": "Opzione on-premise",
	"pricing-tiers.ssoSaml": "SSO e SAML",
	"pricing-tiers.dedicatedAccountManager": "Account manager dedicato",
	"pricing-tiers.customSlas": "SLA personalizzati",
	"pricing-tiers.auditLogs": "Log di audit",
	"pricing-tiers.trainingSessions": "Sessioni di formazione",
	"pricing-tiers.contactSales": "Contatta le vendite",
	"pricing-tiers.getStarted": "Inizia ora",
	"products-header.toolsAndServicesToStreamline": "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.",
	"products-grid.benchmarkCli": "CLI di benchmark",
	"products-grid.runBenchmarksLocallyFromYour": "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.",
	"products-grid.benchmarkCloud": "Benchmark cloud",
	"products-grid.automatedCloudBasedBenchmarkingWith": "Benchmarking automatizzato basato su cloud con monitoraggio storico, avvisi e dashboard per i team.",
	"products-grid.benchmarkEnterprise": "Benchmark enterprise",
	"products-grid.onPremiseDeploymentWithSso": "Distribuzione on-premise con SSO, log di audit, SLA personalizzati e supporto dedicato.",
	"products-grid.contactUs": "Contattaci",
	"products-grid.migrationAssistant": "Assistente alla migrazione",
	"products-grid.aiPoweredToolThatHelps": "Strumento basato sull'intelligenza artificiale che aiuta a migrare il codebase tra le librerie i18n senza tempi d'interruzione.",
	"products-grid.translationQa": "QA di traduzione",
	"products-grid.automatedQualityChecksForMissing": "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.",
	"products-grid.bundleOptimizer": "Ottimizzatore bundle",
	"products-grid.analyzesAndOptimizesYourI18n": "Analizza e ottimizza il bundle i18n per la produzione con tree-shaking e suddivisione del codice.",
	"products-grid.learnMore": "Scopri di più",
	"team-header.ourTeam": "Il nostro team",
	"team-header.meetThePeopleBehindI18n": "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per i grandi strumenti per sviluppatori.",
	"team-grid.sarahChen": "Sarah Chen",
	"team-grid.founderLeadEngineer": "Fondatrice e lead engineer",
	"team-grid.formerGoogleEngineerWith10": "Ex ingegnere di Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su larga scala.",
	"team-grid.marcusWeber": "Marcus Weber",
	"team-grid.performanceEngineer": "Ingegnere delle prestazioni",
	"team-grid.specializesInJavascriptPerformanceOptimization": "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.",
	"team-grid.aishaPatel": "Aisha Patel",
	"team-grid.developerAdvocate": "Developer advocate",
	"team-grid.passionateAboutDeveloperExperienceAnd": "Appassionata di developer experience e formazione. Relatrice a React Conf, JSConf e i18nNext.",
	"team-grid.tomasRodriguez": "Tomás Rodríguez",
	"team-grid.fullStackDeveloper": "Sviluppatore Full-Stack",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "Gestisce l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.",
	"team-grid.yukiTanaka": "Yuki Tanaka",
	"team-grid.dataAnalyst": "Analista di dati",
	"team-grid.ensuresStatisticalRigorInAll": "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata presso il MIT.",
	"team-grid.elenaKowalski": "Elena Kowalski",
	"team-grid.communityManager": "Community manager",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "Gestisce i contributi della comunità, le partnership e gli eventi. Esperienza nella governance open source.",
	"settings-header.manageYourAccountPreferencesAnd": "Gestisci le preferenze dell'account e la configurazione.",
	"profile-section.profile": "Profilo",
	"profile-section.displayName": "Nome visualizzato",
	"profile-section.email": "Email",
	"preferences-section.preferences": "Preferenze",
	"preferences-section.emailNotifications": "Notifiche email",
	"preferences-section.receiveWeeklyBenchmarkReports": "Ricevi rapporti settimanali sui benchmark",
	"preferences-section.toggleNotifications": "Attiva/disattiva notifiche",
	"preferences-section.darkMode": "Modalità scura",
	"preferences-section.useDarkColorScheme": "Usa lo schema colori scuro",
	"preferences-section.toggleDarkMode": "Attiva/disattiva modalità scura",
	"preferences-section.defaultLanguage": "Lingua predefinita",
	"preferences-section.englishEn": "Inglese (en)",
	"preferences-section.frenchFr": "Francese (fr)",
	"preferences-section.germanDe": "Tedesco (de)",
	"preferences-section.spanishEs": "Spagnolo (es)",
	"preferences-section.japaneseJa": "Giapponese (ja)",
	"preferences-section.chineseSimplifiedZhCn": "Cinese semplificato (zh-CN)",
	"preferences-section.arabicAr": "Arabo (ar)",
	"api-access-section.apiAccess": "Accesso API",
	"api-access-section.apiKey": "Chiave API",
	"api-access-section.useThisKeyToAccess": "Usa questa chiave per accedere alla API di benchmarking in modo programmatico.",
	"api-access-section.copy": "Copia",
	"settings-footer.cancel": "Annulla",
	"settings-footer.saveChanges": "Salva modifiche",
	mockBanner
};
//#endregion
export { it_default as default, mockBanner };
//#region src/messages/ja.json
var mockBanner = "⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。";
var ja_default = {
	"header.home": "ホーム",
	"header.methodology": "メソッド",
	"header.mockPages": "テストページ",
	"header.products": "製品",
	"header.pricing": "料金",
	"header.team": "チーム",
	"header.blog": "ブログ",
	"header.careers": "採用",
	"header.faq": "FAQ",
	"header.contact": "お問い合わせ",
	"header.settings": "設定",
	"header.goToGithub": "GitHubへ",
	"footer.resources": "リソース",
	"footer.contact": "お問い合わせ",
	"footer.github": "GitHub",
	"footer.methodology": "メソッド",
	"footer.contributing": "貢献する",
	"footer.builtWith": "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築。",
	"footer.anOpenSourceTestApplication": "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーション。",
	"route.oopsPageNotFound": "おっと！ページが見つかりません",
	"route.returnToHome": "ホームに戻る",
	"route.couldNotMeasureHydrationDuration": "ハイドレーション時間を測定できませんでした：",
	"theme-toggle.themeModeAutoSystemClick": "テーマモード：自動（システム）。クリックしてライトモードに切り替え。",
	"theme-toggle.themeModeLightClick": "テーマモード：ライト。クリックしてダークモードに切り替え。",
	"theme-toggle.themeModeDarkClick": "テーマモード：ダーク。クリックして自動（システム）モードに切り替え。",
	"theme-toggle.themeAuto": "テーマ：自動",
	"theme-toggle.themeDark": "テーマ：ダーク",
	"theme-toggle.themeLight": "テーマ：ライト",
	"hero.aTestApplicationDesignedTo": "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。",
	"hero.viewResults": "結果を表示",
	"why-it-matters.whyTheseMetricsMatter": "なぜこれらの指標が重要なのか",
	"why-it-matters.bundleSize": "バンドルサイズ",
	"why-it-matters.theBundleIsTheData": "バンドルは世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量において、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体まで大きく異なります。",
	"why-it-matters.renderingHydration": "レンダリングとハイドレーション",
	"why-it-matters.connectingALargeJsonDictionary": "大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体で再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでの遅延を追加し、Time to Interactive（TTI）に直接影響します。",
	"why-it-matters.dynamicLoading": "動的読み込み",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "すべての翻訳を事前に読み込むと、初期ペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑さといった独自のトレードオフが伴います。両方の戦略を測定することが不可欠です。",
	"results-table.sampleResults": "サンプル結果",
	"results-table.library": "ライブラリ",
	"results-table.bundleSize": "バンドルサイズ",
	"results-table.lookupTime": "検索時間",
	"results-table.lazyLoading": "遅延読み込み",
	"understanding-impact.understandingTheImpact": "影響を理解する",
	"understanding-impact.whyASingleLargeJson": "なぜ1つの大きなJSONがパフォーマンスを低下させるのか",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "多くのi18nライブラリは、Reactコンテキストを介して提供される1つのJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：",
	"understanding-impact.theJsonMustBeParsed": "JSONはページ読み込みのたびに解析される必要があり、メインスレッドをブロックします。",
	"understanding-impact.contextBasedArchitecturesCanCause": "コンテキストベースのアーキテクチャでは、ロケールが変更されたときにカスケード的な再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。",
	"understanding-impact.duringServerSideRenderingThe": "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。",
	"understanding-impact.theTradeOffsOfDynamic": "動的読み込みのトレードオフ",
	"understanding-impact.splittingTranslationsIntoPerRoute": "ルートごとまたは名前空間ごとのチャンクに翻訳を分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：",
	"understanding-impact.waterfallRequests": "ウォーターフォールリクエスト：",
	"understanding-impact.theAppMustFirstLoad": "アプリはまず読み込み、ロケールを決定し、それから適切なチャンクを取得する必要があります。これにより、ネットワークの往復が追加されます。",
	"understanding-impact.flashOfUntranslatedContentFouc": "未翻訳コンテンツのフラッシュ（FOUC）：",
	"understanding-impact.usersMayBrieflySee": "チャンクが到着する前に、ユーザーに翻訳キーやフォールバック言語が一瞬見えることがあります。",
	"understanding-impact.cacheInvalidation": "キャッシュの無効化：",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "翻訳を更新するには、変更されていないチャンクを再ダウンロードせずにユーザーが新しいコンテンツを受け取れるようにするためのキャッシュバスティング戦略が必要です。",
	"understanding-impact.whatThisBenchmarkMeasures": "このベンチマークが測定するもの",
	"understanding-impact.thisTestAppProvidesA": "このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。",
	"about-header.aboutThisBenchmark": "このベンチマークについて",
	"about-header.thisIsAnOpenSource": "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、そこでさまざまなi18nライブラリを同一条件下で統合および測定できるようにすることです。",
	"about-grid.whyThisExists": "なぜこれが存在するのか",
	"about-grid.choosingAnI18nLibraryIs": "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使い勝手に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を追加するか？数千の翻訳キーが読み込まれたときにレンダリングにどのように影響するか？遅延読み込みは本当に役立っているのか、それとも単にコストを先送りしているだけなのか？このベンチマークは、実際のデータでこれらの問いに答えます。",
	"about-grid.methodology": "メソッド",
	"about-grid.theSame10PageApp": "同じ10ページのアプリがライブラリごとに1回構築されます。生産バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用して言語切り替え中のレンダリング時間を取得します。すべてのテストは、再現可能な結果を確実にするために、一貫したハードウェアを備えたCIで実行されます。",
	"what-we-measure.bundleSizeImpact": "バンドルサイズへの影響",
	"what-we-measure.theAdditionalJavascriptBytesSent": "i18nライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。",
	"what-we-measure.renderingOverhead": "レンダリングのオーバーヘッド",
	"what-we-measure.howMuchExtraTimeThe": "ライブラリがReactのレンダリングサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。",
	"what-we-measure.hydrationCost": "ハイドレーションのコスト",
	"what-we-measure.duringSsrTranslationDataIs": "SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。",
	"what-we-measure.lazyLoadingEffectiveness": "遅延読み込みの有効性",
	"what-we-measure.whetherSplittingTranslationsByRoute": "ルートまたは名前空間ごとに翻訳を分割することで、初期負荷が実際に軽減されるか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が生じるかがわかります。",
	"what-we-measure.localeSwitchSpeed": "ロケール切り替え速度",
	"what-we-measure.howFastTheAppCan": "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか（新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新を含む）。",
	"what-we-measure.whatWeMeasure": "測定するもの",
	"blog-header.insightsTutorialsAndAnalysisFrom": "i18nコミュニティからの洞察、チュートリアル、分析。",
	"blog-list.comparingI18nLibrariesIn2026": "2026年のi18nライブラリ比較：詳細分析",
	"blog-list.weTested12DifferentInternationalization": "パフォーマンス、バンドルサイズ、DXについて12種類の国際化ライブラリをテストしました。驚くべき結果はこちらです。",
	"blog-list.howToReduceYourI18n": "i18nバンドルを60%削減する方法",
	"blog-list.march82026": "2026年3月8日",
	"blog-list.practicalStrategiesForOptimizingTranslation": "遅延読み込み、コード分割、コンパイル時の最適化など、翻訳バンドルを最適化するための実践的な戦略。",
	"blog-list.theStateOfInternationalizationIn": "Reactにおける国際化の現状",
	"blog-list.february282026": "2026年2月28日",
	"blog-list.anOverviewOfTheCurrent": "トレンド、新たなパターン、コミュニティの好みなど、Reactにおける現在のi18nエコシステムの概要。",
	"blog-list.migratingFromReactI18nextTo": "react-i18nextからLinguiへの移行",
	"blog-list.february152026": "2026年2月15日",
	"blog-list.aStepByStepGuide": "5万個の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。",
	"blog-list.serverComponentsAndI18nWhat": "Server Componentsとi18n：何が変わるのか？",
	"blog-list.february12026": "2026年2月1日",
	"blog-list.reactServerComponentsIntroduceNew": "React Server Componentsは国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。",
	"blog-list.benchmarkMethodologyHowWeTest": "ベンチマーク手法：どのようにテストするか",
	"blog-list.january202026": "2026年1月20日",
	"blog-list.aTransparentLookAtOur": "テスト環境、統計手法、再現性を含む、私たちのベンチマーク手法の透明な公開。",
	"blog-list.readMore": "続きを読む →",
	"careers-header.title": "採用",
	"careers-header.joinOurMissionToImprove": "国際化エコシステムを改善するという私たちのミッションに参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。",
	"careers-benefits.workFromAnywhereInThe": "世界中のどこからでも勤務可能",
	"careers-benefits.competitivePay": "競争力のある給与",
	"careers-benefits.topOfMarketCompensation": "市場最高水準の報酬",
	"careers-benefits.openSourceTime": "オープンソースへの貢献時間",
	"open-positions.seniorFrontendEngineer": "シニアフロントエンドエンジニア",
	"open-positions.buildAndMaintainOurBenchmarking": "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールを構築および保守します。",
	"open-positions.backendEngineer": "バックエンドエンジニア",
	"open-positions.designAndScaleOurCloud": "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールします。",
	"open-positions.technicalWriter": "テクニカルライター",
	"open-positions.createComprehensiveGuidesApiReferences": "私たちのベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。",
	"open-positions.devrelEngineer": "DevRelエンジニア",
	"open-positions.sanFranciscoRemote": "サンフランシスコ / リモート",
	"open-positions.engageWithTheI18nCommunity": "講演、ワークショップ、ブログ記事、およびオープンソースへの貢献を通じて、i18nコミュニティと関わります。",
	"open-positions.qaEngineer": "QAエンジニア",
	"open-positions.ensureTheAccuracyAndReliability": "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。",
	"open-positions.openPositions": "募集中の職種",
	"open-positions.applyNow": "今すぐ応募",
	"open-positions.remote": "リモート",
	"open-positions.fullTime": "正社員",
	"open-positions.partTime": "パートタイム",
	"open-positions.engineering": "エンジニアリング",
	"open-positions.documentation": "ドキュメンテーション",
	"open-positions.community": "コミュニティ",
	"contact-header.getInTouch": "お問い合わせ",
	"contact-header.haveIdeasFoundABug": "アイデアがある、バグを見つけた、またはベンチマークに貢献したいですか？以下までご連絡ください",
	"contact-form.name": "お名前",
	"contact-form.yourName": "お名前",
	"contact-form.email": "メールアドレス",
	"contact-form.emailPlaceholder": "name@example.jp",
	"contact-form.topic": "トピック",
	"contact-form.bugReport": "バグ報告",
	"contact-form.newBenchmarkIdea": "新しいベンチマークのアイデア",
	"contact-form.methodologyQuestion": "メソッドに関する質問",
	"contact-form.contribution": "貢献",
	"contact-form.other": "その他",
	"contact-form.message": "メッセージ",
	"contact-form.describeYourQuestionOrIdea": "質問やアイデアの内容を記述してください...",
	"contact-form.sendMessage": "メッセージを送信",
	"faq-header1.frequentlyAskedQuestions": "よくある質問",
	"faq-header1.everythingYouNeedToKnow": "i18n Benchmarkについて知っておくべきすべてのこと。",
	"faq-list.whatIsI18nBenchmark": "i18n Benchmarkとは何ですか？",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。",
	"faq-list.howAreBenchmarksConducted": "ベンチマークはどのように行われますか？",
	"faq-list.weRunStandardizedTestsIn": "一貫したハードウェアを使用した隔離された環境で、標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。",
	"faq-list.whichLibrariesAreCurrentlySupported": "現在サポートされているライブラリは何ですか？",
	"faq-list.weSupportReactI18nextReact": "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、Tolgeeをサポートしています。",
	"faq-list.canISubmitMyOwn": "自分のベンチマークを提出できますか？",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "はい！コミュニティからのベンチマーク提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが適格な提出をレビューしてマージします。",
	"faq-list.howOftenAreBenchmarksUpdated": "ベンチマークはどのくらいの頻度で更新されますか？",
	"faq-list.weReRunAllBenchmarks": "毎週、各ライブラリの最新の安定版を使用してすべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即時の再ベンチマークサイクルがトリガーされます。",
	"faq-list.isTheDataReliable": "データは信頼できますか？",
	"faq-list.weFollowRigorousStatisticalMethodology": "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従います。完全な透明性のために、すべての生データは分析とともに公開されます。",
	"faq-list.doYouOfferConsultingServices": "コンサルティングサービスは提供していますか？",
	"faq-list.yesOurEnterprisePlanIncludes": "はい、Enterpriseプランには、i18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、および制約に基づいたカスタマイズされた推奨事項を提供できます。",
	"faq-list.howCanIContribute": "どのように貢献できますか？",
	"faq-list.thereAreManyWaysTo": "貢献する方法はたくさんあります。ベンチマークの提出、ドキュメントの改善、バグの報告、新しい指標の提案、またはプロジェクトへのスポンサー提供などです。詳細はGitHubリポジトリをご覧ください。",
	"pricing-header.simpleTransparentPricing": "シンプルで透明性の高い料金体系",
	"pricing-header.chooseThePlanThatFits": "チームに最適なプランをお選びください。隠れた費用はありません。",
	"pricing-tiers.starter": "スターター",
	"pricing-tiers.price0": "0 $",
	"pricing-tiers.forever": "永久に",
	"pricing-tiers.benchmarkRunPerDay": "1日あたり {runs} 回のベンチマーク実行",
	"pricing-tiers.librariesNumber": "{libs} 個のライブラリ",
	"pricing-tiers.communitySupport": "コミュニティサポート",
	"pricing-tiers.publicResults": "公開結果",
	"pricing-tiers.pro": "Pro",
	"pricing-tiers.price29": "29 $",
	"pricing-tiers.month": "/月",
	"pricing-tiers.unlimitedRuns": "無制限の実行",
	"pricing-tiers.allLibraries": "すべてのライブラリ",
	"pricing-tiers.prioritySupport": "優先サポート",
	"pricing-tiers.privateResults": "非公開結果",
	"pricing-tiers.ciIntegration": "CI統合",
	"pricing-tiers.historicalData": "履歴データ",
	"pricing-tiers.enterprise": "エンタープライズ",
	"pricing-tiers.customPrice": "カスタム",
	"pricing-tiers.everythingInPro": "Proプランのすべての機能",
	"pricing-tiers.onPremiseOption": "オンプレミスオプション",
	"pricing-tiers.ssoSaml": "SSO & SAML",
	"pricing-tiers.dedicatedAccountManager": "専任のアカウントマネージャー",
	"pricing-tiers.customSlas": "カスタムSLA",
	"pricing-tiers.auditLogs": "監査ログ",
	"pricing-tiers.trainingSessions": "トレーニングセッション",
	"pricing-tiers.contactSales": "営業に問い合わせる",
	"pricing-tiers.getStarted": "今すぐ始める",
	"products-header.toolsAndServicesToStreamline": "国際化ワークフローを合理化するためのツールとサービス。",
	"products-grid.benchmarkCli": "Benchmark CLI",
	"products-grid.runBenchmarksLocallyFromYour": "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートします。",
	"products-grid.benchmarkCloud": "Benchmark Cloud",
	"products-grid.automatedCloudBasedBenchmarkingWith": "履歴追跡、アラート、チームダッシュボードを備えた自動化されたクラウドベースのベンチマーク。",
	"products-grid.benchmarkEnterprise": "Benchmark Enterprise",
	"products-grid.onPremiseDeploymentWithSso": "SSO、監査ログ、カスタムSLA、専任のサポートを備えたオンプレミスデプロイ。",
	"products-grid.contactUs": "お問い合わせ",
	"products-grid.migrationAssistant": "移行アシスタント",
	"products-grid.aiPoweredToolThatHelps": "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動型ツール。",
	"products-grid.translationQa": "翻訳品質管理",
	"products-grid.automatedQualityChecksForMissing": "翻訳漏れ、複数形の問題、コンテキストエラーの自動品質チェック。",
	"products-grid.bundleOptimizer": "バンドルオプティマイザー",
	"products-grid.analyzesAndOptimizesYourI18n": "Tree-shakingとコード分割を使用して、プロダクション向けにi18nバンドルを分析および最適化します。",
	"products-grid.learnMore": "詳細はこちら",
	"team-header.ourTeam": "私たちのチーム",
	"team-header.meetThePeopleBehindI18n": "i18n Benchmarkを支える人々を紹介します。優れた開発者ツールへの情熱によって団結した多様なチームです。",
	"team-grid.sarahChen": "サラ・チェン (Sarah Chen)",
	"team-grid.founderLeadEngineer": "創設者 & リードエンジニア",
	"team-grid.formerGoogleEngineerWith10": "以前はGoogleのエンジニアで、大規模な国際化システムの構築に10年の経験があります。",
	"team-grid.marcusWeber": "マーカス・ウェーバー (Marcus Weber)",
	"team-grid.performanceEngineer": "パフォーマンスエンジニア",
	"team-grid.specializesInJavascriptPerformanceOptimization": "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。",
	"team-grid.aishaPatel": "アイシャ・パテル (Aisha Patel)",
	"team-grid.developerAdvocate": "デベロッパーアドボケイト",
	"team-grid.passionateAboutDeveloperExperienceAnd": "開発者体験と教育に情熱を注いでいます。React Conf、JSConf、i18nNextのスピーカー。",
	"team-grid.tomasRodriguez": "トマス・ロドリゲス (Tomás Rodríguez)",
	"team-grid.fullStackDeveloper": "フルスタックデベロッパー",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。",
	"team-grid.yukiTanaka": "田中由紀 (Yuki Tanaka)",
	"team-grid.dataAnalyst": "データアナリスト",
	"team-grid.ensuresStatisticalRigorInAll": "すべてのベンチマーク結果において統計的な厳密さを確保。MITで応用統計学の博士号を取得。",
	"team-grid.elenaKowalski": "エレナ・コワルスキー (Elena Kowalski)",
	"team-grid.communityManager": "コミュニティマネージャー",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "コミュニティの貢献、パートナーシップ、イベントを管理。オープンソース・ガバナンスの経歴を持つ。",
	"settings-header.manageYourAccountPreferencesAnd": "アカウントの設定と構成を管理します。",
	"profile-section.profile": "プロフィール",
	"profile-section.displayName": "表示名",
	"profile-section.email": "メールアドレス",
	"preferences-section.preferences": "設定",
	"preferences-section.emailNotifications": "メール通知",
	"preferences-section.receiveWeeklyBenchmarkReports": "ベンチマーク週報を受け取る",
	"preferences-section.toggleNotifications": "通知の切り替え",
	"preferences-section.darkMode": "ダークモード",
	"preferences-section.useDarkColorScheme": "ダークカラー体系を使用する",
	"preferences-section.toggleDarkMode": "ダークモードの切り替え",
	"preferences-section.defaultLanguage": "デフォルト言語",
	"preferences-section.englishEn": "英語 (en)",
	"preferences-section.frenchFr": "フランス語 (fr)",
	"preferences-section.germanDe": "ドイツ語 (de)",
	"preferences-section.spanishEs": "スペイン語 (es)",
	"preferences-section.japaneseJa": "日本語 (ja)",
	"preferences-section.chineseSimplifiedZhCn": "中国語簡体字 (zh-CN)",
	"preferences-section.arabicAr": "アラビア語 (ar)",
	"api-access-section.apiAccess": "APIアクセス",
	"api-access-section.apiKey": "APIキー",
	"api-access-section.useThisKeyToAccess": "このキーを使用して、ベンチマークAPIにプログラムでアクセスします。",
	"api-access-section.copy": "コピー",
	"settings-footer.cancel": "キャンセル",
	"settings-footer.saveChanges": "変更を保存",
	mockBanner
};
//#endregion
export { ja_default as default, mockBanner };
//#region src/messages/ko.json
var mockBanner = "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.";
var ko_default = {
	"header.home": "홈",
	"header.methodology": "방법론",
	"header.mockPages": "테스트 페이지",
	"header.products": "제품",
	"header.pricing": "가격",
	"header.team": "팀",
	"header.blog": "블로그",
	"header.careers": "채용",
	"header.faq": "FAQ",
	"header.contact": "문의하기",
	"header.settings": "설정",
	"header.goToGithub": "GitHub로 이동",
	"footer.resources": "리소스",
	"footer.contact": "문의",
	"footer.github": "GitHub",
	"footer.methodology": "방법론",
	"footer.contributing": "기여하기",
	"footer.builtWith": "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
	"footer.anOpenSourceTestApplication": "국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
	"route.oopsPageNotFound": "앗! 페이지를 찾을 수 없습니다",
	"route.returnToHome": "홈으로 돌아가기",
	"route.couldNotMeasureHydrationDuration": "하이드레이션 시간을 측정할 수 없습니다:",
	"theme-toggle.themeModeAutoSystemClick": "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환하십시오.",
	"theme-toggle.themeModeLightClick": "테마 모드: 라이트. 클릭하여 다크 모드로 전환하십시오.",
	"theme-toggle.themeModeDarkClick": "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환하십시오.",
	"theme-toggle.themeAuto": "테마: 자동",
	"theme-toggle.themeDark": "테마: 다크",
	"theme-toggle.themeLight": "테마: 라이트",
	"hero.aTestApplicationDesignedTo": "국제화 라이브러리가 번들 크기, 로드 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
	"hero.viewResults": "결과 보기",
	"why-it-matters.whyTheseMetricsMatter": "이 지표들이 중요한 이유",
	"why-it-matters.bundleSize": "번들 크기",
	"why-it-matters.theBundleIsTheData": "번들은 전 세계 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 사용되는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.",
	"why-it-matters.renderingHydration": "렌더링 및 하이드레이션",
	"why-it-matters.connectingALargeJsonDictionary": "모든 구성 요소에 대형 JSON 사전을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트가 변경되면 트리 전체에서 다시 렌더링이 발생할 수 있습니다. SSR 하이드레이션 중에 방대한 번역 개체를 구문 분석하고 첨부하면 페이지가 인터랙티브해지기 전까지 지연이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.",
	"why-it-matters.dynamicLoading": "동적 로딩",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 것만 전송합니다. 그러나 지연 로딩은 워터포럴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등의 자체적인 트레이드오프가 있습니다. 두 전략을 모두 측정하는 것이 필수적입니다.",
	"results-table.sampleResults": "샘플 결과",
	"results-table.library": "라이브러리",
	"results-table.bundleSize": "번들 크기",
	"results-table.lookupTime": "조회 시간",
	"results-table.lazyLoading": "지연 로딩",
	"understanding-impact.understandingTheImpact": "영향 이해하기",
	"understanding-impact.whyASingleLargeJson": "단일 대형 JSON이 성능을 저해하는 이유",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:",
	"understanding-impact.theJsonMustBeParsed": "JSON은 페이지를 로드할 때마다 구문 분석되어야 하므로 메인 스레드를 차단합니다.",
	"understanding-impact.contextBasedArchitecturesCanCause": "로케일이 변경될 때 컨텍스트 기반 아키텍처는 연쇄적인 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.",
	"understanding-impact.duringServerSideRenderingThe": "서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.",
	"understanding-impact.theTradeOffsOfDynamic": "동적 로딩의 트레이드오프",
	"understanding-impact.splittingTranslationsIntoPerRoute": "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:",
	"understanding-impact.waterfallRequests": "워터폴 요청:",
	"understanding-impact.theAppMustFirstLoad": "앱은 먼저 로드되어 로케일을 결정한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.",
	"understanding-impact.flashOfUntranslatedContentFouc": "번역되지 않은 콘텐츠의 플래시 (FOUC):",
	"understanding-impact.usersMayBrieflySee": "청크가 도착하기 전에 사용자가 번역 키나 폴백 언어를 잠시 볼 수 있습니다.",
	"understanding-impact.cacheInvalidation": "캐시 무효화:",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "번역을 업데이트하려면 변경되지 않은 청크를 다시 다운로드하지 않고 사용자에게 최신 콘텐츠를 제공하기 위한 캐시 버스팅 전략이 필요합니다.",
	"understanding-impact.whatThisBenchmarkMeasures": "이 벤치마크가 측정하는 것",
	"understanding-impact.thisTestAppProvidesA": "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.",
	"about-header.aboutThisBenchmark": "이 벤치마크에 대하여",
	"about-header.thisIsAnOpenSource": "이것은 오픈 소스 테스트 애플리케이션으로, 제품이나 회사가 아닙니다. 유일한 목적은 현실적인 다중 페이지 React 앱을 제공하여 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정하는 것입니다.",
	"about-grid.whyThisExists": "이 프로젝트가 존재하는 이유",
	"about-grid.choosingAnI18nLibraryIs": "i18n 라이브러리 선택은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API의 편의성에 집중하지만 성능 비용을 측정하는 경우는 드뭅니다: 라이브러리가 번들에 얼마나 무게를 추가하는가? 수천 개의 번역 키를 로드할 때 렌더링에 어떤 영향을 미치는가? 지연 로딩이 실제로 도움이 되는가 아니면 비용을 미룰 뿐인가? 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다.",
	"about-grid.methodology": "방법론",
	"about-grid.theSame10PageApp": "동일한 10페이지 앱이 라이브러리당 하나씩 빌드됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer 사용), 로드 지표에 대한 Lighthouse 감사를 실행하며, React Profiler를 사용하여 언어 전환 중의 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 동일한 하드웨어의 CI에서 실행됩니다.",
	"what-we-measure.bundleSizeImpact": "번들 크기 영향",
	"what-we-measure.theAdditionalJavascriptBytesSent": "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
	"what-we-measure.renderingOverhead": "렌더링 오버헤드",
	"what-we-measure.howMuchExtraTimeThe": "라이브러리가 React의 렌더링 주기에 추가하는 여분의 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 다시 렌더링을 유발할 수 있습니다.",
	"what-we-measure.hydrationCost": "하이드레이션 비용",
	"what-we-measure.duringSsrTranslationDataIs": "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대형 사전은 HTML 페이로드를 증가시키고 하이드레이션(페이지가 인터랙티브해지는 순간)을 늦춥니다.",
	"what-we-measure.lazyLoadingEffectiveness": "지연 로딩 효과",
	"what-we-measure.whetherSplittingTranslationsByRoute": "번역을 경로 또는 네임스페이스별로 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)가 발생하는지 측정합니다.",
	"what-we-measure.localeSwitchSpeed": "로케일 전환 속도",
	"what-we-measure.howFastTheAppCan": "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지(새 번역 가져오기, 구성 요소 다시 렌더링, DOM 업데이트 포함) 측정합니다.",
	"what-we-measure.whatWeMeasure": "측정 항목",
	"blog-header.insightsTutorialsAndAnalysisFrom": "i18n 커뮤니티의 통찰력, 튜토리얼 및 분석.",
	"blog-list.comparingI18nLibrariesIn2026": "2026년 i18n 라이브러리 비교: 심층 분석",
	"blog-list.weTested12DifferentInternationalization": "성능, 번들 크기 및 DX에 대해 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과는 다음과 같습니다.",
	"blog-list.howToReduceYourI18n": "i18n 번들을 60% 줄이는 방법",
	"blog-list.march82026": "2026년 3월 8일",
	"blog-list.practicalStrategiesForOptimizingTranslation": "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함한 번역 번들 최적화를 위한 실질적인 전략.",
	"blog-list.theStateOfInternationalizationIn": "React 국제화의 현주소",
	"blog-list.february282026": "2026년 2월 28일",
	"blog-list.anOverviewOfTheCurrent": "트렌드, 새로운 패턴 및 커뮤니티 선호도를 포함한 React의 현재 i18n 생태계 개요.",
	"blog-list.migratingFromReactI18nextTo": "react-i18next에서 Lingui로 마이그레이션",
	"blog-list.february152026": "2026년 2월 15일",
	"blog-list.aStepByStepGuide": "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하기 위한 단계별 가이드.",
	"blog-list.serverComponentsAndI18nWhat": "서버 구성 요소와 i18n: 무엇이 변하는가?",
	"blog-list.february12026": "2026년 2월 1일",
	"blog-list.reactServerComponentsIntroduceNew": "React 서버 구성 요소는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.",
	"blog-list.benchmarkMethodologyHowWeTest": "벤치마크 방법론: 테스트 방법",
	"blog-list.january202026": "2026년 1월 20일",
	"blog-list.aTransparentLookAtOur": "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마크 방법론에 대한 투명한 공개.",
	"blog-list.readMore": "더 읽어보기 →",
	"careers-header.title": "채용",
	"careers-header.joinOurMissionToImprove": "국제화 생태계를 개선하려는 우리의 미션에 동참하세요. 우리는 영향력, 투명성 및 지속적인 학습을 소중히 여기는 원격 우선 팀입니다.",
	"careers-benefits.workFromAnywhereInThe": "전 세계 어디서나 근무 가능",
	"careers-benefits.competitivePay": "경쟁력 있는 급여",
	"careers-benefits.topOfMarketCompensation": "업계 최고 수준의 보상",
	"careers-benefits.openSourceTime": "오픈 소스 기여 시간",
	"open-positions.seniorFrontendEngineer": "시니어 프론트엔드 엔지니어",
	"open-positions.buildAndMaintainOurBenchmarking": "React, TypeScript 및 Vite를 사용하여 벤치마크 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.",
	"open-positions.backendEngineer": "백엔드 엔지니어",
	"open-positions.designAndScaleOurCloud": "매일 수천 개의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
	"open-positions.technicalWriter": "테크니컬 라이터",
	"open-positions.createComprehensiveGuidesApiReferences": "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.",
	"open-positions.devrelEngineer": "DevRel 엔지니어",
	"open-positions.sanFranciscoRemote": "샌프란시스코 / 원격",
	"open-positions.engageWithTheI18nCommunity": "강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.",
	"open-positions.qaEngineer": "QA 엔지니어",
	"open-positions.ensureTheAccuracyAndReliability": "엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.",
	"open-positions.openPositions": "채용 중인 직책",
	"open-positions.applyNow": "지금 지원하기",
	"open-positions.remote": "원격",
	"open-positions.fullTime": "정규직",
	"open-positions.partTime": "파트타임",
	"open-positions.engineering": "엔지니어링",
	"open-positions.documentation": "문서화",
	"open-positions.community": "커뮤니티",
	"contact-header.getInTouch": "문의처",
	"contact-header.haveIdeasFoundABug": "아이디어가 있거나, 버그를 발견했거나, 벤치마크에 기여하고 싶으신가요? 다음으로 문의해 주세요",
	"contact-form.name": "이름",
	"contact-form.yourName": "성함",
	"contact-form.email": "이메일",
	"contact-form.emailPlaceholder": "you@example.com",
	"contact-form.topic": "주제",
	"contact-form.bugReport": "버그 보고",
	"contact-form.newBenchmarkIdea": "새로운 벤치마크 아이디어",
	"contact-form.methodologyQuestion": "방법론 질문",
	"contact-form.contribution": "기여",
	"contact-form.other": "기타",
	"contact-form.message": "메시지",
	"contact-form.describeYourQuestionOrIdea": "질문이나 아이디어를 설명해 주세요...",
	"contact-form.sendMessage": "메시지 보내기",
	"faq-header1.frequentlyAskedQuestions": "자주 묻는 질문",
	"faq-header1.everythingYouNeedToKnow": "i18n Benchmark에 대해 알아야 할 모든 것.",
	"faq-list.whatIsI18nBenchmark": "i18n Benchmark란 무엇인가요?",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmark는 JavaScript 및 React 애플리케이션을 위한 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.",
	"faq-list.howAreBenchmarksConducted": "벤치마크는 어떻게 진행되나요?",
	"faq-list.weRunStandardizedTestsIn": "일관된 하드웨어를 사용하는 격리된 환경에서 표준화된 테스트를 실행합니다. 통계적 유의성을 확보하기 위해 각 벤치마크는 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다.",
	"faq-list.whichLibrariesAreCurrentlySupported": "현재 어떤 라이브러리가 지원되나요?",
	"faq-list.weSupportReactI18nextReact": "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee를 지원합니다.",
	"faq-list.canISubmitMyOwn": "나만의 벤치마크를 제출할 수 있나요?",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "네! 커뮤니티의 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 검토 후 병합할 것입니다.",
	"faq-list.howOftenAreBenchmarksUpdated": "벤치마크는 얼마나 자주 업데이트되나요?",
	"faq-list.weReRunAllBenchmarks": "매주 각 라이브러리의 최신 안정 버전을 사용하여 모든 벤치마크를 다시 실행합니다. 메이저 버전 릴리스 시 즉시 재벤치마크 주기가 트리거됩니다.",
	"faq-list.isTheDataReliable": "데이터가 신뢰할 수 있나요?",
	"faq-list.weFollowRigorousStatisticalMethodology": "웜업 실행, 이상치 탐지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 투명성을 위해 모든 원시 데이터는 분석 결과와 함께 게시됩니다.",
	"faq-list.doYouOfferConsultingServices": "컨설팅 서비스를 제공하나요?",
	"faq-list.yesOurEnterprisePlanIncludes": "네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사용 사례, 규모 및 제약 조건에 따른 맞춤형 권장 사항을 제공할 수 있습니다.",
	"faq-list.howCanIContribute": "어떻게 기여할 수 있나요?",
	"faq-list.thereAreManyWaysTo": "기여할 수 있는 방법은 많습니다: 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원. 자세한 내용은 GitHub 저장소를 방문하세요.",
	"pricing-header.simpleTransparentPricing": "심플하고 투명한 요금제",
	"pricing-header.chooseThePlanThatFits": "팀에 맞는 플랜을 선택하세요. 숨겨진 수수료는 없습니다.",
	"pricing-tiers.starter": "스타터",
	"pricing-tiers.price0": "0 $",
	"pricing-tiers.forever": "영원히",
	"pricing-tiers.benchmarkRunPerDay": "일일 {runs}회 벤치마크 실행",
	"pricing-tiers.librariesNumber": "{libs}개 라이브러리",
	"pricing-tiers.communitySupport": "커뮤니티 지원",
	"pricing-tiers.publicResults": "공개 결과",
	"pricing-tiers.pro": "프로",
	"pricing-tiers.price29": "29 $",
	"pricing-tiers.month": "/월",
	"pricing-tiers.unlimitedRuns": "무제한 실행",
	"pricing-tiers.allLibraries": "모든 라이브러리",
	"pricing-tiers.prioritySupport": "우선 지원",
	"pricing-tiers.privateResults": "비공개 결과",
	"pricing-tiers.ciIntegration": "CI 통합",
	"pricing-tiers.historicalData": "기록 데이터",
	"pricing-tiers.enterprise": "엔터프라이즈",
	"pricing-tiers.customPrice": "커스텀",
	"pricing-tiers.everythingInPro": "프로 플랜의 모든 기능",
	"pricing-tiers.onPremiseOption": "온프레미스 옵션",
	"pricing-tiers.ssoSaml": "SSO 및 SAML",
	"pricing-tiers.dedicatedAccountManager": "전담 계정 관리자",
	"pricing-tiers.customSlas": "커스텀 SLA",
	"pricing-tiers.auditLogs": "감사 로그",
	"pricing-tiers.trainingSessions": "교육 세션",
	"pricing-tiers.contactSales": "영업팀에 문의",
	"pricing-tiers.getStarted": "시작하기",
	"products-header.toolsAndServicesToStreamline": "국제화 워크플로우를 간소화하는 도구 및 서비스.",
	"products-grid.benchmarkCli": "벤치마크 CLI",
	"products-grid.runBenchmarksLocallyFromYour": "터미널에서 로컬로 벤치마크를 실행합니다. 커스텀 구성 및 CI 통합을 지원합니다.",
	"products-grid.benchmarkCloud": "벤치마크 클라우드",
	"products-grid.automatedCloudBasedBenchmarkingWith": "기록 추적, 알림 및 팀 대시보드가 포함된 자동화된 클라우드 기반 벤치마킹.",
	"products-grid.benchmarkEnterprise": "벤치마크 엔터프라이즈",
	"products-grid.onPremiseDeploymentWithSso": "SSO, 감사 로그, 커스텀 SLA 및 전담 지원을 갖춘 온프레미스 배포.",
	"products-grid.contactUs": "문의하기",
	"products-grid.migrationAssistant": "마이그레이션 도우미",
	"products-grid.aiPoweredToolThatHelps": "다운타임 없이 i18n 라이브러리 간의 코드베이스 마이그레이션을 돕는 AI 기반 도구.",
	"products-grid.translationQa": "번역 품질 관리",
	"products-grid.automatedQualityChecksForMissing": "번역 누락, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 검사.",
	"products-grid.bundleOptimizer": "번들 최적화 도구",
	"products-grid.analyzesAndOptimizesYourI18n": "Tree-shaking 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.",
	"products-grid.learnMore": "더 알아보기",
	"team-header.ourTeam": "우리 팀",
	"team-header.meetThePeopleBehindI18n": "i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다.",
	"team-grid.sarahChen": "사라 첸 (Sarah Chen)",
	"team-grid.founderLeadEngineer": "창립자 및 리드 엔지니어",
	"team-grid.formerGoogleEngineerWith10": "전 Google 엔지니어로 대규모 국제화 시스템 구축에 10년의 경험이 있습니다.",
	"team-grid.marcusWeber": "마르쿠스 베버 (Marcus Weber)",
	"team-grid.performanceEngineer": "성능 엔지니어",
	"team-grid.specializesInJavascriptPerformanceOptimization": "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전 Vercel 근무.",
	"team-grid.aishaPatel": "아이샤 파텔 (Aisha Patel)",
	"team-grid.developerAdvocate": "개발자 에반젤리스트",
	"team-grid.passionateAboutDeveloperExperienceAnd": "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext 강연자.",
	"team-grid.tomasRodriguez": "토마스 로드리게스 (Tomás Rodríguez)",
	"team-grid.fullStackDeveloper": "풀스택 개발자",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "벤치마킹 인프라 및 CI/CD 파이프라인 유지 관리. Lingui 오픈 소스 기여자.",
	"team-grid.yukiTanaka": "유키 다나카 (Yuki Tanaka)",
	"team-grid.dataAnalyst": "데이터 분석가",
	"team-grid.ensuresStatisticalRigorInAll": "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용통계학 박사.",
	"team-grid.elenaKowalski": "엘레나 코발스키 (Elena Kowalski)",
	"team-grid.communityManager": "커뮤니티 매니저",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경 보유.",
	"settings-header.manageYourAccountPreferencesAnd": "계정 기본 설정 및 구성을 관리합니다.",
	"profile-section.profile": "프로필",
	"profile-section.displayName": "표시 이름",
	"profile-section.email": "이메일",
	"preferences-section.preferences": "기본 설정",
	"preferences-section.emailNotifications": "이메일 알림",
	"preferences-section.receiveWeeklyBenchmarkReports": "주간 벤치마크 보고서 받기",
	"preferences-section.toggleNotifications": "알림 전환",
	"preferences-section.darkMode": "다크 모드",
	"preferences-section.useDarkColorScheme": "어두운 색상 체계 사용",
	"preferences-section.toggleDarkMode": "다크 모드 전환",
	"preferences-section.defaultLanguage": "기본 언어",
	"preferences-section.englishEn": "영어 (en)",
	"preferences-section.frenchFr": "프랑스어 (fr)",
	"preferences-section.germanDe": "독일어 (de)",
	"preferences-section.spanishEs": "스페인어 (es)",
	"preferences-section.japaneseJa": "일본어 (ja)",
	"preferences-section.chineseSimplifiedZhCn": "중국어 간체 (zh-CN)",
	"preferences-section.arabicAr": "아랍어 (ar)",
	"api-access-section.apiAccess": "API 액세스",
	"api-access-section.apiKey": "API 키",
	"api-access-section.useThisKeyToAccess": "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.",
	"api-access-section.copy": "복사",
	"settings-footer.cancel": "취소",
	"settings-footer.saveChanges": "변경 사항 저장",
	mockBanner
};
//#endregion
export { ko_default as default, mockBanner };
//#region src/messages/pt.json
var mockBanner = "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio ou serviço real.";
var pt_default = {
	"header.home": "Início",
	"header.methodology": "Metodologia",
	"header.mockPages": "Páginas de teste",
	"header.products": "Produtos",
	"header.pricing": "Preços",
	"header.team": "Equipe",
	"header.blog": "Blog",
	"header.careers": "Carreiras",
	"header.faq": "FAQ",
	"header.contact": "Contato",
	"header.settings": "Configurações",
	"header.goToGithub": "Ir para GitHub",
	"footer.resources": "Recursos",
	"footer.contact": "Contato",
	"footer.github": "GitHub",
	"footer.methodology": "Metodologia",
	"footer.contributing": "Contribuir",
	"footer.builtWith": "i18n Benchmark — Projeto de código aberto. Construído com React, Vite e TanStack Router.",
	"footer.anOpenSourceTestApplication": "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
	"route.oopsPageNotFound": "Ops! Página não encontrada",
	"route.returnToHome": "Voltar para o Início",
	"route.couldNotMeasureHydrationDuration": "Não foi possível medir a duración da hidratação:",
	"theme-toggle.themeModeAutoSystemClick": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
	"theme-toggle.themeModeLightClick": "Modo de tema: claro. Clique para mudar para o modo escuro.",
	"theme-toggle.themeModeDarkClick": "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
	"theme-toggle.themeAuto": "Tema: Auto",
	"theme-toggle.themeDark": "Tema: Escuro",
	"theme-toggle.themeLight": "Tema: Claro",
	"hero.aTestApplicationDesignedTo": "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
	"hero.viewResults": "Ver Resultados",
	"why-it-matters.whyTheseMetricsMatter": "Por que essas métricas são importantes",
	"why-it-matters.bundleSize": "Tamanho do Bundle",
	"why-it-matters.theBundleIsTheData": "O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução mesmos.",
	"why-it-matters.renderingHydration": "Renderização e Hidratação",
	"why-it-matters.connectingALargeJsonDictionary": "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
	"why-it-matters.dynamicLoading": "Carregamento Dinâmico",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.",
	"results-table.sampleResults": "Resultados de amostra",
	"results-table.library": "Biblioteca",
	"results-table.bundleSize": "Tamanho do bundle",
	"results-table.lookupTime": "Tempo de consulta",
	"results-table.lazyLoading": "Carregamento lento",
	"understanding-impact.understandingTheImpact": "Entendendo o impacto",
	"understanding-impact.whyASingleLargeJson": "Por que um único JSON grande pode prejudicar o desempenho",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:",
	"understanding-impact.theJsonMustBeParsed": "O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.",
	"understanding-impact.contextBasedArchitecturesCanCause": "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.",
	"understanding-impact.duringServerSideRenderingThe": "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.",
	"understanding-impact.theTradeOffsOfDynamic": "As compensações do carregamento dinâmico",
	"understanding-impact.splittingTranslationsIntoPerRoute": "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:",
	"understanding-impact.waterfallRequests": "Pedidos em cascata:",
	"understanding-impact.theAppMustFirstLoad": "A aplicação deve primeiro carregar, determinar a localidade e depois ir buscar a parte correta — adicionando tempos de viagem da rede.",
	"understanding-impact.flashOfUntranslatedContentFouc": "Flash de conteúdo não traduzido (FOUC):",
	"understanding-impact.usersMayBrieflySee": "Os utilizadores podem ver brevemente as chaves de tradução ou uma língua de recurso antes de a parte chegar.",
	"understanding-impact.cacheInvalidation": "Invalidação da cache:",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "A atualização das traduções requer estratégias de invalidação de cache para garantir que os utilizadores recebam conteúdo novo sem descarregar novamente as partes inalteradas.",
	"understanding-impact.whatThisBenchmarkMeasures": "O que este benchmark mede",
	"understanding-impact.thisTestAppProvidesA": "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.",
	"about-header.aboutThisBenchmark": "Sobre este Benchmark",
	"about-header.thisIsAnOpenSource": "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React multipágina realista, onde diferentes bibliotecas de i18n podem ser integradas e medidas em condições idênticas.",
	"about-grid.whyThisExists": "Por que isso existe",
	"about-grid.choosingAnI18nLibraryIs": "Escolher uma biblioteca de i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas muda o custo? Este benchmark responde a essas perguntas com dados reais.",
	"about-grid.methodology": "Metodologia",
	"about-grid.theSame10PageApp": "O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar os tempos de renderização durante as trocas de locale. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.",
	"what-we-measure.bundleSizeImpact": "Impacto no tamanho do bundle",
	"what-we-measure.theAdditionalJavascriptBytesSent": "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
	"what-we-measure.renderingOverhead": "Sobrecarga de renderização",
	"what-we-measure.howMuchExtraTimeThe": "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de un único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.",
	"what-we-measure.hydrationCost": "Custo de hidratação",
	"what-we-measure.duringSsrTranslationDataIs": "Durante o SSR, os datos de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.",
	"what-we-measure.lazyLoadingEffectiveness": "Eficácia do carregamento lento",
	"what-we-measure.whetherSplittingTranslationsByRoute": "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).",
	"what-we-measure.localeSwitchSpeed": "Velocidade de troca de idioma",
	"what-we-measure.howFastTheAppCan": "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.",
	"what-we-measure.whatWeMeasure": "O que medimos",
	"blog-header.insightsTutorialsAndAnalysisFrom": "Insights, tutoriais e análises da comunidade i18n.",
	"blog-list.comparingI18nLibrariesIn2026": "Comparando bibliotecas i18n em 2026: um mergulho profundo",
	"blog-list.weTested12DifferentInternationalization": "Testamos 12 bibliotecas de internacionalização diferentes em desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.",
	"blog-list.howToReduceYourI18n": "Como reduzir seu bundle i18n em 60%",
	"blog-list.march82026": "8 de março de 2026",
	"blog-list.practicalStrategiesForOptimizingTranslation": "Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.",
	"blog-list.theStateOfInternationalizationIn": "O estado da internacionalização no React",
	"blog-list.february282026": "28 de fevereiro de 2026",
	"blog-list.anOverviewOfTheCurrent": "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.",
	"blog-list.migratingFromReactI18nextTo": "Migrando do react-i18next para o Lingui",
	"blog-list.february152026": "15 de fevereiro de 2026",
	"blog-list.aStepByStepGuide": "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
	"blog-list.serverComponentsAndI18nWhat": "componentes de servidor e i18n: o que muda?",
	"blog-list.february12026": "1 de fevereiro de 2026",
	"blog-list.reactServerComponentsIntroduceNew": "Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.",
	"blog-list.benchmarkMethodologyHowWeTest": "Metodologia de Benchmark: como testamos",
	"blog-list.january202026": "20 de janeiro de 2026",
	"blog-list.aTransparentLookAtOur": "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estadísticos e reprodutibilidade.",
	"blog-list.readMore": "Leia mais →",
	"careers-header.title": "Carreiras",
	"careers-header.joinOurMissionToImprove": "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e que valoriza o impacto, a transparência e o aprendizado contínuo.",
	"careers-benefits.workFromAnywhereInThe": "Trabalhe de qualquer lugar do mundo",
	"careers-benefits.competitivePay": "Pagamento competitivo",
	"careers-benefits.topOfMarketCompensation": "Compensação acima do mercado",
	"careers-benefits.openSourceTime": "Tempo dedicado ao código aberto",
	"open-positions.seniorFrontendEngineer": "Engenheiro Frontend Sênior",
	"open-positions.buildAndMaintainOurBenchmarking": "Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
	"open-positions.backendEngineer": "Engenheiro Backend",
	"open-positions.designAndScaleOurCloud": "Projete e dimensione nossa infraestrutura de benchmarking em nuvem que lida com milhares de execuções automatizadas diariamente.",
	"open-positions.technicalWriter": "Redator Técnico",
	"open-positions.createComprehensiveGuidesApiReferences": "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
	"open-positions.devrelEngineer": "Engenheiro DevRel",
	"open-positions.sanFranciscoRemote": "San Francisco / Remoto",
	"open-positions.engageWithTheI18nCommunity": "Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.",
	"open-positions.qaEngineer": "Engenheiro QA",
	"open-positions.ensureTheAccuracyAndReliability": "Garanta a precisão e a confiabilidade dos resultados dos benchmarks por meio de testes e validações rigorosos.",
	"open-positions.openPositions": "Vagas abertas",
	"open-positions.applyNow": "Candidatar-se agora",
	"open-positions.remote": "Remoto",
	"open-positions.fullTime": "Tempo integral",
	"open-positions.partTime": "Meio período",
	"open-positions.engineering": "Engenharia",
	"open-positions.documentation": "Documentação",
	"open-positions.community": "Comunidade",
	"contact-header.getInTouch": "Entre em contato",
	"contact-header.haveIdeasFoundABug": "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em",
	"contact-form.name": "Nome",
	"contact-form.yourName": "Seu nome",
	"contact-form.email": "E-mail",
	"contact-form.emailPlaceholder": "voce@exemplo.pt",
	"contact-form.topic": "Tópico",
	"contact-form.bugReport": "Relatório de Bug",
	"contact-form.newBenchmarkIdea": "Nova Ideia de Benchmark",
	"contact-form.methodologyQuestion": "Pergunta sobre Metodologia",
	"contact-form.contribution": "Contribuição",
	"contact-form.other": "Outro",
	"contact-form.message": "Mensagem",
	"contact-form.describeYourQuestionOrIdea": "Descreva sua pergunta ou ideia...",
	"contact-form.sendMessage": "Enviar Mensagem",
	"faq-header1.frequentlyAskedQuestions": "Perguntas Frequentes",
	"faq-header1.everythingYouNeedToKnow": "Tudo o que você precisa saber sobre o i18n Benchmark.",
	"faq-list.whatIsI18nBenchmark": "O que é o i18n Benchmark?",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmark é um conjunto de benchmarking de código aberto que mede e compara o desempenho, o tamanho do pacote e a experiência do programador de bibliotecas de internacionalização para aplicações JavaScript e React.",
	"faq-list.howAreBenchmarksConducted": "Como os benchmarks são conduzidos?",
	"faq-list.weRunStandardizedTestsIn": "Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.",
	"faq-list.whichLibrariesAreCurrentlySupported": "Quais bibliotecas são suportadas atualmente?",
	"faq-list.weSupportReactI18nextReact": "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.",
	"faq-list.canISubmitMyOwn": "Posso enviar meus próprios benchmarks?",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "Sim! As submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.",
	"faq-list.howOftenAreBenchmarksUpdated": "Com que frequência os benchmarks são atualizados?",
	"faq-list.weReRunAllBenchmarks": "Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais desencadeiam um ciclo imediato de novos benchmarks.",
	"faq-list.isTheDataReliable": "Os dados são confiáveis?",
	"faq-list.weFollowRigorousStatisticalMethodology": "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.",
	"faq-list.doYouOfferConsultingServices": "Vocês oferecem serviços de consultoria?",
	"faq-list.yesOurEnterprisePlanIncludes": "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicos.",
	"faq-list.howCanIContribute": "Como posso contribuir?",
	"faq-list.thereAreManyWaysTo": "Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório no GitHub para mais detalhes.",
	"pricing-header.simpleTransparentPricing": "Preços Simples e Transparentes",
	"pricing-header.chooseThePlanThatFits": "Escolha o plano que melhor se adapta à sua equipe. Sem taxas ocultas.",
	"pricing-tiers.starter": "Iniciante",
	"pricing-tiers.price0": "0 $",
	"pricing-tiers.forever": "para sempre",
	"pricing-tiers.benchmarkRunPerDay": "{runs} execuções de benchmark/dia",
	"pricing-tiers.librariesNumber": "{libs} bibliotecas",
	"pricing-tiers.communitySupport": "Suporte da comunidade",
	"pricing-tiers.publicResults": "Resultados públicos",
	"pricing-tiers.pro": "Pro",
	"pricing-tiers.price29": "29 $",
	"pricing-tiers.month": "/mês",
	"pricing-tiers.unlimitedRuns": "Execuções ilimitadas",
	"pricing-tiers.allLibraries": "Todas as bibliotecas",
	"pricing-tiers.prioritySupport": "Suporte prioritário",
	"pricing-tiers.privateResults": "Resultados privados",
	"pricing-tiers.ciIntegration": "Integração de CI",
	"pricing-tiers.historicalData": "Dados históricos",
	"pricing-tiers.enterprise": "Personalizado",
	"pricing-tiers.customPrice": "Personalizado",
	"pricing-tiers.everythingInPro": "Tudo no Pro",
	"pricing-tiers.onPremiseOption": "Opção on-premise",
	"pricing-tiers.ssoSaml": "SSO e SAML",
	"pricing-tiers.dedicatedAccountManager": "Gerente de conta dedicado",
	"pricing-tiers.customSlas": "SLAs personalizados",
	"pricing-tiers.auditLogs": "Logs de auditoria",
	"pricing-tiers.trainingSessions": "Sessões de treinamento",
	"pricing-tiers.contactSales": "Contatar Vendas",
	"pricing-tiers.getStarted": "Começar",
	"products-header.toolsAndServicesToStreamline": "Ferramentas e serviços para otimizar seu fluxo de trabalho de internacionalização.",
	"products-grid.benchmarkCli": "CLI do Benchmark",
	"products-grid.runBenchmarksLocallyFromYour": "Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.",
	"products-grid.benchmarkCloud": "Benchmark Cloud",
	"products-grid.automatedCloudBasedBenchmarkingWith": "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.",
	"products-grid.benchmarkEnterprise": "Benchmark Enterprise",
	"products-grid.onPremiseDeploymentWithSso": "Implantação local com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.",
	"products-grid.contactUs": "Contate-nos",
	"products-grid.migrationAssistant": "Assistente de Migração",
	"products-grid.aiPoweredToolThatHelps": "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.",
	"products-grid.translationQa": "QA de Tradução",
	"products-grid.automatedQualityChecksForMissing": "Verificações automáticas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.",
	"products-grid.bundleOptimizer": "Otimizador de Bundle",
	"products-grid.analyzesAndOptimizesYourI18n": "Analiza e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.",
	"products-grid.learnMore": "Saiba mais",
	"team-header.ourTeam": "Nossa Equipe",
	"team-header.meetThePeopleBehindI18n": "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.",
	"team-grid.sarahChen": "Sarah Chen",
	"team-grid.founderLeadEngineer": "Fundadora e Engenheira Líder",
	"team-grid.formerGoogleEngineerWith10": "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.",
	"team-grid.marcusWeber": "Marcus Weber",
	"team-grid.performanceEngineer": "Engenheiro de Performance",
	"team-grid.specializesInJavascriptPerformanceOptimization": "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
	"team-grid.aishaPatel": "Aisha Patel",
	"team-grid.developerAdvocate": "Advogado de Desenvolvedores",
	"team-grid.passionateAboutDeveloperExperienceAnd": "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
	"team-grid.tomasRodriguez": "Tomás Rodríguez",
	"team-grid.fullStackDeveloper": "Desenvolvedor Full-Stack",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Colaborador de código aberto do Lingui.",
	"team-grid.yukiTanaka": "Yuki Tanaka",
	"team-grid.dataAnalyst": "Analista de Dados",
	"team-grid.ensuresStatisticalRigorInAll": "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em Estatística Aplicada pelo MIT.",
	"team-grid.elenaKowalski": "Elena Kowalski",
	"team-grid.communityManager": "Gerente de Comunidade",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.",
	"settings-header.manageYourAccountPreferencesAnd": "Gerencie as suas preferências e configuração da conta.",
	"profile-section.profile": "Perfil",
	"profile-section.displayName": "Nome de exibição",
	"profile-section.email": "E-mail",
	"preferences-section.preferences": "Preferências",
	"preferences-section.emailNotifications": "Notificações por e-mail",
	"preferences-section.receiveWeeklyBenchmarkReports": "Receber relatórios semanais de benchmarks",
	"preferences-section.toggleNotifications": "Alternar notificações",
	"preferences-section.darkMode": "Modo Escuro",
	"preferences-section.useDarkColorScheme": "Usar esquema de cores escuras",
	"preferences-section.toggleDarkMode": "Alternar modo escuro",
	"preferences-section.defaultLanguage": "Idioma Padrão",
	"preferences-section.englishEn": "Inglês (en)",
	"preferences-section.frenchFr": "Francês (fr)",
	"preferences-section.germanDe": "Alemão (de)",
	"preferences-section.spanishEs": "Espanhol (es)",
	"preferences-section.japaneseJa": "Japonês (ja)",
	"preferences-section.chineseSimplifiedZhCn": "Chinês Simplificado (zh-CN)",
	"preferences-section.arabicAr": "Árabe (ar)",
	"api-access-section.apiAccess": "Acesso à API",
	"api-access-section.apiKey": "Chave da API",
	"api-access-section.useThisKeyToAccess": "Utilize esta chave para aceder à API de benchmarking de forma programática.",
	"api-access-section.copy": "Copiar",
	"settings-footer.cancel": "Cancelar",
	"settings-footer.saveChanges": "Guardar alterações",
	mockBanner
};
//#endregion
export { pt_default as default, mockBanner };
//#region src/messages/ru.json
var mockBanner = "⚠️ Эта страница содержит макетные данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой.";
var ru_default = {
	"header.home": "Главная",
	"header.methodology": "Методология",
	"header.mockPages": "Тестовые страницы",
	"header.products": "Продукты",
	"header.pricing": "Цены",
	"header.team": "Команда",
	"header.blog": "Блог",
	"header.careers": "Карьера",
	"header.faq": "FAQ",
	"header.contact": "Контакт",
	"header.settings": "Настройки",
	"header.goToGithub": "Перейти на GitHub",
	"footer.resources": "Ресурсы",
	"footer.contact": "Контакт",
	"footer.github": "GitHub",
	"footer.methodology": "Методология",
	"footer.contributing": "Вклад",
	"footer.builtWith": "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
	"footer.anOpenSourceTestApplication": "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.",
	"route.oopsPageNotFound": "Упс! Страница не найдена",
	"route.returnToHome": "Вернуться на главную",
	"route.couldNotMeasureHydrationDuration": "Не удалось измерить продолжительность гидратации:",
	"theme-toggle.themeModeAutoSystemClick": "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
	"theme-toggle.themeModeLightClick": "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
	"theme-toggle.themeModeDarkClick": "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
	"theme-toggle.themeAuto": "Тема: Авто",
	"theme-toggle.themeDark": "Тема: Темная",
	"theme-toggle.themeLight": "Тема: Светлая",
	"hero.aTestApplicationDesignedTo": "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
	"hero.viewResults": "Посмотреть результаты",
	"why-it-matters.whyTheseMetricsMatter": "Почему эти показатели важны",
	"why-it-matters.bundleSize": "Размер бандла",
	"why-it-matters.theBundleIsTheData": "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.",
	"why-it-matters.renderingHydration": "Рендеринг и гидратация",
	"why-it-matters.connectingALargeJsonDictionary": "Подключение большого JSON-словаря к каждому компоненту создает скрытый зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).",
	"why-it-matters.dynamicLoading": "Динамическая загрузка",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.",
	"results-table.sampleResults": "Примеры результатов",
	"results-table.library": "Библиотека",
	"results-table.bundleSize": "Размер бандла",
	"results-table.lookupTime": "Время поиска",
	"results-table.lazyLoading": "Ленивая загрузка",
	"understanding-impact.understandingTheImpact": "Понимание воздействия",
	"understanding-impact.whyASingleLargeJson": "Почему один большой JSON может повредить производительности",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:",
	"understanding-impact.theJsonMustBeParsed": "JSON должен анализироваться при каждой загрузке страницы — это блокирует основной поток.",
	"understanding-impact.contextBasedArchitecturesCanCause": "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении языка, так как каждый потребитель получает уведомление, даже если его специфические ключи не изменились.",
	"understanding-impact.duringServerSideRenderingThe": "Во время рендеринга на стороне сервера весь словарь сериализуется в полезную нагрузку HTML, увеличивая размер документа, который необходимо загрузить и гидратировать.",
	"understanding-impact.theTradeOffsOfDynamic": "Компромиссы динамической загрузки",
	"understanding-impact.splittingTranslationsIntoPerRoute": "Разделение переводов на фрагменты для каждого маршрута или пространства имен может значительно уменьшить начальную нагрузку. Но это создает новые проблемы:",
	"understanding-impact.waterfallRequests": "Каскадные запросы (waterfall):",
	"understanding-impact.theAppMustFirstLoad": "приложение должно сначала загрузиться, определить локаль, а затем получить нужный фрагмент — это добавляет сетевые циклы.",
	"understanding-impact.flashOfUntranslatedContentFouc": "Мерцание непереведенного контента (FOUC):",
	"understanding-impact.usersMayBrieflySee": "пользователи могут ненадолго увидеть ключи перевода или резервный язык до прибытия фрагмента.",
	"understanding-impact.cacheInvalidation": "Инвалидация кэша:",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных фрагментов.",
	"understanding-impact.whatThisBenchmarkMeasures": "Что измеряет этот бенчмарк",
	"understanding-impact.thisTestAppProvidesA": "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют в ваш JavaScript-бандл, время, затраченное на синтаксический анализ и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сравнимы.",
	"about-header.aboutThisBenchmark": "Об этом бенчмарке",
	"about-header.thisIsAnOpenSource": "Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.",
	"about-grid.whyThisExists": "Почему это существует",
	"about-grid.choosingAnI18nLibraryIs": "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.",
	"about-grid.methodology": "Методология",
	"about-grid.theSame10PageApp": "Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов.",
	"what-we-measure.bundleSizeImpact": "Влияние на размер бандла",
	"what-we-measure.theAdditionalJavascriptBytesSent": "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.",
	"what-we-measure.renderingOverhead": "Затраты на рендеринг",
	"what-we-measure.howMuchExtraTimeThe": "Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.",
	"what-we-measure.hydrationCost": "Стоимость гидратации",
	"what-we-measure.duringSsrTranslationDataIs": "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.",
	"what-we-measure.lazyLoadingEffectiveness": "Эффективность ленивой загрузки",
	"what-we-measure.whetherSplittingTranslationsByRoute": "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).",
	"what-we-measure.localeSwitchSpeed": "Скорость переключения языка",
	"what-we-measure.howFastTheAppCan": "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
	"what-we-measure.whatWeMeasure": "Что мы измеряем",
	"blog-header.insightsTutorialsAndAnalysisFrom": "Инсайты, руководства и анализ от сообщества i18n.",
	"blog-list.comparingI18nLibrariesIn2026": "Сравнение библиотек i18n в 2026 году: глубокое погружение",
	"blog-list.weTested12DifferentInternationalization": "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.",
	"blog-list.howToReduceYourI18n": "Как уменьшить бандл i18n на 60%",
	"blog-list.march82026": "8 марта 2026 года",
	"blog-list.practicalStrategiesForOptimizingTranslation": "Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.",
	"blog-list.theStateOfInternationalizationIn": "Состояние интернационализации в React",
	"blog-list.february282026": "28 февраля 2026 года",
	"blog-list.anOverviewOfTheCurrent": "Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.",
	"blog-list.migratingFromReactI18nextTo": "Миграция с react-i18next на Lingui",
	"blog-list.february152026": "15 февраля 2026 года",
	"blog-list.aStepByStepGuide": "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.",
	"blog-list.serverComponentsAndI18nWhat": "Server Components и i18n: что меняется?",
	"blog-list.february12026": "1 февраля 2026 года",
	"blog-list.reactServerComponentsIntroduceNew": "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.",
	"blog-list.benchmarkMethodologyHowWeTest": "Методология бенчмарка: как мы тестируем",
	"blog-list.january202026": "20 января 2026 года",
	"blog-list.aTransparentLookAtOur": "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.",
	"blog-list.readMore": "Читать далее →",
	"careers-header.title": "Карьера",
	"careers-header.joinOurMissionToImprove": "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы команда, работающая удаленно, которая ценит влияние, прозрачность и непрерывное обучение.",
	"careers-benefits.workFromAnywhereInThe": "Работайте из любой точки мира",
	"careers-benefits.competitivePay": "Конкурентоспособная оплата",
	"careers-benefits.topOfMarketCompensation": "Компенсация выше рыночной",
	"careers-benefits.openSourceTime": "Время на open source",
	"open-positions.seniorFrontendEngineer": "Старший фронтенд-инженер",
	"open-positions.buildAndMaintainOurBenchmarking": "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.",
	"open-positions.backendEngineer": "Бэкенд-инженер",
	"open-positions.designAndScaleOurCloud": "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.",
	"open-positions.technicalWriter": "Технический писатель",
	"open-positions.createComprehensiveGuidesApiReferences": "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.",
	"open-positions.devrelEngineer": "DevRel-инженер",
	"open-positions.sanFranciscoRemote": "Сан-Франциско / Удаленно",
	"open-positions.engageWithTheI18nCommunity": "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.",
	"open-positions.qaEngineer": "QA-инженер",
	"open-positions.ensureTheAccuracyAndReliability": "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.",
	"open-positions.openPositions": "Открытые вакансии",
	"open-positions.applyNow": "Подать заявку",
	"open-positions.remote": "Удаленно",
	"open-positions.fullTime": "Полный рабочий день",
	"open-positions.partTime": "Неполный рабочий день",
	"open-positions.engineering": "Разработка",
	"open-positions.documentation": "Документация",
	"open-positions.community": "Сообщество",
	"contact-header.getInTouch": "Связаться с нами",
	"contact-header.haveIdeasFoundABug": "Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами по адресу",
	"contact-form.name": "Имя",
	"contact-form.yourName": "Ваше имя",
	"contact-form.email": "Email",
	"contact-form.emailPlaceholder": "you@example.com",
	"contact-form.topic": "Тема",
	"contact-form.bugReport": "Отчет об ошибке",
	"contact-form.newBenchmarkIdea": "Новая идея для бенчмарка",
	"contact-form.methodologyQuestion": "Вопрос по методологии",
	"contact-form.contribution": "Вклад",
	"contact-form.other": "Другое",
	"contact-form.message": "Сообщение",
	"contact-form.describeYourQuestionOrIdea": "Опишите ваш вопрос или идею...",
	"contact-form.sendMessage": "Отправить сообщение",
	"faq-header1.frequentlyAskedQuestions": "Часто задаваемые вопросы",
	"faq-header1.everythingYouNeedToKnow": "Все, что вам нужно знать об i18n Benchmark.",
	"faq-list.whatIsI18nBenchmark": "Что такое i18n Benchmark ?",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmark — это набор тестов с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений JavaScript и React.",
	"faq-list.howAreBenchmarksConducted": "Как проводятся бенчмарки ?",
	"faq-list.weRunStandardizedTestsIn": "Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.",
	"faq-list.whichLibrariesAreCurrentlySupported": "Какие библиотеки поддерживаются в настоящее время ?",
	"faq-list.weSupportReactI18nextReact": "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.",
	"faq-list.canISubmitMyOwn": "Могу ли я отправить свои собственные бенчмарки ?",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.",
	"faq-list.howOftenAreBenchmarksUpdated": "Как часто обновляются бенчмарки ?",
	"faq-list.weReRunAllBenchmarks": "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.",
	"faq-list.isTheDataReliable": "Надежны ли данные ?",
	"faq-list.weFollowRigorousStatisticalMethodology": "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.",
	"faq-list.doYouOfferConsultingServices": "Предлагаете ли вы консультационные услуги ?",
	"faq-list.yesOurEnterprisePlanIncludes": "Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.",
	"faq-list.howCanIContribute": "Как я могу помочь ?",
	"faq-list.thereAreManyWaysTo": "Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации.",
	"pricing-header.simpleTransparentPricing": "Простое и прозрачное ценообразование",
	"pricing-header.chooseThePlanThatFits": "Выберите план, который подходит вашей команде. Никаких скрытых комиссий.",
	"pricing-tiers.starter": "Starter",
	"pricing-tiers.price0": "0 $",
	"pricing-tiers.forever": "навсегда",
	"pricing-tiers.benchmarkRunPerDay": "{runs} запусков бенчмарка в день",
	"pricing-tiers.librariesNumber": "{libs} библиотек",
	"pricing-tiers.communitySupport": "Сообщество поддержки",
	"pricing-tiers.publicResults": "Публичные результаты",
	"pricing-tiers.pro": "Pro",
	"pricing-tiers.price29": "29 $",
	"pricing-tiers.month": "/месяц",
	"pricing-tiers.unlimitedRuns": "Неограниченное количество запусков",
	"pricing-tiers.allLibraries": "Все библиотеки",
	"pricing-tiers.prioritySupport": "Приоритетная поддержка",
	"pricing-tiers.privateResults": "Приватные результаты",
	"pricing-tiers.ciIntegration": "Интеграция с CI",
	"pricing-tiers.historicalData": "Исторические данные",
	"pricing-tiers.enterprise": "Корпоративный",
	"pricing-tiers.customPrice": "Индивидуальная цена",
	"pricing-tiers.everythingInPro": "Все возможности Pro",
	"pricing-tiers.onPremiseOption": "Локальное развертывание",
	"pricing-tiers.ssoSaml": "SSO и SAML",
	"pricing-tiers.dedicatedAccountManager": "Выделенный менеджер",
	"pricing-tiers.customSlas": "Индивидуальные SLA",
	"pricing-tiers.auditLogs": "Журналы аудита",
	"pricing-tiers.trainingSessions": "Сессии обучения",
	"pricing-tiers.contactSales": "Связаться с отделом продаж",
	"pricing-tiers.getStarted": "Начать",
	"products-header.toolsAndServicesToStreamline": "Инструменты и услуги для оптимизации рабочего процесса интернационализации.",
	"products-grid.benchmarkCli": "CLI для бенчмаркинга",
	"products-grid.runBenchmarksLocallyFromYour": "Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.",
	"products-grid.benchmarkCloud": "Облачный бенчмаркинг",
	"products-grid.automatedCloudBasedBenchmarkingWith": "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.",
	"products-grid.benchmarkEnterprise": "Корпоративный бенчмаркинг",
	"products-grid.onPremiseDeploymentWithSso": "Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.",
	"products-grid.contactUs": "Связаться с нами",
	"products-grid.migrationAssistant": "Помощник по миграции",
	"products-grid.aiPoweredToolThatHelps": "Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.",
	"products-grid.translationQa": "Контроль качества перевода",
	"products-grid.automatedQualityChecksForMissing": "Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.",
	"products-grid.bundleOptimizer": "Оптимизатор бандлов",
	"products-grid.analyzesAndOptimizesYourI18n": "Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.",
	"products-grid.learnMore": "Узнать больше",
	"team-header.ourTeam": "Наша команда",
	"team-header.meetThePeopleBehindI18n": "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков.",
	"team-grid.sarahChen": "Сара Чен (Sarah Chen)",
	"team-grid.founderLeadEngineer": "Основатель и ведущий инженер",
	"team-grid.formerGoogleEngineerWith10": "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.",
	"team-grid.marcusWeber": "Маркус Вебер (Marcus Weber)",
	"team-grid.performanceEngineer": "Инженер по производительности",
	"team-grid.specializesInJavascriptPerformanceOptimization": "Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.",
	"team-grid.aishaPatel": "Айша Патель (Aisha Patel)",
	"team-grid.developerAdvocate": "Адвокат разработчиков",
	"team-grid.passionateAboutDeveloperExperienceAnd": "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.",
	"team-grid.tomasRodriguez": "Томас Родригес (Tomás Rodríguez)",
	"team-grid.fullStackDeveloper": "Фулстек-разработчик",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.",
	"team-grid.yukiTanaka": "Юки Танака (Yuki Tanaka)",
	"team-grid.dataAnalyst": "Аналитик данных",
	"team-grid.ensuresStatisticalRigorInAll": "Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.",
	"team-grid.elenaKowalski": "Елена Ковальски (Elena Kowalski)",
	"team-grid.communityManager": "Комьюнити-менеджер",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.",
	"settings-header.manageYourAccountPreferencesAnd": "Управляйте настройками вашего аккаунта и конфигурацией.",
	"profile-section.profile": "Профиль",
	"profile-section.displayName": "Отображаемое имя",
	"profile-section.email": "Email",
	"preferences-section.preferences": "Предпочтения",
	"preferences-section.emailNotifications": "Email-уведомления",
	"preferences-section.receiveWeeklyBenchmarkReports": "Получать еженедельные отчеты о бенчмарках",
	"preferences-section.toggleNotifications": "Переключить уведомления",
	"preferences-section.darkMode": "Темная тема",
	"preferences-section.useDarkColorScheme": "Использовать темную цветовую схему",
	"preferences-section.toggleDarkMode": "Переключить темную тему",
	"preferences-section.defaultLanguage": "Язык по умолчанию",
	"preferences-section.englishEn": "Английский (en)",
	"preferences-section.frenchFr": "Французский (fr)",
	"preferences-section.germanDe": "Немецкий (de)",
	"preferences-section.spanishEs": "Испанский (es)",
	"preferences-section.japaneseJa": "Японский (ja)",
	"preferences-section.chineseSimplifiedZhCn": "Китайский упрощенный (zh-CN)",
	"preferences-section.arabicAr": "Арабский (ar)",
	"api-access-section.apiAccess": "Доступ к API",
	"api-access-section.apiKey": "Ключ API",
	"api-access-section.useThisKeyToAccess": "Используйте этот ключ для программного доступа к API бенчмарков.",
	"api-access-section.copy": "Копировать",
	"settings-footer.cancel": "Отмена",
	"settings-footer.saveChanges": "Сохранить изменения",
	mockBanner
};
//#endregion
export { ru_default as default, mockBanner };
//#region src/messages/zh.json
var mockBanner = "⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。";
var zh_default = {
	"header.home": "首页",
	"header.methodology": "方法学",
	"header.mockPages": "模拟页面",
	"header.products": "产品",
	"header.pricing": "价格",
	"header.team": "团队",
	"header.blog": "博客",
	"header.careers": "职业",
	"header.faq": "常见问题",
	"header.contact": "联系我们",
	"header.settings": "设置",
	"header.goToGithub": "前往 GitHub",
	"footer.resources": "资源",
	"footer.contact": "联系",
	"footer.github": "GitHub",
	"footer.methodology": "方法论",
	"footer.contributing": "贡献",
	"footer.builtWith": "i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。",
	"footer.anOpenSourceTestApplication": "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。",
	"route.oopsPageNotFound": "糟糕！找不到页面",
	"route.returnToHome": "返回首页",
	"route.couldNotMeasureHydrationDuration": "无法测量注水时长：",
	"theme-toggle.themeModeAutoSystemClick": "主题模式：自动（系统）。点击切换到浅色模式。",
	"theme-toggle.themeModeLightClick": "主题模式：浅色。点击切换到深色模式。",
	"theme-toggle.themeModeDarkClick": "主题模式：深色。点击切换到自动（系统）模式。",
	"theme-toggle.themeAuto": "主题：自动",
	"theme-toggle.themeDark": "主题：深色",
	"theme-toggle.themeLight": "主题：浅色",
	"hero.aTestApplicationDesignedTo": "一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。",
	"hero.viewResults": "查看结果",
	"why-it-matters.whyTheseMetricsMatter": "为什么这些指标很重要",
	"why-it-matters.bundleSize": "包大小",
	"why-it-matters.theBundleIsTheData": "Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。",
	"why-it-matters.renderingHydration": "渲染与注水",
	"why-it-matters.connectingALargeJsonDictionary": "将大型 JSON 字典连接 to 每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。",
	"why-it-matters.dynamicLoading": "动态加载",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。",
	"results-table.sampleResults": "样本结果",
	"results-table.library": "库",
	"results-table.bundleSize": "包大小",
	"results-table.lookupTime": "查询时间",
	"results-table.lazyLoading": "延迟加载",
	"understanding-impact.understandingTheImpact": "理解影响",
	"understanding-impact.whyASingleLargeJson": "为什么单个大型 JSON 会损害性能",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：",
	"understanding-impact.theJsonMustBeParsed": "JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。",
	"understanding-impact.contextBasedArchitecturesCanCause": "当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。",
	"understanding-impact.duringServerSideRenderingThe": "在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。",
	"understanding-impact.theTradeOffsOfDynamic": "动态加载的权衡",
	"understanding-impact.splittingTranslationsIntoPerRoute": "将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：",
	"understanding-impact.waterfallRequests": "瀑布请求：",
	"understanding-impact.theAppMustFirstLoad": "应用必须先加载，确定本地化，然后获取正确的块 —— 增加了网络往返时间。",
	"understanding-impact.flashOfUntranslatedContentFouc": "未翻译内容闪烁 (FOUC)：",
	"understanding-impact.usersMayBrieflySee": "用户可能会在块到达之前短暂看到翻译键或回退语言。",
	"understanding-impact.cacheInvalidation": "缓存失效：",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "更新翻译需要缓存刷新策略，以确保用户获取最新内容，而无需重新下载未更改的块。",
	"understanding-impact.whatThisBenchmarkMeasures": "此基准测试测量什么",
	"understanding-impact.thisTestAppProvidesA": "此测试应用提供了一个受控环境 —— 10 个具有现实内容个页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。",
	"about-header.aboutThisBenchmark": "关于此基准测试",
	"about-header.thisIsAnOpenSource": "这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。",
	"about-grid.whyThisExists": "为什么存在这个项目",
	"about-grid.choosingAnI18nLibraryIs": "选择 i18n 库是一个具有长期影响的架构决策。大多数比较都侧重于 API 的易用性，但很少有人衡量性能成本：该库为包增加了多少权重？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。",
	"about-grid.methodology": "方法学",
	"about-grid.theSame10PageApp": "每个库都构建一次相同的 10 页应用程序。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核以获取加载指标，并使用 React Profiler 捕获本地切换期间的渲染时间。所有测试都在具有相同硬件的 CI 上运行，以确保结果可重现。",
	"what-we-measure.bundleSizeImpact": "包大小影响",
	"what-we-measure.theAdditionalJavascriptBytesSent": "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。",
	"what-we-measure.renderingOverhead": "渲染开销",
	"what-we-measure.howMuchExtraTimeThe": "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。",
	"what-we-measure.hydrationCost": "注水成本",
	"what-we-measure.duringSsrTranslationDataIs": "在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。",
	"what-we-measure.lazyLoadingEffectiveness": "延迟加载有效性",
	"what-we-measure.whetherSplittingTranslationsByRoute": "按路线或命名空间拆分翻译是否真的能减少初始负载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。",
	"what-we-measure.localeSwitchSpeed": "本地语言切换速度",
	"what-we-measure.howFastTheAppCan": "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
	"what-we-measure.whatWeMeasure": "我们测量什么",
	"blog-header.insightsTutorialsAndAnalysisFrom": "来自 i18n 社区 de 见解、教程和分析。",
	"blog-list.comparingI18nLibrariesIn2026": "2026 年 i18n 库对比：深度分析",
	"blog-list.weTested12DifferentInternationalization": "我们针对性能、包大小和 DX 测试了 12 种不同的国际化库。以下是令人惊讶的结果。",
	"blog-list.howToReduceYourI18n": "如何将 i18n 包大小减少 60%",
	"blog-list.march82026": "2026年3月8日",
	"blog-list.practicalStrategiesForOptimizingTranslation": "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。",
	"blog-list.theStateOfInternationalizationIn": "React 国际化的现状",
	"blog-list.february282026": "2026年2月28日",
	"blog-list.anOverviewOfTheCurrent": "React 当前 i18n 生态系统概览，涵盖趋势、新兴模式和社区偏好。",
	"blog-list.migratingFromReactI18nextTo": "从 react-i18next 迁移到 Lingui",
	"blog-list.february152026": "2026年2月15日",
	"blog-list.aStepByStepGuide": "从 react-i18next 迁移拥有 50,000 个翻译键的生产应用程序到 Lingui 的逐步指南。",
	"blog-list.serverComponentsAndI18nWhat": "服务器组件和 i18n：有什么变化？",
	"blog-list.february12026": "2026年2月1日",
	"blog-list.reactServerComponentsIntroduceNew": "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。",
	"blog-list.benchmarkMethodologyHowWeTest": "基准测试方法学：我们如何测试",
	"blog-list.january202026": "2026年1月20日",
	"blog-list.aTransparentLookAtOur": "透明地了解我们的基准测试方法，包括测试环境、统计方法和可重现性。",
	"blog-list.readMore": "阅读更多 →",
	"careers-header.title": "职业",
	"careers-header.joinOurMissionToImprove": "加入我们改善国际化生态系统的使命。我们是一个远程优先的团队，重视影响力、透明度和持续学习。",
	"careers-benefits.workFromAnywhereInThe": "在全球任何地方工作",
	"careers-benefits.competitivePay": "有竞争力的薪酬",
	"careers-benefits.topOfMarketCompensation": "市场顶级薪酬",
	"careers-benefits.openSourceTime": "开源贡献时间",
	"open-positions.seniorFrontendEngineer": "高级前端工程师",
	"open-positions.buildAndMaintainOurBenchmarking": "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。",
	"open-positions.backendEngineer": "后端工程师",
	"open-positions.designAndScaleOurCloud": "设计并扩展我们的云基准测试基础架构，每天处理数千次自动化运行。",
	"open-positions.technicalWriter": "技术文档工程师",
	"open-positions.createComprehensiveGuidesApiReferences": "为我们的基准测试平台创建全面的指南、API 参考和教程。",
	"open-positions.devrelEngineer": "开发者关系工程师",
	"open-positions.sanFranciscoRemote": "旧金山 / 远程",
	"open-positions.engageWithTheI18nCommunity": "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。",
	"open-positions.qaEngineer": "测试工程师",
	"open-positions.ensureTheAccuracyAndReliability": "通过严格的测试 and 验证，确保基准测试结果的准确性和可靠性。",
	"open-positions.openPositions": "开放职位",
	"open-positions.applyNow": "立即申请",
	"open-positions.remote": "远程",
	"open-positions.fullTime": "全职",
	"open-positions.partTime": "兼职",
	"open-positions.engineering": "工程",
	"open-positions.documentation": "文档",
	"open-positions.community": "社区",
	"contact-header.getInTouch": "联系我们",
	"contact-header.haveIdeasFoundABug": "有想法、发现了错误或想贡献基准测试？请通过以下方式联系我们",
	"contact-form.name": "姓名",
	"contact-form.yourName": "您的姓名",
	"contact-form.email": "电子邮件",
	"contact-form.emailPlaceholder": "you@example.com",
	"contact-form.topic": "主题",
	"contact-form.bugReport": "错误报告",
	"contact-form.newBenchmarkIdea": "新基准测试想法",
	"contact-form.methodologyQuestion": "方法论问题",
	"contact-form.contribution": "贡献",
	"contact-form.other": "其他",
	"contact-form.message": "留言",
	"contact-form.describeYourQuestionOrIdea": "描述您的问题或想法...",
	"contact-form.sendMessage": "发送消息",
	"faq-header1.frequentlyAskedQuestions": "常见问题",
	"faq-header1.everythingYouNeedToKnow": "您需要了解的有关 i18n Benchmark 的一切。",
	"faq-list.whatIsI18nBenchmark": "什么是 i18n Benchmark？",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用的国际化库的性能、包大小和开发人员体验。",
	"faq-list.howAreBenchmarksConducted": "如何进行基准测试？",
	"faq-list.weRunStandardizedTestsIn": "我们在隔离的环境中使用一致的硬件运行标准化测试。每个基准测试都重复多次，以确保统计学意义。所有测试配置都可以在我们的 GitHub 存储库中公开获得。",
	"faq-list.whichLibrariesAreCurrentlySupported": "目前支持哪些库？",
	"faq-list.weSupportReactI18nextReact": "我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。",
	"faq-list.canISubmitMyOwn": "我可以提交自己的基准测试吗？",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审查并合并合格的提交。",
	"faq-list.howOftenAreBenchmarksUpdated": "基准测试多久更新一次？",
	"faq-list.weReRunAllBenchmarks": "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会触发立即重新进行基准测试。",
	"faq-list.isTheDataReliable": "数据可靠吗？",
	"faq-list.weFollowRigorousStatisticalMethodology": "我们遵循严格的统计方法，包括热身运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。",
	"faq-list.doYouOfferConsultingServices": "你们提供咨询服务吗？",
	"faq-list.yesOurEnterprisePlanIncludes": "是的，我们的企业版计划包括为评估 i18n 解决方案的团队提供的咨询时间。我们可以根据您的具体用例、规模和约束提供定制建议。",
	"faq-list.howCanIContribute": "我该如何贡献？",
	"faq-list.thereAreManyWaysTo": "有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。",
	"pricing-header.simpleTransparentPricing": "简单透明的定价",
	"pricing-header.chooseThePlanThatFits": "选择适合您团队的计划。无隐藏费用。",
	"pricing-tiers.starter": "入门版",
	"pricing-tiers.price0": "0 $",
	"pricing-tiers.forever": "永久",
	"pricing-tiers.benchmarkRunPerDay": "每天 {runs} 次基准测试运行",
	"pricing-tiers.librariesNumber": "{libs} 个库",
	"pricing-tiers.communitySupport": "社区支持",
	"pricing-tiers.publicResults": "公共结果",
	"pricing-tiers.pro": "专业版",
	"pricing-tiers.price29": "29 $",
	"pricing-tiers.month": "/月",
	"pricing-tiers.unlimitedRuns": "无限运行",
	"pricing-tiers.allLibraries": "所有库",
	"pricing-tiers.prioritySupport": "优先支持",
	"pricing-tiers.privateResults": "私人结果",
	"pricing-tiers.ciIntegration": "CI 集成",
	"pricing-tiers.historicalData": "历史数据",
	"pricing-tiers.enterprise": "企业版",
	"pricing-tiers.customPrice": "定制",
	"pricing-tiers.everythingInPro": "包含专业版中的一切",
	"pricing-tiers.onPremiseOption": "本地部署选项",
	"pricing-tiers.ssoSaml": "SSO 和 SAML",
	"pricing-tiers.dedicatedAccountManager": "专属大客户经理",
	"pricing-tiers.customSlas": "定制 SLA",
	"pricing-tiers.auditLogs": "审核日志",
	"pricing-tiers.trainingSessions": "培训课程",
	"pricing-tiers.contactSales": "联系销售人员",
	"pricing-tiers.getStarted": "开始使用",
	"products-header.toolsAndServicesToStreamline": "简化国际化工作流程的工具和服务。",
	"products-grid.benchmarkCli": "基准测试 CLI",
	"products-grid.runBenchmarksLocallyFromYour": "在终端本地运行基准测试。支持自定义配置和 CI 集成。",
	"products-grid.benchmarkCloud": "基准测试云",
	"products-grid.automatedCloudBasedBenchmarkingWith": "基于云的自动化基准测试，具有历史跟踪、警报和团队仪表板。",
	"products-grid.benchmarkEnterprise": "基准测试企业版",
	"products-grid.onPremiseDeploymentWithSso": "采用 SSO、审核日志、自定义 SLA 和专用支持的本地部署。",
	"products-grid.contactUs": "联系我们",
	"products-grid.migrationAssistant": "迁移助手",
	"products-grid.aiPoweredToolThatHelps": "由人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机时间。",
	"products-grid.translationQa": "翻译质量保证",
	"products-grid.automatedQualityChecksForMissing": "针对缺失翻译、复数问题和上下文错误的自动化质量检查。",
	"products-grid.bundleOptimizer": "包优化器",
	"products-grid.analyzesAndOptimizesYourI18n": "通过摇树优化和代码拆分，分析并在生产环境中优化 i18n 包。",
	"products-grid.learnMore": "了解更多",
	"team-header.ourTeam": "我们的团队",
	"team-header.meetThePeopleBehindI18n": "认识 i18n Benchmark 背后的团队。一支多元化的团队，因为对优秀开发人员工具的共同热情而团结在一起。",
	"team-grid.sarahChen": "陈莎拉 (Sarah Chen)",
	"team-grid.founderLeadEngineer": "创始人兼首席工程师",
	"team-grid.formerGoogleEngineerWith10": "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。",
	"team-grid.marcusWeber": "马库斯·韦伯 (Marcus Weber)",
	"team-grid.performanceEngineer": "性能工程师",
	"team-grid.specializesInJavascriptPerformanceOptimization": "专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。",
	"team-grid.aishaPatel": "艾莎·帕特尔 (Aisha Patel)",
	"team-grid.developerAdvocate": "开发者倡导者",
	"team-grid.passionateAboutDeveloperExperienceAnd": "热爱开发者体验和教育。React Conf、JSConf 和 i18nNext 的演讲者。",
	"team-grid.tomasRodriguez": "托马斯·罗德里格斯 (Tomás Rodríguez)",
	"team-grid.fullStackDeveloper": "全栈开发人员",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "维护基准测试基础架构和 CI/CD 流水线。Lingui 的开源贡献者。",
	"team-grid.yukiTanaka": "田中由纪 (Yuki Tanaka)",
	"team-grid.dataAnalyst": "数据分析师",
	"team-grid.ensuresStatisticalRigorInAll": "确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。",
	"team-grid.elenaKowalski": "埃琳娜·科瓦尔斯基 (Elena Kowalski)",
	"team-grid.communityManager": "社区经理",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。",
	"settings-header.manageYourAccountPreferencesAnd": "管理您的账户偏好和配置。",
	"profile-section.profile": "个人资料",
	"profile-section.displayName": "显示名称",
	"profile-section.email": "电子邮件",
	"preferences-section.preferences": "偏好设置",
	"preferences-section.emailNotifications": "邮件通知",
	"preferences-section.receiveWeeklyBenchmarkReports": "接收每周基准测试报告",
	"preferences-section.toggleNotifications": "切换通知",
	"preferences-section.darkMode": "深色模式",
	"preferences-section.useDarkColorScheme": "使用深色配色方案",
	"preferences-section.toggleDarkMode": "切换深色模式",
	"preferences-section.defaultLanguage": "默认语言",
	"preferences-section.englishEn": "英语 (en)",
	"preferences-section.frenchFr": "法语 (fr)",
	"preferences-section.germanDe": "德语 (de)",
	"preferences-section.spanishEs": "西班牙语 (es)",
	"preferences-section.japaneseJa": "日语 (ja)",
	"preferences-section.chineseSimplifiedZhCn": "中文简体 (zh-CN)",
	"preferences-section.arabicAr": "阿拉伯语 (ar)",
	"api-access-section.apiAccess": "API 访问",
	"api-access-section.apiKey": "API 密钥",
	"api-access-section.useThisKeyToAccess": "使用此密钥以编程方式访问基准测试 API。",
	"api-access-section.copy": "复制",
	"settings-footer.cancel": "取消",
	"settings-footer.saveChanges": "保存更改",
	mockBanner
};
//#endregion
export { zh_default as default, mockBanner };

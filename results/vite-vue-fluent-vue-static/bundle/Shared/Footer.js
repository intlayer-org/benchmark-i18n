import * as Vue from "vue";
import { Fragment, computed, createBlock, createElementBlock, createElementVNode, createTextVNode, defineComponent, getCurrentInstance, h, openBlock, renderList, renderSlot, resolveComponent, toDisplayString, withCtx } from "vue";
import { useRoute } from "vue-router";
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$2 = Object.getOwnPropertyNames;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp$2(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp$2(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps$2 = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames$2(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp$2.call(to, key) && key !== except) __defProp$2(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc$2(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps$2(target, mod, "default"), secondTarget && __copyProps$2(secondTarget, mod, "default"));
function segmentToKebab(segment) {
	return segment.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function dottedKeyToFluentId(dottedKey) {
	return dottedKey.split(".").map(segmentToKebab).join("-");
}
function useFluentDottedT() {
	const proxy = getCurrentInstance()?.proxy;
	const td = (dottedVueI18nKey, params) => {
		if (!proxy) throw new Error("useFluentDottedT must be used during setup()");
		return proxy.$t(dottedKeyToFluentId(dottedVueI18nKey), params ?? {});
	};
	return { td };
}
var Footer_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "Footer",
	setup(__props, { expose: __expose }) {
		__expose();
		const { td } = useFluentDottedT();
		const route = useRoute();
		const currentLocale = computed(() => route.params.locale || "en");
		const __returned__ = {
			td,
			route,
			currentLocale,
			footerLinks: computed(() => [
				{
					label: td("footer.github"),
					href: "https://github.com/intlayer-org/benchmark-i18n",
					isInternal: false
				},
				{
					label: td("footer.methodology"),
					to: `/${currentLocale.value}/about`,
					isInternal: true
				},
				{
					label: td("footer.contributing"),
					to: `/${currentLocale.value}/contact`,
					isInternal: true
				}
			])
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var FluentType = class {
	constructor(value) {
		this.value = value;
	}
	valueOf() {
		return this.value;
	}
};
var FluentNone = class extends FluentType {
	constructor(value = "???") {
		super(value);
	}
	toString(scope) {
		return `{${this.value}}`;
	}
};
var FluentNumber = class extends FluentType {
	constructor(value, opts = {}) {
		super(value);
		this.opts = opts;
	}
	toString(scope) {
		if (scope) try {
			return scope.memoizeIntlObject(Intl.NumberFormat, this.opts).format(this.value);
		} catch (err) {
			scope.reportError(err);
		}
		return this.value.toString(10);
	}
};
var FluentDateTime = class FluentDateTime extends FluentType {
	static supportsValue(value) {
		if (typeof value === "number") return true;
		if (value instanceof Date) return true;
		if (value instanceof FluentType) return FluentDateTime.supportsValue(value.valueOf());
		if ("Temporal" in globalThis) {
			const _Temporal = globalThis.Temporal;
			if (value instanceof _Temporal.Instant || value instanceof _Temporal.PlainDateTime || value instanceof _Temporal.PlainDate || value instanceof _Temporal.PlainMonthDay || value instanceof _Temporal.PlainTime || value instanceof _Temporal.PlainYearMonth) return true;
		}
		return false;
	}
	constructor(value, opts = {}) {
		if (value instanceof FluentDateTime) {
			opts = {
				...value.opts,
				...opts
			};
			value = value.value;
		} else if (value instanceof FluentType) value = value.valueOf();
		if (typeof value === "object" && "calendarId" in value && opts.calendar === void 0) opts = {
			...opts,
			calendar: value.calendarId
		};
		super(value);
		this.opts = opts;
	}
	[Symbol.toPrimitive](hint) {
		return hint === "string" ? this.toString() : this.toNumber();
	}
	toNumber() {
		const value = this.value;
		if (typeof value === "number") return value;
		if (value instanceof Date) return value.getTime();
		if ("epochMilliseconds" in value) return value.epochMilliseconds;
		if ("toZonedDateTime" in value) return value.toZonedDateTime("UTC").epochMilliseconds;
		throw new TypeError("Unwrapping a non-number value as a number");
	}
	toString(scope) {
		if (scope) try {
			return scope.memoizeIntlObject(Intl.DateTimeFormat, this.opts).format(this.value);
		} catch (err) {
			scope.reportError(err);
		}
		if (typeof this.value === "number" || this.value instanceof Date) return new Date(this.value).toISOString();
		return this.value.toString();
	}
};
var MAX_PLACEABLES = 100;
var FSI = "⁨";
var PDI = "⁩";
function match(scope, selector, key) {
	if (key === selector) return true;
	if (key instanceof FluentNumber && selector instanceof FluentNumber && key.value === selector.value) return true;
	if (selector instanceof FluentNumber && typeof key === "string") {
		if (key === scope.memoizeIntlObject(Intl.PluralRules, selector.opts).select(selector.value)) return true;
	}
	return false;
}
function getDefault(scope, variants, star) {
	if (variants[star]) return resolvePattern(scope, variants[star].value);
	scope.reportError(/* @__PURE__ */ new RangeError("No default"));
	return new FluentNone();
}
function getArguments(scope, args) {
	const positional = [];
	const named = Object.create(null);
	for (const arg of args) if (arg.type === "narg") named[arg.name] = resolveExpression(scope, arg.value);
	else positional.push(resolveExpression(scope, arg));
	return {
		positional,
		named
	};
}
function resolveExpression(scope, expr) {
	switch (expr.type) {
		case "str": return expr.value;
		case "num": return new FluentNumber(expr.value, { minimumFractionDigits: expr.precision });
		case "var": return resolveVariableReference(scope, expr);
		case "mesg": return resolveMessageReference(scope, expr);
		case "term": return resolveTermReference(scope, expr);
		case "func": return resolveFunctionReference(scope, expr);
		case "select": return resolveSelectExpression(scope, expr);
		default: return new FluentNone();
	}
}
function resolveVariableReference(scope, { name }) {
	let arg;
	if (scope.params) if (Object.prototype.hasOwnProperty.call(scope.params, name)) arg = scope.params[name];
	else return new FluentNone(`$${name}`);
	else if (scope.args && Object.prototype.hasOwnProperty.call(scope.args, name)) arg = scope.args[name];
	else {
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown variable: $${name}`));
		return new FluentNone(`$${name}`);
	}
	if (arg instanceof FluentType) return arg;
	switch (typeof arg) {
		case "string": return arg;
		case "number": return new FluentNumber(arg);
		case "object": if (FluentDateTime.supportsValue(arg)) return new FluentDateTime(arg);
		default:
			scope.reportError(/* @__PURE__ */ new TypeError(`Variable type not supported: $${name}, ${typeof arg}`));
			return new FluentNone(`$${name}`);
	}
}
function resolveMessageReference(scope, { name, attr }) {
	const message = scope.bundle._messages.get(name);
	if (!message) {
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown message: ${name}`));
		return new FluentNone(name);
	}
	if (attr) {
		const attribute = message.attributes[attr];
		if (attribute) return resolvePattern(scope, attribute);
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown attribute: ${attr}`));
		return new FluentNone(`${name}.${attr}`);
	}
	if (message.value) return resolvePattern(scope, message.value);
	scope.reportError(/* @__PURE__ */ new ReferenceError(`No value: ${name}`));
	return new FluentNone(name);
}
function resolveTermReference(scope, { name, attr, args }) {
	const id = `-${name}`;
	const term = scope.bundle._terms.get(id);
	if (!term) {
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown term: ${id}`));
		return new FluentNone(id);
	}
	if (attr) {
		const attribute = term.attributes[attr];
		if (attribute) {
			scope.params = getArguments(scope, args).named;
			const resolved = resolvePattern(scope, attribute);
			scope.params = null;
			return resolved;
		}
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown attribute: ${attr}`));
		return new FluentNone(`${id}.${attr}`);
	}
	scope.params = getArguments(scope, args).named;
	const resolved = resolvePattern(scope, term.value);
	scope.params = null;
	return resolved;
}
function resolveFunctionReference(scope, { name, args }) {
	let func = scope.bundle._functions[name];
	if (!func) {
		scope.reportError(/* @__PURE__ */ new ReferenceError(`Unknown function: ${name}()`));
		return new FluentNone(`${name}()`);
	}
	if (typeof func !== "function") {
		scope.reportError(/* @__PURE__ */ new TypeError(`Function ${name}() is not callable`));
		return new FluentNone(`${name}()`);
	}
	try {
		let resolved = getArguments(scope, args);
		return func(resolved.positional, resolved.named);
	} catch (err) {
		scope.reportError(err);
		return new FluentNone(`${name}()`);
	}
}
function resolveSelectExpression(scope, { selector, variants, star }) {
	let sel = resolveExpression(scope, selector);
	if (sel instanceof FluentNone) return getDefault(scope, variants, star);
	for (const variant of variants) if (match(scope, sel, resolveExpression(scope, variant.key))) return resolvePattern(scope, variant.value);
	return getDefault(scope, variants, star);
}
function resolveComplexPattern(scope, ptn) {
	if (scope.dirty.has(ptn)) {
		scope.reportError(/* @__PURE__ */ new RangeError("Cyclic reference"));
		return new FluentNone();
	}
	scope.dirty.add(ptn);
	const result = [];
	const useIsolating = scope.bundle._useIsolating && ptn.length > 1;
	for (const elem of ptn) {
		if (typeof elem === "string") {
			result.push(scope.bundle._transform(elem));
			continue;
		}
		scope.placeables++;
		if (scope.placeables > MAX_PLACEABLES) {
			scope.dirty.delete(ptn);
			throw new RangeError(`Too many placeables expanded: ${scope.placeables}, max allowed is ${MAX_PLACEABLES}`);
		}
		if (useIsolating) result.push(FSI);
		result.push(resolveExpression(scope, elem).toString(scope));
		if (useIsolating) result.push(PDI);
	}
	scope.dirty.delete(ptn);
	return result.join("");
}
function resolvePattern(scope, value) {
	if (typeof value === "string") return scope.bundle._transform(value);
	return resolveComplexPattern(scope, value);
}
var Scope = class {
	constructor(bundle, errors, args) {
		this.dirty = /* @__PURE__ */ new WeakSet();
		this.params = null;
		this.placeables = 0;
		this.bundle = bundle;
		this.errors = errors;
		this.args = args;
	}
	reportError(error) {
		if (!this.errors || !(error instanceof Error)) throw error;
		this.errors.push(error);
	}
	memoizeIntlObject(ctor, opts) {
		let cache = this.bundle._intls.get(ctor);
		if (!cache) {
			cache = {};
			this.bundle._intls.set(ctor, cache);
		}
		let id = JSON.stringify(opts);
		if (!cache[id]) cache[id] = new ctor(this.bundle.locales, opts);
		return cache[id];
	}
};
function values(opts, allowed) {
	const unwrapped = Object.create(null);
	for (const [name, opt] of Object.entries(opts)) if (allowed.includes(name)) unwrapped[name] = opt.valueOf();
	return unwrapped;
}
var NUMBER_ALLOWED = [
	"unitDisplay",
	"currencyDisplay",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits"
];
function NUMBER(args, opts) {
	let arg = args[0];
	if (arg instanceof FluentNone) return new FluentNone(`NUMBER(${arg.valueOf()})`);
	if (arg instanceof FluentNumber) return new FluentNumber(arg.valueOf(), {
		...arg.opts,
		...values(opts, NUMBER_ALLOWED)
	});
	if (arg instanceof FluentDateTime) return new FluentNumber(arg.toNumber(), { ...values(opts, NUMBER_ALLOWED) });
	throw new TypeError("Invalid argument to NUMBER");
}
var DATETIME_ALLOWED = [
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
function DATETIME(args, opts) {
	let arg = args[0];
	if (arg instanceof FluentNone) return new FluentNone(`DATETIME(${arg.valueOf()})`);
	if (arg instanceof FluentDateTime || arg instanceof FluentNumber) return new FluentDateTime(arg, values(opts, DATETIME_ALLOWED));
	throw new TypeError("Invalid argument to DATETIME");
}
var cache = /* @__PURE__ */ new Map();
function getMemoizerForLocale(locales) {
	const stringLocale = Array.isArray(locales) ? locales.join(" ") : locales;
	let memoizer = cache.get(stringLocale);
	if (memoizer === void 0) {
		memoizer = /* @__PURE__ */ new Map();
		cache.set(stringLocale, memoizer);
	}
	return memoizer;
}
var FluentBundle = class {
	constructor(locales, { functions, useIsolating = true, transform = (v) => v } = {}) {
		this._terms = /* @__PURE__ */ new Map();
		this._messages = /* @__PURE__ */ new Map();
		this.locales = Array.isArray(locales) ? locales : [locales];
		this._functions = {
			NUMBER,
			DATETIME,
			...functions
		};
		this._useIsolating = useIsolating;
		this._transform = transform;
		this._intls = getMemoizerForLocale(locales);
	}
	hasMessage(id) {
		return this._messages.has(id);
	}
	getMessage(id) {
		return this._messages.get(id);
	}
	addResource(res, { allowOverrides = false } = {}) {
		const errors = [];
		for (let i = 0; i < res.body.length; i++) {
			let entry = res.body[i];
			if (entry.id.startsWith("-")) {
				if (allowOverrides === false && this._terms.has(entry.id)) {
					errors.push(/* @__PURE__ */ new Error(`Attempt to override an existing term: "${entry.id}"`));
					continue;
				}
				this._terms.set(entry.id, entry);
			} else {
				if (allowOverrides === false && this._messages.has(entry.id)) {
					errors.push(/* @__PURE__ */ new Error(`Attempt to override an existing message: "${entry.id}"`));
					continue;
				}
				this._messages.set(entry.id, entry);
			}
		}
		return errors;
	}
	formatPattern(pattern, args = null, errors = null) {
		if (typeof pattern === "string") return this._transform(pattern);
		let scope = new Scope(this, errors, args);
		try {
			return resolveComplexPattern(scope, pattern).toString(scope);
		} catch (err) {
			if (scope.errors && err instanceof Error) {
				scope.errors.push(err);
				return new FluentNone().toString(scope);
			}
			throw err;
		}
	}
};
var RE_MESSAGE_START = /^(-?[a-zA-Z][\w-]*) *= */gm;
var RE_ATTRIBUTE_START = /\.([a-zA-Z][\w-]*) *= */y;
var RE_VARIANT_START = /\*?\[/y;
var RE_NUMBER_LITERAL = /(-?[0-9]+(?:\.([0-9]+))?)/y;
var RE_IDENTIFIER = /([a-zA-Z][\w-]*)/y;
var RE_REFERENCE = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y;
var RE_FUNCTION_NAME = /^[A-Z][A-Z0-9_-]*$/;
var RE_TEXT_RUN = /([^{}\n\r]+)/y;
var RE_STRING_RUN = /([^\\"\n\r]*)/y;
var RE_STRING_ESCAPE = /\\([\\"])/y;
var RE_UNICODE_ESCAPE = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y;
var RE_LEADING_NEWLINES = /^\n+/;
var RE_TRAILING_SPACES = / +$/;
var RE_BLANK_LINES = / *\r?\n/g;
var RE_INDENT = /( *)$/;
var TOKEN_BRACE_OPEN = /{\s*/y;
var TOKEN_BRACE_CLOSE = /\s*}/y;
var TOKEN_BRACKET_OPEN = /\[\s*/y;
var TOKEN_BRACKET_CLOSE = /\s*] */y;
var TOKEN_PAREN_OPEN = /\s*\(\s*/y;
var TOKEN_ARROW = /\s*->\s*/y;
var TOKEN_COLON = /\s*:\s*/y;
var TOKEN_COMMA = /\s*,?\s*/y;
var TOKEN_BLANK = /\s+/y;
var FluentResource = class {
	constructor(source) {
		this.body = [];
		RE_MESSAGE_START.lastIndex = 0;
		let cursor = 0;
		while (true) {
			let next = RE_MESSAGE_START.exec(source);
			if (next === null) break;
			cursor = RE_MESSAGE_START.lastIndex;
			try {
				this.body.push(parseMessage(next[1]));
			} catch (err) {
				if (err instanceof SyntaxError) continue;
				throw err;
			}
		}
		function test(re) {
			re.lastIndex = cursor;
			return re.test(source);
		}
		function consumeChar(char, errorClass) {
			if (source[cursor] === char) {
				cursor++;
				return true;
			}
			if (errorClass) throw new errorClass(`Expected ${char}`);
			return false;
		}
		function consumeToken(re, errorClass) {
			if (test(re)) {
				cursor = re.lastIndex;
				return true;
			}
			if (errorClass) throw new errorClass(`Expected ${re.toString()}`);
			return false;
		}
		function match(re) {
			re.lastIndex = cursor;
			let result = re.exec(source);
			if (result === null) throw new SyntaxError(`Expected ${re.toString()}`);
			cursor = re.lastIndex;
			return result;
		}
		function match1(re) {
			return match(re)[1];
		}
		function parseMessage(id) {
			let value = parsePattern();
			let attributes = parseAttributes();
			if (value === null && Object.keys(attributes).length === 0) throw new SyntaxError("Expected message value or attributes");
			return {
				id,
				value,
				attributes
			};
		}
		function parseAttributes() {
			let attrs = Object.create(null);
			while (test(RE_ATTRIBUTE_START)) {
				let name = match1(RE_ATTRIBUTE_START);
				let value = parsePattern();
				if (value === null) throw new SyntaxError("Expected attribute value");
				attrs[name] = value;
			}
			return attrs;
		}
		function parsePattern() {
			let first;
			if (test(RE_TEXT_RUN)) first = match1(RE_TEXT_RUN);
			if (source[cursor] === "{" || source[cursor] === "}") return parsePatternElements(first ? [first] : [], Infinity);
			let indent = parseIndent();
			if (indent) {
				if (first) return parsePatternElements([first, indent], indent.length);
				indent.value = trim(indent.value, RE_LEADING_NEWLINES);
				return parsePatternElements([indent], indent.length);
			}
			if (first) return trim(first, RE_TRAILING_SPACES);
			return null;
		}
		function parsePatternElements(elements = [], commonIndent) {
			while (true) {
				if (test(RE_TEXT_RUN)) {
					elements.push(match1(RE_TEXT_RUN));
					continue;
				}
				if (source[cursor] === "{") {
					elements.push(parsePlaceable());
					continue;
				}
				if (source[cursor] === "}") throw new SyntaxError("Unbalanced closing brace");
				let indent = parseIndent();
				if (indent) {
					elements.push(indent);
					commonIndent = Math.min(commonIndent, indent.length);
					continue;
				}
				break;
			}
			let lastIndex = elements.length - 1;
			let lastElement = elements[lastIndex];
			if (typeof lastElement === "string") elements[lastIndex] = trim(lastElement, RE_TRAILING_SPACES);
			let baked = [];
			for (let element of elements) {
				if (element instanceof Indent) element = element.value.slice(0, element.value.length - commonIndent);
				if (element) baked.push(element);
			}
			return baked;
		}
		function parsePlaceable() {
			consumeToken(TOKEN_BRACE_OPEN, SyntaxError);
			let selector = parseInlineExpression();
			if (consumeToken(TOKEN_BRACE_CLOSE)) return selector;
			if (consumeToken(TOKEN_ARROW)) {
				let variants = parseVariants();
				consumeToken(TOKEN_BRACE_CLOSE, SyntaxError);
				return {
					type: "select",
					selector,
					...variants
				};
			}
			throw new SyntaxError("Unclosed placeable");
		}
		function parseInlineExpression() {
			if (source[cursor] === "{") return parsePlaceable();
			if (test(RE_REFERENCE)) {
				let [, sigil, name, attr = null] = match(RE_REFERENCE);
				if (sigil === "$") return {
					type: "var",
					name
				};
				if (consumeToken(TOKEN_PAREN_OPEN)) {
					let args = parseArguments();
					if (sigil === "-") return {
						type: "term",
						name,
						attr,
						args
					};
					if (RE_FUNCTION_NAME.test(name)) return {
						type: "func",
						name,
						args
					};
					throw new SyntaxError("Function names must be all upper-case");
				}
				if (sigil === "-") return {
					type: "term",
					name,
					attr,
					args: []
				};
				return {
					type: "mesg",
					name,
					attr
				};
			}
			return parseLiteral();
		}
		function parseArguments() {
			let args = [];
			while (true) {
				switch (source[cursor]) {
					case ")":
						cursor++;
						return args;
					case void 0: throw new SyntaxError("Unclosed argument list");
				}
				args.push(parseArgument());
				consumeToken(TOKEN_COMMA);
			}
		}
		function parseArgument() {
			let expr = parseInlineExpression();
			if (expr.type !== "mesg") return expr;
			if (consumeToken(TOKEN_COLON)) return {
				type: "narg",
				name: expr.name,
				value: parseLiteral()
			};
			return expr;
		}
		function parseVariants() {
			let variants = [];
			let count = 0;
			let star;
			while (test(RE_VARIANT_START)) {
				if (consumeChar("*")) star = count;
				let key = parseVariantKey();
				let value = parsePattern();
				if (value === null) throw new SyntaxError("Expected variant value");
				variants[count++] = {
					key,
					value
				};
			}
			if (count === 0) return null;
			if (star === void 0) throw new SyntaxError("Expected default variant");
			return {
				variants,
				star
			};
		}
		function parseVariantKey() {
			consumeToken(TOKEN_BRACKET_OPEN, SyntaxError);
			let key;
			if (test(RE_NUMBER_LITERAL)) key = parseNumberLiteral();
			else key = {
				type: "str",
				value: match1(RE_IDENTIFIER)
			};
			consumeToken(TOKEN_BRACKET_CLOSE, SyntaxError);
			return key;
		}
		function parseLiteral() {
			if (test(RE_NUMBER_LITERAL)) return parseNumberLiteral();
			if (source[cursor] === "\"") return parseStringLiteral();
			throw new SyntaxError("Invalid expression");
		}
		function parseNumberLiteral() {
			let [, value, fraction = ""] = match(RE_NUMBER_LITERAL);
			let precision = fraction.length;
			return {
				type: "num",
				value: parseFloat(value),
				precision
			};
		}
		function parseStringLiteral() {
			consumeChar("\"", SyntaxError);
			let value = "";
			while (true) {
				value += match1(RE_STRING_RUN);
				if (source[cursor] === "\\") {
					value += parseEscapeSequence();
					continue;
				}
				if (consumeChar("\"")) return {
					type: "str",
					value
				};
				throw new SyntaxError("Unclosed string literal");
			}
		}
		function parseEscapeSequence() {
			if (test(RE_STRING_ESCAPE)) return match1(RE_STRING_ESCAPE);
			if (test(RE_UNICODE_ESCAPE)) {
				let [, codepoint4, codepoint6] = match(RE_UNICODE_ESCAPE);
				let codepoint = parseInt(codepoint4 || codepoint6, 16);
				return codepoint <= 55295 || 57344 <= codepoint ? String.fromCodePoint(codepoint) : "�";
			}
			throw new SyntaxError("Unknown escape sequence");
		}
		function parseIndent() {
			let start = cursor;
			consumeToken(TOKEN_BLANK);
			switch (source[cursor]) {
				case ".":
				case "[":
				case "*":
				case "}":
				case void 0: return false;
				case "{": return makeIndent(source.slice(start, cursor));
			}
			if (source[cursor - 1] === " ") return makeIndent(source.slice(start, cursor));
			return false;
		}
		function trim(text, re) {
			return text.replace(re, "");
		}
		function makeIndent(blank) {
			let value = blank.replace(RE_BLANK_LINES, "\n");
			let length = RE_INDENT.exec(blank)[1].length;
			return new Indent(value, length);
		}
	}
};
var Indent = class {
	constructor(value, length) {
		this.value = value;
		this.length = length;
	}
};
function en_ftl_vue_type_fluent_index_0_src_true_locale_en_lang_default(Component) {
	const target = Component.options || Component;
	target.fluent = target.fluent || {};
	target.fluent["en"] = new FluentResource("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Go to GitHub\nheader-home = Home\nheader-methodology = Methodology\nheader-mock-pages = Mock Pages\nheader-products = Products\nheader-pricing = Pricing\nheader-team = Team\nheader-blog = Blog\nheader-careers = Careers\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Settings\nfooter-title = i18n Benchmark\nfooter-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\nfooter-resources = Resources\nfooter-github = GitHub\nfooter-methodology = Methodology\nfooter-contributing = Contributing\nfooter-contact = Contact\nfooter-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.\ntheme-toggle-auto = Theme: Auto\ntheme-toggle-dark = Theme: Dark\ntheme-toggle-light = Theme: Light\ntheme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.\ntheme-toggle-label-other = Theme mode: {mode}. Click to switch mode.\nmock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\nhome-hero-title = i18n Benchmark\nhome-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\nhome-hero-view-results = View Results\nhome-hero-methodology = Methodology\nhome-why-it-matters-title = Why These Metrics Matter\nhome-why-it-matters-bundle-size-title = Bundle Size\nhome-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\nhome-why-it-matters-rendering-title = Rendering & Hydration\nhome-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Dynamic Loading\nhome-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\nhome-understanding-impact-title = Understanding the Impact\nhome-understanding-impact-single-json-title = Why a single large JSON can hurt performance\nhome-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\nhome-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.\nhome-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\nhome-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\nhome-understanding-impact-trade-offs-title = The trade-offs of dynamic loading\nhome-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\nhome-understanding-impact-waterfall-label = Waterfall requests:\nhome-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\nhome-understanding-impact-fouc-label = Flash of untranslated content (FOUC):\nhome-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.\nhome-understanding-impact-cache-label = Cache invalidation:\nhome-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\nhome-understanding-impact-measures-title = What this benchmark measures\nhome-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\nhome-results-table-title = Sample Results\nhome-results-table-library = Library\nhome-results-table-bundle-size = Bundle Size\nhome-results-table-lookup-time = Lookup Time\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Yes\nhome-results-table-manual = Manual\nhome-results-table-built-in = Built-in\nabout-header-title = About This Benchmark\nabout-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\nabout-grid-why-exists-title = Why This Exists\nabout-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\nabout-grid-methodology-title = Methodology\nabout-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\nabout-what-we-measure-title = What We Measure\nabout-what-we-measure-bundle-size-impact = Bundle size impact\nabout-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\nabout-what-we-measure-rendering-overhead = Rendering overhead\nabout-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\nabout-what-we-measure-hydration-cost = Hydration cost\nabout-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\nabout-what-we-measure-lazy-loading = Lazy loading effectiveness\nabout-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\nabout-what-we-measure-locale-switch = Locale switch speed\nabout-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutorials, and analysis from the i18n community.\nblog-list-read-more = Read More →\nblog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive\nblog-list-post1-date = March 15, 2026\nblog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = How to Reduce Your i18n Bundle by 60%\nblog-list-post2-date = March 8, 2026\nblog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = The State of Internationalization in React\nblog-list-post3-date = February 28, 2026\nblog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\nblog-list-post3-category = Analysis\nblog-list-post4-title = Migrating from react-i18next to Lingui\nblog-list-post4-date = February 15, 2026\nblog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components and i18n: What Changes?\nblog-list-post5-date = February 1, 2026\nblog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\nblog-list-post5-category = Analysis\nblog-list-post6-title = Benchmark Methodology: How We Test\nblog-list-post6-date = January 20, 2026\nblog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\nblog-list-post6-category = Meta\ncareers-header-title = Careers\ncareers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Work from anywhere in the world\ncareers-benefits-pay-label = Competitive pay\ncareers-benefits-pay-value = Top-of-market compensation\ncareers-benefits-oss-label = Open source time\ncareers-benefits-oss-value = 20% time for OSS contributions\ncareers-open-positions-title = Open Positions\ncareers-open-positions-apply-now = Apply Now\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Full-time\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\ncareers-open-positions-writer-title = Technical Writer\ncareers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.\ncareers-open-positions-devrel-title = DevRel Engineer\ncareers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\ncareers-open-positions-qa-title = QA Engineer\ncareers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\ncontact-header-title = Get in Touch\ncontact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\ncontact-form-name = Name\ncontact-form-your-name = Your name\ncontact-form-email = Email\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Topic\ncontact-form-bug-report = Bug Report\ncontact-form-new-benchmark-idea = New Benchmark Idea\ncontact-form-methodology-question = Methodology Question\ncontact-form-contribution = Contribution\ncontact-form-other = Other\ncontact-form-message = Message\ncontact-form-message-placeholder = Describe your question or idea...\ncontact-form-send-message = Send Message\nfaq-header-title = Frequently Asked Questions\nfaq-header-description = Everything you need to know about i18n Benchmark.\nfaq-list-q1 = What is i18n Benchmark?\nfaq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\nfaq-list-q2 = How are benchmarks conducted?\nfaq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\nfaq-list-q3 = Which libraries are currently supported?\nfaq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\nfaq-list-q4 = Can I submit my own benchmarks?\nfaq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\nfaq-list-q5 = How often are benchmarks updated?\nfaq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\nfaq-list-q6 = Is the data reliable?\nfaq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\nfaq-list-q7 = Do you offer consulting services?\nfaq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\nfaq-list-q8 = How can I contribute?\nfaq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\npricing-header-title = Simple, Transparent Pricing\npricing-header-description = Choose the plan that fits your team. No hidden fees.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = $0\npricing-tiers-starter-period = forever\npricing-tiers-starter-feature1 = 5 benchmark runs/day\npricing-tiers-starter-feature2 = 3 libraries\npricing-tiers-starter-feature3 = Community support\npricing-tiers-starter-feature4 = Public results\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = $29\npricing-tiers-pro-period = /month\npricing-tiers-pro-feature1 = Unlimited runs\npricing-tiers-pro-feature2 = All libraries\npricing-tiers-pro-feature3 = Priority support\npricing-tiers-pro-feature4 = Private results\npricing-tiers-pro-feature5 = CI integration\npricing-tiers-pro-feature6 = Historical data\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Custom\npricing-tiers-enterprise-feature1 = Everything in Pro\npricing-tiers-enterprise-feature2 = On-premise option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedicated account manager\npricing-tiers-enterprise-feature5 = Custom SLAs\npricing-tiers-enterprise-feature6 = Audit logs\npricing-tiers-enterprise-feature7 = Training sessions\npricing-tiers-contact-sales = Contact Sales\npricing-tiers-get-started = Get Started\nproducts-header-title = Products\nproducts-header-description = Tools and services to streamline your internationalization workflow.\nproducts-grid-learn-more = Learn More\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\nproducts-grid-cli-price = Free\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\nproducts-grid-cloud-price = $29/mo\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\nproducts-grid-enterprise-price = Contact Us\nproducts-grid-migration-name = Migration Assistant\nproducts-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\nproducts-grid-migration-price = $99 one-time\nproducts-grid-qa-name = Translation QA\nproducts-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.\nproducts-grid-qa-price = $19/mo\nproducts-grid-optimizer-name = Bundle Optimizer\nproducts-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\nproducts-grid-optimizer-price = $49/mo\nsettings-header-title = Settings\nsettings-header-description = Manage your account preferences and configuration.\nsettings-profile-title = Profile\nsettings-profile-display-name = Display Name\nsettings-profile-email = Email\nsettings-preferences-title = Preferences\nsettings-preferences-email-notifications = Email Notifications\nsettings-preferences-weekly-reports = Receive weekly benchmark reports\nsettings-preferences-toggle-notifications = Toggle notifications\nsettings-preferences-dark-mode = Dark Mode\nsettings-preferences-dark-color-scheme = Use dark color scheme\nsettings-preferences-toggle-dark-mode = Toggle dark mode\nsettings-preferences-default-language = Default Language\nsettings-preferences-english = English (en)\nsettings-preferences-french = French (fr)\nsettings-preferences-german = German (de)\nsettings-preferences-spanish = Spanish (es)\nsettings-preferences-japanese = Japanese (ja)\nsettings-preferences-chinese = Chinese Simplified (zh-CN)\nsettings-preferences-arabic = Arabic (ar)\nsettings-api-access-title = API Access\nsettings-api-access-api-key = API Key\nsettings-api-access-copy = Copy\nsettings-api-access-description = Use this key to access the benchmarking API programmatically.\nsettings-footer-cancel = Cancel\nsettings-footer-save-changes = Save Changes\nteam-header-title = Our Team\nteam-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Founder & Lead Engineer\nteam-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance Engineer\nteam-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack Developer\nteam-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Data Analyst\nteam-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.\nnot-found-title = 404\nnot-found-description = Oops! Page not found\nnot-found-return-home = Return to Home");
}
function fr_ftl_vue_type_fluent_index_1_src_true_locale_fr_lang_default(Component) {
	const target = Component.options || Component;
	target.fluent = target.fluent || {};
	target.fluent["fr"] = new FluentResource("shared-app-name = Bench i18n\nshared-site-name = Benchmark i18n\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Aller sur GitHub\nheader-home = Accueil\nheader-methodology = Méthodologie\nheader-mock-pages = Pages fictives\nheader-products = Produits\nheader-pricing = Tarifs\nheader-team = Équipe\nheader-blog = Blog\nheader-careers = Carrières\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Paramètres\nfooter-title = Benchmark i18n\nfooter-description = Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\nfooter-resources = Ressources\nfooter-github = GitHub\nfooter-methodology = Méthodologie\nfooter-contributing = Contribuer\nfooter-contact = Contact\nfooter-built-with = Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.\ntheme-toggle-auto = Thème : automatique\ntheme-toggle-dark = Thème : sombre\ntheme-toggle-light = Thème : clair\ntheme-toggle-label-auto = Mode thème : automatique (système). Cliquez pour passer en mode clair.\ntheme-toggle-label-other = Mode thème : {mode}. Cliquez pour changer de mode.\nmock-banner = ⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.\nhome-hero-title = Benchmark i18n\nhome-hero-description = Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.\nhome-hero-view-results = Voir les résultats\nhome-hero-methodology = Méthodologie\nhome-why-it-matters-title = Pourquoi ces métriques comptent\nhome-why-it-matters-bundle-size-title = Taille du bundle\nhome-why-it-matters-bundle-size-desc = Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.\nhome-why-it-matters-rendering-title = Rendu et hydratation\nhome-why-it-matters-rendering-desc = Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Chargement dynamique\nhome-why-it-matters-dynamic-loading-desc = Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.\nhome-understanding-impact-title = Comprendre l'impact\nhome-understanding-impact-single-json-title = Pourquoi un unique gros JSON peut nuire aux performances\nhome-understanding-impact-single-json-intro = Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :\nhome-understanding-impact-single-json-bullet1 = Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.\nhome-understanding-impact-single-json-bullet2 = Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.\nhome-understanding-impact-single-json-bullet3 = Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.\nhome-understanding-impact-trade-offs-title = Les compromis du chargement dynamique\nhome-understanding-impact-trade-offs-intro = Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :\nhome-understanding-impact-waterfall-label = Requêtes en cascade :\nhome-understanding-impact-waterfall-desc = l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.\nhome-understanding-impact-fouc-label = Flash de contenu non traduit (FOUC) :\nhome-understanding-impact-fouc-desc = l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.\nhome-understanding-impact-cache-label = Invalidation du cache :\nhome-understanding-impact-cache-desc = mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.\nhome-understanding-impact-measures-title = Ce que mesure ce benchmark\nhome-understanding-impact-measures-desc = Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.\nhome-results-table-title = Exemple de résultats\nhome-results-table-library = Bibliothèque\nhome-results-table-bundle-size = Taille du bundle\nhome-results-table-lookup-time = Temps de recherche\nhome-results-table-lazy-loading = Chargement paresseux\nhome-results-table-yes = Oui\nhome-results-table-manual = Manuel\nhome-results-table-built-in = Intégré\nabout-header-title = À propos de ce benchmark\nabout-header-description = Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.\nabout-grid-why-exists-title = Pourquoi ce projet existe\nabout-grid-why-exists-desc = Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.\nabout-grid-methodology-title = Méthodologie\nabout-grid-methodology-desc = La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.\nabout-what-we-measure-title = Ce que nous mesurons\nabout-what-we-measure-bundle-size-impact = Impact sur la taille du bundle\nabout-what-we-measure-bundle-size-impact-desc = Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.\nabout-what-we-measure-rendering-overhead = Surcharge de rendu\nabout-what-we-measure-rendering-overhead-desc = Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.\nabout-what-we-measure-hydration-cost = Coût d'hydratation\nabout-what-we-measure-hydration-cost-desc = En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.\nabout-what-we-measure-lazy-loading = Efficacité du chargement paresseux\nabout-what-we-measure-lazy-loading-desc = Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?\nabout-what-we-measure-locale-switch = Vitesse de changement de langue\nabout-what-we-measure-locale-switch-desc = À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.\nblog-header-title = Blog\nblog-header-description = Articles, tutoriels et analyses de la communauté i18n.\nblog-list-read-more = Lire la suite →\nblog-list-post1-title = Comparer les bibliothèques i18n en 2026 : plongée détaillée\nblog-list-post1-date = 15 mars 2026\nblog-list-post1-excerpt = Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Réduire votre bundle i18n de 60 %\nblog-list-post2-date = 8 mars 2026\nblog-list-post2-excerpt = Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.\nblog-list-post2-category = Tutoriel\nblog-list-post3-title = État de l'internationalisation dans l'écosystème React\nblog-list-post3-date = 28 février 2026\nblog-list-post3-excerpt = Panorama des tendances, patterns émergents et préférences de la communauté.\nblog-list-post3-category = Analyse\nblog-list-post4-title = Migrer de react-i18next vers Lingui\nblog-list-post4-date = 15 février 2026\nblog-list-post4-excerpt = Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.\nblog-list-post4-category = Tutoriel\nblog-list-post5-title = Server Components et i18n : qu'est-ce qui change ?\nblog-list-post5-date = 1er février 2026\nblog-list-post5-excerpt = Les React Server Components introduisent de nouveaux motifs pour l'i18n.\nblog-list-post5-category = Analyse\nblog-list-post6-title = Méthodologie de benchmark : comment nous testons\nblog-list-post6-date = 20 janvier 2026\nblog-list-post6-excerpt = Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.\nblog-list-post6-category = Méta\ncareers-header-title = Carrières\ncareers-header-description = Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Travaillez depuis n'importe où\ncareers-benefits-pay-label = Rémunération compétitive\ncareers-benefits-pay-value = Fourchettes haut de marché\ncareers-benefits-oss-label = Temps open source\ncareers-benefits-oss-value = 20 % du temps pour contribuer à l'OSS\ncareers-open-positions-title = Postes ouverts\ncareers-open-positions-apply-now = Postuler\ncareers-open-positions-remote = À distance\ncareers-open-positions-full-time = Temps plein\ncareers-open-positions-part-time = Temps partiel\ncareers-open-positions-engineering = Ingénierie\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Communauté\ncareers-open-positions-sf-remote = San Francisco / télétravail\ncareers-open-positions-frontend-title = Ingénieur front-end senior\ncareers-open-positions-frontend-desc = Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.\ncareers-open-positions-backend-title = Ingénieur back-end\ncareers-open-positions-backend-desc = Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.\ncareers-open-positions-writer-title = Rédacteur·rice technique\ncareers-open-positions-writer-desc = Guides, références d'API et tutoriels pour la plateforme de benchmark.\ncareers-open-positions-devrel-title = Ingénieur DevRel\ncareers-open-positions-devrel-desc = Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.\ncareers-open-positions-qa-title = Ingénieur QA\ncareers-open-positions-qa-desc = Garantir la fiabilité des résultats par des tests et validations rigoureux.\ncontact-header-title = Contact\ncontact-header-description = Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à\ncontact-form-name = Nom\ncontact-form-your-name = Votre nom\ncontact-form-email = E-mail\ncontact-form-email-placeholder = vous@exemple.com\ncontact-form-topic = Sujet\ncontact-form-bug-report = Rapport de bug\ncontact-form-new-benchmark-idea = Idée de benchmark\ncontact-form-methodology-question = Question de méthodologie\ncontact-form-contribution = Contribution\ncontact-form-other = Autre\ncontact-form-message = Message\ncontact-form-message-placeholder = Décrivez votre question ou idée…\ncontact-form-send-message = Envoyer\nfaq-header-title = Questions fréquentes\nfaq-header-description = Tout savoir sur i18n Benchmark.\nfaq-list-q1 = Qu'est-ce qu'i18n Benchmark ?\nfaq-list-a1 = Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.\nfaq-list-q2 = Comment sont menés les benchmarks ?\nfaq-list-a2 = Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.\nfaq-list-q3 = Quelles bibliothèques sont prises en charge ?\nfaq-list-a3 = react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.\nfaq-list-q4 = Puis-je proposer des benchmarks ?\nfaq-list-a4 = Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.\nfaq-list-q5 = À quelle fréquence sont-ils mis à jour ?\nfaq-list-a5 = Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.\nfaq-list-q6 = Les données sont-elles fiables ?\nfaq-list-a6 = Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.\nfaq-list-q7 = Proposez-vous du conseil ?\nfaq-list-a7 = Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.\nfaq-list-q8 = Comment contribuer ?\nfaq-list-a8 = Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.\npricing-header-title = Tarification simple et transparente\npricing-header-description = Choisissez l'offre adaptée à votre équipe. Sans frais cachés.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 €\npricing-tiers-starter-period = pour toujours\npricing-tiers-starter-feature1 = 5 exécutions de benchmark / jour\npricing-tiers-starter-feature2 = 3 bibliothèques\npricing-tiers-starter-feature3 = Support communautaire\npricing-tiers-starter-feature4 = Résultats publics\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 €\npricing-tiers-pro-period = / mois\npricing-tiers-pro-feature1 = Exécutions illimitées\npricing-tiers-pro-feature2 = Toutes les bibliothèques\npricing-tiers-pro-feature3 = Support prioritaire\npricing-tiers-pro-feature4 = Résultats privés\npricing-tiers-pro-feature5 = Intégration CI\npricing-tiers-pro-feature6 = Historique\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Sur mesure\npricing-tiers-enterprise-feature1 = Tout le Pro\npricing-tiers-enterprise-feature2 = Option on-premise\npricing-tiers-enterprise-feature3 = SSO et SAML\npricing-tiers-enterprise-feature4 = Account manager dédié\npricing-tiers-enterprise-feature5 = SLA sur mesure\npricing-tiers-enterprise-feature6 = Journaux d'audit\npricing-tiers-enterprise-feature7 = Sessions de formation\npricing-tiers-contact-sales = Contacter les ventes\npricing-tiers-get-started = Commencer\nproducts-header-title = Produits\nproducts-header-description = Outils et services pour fluidifier votre flux i18n.\nproducts-grid-learn-more = En savoir plus\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Lancez des benchmarks en local. Configurations personnalisées et CI.\nproducts-grid-cli-price = Gratuit\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.\nproducts-grid-cloud-price = 29 €/mois\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise avec SSO, journaux d'audit, SLA et support dédié.\nproducts-grid-enterprise-price = Nous contacter\nproducts-grid-migration-name = Assistant de migration\nproducts-grid-migration-desc = Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.\nproducts-grid-migration-price = 99 € (unique)\nproducts-grid-qa-name = QA des traductions\nproducts-grid-qa-desc = Contrôles automatiques : clés manquantes, pluriels, contexte.\nproducts-grid-qa-price = 19 €/mois\nproducts-grid-optimizer-name = Optimiseur de bundle\nproducts-grid-optimizer-desc = Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).\nproducts-grid-optimizer-price = 49 €/mois\nsettings-header-title = Paramètres\nsettings-header-description = Gérez les préférences et la configuration de votre compte.\nsettings-profile-title = Profil\nsettings-profile-display-name = Nom affiché\nsettings-profile-email = E-mail\nsettings-preferences-title = Préférences\nsettings-preferences-email-notifications = Notifications e-mail\nsettings-preferences-weekly-reports = Recevoir les rapports hebdomadaires\nsettings-preferences-toggle-notifications = Activer/désactiver les notifications\nsettings-preferences-dark-mode = Mode sombre\nsettings-preferences-dark-color-scheme = Utiliser le thème sombre\nsettings-preferences-toggle-dark-mode = Basculer le mode sombre\nsettings-preferences-default-language = Langue par défaut\nsettings-preferences-english = Anglais (en)\nsettings-preferences-french = Français (fr)\nsettings-preferences-german = Allemand (de)\nsettings-preferences-spanish = Espagnol (es)\nsettings-preferences-japanese = Japonais (ja)\nsettings-preferences-chinese = Chinois simplifié (zh-CN)\nsettings-preferences-arabic = Arabe (ar)\nsettings-api-access-title = Accès API\nsettings-api-access-api-key = Clé API\nsettings-api-access-copy = Copier\nsettings-api-access-description = Utilisez cette clé pour appeler l'API de benchmark par programmation.\nsettings-footer-cancel = Annuler\nsettings-footer-save-changes = Enregistrer\nteam-header-title = Notre équipe\nteam-header-description = Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fondatrice & lead ingénieur\nteam-grid-member1-bio = Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingénieur performance\nteam-grid-member2-bio = Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer advocate\nteam-grid-member3-bio = Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Développeur full-stack\nteam-grid-member4-bio = Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analyste de données\nteam-grid-member5-bio = Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community manager\nteam-grid-member6-bio = Contributions communautaires, partenariats et événements — gouvernance open source.\nnot-found-title = 404\nnot-found-description = Oups ! Page introuvable\nnot-found-return-home = Retour à l'accueil");
}
function es_ftl_vue_type_fluent_index_2_src_true_locale_es_lang_default(Component) {
	const target = Component.options || Component;
	target.fluent = target.fluent || {};
	target.fluent["es"] = new FluentResource("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Ir a GitHub\nheader-home = Inicio\nheader-methodology = Metodología\nheader-mock-pages = Páginas de prueba\nheader-products = Productos\nheader-pricing = Precios\nheader-team = Equipo\nheader-blog = Blog\nheader-careers = Carreras\nheader-faq = FAQ\nheader-contact = Contacto\nheader-settings = Ajustes\nfooter-title = i18n Benchmark\nfooter-description = Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.\nfooter-resources = Recursos\nfooter-github = GitHub\nfooter-methodology = Metodología\nfooter-contributing = Contribuir\nfooter-contact = Contacto\nfooter-built-with = i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.\ntheme-toggle-auto = Tema: Auto\ntheme-toggle-dark = Tema: Oscuro\ntheme-toggle-light = Tema: Claro\ntheme-toggle-label-auto = Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.\ntheme-toggle-label-other = Modo de tema: {mode}. Haz clic para cambiar de modo.\nmock-banner = ⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.\nhome-hero-view-results = Ver resultados\nhome-hero-methodology = Metodología\nhome-why-it-matters-title = Por qué son importantes estas métricas\nhome-why-it-matters-bundle-size-title = Tamaño del bundle\nhome-why-it-matters-bundle-size-desc = El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.\nhome-why-it-matters-rendering-title = Renderizado e hidratación\nhome-why-it-matters-rendering-desc = Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Carga dinámica\nhome-why-it-matters-dynamic-loading-desc = Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\nhome-understanding-impact-title = Entendiendo el impacto\nhome-understanding-impact-single-json-title = Por qué un solo JSON grande puede perjudicar el rendimiento\nhome-understanding-impact-single-json-intro = Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\nhome-understanding-impact-single-json-bullet1 = El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\nhome-understanding-impact-single-json-bullet2 = Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.\nhome-understanding-impact-single-json-bullet3 = Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\nhome-understanding-impact-trade-offs-title = Las compensaciones de la carga dinámica\nhome-understanding-impact-trade-offs-intro = Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\nhome-understanding-impact-waterfall-label = Solicitudes en cascada:\nhome-understanding-impact-waterfall-desc = la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.\nhome-understanding-impact-fouc-label = Parpadeo de contenido no traducido (FOUC):\nhome-understanding-impact-fouc-desc = los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\nhome-understanding-impact-cache-label = Invalidación de la caché:\nhome-understanding-impact-cache-desc = actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.\nhome-understanding-impact-measures-title = Qué mide este benchmark\nhome-understanding-impact-measures-desc = Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\nhome-results-table-title = Resultados de muestra\nhome-results-table-library = Biblioteca\nhome-results-table-bundle-size = Tamaño del bundle\nhome-results-table-lookup-time = Tiempo de búsqueda\nhome-results-table-lazy-loading = Carga diferida\nhome-results-table-yes = Sí\nhome-results-table-manual = Manual\nhome-results-table-built-in = Integrado\nabout-header-title = Acerca de este benchmark\nabout-header-description = Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.\nabout-grid-why-exists-title = Por qué existe esto\nabout-grid-why-exists-desc = Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.\nabout-grid-methodology-title = Metodología\nabout-grid-methodology-desc = La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.\nabout-what-we-measure-title = Qué medimos\nabout-what-we-measure-bundle-size-impact = Impacto en el tamaño del bundle\nabout-what-we-measure-bundle-size-impact-desc = Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\nabout-what-we-measure-rendering-overhead = Sobrecarga de renderizado\nabout-what-we-measure-rendering-overhead-desc = Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.\nabout-what-we-measure-hydration-cost = Coste de hidratación\nabout-what-we-measure-hydration-cost-desc = Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\nabout-what-we-measure-lazy-loading = Eficacia de la carga diferida\nabout-what-we-measure-lazy-loading-desc = Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).\nabout-what-we-measure-locale-switch = Velocidad de cambio de idioma\nabout-what-we-measure-locale-switch-desc = Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\nblog-header-title = Blog\nblog-header-description = Información, tutoriales y análisis de la comunidad i18n.\nblog-list-read-more = Leer más →\nblog-list-post1-title = Comparativa de bibliotecas i18n en 2026: Un análisis profundo\nblog-list-post1-date = 15 de marzo de 2026\nblog-list-post1-excerpt = Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Cómo reducir tu bundle i18n en un 60%\nblog-list-post2-date = 8 de marzo de 2026\nblog-list-post2-excerpt = Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = El estado de la internacionalización en React\nblog-list-post3-date = 28 de febrero de 2026\nblog-list-post3-excerpt = Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.\nblog-list-post3-category = Análisis\nblog-list-post4-title = Migración de react-i18next a Lingui\nblog-list-post4-date = 15 de febrero de 2026\nblog-list-post4-excerpt = Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: ¿Qué cambia?\nblog-list-post5-date = 1 de febrero de 2026\nblog-list-post5-excerpt = Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\nblog-list-post5-category = Análisis\nblog-list-post6-title = Metodología de benchmark: Cómo probamos\nblog-list-post6-date = 20 de enero de 2026\nblog-list-post6-excerpt = Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\nblog-list-post6-category = Meta\ncareers-header-title = Carreras\ncareers-header-description = Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.\ncareers-benefits-remote-label = Remoto primero\ncareers-benefits-remote-value = Trabaja desde cualquier lugar del mundo\ncareers-benefits-pay-label = Salario competitivo\ncareers-benefits-pay-value = Compensación superior a la del mercado\ncareers-benefits-oss-label = Tiempo para el código abierto\ncareers-benefits-oss-value = 20% del tiempo para contribuciones a OSS\ncareers-open-positions-title = Puestos vacantes\ncareers-open-positions-apply-now = Postular ahora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tiempo completo\ncareers-open-positions-part-time = Tiempo parcial\ncareers-open-positions-engineering = Ingeniería\ncareers-open-positions-documentation = Documentación\ncareers-open-positions-community = Comunidad\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Ingeniero Frontend Senior\ncareers-open-positions-frontend-desc = Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.\ncareers-open-positions-backend-title = Ingeniero Backend\ncareers-open-positions-backend-desc = Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.\ncareers-open-positions-writer-title = Redactor técnico\ncareers-open-positions-writer-desc = Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\ncareers-open-positions-devrel-title = Ingeniero de DevRel\ncareers-open-positions-devrel-desc = Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.\ncareers-open-positions-qa-title = Ingeniero de QA\ncareers-open-positions-qa-desc = Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.\ncontact-header-title = Ponte en contacto\ncontact-header-description = ¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en\ncontact-form-name = Nombre\ncontact-form-your-name = Tu nombre\ncontact-form-email = Correo electrónico\ncontact-form-email-placeholder = tu@ejemplo.com\ncontact-form-topic = Tema\ncontact-form-bug-report = Informe de error\ncontact-form-new-benchmark-idea = Nueva idea de benchmark\ncontact-form-methodology-question = Pregunta sobre la metodología\ncontact-form-contribution = Contribución\ncontact-form-other = Otro\ncontact-form-message = Mensaje\ncontact-form-message-placeholder = Describe tu pregunta o idea...\ncontact-form-send-message = Enviar mensaje\nfaq-header-title = Preguntas frecuentes\nfaq-header-description = Todo lo que necesitas saber sobre i18n Benchmark.\nfaq-list-q1 = ¿Qué es i18n Benchmark?\nfaq-list-a1 = i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\nfaq-list-q2 = ¿Cómo se realizan los benchmarks?\nfaq-list-a2 = Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.\nfaq-list-q3 = ¿Qué bibliotecas se admiten actualmente?\nfaq-list-a3 = Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\nfaq-list-q4 = ¿Puedo enviar mis propios benchmarks?\nfaq-list-a4 = ¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.\nfaq-list-q5 = ¿Con qué frecuencia se actualizan los benchmarks?\nfaq-list-a5 = Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\nfaq-list-q6 = ¿Son fiables los datos?\nfaq-list-a6 = Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.\nfaq-list-q7 = ¿Ofrecen servicios de consultoría?\nfaq-list-a7 = Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.\nfaq-list-q8 = ¿Cómo puedo contribuir?\nfaq-list-a8 = Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.\npricing-header-title = Precios sencillos y transparentes\npricing-header-description = Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = para siempre\npricing-tiers-starter-feature1 = 5 ejecuciones de benchmark al día\npricing-tiers-starter-feature2 = 3 bibliotecas\npricing-tiers-starter-feature3 = Soporte de la comunidad\npricing-tiers-starter-feature4 = Resultados públicos\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mes\npricing-tiers-pro-feature1 = Ejecuciones ilimitadas\npricing-tiers-pro-feature2 = Todas las bibliotecas\npricing-tiers-pro-feature3 = Soporte prioritario\npricing-tiers-pro-feature4 = Resultados privados\npricing-tiers-pro-feature5 = Integración CI\npricing-tiers-pro-feature6 = Datos históricos\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizado\npricing-tiers-enterprise-feature1 = Todo lo que hay en Pro\npricing-tiers-enterprise-feature2 = Opción on-premise\npricing-tiers-enterprise-feature3 = SSO y SAML\npricing-tiers-enterprise-feature4 = Gestor de cuentas dedicado\npricing-tiers-enterprise-feature5 = SLAs personalizados\npricing-tiers-enterprise-feature6 = Registros de auditoría\npricing-tiers-enterprise-feature7 = Sesiones de formación\npricing-tiers-contact-sales = Contactar con ventas\npricing-tiers-get-started = Empezar\nproducts-header-title = Productos\nproducts-header-description = Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.\nproducts-grid-learn-more = Más información\nproducts-grid-cli-name = CLI de Benchmark\nproducts-grid-cli-desc = Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.\nproducts-grid-cli-price = Gratis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\nproducts-grid-cloud-price = 29 $/mes\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\nproducts-grid-enterprise-price = Contáctanos\nproducts-grid-migration-name = Asistente de migración\nproducts-grid-migration-desc = Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.\nproducts-grid-migration-price = 99 $ pago único\nproducts-grid-qa-name = QA de traducción\nproducts-grid-qa-desc = Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\nproducts-grid-qa-price = 19 $/mes\nproducts-grid-optimizer-name = Optimizador de bundle\nproducts-grid-optimizer-desc = Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.\nproducts-grid-optimizer-price = 49 $/mes\nsettings-header-title = Ajustes\nsettings-header-description = Gestiona las preferencias y la configuración de tu cuenta.\nsettings-profile-title = Perfil\nsettings-profile-display-name = Nombre visible\nsettings-profile-email = Correo electrónico\nsettings-preferences-title = Preferencias\nsettings-preferences-email-notifications = Notificaciones por correo electrónico\nsettings-preferences-weekly-reports = Recibir informes semanales de benchmarks\nsettings-preferences-toggle-notifications = Cambiar notificaciones\nsettings-preferences-dark-mode = Modo oscuro\nsettings-preferences-dark-color-scheme = Usar esquema de colores oscuro\nsettings-preferences-toggle-dark-mode = Cambiar modo oscuro\nsettings-preferences-default-language = Idioma predeterminado\nsettings-preferences-english = Inglés (en)\nsettings-preferences-french = Francés (fr)\nsettings-preferences-german = Alemán (de)\nsettings-preferences-spanish = Español (es)\nsettings-preferences-japanese = Japonés (ja)\nsettings-preferences-chinese = Chino simplificado (zh-CN)\nsettings-preferences-arabic = Árabe (ar)\nsettings-api-access-title = Acceso API\nsettings-api-access-api-key = Llave API\nsettings-api-access-copy = Copiar\nsettings-api-access-description = Usa esta llave para acceder a la API de benchmarking de forma programática.\nsettings-footer-cancel = Cancelar\nsettings-footer-save-changes = Guardar cambios\nteam-header-title = Nuestro equipo\nteam-header-description = Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fundadora e ingeniera principal\nteam-grid-member1-bio = Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingeniero de rendimiento\nteam-grid-member2-bio = Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Desarrollador Full-Stack\nteam-grid-member4-bio = Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista de datos\nteam-grid-member5-bio = Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Responsable de la comunidad\nteam-grid-member6-bio = Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.\nnot-found-title = 404\nnot-found-description = ¡Ups! Página no encontrada\nnot-found-return-home = Volver al inicio");
}
function de_ftl_vue_type_fluent_index_3_src_true_locale_de_lang_default(Component) {
	const target = Component.options || Component;
	target.fluent = target.fluent || {};
	target.fluent["de"] = new FluentResource("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Zu GitHub\nheader-home = Home\nheader-methodology = Methodik\nheader-mock-pages = Testseiten\nheader-products = Produkte\nheader-pricing = Preise\nheader-team = Team\nheader-blog = Blog\nheader-careers = Karriere\nheader-faq = FAQ\nheader-contact = Kontakt\nheader-settings = Einstellungen\nfooter-title = i18n Benchmark\nfooter-description = Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.\nfooter-resources = Ressourcen\nfooter-github = GitHub\nfooter-methodology = Methodik\nfooter-contributing = Beitragen\nfooter-contact = Kontakt\nfooter-built-with = i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.\ntheme-toggle-auto = Thema: Auto\ntheme-toggle-dark = Thema: Dunkel\ntheme-toggle-light = Thema: Hell\ntheme-toggle-label-auto = Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.\ntheme-toggle-label-other = Themenmodus: {mode}. Klicken Sie hier, um den Modus zu wechseln.\nmock-banner = ⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.\nhome-hero-view-results = Ergebnisse anzeigen\nhome-hero-methodology = Methodik\nhome-why-it-matters-title = Warum diese Metriken wichtig sind\nhome-why-it-matters-bundle-size-title = Bundle-Größe\nhome-why-it-matters-bundle-size-desc = Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.\nhome-why-it-matters-rendering-title = Rendering & Hydrierung\nhome-why-it-matters-rendering-desc = Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\nhome-why-it-matters-dynamic-loading-title = Dynamisches Laden\nhome-why-it-matters-dynamic-loading-desc = Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.\nhome-understanding-impact-title = Die Auswirkungen verstehen\nhome-understanding-impact-single-json-title = Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\nhome-understanding-impact-single-json-intro = Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:\nhome-understanding-impact-single-json-bullet1 = Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.\nhome-understanding-impact-single-json-bullet2 = Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\nhome-understanding-impact-single-json-bullet3 = Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.\nhome-understanding-impact-trade-offs-title = Die Kompromisse beim dynamischen Laden\nhome-understanding-impact-trade-offs-intro = Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\nhome-understanding-impact-waterfall-label = Waterfall-Anfragen:\nhome-understanding-impact-waterfall-desc = Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.\nhome-understanding-impact-fouc-label = Flash of Untranslated Content (FOUC):\nhome-understanding-impact-fouc-desc = Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.\nhome-understanding-impact-cache-label = Cache-Invalidierung:\nhome-understanding-impact-cache-desc = Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\nhome-understanding-impact-measures-title = Was dieser Benchmark misst\nhome-understanding-impact-measures-desc = Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.\nhome-results-table-title = Beispielergebnisse\nhome-results-table-library = Bibliothek\nhome-results-table-bundle-size = Bundle-Größe\nhome-results-table-lookup-time = Lookup-Zeit\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Ja\nhome-results-table-manual = Manuell\nhome-results-table-built-in = Integriert\nabout-header-title = Über diesen Benchmark\nabout-header-description = Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.\nabout-grid-why-exists-title = Warum dies existiert\nabout-grid-why-exists-desc = Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.\nabout-grid-methodology-title = Methodik\nabout-grid-methodology-desc = Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.\nabout-what-we-measure-title = Was wir messen\nabout-what-we-measure-bundle-size-impact = Auswirkungen auf die Bundle-Größe\nabout-what-we-measure-bundle-size-impact-desc = Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.\nabout-what-we-measure-rendering-overhead = Rendering-Overhead\nabout-what-we-measure-rendering-overhead-desc = Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\nabout-what-we-measure-hydration-cost = Hydrierungskosten\nabout-what-we-measure-hydration-cost-desc = Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.\nabout-what-we-measure-lazy-loading = Effektivität von Lazy Loading\nabout-what-we-measure-lazy-loading-desc = Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\nabout-what-we-measure-locale-switch = Geschwindigkeit des Sprachwechsels\nabout-what-we-measure-locale-switch-desc = Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.\nblog-header-title = Blog\nblog-header-description = Einblicke, Tutorials und Analysen aus der i18n-Community.\nblog-list-read-more = Mehr lesen →\nblog-list-post1-title = Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick\nblog-list-post1-date = 15. März 2026\nblog-list-post1-excerpt = Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Wie Sie Ihr i18n-Bundle um 60 % reduzieren\nblog-list-post2-date = 8. März 2026\nblog-list-post2-excerpt = Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = Der Stand der Internationalisierung in React\nblog-list-post3-date = 28. Februar 2026\nblog-list-post3-excerpt = Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\nblog-list-post3-category = Analyse\nblog-list-post4-title = Migration von react-i18next zu Lingui\nblog-list-post4-date = 15. Februar 2026\nblog-list-post4-excerpt = Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components und i18n: Was ändert sich?\nblog-list-post5-date = 1. Februar 2026\nblog-list-post5-excerpt = React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\nblog-list-post5-category = Analyse\nblog-list-post6-title = Benchmark-Methodik: Wie wir testen\nblog-list-post6-date = 20. Januar 2026\nblog-list-post6-excerpt = Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\nblog-list-post6-category = Meta\ncareers-header-title = Karriere\ncareers-header-description = Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.\ncareers-benefits-remote-label = Remote-First\ncareers-benefits-remote-value = Arbeiten Sie von überall auf der Welt\ncareers-benefits-pay-label = Wettbewerbsfähige Bezahlung\ncareers-benefits-pay-value = Überdurchschnittliche Vergütung\ncareers-benefits-oss-label = Open-Source-Zeit\ncareers-benefits-oss-value = 20 % der Zeit für OSS-Beiträge\ncareers-open-positions-title = Offene Stellen\ncareers-open-positions-apply-now = Jetzt bewerben\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Vollzeit\ncareers-open-positions-part-time = Teilzeit\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Dokumentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.\ncareers-open-positions-backend-title = Backend-Ingenieur\ncareers-open-positions-backend-desc = Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.\ncareers-open-positions-writer-title = Technischer Redakteur\ncareers-open-positions-writer-desc = Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\ncareers-open-positions-devrel-title = DevRel-Ingenieur\ncareers-open-positions-devrel-desc = Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\ncareers-open-positions-qa-title = QA-Ingenieur\ncareers-open-positions-qa-desc = Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.\ncontact-header-title = Kontakt aufnehmen\ncontact-header-description = Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter\ncontact-form-name = Name\ncontact-form-your-name = Ihr Name\ncontact-form-email = E-Mail\ncontact-form-email-placeholder = ihre@beispiel.de\ncontact-form-topic = Thema\ncontact-form-bug-report = Fehlerbericht\ncontact-form-new-benchmark-idea = Neue Benchmark-Idee\ncontact-form-methodology-question = Frage zur Methodik\ncontact-form-contribution = Beitrag\ncontact-form-other = Sonstiges\ncontact-form-message = Nachricht\ncontact-form-message-placeholder = Beschreiben Sie Ihre Frage oder Idee...\ncontact-form-send-message = Nachricht senden\nfaq-header-title = Häufig gestellte Fragen\nfaq-header-description = Alles, was Sie über i18n Benchmark wissen müssen.\nfaq-list-q1 = Was ist i18n Benchmark?\nfaq-list-a1 = i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\nfaq-list-q2 = Wie werden Benchmarks durchgeführt?\nfaq-list-a2 = Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.\nfaq-list-q3 = Welche Bibliotheken werden derzeit unterstützt?\nfaq-list-a3 = Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\nfaq-list-q4 = Kann ich meine eigenen Benchmarks einreichen?\nfaq-list-a4 = Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.\nfaq-list-q5 = Wie oft werden Benchmarks aktualisiert?\nfaq-list-a5 = Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.\nfaq-list-q6 = Sind die Daten zuverlässig?\nfaq-list-a6 = Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\nfaq-list-q7 = Bieten Sie Beratungsdienstleistungen an?\nfaq-list-a7 = Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.\nfaq-list-q8 = Wie kann ich beitragen?\nfaq-list-a8 = Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.\npricing-header-title = Einfache, transparente Preisgestaltung\npricing-header-description = Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = für immer\npricing-tiers-starter-feature1 = 5 Benchmark-Durchläufe/Tag\npricing-tiers-starter-feature2 = 3 Bibliotheken\npricing-tiers-starter-feature3 = Community-Support\npricing-tiers-starter-feature4 = Öffentliche Ergebnisse\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /Monat\npricing-tiers-pro-feature1 = Unbegrenzte Durchläufe\npricing-tiers-pro-feature2 = Alle Bibliotheken\npricing-tiers-pro-feature3 = Priorisierter Support\npricing-tiers-pro-feature4 = Private Ergebnisse\npricing-tiers-pro-feature5 = CI-Integration\npricing-tiers-pro-feature6 = Historische Daten\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Individuell\npricing-tiers-enterprise-feature1 = Alles in Pro enthalten\npricing-tiers-enterprise-feature2 = On-Premise-Option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedizierter Account Manager\npricing-tiers-enterprise-feature5 = Individuelle SLAs\npricing-tiers-enterprise-feature6 = Audit-Protokolle\npricing-tiers-enterprise-feature7 = Schulungssitzungen\npricing-tiers-contact-sales = Vertrieb kontaktieren\npricing-tiers-get-started = Erste Schritte\nproducts-header-title = Produkte\nproducts-header-description = Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.\nproducts-grid-learn-more = Mehr erfahren\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\nproducts-grid-cli-price = Kostenlos\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.\nproducts-grid-cloud-price = 29 $/Monat\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.\nproducts-grid-enterprise-price = Kontaktieren Sie uns\nproducts-grid-migration-name = Migrationsassistent\nproducts-grid-migration-desc = KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.\nproducts-grid-migration-price = Einmalig 99 $\nproducts-grid-qa-name = Übersetzungs-QA\nproducts-grid-qa-desc = Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\nproducts-grid-qa-price = 19 $/Monat\nproducts-grid-optimizer-name = Bundle-Optimierer\nproducts-grid-optimizer-desc = Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\nproducts-grid-optimizer-price = 49 $/Monat\nsettings-header-title = Einstellungen\nsettings-header-description = Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.\nsettings-profile-title = Profil\nsettings-profile-display-name = Anzeigename\nsettings-profile-email = E-Mail\nsettings-preferences-title = Einstellungen\nsettings-preferences-email-notifications = E-Mail-Benachrichtigungen\nsettings-preferences-weekly-reports = Wöchentliche Benchmark-Berichte erhalten\nsettings-preferences-toggle-notifications = Benachrichtigungen umschalten\nsettings-preferences-dark-mode = Dunkelmodus\nsettings-preferences-dark-color-scheme = Dunkles Farbschema verwenden\nsettings-preferences-toggle-dark-mode = Dunkelmodus umschalten\nsettings-preferences-default-language = Standardsprache\nsettings-preferences-english = Englisch (en)\nsettings-preferences-french = Französisch (fr)\nsettings-preferences-german = Deutsch (de)\nsettings-preferences-spanish = Spanisch (es)\nsettings-preferences-japanese = Japanisch (ja)\nsettings-preferences-chinese = Chinesisch vereinfacht (zh-CN)\nsettings-preferences-arabic = Arabisch (ar)\nsettings-api-access-title = API-Zugriff\nsettings-api-access-api-key = API-Schlüssel\nsettings-api-access-copy = Kopieren\nsettings-api-access-description = Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.\nsettings-footer-cancel = Abbrechen\nsettings-footer-save-changes = Änderungen speichern\nteam-header-title = Unser Team\nteam-header-description = Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Gründerin & Leitende Ingenieurin\nteam-grid-member1-bio = Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance-Ingenieur\nteam-grid-member2-bio = Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack-Entwickler\nteam-grid-member4-bio = Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Datenanalyst\nteam-grid-member5-bio = Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\nnot-found-title = 404\nnot-found-description = Hoppla! Seite nicht gefunden\nnot-found-return-home = Zurück zur Startseite");
}
function it_ftl_vue_type_fluent_index_4_src_true_locale_it_lang_default(Component) {
	const target = Component.options || Component;
	target.fluent = target.fluent || {};
	target.fluent["it"] = new FluentResource("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Vai su GitHub\nheader-home = Home\nheader-methodology = Metodologia\nheader-mock-pages = Pagine di test\nheader-products = Prodotti\nheader-pricing = Prezzi\nheader-team = Team\nheader-blog = Blog\nheader-careers = Carriere\nheader-faq = FAQ\nheader-contact = Contatti\nheader-settings = Impostazioni\nfooter-title = i18n Benchmark\nfooter-description = Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.\nfooter-resources = Risorse\nfooter-github = GitHub\nfooter-methodology = Metodologia\nfooter-contributing = Contribuire\nfooter-contact = Contatti\nfooter-built-with = i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.\ntheme-toggle-auto = Tema: Auto\ntheme-toggle-dark = Tema: Scuro\ntheme-toggle-light = Tema: Chiaro\ntheme-toggle-label-auto = Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.\ntheme-toggle-label-other = Modalità tema: {mode}. Clicca per cambiare modalità.\nmock-banner = ⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.\nhome-hero-view-results = Visualizza i risultati\nhome-hero-methodology = Metodologia\nhome-why-it-matters-title = Perché queste metriche sono importanti\nhome-why-it-matters-bundle-size-title = Dimensione del bundle\nhome-why-it-matters-bundle-size-desc = Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\nhome-why-it-matters-rendering-title = Rendering e idratazione\nhome-why-it-matters-rendering-desc = Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Caricamento dinamico\nhome-why-it-matters-dynamic-loading-desc = Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\nhome-understanding-impact-title = Capire l'impatto\nhome-understanding-impact-single-json-title = Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\nhome-understanding-impact-single-json-intro = Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\nhome-understanding-impact-single-json-bullet1 = Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.\nhome-understanding-impact-single-json-bullet2 = Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\nhome-understanding-impact-single-json-bullet3 = Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.\nhome-understanding-impact-trade-offs-title = I compromessi del caricamento dinamico\nhome-understanding-impact-trade-offs-intro = La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\nhome-understanding-impact-waterfall-label = Richieste a cascata:\nhome-understanding-impact-waterfall-desc = l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.\nhome-understanding-impact-fouc-label = Flash di contenuti non tradotti (FOUC):\nhome-understanding-impact-fouc-desc = gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\nhome-understanding-impact-cache-label = Invalidazione della cache:\nhome-understanding-impact-cache-desc = l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.\nhome-understanding-impact-measures-title = Cosa misura questo benchmark\nhome-understanding-impact-measures-desc = Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\nhome-results-table-title = Risultati di esempio\nhome-results-table-library = Libreria\nhome-results-table-bundle-size = Dimensione del bundle\nhome-results-table-lookup-time = Tempo di ricerca\nhome-results-table-lazy-loading = Caricamento lazy\nhome-results-table-yes = Sì\nhome-results-table-manual = Manuale\nhome-results-table-built-in = Integrato\nabout-header-title = Informazioni su questo benchmark\nabout-header-description = Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.\nabout-grid-why-exists-title = Perché esiste\nabout-grid-why-exists-desc = Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\nabout-grid-methodology-title = Metodologia\nabout-grid-methodology-desc = La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\nabout-what-we-measure-title = Cosa misuriamo\nabout-what-we-measure-bundle-size-impact = Impatto sulla dimensione del bundle\nabout-what-we-measure-bundle-size-impact-desc = I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.\nabout-what-we-measure-rendering-overhead = Sovrapprezzo di rendering\nabout-what-we-measure-rendering-overhead-desc = Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\nabout-what-we-measure-hydration-cost = Costo di idratazione\nabout-what-we-measure-hydration-cost-desc = Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.\nabout-what-we-measure-lazy-loading = Efficacia del caricamento pigro\nabout-what-we-measure-lazy-loading-desc = Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).\nabout-what-we-measure-locale-switch = Velocità di cambio lingua\nabout-what-we-measure-locale-switch-desc = Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.\nblog-header-title = Blog\nblog-header-description = Approfondimenti, tutorial e analisi dalla comunità i18n.\nblog-list-read-more = Leggi di più →\nblog-list-post1-title = Confronto delle librerie i18n nel 2026: un'analisi approfondita\nblog-list-post1-date = 15 marzo 2026\nblog-list-post1-excerpt = Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Come ridurre il bundle i18n del 60%\nblog-list-post2-date = 8 marzo 2026\nblog-list-post2-excerpt = Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = Lo stato dell'internazionalizzazione in React\nblog-list-post3-date = 28 febbraio 2026\nblog-list-post3-excerpt = Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\nblog-list-post3-category = Analisi\nblog-list-post4-title = Migrazione da react-i18next a Lingui\nblog-list-post4-date = 15 febbraio 2026\nblog-list-post4-excerpt = Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: cosa cambia?\nblog-list-post5-date = 1 febbraio 2026\nblog-list-post5-excerpt = I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\nblog-list-post5-category = Analisi\nblog-list-post6-title = Metodologia del benchmark: come testiamo\nblog-list-post6-date = 20 gennaio 2026\nblog-list-post6-excerpt = Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.\nblog-list-post6-category = Meta\ncareers-header-title = Carriere\ncareers-header-description = Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Lavora da qualsiasi parte del mondo\ncareers-benefits-pay-label = Retribuzione competitiva\ncareers-benefits-pay-value = Compensazione ai vertici del mercato\ncareers-benefits-oss-label = Tempo per l'open source\ncareers-benefits-oss-value = 20% del tempo per contributi open source\ncareers-open-positions-title = Posizioni aperte\ncareers-open-positions-apply-now = Candidati ora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tempo pieno\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentazione\ncareers-open-positions-community = Comunità\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Ingegnere Frontend Senior\ncareers-open-positions-frontend-desc = Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.\ncareers-open-positions-writer-title = Scrittore tecnico\ncareers-open-positions-writer-desc = Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\ncareers-open-positions-devrel-title = Ingegnere DevRel\ncareers-open-positions-devrel-desc = Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.\ncareers-open-positions-qa-title = Ingegnere QA\ncareers-open-positions-qa-desc = Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\ncontact-header-title = Contattaci\ncontact-header-description = Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo\ncontact-form-name = Nome\ncontact-form-your-name = Il tuo nome\ncontact-form-email = Email\ncontact-form-email-placeholder = tu@esempio.com\ncontact-form-topic = Argomento\ncontact-form-bug-report = Segnalazione bug\ncontact-form-new-benchmark-idea = Nuova idea di benchmark\ncontact-form-methodology-question = Domanda sulla metodologia\ncontact-form-contribution = Contributo\ncontact-form-other = Altro\ncontact-form-message = Messaggio\ncontact-form-message-placeholder = Descrivi la tua domanda o idea...\ncontact-form-send-message = Invia messaggio\nfaq-header-title = Domande frequenti\nfaq-header-description = Tutto quello che c'è da sapere su i18n Benchmark.\nfaq-list-q1 = Cos'è i18n Benchmark?\nfaq-list-a1 = i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.\nfaq-list-q2 = Come vengono condotti i benchmark?\nfaq-list-a2 = Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.\nfaq-list-q3 = Quali librerie sono attualmente supportate?\nfaq-list-a3 = Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\nfaq-list-q4 = Posso inviare i miei benchmark?\nfaq-list-a4 = Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.\nfaq-list-q5 = Con quale frequenza vengono aggiornati i benchmark?\nfaq-list-a5 = Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.\nfaq-list-q6 = I dati sono affidabili?\nfaq-list-a6 = Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.\nfaq-list-q7 = Offrite servizi di consulenza?\nfaq-list-a7 = Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.\nfaq-list-q8 = Come posso contribuire?\nfaq-list-a8 = Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\npricing-header-title = Prezzi semplici e trasparenti\npricing-header-description = Scegli il piano più adatto al tuo team. Nessun costo nascosto.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = per sempre\npricing-tiers-starter-feature1 = 5 esecuzioni benchmark al giorno\npricing-tiers-starter-feature2 = 3 librerie\npricing-tiers-starter-feature3 = Supporto della comunità\npricing-tiers-starter-feature4 = Risultati pubblici\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mese\npricing-tiers-pro-feature1 = Esecuzioni illimitate\npricing-tiers-pro-feature2 = Tutte le librerie\npricing-tiers-pro-feature3 = Supporto prioritario\npricing-tiers-pro-feature4 = Risultati privati\npricing-tiers-pro-feature5 = Integrazione CI\npricing-tiers-pro-feature6 = Dati storici\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizzato\npricing-tiers-enterprise-feature1 = Tutto quello che c'è in Pro\npricing-tiers-enterprise-feature2 = Opzione on-premise\npricing-tiers-enterprise-feature3 = SSO e SAML\npricing-tiers-enterprise-feature4 = Account manager dedicato\npricing-tiers-enterprise-feature5 = SLA personalizzati\npricing-tiers-enterprise-feature6 = Log di controllo\npricing-tiers-enterprise-feature7 = Sessioni di formazione\npricing-tiers-contact-sales = Contatta l'ufficio vendite\npricing-tiers-get-started = Inizia ora\nproducts-header-title = Prodotti\nproducts-header-description = Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.\nproducts-grid-learn-more = Scopri di più\nproducts-grid-cli-name = CLI del Benchmark\nproducts-grid-cli-desc = Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\nproducts-grid-cli-price = Gratis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.\nproducts-grid-cloud-price = 29 $/mese\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.\nproducts-grid-enterprise-price = Contattaci\nproducts-grid-migration-name = Assistente alla migrazione\nproducts-grid-migration-desc = Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.\nproducts-grid-migration-price = 99 $ una tantum\nproducts-grid-qa-name = QA delle traduzioni\nproducts-grid-qa-desc = Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\nproducts-grid-qa-price = 19 $/mese\nproducts-grid-optimizer-name = Ottimizzatore del bundle\nproducts-grid-optimizer-desc = Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\nproducts-grid-optimizer-price = 49 $/mese\nsettings-header-title = Impostazioni\nsettings-header-description = Gestisci le preferenze del tuo account e la configurazione.\nsettings-profile-title = Profilo\nsettings-profile-display-name = Nome visualizzato\nsettings-profile-email = Email\nsettings-preferences-title = Preferenze\nsettings-preferences-email-notifications = Notifiche via email\nsettings-preferences-weekly-reports = Ricevi rapporti settimanali sui benchmark\nsettings-preferences-toggle-notifications = Attiva/disattiva notifiche\nsettings-preferences-dark-mode = Modalità scura\nsettings-preferences-dark-color-scheme = Usa lo schema colori scuro\nsettings-preferences-toggle-dark-mode = Attiva/disattiva modalità scura\nsettings-preferences-default-language = Lingua predefinita\nsettings-preferences-english = Inglese (en)\nsettings-preferences-french = Francese (fr)\nsettings-preferences-german = Tedesco (de)\nsettings-preferences-spanish = Spagnolo (es)\nsettings-preferences-japanese = Giapponese (ja)\nsettings-preferences-chinese = Cinese semplificato (zh-CN)\nsettings-preferences-arabic = Arabo (ar)\nsettings-api-access-title = Accesso API\nsettings-api-access-api-key = Chiave API\nsettings-api-access-copy = Copia\nsettings-api-access-description = Usa questa chiave per accedere programmaticamente alle API di benchmarking.\nsettings-footer-cancel = Annulla\nsettings-footer-save-changes = Salva modifiche\nteam-header-title = Il nostro team\nteam-header-description = Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fondatrice e Responsabile tecnico\nteam-grid-member1-bio = Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingegnere delle prestazioni\nteam-grid-member2-bio = Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Sviluppatore Full-Stack\nteam-grid-member4-bio = Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista dati\nteam-grid-member5-bio = Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Responsable della comunità\nteam-grid-member6-bio = Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\nnot-found-title = 404\nnot-found-description = Ops! Pagina non trovata\nnot-found-return-home = Torna alla Home");
}
function pt_ftl_vue_type_fluent_index_5_src_true_locale_pt_lang_default(Component) {
	const target = Component.options || Component;
	target.fluent = target.fluent || {};
	target.fluent["pt"] = new FluentResource("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Ir para o GitHub\nheader-home = Início\nheader-methodology = Metodologia\nheader-mock-pages = Páginas de Teste\nheader-products = Produtos\nheader-pricing = Preços\nheader-team = Equipe\nheader-blog = Blog\nheader-careers = Carreiras\nheader-faq = FAQ\nheader-contact = Contato\nheader-settings = Configurações\nfooter-title = i18n Benchmark\nfooter-description = Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.\nfooter-resources = Recursos\nfooter-github = GitHub\nfooter-methodology = Metodologia\nfooter-contributing = Contribuindo\nfooter-contact = Contato\nfooter-built-with = i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.\ntheme-toggle-auto = Tema: Automático\ntheme-toggle-dark = Tema: Escuro\ntheme-toggle-light = Tema: Claro\ntheme-toggle-label-auto = Modo de tema: auto (sistema). Clique para mudar para o modo claro.\ntheme-toggle-label-other = Modo de tema: {mode}. Clique para mudar de modo.\nmock-banner = ⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.\nhome-hero-view-results = Ver Resultados\nhome-hero-methodology = Metodologia\nhome-why-it-matters-title = Por que estas métricas importam\nhome-why-it-matters-bundle-size-title = Tamanho do bundle\nhome-why-it-matters-bundle-size-desc = O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.\nhome-why-it-matters-rendering-title = Renderização e hidratação\nhome-why-it-matters-rendering-desc = Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Carregamento dinâmico\nhome-why-it-matters-dynamic-loading-desc = Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\nhome-understanding-impact-title = Entendendo o impacto\nhome-understanding-impact-single-json-title = Por que um único JSON grande pode prejudicar o desempenho\nhome-understanding-impact-single-json-intro = Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\nhome-understanding-impact-single-json-bullet1 = O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\nhome-understanding-impact-single-json-bullet2 = Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\nhome-understanding-impact-single-json-bullet3 = Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\nhome-understanding-impact-trade-offs-title = Os trade-offs do carregamento dinâmico\nhome-understanding-impact-trade-offs-intro = Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:\nhome-understanding-impact-waterfall-label = Requisições em cascata:\nhome-understanding-impact-waterfall-desc = o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.\nhome-understanding-impact-fouc-label = Flash de conteúdo não traduzido (FOUC):\nhome-understanding-impact-fouc-desc = usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.\nhome-understanding-impact-cache-label = Invalidação de cache:\nhome-understanding-impact-cache-desc = atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.\nhome-understanding-impact-measures-title = O que este benchmark mede\nhome-understanding-impact-measures-desc = Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.\nhome-results-table-title = Resultados de exemplo\nhome-results-table-library = Biblioteca\nhome-results-table-bundle-size = Tamanho do Bundle\nhome-results-table-lookup-time = Tempo de Busca\nhome-results-table-lazy-loading = Carregamento Lento\nhome-results-table-yes = Sim\nhome-results-table-manual = Manual\nhome-results-table-built-in = Integrado\nabout-header-title = Sobre este benchmark\nabout-header-description = Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.\nabout-grid-why-exists-title = Por que isto existe\nabout-grid-why-exists-desc = Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\nabout-grid-methodology-title = Metodologia\nabout-grid-methodology-desc = O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.\nabout-what-we-measure-title = O que medimos\nabout-what-we-measure-bundle-size-impact = Impacto no tamanho do bundle\nabout-what-we-measure-bundle-size-impact-desc = Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\nabout-what-we-measure-rendering-overhead = Sobrecarga de renderização\nabout-what-we-measure-rendering-overhead-desc = Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.\nabout-what-we-measure-hydration-cost = Custo de hidratação\nabout-what-we-measure-hydration-cost-desc = Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.\nabout-what-we-measure-lazy-loading = Eficácia do carregamento lento\nabout-what-we-measure-lazy-loading-desc = Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).\nabout-what-we-measure-locale-switch = Velocidade de troca de localidade\nabout-what-we-measure-locale-switch-desc = Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutoriais e análises da comunidade i18n.\nblog-list-read-more = Ler Mais →\nblog-list-post1-title = Comparando bibliotecas i18n em 2026: um mergulho profundo\nblog-list-post1-date = 15 de março de 2026\nblog-list-post1-excerpt = Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Como reduzir seu bundle i18n em 60%\nblog-list-post2-date = 8 de março de 2026\nblog-list-post2-excerpt = Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = O estado da internacionalização no React\nblog-list-post3-date = 28 de fevereiro de 2026\nblog-list-post3-excerpt = Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\nblog-list-post3-category = Análise\nblog-list-post4-title = Migrando de react-i18next para o Lingui\nblog-list-post4-date = 15 de fevereiro de 2026\nblog-list-post4-excerpt = Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: o que muda?\nblog-list-post5-date = 1 de fevereiro de 2026\nblog-list-post5-excerpt = React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.\nblog-list-post5-category = Análise\nblog-list-post6-title = Metodologia de benchmark: como testamos\nblog-list-post6-date = 20 de janeiro de 2026\nblog-list-post6-excerpt = Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\nblog-list-post6-category = Meta\ncareers-header-title = Carreiras\ncareers-header-description = Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.\ncareers-benefits-remote-label = Remoto primeiro\ncareers-benefits-remote-value = Trabalhe de qualquer lugar do mundo\ncareers-benefits-pay-label = Salário competitivo\ncareers-benefits-pay-value = Remuneração acima do mercado\ncareers-benefits-oss-label = Tempo para o código aberto\ncareers-benefits-oss-value = 20% do tempo para contribuições OSS\ncareers-open-positions-title = Vagas abertas\ncareers-open-positions-apply-now = Candidatar-se agora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tempo integral\ncareers-open-positions-part-time = Tempo parcial\ncareers-open-positions-engineering = Engenharia\ncareers-open-positions-documentation = Documentação\ncareers-open-positions-community = Comunidade\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Engenheiro Frontend Sênior\ncareers-open-positions-frontend-desc = Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\ncareers-open-positions-backend-title = Engenheiro Backend\ncareers-open-positions-backend-desc = Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.\ncareers-open-positions-writer-title = Redator técnico\ncareers-open-positions-writer-desc = Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\ncareers-open-positions-devrel-title = Engenheiro de DevRel\ncareers-open-positions-devrel-desc = Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.\ncareers-open-positions-qa-title = Engenheiro de QA\ncareers-open-positions-qa-desc = Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.\ncontact-header-title = Entre em contato\ncontact-header-description = Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em\ncontact-form-name = Nome\ncontact-form-your-name = Seu nome\ncontact-form-email = E-mail\ncontact-form-email-placeholder = voce@exemplo.com\ncontact-form-topic = Assunto\ncontact-form-bug-report = Relatório de bug\ncontact-form-new-benchmark-idea = Nova ideia de benchmark\ncontact-form-methodology-question = Pergunta sobre metodologia\ncontact-form-contribution = Contribuição\ncontact-form-other = Outro\ncontact-form-message = Mensagem\ncontact-form-message-placeholder = Descreva sua pergunta ou ideia...\ncontact-form-send-message = Enviar mensagem\nfaq-header-title = Perguntas frequentes\nfaq-header-description = Tudo o que você precisa saber sobre o i18n Benchmark.\nfaq-list-q1 = O que é o i18n Benchmark?\nfaq-list-a1 = O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.\nfaq-list-q2 = Como os benchmarks são conduzidos?\nfaq-list-a2 = Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.\nfaq-list-q3 = Quais bibliotecas são suportadas atualmente?\nfaq-list-a3 = Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\nfaq-list-q4 = Posso enviar meus próprios benchmarks?\nfaq-list-a4 = Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\nfaq-list-q5 = Com que frequência os benchmarks são atualizados?\nfaq-list-a5 = Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.\nfaq-list-q6 = Os dados são confiáveis?\nfaq-list-a6 = Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\nfaq-list-q7 = Vocês oferecem serviços de consultoria?\nfaq-list-a7 = Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.\nfaq-list-q8 = Como posso contribuir?\nfaq-list-a8 = Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.\npricing-header-title = Preços simples e transparentes\npricing-header-description = Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = para sempre\npricing-tiers-starter-feature1 = 5 execuções de benchmark/dia\npricing-tiers-starter-feature2 = 3 bibliotecas\npricing-tiers-starter-feature3 = Suporte da comunidade\npricing-tiers-starter-feature4 = Resultados públicos\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mês\npricing-tiers-pro-feature1 = Execuções ilimitadas\npricing-tiers-pro-feature2 = Todas as bibliotecas\npricing-tiers-pro-feature3 = Suporte prioritário\npricing-tiers-pro-feature4 = Resultados privados\npricing-tiers-pro-feature5 = Integração CI\npricing-tiers-pro-feature6 = Dados históricos\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizado\npricing-tiers-enterprise-feature1 = Tudo o que está no Pro\npricing-tiers-enterprise-feature2 = Opção on-premise\npricing-tiers-enterprise-feature3 = SSO e SAML\npricing-tiers-enterprise-feature4 = Gerente de conta dedicado\npricing-tiers-enterprise-feature5 = SLAs personalizados\npricing-tiers-enterprise-feature6 = Logs de auditoria\npricing-tiers-enterprise-feature7 = Sessões de treinamento\npricing-tiers-contact-sales = Contatar vendas\npricing-tiers-get-started = Começar\nproducts-header-title = Produtos\nproducts-header-description = Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.\nproducts-grid-learn-more = Saiba Mais\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.\nproducts-grid-cli-price = Grátis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\nproducts-grid-cloud-price = 29 $/mês\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\nproducts-grid-enterprise-price = Contate-nos\nproducts-grid-migration-name = Assistente de migração\nproducts-grid-migration-desc = Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.\nproducts-grid-migration-price = 99 $ taxa única\nproducts-grid-qa-name = QA de tradução\nproducts-grid-qa-desc = Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.\nproducts-grid-qa-price = 19 $/mês\nproducts-grid-optimizer-name = Otimizador de bundle\nproducts-grid-optimizer-desc = Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\nproducts-grid-optimizer-price = 49 $/mês\nsettings-header-title = Configurações\nsettings-header-description = Gerencie suas preferências de conta e configuração.\nsettings-profile-title = Perfil\nsettings-profile-display-name = Nome de exibição\nsettings-profile-email = E-mail\nsettings-preferences-title = Preferências\nsettings-preferences-email-notifications = Notificações por e-mail\nsettings-preferences-weekly-reports = Receber relatórios semanais de benchmarks\nsettings-preferences-toggle-notifications = Alternar notificações\nsettings-preferences-dark-mode = Modo Escuro\nsettings-preferences-dark-color-scheme = Usar esquema de cores escuro\nsettings-preferences-toggle-dark-mode = Alternar modo escuro\nsettings-preferences-default-language = Idioma padrão\nsettings-preferences-english = Inglês (en)\nsettings-preferences-french = Francés (fr)\nsettings-preferences-german = Alemão (de)\nsettings-preferences-spanish = Espanhol (es)\nsettings-preferences-japanese = Japonês (ja)\nsettings-preferences-chinese = Chinês Simplificado (zh-CN)\nsettings-preferences-arabic = Árabe (ar)\nsettings-api-access-title = Acesso API\nsettings-api-access-api-key = Chave API\nsettings-api-access-copy = Copiar\nsettings-api-access-description = Use esta chave para acessar a API de benchmarking programaticamente.\nsettings-footer-cancel = Cancelar\nsettings-footer-save-changes = Salvar alterações\nteam-header-title = Nossa equipe\nteam-header-description = Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fundadora e Engenheira Líder\nteam-grid-member1-bio = Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Engenheiro de performance\nteam-grid-member2-bio = Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Desenvolvedor Full-Stack\nteam-grid-member4-bio = Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista de dados\nteam-grid-member5-bio = Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Gerente de comunidade\nteam-grid-member6-bio = Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\nnot-found-title = 404\nnot-found-description = Ops! Página não encontrada\nnot-found-return-home = Voltar para o início");
}
function zh_ftl_vue_type_fluent_index_6_src_true_locale_zh_lang_default(Component) {
	const target = Component.options || Component;
	target.fluent = target.fluent || {};
	target.fluent["zh"] = new FluentResource("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = 前往 GitHub\nheader-home = 首页\nheader-methodology = 方法论\nheader-mock-pages = 模拟页面\nheader-products = 产品\nheader-pricing = 价格\nheader-team = 团队\nheader-blog = 博客\nheader-careers = 招聘\nheader-faq = 常见问题\nheader-contact = 联系我们\nheader-settings = 设置\nfooter-title = i18n Benchmark\nfooter-description = 一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。\nfooter-resources = 资源\nfooter-github = GitHub\nfooter-methodology = 方法论\nfooter-contributing = 贡献\nfooter-contact = 联系我们\nfooter-built-with = i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。\ntheme-toggle-auto = 主题：自动\ntheme-toggle-dark = 主题：深色\ntheme-toggle-light = 主题：浅色\ntheme-toggle-label-auto = 主题模式：自动（系统）。点击切换到浅色模式。\ntheme-toggle-label-other = 主题模式：{mode}。点击切换模式。\nmock-banner = ⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。\nhome-hero-title = i18n Benchmark\nhome-hero-description = 一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。\nhome-hero-view-results = 查看结果\nhome-hero-methodology = 方法论\nhome-why-it-matters-title = 为什么这些指标很重要\nhome-why-it-matters-bundle-size-title = 包大小\nhome-why-it-matters-bundle-size-desc = 包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\nhome-why-it-matters-rendering-title = 渲染与注水\nhome-why-it-matters-rendering-desc = 将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。\nhome-why-it-matters-dynamic-loading-title = 动态加载\nhome-why-it-matters-dynamic-loading-desc = 预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\nhome-understanding-impact-title = 理解影响\nhome-understanding-impact-single-json-title = 为什么单个大型 JSON 会损害性能\nhome-understanding-impact-single-json-intro = 许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：\nhome-understanding-impact-single-json-bullet1 = 每次页面加载时都必须解析 JSON — 阻塞主线程。\nhome-understanding-impact-single-json-bullet2 = 当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。\nhome-understanding-impact-single-json-bullet3 = 在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。\nhome-understanding-impact-trade-offs-title = 动态加载的权衡\nhome-understanding-impact-trade-offs-intro = 将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：\nhome-understanding-impact-waterfall-label = 瀑布流请求：\nhome-understanding-impact-waterfall-desc = 应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。\nhome-understanding-impact-fouc-label = 未翻译内容闪烁 (FOUC)：\nhome-understanding-impact-fouc-desc = 在块到达之前，用户可能会短暂看到翻译键或回退语言。\nhome-understanding-impact-cache-label = 缓存失效：\nhome-understanding-impact-cache-desc = 更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。\nhome-understanding-impact-measures-title = 此基准测试衡量的内容\nhome-understanding-impact-measures-desc = 此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。\nhome-results-table-title = 示例结果\nhome-results-table-library = 库\nhome-results-table-bundle-size = 包大小\nhome-results-table-lookup-time = 查找时间\nhome-results-table-lazy-loading = 延迟加载\nhome-results-table-yes = 是\nhome-results-table-manual = 手动\nhome-results-table-built-in = 内置\nabout-header-title = 关于此基准测试\nabout-header-description = 这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。\nabout-grid-why-exists-title = 为什么存在这个测试\nabout-grid-why-exists-desc = 选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。\nabout-grid-methodology-title = 方法论\nabout-grid-methodology-desc = 相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。\nabout-what-we-measure-title = 衡量指标\nabout-what-we-measure-bundle-size-impact = 包大小影响\nabout-what-we-measure-bundle-size-impact-desc = 包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。\nabout-what-we-measure-rendering-overhead = 渲染开销\nabout-what-we-measure-rendering-overhead-desc = 库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。\nabout-what-we-measure-hydration-cost = 注水成本\nabout-what-we-measure-hydration-cost-desc = 在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。\nabout-what-we-measure-lazy-loading = 延迟加载有效性\nabout-what-we-measure-lazy-loading-desc = 按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。\nabout-what-we-measure-locale-switch = 语言环境切换速度\nabout-what-we-measure-locale-switch-desc = 应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。\nblog-header-title = 博客\nblog-header-description = 来自 i18n 社区的见解、教程和分析。\nblog-list-read-more = 阅读更多 →\nblog-list-post1-title = 2026 年 i18n 库对比：深度分析\nblog-list-post1-date = 2026年3月15日\nblog-list-post1-excerpt = 我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。\nblog-list-post1-category = 基准测试\nblog-list-post2-title = 如何将 i18n 包大小减少 60%\nblog-list-post2-date = 2026年3月8日\nblog-list-post2-excerpt = 优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\nblog-list-post2-category = 教程\nblog-list-post3-title = React 国际化现状\nblog-list-post3-date = 2026年2月28日\nblog-list-post3-excerpt = React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。\nblog-list-post3-category = 分析\nblog-list-post4-title = 从 react-i18next 迁移到 Lingui\nblog-list-post4-date = 2026年2月15日\nblog-list-post4-excerpt = 关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。\nblog-list-post4-category = 教程\nblog-list-post5-title = Server Components 与 i18n：发生了什么变化？\nblog-list-post5-date = 2026年2月1日\nblog-list-post5-excerpt = React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\nblog-list-post5-category = 分析\nblog-list-post6-title = 基准测试方法论：我们如何测试\nblog-list-post6-date = 2026年1月20日\nblog-list-post6-excerpt = 透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。\nblog-list-post6-category = Meta\ncareers-header-title = 招聘\ncareers-header-description = 加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。\ncareers-benefits-remote-label = 远程优先\ncareers-benefits-remote-value = 在世界任何地方工作\ncareers-benefits-pay-label = 具有竞争力的薪酬\ncareers-benefits-pay-value = 市场顶尖的薪资水平\ncareers-benefits-oss-label = 开源时间\ncareers-benefits-oss-value = 20% 的时间用于 OSS 贡献\ncareers-open-positions-title = 开放职位\ncareers-open-positions-apply-now = 立即申请\ncareers-open-positions-remote = 远程\ncareers-open-positions-full-time = 全职\ncareers-open-positions-part-time = 兼职\ncareers-open-positions-engineering = 工程\ncareers-open-positions-documentation = 文档\ncareers-open-positions-community = 社区\ncareers-open-positions-sf-remote = 旧金山 / 远程\ncareers-open-positions-frontend-title = 高级前端工程师\ncareers-open-positions-frontend-desc = 使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\ncareers-open-positions-backend-title = 后端工程师\ncareers-open-positions-backend-desc = 设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。\ncareers-open-positions-writer-title = 技术作家\ncareers-open-positions-writer-desc = 为我们的基准测试平台编写全面的指南、API 参考和教程。\ncareers-open-positions-devrel-title = DevRel 工程师\ncareers-open-positions-devrel-desc = 通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\ncareers-open-positions-qa-title = QA 工程师\ncareers-open-positions-qa-desc = 通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。\ncontact-header-title = 取得联系\ncontact-header-description = 有想法、发现了错误或想贡献基准测试？请联系我们：\ncontact-form-name = 姓名\ncontact-form-your-name = 您的姓名\ncontact-form-email = 电子邮件\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = 主题\ncontact-form-bug-report = 错误报告\ncontact-form-new-benchmark-idea = 新基准测试想法\ncontact-form-methodology-question = 方法论问题\ncontact-form-contribution = 贡献\ncontact-form-other = 其他\ncontact-form-message = 消息\ncontact-form-message-placeholder = 描述您的问题或想法...\ncontact-form-send-message = 发送消息\nfaq-header-title = 常见问题\nfaq-header-description = 关于 i18n 基准测试您需要了解的一切。\nfaq-list-q1 = 什么是 i18n 基准测试？\nfaq-list-a1 = i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。\nfaq-list-q2 = 基准测试是如何进行的？\nfaq-list-a2 = 我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。\nfaq-list-q3 = 目前支持哪些库？\nfaq-list-a3 = 我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。\nfaq-list-q4 = 我可以提交我自己的基准测试吗？\nfaq-list-a4 = 是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。\nfaq-list-q5 = 基准测试多久更新一次？\nfaq-list-a5 = 我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。\nfaq-list-q6 = 数据可靠吗？\nfaq-list-a6 = 我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\nfaq-list-q7 = 你们提供咨询服务吗？\nfaq-list-a7 = 是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。\nfaq-list-q8 = 我该如何贡献？\nfaq-list-a8 = 有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\npricing-header-title = 简单透明的定价\npricing-header-description = 选择适合您团队的计划。无隐藏费用。\npricing-tiers-starter-name = 入门版\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = 永久\npricing-tiers-starter-feature1 = 每天 5 次基准测试运行\npricing-tiers-starter-feature2 = 3 个库\npricing-tiers-starter-feature3 = 社区支持\npricing-tiers-starter-feature4 = 公开结果\npricing-tiers-pro-name = 专业版\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /月\npricing-tiers-pro-feature1 = 无限次运行\npricing-tiers-pro-feature2 = 所有库\npricing-tiers-pro-feature3 = 优先支持\npricing-tiers-pro-feature4 = 私有结果\npricing-tiers-pro-feature5 = CI 集成\npricing-tiers-pro-feature6 = 历史数据\npricing-tiers-enterprise-name = 企业版\npricing-tiers-enterprise-price = 定制\npricing-tiers-enterprise-feature1 = 包含专业版中的所有功能\npricing-tiers-enterprise-feature2 = 本地部署选项\npricing-tiers-enterprise-feature3 = SSO 和 SAML\npricing-tiers-enterprise-feature4 = 专属客户经理\npricing-tiers-enterprise-feature5 = 定制 SLA\npricing-tiers-enterprise-feature6 = 审计日志\npricing-tiers-enterprise-feature7 = 培训课程\npricing-tiers-contact-sales = 联系销售\npricing-tiers-get-started = 开始使用\nproducts-header-title = 产品\nproducts-header-description = 用于简化国际化工作流程的工具和服务。\nproducts-grid-learn-more = 了解更多\nproducts-grid-cli-name = 基准测试 CLI\nproducts-grid-cli-desc = 从您的终端本地运行基准测试。支持自定义配置和 CI 集成。\nproducts-grid-cli-price = 免费\nproducts-grid-cloud-name = 基准测试云\nproducts-grid-cloud-desc = 具有历史追踪、警报和团队仪表板的自动化云基准测试。\nproducts-grid-cloud-price = 29 $/月\nproducts-grid-enterprise-name = 基准测试企业版\nproducts-grid-enterprise-desc = 支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。\nproducts-grid-enterprise-price = 联系我们\nproducts-grid-migration-name = 迁移助手\nproducts-grid-migration-desc = AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。\nproducts-grid-migration-price = 99 $ 一次性费用\nproducts-grid-qa-name = 翻译 QA\nproducts-grid-qa-desc = 自动检查翻译缺失、复数问题和上下文错误。\nproducts-grid-qa-price = 19 $/月\nproducts-grid-optimizer-name = 包优化器\nproducts-grid-optimizer-desc = 通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。\nproducts-grid-optimizer-price = 49 $/月\nsettings-header-title = 设置\nsettings-header-description = 管理您的账户偏好和配置。\nsettings-profile-title = 个人资料\nsettings-profile-display-name = 显示名称\nsettings-profile-email = 电子邮件\nsettings-preferences-title = 偏好\nsettings-preferences-email-notifications = 电子邮件通知\nsettings-preferences-weekly-reports = 接收每周基准测试报告\nsettings-preferences-toggle-notifications = 切换通知\nsettings-preferences-dark-mode = 深色模式\nsettings-preferences-dark-color-scheme = 使用深色配色方案\nsettings-preferences-toggle-dark-mode = 切换深色模式\nsettings-preferences-default-language = 默认语言\nsettings-preferences-english = 英语 (en)\nsettings-preferences-french = 法语 (fr)\nsettings-preferences-german = 德语 (de)\nsettings-preferences-spanish = 西班牙语 (es)\nsettings-preferences-japanese = 日语 (ja)\nsettings-preferences-chinese = 简体中文 (zh-CN)\nsettings-preferences-arabic = 阿拉伯语 (ar)\nsettings-api-access-title = API 访问\nsettings-api-access-api-key = API 密钥\nsettings-api-access-copy = 复制\nsettings-api-access-description = 使用此密钥以编程方式访问基准测试 API。\nsettings-footer-cancel = 取消\nsettings-footer-save-changes = 保存更改\nteam-header-title = 我们的团队\nteam-header-description = 了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = 创始人兼首席工程师\nteam-grid-member1-bio = 前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = 性能工程师\nteam-grid-member2-bio = 专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = 开发者倡导者\nteam-grid-member3-bio = 对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = 全栈开发人员\nteam-grid-member4-bio = 维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = 数据分析师\nteam-grid-member5-bio = 确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = 社区经理\nteam-grid-member6-bio = 管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\nnot-found-title = 404\nnot-found-description = 哎呀！页面未找到\nnot-found-return-home = 返回首页");
}
function ja_ftl_vue_type_fluent_index_7_src_true_locale_ja_lang_default(Component) {
	const target = Component.options || Component;
	target.fluent = target.fluent || {};
	target.fluent["ja"] = new FluentResource("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = GitHubへ\nheader-home = ホーム\nheader-methodology = 手法\nheader-mock-pages = テストページ\nheader-products = 製品\nheader-pricing = 価格\nheader-team = チーム\nheader-blog = ブログ\nheader-careers = 採用情報\nheader-faq = FAQ\nheader-contact = お問い合わせ\nheader-settings = 設定\nfooter-title = i18n Benchmark\nfooter-description = 国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。\nfooter-resources = リソース\nfooter-github = GitHub\nfooter-methodology = 手法\nfooter-contributing = 貢献する\nfooter-contact = お問い合わせ\nfooter-built-with = i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。\ntheme-toggle-auto = テーマ：自動\ntheme-toggle-dark = テーマ：ダーク\ntheme-toggle-light = テーマ：ライト\ntheme-toggle-label-auto = テーマモード：自動（システム）。クリックするとライトモードに切り替わります。\ntheme-toggle-label-other = テーマモード：{mode}。クリックしてモードを切り替えます。\nmock-banner = ⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。\nhome-hero-title = i18n Benchmark\nhome-hero-description = 国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。\nhome-hero-view-results = 結果を見る\nhome-hero-methodology = 手法\nhome-why-it-matters-title = なぜこれらの指標が重要なのか\nhome-why-it-matters-bundle-size-title = バンドルサイズ\nhome-why-it-matters-bundle-size-desc = バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。\nhome-why-it-matters-rendering-title = レンダリングとハイドレーション\nhome-why-it-matters-rendering-desc = 巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。\nhome-why-it-matters-dynamic-loading-title = 動的読み込み\nhome-why-it-matters-dynamic-loading-desc = すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。\nhome-understanding-impact-title = 影響を理解する\nhome-understanding-impact-single-json-title = なぜ1つの大きなJSONがパフォーマンスを低下させるのか\nhome-understanding-impact-single-json-intro = 多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\nhome-understanding-impact-single-json-bullet1 = ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。\nhome-understanding-impact-single-json-bullet2 = コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。\nhome-understanding-impact-single-json-bullet3 = サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\nhome-understanding-impact-trade-offs-title = 動的読み込みのトレードオフ\nhome-understanding-impact-trade-offs-intro = 翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：\nhome-understanding-impact-waterfall-label = ウォーターフォールリクエスト：\nhome-understanding-impact-waterfall-desc = アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\nhome-understanding-impact-fouc-label = 翻訳されていないコンテンツのフラッシュ (FOUC)：\nhome-understanding-impact-fouc-desc = チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。\nhome-understanding-impact-cache-label = キャッシュの無効化：\nhome-understanding-impact-cache-desc = 翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。\nhome-understanding-impact-measures-title = このベンチマークが測定するもの\nhome-understanding-impact-measures-desc = このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\nhome-results-table-title = サンプル結果\nhome-results-table-library = ライブラリ\nhome-results-table-bundle-size = バンドルサイズ\nhome-results-table-lookup-time = ルックアップ時間\nhome-results-table-lazy-loading = 遅延読み込み\nhome-results-table-yes = はい\nhome-results-table-manual = 手動\nhome-results-table-built-in = 内蔵\nabout-header-title = このベンチマークについて\nabout-header-description = これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。\nabout-grid-why-exists-title = なぜこれが存在するのか\nabout-grid-why-exists-desc = i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。\nabout-grid-methodology-title = 手法\nabout-grid-methodology-desc = 同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。\nabout-what-we-measure-title = 測定項目\nabout-what-we-measure-bundle-size-impact = バンドルサイズへの影響\nabout-what-we-measure-bundle-size-impact-desc = i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。\nabout-what-we-measure-rendering-overhead = レンダリングのオーバーヘッド\nabout-what-we-measure-rendering-overhead-desc = ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\nabout-what-we-measure-hydration-cost = ハイドレーションコスト\nabout-what-we-measure-hydration-cost-desc = SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。\nabout-what-we-measure-lazy-loading = 遅延読み込みの有効性\nabout-what-we-measure-lazy-loading-desc = ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。\nabout-what-we-measure-locale-switch = ロケール切り替え速度\nabout-what-we-measure-locale-switch-desc = 実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\nblog-header-title = ブログ\nblog-header-description = i18nコミュニティからのインサイト、チュートリアル、分析。\nblog-list-read-more = 続きを読む →\nblog-list-post1-title = 2026年のi18nライブラリ比較：ディープダイブ\nblog-list-post1-date = 2026年3月15日\nblog-list-post1-excerpt = パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\nblog-list-post1-category = ベンチマーク\nblog-list-post2-title = i18nバンドルを60%削減する方法\nblog-list-post2-date = 2026年3月8日\nblog-list-post2-excerpt = 遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。\nblog-list-post2-category = チュートリアル\nblog-list-post3-title = Reactにおける国際化の現状\nblog-list-post3-date = 2026年2月28日\nblog-list-post3-excerpt = トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。\nblog-list-post3-category = 分析\nblog-list-post4-title = react-i18nextからLinguiへの移行\nblog-list-post4-date = 2026年2月15日\nblog-list-post4-excerpt = 50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\nblog-list-post4-category = チュートリアル\nblog-list-post5-title = Server Componentsとi18n：何が変わるのか？\nblog-list-post5-date = 2026年2月1日\nblog-list-post5-excerpt = React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\nblog-list-post5-category = 分析\nblog-list-post6-title = ベンチマーク手法：テスト方法について\nblog-list-post6-date = 2026年1月20日\nblog-list-post6-excerpt = テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。\nblog-list-post6-category = メタ\ncareers-header-title = 採用情報\ncareers-header-description = 国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。\ncareers-benefits-remote-label = リモートファースト\ncareers-benefits-remote-value = 世界中のどこからでも仕事ができます\ncareers-benefits-pay-label = 競争力のある給与\ncareers-benefits-pay-value = 市場トップクラスの報酬\ncareers-benefits-oss-label = オープンソースの時間\ncareers-benefits-oss-value = 時間の20%をOSSへの貢献に\ncareers-open-positions-title = 募集中の職種\ncareers-open-positions-apply-now = 今すぐ応募\ncareers-open-positions-remote = リモート\ncareers-open-positions-full-time = フルタイム\ncareers-open-positions-part-time = パートタイム\ncareers-open-positions-engineering = エンジニアリング\ncareers-open-positions-documentation = ドキュメンテーション\ncareers-open-positions-community = コミュニティ\ncareers-open-positions-sf-remote = サンフランシスコ / リモート\ncareers-open-positions-frontend-title = シニアフロントエンドエンジニア\ncareers-open-positions-frontend-desc = React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。\ncareers-open-positions-backend-title = バックエンドエンジニア\ncareers-open-positions-backend-desc = 毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。\ncareers-open-positions-writer-title = テクニカルライター\ncareers-open-positions-writer-desc = ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。\ncareers-open-positions-devrel-title = DevRelエンジニア\ncareers-open-positions-devrel-desc = トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。\ncareers-open-positions-qa-title = QAエンジニア\ncareers-open-positions-qa-desc = 厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\ncontact-header-title = お問い合わせ\ncontact-header-description = アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：\ncontact-form-name = 名前\ncontact-form-your-name = お名前\ncontact-form-email = メールアドレス\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = トピック\ncontact-form-bug-report = バグ報告\ncontact-form-new-benchmark-idea = 新しいベンチマークのアイデア\ncontact-form-methodology-question = 手法に関する質問\ncontact-form-contribution = 貢献\ncontact-form-other = その他\ncontact-form-message = メッセージ\ncontact-form-message-placeholder = ご質問やアイデアを記入してください...\ncontact-form-send-message = メッセージを送信\nfaq-header-title = よくある質問\nfaq-header-description = i18n Benchmarkについて知っておくべきすべてのこと。\nfaq-list-q1 = i18n Benchmarkとは何ですか？\nfaq-list-a1 = i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。\nfaq-list-q2 = ベンチマークはどのように実施されますか？\nfaq-list-a2 = 一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\nfaq-list-q3 = 現在サポートされているライブラリは何ですか？\nfaq-list-a3 = react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。\nfaq-list-q4 = 自分のベンチマークを投稿できますか？\nfaq-list-a4 = はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。\nfaq-list-q5 = ベンチマークはどのくらいの頻度で更新されますか？\nfaq-list-a5 = 各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。\nfaq-list-q6 = データは信頼できますか？\nfaq-list-a6 = ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。\nfaq-list-q7 = コンサルティングサービスは提供していますか？\nfaq-list-a7 = はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\nfaq-list-q8 = どのように貢献できますか？\nfaq-list-a8 = 貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。\npricing-header-title = シンプルで透明性の高い価格設定\npricing-header-description = チームに合ったプランをお選びください。隠れた費用はありません。\npricing-tiers-starter-name = スターター\npricing-tiers-starter-price = 0円\npricing-tiers-starter-period = ずっと無料\npricing-tiers-starter-feature1 = 1日あたり5回のベンチマーク実行\npricing-tiers-starter-feature2 = 3ライブラリ\npricing-tiers-starter-feature3 = コミュニティサポート\npricing-tiers-starter-feature4 = 公開結果\npricing-tiers-pro-name = プロ\npricing-tiers-pro-price = 29ドル\npricing-tiers-pro-period = /月\npricing-tiers-pro-feature1 = 無制限の実行\npricing-tiers-pro-feature2 = すべてのライブラリ\npricing-tiers-pro-feature3 = 優先サポート\npricing-tiers-pro-feature4 = 非公開の結果\npricing-tiers-pro-feature5 = CI統合\npricing-tiers-pro-feature6 = 履歴データ\npricing-tiers-enterprise-name = エンタープライズ\npricing-tiers-enterprise-price = カスタム\npricing-tiers-enterprise-feature1 = Proプランのすべてを含む\npricing-tiers-enterprise-feature2 = オンプレミスオプション\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = 専任のアカウントマネージャー\npricing-tiers-enterprise-feature5 = カスタムSLA\npricing-tiers-enterprise-feature6 = 監査ログ\npricing-tiers-enterprise-feature7 = トレーニングセッション\npricing-tiers-contact-sales = 営業に問い合わせる\npricing-tiers-get-started = 始める\nproducts-header-title = 製品\nproducts-header-description = 国際化ワークフローを効率化するためのツールとサービス。\nproducts-grid-learn-more = 詳細はこちら\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。\nproducts-grid-cli-price = 無料\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = 履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。\nproducts-grid-cloud-price = 29ドル/月\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。\nproducts-grid-enterprise-price = お問い合わせ\nproducts-grid-migration-name = 移行アシスタント\nproducts-grid-migration-desc = ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。\nproducts-grid-migration-price = 99ドル（一回限り）\nproducts-grid-qa-name = 翻訳QA\nproducts-grid-qa-desc = 翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。\nproducts-grid-qa-price = 19ドル/月\nproducts-grid-optimizer-name = バンドルオプティマイザー\nproducts-grid-optimizer-desc = ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。\nproducts-grid-optimizer-price = 49ドル/月\nsettings-header-title = 設定\nsettings-header-description = アカウント設定と構成を管理します。\nsettings-profile-title = プロフィール\nsettings-profile-display-name = 表示名\nsettings-profile-email = メールアドレス\nsettings-preferences-title = 設定\nsettings-preferences-email-notifications = メール通知\nsettings-preferences-weekly-reports = 毎週のベンチマークレポートを受け取る\nsettings-preferences-toggle-notifications = 通知の切り替え\nsettings-preferences-dark-mode = ダークモード\nsettings-preferences-dark-color-scheme = ダークカラー（暗い配色）を使用する\nsettings-preferences-toggle-dark-mode = ダークモードの切り替え\nsettings-preferences-default-language = デフォルトの言語\nsettings-preferences-english = 英語 (en)\nsettings-preferences-french = フランス語 (fr)\nsettings-preferences-german = ドイツ語 (de)\nsettings-preferences-spanish = スペイン語 (es)\nsettings-preferences-japanese = 日本語 (ja)\nsettings-preferences-chinese = 中国語（簡体字） (zh-CN)\nsettings-preferences-arabic = アラビア語 (ar)\nsettings-api-access-title = APIアクセス\nsettings-api-access-api-key = APIキー\nsettings-api-access-copy = コピー\nsettings-api-access-description = このキーを使用して、プログラムでベンチマークAPIにアクセスします。\nsettings-footer-cancel = キャンセル\nsettings-footer-save-changes = 変更を保存\nteam-header-title = 私たちのチーム\nteam-header-description = i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = 創設者 & リードエンジニア\nteam-grid-member1-bio = 大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = パフォーマンスエンジニア\nteam-grid-member2-bio = JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = 開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = フルスタックデベロッパー\nteam-grid-member4-bio = ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = データアナリスト\nteam-grid-member5-bio = すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = コミュニティマネージャー\nteam-grid-member6-bio = コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。\nnot-found-title = 404\nnot-found-description = おっと！ページが見つかりません\nnot-found-return-home = ホームに戻る");
}
function ko_ftl_vue_type_fluent_index_8_src_true_locale_ko_lang_default(Component) {
	const target = Component.options || Component;
	target.fluent = target.fluent || {};
	target.fluent["ko"] = new FluentResource("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Go to GitHub\nheader-home = Home\nheader-methodology = Methodology\nheader-mock-pages = Mock Pages\nheader-products = Products\nheader-pricing = Pricing\nheader-team = Team\nheader-blog = Blog\nheader-careers = Careers\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Settings\nfooter-title = i18n Benchmark\nfooter-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\nfooter-resources = Resources\nfooter-github = GitHub\nfooter-methodology = Methodology\nfooter-contributing = Contributing\nfooter-contact = Contact\nfooter-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.\ntheme-toggle-auto = Theme: Auto\ntheme-toggle-dark = Theme: Dark\ntheme-toggle-light = Theme: Light\ntheme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.\ntheme-toggle-label-other = Theme mode: {mode}. Click to switch mode.\nmock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\nhome-hero-title = i18n Benchmark\nhome-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\nhome-hero-view-results = View Results\nhome-hero-methodology = Methodology\nhome-why-it-matters-title = Why These Metrics Matter\nhome-why-it-matters-bundle-size-title = Bundle Size\nhome-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\nhome-why-it-matters-rendering-title = Rendering & Hydration\nhome-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Dynamic Loading\nhome-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\nhome-understanding-impact-title = Understanding the Impact\nhome-understanding-impact-single-json-title = Why a single large JSON can hurt performance\nhome-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\nhome-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.\nhome-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\nhome-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\nhome-understanding-impact-trade-offs-title = The trade-offs of dynamic loading\nhome-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\nhome-understanding-impact-waterfall-label = Waterfall requests:\nhome-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\nhome-understanding-impact-fouc-label = Flash of untranslated content (FOUC):\nhome-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.\nhome-understanding-impact-cache-label = Cache invalidation:\nhome-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\nhome-understanding-impact-measures-title = What this benchmark measures\nhome-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\nhome-results-table-title = Sample Results\nhome-results-table-library = Library\nhome-results-table-bundle-size = Bundle Size\nhome-results-table-lookup-time = Lookup Time\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Yes\nhome-results-table-manual = Manual\nhome-results-table-built-in = Built-in\nabout-header-title = About This Benchmark\nabout-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\nabout-grid-why-exists-title = Why This Exists\nabout-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\nabout-grid-methodology-title = Methodology\nabout-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\nabout-what-we-measure-title = What We Measure\nabout-what-we-measure-bundle-size-impact = Bundle size impact\nabout-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\nabout-what-we-measure-rendering-overhead = Rendering overhead\nabout-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\nabout-what-we-measure-hydration-cost = Hydration cost\nabout-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\nabout-what-we-measure-lazy-loading = Lazy loading effectiveness\nabout-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\nabout-what-we-measure-locale-switch = Locale switch speed\nabout-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutorials, and analysis from the i18n community.\nblog-list-read-more = Read More →\nblog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive\nblog-list-post1-date = March 15, 2026\nblog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = How to Reduce Your i18n Bundle by 60%\nblog-list-post2-date = March 8, 2026\nblog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = The State of Internationalization in React\nblog-list-post3-date = February 28, 2026\nblog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\nblog-list-post3-category = Analysis\nblog-list-post4-title = Migrating from react-i18next to Lingui\nblog-list-post4-date = February 15, 2026\nblog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components and i18n: What Changes?\nblog-list-post5-date = February 1, 2026\nblog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\nblog-list-post5-category = Analysis\nblog-list-post6-title = Benchmark Methodology: How We Test\nblog-list-post6-date = January 20, 2026\nblog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\nblog-list-post6-category = Meta\ncareers-header-title = Careers\ncareers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Work from anywhere in the world\ncareers-benefits-pay-label = Competitive pay\ncareers-benefits-pay-value = Top-of-market compensation\ncareers-benefits-oss-label = Open source time\ncareers-benefits-oss-value = 20% time for OSS contributions\ncareers-open-positions-title = Open Positions\ncareers-open-positions-apply-now = Apply Now\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Full-time\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\ncareers-open-positions-writer-title = Technical Writer\ncareers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.\ncareers-open-positions-devrel-title = DevRel Engineer\ncareers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\ncareers-open-positions-qa-title = QA Engineer\ncareers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\ncontact-header-title = Get in Touch\ncontact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\ncontact-form-name = Name\ncontact-form-your-name = Your name\ncontact-form-email = Email\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Topic\ncontact-form-bug-report = Bug Report\ncontact-form-new-benchmark-idea = New Benchmark Idea\ncontact-form-methodology-question = Methodology Question\ncontact-form-contribution = Contribution\ncontact-form-other = Other\ncontact-form-message = Message\ncontact-form-message-placeholder = Describe your question or idea...\ncontact-form-send-message = Send Message\nfaq-header-title = Frequently Asked Questions\nfaq-header-description = Everything you need to know about i18n Benchmark.\nfaq-list-q1 = What is i18n Benchmark?\nfaq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\nfaq-list-q2 = How are benchmarks conducted?\nfaq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\nfaq-list-q3 = Which libraries are currently supported?\nfaq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\nfaq-list-q4 = Can I submit my own benchmarks?\nfaq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\nfaq-list-q5 = How often are benchmarks updated?\nfaq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\nfaq-list-q6 = Is the data reliable?\nfaq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\nfaq-list-q7 = Do you offer consulting services?\nfaq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\nfaq-list-q8 = How can I contribute?\nfaq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\npricing-header-title = Simple, Transparent Pricing\npricing-header-description = Choose the plan that fits your team. No hidden fees.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = $0\npricing-tiers-starter-period = forever\npricing-tiers-starter-feature1 = 5 benchmark runs/day\npricing-tiers-starter-feature2 = 3 libraries\npricing-tiers-starter-feature3 = Community support\npricing-tiers-starter-feature4 = Public results\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = $29\npricing-tiers-pro-period = /month\npricing-tiers-pro-feature1 = Unlimited runs\npricing-tiers-pro-feature2 = All libraries\npricing-tiers-pro-feature3 = Priority support\npricing-tiers-pro-feature4 = Private results\npricing-tiers-pro-feature5 = CI integration\npricing-tiers-pro-feature6 = Historical data\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Custom\npricing-tiers-enterprise-feature1 = Everything in Pro\npricing-tiers-enterprise-feature2 = On-premise option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedicated account manager\npricing-tiers-enterprise-feature5 = Custom SLAs\npricing-tiers-enterprise-feature6 = Audit logs\npricing-tiers-enterprise-feature7 = Training sessions\npricing-tiers-contact-sales = Contact Sales\npricing-tiers-get-started = Get Started\nproducts-header-title = Products\nproducts-header-description = Tools and services to streamline your internationalization workflow.\nproducts-grid-learn-more = Learn More\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\nproducts-grid-cli-price = Free\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\nproducts-grid-cloud-price = $29/mo\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\nproducts-grid-enterprise-price = Contact Us\nproducts-grid-migration-name = Migration Assistant\nproducts-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\nproducts-grid-migration-price = $99 one-time\nproducts-grid-qa-name = Translation QA\nproducts-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.\nproducts-grid-qa-price = $19/mo\nproducts-grid-optimizer-name = Bundle Optimizer\nproducts-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\nproducts-grid-optimizer-price = $49/mo\nsettings-header-title = Settings\nsettings-header-description = Manage your account preferences and configuration.\nsettings-profile-title = Profile\nsettings-profile-display-name = Display Name\nsettings-profile-email = Email\nsettings-preferences-title = Preferences\nsettings-preferences-email-notifications = Email Notifications\nsettings-preferences-weekly-reports = Receive weekly benchmark reports\nsettings-preferences-toggle-notifications = Toggle notifications\nsettings-preferences-dark-mode = Dark Mode\nsettings-preferences-dark-color-scheme = Use dark color scheme\nsettings-preferences-toggle-dark-mode = Toggle dark mode\nsettings-preferences-default-language = Default Language\nsettings-preferences-english = English (en)\nsettings-preferences-french = French (fr)\nsettings-preferences-german = German (de)\nsettings-preferences-spanish = Spanish (es)\nsettings-preferences-japanese = Japanese (ja)\nsettings-preferences-chinese = Chinese Simplified (zh-CN)\nsettings-preferences-arabic = Arabic (ar)\nsettings-api-access-title = API Access\nsettings-api-access-api-key = API Key\nsettings-api-access-copy = Copy\nsettings-api-access-description = Use this key to access the benchmarking API programmatically.\nsettings-footer-cancel = Cancel\nsettings-footer-save-changes = Save Changes\nteam-header-title = Our Team\nteam-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Founder & Lead Engineer\nteam-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance Engineer\nteam-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack Developer\nteam-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Data Analyst\nteam-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.\nnot-found-title = 404\nnot-found-description = Oops! Page not found\nnot-found-return-home = Return to Home");
}
function ru_ftl_vue_type_fluent_index_9_src_true_locale_ru_lang_default(Component) {
	const target = Component.options || Component;
	target.fluent = target.fluent || {};
	target.fluent["ru"] = new FluentResource("shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Перейти на GitHub\nheader-home = Главная\nheader-methodology = Методология\nheader-mock-pages = Тестовые страницы\nheader-products = Продукты\nheader-pricing = Цены\nheader-team = Команда\nheader-blog = Блог\nheader-careers = Вакансии\nheader-faq = FAQ\nheader-contact = Контакт\nheader-settings = Настройки\nfooter-title = i18n Benchmark\nfooter-description = Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.\nfooter-resources = Ресурсы\nfooter-github = GitHub\nfooter-methodology = Методология\nfooter-contributing = Участие в проекте\nfooter-contact = Контакт\nfooter-built-with = i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.\ntheme-toggle-auto = Тема: Авто\ntheme-toggle-dark = Тема: Темная\ntheme-toggle-light = Тема: Светлая\ntheme-toggle-label-auto = Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.\ntheme-toggle-label-other = Режим темы: {mode}. Нажмите, чтобы сменить режим.\nmock-banner = ⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.\nhome-hero-view-results = Посмотреть результаты\nhome-hero-methodology = Методология\nhome-why-it-matters-title = Почему эти метрики важны\nhome-why-it-matters-bundle-size-title = Размер бандла\nhome-why-it-matters-bundle-size-desc = Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.\nhome-why-it-matters-rendering-title = Рендеринг и гидратация\nhome-why-it-matters-rendering-desc = Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).\nhome-why-it-matters-dynamic-loading-title = Динамическая загрузка\nhome-why-it-matters-dynamic-loading-desc = Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.\nhome-understanding-impact-title = Понимание влияния\nhome-understanding-impact-single-json-title = Почему один большой JSON может снизить производительность\nhome-understanding-impact-single-json-intro = Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\nhome-understanding-impact-single-json-bullet1 = JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.\nhome-understanding-impact-single-json-bullet2 = Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.\nhome-understanding-impact-single-json-bullet3 = При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.\nhome-understanding-impact-trade-offs-title = Компромиссы динамической загрузки\nhome-understanding-impact-trade-offs-intro = Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:\nhome-understanding-impact-waterfall-label = Каскадные запросы:\nhome-understanding-impact-waterfall-desc = приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.\nhome-understanding-impact-fouc-label = Мерцание непереведенного контента (FOUC):\nhome-understanding-impact-fouc-desc = пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.\nhome-understanding-impact-cache-label = Инвалидация кэша:\nhome-understanding-impact-cache-desc = обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.\nhome-understanding-impact-measures-title = Что измеряет этот бенчмарк\nhome-understanding-impact-measures-desc = Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\nhome-results-table-title = Примеры результатов\nhome-results-table-library = Библиотека\nhome-results-table-bundle-size = Размер бандла\nhome-results-table-lookup-time = Время поиска\nhome-results-table-lazy-loading = Ленивая загрузка\nhome-results-table-yes = Да\nhome-results-table-manual = Вручную\nhome-results-table-built-in = Встроено\nabout-header-title = Об этом бенчмарке\nabout-header-description = Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.\nabout-grid-why-exists-title = Зачем это нужно\nabout-grid-why-exists-desc = Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\nabout-grid-methodology-title = Методология\nabout-grid-methodology-desc = Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.\nabout-what-we-measure-title = Что мы измеряем\nabout-what-we-measure-bundle-size-impact = Влияние на размер бандла\nabout-what-we-measure-bundle-size-impact-desc = Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\nabout-what-we-measure-rendering-overhead = Накладные расходы на рендеринг\nabout-what-we-measure-rendering-overhead-desc = Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.\nabout-what-we-measure-hydration-cost = Стоимость гидратации\nabout-what-we-measure-hydration-cost-desc = Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\nabout-what-we-measure-lazy-loading = Эффективность ленивой загрузки\nabout-what-we-measure-lazy-loading-desc = Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).\nabout-what-we-measure-locale-switch = Скорость переключения языка\nabout-what-we-measure-locale-switch-desc = Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\nblog-header-title = Блог\nblog-header-description = Инсайты, туториалы и аналитика от сообщества i18n.\nblog-list-read-more = Читать далее →\nblog-list-post1-title = Сравнение библиотек i18n в 2026 году: глубокое погружение\nblog-list-post1-date = 15 марта 2026 г.\nblog-list-post1-excerpt = Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\nblog-list-post1-category = Бенчмарк\nblog-list-post2-title = Как уменьшить бандл i18n на 60%\nblog-list-post2-date = 8 марта 2026 г.\nblog-list-post2-excerpt = Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.\nblog-list-post2-category = Туториал\nblog-list-post3-title = Состояние интернационализации в React\nblog-list-post3-date = 28 февраля 2026 г.\nblog-list-post3-excerpt = Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\nblog-list-post3-category = Анализ\nblog-list-post4-title = Миграция с react-i18next на Lingui\nblog-list-post4-date = 15 февраля 2026 г.\nblog-list-post4-excerpt = Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.\nblog-list-post4-category = Туториал\nblog-list-post5-title = Server Components и i18n: что меняется?\nblog-list-post5-date = 1 февраля 2026 г.\nblog-list-post5-excerpt = React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\nblog-list-post5-category = Анализ\nblog-list-post6-title = Методология бенчмарка: как мы тестируем\nblog-list-post6-date = 20 января 2026 г.\nblog-list-post6-excerpt = Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\nblog-list-post6-category = Мета\ncareers-header-title = Вакансии\ncareers-header-description = Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.\ncareers-benefits-remote-label = Удаленная работа\ncareers-benefits-remote-value = Работайте из любой точки мира\ncareers-benefits-pay-label = Конкурентная зарплата\ncareers-benefits-pay-value = Вознаграждение выше рыночного\ncareers-benefits-oss-label = Время на open source\ncareers-benefits-oss-value = 20% времени на вклад в OSS\ncareers-open-positions-title = Открытые вакансии\ncareers-open-positions-apply-now = Подать заявку\ncareers-open-positions-remote = Удаленно\ncareers-open-positions-full-time = Полная занятость\ncareers-open-positions-part-time = Частичная занятость\ncareers-open-positions-engineering = Разработка\ncareers-open-positions-documentation = Документация\ncareers-open-positions-community = Сообщество\ncareers-open-positions-sf-remote = Сан-Франциско / Удаленно\ncareers-open-positions-frontend-title = Старший фронтенд-инженер\ncareers-open-positions-frontend-desc = Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.\ncareers-open-positions-backend-title = Бэкенд-инженер\ncareers-open-positions-backend-desc = Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.\ncareers-open-positions-writer-title = Технический писатель\ncareers-open-positions-writer-desc = Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.\ncareers-open-positions-devrel-title = DevRel-инженер\ncareers-open-positions-devrel-desc = Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.\ncareers-open-positions-qa-title = QA-инженер\ncareers-open-positions-qa-desc = Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.\ncontact-header-title = Связаться с нами\ncontact-header-description = Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу\ncontact-form-name = Имя\ncontact-form-your-name = Ваше имя\ncontact-form-email = Электронная почта\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Тема\ncontact-form-bug-report = Отчет об ошибке\ncontact-form-new-benchmark-idea = Идея нового бенчмарка\ncontact-form-methodology-question = Вопрос по методологии\ncontact-form-contribution = Вклад в проект\ncontact-form-other = Другое\ncontact-form-message = Сообщение\ncontact-form-message-placeholder = Опишите ваш вопрос или идею...\ncontact-form-send-message = Отправить сообщение\nfaq-header-title = Часто задаваемые вопросы\nfaq-header-description = Все, что вам нужно знать об i18n Benchmark.\nfaq-list-q1 = Что такое i18n Benchmark?\nfaq-list-a1 = i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.\nfaq-list-q2 = Как проводятся бенчмарки?\nfaq-list-a2 = Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.\nfaq-list-q3 = Какие библиотеки поддерживаются в данный момент?\nfaq-list-a3 = Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\nfaq-list-q4 = Могу ли я прислать свои собственные бенчмарки?\nfaq-list-a4 = Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.\nfaq-list-q5 = Как часто обновляются бенчмарки?\nfaq-list-a5 = Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.\nfaq-list-q6 = Можно ли доверять данным?\nfaq-list-a6 = Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.\nfaq-list-q7 = Предоставляете ли вы консалтинговые услуги?\nfaq-list-a7 = Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.\nfaq-list-q8 = Как я могу помочь проекту?\nfaq-list-a8 = Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.\npricing-header-title = Простые и прозрачные цены\npricing-header-description = Выберите подходящий план для вашей команды. Никаких скрытых комиссий.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = навсегда\npricing-tiers-starter-feature1 = 5 запусков бенчмарка в день\npricing-tiers-starter-feature2 = 3 библиотеки\npricing-tiers-starter-feature3 = Поддержка сообщества\npricing-tiers-starter-feature4 = Публичные результаты\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /мес\npricing-tiers-pro-feature1 = Неограниченное число запусков\npricing-tiers-pro-feature2 = Все библиотеки\npricing-tiers-pro-feature3 = Приоритетная поддержка\npricing-tiers-pro-feature4 = Приватные результаты\npricing-tiers-pro-feature5 = Интеграция с CI\npricing-tiers-pro-feature6 = Исторические данные\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Индивидуально\npricing-tiers-enterprise-feature1 = Все, что есть в Pro\npricing-tiers-enterprise-feature2 = Локальная установка\npricing-tiers-enterprise-feature3 = SSO и SAML\npricing-tiers-enterprise-feature4 = Персональный менеджер\npricing-tiers-enterprise-feature5 = Индивидуальные SLA\npricing-tiers-enterprise-feature6 = Журналы аудита\npricing-tiers-enterprise-feature7 = Обучающие сессии\npricing-tiers-contact-sales = Связаться с отделом продаж\npricing-tiers-get-started = Начать работу\nproducts-header-title = Продукты\nproducts-header-description = Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.\nproducts-grid-learn-more = Узнать больше\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.\nproducts-grid-cli-price = Бесплатно\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.\nproducts-grid-cloud-price = 29 $/мес\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.\nproducts-grid-enterprise-price = Связаться с нами\nproducts-grid-migration-name = Помощник по миграции\nproducts-grid-migration-desc = Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.\nproducts-grid-migration-price = 99 $ (разово)\nproducts-grid-qa-name = QA переводов\nproducts-grid-qa-desc = Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.\nproducts-grid-qa-price = 19 $/мес\nproducts-grid-optimizer-name = Оптимизатор бандла\nproducts-grid-optimizer-desc = Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.\nproducts-grid-optimizer-price = 49 $/мес\nsettings-header-title = Настройки\nsettings-header-description = Управляйте предпочтениями и конфигурацией вашей учетной записи.\nsettings-profile-title = Профиль\nsettings-profile-display-name = Отображаемое имя\nsettings-profile-email = Электронная почта\nsettings-preferences-title = Предпочтения\nsettings-preferences-email-notifications = Уведомления по почте\nsettings-preferences-weekly-reports = Получать еженедельные отчеты о бенчмарках\nsettings-preferences-toggle-notifications = Переключить уведомления\nsettings-preferences-dark-mode = Темная тема\nsettings-preferences-dark-color-scheme = Использовать темную цветовую схему\nsettings-preferences-toggle-dark-mode = Переключить темную тему\nsettings-preferences-default-language = Язык по умолчанию\nsettings-preferences-english = Английский (en)\nsettings-preferences-french = Французский (fr)\nsettings-preferences-german = Немецкий (de)\nsettings-preferences-spanish = Испанский (es)\nsettings-preferences-japanese = Японский (ja)\nsettings-preferences-chinese = Китайский упрощенный (zh-CN)\nsettings-preferences-arabic = Арабский (ar)\nsettings-api-access-title = Доступ к API\nsettings-api-access-api-key = Ключ API\nsettings-api-access-copy = Копировать\nsettings-api-access-description = Используйте этот ключ для программного доступа к API бенчмаркинга.\nsettings-footer-cancel = Отмена\nsettings-footer-save-changes = Сохранить изменения\nteam-header-title = Наша команда\nteam-header-description = Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.\nteam-grid-member1-name = Сара Чен\nteam-grid-member1-role = Основатель и ведущий инженер\nteam-grid-member1-bio = Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.\nteam-grid-member2-name = Маркус Вебер\nteam-grid-member2-role = Инженер по производительности\nteam-grid-member2-bio = Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\nteam-grid-member3-name = Айша Патель\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\nteam-grid-member4-name = Томас Родригес\nteam-grid-member4-role = Full-Stack разработчик\nteam-grid-member4-bio = Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.\nteam-grid-member5-name = Юки Танака\nteam-grid-member5-role = Аналитик данных\nteam-grid-member5-bio = Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).\nteam-grid-member6-name = Елена Ковальски\nteam-grid-member6-role = Комьюнити-менеджер\nteam-grid-member6-bio = Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.\nnot-found-title = 404\nnot-found-description = Упс! Страница не найдена\nnot-found-return-home = Вернуться на главную");
}
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = { class: "mt-20 border-t border-border bg-card" };
var _hoisted_2 = { class: "container py-8" };
var _hoisted_3 = { class: "grid gap-8 md:grid-cols-3" };
var _hoisted_4 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_5 = { class: "text-sm text-muted-foreground" };
var _hoisted_6 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_7 = { class: "space-y-1" };
var _hoisted_8 = ["href"];
var _hoisted_9 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_10 = { class: "text-sm text-muted-foreground" };
var _hoisted_11 = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent("router-link");
	return openBlock(), createElementBlock("footer", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [
		createElementVNode("div", null, [createElementVNode("h3", _hoisted_4, toDisplayString($setup.td("footer.title")), 1), createElementVNode("p", _hoisted_5, toDisplayString($setup.td("footer.description")), 1)]),
		createElementVNode("div", null, [createElementVNode("h3", _hoisted_6, toDisplayString($setup.td("footer.resources")), 1), createElementVNode("ul", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.footerLinks, (linkEl) => {
			return openBlock(), createElementBlock("li", { key: linkEl.label }, [linkEl.isInternal ? (openBlock(), createBlock(_component_router_link, {
				key: 0,
				to: linkEl.to,
				class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(linkEl.label), 1)]),
				_: 2
			}, 1032, ["to"])) : (openBlock(), createElementBlock("a", {
				key: 1,
				href: linkEl.href,
				target: "_blank",
				rel: "noreferrer",
				class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
			}, toDisplayString(linkEl.label), 9, _hoisted_8))]);
		}), 128))])]),
		createElementVNode("div", null, [createElementVNode("h3", _hoisted_9, toDisplayString($setup.td("footer.contact")), 1), createElementVNode("p", _hoisted_10, toDisplayString($setup.td("shared.contactEmail")), 1)])
	]), createElementVNode("div", _hoisted_11, toDisplayString($setup.td("footer.builtWith")), 1)])]);
}
if (typeof en_ftl_vue_type_fluent_index_0_src_true_locale_en_lang_default === "function") en_ftl_vue_type_fluent_index_0_src_true_locale_en_lang_default(Footer_vue_vue_type_script_setup_true_lang_default);
if (typeof fr_ftl_vue_type_fluent_index_1_src_true_locale_fr_lang_default === "function") fr_ftl_vue_type_fluent_index_1_src_true_locale_fr_lang_default(Footer_vue_vue_type_script_setup_true_lang_default);
if (typeof es_ftl_vue_type_fluent_index_2_src_true_locale_es_lang_default === "function") es_ftl_vue_type_fluent_index_2_src_true_locale_es_lang_default(Footer_vue_vue_type_script_setup_true_lang_default);
if (typeof de_ftl_vue_type_fluent_index_3_src_true_locale_de_lang_default === "function") de_ftl_vue_type_fluent_index_3_src_true_locale_de_lang_default(Footer_vue_vue_type_script_setup_true_lang_default);
if (typeof it_ftl_vue_type_fluent_index_4_src_true_locale_it_lang_default === "function") it_ftl_vue_type_fluent_index_4_src_true_locale_it_lang_default(Footer_vue_vue_type_script_setup_true_lang_default);
if (typeof pt_ftl_vue_type_fluent_index_5_src_true_locale_pt_lang_default === "function") pt_ftl_vue_type_fluent_index_5_src_true_locale_pt_lang_default(Footer_vue_vue_type_script_setup_true_lang_default);
if (typeof zh_ftl_vue_type_fluent_index_6_src_true_locale_zh_lang_default === "function") zh_ftl_vue_type_fluent_index_6_src_true_locale_zh_lang_default(Footer_vue_vue_type_script_setup_true_lang_default);
if (typeof ja_ftl_vue_type_fluent_index_7_src_true_locale_ja_lang_default === "function") ja_ftl_vue_type_fluent_index_7_src_true_locale_ja_lang_default(Footer_vue_vue_type_script_setup_true_lang_default);
if (typeof ko_ftl_vue_type_fluent_index_8_src_true_locale_ko_lang_default === "function") ko_ftl_vue_type_fluent_index_8_src_true_locale_ko_lang_default(Footer_vue_vue_type_script_setup_true_lang_default);
if (typeof ru_ftl_vue_type_fluent_index_9_src_true_locale_ru_lang_default === "function") ru_ftl_vue_type_fluent_index_9_src_true_locale_ru_lang_default(Footer_vue_vue_type_script_setup_true_lang_default);
var Footer_default = _plugin_vue_export_helper_default(Footer_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render$1], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/Footer.vue"]]);
var lib_exports = __exportAll({
	Vue: () => Vue,
	Vue2: () => void 0,
	del: () => del,
	install: () => install,
	isVue2: () => false,
	isVue3: () => true,
	set: () => set
});
import * as import_vue from "vue";
__reExport(lib_exports, import_vue);
function install() {}
function set(target, key, val) {
	if (Array.isArray(target)) {
		target.length = Math.max(target.length, key);
		target.splice(key, 1, val);
		return val;
	}
	target[key] = val;
	return val;
}
function del(target, key) {
	if (Array.isArray(target)) {
		target.splice(key, 1);
		return;
	}
	delete target[key];
}
var CachedIterable = class extends Array {
	static from(iterable) {
		if (iterable instanceof this) return iterable;
		return new this(iterable);
	}
};
var CachedSyncIterable = class extends CachedIterable {
	constructor(iterable) {
		super();
		if (Symbol.iterator in Object(iterable)) this.iterator = iterable[Symbol.iterator]();
		else throw new TypeError("Argument must implement the iteration protocol.");
	}
	[Symbol.iterator]() {
		const cached = this;
		let cur = 0;
		return { next() {
			if (cached.length <= cur) cached.push(cached.iterator.next());
			return cached[cur++];
		} };
	}
	touchNext(count = 1) {
		let idx = 0;
		while (idx++ < count) {
			const last = this[this.length - 1];
			if (last && last.done) break;
			this.push(this.iterator.next());
		}
		return this[this.length - 1];
	}
};
function mapBundleSync(bundles, ids) {
	if (!Array.isArray(ids)) return getBundleForId(bundles, ids);
	return ids.map((id) => getBundleForId(bundles, id));
}
function getBundleForId(bundles, id) {
	for (const bundle of bundles) if (bundle.hasMessage(id)) return bundle;
	return null;
}
function inheritBundle(locale, parent) {
	const bundle = new FluentBundle(locale, {
		functions: parent._functions,
		useIsolating: parent._useIsolating,
		transform: parent._transform
	});
	bundle._terms = new Map(parent._terms);
	bundle._messages = new Map(parent._messages);
	return bundle;
}
function assert(condition, message) {
	if (!condition) throw new Error(`[fluent-vue] ${message}`);
}
function warn(message, ...args) {
	console.warn(`[fluent-vue] ${message}`, ...args);
}
var TranslationContext = class {
	constructor(bundles, options) {
		this.options = options;
		this.format = (key, value) => {
			const context = this.getBundle(key);
			const message = this.getMessage(context, key);
			return this._format(context, message, value) ?? key;
		};
		this.formatAttrs = (key, value) => {
			const context = this.getBundle(key);
			const message = this.getMessage(context, key);
			return this._formatAttrs(context, message, value) ?? {};
		};
		this.formatWithAttrs = (key, value) => {
			const context = this.getBundle(key);
			const message = this.getMessage(context, key);
			const formatValue = this._format(context, message, value);
			return {
				value: formatValue ?? key,
				attributes: this._formatAttrs(context, message, value) ?? {},
				hasValue: formatValue !== null
			};
		};
		this.$t = this.format;
		this.$ta = this.formatAttrs;
		this.bundles = bundles;
	}
	getBundle(key) {
		return mapBundleSync(this.bundles.value, key);
	}
	getMessage(bundle, key) {
		const message = bundle?.getMessage(key);
		if (message === void 0) {
			this.options.warnMissing(key);
			return null;
		}
		return message;
	}
	formatPattern(bundle, key, message, value) {
		const errors = [];
		const mappedValue = value;
		if (mappedValue != null && this.options.mapVariable != null) for (const [key, variable] of Object.entries(mappedValue)) {
			const mappedVariable = this.options.mapVariable(variable);
			if (mappedVariable != null) mappedValue[key] = mappedVariable;
		}
		const formatted = bundle.formatPattern(message, mappedValue, errors);
		for (const error of errors) warn(`Error when formatting message with key [${key}]`, error);
		return formatted;
	}
	_format(context, message, value) {
		if (context === null || message === null || message.value === null) return null;
		return this.formatPattern(context, message.id, message.value, value);
	}
	_formatAttrs(context, message, value) {
		if (context === null || message === null) return null;
		const result = {};
		for (const [attrName, attrValue] of Object.entries(message.attributes)) result[attrName] = this.formatPattern(context, message.id, attrValue, value);
		return result;
	}
};
function* flatMap(iterable, mapper) {
	for (const item of iterable) yield* mapper(item);
}
function getContext(rootContext, instance, fromSetup = false) {
	if (instance == null) return rootContext;
	const options = instance.$options ?? instance.type;
	if (options._fluent != null) return options._fluent;
	const context = getMergedContext(rootContext, options.fluent);
	if (!fromSetup && !(typeof window === "undefined")) options._fluent = context;
	return context;
}
function getMergedContext(rootContext, fluent) {
	if (fluent == null) return rootContext;
	return new TranslationContext((0, lib_exports.computed)(() => CachedSyncIterable.from(flatMap(rootContext.bundles.value, (parentBundle) => Object.entries(fluent).map(([locale, resources]) => {
		const locales = locale.split(/[\s+,]/);
		if (parentBundle.locales.filter((bundleLocale) => locales.includes(bundleLocale)).length === 0) return parentBundle;
		const bundle = inheritBundle(locales, parentBundle);
		bundle.addResource(resources, { allowOverrides: true });
		return bundle;
	})))), rootContext.options);
}
var RootContextSymbol = Symbol("root-context");
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf$1 = Object.getPrototypeOf;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __commonJSMin$1 = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps$1 = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames$1(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp$1.call(to, key) && key !== except) __defProp$1(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(isNodeMode || !mod || !mod.__esModule ? __defProp$1(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var isBrowser = typeof navigator !== "undefined";
var target = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : {};
typeof target.chrome !== "undefined" && target.chrome.devtools;
isBrowser && (target.self, target.top);
typeof navigator !== "undefined" && navigator.userAgent?.toLowerCase().includes("electron");
typeof window !== "undefined" && window.__NUXT__;
var import_rfdc = __toESM$1(__commonJSMin$1(((exports, module) => {
	module.exports = rfdc;
	function copyBuffer(cur) {
		if (cur instanceof Buffer) return Buffer.from(cur);
		return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
	}
	function rfdc(opts) {
		opts = opts || {};
		if (opts.circles) return rfdcCircles(opts);
		const constructorHandlers = /* @__PURE__ */ new Map();
		constructorHandlers.set(Date, (o) => new Date(o));
		constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
		constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
		if (opts.constructorHandlers) for (const handler of opts.constructorHandlers) constructorHandlers.set(handler[0], handler[1]);
		let handler = null;
		return opts.proto ? cloneProto : clone;
		function cloneArray(a, fn) {
			const keys = Object.keys(a);
			const a2 = new Array(keys.length);
			for (let i = 0; i < keys.length; i++) {
				const k = keys[i];
				const cur = a[k];
				if (typeof cur !== "object" || cur === null) a2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) a2[k] = handler(cur, fn);
				else if (ArrayBuffer.isView(cur)) a2[k] = copyBuffer(cur);
				else a2[k] = fn(cur);
			}
			return a2;
		}
		function clone(o) {
			if (typeof o !== "object" || o === null) return o;
			if (Array.isArray(o)) return cloneArray(o, clone);
			if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, clone);
			const o2 = {};
			for (const k in o) {
				if (Object.hasOwnProperty.call(o, k) === false) continue;
				const cur = o[k];
				if (typeof cur !== "object" || cur === null) o2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, clone);
				else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
				else o2[k] = clone(cur);
			}
			return o2;
		}
		function cloneProto(o) {
			if (typeof o !== "object" || o === null) return o;
			if (Array.isArray(o)) return cloneArray(o, cloneProto);
			if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, cloneProto);
			const o2 = {};
			for (const k in o) {
				const cur = o[k];
				if (typeof cur !== "object" || cur === null) o2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, cloneProto);
				else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
				else o2[k] = cloneProto(cur);
			}
			return o2;
		}
	}
	function rfdcCircles(opts) {
		const refs = [];
		const refsNew = [];
		const constructorHandlers = /* @__PURE__ */ new Map();
		constructorHandlers.set(Date, (o) => new Date(o));
		constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
		constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
		if (opts.constructorHandlers) for (const handler of opts.constructorHandlers) constructorHandlers.set(handler[0], handler[1]);
		let handler = null;
		return opts.proto ? cloneProto : clone;
		function cloneArray(a, fn) {
			const keys = Object.keys(a);
			const a2 = new Array(keys.length);
			for (let i = 0; i < keys.length; i++) {
				const k = keys[i];
				const cur = a[k];
				if (typeof cur !== "object" || cur === null) a2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) a2[k] = handler(cur, fn);
				else if (ArrayBuffer.isView(cur)) a2[k] = copyBuffer(cur);
				else {
					const index = refs.indexOf(cur);
					if (index !== -1) a2[k] = refsNew[index];
					else a2[k] = fn(cur);
				}
			}
			return a2;
		}
		function clone(o) {
			if (typeof o !== "object" || o === null) return o;
			if (Array.isArray(o)) return cloneArray(o, clone);
			if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, clone);
			const o2 = {};
			refs.push(o);
			refsNew.push(o2);
			for (const k in o) {
				if (Object.hasOwnProperty.call(o, k) === false) continue;
				const cur = o[k];
				if (typeof cur !== "object" || cur === null) o2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, clone);
				else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
				else {
					const i = refs.indexOf(cur);
					if (i !== -1) o2[k] = refsNew[i];
					else o2[k] = clone(cur);
				}
			}
			refs.pop();
			refsNew.pop();
			return o2;
		}
		function cloneProto(o) {
			if (typeof o !== "object" || o === null) return o;
			if (Array.isArray(o)) return cloneArray(o, cloneProto);
			if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) return handler(o, cloneProto);
			const o2 = {};
			refs.push(o);
			refsNew.push(o2);
			for (const k in o) {
				const cur = o[k];
				if (typeof cur !== "object" || cur === null) o2[k] = cur;
				else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) o2[k] = handler(cur, cloneProto);
				else if (ArrayBuffer.isView(cur)) o2[k] = copyBuffer(cur);
				else {
					const i = refs.indexOf(cur);
					if (i !== -1) o2[k] = refsNew[i];
					else o2[k] = cloneProto(cur);
				}
			}
			refs.pop();
			refsNew.pop();
			return o2;
		}
	}
}))(), 1);
var classifyRE = /(?:^|[-_/])(\w)/g;
function toUpper(_, c) {
	return c ? c.toUpperCase() : "";
}
function classify(str) {
	return str && `${str}`.replace(classifyRE, toUpper);
}
function basename(filename, ext) {
	let normalizedFilename = filename.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	if (normalizedFilename.endsWith(`index${ext}`)) normalizedFilename = normalizedFilename.replace(`/index${ext}`, ext);
	const lastSlashIndex = normalizedFilename.lastIndexOf("/");
	const baseNameWithExt = normalizedFilename.substring(lastSlashIndex + 1);
	if (ext) {
		const extIndex = baseNameWithExt.lastIndexOf(ext);
		return baseNameWithExt.substring(0, extIndex);
	}
	return "";
}
var deepClone = (0, import_rfdc.default)({ circles: true });
var DEBOUNCE_DEFAULTS = { trailing: true };
function debounce(fn, wait = 25, options = {}) {
	options = {
		...DEBOUNCE_DEFAULTS,
		...options
	};
	if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
	let leadingValue;
	let timeout;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		currentPromise = _applyPromised(fn, _this, args);
		currentPromise.finally(() => {
			currentPromise = null;
			if (options.trailing && trailingArgs && !timeout) {
				const promise = applyFn(_this, trailingArgs);
				trailingArgs = null;
				return promise;
			}
		});
		return currentPromise;
	};
	const debounced = function(...args) {
		if (options.trailing) trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = !timeout && options.leading;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				timeout = null;
				const promise = options.leading ? leadingValue : applyFn(this, args);
				trailingArgs = null;
				for (const _resolve of resolveList) _resolve(promise);
				resolveList = [];
			}, wait);
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
	const _clearTimeout = (timer) => {
		if (timer) {
			clearTimeout(timer);
			timeout = null;
		}
	};
	debounced.isPending = () => !!timeout;
	debounced.cancel = () => {
		_clearTimeout(timeout);
		resolveList = [];
		trailingArgs = null;
	};
	debounced.flush = () => {
		_clearTimeout(timeout);
		if (!trailingArgs || currentPromise) return;
		const args = trailingArgs;
		trailingArgs = null;
		return applyFn(this, args);
	};
	return debounced;
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}
function flatHooks(configHooks, hooks = {}, parentName) {
	for (const key in configHooks) {
		const subHook = configHooks[key];
		const name = parentName ? `${parentName}:${key}` : key;
		if (typeof subHook === "object" && subHook !== null) flatHooks(subHook, hooks, name);
		else if (typeof subHook === "function") hooks[name] = subHook;
	}
	return hooks;
}
var defaultTask = { run: (function_) => function_() };
var _createTask = () => defaultTask;
var createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
	const task = createTask(args.shift());
	return hooks.reduce((promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))), Promise.resolve());
}
function parallelTaskCaller(hooks, args) {
	const task = createTask(args.shift());
	return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
	for (const callback of [...callbacks]) callback(arg0);
}
var Hookable = class {
	constructor() {
		this._hooks = {};
		this._before = void 0;
		this._after = void 0;
		this._deprecatedMessages = void 0;
		this._deprecatedHooks = {};
		this.hook = this.hook.bind(this);
		this.callHook = this.callHook.bind(this);
		this.callHookWith = this.callHookWith.bind(this);
	}
	hook(name, function_, options = {}) {
		if (!name || typeof function_ !== "function") return () => {};
		const originalName = name;
		let dep;
		while (this._deprecatedHooks[name]) {
			dep = this._deprecatedHooks[name];
			name = dep.to;
		}
		if (dep && !options.allowDeprecated) {
			let message = dep.message;
			if (!message) message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
			if (!this._deprecatedMessages) this._deprecatedMessages = /* @__PURE__ */ new Set();
			if (!this._deprecatedMessages.has(message)) {
				console.warn(message);
				this._deprecatedMessages.add(message);
			}
		}
		if (!function_.name) try {
			Object.defineProperty(function_, "name", {
				get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
				configurable: true
			});
		} catch {}
		this._hooks[name] = this._hooks[name] || [];
		this._hooks[name].push(function_);
		return () => {
			if (function_) {
				this.removeHook(name, function_);
				function_ = void 0;
			}
		};
	}
	hookOnce(name, function_) {
		let _unreg;
		let _function = (...arguments_) => {
			if (typeof _unreg === "function") _unreg();
			_unreg = void 0;
			_function = void 0;
			return function_(...arguments_);
		};
		_unreg = this.hook(name, _function);
		return _unreg;
	}
	removeHook(name, function_) {
		if (this._hooks[name]) {
			const index = this._hooks[name].indexOf(function_);
			if (index !== -1) this._hooks[name].splice(index, 1);
			if (this._hooks[name].length === 0) delete this._hooks[name];
		}
	}
	deprecateHook(name, deprecated) {
		this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
		const _hooks = this._hooks[name] || [];
		delete this._hooks[name];
		for (const hook of _hooks) this.hook(name, hook);
	}
	deprecateHooks(deprecatedHooks) {
		Object.assign(this._deprecatedHooks, deprecatedHooks);
		for (const name in deprecatedHooks) this.deprecateHook(name, deprecatedHooks[name]);
	}
	addHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
		return () => {
			for (const unreg of removeFns.splice(0, removeFns.length)) unreg();
		};
	}
	removeHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		for (const key in hooks) this.removeHook(key, hooks[key]);
	}
	removeAllHooks() {
		for (const key in this._hooks) delete this._hooks[key];
	}
	callHook(name, ...arguments_) {
		arguments_.unshift(name);
		return this.callHookWith(serialTaskCaller, name, ...arguments_);
	}
	callHookParallel(name, ...arguments_) {
		arguments_.unshift(name);
		return this.callHookWith(parallelTaskCaller, name, ...arguments_);
	}
	callHookWith(caller, name, ...arguments_) {
		const event = this._before || this._after ? {
			name,
			args: arguments_,
			context: {}
		} : void 0;
		if (this._before) callEachWith(this._before, event);
		const result = caller(name in this._hooks ? [...this._hooks[name]] : [], arguments_);
		if (result instanceof Promise) return result.finally(() => {
			if (this._after && event) callEachWith(this._after, event);
		});
		if (this._after && event) callEachWith(this._after, event);
		return result;
	}
	beforeEach(function_) {
		this._before = this._before || [];
		this._before.push(function_);
		return () => {
			if (this._before !== void 0) {
				const index = this._before.indexOf(function_);
				if (index !== -1) this._before.splice(index, 1);
			}
		};
	}
	afterEach(function_) {
		this._after = this._after || [];
		this._after.push(function_);
		return () => {
			if (this._after !== void 0) {
				const index = this._after.indexOf(function_);
				if (index !== -1) this._after.splice(index, 1);
			}
		};
	}
};
function createHooks() {
	return new Hookable();
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
function getComponentTypeName(options) {
	if (typeof options === "function") return options.displayName || options.name || options.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
	const name = options.name || options._componentTag || options.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || options.__name;
	if (name === "index" && options.__file?.endsWith("index.vue")) return "";
	return name;
}
function getComponentFileName(options) {
	const file = options.__file;
	if (file) return classify(basename(file, ".vue"));
}
function saveComponentGussedName(instance, name) {
	instance.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = name;
	return name;
}
function getAppRecord(instance) {
	if (instance.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return instance.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	else if (instance.root) return instance.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function isFragment(instance) {
	const subTreeType = instance.subTree?.type;
	const appRecord = getAppRecord(instance);
	if (appRecord) return appRecord?.types?.Fragment === subTreeType;
	return false;
}
function getInstanceName(instance) {
	const name = getComponentTypeName(instance?.type || {});
	if (name) return name;
	if (instance?.root === instance) return "Root";
	for (const key in instance.parent?.type?.components) if (instance.parent.type.components[key] === instance?.type) return saveComponentGussedName(instance, key);
	for (const key in instance.appContext?.components) if (instance.appContext.components[key] === instance?.type) return saveComponentGussedName(instance, key);
	const fileName = getComponentFileName(instance?.type || {});
	if (fileName) return fileName;
	return "Anonymous Component";
}
function getUniqueComponentId(instance) {
	return `${instance?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${instance === instance?.root ? "root" : instance.uid}`;
}
function getComponentInstance(appRecord, instanceId) {
	instanceId = instanceId || `${appRecord.id}:root`;
	return appRecord.instanceMap.get(instanceId) || appRecord.instanceMap.get(":root");
}
function createRect() {
	const rect = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		get width() {
			return rect.right - rect.left;
		},
		get height() {
			return rect.bottom - rect.top;
		}
	};
	return rect;
}
var range;
function getTextRect(node) {
	if (!range) range = document.createRange();
	range.selectNode(node);
	return range.getBoundingClientRect();
}
function getFragmentRect(vnode) {
	const rect = createRect();
	if (!vnode.children) return rect;
	for (let i = 0, l = vnode.children.length; i < l; i++) {
		const childVnode = vnode.children[i];
		let childRect;
		if (childVnode.component) childRect = getComponentBoundingRect(childVnode.component);
		else if (childVnode.el) {
			const el = childVnode.el;
			if (el.nodeType === 1 || el.getBoundingClientRect) childRect = el.getBoundingClientRect();
			else if (el.nodeType === 3 && el.data.trim()) childRect = getTextRect(el);
		}
		if (childRect) mergeRects(rect, childRect);
	}
	return rect;
}
function mergeRects(a, b) {
	if (!a.top || b.top < a.top) a.top = b.top;
	if (!a.bottom || b.bottom > a.bottom) a.bottom = b.bottom;
	if (!a.left || b.left < a.left) a.left = b.left;
	if (!a.right || b.right > a.right) a.right = b.right;
	return a;
}
var DEFAULT_RECT = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function getComponentBoundingRect(instance) {
	const el = instance.subTree.el;
	if (typeof window === "undefined") return DEFAULT_RECT;
	if (isFragment(instance)) return getFragmentRect(instance.subTree);
	else if (el?.nodeType === 1) return el?.getBoundingClientRect();
	else if (instance.subTree.component) return getComponentBoundingRect(instance.subTree.component);
	else return DEFAULT_RECT;
}
function getRootElementsFromComponentInstance(instance) {
	if (isFragment(instance)) return getFragmentRootElements(instance.subTree);
	if (!instance.subTree) return [];
	return [instance.subTree.el];
}
function getFragmentRootElements(vnode) {
	if (!vnode.children) return [];
	const list = [];
	vnode.children.forEach((childVnode) => {
		if (childVnode.component) list.push(...getRootElementsFromComponentInstance(childVnode.component));
		else if (childVnode?.el) list.push(childVnode.el);
	});
	return list;
}
var CONTAINER_ELEMENT_ID = "__vue-devtools-component-inspector__";
var CARD_ELEMENT_ID = "__vue-devtools-component-inspector__card__";
var COMPONENT_NAME_ELEMENT_ID = "__vue-devtools-component-inspector__name__";
var INDICATOR_ELEMENT_ID = "__vue-devtools-component-inspector__indicator__";
var containerStyles = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
};
var cardStyles = {
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
};
var indicatorStyles = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function getContainerElement() {
	return document.getElementById(CONTAINER_ELEMENT_ID);
}
function getCardElement() {
	return document.getElementById(CARD_ELEMENT_ID);
}
function getIndicatorElement() {
	return document.getElementById(INDICATOR_ELEMENT_ID);
}
function getNameElement() {
	return document.getElementById(COMPONENT_NAME_ELEMENT_ID);
}
function getStyles(bounds) {
	return {
		left: `${Math.round(bounds.left * 100) / 100}px`,
		top: `${Math.round(bounds.top * 100) / 100}px`,
		width: `${Math.round(bounds.width * 100) / 100}px`,
		height: `${Math.round(bounds.height * 100) / 100}px`
	};
}
function create(options) {
	const containerEl = document.createElement("div");
	containerEl.id = options.elementId ?? CONTAINER_ELEMENT_ID;
	Object.assign(containerEl.style, {
		...containerStyles,
		...getStyles(options.bounds),
		...options.style
	});
	const cardEl = document.createElement("span");
	cardEl.id = CARD_ELEMENT_ID;
	Object.assign(cardEl.style, {
		...cardStyles,
		top: options.bounds.top < 35 ? 0 : "-35px"
	});
	const nameEl = document.createElement("span");
	nameEl.id = COMPONENT_NAME_ELEMENT_ID;
	nameEl.innerHTML = `&lt;${options.name}&gt;&nbsp;&nbsp;`;
	const indicatorEl = document.createElement("i");
	indicatorEl.id = INDICATOR_ELEMENT_ID;
	indicatorEl.innerHTML = `${Math.round(options.bounds.width * 100) / 100} x ${Math.round(options.bounds.height * 100) / 100}`;
	Object.assign(indicatorEl.style, indicatorStyles);
	cardEl.appendChild(nameEl);
	cardEl.appendChild(indicatorEl);
	containerEl.appendChild(cardEl);
	document.body.appendChild(containerEl);
	return containerEl;
}
function update(options) {
	const containerEl = getContainerElement();
	const cardEl = getCardElement();
	const nameEl = getNameElement();
	const indicatorEl = getIndicatorElement();
	if (containerEl) {
		Object.assign(containerEl.style, {
			...containerStyles,
			...getStyles(options.bounds)
		});
		Object.assign(cardEl.style, { top: options.bounds.top < 35 ? 0 : "-35px" });
		nameEl.innerHTML = `&lt;${options.name}&gt;&nbsp;&nbsp;`;
		indicatorEl.innerHTML = `${Math.round(options.bounds.width * 100) / 100} x ${Math.round(options.bounds.height * 100) / 100}`;
	}
}
function highlight(instance) {
	const bounds = getComponentBoundingRect(instance);
	if (!bounds.width && !bounds.height) return;
	const name = getInstanceName(instance);
	getContainerElement() ? update({
		bounds,
		name
	}) : create({
		bounds,
		name
	});
}
function unhighlight() {
	const el = getContainerElement();
	if (el) el.style.display = "none";
}
var inspectInstance = null;
function inspectFn(e) {
	const target = e.target;
	if (target) {
		const instance = target.__vueParentComponent;
		if (instance) {
			inspectInstance = instance;
			if (instance.vnode.el) {
				const bounds = getComponentBoundingRect(instance);
				const name = getInstanceName(instance);
				getContainerElement() ? update({
					bounds,
					name
				}) : create({
					bounds,
					name
				});
			}
		}
	}
}
function selectComponentFn(e, cb) {
	e.preventDefault();
	e.stopPropagation();
	if (inspectInstance) cb(getUniqueComponentId(inspectInstance));
}
var inspectComponentHighLighterSelectFn = null;
function cancelInspectComponentHighLighter() {
	unhighlight();
	window.removeEventListener("mouseover", inspectFn);
	window.removeEventListener("click", inspectComponentHighLighterSelectFn, true);
	inspectComponentHighLighterSelectFn = null;
}
function inspectComponentHighLighter() {
	window.addEventListener("mouseover", inspectFn);
	return new Promise((resolve) => {
		function onSelect(e) {
			e.preventDefault();
			e.stopPropagation();
			selectComponentFn(e, (id) => {
				window.removeEventListener("click", onSelect, true);
				inspectComponentHighLighterSelectFn = null;
				window.removeEventListener("mouseover", inspectFn);
				const el = getContainerElement();
				if (el) el.style.display = "none";
				resolve(JSON.stringify({ id }));
			});
		}
		inspectComponentHighLighterSelectFn = onSelect;
		window.addEventListener("click", onSelect, true);
	});
}
function scrollToComponent(options) {
	const instance = getComponentInstance(activeAppRecord.value, options.id);
	if (instance) {
		const [el] = getRootElementsFromComponentInstance(instance);
		if (typeof el.scrollIntoView === "function") el.scrollIntoView({ behavior: "smooth" });
		else {
			const bounds = getComponentBoundingRect(instance);
			const scrollTarget = document.createElement("div");
			const styles = {
				...getStyles(bounds),
				position: "absolute"
			};
			Object.assign(scrollTarget.style, styles);
			document.body.appendChild(scrollTarget);
			scrollTarget.scrollIntoView({ behavior: "smooth" });
			setTimeout(() => {
				document.body.removeChild(scrollTarget);
			}, 2e3);
		}
		setTimeout(() => {
			const bounds = getComponentBoundingRect(instance);
			if (bounds.width || bounds.height) {
				const name = getInstanceName(instance);
				const el = getContainerElement();
				el ? update({
					...options,
					name,
					bounds
				}) : create({
					...options,
					name,
					bounds
				});
				setTimeout(() => {
					if (el) el.style.display = "none";
				}, 1500);
			}
		}, 1200);
	}
}
target.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ??= true;
function waitForInspectorInit(cb) {
	let total = 0;
	const timer = setInterval(() => {
		if (target.__VUE_INSPECTOR__) {
			clearInterval(timer);
			total += 30;
			cb();
		}
		if (total >= 5e3) clearInterval(timer);
	}, 30);
}
function setupInspector() {
	const inspector = target.__VUE_INSPECTOR__;
	const _openInEditor = inspector.openInEditor;
	inspector.openInEditor = async (...params) => {
		inspector.disable();
		_openInEditor(...params);
	};
}
function getComponentInspector() {
	return new Promise((resolve) => {
		function setup() {
			setupInspector();
			resolve(target.__VUE_INSPECTOR__);
		}
		if (!target.__VUE_INSPECTOR__) waitForInspectorInit(() => {
			setup();
		});
		else setup();
	});
}
var ReactiveFlags = function(ReactiveFlags) {
	ReactiveFlags["SKIP"] = "__v_skip";
	ReactiveFlags["IS_REACTIVE"] = "__v_isReactive";
	ReactiveFlags["IS_READONLY"] = "__v_isReadonly";
	ReactiveFlags["IS_SHALLOW"] = "__v_isShallow";
	ReactiveFlags["RAW"] = "__v_raw";
	return ReactiveFlags;
}({});
function isReadonly(value) {
	return !!(value && value[ReactiveFlags.IS_READONLY]);
}
function isReactive$1(value) {
	if (isReadonly(value)) return isReactive$1(value[ReactiveFlags.RAW]);
	return !!(value && value[ReactiveFlags.IS_REACTIVE]);
}
function isRef$1(r) {
	return !!(r && r.__v_isRef === true);
}
function toRaw$1(observed) {
	const raw = observed && observed[ReactiveFlags.RAW];
	return raw ? toRaw$1(raw) : observed;
}
var StateEditor = class {
	constructor() {
		this.refEditor = new RefStateEditor();
	}
	set(object, path, value, cb) {
		const sections = Array.isArray(path) ? path : path.split(".");
		while (sections.length > 1) {
			const section = sections.shift();
			if (object instanceof Map) object = object.get(section);
			else if (object instanceof Set) object = Array.from(object.values())[section];
			else object = object[section];
			if (this.refEditor.isRef(object)) object = this.refEditor.get(object);
		}
		const field = sections[0];
		const item = this.refEditor.get(object)[field];
		if (cb) cb(object, field, value);
		else if (this.refEditor.isRef(item)) this.refEditor.set(item, value);
		else object[field] = value;
	}
	get(object, path) {
		const sections = Array.isArray(path) ? path : path.split(".");
		for (let i = 0; i < sections.length; i++) {
			if (object instanceof Map) object = object.get(sections[i]);
			else object = object[sections[i]];
			if (this.refEditor.isRef(object)) object = this.refEditor.get(object);
			if (!object) return void 0;
		}
		return object;
	}
	has(object, path, parent = false) {
		if (typeof object === "undefined") return false;
		const sections = Array.isArray(path) ? path.slice() : path.split(".");
		const size = !parent ? 1 : 2;
		while (object && sections.length > size) {
			const section = sections.shift();
			object = object[section];
			if (this.refEditor.isRef(object)) object = this.refEditor.get(object);
		}
		return object != null && Object.prototype.hasOwnProperty.call(object, sections[0]);
	}
	createDefaultSetCallback(state) {
		return (object, field, value) => {
			if (state.remove || state.newKey) if (Array.isArray(object)) object.splice(field, 1);
			else if (toRaw$1(object) instanceof Map) object.delete(field);
			else if (toRaw$1(object) instanceof Set) object.delete(Array.from(object.values())[field]);
			else Reflect.deleteProperty(object, field);
			if (!state.remove) {
				const target = object[state.newKey || field];
				if (this.refEditor.isRef(target)) this.refEditor.set(target, value);
				else if (toRaw$1(object) instanceof Map) object.set(state.newKey || field, value);
				else if (toRaw$1(object) instanceof Set) object.add(value);
				else object[state.newKey || field] = value;
			}
		};
	}
};
var RefStateEditor = class {
	set(ref, value) {
		if (isRef$1(ref)) ref.value = value;
		else {
			if (ref instanceof Set && Array.isArray(value)) {
				ref.clear();
				value.forEach((v) => ref.add(v));
				return;
			}
			const currentKeys = Object.keys(value);
			if (ref instanceof Map) {
				const previousKeysSet = new Set(ref.keys());
				currentKeys.forEach((key) => {
					ref.set(key, Reflect.get(value, key));
					previousKeysSet.delete(key);
				});
				previousKeysSet.forEach((key) => ref.delete(key));
				return;
			}
			const previousKeysSet = new Set(Object.keys(ref));
			currentKeys.forEach((key) => {
				Reflect.set(ref, key, Reflect.get(value, key));
				previousKeysSet.delete(key);
			});
			previousKeysSet.forEach((key) => Reflect.deleteProperty(ref, key));
		}
	}
	get(ref) {
		return isRef$1(ref) ? ref.value : ref;
	}
	isRef(ref) {
		return isRef$1(ref) || isReactive$1(ref);
	}
};
new StateEditor();
var TIMELINE_LAYERS_STATE_STORAGE_ID = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function getTimelineLayersStateFromStorage() {
	if (typeof window === "undefined" || !isBrowser || typeof localStorage === "undefined" || localStorage === null) return {
		recordingState: false,
		mouseEventEnabled: false,
		keyboardEventEnabled: false,
		componentEventEnabled: false,
		performanceEventEnabled: false,
		selected: ""
	};
	const state = typeof localStorage.getItem !== "undefined" ? localStorage.getItem(TIMELINE_LAYERS_STATE_STORAGE_ID) : null;
	return state ? JSON.parse(state) : {
		recordingState: false,
		mouseEventEnabled: false,
		keyboardEventEnabled: false,
		componentEventEnabled: false,
		performanceEventEnabled: false,
		selected: ""
	};
}
target.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ??= [];
var devtoolsTimelineLayers = new Proxy(target.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(target, prop, receiver) {
	return Reflect.get(target, prop, receiver);
} });
function addTimelineLayer(options, descriptor) {
	devtoolsState.timelineLayersState[descriptor.id] = false;
	devtoolsTimelineLayers.push({
		...options,
		descriptorId: descriptor.id,
		appRecord: getAppRecord(descriptor.app)
	});
}
target.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
var devtoolsInspector = new Proxy(target.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(target, prop, receiver) {
	return Reflect.get(target, prop, receiver);
} });
var callInspectorUpdatedHook = debounce(() => {
	devtoolsContext.hooks.callHook(DevToolsMessagingHookKeys.SEND_INSPECTOR_TO_CLIENT, getActiveInspectors());
});
function addInspector(inspector, descriptor) {
	devtoolsInspector.push({
		options: inspector,
		descriptor,
		treeFilterPlaceholder: inspector.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: inspector.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: getAppRecord(descriptor.app)
	});
	callInspectorUpdatedHook();
}
function getActiveInspectors() {
	return devtoolsInspector.filter((inspector) => inspector.descriptor.app === activeAppRecord.value.app).filter((inspector) => inspector.descriptor.id !== "components").map((inspector) => {
		const descriptor = inspector.descriptor;
		const options = inspector.options;
		return {
			id: options.id,
			label: options.label,
			logo: descriptor.logo,
			icon: `custom-ic-baseline-${options?.icon?.replace(/_/g, "-")}`,
			packageName: descriptor.packageName,
			homepage: descriptor.homepage,
			pluginId: descriptor.id
		};
	});
}
function getInspector(id, app) {
	return devtoolsInspector.find((inspector) => inspector.options.id === id && (app ? inspector.descriptor.app === app : true));
}
var DevToolsV6PluginAPIHookKeys = function(DevToolsV6PluginAPIHookKeys) {
	DevToolsV6PluginAPIHookKeys["VISIT_COMPONENT_TREE"] = "visitComponentTree";
	DevToolsV6PluginAPIHookKeys["INSPECT_COMPONENT"] = "inspectComponent";
	DevToolsV6PluginAPIHookKeys["EDIT_COMPONENT_STATE"] = "editComponentState";
	DevToolsV6PluginAPIHookKeys["GET_INSPECTOR_TREE"] = "getInspectorTree";
	DevToolsV6PluginAPIHookKeys["GET_INSPECTOR_STATE"] = "getInspectorState";
	DevToolsV6PluginAPIHookKeys["EDIT_INSPECTOR_STATE"] = "editInspectorState";
	DevToolsV6PluginAPIHookKeys["INSPECT_TIMELINE_EVENT"] = "inspectTimelineEvent";
	DevToolsV6PluginAPIHookKeys["TIMELINE_CLEARED"] = "timelineCleared";
	DevToolsV6PluginAPIHookKeys["SET_PLUGIN_SETTINGS"] = "setPluginSettings";
	return DevToolsV6PluginAPIHookKeys;
}({});
var DevToolsContextHookKeys = function(DevToolsContextHookKeys) {
	DevToolsContextHookKeys["ADD_INSPECTOR"] = "addInspector";
	DevToolsContextHookKeys["SEND_INSPECTOR_TREE"] = "sendInspectorTree";
	DevToolsContextHookKeys["SEND_INSPECTOR_STATE"] = "sendInspectorState";
	DevToolsContextHookKeys["CUSTOM_INSPECTOR_SELECT_NODE"] = "customInspectorSelectNode";
	DevToolsContextHookKeys["TIMELINE_LAYER_ADDED"] = "timelineLayerAdded";
	DevToolsContextHookKeys["TIMELINE_EVENT_ADDED"] = "timelineEventAdded";
	DevToolsContextHookKeys["GET_COMPONENT_INSTANCES"] = "getComponentInstances";
	DevToolsContextHookKeys["GET_COMPONENT_BOUNDS"] = "getComponentBounds";
	DevToolsContextHookKeys["GET_COMPONENT_NAME"] = "getComponentName";
	DevToolsContextHookKeys["COMPONENT_HIGHLIGHT"] = "componentHighlight";
	DevToolsContextHookKeys["COMPONENT_UNHIGHLIGHT"] = "componentUnhighlight";
	return DevToolsContextHookKeys;
}({});
var DevToolsMessagingHookKeys = function(DevToolsMessagingHookKeys) {
	DevToolsMessagingHookKeys["SEND_INSPECTOR_TREE_TO_CLIENT"] = "sendInspectorTreeToClient";
	DevToolsMessagingHookKeys["SEND_INSPECTOR_STATE_TO_CLIENT"] = "sendInspectorStateToClient";
	DevToolsMessagingHookKeys["SEND_TIMELINE_EVENT_TO_CLIENT"] = "sendTimelineEventToClient";
	DevToolsMessagingHookKeys["SEND_INSPECTOR_TO_CLIENT"] = "sendInspectorToClient";
	DevToolsMessagingHookKeys["SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT"] = "sendActiveAppUpdatedToClient";
	DevToolsMessagingHookKeys["DEVTOOLS_STATE_UPDATED"] = "devtoolsStateUpdated";
	DevToolsMessagingHookKeys["DEVTOOLS_CONNECTED_UPDATED"] = "devtoolsConnectedUpdated";
	DevToolsMessagingHookKeys["ROUTER_INFO_UPDATED"] = "routerInfoUpdated";
	return DevToolsMessagingHookKeys;
}({});
function createDevToolsCtxHooks() {
	const hooks = createHooks();
	hooks.hook(DevToolsContextHookKeys.ADD_INSPECTOR, ({ inspector, plugin }) => {
		addInspector(inspector, plugin.descriptor);
	});
	const debounceSendInspectorTree = debounce(async ({ inspectorId, plugin }) => {
		if (!inspectorId || !plugin?.descriptor?.app || devtoolsState.highPerfModeEnabled) return;
		const inspector = getInspector(inspectorId, plugin.descriptor.app);
		const _payload = {
			app: plugin.descriptor.app,
			inspectorId,
			filter: inspector?.treeFilter || "",
			rootNodes: []
		};
		await new Promise((resolve) => {
			hooks.callHookWith(async (callbacks) => {
				await Promise.all(callbacks.map((cb) => cb(_payload)));
				resolve();
			}, DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE);
		});
		hooks.callHookWith(async (callbacks) => {
			await Promise.all(callbacks.map((cb) => cb({
				inspectorId,
				rootNodes: _payload.rootNodes
			})));
		}, DevToolsMessagingHookKeys.SEND_INSPECTOR_TREE_TO_CLIENT);
	}, 120);
	hooks.hook(DevToolsContextHookKeys.SEND_INSPECTOR_TREE, debounceSendInspectorTree);
	const debounceSendInspectorState = debounce(async ({ inspectorId, plugin }) => {
		if (!inspectorId || !plugin?.descriptor?.app || devtoolsState.highPerfModeEnabled) return;
		const inspector = getInspector(inspectorId, plugin.descriptor.app);
		const _payload = {
			app: plugin.descriptor.app,
			inspectorId,
			nodeId: inspector?.selectedNodeId || "",
			state: null
		};
		const ctx = { currentTab: `custom-inspector:${inspectorId}` };
		if (_payload.nodeId) await new Promise((resolve) => {
			hooks.callHookWith(async (callbacks) => {
				await Promise.all(callbacks.map((cb) => cb(_payload, ctx)));
				resolve();
			}, DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE);
		});
		hooks.callHookWith(async (callbacks) => {
			await Promise.all(callbacks.map((cb) => cb({
				inspectorId,
				nodeId: _payload.nodeId,
				state: _payload.state
			})));
		}, DevToolsMessagingHookKeys.SEND_INSPECTOR_STATE_TO_CLIENT);
	}, 120);
	hooks.hook(DevToolsContextHookKeys.SEND_INSPECTOR_STATE, debounceSendInspectorState);
	hooks.hook(DevToolsContextHookKeys.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId, nodeId, plugin }) => {
		const inspector = getInspector(inspectorId, plugin.descriptor.app);
		if (!inspector) return;
		inspector.selectedNodeId = nodeId;
	});
	hooks.hook(DevToolsContextHookKeys.TIMELINE_LAYER_ADDED, ({ options, plugin }) => {
		addTimelineLayer(options, plugin.descriptor);
	});
	hooks.hook(DevToolsContextHookKeys.TIMELINE_EVENT_ADDED, ({ options, plugin }) => {
		if (devtoolsState.highPerfModeEnabled || !devtoolsState.timelineLayersState?.[plugin.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(options.layerId)) return;
		hooks.callHookWith(async (callbacks) => {
			await Promise.all(callbacks.map((cb) => cb(options)));
		}, DevToolsMessagingHookKeys.SEND_TIMELINE_EVENT_TO_CLIENT);
	});
	hooks.hook(DevToolsContextHookKeys.GET_COMPONENT_INSTANCES, async ({ app }) => {
		const appRecord = app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!appRecord) return null;
		const appId = appRecord.id.toString();
		return [...appRecord.instanceMap].filter(([key]) => key.split(":")[0] === appId).map(([, instance]) => instance);
	});
	hooks.hook(DevToolsContextHookKeys.GET_COMPONENT_BOUNDS, async ({ instance }) => {
		return getComponentBoundingRect(instance);
	});
	hooks.hook(DevToolsContextHookKeys.GET_COMPONENT_NAME, ({ instance }) => {
		return getInstanceName(instance);
	});
	hooks.hook(DevToolsContextHookKeys.COMPONENT_HIGHLIGHT, ({ uid }) => {
		const instance = activeAppRecord.value.instanceMap.get(uid);
		if (instance) highlight(instance);
	});
	hooks.hook(DevToolsContextHookKeys.COMPONENT_UNHIGHLIGHT, () => {
		unhighlight();
	});
	return hooks;
}
target.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [];
target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {};
target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "";
target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [];
target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
var STATE_KEY = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function initStateFactory() {
	return {
		connected: false,
		clientConnected: false,
		vitePluginDetected: true,
		appRecords: [],
		activeAppRecordId: "",
		tabs: [],
		commands: [],
		highPerfModeEnabled: true,
		devtoolsClientDetected: {},
		perfUniqueGroupId: 0,
		timelineLayersState: getTimelineLayersStateFromStorage()
	};
}
target[STATE_KEY] ??= initStateFactory();
var callStateUpdatedHook = debounce((state) => {
	devtoolsContext.hooks.callHook(DevToolsMessagingHookKeys.DEVTOOLS_STATE_UPDATED, { state });
});
debounce((state, oldState) => {
	devtoolsContext.hooks.callHook(DevToolsMessagingHookKeys.DEVTOOLS_CONNECTED_UPDATED, {
		state,
		oldState
	});
});
var devtoolsAppRecords = new Proxy(target.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(_target, prop, receiver) {
	if (prop === "value") return target.__VUE_DEVTOOLS_KIT_APP_RECORDS__;
	return target.__VUE_DEVTOOLS_KIT_APP_RECORDS__[prop];
} });
var activeAppRecord = new Proxy(target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(_target, prop, receiver) {
	if (prop === "value") return target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__;
	else if (prop === "id") return target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__;
	return target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[prop];
} });
function updateAllStates() {
	callStateUpdatedHook({
		...target[STATE_KEY],
		appRecords: devtoolsAppRecords.value,
		activeAppRecordId: activeAppRecord.id,
		tabs: target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function setActiveAppRecord(app) {
	target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = app;
	updateAllStates();
}
function setActiveAppRecordId(id) {
	target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = id;
	updateAllStates();
}
var devtoolsState = new Proxy(target[STATE_KEY], {
	get(target$3, property) {
		if (property === "appRecords") return devtoolsAppRecords;
		else if (property === "activeAppRecordId") return activeAppRecord.id;
		else if (property === "tabs") return target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__;
		else if (property === "commands") return target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__;
		return target[STATE_KEY][property];
	},
	deleteProperty(target, property) {
		delete target[property];
		return true;
	},
	set(target$4, property, value) {
		target$4[property] = value;
		target[STATE_KEY][property] = value;
		return true;
	}
});
function openInEditor(options = {}) {
	const { file, host, baseUrl = window.location.origin, line = 0, column = 0 } = options;
	if (file) {
		if (host === "chrome-extension") {
			const fileName = file.replace(/\\/g, "\\\\");
			const _baseUrl = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
			fetch(`${_baseUrl}__open-in-editor?file=${encodeURI(file)}`).then((response) => {
				if (!response.ok) {
					const msg = `Opening component ${fileName} failed`;
					console.log(`%c${msg}`, "color:red");
				}
			});
		} else if (devtoolsState.vitePluginDetected) {
			const _baseUrl = target.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? baseUrl;
			target.__VUE_INSPECTOR__.openInEditor(_baseUrl, file, line, column);
		}
	}
}
target.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ??= [];
var devtoolsPluginBuffer = new Proxy(target.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(target, prop, receiver) {
	return Reflect.get(target, prop, receiver);
} });
function _getSettings(settings) {
	const _settings = {};
	Object.keys(settings).forEach((key) => {
		_settings[key] = settings[key].defaultValue;
	});
	return _settings;
}
function getPluginLocalKey(pluginId) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${pluginId}__`;
}
function getPluginSettingsOptions(pluginId) {
	return (devtoolsPluginBuffer.find((item) => item[0].id === pluginId && !!item[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function getPluginSettings(pluginId, fallbackValue) {
	const localKey = getPluginLocalKey(pluginId);
	if (localKey) {
		const localSettings = localStorage.getItem(localKey);
		if (localSettings) return JSON.parse(localSettings);
	}
	if (pluginId) return _getSettings((devtoolsPluginBuffer.find((item) => item[0].id === pluginId)?.[0] ?? null)?.settings ?? {});
	return _getSettings(fallbackValue);
}
function initPluginSettings(pluginId, settings) {
	const localKey = getPluginLocalKey(pluginId);
	if (!localStorage.getItem(localKey)) localStorage.setItem(localKey, JSON.stringify(_getSettings(settings)));
}
function setPluginSettings(pluginId, key, value) {
	const localKey = getPluginLocalKey(pluginId);
	const localSettings = localStorage.getItem(localKey);
	const parsedLocalSettings = JSON.parse(localSettings || "{}");
	const updated = {
		...parsedLocalSettings,
		[key]: value
	};
	localStorage.setItem(localKey, JSON.stringify(updated));
	devtoolsContext.hooks.callHookWith((callbacks) => {
		callbacks.forEach((cb) => cb({
			pluginId,
			key,
			oldValue: parsedLocalSettings[key],
			newValue: value,
			settings: updated
		}));
	}, DevToolsV6PluginAPIHookKeys.SET_PLUGIN_SETTINGS);
}
var DevToolsHooks = function(DevToolsHooks) {
	DevToolsHooks["APP_INIT"] = "app:init";
	DevToolsHooks["APP_UNMOUNT"] = "app:unmount";
	DevToolsHooks["COMPONENT_UPDATED"] = "component:updated";
	DevToolsHooks["COMPONENT_ADDED"] = "component:added";
	DevToolsHooks["COMPONENT_REMOVED"] = "component:removed";
	DevToolsHooks["COMPONENT_EMIT"] = "component:emit";
	DevToolsHooks["PERFORMANCE_START"] = "perf:start";
	DevToolsHooks["PERFORMANCE_END"] = "perf:end";
	DevToolsHooks["ADD_ROUTE"] = "router:add-route";
	DevToolsHooks["REMOVE_ROUTE"] = "router:remove-route";
	DevToolsHooks["RENDER_TRACKED"] = "render:tracked";
	DevToolsHooks["RENDER_TRIGGERED"] = "render:triggered";
	DevToolsHooks["APP_CONNECTED"] = "app:connected";
	DevToolsHooks["SETUP_DEVTOOLS_PLUGIN"] = "devtools-plugin:setup";
	return DevToolsHooks;
}({});
var devtoolsHooks = target.__VUE_DEVTOOLS_HOOK ??= createHooks();
var hook = {
	on: {
		vueAppInit(fn) {
			devtoolsHooks.hook(DevToolsHooks.APP_INIT, fn);
		},
		vueAppUnmount(fn) {
			devtoolsHooks.hook(DevToolsHooks.APP_UNMOUNT, fn);
		},
		vueAppConnected(fn) {
			devtoolsHooks.hook(DevToolsHooks.APP_CONNECTED, fn);
		},
		componentAdded(fn) {
			return devtoolsHooks.hook(DevToolsHooks.COMPONENT_ADDED, fn);
		},
		componentEmit(fn) {
			return devtoolsHooks.hook(DevToolsHooks.COMPONENT_EMIT, fn);
		},
		componentUpdated(fn) {
			return devtoolsHooks.hook(DevToolsHooks.COMPONENT_UPDATED, fn);
		},
		componentRemoved(fn) {
			return devtoolsHooks.hook(DevToolsHooks.COMPONENT_REMOVED, fn);
		},
		setupDevtoolsPlugin(fn) {
			devtoolsHooks.hook(DevToolsHooks.SETUP_DEVTOOLS_PLUGIN, fn);
		},
		perfStart(fn) {
			return devtoolsHooks.hook(DevToolsHooks.PERFORMANCE_START, fn);
		},
		perfEnd(fn) {
			return devtoolsHooks.hook(DevToolsHooks.PERFORMANCE_END, fn);
		}
	},
	setupDevToolsPlugin(pluginDescriptor, setupFn) {
		return devtoolsHooks.callHook(DevToolsHooks.SETUP_DEVTOOLS_PLUGIN, pluginDescriptor, setupFn);
	}
};
var DevToolsV6PluginAPI = class {
	constructor({ plugin, ctx }) {
		this.hooks = ctx.hooks;
		this.plugin = plugin;
	}
	get on() {
		return {
			visitComponentTree: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.VISIT_COMPONENT_TREE, handler);
			},
			inspectComponent: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.INSPECT_COMPONENT, handler);
			},
			editComponentState: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.EDIT_COMPONENT_STATE, handler);
			},
			getInspectorTree: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE, handler);
			},
			getInspectorState: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE, handler);
			},
			editInspectorState: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE, handler);
			},
			inspectTimelineEvent: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.INSPECT_TIMELINE_EVENT, handler);
			},
			timelineCleared: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.TIMELINE_CLEARED, handler);
			},
			setPluginSettings: (handler) => {
				this.hooks.hook(DevToolsV6PluginAPIHookKeys.SET_PLUGIN_SETTINGS, handler);
			}
		};
	}
	notifyComponentUpdate(instance) {
		if (devtoolsState.highPerfModeEnabled) return;
		const inspector = getActiveInspectors().find((i) => i.packageName === this.plugin.descriptor.packageName);
		if (inspector?.id) {
			if (instance) {
				const args = [
					instance.appContext.app,
					instance.uid,
					instance.parent?.uid,
					instance
				];
				devtoolsHooks.callHook(DevToolsHooks.COMPONENT_UPDATED, ...args);
			} else devtoolsHooks.callHook(DevToolsHooks.COMPONENT_UPDATED);
			this.hooks.callHook(DevToolsContextHookKeys.SEND_INSPECTOR_STATE, {
				inspectorId: inspector.id,
				plugin: this.plugin
			});
		}
	}
	addInspector(options) {
		this.hooks.callHook(DevToolsContextHookKeys.ADD_INSPECTOR, {
			inspector: options,
			plugin: this.plugin
		});
		if (this.plugin.descriptor.settings) initPluginSettings(options.id, this.plugin.descriptor.settings);
	}
	sendInspectorTree(inspectorId) {
		if (devtoolsState.highPerfModeEnabled) return;
		this.hooks.callHook(DevToolsContextHookKeys.SEND_INSPECTOR_TREE, {
			inspectorId,
			plugin: this.plugin
		});
	}
	sendInspectorState(inspectorId) {
		if (devtoolsState.highPerfModeEnabled) return;
		this.hooks.callHook(DevToolsContextHookKeys.SEND_INSPECTOR_STATE, {
			inspectorId,
			plugin: this.plugin
		});
	}
	selectInspectorNode(inspectorId, nodeId) {
		this.hooks.callHook(DevToolsContextHookKeys.CUSTOM_INSPECTOR_SELECT_NODE, {
			inspectorId,
			nodeId,
			plugin: this.plugin
		});
	}
	visitComponentTree(payload) {
		return this.hooks.callHook(DevToolsV6PluginAPIHookKeys.VISIT_COMPONENT_TREE, payload);
	}
	now() {
		if (devtoolsState.highPerfModeEnabled) return 0;
		return Date.now();
	}
	addTimelineLayer(options) {
		this.hooks.callHook(DevToolsContextHookKeys.TIMELINE_LAYER_ADDED, {
			options,
			plugin: this.plugin
		});
	}
	addTimelineEvent(options) {
		if (devtoolsState.highPerfModeEnabled) return;
		this.hooks.callHook(DevToolsContextHookKeys.TIMELINE_EVENT_ADDED, {
			options,
			plugin: this.plugin
		});
	}
	getSettings(pluginId) {
		return getPluginSettings(pluginId ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
	}
	getComponentInstances(app) {
		return this.hooks.callHook(DevToolsContextHookKeys.GET_COMPONENT_INSTANCES, { app });
	}
	getComponentBounds(instance) {
		return this.hooks.callHook(DevToolsContextHookKeys.GET_COMPONENT_BOUNDS, { instance });
	}
	getComponentName(instance) {
		return this.hooks.callHook(DevToolsContextHookKeys.GET_COMPONENT_NAME, { instance });
	}
	highlightElement(instance) {
		const uid = instance.__VUE_DEVTOOLS_NEXT_UID__;
		return this.hooks.callHook(DevToolsContextHookKeys.COMPONENT_HIGHLIGHT, { uid });
	}
	unhighlightElement() {
		return this.hooks.callHook(DevToolsContextHookKeys.COMPONENT_UNHIGHLIGHT);
	}
};
var DevToolsPluginAPI = DevToolsV6PluginAPI;
var UNDEFINED = "__vue_devtool_undefined__";
var INFINITY = "__vue_devtool_infinity__";
var NEGATIVE_INFINITY = "__vue_devtool_negative_infinity__";
var NAN = "__vue_devtool_nan__";
Object.entries({
	[UNDEFINED]: "undefined",
	[NAN]: "NaN",
	[INFINITY]: "Infinity",
	[NEGATIVE_INFINITY]: "-Infinity"
}).reduce((acc, [key, value]) => {
	acc[value] = key;
	return acc;
}, {});
target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function setupDevToolsPlugin(pluginDescriptor, setupFn) {
	return hook.setupDevToolsPlugin(pluginDescriptor, setupFn);
}
function callDevToolsPluginSetupFn(plugin, app) {
	const [pluginDescriptor, setupFn] = plugin;
	if (pluginDescriptor.app !== app) return;
	const api = new DevToolsPluginAPI({
		plugin: {
			setupFn,
			descriptor: pluginDescriptor
		},
		ctx: devtoolsContext
	});
	if (pluginDescriptor.packageName === "vuex") api.on.editInspectorState((payload) => {
		api.sendInspectorState(payload.inspectorId);
	});
	setupFn(api);
}
function registerDevToolsPlugin(app, options) {
	if (target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(app)) return;
	if (devtoolsState.highPerfModeEnabled && !options?.inspectingComponent) return;
	target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(app);
	devtoolsPluginBuffer.forEach((plugin) => {
		callDevToolsPluginSetupFn(plugin, app);
	});
}
var ROUTER_KEY = "__VUE_DEVTOOLS_ROUTER__";
var ROUTER_INFO_KEY = "__VUE_DEVTOOLS_ROUTER_INFO__";
target[ROUTER_INFO_KEY] ??= {
	currentRoute: null,
	routes: []
};
target[ROUTER_KEY] ??= {};
new Proxy(target[ROUTER_INFO_KEY], { get(target$1, property) {
	return target[ROUTER_INFO_KEY][property];
} });
new Proxy(target[ROUTER_KEY], { get(target$2, property) {
	if (property === "value") return target[ROUTER_KEY];
} });
function getRoutes(router) {
	const routesMap = /* @__PURE__ */ new Map();
	return (router?.getRoutes() || []).filter((i) => !routesMap.has(i.path) && routesMap.set(i.path, 1));
}
function filterRoutes(routes) {
	return routes.map((item) => {
		let { path, name, children, meta } = item;
		if (children?.length) children = filterRoutes(children);
		return {
			path,
			name,
			children,
			meta
		};
	});
}
function filterCurrentRoute(route) {
	if (route) {
		const { fullPath, hash, href, path, name, matched, params, query } = route;
		return {
			fullPath,
			hash,
			href,
			path,
			name,
			params,
			query,
			matched: filterRoutes(matched)
		};
	}
	return route;
}
function normalizeRouterInfo(appRecord, activeAppRecord) {
	function init() {
		const router = appRecord.app?.config.globalProperties.$router;
		const currentRoute = filterCurrentRoute(router?.currentRoute.value);
		const routes = filterRoutes(getRoutes(router));
		const c = console.warn;
		console.warn = () => {};
		target[ROUTER_INFO_KEY] = {
			currentRoute: currentRoute ? deepClone(currentRoute) : {},
			routes: deepClone(routes)
		};
		target[ROUTER_KEY] = router;
		console.warn = c;
	}
	init();
	hook.on.componentUpdated(debounce(() => {
		if (activeAppRecord.value?.app !== appRecord.app) return;
		init();
		if (devtoolsState.highPerfModeEnabled) return;
		devtoolsContext.hooks.callHook(DevToolsMessagingHookKeys.ROUTER_INFO_UPDATED, { state: target[ROUTER_INFO_KEY] });
	}, 200));
}
function createDevToolsApi(hooks) {
	return {
		async getInspectorTree(payload) {
			const _payload = {
				...payload,
				app: activeAppRecord.value.app,
				rootNodes: []
			};
			await new Promise((resolve) => {
				hooks.callHookWith(async (callbacks) => {
					await Promise.all(callbacks.map((cb) => cb(_payload)));
					resolve();
				}, DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE);
			});
			return _payload.rootNodes;
		},
		async getInspectorState(payload) {
			const _payload = {
				...payload,
				app: activeAppRecord.value.app,
				state: null
			};
			const ctx = { currentTab: `custom-inspector:${payload.inspectorId}` };
			await new Promise((resolve) => {
				hooks.callHookWith(async (callbacks) => {
					await Promise.all(callbacks.map((cb) => cb(_payload, ctx)));
					resolve();
				}, DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE);
			});
			return _payload.state;
		},
		editInspectorState(payload) {
			const stateEditor = new StateEditor();
			const _payload = {
				...payload,
				app: activeAppRecord.value.app,
				set: (obj, path = payload.path, value = payload.state.value, cb) => {
					stateEditor.set(obj, path, value, cb || stateEditor.createDefaultSetCallback(payload.state));
				}
			};
			hooks.callHookWith((callbacks) => {
				callbacks.forEach((cb) => cb(_payload));
			}, DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE);
		},
		sendInspectorState(inspectorId) {
			const inspector = getInspector(inspectorId);
			hooks.callHook(DevToolsContextHookKeys.SEND_INSPECTOR_STATE, {
				inspectorId,
				plugin: {
					descriptor: inspector.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return inspectComponentHighLighter();
		},
		cancelInspectComponentInspector() {
			return cancelInspectComponentHighLighter();
		},
		getComponentRenderCode(id) {
			const instance = getComponentInstance(activeAppRecord.value, id);
			if (instance) return !(typeof instance?.type === "function") ? instance.render.toString() : instance.type.toString();
		},
		scrollToComponent(id) {
			return scrollToComponent({ id });
		},
		openInEditor,
		getVueInspector: getComponentInspector,
		toggleApp(id, options) {
			const appRecord = devtoolsAppRecords.value.find((record) => record.id === id);
			if (appRecord) {
				setActiveAppRecordId(id);
				setActiveAppRecord(appRecord);
				normalizeRouterInfo(appRecord, activeAppRecord);
				callInspectorUpdatedHook();
				registerDevToolsPlugin(appRecord.app, options);
			}
		},
		inspectDOM(instanceId) {
			const instance = getComponentInstance(activeAppRecord.value, instanceId);
			if (instance) {
				const [el] = getRootElementsFromComponentInstance(instance);
				if (el) target.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = el;
			}
		},
		updatePluginSettings(pluginId, key, value) {
			setPluginSettings(pluginId, key, value);
		},
		getPluginSettings(pluginId) {
			return {
				options: getPluginSettingsOptions(pluginId),
				values: getPluginSettings(pluginId)
			};
		}
	};
}
target.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: false };
var hooks = createDevToolsCtxHooks();
target.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
	hooks,
	get state() {
		return {
			...devtoolsState,
			activeAppRecordId: activeAppRecord.id,
			activeAppRecord: activeAppRecord.value,
			appRecords: devtoolsAppRecords.value
		};
	},
	api: createDevToolsApi(hooks)
};
var devtoolsContext = target.__VUE_DEVTOOLS_KIT_CONTEXT__;
var require_speakingurl$1 = __commonJSMin(((exports, module) => {
	(function(root) {
		"use strict";
		var charMap = {
			"À": "A",
			"Á": "A",
			"Â": "A",
			"Ã": "A",
			"Ä": "Ae",
			"Å": "A",
			"Æ": "AE",
			"Ç": "C",
			"È": "E",
			"É": "E",
			"Ê": "E",
			"Ë": "E",
			"Ì": "I",
			"Í": "I",
			"Î": "I",
			"Ï": "I",
			"Ð": "D",
			"Ñ": "N",
			"Ò": "O",
			"Ó": "O",
			"Ô": "O",
			"Õ": "O",
			"Ö": "Oe",
			"Ő": "O",
			"Ø": "O",
			"Ù": "U",
			"Ú": "U",
			"Û": "U",
			"Ü": "Ue",
			"Ű": "U",
			"Ý": "Y",
			"Þ": "TH",
			"ß": "ss",
			"à": "a",
			"á": "a",
			"â": "a",
			"ã": "a",
			"ä": "ae",
			"å": "a",
			"æ": "ae",
			"ç": "c",
			"è": "e",
			"é": "e",
			"ê": "e",
			"ë": "e",
			"ì": "i",
			"í": "i",
			"î": "i",
			"ï": "i",
			"ð": "d",
			"ñ": "n",
			"ò": "o",
			"ó": "o",
			"ô": "o",
			"õ": "o",
			"ö": "oe",
			"ő": "o",
			"ø": "o",
			"ù": "u",
			"ú": "u",
			"û": "u",
			"ü": "ue",
			"ű": "u",
			"ý": "y",
			"þ": "th",
			"ÿ": "y",
			"ẞ": "SS",
			"ا": "a",
			"أ": "a",
			"إ": "i",
			"آ": "aa",
			"ؤ": "u",
			"ئ": "e",
			"ء": "a",
			"ب": "b",
			"ت": "t",
			"ث": "th",
			"ج": "j",
			"ح": "h",
			"خ": "kh",
			"د": "d",
			"ذ": "th",
			"ر": "r",
			"ز": "z",
			"س": "s",
			"ش": "sh",
			"ص": "s",
			"ض": "dh",
			"ط": "t",
			"ظ": "z",
			"ع": "a",
			"غ": "gh",
			"ف": "f",
			"ق": "q",
			"ك": "k",
			"ل": "l",
			"م": "m",
			"ن": "n",
			"ه": "h",
			"و": "w",
			"ي": "y",
			"ى": "a",
			"ة": "h",
			"ﻻ": "la",
			"ﻷ": "laa",
			"ﻹ": "lai",
			"ﻵ": "laa",
			"گ": "g",
			"چ": "ch",
			"پ": "p",
			"ژ": "zh",
			"ک": "k",
			"ی": "y",
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
			"က": "k",
			"ခ": "kh",
			"ဂ": "g",
			"ဃ": "ga",
			"င": "ng",
			"စ": "s",
			"ဆ": "sa",
			"ဇ": "z",
			"စျ": "za",
			"ည": "ny",
			"ဋ": "t",
			"ဌ": "ta",
			"ဍ": "d",
			"ဎ": "da",
			"ဏ": "na",
			"တ": "t",
			"ထ": "ta",
			"ဒ": "d",
			"ဓ": "da",
			"န": "n",
			"ပ": "p",
			"ဖ": "pa",
			"ဗ": "b",
			"ဘ": "ba",
			"မ": "m",
			"ယ": "y",
			"ရ": "ya",
			"လ": "l",
			"ဝ": "w",
			"သ": "th",
			"ဟ": "h",
			"ဠ": "la",
			"အ": "a",
			"ြ": "y",
			"ျ": "ya",
			"ွ": "w",
			"ြွ": "yw",
			"ျွ": "ywa",
			"ှ": "h",
			"ဧ": "e",
			"၏": "-e",
			"ဣ": "i",
			"ဤ": "-i",
			"ဉ": "u",
			"ဦ": "-u",
			"ဩ": "aw",
			"သြော": "aw",
			"ဪ": "aw",
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
			"č": "c",
			"ď": "d",
			"ě": "e",
			"ň": "n",
			"ř": "r",
			"š": "s",
			"ť": "t",
			"ů": "u",
			"ž": "z",
			"Č": "C",
			"Ď": "D",
			"Ě": "E",
			"Ň": "N",
			"Ř": "R",
			"Š": "S",
			"Ť": "T",
			"Ů": "U",
			"Ž": "Z",
			"ހ": "h",
			"ށ": "sh",
			"ނ": "n",
			"ރ": "r",
			"ބ": "b",
			"ޅ": "lh",
			"ކ": "k",
			"އ": "a",
			"ވ": "v",
			"މ": "m",
			"ފ": "f",
			"ދ": "dh",
			"ތ": "th",
			"ލ": "l",
			"ގ": "g",
			"ޏ": "gn",
			"ސ": "s",
			"ޑ": "d",
			"ޒ": "z",
			"ޓ": "t",
			"ޔ": "y",
			"ޕ": "p",
			"ޖ": "j",
			"ޗ": "ch",
			"ޘ": "tt",
			"ޙ": "hh",
			"ޚ": "kh",
			"ޛ": "th",
			"ޜ": "z",
			"ޝ": "sh",
			"ޞ": "s",
			"ޟ": "d",
			"ޠ": "t",
			"ޡ": "z",
			"ޢ": "a",
			"ޣ": "gh",
			"ޤ": "q",
			"ޥ": "w",
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
			"ა": "a",
			"ბ": "b",
			"გ": "g",
			"დ": "d",
			"ე": "e",
			"ვ": "v",
			"ზ": "z",
			"თ": "t",
			"ი": "i",
			"კ": "k",
			"ლ": "l",
			"მ": "m",
			"ნ": "n",
			"ო": "o",
			"პ": "p",
			"ჟ": "zh",
			"რ": "r",
			"ს": "s",
			"ტ": "t",
			"უ": "u",
			"ფ": "p",
			"ქ": "k",
			"ღ": "gh",
			"ყ": "q",
			"შ": "sh",
			"ჩ": "ch",
			"ც": "ts",
			"ძ": "dz",
			"წ": "ts",
			"ჭ": "ch",
			"ხ": "kh",
			"ჯ": "j",
			"ჰ": "h",
			"α": "a",
			"β": "v",
			"γ": "g",
			"δ": "d",
			"ε": "e",
			"ζ": "z",
			"η": "i",
			"θ": "th",
			"ι": "i",
			"κ": "k",
			"λ": "l",
			"μ": "m",
			"ν": "n",
			"ξ": "ks",
			"ο": "o",
			"π": "p",
			"ρ": "r",
			"σ": "s",
			"τ": "t",
			"υ": "y",
			"φ": "f",
			"χ": "x",
			"ψ": "ps",
			"ω": "o",
			"ά": "a",
			"έ": "e",
			"ί": "i",
			"ό": "o",
			"ύ": "y",
			"ή": "i",
			"ώ": "o",
			"ς": "s",
			"ϊ": "i",
			"ΰ": "y",
			"ϋ": "y",
			"ΐ": "i",
			"Α": "A",
			"Β": "B",
			"Γ": "G",
			"Δ": "D",
			"Ε": "E",
			"Ζ": "Z",
			"Η": "I",
			"Θ": "TH",
			"Ι": "I",
			"Κ": "K",
			"Λ": "L",
			"Μ": "M",
			"Ν": "N",
			"Ξ": "KS",
			"Ο": "O",
			"Π": "P",
			"Ρ": "R",
			"Σ": "S",
			"Τ": "T",
			"Υ": "Y",
			"Φ": "F",
			"Χ": "X",
			"Ψ": "PS",
			"Ω": "O",
			"Ά": "A",
			"Έ": "E",
			"Ί": "I",
			"Ό": "O",
			"Ύ": "Y",
			"Ή": "I",
			"Ώ": "O",
			"Ϊ": "I",
			"Ϋ": "Y",
			"ā": "a",
			"ē": "e",
			"ģ": "g",
			"ī": "i",
			"ķ": "k",
			"ļ": "l",
			"ņ": "n",
			"ū": "u",
			"Ā": "A",
			"Ē": "E",
			"Ģ": "G",
			"Ī": "I",
			"Ķ": "k",
			"Ļ": "L",
			"Ņ": "N",
			"Ū": "U",
			"Ќ": "Kj",
			"ќ": "kj",
			"Љ": "Lj",
			"љ": "lj",
			"Њ": "Nj",
			"њ": "nj",
			"Тс": "Ts",
			"тс": "ts",
			"ą": "a",
			"ć": "c",
			"ę": "e",
			"ł": "l",
			"ń": "n",
			"ś": "s",
			"ź": "z",
			"ż": "z",
			"Ą": "A",
			"Ć": "C",
			"Ę": "E",
			"Ł": "L",
			"Ń": "N",
			"Ś": "S",
			"Ź": "Z",
			"Ż": "Z",
			"Є": "Ye",
			"І": "I",
			"Ї": "Yi",
			"Ґ": "G",
			"є": "ye",
			"і": "i",
			"ї": "yi",
			"ґ": "g",
			"ă": "a",
			"Ă": "A",
			"ș": "s",
			"Ș": "S",
			"ț": "t",
			"Ț": "T",
			"ţ": "t",
			"Ţ": "T",
			"а": "a",
			"б": "b",
			"в": "v",
			"г": "g",
			"д": "d",
			"е": "e",
			"ё": "yo",
			"ж": "zh",
			"з": "z",
			"и": "i",
			"й": "i",
			"к": "k",
			"л": "l",
			"м": "m",
			"н": "n",
			"о": "o",
			"п": "p",
			"р": "r",
			"с": "s",
			"т": "t",
			"у": "u",
			"ф": "f",
			"х": "kh",
			"ц": "c",
			"ч": "ch",
			"ш": "sh",
			"щ": "sh",
			"ъ": "",
			"ы": "y",
			"ь": "",
			"э": "e",
			"ю": "yu",
			"я": "ya",
			"А": "A",
			"Б": "B",
			"В": "V",
			"Г": "G",
			"Д": "D",
			"Е": "E",
			"Ё": "Yo",
			"Ж": "Zh",
			"З": "Z",
			"И": "I",
			"Й": "I",
			"К": "K",
			"Л": "L",
			"М": "M",
			"Н": "N",
			"О": "O",
			"П": "P",
			"Р": "R",
			"С": "S",
			"Т": "T",
			"У": "U",
			"Ф": "F",
			"Х": "Kh",
			"Ц": "C",
			"Ч": "Ch",
			"Ш": "Sh",
			"Щ": "Sh",
			"Ъ": "",
			"Ы": "Y",
			"Ь": "",
			"Э": "E",
			"Ю": "Yu",
			"Я": "Ya",
			"ђ": "dj",
			"ј": "j",
			"ћ": "c",
			"џ": "dz",
			"Ђ": "Dj",
			"Ј": "j",
			"Ћ": "C",
			"Џ": "Dz",
			"ľ": "l",
			"ĺ": "l",
			"ŕ": "r",
			"Ľ": "L",
			"Ĺ": "L",
			"Ŕ": "R",
			"ş": "s",
			"Ş": "S",
			"ı": "i",
			"İ": "I",
			"ğ": "g",
			"Ğ": "G",
			"ả": "a",
			"Ả": "A",
			"ẳ": "a",
			"Ẳ": "A",
			"ẩ": "a",
			"Ẩ": "A",
			"đ": "d",
			"Đ": "D",
			"ẹ": "e",
			"Ẹ": "E",
			"ẽ": "e",
			"Ẽ": "E",
			"ẻ": "e",
			"Ẻ": "E",
			"ế": "e",
			"Ế": "E",
			"ề": "e",
			"Ề": "E",
			"ệ": "e",
			"Ệ": "E",
			"ễ": "e",
			"Ễ": "E",
			"ể": "e",
			"Ể": "E",
			"ỏ": "o",
			"ọ": "o",
			"Ọ": "o",
			"ố": "o",
			"Ố": "O",
			"ồ": "o",
			"Ồ": "O",
			"ổ": "o",
			"Ổ": "O",
			"ộ": "o",
			"Ộ": "O",
			"ỗ": "o",
			"Ỗ": "O",
			"ơ": "o",
			"Ơ": "O",
			"ớ": "o",
			"Ớ": "O",
			"ờ": "o",
			"Ờ": "O",
			"ợ": "o",
			"Ợ": "O",
			"ỡ": "o",
			"Ỡ": "O",
			"Ở": "o",
			"ở": "o",
			"ị": "i",
			"Ị": "I",
			"ĩ": "i",
			"Ĩ": "I",
			"ỉ": "i",
			"Ỉ": "i",
			"ủ": "u",
			"Ủ": "U",
			"ụ": "u",
			"Ụ": "U",
			"ũ": "u",
			"Ũ": "U",
			"ư": "u",
			"Ư": "U",
			"ứ": "u",
			"Ứ": "U",
			"ừ": "u",
			"Ừ": "U",
			"ự": "u",
			"Ự": "U",
			"ữ": "u",
			"Ữ": "U",
			"ử": "u",
			"Ử": "ư",
			"ỷ": "y",
			"Ỷ": "y",
			"ỳ": "y",
			"Ỳ": "Y",
			"ỵ": "y",
			"Ỵ": "Y",
			"ỹ": "y",
			"Ỹ": "Y",
			"ạ": "a",
			"Ạ": "A",
			"ấ": "a",
			"Ấ": "A",
			"ầ": "a",
			"Ầ": "A",
			"ậ": "a",
			"Ậ": "A",
			"ẫ": "a",
			"Ẫ": "A",
			"ắ": "a",
			"Ắ": "A",
			"ằ": "a",
			"Ằ": "A",
			"ặ": "a",
			"Ặ": "A",
			"ẵ": "a",
			"Ẵ": "A",
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
			"ƒ": "f",
			"™": "(TM)",
			"©": "(C)",
			"œ": "oe",
			"Œ": "OE",
			"®": "(R)",
			"†": "+",
			"℠": "(SM)",
			"…": "...",
			"˚": "o",
			"º": "o",
			"ª": "a",
			"•": "*",
			"၊": ",",
			"။": ".",
			"$": "USD",
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
			"元": "CNY",
			"円": "YEN",
			"﷼": "IRR",
			"₠": "EWE",
			"฿": "THB",
			"₨": "INR",
			"₹": "INR",
			"₰": "PF",
			"₺": "TRY",
			"؋": "AFN",
			"₼": "AZN",
			"лв": "BGN",
			"៛": "KHR",
			"₡": "CRC",
			"₸": "KZT",
			"ден": "MKD",
			"zł": "PLN",
			"₽": "RUB",
			"₾": "GEL"
		};
		var lookAheadCharArray = ["်", "ް"];
		var diatricMap = {
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
			"က်": "et",
			"ိုက်": "aik",
			"ောက်": "auk",
			"င်": "in",
			"ိုင်": "aing",
			"ောင်": "aung",
			"စ်": "it",
			"ည်": "i",
			"တ်": "at",
			"ိတ်": "eik",
			"ုတ်": "ok",
			"ွတ်": "ut",
			"ေတ်": "it",
			"ဒ်": "d",
			"ိုဒ်": "ok",
			"ုဒ်": "ait",
			"န်": "an",
			"ာန်": "an",
			"ိန်": "ein",
			"ုန်": "on",
			"ွန်": "un",
			"ပ်": "at",
			"ိပ်": "eik",
			"ုပ်": "ok",
			"ွပ်": "ut",
			"န်ုပ်": "nub",
			"မ်": "an",
			"ိမ်": "ein",
			"ုမ်": "on",
			"ွမ်": "un",
			"ယ်": "e",
			"ိုလ်": "ol",
			"ဉ်": "in",
			"ံ": "an",
			"ိံ": "ein",
			"ုံ": "on",
			"ައް": "ah",
			"ަށް": "ah"
		};
		var langCharMap = {
			"en": {},
			"az": {
				"ç": "c",
				"ə": "e",
				"ğ": "g",
				"ı": "i",
				"ö": "o",
				"ş": "s",
				"ü": "u",
				"Ç": "C",
				"Ə": "E",
				"Ğ": "G",
				"İ": "I",
				"Ö": "O",
				"Ş": "S",
				"Ü": "U"
			},
			"cs": {
				"č": "c",
				"ď": "d",
				"ě": "e",
				"ň": "n",
				"ř": "r",
				"š": "s",
				"ť": "t",
				"ů": "u",
				"ž": "z",
				"Č": "C",
				"Ď": "D",
				"Ě": "E",
				"Ň": "N",
				"Ř": "R",
				"Š": "S",
				"Ť": "T",
				"Ů": "U",
				"Ž": "Z"
			},
			"fi": {
				"ä": "a",
				"Ä": "A",
				"ö": "o",
				"Ö": "O"
			},
			"hu": {
				"ä": "a",
				"Ä": "A",
				"ö": "o",
				"Ö": "O",
				"ü": "u",
				"Ü": "U",
				"ű": "u",
				"Ű": "U"
			},
			"lt": {
				"ą": "a",
				"č": "c",
				"ę": "e",
				"ė": "e",
				"į": "i",
				"š": "s",
				"ų": "u",
				"ū": "u",
				"ž": "z",
				"Ą": "A",
				"Č": "C",
				"Ę": "E",
				"Ė": "E",
				"Į": "I",
				"Š": "S",
				"Ų": "U",
				"Ū": "U"
			},
			"lv": {
				"ā": "a",
				"č": "c",
				"ē": "e",
				"ģ": "g",
				"ī": "i",
				"ķ": "k",
				"ļ": "l",
				"ņ": "n",
				"š": "s",
				"ū": "u",
				"ž": "z",
				"Ā": "A",
				"Č": "C",
				"Ē": "E",
				"Ģ": "G",
				"Ī": "i",
				"Ķ": "k",
				"Ļ": "L",
				"Ņ": "N",
				"Š": "S",
				"Ū": "u",
				"Ž": "Z"
			},
			"pl": {
				"ą": "a",
				"ć": "c",
				"ę": "e",
				"ł": "l",
				"ń": "n",
				"ó": "o",
				"ś": "s",
				"ź": "z",
				"ż": "z",
				"Ą": "A",
				"Ć": "C",
				"Ę": "e",
				"Ł": "L",
				"Ń": "N",
				"Ó": "O",
				"Ś": "S",
				"Ź": "Z",
				"Ż": "Z"
			},
			"sv": {
				"ä": "a",
				"Ä": "A",
				"ö": "o",
				"Ö": "O"
			},
			"sk": {
				"ä": "a",
				"Ä": "A"
			},
			"sr": {
				"љ": "lj",
				"њ": "nj",
				"Љ": "Lj",
				"Њ": "Nj",
				"đ": "dj",
				"Đ": "Dj"
			},
			"tr": {
				"Ü": "U",
				"Ö": "O",
				"ü": "u",
				"ö": "o"
			}
		};
		var symbolMap = {
			"ar": {
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
			"az": {},
			"ca": {
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
			"cs": {
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
			"de": {
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
			"dv": {
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
			"en": {
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
			"es": {
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
			"fa": {
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
			"fi": {
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
			"fr": {
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
			"ge": {
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
			"gr": {},
			"hu": {
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
			"it": {
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
			"lt": {
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
			"lv": {
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
			"my": {
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
			"mk": {},
			"nl": {
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
			"pl": {
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
			"pt": {
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
			"ro": {
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
			"ru": {
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
			"sk": {
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
			"sr": {},
			"tr": {
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
			"uk": {
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
			"vn": {
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
		};
		var uricChars = [
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
		].join("");
		var uricNoSlashChars = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			","
		].join("");
		var markChars = [
			".",
			"!",
			"~",
			"*",
			"'",
			"(",
			")"
		].join("");
		var getSlug = function getSlug(input, opts) {
			var separator = "-";
			var result = "";
			var diatricString = "";
			var convertSymbols = true;
			var customReplacements = {};
			var maintainCase;
			var titleCase;
			var truncate;
			var uricFlag;
			var uricNoSlashFlag;
			var markFlag;
			var symbol;
			var langChar;
			var lucky;
			var i;
			var ch;
			var l;
			var lastCharWasSymbol;
			var lastCharWasDiatric;
			var allowedChars = "";
			if (typeof input !== "string") return "";
			if (typeof opts === "string") separator = opts;
			symbol = symbolMap.en;
			langChar = langCharMap.en;
			if (typeof opts === "object") {
				maintainCase = opts.maintainCase || false;
				customReplacements = opts.custom && typeof opts.custom === "object" ? opts.custom : customReplacements;
				truncate = +opts.truncate > 1 && opts.truncate || false;
				uricFlag = opts.uric || false;
				uricNoSlashFlag = opts.uricNoSlash || false;
				markFlag = opts.mark || false;
				convertSymbols = opts.symbols === false || opts.lang === false ? false : true;
				separator = opts.separator || separator;
				if (uricFlag) allowedChars += uricChars;
				if (uricNoSlashFlag) allowedChars += uricNoSlashChars;
				if (markFlag) allowedChars += markChars;
				symbol = opts.lang && symbolMap[opts.lang] && convertSymbols ? symbolMap[opts.lang] : convertSymbols ? symbolMap.en : {};
				langChar = opts.lang && langCharMap[opts.lang] ? langCharMap[opts.lang] : opts.lang === false || opts.lang === true ? {} : langCharMap.en;
				if (opts.titleCase && typeof opts.titleCase.length === "number" && Array.prototype.toString.call(opts.titleCase)) {
					opts.titleCase.forEach(function(v) {
						customReplacements[v + ""] = v + "";
					});
					titleCase = true;
				} else titleCase = !!opts.titleCase;
				if (opts.custom && typeof opts.custom.length === "number" && Array.prototype.toString.call(opts.custom)) opts.custom.forEach(function(v) {
					customReplacements[v + ""] = v + "";
				});
				Object.keys(customReplacements).forEach(function(v) {
					var r;
					if (v.length > 1) r = new RegExp("\\b" + escapeChars(v) + "\\b", "gi");
					else r = new RegExp(escapeChars(v), "gi");
					input = input.replace(r, customReplacements[v]);
				});
				for (ch in customReplacements) allowedChars += ch;
			}
			allowedChars += separator;
			allowedChars = escapeChars(allowedChars);
			input = input.replace(/(^\s+|\s+$)/g, "");
			lastCharWasSymbol = false;
			lastCharWasDiatric = false;
			for (i = 0, l = input.length; i < l; i++) {
				ch = input[i];
				if (isReplacedCustomChar(ch, customReplacements)) lastCharWasSymbol = false;
				else if (langChar[ch]) {
					ch = lastCharWasSymbol && langChar[ch].match(/[A-Za-z0-9]/) ? " " + langChar[ch] : langChar[ch];
					lastCharWasSymbol = false;
				} else if (ch in charMap) {
					if (i + 1 < l && lookAheadCharArray.indexOf(input[i + 1]) >= 0) {
						diatricString += ch;
						ch = "";
					} else if (lastCharWasDiatric === true) {
						ch = diatricMap[diatricString] + charMap[ch];
						diatricString = "";
					} else ch = lastCharWasSymbol && charMap[ch].match(/[A-Za-z0-9]/) ? " " + charMap[ch] : charMap[ch];
					lastCharWasSymbol = false;
					lastCharWasDiatric = false;
				} else if (ch in diatricMap) {
					diatricString += ch;
					ch = "";
					if (i === l - 1) ch = diatricMap[diatricString];
					lastCharWasDiatric = true;
				} else if (symbol[ch] && !(uricFlag && uricChars.indexOf(ch) !== -1) && !(uricNoSlashFlag && uricNoSlashChars.indexOf(ch) !== -1)) {
					ch = lastCharWasSymbol || result.substr(-1).match(/[A-Za-z0-9]/) ? separator + symbol[ch] : symbol[ch];
					ch += input[i + 1] !== void 0 && input[i + 1].match(/[A-Za-z0-9]/) ? separator : "";
					lastCharWasSymbol = true;
				} else {
					if (lastCharWasDiatric === true) {
						ch = diatricMap[diatricString] + ch;
						diatricString = "";
						lastCharWasDiatric = false;
					} else if (lastCharWasSymbol && (/[A-Za-z0-9]/.test(ch) || result.substr(-1).match(/A-Za-z0-9]/))) ch = " " + ch;
					lastCharWasSymbol = false;
				}
				result += ch.replace(new RegExp("[^\\w\\s" + allowedChars + "_-]", "g"), separator);
			}
			if (titleCase) result = result.replace(/(\w)(\S*)/g, function(_, i, r) {
				var j = i.toUpperCase() + (r !== null ? r : "");
				return Object.keys(customReplacements).indexOf(j.toLowerCase()) < 0 ? j : j.toLowerCase();
			});
			result = result.replace(/\s+/g, separator).replace(new RegExp("\\" + separator + "+", "g"), separator).replace(new RegExp("(^\\" + separator + "+|\\" + separator + "+$)", "g"), "");
			if (truncate && result.length > truncate) {
				lucky = result.charAt(truncate) === separator;
				result = result.slice(0, truncate);
				if (!lucky) result = result.slice(0, result.lastIndexOf(separator));
			}
			if (!maintainCase && !titleCase) result = result.toLowerCase();
			return result;
		};
		var createSlug = function createSlug(opts) {
			return function getSlugWithConfig(input) {
				return getSlug(input, opts);
			};
		};
		var escapeChars = function escapeChars(input) {
			return input.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
		};
		var isReplacedCustomChar = function(ch, customReplacements) {
			for (var c in customReplacements) if (customReplacements[c] === ch) return true;
		};
		if (typeof module !== "undefined" && module.exports) {
			module.exports = getSlug;
			module.exports.createSlug = createSlug;
		} else if (typeof define !== "undefined" && define.amd) define([], function() {
			return getSlug;
		});
		else try {
			if (root.getSlug || root.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
			else {
				root.getSlug = getSlug;
				root.createSlug = createSlug;
			}
		} catch (e) {}
	})(exports);
}));
__toESM(__commonJSMin(((exports, module) => {
	module.exports = require_speakingurl$1();
}))(), 1);
target.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
};
function toggleHighPerfMode(state) {
	devtoolsState.highPerfModeEnabled = state ?? !devtoolsState.highPerfModeEnabled;
	if (!state && activeAppRecord.value) registerDevToolsPlugin(activeAppRecord.value.app);
}
function updateDevToolsClientDetected(params) {
	devtoolsState.devtoolsClientDetected = {
		...devtoolsState.devtoolsClientDetected,
		...params
	};
	toggleHighPerfMode(!Object.values(devtoolsState.devtoolsClientDetected).some(Boolean));
}
target.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= updateDevToolsClientDetected;
var DoubleIndexedKV = class {
	constructor() {
		this.keyToValue = /* @__PURE__ */ new Map();
		this.valueToKey = /* @__PURE__ */ new Map();
	}
	set(key, value) {
		this.keyToValue.set(key, value);
		this.valueToKey.set(value, key);
	}
	getByKey(key) {
		return this.keyToValue.get(key);
	}
	getByValue(value) {
		return this.valueToKey.get(value);
	}
	clear() {
		this.keyToValue.clear();
		this.valueToKey.clear();
	}
};
var Registry = class {
	constructor(generateIdentifier) {
		this.generateIdentifier = generateIdentifier;
		this.kv = new DoubleIndexedKV();
	}
	register(value, identifier) {
		if (this.kv.getByValue(value)) return;
		if (!identifier) identifier = this.generateIdentifier(value);
		this.kv.set(identifier, value);
	}
	clear() {
		this.kv.clear();
	}
	getIdentifier(value) {
		return this.kv.getByValue(value);
	}
	getValue(identifier) {
		return this.kv.getByKey(identifier);
	}
};
var ClassRegistry = class extends Registry {
	constructor() {
		super((c) => c.name);
		this.classToAllowedProps = /* @__PURE__ */ new Map();
	}
	register(value, options) {
		if (typeof options === "object") {
			if (options.allowProps) this.classToAllowedProps.set(value, options.allowProps);
			super.register(value, options.identifier);
		} else super.register(value, options);
	}
	getAllowedProps(value) {
		return this.classToAllowedProps.get(value);
	}
};
function valuesOfObj(record) {
	if ("values" in Object) return Object.values(record);
	const values = [];
	for (const key in record) if (record.hasOwnProperty(key)) values.push(record[key]);
	return values;
}
function find(record, predicate) {
	const values = valuesOfObj(record);
	if ("find" in values) return values.find(predicate);
	const valuesNotNever = values;
	for (let i = 0; i < valuesNotNever.length; i++) {
		const value = valuesNotNever[i];
		if (predicate(value)) return value;
	}
}
function forEach(record, run) {
	Object.entries(record).forEach(([key, value]) => run(value, key));
}
function includes(arr, value) {
	return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
	for (let i = 0; i < record.length; i++) {
		const value = record[i];
		if (predicate(value)) return value;
	}
}
var CustomTransformerRegistry = class {
	constructor() {
		this.transfomers = {};
	}
	register(transformer) {
		this.transfomers[transformer.name] = transformer;
	}
	findApplicable(v) {
		return find(this.transfomers, (transformer) => transformer.isApplicable(v));
	}
	findByName(name) {
		return this.transfomers[name];
	}
};
var getType$1 = (payload) => Object.prototype.toString.call(payload).slice(8, -1);
var isUndefined$1 = (payload) => typeof payload === "undefined";
var isNull$1 = (payload) => payload === null;
var isPlainObject$2 = (payload) => {
	if (typeof payload !== "object" || payload === null) return false;
	if (payload === Object.prototype) return false;
	if (Object.getPrototypeOf(payload) === null) return true;
	return Object.getPrototypeOf(payload) === Object.prototype;
};
var isEmptyObject = (payload) => isPlainObject$2(payload) && Object.keys(payload).length === 0;
var isArray$2 = (payload) => Array.isArray(payload);
var isString = (payload) => typeof payload === "string";
var isNumber = (payload) => typeof payload === "number" && !isNaN(payload);
var isBoolean = (payload) => typeof payload === "boolean";
var isRegExp = (payload) => payload instanceof RegExp;
var isMap = (payload) => payload instanceof Map;
var isSet = (payload) => payload instanceof Set;
var isSymbol = (payload) => getType$1(payload) === "Symbol";
var isDate = (payload) => payload instanceof Date && !isNaN(payload.valueOf());
var isError = (payload) => payload instanceof Error;
var isNaNValue = (payload) => typeof payload === "number" && isNaN(payload);
var isPrimitive = (payload) => isBoolean(payload) || isNull$1(payload) || isUndefined$1(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
var isBigint = (payload) => typeof payload === "bigint";
var isInfinite = (payload) => payload === Infinity || payload === -Infinity;
var isTypedArray = (payload) => ArrayBuffer.isView(payload) && !(payload instanceof DataView);
var isURL = (payload) => payload instanceof URL;
var escapeKey = (key) => key.replace(/\./g, "\\.");
var stringifyPath = (path) => path.map(String).map(escapeKey).join(".");
var parsePath = (string) => {
	const result = [];
	let segment = "";
	for (let i = 0; i < string.length; i++) {
		let char = string.charAt(i);
		if (char === "\\" && string.charAt(i + 1) === ".") {
			segment += ".";
			i++;
			continue;
		}
		if (char === ".") {
			result.push(segment);
			segment = "";
			continue;
		}
		segment += char;
	}
	const lastSegment = segment;
	result.push(lastSegment);
	return result;
};
function simpleTransformation(isApplicable, annotation, transform, untransform) {
	return {
		isApplicable,
		annotation,
		transform,
		untransform
	};
}
var simpleRules = [
	simpleTransformation(isUndefined$1, "undefined", () => null, () => void 0),
	simpleTransformation(isBigint, "bigint", (v) => v.toString(), (v) => {
		if (typeof BigInt !== "undefined") return BigInt(v);
		console.error("Please add a BigInt polyfill.");
		return v;
	}),
	simpleTransformation(isDate, "Date", (v) => v.toISOString(), (v) => new Date(v)),
	simpleTransformation(isError, "Error", (v, superJson) => {
		const baseError = {
			name: v.name,
			message: v.message
		};
		superJson.allowedErrorProps.forEach((prop) => {
			baseError[prop] = v[prop];
		});
		return baseError;
	}, (v, superJson) => {
		const e = new Error(v.message);
		e.name = v.name;
		e.stack = v.stack;
		superJson.allowedErrorProps.forEach((prop) => {
			e[prop] = v[prop];
		});
		return e;
	}),
	simpleTransformation(isRegExp, "regexp", (v) => "" + v, (regex) => {
		const body = regex.slice(1, regex.lastIndexOf("/"));
		const flags = regex.slice(regex.lastIndexOf("/") + 1);
		return new RegExp(body, flags);
	}),
	simpleTransformation(isSet, "set", (v) => [...v.values()], (v) => new Set(v)),
	simpleTransformation(isMap, "map", (v) => [...v.entries()], (v) => new Map(v)),
	simpleTransformation((v) => isNaNValue(v) || isInfinite(v), "number", (v) => {
		if (isNaNValue(v)) return "NaN";
		if (v > 0) return "Infinity";
		else return "-Infinity";
	}, Number),
	simpleTransformation((v) => v === 0 && 1 / v === -Infinity, "number", () => {
		return "-0";
	}, Number),
	simpleTransformation(isURL, "URL", (v) => v.toString(), (v) => new URL(v))
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
	return {
		isApplicable,
		annotation,
		transform,
		untransform
	};
}
var symbolRule = compositeTransformation((s, superJson) => {
	if (isSymbol(s)) return !!superJson.symbolRegistry.getIdentifier(s);
	return false;
}, (s, superJson) => {
	return ["symbol", superJson.symbolRegistry.getIdentifier(s)];
}, (v) => v.description, (_, a, superJson) => {
	const value = superJson.symbolRegistry.getValue(a[1]);
	if (!value) throw new Error("Trying to deserialize unknown symbol");
	return value;
});
var constructorToName = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((obj, ctor) => {
	obj[ctor.name] = ctor;
	return obj;
}, {});
var typedArrayRule = compositeTransformation(isTypedArray, (v) => ["typed-array", v.constructor.name], (v) => [...v], (v, a) => {
	const ctor = constructorToName[a[1]];
	if (!ctor) throw new Error("Trying to deserialize unknown typed array");
	return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
	if (potentialClass?.constructor) return !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
	return false;
}
var classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson) => {
	return ["class", superJson.classRegistry.getIdentifier(clazz.constructor)];
}, (clazz, superJson) => {
	const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
	if (!allowedProps) return { ...clazz };
	const result = {};
	allowedProps.forEach((prop) => {
		result[prop] = clazz[prop];
	});
	return result;
}, (v, a, superJson) => {
	const clazz = superJson.classRegistry.getValue(a[1]);
	if (!clazz) throw new Error(`Trying to deserialize unknown class '${a[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
	return Object.assign(Object.create(clazz.prototype), v);
});
var customRule = compositeTransformation((value, superJson) => {
	return !!superJson.customTransformerRegistry.findApplicable(value);
}, (value, superJson) => {
	return ["custom", superJson.customTransformerRegistry.findApplicable(value).name];
}, (value, superJson) => {
	return superJson.customTransformerRegistry.findApplicable(value).serialize(value);
}, (v, a, superJson) => {
	const transformer = superJson.customTransformerRegistry.findByName(a[1]);
	if (!transformer) throw new Error("Trying to deserialize unknown custom value");
	return transformer.deserialize(v);
});
var compositeRules = [
	classRule,
	symbolRule,
	customRule,
	typedArrayRule
];
var transformValue = (value, superJson) => {
	const applicableCompositeRule = findArr(compositeRules, (rule) => rule.isApplicable(value, superJson));
	if (applicableCompositeRule) return {
		value: applicableCompositeRule.transform(value, superJson),
		type: applicableCompositeRule.annotation(value, superJson)
	};
	const applicableSimpleRule = findArr(simpleRules, (rule) => rule.isApplicable(value, superJson));
	if (applicableSimpleRule) return {
		value: applicableSimpleRule.transform(value, superJson),
		type: applicableSimpleRule.annotation
	};
};
var simpleRulesByAnnotation = {};
simpleRules.forEach((rule) => {
	simpleRulesByAnnotation[rule.annotation] = rule;
});
var untransformValue = (json, type, superJson) => {
	if (isArray$2(type)) switch (type[0]) {
		case "symbol": return symbolRule.untransform(json, type, superJson);
		case "class": return classRule.untransform(json, type, superJson);
		case "custom": return customRule.untransform(json, type, superJson);
		case "typed-array": return typedArrayRule.untransform(json, type, superJson);
		default: throw new Error("Unknown transformation: " + type);
	}
	else {
		const transformation = simpleRulesByAnnotation[type];
		if (!transformation) throw new Error("Unknown transformation: " + type);
		return transformation.untransform(json, superJson);
	}
};
var getNthKey = (value, n) => {
	if (n > value.size) throw new Error("index out of bounds");
	const keys = value.keys();
	while (n > 0) {
		keys.next();
		n--;
	}
	return keys.next().value;
};
function validatePath(path) {
	if (includes(path, "__proto__")) throw new Error("__proto__ is not allowed as a property");
	if (includes(path, "prototype")) throw new Error("prototype is not allowed as a property");
	if (includes(path, "constructor")) throw new Error("constructor is not allowed as a property");
}
var getDeep = (object, path) => {
	validatePath(path);
	for (let i = 0; i < path.length; i++) {
		const key = path[i];
		if (isSet(object)) object = getNthKey(object, +key);
		else if (isMap(object)) {
			const row = +key;
			const type = +path[++i] === 0 ? "key" : "value";
			const keyOfRow = getNthKey(object, row);
			switch (type) {
				case "key":
					object = keyOfRow;
					break;
				case "value":
					object = object.get(keyOfRow);
					break;
			}
		} else object = object[key];
	}
	return object;
};
var setDeep = (object, path, mapper) => {
	validatePath(path);
	if (path.length === 0) return mapper(object);
	let parent = object;
	for (let i = 0; i < path.length - 1; i++) {
		const key = path[i];
		if (isArray$2(parent)) {
			const index = +key;
			parent = parent[index];
		} else if (isPlainObject$2(parent)) parent = parent[key];
		else if (isSet(parent)) {
			const row = +key;
			parent = getNthKey(parent, row);
		} else if (isMap(parent)) {
			if (i === path.length - 2) break;
			const row = +key;
			const type = +path[++i] === 0 ? "key" : "value";
			const keyOfRow = getNthKey(parent, row);
			switch (type) {
				case "key":
					parent = keyOfRow;
					break;
				case "value":
					parent = parent.get(keyOfRow);
					break;
			}
		}
	}
	const lastKey = path[path.length - 1];
	if (isArray$2(parent)) parent[+lastKey] = mapper(parent[+lastKey]);
	else if (isPlainObject$2(parent)) parent[lastKey] = mapper(parent[lastKey]);
	if (isSet(parent)) {
		const oldValue = getNthKey(parent, +lastKey);
		const newValue = mapper(oldValue);
		if (oldValue !== newValue) {
			parent.delete(oldValue);
			parent.add(newValue);
		}
	}
	if (isMap(parent)) {
		const row = +path[path.length - 2];
		const keyToRow = getNthKey(parent, row);
		switch (+lastKey === 0 ? "key" : "value") {
			case "key": {
				const newKey = mapper(keyToRow);
				parent.set(newKey, parent.get(keyToRow));
				if (newKey !== keyToRow) parent.delete(keyToRow);
				break;
			}
			case "value":
				parent.set(keyToRow, mapper(parent.get(keyToRow)));
				break;
		}
	}
	return object;
};
function traverse(tree, walker, origin = []) {
	if (!tree) return;
	if (!isArray$2(tree)) {
		forEach(tree, (subtree, key) => traverse(subtree, walker, [...origin, ...parsePath(key)]));
		return;
	}
	const [nodeValue, children] = tree;
	if (children) forEach(children, (child, key) => {
		traverse(child, walker, [...origin, ...parsePath(key)]);
	});
	walker(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, superJson) {
	traverse(annotations, (type, path) => {
		plain = setDeep(plain, path, (v) => untransformValue(v, type, superJson));
	});
	return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
	function apply(identicalPaths, path) {
		const object = getDeep(plain, parsePath(path));
		identicalPaths.map(parsePath).forEach((identicalObjectPath) => {
			plain = setDeep(plain, identicalObjectPath, () => object);
		});
	}
	if (isArray$2(annotations)) {
		const [root, other] = annotations;
		root.forEach((identicalPath) => {
			plain = setDeep(plain, parsePath(identicalPath), () => plain);
		});
		if (other) forEach(other, apply);
	} else forEach(annotations, apply);
	return plain;
}
var isDeep = (object, superJson) => isPlainObject$2(object) || isArray$2(object) || isMap(object) || isSet(object) || isInstanceOfRegisteredClass(object, superJson);
function addIdentity(object, path, identities) {
	const existingSet = identities.get(object);
	if (existingSet) existingSet.push(path);
	else identities.set(object, [path]);
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
	const result = {};
	let rootEqualityPaths = void 0;
	identitites.forEach((paths) => {
		if (paths.length <= 1) return;
		if (!dedupe) paths = paths.map((path) => path.map(String)).sort((a, b) => a.length - b.length);
		const [representativePath, ...identicalPaths] = paths;
		if (representativePath.length === 0) rootEqualityPaths = identicalPaths.map(stringifyPath);
		else result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
	});
	if (rootEqualityPaths) if (isEmptyObject(result)) return [rootEqualityPaths];
	else return [rootEqualityPaths, result];
	else return isEmptyObject(result) ? void 0 : result;
}
var walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = /* @__PURE__ */ new Map()) => {
	const primitive = isPrimitive(object);
	if (!primitive) {
		addIdentity(object, path, identities);
		const seen = seenObjects.get(object);
		if (seen) return dedupe ? { transformedValue: null } : seen;
	}
	if (!isDeep(object, superJson)) {
		const transformed = transformValue(object, superJson);
		const result = transformed ? {
			transformedValue: transformed.value,
			annotations: [transformed.type]
		} : { transformedValue: object };
		if (!primitive) seenObjects.set(object, result);
		return result;
	}
	if (includes(objectsInThisPath, object)) return { transformedValue: null };
	const transformationResult = transformValue(object, superJson);
	const transformed = transformationResult?.value ?? object;
	const transformedValue = isArray$2(transformed) ? [] : {};
	const innerAnnotations = {};
	forEach(transformed, (value, index) => {
		if (index === "__proto__" || index === "constructor" || index === "prototype") throw new Error(`Detected property ${index}. This is a prototype pollution risk, please remove it from your object.`);
		const recursiveResult = walker(value, identities, superJson, dedupe, [...path, index], [...objectsInThisPath, object], seenObjects);
		transformedValue[index] = recursiveResult.transformedValue;
		if (isArray$2(recursiveResult.annotations)) innerAnnotations[index] = recursiveResult.annotations;
		else if (isPlainObject$2(recursiveResult.annotations)) forEach(recursiveResult.annotations, (tree, key) => {
			innerAnnotations[escapeKey(index) + "." + key] = tree;
		});
	});
	const result = isEmptyObject(innerAnnotations) ? {
		transformedValue,
		annotations: !!transformationResult ? [transformationResult.type] : void 0
	} : {
		transformedValue,
		annotations: !!transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations
	};
	if (!primitive) seenObjects.set(object, result);
	return result;
};
function getType(payload) {
	return Object.prototype.toString.call(payload).slice(8, -1);
}
function isArray$1(payload) {
	return getType(payload) === "Array";
}
function isPlainObject$1(payload) {
	if (getType(payload) !== "Object") return false;
	const prototype = Object.getPrototypeOf(payload);
	return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
function isNull(payload) {
	return getType(payload) === "Null";
}
function isOneOf(a, b, c, d, e) {
	return (value) => a(value) || b(value) || !!c && c(value) || !!d && d(value) || !!e && e(value);
}
function isUndefined(payload) {
	return getType(payload) === "Undefined";
}
isOneOf(isNull, isUndefined);
function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
	const propType = {}.propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
	if (propType === "enumerable") carry[key] = newVal;
	if (includeNonenumerable && propType === "nonenumerable") Object.defineProperty(carry, key, {
		value: newVal,
		enumerable: false,
		writable: true,
		configurable: true
	});
}
function copy(target, options = {}) {
	if (isArray$1(target)) return target.map((item) => copy(item, options));
	if (!isPlainObject$1(target)) return target;
	const props = Object.getOwnPropertyNames(target);
	const symbols = Object.getOwnPropertySymbols(target);
	return [...props, ...symbols].reduce((carry, key) => {
		if (isArray$1(options.props) && !options.props.includes(key)) return carry;
		const val = target[key];
		assignProp(carry, key, copy(val, options), target, options.nonenumerable);
		return carry;
	}, {});
}
var SuperJSON = class {
	constructor({ dedupe = false } = {}) {
		this.classRegistry = new ClassRegistry();
		this.symbolRegistry = new Registry((s) => s.description ?? "");
		this.customTransformerRegistry = new CustomTransformerRegistry();
		this.allowedErrorProps = [];
		this.dedupe = dedupe;
	}
	serialize(object) {
		const identities = /* @__PURE__ */ new Map();
		const output = walker(object, identities, this, this.dedupe);
		const res = { json: output.transformedValue };
		if (output.annotations) res.meta = {
			...res.meta,
			values: output.annotations
		};
		const equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
		if (equalityAnnotations) res.meta = {
			...res.meta,
			referentialEqualities: equalityAnnotations
		};
		return res;
	}
	deserialize(payload) {
		const { json, meta } = payload;
		let result = copy(json);
		if (meta?.values) result = applyValueAnnotations(result, meta.values, this);
		if (meta?.referentialEqualities) result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
		return result;
	}
	stringify(object) {
		return JSON.stringify(this.serialize(object));
	}
	parse(string) {
		return this.deserialize(JSON.parse(string));
	}
	registerClass(v, options) {
		this.classRegistry.register(v, options);
	}
	registerSymbol(v, identifier) {
		this.symbolRegistry.register(v, identifier);
	}
	registerCustom(transformer, name) {
		this.customTransformerRegistry.register({
			name,
			...transformer
		});
	}
	allowErrorProps(...props) {
		this.allowedErrorProps.push(...props);
	}
};
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
SuperJSON.serialize;
SuperJSON.deserialize;
SuperJSON.stringify;
SuperJSON.parse;
SuperJSON.registerClass;
SuperJSON.registerCustom;
SuperJSON.registerSymbol;
SuperJSON.allowErrorProps;
target.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ??= [];
target.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ??= null;
target.__VUE_DEVTOOLS_KIT_RPC_SERVER__ ??= null;
target.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ??= null;
target.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ??= null;
target.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ??= null;
var ASCII = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ACCENTED_ASCII = "âḃćḋèḟĝḫíĵǩĺṁńŏṗɋŕśṭůṿẘẋẏẓḀḂḈḊḔḞḠḢḬĴḴĻḾŊÕṔɊŔṠṮŨṼẄẌŸƵ";
function pseudoLocalize(str, options) {
	let pseudoString = "";
	for (let i = 0; i < str.length * options.expand; i++) {
		const character = str[Math.floor(i / options.expand)];
		const convertedCharacter = options.accents ? ACCENTED_ASCII[ASCII.indexOf(character)] ?? character : character;
		pseudoString += convertedCharacter;
	}
	return options.prefix + pseudoString + options.suffix;
}
function registerFluentVueDevtools(app, options, fluent) {
	let currentPseudoLocalize;
	const missingTranslations = /* @__PURE__ */ new Map();
	const oldWarnMissing = options.warnMissing;
	options.warnMissing = (key) => {
		const instance = (0, lib_exports.getCurrentInstance)();
		oldWarnMissing(key);
		if (!instance) return;
		missingTranslations.set(instance, missingTranslations.get(instance) ?? /* @__PURE__ */ new Set());
		missingTranslations.get(instance).add(key);
	};
	const hookedBundles = /* @__PURE__ */ new WeakSet();
	(0, lib_exports.watchEffect)(() => {
		const bundles = fluent.bundles;
		for (const bundle of bundles) {
			if (hookedBundles.has(bundle)) continue;
			const userTransform = bundle._transform;
			bundle._transform = (str) => {
				if (userTransform != null) str = userTransform(str);
				if (currentPseudoLocalize != null) str = currentPseudoLocalize(str);
				return str;
			};
			hookedBundles.add(bundle);
		}
	}, { flush: "sync" });
	const cleanBundles = (0, lib_exports.computed)(() => {
		return [...fluent.bundles].map((bundle) => {
			const newBundle = new FluentBundle(bundle.locales, {
				functions: bundle._functions,
				useIsolating: bundle._useIsolating
			});
			newBundle._terms = bundle._terms;
			newBundle._messages = bundle._messages;
			return newBundle;
		});
	});
	setupDevToolsPlugin({
		id: "fluent-vue",
		label: "fluent-vue",
		packageName: "fluent-vue",
		homepage: "https://fluent-vue.demivan.me",
		logo: "https://fluent-vue.demivan.me/assets/logo.svg",
		componentStateTypes: ["fluent-vue"],
		app,
		settings: {
			components: { label: "Components" },
			showLocalized: {
				defaultValue: true,
				label: "Mark localized",
				description: "Mark localized components in component tree",
				type: "boolean"
			},
			markMissing: {
				defaultValue: true,
				label: "Mark missing",
				description: "Mark missing translations in component tree",
				type: "boolean"
			},
			showI18n: {
				defaultValue: true,
				label: "Mark i18n",
				description: "Mark i18n components in component tree",
				type: "boolean"
			},
			pseudo: { label: "Pseudolocalization" },
			pseudoEnable: {
				defaultValue: false,
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
				defaultValue: true,
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
	}, (api) => {
		api.on.visitComponentTree(({ treeNode, componentInstance }) => {
			const settings = api.getSettings();
			if (settings.showI18n && treeNode.name === options.componentName) treeNode.tags.push({
				label: "fluent-vue",
				textColor: 0,
				backgroundColor: 4307075
			});
			if (settings.showLocalized && componentInstance?.proxy?.$options.fluent != null) treeNode.tags.push({
				label: "localized",
				textColor: 0,
				backgroundColor: 4307075
			});
			const missing = missingTranslations.get(componentInstance);
			if (settings.markMissing && missing != null && missing.size > 0) treeNode.tags.push({
				label: "missing translations",
				textColor: 16777215,
				backgroundColor: 11534368
			});
		});
		api.on.inspectComponent(({ componentInstance, instanceData }) => {
			const missing = missingTranslations.get(componentInstance);
			if (missing) for (const key of missing.values()) instanceData.state.push({
				type: "Missing translations",
				key,
				editable: false,
				value: { _custom: {
					type: "custom",
					display: "<span style=\"color:#B00020\">Missing</span>"
				} }
			});
			const componentFluent = componentInstance?.proxy?.$options.fluent;
			if (!componentFluent) return;
			const bundles = cleanBundles.value;
			for (const [locale, messages] of Object.entries(componentFluent)) {
				const bundle = bundles.find((bundle) => bundle.locales.includes(locale));
				if (bundle == null) continue;
				for (const message of messages.body) {
					const overridesGlobal = bundle.hasMessage(message.id);
					instanceData.state.push({
						type: `Component translations (${locale})`,
						key: message.id,
						editable: false,
						value: { _custom: {
							type: "custom",
							display: (message.value ? bundle.formatPattern(message.value, {}, []) : "") + (overridesGlobal ? "&nbsp;<span style=\"color:#ffa726\">Global</span>" : "")
						} }
					});
				}
			}
		});
		api.on.getInspectorTree((payload) => {
			if (payload.inspectorId === "fluent-vue-inspector") payload.rootNodes = [{
				id: "global",
				label: "Global translations"
			}, {
				id: "missing",
				label: "Missing translations"
			}];
		});
		const highlightedComponents = /* @__PURE__ */ new Set();
		api.on.getInspectorState(async (payload) => {
			if (payload.inspectorId === "fluent-vue-inspector") {
				if (payload.nodeId === "global") {
					payload.state = {};
					for (const bundle of cleanBundles.value) payload.state[bundle.locales.join(",")] = [...bundle._messages.entries()].map(([_, message]) => ({
						key: message.id,
						value: message.value ? bundle.formatPattern(message.value, {}, []) : ""
					}));
				}
				if (payload.nodeId === "missing") {
					payload.state = {};
					for (const bundle of cleanBundles.value) {
						const locale = bundle.locales.join(",");
						for (const [component, translations] of missingTranslations.entries()) for (const key of translations) {
							payload.state[locale] = payload.state[locale] ?? [];
							payload.state[locale].push({
								key,
								editable: true,
								value: { _custom: {
									type: "component",
									value: highlightedComponents.has(component),
									display: await api.getComponentName(component)
								} }
							});
						}
					}
				}
			}
		});
		api.on.editInspectorState((payload) => {
			if (payload.inspectorId === "fluent-vue-inspector") {
				if (payload.nodeId === "missing") {
					const key = payload.path[0];
					const [component] = missingTranslations.entries().find(([_, translations]) => translations.has(key)) ?? [];
					if (component != null) if (payload.state.value) {
						highlightedComponents.add(component);
						api.highlightElement(component);
					} else {
						highlightedComponents.delete(component);
						api.unhighlightElement();
					}
				}
			}
		});
		function handleSettingsChange(settings) {
			if (settings.pseudoEnable) currentPseudoLocalize = (str) => pseudoLocalize(str, {
				prefix: settings.pseudoPrefix ?? "",
				suffix: settings.pseudoSuffix ?? "",
				accents: settings.pseudoAccents ?? false,
				expand: settings.pseudoLength ?? 1
			});
			else currentPseudoLocalize = void 0;
			fluent.bundles = [...fluent.bundles];
		}
		api.on.setPluginSettings((payload) => {
			handleSettingsChange(payload.settings);
		});
		handleSettingsChange(api.getSettings());
		api.addInspector({
			id: "fluent-vue-inspector",
			label: "fluent-vue"
		});
	});
}
function defaultMarkupParser(value) {
	assert(typeof DOMParser !== "undefined", "DOMParser is not available. Please provide a custom parseMarkup function.");
	const doc = new DOMParser().parseFromString(value, "text/html");
	return Array.from(doc.body.childNodes);
}
function defaultWarnMissing(key) {
	warn(`Could not find translation for key [${key}]`);
}
function getWarnMissing(options) {
	if (options.warnMissing === true || options.warnMissing == null) return defaultWarnMissing;
	else if (options.warnMissing === false) return () => {};
	else return options.warnMissing;
}
function resolveOptions(options) {
	return {
		warnMissing: getWarnMissing(options),
		parseMarkup: options.parseMarkup ?? defaultMarkupParser,
		mapVariable: options.mapVariable,
		globalFormatName: options.globals?.functions?.format ?? "$t",
		globalFormatAttrsName: options.globals?.functions?.formatAttrs ?? "$ta",
		directiveName: options.globals?.directive ?? "t",
		componentName: options.globals?.component ?? "i18n",
		componentTag: options.componentTag ?? "span"
	};
}
var camelizeRE = /-(\w)/g;
function camelize(str) {
	return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}
var reMarkup = /<|&#?\w+;/;
function createComponent(options, rootContext) {
	return (0, lib_exports.defineComponent)({
		name: options.componentName,
		props: {
			path: {
				type: String,
				required: true
			},
			tag: {
				type: [String, Boolean],
				default: options.componentTag
			},
			args: {
				type: Object,
				default: () => ({})
			},
			html: {
				type: Boolean,
				default: false
			},
			noTag: {
				type: Boolean,
				default: false
			}
		},
		setup(props, { slots, attrs }) {
			const instance = (0, lib_exports.getCurrentInstance)();
			const fluent = getContext(rootContext, instance?.vnode?.ctx ?? instance?.proxy?.$vnode?.context);
			const translation = (0, lib_exports.computed)(() => {
				const fluentParams = Object.assign({}, props.args, ...Object.keys(slots).map((key) => ({ [key]: `\uFFFF\uFFFE${key}\uFFFF` })));
				const result = fluent.formatWithAttrs(props.path, fluentParams);
				const camelizedAttrs = Object.fromEntries(Object.entries(result.attributes).map(([key, value]) => [camelize(key), value]));
				return {
					value: result.value,
					attributes: camelizedAttrs
				};
			});
			const insertSlots = (text) => {
				return text?.split("￿").map((text) => text.startsWith("￾") ? slots[text.replace("￾", "")](translation.value.attributes) : text);
			};
			const processNode = (node) => {
				if (node.nodeType === 3) return insertSlots(node.nodeValue);
				else if (node.nodeType === 1) {
					const el = node;
					return (0, lib_exports.h)(el.nodeName.toLowerCase(), { ...Object.fromEntries(Array.from(el.attributes).map((attr) => [attr.name, attr.value])) }, Array.from(el.childNodes).map((node) => processNode(node)));
				}
				warn(`Unsupported node type: ${node.nodeType}. If you need support for it, please, create an issue in fluent-vue repository.`);
				return [];
			};
			const children = (0, lib_exports.computed)(() => {
				if (!props.html || !reMarkup.test(translation.value.value)) return insertSlots(translation.value.value);
				return fluent.options.parseMarkup(translation.value.value).map(processNode);
			});
			return () => props.tag === false || props.noTag ? children.value : (0, lib_exports.h)(props.tag, { ...attrs }, children.value);
		}
	});
}
var LOCALIZABLE_ATTRIBUTES = {
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
function isAttrNameLocalizable(name, element, explicitlyAllowed = []) {
	if (explicitlyAllowed.includes(name)) return true;
	const attrName = name.toLowerCase();
	const elemName = element.localName;
	if (LOCALIZABLE_ATTRIBUTES.global.includes(attrName)) return true;
	if (LOCALIZABLE_ATTRIBUTES[elemName] == null) return false;
	if (LOCALIZABLE_ATTRIBUTES[elemName].includes(attrName)) return true;
	if (element.namespaceURI === "http://www.w3.org/1999/xhtml" && elemName === "input" && attrName === "value") {
		const type = element.type.toLowerCase();
		if (type === "submit" || type === "button" || type === "reset") return true;
	}
	return false;
}
function translate(el, fluent, binding) {
	const key = binding.arg;
	if (key === void 0) {
		warn("v-t directive is missing arg with translation key");
		return;
	}
	const translation = fluent.formatWithAttrs(key, binding.value);
	if (translation.hasValue) el.textContent = translation.value;
	const allowedAttrs = Object.keys(binding.modifiers);
	for (const [attr, attrValue] of Object.entries(translation.attributes)) if (isAttrNameLocalizable(attr, el, allowedAttrs)) el.setAttribute(attr, attrValue);
	else warn(`Attribute '${attr}' on element <${el.tagName.toLowerCase()}> is not localizable. Remove it from the translation. Translation key: ${key}`);
}
function createVue3Directive(rootContext) {
	return {
		mounted(el, binding) {
			(0, lib_exports.watchEffect)(() => {
				translate(el, getContext(rootContext, binding.instance), binding);
			});
		},
		updated(el, binding) {
			translate(el, getContext(rootContext, binding.instance), binding);
		},
		getSSRProps(binding) {
			const context = getContext(rootContext, binding.instance);
			if (binding.arg === void 0) {
				warn("v-t directive is missing arg with translation key");
				return {};
			}
			const translation = context.formatWithAttrs(binding.arg, binding.value);
			const attrs = translation.attributes;
			if (translation.hasValue) attrs.textContent = translation.value;
			return attrs;
		}
	};
}
function createFluentVue(options) {
	const bundles = (0, lib_exports.shallowRef)(options.bundles);
	const resolvedOptions = resolveOptions(options);
	const rootContext = new TranslationContext(bundles, resolvedOptions);
	return {
		get bundles() {
			return bundles.value;
		},
		set bundles(value) {
			bundles.value = value;
		},
		mergedWith: (extraTranslations) => {
			return getMergedContext(rootContext, extraTranslations);
		},
		format: rootContext.format.bind(rootContext),
		formatAttrs: rootContext.formatAttrs.bind(rootContext),
		formatWithAttrs: rootContext.formatWithAttrs.bind(rootContext),
		$t: rootContext.format.bind(rootContext),
		$ta: rootContext.formatAttrs.bind(rootContext),
		install(vue) {
			{
				const vue3 = vue;
				if (process.env.NODE_ENV !== "production") registerFluentVueDevtools(vue3, resolvedOptions, this);
				vue3.provide(RootContextSymbol, rootContext);
				vue3.config.globalProperties[resolvedOptions.globalFormatName] = function(key, value) {
					return getContext(rootContext, (0, lib_exports.getCurrentInstance)()?.proxy).format(key, value);
				};
				vue3.config.globalProperties[resolvedOptions.globalFormatAttrsName] = function(key, value) {
					return getContext(rootContext, (0, lib_exports.getCurrentInstance)()?.proxy).formatAttrs(key, value);
				};
				vue3.directive(resolvedOptions.directiveName, createVue3Directive(rootContext));
			}
			vue.component(resolvedOptions.componentName, createComponent(resolvedOptions, rootContext));
		}
	};
}
var de_default = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Zu GitHub\nheader-home = Home\nheader-methodology = Methodik\nheader-mock-pages = Testseiten\nheader-products = Produkte\nheader-pricing = Preise\nheader-team = Team\nheader-blog = Blog\nheader-careers = Karriere\nheader-faq = FAQ\nheader-contact = Kontakt\nheader-settings = Einstellungen\nfooter-title = i18n Benchmark\nfooter-description = Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.\nfooter-resources = Ressourcen\nfooter-github = GitHub\nfooter-methodology = Methodik\nfooter-contributing = Beitragen\nfooter-contact = Kontakt\nfooter-built-with = i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.\ntheme-toggle-auto = Thema: Auto\ntheme-toggle-dark = Thema: Dunkel\ntheme-toggle-light = Thema: Hell\ntheme-toggle-label-auto = Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.\ntheme-toggle-label-other = Themenmodus: {mode}. Klicken Sie hier, um den Modus zu wechseln.\nmock-banner = ⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.\nhome-hero-view-results = Ergebnisse anzeigen\nhome-hero-methodology = Methodik\nhome-why-it-matters-title = Warum diese Metriken wichtig sind\nhome-why-it-matters-bundle-size-title = Bundle-Größe\nhome-why-it-matters-bundle-size-desc = Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.\nhome-why-it-matters-rendering-title = Rendering & Hydrierung\nhome-why-it-matters-rendering-desc = Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\nhome-why-it-matters-dynamic-loading-title = Dynamisches Laden\nhome-why-it-matters-dynamic-loading-desc = Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.\nhome-understanding-impact-title = Die Auswirkungen verstehen\nhome-understanding-impact-single-json-title = Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\nhome-understanding-impact-single-json-intro = Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:\nhome-understanding-impact-single-json-bullet1 = Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.\nhome-understanding-impact-single-json-bullet2 = Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\nhome-understanding-impact-single-json-bullet3 = Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.\nhome-understanding-impact-trade-offs-title = Die Kompromisse beim dynamischen Laden\nhome-understanding-impact-trade-offs-intro = Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\nhome-understanding-impact-waterfall-label = Waterfall-Anfragen:\nhome-understanding-impact-waterfall-desc = Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.\nhome-understanding-impact-fouc-label = Flash of Untranslated Content (FOUC):\nhome-understanding-impact-fouc-desc = Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.\nhome-understanding-impact-cache-label = Cache-Invalidierung:\nhome-understanding-impact-cache-desc = Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\nhome-understanding-impact-measures-title = Was dieser Benchmark misst\nhome-understanding-impact-measures-desc = Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.\nhome-results-table-title = Beispielergebnisse\nhome-results-table-library = Bibliothek\nhome-results-table-bundle-size = Bundle-Größe\nhome-results-table-lookup-time = Lookup-Zeit\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Ja\nhome-results-table-manual = Manuell\nhome-results-table-built-in = Integriert\nabout-header-title = Über diesen Benchmark\nabout-header-description = Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.\nabout-grid-why-exists-title = Warum dies existiert\nabout-grid-why-exists-desc = Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.\nabout-grid-methodology-title = Methodik\nabout-grid-methodology-desc = Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.\nabout-what-we-measure-title = Was wir messen\nabout-what-we-measure-bundle-size-impact = Auswirkungen auf die Bundle-Größe\nabout-what-we-measure-bundle-size-impact-desc = Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.\nabout-what-we-measure-rendering-overhead = Rendering-Overhead\nabout-what-we-measure-rendering-overhead-desc = Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\nabout-what-we-measure-hydration-cost = Hydrierungskosten\nabout-what-we-measure-hydration-cost-desc = Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.\nabout-what-we-measure-lazy-loading = Effektivität von Lazy Loading\nabout-what-we-measure-lazy-loading-desc = Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\nabout-what-we-measure-locale-switch = Geschwindigkeit des Sprachwechsels\nabout-what-we-measure-locale-switch-desc = Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.\nblog-header-title = Blog\nblog-header-description = Einblicke, Tutorials und Analysen aus der i18n-Community.\nblog-list-read-more = Mehr lesen →\nblog-list-post1-title = Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick\nblog-list-post1-date = 15. März 2026\nblog-list-post1-excerpt = Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Wie Sie Ihr i18n-Bundle um 60 % reduzieren\nblog-list-post2-date = 8. März 2026\nblog-list-post2-excerpt = Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = Der Stand der Internationalisierung in React\nblog-list-post3-date = 28. Februar 2026\nblog-list-post3-excerpt = Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\nblog-list-post3-category = Analyse\nblog-list-post4-title = Migration von react-i18next zu Lingui\nblog-list-post4-date = 15. Februar 2026\nblog-list-post4-excerpt = Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components und i18n: Was ändert sich?\nblog-list-post5-date = 1. Februar 2026\nblog-list-post5-excerpt = React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\nblog-list-post5-category = Analyse\nblog-list-post6-title = Benchmark-Methodik: Wie wir testen\nblog-list-post6-date = 20. Januar 2026\nblog-list-post6-excerpt = Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\nblog-list-post6-category = Meta\ncareers-header-title = Karriere\ncareers-header-description = Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.\ncareers-benefits-remote-label = Remote-First\ncareers-benefits-remote-value = Arbeiten Sie von überall auf der Welt\ncareers-benefits-pay-label = Wettbewerbsfähige Bezahlung\ncareers-benefits-pay-value = Überdurchschnittliche Vergütung\ncareers-benefits-oss-label = Open-Source-Zeit\ncareers-benefits-oss-value = 20 % der Zeit für OSS-Beiträge\ncareers-open-positions-title = Offene Stellen\ncareers-open-positions-apply-now = Jetzt bewerben\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Vollzeit\ncareers-open-positions-part-time = Teilzeit\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Dokumentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.\ncareers-open-positions-backend-title = Backend-Ingenieur\ncareers-open-positions-backend-desc = Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.\ncareers-open-positions-writer-title = Technischer Redakteur\ncareers-open-positions-writer-desc = Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\ncareers-open-positions-devrel-title = DevRel-Ingenieur\ncareers-open-positions-devrel-desc = Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\ncareers-open-positions-qa-title = QA-Ingenieur\ncareers-open-positions-qa-desc = Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.\ncontact-header-title = Kontakt aufnehmen\ncontact-header-description = Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter\ncontact-form-name = Name\ncontact-form-your-name = Ihr Name\ncontact-form-email = E-Mail\ncontact-form-email-placeholder = ihre@beispiel.de\ncontact-form-topic = Thema\ncontact-form-bug-report = Fehlerbericht\ncontact-form-new-benchmark-idea = Neue Benchmark-Idee\ncontact-form-methodology-question = Frage zur Methodik\ncontact-form-contribution = Beitrag\ncontact-form-other = Sonstiges\ncontact-form-message = Nachricht\ncontact-form-message-placeholder = Beschreiben Sie Ihre Frage oder Idee...\ncontact-form-send-message = Nachricht senden\nfaq-header-title = Häufig gestellte Fragen\nfaq-header-description = Alles, was Sie über i18n Benchmark wissen müssen.\nfaq-list-q1 = Was ist i18n Benchmark?\nfaq-list-a1 = i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\nfaq-list-q2 = Wie werden Benchmarks durchgeführt?\nfaq-list-a2 = Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.\nfaq-list-q3 = Welche Bibliotheken werden derzeit unterstützt?\nfaq-list-a3 = Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\nfaq-list-q4 = Kann ich meine eigenen Benchmarks einreichen?\nfaq-list-a4 = Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.\nfaq-list-q5 = Wie oft werden Benchmarks aktualisiert?\nfaq-list-a5 = Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.\nfaq-list-q6 = Sind die Daten zuverlässig?\nfaq-list-a6 = Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\nfaq-list-q7 = Bieten Sie Beratungsdienstleistungen an?\nfaq-list-a7 = Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.\nfaq-list-q8 = Wie kann ich beitragen?\nfaq-list-a8 = Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.\npricing-header-title = Einfache, transparente Preisgestaltung\npricing-header-description = Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = für immer\npricing-tiers-starter-feature1 = 5 Benchmark-Durchläufe/Tag\npricing-tiers-starter-feature2 = 3 Bibliotheken\npricing-tiers-starter-feature3 = Community-Support\npricing-tiers-starter-feature4 = Öffentliche Ergebnisse\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /Monat\npricing-tiers-pro-feature1 = Unbegrenzte Durchläufe\npricing-tiers-pro-feature2 = Alle Bibliotheken\npricing-tiers-pro-feature3 = Priorisierter Support\npricing-tiers-pro-feature4 = Private Ergebnisse\npricing-tiers-pro-feature5 = CI-Integration\npricing-tiers-pro-feature6 = Historische Daten\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Individuell\npricing-tiers-enterprise-feature1 = Alles in Pro enthalten\npricing-tiers-enterprise-feature2 = On-Premise-Option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedizierter Account Manager\npricing-tiers-enterprise-feature5 = Individuelle SLAs\npricing-tiers-enterprise-feature6 = Audit-Protokolle\npricing-tiers-enterprise-feature7 = Schulungssitzungen\npricing-tiers-contact-sales = Vertrieb kontaktieren\npricing-tiers-get-started = Erste Schritte\nproducts-header-title = Produkte\nproducts-header-description = Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.\nproducts-grid-learn-more = Mehr erfahren\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\nproducts-grid-cli-price = Kostenlos\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.\nproducts-grid-cloud-price = 29 $/Monat\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.\nproducts-grid-enterprise-price = Kontaktieren Sie uns\nproducts-grid-migration-name = Migrationsassistent\nproducts-grid-migration-desc = KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.\nproducts-grid-migration-price = Einmalig 99 $\nproducts-grid-qa-name = Übersetzungs-QA\nproducts-grid-qa-desc = Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\nproducts-grid-qa-price = 19 $/Monat\nproducts-grid-optimizer-name = Bundle-Optimierer\nproducts-grid-optimizer-desc = Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\nproducts-grid-optimizer-price = 49 $/Monat\nsettings-header-title = Einstellungen\nsettings-header-description = Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.\nsettings-profile-title = Profil\nsettings-profile-display-name = Anzeigename\nsettings-profile-email = E-Mail\nsettings-preferences-title = Einstellungen\nsettings-preferences-email-notifications = E-Mail-Benachrichtigungen\nsettings-preferences-weekly-reports = Wöchentliche Benchmark-Berichte erhalten\nsettings-preferences-toggle-notifications = Benachrichtigungen umschalten\nsettings-preferences-dark-mode = Dunkelmodus\nsettings-preferences-dark-color-scheme = Dunkles Farbschema verwenden\nsettings-preferences-toggle-dark-mode = Dunkelmodus umschalten\nsettings-preferences-default-language = Standardsprache\nsettings-preferences-english = Englisch (en)\nsettings-preferences-french = Französisch (fr)\nsettings-preferences-german = Deutsch (de)\nsettings-preferences-spanish = Spanisch (es)\nsettings-preferences-japanese = Japanisch (ja)\nsettings-preferences-chinese = Chinesisch vereinfacht (zh-CN)\nsettings-preferences-arabic = Arabisch (ar)\nsettings-api-access-title = API-Zugriff\nsettings-api-access-api-key = API-Schlüssel\nsettings-api-access-copy = Kopieren\nsettings-api-access-description = Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.\nsettings-footer-cancel = Abbrechen\nsettings-footer-save-changes = Änderungen speichern\nteam-header-title = Unser Team\nteam-header-description = Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Gründerin & Leitende Ingenieurin\nteam-grid-member1-bio = Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance-Ingenieur\nteam-grid-member2-bio = Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack-Entwickler\nteam-grid-member4-bio = Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Datenanalyst\nteam-grid-member5-bio = Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\nnot-found-title = 404\nnot-found-description = Hoppla! Seite nicht gefunden\nnot-found-return-home = Zurück zur Startseite\n";
var en_default = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Go to GitHub\nheader-home = Home\nheader-methodology = Methodology\nheader-mock-pages = Mock Pages\nheader-products = Products\nheader-pricing = Pricing\nheader-team = Team\nheader-blog = Blog\nheader-careers = Careers\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Settings\nfooter-title = i18n Benchmark\nfooter-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\nfooter-resources = Resources\nfooter-github = GitHub\nfooter-methodology = Methodology\nfooter-contributing = Contributing\nfooter-contact = Contact\nfooter-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.\ntheme-toggle-auto = Theme: Auto\ntheme-toggle-dark = Theme: Dark\ntheme-toggle-light = Theme: Light\ntheme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.\ntheme-toggle-label-other = Theme mode: {mode}. Click to switch mode.\nmock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\nhome-hero-title = i18n Benchmark\nhome-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\nhome-hero-view-results = View Results\nhome-hero-methodology = Methodology\nhome-why-it-matters-title = Why These Metrics Matter\nhome-why-it-matters-bundle-size-title = Bundle Size\nhome-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\nhome-why-it-matters-rendering-title = Rendering & Hydration\nhome-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Dynamic Loading\nhome-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\nhome-understanding-impact-title = Understanding the Impact\nhome-understanding-impact-single-json-title = Why a single large JSON can hurt performance\nhome-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\nhome-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.\nhome-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\nhome-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\nhome-understanding-impact-trade-offs-title = The trade-offs of dynamic loading\nhome-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\nhome-understanding-impact-waterfall-label = Waterfall requests:\nhome-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\nhome-understanding-impact-fouc-label = Flash of untranslated content (FOUC):\nhome-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.\nhome-understanding-impact-cache-label = Cache invalidation:\nhome-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\nhome-understanding-impact-measures-title = What this benchmark measures\nhome-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\nhome-results-table-title = Sample Results\nhome-results-table-library = Library\nhome-results-table-bundle-size = Bundle Size\nhome-results-table-lookup-time = Lookup Time\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Yes\nhome-results-table-manual = Manual\nhome-results-table-built-in = Built-in\nabout-header-title = About This Benchmark\nabout-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\nabout-grid-why-exists-title = Why This Exists\nabout-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\nabout-grid-methodology-title = Methodology\nabout-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\nabout-what-we-measure-title = What We Measure\nabout-what-we-measure-bundle-size-impact = Bundle size impact\nabout-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\nabout-what-we-measure-rendering-overhead = Rendering overhead\nabout-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\nabout-what-we-measure-hydration-cost = Hydration cost\nabout-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\nabout-what-we-measure-lazy-loading = Lazy loading effectiveness\nabout-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\nabout-what-we-measure-locale-switch = Locale switch speed\nabout-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutorials, and analysis from the i18n community.\nblog-list-read-more = Read More →\nblog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive\nblog-list-post1-date = March 15, 2026\nblog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = How to Reduce Your i18n Bundle by 60%\nblog-list-post2-date = March 8, 2026\nblog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = The State of Internationalization in React\nblog-list-post3-date = February 28, 2026\nblog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\nblog-list-post3-category = Analysis\nblog-list-post4-title = Migrating from react-i18next to Lingui\nblog-list-post4-date = February 15, 2026\nblog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components and i18n: What Changes?\nblog-list-post5-date = February 1, 2026\nblog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\nblog-list-post5-category = Analysis\nblog-list-post6-title = Benchmark Methodology: How We Test\nblog-list-post6-date = January 20, 2026\nblog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\nblog-list-post6-category = Meta\ncareers-header-title = Careers\ncareers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Work from anywhere in the world\ncareers-benefits-pay-label = Competitive pay\ncareers-benefits-pay-value = Top-of-market compensation\ncareers-benefits-oss-label = Open source time\ncareers-benefits-oss-value = 20% time for OSS contributions\ncareers-open-positions-title = Open Positions\ncareers-open-positions-apply-now = Apply Now\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Full-time\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\ncareers-open-positions-writer-title = Technical Writer\ncareers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.\ncareers-open-positions-devrel-title = DevRel Engineer\ncareers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\ncareers-open-positions-qa-title = QA Engineer\ncareers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\ncontact-header-title = Get in Touch\ncontact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\ncontact-form-name = Name\ncontact-form-your-name = Your name\ncontact-form-email = Email\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Topic\ncontact-form-bug-report = Bug Report\ncontact-form-new-benchmark-idea = New Benchmark Idea\ncontact-form-methodology-question = Methodology Question\ncontact-form-contribution = Contribution\ncontact-form-other = Other\ncontact-form-message = Message\ncontact-form-message-placeholder = Describe your question or idea...\ncontact-form-send-message = Send Message\nfaq-header-title = Frequently Asked Questions\nfaq-header-description = Everything you need to know about i18n Benchmark.\nfaq-list-q1 = What is i18n Benchmark?\nfaq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\nfaq-list-q2 = How are benchmarks conducted?\nfaq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\nfaq-list-q3 = Which libraries are currently supported?\nfaq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\nfaq-list-q4 = Can I submit my own benchmarks?\nfaq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\nfaq-list-q5 = How often are benchmarks updated?\nfaq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\nfaq-list-q6 = Is the data reliable?\nfaq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\nfaq-list-q7 = Do you offer consulting services?\nfaq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\nfaq-list-q8 = How can I contribute?\nfaq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\npricing-header-title = Simple, Transparent Pricing\npricing-header-description = Choose the plan that fits your team. No hidden fees.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = $0\npricing-tiers-starter-period = forever\npricing-tiers-starter-feature1 = 5 benchmark runs/day\npricing-tiers-starter-feature2 = 3 libraries\npricing-tiers-starter-feature3 = Community support\npricing-tiers-starter-feature4 = Public results\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = $29\npricing-tiers-pro-period = /month\npricing-tiers-pro-feature1 = Unlimited runs\npricing-tiers-pro-feature2 = All libraries\npricing-tiers-pro-feature3 = Priority support\npricing-tiers-pro-feature4 = Private results\npricing-tiers-pro-feature5 = CI integration\npricing-tiers-pro-feature6 = Historical data\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Custom\npricing-tiers-enterprise-feature1 = Everything in Pro\npricing-tiers-enterprise-feature2 = On-premise option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedicated account manager\npricing-tiers-enterprise-feature5 = Custom SLAs\npricing-tiers-enterprise-feature6 = Audit logs\npricing-tiers-enterprise-feature7 = Training sessions\npricing-tiers-contact-sales = Contact Sales\npricing-tiers-get-started = Get Started\nproducts-header-title = Products\nproducts-header-description = Tools and services to streamline your internationalization workflow.\nproducts-grid-learn-more = Learn More\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\nproducts-grid-cli-price = Free\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\nproducts-grid-cloud-price = $29/mo\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\nproducts-grid-enterprise-price = Contact Us\nproducts-grid-migration-name = Migration Assistant\nproducts-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\nproducts-grid-migration-price = $99 one-time\nproducts-grid-qa-name = Translation QA\nproducts-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.\nproducts-grid-qa-price = $19/mo\nproducts-grid-optimizer-name = Bundle Optimizer\nproducts-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\nproducts-grid-optimizer-price = $49/mo\nsettings-header-title = Settings\nsettings-header-description = Manage your account preferences and configuration.\nsettings-profile-title = Profile\nsettings-profile-display-name = Display Name\nsettings-profile-email = Email\nsettings-preferences-title = Preferences\nsettings-preferences-email-notifications = Email Notifications\nsettings-preferences-weekly-reports = Receive weekly benchmark reports\nsettings-preferences-toggle-notifications = Toggle notifications\nsettings-preferences-dark-mode = Dark Mode\nsettings-preferences-dark-color-scheme = Use dark color scheme\nsettings-preferences-toggle-dark-mode = Toggle dark mode\nsettings-preferences-default-language = Default Language\nsettings-preferences-english = English (en)\nsettings-preferences-french = French (fr)\nsettings-preferences-german = German (de)\nsettings-preferences-spanish = Spanish (es)\nsettings-preferences-japanese = Japanese (ja)\nsettings-preferences-chinese = Chinese Simplified (zh-CN)\nsettings-preferences-arabic = Arabic (ar)\nsettings-api-access-title = API Access\nsettings-api-access-api-key = API Key\nsettings-api-access-copy = Copy\nsettings-api-access-description = Use this key to access the benchmarking API programmatically.\nsettings-footer-cancel = Cancel\nsettings-footer-save-changes = Save Changes\nteam-header-title = Our Team\nteam-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Founder & Lead Engineer\nteam-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance Engineer\nteam-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack Developer\nteam-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Data Analyst\nteam-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.\nnot-found-title = 404\nnot-found-description = Oops! Page not found\nnot-found-return-home = Return to Home\n";
var es_default = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Ir a GitHub\nheader-home = Inicio\nheader-methodology = Metodología\nheader-mock-pages = Páginas de prueba\nheader-products = Productos\nheader-pricing = Precios\nheader-team = Equipo\nheader-blog = Blog\nheader-careers = Carreras\nheader-faq = FAQ\nheader-contact = Contacto\nheader-settings = Ajustes\nfooter-title = i18n Benchmark\nfooter-description = Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.\nfooter-resources = Recursos\nfooter-github = GitHub\nfooter-methodology = Metodología\nfooter-contributing = Contribuir\nfooter-contact = Contacto\nfooter-built-with = i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.\ntheme-toggle-auto = Tema: Auto\ntheme-toggle-dark = Tema: Oscuro\ntheme-toggle-light = Tema: Claro\ntheme-toggle-label-auto = Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.\ntheme-toggle-label-other = Modo de tema: {mode}. Haz clic para cambiar de modo.\nmock-banner = ⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.\nhome-hero-view-results = Ver resultados\nhome-hero-methodology = Metodología\nhome-why-it-matters-title = Por qué son importantes estas métricas\nhome-why-it-matters-bundle-size-title = Tamaño del bundle\nhome-why-it-matters-bundle-size-desc = El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.\nhome-why-it-matters-rendering-title = Renderizado e hidratación\nhome-why-it-matters-rendering-desc = Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Carga dinámica\nhome-why-it-matters-dynamic-loading-desc = Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\nhome-understanding-impact-title = Entendiendo el impacto\nhome-understanding-impact-single-json-title = Por qué un solo JSON grande puede perjudicar el rendimiento\nhome-understanding-impact-single-json-intro = Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\nhome-understanding-impact-single-json-bullet1 = El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\nhome-understanding-impact-single-json-bullet2 = Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.\nhome-understanding-impact-single-json-bullet3 = Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\nhome-understanding-impact-trade-offs-title = Las compensaciones de la carga dinámica\nhome-understanding-impact-trade-offs-intro = Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\nhome-understanding-impact-waterfall-label = Solicitudes en cascada:\nhome-understanding-impact-waterfall-desc = la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.\nhome-understanding-impact-fouc-label = Parpadeo de contenido no traducido (FOUC):\nhome-understanding-impact-fouc-desc = los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\nhome-understanding-impact-cache-label = Invalidación de la caché:\nhome-understanding-impact-cache-desc = actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.\nhome-understanding-impact-measures-title = Qué mide este benchmark\nhome-understanding-impact-measures-desc = Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\nhome-results-table-title = Resultados de muestra\nhome-results-table-library = Biblioteca\nhome-results-table-bundle-size = Tamaño del bundle\nhome-results-table-lookup-time = Tiempo de búsqueda\nhome-results-table-lazy-loading = Carga diferida\nhome-results-table-yes = Sí\nhome-results-table-manual = Manual\nhome-results-table-built-in = Integrado\nabout-header-title = Acerca de este benchmark\nabout-header-description = Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.\nabout-grid-why-exists-title = Por qué existe esto\nabout-grid-why-exists-desc = Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.\nabout-grid-methodology-title = Metodología\nabout-grid-methodology-desc = La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.\nabout-what-we-measure-title = Qué medimos\nabout-what-we-measure-bundle-size-impact = Impacto en el tamaño del bundle\nabout-what-we-measure-bundle-size-impact-desc = Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\nabout-what-we-measure-rendering-overhead = Sobrecarga de renderizado\nabout-what-we-measure-rendering-overhead-desc = Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.\nabout-what-we-measure-hydration-cost = Coste de hidratación\nabout-what-we-measure-hydration-cost-desc = Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\nabout-what-we-measure-lazy-loading = Eficacia de la carga diferida\nabout-what-we-measure-lazy-loading-desc = Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).\nabout-what-we-measure-locale-switch = Velocidad de cambio de idioma\nabout-what-we-measure-locale-switch-desc = Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\nblog-header-title = Blog\nblog-header-description = Información, tutoriales y análisis de la comunidad i18n.\nblog-list-read-more = Leer más →\nblog-list-post1-title = Comparativa de bibliotecas i18n en 2026: Un análisis profundo\nblog-list-post1-date = 15 de marzo de 2026\nblog-list-post1-excerpt = Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Cómo reducir tu bundle i18n en un 60%\nblog-list-post2-date = 8 de marzo de 2026\nblog-list-post2-excerpt = Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = El estado de la internacionalización en React\nblog-list-post3-date = 28 de febrero de 2026\nblog-list-post3-excerpt = Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.\nblog-list-post3-category = Análisis\nblog-list-post4-title = Migración de react-i18next a Lingui\nblog-list-post4-date = 15 de febrero de 2026\nblog-list-post4-excerpt = Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: ¿Qué cambia?\nblog-list-post5-date = 1 de febrero de 2026\nblog-list-post5-excerpt = Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\nblog-list-post5-category = Análisis\nblog-list-post6-title = Metodología de benchmark: Cómo probamos\nblog-list-post6-date = 20 de enero de 2026\nblog-list-post6-excerpt = Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\nblog-list-post6-category = Meta\ncareers-header-title = Carreras\ncareers-header-description = Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.\ncareers-benefits-remote-label = Remoto primero\ncareers-benefits-remote-value = Trabaja desde cualquier lugar del mundo\ncareers-benefits-pay-label = Salario competitivo\ncareers-benefits-pay-value = Compensación superior a la del mercado\ncareers-benefits-oss-label = Tiempo para el código abierto\ncareers-benefits-oss-value = 20% del tiempo para contribuciones a OSS\ncareers-open-positions-title = Puestos vacantes\ncareers-open-positions-apply-now = Postular ahora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tiempo completo\ncareers-open-positions-part-time = Tiempo parcial\ncareers-open-positions-engineering = Ingeniería\ncareers-open-positions-documentation = Documentación\ncareers-open-positions-community = Comunidad\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Ingeniero Frontend Senior\ncareers-open-positions-frontend-desc = Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.\ncareers-open-positions-backend-title = Ingeniero Backend\ncareers-open-positions-backend-desc = Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.\ncareers-open-positions-writer-title = Redactor técnico\ncareers-open-positions-writer-desc = Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\ncareers-open-positions-devrel-title = Ingeniero de DevRel\ncareers-open-positions-devrel-desc = Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.\ncareers-open-positions-qa-title = Ingeniero de QA\ncareers-open-positions-qa-desc = Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.\ncontact-header-title = Ponte en contacto\ncontact-header-description = ¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en\ncontact-form-name = Nombre\ncontact-form-your-name = Tu nombre\ncontact-form-email = Correo electrónico\ncontact-form-email-placeholder = tu@ejemplo.com\ncontact-form-topic = Tema\ncontact-form-bug-report = Informe de error\ncontact-form-new-benchmark-idea = Nueva idea de benchmark\ncontact-form-methodology-question = Pregunta sobre la metodología\ncontact-form-contribution = Contribución\ncontact-form-other = Otro\ncontact-form-message = Mensaje\ncontact-form-message-placeholder = Describe tu pregunta o idea...\ncontact-form-send-message = Enviar mensaje\nfaq-header-title = Preguntas frecuentes\nfaq-header-description = Todo lo que necesitas saber sobre i18n Benchmark.\nfaq-list-q1 = ¿Qué es i18n Benchmark?\nfaq-list-a1 = i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\nfaq-list-q2 = ¿Cómo se realizan los benchmarks?\nfaq-list-a2 = Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.\nfaq-list-q3 = ¿Qué bibliotecas se admiten actualmente?\nfaq-list-a3 = Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\nfaq-list-q4 = ¿Puedo enviar mis propios benchmarks?\nfaq-list-a4 = ¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.\nfaq-list-q5 = ¿Con qué frecuencia se actualizan los benchmarks?\nfaq-list-a5 = Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\nfaq-list-q6 = ¿Son fiables los datos?\nfaq-list-a6 = Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.\nfaq-list-q7 = ¿Ofrecen servicios de consultoría?\nfaq-list-a7 = Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.\nfaq-list-q8 = ¿Cómo puedo contribuir?\nfaq-list-a8 = Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.\npricing-header-title = Precios sencillos y transparentes\npricing-header-description = Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = para siempre\npricing-tiers-starter-feature1 = 5 ejecuciones de benchmark al día\npricing-tiers-starter-feature2 = 3 bibliotecas\npricing-tiers-starter-feature3 = Soporte de la comunidad\npricing-tiers-starter-feature4 = Resultados públicos\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mes\npricing-tiers-pro-feature1 = Ejecuciones ilimitadas\npricing-tiers-pro-feature2 = Todas las bibliotecas\npricing-tiers-pro-feature3 = Soporte prioritario\npricing-tiers-pro-feature4 = Resultados privados\npricing-tiers-pro-feature5 = Integración CI\npricing-tiers-pro-feature6 = Datos históricos\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizado\npricing-tiers-enterprise-feature1 = Todo lo que hay en Pro\npricing-tiers-enterprise-feature2 = Opción on-premise\npricing-tiers-enterprise-feature3 = SSO y SAML\npricing-tiers-enterprise-feature4 = Gestor de cuentas dedicado\npricing-tiers-enterprise-feature5 = SLAs personalizados\npricing-tiers-enterprise-feature6 = Registros de auditoría\npricing-tiers-enterprise-feature7 = Sesiones de formación\npricing-tiers-contact-sales = Contactar con ventas\npricing-tiers-get-started = Empezar\nproducts-header-title = Productos\nproducts-header-description = Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.\nproducts-grid-learn-more = Más información\nproducts-grid-cli-name = CLI de Benchmark\nproducts-grid-cli-desc = Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.\nproducts-grid-cli-price = Gratis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\nproducts-grid-cloud-price = 29 $/mes\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\nproducts-grid-enterprise-price = Contáctanos\nproducts-grid-migration-name = Asistente de migración\nproducts-grid-migration-desc = Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.\nproducts-grid-migration-price = 99 $ pago único\nproducts-grid-qa-name = QA de traducción\nproducts-grid-qa-desc = Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\nproducts-grid-qa-price = 19 $/mes\nproducts-grid-optimizer-name = Optimizador de bundle\nproducts-grid-optimizer-desc = Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.\nproducts-grid-optimizer-price = 49 $/mes\nsettings-header-title = Ajustes\nsettings-header-description = Gestiona las preferencias y la configuración de tu cuenta.\nsettings-profile-title = Perfil\nsettings-profile-display-name = Nombre visible\nsettings-profile-email = Correo electrónico\nsettings-preferences-title = Preferencias\nsettings-preferences-email-notifications = Notificaciones por correo electrónico\nsettings-preferences-weekly-reports = Recibir informes semanales de benchmarks\nsettings-preferences-toggle-notifications = Cambiar notificaciones\nsettings-preferences-dark-mode = Modo oscuro\nsettings-preferences-dark-color-scheme = Usar esquema de colores oscuro\nsettings-preferences-toggle-dark-mode = Cambiar modo oscuro\nsettings-preferences-default-language = Idioma predeterminado\nsettings-preferences-english = Inglés (en)\nsettings-preferences-french = Francés (fr)\nsettings-preferences-german = Alemán (de)\nsettings-preferences-spanish = Español (es)\nsettings-preferences-japanese = Japonés (ja)\nsettings-preferences-chinese = Chino simplificado (zh-CN)\nsettings-preferences-arabic = Árabe (ar)\nsettings-api-access-title = Acceso API\nsettings-api-access-api-key = Llave API\nsettings-api-access-copy = Copiar\nsettings-api-access-description = Usa esta llave para acceder a la API de benchmarking de forma programática.\nsettings-footer-cancel = Cancelar\nsettings-footer-save-changes = Guardar cambios\nteam-header-title = Nuestro equipo\nteam-header-description = Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fundadora e ingeniera principal\nteam-grid-member1-bio = Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingeniero de rendimiento\nteam-grid-member2-bio = Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Desarrollador Full-Stack\nteam-grid-member4-bio = Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista de datos\nteam-grid-member5-bio = Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Responsable de la comunidad\nteam-grid-member6-bio = Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.\nnot-found-title = 404\nnot-found-description = ¡Ups! Página no encontrada\nnot-found-return-home = Volver al inicio\n";
var fr_default = "shared-app-name = Bench i18n\nshared-site-name = Benchmark i18n\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Aller sur GitHub\nheader-home = Accueil\nheader-methodology = Méthodologie\nheader-mock-pages = Pages fictives\nheader-products = Produits\nheader-pricing = Tarifs\nheader-team = Équipe\nheader-blog = Blog\nheader-careers = Carrières\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Paramètres\nfooter-title = Benchmark i18n\nfooter-description = Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\nfooter-resources = Ressources\nfooter-github = GitHub\nfooter-methodology = Méthodologie\nfooter-contributing = Contribuer\nfooter-contact = Contact\nfooter-built-with = Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.\ntheme-toggle-auto = Thème : automatique\ntheme-toggle-dark = Thème : sombre\ntheme-toggle-light = Thème : clair\ntheme-toggle-label-auto = Mode thème : automatique (système). Cliquez pour passer en mode clair.\ntheme-toggle-label-other = Mode thème : {mode}. Cliquez pour changer de mode.\nmock-banner = ⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.\nhome-hero-title = Benchmark i18n\nhome-hero-description = Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.\nhome-hero-view-results = Voir les résultats\nhome-hero-methodology = Méthodologie\nhome-why-it-matters-title = Pourquoi ces métriques comptent\nhome-why-it-matters-bundle-size-title = Taille du bundle\nhome-why-it-matters-bundle-size-desc = Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.\nhome-why-it-matters-rendering-title = Rendu et hydratation\nhome-why-it-matters-rendering-desc = Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Chargement dynamique\nhome-why-it-matters-dynamic-loading-desc = Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.\nhome-understanding-impact-title = Comprendre l'impact\nhome-understanding-impact-single-json-title = Pourquoi un unique gros JSON peut nuire aux performances\nhome-understanding-impact-single-json-intro = Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :\nhome-understanding-impact-single-json-bullet1 = Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.\nhome-understanding-impact-single-json-bullet2 = Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.\nhome-understanding-impact-single-json-bullet3 = Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.\nhome-understanding-impact-trade-offs-title = Les compromis du chargement dynamique\nhome-understanding-impact-trade-offs-intro = Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :\nhome-understanding-impact-waterfall-label = Requêtes en cascade :\nhome-understanding-impact-waterfall-desc = l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.\nhome-understanding-impact-fouc-label = Flash de contenu non traduit (FOUC) :\nhome-understanding-impact-fouc-desc = l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.\nhome-understanding-impact-cache-label = Invalidation du cache :\nhome-understanding-impact-cache-desc = mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.\nhome-understanding-impact-measures-title = Ce que mesure ce benchmark\nhome-understanding-impact-measures-desc = Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.\nhome-results-table-title = Exemple de résultats\nhome-results-table-library = Bibliothèque\nhome-results-table-bundle-size = Taille du bundle\nhome-results-table-lookup-time = Temps de recherche\nhome-results-table-lazy-loading = Chargement paresseux\nhome-results-table-yes = Oui\nhome-results-table-manual = Manuel\nhome-results-table-built-in = Intégré\nabout-header-title = À propos de ce benchmark\nabout-header-description = Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.\nabout-grid-why-exists-title = Pourquoi ce projet existe\nabout-grid-why-exists-desc = Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.\nabout-grid-methodology-title = Méthodologie\nabout-grid-methodology-desc = La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.\nabout-what-we-measure-title = Ce que nous mesurons\nabout-what-we-measure-bundle-size-impact = Impact sur la taille du bundle\nabout-what-we-measure-bundle-size-impact-desc = Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.\nabout-what-we-measure-rendering-overhead = Surcharge de rendu\nabout-what-we-measure-rendering-overhead-desc = Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.\nabout-what-we-measure-hydration-cost = Coût d'hydratation\nabout-what-we-measure-hydration-cost-desc = En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.\nabout-what-we-measure-lazy-loading = Efficacité du chargement paresseux\nabout-what-we-measure-lazy-loading-desc = Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?\nabout-what-we-measure-locale-switch = Vitesse de changement de langue\nabout-what-we-measure-locale-switch-desc = À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.\nblog-header-title = Blog\nblog-header-description = Articles, tutoriels et analyses de la communauté i18n.\nblog-list-read-more = Lire la suite →\nblog-list-post1-title = Comparer les bibliothèques i18n en 2026 : plongée détaillée\nblog-list-post1-date = 15 mars 2026\nblog-list-post1-excerpt = Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Réduire votre bundle i18n de 60 %\nblog-list-post2-date = 8 mars 2026\nblog-list-post2-excerpt = Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.\nblog-list-post2-category = Tutoriel\nblog-list-post3-title = État de l'internationalisation dans l'écosystème React\nblog-list-post3-date = 28 février 2026\nblog-list-post3-excerpt = Panorama des tendances, patterns émergents et préférences de la communauté.\nblog-list-post3-category = Analyse\nblog-list-post4-title = Migrer de react-i18next vers Lingui\nblog-list-post4-date = 15 février 2026\nblog-list-post4-excerpt = Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.\nblog-list-post4-category = Tutoriel\nblog-list-post5-title = Server Components et i18n : qu'est-ce qui change ?\nblog-list-post5-date = 1er février 2026\nblog-list-post5-excerpt = Les React Server Components introduisent de nouveaux motifs pour l'i18n.\nblog-list-post5-category = Analyse\nblog-list-post6-title = Méthodologie de benchmark : comment nous testons\nblog-list-post6-date = 20 janvier 2026\nblog-list-post6-excerpt = Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.\nblog-list-post6-category = Méta\ncareers-header-title = Carrières\ncareers-header-description = Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Travaillez depuis n'importe où\ncareers-benefits-pay-label = Rémunération compétitive\ncareers-benefits-pay-value = Fourchettes haut de marché\ncareers-benefits-oss-label = Temps open source\ncareers-benefits-oss-value = 20 % du temps pour contribuer à l'OSS\ncareers-open-positions-title = Postes ouverts\ncareers-open-positions-apply-now = Postuler\ncareers-open-positions-remote = À distance\ncareers-open-positions-full-time = Temps plein\ncareers-open-positions-part-time = Temps partiel\ncareers-open-positions-engineering = Ingénierie\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Communauté\ncareers-open-positions-sf-remote = San Francisco / télétravail\ncareers-open-positions-frontend-title = Ingénieur front-end senior\ncareers-open-positions-frontend-desc = Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.\ncareers-open-positions-backend-title = Ingénieur back-end\ncareers-open-positions-backend-desc = Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.\ncareers-open-positions-writer-title = Rédacteur·rice technique\ncareers-open-positions-writer-desc = Guides, références d'API et tutoriels pour la plateforme de benchmark.\ncareers-open-positions-devrel-title = Ingénieur DevRel\ncareers-open-positions-devrel-desc = Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.\ncareers-open-positions-qa-title = Ingénieur QA\ncareers-open-positions-qa-desc = Garantir la fiabilité des résultats par des tests et validations rigoureux.\ncontact-header-title = Contact\ncontact-header-description = Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à\ncontact-form-name = Nom\ncontact-form-your-name = Votre nom\ncontact-form-email = E-mail\ncontact-form-email-placeholder = vous@exemple.com\ncontact-form-topic = Sujet\ncontact-form-bug-report = Rapport de bug\ncontact-form-new-benchmark-idea = Idée de benchmark\ncontact-form-methodology-question = Question de méthodologie\ncontact-form-contribution = Contribution\ncontact-form-other = Autre\ncontact-form-message = Message\ncontact-form-message-placeholder = Décrivez votre question ou idée…\ncontact-form-send-message = Envoyer\nfaq-header-title = Questions fréquentes\nfaq-header-description = Tout savoir sur i18n Benchmark.\nfaq-list-q1 = Qu'est-ce qu'i18n Benchmark ?\nfaq-list-a1 = Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.\nfaq-list-q2 = Comment sont menés les benchmarks ?\nfaq-list-a2 = Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.\nfaq-list-q3 = Quelles bibliothèques sont prises en charge ?\nfaq-list-a3 = react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.\nfaq-list-q4 = Puis-je proposer des benchmarks ?\nfaq-list-a4 = Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.\nfaq-list-q5 = À quelle fréquence sont-ils mis à jour ?\nfaq-list-a5 = Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.\nfaq-list-q6 = Les données sont-elles fiables ?\nfaq-list-a6 = Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.\nfaq-list-q7 = Proposez-vous du conseil ?\nfaq-list-a7 = Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.\nfaq-list-q8 = Comment contribuer ?\nfaq-list-a8 = Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.\npricing-header-title = Tarification simple et transparente\npricing-header-description = Choisissez l'offre adaptée à votre équipe. Sans frais cachés.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 €\npricing-tiers-starter-period = pour toujours\npricing-tiers-starter-feature1 = 5 exécutions de benchmark / jour\npricing-tiers-starter-feature2 = 3 bibliothèques\npricing-tiers-starter-feature3 = Support communautaire\npricing-tiers-starter-feature4 = Résultats publics\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 €\npricing-tiers-pro-period = / mois\npricing-tiers-pro-feature1 = Exécutions illimitées\npricing-tiers-pro-feature2 = Toutes les bibliothèques\npricing-tiers-pro-feature3 = Support prioritaire\npricing-tiers-pro-feature4 = Résultats privés\npricing-tiers-pro-feature5 = Intégration CI\npricing-tiers-pro-feature6 = Historique\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Sur mesure\npricing-tiers-enterprise-feature1 = Tout le Pro\npricing-tiers-enterprise-feature2 = Option on-premise\npricing-tiers-enterprise-feature3 = SSO et SAML\npricing-tiers-enterprise-feature4 = Account manager dédié\npricing-tiers-enterprise-feature5 = SLA sur mesure\npricing-tiers-enterprise-feature6 = Journaux d'audit\npricing-tiers-enterprise-feature7 = Sessions de formation\npricing-tiers-contact-sales = Contacter les ventes\npricing-tiers-get-started = Commencer\nproducts-header-title = Produits\nproducts-header-description = Outils et services pour fluidifier votre flux i18n.\nproducts-grid-learn-more = En savoir plus\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Lancez des benchmarks en local. Configurations personnalisées et CI.\nproducts-grid-cli-price = Gratuit\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.\nproducts-grid-cloud-price = 29 €/mois\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise avec SSO, journaux d'audit, SLA et support dédié.\nproducts-grid-enterprise-price = Nous contacter\nproducts-grid-migration-name = Assistant de migration\nproducts-grid-migration-desc = Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.\nproducts-grid-migration-price = 99 € (unique)\nproducts-grid-qa-name = QA des traductions\nproducts-grid-qa-desc = Contrôles automatiques : clés manquantes, pluriels, contexte.\nproducts-grid-qa-price = 19 €/mois\nproducts-grid-optimizer-name = Optimiseur de bundle\nproducts-grid-optimizer-desc = Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).\nproducts-grid-optimizer-price = 49 €/mois\nsettings-header-title = Paramètres\nsettings-header-description = Gérez les préférences et la configuration de votre compte.\nsettings-profile-title = Profil\nsettings-profile-display-name = Nom affiché\nsettings-profile-email = E-mail\nsettings-preferences-title = Préférences\nsettings-preferences-email-notifications = Notifications e-mail\nsettings-preferences-weekly-reports = Recevoir les rapports hebdomadaires\nsettings-preferences-toggle-notifications = Activer/désactiver les notifications\nsettings-preferences-dark-mode = Mode sombre\nsettings-preferences-dark-color-scheme = Utiliser le thème sombre\nsettings-preferences-toggle-dark-mode = Basculer le mode sombre\nsettings-preferences-default-language = Langue par défaut\nsettings-preferences-english = Anglais (en)\nsettings-preferences-french = Français (fr)\nsettings-preferences-german = Allemand (de)\nsettings-preferences-spanish = Espagnol (es)\nsettings-preferences-japanese = Japonais (ja)\nsettings-preferences-chinese = Chinois simplifié (zh-CN)\nsettings-preferences-arabic = Arabe (ar)\nsettings-api-access-title = Accès API\nsettings-api-access-api-key = Clé API\nsettings-api-access-copy = Copier\nsettings-api-access-description = Utilisez cette clé pour appeler l'API de benchmark par programmation.\nsettings-footer-cancel = Annuler\nsettings-footer-save-changes = Enregistrer\nteam-header-title = Notre équipe\nteam-header-description = Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fondatrice & lead ingénieur\nteam-grid-member1-bio = Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingénieur performance\nteam-grid-member2-bio = Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer advocate\nteam-grid-member3-bio = Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Développeur full-stack\nteam-grid-member4-bio = Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analyste de données\nteam-grid-member5-bio = Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community manager\nteam-grid-member6-bio = Contributions communautaires, partenariats et événements — gouvernance open source.\nnot-found-title = 404\nnot-found-description = Oups ! Page introuvable\nnot-found-return-home = Retour à l'accueil\n";
var it_default = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Vai su GitHub\nheader-home = Home\nheader-methodology = Metodologia\nheader-mock-pages = Pagine di test\nheader-products = Prodotti\nheader-pricing = Prezzi\nheader-team = Team\nheader-blog = Blog\nheader-careers = Carriere\nheader-faq = FAQ\nheader-contact = Contatti\nheader-settings = Impostazioni\nfooter-title = i18n Benchmark\nfooter-description = Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.\nfooter-resources = Risorse\nfooter-github = GitHub\nfooter-methodology = Metodologia\nfooter-contributing = Contribuire\nfooter-contact = Contatti\nfooter-built-with = i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.\ntheme-toggle-auto = Tema: Auto\ntheme-toggle-dark = Tema: Scuro\ntheme-toggle-light = Tema: Chiaro\ntheme-toggle-label-auto = Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.\ntheme-toggle-label-other = Modalità tema: {mode}. Clicca per cambiare modalità.\nmock-banner = ⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.\nhome-hero-view-results = Visualizza i risultati\nhome-hero-methodology = Metodologia\nhome-why-it-matters-title = Perché queste metriche sono importanti\nhome-why-it-matters-bundle-size-title = Dimensione del bundle\nhome-why-it-matters-bundle-size-desc = Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\nhome-why-it-matters-rendering-title = Rendering e idratazione\nhome-why-it-matters-rendering-desc = Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Caricamento dinamico\nhome-why-it-matters-dynamic-loading-desc = Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\nhome-understanding-impact-title = Capire l'impatto\nhome-understanding-impact-single-json-title = Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\nhome-understanding-impact-single-json-intro = Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\nhome-understanding-impact-single-json-bullet1 = Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.\nhome-understanding-impact-single-json-bullet2 = Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\nhome-understanding-impact-single-json-bullet3 = Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.\nhome-understanding-impact-trade-offs-title = I compromessi del caricamento dinamico\nhome-understanding-impact-trade-offs-intro = La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\nhome-understanding-impact-waterfall-label = Richieste a cascata:\nhome-understanding-impact-waterfall-desc = l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.\nhome-understanding-impact-fouc-label = Flash di contenuti non tradotti (FOUC):\nhome-understanding-impact-fouc-desc = gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\nhome-understanding-impact-cache-label = Invalidazione della cache:\nhome-understanding-impact-cache-desc = l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.\nhome-understanding-impact-measures-title = Cosa misura questo benchmark\nhome-understanding-impact-measures-desc = Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\nhome-results-table-title = Risultati di esempio\nhome-results-table-library = Libreria\nhome-results-table-bundle-size = Dimensione del bundle\nhome-results-table-lookup-time = Tempo di ricerca\nhome-results-table-lazy-loading = Caricamento lazy\nhome-results-table-yes = Sì\nhome-results-table-manual = Manuale\nhome-results-table-built-in = Integrato\nabout-header-title = Informazioni su questo benchmark\nabout-header-description = Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.\nabout-grid-why-exists-title = Perché esiste\nabout-grid-why-exists-desc = Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\nabout-grid-methodology-title = Metodologia\nabout-grid-methodology-desc = La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\nabout-what-we-measure-title = Cosa misuriamo\nabout-what-we-measure-bundle-size-impact = Impatto sulla dimensione del bundle\nabout-what-we-measure-bundle-size-impact-desc = I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.\nabout-what-we-measure-rendering-overhead = Sovrapprezzo di rendering\nabout-what-we-measure-rendering-overhead-desc = Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\nabout-what-we-measure-hydration-cost = Costo di idratazione\nabout-what-we-measure-hydration-cost-desc = Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.\nabout-what-we-measure-lazy-loading = Efficacia del caricamento pigro\nabout-what-we-measure-lazy-loading-desc = Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).\nabout-what-we-measure-locale-switch = Velocità di cambio lingua\nabout-what-we-measure-locale-switch-desc = Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.\nblog-header-title = Blog\nblog-header-description = Approfondimenti, tutorial e analisi dalla comunità i18n.\nblog-list-read-more = Leggi di più →\nblog-list-post1-title = Confronto delle librerie i18n nel 2026: un'analisi approfondita\nblog-list-post1-date = 15 marzo 2026\nblog-list-post1-excerpt = Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Come ridurre il bundle i18n del 60%\nblog-list-post2-date = 8 marzo 2026\nblog-list-post2-excerpt = Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = Lo stato dell'internazionalizzazione in React\nblog-list-post3-date = 28 febbraio 2026\nblog-list-post3-excerpt = Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\nblog-list-post3-category = Analisi\nblog-list-post4-title = Migrazione da react-i18next a Lingui\nblog-list-post4-date = 15 febbraio 2026\nblog-list-post4-excerpt = Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: cosa cambia?\nblog-list-post5-date = 1 febbraio 2026\nblog-list-post5-excerpt = I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\nblog-list-post5-category = Analisi\nblog-list-post6-title = Metodologia del benchmark: come testiamo\nblog-list-post6-date = 20 gennaio 2026\nblog-list-post6-excerpt = Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.\nblog-list-post6-category = Meta\ncareers-header-title = Carriere\ncareers-header-description = Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Lavora da qualsiasi parte del mondo\ncareers-benefits-pay-label = Retribuzione competitiva\ncareers-benefits-pay-value = Compensazione ai vertici del mercato\ncareers-benefits-oss-label = Tempo per l'open source\ncareers-benefits-oss-value = 20% del tempo per contributi open source\ncareers-open-positions-title = Posizioni aperte\ncareers-open-positions-apply-now = Candidati ora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tempo pieno\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentazione\ncareers-open-positions-community = Comunità\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Ingegnere Frontend Senior\ncareers-open-positions-frontend-desc = Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.\ncareers-open-positions-writer-title = Scrittore tecnico\ncareers-open-positions-writer-desc = Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\ncareers-open-positions-devrel-title = Ingegnere DevRel\ncareers-open-positions-devrel-desc = Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.\ncareers-open-positions-qa-title = Ingegnere QA\ncareers-open-positions-qa-desc = Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\ncontact-header-title = Contattaci\ncontact-header-description = Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo\ncontact-form-name = Nome\ncontact-form-your-name = Il tuo nome\ncontact-form-email = Email\ncontact-form-email-placeholder = tu@esempio.com\ncontact-form-topic = Argomento\ncontact-form-bug-report = Segnalazione bug\ncontact-form-new-benchmark-idea = Nuova idea di benchmark\ncontact-form-methodology-question = Domanda sulla metodologia\ncontact-form-contribution = Contributo\ncontact-form-other = Altro\ncontact-form-message = Messaggio\ncontact-form-message-placeholder = Descrivi la tua domanda o idea...\ncontact-form-send-message = Invia messaggio\nfaq-header-title = Domande frequenti\nfaq-header-description = Tutto quello che c'è da sapere su i18n Benchmark.\nfaq-list-q1 = Cos'è i18n Benchmark?\nfaq-list-a1 = i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.\nfaq-list-q2 = Come vengono condotti i benchmark?\nfaq-list-a2 = Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.\nfaq-list-q3 = Quali librerie sono attualmente supportate?\nfaq-list-a3 = Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\nfaq-list-q4 = Posso inviare i miei benchmark?\nfaq-list-a4 = Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.\nfaq-list-q5 = Con quale frequenza vengono aggiornati i benchmark?\nfaq-list-a5 = Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.\nfaq-list-q6 = I dati sono affidabili?\nfaq-list-a6 = Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.\nfaq-list-q7 = Offrite servizi di consulenza?\nfaq-list-a7 = Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.\nfaq-list-q8 = Come posso contribuire?\nfaq-list-a8 = Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\npricing-header-title = Prezzi semplici e trasparenti\npricing-header-description = Scegli il piano più adatto al tuo team. Nessun costo nascosto.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = per sempre\npricing-tiers-starter-feature1 = 5 esecuzioni benchmark al giorno\npricing-tiers-starter-feature2 = 3 librerie\npricing-tiers-starter-feature3 = Supporto della comunità\npricing-tiers-starter-feature4 = Risultati pubblici\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mese\npricing-tiers-pro-feature1 = Esecuzioni illimitate\npricing-tiers-pro-feature2 = Tutte le librerie\npricing-tiers-pro-feature3 = Supporto prioritario\npricing-tiers-pro-feature4 = Risultati privati\npricing-tiers-pro-feature5 = Integrazione CI\npricing-tiers-pro-feature6 = Dati storici\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizzato\npricing-tiers-enterprise-feature1 = Tutto quello che c'è in Pro\npricing-tiers-enterprise-feature2 = Opzione on-premise\npricing-tiers-enterprise-feature3 = SSO e SAML\npricing-tiers-enterprise-feature4 = Account manager dedicato\npricing-tiers-enterprise-feature5 = SLA personalizzati\npricing-tiers-enterprise-feature6 = Log di controllo\npricing-tiers-enterprise-feature7 = Sessioni di formazione\npricing-tiers-contact-sales = Contatta l'ufficio vendite\npricing-tiers-get-started = Inizia ora\nproducts-header-title = Prodotti\nproducts-header-description = Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.\nproducts-grid-learn-more = Scopri di più\nproducts-grid-cli-name = CLI del Benchmark\nproducts-grid-cli-desc = Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\nproducts-grid-cli-price = Gratis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.\nproducts-grid-cloud-price = 29 $/mese\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.\nproducts-grid-enterprise-price = Contattaci\nproducts-grid-migration-name = Assistente alla migrazione\nproducts-grid-migration-desc = Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.\nproducts-grid-migration-price = 99 $ una tantum\nproducts-grid-qa-name = QA delle traduzioni\nproducts-grid-qa-desc = Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\nproducts-grid-qa-price = 19 $/mese\nproducts-grid-optimizer-name = Ottimizzatore del bundle\nproducts-grid-optimizer-desc = Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\nproducts-grid-optimizer-price = 49 $/mese\nsettings-header-title = Impostazioni\nsettings-header-description = Gestisci le preferenze del tuo account e la configurazione.\nsettings-profile-title = Profilo\nsettings-profile-display-name = Nome visualizzato\nsettings-profile-email = Email\nsettings-preferences-title = Preferenze\nsettings-preferences-email-notifications = Notifiche via email\nsettings-preferences-weekly-reports = Ricevi rapporti settimanali sui benchmark\nsettings-preferences-toggle-notifications = Attiva/disattiva notifiche\nsettings-preferences-dark-mode = Modalità scura\nsettings-preferences-dark-color-scheme = Usa lo schema colori scuro\nsettings-preferences-toggle-dark-mode = Attiva/disattiva modalità scura\nsettings-preferences-default-language = Lingua predefinita\nsettings-preferences-english = Inglese (en)\nsettings-preferences-french = Francese (fr)\nsettings-preferences-german = Tedesco (de)\nsettings-preferences-spanish = Spagnolo (es)\nsettings-preferences-japanese = Giapponese (ja)\nsettings-preferences-chinese = Cinese semplificato (zh-CN)\nsettings-preferences-arabic = Arabo (ar)\nsettings-api-access-title = Accesso API\nsettings-api-access-api-key = Chiave API\nsettings-api-access-copy = Copia\nsettings-api-access-description = Usa questa chiave per accedere programmaticamente alle API di benchmarking.\nsettings-footer-cancel = Annulla\nsettings-footer-save-changes = Salva modifiche\nteam-header-title = Il nostro team\nteam-header-description = Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fondatrice e Responsabile tecnico\nteam-grid-member1-bio = Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Ingegnere delle prestazioni\nteam-grid-member2-bio = Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Sviluppatore Full-Stack\nteam-grid-member4-bio = Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista dati\nteam-grid-member5-bio = Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Responsable della comunità\nteam-grid-member6-bio = Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\nnot-found-title = 404\nnot-found-description = Ops! Pagina non trovata\nnot-found-return-home = Torna alla Home\n";
var ja_default = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = GitHubへ\nheader-home = ホーム\nheader-methodology = 手法\nheader-mock-pages = テストページ\nheader-products = 製品\nheader-pricing = 価格\nheader-team = チーム\nheader-blog = ブログ\nheader-careers = 採用情報\nheader-faq = FAQ\nheader-contact = お問い合わせ\nheader-settings = 設定\nfooter-title = i18n Benchmark\nfooter-description = 国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。\nfooter-resources = リソース\nfooter-github = GitHub\nfooter-methodology = 手法\nfooter-contributing = 貢献する\nfooter-contact = お問い合わせ\nfooter-built-with = i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。\ntheme-toggle-auto = テーマ：自動\ntheme-toggle-dark = テーマ：ダーク\ntheme-toggle-light = テーマ：ライト\ntheme-toggle-label-auto = テーマモード：自動（システム）。クリックするとライトモードに切り替わります。\ntheme-toggle-label-other = テーマモード：{mode}。クリックしてモードを切り替えます。\nmock-banner = ⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。\nhome-hero-title = i18n Benchmark\nhome-hero-description = 国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。\nhome-hero-view-results = 結果を見る\nhome-hero-methodology = 手法\nhome-why-it-matters-title = なぜこれらの指標が重要なのか\nhome-why-it-matters-bundle-size-title = バンドルサイズ\nhome-why-it-matters-bundle-size-desc = バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。\nhome-why-it-matters-rendering-title = レンダリングとハイドレーション\nhome-why-it-matters-rendering-desc = 巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。\nhome-why-it-matters-dynamic-loading-title = 動的読み込み\nhome-why-it-matters-dynamic-loading-desc = すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。\nhome-understanding-impact-title = 影響を理解する\nhome-understanding-impact-single-json-title = なぜ1つの大きなJSONがパフォーマンスを低下させるのか\nhome-understanding-impact-single-json-intro = 多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\nhome-understanding-impact-single-json-bullet1 = ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。\nhome-understanding-impact-single-json-bullet2 = コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。\nhome-understanding-impact-single-json-bullet3 = サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\nhome-understanding-impact-trade-offs-title = 動的読み込みのトレードオフ\nhome-understanding-impact-trade-offs-intro = 翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：\nhome-understanding-impact-waterfall-label = ウォーターフォールリクエスト：\nhome-understanding-impact-waterfall-desc = アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\nhome-understanding-impact-fouc-label = 翻訳されていないコンテンツのフラッシュ (FOUC)：\nhome-understanding-impact-fouc-desc = チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。\nhome-understanding-impact-cache-label = キャッシュの無効化：\nhome-understanding-impact-cache-desc = 翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。\nhome-understanding-impact-measures-title = このベンチマークが測定するもの\nhome-understanding-impact-measures-desc = このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\nhome-results-table-title = サンプル結果\nhome-results-table-library = ライブラリ\nhome-results-table-bundle-size = バンドルサイズ\nhome-results-table-lookup-time = ルックアップ時間\nhome-results-table-lazy-loading = 遅延読み込み\nhome-results-table-yes = はい\nhome-results-table-manual = 手動\nhome-results-table-built-in = 内蔵\nabout-header-title = このベンチマークについて\nabout-header-description = これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。\nabout-grid-why-exists-title = なぜこれが存在するのか\nabout-grid-why-exists-desc = i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。\nabout-grid-methodology-title = 手法\nabout-grid-methodology-desc = 同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。\nabout-what-we-measure-title = 測定項目\nabout-what-we-measure-bundle-size-impact = バンドルサイズへの影響\nabout-what-we-measure-bundle-size-impact-desc = i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。\nabout-what-we-measure-rendering-overhead = レンダリングのオーバーヘッド\nabout-what-we-measure-rendering-overhead-desc = ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\nabout-what-we-measure-hydration-cost = ハイドレーションコスト\nabout-what-we-measure-hydration-cost-desc = SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。\nabout-what-we-measure-lazy-loading = 遅延読み込みの有効性\nabout-what-we-measure-lazy-loading-desc = ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。\nabout-what-we-measure-locale-switch = ロケール切り替え速度\nabout-what-we-measure-locale-switch-desc = 実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\nblog-header-title = ブログ\nblog-header-description = i18nコミュニティからのインサイト、チュートリアル、分析。\nblog-list-read-more = 続きを読む →\nblog-list-post1-title = 2026年のi18nライブラリ比較：ディープダイブ\nblog-list-post1-date = 2026年3月15日\nblog-list-post1-excerpt = パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\nblog-list-post1-category = ベンチマーク\nblog-list-post2-title = i18nバンドルを60%削減する方法\nblog-list-post2-date = 2026年3月8日\nblog-list-post2-excerpt = 遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。\nblog-list-post2-category = チュートリアル\nblog-list-post3-title = Reactにおける国際化の現状\nblog-list-post3-date = 2026年2月28日\nblog-list-post3-excerpt = トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。\nblog-list-post3-category = 分析\nblog-list-post4-title = react-i18nextからLinguiへの移行\nblog-list-post4-date = 2026年2月15日\nblog-list-post4-excerpt = 50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\nblog-list-post4-category = チュートリアル\nblog-list-post5-title = Server Componentsとi18n：何が変わるのか？\nblog-list-post5-date = 2026年2月1日\nblog-list-post5-excerpt = React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\nblog-list-post5-category = 分析\nblog-list-post6-title = ベンチマーク手法：テスト方法について\nblog-list-post6-date = 2026年1月20日\nblog-list-post6-excerpt = テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。\nblog-list-post6-category = メタ\ncareers-header-title = 採用情報\ncareers-header-description = 国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。\ncareers-benefits-remote-label = リモートファースト\ncareers-benefits-remote-value = 世界中のどこからでも仕事ができます\ncareers-benefits-pay-label = 競争力のある給与\ncareers-benefits-pay-value = 市場トップクラスの報酬\ncareers-benefits-oss-label = オープンソースの時間\ncareers-benefits-oss-value = 時間の20%をOSSへの貢献に\ncareers-open-positions-title = 募集中の職種\ncareers-open-positions-apply-now = 今すぐ応募\ncareers-open-positions-remote = リモート\ncareers-open-positions-full-time = フルタイム\ncareers-open-positions-part-time = パートタイム\ncareers-open-positions-engineering = エンジニアリング\ncareers-open-positions-documentation = ドキュメンテーション\ncareers-open-positions-community = コミュニティ\ncareers-open-positions-sf-remote = サンフランシスコ / リモート\ncareers-open-positions-frontend-title = シニアフロントエンドエンジニア\ncareers-open-positions-frontend-desc = React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。\ncareers-open-positions-backend-title = バックエンドエンジニア\ncareers-open-positions-backend-desc = 毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。\ncareers-open-positions-writer-title = テクニカルライター\ncareers-open-positions-writer-desc = ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。\ncareers-open-positions-devrel-title = DevRelエンジニア\ncareers-open-positions-devrel-desc = トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。\ncareers-open-positions-qa-title = QAエンジニア\ncareers-open-positions-qa-desc = 厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\ncontact-header-title = お問い合わせ\ncontact-header-description = アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：\ncontact-form-name = 名前\ncontact-form-your-name = お名前\ncontact-form-email = メールアドレス\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = トピック\ncontact-form-bug-report = バグ報告\ncontact-form-new-benchmark-idea = 新しいベンチマークのアイデア\ncontact-form-methodology-question = 手法に関する質問\ncontact-form-contribution = 貢献\ncontact-form-other = その他\ncontact-form-message = メッセージ\ncontact-form-message-placeholder = ご質問やアイデアを記入してください...\ncontact-form-send-message = メッセージを送信\nfaq-header-title = よくある質問\nfaq-header-description = i18n Benchmarkについて知っておくべきすべてのこと。\nfaq-list-q1 = i18n Benchmarkとは何ですか？\nfaq-list-a1 = i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。\nfaq-list-q2 = ベンチマークはどのように実施されますか？\nfaq-list-a2 = 一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\nfaq-list-q3 = 現在サポートされているライブラリは何ですか？\nfaq-list-a3 = react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。\nfaq-list-q4 = 自分のベンチマークを投稿できますか？\nfaq-list-a4 = はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。\nfaq-list-q5 = ベンチマークはどのくらいの頻度で更新されますか？\nfaq-list-a5 = 各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。\nfaq-list-q6 = データは信頼できますか？\nfaq-list-a6 = ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。\nfaq-list-q7 = コンサルティングサービスは提供していますか？\nfaq-list-a7 = はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\nfaq-list-q8 = どのように貢献できますか？\nfaq-list-a8 = 貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。\npricing-header-title = シンプルで透明性の高い価格設定\npricing-header-description = チームに合ったプランをお選びください。隠れた費用はありません。\npricing-tiers-starter-name = スターター\npricing-tiers-starter-price = 0円\npricing-tiers-starter-period = ずっと無料\npricing-tiers-starter-feature1 = 1日あたり5回のベンチマーク実行\npricing-tiers-starter-feature2 = 3ライブラリ\npricing-tiers-starter-feature3 = コミュニティサポート\npricing-tiers-starter-feature4 = 公開結果\npricing-tiers-pro-name = プロ\npricing-tiers-pro-price = 29ドル\npricing-tiers-pro-period = /月\npricing-tiers-pro-feature1 = 無制限の実行\npricing-tiers-pro-feature2 = すべてのライブラリ\npricing-tiers-pro-feature3 = 優先サポート\npricing-tiers-pro-feature4 = 非公開の結果\npricing-tiers-pro-feature5 = CI統合\npricing-tiers-pro-feature6 = 履歴データ\npricing-tiers-enterprise-name = エンタープライズ\npricing-tiers-enterprise-price = カスタム\npricing-tiers-enterprise-feature1 = Proプランのすべてを含む\npricing-tiers-enterprise-feature2 = オンプレミスオプション\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = 専任のアカウントマネージャー\npricing-tiers-enterprise-feature5 = カスタムSLA\npricing-tiers-enterprise-feature6 = 監査ログ\npricing-tiers-enterprise-feature7 = トレーニングセッション\npricing-tiers-contact-sales = 営業に問い合わせる\npricing-tiers-get-started = 始める\nproducts-header-title = 製品\nproducts-header-description = 国際化ワークフローを効率化するためのツールとサービス。\nproducts-grid-learn-more = 詳細はこちら\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。\nproducts-grid-cli-price = 無料\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = 履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。\nproducts-grid-cloud-price = 29ドル/月\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。\nproducts-grid-enterprise-price = お問い合わせ\nproducts-grid-migration-name = 移行アシスタント\nproducts-grid-migration-desc = ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。\nproducts-grid-migration-price = 99ドル（一回限り）\nproducts-grid-qa-name = 翻訳QA\nproducts-grid-qa-desc = 翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。\nproducts-grid-qa-price = 19ドル/月\nproducts-grid-optimizer-name = バンドルオプティマイザー\nproducts-grid-optimizer-desc = ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。\nproducts-grid-optimizer-price = 49ドル/月\nsettings-header-title = 設定\nsettings-header-description = アカウント設定と構成を管理します。\nsettings-profile-title = プロフィール\nsettings-profile-display-name = 表示名\nsettings-profile-email = メールアドレス\nsettings-preferences-title = 設定\nsettings-preferences-email-notifications = メール通知\nsettings-preferences-weekly-reports = 毎週のベンチマークレポートを受け取る\nsettings-preferences-toggle-notifications = 通知の切り替え\nsettings-preferences-dark-mode = ダークモード\nsettings-preferences-dark-color-scheme = ダークカラー（暗い配色）を使用する\nsettings-preferences-toggle-dark-mode = ダークモードの切り替え\nsettings-preferences-default-language = デフォルトの言語\nsettings-preferences-english = 英語 (en)\nsettings-preferences-french = フランス語 (fr)\nsettings-preferences-german = ドイツ語 (de)\nsettings-preferences-spanish = スペイン語 (es)\nsettings-preferences-japanese = 日本語 (ja)\nsettings-preferences-chinese = 中国語（簡体字） (zh-CN)\nsettings-preferences-arabic = アラビア語 (ar)\nsettings-api-access-title = APIアクセス\nsettings-api-access-api-key = APIキー\nsettings-api-access-copy = コピー\nsettings-api-access-description = このキーを使用して、プログラムでベンチマークAPIにアクセスします。\nsettings-footer-cancel = キャンセル\nsettings-footer-save-changes = 変更を保存\nteam-header-title = 私たちのチーム\nteam-header-description = i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = 創設者 & リードエンジニア\nteam-grid-member1-bio = 大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = パフォーマンスエンジニア\nteam-grid-member2-bio = JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = 開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = フルスタックデベロッパー\nteam-grid-member4-bio = ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = データアナリスト\nteam-grid-member5-bio = すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = コミュニティマネージャー\nteam-grid-member6-bio = コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。\nnot-found-title = 404\nnot-found-description = おっと！ページが見つかりません\nnot-found-return-home = ホームに戻る\n";
var ko_default = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Go to GitHub\nheader-home = Home\nheader-methodology = Methodology\nheader-mock-pages = Mock Pages\nheader-products = Products\nheader-pricing = Pricing\nheader-team = Team\nheader-blog = Blog\nheader-careers = Careers\nheader-faq = FAQ\nheader-contact = Contact\nheader-settings = Settings\nfooter-title = i18n Benchmark\nfooter-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\nfooter-resources = Resources\nfooter-github = GitHub\nfooter-methodology = Methodology\nfooter-contributing = Contributing\nfooter-contact = Contact\nfooter-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.\ntheme-toggle-auto = Theme: Auto\ntheme-toggle-dark = Theme: Dark\ntheme-toggle-light = Theme: Light\ntheme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.\ntheme-toggle-label-other = Theme mode: {mode}. Click to switch mode.\nmock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\nhome-hero-title = i18n Benchmark\nhome-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\nhome-hero-view-results = View Results\nhome-hero-methodology = Methodology\nhome-why-it-matters-title = Why These Metrics Matter\nhome-why-it-matters-bundle-size-title = Bundle Size\nhome-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\nhome-why-it-matters-rendering-title = Rendering & Hydration\nhome-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Dynamic Loading\nhome-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\nhome-understanding-impact-title = Understanding the Impact\nhome-understanding-impact-single-json-title = Why a single large JSON can hurt performance\nhome-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\nhome-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.\nhome-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\nhome-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\nhome-understanding-impact-trade-offs-title = The trade-offs of dynamic loading\nhome-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\nhome-understanding-impact-waterfall-label = Waterfall requests:\nhome-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\nhome-understanding-impact-fouc-label = Flash of untranslated content (FOUC):\nhome-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.\nhome-understanding-impact-cache-label = Cache invalidation:\nhome-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\nhome-understanding-impact-measures-title = What this benchmark measures\nhome-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\nhome-results-table-title = Sample Results\nhome-results-table-library = Library\nhome-results-table-bundle-size = Bundle Size\nhome-results-table-lookup-time = Lookup Time\nhome-results-table-lazy-loading = Lazy Loading\nhome-results-table-yes = Yes\nhome-results-table-manual = Manual\nhome-results-table-built-in = Built-in\nabout-header-title = About This Benchmark\nabout-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\nabout-grid-why-exists-title = Why This Exists\nabout-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\nabout-grid-methodology-title = Methodology\nabout-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\nabout-what-we-measure-title = What We Measure\nabout-what-we-measure-bundle-size-impact = Bundle size impact\nabout-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\nabout-what-we-measure-rendering-overhead = Rendering overhead\nabout-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\nabout-what-we-measure-hydration-cost = Hydration cost\nabout-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\nabout-what-we-measure-lazy-loading = Lazy loading effectiveness\nabout-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\nabout-what-we-measure-locale-switch = Locale switch speed\nabout-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutorials, and analysis from the i18n community.\nblog-list-read-more = Read More →\nblog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive\nblog-list-post1-date = March 15, 2026\nblog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = How to Reduce Your i18n Bundle by 60%\nblog-list-post2-date = March 8, 2026\nblog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = The State of Internationalization in React\nblog-list-post3-date = February 28, 2026\nblog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\nblog-list-post3-category = Analysis\nblog-list-post4-title = Migrating from react-i18next to Lingui\nblog-list-post4-date = February 15, 2026\nblog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components and i18n: What Changes?\nblog-list-post5-date = February 1, 2026\nblog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\nblog-list-post5-category = Analysis\nblog-list-post6-title = Benchmark Methodology: How We Test\nblog-list-post6-date = January 20, 2026\nblog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\nblog-list-post6-category = Meta\ncareers-header-title = Careers\ncareers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\ncareers-benefits-remote-label = Remote-first\ncareers-benefits-remote-value = Work from anywhere in the world\ncareers-benefits-pay-label = Competitive pay\ncareers-benefits-pay-value = Top-of-market compensation\ncareers-benefits-oss-label = Open source time\ncareers-benefits-oss-value = 20% time for OSS contributions\ncareers-open-positions-title = Open Positions\ncareers-open-positions-apply-now = Apply Now\ncareers-open-positions-remote = Remote\ncareers-open-positions-full-time = Full-time\ncareers-open-positions-part-time = Part-time\ncareers-open-positions-engineering = Engineering\ncareers-open-positions-documentation = Documentation\ncareers-open-positions-community = Community\ncareers-open-positions-sf-remote = San Francisco / Remote\ncareers-open-positions-frontend-title = Senior Frontend Engineer\ncareers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\ncareers-open-positions-backend-title = Backend Engineer\ncareers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\ncareers-open-positions-writer-title = Technical Writer\ncareers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.\ncareers-open-positions-devrel-title = DevRel Engineer\ncareers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\ncareers-open-positions-qa-title = QA Engineer\ncareers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\ncontact-header-title = Get in Touch\ncontact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\ncontact-form-name = Name\ncontact-form-your-name = Your name\ncontact-form-email = Email\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Topic\ncontact-form-bug-report = Bug Report\ncontact-form-new-benchmark-idea = New Benchmark Idea\ncontact-form-methodology-question = Methodology Question\ncontact-form-contribution = Contribution\ncontact-form-other = Other\ncontact-form-message = Message\ncontact-form-message-placeholder = Describe your question or idea...\ncontact-form-send-message = Send Message\nfaq-header-title = Frequently Asked Questions\nfaq-header-description = Everything you need to know about i18n Benchmark.\nfaq-list-q1 = What is i18n Benchmark?\nfaq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\nfaq-list-q2 = How are benchmarks conducted?\nfaq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\nfaq-list-q3 = Which libraries are currently supported?\nfaq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\nfaq-list-q4 = Can I submit my own benchmarks?\nfaq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\nfaq-list-q5 = How often are benchmarks updated?\nfaq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\nfaq-list-q6 = Is the data reliable?\nfaq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\nfaq-list-q7 = Do you offer consulting services?\nfaq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\nfaq-list-q8 = How can I contribute?\nfaq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\npricing-header-title = Simple, Transparent Pricing\npricing-header-description = Choose the plan that fits your team. No hidden fees.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = $0\npricing-tiers-starter-period = forever\npricing-tiers-starter-feature1 = 5 benchmark runs/day\npricing-tiers-starter-feature2 = 3 libraries\npricing-tiers-starter-feature3 = Community support\npricing-tiers-starter-feature4 = Public results\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = $29\npricing-tiers-pro-period = /month\npricing-tiers-pro-feature1 = Unlimited runs\npricing-tiers-pro-feature2 = All libraries\npricing-tiers-pro-feature3 = Priority support\npricing-tiers-pro-feature4 = Private results\npricing-tiers-pro-feature5 = CI integration\npricing-tiers-pro-feature6 = Historical data\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Custom\npricing-tiers-enterprise-feature1 = Everything in Pro\npricing-tiers-enterprise-feature2 = On-premise option\npricing-tiers-enterprise-feature3 = SSO & SAML\npricing-tiers-enterprise-feature4 = Dedicated account manager\npricing-tiers-enterprise-feature5 = Custom SLAs\npricing-tiers-enterprise-feature6 = Audit logs\npricing-tiers-enterprise-feature7 = Training sessions\npricing-tiers-contact-sales = Contact Sales\npricing-tiers-get-started = Get Started\nproducts-header-title = Products\nproducts-header-description = Tools and services to streamline your internationalization workflow.\nproducts-grid-learn-more = Learn More\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\nproducts-grid-cli-price = Free\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\nproducts-grid-cloud-price = $29/mo\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\nproducts-grid-enterprise-price = Contact Us\nproducts-grid-migration-name = Migration Assistant\nproducts-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\nproducts-grid-migration-price = $99 one-time\nproducts-grid-qa-name = Translation QA\nproducts-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.\nproducts-grid-qa-price = $19/mo\nproducts-grid-optimizer-name = Bundle Optimizer\nproducts-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\nproducts-grid-optimizer-price = $49/mo\nsettings-header-title = Settings\nsettings-header-description = Manage your account preferences and configuration.\nsettings-profile-title = Profile\nsettings-profile-display-name = Display Name\nsettings-profile-email = Email\nsettings-preferences-title = Preferences\nsettings-preferences-email-notifications = Email Notifications\nsettings-preferences-weekly-reports = Receive weekly benchmark reports\nsettings-preferences-toggle-notifications = Toggle notifications\nsettings-preferences-dark-mode = Dark Mode\nsettings-preferences-dark-color-scheme = Use dark color scheme\nsettings-preferences-toggle-dark-mode = Toggle dark mode\nsettings-preferences-default-language = Default Language\nsettings-preferences-english = English (en)\nsettings-preferences-french = French (fr)\nsettings-preferences-german = German (de)\nsettings-preferences-spanish = Spanish (es)\nsettings-preferences-japanese = Japanese (ja)\nsettings-preferences-chinese = Chinese Simplified (zh-CN)\nsettings-preferences-arabic = Arabic (ar)\nsettings-api-access-title = API Access\nsettings-api-access-api-key = API Key\nsettings-api-access-copy = Copy\nsettings-api-access-description = Use this key to access the benchmarking API programmatically.\nsettings-footer-cancel = Cancel\nsettings-footer-save-changes = Save Changes\nteam-header-title = Our Team\nteam-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Founder & Lead Engineer\nteam-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Performance Engineer\nteam-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Full-Stack Developer\nteam-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Data Analyst\nteam-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Community Manager\nteam-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.\nnot-found-title = 404\nnot-found-description = Oops! Page not found\nnot-found-return-home = Return to Home\n";
var pt_default = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Ir para o GitHub\nheader-home = Início\nheader-methodology = Metodologia\nheader-mock-pages = Páginas de Teste\nheader-products = Produtos\nheader-pricing = Preços\nheader-team = Equipe\nheader-blog = Blog\nheader-careers = Carreiras\nheader-faq = FAQ\nheader-contact = Contato\nheader-settings = Configurações\nfooter-title = i18n Benchmark\nfooter-description = Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.\nfooter-resources = Recursos\nfooter-github = GitHub\nfooter-methodology = Metodologia\nfooter-contributing = Contribuindo\nfooter-contact = Contato\nfooter-built-with = i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.\ntheme-toggle-auto = Tema: Automático\ntheme-toggle-dark = Tema: Escuro\ntheme-toggle-light = Tema: Claro\ntheme-toggle-label-auto = Modo de tema: auto (sistema). Clique para mudar para o modo claro.\ntheme-toggle-label-other = Modo de tema: {mode}. Clique para mudar de modo.\nmock-banner = ⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.\nhome-hero-view-results = Ver Resultados\nhome-hero-methodology = Metodologia\nhome-why-it-matters-title = Por que estas métricas importam\nhome-why-it-matters-bundle-size-title = Tamanho do bundle\nhome-why-it-matters-bundle-size-desc = O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.\nhome-why-it-matters-rendering-title = Renderização e hidratação\nhome-why-it-matters-rendering-desc = Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\nhome-why-it-matters-dynamic-loading-title = Carregamento dinâmico\nhome-why-it-matters-dynamic-loading-desc = Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\nhome-understanding-impact-title = Entendendo o impacto\nhome-understanding-impact-single-json-title = Por que um único JSON grande pode prejudicar o desempenho\nhome-understanding-impact-single-json-intro = Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\nhome-understanding-impact-single-json-bullet1 = O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\nhome-understanding-impact-single-json-bullet2 = Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\nhome-understanding-impact-single-json-bullet3 = Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\nhome-understanding-impact-trade-offs-title = Os trade-offs do carregamento dinâmico\nhome-understanding-impact-trade-offs-intro = Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:\nhome-understanding-impact-waterfall-label = Requisições em cascata:\nhome-understanding-impact-waterfall-desc = o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.\nhome-understanding-impact-fouc-label = Flash de conteúdo não traduzido (FOUC):\nhome-understanding-impact-fouc-desc = usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.\nhome-understanding-impact-cache-label = Invalidação de cache:\nhome-understanding-impact-cache-desc = atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.\nhome-understanding-impact-measures-title = O que este benchmark mede\nhome-understanding-impact-measures-desc = Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.\nhome-results-table-title = Resultados de exemplo\nhome-results-table-library = Biblioteca\nhome-results-table-bundle-size = Tamanho do Bundle\nhome-results-table-lookup-time = Tempo de Busca\nhome-results-table-lazy-loading = Carregamento Lento\nhome-results-table-yes = Sim\nhome-results-table-manual = Manual\nhome-results-table-built-in = Integrado\nabout-header-title = Sobre este benchmark\nabout-header-description = Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.\nabout-grid-why-exists-title = Por que isto existe\nabout-grid-why-exists-desc = Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\nabout-grid-methodology-title = Metodologia\nabout-grid-methodology-desc = O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.\nabout-what-we-measure-title = O que medimos\nabout-what-we-measure-bundle-size-impact = Impacto no tamanho do bundle\nabout-what-we-measure-bundle-size-impact-desc = Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\nabout-what-we-measure-rendering-overhead = Sobrecarga de renderização\nabout-what-we-measure-rendering-overhead-desc = Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.\nabout-what-we-measure-hydration-cost = Custo de hidratação\nabout-what-we-measure-hydration-cost-desc = Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.\nabout-what-we-measure-lazy-loading = Eficácia do carregamento lento\nabout-what-we-measure-lazy-loading-desc = Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).\nabout-what-we-measure-locale-switch = Velocidade de troca de localidade\nabout-what-we-measure-locale-switch-desc = Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.\nblog-header-title = Blog\nblog-header-description = Insights, tutoriais e análises da comunidade i18n.\nblog-list-read-more = Ler Mais →\nblog-list-post1-title = Comparando bibliotecas i18n em 2026: um mergulho profundo\nblog-list-post1-date = 15 de março de 2026\nblog-list-post1-excerpt = Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.\nblog-list-post1-category = Benchmark\nblog-list-post2-title = Como reduzir seu bundle i18n em 60%\nblog-list-post2-date = 8 de março de 2026\nblog-list-post2-excerpt = Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.\nblog-list-post2-category = Tutorial\nblog-list-post3-title = O estado da internacionalização no React\nblog-list-post3-date = 28 de fevereiro de 2026\nblog-list-post3-excerpt = Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\nblog-list-post3-category = Análise\nblog-list-post4-title = Migrando de react-i18next para o Lingui\nblog-list-post4-date = 15 de fevereiro de 2026\nblog-list-post4-excerpt = Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\nblog-list-post4-category = Tutorial\nblog-list-post5-title = Server Components e i18n: o que muda?\nblog-list-post5-date = 1 de fevereiro de 2026\nblog-list-post5-excerpt = React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.\nblog-list-post5-category = Análise\nblog-list-post6-title = Metodologia de benchmark: como testamos\nblog-list-post6-date = 20 de janeiro de 2026\nblog-list-post6-excerpt = Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\nblog-list-post6-category = Meta\ncareers-header-title = Carreiras\ncareers-header-description = Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.\ncareers-benefits-remote-label = Remoto primeiro\ncareers-benefits-remote-value = Trabalhe de qualquer lugar do mundo\ncareers-benefits-pay-label = Salário competitivo\ncareers-benefits-pay-value = Remuneração acima do mercado\ncareers-benefits-oss-label = Tempo para o código aberto\ncareers-benefits-oss-value = 20% do tempo para contribuições OSS\ncareers-open-positions-title = Vagas abertas\ncareers-open-positions-apply-now = Candidatar-se agora\ncareers-open-positions-remote = Remoto\ncareers-open-positions-full-time = Tempo integral\ncareers-open-positions-part-time = Tempo parcial\ncareers-open-positions-engineering = Engenharia\ncareers-open-positions-documentation = Documentação\ncareers-open-positions-community = Comunidade\ncareers-open-positions-sf-remote = San Francisco / Remoto\ncareers-open-positions-frontend-title = Engenheiro Frontend Sênior\ncareers-open-positions-frontend-desc = Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\ncareers-open-positions-backend-title = Engenheiro Backend\ncareers-open-positions-backend-desc = Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.\ncareers-open-positions-writer-title = Redator técnico\ncareers-open-positions-writer-desc = Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\ncareers-open-positions-devrel-title = Engenheiro de DevRel\ncareers-open-positions-devrel-desc = Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.\ncareers-open-positions-qa-title = Engenheiro de QA\ncareers-open-positions-qa-desc = Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.\ncontact-header-title = Entre em contato\ncontact-header-description = Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em\ncontact-form-name = Nome\ncontact-form-your-name = Seu nome\ncontact-form-email = E-mail\ncontact-form-email-placeholder = voce@exemplo.com\ncontact-form-topic = Assunto\ncontact-form-bug-report = Relatório de bug\ncontact-form-new-benchmark-idea = Nova ideia de benchmark\ncontact-form-methodology-question = Pergunta sobre metodologia\ncontact-form-contribution = Contribuição\ncontact-form-other = Outro\ncontact-form-message = Mensagem\ncontact-form-message-placeholder = Descreva sua pergunta ou ideia...\ncontact-form-send-message = Enviar mensagem\nfaq-header-title = Perguntas frequentes\nfaq-header-description = Tudo o que você precisa saber sobre o i18n Benchmark.\nfaq-list-q1 = O que é o i18n Benchmark?\nfaq-list-a1 = O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.\nfaq-list-q2 = Como os benchmarks são conduzidos?\nfaq-list-a2 = Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.\nfaq-list-q3 = Quais bibliotecas são suportadas atualmente?\nfaq-list-a3 = Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\nfaq-list-q4 = Posso enviar meus próprios benchmarks?\nfaq-list-a4 = Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\nfaq-list-q5 = Com que frequência os benchmarks são atualizados?\nfaq-list-a5 = Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.\nfaq-list-q6 = Os dados são confiáveis?\nfaq-list-a6 = Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\nfaq-list-q7 = Vocês oferecem serviços de consultoria?\nfaq-list-a7 = Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.\nfaq-list-q8 = Como posso contribuir?\nfaq-list-a8 = Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.\npricing-header-title = Preços simples e transparentes\npricing-header-description = Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = para sempre\npricing-tiers-starter-feature1 = 5 execuções de benchmark/dia\npricing-tiers-starter-feature2 = 3 bibliotecas\npricing-tiers-starter-feature3 = Suporte da comunidade\npricing-tiers-starter-feature4 = Resultados públicos\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /mês\npricing-tiers-pro-feature1 = Execuções ilimitadas\npricing-tiers-pro-feature2 = Todas as bibliotecas\npricing-tiers-pro-feature3 = Suporte prioritário\npricing-tiers-pro-feature4 = Resultados privados\npricing-tiers-pro-feature5 = Integração CI\npricing-tiers-pro-feature6 = Dados históricos\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Personalizado\npricing-tiers-enterprise-feature1 = Tudo o que está no Pro\npricing-tiers-enterprise-feature2 = Opção on-premise\npricing-tiers-enterprise-feature3 = SSO e SAML\npricing-tiers-enterprise-feature4 = Gerente de conta dedicado\npricing-tiers-enterprise-feature5 = SLAs personalizados\npricing-tiers-enterprise-feature6 = Logs de auditoria\npricing-tiers-enterprise-feature7 = Sessões de treinamento\npricing-tiers-contact-sales = Contatar vendas\npricing-tiers-get-started = Começar\nproducts-header-title = Produtos\nproducts-header-description = Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.\nproducts-grid-learn-more = Saiba Mais\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.\nproducts-grid-cli-price = Grátis\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\nproducts-grid-cloud-price = 29 $/mês\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\nproducts-grid-enterprise-price = Contate-nos\nproducts-grid-migration-name = Assistente de migração\nproducts-grid-migration-desc = Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.\nproducts-grid-migration-price = 99 $ taxa única\nproducts-grid-qa-name = QA de tradução\nproducts-grid-qa-desc = Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.\nproducts-grid-qa-price = 19 $/mês\nproducts-grid-optimizer-name = Otimizador de bundle\nproducts-grid-optimizer-desc = Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\nproducts-grid-optimizer-price = 49 $/mês\nsettings-header-title = Configurações\nsettings-header-description = Gerencie suas preferências de conta e configuração.\nsettings-profile-title = Perfil\nsettings-profile-display-name = Nome de exibição\nsettings-profile-email = E-mail\nsettings-preferences-title = Preferências\nsettings-preferences-email-notifications = Notificações por e-mail\nsettings-preferences-weekly-reports = Receber relatórios semanais de benchmarks\nsettings-preferences-toggle-notifications = Alternar notificações\nsettings-preferences-dark-mode = Modo Escuro\nsettings-preferences-dark-color-scheme = Usar esquema de cores escuro\nsettings-preferences-toggle-dark-mode = Alternar modo escuro\nsettings-preferences-default-language = Idioma padrão\nsettings-preferences-english = Inglês (en)\nsettings-preferences-french = Francés (fr)\nsettings-preferences-german = Alemão (de)\nsettings-preferences-spanish = Espanhol (es)\nsettings-preferences-japanese = Japonês (ja)\nsettings-preferences-chinese = Chinês Simplificado (zh-CN)\nsettings-preferences-arabic = Árabe (ar)\nsettings-api-access-title = Acesso API\nsettings-api-access-api-key = Chave API\nsettings-api-access-copy = Copiar\nsettings-api-access-description = Use esta chave para acessar a API de benchmarking programaticamente.\nsettings-footer-cancel = Cancelar\nsettings-footer-save-changes = Salvar alterações\nteam-header-title = Nossa equipe\nteam-header-description = Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = Fundadora e Engenheira Líder\nteam-grid-member1-bio = Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = Engenheiro de performance\nteam-grid-member2-bio = Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = Desenvolvedor Full-Stack\nteam-grid-member4-bio = Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = Analista de dados\nteam-grid-member5-bio = Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = Gerente de comunidade\nteam-grid-member6-bio = Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\nnot-found-title = 404\nnot-found-description = Ops! Página não encontrada\nnot-found-return-home = Voltar para o início\n";
var ru_default = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = Перейти на GitHub\nheader-home = Главная\nheader-methodology = Методология\nheader-mock-pages = Тестовые страницы\nheader-products = Продукты\nheader-pricing = Цены\nheader-team = Команда\nheader-blog = Блог\nheader-careers = Вакансии\nheader-faq = FAQ\nheader-contact = Контакт\nheader-settings = Настройки\nfooter-title = i18n Benchmark\nfooter-description = Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.\nfooter-resources = Ресурсы\nfooter-github = GitHub\nfooter-methodology = Методология\nfooter-contributing = Участие в проекте\nfooter-contact = Контакт\nfooter-built-with = i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.\ntheme-toggle-auto = Тема: Авто\ntheme-toggle-dark = Тема: Темная\ntheme-toggle-light = Тема: Светлая\ntheme-toggle-label-auto = Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.\ntheme-toggle-label-other = Режим темы: {mode}. Нажмите, чтобы сменить режим.\nmock-banner = ⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.\nhome-hero-title = i18n Benchmark\nhome-hero-description = Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.\nhome-hero-view-results = Посмотреть результаты\nhome-hero-methodology = Методология\nhome-why-it-matters-title = Почему эти метрики важны\nhome-why-it-matters-bundle-size-title = Размер бандла\nhome-why-it-matters-bundle-size-desc = Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.\nhome-why-it-matters-rendering-title = Рендеринг и гидратация\nhome-why-it-matters-rendering-desc = Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).\nhome-why-it-matters-dynamic-loading-title = Динамическая загрузка\nhome-why-it-matters-dynamic-loading-desc = Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.\nhome-understanding-impact-title = Понимание влияния\nhome-understanding-impact-single-json-title = Почему один большой JSON может снизить производительность\nhome-understanding-impact-single-json-intro = Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\nhome-understanding-impact-single-json-bullet1 = JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.\nhome-understanding-impact-single-json-bullet2 = Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.\nhome-understanding-impact-single-json-bullet3 = При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.\nhome-understanding-impact-trade-offs-title = Компромиссы динамической загрузки\nhome-understanding-impact-trade-offs-intro = Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:\nhome-understanding-impact-waterfall-label = Каскадные запросы:\nhome-understanding-impact-waterfall-desc = приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.\nhome-understanding-impact-fouc-label = Мерцание непереведенного контента (FOUC):\nhome-understanding-impact-fouc-desc = пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.\nhome-understanding-impact-cache-label = Инвалидация кэша:\nhome-understanding-impact-cache-desc = обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.\nhome-understanding-impact-measures-title = Что измеряет этот бенчмарк\nhome-understanding-impact-measures-desc = Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\nhome-results-table-title = Примеры результатов\nhome-results-table-library = Библиотека\nhome-results-table-bundle-size = Размер бандла\nhome-results-table-lookup-time = Время поиска\nhome-results-table-lazy-loading = Ленивая загрузка\nhome-results-table-yes = Да\nhome-results-table-manual = Вручную\nhome-results-table-built-in = Встроено\nabout-header-title = Об этом бенчмарке\nabout-header-description = Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.\nabout-grid-why-exists-title = Зачем это нужно\nabout-grid-why-exists-desc = Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\nabout-grid-methodology-title = Методология\nabout-grid-methodology-desc = Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.\nabout-what-we-measure-title = Что мы измеряем\nabout-what-we-measure-bundle-size-impact = Влияние на размер бандла\nabout-what-we-measure-bundle-size-impact-desc = Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\nabout-what-we-measure-rendering-overhead = Накладные расходы на рендеринг\nabout-what-we-measure-rendering-overhead-desc = Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.\nabout-what-we-measure-hydration-cost = Стоимость гидратации\nabout-what-we-measure-hydration-cost-desc = Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\nabout-what-we-measure-lazy-loading = Эффективность ленивой загрузки\nabout-what-we-measure-lazy-loading-desc = Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).\nabout-what-we-measure-locale-switch = Скорость переключения языка\nabout-what-we-measure-locale-switch-desc = Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\nblog-header-title = Блог\nblog-header-description = Инсайты, туториалы и аналитика от сообщества i18n.\nblog-list-read-more = Читать далее →\nblog-list-post1-title = Сравнение библиотек i18n в 2026 году: глубокое погружение\nblog-list-post1-date = 15 марта 2026 г.\nblog-list-post1-excerpt = Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\nblog-list-post1-category = Бенчмарк\nblog-list-post2-title = Как уменьшить бандл i18n на 60%\nblog-list-post2-date = 8 марта 2026 г.\nblog-list-post2-excerpt = Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.\nblog-list-post2-category = Туториал\nblog-list-post3-title = Состояние интернационализации в React\nblog-list-post3-date = 28 февраля 2026 г.\nblog-list-post3-excerpt = Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\nblog-list-post3-category = Анализ\nblog-list-post4-title = Миграция с react-i18next на Lingui\nblog-list-post4-date = 15 февраля 2026 г.\nblog-list-post4-excerpt = Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.\nblog-list-post4-category = Туториал\nblog-list-post5-title = Server Components и i18n: что меняется?\nblog-list-post5-date = 1 февраля 2026 г.\nblog-list-post5-excerpt = React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\nblog-list-post5-category = Анализ\nblog-list-post6-title = Методология бенчмарка: как мы тестируем\nblog-list-post6-date = 20 января 2026 г.\nblog-list-post6-excerpt = Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\nblog-list-post6-category = Мета\ncareers-header-title = Вакансии\ncareers-header-description = Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.\ncareers-benefits-remote-label = Удаленная работа\ncareers-benefits-remote-value = Работайте из любой точки мира\ncareers-benefits-pay-label = Конкурентная зарплата\ncareers-benefits-pay-value = Вознаграждение выше рыночного\ncareers-benefits-oss-label = Время на open source\ncareers-benefits-oss-value = 20% времени на вклад в OSS\ncareers-open-positions-title = Открытые вакансии\ncareers-open-positions-apply-now = Подать заявку\ncareers-open-positions-remote = Удаленно\ncareers-open-positions-full-time = Полная занятость\ncareers-open-positions-part-time = Частичная занятость\ncareers-open-positions-engineering = Разработка\ncareers-open-positions-documentation = Документация\ncareers-open-positions-community = Сообщество\ncareers-open-positions-sf-remote = Сан-Франциско / Удаленно\ncareers-open-positions-frontend-title = Старший фронтенд-инженер\ncareers-open-positions-frontend-desc = Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.\ncareers-open-positions-backend-title = Бэкенд-инженер\ncareers-open-positions-backend-desc = Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.\ncareers-open-positions-writer-title = Технический писатель\ncareers-open-positions-writer-desc = Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.\ncareers-open-positions-devrel-title = DevRel-инженер\ncareers-open-positions-devrel-desc = Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.\ncareers-open-positions-qa-title = QA-инженер\ncareers-open-positions-qa-desc = Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.\ncontact-header-title = Связаться с нами\ncontact-header-description = Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу\ncontact-form-name = Имя\ncontact-form-your-name = Ваше имя\ncontact-form-email = Электронная почта\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = Тема\ncontact-form-bug-report = Отчет об ошибке\ncontact-form-new-benchmark-idea = Идея нового бенчмарка\ncontact-form-methodology-question = Вопрос по методологии\ncontact-form-contribution = Вклад в проект\ncontact-form-other = Другое\ncontact-form-message = Сообщение\ncontact-form-message-placeholder = Опишите ваш вопрос или идею...\ncontact-form-send-message = Отправить сообщение\nfaq-header-title = Часто задаваемые вопросы\nfaq-header-description = Все, что вам нужно знать об i18n Benchmark.\nfaq-list-q1 = Что такое i18n Benchmark?\nfaq-list-a1 = i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.\nfaq-list-q2 = Как проводятся бенчмарки?\nfaq-list-a2 = Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.\nfaq-list-q3 = Какие библиотеки поддерживаются в данный момент?\nfaq-list-a3 = Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\nfaq-list-q4 = Могу ли я прислать свои собственные бенчмарки?\nfaq-list-a4 = Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.\nfaq-list-q5 = Как часто обновляются бенчмарки?\nfaq-list-a5 = Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.\nfaq-list-q6 = Можно ли доверять данным?\nfaq-list-a6 = Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.\nfaq-list-q7 = Предоставляете ли вы консалтинговые услуги?\nfaq-list-a7 = Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.\nfaq-list-q8 = Как я могу помочь проекту?\nfaq-list-a8 = Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.\npricing-header-title = Простые и прозрачные цены\npricing-header-description = Выберите подходящий план для вашей команды. Никаких скрытых комиссий.\npricing-tiers-starter-name = Starter\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = навсегда\npricing-tiers-starter-feature1 = 5 запусков бенчмарка в день\npricing-tiers-starter-feature2 = 3 библиотеки\npricing-tiers-starter-feature3 = Поддержка сообщества\npricing-tiers-starter-feature4 = Публичные результаты\npricing-tiers-pro-name = Pro\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /мес\npricing-tiers-pro-feature1 = Неограниченное число запусков\npricing-tiers-pro-feature2 = Все библиотеки\npricing-tiers-pro-feature3 = Приоритетная поддержка\npricing-tiers-pro-feature4 = Приватные результаты\npricing-tiers-pro-feature5 = Интеграция с CI\npricing-tiers-pro-feature6 = Исторические данные\npricing-tiers-enterprise-name = Enterprise\npricing-tiers-enterprise-price = Индивидуально\npricing-tiers-enterprise-feature1 = Все, что есть в Pro\npricing-tiers-enterprise-feature2 = Локальная установка\npricing-tiers-enterprise-feature3 = SSO и SAML\npricing-tiers-enterprise-feature4 = Персональный менеджер\npricing-tiers-enterprise-feature5 = Индивидуальные SLA\npricing-tiers-enterprise-feature6 = Журналы аудита\npricing-tiers-enterprise-feature7 = Обучающие сессии\npricing-tiers-contact-sales = Связаться с отделом продаж\npricing-tiers-get-started = Начать работу\nproducts-header-title = Продукты\nproducts-header-description = Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.\nproducts-grid-learn-more = Узнать больше\nproducts-grid-cli-name = Benchmark CLI\nproducts-grid-cli-desc = Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.\nproducts-grid-cli-price = Бесплатно\nproducts-grid-cloud-name = Benchmark Cloud\nproducts-grid-cloud-desc = Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.\nproducts-grid-cloud-price = 29 $/мес\nproducts-grid-enterprise-name = Benchmark Enterprise\nproducts-grid-enterprise-desc = Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.\nproducts-grid-enterprise-price = Связаться с нами\nproducts-grid-migration-name = Помощник по миграции\nproducts-grid-migration-desc = Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.\nproducts-grid-migration-price = 99 $ (разово)\nproducts-grid-qa-name = QA переводов\nproducts-grid-qa-desc = Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.\nproducts-grid-qa-price = 19 $/мес\nproducts-grid-optimizer-name = Оптимизатор бандла\nproducts-grid-optimizer-desc = Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.\nproducts-grid-optimizer-price = 49 $/мес\nsettings-header-title = Настройки\nsettings-header-description = Управляйте предпочтениями и конфигурацией вашей учетной записи.\nsettings-profile-title = Профиль\nsettings-profile-display-name = Отображаемое имя\nsettings-profile-email = Электронная почта\nsettings-preferences-title = Предпочтения\nsettings-preferences-email-notifications = Уведомления по почте\nsettings-preferences-weekly-reports = Получать еженедельные отчеты о бенчмарках\nsettings-preferences-toggle-notifications = Переключить уведомления\nsettings-preferences-dark-mode = Темная тема\nsettings-preferences-dark-color-scheme = Использовать темную цветовую схему\nsettings-preferences-toggle-dark-mode = Переключить темную тему\nsettings-preferences-default-language = Язык по умолчанию\nsettings-preferences-english = Английский (en)\nsettings-preferences-french = Французский (fr)\nsettings-preferences-german = Немецкий (de)\nsettings-preferences-spanish = Испанский (es)\nsettings-preferences-japanese = Японский (ja)\nsettings-preferences-chinese = Китайский упрощенный (zh-CN)\nsettings-preferences-arabic = Арабский (ar)\nsettings-api-access-title = Доступ к API\nsettings-api-access-api-key = Ключ API\nsettings-api-access-copy = Копировать\nsettings-api-access-description = Используйте этот ключ для программного доступа к API бенчмаркинга.\nsettings-footer-cancel = Отмена\nsettings-footer-save-changes = Сохранить изменения\nteam-header-title = Наша команда\nteam-header-description = Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.\nteam-grid-member1-name = Сара Чен\nteam-grid-member1-role = Основатель и ведущий инженер\nteam-grid-member1-bio = Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.\nteam-grid-member2-name = Маркус Вебер\nteam-grid-member2-role = Инженер по производительности\nteam-grid-member2-bio = Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\nteam-grid-member3-name = Айша Патель\nteam-grid-member3-role = Developer Advocate\nteam-grid-member3-bio = Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\nteam-grid-member4-name = Томас Родригес\nteam-grid-member4-role = Full-Stack разработчик\nteam-grid-member4-bio = Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.\nteam-grid-member5-name = Юки Танака\nteam-grid-member5-role = Аналитик данных\nteam-grid-member5-bio = Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).\nteam-grid-member6-name = Елена Ковальски\nteam-grid-member6-role = Комьюнити-менеджер\nteam-grid-member6-bio = Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.\nnot-found-title = 404\nnot-found-description = Упс! Страница не найдена\nnot-found-return-home = Вернуться на главную\n";
var zh_default = "shared-app-name = i18n Bench\nshared-site-name = i18n Benchmark\nshared-contact-email = contact@intlayer.org\nshared-go-to-github = 前往 GitHub\nheader-home = 首页\nheader-methodology = 方法论\nheader-mock-pages = 模拟页面\nheader-products = 产品\nheader-pricing = 价格\nheader-team = 团队\nheader-blog = 博客\nheader-careers = 招聘\nheader-faq = 常见问题\nheader-contact = 联系我们\nheader-settings = 设置\nfooter-title = i18n Benchmark\nfooter-description = 一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。\nfooter-resources = 资源\nfooter-github = GitHub\nfooter-methodology = 方法论\nfooter-contributing = 贡献\nfooter-contact = 联系我们\nfooter-built-with = i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。\ntheme-toggle-auto = 主题：自动\ntheme-toggle-dark = 主题：深色\ntheme-toggle-light = 主题：浅色\ntheme-toggle-label-auto = 主题模式：自动（系统）。点击切换到浅色模式。\ntheme-toggle-label-other = 主题模式：{mode}。点击切换模式。\nmock-banner = ⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。\nhome-hero-title = i18n Benchmark\nhome-hero-description = 一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。\nhome-hero-view-results = 查看结果\nhome-hero-methodology = 方法论\nhome-why-it-matters-title = 为什么这些指标很重要\nhome-why-it-matters-bundle-size-title = 包大小\nhome-why-it-matters-bundle-size-desc = 包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\nhome-why-it-matters-rendering-title = 渲染与注水\nhome-why-it-matters-rendering-desc = 将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。\nhome-why-it-matters-dynamic-loading-title = 动态加载\nhome-why-it-matters-dynamic-loading-desc = 预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\nhome-understanding-impact-title = 理解影响\nhome-understanding-impact-single-json-title = 为什么单个大型 JSON 会损害性能\nhome-understanding-impact-single-json-intro = 许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：\nhome-understanding-impact-single-json-bullet1 = 每次页面加载时都必须解析 JSON — 阻塞主线程。\nhome-understanding-impact-single-json-bullet2 = 当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。\nhome-understanding-impact-single-json-bullet3 = 在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。\nhome-understanding-impact-trade-offs-title = 动态加载的权衡\nhome-understanding-impact-trade-offs-intro = 将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：\nhome-understanding-impact-waterfall-label = 瀑布流请求：\nhome-understanding-impact-waterfall-desc = 应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。\nhome-understanding-impact-fouc-label = 未翻译内容闪烁 (FOUC)：\nhome-understanding-impact-fouc-desc = 在块到达之前，用户可能会短暂看到翻译键或回退语言。\nhome-understanding-impact-cache-label = 缓存失效：\nhome-understanding-impact-cache-desc = 更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。\nhome-understanding-impact-measures-title = 此基准测试衡量的内容\nhome-understanding-impact-measures-desc = 此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。\nhome-results-table-title = 示例结果\nhome-results-table-library = 库\nhome-results-table-bundle-size = 包大小\nhome-results-table-lookup-time = 查找时间\nhome-results-table-lazy-loading = 延迟加载\nhome-results-table-yes = 是\nhome-results-table-manual = 手动\nhome-results-table-built-in = 内置\nabout-header-title = 关于此基准测试\nabout-header-description = 这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。\nabout-grid-why-exists-title = 为什么存在这个测试\nabout-grid-why-exists-desc = 选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。\nabout-grid-methodology-title = 方法论\nabout-grid-methodology-desc = 相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。\nabout-what-we-measure-title = 衡量指标\nabout-what-we-measure-bundle-size-impact = 包大小影响\nabout-what-we-measure-bundle-size-impact-desc = 包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。\nabout-what-we-measure-rendering-overhead = 渲染开销\nabout-what-we-measure-rendering-overhead-desc = 库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。\nabout-what-we-measure-hydration-cost = 注水成本\nabout-what-we-measure-hydration-cost-desc = 在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。\nabout-what-we-measure-lazy-loading = 延迟加载有效性\nabout-what-we-measure-lazy-loading-desc = 按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。\nabout-what-we-measure-locale-switch = 语言环境切换速度\nabout-what-we-measure-locale-switch-desc = 应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。\nblog-header-title = 博客\nblog-header-description = 来自 i18n 社区的见解、教程和分析。\nblog-list-read-more = 阅读更多 →\nblog-list-post1-title = 2026 年 i18n 库对比：深度分析\nblog-list-post1-date = 2026年3月15日\nblog-list-post1-excerpt = 我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。\nblog-list-post1-category = 基准测试\nblog-list-post2-title = 如何将 i18n 包大小减少 60%\nblog-list-post2-date = 2026年3月8日\nblog-list-post2-excerpt = 优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\nblog-list-post2-category = 教程\nblog-list-post3-title = React 国际化现状\nblog-list-post3-date = 2026年2月28日\nblog-list-post3-excerpt = React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。\nblog-list-post3-category = 分析\nblog-list-post4-title = 从 react-i18next 迁移到 Lingui\nblog-list-post4-date = 2026年2月15日\nblog-list-post4-excerpt = 关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。\nblog-list-post4-category = 教程\nblog-list-post5-title = Server Components 与 i18n：发生了什么变化？\nblog-list-post5-date = 2026年2月1日\nblog-list-post5-excerpt = React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\nblog-list-post5-category = 分析\nblog-list-post6-title = 基准测试方法论：我们如何测试\nblog-list-post6-date = 2026年1月20日\nblog-list-post6-excerpt = 透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。\nblog-list-post6-category = Meta\ncareers-header-title = 招聘\ncareers-header-description = 加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。\ncareers-benefits-remote-label = 远程优先\ncareers-benefits-remote-value = 在世界任何地方工作\ncareers-benefits-pay-label = 具有竞争力的薪酬\ncareers-benefits-pay-value = 市场顶尖的薪资水平\ncareers-benefits-oss-label = 开源时间\ncareers-benefits-oss-value = 20% 的时间用于 OSS 贡献\ncareers-open-positions-title = 开放职位\ncareers-open-positions-apply-now = 立即申请\ncareers-open-positions-remote = 远程\ncareers-open-positions-full-time = 全职\ncareers-open-positions-part-time = 兼职\ncareers-open-positions-engineering = 工程\ncareers-open-positions-documentation = 文档\ncareers-open-positions-community = 社区\ncareers-open-positions-sf-remote = 旧金山 / 远程\ncareers-open-positions-frontend-title = 高级前端工程师\ncareers-open-positions-frontend-desc = 使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\ncareers-open-positions-backend-title = 后端工程师\ncareers-open-positions-backend-desc = 设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。\ncareers-open-positions-writer-title = 技术作家\ncareers-open-positions-writer-desc = 为我们的基准测试平台编写全面的指南、API 参考和教程。\ncareers-open-positions-devrel-title = DevRel 工程师\ncareers-open-positions-devrel-desc = 通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\ncareers-open-positions-qa-title = QA 工程师\ncareers-open-positions-qa-desc = 通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。\ncontact-header-title = 取得联系\ncontact-header-description = 有想法、发现了错误或想贡献基准测试？请联系我们：\ncontact-form-name = 姓名\ncontact-form-your-name = 您的姓名\ncontact-form-email = 电子邮件\ncontact-form-email-placeholder = you@example.com\ncontact-form-topic = 主题\ncontact-form-bug-report = 错误报告\ncontact-form-new-benchmark-idea = 新基准测试想法\ncontact-form-methodology-question = 方法论问题\ncontact-form-contribution = 贡献\ncontact-form-other = 其他\ncontact-form-message = 消息\ncontact-form-message-placeholder = 描述您的问题或想法...\ncontact-form-send-message = 发送消息\nfaq-header-title = 常见问题\nfaq-header-description = 关于 i18n 基准测试您需要了解的一切。\nfaq-list-q1 = 什么是 i18n 基准测试？\nfaq-list-a1 = i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。\nfaq-list-q2 = 基准测试是如何进行的？\nfaq-list-a2 = 我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。\nfaq-list-q3 = 目前支持哪些库？\nfaq-list-a3 = 我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。\nfaq-list-q4 = 我可以提交我自己的基准测试吗？\nfaq-list-a4 = 是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。\nfaq-list-q5 = 基准测试多久更新一次？\nfaq-list-a5 = 我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。\nfaq-list-q6 = 数据可靠吗？\nfaq-list-a6 = 我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\nfaq-list-q7 = 你们提供咨询服务吗？\nfaq-list-a7 = 是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。\nfaq-list-q8 = 我该如何贡献？\nfaq-list-a8 = 有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\npricing-header-title = 简单透明的定价\npricing-header-description = 选择适合您团队的计划。无隐藏费用。\npricing-tiers-starter-name = 入门版\npricing-tiers-starter-price = 0 $\npricing-tiers-starter-period = 永久\npricing-tiers-starter-feature1 = 每天 5 次基准测试运行\npricing-tiers-starter-feature2 = 3 个库\npricing-tiers-starter-feature3 = 社区支持\npricing-tiers-starter-feature4 = 公开结果\npricing-tiers-pro-name = 专业版\npricing-tiers-pro-price = 29 $\npricing-tiers-pro-period = /月\npricing-tiers-pro-feature1 = 无限次运行\npricing-tiers-pro-feature2 = 所有库\npricing-tiers-pro-feature3 = 优先支持\npricing-tiers-pro-feature4 = 私有结果\npricing-tiers-pro-feature5 = CI 集成\npricing-tiers-pro-feature6 = 历史数据\npricing-tiers-enterprise-name = 企业版\npricing-tiers-enterprise-price = 定制\npricing-tiers-enterprise-feature1 = 包含专业版中的所有功能\npricing-tiers-enterprise-feature2 = 本地部署选项\npricing-tiers-enterprise-feature3 = SSO 和 SAML\npricing-tiers-enterprise-feature4 = 专属客户经理\npricing-tiers-enterprise-feature5 = 定制 SLA\npricing-tiers-enterprise-feature6 = 审计日志\npricing-tiers-enterprise-feature7 = 培训课程\npricing-tiers-contact-sales = 联系销售\npricing-tiers-get-started = 开始使用\nproducts-header-title = 产品\nproducts-header-description = 用于简化国际化工作流程的工具和服务。\nproducts-grid-learn-more = 了解更多\nproducts-grid-cli-name = 基准测试 CLI\nproducts-grid-cli-desc = 从您的终端本地运行基准测试。支持自定义配置和 CI 集成。\nproducts-grid-cli-price = 免费\nproducts-grid-cloud-name = 基准测试云\nproducts-grid-cloud-desc = 具有历史追踪、警报和团队仪表板的自动化云基准测试。\nproducts-grid-cloud-price = 29 $/月\nproducts-grid-enterprise-name = 基准测试企业版\nproducts-grid-enterprise-desc = 支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。\nproducts-grid-enterprise-price = 联系我们\nproducts-grid-migration-name = 迁移助手\nproducts-grid-migration-desc = AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。\nproducts-grid-migration-price = 99 $ 一次性费用\nproducts-grid-qa-name = 翻译 QA\nproducts-grid-qa-desc = 自动检查翻译缺失、复数问题和上下文错误。\nproducts-grid-qa-price = 19 $/月\nproducts-grid-optimizer-name = 包优化器\nproducts-grid-optimizer-desc = 通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。\nproducts-grid-optimizer-price = 49 $/月\nsettings-header-title = 设置\nsettings-header-description = 管理您的账户偏好和配置。\nsettings-profile-title = 个人资料\nsettings-profile-display-name = 显示名称\nsettings-profile-email = 电子邮件\nsettings-preferences-title = 偏好\nsettings-preferences-email-notifications = 电子邮件通知\nsettings-preferences-weekly-reports = 接收每周基准测试报告\nsettings-preferences-toggle-notifications = 切换通知\nsettings-preferences-dark-mode = 深色模式\nsettings-preferences-dark-color-scheme = 使用深色配色方案\nsettings-preferences-toggle-dark-mode = 切换深色模式\nsettings-preferences-default-language = 默认语言\nsettings-preferences-english = 英语 (en)\nsettings-preferences-french = 法语 (fr)\nsettings-preferences-german = 德语 (de)\nsettings-preferences-spanish = 西班牙语 (es)\nsettings-preferences-japanese = 日语 (ja)\nsettings-preferences-chinese = 简体中文 (zh-CN)\nsettings-preferences-arabic = 阿拉伯语 (ar)\nsettings-api-access-title = API 访问\nsettings-api-access-api-key = API 密钥\nsettings-api-access-copy = 复制\nsettings-api-access-description = 使用此密钥以编程方式访问基准测试 API。\nsettings-footer-cancel = 取消\nsettings-footer-save-changes = 保存更改\nteam-header-title = 我们的团队\nteam-header-description = 了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。\nteam-grid-member1-name = Sarah Chen\nteam-grid-member1-role = 创始人兼首席工程师\nteam-grid-member1-bio = 前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\nteam-grid-member2-name = Marcus Weber\nteam-grid-member2-role = 性能工程师\nteam-grid-member2-bio = 专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。\nteam-grid-member3-name = Aisha Patel\nteam-grid-member3-role = 开发者倡导者\nteam-grid-member3-bio = 对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。\nteam-grid-member4-name = Tomás Rodríguez\nteam-grid-member4-role = 全栈开发人员\nteam-grid-member4-bio = 维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\nteam-grid-member5-name = Yuki Tanaka\nteam-grid-member5-role = 数据分析师\nteam-grid-member5-bio = 确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。\nteam-grid-member6-name = Elena Kowalski\nteam-grid-member6-role = 社区经理\nteam-grid-member6-bio = 管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\nnot-found-title = 404\nnot-found-description = 哎呀！页面未找到\nnot-found-return-home = 返回首页\n";
var createBundle = (locale, ftl) => {
	const bundle = new FluentBundle(locale);
	bundle.addResource(new FluentResource(ftl));
	return bundle;
};
var bundleMap = {
	en: createBundle("en", en_default),
	fr: createBundle("fr", fr_default),
	es: createBundle("es", es_default),
	de: createBundle("de", de_default),
	it: createBundle("it", it_default),
	pt: createBundle("pt", pt_default),
	zh: createBundle("zh", zh_default),
	ja: createBundle("ja", ja_default),
	ko: createBundle("ko", ko_default),
	ru: createBundle("ru", ru_default)
};
function negotiatedBundles(locale) {
	const primary = bundleMap[locale] ?? bundleMap.en;
	return primary === bundleMap.en ? [bundleMap.en] : [primary, bundleMap.en];
}
var fluent = createFluentVue({ bundles: negotiatedBundles("en") });
var kn = `shared-app-name = i18n Bench
shared-site-name = i18n Benchmark
shared-contact-email = contact@intlayer.org
shared-go-to-github = Zu GitHub
header-home = Home
header-methodology = Methodik
header-mock-pages = Testseiten
header-products = Produkte
header-pricing = Preise
header-team = Team
header-blog = Blog
header-careers = Karriere
header-faq = FAQ
header-contact = Kontakt
header-settings = Einstellungen
footer-title = i18n Benchmark
footer-description = Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.
footer-resources = Ressourcen
footer-github = GitHub
footer-methodology = Methodik
footer-contributing = Beitragen
footer-contact = Kontakt
footer-built-with = i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.
theme-toggle-auto = Thema: Auto
theme-toggle-dark = Thema: Dunkel
theme-toggle-light = Thema: Hell
theme-toggle-label-auto = Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.
theme-toggle-label-other = Themenmodus: {mode}. Klicken Sie hier, um den Modus zu wechseln.
mock-banner = ⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.
home-hero-title = i18n Benchmark
home-hero-description = Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.
home-hero-view-results = Ergebnisse anzeigen
home-hero-methodology = Methodik
home-why-it-matters-title = Warum diese Metriken wichtig sind
home-why-it-matters-bundle-size-title = Bundle-Größe
home-why-it-matters-bundle-size-desc = Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.
home-why-it-matters-rendering-title = Rendering & Hydrierung
home-why-it-matters-rendering-desc = Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.
home-why-it-matters-dynamic-loading-title = Dynamisches Laden
home-why-it-matters-dynamic-loading-desc = Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.
home-understanding-impact-title = Die Auswirkungen verstehen
home-understanding-impact-single-json-title = Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann
home-understanding-impact-single-json-intro = Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:
home-understanding-impact-single-json-bullet1 = Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.
home-understanding-impact-single-json-bullet2 = Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.
home-understanding-impact-single-json-bullet3 = Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.
home-understanding-impact-trade-offs-title = Die Kompromisse beim dynamischen Laden
home-understanding-impact-trade-offs-intro = Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:
home-understanding-impact-waterfall-label = Waterfall-Anfragen:
home-understanding-impact-waterfall-desc = Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.
home-understanding-impact-fouc-label = Flash of Untranslated Content (FOUC):
home-understanding-impact-fouc-desc = Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.
home-understanding-impact-cache-label = Cache-Invalidierung:
home-understanding-impact-cache-desc = Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.
home-understanding-impact-measures-title = Was dieser Benchmark misst
home-understanding-impact-measures-desc = Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.
home-results-table-title = Beispielergebnisse
home-results-table-library = Bibliothek
home-results-table-bundle-size = Bundle-Größe
home-results-table-lookup-time = Lookup-Zeit
home-results-table-lazy-loading = Lazy Loading
home-results-table-yes = Ja
home-results-table-manual = Manuell
home-results-table-built-in = Integriert
about-header-title = Über diesen Benchmark
about-header-description = Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.
about-grid-why-exists-title = Warum dies existiert
about-grid-why-exists-desc = Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.
about-grid-methodology-title = Methodik
about-grid-methodology-desc = Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.
about-what-we-measure-title = Was wir messen
about-what-we-measure-bundle-size-impact = Auswirkungen auf die Bundle-Größe
about-what-we-measure-bundle-size-impact-desc = Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.
about-what-we-measure-rendering-overhead = Rendering-Overhead
about-what-we-measure-rendering-overhead-desc = Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.
about-what-we-measure-hydration-cost = Hydrierungskosten
about-what-we-measure-hydration-cost-desc = Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.
about-what-we-measure-lazy-loading = Effektivität von Lazy Loading
about-what-we-measure-lazy-loading-desc = Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).
about-what-we-measure-locale-switch = Geschwindigkeit des Sprachwechsels
about-what-we-measure-locale-switch-desc = Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.
blog-header-title = Blog
blog-header-description = Einblicke, Tutorials und Analysen aus der i18n-Community.
blog-list-read-more = Mehr lesen →
blog-list-post1-title = Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick
blog-list-post1-date = 15. März 2026
blog-list-post1-excerpt = Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.
blog-list-post1-category = Benchmark
blog-list-post2-title = Wie Sie Ihr i18n-Bundle um 60 % reduzieren
blog-list-post2-date = 8. März 2026
blog-list-post2-excerpt = Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.
blog-list-post2-category = Tutorial
blog-list-post3-title = Der Stand der Internationalisierung in React
blog-list-post3-date = 28. Februar 2026
blog-list-post3-excerpt = Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.
blog-list-post3-category = Analyse
blog-list-post4-title = Migration von react-i18next zu Lingui
blog-list-post4-date = 15. Februar 2026
blog-list-post4-excerpt = Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.
blog-list-post4-category = Tutorial
blog-list-post5-title = Server Components und i18n: Was ändert sich?
blog-list-post5-date = 1. Februar 2026
blog-list-post5-excerpt = React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.
blog-list-post5-category = Analyse
blog-list-post6-title = Benchmark-Methodik: Wie wir testen
blog-list-post6-date = 20. Januar 2026
blog-list-post6-excerpt = Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.
blog-list-post6-category = Meta
careers-header-title = Karriere
careers-header-description = Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.
careers-benefits-remote-label = Remote-First
careers-benefits-remote-value = Arbeiten Sie von überall auf der Welt
careers-benefits-pay-label = Wettbewerbsfähige Bezahlung
careers-benefits-pay-value = Überdurchschnittliche Vergütung
careers-benefits-oss-label = Open-Source-Zeit
careers-benefits-oss-value = 20 % der Zeit für OSS-Beiträge
careers-open-positions-title = Offene Stellen
careers-open-positions-apply-now = Jetzt bewerben
careers-open-positions-remote = Remote
careers-open-positions-full-time = Vollzeit
careers-open-positions-part-time = Teilzeit
careers-open-positions-engineering = Engineering
careers-open-positions-documentation = Dokumentation
careers-open-positions-community = Community
careers-open-positions-sf-remote = San Francisco / Remote
careers-open-positions-frontend-title = Senior Frontend Engineer
careers-open-positions-frontend-desc = Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.
careers-open-positions-backend-title = Backend-Ingenieur
careers-open-positions-backend-desc = Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.
careers-open-positions-writer-title = Technischer Redakteur
careers-open-positions-writer-desc = Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.
careers-open-positions-devrel-title = DevRel-Ingenieur
careers-open-positions-devrel-desc = Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.
careers-open-positions-qa-title = QA-Ingenieur
careers-open-positions-qa-desc = Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.
contact-header-title = Kontakt aufnehmen
contact-header-description = Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter
contact-form-name = Name
contact-form-your-name = Ihr Name
contact-form-email = E-Mail
contact-form-email-placeholder = ihre@beispiel.de
contact-form-topic = Thema
contact-form-bug-report = Fehlerbericht
contact-form-new-benchmark-idea = Neue Benchmark-Idee
contact-form-methodology-question = Frage zur Methodik
contact-form-contribution = Beitrag
contact-form-other = Sonstiges
contact-form-message = Nachricht
contact-form-message-placeholder = Beschreiben Sie Ihre Frage oder Idee...
contact-form-send-message = Nachricht senden
faq-header-title = Häufig gestellte Fragen
faq-header-description = Alles, was Sie über i18n Benchmark wissen müssen.
faq-list-q1 = Was ist i18n Benchmark?
faq-list-a1 = i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.
faq-list-q2 = Wie werden Benchmarks durchgeführt?
faq-list-a2 = Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.
faq-list-q3 = Welche Bibliotheken werden derzeit unterstützt?
faq-list-a3 = Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.
faq-list-q4 = Kann ich meine eigenen Benchmarks einreichen?
faq-list-a4 = Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.
faq-list-q5 = Wie oft werden Benchmarks aktualisiert?
faq-list-a5 = Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.
faq-list-q6 = Sind die Daten zuverlässig?
faq-list-a6 = Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.
faq-list-q7 = Bieten Sie Beratungsdienstleistungen an?
faq-list-a7 = Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.
faq-list-q8 = Wie kann ich beitragen?
faq-list-a8 = Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.
pricing-header-title = Einfache, transparente Preisgestaltung
pricing-header-description = Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.
pricing-tiers-starter-name = Starter
pricing-tiers-starter-price = 0 $
pricing-tiers-starter-period = für immer
pricing-tiers-starter-feature1 = 5 Benchmark-Durchläufe/Tag
pricing-tiers-starter-feature2 = 3 Bibliotheken
pricing-tiers-starter-feature3 = Community-Support
pricing-tiers-starter-feature4 = Öffentliche Ergebnisse
pricing-tiers-pro-name = Pro
pricing-tiers-pro-price = 29 $
pricing-tiers-pro-period = /Monat
pricing-tiers-pro-feature1 = Unbegrenzte Durchläufe
pricing-tiers-pro-feature2 = Alle Bibliotheken
pricing-tiers-pro-feature3 = Priorisierter Support
pricing-tiers-pro-feature4 = Private Ergebnisse
pricing-tiers-pro-feature5 = CI-Integration
pricing-tiers-pro-feature6 = Historische Daten
pricing-tiers-enterprise-name = Enterprise
pricing-tiers-enterprise-price = Individuell
pricing-tiers-enterprise-feature1 = Alles in Pro enthalten
pricing-tiers-enterprise-feature2 = On-Premise-Option
pricing-tiers-enterprise-feature3 = SSO & SAML
pricing-tiers-enterprise-feature4 = Dedizierter Account Manager
pricing-tiers-enterprise-feature5 = Individuelle SLAs
pricing-tiers-enterprise-feature6 = Audit-Protokolle
pricing-tiers-enterprise-feature7 = Schulungssitzungen
pricing-tiers-contact-sales = Vertrieb kontaktieren
pricing-tiers-get-started = Erste Schritte
products-header-title = Produkte
products-header-description = Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.
products-grid-learn-more = Mehr erfahren
products-grid-cli-name = Benchmark CLI
products-grid-cli-desc = Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.
products-grid-cli-price = Kostenlos
products-grid-cloud-name = Benchmark Cloud
products-grid-cloud-desc = Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.
products-grid-cloud-price = 29 $/Monat
products-grid-enterprise-name = Benchmark Enterprise
products-grid-enterprise-desc = On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.
products-grid-enterprise-price = Kontaktieren Sie uns
products-grid-migration-name = Migrationsassistent
products-grid-migration-desc = KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.
products-grid-migration-price = Einmalig 99 $
products-grid-qa-name = Übersetzungs-QA
products-grid-qa-desc = Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.
products-grid-qa-price = 19 $/Monat
products-grid-optimizer-name = Bundle-Optimierer
products-grid-optimizer-desc = Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.
products-grid-optimizer-price = 49 $/Monat
settings-header-title = Einstellungen
settings-header-description = Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.
settings-profile-title = Profil
settings-profile-display-name = Anzeigename
settings-profile-email = E-Mail
settings-preferences-title = Einstellungen
settings-preferences-email-notifications = E-Mail-Benachrichtigungen
settings-preferences-weekly-reports = Wöchentliche Benchmark-Berichte erhalten
settings-preferences-toggle-notifications = Benachrichtigungen umschalten
settings-preferences-dark-mode = Dunkelmodus
settings-preferences-dark-color-scheme = Dunkles Farbschema verwenden
settings-preferences-toggle-dark-mode = Dunkelmodus umschalten
settings-preferences-default-language = Standardsprache
settings-preferences-english = Englisch (en)
settings-preferences-french = Französisch (fr)
settings-preferences-german = Deutsch (de)
settings-preferences-spanish = Spanisch (es)
settings-preferences-japanese = Japanisch (ja)
settings-preferences-chinese = Chinesisch vereinfacht (zh-CN)
settings-preferences-arabic = Arabisch (ar)
settings-api-access-title = API-Zugriff
settings-api-access-api-key = API-Schlüssel
settings-api-access-copy = Kopieren
settings-api-access-description = Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.
settings-footer-cancel = Abbrechen
settings-footer-save-changes = Änderungen speichern
team-header-title = Unser Team
team-header-description = Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.
team-grid-member1-name = Sarah Chen
team-grid-member1-role = Gründerin & Leitende Ingenieurin
team-grid-member1-bio = Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.
team-grid-member2-name = Marcus Weber
team-grid-member2-role = Performance-Ingenieur
team-grid-member2-bio = Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.
team-grid-member3-name = Aisha Patel
team-grid-member3-role = Developer Advocate
team-grid-member3-bio = Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.
team-grid-member4-name = Tomás Rodríguez
team-grid-member4-role = Full-Stack-Entwickler
team-grid-member4-bio = Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.
team-grid-member5-name = Yuki Tanaka
team-grid-member5-role = Datenanalyst
team-grid-member5-bio = Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.
team-grid-member6-name = Elena Kowalski
team-grid-member6-role = Community Manager
team-grid-member6-bio = Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.
not-found-title = 404
not-found-description = Hoppla! Seite nicht gefunden
not-found-return-home = Zurück zur Startseite
`;
var An = `shared-app-name = i18n Bench
shared-site-name = i18n Benchmark
shared-contact-email = contact@intlayer.org
shared-go-to-github = Go to GitHub
header-home = Home
header-methodology = Methodology
header-mock-pages = Mock Pages
header-products = Products
header-pricing = Pricing
header-team = Team
header-blog = Blog
header-careers = Careers
header-faq = FAQ
header-contact = Contact
header-settings = Settings
footer-title = i18n Benchmark
footer-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.
footer-resources = Resources
footer-github = GitHub
footer-methodology = Methodology
footer-contributing = Contributing
footer-contact = Contact
footer-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.
theme-toggle-auto = Theme: Auto
theme-toggle-dark = Theme: Dark
theme-toggle-light = Theme: Light
theme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.
theme-toggle-label-other = Theme mode: {mode}. Click to switch mode.
mock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.
home-hero-title = i18n Benchmark
home-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.
home-hero-view-results = View Results
home-hero-methodology = Methodology
home-why-it-matters-title = Why These Metrics Matter
home-why-it-matters-bundle-size-title = Bundle Size
home-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.
home-why-it-matters-rendering-title = Rendering & Hydration
home-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).
home-why-it-matters-dynamic-loading-title = Dynamic Loading
home-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.
home-understanding-impact-title = Understanding the Impact
home-understanding-impact-single-json-title = Why a single large JSON can hurt performance
home-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:
home-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.
home-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.
home-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.
home-understanding-impact-trade-offs-title = The trade-offs of dynamic loading
home-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:
home-understanding-impact-waterfall-label = Waterfall requests:
home-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.
home-understanding-impact-fouc-label = Flash of untranslated content (FOUC):
home-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.
home-understanding-impact-cache-label = Cache invalidation:
home-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.
home-understanding-impact-measures-title = What this benchmark measures
home-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.
home-results-table-title = Sample Results
home-results-table-library = Library
home-results-table-bundle-size = Bundle Size
home-results-table-lookup-time = Lookup Time
home-results-table-lazy-loading = Lazy Loading
home-results-table-yes = Yes
home-results-table-manual = Manual
home-results-table-built-in = Built-in
about-header-title = About This Benchmark
about-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.
about-grid-why-exists-title = Why This Exists
about-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.
about-grid-methodology-title = Methodology
about-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.
about-what-we-measure-title = What We Measure
about-what-we-measure-bundle-size-impact = Bundle size impact
about-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.
about-what-we-measure-rendering-overhead = Rendering overhead
about-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.
about-what-we-measure-hydration-cost = Hydration cost
about-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.
about-what-we-measure-lazy-loading = Lazy loading effectiveness
about-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).
about-what-we-measure-locale-switch = Locale switch speed
about-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.
blog-header-title = Blog
blog-header-description = Insights, tutorials, and analysis from the i18n community.
blog-list-read-more = Read More →
blog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive
blog-list-post1-date = March 15, 2026
blog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.
blog-list-post1-category = Benchmark
blog-list-post2-title = How to Reduce Your i18n Bundle by 60%
blog-list-post2-date = March 8, 2026
blog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.
blog-list-post2-category = Tutorial
blog-list-post3-title = The State of Internationalization in React
blog-list-post3-date = February 28, 2026
blog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.
blog-list-post3-category = Analysis
blog-list-post4-title = Migrating from react-i18next to Lingui
blog-list-post4-date = February 15, 2026
blog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.
blog-list-post4-category = Tutorial
blog-list-post5-title = Server Components and i18n: What Changes?
blog-list-post5-date = February 1, 2026
blog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.
blog-list-post5-category = Analysis
blog-list-post6-title = Benchmark Methodology: How We Test
blog-list-post6-date = January 20, 2026
blog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.
blog-list-post6-category = Meta
careers-header-title = Careers
careers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.
careers-benefits-remote-label = Remote-first
careers-benefits-remote-value = Work from anywhere in the world
careers-benefits-pay-label = Competitive pay
careers-benefits-pay-value = Top-of-market compensation
careers-benefits-oss-label = Open source time
careers-benefits-oss-value = 20% time for OSS contributions
careers-open-positions-title = Open Positions
careers-open-positions-apply-now = Apply Now
careers-open-positions-remote = Remote
careers-open-positions-full-time = Full-time
careers-open-positions-part-time = Part-time
careers-open-positions-engineering = Engineering
careers-open-positions-documentation = Documentation
careers-open-positions-community = Community
careers-open-positions-sf-remote = San Francisco / Remote
careers-open-positions-frontend-title = Senior Frontend Engineer
careers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.
careers-open-positions-backend-title = Backend Engineer
careers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.
careers-open-positions-writer-title = Technical Writer
careers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.
careers-open-positions-devrel-title = DevRel Engineer
careers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.
careers-open-positions-qa-title = QA Engineer
careers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.
contact-header-title = Get in Touch
contact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at
contact-form-name = Name
contact-form-your-name = Your name
contact-form-email = Email
contact-form-email-placeholder = you@example.com
contact-form-topic = Topic
contact-form-bug-report = Bug Report
contact-form-new-benchmark-idea = New Benchmark Idea
contact-form-methodology-question = Methodology Question
contact-form-contribution = Contribution
contact-form-other = Other
contact-form-message = Message
contact-form-message-placeholder = Describe your question or idea...
contact-form-send-message = Send Message
faq-header-title = Frequently Asked Questions
faq-header-description = Everything you need to know about i18n Benchmark.
faq-list-q1 = What is i18n Benchmark?
faq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.
faq-list-q2 = How are benchmarks conducted?
faq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.
faq-list-q3 = Which libraries are currently supported?
faq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.
faq-list-q4 = Can I submit my own benchmarks?
faq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.
faq-list-q5 = How often are benchmarks updated?
faq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.
faq-list-q6 = Is the data reliable?
faq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.
faq-list-q7 = Do you offer consulting services?
faq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.
faq-list-q8 = How can I contribute?
faq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.
pricing-header-title = Simple, Transparent Pricing
pricing-header-description = Choose the plan that fits your team. No hidden fees.
pricing-tiers-starter-name = Starter
pricing-tiers-starter-price = $0
pricing-tiers-starter-period = forever
pricing-tiers-starter-feature1 = 5 benchmark runs/day
pricing-tiers-starter-feature2 = 3 libraries
pricing-tiers-starter-feature3 = Community support
pricing-tiers-starter-feature4 = Public results
pricing-tiers-pro-name = Pro
pricing-tiers-pro-price = $29
pricing-tiers-pro-period = /month
pricing-tiers-pro-feature1 = Unlimited runs
pricing-tiers-pro-feature2 = All libraries
pricing-tiers-pro-feature3 = Priority support
pricing-tiers-pro-feature4 = Private results
pricing-tiers-pro-feature5 = CI integration
pricing-tiers-pro-feature6 = Historical data
pricing-tiers-enterprise-name = Enterprise
pricing-tiers-enterprise-price = Custom
pricing-tiers-enterprise-feature1 = Everything in Pro
pricing-tiers-enterprise-feature2 = On-premise option
pricing-tiers-enterprise-feature3 = SSO & SAML
pricing-tiers-enterprise-feature4 = Dedicated account manager
pricing-tiers-enterprise-feature5 = Custom SLAs
pricing-tiers-enterprise-feature6 = Audit logs
pricing-tiers-enterprise-feature7 = Training sessions
pricing-tiers-contact-sales = Contact Sales
pricing-tiers-get-started = Get Started
products-header-title = Products
products-header-description = Tools and services to streamline your internationalization workflow.
products-grid-learn-more = Learn More
products-grid-cli-name = Benchmark CLI
products-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.
products-grid-cli-price = Free
products-grid-cloud-name = Benchmark Cloud
products-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.
products-grid-cloud-price = $29/mo
products-grid-enterprise-name = Benchmark Enterprise
products-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.
products-grid-enterprise-price = Contact Us
products-grid-migration-name = Migration Assistant
products-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.
products-grid-migration-price = $99 one-time
products-grid-qa-name = Translation QA
products-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.
products-grid-qa-price = $19/mo
products-grid-optimizer-name = Bundle Optimizer
products-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.
products-grid-optimizer-price = $49/mo
settings-header-title = Settings
settings-header-description = Manage your account preferences and configuration.
settings-profile-title = Profile
settings-profile-display-name = Display Name
settings-profile-email = Email
settings-preferences-title = Preferences
settings-preferences-email-notifications = Email Notifications
settings-preferences-weekly-reports = Receive weekly benchmark reports
settings-preferences-toggle-notifications = Toggle notifications
settings-preferences-dark-mode = Dark Mode
settings-preferences-dark-color-scheme = Use dark color scheme
settings-preferences-toggle-dark-mode = Toggle dark mode
settings-preferences-default-language = Default Language
settings-preferences-english = English (en)
settings-preferences-french = French (fr)
settings-preferences-german = German (de)
settings-preferences-spanish = Spanish (es)
settings-preferences-japanese = Japanese (ja)
settings-preferences-chinese = Chinese Simplified (zh-CN)
settings-preferences-arabic = Arabic (ar)
settings-api-access-title = API Access
settings-api-access-api-key = API Key
settings-api-access-copy = Copy
settings-api-access-description = Use this key to access the benchmarking API programmatically.
settings-footer-cancel = Cancel
settings-footer-save-changes = Save Changes
team-header-title = Our Team
team-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.
team-grid-member1-name = Sarah Chen
team-grid-member1-role = Founder & Lead Engineer
team-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.
team-grid-member2-name = Marcus Weber
team-grid-member2-role = Performance Engineer
team-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.
team-grid-member3-name = Aisha Patel
team-grid-member3-role = Developer Advocate
team-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.
team-grid-member4-name = Tomás Rodríguez
team-grid-member4-role = Full-Stack Developer
team-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.
team-grid-member5-name = Yuki Tanaka
team-grid-member5-role = Data Analyst
team-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.
team-grid-member6-name = Elena Kowalski
team-grid-member6-role = Community Manager
team-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.
not-found-title = 404
not-found-description = Oops! Page not found
not-found-return-home = Return to Home
`;
var jn = `shared-app-name = i18n Bench
shared-site-name = i18n Benchmark
shared-contact-email = contact@intlayer.org
shared-go-to-github = Ir a GitHub
header-home = Inicio
header-methodology = Metodología
header-mock-pages = Páginas de prueba
header-products = Productos
header-pricing = Precios
header-team = Equipo
header-blog = Blog
header-careers = Carreras
header-faq = FAQ
header-contact = Contacto
header-settings = Ajustes
footer-title = i18n Benchmark
footer-description = Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.
footer-resources = Recursos
footer-github = GitHub
footer-methodology = Metodología
footer-contributing = Contribuir
footer-contact = Contacto
footer-built-with = i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.
theme-toggle-auto = Tema: Auto
theme-toggle-dark = Tema: Oscuro
theme-toggle-light = Tema: Claro
theme-toggle-label-auto = Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.
theme-toggle-label-other = Modo de tema: {mode}. Haz clic para cambiar de modo.
mock-banner = ⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.
home-hero-title = i18n Benchmark
home-hero-description = Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.
home-hero-view-results = Ver resultados
home-hero-methodology = Metodología
home-why-it-matters-title = Por qué son importantes estas métricas
home-why-it-matters-bundle-size-title = Tamaño del bundle
home-why-it-matters-bundle-size-desc = El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.
home-why-it-matters-rendering-title = Renderizado e hidratación
home-why-it-matters-rendering-desc = Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).
home-why-it-matters-dynamic-loading-title = Carga dinámica
home-why-it-matters-dynamic-loading-desc = Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.
home-understanding-impact-title = Entendiendo el impacto
home-understanding-impact-single-json-title = Por qué un solo JSON grande puede perjudicar el rendimiento
home-understanding-impact-single-json-intro = Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:
home-understanding-impact-single-json-bullet1 = El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.
home-understanding-impact-single-json-bullet2 = Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.
home-understanding-impact-single-json-bullet3 = Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.
home-understanding-impact-trade-offs-title = Las compensaciones de la carga dinámica
home-understanding-impact-trade-offs-intro = Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:
home-understanding-impact-waterfall-label = Solicitudes en cascada:
home-understanding-impact-waterfall-desc = la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.
home-understanding-impact-fouc-label = Parpadeo de contenido no traducido (FOUC):
home-understanding-impact-fouc-desc = los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.
home-understanding-impact-cache-label = Invalidación de la caché:
home-understanding-impact-cache-desc = actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.
home-understanding-impact-measures-title = Qué mide este benchmark
home-understanding-impact-measures-desc = Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.
home-results-table-title = Resultados de muestra
home-results-table-library = Biblioteca
home-results-table-bundle-size = Tamaño del bundle
home-results-table-lookup-time = Tiempo de búsqueda
home-results-table-lazy-loading = Carga diferida
home-results-table-yes = Sí
home-results-table-manual = Manual
home-results-table-built-in = Integrado
about-header-title = Acerca de este benchmark
about-header-description = Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.
about-grid-why-exists-title = Por qué existe esto
about-grid-why-exists-desc = Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.
about-grid-methodology-title = Metodología
about-grid-methodology-desc = La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.
about-what-we-measure-title = Qué medimos
about-what-we-measure-bundle-size-impact = Impacto en el tamaño del bundle
about-what-we-measure-bundle-size-impact-desc = Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.
about-what-we-measure-rendering-overhead = Sobrecarga de renderizado
about-what-we-measure-rendering-overhead-desc = Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.
about-what-we-measure-hydration-cost = Coste de hidratación
about-what-we-measure-hydration-cost-desc = Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.
about-what-we-measure-lazy-loading = Eficacia de la carga diferida
about-what-we-measure-lazy-loading-desc = Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).
about-what-we-measure-locale-switch = Velocidad de cambio de idioma
about-what-we-measure-locale-switch-desc = Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.
blog-header-title = Blog
blog-header-description = Información, tutoriales y análisis de la comunidad i18n.
blog-list-read-more = Leer más →
blog-list-post1-title = Comparativa de bibliotecas i18n en 2026: Un análisis profundo
blog-list-post1-date = 15 de marzo de 2026
blog-list-post1-excerpt = Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.
blog-list-post1-category = Benchmark
blog-list-post2-title = Cómo reducir tu bundle i18n en un 60%
blog-list-post2-date = 8 de marzo de 2026
blog-list-post2-excerpt = Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.
blog-list-post2-category = Tutorial
blog-list-post3-title = El estado de la internacionalización en React
blog-list-post3-date = 28 de febrero de 2026
blog-list-post3-excerpt = Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.
blog-list-post3-category = Análisis
blog-list-post4-title = Migración de react-i18next a Lingui
blog-list-post4-date = 15 de febrero de 2026
blog-list-post4-excerpt = Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.
blog-list-post4-category = Tutorial
blog-list-post5-title = Server Components e i18n: ¿Qué cambia?
blog-list-post5-date = 1 de febrero de 2026
blog-list-post5-excerpt = Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.
blog-list-post5-category = Análisis
blog-list-post6-title = Metodología de benchmark: Cómo probamos
blog-list-post6-date = 20 de enero de 2026
blog-list-post6-excerpt = Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.
blog-list-post6-category = Meta
careers-header-title = Carreras
careers-header-description = Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.
careers-benefits-remote-label = Remoto primero
careers-benefits-remote-value = Trabaja desde cualquier lugar del mundo
careers-benefits-pay-label = Salario competitivo
careers-benefits-pay-value = Compensación superior a la del mercado
careers-benefits-oss-label = Tiempo para el código abierto
careers-benefits-oss-value = 20% del tiempo para contribuciones a OSS
careers-open-positions-title = Puestos vacantes
careers-open-positions-apply-now = Postular ahora
careers-open-positions-remote = Remoto
careers-open-positions-full-time = Tiempo completo
careers-open-positions-part-time = Tiempo parcial
careers-open-positions-engineering = Ingeniería
careers-open-positions-documentation = Documentación
careers-open-positions-community = Comunidad
careers-open-positions-sf-remote = San Francisco / Remoto
careers-open-positions-frontend-title = Ingeniero Frontend Senior
careers-open-positions-frontend-desc = Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.
careers-open-positions-backend-title = Ingeniero Backend
careers-open-positions-backend-desc = Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.
careers-open-positions-writer-title = Redactor técnico
careers-open-positions-writer-desc = Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.
careers-open-positions-devrel-title = Ingeniero de DevRel
careers-open-positions-devrel-desc = Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.
careers-open-positions-qa-title = Ingeniero de QA
careers-open-positions-qa-desc = Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.
contact-header-title = Ponte en contacto
contact-header-description = ¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en
contact-form-name = Nombre
contact-form-your-name = Tu nombre
contact-form-email = Correo electrónico
contact-form-email-placeholder = tu@ejemplo.com
contact-form-topic = Tema
contact-form-bug-report = Informe de error
contact-form-new-benchmark-idea = Nueva idea de benchmark
contact-form-methodology-question = Pregunta sobre la metodología
contact-form-contribution = Contribución
contact-form-other = Otro
contact-form-message = Mensaje
contact-form-message-placeholder = Describe tu pregunta o idea...
contact-form-send-message = Enviar mensaje
faq-header-title = Preguntas frecuentes
faq-header-description = Todo lo que necesitas saber sobre i18n Benchmark.
faq-list-q1 = ¿Qué es i18n Benchmark?
faq-list-a1 = i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.
faq-list-q2 = ¿Cómo se realizan los benchmarks?
faq-list-a2 = Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.
faq-list-q3 = ¿Qué bibliotecas se admiten actualmente?
faq-list-a3 = Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.
faq-list-q4 = ¿Puedo enviar mis propios benchmarks?
faq-list-a4 = ¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.
faq-list-q5 = ¿Con qué frecuencia se actualizan los benchmarks?
faq-list-a5 = Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.
faq-list-q6 = ¿Son fiables los datos?
faq-list-a6 = Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.
faq-list-q7 = ¿Ofrecen servicios de consultoría?
faq-list-a7 = Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.
faq-list-q8 = ¿Cómo puedo contribuir?
faq-list-a8 = Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.
pricing-header-title = Precios sencillos y transparentes
pricing-header-description = Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.
pricing-tiers-starter-name = Starter
pricing-tiers-starter-price = 0 $
pricing-tiers-starter-period = para siempre
pricing-tiers-starter-feature1 = 5 ejecuciones de benchmark al día
pricing-tiers-starter-feature2 = 3 bibliotecas
pricing-tiers-starter-feature3 = Soporte de la comunidad
pricing-tiers-starter-feature4 = Resultados públicos
pricing-tiers-pro-name = Pro
pricing-tiers-pro-price = 29 $
pricing-tiers-pro-period = /mes
pricing-tiers-pro-feature1 = Ejecuciones ilimitadas
pricing-tiers-pro-feature2 = Todas las bibliotecas
pricing-tiers-pro-feature3 = Soporte prioritario
pricing-tiers-pro-feature4 = Resultados privados
pricing-tiers-pro-feature5 = Integración CI
pricing-tiers-pro-feature6 = Datos históricos
pricing-tiers-enterprise-name = Enterprise
pricing-tiers-enterprise-price = Personalizado
pricing-tiers-enterprise-feature1 = Todo lo que hay en Pro
pricing-tiers-enterprise-feature2 = Opción on-premise
pricing-tiers-enterprise-feature3 = SSO y SAML
pricing-tiers-enterprise-feature4 = Gestor de cuentas dedicado
pricing-tiers-enterprise-feature5 = SLAs personalizados
pricing-tiers-enterprise-feature6 = Registros de auditoría
pricing-tiers-enterprise-feature7 = Sesiones de formación
pricing-tiers-contact-sales = Contactar con ventas
pricing-tiers-get-started = Empezar
products-header-title = Productos
products-header-description = Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.
products-grid-learn-more = Más información
products-grid-cli-name = CLI de Benchmark
products-grid-cli-desc = Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.
products-grid-cli-price = Gratis
products-grid-cloud-name = Benchmark Cloud
products-grid-cloud-desc = Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.
products-grid-cloud-price = 29 $/mes
products-grid-enterprise-name = Benchmark Enterprise
products-grid-enterprise-desc = Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.
products-grid-enterprise-price = Contáctanos
products-grid-migration-name = Asistente de migración
products-grid-migration-desc = Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.
products-grid-migration-price = 99 $ pago único
products-grid-qa-name = QA de traducción
products-grid-qa-desc = Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.
products-grid-qa-price = 19 $/mes
products-grid-optimizer-name = Optimizador de bundle
products-grid-optimizer-desc = Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.
products-grid-optimizer-price = 49 $/mes
settings-header-title = Ajustes
settings-header-description = Gestiona las preferencias y la configuración de tu cuenta.
settings-profile-title = Perfil
settings-profile-display-name = Nombre visible
settings-profile-email = Correo electrónico
settings-preferences-title = Preferencias
settings-preferences-email-notifications = Notificaciones por correo electrónico
settings-preferences-weekly-reports = Recibir informes semanales de benchmarks
settings-preferences-toggle-notifications = Cambiar notificaciones
settings-preferences-dark-mode = Modo oscuro
settings-preferences-dark-color-scheme = Usar esquema de colores oscuro
settings-preferences-toggle-dark-mode = Cambiar modo oscuro
settings-preferences-default-language = Idioma predeterminado
settings-preferences-english = Inglés (en)
settings-preferences-french = Francés (fr)
settings-preferences-german = Alemán (de)
settings-preferences-spanish = Español (es)
settings-preferences-japanese = Japonés (ja)
settings-preferences-chinese = Chino simplificado (zh-CN)
settings-preferences-arabic = Árabe (ar)
settings-api-access-title = Acceso API
settings-api-access-api-key = Llave API
settings-api-access-copy = Copiar
settings-api-access-description = Usa esta llave para acceder a la API de benchmarking de forma programática.
settings-footer-cancel = Cancelar
settings-footer-save-changes = Guardar cambios
team-header-title = Nuestro equipo
team-header-description = Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.
team-grid-member1-name = Sarah Chen
team-grid-member1-role = Fundadora e ingeniera principal
team-grid-member1-bio = Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.
team-grid-member2-name = Marcus Weber
team-grid-member2-role = Ingeniero de rendimiento
team-grid-member2-bio = Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.
team-grid-member3-name = Aisha Patel
team-grid-member3-role = Developer Advocate
team-grid-member3-bio = Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.
team-grid-member4-name = Tomás Rodríguez
team-grid-member4-role = Desarrollador Full-Stack
team-grid-member4-bio = Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.
team-grid-member5-name = Yuki Tanaka
team-grid-member5-role = Analista de datos
team-grid-member5-bio = Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.
team-grid-member6-name = Elena Kowalski
team-grid-member6-role = Responsable de la communauté
team-grid-member6-bio = Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.
not-found-title = 404
not-found-description = ¡Ups! Página no encontrada
not-found-return-home = Volver al inicio
`;
var Mn = `shared-app-name = Bench i18n
shared-site-name = Benchmark i18n
shared-contact-email = contact@intlayer.org
shared-go-to-github = Aller sur GitHub
header-home = Accueil
header-methodology = Méthodologie
header-mock-pages = Pages fictives
header-products = Produits
header-pricing = Tarifs
header-team = Équipe
header-blog = Blog
header-careers = Carrières
header-faq = FAQ
header-contact = Contact
header-settings = Paramètres
footer-title = Benchmark i18n
footer-description = Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.
footer-resources = Ressources
footer-github = GitHub
footer-methodology = Méthodologie
footer-contributing = Contribuer
footer-contact = Contact
footer-built-with = Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.
theme-toggle-auto = Thème : automatique
theme-toggle-dark = Thème : sombre
theme-toggle-light = Thème : clair
theme-toggle-label-auto = Mode thème : automatique (système). Cliquez pour passer en mode clair.
theme-toggle-label-other = Mode thème : {mode}. Cliquez pour changer de mode.
mock-banner = ⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.
home-hero-title = Benchmark i18n
home-hero-description = Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.
home-hero-view-results = Voir les résultats
home-hero-methodology = Méthodologie
home-why-it-matters-title = Pourquoi ces métriques comptent
home-why-it-matters-bundle-size-title = Taille du bundle
home-why-it-matters-bundle-size-desc = Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.
home-why-it-matters-rendering-title = Rendu et hydratation
home-why-it-matters-rendering-desc = Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).
home-why-it-matters-dynamic-loading-title = Chargement dynamique
home-why-it-matters-dynamic-loading-desc = Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.
home-understanding-impact-title = Comprendre l'impact
home-understanding-impact-single-json-title = Pourquoi un unique gros JSON peut nuire aux performances
home-understanding-impact-single-json-intro = Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :
home-understanding-impact-single-json-bullet1 = Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.
home-understanding-impact-single-json-bullet2 = Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.
home-understanding-impact-single-json-bullet3 = Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.
home-understanding-impact-trade-offs-title = Les compromis du chargement dynamique
home-understanding-impact-trade-offs-intro = Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :
home-understanding-impact-waterfall-label = Requêtes en cascade :
home-understanding-impact-waterfall-desc = l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.
home-understanding-impact-fouc-label = Flash de contenu non traduit (FOUC) :
home-understanding-impact-fouc-desc = l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.
home-understanding-impact-cache-label = Invalidation du cache :
home-understanding-impact-cache-desc = mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.
home-understanding-impact-measures-title = Ce que mesure ce benchmark
home-understanding-impact-measures-desc = Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.
home-results-table-title = Exemple de résultats
home-results-table-library = Bibliothèque
home-results-table-bundle-size = Taille du bundle
home-results-table-lookup-time = Temps de recherche
home-results-table-lazy-loading = Chargement paresseux
home-results-table-yes = Oui
home-results-table-manual = Manuel
home-results-table-built-in = Intégré
about-header-title = À propos de ce benchmark
about-header-description = Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.
about-grid-why-exists-title = Pourquoi ce projet existe
about-grid-why-exists-desc = Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.
about-grid-methodology-title = Méthodologie
about-grid-methodology-desc = La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.
about-what-we-measure-title = Ce que nous mesurons
about-what-we-measure-bundle-size-impact = Impact sur la taille du bundle
about-what-we-measure-bundle-size-impact-desc = Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.
about-what-we-measure-rendering-overhead = Surcharge de rendu
about-what-we-measure-rendering-overhead-desc = Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.
about-what-we-measure-hydration-cost = Coût d'hydratation
about-what-we-measure-hydration-cost-desc = En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.
about-what-we-measure-lazy-loading = Efficacité du chargement paresseux
about-what-we-measure-lazy-loading-desc = Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?
about-what-we-measure-locale-switch = Vitesse de changement de langue
about-what-we-measure-locale-switch-desc = À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.
blog-header-title = Blog
blog-header-description = Articles, tutoriels et analyses de la communauté i18n.
blog-list-read-more = Lire la suite →
blog-list-post1-title = Comparer les bibliothèques i18n en 2026 : plongée détaillée
blog-list-post1-date = 15 mars 2026
blog-list-post1-excerpt = Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.
blog-list-post1-category = Benchmark
blog-list-post2-title = Réduire votre bundle i18n de 60 %
blog-list-post2-date = 8 mars 2026
blog-list-post2-excerpt = Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.
blog-list-post2-category = Tutoriel
blog-list-post3-title = État de l'internationalisation dans l'écosystème React
blog-list-post3-date = 28 février 2026
blog-list-post3-excerpt = Panorama des tendances, patterns émergents et préférences de la communauté.
blog-list-post3-category = Analyse
blog-list-post4-title = Migrer de react-i18next vers Lingui
blog-list-post4-date = 15 février 2026
blog-list-post4-excerpt = Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.
blog-list-post4-category = Tutoriel
blog-list-post5-title = Server Components et i18n : qu'est-ce qui change ?
blog-list-post5-date = 1er février 2026
blog-list-post5-excerpt = Les React Server Components introduisent de nouveaux motifs pour l'i18n.
blog-list-post5-category = Analyse
blog-list-post6-title = Méthodologie de benchmark : comment nous testons
blog-list-post6-date = 20 janvier 2026
blog-list-post6-excerpt = Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.
blog-list-post6-category = Méta
careers-header-title = Carrières
careers-header-description = Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.
careers-benefits-remote-label = Remote-first
careers-benefits-remote-value = Travaillez depuis n'importe où
careers-benefits-pay-label = Rémunération compétitive
careers-benefits-pay-value = Fourchettes haut de marché
careers-benefits-oss-label = Temps open source
careers-benefits-oss-value = 20 % du temps pour contribuer à l'OSS
careers-open-positions-title = Postes ouverts
careers-open-positions-apply-now = Postuler
careers-open-positions-remote = À distance
careers-open-positions-full-time = Temps plein
careers-open-positions-part-time = Temps partiel
careers-open-positions-engineering = Ingénierie
careers-open-positions-documentation = Documentation
careers-open-positions-community = Communauté
careers-open-positions-sf-remote = San Francisco / télétravail
careers-open-positions-frontend-title = Ingénieur front-end senior
careers-open-positions-frontend-desc = Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.
careers-open-positions-backend-title = Ingénieur back-end
careers-open-positions-backend-desc = Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.
careers-open-positions-writer-title = Rédacteur·rice technique
careers-open-positions-writer-desc = Guides, références d'API et tutoriels pour la plateforme de benchmark.
careers-open-positions-devrel-title = Ingénieur DevRel
careers-open-positions-devrel-desc = Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.
careers-open-positions-qa-title = Ingénieur QA
careers-open-positions-qa-desc = Garantir la fiabilité des résultats par des tests et validations rigoureux.
contact-header-title = Contact
contact-header-description = Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à
contact-form-name = Nom
contact-form-your-name = Votre nom
contact-form-email = E-mail
contact-form-email-placeholder = vous@exemple.com
contact-form-topic = Sujet
contact-form-bug-report = Rapport de bug
contact-form-new-benchmark-idea = Idée de benchmark
contact-form-methodology-question = Question de méthodologie
contact-form-contribution = Contribution
contact-form-other = Autre
contact-form-message = Message
contact-form-message-placeholder = Décrivez votre question ou idée…
contact-form-send-message = Envoyer
faq-header-title = Questions fréquentes
faq-header-description = Tout savoir sur i18n Benchmark.
faq-list-q1 = Qu'est-ce qu'i18n Benchmark ?
faq-list-a1 = Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.
faq-list-q2 = Comment sont menés les benchmarks ?
faq-list-a2 = Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.
faq-list-q3 = Quelles bibliothèques sont prises en charge ?
faq-list-a3 = react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.
faq-list-q4 = Puis-je proposer des benchmarks ?
faq-list-a4 = Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.
faq-list-q5 = À quelle fréquence sont-ils mis à jour ?
faq-list-a5 = Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.
faq-list-q6 = Les données sont-elles fiables ?
faq-list-a6 = Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.
faq-list-q7 = Proposez-vous du conseil ?
faq-list-a7 = Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.
faq-list-q8 = Comment contribuer ?
faq-list-a8 = Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.
pricing-header-title = Tarification simple et transparente
pricing-header-description = Choisissez l'offre adaptée à votre équipe. Sans frais cachés.
pricing-tiers-starter-name = Starter
pricing-tiers-starter-price = 0 €
pricing-tiers-starter-period = pour toujours
pricing-tiers-starter-feature1 = 5 exécutions de benchmark / jour
pricing-tiers-starter-feature2 = 3 bibliothèques
pricing-tiers-starter-feature3 = Support communautaire
pricing-tiers-starter-feature4 = Résultats publics
pricing-tiers-pro-name = Pro
pricing-tiers-pro-price = 29 €
pricing-tiers-pro-period = / mois
pricing-tiers-pro-feature1 = Exécutions illimitées
pricing-tiers-pro-feature2 = Toutes les bibliothèques
pricing-tiers-pro-feature3 = Support prioritaire
pricing-tiers-pro-feature4 = Résultats privés
pricing-tiers-pro-feature5 = Intégration CI
pricing-tiers-pro-feature6 = Historique
pricing-tiers-enterprise-name = Enterprise
pricing-tiers-enterprise-price = Sur mesure
pricing-tiers-enterprise-feature1 = Tout le Pro
pricing-tiers-enterprise-feature2 = Option on-premise
pricing-tiers-enterprise-feature3 = SSO et SAML
pricing-tiers-enterprise-feature4 = Account manager dédié
pricing-tiers-enterprise-feature5 = SLA sur mesure
pricing-tiers-enterprise-feature6 = Journaux d'audit
pricing-tiers-enterprise-feature7 = Sessions de formation
pricing-tiers-contact-sales = Contacter les ventes
pricing-tiers-get-started = Commencer
products-header-title = Produits
products-header-description = Outils et services pour fluidifier votre flux i18n.
products-grid-learn-more = En savoir plus
products-grid-cli-name = Benchmark CLI
products-grid-cli-desc = Lancez des benchmarks en local. Configurations personnalisées et CI.
products-grid-cli-price = Gratuit
products-grid-cloud-name = Benchmark Cloud
products-grid-cloud-desc = Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.
products-grid-cloud-price = 29 €/mois
products-grid-enterprise-name = Benchmark Enterprise
products-grid-enterprise-desc = On-premise avec SSO, journaux d'audit, SLA et support dédié.
products-grid-enterprise-price = Nous contacter
products-grid-migration-name = Assistant de migration
products-grid-migration-desc = Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.
products-grid-migration-price = 99 € (unique)
products-grid-qa-name = QA des traductions
products-grid-qa-desc = Contrôles automatiques : clés manquantes, pluriels, contexte.
products-grid-qa-price = 19 €/mois
products-grid-optimizer-name = Optimiseur de bundle
products-grid-optimizer-desc = Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).
products-grid-optimizer-price = 49 €/mois
settings-header-title = Paramètres
settings-header-description = Gérez les préférences et la configuration de votre compte.
settings-profile-title = Profil
settings-profile-display-name = Nom affiché
settings-profile-email = E-mail
settings-preferences-title = Préférences
settings-preferences-email-notifications = Notifications e-mail
settings-preferences-weekly-reports = Recevoir les rapports hebdomadaires
settings-preferences-toggle-notifications = Activer/désactiver les notifications
settings-preferences-dark-mode = Mode sombre
settings-preferences-dark-color-scheme = Utiliser le thème sombre
settings-preferences-toggle-dark-mode = Basculer le mode sombre
settings-preferences-default-language = Langue par défaut
settings-preferences-english = Anglais (en)
settings-preferences-french = Français (fr)
settings-preferences-german = Allemand (de)
settings-preferences-spanish = Espagnol (es)
settings-preferences-japanese = Japonais (ja)
settings-preferences-chinese = Chinois simplifié (zh-CN)
settings-preferences-arabic = Arabe (ar)
settings-api-access-title = Accès API
settings-api-access-api-key = Clé API
settings-api-access-copy = Copier
settings-api-access-description = Utilisez cette clé pour appeler l'API de benchmark par programmation.
settings-footer-cancel = Annuler
settings-footer-save-changes = Enregistrer
team-header-title = Notre équipe
team-header-description = Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.
team-grid-member1-name = Sarah Chen
team-grid-member1-role = Fondatrice & lead ingénieur
team-grid-member1-bio = Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.
team-grid-member2-name = Marcus Weber
team-grid-member2-role = Ingénieur performance
team-grid-member2-bio = Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.
team-grid-member3-name = Aisha Patel
team-grid-member3-role = Developer advocate
team-grid-member3-bio = Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.
team-grid-member4-name = Tomás Rodríguez
team-grid-member4-role = Développeur full-stack
team-grid-member4-bio = Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.
team-grid-member5-name = Yuki Tanaka
team-grid-member5-role = Analyste de données
team-grid-member5-bio = Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).
team-grid-member6-name = Elena Kowalski
team-grid-member6-role = Community manager
team-grid-member6-bio = Contributions communautaires, partenariats et événements — gouvernance open source.
not-found-title = 404
not-found-description = Oups ! Page introuvable
not-found-return-home = Retour à l'accueil
`;
var Jn = `shared-app-name = i18n Bench
shared-site-name = i18n Benchmark
shared-contact-email = contact@intlayer.org
shared-go-to-github = Vai su GitHub
header-home = Home
header-methodology = Metodologia
header-mock-pages = Pagine di test
header-products = Prodotti
header-pricing = Prezzi
header-team = Team
header-blog = Blog
header-careers = Carriere
header-faq = FAQ
header-contact = Contatti
header-settings = Impostazioni
footer-title = i18n Benchmark
footer-description = Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.
footer-resources = Risorse
footer-github = GitHub
footer-methodology = Metodologia
footer-contributing = Contribuire
footer-contact = Contatti
footer-built-with = i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.
theme-toggle-auto = Tema: Auto
theme-toggle-dark = Tema: Scuro
theme-toggle-light = Tema: Chiaro
theme-toggle-label-auto = Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.
theme-toggle-label-other = Modalità tema: {mode}. Clicca per cambiare modalità.
mock-banner = ⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.
home-hero-title = i18n Benchmark
home-hero-description = Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.
home-hero-view-results = Visualizza i risultati
home-hero-methodology = Metodologia
home-why-it-matters-title = Perché queste metriche sono importanti
home-why-it-matters-bundle-size-title = Dimensione del bundle
home-why-it-matters-bundle-size-desc = Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.
home-why-it-matters-rendering-title = Rendering e idratazione
home-why-it-matters-rendering-desc = Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).
home-why-it-matters-dynamic-loading-title = Caricamento dinamico
home-why-it-matters-dynamic-loading-desc = Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.
home-understanding-impact-title = Capire l'impatto
home-understanding-impact-single-json-title = Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni
home-understanding-impact-single-json-intro = Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:
home-understanding-impact-single-json-bullet1 = Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.
home-understanding-impact-single-json-bullet2 = Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.
home-understanding-impact-single-json-bullet3 = Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.
home-understanding-impact-trade-offs-title = I compromessi del caricamento dinamico
home-understanding-impact-trade-offs-intro = La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:
home-understanding-impact-waterfall-label = Richieste a cascata:
home-understanding-impact-waterfall-desc = l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.
home-understanding-impact-fouc-label = Flash di contenuti non tradotti (FOUC):
home-understanding-impact-fouc-desc = gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.
home-understanding-impact-cache-label = Invalidazione della cache:
home-understanding-impact-cache-desc = l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.
home-understanding-impact-measures-title = Cosa misura questo benchmark
home-understanding-impact-measures-desc = Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.
home-results-table-title = Risultati di esempio
home-results-table-library = Libreria
home-results-table-bundle-size = Dimensione del bundle
home-results-table-lookup-time = Tempo di ricerca
home-results-table-lazy-loading = Caricamento lazy
home-results-table-yes = Sì
home-results-table-manual = Manuale
home-results-table-built-in = Integrato
about-header-title = Informazioni su questo benchmark
about-header-description = Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.
about-grid-why-exists-title = Perché esiste
about-grid-why-exists-desc = Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.
about-grid-methodology-title = Metodologia
about-grid-methodology-desc = La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.
about-what-we-measure-title = Cosa misuriamo
about-what-we-measure-bundle-size-impact = Impatto sulla dimensione del bundle
about-what-we-measure-bundle-size-impact-desc = I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.
about-what-we-measure-rendering-overhead = Sovrapprezzo di rendering
about-what-we-measure-rendering-overhead-desc = Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.
about-what-we-measure-hydration-cost = Costo di idratazione
about-what-we-measure-hydration-cost-desc = Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.
about-what-we-measure-lazy-loading = Efficacia del caricamento pigro
about-what-we-measure-lazy-loading-desc = Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).
about-what-we-measure-locale-switch = Velocità di cambio lingua
about-what-we-measure-locale-switch-desc = Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.
blog-header-title = Blog
blog-header-description = Approfondimenti, tutorial e analisi dalla comunità i18n.
blog-list-read-more = Leggi di più →
blog-list-post1-title = Confronto delle librerie i18n nel 2026: un'analisi approfondita
blog-list-post1-date = 15 marzo 2026
blog-list-post1-excerpt = Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.
blog-list-post1-category = Benchmark
blog-list-post2-title = Come ridurre il bundle i18n del 60%
blog-list-post2-date = 8 marzo 2026
blog-list-post2-excerpt = Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.
blog-list-post2-category = Tutorial
blog-list-post3-title = Lo stato dell'internazionalizzazione in React
blog-list-post3-date = 28 febbraio 2026
blog-list-post3-excerpt = Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.
blog-list-post3-category = Analisi
blog-list-post4-title = Migrazione da react-i18next a Lingui
blog-list-post4-date = 15 febbraio 2026
blog-list-post4-excerpt = Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.
blog-list-post4-category = Tutorial
blog-list-post5-title = Server Components e i18n: cosa cambia?
blog-list-post5-date = 1 febbraio 2026
blog-list-post5-excerpt = I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.
blog-list-post5-category = Analisi
blog-list-post6-title = Metodologia del benchmark: come testiamo
blog-list-post6-date = 20 gennaio 2026
blog-list-post6-excerpt = Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.
blog-list-post6-category = Meta
careers-header-title = Carriere
careers-header-description = Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.
careers-benefits-remote-label = Remote-first
careers-benefits-remote-value = Lavora da qualsiasi parte del mondo
careers-benefits-pay-label = Retribuzione competitiva
careers-benefits-pay-value = Compensazione ai vertici del mercato
careers-benefits-oss-label = Tempo per l'open source
careers-benefits-oss-value = 20% del tempo per contributi open source
careers-open-positions-title = Posizioni aperte
careers-open-positions-apply-now = Candidati ora
careers-open-positions-remote = Remoto
careers-open-positions-full-time = Tempo pieno
careers-open-positions-part-time = Part-time
careers-open-positions-engineering = Engineering
careers-open-positions-documentation = Documentazione
careers-open-positions-community = Comunità
careers-open-positions-sf-remote = San Francisco / Remoto
careers-open-positions-frontend-title = Ingegnere Frontend Senior
careers-open-positions-frontend-desc = Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.
careers-open-positions-backend-title = Backend Engineer
careers-open-positions-backend-desc = Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.
careers-open-positions-writer-title = Scrittore tecnico
careers-open-positions-writer-desc = Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.
careers-open-positions-devrel-title = Ingegnere DevRel
careers-open-positions-devrel-desc = Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.
careers-open-positions-qa-title = Ingegnere QA
careers-open-positions-qa-desc = Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.
contact-header-title = Contattaci
contact-header-description = Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo
contact-form-name = Nome
contact-form-your-name = Il tuo nome
contact-form-email = Email
contact-form-email-placeholder = tu@esempio.com
contact-form-topic = Argomento
contact-form-bug-report = Segnalazione bug
contact-form-new-benchmark-idea = Nuova idea di benchmark
contact-form-methodology-question = Domanda sulla metodologia
contact-form-contribution = Contributo
contact-form-other = Altro
contact-form-message = Messaggio
contact-form-message-placeholder = Descrivi la tua domanda o idea...
contact-form-send-message = Invia messaggio
faq-header-title = Domande frequenti
faq-header-description = Tutto quello che c'è da sapere su i18n Benchmark.
faq-list-q1 = Cos'è i18n Benchmark?
faq-list-a1 = i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.
faq-list-q2 = Come vengono condotti i benchmark?
faq-list-a2 = Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.
faq-list-q3 = Quali librerie sono attualmente supportate?
faq-list-a3 = Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.
faq-list-q4 = Posso inviare i miei benchmark?
faq-list-a4 = Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.
faq-list-q5 = Con quale frequenza vengono aggiornati i benchmark?
faq-list-a5 = Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.
faq-list-q6 = I dati sono affidabili?
faq-list-a6 = Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.
faq-list-q7 = Offrite servizi di consulenza?
faq-list-a7 = Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.
faq-list-q8 = Come posso contribuire?
faq-list-a8 = Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.
pricing-header-title = Prezzi semplici e trasparenti
pricing-header-description = Scegli il piano più adatto al tuo team. Nessun costo nascosto.
pricing-tiers-starter-name = Starter
pricing-tiers-starter-price = 0 $
pricing-tiers-starter-period = per sempre
pricing-tiers-starter-feature1 = 5 esecuzioni benchmark al giorno
pricing-tiers-starter-feature2 = 3 librerie
pricing-tiers-starter-feature3 = Supporto della comunità
pricing-tiers-starter-feature4 = Risultati pubblici
pricing-tiers-pro-name = Pro
pricing-tiers-pro-price = 29 $
pricing-tiers-pro-period = /mese
pricing-tiers-pro-feature1 = Esecuzioni illimitate
pricing-tiers-pro-feature2 = Tutte le librerie
pricing-tiers-pro-feature3 = Supporto prioritario
pricing-tiers-pro-feature4 = Risultati privati
pricing-tiers-pro-feature5 = Integrazione CI
pricing-tiers-pro-feature6 = Dati storici
pricing-tiers-enterprise-name = Enterprise
pricing-tiers-enterprise-price = Personalizzato
pricing-tiers-enterprise-feature1 = Tutto quello che c'è in Pro
pricing-tiers-enterprise-feature2 = Opzione on-premise
pricing-tiers-enterprise-feature3 = SSO e SAML
pricing-tiers-enterprise-feature4 = Account manager dedicato
pricing-tiers-enterprise-feature5 = SLA personalizzati
pricing-tiers-enterprise-feature6 = Log di controllo
pricing-tiers-enterprise-feature7 = Sessioni di formazione
pricing-tiers-contact-sales = Contatta l'ufficio vendite
pricing-tiers-get-started = Inizia ora
products-header-title = Prodotti
products-header-description = Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.
products-grid-learn-more = Scopri di più
products-grid-cli-name = CLI del Benchmark
products-grid-cli-desc = Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.
products-grid-cli-price = Gratis
products-grid-cloud-name = Benchmark Cloud
products-grid-cloud-desc = Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.
products-grid-cloud-price = 29 $/mese
products-grid-enterprise-name = Benchmark Enterprise
products-grid-enterprise-desc = Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.
products-grid-enterprise-price = Contattaci
products-grid-migration-name = Assistente alla migrazione
products-grid-migration-desc = Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.
products-grid-migration-price = 99 $ una tantum
products-grid-qa-name = QA delle traduzioni
products-grid-qa-desc = Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.
products-grid-qa-price = 19 $/mese
products-grid-optimizer-name = Ottimizzatore del bundle
products-grid-optimizer-desc = Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.
products-grid-optimizer-price = 49 $/mese
settings-header-title = Impostazioni
settings-header-description = Gestisci le preferenze del tuo account e la configurazione.
settings-profile-title = Profilo
settings-profile-display-name = Nome visualizzato
settings-profile-email = Email
settings-preferences-title = Preferenze
settings-preferences-email-notifications = Notifiche via email
settings-preferences-weekly-reports = Ricevi rapporti settimanali sui benchmark
settings-preferences-toggle-notifications = Attiva/disattiva notifiche
settings-preferences-dark-mode = Modalità scura
settings-preferences-dark-color-scheme = Usa lo schema colori scuro
settings-preferences-toggle-dark-mode = Attiva/disattiva modalità scura
settings-preferences-default-language = Lingua predefinita
settings-preferences-english = Inglese (en)
settings-preferences-french = Francese (fr)
settings-preferences-german = Tedesco (de)
settings-preferences-spanish = Spagnolo (es)
settings-preferences-japanese = Giapponese (ja)
settings-preferences-chinese = Cinese semplificato (zh-CN)
settings-preferences-arabic = Arabo (ar)
settings-api-access-title = Accesso API
settings-api-access-api-key = Chiave API
settings-api-access-copy = Copia
settings-api-access-description = Usa questa chiave per accedere programmaticamente alle API di benchmarking.
settings-footer-cancel = Annulla
settings-footer-save-changes = Salva modifiche
team-header-title = Il nostro team
team-header-description = Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.
team-grid-member1-name = Sarah Chen
team-grid-member1-role = Fondatrice e Responsabile tecnico
team-grid-member1-bio = Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.
team-grid-member2-name = Marcus Weber
team-grid-member2-role = Ingegnere delle prestazioni
team-grid-member2-bio = Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.
team-grid-member3-name = Aisha Patel
team-grid-member3-role = Developer Advocate
team-grid-member3-bio = Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.
team-grid-member4-name = Tomás Rodríguez
team-grid-member4-role = Sviluppatore Full-Stack
team-grid-member4-bio = Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.
team-grid-member5-name = Yuki Tanaka
team-grid-member5-role = Analista dati
team-grid-member5-bio = Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.
team-grid-member6-name = Elena Kowalski
team-grid-member6-role = Responsable della comunità
team-grid-member6-bio = Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.
not-found-title = 404
not-found-description = Ops! Pagina non trovata
not-found-return-home = Torna alla Home
`;
var Pn = `shared-app-name = i18n Bench
shared-site-name = i18n Benchmark
shared-contact-email = contact@intlayer.org
shared-go-to-github = GitHubへ
header-home = ホーム
header-methodology = 手法
header-mock-pages = テストページ
header-products = 製品
header-pricing = 価格
header-team = チーム
header-blog = ブログ
header-careers = 採用情報
header-faq = FAQ
header-contact = お問い合わせ
header-settings = 設定
footer-title = i18n Benchmark
footer-description = 国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。
footer-resources = リソース
footer-github = GitHub
footer-methodology = 手法
footer-contributing = 貢献する
footer-contact = お問い合わせ
footer-built-with = i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。
theme-toggle-auto = テーマ：自動
theme-toggle-dark = テーマ：ダーク
theme-toggle-light = テーマ：ライト
theme-toggle-label-auto = テーマモード：自動（システム）。クリックするとライトモードに切り替わります。
theme-toggle-label-other = テーマモード：{mode}。クリックしてモードを切り替えます。
mock-banner = ⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。
home-hero-title = i18n Benchmark
home-hero-description = 国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。
home-hero-view-results = 結果を見る
home-hero-methodology = 手法
home-why-it-matters-title = なぜこれらの指標が重要なのか
home-why-it-matters-bundle-size-title = バンドルサイズ
home-why-it-matters-bundle-size-desc = バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。
home-why-it-matters-rendering-title = レンダリングとハイドレーション
home-why-it-matters-rendering-desc = 巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。
home-why-it-matters-dynamic-loading-title = 動的読み込み
home-why-it-matters-dynamic-loading-desc = すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。
home-understanding-impact-title = 影響を理解する
home-understanding-impact-single-json-title = なぜ1つの大きなJSONがパフォーマンスを低下させるのか
home-understanding-impact-single-json-intro = 多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：
home-understanding-impact-single-json-bullet1 = ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。
home-understanding-impact-single-json-bullet2 = コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。
home-understanding-impact-single-json-bullet3 = サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。
home-understanding-impact-trade-offs-title = 動的読み込みのトレードオフ
home-understanding-impact-trade-offs-intro = 翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：
home-understanding-impact-waterfall-label = ウォーターフォールリクエスト：
home-understanding-impact-waterfall-desc = アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。
home-understanding-impact-fouc-label = 翻訳されていないコンテンツのフラッシュ (FOUC)：
home-understanding-impact-fouc-desc = チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。
home-understanding-impact-cache-label = キャッシュの無効化：
home-understanding-impact-cache-desc = 翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。
home-understanding-impact-measures-title = このベンチマークが測定するもの
home-understanding-impact-measures-desc = このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。
home-results-table-title = サンプル結果
home-results-table-library = ライブラリ
home-results-table-bundle-size = バンドルサイズ
home-results-table-lookup-time = ルックアップ時間
home-results-table-lazy-loading = 遅延読み込み
home-results-table-yes = はい
home-results-table-manual = 手動
home-results-table-built-in = 内蔵
about-header-title = このベンチマークについて
about-header-description = これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。
about-grid-why-exists-title = なぜこれが存在するのか
about-grid-why-exists-desc = i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。
about-grid-methodology-title = 手法
about-grid-methodology-desc = 同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。
about-what-we-measure-title = 測定項目
about-what-we-measure-bundle-size-impact = バンドルサイズへの影響
about-what-we-measure-bundle-size-impact-desc = i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。
about-what-we-measure-rendering-overhead = レンダリングのオーバーヘッド
about-what-we-measure-rendering-overhead-desc = ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。
about-what-we-measure-hydration-cost = ハイドレーションコスト
about-what-we-measure-hydration-cost-desc = SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。
about-what-we-measure-lazy-loading = 遅延読み込みの有効性
about-what-we-measure-lazy-loading-desc = ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。
about-what-we-measure-locale-switch = ロケール切り替え速度
about-what-we-measure-locale-switch-desc = 実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。
blog-header-title = ブログ
blog-header-description = i18nコミュニティからのインサイト、チュートリアル、分析。
blog-list-read-more = 続きを読む →
blog-list-post1-title = 2026年のi18nライブラリ比較：ディープダイブ
blog-list-post1-date = 2026年3月15日
blog-list-post1-excerpt = パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。
blog-list-post1-category = ベンチマーク
blog-list-post2-title = i18nバンドルを60%削減する方法
blog-list-post2-date = 2026年3月8日
blog-list-post2-excerpt = 遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。
blog-list-post2-category = チュートリアル
blog-list-post3-title = Reactにおける国際化の現状
blog-list-post3-date = 2026年2月28日
blog-list-post3-excerpt = トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。
blog-list-post3-category = 分析
blog-list-post4-title = react-i18nextからLinguiへの移行
blog-list-post4-date = 2026年2月15日
blog-list-post4-excerpt = 50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。
blog-list-post4-category = チュートリアル
blog-list-post5-title = Server Componentsとi18n：何が変わるのか？
blog-list-post5-date = 2026年2月1日
blog-list-post5-excerpt = React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。
blog-list-post5-category = 分析
blog-list-post6-title = ベンチマーク手法：テスト方法について
blog-list-post6-date = 2026年1月20日
blog-list-post6-excerpt = テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。
blog-list-post6-category = メタ
careers-header-title = 採用情報
careers-header-description = 国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。
careers-benefits-remote-label = リモートファースト
careers-benefits-remote-value = 世界中のどこからでも仕事ができます
careers-benefits-pay-label = 競争力のある給与
careers-benefits-pay-value = 市場トップクラスの報酬
careers-benefits-oss-label = オープンソースの時間
careers-benefits-oss-value = 時間の20%をOSSへの貢献に
careers-open-positions-title = 募集中の職種
careers-open-positions-apply-now = 今すぐ応募
careers-open-positions-remote = リモート
careers-open-positions-full-time = フルタイム
careers-open-positions-part-time = パートタイム
careers-open-positions-engineering = エンジニアリング
careers-open-positions-documentation = ドキュメンテーション
careers-open-positions-community = コミュニティ
careers-open-positions-sf-remote = サンフランシスコ / リモート
careers-open-positions-frontend-title = シニアフロントエンドエンジニア
careers-open-positions-frontend-desc = React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。
careers-open-positions-backend-title = バックエンドエンジニア
careers-open-positions-backend-desc = 毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。
careers-open-positions-writer-title = テクニカルライター
careers-open-positions-writer-desc = ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。
careers-open-positions-devrel-title = DevRelエンジニア
careers-open-positions-devrel-desc = トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。
careers-open-positions-qa-title = QAエンジニア
careers-open-positions-qa-desc = 厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。
contact-header-title = お問い合わせ
contact-header-description = アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：
contact-form-name = 名前
contact-form-your-name = お名前
contact-form-email = メールアドレス
contact-form-email-placeholder = you@example.com
contact-form-topic = トピック
contact-form-bug-report = バグ報告
contact-form-new-benchmark-idea = 新しいベンチマークのアイデア
contact-form-methodology-question = 手法に関する質問
contact-form-contribution = 貢献
contact-form-other = その他
contact-form-message = メッセージ
contact-form-message-placeholder = ご質問やアイデアを記入してください...
contact-form-send-message = メッセージを送信
faq-header-title = よくある質問
faq-header-description = i18n Benchmarkについて知っておくべきすべてのこと。
faq-list-q1 = i18n Benchmarkとは何ですか？
faq-list-a1 = i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。
faq-list-q2 = ベンチマークはどのように実施されますか？
faq-list-a2 = 一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。
faq-list-q3 = 現在サポートされているライブラリは何ですか？
faq-list-a3 = react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。
faq-list-q4 = 自分のベンチマークを投稿できますか？
faq-list-a4 = はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。
faq-list-q5 = ベンチマークはどのくらいの頻度で更新されますか？
faq-list-a5 = 各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。
faq-list-q6 = データは信頼できますか？
faq-list-a6 = ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。
faq-list-q7 = コンサルティングサービスは提供していますか？
faq-list-a7 = はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。
faq-list-q8 = どのように貢献できますか？
faq-list-a8 = 貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。
pricing-header-title = シンプルで透明性の高い価格設定
pricing-header-description = チームに合ったプランをお選びください。隠れた費用はありません。
pricing-tiers-starter-name = スターター
pricing-tiers-starter-price = 0円
pricing-tiers-starter-period = ずっと無料
pricing-tiers-starter-feature1 = 1日あたり5回のベンチマーク実行
pricing-tiers-starter-feature2 = 3ライブラリ
pricing-tiers-starter-feature3 = コミュニティサポート
pricing-tiers-starter-feature4 = 公開結果
pricing-tiers-pro-name = プロ
pricing-tiers-pro-price = 29ドル
pricing-tiers-pro-period = /月
pricing-tiers-pro-feature1 = 無制限の実行
pricing-tiers-pro-feature2 = すべてのライブラリ
pricing-tiers-pro-feature3 = 優先サポート
pricing-tiers-pro-feature4 = 非公開の結果
pricing-tiers-pro-feature5 = CI統合
pricing-tiers-pro-feature6 = 履歴データ
pricing-tiers-enterprise-name = エンタープライズ
pricing-tiers-enterprise-price = カスタム
pricing-tiers-enterprise-feature1 = Proプランのすべてを含む
pricing-tiers-enterprise-feature2 = オンプレミスオプション
pricing-tiers-enterprise-feature3 = SSO & SAML
pricing-tiers-enterprise-feature4 = 専任のアカウントマネージャー
pricing-tiers-enterprise-feature5 = カスタムSLA
pricing-tiers-enterprise-feature6 = 監査ログ
pricing-tiers-enterprise-feature7 = トレーニングセッション
pricing-tiers-contact-sales = 営業に問い合わせる
pricing-tiers-get-started = 始める
products-header-title = 製品
products-header-description = 国際化ワークフローを効率化するためのツールとサービス。
products-grid-learn-more = 詳細はこちら
products-grid-cli-name = Benchmark CLI
products-grid-cli-desc = ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。
products-grid-cli-price = 無料
products-grid-cloud-name = Benchmark Cloud
products-grid-cloud-desc = 履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。
products-grid-cloud-price = 29ドル/月
products-grid-enterprise-name = Benchmark Enterprise
products-grid-enterprise-desc = SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。
products-grid-enterprise-price = お問い合わせ
products-grid-migration-name = 移行アシスタント
products-grid-migration-desc = ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。
products-grid-migration-price = 99ドル（一回限り）
products-grid-qa-name = 翻訳QA
products-grid-qa-desc = 翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。
products-grid-qa-price = 19ドル/月
products-grid-optimizer-name = バンドルオプティマイザー
products-grid-optimizer-desc = ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。
products-grid-optimizer-price = 49ドル/月
settings-header-title = 設定
settings-header-description = アカウント設定と構成を管理します。
settings-profile-title = プロフィール
settings-profile-display-name = 表示名
settings-profile-email = メールアドレス
settings-preferences-title = 設定
settings-preferences-email-notifications = メール通知
settings-preferences-weekly-reports = 毎週のベンチマークレポートを受け取る
settings-preferences-toggle-notifications = 通知の切り替え
settings-preferences-dark-mode = ダークモード
settings-preferences-dark-color-scheme = ダークカラー（暗い配色）を使用する
settings-preferences-toggle-dark-mode = ダークモードの切り替え
settings-preferences-default-language = デフォルトの言語
settings-preferences-english = 英語 (en)
settings-preferences-french = フランス語 (fr)
settings-preferences-german = ドイツ語 (de)
settings-preferences-spanish = スペイン語 (es)
settings-preferences-japanese = 日本語 (ja)
settings-preferences-chinese = 中国語（簡体字） (zh-CN)
settings-preferences-arabic = アラビア語 (ar)
settings-api-access-title = APIアクセス
settings-api-access-api-key = APIキー
settings-api-access-copy = コピー
settings-api-access-description = このキーを使用して、プログラムでベンチマークAPIにアクセスします。
settings-footer-cancel = キャンセル
settings-footer-save-changes = 変更を保存
team-header-title = 私たちのチーム
team-header-description = i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。
team-grid-member1-name = Sarah Chen
team-grid-member1-role = 創設者 & リードエンジニア
team-grid-member1-bio = 大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。
team-grid-member2-name = Marcus Weber
team-grid-member2-role = パフォーマンスエンジニア
team-grid-member2-bio = JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。
team-grid-member3-name = Aisha Patel
team-grid-member3-role = Developer Advocate
team-grid-member3-bio = 開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。
team-grid-member4-name = Tomás Rodríguez
team-grid-member4-role = フルスタックデベロッパー
team-grid-member4-bio = ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。
team-grid-member5-name = Yuki Tanaka
team-grid-member5-role = データアナリスト
team-grid-member5-bio = すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。
team-grid-member6-name = Elena Kowalski
team-grid-member6-role = コミュニティマネージャー
team-grid-member6-bio = コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。
not-found-title = 404
not-found-description = おっと！ページが見つかりません
not-found-return-home = ホームに戻る
`;
var Fn = `shared-app-name = i18n Bench
shared-site-name = i18n Benchmark
shared-contact-email = contact@intlayer.org
shared-go-to-github = Go to GitHub
header-home = Home
header-methodology = Methodology
header-mock-pages = Mock Pages
header-products = Products
header-pricing = Pricing
header-team = Team
header-blog = Blog
header-careers = Careers
header-faq = FAQ
header-contact = Contact
header-settings = Settings
footer-title = i18n Benchmark
footer-description = An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.
footer-resources = Resources
footer-github = GitHub
footer-methodology = Methodology
footer-contributing = Contributing
footer-contact = Contact
footer-built-with = i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.
theme-toggle-auto = Theme: Auto
theme-toggle-dark = Theme: Dark
theme-toggle-light = Theme: Light
theme-toggle-label-auto = Theme mode: auto (system). Click to switch to light mode.
theme-toggle-label-other = Theme mode: {mode}. Click to switch mode.
mock-banner = ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.
home-hero-title = i18n Benchmark
home-hero-description = A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.
home-hero-view-results = View Results
home-hero-methodology = Methodology
home-why-it-matters-title = Why These Metrics Matter
home-why-it-matters-bundle-size-title = Bundle Size
home-why-it-matters-bundle-size-desc = The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.
home-why-it-matters-rendering-title = Rendering & Hydration
home-why-it-matters-rendering-desc = Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).
home-why-it-matters-dynamic-loading-title = Dynamic Loading
home-why-it-matters-dynamic-loading-desc = Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.
home-understanding-impact-title = Understanding the Impact
home-understanding-impact-single-json-title = Why a single large JSON can hurt performance
home-understanding-impact-single-json-intro = Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:
home-understanding-impact-single-json-bullet1 = The JSON must be parsed on every page load — blocking the main thread.
home-understanding-impact-single-json-bullet2 = Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.
home-understanding-impact-single-json-bullet3 = During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.
home-understanding-impact-trade-offs-title = The trade-offs of dynamic loading
home-understanding-impact-trade-offs-intro = Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:
home-understanding-impact-waterfall-label = Waterfall requests:
home-understanding-impact-waterfall-desc = the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.
home-understanding-impact-fouc-label = Flash of untranslated content (FOUC):
home-understanding-impact-fouc-desc = users may briefly see translation keys or a fallback language before the chunk arrives.
home-understanding-impact-cache-label = Cache invalidation:
home-understanding-impact-cache-desc = updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.
home-understanding-impact-measures-title = What this benchmark measures
home-understanding-impact-measures-desc = This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.
home-results-table-title = Sample Results
home-results-table-library = Library
home-results-table-bundle-size = Bundle Size
home-results-table-lookup-time = Lookup Time
home-results-table-lazy-loading = Lazy Loading
home-results-table-yes = Yes
home-results-table-manual = Manual
home-results-table-built-in = Built-in
about-header-title = About This Benchmark
about-header-description = This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.
about-grid-why-exists-title = Why This Exists
about-grid-why-exists-desc = Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.
about-grid-methodology-title = Methodology
about-grid-methodology-desc = The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.
about-what-we-measure-title = What We Measure
about-what-we-measure-bundle-size-impact = Bundle size impact
about-what-we-measure-bundle-size-impact-desc = The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.
about-what-we-measure-rendering-overhead = Rendering overhead
about-what-we-measure-rendering-overhead-desc = How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.
about-what-we-measure-hydration-cost = Hydration cost
about-what-we-measure-hydration-cost-desc = During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.
about-what-we-measure-lazy-loading = Lazy loading effectiveness
about-what-we-measure-lazy-loading-desc = Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).
about-what-we-measure-locale-switch = Locale switch speed
about-what-we-measure-locale-switch-desc = How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.
blog-header-title = Blog
blog-header-description = Insights, tutorials, and analysis from the i18n community.
blog-list-read-more = Read More →
blog-list-post1-title = Comparing i18n Libraries in 2026: A Deep Dive
blog-list-post1-date = March 15, 2026
blog-list-post1-excerpt = We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.
blog-list-post1-category = Benchmark
blog-list-post2-title = How to Reduce Your i18n Bundle by 60%
blog-list-post2-date = March 8, 2026
blog-list-post2-excerpt = Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.
blog-list-post2-category = Tutorial
blog-list-post3-title = The State of Internationalization in React
blog-list-post3-date = February 28, 2026
blog-list-post3-excerpt = An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.
blog-list-post3-category = Analysis
blog-list-post4-title = Migrating from react-i18next to Lingui
blog-list-post4-date = February 15, 2026
blog-list-post4-excerpt = A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.
blog-list-post4-category = Tutorial
blog-list-post5-title = Server Components and i18n: What Changes?
blog-list-post5-date = February 1, 2026
blog-list-post5-excerpt = React Server Components introduce new patterns for internationalization. We explore the implications and best practices.
blog-list-post5-category = Analysis
blog-list-post6-title = Benchmark Methodology: How We Test
blog-list-post6-date = January 20, 2026
blog-list-post6-excerpt = A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.
blog-list-post6-category = Meta
careers-header-title = Careers
careers-header-description = Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.
careers-benefits-remote-label = Remote-first
careers-benefits-remote-value = Work from anywhere in the world
careers-benefits-pay-label = Competitive pay
careers-benefits-pay-value = Top-of-market compensation
careers-benefits-oss-label = Open source time
careers-benefits-oss-value = 20% time for OSS contributions
careers-open-positions-title = Open Positions
careers-open-positions-apply-now = Apply Now
careers-open-positions-remote = Remote
careers-open-positions-full-time = Full-time
careers-open-positions-part-time = Part-time
careers-open-positions-engineering = Engineering
careers-open-positions-documentation = Documentation
careers-open-positions-community = Community
careers-open-positions-sf-remote = San Francisco / Remote
careers-open-positions-frontend-title = Senior Frontend Engineer
careers-open-positions-frontend-desc = Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.
careers-open-positions-backend-title = Backend Engineer
careers-open-positions-backend-desc = Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.
careers-open-positions-writer-title = Technical Writer
careers-open-positions-writer-desc = Create comprehensive guides, API references, and tutorials for our benchmarking platform.
careers-open-positions-devrel-title = DevRel Engineer
careers-open-positions-devrel-desc = Engage with the i18n community through talks, workshops, blog posts, and open source contributions.
careers-open-positions-qa-title = QA Engineer
careers-open-positions-qa-desc = Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.
contact-header-title = Get in Touch
contact-header-description = Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at
contact-form-name = Name
contact-form-your-name = Your name
contact-form-email = Email
contact-form-email-placeholder = you@example.com
contact-form-topic = Topic
contact-form-bug-report = Bug Report
contact-form-new-benchmark-idea = New Benchmark Idea
contact-form-methodology-question = Methodology Question
contact-form-contribution = Contribution
contact-form-other = Other
contact-form-message = Message
contact-form-message-placeholder = Describe your question or idea...
contact-form-send-message = Send Message
faq-header-title = Frequently Asked Questions
faq-header-description = Everything you need to know about i18n Benchmark.
faq-list-q1 = What is i18n Benchmark?
faq-list-a1 = i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.
faq-list-q2 = How are benchmarks conducted?
faq-list-a2 = We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.
faq-list-q3 = Which libraries are currently supported?
faq-list-a3 = We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.
faq-list-q4 = Can I submit my own benchmarks?
faq-list-a4 = Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.
faq-list-q5 = How often are benchmarks updated?
faq-list-a5 = We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.
faq-list-q6 = Is the data reliable?
faq-list-a6 = We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.
faq-list-q7 = Do you offer consulting services?
faq-list-a7 = Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.
faq-list-q8 = How can I contribute?
faq-list-a8 = There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.
pricing-header-title = Simple, Transparent Pricing
pricing-header-description = Choose the plan that fits your team. No hidden fees.
pricing-tiers-starter-name = Starter
pricing-tiers-starter-price = $0
pricing-tiers-starter-period = forever
pricing-tiers-starter-feature1 = 5 benchmark runs/day
pricing-tiers-starter-feature2 = 3 libraries
pricing-tiers-starter-feature3 = Community support
pricing-tiers-starter-feature4 = Public results
pricing-tiers-pro-name = Pro
pricing-tiers-pro-price = $29
pricing-tiers-pro-period = /month
pricing-tiers-pro-feature1 = Unlimited runs
pricing-tiers-pro-feature2 = All libraries
pricing-tiers-pro-feature3 = Priority support
pricing-tiers-pro-feature4 = Private results
pricing-tiers-pro-feature5 = CI integration
pricing-tiers-pro-feature6 = Historical data
pricing-tiers-enterprise-name = Enterprise
pricing-tiers-enterprise-price = Custom
pricing-tiers-enterprise-feature1 = Everything in Pro
pricing-tiers-enterprise-feature2 = On-premise option
pricing-tiers-enterprise-feature3 = SSO & SAML
pricing-tiers-enterprise-feature4 = Dedicated account manager
pricing-tiers-enterprise-feature5 = Custom SLAs
pricing-tiers-enterprise-feature6 = Audit logs
pricing-tiers-enterprise-feature7 = Training sessions
pricing-tiers-contact-sales = Contact Sales
pricing-tiers-get-started = Get Started
products-header-title = Products
products-header-description = Tools and services to streamline your internationalization workflow.
products-grid-learn-more = Learn More
products-grid-cli-name = Benchmark CLI
products-grid-cli-desc = Run benchmarks locally from your terminal. Supports custom configurations and CI integration.
products-grid-cli-price = Free
products-grid-cloud-name = Benchmark Cloud
products-grid-cloud-desc = Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.
products-grid-cloud-price = $29/mo
products-grid-enterprise-name = Benchmark Enterprise
products-grid-enterprise-desc = On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.
products-grid-enterprise-price = Contact Us
products-grid-migration-name = Migration Assistant
products-grid-migration-desc = AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.
products-grid-migration-price = $99 one-time
products-grid-qa-name = Translation QA
products-grid-qa-desc = Automated quality checks for missing translations, pluralization issues, and context errors.
products-grid-qa-price = $19/mo
products-grid-optimizer-name = Bundle Optimizer
products-grid-optimizer-desc = Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.
products-grid-optimizer-price = $49/mo
settings-header-title = Settings
settings-header-description = Manage your account preferences and configuration.
settings-profile-title = Profile
settings-profile-display-name = Display Name
settings-profile-email = Email
settings-preferences-title = Preferences
settings-preferences-email-notifications = Email Notifications
settings-preferences-weekly-reports = Receive weekly benchmark reports
settings-preferences-toggle-notifications = Toggle notifications
settings-preferences-dark-mode = Dark Mode
settings-preferences-dark-color-scheme = Use dark color scheme
settings-preferences-toggle-dark-mode = Toggle dark mode
settings-preferences-default-language = Default Language
settings-preferences-english = English (en)
settings-preferences-french = French (fr)
settings-preferences-german = German (de)
settings-preferences-spanish = Spanish (es)
settings-preferences-japanese = Japanese (ja)
settings-preferences-chinese = Chinese Simplified (zh-CN)
settings-preferences-arabic = Arabic (ar)
settings-api-access-title = API Access
settings-api-access-api-key = API Key
settings-api-access-copy = Copy
settings-api-access-description = Use this key to access the benchmarking API programmatically.
settings-footer-cancel = Cancel
settings-footer-save-changes = Save Changes
team-header-title = Our Team
team-header-description = Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.
team-grid-member1-name = Sarah Chen
team-grid-member1-role = Founder & Lead Engineer
team-grid-member1-bio = Former Google engineer with 10 years of experience building internationalization systems at scale.
team-grid-member2-name = Marcus Weber
team-grid-member2-role = Performance Engineer
team-grid-member2-bio = Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.
team-grid-member3-name = Aisha Patel
team-grid-member3-role = Developer Advocate
team-grid-member3-bio = Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.
team-grid-member4-name = Tomás Rodríguez
team-grid-member4-role = Full-Stack Developer
team-grid-member4-bio = Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.
team-grid-member5-name = Yuki Tanaka
team-grid-member5-role = Data Analyst
team-grid-member5-bio = Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.
team-grid-member6-name = Elena Kowalski
team-grid-member6-role = Community Manager
team-grid-member6-bio = Manages community contributions, partnerships, and events. Background in open source governance.
not-found-title = 404
not-found-description = Oops! Page not found
not-found-return-home = Return to Home
`;
var In = `shared-app-name = i18n Bench
shared-site-name = i18n Benchmark
shared-contact-email = contact@intlayer.org
shared-go-to-github = Ir para o GitHub
header-home = Início
header-methodology = Metodologia
header-mock-pages = Páginas de Teste
header-products = Produtos
header-pricing = Preços
header-team = Equipe
header-blog = Blog
header-careers = Carreiras
header-faq = FAQ
header-contact = Contato
header-settings = Configurações
footer-title = i18n Benchmark
footer-description = Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.
footer-resources = Recursos
footer-github = GitHub
footer-methodology = Metodologia
footer-contributing = Contribuindo
footer-contact = Contato
footer-built-with = i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.
theme-toggle-auto = Tema: Automático
theme-toggle-dark = Tema: Escuro
theme-toggle-light = Tema: Claro
theme-toggle-label-auto = Modo de tema: auto (sistema). Clique para mudar para o modo claro.
theme-toggle-label-other = Modo de tema: {mode}. Clique para mudar de modo.
mock-banner = ⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.
home-hero-title = i18n Benchmark
home-hero-description = Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.
home-hero-view-results = Ver Resultados
home-hero-methodology = Metodologia
home-why-it-matters-title = Por que estas métricas importam
home-why-it-matters-bundle-size-title = Tamanho do bundle
home-why-it-matters-bundle-size-desc = O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.
home-why-it-matters-rendering-title = Renderização e hidratação
home-why-it-matters-rendering-desc = Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).
home-why-it-matters-dynamic-loading-title = Carregamento dinâmico
home-why-it-matters-dynamic-loading-desc = Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.
home-understanding-impact-title = Entendendo o impacto
home-understanding-impact-single-json-title = Por que um único JSON grande pode prejudicar o desempenho
home-understanding-impact-single-json-intro = Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:
home-understanding-impact-single-json-bullet1 = O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.
home-understanding-impact-single-json-bullet2 = Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.
home-understanding-impact-single-json-bullet3 = Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.
home-understanding-impact-trade-offs-title = Os trade-offs do carregamento dinâmico
home-understanding-impact-trade-offs-intro = Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:
home-understanding-impact-waterfall-label = Requisições em cascata:
home-understanding-impact-waterfall-desc = o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.
home-understanding-impact-fouc-label = Flash de conteúdo não traduzido (FOUC):
home-understanding-impact-fouc-desc = usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.
home-understanding-impact-cache-label = Invalidação de cache:
home-understanding-impact-cache-desc = atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.
home-understanding-impact-measures-title = O que este benchmark mede
home-understanding-impact-measures-desc = Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.
home-results-table-title = Resultados de exemplo
home-results-table-library = Biblioteca
home-results-table-bundle-size = Tamanho do Bundle
home-results-table-lookup-time = Tempo de Busca
home-results-table-lazy-loading = Carregamento Lento
home-results-table-yes = Sim
home-results-table-manual = Manual
home-results-table-built-in = Integrado
about-header-title = Sobre este benchmark
about-header-description = Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.
about-grid-why-exists-title = Por que isto existe
about-grid-why-exists-desc = Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.
about-grid-methodology-title = Metodologia
about-grid-methodology-desc = O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.
about-what-we-measure-title = O que medimos
about-what-we-measure-bundle-size-impact = Impacto no tamanho do bundle
about-what-we-measure-bundle-size-impact-desc = Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.
about-what-we-measure-rendering-overhead = Sobrecarga de renderização
about-what-we-measure-rendering-overhead-desc = Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.
about-what-we-measure-hydration-cost = Custo de hidratação
about-what-we-measure-hydration-cost-desc = Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.
about-what-we-measure-lazy-loading = Eficácia do carregamento lento
about-what-we-measure-lazy-loading-desc = Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).
about-what-we-measure-locale-switch = Velocidade de troca de localidade
about-what-we-measure-locale-switch-desc = Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.
blog-header-title = Blog
blog-header-description = Insights, tutoriais e análises da comunidade i18n.
blog-list-read-more = Ler Mais →
blog-list-post1-title = Comparando bibliotecas i18n em 2026: um mergulho profundo
blog-list-post1-date = 15 de março de 2026
blog-list-post1-excerpt = Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.
blog-list-post1-category = Benchmark
blog-list-post2-title = Como reduzir seu bundle i18n em 60%
blog-list-post2-date = 8 de março de 2026
blog-list-post2-excerpt = Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.
blog-list-post2-category = Tutorial
blog-list-post3-title = O estado da internacionalização no React
blog-list-post3-date = 28 de fevereiro de 2026
blog-list-post3-excerpt = Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.
blog-list-post3-category = Análise
blog-list-post4-title = Migrando de react-i18next para o Lingui
blog-list-post4-date = 15 de fevereiro de 2026
blog-list-post4-excerpt = Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.
blog-list-post4-category = Tutorial
blog-list-post5-title = Server Components e i18n: o que muda?
blog-list-post5-date = 1 de fevereiro de 2026
blog-list-post5-excerpt = React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.
blog-list-post5-category = Análise
blog-list-post6-title = Metodologia de benchmark: como testamos
blog-list-post6-date = 20 de janeiro de 2026
blog-list-post6-excerpt = Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.
blog-list-post6-category = Meta
careers-header-title = Carreiras
careers-header-description = Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.
careers-benefits-remote-label = Remoto primeiro
careers-benefits-remote-value = Trabalhe de qualquer lugar do mundo
careers-benefits-pay-label = Salário competitivo
careers-benefits-pay-value = Remuneração acima do mercado
careers-benefits-oss-label = Tempo para o código aberto
careers-benefits-oss-value = 20% do tempo para contribuições OSS
careers-open-positions-title = Vagas abertas
careers-open-positions-apply-now = Candidatar-se agora
careers-open-positions-remote = Remoto
careers-open-positions-full-time = Tempo integral
careers-open-positions-part-time = Tempo parcial
careers-open-positions-engineering = Engenharia
careers-open-positions-documentation = Documentação
careers-open-positions-community = Comunidade
careers-open-positions-sf-remote = San Francisco / Remoto
careers-open-positions-frontend-title = Engenheiro Frontend Sênior
careers-open-positions-frontend-desc = Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.
careers-open-positions-backend-title = Engenheiro Backend
careers-open-positions-backend-desc = Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.
careers-open-positions-writer-title = Redator técnico
careers-open-positions-writer-desc = Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.
careers-open-positions-devrel-title = Engenheiro de DevRel
careers-open-positions-devrel-desc = Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.
careers-open-positions-qa-title = Engenheiro de QA
careers-open-positions-qa-desc = Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.
contact-header-title = Entre em contato
contact-header-description = Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em
contact-form-name = Nome
contact-form-your-name = Seu nome
contact-form-email = E-mail
contact-form-email-placeholder = voce@exemplo.com
contact-form-topic = Assunto
contact-form-bug-report = Relatório de bug
contact-form-new-benchmark-idea = Nova ideia de benchmark
contact-form-methodology-question = Pergunta sobre metodologia
contact-form-contribution = Contribuição
contact-form-other = Outro
contact-form-message = Mensagem
contact-form-message-placeholder = Descreva sua pergunta ou ideia...
contact-form-send-message = Enviar mensagem
faq-header-title = Perguntas frequentes
faq-header-description = Tudo o que você precisa saber sobre o i18n Benchmark.
faq-list-q1 = O que é o i18n Benchmark?
faq-list-a1 = O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.
faq-list-q2 = Como os benchmarks são conduzidos?
faq-list-a2 = Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.
faq-list-q3 = Quais bibliotecas são suportadas atualmente?
faq-list-a3 = Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.
faq-list-q4 = Posso enviar meus próprios benchmarks?
faq-list-a4 = Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.
faq-list-q5 = Com que frequência os benchmarks são atualizados?
faq-list-a5 = Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.
faq-list-q6 = Os dados são confiáveis?
faq-list-a6 = Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.
faq-list-q7 = Vocês oferecem serviços de consultoria?
faq-list-a7 = Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.
faq-list-q8 = Como posso contribuir?
faq-list-a8 = Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.
pricing-header-title = Preços simples e transparentes
pricing-header-description = Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.
pricing-tiers-starter-name = Starter
pricing-tiers-starter-price = 0 $
pricing-tiers-starter-period = para sempre
pricing-tiers-starter-feature1 = 5 execuções de benchmark/dia
pricing-tiers-starter-feature2 = 3 bibliotecas
pricing-tiers-starter-feature3 = Suporte da comunidade
pricing-tiers-starter-feature4 = Resultados públicos
pricing-tiers-pro-name = Pro
pricing-tiers-pro-price = 29 $
pricing-tiers-pro-period = /mês
pricing-tiers-pro-feature1 = Execuções ilimitadas
pricing-tiers-pro-feature2 = Todas as bibliotecas
pricing-tiers-pro-feature3 = Suporte prioritário
pricing-tiers-pro-feature4 = Resultados privados
pricing-tiers-pro-feature5 = Integração CI
pricing-tiers-pro-feature6 = Dados históricos
pricing-tiers-enterprise-name = Enterprise
pricing-tiers-enterprise-price = Personalizado
pricing-tiers-enterprise-feature1 = Tudo o que está no Pro
pricing-tiers-enterprise-feature2 = Opção on-premise
pricing-tiers-enterprise-feature3 = SSO e SAML
pricing-tiers-enterprise-feature4 = Gerente de conta dedicado
pricing-tiers-enterprise-feature5 = SLAs personalizados
pricing-tiers-enterprise-feature6 = Logs de auditoria
pricing-tiers-enterprise-feature7 = Sessões de treinamento
pricing-tiers-contact-sales = Contatar vendas
pricing-tiers-get-started = Começar
products-header-title = Produtos
products-header-description = Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.
products-grid-learn-more = Saiba Mais
products-grid-cli-name = Benchmark CLI
products-grid-cli-desc = Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.
products-grid-cli-price = Grátis
products-grid-cloud-name = Benchmark Cloud
products-grid-cloud-desc = Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.
products-grid-cloud-price = 29 $/mês
products-grid-enterprise-name = Benchmark Enterprise
products-grid-enterprise-desc = Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.
products-grid-enterprise-price = Contate-nos
products-grid-migration-name = Assistente de migração
products-grid-migration-desc = Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.
products-grid-migration-price = 99 $ taxa única
products-grid-qa-name = QA de tradução
products-grid-qa-desc = Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.
products-grid-qa-price = 19 $/mês
products-grid-optimizer-name = Otimizador de bundle
products-grid-optimizer-desc = Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.
products-grid-optimizer-price = 49 $/mês
settings-header-title = Configurações
settings-header-description = Gerencie suas preferências de conta e configuração.
settings-profile-title = Perfil
settings-profile-display-name = Nome de exibição
settings-profile-email = E-mail
settings-preferences-title = Preferências
settings-preferences-email-notifications = Notificações por e-mail
settings-preferences-weekly-reports = Receber relatórios semanais de benchmarks
settings-preferences-toggle-notifications = Alternar notificações
settings-preferences-dark-mode = Modo Escuro
settings-preferences-dark-color-scheme = Usar esquema de cores escuro
settings-preferences-toggle-dark-mode = Alternar modo escuro
settings-preferences-default-language = Idioma padrão
settings-preferences-english = Inglês (en)
settings-preferences-french = Francés (fr)
settings-preferences-german = Alemão (de)
settings-preferences-spanish = Espanhol (es)
settings-preferences-japanese = Japonês (ja)
settings-preferences-chinese = Chinês Simplificado (zh-CN)
settings-preferences-arabic = Árabe (ar)
settings-api-access-title = Acesso API
settings-api-access-api-key = Chave API
settings-api-access-copy = Copiar
settings-api-access-description = Use esta chave para acessar a API de benchmarking programaticamente.
settings-footer-cancel = Cancelar
settings-footer-save-changes = Salvar alterações
team-header-title = Nossa equipe
team-header-description = Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.
team-grid-member1-name = Sarah Chen
team-grid-member1-role = Fundadora e Engenheira Líder
team-grid-member1-bio = Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.
team-grid-member2-name = Marcus Weber
team-grid-member2-role = Engenheiro de performance
team-grid-member2-bio = Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.
team-grid-member3-name = Aisha Patel
team-grid-member3-role = Developer Advocate
team-grid-member3-bio = Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.
team-grid-member4-name = Tomás Rodríguez
team-grid-member4-role = Desenvolvedor Full-Stack
team-grid-member4-bio = Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.
team-grid-member5-name = Yuki Tanaka
team-grid-member5-role = Analista de dados
team-grid-member5-bio = Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.
team-grid-member6-name = Elena Kowalski
team-grid-member6-role = Gerente de comunidade
team-grid-member6-bio = Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.
not-found-title = 404
not-found-description = Ops! Página não encontrada
not-found-return-home = Voltar para o início
`;
var Ln = `shared-app-name = i18n Bench
shared-site-name = i18n Benchmark
shared-contact-email = contact@intlayer.org
shared-go-to-github = Перейти на GitHub
header-home = Главная
header-methodology = Методология
header-mock-pages = Тестовые страницы
header-products = Продукты
header-pricing = Цены
header-team = Команда
header-blog = Блог
header-careers = Вакансии
header-faq = FAQ
header-contact = Контакт
header-settings = Настройки
footer-title = i18n Benchmark
footer-description = Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.
footer-resources = Ресурсы
footer-github = GitHub
footer-methodology = Методология
footer-contributing = Участие в проекте
footer-contact = Контакт
footer-built-with = i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.
theme-toggle-auto = Тема: Авто
theme-toggle-dark = Тема: Темная
theme-toggle-light = Тема: Светлая
theme-toggle-label-auto = Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.
theme-toggle-label-other = Режим темы: {mode}. Нажмите, чтобы сменить режим.
mock-banner = ⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.
home-hero-title = i18n Benchmark
home-hero-description = Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.
home-hero-view-results = Посмотреть результаты
home-hero-methodology = Методология
home-why-it-matters-title = Почему эти метрики важны
home-why-it-matters-bundle-size-title = Размер бандла
home-why-it-matters-bundle-size-desc = Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.
home-why-it-matters-rendering-title = Рендеринг и гидратация
home-why-it-matters-rendering-desc = Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).
home-why-it-matters-dynamic-loading-title = Динамическая загрузка
home-why-it-matters-dynamic-loading-desc = Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.
home-understanding-impact-title = Понимание влияния
home-understanding-impact-single-json-title = Почему один большой JSON может снизить производительность
home-understanding-impact-single-json-intro = Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:
home-understanding-impact-single-json-bullet1 = JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.
home-understanding-impact-single-json-bullet2 = Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.
home-understanding-impact-single-json-bullet3 = При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.
home-understanding-impact-trade-offs-title = Компромиссы динамической загрузки
home-understanding-impact-trade-offs-intro = Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:
home-understanding-impact-waterfall-label = Каскадные запросы:
home-understanding-impact-waterfall-desc = приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.
home-understanding-impact-fouc-label = Мерцание непереведенного контента (FOUC):
home-understanding-impact-fouc-desc = пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.
home-understanding-impact-cache-label = Инвалидация кэша:
home-understanding-impact-cache-desc = обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.
home-understanding-impact-measures-title = Что измеряет этот бенчмарк
home-understanding-impact-measures-desc = Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.
home-results-table-title = Примеры результатов
home-results-table-library = Библиотека
home-results-table-bundle-size = Размер бандла
home-results-table-lookup-time = Время поиска
home-results-table-lazy-loading = Ленивая загрузка
home-results-table-yes = Да
home-results-table-manual = Вручную
home-results-table-built-in = Встроено
about-header-title = Об этом бенчмарке
about-header-description = Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.
about-grid-why-exists-title = Зачем это нужно
about-grid-why-exists-desc = Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.
about-grid-methodology-title = Методология
about-grid-methodology-desc = Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.
about-what-we-measure-title = Что мы измеряем
about-what-we-measure-bundle-size-impact = Влияние на размер бандла
about-what-we-measure-bundle-size-impact-desc = Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.
about-what-we-measure-rendering-overhead = Накладные расходы на рендеринг
about-what-we-measure-rendering-overhead-desc = Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.
about-what-we-measure-hydration-cost = Стоимость гидратации
about-what-we-measure-hydration-cost-desc = Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.
about-what-we-measure-lazy-loading = Эффективность ленивой загрузки
about-what-we-measure-lazy-loading-desc = Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).
about-what-we-measure-locale-switch = Скорость переключения языка
about-what-we-measure-locale-switch-desc = Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.
blog-header-title = Блог
blog-header-description = Инсайты, туториалы и аналитика от сообщества i18n.
blog-list-read-more = Читать далее →
blog-list-post1-title = Сравнение библиотек i18n в 2026 году: глубокое погружение
blog-list-post1-date = 15 марта 2026 г.
blog-list-post1-excerpt = Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.
blog-list-post1-category = Бенчмарк
blog-list-post2-title = Как уменьшить бандл i18n на 60%
blog-list-post2-date = 8 марта 2026 г.
blog-list-post2-excerpt = Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.
blog-list-post2-category = Туториал
blog-list-post3-title = Состояние интернационализации в React
blog-list-post3-date = 28 февраля 2026 г.
blog-list-post3-excerpt = Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.
blog-list-post3-category = Анализ
blog-list-post4-title = Миграция с react-i18next на Lingui
blog-list-post4-date = 15 февраля 2026 г.
blog-list-post4-excerpt = Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.
blog-list-post4-category = Туториал
blog-list-post5-title = Server Components и i18n: что меняется?
blog-list-post5-date = 1 февраля 2026 г.
blog-list-post5-excerpt = React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.
blog-list-post5-category = Анализ
blog-list-post6-title = Методология бенчмарка: как мы тестируем
blog-list-post6-date = 20 января 2026 г.
blog-list-post6-excerpt = Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.
blog-list-post6-category = Мета
careers-header-title = Вакансии
careers-header-description = Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.
careers-benefits-remote-label = Удаленная работа
careers-benefits-remote-value = Работайте из любой точки мира
careers-benefits-pay-label = Конкурентная зарплата
careers-benefits-pay-value = Вознаграждение выше рыночного
careers-benefits-oss-label = Время на open source
careers-benefits-oss-value = 20% времени на вклад в OSS
careers-open-positions-title = Открытые вакансии
careers-open-positions-apply-now = Подать заявку
careers-open-positions-remote = Удаленно
careers-open-positions-full-time = Полная занятость
careers-open-positions-part-time = Частичная занятость
careers-open-positions-engineering = Разработка
careers-open-positions-documentation = Документация
careers-open-positions-community = Сообщество
careers-open-positions-sf-remote = Сан-Франциско / Удаленно
careers-open-positions-frontend-title = Старший фронтенд-инженер
careers-open-positions-frontend-desc = Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.
careers-open-positions-backend-title = Бэкенд-инженер
careers-open-positions-backend-desc = Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.
careers-open-positions-writer-title = Технический писатель
careers-open-positions-writer-desc = Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.
careers-open-positions-devrel-title = DevRel-инженер
careers-open-positions-devrel-desc = Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.
careers-open-positions-qa-title = QA-инженер
careers-open-positions-qa-desc = Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.
contact-header-title = Связаться с нами
contact-header-description = Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу
contact-form-name = Имя
contact-form-your-name = Ваше имя
contact-form-email = Электронная почта
contact-form-email-placeholder = you@example.com
contact-form-topic = Тема
contact-form-bug-report = Отчет об ошибке
contact-form-new-benchmark-idea = Идея нового бенчмарка
contact-form-methodology-question = Вопрос по методологии
contact-form-contribution = Вклад в проект
contact-form-other = Другое
contact-form-message = Сообщение
contact-form-message-placeholder = Опишите ваш вопрос или идею...
contact-form-send-message = Отправить сообщение
faq-header-title = Часто задаваемые вопросы
faq-header-description = Все, что вам нужно знать об i18n Benchmark.
faq-list-q1 = Что такое i18n Benchmark?
faq-list-a1 = i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.
faq-list-q2 = Как проводятся бенчмарки?
faq-list-a2 = Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.
faq-list-q3 = Какие библиотеки поддерживаются в данный момент?
faq-list-a3 = Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.
faq-list-q4 = Могу ли я прислать свои собственные бенчмарки?
faq-list-a4 = Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.
faq-list-q5 = Как часто обновляются бенчмарки?
faq-list-a5 = Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.
faq-list-q6 = Можно ли доверять данным?
faq-list-a6 = Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.
faq-list-q7 = Предоставляете ли вы консалтинговые услуги?
faq-list-a7 = Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.
faq-list-q8 = Как я могу помочь проекту?
faq-list-a8 = Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.
pricing-header-title = Простые и прозрачные цены
pricing-header-description = Выберите подходящий план для вашей команды. Никаких скрытых комиссий.
pricing-tiers-starter-name = Starter
pricing-tiers-starter-price = 0 $
pricing-tiers-starter-period = навсегда
pricing-tiers-starter-feature1 = 5 запусков бенчмарка в день
pricing-tiers-starter-feature2 = 3 библиотеки
pricing-tiers-starter-feature3 = Поддержка сообщества
pricing-tiers-starter-feature4 = Публичные результаты
pricing-tiers-pro-name = Pro
pricing-tiers-pro-price = 29 $
pricing-tiers-pro-period = /мес
pricing-tiers-pro-feature1 = Неограниченное число запусков
pricing-tiers-pro-feature2 = Все библиотеки
pricing-tiers-pro-feature3 = Приоритетная поддержка
pricing-tiers-pro-feature4 = Приватные результаты
pricing-tiers-pro-feature5 = Интеграция с CI
pricing-tiers-pro-feature6 = Исторические данные
pricing-tiers-enterprise-name = Enterprise
pricing-tiers-enterprise-price = Индивидуально
pricing-tiers-enterprise-feature1 = Все, что есть в Pro
pricing-tiers-enterprise-feature2 = Локальная установка
pricing-tiers-enterprise-feature3 = SSO и SAML
pricing-tiers-enterprise-feature4 = Персональный менеджер
pricing-tiers-enterprise-feature5 = Индивидуальные SLA
pricing-tiers-enterprise-feature6 = Журналы аудита
pricing-tiers-enterprise-feature7 = Обучающие сессии
pricing-tiers-contact-sales = Связаться с отделом продаж
pricing-tiers-get-started = Начать работу
products-header-title = Продукты
products-header-description = Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.
products-grid-learn-more = Узнать больше
products-grid-cli-name = Benchmark CLI
products-grid-cli-desc = Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.
products-grid-cli-price = Бесплатно
products-grid-cloud-name = Benchmark Cloud
products-grid-cloud-desc = Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.
products-grid-cloud-price = 29 $/мес
products-grid-enterprise-name = Benchmark Enterprise
products-grid-enterprise-desc = Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.
products-grid-enterprise-price = Связаться с нами
products-grid-migration-name = Помощник по миграции
products-grid-migration-desc = Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.
products-grid-migration-price = 99 $ (разово)
products-grid-qa-name = QA переводов
products-grid-qa-desc = Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.
products-grid-qa-price = 19 $/мес
products-grid-optimizer-name = Оптимизатор бандла
products-grid-optimizer-desc = Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.
products-grid-optimizer-price = 49 $/мес
settings-header-title = Настройки
settings-header-description = Управляйте предпочтениями и конфигурацией вашей учетной записи.
settings-profile-title = Профиль
settings-profile-display-name = Отображаемое имя
settings-profile-email = Электронная почта
settings-preferences-title = Предпочтения
settings-preferences-email-notifications = Уведомления по почте
settings-preferences-weekly-reports = Получать еженедельные отчеты о бенчмарках
settings-preferences-toggle-notifications = Переключить уведомления
settings-preferences-dark-mode = Темная тема
settings-preferences-dark-color-scheme = Использовать темную цветовую схему
settings-preferences-toggle-dark-mode = Переключить темную тему
settings-preferences-default-language = Язык по умолчанию
settings-preferences-english = Английский (en)
settings-preferences-french = Французский (fr)
settings-preferences-german = Немецкий (de)
settings-preferences-spanish = Испанский (es)
settings-preferences-japanese = Японский (ja)
settings-preferences-chinese = Китайский упрощенный (zh-CN)
settings-preferences-arabic = Арабский (ar)
settings-api-access-title = Доступ к API
settings-api-access-api-key = Ключ API
settings-api-access-copy = Копировать
settings-api-access-description = Используйте этот ключ для программного доступа к API бенчмаркинга.
settings-footer-cancel = Отмена
settings-footer-save-changes = Сохранить изменения
team-header-title = Наша команда
team-header-description = Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.
team-grid-member1-name = Сара Чен
team-grid-member1-role = Основатель и ведущий инженер
team-grid-member1-bio = Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.
team-grid-member2-name = Маркус Вебер
team-grid-member2-role = Инженер по производительности
team-grid-member2-bio = Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.
team-grid-member3-name = Айша Патель
team-grid-member3-role = Developer Advocate
team-grid-member3-bio = Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.
team-grid-member4-name = Томас Родригес
team-grid-member4-role = Full-Stack разработчик
team-grid-member4-bio = Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.
team-grid-member5-name = Юки Танака
team-grid-member5-role = Аналитик данных
team-grid-member5-bio = Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).
team-grid-member6-name = Елена Ковальски
team-grid-member6-role = Комьюнити-менеджер
team-grid-member6-bio = Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.
not-found-title = 404
not-found-description = Упс! Страница не найдена
not-found-return-home = Вернуться на главную
`;
var Rn = `shared-app-name = i18n Bench
shared-site-name = i18n Benchmark
shared-contact-email = contact@intlayer.org
shared-go-to-github = 前往 GitHub
header-home = 首页
header-methodology = 方法论
header-mock-pages = 模拟页面
header-products = 产品
header-pricing = 价格
header-team = 团队
header-blog = 博客
header-careers = 招聘
header-faq = 常见问题
header-contact = 联系我们
header-settings = 设置
footer-title = i18n Benchmark
footer-description = 一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。
footer-resources = 资源
footer-github = GitHub
footer-methodology = 方法论
footer-contributing = 贡献
footer-contact = 联系我们
footer-built-with = i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。
theme-toggle-auto = 主题：自动
theme-toggle-dark = 主题：深色
theme-toggle-light = 主题：浅色
theme-toggle-label-auto = 主题模式：自动（系统）。点击切换到浅色模式。
theme-toggle-label-other = 主题模式：{mode}。点击切换模式。
mock-banner = ⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。
home-hero-title = i18n Benchmark
home-hero-description = 一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。
home-hero-view-results = 查看结果
home-hero-methodology = 方法论
home-why-it-matters-title = 为什么这些指标很重要
home-why-it-matters-bundle-size-title = 包大小
home-why-it-matters-bundle-size-desc = 包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。
home-why-it-matters-rendering-title = 渲染与注水
home-why-it-matters-rendering-desc = 将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。
home-why-it-matters-dynamic-loading-title = 动态加载
home-why-it-matters-dynamic-loading-desc = 预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。
home-understanding-impact-title = 理解影响
home-understanding-impact-single-json-title = 为什么单个大型 JSON 会损害性能
home-understanding-impact-single-json-intro = 许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：
home-understanding-impact-single-json-bullet1 = 每次页面加载时都必须解析 JSON — 阻塞主线程。
home-understanding-impact-single-json-bullet2 = 当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。
home-understanding-impact-single-json-bullet3 = 在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。
home-understanding-impact-trade-offs-title = 动态加载的权衡
home-understanding-impact-trade-offs-intro = 将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：
home-understanding-impact-waterfall-label = 瀑布流请求：
home-understanding-impact-waterfall-desc = 应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。
home-understanding-impact-fouc-label = 未翻译内容闪烁 (FOUC)：
home-understanding-impact-fouc-desc = 在块到达之前，用户可能会短暂看到翻译键或回退语言。
home-understanding-impact-cache-label = 缓存失效：
home-understanding-impact-cache-desc = 更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。
home-understanding-impact-measures-title = 此基准测试衡量的内容
home-understanding-impact-measures-desc = 此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。
home-results-table-title = 示例结果
home-results-table-library = 库
home-results-table-bundle-size = 包大小
home-results-table-lookup-time = 查找时间
home-results-table-lazy-loading = 延迟加载
home-results-table-yes = 是
home-results-table-manual = 手动
home-results-table-built-in = 内置
about-header-title = 关于此基准测试
about-header-description = 这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。
about-grid-why-exists-title = 为什么存在这个测试
about-grid-why-exists-desc = 选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。
about-grid-methodology-title = 方法论
about-grid-methodology-desc = 相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。
about-what-we-measure-title = 衡量指标
about-what-we-measure-bundle-size-impact = 包大小影响
about-what-we-measure-bundle-size-impact-desc = 包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。
about-what-we-measure-rendering-overhead = 渲染开销
about-what-we-measure-rendering-overhead-desc = 库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。
about-what-we-measure-hydration-cost = 注水成本
about-what-we-measure-hydration-cost-desc = 在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。
about-what-we-measure-lazy-loading = 延迟加载有效性
about-what-we-measure-lazy-loading-desc = 按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。
about-what-we-measure-locale-switch = 语言环境切换速度
about-what-we-measure-locale-switch-desc = 应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。
blog-header-title = 博客
blog-header-description = 来自 i18n 社区的见解、教程和分析。
blog-list-read-more = 阅读更多 →
blog-list-post1-title = 2026 年 i18n 库对比：深度分析
blog-list-post1-date = 2026年3月15日
blog-list-post1-excerpt = 我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。
blog-list-post1-category = 基准测试
blog-list-post2-title = 如何将 i18n 包大小减少 60%
blog-list-post2-date = 2026年3月8日
blog-list-post2-excerpt = 优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。
blog-list-post2-category = 教程
blog-list-post3-title = React 国际化现状
blog-list-post3-date = 2026年2月28日
blog-list-post3-excerpt = React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。
blog-list-post3-category = 分析
blog-list-post4-title = 从 react-i18next 迁移到 Lingui
blog-list-post4-date = 2026年2月15日
blog-list-post4-excerpt = 关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。
blog-list-post4-category = 教程
blog-list-post5-title = Server Components 与 i18n：发生了什么变化？
blog-list-post5-date = 2026年2月1日
blog-list-post5-excerpt = React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。
blog-list-post5-category = 分析
blog-list-post6-title = 基准测试方法论：我们如何测试
blog-list-post6-date = 2026年1月20日
blog-list-post6-excerpt = 透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。
blog-list-post6-category = Meta
careers-header-title = 招聘
careers-header-description = 加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。
careers-benefits-remote-label = 远程优先
careers-benefits-remote-value = 在世界任何地方工作
careers-benefits-pay-label = 具有竞争力的薪酬
careers-benefits-pay-value = 市场顶尖的薪资水平
careers-benefits-oss-label = 开源时间
careers-benefits-oss-value = 20% 的时间用于 OSS 贡献
careers-open-positions-title = 开放职位
careers-open-positions-apply-now = 立即申请
careers-open-positions-remote = 远程
careers-open-positions-full-time = 全职
careers-open-positions-part-time = 兼职
careers-open-positions-engineering = 工程
careers-open-positions-documentation = 文档
careers-open-positions-community = 社区
careers-open-positions-sf-remote = 旧金山 / 远程
careers-open-positions-frontend-title = 高级前端工程师
careers-open-positions-frontend-desc = 使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。
careers-open-positions-backend-title = 后端工程师
careers-open-positions-backend-desc = 设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。
careers-open-positions-writer-title = 技术作家
careers-open-positions-writer-desc = 为我们的基准测试平台编写全面的指南、API 参考和教程。
careers-open-positions-devrel-title = DevRel 工程师
careers-open-positions-devrel-desc = 通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。
careers-open-positions-qa-title = QA 工程师
careers-open-positions-qa-desc = 通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。
contact-header-title = 取得联系
contact-header-description = 有想法、发现了错误或想贡献基准测试？请联系我们：
contact-form-name = 姓名
contact-form-your-name = 您的姓名
contact-form-email = 电子邮件
contact-form-email-placeholder = you@example.com
contact-form-topic = 主题
contact-form-bug-report = 错误报告
contact-form-new-benchmark-idea = 新基准测试想法
contact-form-methodology-question = 方法论问题
contact-form-contribution = 贡献
contact-form-other = 其他
contact-form-message = 消息
contact-form-message-placeholder = 描述您的问题或想法...
contact-form-send-message = 发送消息
faq-header-title = 常见问题
faq-header-description = 关于 i18n 基准测试您需要了解的一切。
faq-list-q1 = 什么是 i18n 基准测试？
faq-list-a1 = i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。
faq-list-q2 = 基准测试是如何进行的？
faq-list-a2 = 我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。
faq-list-q3 = 目前支持哪些库？
faq-list-a3 = 我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。
faq-list-q4 = 我可以提交我自己的基准测试吗？
faq-list-a4 = 是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。
faq-list-q5 = 基准测试多久更新一次？
faq-list-a5 = 我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。
faq-list-q6 = 数据可靠吗？
faq-list-a6 = 我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。
faq-list-q7 = 你们提供咨询服务吗？
faq-list-a7 = 是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。
faq-list-q8 = 我该如何贡献？
faq-list-a8 = 有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。
pricing-header-title = 简单透明的定价
pricing-header-description = 选择适合您团队的计划。无隐藏费用。
pricing-tiers-starter-name = 入门版
pricing-tiers-starter-price = 0 $
pricing-tiers-starter-period = 永久
pricing-tiers-starter-feature1 = 每天 5 次基准测试运行
pricing-tiers-starter-feature2 = 3 个库
pricing-tiers-starter-feature3 = 社区支持
pricing-tiers-starter-feature4 = 公开结果
pricing-tiers-pro-name = 专业版
pricing-tiers-pro-price = 29 $
pricing-tiers-pro-period = /月
pricing-tiers-pro-feature1 = 无限次运行
pricing-tiers-pro-feature2 = 所有库
pricing-tiers-pro-feature3 = 优先支持
pricing-tiers-pro-feature4 = 私有结果
pricing-tiers-pro-feature5 = CI 集成
pricing-tiers-pro-feature6 = 历史数据
pricing-tiers-enterprise-name = 企业版
pricing-tiers-enterprise-price = 定制
pricing-tiers-enterprise-feature1 = 包含专业版中的所有功能
pricing-tiers-enterprise-feature2 = 本地部署选项
pricing-tiers-enterprise-feature3 = SSO 和 SAML
pricing-tiers-enterprise-feature4 = 专属客户经理
pricing-tiers-enterprise-feature5 = 定制 SLA
pricing-tiers-enterprise-feature6 = 审计日志
pricing-tiers-enterprise-feature7 = 培训课程
pricing-tiers-contact-sales = 联系销售
pricing-tiers-get-started = 开始使用
products-header-title = 产品
products-header-description = 用于简化国际化工作流程的工具和服务。
products-grid-learn-more = 了解更多
products-grid-cli-name = 基准测试 CLI
products-grid-cli-desc = 从您的终端本地运行基准测试。支持自定义配置和 CI 集成。
products-grid-cli-price = 免费
products-grid-cloud-name = 基准测试云
products-grid-cloud-desc = 具有历史追踪、警报和团队仪表板的自动化云基准测试。
products-grid-cloud-price = 29 $/月
products-grid-enterprise-name = 基准测试企业版
products-grid-enterprise-desc = 支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。
products-grid-enterprise-price = 联系我们
products-grid-migration-name = 迁移助手
products-grid-migration-desc = AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。
products-grid-migration-price = 99 $ 一次性费用
products-grid-qa-name = 翻译 QA
products-grid-qa-desc = 自动检查翻译缺失、复数问题和上下文错误。
products-grid-qa-price = 19 $/月
products-grid-optimizer-name = 包优化器
products-grid-optimizer-desc = 通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。
products-grid-optimizer-price = 49 $/月
settings-header-title = 设置
settings-header-description = 管理您的账户偏好和配置。
settings-profile-title = 个人资料
settings-profile-display-name = 显示名称
settings-profile-email = 电子邮件
settings-preferences-title = 偏好
settings-preferences-email-notifications = 电子邮件通知
settings-preferences-weekly-reports = 接收每周基准测试报告
settings-preferences-toggle-notifications = 切换通知
settings-preferences-dark-mode = 深色模式
settings-preferences-dark-color-scheme = 使用深色配色方案
settings-preferences-toggle-dark-mode = 切换深色模式
settings-preferences-default-language = 默认语言
settings-preferences-english = 英语 (en)
settings-preferences-french = 法语 (fr)
settings-preferences-german = 德语 (de)
settings-preferences-spanish = 西班牙语 (es)
settings-preferences-japanese = 日语 (ja)
settings-preferences-chinese = 简体中文 (zh-CN)
settings-preferences-arabic = 阿拉伯语 (ar)
settings-api-access-title = API 访问
settings-api-access-api-key = API 密钥
settings-api-access-copy = 复制
settings-api-access-description = 使用此密钥以编程方式访问基准测试 API。
settings-footer-cancel = 取消
settings-footer-save-changes = 保存更改
team-header-title = 我们的团队
team-header-description = 了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。
team-grid-member1-name = Sarah Chen
team-grid-member1-role = 创始人兼首席工程师
team-grid-member1-bio = 前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。
team-grid-member2-name = Marcus Weber
team-grid-member2-role = 性能工程师
team-grid-member2-bio = 专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。
team-grid-member3-name = Aisha Patel
team-grid-member3-role = 开发者倡导者
team-grid-member3-bio = 对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。
team-grid-member4-name = Tomás Rodríguez
team-grid-member4-role = 全栈开发人员
team-grid-member4-bio = 维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。
team-grid-member5-name = Yuki Tanaka
team-grid-member5-role = 数据分析师
team-grid-member5-bio = 确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。
team-grid-member6-name = Elena Kowalski
team-grid-member6-role = 社区经理
team-grid-member6-bio = 管理社区贡献、合作伙伴关系和活动。具有开源治理背景。
not-found-title = 404
not-found-description = 哎呀！页面未找到
not-found-return-home = 返回首页
`;
var Wrapper_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "Wrapper",
	setup(__props, { expose: __expose }) {
		__expose();
		console.log({
			kn,
			An,
			jn,
			Mn,
			Jn,
			Pn,
			Fn,
			In,
			Ln,
			Rn
		});
		const app = getCurrentInstance()?.appContext.app;
		if (app && !app.config.globalProperties.$fluent) app.use(fluent);
		const __returned__ = {
			kn,
			An,
			jn,
			Mn,
			Jn,
			Pn,
			Fn,
			In,
			Ln,
			Rn,
			app
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return renderSlot(_ctx.$slots, "default");
}
if (typeof en_ftl_vue_type_fluent_index_0_src_true_locale_en_lang_default === "function") en_ftl_vue_type_fluent_index_0_src_true_locale_en_lang_default(Wrapper_vue_vue_type_script_setup_true_lang_default);
if (typeof fr_ftl_vue_type_fluent_index_1_src_true_locale_fr_lang_default === "function") fr_ftl_vue_type_fluent_index_1_src_true_locale_fr_lang_default(Wrapper_vue_vue_type_script_setup_true_lang_default);
if (typeof es_ftl_vue_type_fluent_index_2_src_true_locale_es_lang_default === "function") es_ftl_vue_type_fluent_index_2_src_true_locale_es_lang_default(Wrapper_vue_vue_type_script_setup_true_lang_default);
if (typeof de_ftl_vue_type_fluent_index_3_src_true_locale_de_lang_default === "function") de_ftl_vue_type_fluent_index_3_src_true_locale_de_lang_default(Wrapper_vue_vue_type_script_setup_true_lang_default);
if (typeof it_ftl_vue_type_fluent_index_4_src_true_locale_it_lang_default === "function") it_ftl_vue_type_fluent_index_4_src_true_locale_it_lang_default(Wrapper_vue_vue_type_script_setup_true_lang_default);
if (typeof pt_ftl_vue_type_fluent_index_5_src_true_locale_pt_lang_default === "function") pt_ftl_vue_type_fluent_index_5_src_true_locale_pt_lang_default(Wrapper_vue_vue_type_script_setup_true_lang_default);
if (typeof zh_ftl_vue_type_fluent_index_6_src_true_locale_zh_lang_default === "function") zh_ftl_vue_type_fluent_index_6_src_true_locale_zh_lang_default(Wrapper_vue_vue_type_script_setup_true_lang_default);
if (typeof ja_ftl_vue_type_fluent_index_7_src_true_locale_ja_lang_default === "function") ja_ftl_vue_type_fluent_index_7_src_true_locale_ja_lang_default(Wrapper_vue_vue_type_script_setup_true_lang_default);
if (typeof ko_ftl_vue_type_fluent_index_8_src_true_locale_ko_lang_default === "function") ko_ftl_vue_type_fluent_index_8_src_true_locale_ko_lang_default(Wrapper_vue_vue_type_script_setup_true_lang_default);
if (typeof ru_ftl_vue_type_fluent_index_9_src_true_locale_ru_lang_default === "function") ru_ftl_vue_type_fluent_index_9_src_true_locale_ru_lang_default(Wrapper_vue_vue_type_script_setup_true_lang_default);
var Wrapper_default = _plugin_vue_export_helper_default(Wrapper_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/scripts/Wrapper.vue"]]);
var Footer_wrapper_default = { render() {
	return h(Wrapper_default, {}, { default: () => h(Footer_default) });
} };
export { Footer_wrapper_default as default };

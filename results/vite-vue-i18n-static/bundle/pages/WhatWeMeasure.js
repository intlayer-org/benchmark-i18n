import * as Vue from "vue";
import { Fragment, Text, computed, createElementBlock, createElementVNode, createVNode, defineComponent, effectScope, getCurrentInstance, getCurrentScope, h, inject, isRef, onBeforeMount, onMounted, onScopeDispose, onUnmounted, openBlock, ref, renderList, renderSlot, shallowRef, toDisplayString, unref, watch } from "vue";
function warn(msg, err) {
	if (typeof console !== "undefined") {
		console.warn(`[intlify] ` + msg);
		if (err) console.warn(err.stack);
	}
}
var hasWarned = {};
function warnOnce(msg) {
	if (!hasWarned[msg]) {
		hasWarned[msg] = true;
		warn(msg);
	}
}
var inBrowser = typeof window !== "undefined";
var mark;
var measure;
if (process.env.NODE_ENV !== "production") {
	const perf = inBrowser && window.performance;
	if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
		mark = (tag) => {
			perf.mark(tag);
		};
		measure = (name, startTag, endTag) => {
			perf.measure(name, startTag, endTag);
			perf.clearMarks(startTag);
			perf.clearMarks(endTag);
		};
	}
}
var RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
function format$1(message, ...args) {
	if (args.length === 1 && isObject(args[0])) args = args[0];
	if (!args || !args.hasOwnProperty) args = {};
	return message.replace(RE_ARGS, (match, identifier) => {
		return args.hasOwnProperty(identifier) ? args[identifier] : "";
	});
}
var makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
var generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({
	l: locale,
	k: key,
	s: source
});
var friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
var isNumber = (val) => typeof val === "number" && isFinite(val);
var isDate = (val) => toTypeString(val) === "[object Date]";
var isRegExp = (val) => toTypeString(val) === "[object RegExp]";
var isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
var assign = Object.assign;
var _create = Object.create;
var create = (obj = null) => _create(obj);
var _globalThis;
var getGlobalThis = () => {
	return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : create());
};
function escapeHtml(rawText) {
	return rawText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function escapeAttributeValue(value) {
	return value.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function sanitizeTranslatedHtml(html) {
	html = html.replace(/(\w+)\s*=\s*"([^"]*)"/g, (_, attrName, attrValue) => `${attrName}="${escapeAttributeValue(attrValue)}"`);
	html = html.replace(/(\w+)\s*=\s*'([^']*)'/g, (_, attrName, attrValue) => `${attrName}='${escapeAttributeValue(attrValue)}'`);
	if (/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(html)) {
		if (process.env.NODE_ENV !== "production") warn("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages.");
		html = html.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3");
	}
	[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((pattern) => {
		html = html.replace(pattern, "$1javascript&#58;");
	});
	return html;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
	return hasOwnProperty.call(obj, key);
}
var isArray = Array.isArray;
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isBoolean = (val) => typeof val === "boolean";
var isObject = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
	return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var isPlainObject = (val) => toTypeString(val) === "[object Object]";
var toDisplayString$1 = (val) => {
	return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
	return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, "");
}
var RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
	const lines = source.split(/\r?\n/);
	let count = 0;
	const res = [];
	for (let i = 0; i < lines.length; i++) {
		count += lines[i].length + 1;
		if (count >= start) {
			for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
				if (j < 0 || j >= lines.length) continue;
				const line = j + 1;
				res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
				const lineLength = lines[j].length;
				if (j === i) {
					const pad = start - (count - lineLength) + 1;
					const length = Math.max(1, end > count ? lineLength - pad : end - start);
					res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
				} else if (j > i) {
					if (end > count) {
						const length = Math.max(Math.min(end - count, lineLength), 1);
						res.push(`   |  ` + "^".repeat(length));
					}
					count += lineLength + 1;
				}
			}
			break;
		}
	}
	return res.join("\n");
}
function createEmitter() {
	const events = /* @__PURE__ */ new Map();
	return {
		events,
		on(event, handler) {
			const handlers = events.get(event);
			if (!(handlers && handlers.push(handler))) events.set(event, [handler]);
		},
		off(event, handler) {
			const handlers = events.get(event);
			if (handlers) handlers.splice(handlers.indexOf(handler) >>> 0, 1);
		},
		emit(event, payload) {
			(events.get(event) || []).slice().map((handler) => handler(payload));
			(events.get("*") || []).slice().map((handler) => handler(event, payload));
		}
	};
}
var isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
function deepCopy(src, des) {
	if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) throw new Error("Invalid value");
	const stack = [{
		src,
		des
	}];
	while (stack.length) {
		const { src, des } = stack.pop();
		Object.keys(src).forEach((key) => {
			if (key === "__proto__") return;
			if (isObject(src[key]) && !isObject(des[key])) des[key] = Array.isArray(src[key]) ? [] : create();
			if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) des[key] = src[key];
			else stack.push({
				src: src[key],
				des: des[key]
			});
		});
	}
}
function createPosition(line, column, offset) {
	return {
		line,
		column,
		offset
	};
}
function createLocation(start, end, source) {
	const loc = {
		start,
		end
	};
	if (source != null) loc.source = source;
	return loc;
}
var CompileErrorCodes = {
	EXPECTED_TOKEN: 1,
	INVALID_TOKEN_IN_PLACEHOLDER: 2,
	UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
	UNKNOWN_ESCAPE_SEQUENCE: 4,
	INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
	UNBALANCED_CLOSING_BRACE: 6,
	UNTERMINATED_CLOSING_BRACE: 7,
	EMPTY_PLACEHOLDER: 8,
	NOT_ALLOW_NEST_PLACEHOLDER: 9,
	INVALID_LINKED_FORMAT: 10,
	MUST_HAVE_MESSAGES_IN_PLURAL: 11,
	UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
	UNEXPECTED_EMPTY_LINKED_KEY: 13,
	UNEXPECTED_LEXICAL_ANALYSIS: 14,
	UNHANDLED_CODEGEN_NODE_TYPE: 15,
	UNHANDLED_MINIFIER_NODE_TYPE: 16
};
var errorMessages$2 = {
	[CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
	[CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
	[CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
	[CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
	[CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
	[CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
	[CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
	[CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
	[CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
	[CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
	[CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
	[CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
	[CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
	[CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`,
	[CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE]: `unhandled codegen node type: '{0}'`,
	[CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE]: `unhandled mimifier node type: '{0}'`
};
function createCompileError(code, loc, options = {}) {
	const { domain, messages, args } = options;
	const msg = process.env.NODE_ENV !== "production" ? format$1((messages || errorMessages$2)[code] || "", ...args || []) : code;
	const error = new SyntaxError(String(msg));
	error.code = code;
	if (loc) error.location = loc;
	error.domain = domain;
	return error;
}
function defaultOnError(error) {
	throw error;
}
var RE_HTML_TAG = /<\/?[\w\s="/.':;#-\/]+>/;
var detectHtmlTag = (source) => RE_HTML_TAG.test(source);
var CHAR_SP = " ";
var CHAR_CR = "\r";
var CHAR_LF = "\n";
var CHAR_LS = String.fromCharCode(8232);
var CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
	const _buf = str;
	let _index = 0;
	let _line = 1;
	let _column = 1;
	let _peekOffset = 0;
	const isCRLF = (index) => _buf[index] === CHAR_CR && _buf[index + 1] === CHAR_LF;
	const isLF = (index) => _buf[index] === CHAR_LF;
	const isPS = (index) => _buf[index] === CHAR_PS;
	const isLS = (index) => _buf[index] === CHAR_LS;
	const isLineEnd = (index) => isCRLF(index) || isLF(index) || isPS(index) || isLS(index);
	const index = () => _index;
	const line = () => _line;
	const column = () => _column;
	const peekOffset = () => _peekOffset;
	const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
	const currentChar = () => charAt(_index);
	const currentPeek = () => charAt(_index + _peekOffset);
	function next() {
		_peekOffset = 0;
		if (isLineEnd(_index)) {
			_line++;
			_column = 0;
		}
		if (isCRLF(_index)) _index++;
		_index++;
		_column++;
		return _buf[_index];
	}
	function peek() {
		if (isCRLF(_index + _peekOffset)) _peekOffset++;
		_peekOffset++;
		return _buf[_index + _peekOffset];
	}
	function reset() {
		_index = 0;
		_line = 1;
		_column = 1;
		_peekOffset = 0;
	}
	function resetPeek(offset = 0) {
		_peekOffset = offset;
	}
	function skipToPeek() {
		const target = _index + _peekOffset;
		while (target !== _index) next();
		_peekOffset = 0;
	}
	return {
		index,
		line,
		column,
		peekOffset,
		charAt,
		currentChar,
		currentPeek,
		next,
		peek,
		reset,
		resetPeek,
		skipToPeek
	};
}
var EOF = void 0;
var DOT = ".";
var LITERAL_DELIMITER = "'";
var ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
	const location = options.location !== false;
	const _scnr = createScanner(source);
	const currentOffset = () => _scnr.index();
	const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
	const _initLoc = currentPosition();
	const _initOffset = currentOffset();
	const _context = {
		currentType: 13,
		offset: _initOffset,
		startLoc: _initLoc,
		endLoc: _initLoc,
		lastType: 13,
		lastOffset: _initOffset,
		lastStartLoc: _initLoc,
		lastEndLoc: _initLoc,
		braceNest: 0,
		inLinked: false,
		text: ""
	};
	const context = () => _context;
	const { onError } = options;
	function emitError(code, pos, offset, ...args) {
		const ctx = context();
		pos.column += offset;
		pos.offset += offset;
		if (onError) {
			const err = createCompileError(code, location ? createLocation(ctx.startLoc, pos) : null, {
				domain: ERROR_DOMAIN$3,
				args
			});
			onError(err);
		}
	}
	function getToken(context, type, value) {
		context.endLoc = currentPosition();
		context.currentType = type;
		const token = { type };
		if (location) token.loc = createLocation(context.startLoc, context.endLoc);
		if (value != null) token.value = value;
		return token;
	}
	const getEndToken = (context) => getToken(context, 13);
	function eat(scnr, ch) {
		if (scnr.currentChar() === ch) {
			scnr.next();
			return ch;
		} else {
			emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
			return "";
		}
	}
	function peekSpaces(scnr) {
		let buf = "";
		while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
			buf += scnr.currentPeek();
			scnr.peek();
		}
		return buf;
	}
	function skipSpaces(scnr) {
		const buf = peekSpaces(scnr);
		scnr.skipToPeek();
		return buf;
	}
	function isIdentifierStart(ch) {
		if (ch === EOF) return false;
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc === 95;
	}
	function isNumberStart(ch) {
		if (ch === EOF) return false;
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57;
	}
	function isNamedIdentifierStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = isIdentifierStart(scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isListIdentifierStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = isNumberStart(scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isLiteralStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === LITERAL_DELIMITER;
		scnr.resetPeek();
		return ret;
	}
	function isLinkedDotStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 7) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === ".";
		scnr.resetPeek();
		return ret;
	}
	function isLinkedModifierStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 8) return false;
		peekSpaces(scnr);
		const ret = isIdentifierStart(scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isLinkedDelimiterStart(scnr, context) {
		const { currentType } = context;
		if (!(currentType === 7 || currentType === 11)) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === ":";
		scnr.resetPeek();
		return ret;
	}
	function isLinkedReferStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 9) return false;
		const fn = () => {
			const ch = scnr.currentPeek();
			if (ch === "{") return isIdentifierStart(scnr.peek());
			else if (ch === "@" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) return false;
			else if (ch === CHAR_LF) {
				scnr.peek();
				return fn();
			} else return isTextStart(scnr, false);
		};
		const ret = fn();
		scnr.resetPeek();
		return ret;
	}
	function isPluralStart(scnr) {
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === "|";
		scnr.resetPeek();
		return ret;
	}
	function isTextStart(scnr, reset = true) {
		const fn = (hasSpace = false, prev = "") => {
			const ch = scnr.currentPeek();
			if (ch === "{") return hasSpace;
			else if (ch === "@" || !ch) return hasSpace;
			else if (ch === "|") return !(prev === CHAR_SP || prev === CHAR_LF);
			else if (ch === CHAR_SP) {
				scnr.peek();
				return fn(true, CHAR_SP);
			} else if (ch === CHAR_LF) {
				scnr.peek();
				return fn(true, CHAR_LF);
			} else return true;
		};
		const ret = fn();
		reset && scnr.resetPeek();
		return ret;
	}
	function takeChar(scnr, fn) {
		const ch = scnr.currentChar();
		if (ch === EOF) return;
		if (fn(ch)) {
			scnr.next();
			return ch;
		}
		return null;
	}
	function isIdentifier(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95 || cc === 36;
	}
	function takeIdentifierChar(scnr) {
		return takeChar(scnr, isIdentifier);
	}
	function isNamedIdentifier(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95 || cc === 36 || cc === 45;
	}
	function takeNamedIdentifierChar(scnr) {
		return takeChar(scnr, isNamedIdentifier);
	}
	function isDigit(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57;
	}
	function takeDigit(scnr) {
		return takeChar(scnr, isDigit);
	}
	function isHexDigit(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57 || cc >= 65 && cc <= 70 || cc >= 97 && cc <= 102;
	}
	function takeHexDigit(scnr) {
		return takeChar(scnr, isHexDigit);
	}
	function getDigits(scnr) {
		let ch = "";
		let num = "";
		while (ch = takeDigit(scnr)) num += ch;
		return num;
	}
	function readText(scnr) {
		let buf = "";
		while (true) {
			const ch = scnr.currentChar();
			if (ch === "\\") {
				const nextCh = scnr.peek();
				if (nextCh === "{" || nextCh === "}" || nextCh === "@" || nextCh === "|" || nextCh === "\\") {
					buf += ch + nextCh;
					scnr.next();
					scnr.next();
				} else {
					scnr.resetPeek();
					buf += ch;
					scnr.next();
				}
			} else if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) break;
			else if (ch === CHAR_SP || ch === CHAR_LF) {
				if (isTextStart(scnr)) {
					buf += ch;
					scnr.next();
				} else if (isPluralStart(scnr)) break;
				else {
					buf += ch;
					scnr.next();
				}
			} else {
				buf += ch;
				scnr.next();
			}
		}
		return buf;
	}
	function readNamedIdentifier(scnr) {
		skipSpaces(scnr);
		let ch = "";
		let name = "";
		while (ch = takeNamedIdentifierChar(scnr)) name += ch;
		const currentChar = scnr.currentChar();
		if (currentChar && currentChar !== "}" && currentChar !== EOF && currentChar !== CHAR_SP && currentChar !== CHAR_LF && currentChar !== "　") {
			const invalidPart = readInvalidIdentifier(scnr);
			emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, name + invalidPart);
			return name + invalidPart;
		}
		if (scnr.currentChar() === EOF) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
		return name;
	}
	function readListIdentifier(scnr) {
		skipSpaces(scnr);
		let value = "";
		if (scnr.currentChar() === "-") {
			scnr.next();
			value += `-${getDigits(scnr)}`;
		} else value += getDigits(scnr);
		if (scnr.currentChar() === EOF) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
		return value;
	}
	function isLiteral(ch) {
		return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
	}
	function readLiteral(scnr) {
		skipSpaces(scnr);
		eat(scnr, `\'`);
		let ch = "";
		let literal = "";
		while (ch = takeChar(scnr, isLiteral)) if (ch === "\\") literal += readEscapeSequence(scnr);
		else literal += ch;
		const current = scnr.currentChar();
		if (current === CHAR_LF || current === EOF) {
			emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
			if (current === CHAR_LF) {
				scnr.next();
				eat(scnr, `\'`);
			}
			return literal;
		}
		eat(scnr, `\'`);
		return literal;
	}
	function readEscapeSequence(scnr) {
		const ch = scnr.currentChar();
		switch (ch) {
			case "\\":
			case `\'`:
				scnr.next();
				return `\\${ch}`;
			case "u": return readUnicodeEscapeSequence(scnr, ch, 4);
			case "U": return readUnicodeEscapeSequence(scnr, ch, 6);
			default:
				emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
				return "";
		}
	}
	function readUnicodeEscapeSequence(scnr, unicode, digits) {
		eat(scnr, unicode);
		let sequence = "";
		for (let i = 0; i < digits; i++) {
			const ch = takeHexDigit(scnr);
			if (!ch) {
				emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
				break;
			}
			sequence += ch;
		}
		return `\\${unicode}${sequence}`;
	}
	function isInvalidIdentifier(ch) {
		return ch !== "{" && ch !== "}" && ch !== CHAR_SP && ch !== CHAR_LF;
	}
	function readInvalidIdentifier(scnr) {
		skipSpaces(scnr);
		let ch = "";
		let identifiers = "";
		while (ch = takeChar(scnr, isInvalidIdentifier)) identifiers += ch;
		return identifiers;
	}
	function readLinkedModifier(scnr) {
		let ch = "";
		let name = "";
		while (ch = takeIdentifierChar(scnr)) name += ch;
		return name;
	}
	function readLinkedRefer(scnr) {
		const fn = (buf) => {
			const ch = scnr.currentChar();
			if (ch === "{" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) return buf;
			else if (ch === CHAR_SP) return buf;
			else if (ch === CHAR_LF || ch === DOT) {
				buf += ch;
				scnr.next();
				return fn(buf);
			} else {
				buf += ch;
				scnr.next();
				return fn(buf);
			}
		};
		return fn("");
	}
	function readPlural(scnr) {
		skipSpaces(scnr);
		const plural = eat(scnr, "|");
		skipSpaces(scnr);
		return plural;
	}
	function readTokenInPlaceholder(scnr, context) {
		let token = null;
		switch (scnr.currentChar()) {
			case "{":
				if (context.braceNest >= 1) emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
				scnr.next();
				token = getToken(context, 2, "{");
				skipSpaces(scnr);
				context.braceNest++;
				return token;
			case "}":
				if (context.braceNest > 0 && context.currentType === 2) emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
				scnr.next();
				token = getToken(context, 3, "}");
				context.braceNest--;
				context.braceNest > 0 && skipSpaces(scnr);
				if (context.inLinked && context.braceNest === 0) context.inLinked = false;
				return token;
			case "@":
				if (context.braceNest > 0) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
				token = readTokenInLinked(scnr, context) || getEndToken(context);
				context.braceNest = 0;
				return token;
			default: {
				let validNamedIdentifier = true;
				let validListIdentifier = true;
				let validLiteral = true;
				if (isPluralStart(scnr)) {
					if (context.braceNest > 0) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
					token = getToken(context, 1, readPlural(scnr));
					context.braceNest = 0;
					context.inLinked = false;
					return token;
				}
				if (context.braceNest > 0 && (context.currentType === 4 || context.currentType === 5 || context.currentType === 6)) {
					emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
					context.braceNest = 0;
					return readToken(scnr, context);
				}
				if (validNamedIdentifier = isNamedIdentifierStart(scnr, context)) {
					token = getToken(context, 4, readNamedIdentifier(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (validListIdentifier = isListIdentifierStart(scnr, context)) {
					token = getToken(context, 5, readListIdentifier(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (validLiteral = isLiteralStart(scnr, context)) {
					token = getToken(context, 6, readLiteral(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
					token = getToken(context, 12, readInvalidIdentifier(scnr));
					emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
					skipSpaces(scnr);
					return token;
				}
				break;
			}
		}
		return token;
	}
	function readTokenInLinked(scnr, context) {
		const { currentType } = context;
		let token = null;
		const ch = scnr.currentChar();
		if ((currentType === 7 || currentType === 8 || currentType === 11 || currentType === 9) && (ch === CHAR_LF || ch === CHAR_SP)) emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
		switch (ch) {
			case "@":
				scnr.next();
				token = getToken(context, 7, "@");
				context.inLinked = true;
				return token;
			case ".":
				skipSpaces(scnr);
				scnr.next();
				return getToken(context, 8, ".");
			case ":":
				skipSpaces(scnr);
				scnr.next();
				return getToken(context, 9, ":");
			default:
				if (isPluralStart(scnr)) {
					token = getToken(context, 1, readPlural(scnr));
					context.braceNest = 0;
					context.inLinked = false;
					return token;
				}
				if (isLinkedDotStart(scnr, context) || isLinkedDelimiterStart(scnr, context)) {
					skipSpaces(scnr);
					return readTokenInLinked(scnr, context);
				}
				if (isLinkedModifierStart(scnr, context)) {
					skipSpaces(scnr);
					return getToken(context, 11, readLinkedModifier(scnr));
				}
				if (isLinkedReferStart(scnr, context)) {
					skipSpaces(scnr);
					if (ch === "{") return readTokenInPlaceholder(scnr, context) || token;
					else return getToken(context, 10, readLinkedRefer(scnr));
				}
				if (currentType === 7) emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
				context.braceNest = 0;
				context.inLinked = false;
				return readToken(scnr, context);
		}
	}
	function readToken(scnr, context) {
		let token = { type: 13 };
		if (context.braceNest > 0) return readTokenInPlaceholder(scnr, context) || getEndToken(context);
		if (context.inLinked) return readTokenInLinked(scnr, context) || getEndToken(context);
		switch (scnr.currentChar()) {
			case "{": return readTokenInPlaceholder(scnr, context) || getEndToken(context);
			case "}":
				emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
				scnr.next();
				return getToken(context, 3, "}");
			case "@": return readTokenInLinked(scnr, context) || getEndToken(context);
			default:
				if (isPluralStart(scnr)) {
					token = getToken(context, 1, readPlural(scnr));
					context.braceNest = 0;
					context.inLinked = false;
					return token;
				}
				if (isTextStart(scnr)) return getToken(context, 0, readText(scnr));
		}
		return token;
	}
	function nextToken() {
		const { currentType, offset, startLoc, endLoc } = _context;
		_context.lastType = currentType;
		_context.lastOffset = offset;
		_context.lastStartLoc = startLoc;
		_context.lastEndLoc = endLoc;
		_context.offset = currentOffset();
		_context.startLoc = currentPosition();
		if (_scnr.currentChar() === EOF) return getToken(_context, 13);
		return readToken(_scnr, _context);
	}
	return {
		nextToken,
		currentOffset,
		currentPosition,
		context
	};
}
var ERROR_DOMAIN$2 = "parser";
var KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
var TEXT_ESCAPES = /\\([\\@{}|])/g;
function fromTextEscapeSequence(_match, char) {
	return char;
}
function fromEscapeSequence(match, codePoint4, codePoint6) {
	switch (match) {
		case `\\\\`: return `\\`;
		case `\\\'`: return `\'`;
		default: {
			const codePoint = parseInt(codePoint4 || codePoint6, 16);
			if (codePoint <= 55295 || codePoint >= 57344) return String.fromCodePoint(codePoint);
			return "�";
		}
	}
}
function createParser(options = {}) {
	const location = options.location !== false;
	const { onError } = options;
	function emitError(tokenzer, code, start, offset, ...args) {
		const end = tokenzer.currentPosition();
		end.offset += offset;
		end.column += offset;
		if (onError) {
			const err = createCompileError(code, location ? createLocation(start, end) : null, {
				domain: ERROR_DOMAIN$2,
				args
			});
			onError(err);
		}
	}
	function startNode(type, offset, loc) {
		const node = { type };
		if (location) {
			node.start = offset;
			node.end = offset;
			node.loc = {
				start: loc,
				end: loc
			};
		}
		return node;
	}
	function endNode(node, offset, pos, type) {
		if (location) {
			node.end = offset;
			if (node.loc) node.loc.end = pos;
		}
	}
	function parseText(tokenizer, value) {
		const context = tokenizer.context();
		const node = startNode(3, context.offset, context.startLoc);
		node.value = value.replace(TEXT_ESCAPES, fromTextEscapeSequence);
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseList(tokenizer, index) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(5, offset, loc);
		node.index = parseInt(index, 10);
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseNamed(tokenizer, key) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(4, offset, loc);
		node.key = key;
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLiteral(tokenizer, value) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(9, offset, loc);
		node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLinkedModifier(tokenizer) {
		const token = tokenizer.nextToken();
		const context = tokenizer.context();
		const { lastOffset: offset, lastStartLoc: loc } = context;
		const node = startNode(8, offset, loc);
		if (token.type !== 11) {
			emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
			node.value = "";
			endNode(node, offset, loc);
			return {
				nextConsumeToken: token,
				node
			};
		}
		if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
		node.value = token.value || "";
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return { node };
	}
	function parseLinkedKey(tokenizer, value) {
		const context = tokenizer.context();
		const node = startNode(7, context.offset, context.startLoc);
		node.value = value;
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLinked(tokenizer) {
		const context = tokenizer.context();
		const linkedNode = startNode(6, context.offset, context.startLoc);
		let token = tokenizer.nextToken();
		if (token.type === 8) {
			const parsed = parseLinkedModifier(tokenizer);
			linkedNode.modifier = parsed.node;
			token = parsed.nextConsumeToken || tokenizer.nextToken();
		}
		if (token.type !== 9) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
		token = tokenizer.nextToken();
		if (token.type === 2) token = tokenizer.nextToken();
		switch (token.type) {
			case 10:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
				break;
			case 4:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseNamed(tokenizer, token.value || "");
				break;
			case 5:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseList(tokenizer, token.value || "");
				break;
			case 6:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseLiteral(tokenizer, token.value || "");
				break;
			default: {
				emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
				const nextContext = tokenizer.context();
				const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
				emptyLinkedKeyNode.value = "";
				endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
				linkedNode.key = emptyLinkedKeyNode;
				endNode(linkedNode, nextContext.offset, nextContext.startLoc);
				return {
					nextConsumeToken: token,
					node: linkedNode
				};
			}
		}
		endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
		return { node: linkedNode };
	}
	function parseMessage(tokenizer) {
		const context = tokenizer.context();
		const node = startNode(2, context.currentType === 1 ? tokenizer.currentOffset() : context.offset, context.currentType === 1 ? context.endLoc : context.startLoc);
		node.items = [];
		let nextToken = null;
		do {
			const token = nextToken || tokenizer.nextToken();
			nextToken = null;
			switch (token.type) {
				case 0:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseText(tokenizer, token.value || ""));
					break;
				case 5:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseList(tokenizer, token.value || ""));
					break;
				case 4:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseNamed(tokenizer, token.value || ""));
					break;
				case 6:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseLiteral(tokenizer, token.value || ""));
					break;
				case 7: {
					const parsed = parseLinked(tokenizer);
					node.items.push(parsed.node);
					nextToken = parsed.nextConsumeToken || null;
					break;
				}
			}
		} while (context.currentType !== 13 && context.currentType !== 1);
		endNode(node, context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset(), context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition());
		return node;
	}
	function parsePlural(tokenizer, offset, loc, msgNode) {
		const context = tokenizer.context();
		let hasEmptyMessage = msgNode.items.length === 0;
		const node = startNode(1, offset, loc);
		node.cases = [];
		node.cases.push(msgNode);
		do {
			const msg = parseMessage(tokenizer);
			if (!hasEmptyMessage) hasEmptyMessage = msg.items.length === 0;
			node.cases.push(msg);
		} while (context.currentType !== 13);
		if (hasEmptyMessage) emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseResource(tokenizer) {
		const context = tokenizer.context();
		const { offset, startLoc } = context;
		const msgNode = parseMessage(tokenizer);
		if (context.currentType === 13) return msgNode;
		else return parsePlural(tokenizer, offset, startLoc, msgNode);
	}
	function parse(source) {
		const tokenizer = createTokenizer(source, assign({}, options));
		const context = tokenizer.context();
		const node = startNode(0, context.offset, context.startLoc);
		if (location && node.loc) node.loc.source = source;
		node.body = parseResource(tokenizer);
		if (options.onCacheKey) node.cacheKey = options.onCacheKey(source);
		if (context.currentType !== 13) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	return { parse };
}
function getTokenCaption(token) {
	if (token.type === 13) return "EOF";
	const name = (token.value || "").replace(/\r?\n/gu, "\\n");
	return name.length > 10 ? name.slice(0, 9) + "…" : name;
}
function createTransformer(ast, options = {}) {
	const _context = {
		ast,
		helpers: /* @__PURE__ */ new Set()
	};
	const context = () => _context;
	const helper = (name) => {
		_context.helpers.add(name);
		return name;
	};
	return {
		context,
		helper
	};
}
function traverseNodes(nodes, transformer) {
	for (let i = 0; i < nodes.length; i++) traverseNode(nodes[i], transformer);
}
function traverseNode(node, transformer) {
	switch (node.type) {
		case 1:
			traverseNodes(node.cases, transformer);
			transformer.helper("plural");
			break;
		case 2:
			traverseNodes(node.items, transformer);
			break;
		case 6:
			traverseNode(node.key, transformer);
			transformer.helper("linked");
			transformer.helper("type");
			break;
		case 5:
			transformer.helper("interpolate");
			transformer.helper("list");
			break;
		case 4:
			transformer.helper("interpolate");
			transformer.helper("named");
	}
}
function transform(ast, options = {}) {
	const transformer = createTransformer(ast);
	transformer.helper("normalize");
	ast.body && traverseNode(ast.body, transformer);
	const context = transformer.context();
	ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
	const body = ast.body;
	if (body.type === 2) optimizeMessageNode(body);
	else body.cases.forEach((c) => optimizeMessageNode(c));
	return ast;
}
function optimizeMessageNode(message) {
	if (message.items.length === 1) {
		const item = message.items[0];
		if (item.type === 3 || item.type === 9) {
			message.static = item.value;
			delete item.value;
		}
	} else {
		const values = [];
		for (let i = 0; i < message.items.length; i++) {
			const item = message.items[i];
			if (!(item.type === 3 || item.type === 9)) break;
			if (item.value == null) break;
			values.push(item.value);
		}
		if (values.length === message.items.length) {
			message.static = join(values);
			for (let i = 0; i < message.items.length; i++) {
				const item = message.items[i];
				if (item.type === 3 || item.type === 9) delete item.value;
			}
		}
	}
}
var ERROR_DOMAIN$1 = "minifier";
function minify(node) {
	node.t = node.type;
	switch (node.type) {
		case 0: {
			const resource = node;
			minify(resource.body);
			resource.b = resource.body;
			delete resource.body;
			break;
		}
		case 1: {
			const plural = node;
			const cases = plural.cases;
			for (let i = 0; i < cases.length; i++) minify(cases[i]);
			plural.c = cases;
			delete plural.cases;
			break;
		}
		case 2: {
			const message = node;
			const items = message.items;
			for (let i = 0; i < items.length; i++) minify(items[i]);
			message.i = items;
			delete message.items;
			if (message.static) {
				message.s = message.static;
				delete message.static;
			}
			break;
		}
		case 3:
		case 9:
		case 8:
		case 7: {
			const valueNode = node;
			if (valueNode.value) {
				valueNode.v = valueNode.value;
				delete valueNode.value;
			}
			break;
		}
		case 6: {
			const linked = node;
			minify(linked.key);
			linked.k = linked.key;
			delete linked.key;
			if (linked.modifier) {
				minify(linked.modifier);
				linked.m = linked.modifier;
				delete linked.modifier;
			}
			break;
		}
		case 5: {
			const list = node;
			list.i = list.index;
			delete list.index;
			break;
		}
		case 4: {
			const named = node;
			named.k = named.key;
			delete named.key;
			break;
		}
		default: if (process.env.NODE_ENV !== "production") throw createCompileError(CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE, null, {
			domain: ERROR_DOMAIN$1,
			args: [node.type]
		});
	}
	delete node.type;
}
var ERROR_DOMAIN = "parser";
function createCodeGenerator(ast, options) {
	const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
	const location = options.location !== false;
	const _context = {
		filename,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		map: void 0,
		breakLineCode,
		needIndent: _needIndent,
		indentLevel: 0
	};
	if (location && ast.loc) _context.source = ast.loc.source;
	const context = () => _context;
	function push(code, node) {
		_context.code += code;
	}
	function _newline(n, withBreakLine = true) {
		const _breakLineCode = withBreakLine ? breakLineCode : "";
		push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
	}
	function indent(withNewLine = true) {
		const level = ++_context.indentLevel;
		withNewLine && _newline(level);
	}
	function deindent(withNewLine = true) {
		const level = --_context.indentLevel;
		withNewLine && _newline(level);
	}
	function newline() {
		_newline(_context.indentLevel);
	}
	const helper = (key) => `_${key}`;
	const needIndent = () => _context.needIndent;
	return {
		context,
		push,
		indent,
		deindent,
		newline,
		helper,
		needIndent
	};
}
function generateLinkedNode(generator, node) {
	const { helper } = generator;
	generator.push(`${helper("linked")}(`);
	generateNode(generator, node.key);
	if (node.modifier) {
		generator.push(`, `);
		generateNode(generator, node.modifier);
		generator.push(`, _type`);
	} else generator.push(`, undefined, _type`);
	generator.push(`)`);
}
function generateMessageNode(generator, node) {
	const { helper, needIndent } = generator;
	generator.push(`${helper("normalize")}([`);
	generator.indent(needIndent());
	const length = node.items.length;
	for (let i = 0; i < length; i++) {
		generateNode(generator, node.items[i]);
		if (i === length - 1) break;
		generator.push(", ");
	}
	generator.deindent(needIndent());
	generator.push("])");
}
function generatePluralNode(generator, node) {
	const { helper, needIndent } = generator;
	if (node.cases.length > 1) {
		generator.push(`${helper("plural")}([`);
		generator.indent(needIndent());
		const length = node.cases.length;
		for (let i = 0; i < length; i++) {
			generateNode(generator, node.cases[i]);
			if (i === length - 1) break;
			generator.push(", ");
		}
		generator.deindent(needIndent());
		generator.push(`])`);
	}
}
function generateResource(generator, node) {
	if (node.body) generateNode(generator, node.body);
	else generator.push("null");
}
function generateNode(generator, node) {
	const { helper } = generator;
	switch (node.type) {
		case 0:
			generateResource(generator, node);
			break;
		case 1:
			generatePluralNode(generator, node);
			break;
		case 2:
			generateMessageNode(generator, node);
			break;
		case 6:
			generateLinkedNode(generator, node);
			break;
		case 8:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 7:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 5:
			generator.push(`${helper("interpolate")}(${helper("list")}(${node.index}))`, node);
			break;
		case 4:
			generator.push(`${helper("interpolate")}(${helper("named")}(${JSON.stringify(node.key)}))`, node);
			break;
		case 9:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 3:
			generator.push(JSON.stringify(node.value), node);
			break;
		default: if (process.env.NODE_ENV !== "production") throw createCompileError(CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: ERROR_DOMAIN,
			args: [node.type]
		});
	}
}
var generate = (ast, options = {}) => {
	const mode = isString(options.mode) ? options.mode : "normal";
	const filename = isString(options.filename) ? options.filename : "message.intl";
	const sourceMap = !!options.sourceMap;
	const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
	const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
	const helpers = ast.helpers || [];
	const generator = createCodeGenerator(ast, {
		mode,
		filename,
		sourceMap,
		breakLineCode,
		needIndent
	});
	generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
	generator.indent(needIndent);
	if (helpers.length > 0) {
		generator.push(`const { ${join(helpers.map((s) => `${s}: _${s}`), ", ")} } = ctx`);
		generator.newline();
	}
	generator.push(`return `);
	generateNode(generator, ast);
	generator.deindent(needIndent);
	generator.push(`}`);
	delete ast.helpers;
	const { code, map } = generator.context();
	return {
		ast,
		code,
		map: map ? map.toJSON() : void 0
	};
};
function baseCompile$1(source, options = {}) {
	const assignedOptions = assign({}, options);
	const jit = !!assignedOptions.jit;
	const enalbeMinify = !!assignedOptions.minify;
	const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
	const ast = createParser(assignedOptions).parse(source);
	if (!jit) {
		transform(ast, assignedOptions);
		return generate(ast, assignedOptions);
	} else {
		enambeOptimize && optimize(ast);
		enalbeMinify && minify(ast);
		return {
			ast,
			code: ""
		};
	}
}
function isMessageAST(val) {
	return isObject(val) && resolveType(val) === 0 && (hasOwn(val, "b") || hasOwn(val, "body"));
}
var PROPS_BODY = ["b", "body"];
function resolveBody(node) {
	return resolveProps(node, PROPS_BODY);
}
var PROPS_CASES = ["c", "cases"];
function resolveCases(node) {
	return resolveProps(node, PROPS_CASES, []);
}
var PROPS_STATIC = ["s", "static"];
function resolveStatic(node) {
	return resolveProps(node, PROPS_STATIC);
}
var PROPS_ITEMS = ["i", "items"];
function resolveItems(node) {
	return resolveProps(node, PROPS_ITEMS, []);
}
var PROPS_TYPE = ["t", "type"];
function resolveType(node) {
	return resolveProps(node, PROPS_TYPE);
}
var PROPS_VALUE = ["v", "value"];
function resolveValue$1(node, type) {
	const resolved = resolveProps(node, PROPS_VALUE);
	if (resolved != null) return resolved;
	else throw createUnhandleNodeError(type);
}
var PROPS_MODIFIER = ["m", "modifier"];
function resolveLinkedModifier(node) {
	return resolveProps(node, PROPS_MODIFIER);
}
var PROPS_KEY = ["k", "key"];
function resolveLinkedKey(node) {
	const resolved = resolveProps(node, PROPS_KEY);
	if (resolved) return resolved;
	else throw createUnhandleNodeError(6);
}
function resolveProps(node, props, defaultValue) {
	for (let i = 0; i < props.length; i++) {
		const prop = props[i];
		if (hasOwn(node, prop) && node[prop] != null) return node[prop];
	}
	return defaultValue;
}
var AST_NODE_PROPS_KEYS = [
	...PROPS_BODY,
	...PROPS_CASES,
	...PROPS_STATIC,
	...PROPS_ITEMS,
	...PROPS_KEY,
	...PROPS_MODIFIER,
	...PROPS_VALUE,
	...PROPS_TYPE
];
function createUnhandleNodeError(type) {
	return /* @__PURE__ */ new Error(`unhandled node type: ${type}`);
}
function format(ast) {
	const msg = (ctx) => formatParts(ctx, ast);
	return msg;
}
function formatParts(ctx, ast) {
	const body = resolveBody(ast);
	if (body == null) throw createUnhandleNodeError(0);
	if (resolveType(body) === 1) {
		const cases = resolveCases(body);
		return ctx.plural(cases.reduce((messages, c) => [...messages, formatMessageParts(ctx, c)], []));
	} else return formatMessageParts(ctx, body);
}
function formatMessageParts(ctx, node) {
	const static_ = resolveStatic(node);
	if (static_ != null) return ctx.type === "text" ? static_ : ctx.normalize([static_]);
	else {
		const messages = resolveItems(node).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
		return ctx.normalize(messages);
	}
}
function formatMessagePart(ctx, node) {
	const type = resolveType(node);
	switch (type) {
		case 3: return resolveValue$1(node, type);
		case 9: return resolveValue$1(node, type);
		case 4: {
			const named = node;
			if (hasOwn(named, "k") && named.k) return ctx.interpolate(ctx.named(named.k));
			if (hasOwn(named, "key") && named.key) return ctx.interpolate(ctx.named(named.key));
			throw createUnhandleNodeError(type);
		}
		case 5: {
			const list = node;
			if (hasOwn(list, "i") && isNumber(list.i)) return ctx.interpolate(ctx.list(list.i));
			if (hasOwn(list, "index") && isNumber(list.index)) return ctx.interpolate(ctx.list(list.index));
			throw createUnhandleNodeError(type);
		}
		case 6: {
			const linked = node;
			const modifier = resolveLinkedModifier(linked);
			const key = resolveLinkedKey(linked);
			return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
		}
		case 7: return resolveValue$1(node, type);
		case 8: return resolveValue$1(node, type);
		default: throw new Error(`unhandled node on format message part: ${type}`);
	}
}
var WARN_MESSAGE = `Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.`;
function checkHtmlMessage(source, warnHtmlMessage) {
	if (warnHtmlMessage && detectHtmlTag(source)) warn(format$1(WARN_MESSAGE, { source }));
}
var defaultOnCacheKey = (message) => message;
var compileCache = create();
function baseCompile(message, options = {}) {
	let detectError = false;
	const onError = options.onError || defaultOnError;
	options.onError = (err) => {
		detectError = true;
		onError(err);
	};
	return {
		...baseCompile$1(message, options),
		detectError
	};
}
function compile(message, context) {
	if (isString(message)) {
		const warnHtmlMessage = isBoolean(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
		process.env.NODE_ENV !== "production" && checkHtmlMessage(message, warnHtmlMessage);
		const cacheKey = (context.onCacheKey || defaultOnCacheKey)(message);
		const cached = compileCache[cacheKey];
		if (cached) return cached;
		const { ast, detectError } = baseCompile(message, {
			...context,
			location: process.env.NODE_ENV !== "production",
			jit: true
		});
		const msg = format(ast);
		return !detectError ? compileCache[cacheKey] = msg : msg;
	} else {
		if (process.env.NODE_ENV !== "production" && !isMessageAST(message)) {
			warn(`the message that is resolve with key '${context.key}' is not supported for jit compilation`);
			return (() => message);
		}
		const cacheKey = message.cacheKey;
		if (cacheKey) {
			const cached = compileCache[cacheKey];
			if (cached) return cached;
			return compileCache[cacheKey] = format(message);
		} else return format(message);
	}
}
var devtools = null;
function setDevToolsHook(hook) {
	devtools = hook;
}
function initI18nDevTools(i18n, version, meta) {
	devtools && devtools.emit("i18n:init", {
		timestamp: Date.now(),
		i18n,
		version,
		meta
	});
}
var translateDevTools = createDevToolsHook("function:translate");
function createDevToolsHook(hook) {
	return (payloads) => devtools && devtools.emit(hook, payloads);
}
var CoreErrorCodes = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function createCoreError(code) {
	return createCompileError(code, null, process.env.NODE_ENV !== "production" ? { messages: errorMessages$1 } : void 0);
}
var errorMessages$1 = {
	[CoreErrorCodes.INVALID_ARGUMENT]: "Invalid arguments",
	[CoreErrorCodes.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function getLocale(context, options) {
	return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
var _resolveLocale;
function resolveLocale(locale) {
	if (isString(locale)) return locale;
	else if (isFunction(locale)) {
		if (locale.resolvedOnce && _resolveLocale != null) return _resolveLocale;
		else if (locale.constructor.name === "Function") {
			const resolve = locale();
			if (isPromise(resolve)) throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return _resolveLocale = resolve;
		} else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
}
function fallbackWithSimple(ctx, fallback, start) {
	return [.../* @__PURE__ */ new Set([start, ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
	const startLocale = isString(start) ? start : DEFAULT_LOCALE;
	const context = ctx;
	if (!context.__localeChainCache) context.__localeChainCache = /* @__PURE__ */ new Map();
	let chain = context.__localeChainCache.get(startLocale);
	if (!chain) {
		chain = [];
		let block = [start];
		while (isArray(block)) block = appendBlockToChain(chain, block, fallback);
		const defaults = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
		block = isString(defaults) ? [defaults] : defaults;
		if (isArray(block)) appendBlockToChain(chain, block, false);
		context.__localeChainCache.set(startLocale, chain);
	}
	return chain;
}
function appendBlockToChain(chain, block, blocks) {
	let follow = true;
	for (let i = 0; i < block.length && isBoolean(follow); i++) {
		const locale = block[i];
		if (isString(locale)) follow = appendLocaleToChain(chain, block[i], blocks);
	}
	return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
	let follow;
	const tokens = locale.split("-");
	do {
		follow = appendItemToChain(chain, tokens.join("-"), blocks);
		tokens.splice(-1, 1);
	} while (tokens.length && follow === true);
	return follow;
}
function appendItemToChain(chain, target, blocks) {
	let follow = false;
	if (!chain.includes(target)) {
		follow = true;
		if (target) {
			follow = target[target.length - 1] !== "!";
			const locale = target.replace(/!/g, "");
			chain.push(locale);
			if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) follow = blocks[locale];
		}
	}
	return follow;
}
var pathStateMachine = [];
pathStateMachine[0] = {
	["w"]: [0],
	["i"]: [3, 0],
	["["]: [4],
	["o"]: [7]
};
pathStateMachine[1] = {
	["w"]: [1],
	["."]: [2],
	["["]: [4],
	["o"]: [7]
};
pathStateMachine[2] = {
	["w"]: [2],
	["i"]: [3, 0],
	["0"]: [3, 0]
};
pathStateMachine[3] = {
	["i"]: [3, 0],
	["0"]: [3, 0],
	["w"]: [1, 1],
	["."]: [2, 1],
	["["]: [4, 1],
	["o"]: [7, 1]
};
pathStateMachine[4] = {
	["'"]: [5, 0],
	["\""]: [6, 0],
	["["]: [4, 2],
	["]"]: [1, 3],
	["o"]: 8,
	["l"]: [4, 0]
};
pathStateMachine[5] = {
	["'"]: [4, 0],
	["o"]: 8,
	["l"]: [5, 0]
};
pathStateMachine[6] = {
	["\""]: [4, 0],
	["o"]: 8,
	["l"]: [6, 0]
};
var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
	return literalValueRE.test(exp);
}
function stripQuotes(str) {
	const a = str.charCodeAt(0);
	return a === str.charCodeAt(str.length - 1) && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
	if (ch === void 0 || ch === null) return "o";
	switch (ch.charCodeAt(0)) {
		case 91:
		case 93:
		case 46:
		case 34:
		case 39: return ch;
		case 95:
		case 36:
		case 45: return "i";
		case 9:
		case 10:
		case 13:
		case 160:
		case 65279:
		case 8232:
		case 8233: return "w";
	}
	return "i";
}
function formatSubPath(path) {
	const trimmed = path.trim();
	if (path.charAt(0) === "0" && isNaN(parseInt(path))) return false;
	return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
	const keys = [];
	let index = -1;
	let mode = 0;
	let subPathDepth = 0;
	let c;
	let key;
	let newChar;
	let type;
	let transition;
	let action;
	let typeMap;
	const actions = [];
	actions[0] = () => {
		if (key === void 0) key = newChar;
		else key += newChar;
	};
	actions[1] = () => {
		if (key !== void 0) {
			keys.push(key);
			key = void 0;
		}
	};
	actions[2] = () => {
		actions[0]();
		subPathDepth++;
	};
	actions[3] = () => {
		if (subPathDepth > 0) {
			subPathDepth--;
			mode = 4;
			actions[0]();
		} else {
			subPathDepth = 0;
			if (key === void 0) return false;
			key = formatSubPath(key);
			if (key === false) return false;
			else actions[1]();
		}
	};
	function maybeUnescapeQuote() {
		const nextChar = path[index + 1];
		if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === "\"") {
			index++;
			newChar = "\\" + nextChar;
			actions[0]();
			return true;
		}
	}
	while (mode !== null) {
		index++;
		c = path[index];
		if (c === "\\" && maybeUnescapeQuote()) continue;
		type = getPathCharType(c);
		typeMap = pathStateMachine[mode];
		transition = typeMap[type] || typeMap["l"] || 8;
		if (transition === 8) return;
		mode = transition[0];
		if (transition[1] !== void 0) {
			action = actions[transition[1]];
			if (action) {
				newChar = c;
				if (action() === false) return;
			}
		}
		if (mode === 7) return keys;
	}
}
var cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
	return isObject(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
	if (!isObject(obj)) return null;
	let hit = cache.get(path);
	if (!hit) {
		hit = parse(path);
		if (hit) cache.set(path, hit);
	}
	if (!hit) return null;
	const len = hit.length;
	let last = obj;
	let i = 0;
	while (i < len) {
		const key = hit[i];
		if (AST_NODE_PROPS_KEYS.includes(key) && isMessageAST(last)) return null;
		if (!isObject(last)) return null;
		if (!hasOwn(last, key)) return null;
		const val = last[key];
		if (val === void 0) return null;
		if (isFunction(last)) return null;
		last = val;
		i++;
	}
	return last;
}
var CoreWarnCodes = {
	NOT_FOUND_KEY: 1,
	FALLBACK_TO_TRANSLATE: 2,
	CANNOT_FORMAT_NUMBER: 3,
	FALLBACK_TO_NUMBER_FORMAT: 4,
	CANNOT_FORMAT_DATE: 5,
	FALLBACK_TO_DATE_FORMAT: 6,
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
	INVALID_NUMBER_ARGUMENT: 8,
	INVALID_DATE_ARGUMENT: 9
};
var warnMessages$1 = {
	[CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
	[CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
	[CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
	[CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
	[CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
	[CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`,
	[CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: `This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.`,
	[CoreWarnCodes.INVALID_NUMBER_ARGUMENT]: `Invalid argument for number formatting: expected a number but received '{value}'.`,
	[CoreWarnCodes.INVALID_DATE_ARGUMENT]: `Invalid argument for datetime formatting: expected a Date, number, or ISO string but received '{value}'.`
};
function getWarnMessage$1(code, ...args) {
	return format$1(warnMessages$1[code], ...args);
}
var VERSION$1 = "11.4.0";
var DEFAULT_LOCALE = "en-US";
var capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
	return {
		upper: (val, type) => {
			return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
		},
		lower: (val, type) => {
			return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
		},
		capitalize: (val, type) => {
			return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
		}
	};
}
var _compiler;
function registerMessageCompiler(compiler) {
	_compiler = compiler;
}
var _resolver;
function registerMessageResolver(resolver) {
	_resolver = resolver;
}
var _fallbacker;
function registerLocaleFallbacker(fallbacker) {
	_fallbacker = fallbacker;
}
var _additionalMeta = null;
var setAdditionalMeta = (meta) => {
	_additionalMeta = meta;
};
var getAdditionalMeta = () => _additionalMeta;
var _fallbackContext = null;
var setFallbackContext = (context) => {
	_fallbackContext = context;
};
var getFallbackContext = () => _fallbackContext;
var _cid = 0;
function createCoreContext(options = {}) {
	const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
	const version = isString(options.version) ? options.version : VERSION$1;
	const locale = isString(options.locale) || isFunction(options.locale) ? options.locale : DEFAULT_LOCALE;
	const _locale = isFunction(locale) ? DEFAULT_LOCALE : locale;
	const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
	const messages = isPlainObject(options.messages) ? options.messages : createResources(_locale);
	const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : createResources(_locale);
	const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : createResources(_locale);
	const modifiers = assign(create(), options.modifiers, getDefaultLinkedModifiers());
	const pluralRules = options.pluralRules || create();
	const missing = isFunction(options.missing) ? options.missing : null;
	const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
	const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
	const fallbackFormat = !!options.fallbackFormat;
	const unresolving = !!options.unresolving;
	const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
	const processor = isPlainObject(options.processor) ? options.processor : null;
	const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
	const escapeParameter = !!options.escapeParameter;
	const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
	if (process.env.NODE_ENV !== "production" && isFunction(options.messageCompiler)) warnOnce(getWarnMessage$1(CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
	const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
	const fallbackContext = isObject(options.fallbackContext) ? options.fallbackContext : void 0;
	const internalOptions = options;
	const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
	const __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
	const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
	_cid++;
	const context = {
		version,
		cid: _cid,
		locale,
		fallbackLocale,
		messages,
		modifiers,
		pluralRules,
		missing,
		missingWarn,
		fallbackWarn,
		fallbackFormat,
		unresolving,
		postTranslation,
		processor,
		warnHtmlMessage,
		escapeParameter,
		messageCompiler,
		messageResolver,
		localeFallbacker,
		fallbackContext,
		onWarn,
		__meta
	};
	context.datetimeFormats = datetimeFormats;
	context.numberFormats = numberFormats;
	context.__datetimeFormatters = __datetimeFormatters;
	context.__numberFormatters = __numberFormatters;
	if (process.env.NODE_ENV !== "production") context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
	if (process.env.NODE_ENV !== "production" || false) initI18nDevTools(context, version, __meta);
	return context;
}
var createResources = (locale) => ({ [locale]: create() });
function isTranslateFallbackWarn(fallback, key) {
	return fallback instanceof RegExp ? fallback.test(key) : fallback;
}
function isTranslateMissingWarn(missing, key) {
	return missing instanceof RegExp ? missing.test(key) : missing;
}
function handleMissing(context, key, locale, missingWarn, type) {
	const { missing, onWarn } = context;
	if (process.env.NODE_ENV !== "production") {
		const emitter = context.__v_emitter;
		if (emitter) emitter.emit("missing", {
			locale,
			key,
			type,
			groupId: `${type}:${key}`
		});
	}
	if (missing !== null) {
		const ret = missing(context, locale, key, type);
		return isString(ret) ? ret : key;
	} else {
		if (process.env.NODE_ENV !== "production" && isTranslateMissingWarn(missingWarn, key)) onWarn(getWarnMessage$1(CoreWarnCodes.NOT_FOUND_KEY, {
			key,
			locale
		}));
		return key;
	}
}
function updateFallbackLocale(ctx, locale, fallback) {
	const context = ctx;
	context.__localeChainCache = /* @__PURE__ */ new Map();
	ctx.localeFallbacker(ctx, fallback, locale);
}
function isAlmostSameLocale(locale, compareLocale) {
	if (locale === compareLocale) return false;
	return locale.split("-")[0] === compareLocale.split("-")[0];
}
function isImplicitFallback(targetLocale, locales) {
	const index = locales.indexOf(targetLocale);
	if (index === -1) return false;
	for (let i = index + 1; i < locales.length; i++) if (isAlmostSameLocale(targetLocale, locales[i])) return true;
	return false;
}
var intlDefined = typeof Intl !== "undefined";
var Availabilities = {
	dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
	numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
};
function datetime(context, ...args) {
	const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
	const { __datetimeFormatters } = context;
	if (process.env.NODE_ENV !== "production" && !Availabilities.dateTimeFormat) {
		onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_DATE));
		return "";
	}
	if (!isString(args[0]) && !isDate(args[0]) && !isNumber(args[0])) {
		if (process.env.NODE_ENV !== "production") onWarn(getWarnMessage$1(CoreWarnCodes.INVALID_DATE_ARGUMENT, { value: String(args[0]) }));
		return "";
	}
	const [key, value, options, overrides] = parseDateTimeArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const part = !!options.part;
	const locale = getLocale(context, options);
	const locales = localeFallbacker(context, fallbackLocale, locale);
	if (!isString(key) || key === "") return new Intl.DateTimeFormat(locale.replace(/!/g, ""), overrides).format(value);
	let datetimeFormat = {};
	let targetLocale;
	let format = null;
	let from = locale;
	let to = null;
	const type = "datetime format";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = to = locales[i];
		if (process.env.NODE_ENV !== "production" && locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, {
			key,
			target: targetLocale
		}));
		if (process.env.NODE_ENV !== "production" && locale !== targetLocale) {
			const emitter = context.__v_emitter;
			if (emitter) emitter.emit("fallback", {
				type,
				key,
				from,
				to,
				groupId: `${type}:${key}`
			});
		}
		datetimeFormat = datetimeFormats[targetLocale] || {};
		format = datetimeFormat[key];
		if (isPlainObject(format)) break;
		handleMissing(context, key, targetLocale, missingWarn, type);
		from = to;
	}
	if (!isPlainObject(format) || !isString(targetLocale)) return unresolving ? -1 : key;
	let id = `${targetLocale}__${key}`;
	if (!isEmptyObject(overrides)) id = `${id}__${JSON.stringify(overrides)}`;
	let formatter = __datetimeFormatters.get(id);
	if (!formatter) {
		formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format, overrides));
		__datetimeFormatters.set(id, formatter);
	}
	return !part ? formatter.format(value) : formatter.formatToParts(value);
}
var DATETIME_FORMAT_OPTIONS_KEYS = [
	"localeMatcher",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"formatMatcher",
	"hour12",
	"timeZone",
	"dateStyle",
	"timeStyle",
	"calendar",
	"dayPeriod",
	"numberingSystem",
	"hourCycle",
	"fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
	const [arg1, arg2, arg3, arg4] = args;
	const options = create();
	let overrides = create();
	let value;
	if (isString(arg1)) {
		const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!matches) throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
		const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
		value = new Date(dateTime);
		try {
			value.toISOString();
		} catch {
			throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (isDate(arg1)) {
		if (isNaN(arg1.getTime())) throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
		value = arg1;
	} else if (isNumber(arg1)) value = arg1;
	else throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	if (isString(arg2)) options.key = arg2;
	else if (isPlainObject(arg2)) Object.keys(arg2).forEach((key) => {
		if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) overrides[key] = arg2[key];
		else options[key] = arg2[key];
	});
	if (isString(arg3)) options.locale = arg3;
	else if (isPlainObject(arg3)) overrides = arg3;
	if (isPlainObject(arg4)) overrides = arg4;
	return [
		options.key || "",
		value,
		options,
		overrides
	];
}
function clearDateTimeFormat(ctx, locale, format) {
	const context = ctx;
	for (const key in format) {
		const id = `${locale}__${key}`;
		if (!context.__datetimeFormatters.has(id)) continue;
		context.__datetimeFormatters.delete(id);
	}
}
function number(context, ...args) {
	const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
	const { __numberFormatters } = context;
	if (process.env.NODE_ENV !== "production" && !Availabilities.numberFormat) {
		onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_NUMBER));
		return "";
	}
	if (!isNumber(args[0])) {
		if (process.env.NODE_ENV !== "production") onWarn(getWarnMessage$1(CoreWarnCodes.INVALID_NUMBER_ARGUMENT, { value: String(args[0]) }));
		return "";
	}
	const [key, value, options, overrides] = parseNumberArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const part = !!options.part;
	const locale = getLocale(context, options);
	const locales = localeFallbacker(context, fallbackLocale, locale);
	if (!isString(key) || key === "") return new Intl.NumberFormat(locale.replace(/!/g, ""), overrides).format(value);
	let numberFormat = {};
	let targetLocale;
	let format = null;
	let from = locale;
	let to = null;
	const type = "number format";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = to = locales[i];
		if (process.env.NODE_ENV !== "production" && locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, {
			key,
			target: targetLocale
		}));
		if (process.env.NODE_ENV !== "production" && locale !== targetLocale) {
			const emitter = context.__v_emitter;
			if (emitter) emitter.emit("fallback", {
				type,
				key,
				from,
				to,
				groupId: `${type}:${key}`
			});
		}
		numberFormat = numberFormats[targetLocale] || {};
		format = numberFormat[key];
		if (isPlainObject(format)) break;
		handleMissing(context, key, targetLocale, missingWarn, type);
		from = to;
	}
	if (!isPlainObject(format) || !isString(targetLocale)) return unresolving ? -1 : key;
	let id = `${targetLocale}__${key}`;
	if (!isEmptyObject(overrides)) id = `${id}__${JSON.stringify(overrides)}`;
	let formatter = __numberFormatters.get(id);
	if (!formatter) {
		formatter = new Intl.NumberFormat(targetLocale, assign({}, format, overrides));
		__numberFormatters.set(id, formatter);
	}
	return !part ? formatter.format(value) : formatter.formatToParts(value);
}
var NUMBER_FORMAT_OPTIONS_KEYS = [
	"localeMatcher",
	"style",
	"currency",
	"currencyDisplay",
	"currencySign",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"roundingMode",
	"roundingPriority",
	"roundingIncrement",
	"trailingZeroDisplay"
];
function parseNumberArgs(...args) {
	const [arg1, arg2, arg3, arg4] = args;
	const options = create();
	let overrides = create();
	if (!isNumber(arg1)) throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	const value = arg1;
	if (isString(arg2)) options.key = arg2;
	else if (isPlainObject(arg2)) Object.keys(arg2).forEach((key) => {
		if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) overrides[key] = arg2[key];
		else options[key] = arg2[key];
	});
	if (isString(arg3)) options.locale = arg3;
	else if (isPlainObject(arg3)) overrides = arg3;
	if (isPlainObject(arg4)) overrides = arg4;
	return [
		options.key || "",
		value,
		options,
		overrides
	];
}
function clearNumberFormat(ctx, locale, format) {
	const context = ctx;
	for (const key in format) {
		const id = `${locale}__${key}`;
		if (!context.__numberFormatters.has(id)) continue;
		context.__numberFormatters.delete(id);
	}
}
var DEFAULT_MODIFIER = (str) => str;
var DEFAULT_MESSAGE = (ctx) => "";
var DEFAULT_MESSAGE_DATA_TYPE = "text";
var DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
var DEFAULT_INTERPOLATE = toDisplayString$1;
function pluralDefault(choice, choicesLength) {
	choice = Math.abs(choice);
	if (choicesLength === 2) return choice === 1 ? 0 : 1;
	return Math.min(choice, 2);
}
function getPluralIndex(options) {
	const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
	return isNumber(options.named?.count) ? options.named.count : isNumber(options.named?.n) ? options.named.n : index;
}
function createMessageContext(options = {}) {
	const locale = options.locale;
	const pluralIndex = getPluralIndex(options);
	const pluralRule = isString(locale) && isFunction(options.pluralRules?.[locale]) ? options.pluralRules[locale] : pluralDefault;
	const orgPluralRule = pluralRule === pluralDefault ? void 0 : pluralDefault;
	const plural = (messages) => messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
	const _list = options.list || [];
	const list = (index) => _list[index];
	const _named = options.named || create();
	if (isNumber(options.pluralIndex)) {
		_named.count ||= options.pluralIndex;
		_named.n ||= options.pluralIndex;
	}
	const named = (key) => _named[key];
	function message(key, useLinked) {
		const msg = isFunction(options.messages) ? options.messages(key, !!useLinked) : isObject(options.messages) ? options.messages[key] : false;
		return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
	}
	const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
	const normalize = isFunction(options.processor?.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
	const interpolate = isFunction(options.processor?.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
	const type = isString(options.processor?.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
	const linked = (key, ...args) => {
		const [arg1, arg2] = args;
		let type = "text";
		let modifier = "";
		if (args.length === 1) {
			if (isObject(arg1)) {
				modifier = arg1.modifier || modifier;
				type = arg1.type || type;
			} else if (isString(arg1)) modifier = arg1 || modifier;
		} else if (args.length === 2) {
			if (isString(arg1)) modifier = arg1 || modifier;
			if (isString(arg2)) type = arg2 || type;
		}
		const ret = message(key, true)(ctx);
		const resolved = ret === "" || ret === void 0 ? key : ret;
		const msg = type === "vnode" && isArray(resolved) && modifier ? resolved[0] : resolved;
		return modifier ? _modifier(modifier)(msg, type) : msg;
	};
	const ctx = {
		["list"]: list,
		["named"]: named,
		["plural"]: plural,
		["linked"]: linked,
		["message"]: message,
		["type"]: type,
		["interpolate"]: interpolate,
		["normalize"]: normalize,
		["values"]: assign(create(), _list, _named)
	};
	return ctx;
}
var NOOP_MESSAGE_FUNCTION = () => "";
var isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
	const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
	const [key, options] = parseTranslateArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
	const resolvedMessage = !!options.resolvedMessage;
	const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : null;
	const enableDefaultMsg = fallbackFormat || defaultMsgOrKey != null && (isString(defaultMsgOrKey) || isFunction(defaultMsgOrKey));
	const locale = getLocale(context, options);
	escapeParameter && escapeParams(options);
	let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
		key,
		locale,
		messages[locale] || create()
	];
	let format = formatScope;
	let cacheBaseKey = key;
	if (!resolvedMessage && !(isString(format) || isMessageAST(format) || isMessageFunction(format))) {
		if (enableDefaultMsg) {
			format = defaultMsgOrKey;
			cacheBaseKey = format;
		}
	}
	if (!resolvedMessage && (!(isString(format) || isMessageAST(format) || isMessageFunction(format)) || !isString(targetLocale))) return unresolving ? -1 : key;
	if (process.env.NODE_ENV !== "production" && isString(format) && context.messageCompiler == null) {
		warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
		return key;
	}
	let occurred = false;
	const onError = () => {
		occurred = true;
	};
	const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError) : format;
	if (occurred) return format;
	const messaged = evaluateMessage(context, msg, createMessageContext(getMessageContextOptions(context, targetLocale, message, options)));
	let ret = postTranslation ? postTranslation(messaged, key) : messaged;
	if (escapeParameter && isString(ret)) ret = sanitizeTranslatedHtml(ret);
	if (process.env.NODE_ENV !== "production" || false) {
		const payloads = {
			timestamp: Date.now(),
			key: isString(key) ? key : isMessageFunction(format) ? format.key : "",
			locale: targetLocale || (isMessageFunction(format) ? format.locale : ""),
			format: isString(format) ? format : isMessageFunction(format) ? format.source : "",
			message: ret
		};
		payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
		translateDevTools(payloads);
	}
	return ret;
}
function escapeParams(options) {
	if (isArray(options.list)) options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
	else if (isObject(options.named)) Object.keys(options.named).forEach((key) => {
		if (isString(options.named[key])) options.named[key] = escapeHtml(options.named[key]);
	});
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
	const { messages, onWarn, messageResolver: resolveValue, localeFallbacker } = context;
	const locales = localeFallbacker(context, fallbackLocale, locale);
	let message = create();
	let targetLocale;
	let format = null;
	let from = locale;
	let to = null;
	const type = "translate";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = to = locales[i];
		if (process.env.NODE_ENV !== "production" && locale !== targetLocale && !isAlmostSameLocale(locale, targetLocale) && isTranslateFallbackWarn(fallbackWarn, key)) onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_TRANSLATE, {
			key,
			target: targetLocale
		}));
		const emitter = process.env.NODE_ENV !== "production" ? context.__v_emitter : void 0;
		if (process.env.NODE_ENV !== "production" && locale !== targetLocale) {
			if (emitter) emitter.emit("fallback", {
				type,
				key,
				from,
				to,
				groupId: `${type}:${key}`
			});
		}
		message = messages[targetLocale] || create();
		let start = null;
		let startTag;
		let endTag;
		if (process.env.NODE_ENV !== "production" && inBrowser && emitter) {
			start = window.performance.now();
			startTag = "intlify-message-resolve-start";
			endTag = "intlify-message-resolve-end";
			mark && mark(startTag);
		}
		if ((format = resolveValue(message, key)) === null) format = message[key];
		if (process.env.NODE_ENV !== "production" && inBrowser && emitter) {
			const end = window.performance.now();
			if (emitter && start && format) emitter.emit("message-resolve", {
				type: "message-resolve",
				key,
				message: format,
				time: end - start,
				groupId: `${type}:${key}`
			});
			if (startTag && endTag && mark && measure) {
				mark(endTag);
				measure("intlify message resolve", startTag, endTag);
			}
		}
		if (isString(format) || isMessageAST(format) || isMessageFunction(format)) break;
		if (!isImplicitFallback(targetLocale, locales)) {
			const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
			if (missingRet !== key) format = missingRet;
		}
		from = to;
	}
	return [
		format,
		targetLocale,
		message
	];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError) {
	const { messageCompiler, warnHtmlMessage } = context;
	if (isMessageFunction(format)) {
		const msg = format;
		msg.locale = msg.locale || targetLocale;
		msg.key = msg.key || key;
		return msg;
	}
	if (messageCompiler == null) {
		const msg = (() => format);
		msg.locale = targetLocale;
		msg.key = key;
		return msg;
	}
	const emitter = process.env.NODE_ENV !== "production" ? context.__v_emitter : void 0;
	let start = null;
	let startTag;
	let endTag;
	if (process.env.NODE_ENV !== "production" && inBrowser && emitter) {
		start = window.performance.now();
		startTag = "intlify-message-compilation-start";
		endTag = "intlify-message-compilation-end";
		mark && mark(startTag);
	}
	const msg = messageCompiler(format, getCompileContext(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, onError));
	if (process.env.NODE_ENV !== "production" && inBrowser && emitter) {
		const end = window.performance.now();
		if (emitter && start) emitter.emit("message-compilation", {
			type: "message-compilation",
			message: format,
			time: end - start,
			groupId: `translate:${key}`
		});
		if (startTag && endTag && mark && measure) {
			mark(endTag);
			measure("intlify message compilation", startTag, endTag);
		}
	}
	msg.locale = targetLocale;
	msg.key = key;
	msg.source = format;
	return msg;
}
function evaluateMessage(context, msg, msgCtx) {
	const emitter = process.env.NODE_ENV !== "production" ? context.__v_emitter : void 0;
	let start = null;
	let startTag;
	let endTag;
	if (process.env.NODE_ENV !== "production" && inBrowser && emitter) {
		start = window.performance.now();
		startTag = "intlify-message-evaluation-start";
		endTag = "intlify-message-evaluation-end";
		mark && mark(startTag);
	}
	const messaged = msg(msgCtx);
	if (process.env.NODE_ENV !== "production" && inBrowser && emitter) {
		const end = window.performance.now();
		if (emitter && start) emitter.emit("message-evaluation", {
			type: "message-evaluation",
			value: messaged,
			time: end - start,
			groupId: `translate:${msg.key}`
		});
		if (startTag && endTag && mark && measure) {
			mark(endTag);
			measure("intlify message evaluation", startTag, endTag);
		}
	}
	return messaged;
}
function parseTranslateArgs(...args) {
	const [arg1, arg2, arg3] = args;
	const options = create();
	if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
	if (isNumber(arg2)) options.plural = arg2;
	else if (isString(arg2)) options.default = arg2;
	else if (isPlainObject(arg2) && !isEmptyObject(arg2)) options.named = arg2;
	else if (isArray(arg2)) options.list = arg2;
	if (isNumber(arg3)) options.plural = arg3;
	else if (isString(arg3)) options.default = arg3;
	else if (isPlainObject(arg3)) assign(options, arg3);
	return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
	return {
		locale,
		key,
		warnHtmlMessage,
		onError: (err) => {
			onError && onError(err);
			if (process.env.NODE_ENV !== "production") {
				const _source = getSourceForCodeFrame(source);
				const codeFrame = err.location && _source && generateCodeFrame(_source, err.location.start.offset, err.location.end.offset);
				const emitter = context.__v_emitter;
				if (emitter && _source) emitter.emit("compile-error", {
					message: _source,
					error: err.message,
					start: err.location && err.location.start.offset,
					end: err.location && err.location.end.offset,
					groupId: `translate:${key}`
				});
				const message = `Message compilation error: ${err.message}`;
				throw new SyntaxError(codeFrame ? `${message}\n${codeFrame}` : message);
			}
			throw err;
		},
		onCacheKey: (source) => generateFormatCacheKey(locale, key, source)
	};
}
function getSourceForCodeFrame(source) {
	if (isString(source)) return source;
	else if (source.loc && source.loc.source) return source.loc.source;
}
function getMessageContextOptions(context, locale, message, options) {
	const { modifiers, pluralRules, messageResolver: resolveValue, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
	const resolveMessage = (key, useLinked) => {
		let val = resolveValue(message, key);
		if (val == null && (fallbackContext || useLinked)) {
			const [format, , message] = resolveMessageFormat(fallbackContext || context, key, locale, fallbackLocale, fallbackWarn, missingWarn);
			val = format ?? resolveValue(message, key);
		}
		if (isString(val) || isMessageAST(val)) {
			let occurred = false;
			const onError = () => {
				occurred = true;
			};
			const msg = compileMessageFormat(context, key, locale, val, key, onError);
			return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
		} else if (isMessageFunction(val)) return val;
		else return NOOP_MESSAGE_FUNCTION;
	};
	const ctxOptions = {
		locale,
		modifiers,
		pluralRules,
		messages: resolveMessage
	};
	if (context.processor) ctxOptions.processor = context.processor;
	if (options.list) ctxOptions.list = options.list;
	if (options.named) ctxOptions.named = options.named;
	if (isNumber(options.plural)) ctxOptions.pluralIndex = options.plural;
	return ctxOptions;
}
function getDevtoolsGlobalHook() {
	return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
	return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
}
var isProxyAvailable = typeof Proxy === "function";
var HOOK_SETUP = "devtools-plugin:setup";
var HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
var supported;
var perf;
function isPerformanceSupported() {
	var _a;
	if (supported !== void 0) return supported;
	if (typeof window !== "undefined" && window.performance) {
		supported = true;
		perf = window.performance;
	} else if (typeof globalThis !== "undefined" && ((_a = globalThis.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
		supported = true;
		perf = globalThis.perf_hooks.performance;
	} else supported = false;
	return supported;
}
function now() {
	return isPerformanceSupported() ? perf.now() : Date.now();
}
var ApiProxy = class {
	constructor(plugin, hook) {
		this.target = null;
		this.targetQueue = [];
		this.onQueue = [];
		this.plugin = plugin;
		this.hook = hook;
		const defaultSettings = {};
		if (plugin.settings) for (const id in plugin.settings) defaultSettings[id] = plugin.settings[id].defaultValue;
		const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
		let currentSettings = Object.assign({}, defaultSettings);
		try {
			const raw = localStorage.getItem(localSettingsSaveId);
			const data = JSON.parse(raw);
			Object.assign(currentSettings, data);
		} catch (e) {}
		this.fallbacks = {
			getSettings() {
				return currentSettings;
			},
			setSettings(value) {
				try {
					localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
				} catch (e) {}
				currentSettings = value;
			},
			now() {
				return now();
			}
		};
		if (hook) hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
			if (pluginId === this.plugin.id) this.fallbacks.setSettings(value);
		});
		this.proxiedOn = new Proxy({}, { get: (_target, prop) => {
			if (this.target) return this.target.on[prop];
			else return (...args) => {
				this.onQueue.push({
					method: prop,
					args
				});
			};
		} });
		this.proxiedTarget = new Proxy({}, { get: (_target, prop) => {
			if (this.target) return this.target[prop];
			else if (prop === "on") return this.proxiedOn;
			else if (Object.keys(this.fallbacks).includes(prop)) return (...args) => {
				this.targetQueue.push({
					method: prop,
					args,
					resolve: () => {}
				});
				return this.fallbacks[prop](...args);
			};
			else return (...args) => {
				return new Promise((resolve) => {
					this.targetQueue.push({
						method: prop,
						args,
						resolve
					});
				});
			};
		} });
	}
	async setRealTarget(target) {
		this.target = target;
		for (const item of this.onQueue) this.target.on[item.method](...item.args);
		for (const item of this.targetQueue) item.resolve(await this.target[item.method](...item.args));
	}
};
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
	const descriptor = pluginDescriptor;
	const target = getTarget();
	const hook = getDevtoolsGlobalHook();
	const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
	if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
	else {
		const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
		(target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: descriptor,
			setupFn,
			proxy
		});
		if (proxy) setupFn(proxy.proxiedTarget);
	}
}
var VERSION = "11.4.0";
var I18nErrorCodes = {
	UNEXPECTED_RETURN_TYPE: 24,
	INVALID_ARGUMENT: 25,
	MUST_BE_CALL_SETUP_TOP: 26,
	NOT_INSTALLED: 27,
	REQUIRED_VALUE: 28,
	INVALID_VALUE: 29,
	CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
	NOT_INSTALLED_WITH_PROVIDE: 31,
	UNEXPECTED_ERROR: 32,
	NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
	NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function createI18nError(code, ...args) {
	return createCompileError(code, null, process.env.NODE_ENV !== "production" ? {
		messages: errorMessages,
		args
	} : void 0);
}
var errorMessages = {
	[I18nErrorCodes.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
	[I18nErrorCodes.INVALID_ARGUMENT]: "Invalid argument",
	[I18nErrorCodes.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
	[I18nErrorCodes.NOT_INSTALLED]: "Need to install with `app.use` function",
	[I18nErrorCodes.UNEXPECTED_ERROR]: "Unexpected error",
	[I18nErrorCodes.REQUIRED_VALUE]: `Required in value: {0}`,
	[I18nErrorCodes.INVALID_VALUE]: `Invalid value`,
	[I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: `Cannot setup vue-devtools plugin`,
	[I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
	[I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
	[I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
};
var TranslateVNodeSymbol = makeSymbol("__translateVNode");
var DatetimePartsSymbol = makeSymbol("__datetimeParts");
var NumberPartsSymbol = makeSymbol("__numberParts");
var EnableEmitter = makeSymbol("__enableEmitter");
var DisableEmitter = makeSymbol("__disableEmitter");
var SetPluralRulesSymbol = makeSymbol("__setPluralRules");
makeSymbol("__intlifyMeta");
var InejctWithOptionSymbol = makeSymbol("__injectWithOption");
var DisposeSymbol = makeSymbol("__dispose");
var I18nWarnCodes = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
};
var warnMessages = {
	[I18nWarnCodes.FALLBACK_TO_ROOT]: `Fall back to {type} '{key}' with root locale.`,
	[I18nWarnCodes.NOT_FOUND_PARENT_SCOPE]: `Not found parent scope. use the global scope.`,
	[I18nWarnCodes.IGNORE_OBJ_FLATTEN]: `Ignore object flatten: '{key}' key has an string value`,
	[I18nWarnCodes.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
	[I18nWarnCodes.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: `'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.`,
	[I18nWarnCodes.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function getWarnMessage(code, ...args) {
	return format$1(warnMessages[code], ...args);
}
function handleFlatJson(obj) {
	if (!isObject(obj)) return obj;
	if (isMessageAST(obj)) return obj;
	for (const key in obj) {
		if (!hasOwn(obj, key)) continue;
		if (!key.includes(".")) {
			if (isObject(obj[key])) handleFlatJson(obj[key]);
		} else {
			const subKeys = key.split(".");
			const lastIndex = subKeys.length - 1;
			let currentObj = obj;
			let hasStringValue = false;
			for (let i = 0; i < lastIndex; i++) {
				if (subKeys[i] === "__proto__") throw new Error(`unsafe key: ${subKeys[i]}`);
				if (!(subKeys[i] in currentObj)) currentObj[subKeys[i]] = create();
				if (!isObject(currentObj[subKeys[i]])) {
					process.env.NODE_ENV !== "production" && warn(getWarnMessage(I18nWarnCodes.IGNORE_OBJ_FLATTEN, { key: subKeys[i] }));
					hasStringValue = true;
					break;
				}
				currentObj = currentObj[subKeys[i]];
			}
			if (!hasStringValue) {
				if (!isMessageAST(currentObj)) {
					currentObj[subKeys[lastIndex]] = obj[key];
					delete obj[key];
				} else if (!AST_NODE_PROPS_KEYS.includes(subKeys[lastIndex])) delete obj[key];
			}
			if (!isMessageAST(currentObj)) {
				const target = currentObj[subKeys[lastIndex]];
				if (isObject(target)) handleFlatJson(target);
			}
		}
	}
	return obj;
}
function getLocaleMessages(locale, options) {
	const { messages, __i18n, messageResolver, flatJson } = options;
	const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? create() : { [locale]: create() };
	if (isArray(__i18n)) __i18n.forEach((custom) => {
		if ("locale" in custom && "resource" in custom) {
			const { locale, resource } = custom;
			if (locale) {
				ret[locale] = ret[locale] || create();
				deepCopy(resource, ret[locale]);
			} else deepCopy(resource, ret);
		} else isString(custom) && deepCopy(JSON.parse(custom), ret);
	});
	if (messageResolver == null && flatJson) {
		for (const key in ret) if (hasOwn(ret, key)) handleFlatJson(ret[key]);
	}
	return ret;
}
function getComponentOptions(instance) {
	return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
	let messages = isObject(options.messages) ? options.messages : create();
	if ("__i18nGlobal" in componentOptions) messages = getLocaleMessages(gl.locale.value, {
		messages,
		__i18n: componentOptions.__i18nGlobal
	});
	const locales = Object.keys(messages);
	if (locales.length) locales.forEach((locale) => {
		gl.mergeLocaleMessage(locale, messages[locale]);
	});
	if (isObject(options.datetimeFormats)) {
		const locales = Object.keys(options.datetimeFormats);
		if (locales.length) locales.forEach((locale) => {
			gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
		});
	}
	if (isObject(options.numberFormats)) {
		const locales = Object.keys(options.numberFormats);
		if (locales.length) locales.forEach((locale) => {
			gl.mergeNumberFormat(locale, options.numberFormats[locale]);
		});
	}
}
function createTextNode(key) {
	return createVNode(Text, null, key, 0);
}
function getCurrentInstance$1() {
	const key = "currentInstance";
	if (key in Vue) return Vue[key];
	else return Vue.getCurrentInstance();
}
var DEVTOOLS_META = "__INTLIFY_META__";
var NOOP_RETURN_ARRAY = () => [];
var NOOP_RETURN_FALSE = () => false;
var composerID = 0;
function defineCoreMissingHandler(missing) {
	return ((ctx, locale, key, type) => {
		return missing(locale, key, getCurrentInstance$1() || void 0, type);
	});
}
var getMetaInfo = () => {
	const instance = getCurrentInstance$1();
	let meta = null;
	return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}) {
	const { __root, __injectWithOption } = options;
	const _isGlobal = __root === void 0;
	const flatJson = options.flatJson;
	const _ref = inBrowser ? ref : shallowRef;
	let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
	const _locale = _ref(__root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE);
	const _fallbackLocale = _ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
	const _messages = _ref(getLocaleMessages(_locale.value, options));
	const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
	const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
	let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
	let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
	let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
	let _fallbackFormat = !!options.fallbackFormat;
	let _missing = isFunction(options.missing) ? options.missing : null;
	let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
	let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
	let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
	let _escapeParameter = !!options.escapeParameter;
	const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
	let _pluralRules = options.pluralRules || __root && __root.pluralRules;
	let _context;
	const getCoreContext = () => {
		_isGlobal && setFallbackContext(null);
		const ctxOptions = {
			version: VERSION,
			locale: _locale.value,
			fallbackLocale: _fallbackLocale.value,
			messages: _messages.value,
			modifiers: _modifiers,
			pluralRules: _pluralRules,
			missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
			missingWarn: _missingWarn,
			fallbackWarn: _fallbackWarn,
			fallbackFormat: _fallbackFormat,
			unresolving: true,
			postTranslation: _postTranslation === null ? void 0 : _postTranslation,
			warnHtmlMessage: _warnHtmlMessage,
			escapeParameter: _escapeParameter,
			messageResolver: options.messageResolver,
			messageCompiler: options.messageCompiler,
			__meta: { framework: "vue" }
		};
		ctxOptions.datetimeFormats = _datetimeFormats.value;
		ctxOptions.numberFormats = _numberFormats.value;
		ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
		ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
		if (process.env.NODE_ENV !== "production") ctxOptions.__v_emitter = isPlainObject(_context) ? _context.__v_emitter : void 0;
		const ctx = createCoreContext(ctxOptions);
		_isGlobal && setFallbackContext(ctx);
		return ctx;
	};
	_context = getCoreContext();
	updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
	function trackReactivityValues() {
		return [
			_locale.value,
			_fallbackLocale.value,
			_messages.value,
			_datetimeFormats.value,
			_numberFormats.value
		];
	}
	const locale = computed({
		get: () => _locale.value,
		set: (val) => {
			_context.locale = val;
			_locale.value = val;
		}
	});
	const fallbackLocale = computed({
		get: () => _fallbackLocale.value,
		set: (val) => {
			_context.fallbackLocale = val;
			_fallbackLocale.value = val;
			updateFallbackLocale(_context, _locale.value, val);
		}
	});
	const messages = computed(() => _messages.value);
	const datetimeFormats = computed(() => _datetimeFormats.value);
	const numberFormats = computed(() => _numberFormats.value);
	function getPostTranslationHandler() {
		return isFunction(_postTranslation) ? _postTranslation : null;
	}
	function setPostTranslationHandler(handler) {
		_postTranslation = handler;
		_context.postTranslation = handler;
	}
	function getMissingHandler() {
		return _missing;
	}
	function setMissingHandler(handler) {
		if (handler !== null) _runtimeMissing = defineCoreMissingHandler(handler);
		_missing = handler;
		_context.missing = _runtimeMissing;
	}
	function isResolvedTranslateMessage(type, arg) {
		return type !== "translate" || !arg.resolvedMessage;
	}
	const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
		trackReactivityValues();
		let ret;
		try {
			if (process.env.NODE_ENV !== "production" || false) setAdditionalMeta(getMetaInfo());
			if (!_isGlobal) _context.fallbackContext = __root ? getFallbackContext() : void 0;
			ret = fn(_context);
		} finally {
			if (process.env.NODE_ENV !== "production" || false) setAdditionalMeta(null);
			if (!_isGlobal) _context.fallbackContext = void 0;
		}
		if (warnType !== "translate exists" && isNumber(ret) && ret === -1 || warnType === "translate exists" && !ret) {
			const [key, arg2] = argumentParser();
			if (process.env.NODE_ENV !== "production" && __root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
				if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) warn(getWarnMessage(I18nWarnCodes.FALLBACK_TO_ROOT, {
					key,
					type: warnType
				}));
				if (process.env.NODE_ENV !== "production") {
					const { __v_emitter: emitter } = _context;
					if (emitter && _fallbackRoot) emitter.emit("fallback", {
						type: warnType,
						key,
						to: "global",
						groupId: `${warnType}:${key}`
					});
				}
			}
			return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
		} else if (successCondition(ret)) return ret;
		else throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
	};
	function t(...args) {
		return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
	}
	function rt(...args) {
		const [arg1, arg2, arg3] = args;
		if (arg3 && !isObject(arg3)) throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
		return t(...[
			arg1,
			arg2,
			assign({ resolvedMessage: true }, arg3 || {})
		]);
	}
	function d(...args) {
		return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => "", (val) => isString(val) || isArray(val));
	}
	function n(...args) {
		return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => "", (val) => isString(val) || isArray(val));
	}
	function normalize(values) {
		return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
	}
	const interpolate = (val) => val;
	const processor = {
		normalize,
		interpolate,
		type: "vnode"
	};
	function translateVNode(...args) {
		return wrapWithDeps((context) => {
			let ret;
			const _context = context;
			try {
				_context.processor = processor;
				ret = Reflect.apply(translate, null, [_context, ...args]);
			} finally {
				_context.processor = null;
			}
			return ret;
		}, () => parseTranslateArgs(...args), "translate", (root) => root[TranslateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => isArray(val));
	}
	function numberParts(...args) {
		return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
	}
	function datetimeParts(...args) {
		return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
	}
	function setPluralRules(rules) {
		_pluralRules = rules;
		_context.pluralRules = _pluralRules;
	}
	function te(key, locale) {
		return wrapWithDeps(() => {
			if (!key) return false;
			const targetLocale = isString(locale) ? locale : _locale.value;
			const locales = isString(locale) ? [targetLocale] : fallbackWithLocaleChain(_context, _fallbackLocale.value, targetLocale);
			for (let i = 0; i < locales.length; i++) {
				const message = getLocaleMessage(locales[i]);
				let resolved = _context.messageResolver(message, key);
				if (resolved === null) resolved = message[key];
				if (isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved)) return true;
			}
			return false;
		}, () => [key], "translate exists", (root) => {
			return Reflect.apply(root.te, root, [key, locale]);
		}, NOOP_RETURN_FALSE, (val) => isBoolean(val));
	}
	function resolveMessages(key) {
		let messages = null;
		const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
		for (let i = 0; i < locales.length; i++) {
			const targetLocaleMessages = _messages.value[locales[i]] || {};
			const messageValue = _context.messageResolver(targetLocaleMessages, key);
			if (messageValue != null) {
				messages = messageValue;
				break;
			}
		}
		return messages;
	}
	function tm(key) {
		const messages = resolveMessages(key);
		return messages != null ? messages : __root ? __root.tm(key) || {} : {};
	}
	function getLocaleMessage(locale) {
		return _messages.value[locale] || {};
	}
	function setLocaleMessage(locale, message) {
		if (flatJson) {
			const _message = { [locale]: message };
			for (const key in _message) if (hasOwn(_message, key)) handleFlatJson(_message[key]);
			message = _message[locale];
		}
		_messages.value[locale] = message;
		_context.messages = _messages.value;
	}
	function mergeLocaleMessage(locale, message) {
		_messages.value[locale] = _messages.value[locale] || {};
		const _message = { [locale]: message };
		if (flatJson) {
			for (const key in _message) if (hasOwn(_message, key)) handleFlatJson(_message[key]);
		}
		message = _message[locale];
		deepCopy(message, _messages.value[locale]);
		_context.messages = _messages.value;
	}
	function getDateTimeFormat(locale) {
		return _datetimeFormats.value[locale] || {};
	}
	function setDateTimeFormat(locale, format) {
		_datetimeFormats.value[locale] = format;
		_context.datetimeFormats = _datetimeFormats.value;
		clearDateTimeFormat(_context, locale, format);
	}
	function mergeDateTimeFormat(locale, format) {
		_datetimeFormats.value[locale] = assign(_datetimeFormats.value[locale] || {}, format);
		_context.datetimeFormats = _datetimeFormats.value;
		clearDateTimeFormat(_context, locale, format);
	}
	function getNumberFormat(locale) {
		return _numberFormats.value[locale] || {};
	}
	function setNumberFormat(locale, format) {
		_numberFormats.value[locale] = format;
		_context.numberFormats = _numberFormats.value;
		clearNumberFormat(_context, locale, format);
	}
	function mergeNumberFormat(locale, format) {
		_numberFormats.value[locale] = assign(_numberFormats.value[locale] || {}, format);
		_context.numberFormats = _numberFormats.value;
		clearNumberFormat(_context, locale, format);
	}
	composerID++;
	if (__root && inBrowser) {
		watch(__root.locale, (val) => {
			if (_inheritLocale) {
				_locale.value = val;
				_context.locale = val;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		});
		watch(__root.fallbackLocale, (val) => {
			if (_inheritLocale) {
				_fallbackLocale.value = val;
				_context.fallbackLocale = val;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		});
	}
	const composer = {
		id: composerID,
		locale,
		fallbackLocale,
		get inheritLocale() {
			return _inheritLocale;
		},
		set inheritLocale(val) {
			_inheritLocale = val;
			if (val && __root) {
				_locale.value = __root.locale.value;
				_fallbackLocale.value = __root.fallbackLocale.value;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		},
		get availableLocales() {
			return Object.keys(_messages.value).sort();
		},
		messages,
		get modifiers() {
			return _modifiers;
		},
		get pluralRules() {
			return _pluralRules || {};
		},
		get isGlobal() {
			return _isGlobal;
		},
		get missingWarn() {
			return _missingWarn;
		},
		set missingWarn(val) {
			_missingWarn = val;
			_context.missingWarn = _missingWarn;
		},
		get fallbackWarn() {
			return _fallbackWarn;
		},
		set fallbackWarn(val) {
			_fallbackWarn = val;
			_context.fallbackWarn = _fallbackWarn;
		},
		get fallbackRoot() {
			return _fallbackRoot;
		},
		set fallbackRoot(val) {
			_fallbackRoot = val;
		},
		get fallbackFormat() {
			return _fallbackFormat;
		},
		set fallbackFormat(val) {
			_fallbackFormat = val;
			_context.fallbackFormat = _fallbackFormat;
		},
		get warnHtmlMessage() {
			return _warnHtmlMessage;
		},
		set warnHtmlMessage(val) {
			_warnHtmlMessage = val;
			_context.warnHtmlMessage = val;
		},
		get escapeParameter() {
			return _escapeParameter;
		},
		set escapeParameter(val) {
			_escapeParameter = val;
			_context.escapeParameter = val;
		},
		t,
		getLocaleMessage,
		setLocaleMessage,
		mergeLocaleMessage,
		getPostTranslationHandler,
		setPostTranslationHandler,
		getMissingHandler,
		setMissingHandler,
		[SetPluralRulesSymbol]: setPluralRules
	};
	composer.datetimeFormats = datetimeFormats;
	composer.numberFormats = numberFormats;
	composer.rt = rt;
	composer.te = te;
	composer.tm = tm;
	composer.d = d;
	composer.n = n;
	composer.getDateTimeFormat = getDateTimeFormat;
	composer.setDateTimeFormat = setDateTimeFormat;
	composer.mergeDateTimeFormat = mergeDateTimeFormat;
	composer.getNumberFormat = getNumberFormat;
	composer.setNumberFormat = setNumberFormat;
	composer.mergeNumberFormat = mergeNumberFormat;
	composer[InejctWithOptionSymbol] = __injectWithOption;
	composer[TranslateVNodeSymbol] = translateVNode;
	composer[DatetimePartsSymbol] = datetimeParts;
	composer[NumberPartsSymbol] = numberParts;
	if (process.env.NODE_ENV !== "production") {
		composer[EnableEmitter] = (emitter) => {
			_context.__v_emitter = emitter;
		};
		composer[DisableEmitter] = () => {
			_context.__v_emitter = void 0;
		};
	}
	return composer;
}
var VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
var VueDevToolsLabels = {
	"vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
	"vue-i18n-resource-inspector": "Vue I18n DevTools",
	"vue-i18n-timeline": "Vue I18n"
};
var VueDevToolsPlaceholders = { "vue-i18n-resource-inspector": "Search for scopes ..." };
var VueDevToolsTimelineColors = { "vue-i18n-timeline": 16764185 };
var devtoolsApi;
async function enableDevTools(app, i18n) {
	return new Promise((resolve, reject) => {
		try {
			setupDevtoolsPlugin({
				id: "vue-devtools-plugin-vue-i18n",
				label: VueDevToolsLabels["vue-devtools-plugin-vue-i18n"],
				packageName: "vue-i18n",
				homepage: "https://vue-i18n.intlify.dev",
				logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
				componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
				app
			}, (api) => {
				devtoolsApi = api;
				api.on.visitComponentTree(({ componentInstance, treeNode }) => {
					updateComponentTreeTags(componentInstance, treeNode, i18n);
				});
				api.on.inspectComponent(({ componentInstance, instanceData }) => {
					if (componentInstance.__VUE_I18N__ && instanceData) {
						if (i18n.mode === "legacy") {
							if (componentInstance.__VUE_I18N__ !== i18n.global.__composer) inspectComposer(instanceData, componentInstance.__VUE_I18N__);
						} else inspectComposer(instanceData, componentInstance.__VUE_I18N__);
					}
				});
				api.addInspector({
					id: "vue-i18n-resource-inspector",
					label: VueDevToolsLabels["vue-i18n-resource-inspector"],
					icon: "language",
					treeFilterPlaceholder: VueDevToolsPlaceholders["vue-i18n-resource-inspector"]
				});
				api.on.getInspectorTree((payload) => {
					if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") registerScope(payload, i18n);
				});
				const roots = /* @__PURE__ */ new Map();
				api.on.getInspectorState(async (payload) => {
					if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
						api.unhighlightElement();
						inspectScope(payload, i18n);
						if (payload.nodeId === "global") {
							if (!roots.has(payload.app)) {
								const [root] = await api.getComponentInstances(payload.app);
								roots.set(payload.app, root);
							}
							api.highlightElement(roots.get(payload.app));
						} else {
							const instance = getComponentInstance(payload.nodeId, i18n);
							instance && api.highlightElement(instance);
						}
					}
				});
				api.on.editInspectorState((payload) => {
					if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") editScope(payload, i18n);
				});
				api.addTimelineLayer({
					id: "vue-i18n-timeline",
					label: VueDevToolsLabels["vue-i18n-timeline"],
					color: VueDevToolsTimelineColors["vue-i18n-timeline"]
				});
				resolve(true);
			});
		} catch (e) {
			console.error(e);
			reject(false);
		}
	});
}
function getI18nScopeLable(instance) {
	return instance.type.name || instance.type.displayName || instance.type.__file || "Anonymous";
}
function updateComponentTreeTags(instance, treeNode, i18n) {
	const global = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
	if (instance && instance.__VUE_I18N__) {
		if (instance.__VUE_I18N__ !== global) {
			const tag = {
				label: `i18n (${getI18nScopeLable(instance)} Scope)`,
				textColor: 0,
				backgroundColor: 16764185
			};
			treeNode.tags.push(tag);
		}
	}
}
function inspectComposer(instanceData, composer) {
	const type = VUE_I18N_COMPONENT_TYPES;
	instanceData.state.push({
		type,
		key: "locale",
		editable: true,
		value: composer.locale.value
	});
	instanceData.state.push({
		type,
		key: "availableLocales",
		editable: false,
		value: composer.availableLocales
	});
	instanceData.state.push({
		type,
		key: "fallbackLocale",
		editable: true,
		value: composer.fallbackLocale.value
	});
	instanceData.state.push({
		type,
		key: "inheritLocale",
		editable: true,
		value: composer.inheritLocale
	});
	instanceData.state.push({
		type,
		key: "messages",
		editable: false,
		value: getLocaleMessageValue(composer.messages.value)
	});
	instanceData.state.push({
		type,
		key: "datetimeFormats",
		editable: false,
		value: composer.datetimeFormats.value
	});
	instanceData.state.push({
		type,
		key: "numberFormats",
		editable: false,
		value: composer.numberFormats.value
	});
}
function getLocaleMessageValue(messages) {
	const value = {};
	Object.keys(messages).forEach((key) => {
		const v = messages[key];
		if (isFunction(v) && "source" in v) value[key] = getMessageFunctionDetails(v);
		else if (isMessageAST(v) && v.loc && v.loc.source) value[key] = v.loc.source;
		else if (isObject(v)) value[key] = getLocaleMessageValue(v);
		else value[key] = v;
	});
	return value;
}
var ESC = {
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"&": "&amp;"
};
function escape(s) {
	return s.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a) {
	return ESC[a] || a;
}
function getMessageFunctionDetails(func) {
	return { _custom: {
		type: "function",
		display: `<span>ƒ</span> ${func.source ? `("${escape(func.source)}")` : `(?)`}`
	} };
}
function registerScope(payload, i18n) {
	payload.rootNodes.push({
		id: "global",
		label: "Global Scope"
	});
	const global = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
	for (const [keyInstance, instance] of i18n.__instances) {
		const composer = i18n.mode === "composition" ? instance : instance.__composer;
		if (global === composer) continue;
		payload.rootNodes.push({
			id: composer.id.toString(),
			label: `${getI18nScopeLable(keyInstance)} Scope`
		});
	}
}
function getComponentInstance(nodeId, i18n) {
	let instance = null;
	if (nodeId !== "global") {
		for (const [component, composer] of i18n.__instances.entries()) if (composer.id.toString() === nodeId) {
			instance = component;
			break;
		}
	}
	return instance;
}
function getComposer$2(nodeId, i18n) {
	if (nodeId === "global") return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
	else {
		const instance = Array.from(i18n.__instances.values()).find((item) => item.id.toString() === nodeId);
		if (instance) return i18n.mode === "composition" ? instance : instance.__composer;
		else return null;
	}
}
function inspectScope(payload, i18n) {
	const composer = getComposer$2(payload.nodeId, i18n);
	if (composer) payload.state = makeScopeInspectState(composer);
	return null;
}
function makeScopeInspectState(composer) {
	const state = {};
	const localeType = "Locale related info";
	state[localeType] = [
		{
			type: localeType,
			key: "locale",
			editable: true,
			value: composer.locale.value
		},
		{
			type: localeType,
			key: "fallbackLocale",
			editable: true,
			value: composer.fallbackLocale.value
		},
		{
			type: localeType,
			key: "availableLocales",
			editable: false,
			value: composer.availableLocales
		},
		{
			type: localeType,
			key: "inheritLocale",
			editable: true,
			value: composer.inheritLocale
		}
	];
	const localeMessagesType = "Locale messages info";
	state[localeMessagesType] = [{
		type: localeMessagesType,
		key: "messages",
		editable: false,
		value: getLocaleMessageValue(composer.messages.value)
	}];
	{
		const datetimeFormatsType = "Datetime formats info";
		state[datetimeFormatsType] = [{
			type: datetimeFormatsType,
			key: "datetimeFormats",
			editable: false,
			value: composer.datetimeFormats.value
		}];
		const numberFormatsType = "Datetime formats info";
		state[numberFormatsType] = [{
			type: numberFormatsType,
			key: "numberFormats",
			editable: false,
			value: composer.numberFormats.value
		}];
	}
	return state;
}
function addTimelineEvent(event, payload) {
	if (devtoolsApi) {
		let groupId;
		if (payload && "groupId" in payload) {
			groupId = payload.groupId;
			delete payload.groupId;
		}
		devtoolsApi.addTimelineEvent({
			layerId: "vue-i18n-timeline",
			event: {
				title: event,
				groupId,
				time: Date.now(),
				meta: {},
				data: payload || {},
				logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
			}
		});
	}
}
function editScope(payload, i18n) {
	const composer = getComposer$2(payload.nodeId, i18n);
	if (composer) {
		const [field] = payload.path;
		if (field === "locale" && isString(payload.state.value)) composer.locale.value = payload.state.value;
		else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject(payload.state.value))) composer.fallbackLocale.value = payload.state.value;
		else if (field === "inheritLocale" && isBoolean(payload.state.value)) composer.inheritLocale = payload.state.value;
	}
}
var baseFormatProps = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (val) => val === "parent" || val === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function getInterpolateArg({ slots }, keys) {
	if (keys.length === 1 && keys[0] === "default") return (slots.default ? slots.default() : []).reduce((slot, current) => {
		return [...slot, ...current.type === Fragment ? current.children : [current]];
	}, []);
	else return keys.reduce((arg, key) => {
		const slot = slots[key];
		if (slot) arg[key] = slot();
		return arg;
	}, create());
}
function getFragmentableTag() {
	return Fragment;
}
var Translation = defineComponent({
	name: "i18n-t",
	props: assign({
		keypath: {
			type: String,
			required: true
		},
		plural: {
			type: [Number, String],
			validator: (val) => isNumber(val) || !isNaN(val)
		}
	}, baseFormatProps),
	setup(props, context) {
		const { slots, attrs } = context;
		const i18n = props.i18n || useI18n({
			useScope: props.scope,
			__useComponent: true
		});
		return () => {
			const keys = Object.keys(slots).filter((key) => key[0] !== "_");
			const options = create();
			if (props.locale) options.locale = props.locale;
			if (props.plural !== void 0) options.plural = isString(props.plural) ? +props.plural : props.plural;
			const arg = getInterpolateArg(context, keys);
			const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
			const assignedAttrs = assign(create(), attrs);
			const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
			return h(tag, assignedAttrs, children);
		};
	}
});
function isVNode(target) {
	return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
	const { slots, attrs } = context;
	return () => {
		const options = { part: true };
		let overrides = create();
		if (props.locale) options.locale = props.locale;
		if (isString(props.format)) options.key = props.format;
		else if (isObject(props.format)) {
			if (isString(props.format.key)) options.key = props.format.key;
			overrides = Object.keys(props.format).reduce((options, prop) => {
				return slotKeys.includes(prop) ? assign(create(), options, { [prop]: props.format[prop] }) : options;
			}, create());
		}
		const parts = partFormatter(...[
			props.value,
			options,
			overrides
		]);
		let children = [options.key];
		if (isArray(parts)) children = parts.map((part, index) => {
			const slot = slots[part.type];
			const node = slot ? slot({
				[part.type]: part.value,
				index,
				parts
			}) : [part.value];
			if (isVNode(node)) node[0].key = `${part.type}-${index}`;
			return node;
		});
		else if (isString(parts)) children = [parts];
		const assignedAttrs = assign(create(), attrs);
		const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
		return h(tag, assignedAttrs, children);
	};
}
var NumberFormat = defineComponent({
	name: "i18n-n",
	props: assign({
		value: {
			type: Number,
			required: true
		},
		format: { type: [String, Object] }
	}, baseFormatProps),
	setup(props, context) {
		const i18n = props.i18n || useI18n({
			useScope: props.scope,
			__useComponent: true
		});
		return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => i18n[NumberPartsSymbol](...args));
	}
});
function getComposer$1(i18n, instance) {
	const i18nInternal = i18n;
	if (i18n.mode === "composition") return i18nInternal.__getInstance(instance) || i18n.global;
	else {
		const vueI18n = i18nInternal.__getInstance(instance);
		return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
	}
}
function vTDirective(i18n) {
	const _process = (binding) => {
		if (process.env.NODE_ENV !== "production") warnOnce(getWarnMessage(I18nWarnCodes.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE));
		const { instance, value } = binding;
		if (!instance || !instance.$) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		const composer = getComposer$1(i18n, instance.$);
		const parsedValue = parseValue(value);
		return [Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]), composer];
	};
	const register = (el, binding) => {
		const [textContent, composer] = _process(binding);
		if (inBrowser) el.__i18nWatcher = watch(composer.locale, () => {
			binding.instance && binding.instance.$forceUpdate();
		});
		el.__composer = composer;
		el.textContent = textContent;
	};
	const unregister = (el) => {
		if (inBrowser && el.__i18nWatcher) {
			el.__i18nWatcher();
			el.__i18nWatcher = void 0;
			delete el.__i18nWatcher;
		}
		if (el.__composer) {
			el.__composer = void 0;
			delete el.__composer;
		}
	};
	const update = (el, { value }) => {
		if (el.__composer) {
			const composer = el.__composer;
			const parsedValue = parseValue(value);
			el.textContent = Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]);
		}
	};
	const getSSRProps = (binding) => {
		const [textContent] = _process(binding);
		return { textContent };
	};
	return {
		created: register,
		unmounted: unregister,
		beforeUpdate: update,
		getSSRProps
	};
}
function parseValue(value) {
	if (isString(value)) return { path: value };
	else if (isPlainObject(value)) {
		if (!("path" in value)) throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
		return value;
	} else throw createI18nError(I18nErrorCodes.INVALID_VALUE);
}
function makeParams(value) {
	const { path, locale, args, choice, plural } = value;
	const options = {};
	const named = args || {};
	if (isString(locale)) options.locale = locale;
	if (isNumber(choice)) options.plural = choice;
	if (isNumber(plural)) options.plural = plural;
	return [
		path,
		named,
		options
	];
}
function apply(app, i18n, ...options) {
	const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
	if (isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true) {
		[Translation.name, "I18nT"].forEach((name) => app.component(name, Translation));
		[NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
		[DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
	}
	app.directive("t", vTDirective(i18n));
}
var I18nInjectionKey = makeSymbol("global-vue-i18n");
function createI18n(options = {}) {
	const __legacyMode = false;
	if (process.env.NODE_ENV !== "production" && __legacyMode);
	const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
	const __instances = /* @__PURE__ */ new Map();
	const [globalScope, __global] = createGlobal(options, __legacyMode);
	const symbol = makeSymbol(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
	function __getInstance(component) {
		return __instances.get(component) || null;
	}
	function __setInstance(component, instance) {
		__instances.set(component, instance);
	}
	function __deleteInstance(component) {
		__instances.delete(component);
	}
	const i18n = {
		get mode() {
			return "composition";
		},
		async install(app, ...options) {
			if ((process.env.NODE_ENV !== "production" || false) && true) app.__VUE_I18N__ = i18n;
			app.__VUE_I18N_SYMBOL__ = symbol;
			app.provide(app.__VUE_I18N_SYMBOL__, i18n);
			if (isPlainObject(options[0])) {
				const opts = options[0];
				i18n.__composerExtend = opts.__composerExtend;
				i18n.__vueI18nExtend = opts.__vueI18nExtend;
			}
			let globalReleaseHandler = null;
			if (__globalInjection) globalReleaseHandler = injectGlobalFields(app, i18n.global);
			apply(app, i18n, ...options);
			const unmountApp = app.unmount;
			app.unmount = () => {
				globalReleaseHandler && globalReleaseHandler();
				i18n.dispose();
				unmountApp();
			};
			if ((process.env.NODE_ENV !== "production" || false) && true) {
				if (!await enableDevTools(app, i18n)) throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
				const emitter = createEmitter();
				{
					const _composer = __global;
					_composer[EnableEmitter] && _composer[EnableEmitter](emitter);
				}
				emitter.on("*", addTimelineEvent);
			}
		},
		get global() {
			return __global;
		},
		dispose() {
			globalScope.stop();
		},
		__instances,
		__getInstance,
		__setInstance,
		__deleteInstance
	};
	return i18n;
}
function useI18n(options = {}) {
	const instance = getCurrentInstance$1();
	if (instance == null) throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
	if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
	const i18n = getI18nInstance(instance);
	const gl = getGlobalComposer(i18n);
	const componentOptions = getComponentOptions(instance);
	const scope = getScope(options, componentOptions);
	if (scope === "global") {
		adjustI18nResources(gl, options, componentOptions);
		return gl;
	}
	if (scope === "parent") {
		let composer = getComposer(i18n, instance, options.__useComponent);
		if (composer == null) {
			if (process.env.NODE_ENV !== "production") warn(getWarnMessage(I18nWarnCodes.NOT_FOUND_PARENT_SCOPE));
			composer = gl;
		}
		return composer;
	}
	if (scope === "isolated") {
		if (i18n.mode !== "composition") throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		const i18nInternalIso = i18n;
		const composerOptions = assign({}, options);
		composerOptions.__root = getComposer(i18n, instance) || gl;
		const composer = createComposer(composerOptions);
		if (i18nInternalIso.__composerExtend) composer[DisposeSymbol] = i18nInternalIso.__composerExtend(composer);
		let emitter = null;
		if ((process.env.NODE_ENV !== "production" || false) && true) {
			emitter = createEmitter();
			const _composer = composer;
			_composer[EnableEmitter] && _composer[EnableEmitter](emitter);
			emitter.on("*", addTimelineEvent);
		}
		if (getCurrentScope()) onScopeDispose(() => {
			if ((process.env.NODE_ENV !== "production" || false) && true) {
				emitter && emitter.off("*", addTimelineEvent);
				const _composer = composer;
				_composer[DisableEmitter] && _composer[DisableEmitter]();
			}
			const dispose = composer[DisposeSymbol];
			if (dispose) {
				dispose();
				delete composer[DisposeSymbol];
			}
		});
		return composer;
	}
	const i18nInternal = i18n;
	let composer = i18nInternal.__getInstance(instance);
	if (composer == null) {
		const composerOptions = assign({}, options);
		if ("__i18n" in componentOptions) composerOptions.__i18n = componentOptions.__i18n;
		if (gl) composerOptions.__root = gl;
		composer = createComposer(composerOptions);
		if (i18nInternal.__composerExtend) composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
		setupLifeCycle(i18nInternal, instance, composer);
		i18nInternal.__setInstance(instance, composer);
	} else if (process.env.NODE_ENV !== "production" && scope === "local") warn(getWarnMessage(I18nWarnCodes.DUPLICATE_USE_I18N_CALLING));
	return composer;
}
function createGlobal(options, legacyMode) {
	const scope = effectScope();
	const obj = scope.run(() => createComposer(options));
	if (obj == null) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
	return [scope, obj];
}
function getI18nInstance(instance) {
	const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
	if (!i18n) throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
	return i18n;
}
function getScope(options, componentOptions) {
	return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
	return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
	let composer = null;
	const root = target.root;
	let current = getParentComponentInstance(target, useComponent);
	while (current != null) {
		const i18nInternal = i18n;
		if (i18n.mode === "composition") composer = i18nInternal.__getInstance(current);
		if (composer != null) break;
		if (root === current) break;
		current = current.parent;
	}
	return composer;
}
function getParentComponentInstance(target, useComponent = false) {
	if (target == null) return null;
	return !useComponent ? target.parent : target.vnode.ctx || target.parent;
}
function setupLifeCycle(i18n, target, composer) {
	let emitter = null;
	onMounted(() => {
		if ((process.env.NODE_ENV !== "production" || false) && true) {
			target.__VUE_I18N__ = composer;
			emitter = createEmitter();
			const _composer = composer;
			_composer[EnableEmitter] && _composer[EnableEmitter](emitter);
			emitter.on("*", addTimelineEvent);
		}
	}, target);
	onUnmounted(() => {
		const _composer = composer;
		if ((process.env.NODE_ENV !== "production" || false) && true) {
			emitter && emitter.off("*", addTimelineEvent);
			_composer[DisableEmitter] && _composer[DisableEmitter]();
			delete target.__VUE_I18N__;
		}
		i18n.__deleteInstance(target);
		const dispose = _composer[DisposeSymbol];
		if (dispose) {
			dispose();
			delete _composer[DisposeSymbol];
		}
	}, target);
}
var globalExportProps = [
	"locale",
	"fallbackLocale",
	"availableLocales"
];
var globalExportMethods = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function injectGlobalFields(app, composer) {
	const i18n = Object.create(null);
	globalExportProps.forEach((prop) => {
		const desc = Object.getOwnPropertyDescriptor(composer, prop);
		if (!desc) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		const wrap = isRef(desc.value) ? {
			get() {
				return desc.value.value;
			},
			set(val) {
				desc.value.value = val;
			}
		} : { get() {
			return desc.get && desc.get();
		} };
		Object.defineProperty(i18n, prop, wrap);
	});
	app.config.globalProperties.$i18n = i18n;
	globalExportMethods.forEach((method) => {
		const desc = Object.getOwnPropertyDescriptor(composer, method);
		if (!desc || !desc.value) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
	});
	const dispose = () => {
		delete app.config.globalProperties.$i18n;
		globalExportMethods.forEach((method) => {
			delete app.config.globalProperties[`$${method}`];
		});
	};
	return dispose;
}
var DatetimeFormat = defineComponent({
	name: "i18n-d",
	props: assign({
		value: {
			type: [Number, Date],
			required: true
		},
		format: { type: [String, Object] }
	}, baseFormatProps),
	setup(props, context) {
		const i18n = props.i18n || useI18n({
			useScope: props.scope,
			__useComponent: true
		});
		return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => i18n[DatetimePartsSymbol](...args));
	}
});
registerMessageCompiler(compile);
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
if (process.env.NODE_ENV !== "production" || false) {
	const target = getGlobalThis();
	target.__INTLIFY__ = true;
	setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
if (process.env.NODE_ENV !== "production");
function usePerformanceMeasure(name) {
	onBeforeMount(() => {
		if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	});
	onMounted(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	});
}
var _hoisted_1 = { class: "mt-12 mx-auto max-w-3xl" };
var _hoisted_2 = { class: "mb-4 text-2xl font-bold text-foreground" };
var _hoisted_3 = { class: "space-y-4" };
var _hoisted_4 = { class: "block text-sm font-bold text-primary" };
var _hoisted_5 = { class: "block mt-1 text-sm text-muted-foreground" };
var WhatWeMeasure_default = defineComponent({
	__name: "WhatWeMeasure",
	setup(__props) {
		usePerformanceMeasure("WhatWeMeasure");
		const { t } = useI18n();
		const metrics = computed(() => [
			{
				metric: t("about.whatWeMeasure.bundleSizeImpact"),
				desc: t("about.whatWeMeasure.bundleSizeImpactDesc")
			},
			{
				metric: t("about.whatWeMeasure.renderingOverhead"),
				desc: t("about.whatWeMeasure.renderingOverheadDesc")
			},
			{
				metric: t("about.whatWeMeasure.hydrationCost"),
				desc: t("about.whatWeMeasure.hydrationCostDesc")
			},
			{
				metric: t("about.whatWeMeasure.lazyLoading"),
				desc: t("about.whatWeMeasure.lazyLoadingDesc")
			},
			{
				metric: t("about.whatWeMeasure.localeSwitch"),
				desc: t("about.whatWeMeasure.localeSwitchDesc")
			}
		]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString(unref(t)("about.whatWeMeasure.title")), 1), createElementVNode("ul", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(metrics.value, (m) => {
				return openBlock(), createElementBlock("li", {
					key: m.metric,
					class: "rounded-md border border-border p-4"
				}, [createElementVNode("span", _hoisted_4, toDisplayString(m.metric), 1), createElementVNode("span", _hoisted_5, toDisplayString(m.desc), 1)]);
			}), 128))])]);
		};
	}
});
var i18n = createI18n({
	legacy: false,
	locale: "en",
	fallbackLocale: "en",
	messages: {
		en: {
			"shared": {
				"appName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Bench"
					}
				},
				"siteName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"contactEmail": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{ "t": 3 },
							{ "t": 9 },
							{ "t": 3 }
						],
						"s": "contact@intlayer.org"
					}
				},
				"goToGithub": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Go to GitHub"
					}
				}
			},
			"header": {
				"home": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Home"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Methodology"
					}
				},
				"mockPages": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Mock Pages"
					}
				},
				"products": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Products"
					}
				},
				"pricing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Pricing"
					}
				},
				"team": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Team"
					}
				},
				"blog": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Blog"
					}
				},
				"careers": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Careers"
					}
				},
				"faq": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "FAQ"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contact"
					}
				},
				"settings": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Settings"
					}
				}
			},
			"footer": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					}
				},
				"resources": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Resources"
					}
				},
				"github": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHub"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Methodology"
					}
				},
				"contributing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contributing"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contact"
					}
				},
				"builtWith": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
					}
				}
			},
			"themeToggle": {
				"auto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Theme: Auto"
					}
				},
				"dark": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Theme: Dark"
					}
				},
				"light": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Theme: Light"
					}
				},
				"labelAuto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Theme mode: auto (system). Click to switch to light mode."
					}
				},
				"labelOther": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{
								"t": 3,
								"v": "Theme mode: "
							},
							{
								"t": 4,
								"k": "mode"
							},
							{
								"t": 3,
								"v": ". Click to switch mode."
							}
						]
					}
				}
			},
			"mockBanner": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
				}
			},
			"home": {
				"hero": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
						}
					},
					"viewResults": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "View Results"
						}
					},
					"methodology": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Methodology"
						}
					}
				},
				"whyItMatters": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Why These Metrics Matter"
						}
					},
					"bundleSizeTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Bundle Size"
						}
					},
					"bundleSizeDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
						}
					},
					"renderingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rendering & Hydration"
						}
					},
					"renderingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
						}
					},
					"dynamicLoadingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dynamic Loading"
						}
					},
					"dynamicLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
						}
					}
				},
				"understandingImpact": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Understanding the Impact"
						}
					},
					"singleJsonTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Why a single large JSON can hurt performance"
						}
					},
					"singleJsonIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
						}
					},
					"singleJsonBullet1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "The JSON must be parsed on every page load — blocking the main thread."
						}
					},
					"singleJsonBullet2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change."
						}
					},
					"singleJsonBullet3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
						}
					},
					"tradeOffsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "The trade-offs of dynamic loading"
						}
					},
					"tradeOffsIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
						}
					},
					"waterfallLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Waterfall requests:"
						}
					},
					"waterfallDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
						}
					},
					"foucLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Flash of untranslated content (FOUC):"
						}
					},
					"foucDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "users may briefly see translation keys or a fallback language before the chunk arrives."
						}
					},
					"cacheLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cache invalidation:"
						}
					},
					"cacheDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
						}
					},
					"measuresTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "What this benchmark measures"
						}
					},
					"measuresDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
						}
					}
				},
				"resultsTable": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sample Results"
						}
					},
					"library": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Library"
						}
					},
					"bundleSize": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Bundle Size"
						}
					},
					"lookupTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lookup Time"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lazy Loading"
						}
					},
					"yes": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yes"
						}
					},
					"manual": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Manual"
						}
					},
					"builtIn": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Built-in"
						}
					}
				}
			},
			"about": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "About This Benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
						}
					}
				},
				"grid": {
					"whyExistsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Why This Exists"
						}
					},
					"whyExistsDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
						}
					},
					"methodologyTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Methodology"
						}
					},
					"methodologyDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
						}
					}
				},
				"whatWeMeasure": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "What We Measure"
						}
					},
					"bundleSizeImpact": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Bundle size impact"
						}
					},
					"bundleSizeImpactDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
						}
					},
					"renderingOverhead": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rendering overhead"
						}
					},
					"renderingOverheadDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
						}
					},
					"hydrationCost": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Hydration cost"
						}
					},
					"hydrationCostDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lazy loading effectiveness"
						}
					},
					"lazyLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
						}
					},
					"localeSwitch": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Locale switch speed"
						}
					},
					"localeSwitchDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
						}
					}
				}
			},
			"blog": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Blog"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Insights, tutorials, and analysis from the i18n community."
						}
					}
				},
				"list": {
					"readMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Read More →"
						}
					},
					"post1Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Comparing i18n Libraries in 2026: A Deep Dive"
						}
					},
					"post1Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "March 15, 2026"
						}
					},
					"post1Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results."
						}
					},
					"post1Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark"
						}
					},
					"post2Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "How to Reduce Your i18n Bundle by 60%"
						}
					},
					"post2Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "March 8, 2026"
						}
					},
					"post2Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations."
						}
					},
					"post2Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutorial"
						}
					},
					"post3Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "The State of Internationalization in React"
						}
					},
					"post3Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "February 28, 2026"
						}
					},
					"post3Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences."
						}
					},
					"post3Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analysis"
						}
					},
					"post4Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Migrating from react-i18next to Lingui"
						}
					},
					"post4Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "February 15, 2026"
						}
					},
					"post4Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui."
						}
					},
					"post4Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutorial"
						}
					},
					"post5Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Server Components and i18n: What Changes?"
						}
					},
					"post5Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "February 1, 2026"
						}
					},
					"post5Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices."
						}
					},
					"post5Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analysis"
						}
					},
					"post6Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Methodology: How We Test"
						}
					},
					"post6Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "January 20, 2026"
						}
					},
					"post6Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility."
						}
					},
					"post6Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Meta"
						}
					}
				}
			},
			"careers": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Careers"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
						}
					}
				},
				"benefits": {
					"remoteLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remote-first"
						}
					},
					"remoteValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Work from anywhere in the world"
						}
					},
					"payLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Competitive pay"
						}
					},
					"payValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Top-of-market compensation"
						}
					},
					"ossLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Open source time"
						}
					},
					"ossValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20% time for OSS contributions"
						}
					}
				},
				"openPositions": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Open Positions"
						}
					},
					"applyNow": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Apply Now"
						}
					},
					"remote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remote"
						}
					},
					"fullTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Full-time"
						}
					},
					"partTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Part-time"
						}
					},
					"engineering": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Engineering"
						}
					},
					"documentation": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Documentation"
						}
					},
					"community": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Community"
						}
					},
					"sfRemote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "San Francisco / Remote"
						}
					},
					"frontendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Senior Frontend Engineer"
						}
					},
					"frontendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
						}
					},
					"backendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Backend Engineer"
						}
					},
					"backendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
						}
					},
					"writerTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Technical Writer"
						}
					},
					"writerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
						}
					},
					"devrelTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "DevRel Engineer"
						}
					},
					"devrelDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
						}
					},
					"qaTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "QA Engineer"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
						}
					}
				}
			},
			"contact": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Get in Touch"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
						}
					}
				},
				"form": {
					"name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Name"
						}
					},
					"yourName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Your name"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Email"
						}
					},
					"emailPlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "you@example.com"
						}
					},
					"topic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Topic"
						}
					},
					"bugReport": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Bug Report"
						}
					},
					"newBenchmarkIdea": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "New Benchmark Idea"
						}
					},
					"methodologyQuestion": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Methodology Question"
						}
					},
					"contribution": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contribution"
						}
					},
					"other": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Other"
						}
					},
					"message": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Message"
						}
					},
					"messagePlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Describe your question or idea..."
						}
					},
					"sendMessage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Send Message"
						}
					}
				}
			},
			"faq": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Frequently Asked Questions"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Everything you need to know about i18n Benchmark."
						}
					}
				},
				"list": {
					"q1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "What is i18n Benchmark?"
						}
					},
					"a1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
						}
					},
					"q2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "How are benchmarks conducted?"
						}
					},
					"a2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
						}
					},
					"q3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Which libraries are currently supported?"
						}
					},
					"a3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
						}
					},
					"q4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Can I submit my own benchmarks?"
						}
					},
					"a4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
						}
					},
					"q5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "How often are benchmarks updated?"
						}
					},
					"a5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
						}
					},
					"q6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Is the data reliable?"
						}
					},
					"a6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
						}
					},
					"q7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Do you offer consulting services?"
						}
					},
					"a7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
						}
					},
					"q8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "How can I contribute?"
						}
					},
					"a8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
						}
					}
				}
			},
			"pricing": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Simple, Transparent Pricing"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Choose the plan that fits your team. No hidden fees."
						}
					}
				},
				"tiers": {
					"starterName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Starter"
						}
					},
					"starterPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$0"
						}
					},
					"starterPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "forever"
						}
					},
					"starterFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "5 benchmark runs/day"
						}
					},
					"starterFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "3 libraries"
						}
					},
					"starterFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Community support"
						}
					},
					"starterFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Public results"
						}
					},
					"proName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pro"
						}
					},
					"proPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$29"
						}
					},
					"proPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "/month"
						}
					},
					"proFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Unlimited runs"
						}
					},
					"proFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "All libraries"
						}
					},
					"proFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Priority support"
						}
					},
					"proFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Private results"
						}
					},
					"proFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "CI integration"
						}
					},
					"proFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Historical data"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Enterprise"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Custom"
						}
					},
					"enterpriseFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Everything in Pro"
						}
					},
					"enterpriseFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "On-premise option"
						}
					},
					"enterpriseFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO & SAML"
						}
					},
					"enterpriseFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dedicated account manager"
						}
					},
					"enterpriseFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Custom SLAs"
						}
					},
					"enterpriseFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Audit logs"
						}
					},
					"enterpriseFeature7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Training sessions"
						}
					},
					"contactSales": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contact Sales"
						}
					},
					"getStarted": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Get Started"
						}
					}
				}
			},
			"products": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Products"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tools and services to streamline your internationalization workflow."
						}
					}
				},
				"grid": {
					"learnMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Learn More"
						}
					},
					"cliName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark CLI"
						}
					},
					"cliDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration."
						}
					},
					"cliPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Free"
						}
					},
					"cloudName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Cloud"
						}
					},
					"cloudDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards."
						}
					},
					"cloudPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$29/mo"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Enterprise"
						}
					},
					"enterpriseDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support."
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contact Us"
						}
					},
					"migrationName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Migration Assistant"
						}
					},
					"migrationDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime."
						}
					},
					"migrationPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$99 one-time"
						}
					},
					"qaName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Translation QA"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Automated quality checks for missing translations, pluralization issues, and context errors."
						}
					},
					"qaPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$19/mo"
						}
					},
					"optimizerName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Bundle Optimizer"
						}
					},
					"optimizerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting."
						}
					},
					"optimizerPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$49/mo"
						}
					}
				}
			},
			"settings": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Settings"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Manage your account preferences and configuration."
						}
					}
				},
				"profile": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Profile"
						}
					},
					"displayName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Display Name"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Email"
						}
					}
				},
				"preferences": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Preferences"
						}
					},
					"emailNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Email Notifications"
						}
					},
					"weeklyReports": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Receive weekly benchmark reports"
						}
					},
					"toggleNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Toggle notifications"
						}
					},
					"darkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dark Mode"
						}
					},
					"darkColorScheme": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Use dark color scheme"
						}
					},
					"toggleDarkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Toggle dark mode"
						}
					},
					"defaultLanguage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Default Language"
						}
					},
					"english": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "English (en)"
						}
					},
					"french": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "French (fr)"
						}
					},
					"german": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "German (de)"
						}
					},
					"spanish": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Spanish (es)"
						}
					},
					"japanese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Japanese (ja)"
						}
					},
					"chinese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Chinese Simplified (zh-CN)"
						}
					},
					"arabic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Arabic (ar)"
						}
					}
				},
				"apiAccess": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "API Access"
						}
					},
					"apiKey": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "API Key"
						}
					},
					"copy": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Copy"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Use this key to access the benchmarking API programmatically."
						}
					}
				},
				"footer": {
					"cancel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cancel"
						}
					},
					"saveChanges": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Save Changes"
						}
					}
				}
			},
			"team": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Our Team"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
						}
					}
				},
				"grid": {
					"member1Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sarah Chen"
						}
					},
					"member1Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Founder & Lead Engineer"
						}
					},
					"member1Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Former Google engineer with 10 years of experience building internationalization systems at scale."
						}
					},
					"member2Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Marcus Weber"
						}
					},
					"member2Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Performance Engineer"
						}
					},
					"member2Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
						}
					},
					"member3Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Aisha Patel"
						}
					},
					"member3Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Developer Advocate"
						}
					},
					"member3Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
						}
					},
					"member4Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tomás Rodríguez"
						}
					},
					"member4Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Full-Stack Developer"
						}
					},
					"member4Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
						}
					},
					"member5Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yuki Tanaka"
						}
					},
					"member5Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Data Analyst"
						}
					},
					"member5Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
						}
					},
					"member6Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Elena Kowalski"
						}
					},
					"member6Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Community Manager"
						}
					},
					"member6Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Manages community contributions, partnerships, and events. Background in open source governance."
						}
					}
				}
			},
			"notFound": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "404"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Oops! Page not found"
					}
				},
				"returnHome": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Return to Home"
					}
				}
			}
		},
		fr: {
			"shared": {
				"appName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Bench i18n"
					}
				},
				"siteName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Benchmark i18n"
					}
				},
				"contactEmail": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{ "t": 3 },
							{ "t": 9 },
							{ "t": 3 }
						],
						"s": "contact@intlayer.org"
					}
				},
				"goToGithub": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Aller sur GitHub"
					}
				}
			},
			"header": {
				"home": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Accueil"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Méthodologie"
					}
				},
				"mockPages": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Pages fictives"
					}
				},
				"products": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Produits"
					}
				},
				"pricing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Tarifs"
					}
				},
				"team": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Équipe"
					}
				},
				"blog": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Blog"
					}
				},
				"careers": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Carrières"
					}
				},
				"faq": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "FAQ"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contact"
					}
				},
				"settings": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Paramètres"
					}
				}
			},
			"footer": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Benchmark i18n"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application."
					}
				},
				"resources": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Ressources"
					}
				},
				"github": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHub"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Méthodologie"
					}
				},
				"contributing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contribuer"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contact"
					}
				},
				"builtWith": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client."
					}
				}
			},
			"themeToggle": {
				"auto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Thème : automatique"
					}
				},
				"dark": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Thème : sombre"
					}
				},
				"light": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Thème : clair"
					}
				},
				"labelAuto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Mode thème : automatique (système). Cliquez pour passer en mode clair."
					}
				},
				"labelOther": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{
								"t": 3,
								"v": "Mode thème : "
							},
							{
								"t": 4,
								"k": "mode"
							},
							{
								"t": 3,
								"v": ". Cliquez pour changer de mode."
							}
						]
					}
				}
			},
			"mockBanner": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel."
				}
			},
			"home": {
				"hero": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark i18n"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu."
						}
					},
					"viewResults": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Voir les résultats"
						}
					},
					"methodology": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Méthodologie"
						}
					}
				},
				"whyItMatters": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pourquoi ces métriques comptent"
						}
					},
					"bundleSizeTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Taille du bundle"
						}
					},
					"bundleSizeDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction."
						}
					},
					"renderingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rendu et hydratation"
						}
					},
					"renderingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI)."
						}
					},
					"dynamicLoadingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Chargement dynamique"
						}
					},
					"dynamicLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches."
						}
					}
				},
				"understandingImpact": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Comprendre l'impact"
						}
					},
					"singleJsonTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pourquoi un unique gros JSON peut nuire aux performances"
						}
					},
					"singleJsonIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :"
						}
					},
					"singleJsonBullet1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal."
						}
					},
					"singleJsonBullet2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé."
						}
					},
					"singleJsonBullet3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater."
						}
					},
					"tradeOffsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Les compromis du chargement dynamique"
						}
					},
					"tradeOffsIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :"
						}
					},
					"waterfallLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Requêtes en cascade :"
						}
					},
					"waterfallDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires."
						}
					},
					"foucLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Flash de contenu non traduit (FOUC) :"
						}
					},
					"foucDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment."
						}
					},
					"cacheLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Invalidation du cache :"
						}
					},
					"cacheDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile."
						}
					},
					"measuresTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ce que mesure ce benchmark"
						}
					},
					"measuresDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables."
						}
					}
				},
				"resultsTable": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Exemple de résultats"
						}
					},
					"library": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Bibliothèque"
						}
					},
					"bundleSize": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Taille du bundle"
						}
					},
					"lookupTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Temps de recherche"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Chargement paresseux"
						}
					},
					"yes": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Oui"
						}
					},
					"manual": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Manuel"
						}
					},
					"builtIn": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Intégré"
						}
					}
				}
			},
			"about": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "À propos de ce benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions."
						}
					}
				},
				"grid": {
					"whyExistsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pourquoi ce projet existe"
						}
					},
					"whyExistsDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles."
						}
					},
					"methodologyTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Méthodologie"
						}
					},
					"methodologyDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles."
						}
					}
				},
				"whatWeMeasure": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ce que nous mesurons"
						}
					},
					"bundleSizeImpact": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Impact sur la taille du bundle"
						}
					},
					"bundleSizeImpactDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents."
						}
					},
					"renderingOverhead": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Surcharge de rendu"
						}
					},
					"renderingOverheadDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles."
						}
					},
					"hydrationCost": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Coût d'hydratation"
						}
					},
					"hydrationCostDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation."
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Efficacité du chargement paresseux"
						}
					},
					"lazyLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?"
						}
					},
					"localeSwitch": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Vitesse de changement de langue"
						}
					},
					"localeSwitchDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM."
						}
					}
				}
			},
			"blog": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Blog"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Articles, tutoriels et analyses de la communauté i18n."
						}
					}
				},
				"list": {
					"readMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lire la suite →"
						}
					},
					"post1Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Comparer les bibliothèques i18n en 2026 : plongée détaillée"
						}
					},
					"post1Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15 mars 2026"
						}
					},
					"post1Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants."
						}
					},
					"post1Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark"
						}
					},
					"post2Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Réduire votre bundle i18n de 60 %"
						}
					},
					"post2Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "8 mars 2026"
						}
					},
					"post2Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation."
						}
					},
					"post2Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutoriel"
						}
					},
					"post3Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "État de l'internationalisation dans l'écosystème React"
						}
					},
					"post3Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "28 février 2026"
						}
					},
					"post3Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Panorama des tendances, patterns émergents et préférences de la communauté."
						}
					},
					"post3Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analyse"
						}
					},
					"post4Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Migrer de react-i18next vers Lingui"
						}
					},
					"post4Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15 février 2026"
						}
					},
					"post4Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction."
						}
					},
					"post4Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutoriel"
						}
					},
					"post5Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Server Components et i18n : qu'est-ce qui change ?"
						}
					},
					"post5Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "1er février 2026"
						}
					},
					"post5Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Les React Server Components introduisent de nouveaux motifs pour l'i18n."
						}
					},
					"post5Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analyse"
						}
					},
					"post6Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Méthodologie de benchmark : comment nous testons"
						}
					},
					"post6Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20 janvier 2026"
						}
					},
					"post6Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité."
						}
					},
					"post6Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Méta"
						}
					}
				}
			},
			"careers": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Carrières"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu."
						}
					}
				},
				"benefits": {
					"remoteLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remote-first"
						}
					},
					"remoteValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Travaillez depuis n'importe où"
						}
					},
					"payLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rémunération compétitive"
						}
					},
					"payValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Fourchettes haut de marché"
						}
					},
					"ossLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Temps open source"
						}
					},
					"ossValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20 % du temps pour contribuer à l'OSS"
						}
					}
				},
				"openPositions": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Postes ouverts"
						}
					},
					"applyNow": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Postuler"
						}
					},
					"remote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "À distance"
						}
					},
					"fullTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Temps plein"
						}
					},
					"partTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Temps partiel"
						}
					},
					"engineering": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingénierie"
						}
					},
					"documentation": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Documentation"
						}
					},
					"community": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Communauté"
						}
					},
					"sfRemote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "San Francisco / télétravail"
						}
					},
					"frontendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingénieur front-end senior"
						}
					},
					"frontendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite."
						}
					},
					"backendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingénieur back-end"
						}
					},
					"backendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés."
						}
					},
					"writerTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rédacteur·rice technique"
						}
					},
					"writerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Guides, références d'API et tutoriels pour la plateforme de benchmark."
						}
					},
					"devrelTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingénieur DevRel"
						}
					},
					"devrelDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Animer la communauté i18n : conférences, ateliers, articles et contributions OSS."
						}
					},
					"qaTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingénieur QA"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Garantir la fiabilité des résultats par des tests et validations rigoureux."
						}
					}
				}
			},
			"contact": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contact"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à"
						}
					}
				},
				"form": {
					"name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nom"
						}
					},
					"yourName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Votre nom"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "E-mail"
						}
					},
					"emailPlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "vous@exemple.com"
						}
					},
					"topic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sujet"
						}
					},
					"bugReport": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rapport de bug"
						}
					},
					"newBenchmarkIdea": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Idée de benchmark"
						}
					},
					"methodologyQuestion": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Question de méthodologie"
						}
					},
					"contribution": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contribution"
						}
					},
					"other": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Autre"
						}
					},
					"message": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Message"
						}
					},
					"messagePlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Décrivez votre question ou idée…"
						}
					},
					"sendMessage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Envoyer"
						}
					}
				}
			},
			"faq": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Questions fréquentes"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tout savoir sur i18n Benchmark."
						}
					}
				},
				"list": {
					"q1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Qu'est-ce qu'i18n Benchmark ?"
						}
					},
					"a1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React."
						}
					},
					"q2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Comment sont menés les benchmarks ?"
						}
					},
					"a2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub."
						}
					},
					"q3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Quelles bibliothèques sont prises en charge ?"
						}
					},
					"a3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc."
						}
					},
					"q4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Puis-je proposer des benchmarks ?"
						}
					},
					"a4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request."
						}
					},
					"q5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "À quelle fréquence sont-ils mis à jour ?"
						}
					},
					"a5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures."
						}
					},
					"q6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Les données sont-elles fiables ?"
						}
					},
					"a6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées."
						}
					},
					"q7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Proposez-vous du conseil ?"
						}
					},
					"a7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n."
						}
					},
					"q8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Comment contribuer ?"
						}
					},
					"a8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub."
						}
					}
				}
			},
			"pricing": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tarification simple et transparente"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Choisissez l'offre adaptée à votre équipe. Sans frais cachés."
						}
					}
				},
				"tiers": {
					"starterName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Starter"
						}
					},
					"starterPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "0 €"
						}
					},
					"starterPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "pour toujours"
						}
					},
					"starterFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "5 exécutions de benchmark / jour"
						}
					},
					"starterFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "3 bibliothèques"
						}
					},
					"starterFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Support communautaire"
						}
					},
					"starterFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Résultats publics"
						}
					},
					"proName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pro"
						}
					},
					"proPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 €"
						}
					},
					"proPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "/ mois"
						}
					},
					"proFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Exécutions illimitées"
						}
					},
					"proFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Toutes les bibliothèques"
						}
					},
					"proFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Support prioritaire"
						}
					},
					"proFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Résultats privés"
						}
					},
					"proFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Intégration CI"
						}
					},
					"proFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Historique"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Enterprise"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sur mesure"
						}
					},
					"enterpriseFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tout le Pro"
						}
					},
					"enterpriseFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Option on-premise"
						}
					},
					"enterpriseFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO et SAML"
						}
					},
					"enterpriseFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Account manager dédié"
						}
					},
					"enterpriseFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SLA sur mesure"
						}
					},
					"enterpriseFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Journaux d'audit"
						}
					},
					"enterpriseFeature7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sessions de formation"
						}
					},
					"contactSales": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contacter les ventes"
						}
					},
					"getStarted": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Commencer"
						}
					}
				}
			},
			"products": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Produits"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Outils et services pour fluidifier votre flux i18n."
						}
					}
				},
				"grid": {
					"learnMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "En savoir plus"
						}
					},
					"cliName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark CLI"
						}
					},
					"cliDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lancez des benchmarks en local. Configurations personnalisées et CI."
						}
					},
					"cliPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gratuit"
						}
					},
					"cloudName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Cloud"
						}
					},
					"cloudDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe."
						}
					},
					"cloudPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 €/mois"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Enterprise"
						}
					},
					"enterpriseDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "On-premise avec SSO, journaux d'audit, SLA et support dédié."
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nous contacter"
						}
					},
					"migrationName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Assistant de migration"
						}
					},
					"migrationDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption."
						}
					},
					"migrationPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "99 € (unique)"
						}
					},
					"qaName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "QA des traductions"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contrôles automatiques : clés manquantes, pluriels, contexte."
						}
					},
					"qaPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "19 €/mois"
						}
					},
					"optimizerName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Optimiseur de bundle"
						}
					},
					"optimizerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage)."
						}
					},
					"optimizerPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "49 €/mois"
						}
					}
				}
			},
			"settings": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Paramètres"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gérez les préférences et la configuration de votre compte."
						}
					}
				},
				"profile": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Profil"
						}
					},
					"displayName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nom affiché"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "E-mail"
						}
					}
				},
				"preferences": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Préférences"
						}
					},
					"emailNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Notifications e-mail"
						}
					},
					"weeklyReports": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Recevoir les rapports hebdomadaires"
						}
					},
					"toggleNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Activer/désactiver les notifications"
						}
					},
					"darkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Mode sombre"
						}
					},
					"darkColorScheme": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Utiliser le thème sombre"
						}
					},
					"toggleDarkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Basculer le mode sombre"
						}
					},
					"defaultLanguage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Langue par défaut"
						}
					},
					"english": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Anglais (en)"
						}
					},
					"french": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Français (fr)"
						}
					},
					"german": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Allemand (de)"
						}
					},
					"spanish": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Espagnol (es)"
						}
					},
					"japanese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Japonais (ja)"
						}
					},
					"chinese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Chinois simplifié (zh-CN)"
						}
					},
					"arabic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Arabe (ar)"
						}
					}
				},
				"apiAccess": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Accès API"
						}
					},
					"apiKey": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Clé API"
						}
					},
					"copy": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Copier"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Utilisez cette clé pour appeler l'API de benchmark par programmation."
						}
					}
				},
				"footer": {
					"cancel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Annuler"
						}
					},
					"saveChanges": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Enregistrer"
						}
					}
				}
			},
			"team": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Notre équipe"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs."
						}
					}
				},
				"grid": {
					"member1Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sarah Chen"
						}
					},
					"member1Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Fondatrice & lead ingénieur"
						}
					},
					"member1Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle."
						}
					},
					"member2Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Marcus Weber"
						}
					},
					"member2Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingénieur performance"
						}
					},
					"member2Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel."
						}
					},
					"member3Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Aisha Patel"
						}
					},
					"member3Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Developer advocate"
						}
					},
					"member3Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext."
						}
					},
					"member4Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tomás Rodríguez"
						}
					},
					"member4Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Développeur full-stack"
						}
					},
					"member4Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui."
						}
					},
					"member5Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yuki Tanaka"
						}
					},
					"member5Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analyste de données"
						}
					},
					"member5Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT)."
						}
					},
					"member6Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Elena Kowalski"
						}
					},
					"member6Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Community manager"
						}
					},
					"member6Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contributions communautaires, partenariats et événements — gouvernance open source."
						}
					}
				}
			},
			"notFound": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "404"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Oups ! Page introuvable"
					}
				},
				"returnHome": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Retour à l'accueil"
					}
				}
			}
		},
		es: {
			"shared": {
				"appName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Bench"
					}
				},
				"siteName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"contactEmail": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{ "t": 3 },
							{ "t": 9 },
							{ "t": 3 }
						],
						"s": "contact@intlayer.org"
					}
				},
				"goToGithub": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Ir a GitHub"
					}
				}
			},
			"header": {
				"home": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Inicio"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Metodología"
					}
				},
				"mockPages": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Páginas de prueba"
					}
				},
				"products": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Productos"
					}
				},
				"pricing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Precios"
					}
				},
				"team": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Equipo"
					}
				},
				"blog": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Blog"
					}
				},
				"careers": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Carreras"
					}
				},
				"faq": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "FAQ"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contacto"
					}
				},
				"settings": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Ajustes"
					}
				}
			},
			"footer": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación."
					}
				},
				"resources": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Recursos"
					}
				},
				"github": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHub"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Metodología"
					}
				},
				"contributing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contribuir"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contacto"
					}
				},
				"builtWith": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente."
					}
				}
			},
			"themeToggle": {
				"auto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Tema: Auto"
					}
				},
				"dark": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Tema: Oscuro"
					}
				},
				"light": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Tema: Claro"
					}
				},
				"labelAuto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro."
					}
				},
				"labelOther": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{
								"t": 3,
								"v": "Modo de tema: "
							},
							{
								"t": 4,
								"k": "mode"
							},
							{
								"t": 3,
								"v": ". Haz clic para cambiar de modo."
							}
						]
					}
				}
			},
			"mockBanner": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real."
				}
			},
			"home": {
				"hero": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado."
						}
					},
					"viewResults": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ver resultados"
						}
					},
					"methodology": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Metodología"
						}
					}
				},
				"whyItMatters": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Por qué son importantes estas métricas"
						}
					},
					"bundleSizeTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tamaño del bundle"
						}
					},
					"bundleSizeDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción."
						}
					},
					"renderingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Renderizado e hidratación"
						}
					},
					"renderingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI)."
						}
					},
					"dynamicLoadingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Carga dinámica"
						}
					},
					"dynamicLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial."
						}
					}
				},
				"understandingImpact": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Entendiendo el impacto"
						}
					},
					"singleJsonTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Por qué un solo JSON grande puede perjudicar el rendimiento"
						}
					},
					"singleJsonIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:"
						}
					},
					"singleJsonBullet1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal."
						}
					},
					"singleJsonBullet2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado."
						}
					},
					"singleJsonBullet3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse."
						}
					},
					"tradeOffsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Las compensaciones de la carga dinámica"
						}
					},
					"tradeOffsIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:"
						}
					},
					"waterfallLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Solicitudes en cascada:"
						}
					},
					"waterfallDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta."
						}
					},
					"foucLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Parpadeo de contenido no traducido (FOUC):"
						}
					},
					"foucDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento."
						}
					},
					"cacheLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Invalidación de la caché:"
						}
					},
					"cacheDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados."
						}
					},
					"measuresTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Qué mide este benchmark"
						}
					},
					"measuresDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables."
						}
					}
				},
				"resultsTable": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Resultados de muestra"
						}
					},
					"library": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Biblioteca"
						}
					},
					"bundleSize": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tamaño del bundle"
						}
					},
					"lookupTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tiempo de búsqueda"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Carga diferida"
						}
					},
					"yes": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sí"
						}
					},
					"manual": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Manual"
						}
					},
					"builtIn": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Integrado"
						}
					}
				}
			},
			"about": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Acerca de este benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas."
						}
					}
				},
				"grid": {
					"whyExistsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Por qué existe esto"
						}
					},
					"whyExistsDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales."
						}
					},
					"methodologyTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Metodología"
						}
					},
					"methodologyDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles."
						}
					}
				},
				"whatWeMeasure": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Qué medimos"
						}
					},
					"bundleSizeImpact": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Impacto en el tamaño del bundle"
						}
					},
					"bundleSizeImpactDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas."
						}
					},
					"renderingOverhead": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sobrecarga de renderizado"
						}
					},
					"renderingOverheadDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes."
						}
					},
					"hydrationCost": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Coste de hidratación"
						}
					},
					"hydrationCostDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva."
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Eficacia de la carga diferida"
						}
					},
					"lazyLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché)."
						}
					},
					"localeSwitch": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Velocidad de cambio de idioma"
						}
					},
					"localeSwitchDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM."
						}
					}
				}
			},
			"blog": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Blog"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Información, tutoriales y análisis de la comunidad i18n."
						}
					}
				},
				"list": {
					"readMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Leer más →"
						}
					},
					"post1Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Comparativa de bibliotecas i18n en 2026: Un análisis profundo"
						}
					},
					"post1Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15 de marzo de 2026"
						}
					},
					"post1Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados."
						}
					},
					"post1Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark"
						}
					},
					"post2Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cómo reducir tu bundle i18n en un 60%"
						}
					},
					"post2Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "8 de marzo de 2026"
						}
					},
					"post2Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación."
						}
					},
					"post2Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutorial"
						}
					},
					"post3Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "El estado de la internacionalización en React"
						}
					},
					"post3Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "28 de febrero de 2026"
						}
					},
					"post3Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad."
						}
					},
					"post3Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Análisis"
						}
					},
					"post4Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Migración de react-i18next a Lingui"
						}
					},
					"post4Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15 de febrero de 2026"
						}
					},
					"post4Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui."
						}
					},
					"post4Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutorial"
						}
					},
					"post5Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Server Components e i18n: ¿Qué cambia?"
						}
					},
					"post5Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "1 de febrero de 2026"
						}
					},
					"post5Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas."
						}
					},
					"post5Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Análisis"
						}
					},
					"post6Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Metodología de benchmark: Cómo probamos"
						}
					},
					"post6Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20 de enero de 2026"
						}
					},
					"post6Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad."
						}
					},
					"post6Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Meta"
						}
					}
				}
			},
			"careers": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Carreras"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo."
						}
					}
				},
				"benefits": {
					"remoteLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remoto primero"
						}
					},
					"remoteValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Trabaja desde cualquier lugar del mundo"
						}
					},
					"payLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Salario competitivo"
						}
					},
					"payValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Compensación superior a la del mercado"
						}
					},
					"ossLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tiempo para el código abierto"
						}
					},
					"ossValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20% del tiempo para contribuciones a OSS"
						}
					}
				},
				"openPositions": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Puestos vacantes"
						}
					},
					"applyNow": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Postular ahora"
						}
					},
					"remote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remoto"
						}
					},
					"fullTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tiempo completo"
						}
					},
					"partTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tiempo parcial"
						}
					},
					"engineering": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingeniería"
						}
					},
					"documentation": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Documentación"
						}
					},
					"community": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Comunidad"
						}
					},
					"sfRemote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "San Francisco / Remoto"
						}
					},
					"frontendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingeniero Frontend Senior"
						}
					},
					"frontendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite."
						}
					},
					"backendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingeniero Backend"
						}
					},
					"backendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente."
						}
					},
					"writerTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Redactor técnico"
						}
					},
					"writerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking."
						}
					},
					"devrelTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingeniero de DevRel"
						}
					},
					"devrelDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto."
						}
					},
					"qaTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingeniero de QA"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas."
						}
					}
				}
			},
			"contact": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ponte en contacto"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en"
						}
					}
				},
				"form": {
					"name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nombre"
						}
					},
					"yourName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tu nombre"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Correo electrónico"
						}
					},
					"emailPlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "tu@ejemplo.com"
						}
					},
					"topic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tema"
						}
					},
					"bugReport": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Informe de error"
						}
					},
					"newBenchmarkIdea": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nueva idea de benchmark"
						}
					},
					"methodologyQuestion": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pregunta sobre la metodología"
						}
					},
					"contribution": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contribución"
						}
					},
					"other": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Otro"
						}
					},
					"message": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Mensaje"
						}
					},
					"messagePlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Describe tu pregunta o idea..."
						}
					},
					"sendMessage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Enviar mensaje"
						}
					}
				}
			},
			"faq": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Preguntas frecuentes"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Todo lo que necesitas saber sobre i18n Benchmark."
						}
					}
				},
				"list": {
					"q1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "¿Qué es i18n Benchmark?"
						}
					},
					"a1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React."
						}
					},
					"q2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "¿Cómo se realizan los benchmarks?"
						}
					},
					"a2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub."
						}
					},
					"q3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "¿Qué bibliotecas se admiten actualmente?"
						}
					},
					"a3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee."
						}
					},
					"q4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "¿Puedo enviar mis propios benchmarks?"
						}
					},
					"a4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen."
						}
					},
					"q5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "¿Con qué frecuencia se actualizan los benchmarks?"
						}
					},
					"a5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato."
						}
					},
					"q6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "¿Son fiables los datos?"
						}
					},
					"a6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia."
						}
					},
					"q7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "¿Ofrecen servicios de consultoría?"
						}
					},
					"a7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones."
						}
					},
					"q8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "¿Cómo puedo contribuir?"
						}
					},
					"a8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles."
						}
					}
				}
			},
			"pricing": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Precios sencillos y transparentes"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas."
						}
					}
				},
				"tiers": {
					"starterName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Starter"
						}
					},
					"starterPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "0 $"
						}
					},
					"starterPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "para siempre"
						}
					},
					"starterFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "5 ejecuciones de benchmark al día"
						}
					},
					"starterFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "3 bibliotecas"
						}
					},
					"starterFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Soporte de la comunidad"
						}
					},
					"starterFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Resultados públicos"
						}
					},
					"proName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pro"
						}
					},
					"proPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $"
						}
					},
					"proPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "/mes"
						}
					},
					"proFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ejecuciones ilimitadas"
						}
					},
					"proFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Todas las bibliotecas"
						}
					},
					"proFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Soporte prioritario"
						}
					},
					"proFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Resultados privados"
						}
					},
					"proFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Integración CI"
						}
					},
					"proFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Datos históricos"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Enterprise"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Personalizado"
						}
					},
					"enterpriseFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Todo lo que hay en Pro"
						}
					},
					"enterpriseFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Opción on-premise"
						}
					},
					"enterpriseFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO y SAML"
						}
					},
					"enterpriseFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gestor de cuentas dedicado"
						}
					},
					"enterpriseFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SLAs personalizados"
						}
					},
					"enterpriseFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Registros de auditoría"
						}
					},
					"enterpriseFeature7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sesiones de formación"
						}
					},
					"contactSales": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contactar con ventas"
						}
					},
					"getStarted": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Empezar"
						}
					}
				}
			},
			"products": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Productos"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Herramientas y servicios para agilizar su flujo de trabajo de internacionalización."
						}
					}
				},
				"grid": {
					"learnMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Más información"
						}
					},
					"cliName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "CLI de Benchmark"
						}
					},
					"cliDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI."
						}
					},
					"cliPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gratis"
						}
					},
					"cloudName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Cloud"
						}
					},
					"cloudDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo."
						}
					},
					"cloudPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $/mes"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Enterprise"
						}
					},
					"enterpriseDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado."
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contáctanos"
						}
					},
					"migrationName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Asistente de migración"
						}
					},
					"migrationDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad."
						}
					},
					"migrationPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "99 $ pago único"
						}
					},
					"qaName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "QA de traducción"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto."
						}
					},
					"qaPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "19 $/mes"
						}
					},
					"optimizerName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Optimizador de bundle"
						}
					},
					"optimizerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código."
						}
					},
					"optimizerPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "49 $/mes"
						}
					}
				}
			},
			"settings": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ajustes"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gestiona las preferencias y la configuración de tu cuenta."
						}
					}
				},
				"profile": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Perfil"
						}
					},
					"displayName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nombre visible"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Correo electrónico"
						}
					}
				},
				"preferences": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Preferencias"
						}
					},
					"emailNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Notificaciones por correo electrónico"
						}
					},
					"weeklyReports": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Recibir informes semanales de benchmarks"
						}
					},
					"toggleNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cambiar notificaciones"
						}
					},
					"darkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Modo oscuro"
						}
					},
					"darkColorScheme": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Usar esquema de colores oscuro"
						}
					},
					"toggleDarkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cambiar modo oscuro"
						}
					},
					"defaultLanguage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Idioma predeterminado"
						}
					},
					"english": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Inglés (en)"
						}
					},
					"french": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Francés (fr)"
						}
					},
					"german": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Alemán (de)"
						}
					},
					"spanish": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Español (es)"
						}
					},
					"japanese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Japonés (ja)"
						}
					},
					"chinese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Chino simplificado (zh-CN)"
						}
					},
					"arabic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Árabe (ar)"
						}
					}
				},
				"apiAccess": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Acceso API"
						}
					},
					"apiKey": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Llave API"
						}
					},
					"copy": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Copiar"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Usa esta llave para acceder a la API de benchmarking de forma programática."
						}
					}
				},
				"footer": {
					"cancel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cancelar"
						}
					},
					"saveChanges": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Guardar cambios"
						}
					}
				}
			},
			"team": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nuestro equipo"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores."
						}
					}
				},
				"grid": {
					"member1Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sarah Chen"
						}
					},
					"member1Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Fundadora e ingeniera principal"
						}
					},
					"member1Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala."
						}
					},
					"member2Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Marcus Weber"
						}
					},
					"member2Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingeniero de rendimiento"
						}
					},
					"member2Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel."
						}
					},
					"member3Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Aisha Patel"
						}
					},
					"member3Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Developer Advocate"
						}
					},
					"member3Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext."
						}
					},
					"member4Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tomás Rodríguez"
						}
					},
					"member4Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Desarrollador Full-Stack"
						}
					},
					"member4Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui."
						}
					},
					"member5Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yuki Tanaka"
						}
					},
					"member5Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analista de datos"
						}
					},
					"member5Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT."
						}
					},
					"member6Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Elena Kowalski"
						}
					},
					"member6Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Responsable de la comunidad"
						}
					},
					"member6Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto."
						}
					}
				}
			},
			"notFound": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "404"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "¡Ups! Página no encontrada"
					}
				},
				"returnHome": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Volver al inicio"
					}
				}
			}
		},
		de: {
			"shared": {
				"appName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Bench"
					}
				},
				"siteName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"contactEmail": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{ "t": 3 },
							{ "t": 9 },
							{ "t": 3 }
						],
						"s": "contact@intlayer.org"
					}
				},
				"goToGithub": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Zu GitHub"
					}
				}
			},
			"header": {
				"home": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Home"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Methodik"
					}
				},
				"mockPages": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Testseiten"
					}
				},
				"products": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Produkte"
					}
				},
				"pricing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Preise"
					}
				},
				"team": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Team"
					}
				},
				"blog": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Blog"
					}
				},
				"careers": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Karriere"
					}
				},
				"faq": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "FAQ"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Kontakt"
					}
				},
				"settings": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Einstellungen"
					}
				}
			},
			"footer": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität."
					}
				},
				"resources": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Ressourcen"
					}
				},
				"github": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHub"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Methodik"
					}
				},
				"contributing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Beitragen"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Kontakt"
					}
				},
				"builtWith": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router."
					}
				}
			},
			"themeToggle": {
				"auto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Thema: Auto"
					}
				},
				"dark": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Thema: Dunkel"
					}
				},
				"light": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Thema: Hell"
					}
				},
				"labelAuto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln."
					}
				},
				"labelOther": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{
								"t": 3,
								"v": "Themenmodus: "
							},
							{
								"t": 4,
								"k": "mode"
							},
							{
								"t": 3,
								"v": ". Klicken Sie hier, um den Modus zu wechseln."
							}
						]
					}
				}
			},
			"mockBanner": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst."
				}
			},
			"home": {
				"hero": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen."
						}
					},
					"viewResults": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ergebnisse anzeigen"
						}
					},
					"methodology": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Methodik"
						}
					}
				},
				"whyItMatters": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Warum diese Metriken wichtig sind"
						}
					},
					"bundleSizeTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Bundle-Größe"
						}
					},
					"bundleSizeDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst."
						}
					},
					"renderingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rendering & Hydrierung"
						}
					},
					"renderingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt."
						}
					},
					"dynamicLoadingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dynamisches Laden"
						}
					},
					"dynamicLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich."
						}
					}
				},
				"understandingImpact": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Die Auswirkungen verstehen"
						}
					},
					"singleJsonTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann"
						}
					},
					"singleJsonIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:"
						}
					},
					"singleJsonBullet1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert."
						}
					},
					"singleJsonBullet2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben."
						}
					},
					"singleJsonBullet3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss."
						}
					},
					"tradeOffsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Die Kompromisse beim dynamischen Laden"
						}
					},
					"tradeOffsIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:"
						}
					},
					"waterfallLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Waterfall-Anfragen:"
						}
					},
					"waterfallDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht."
						}
					},
					"foucLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Flash of Untranslated Content (FOUC):"
						}
					},
					"foucDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft."
						}
					},
					"cacheLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cache-Invalidierung:"
						}
					},
					"cacheDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen."
						}
					},
					"measuresTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Was dieser Benchmark misst"
						}
					},
					"measuresDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind."
						}
					}
				},
				"resultsTable": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Beispielergebnisse"
						}
					},
					"library": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Bibliothek"
						}
					},
					"bundleSize": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Bundle-Größe"
						}
					},
					"lookupTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lookup-Zeit"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lazy Loading"
						}
					},
					"yes": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ja"
						}
					},
					"manual": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Manuell"
						}
					},
					"builtIn": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Integriert"
						}
					}
				}
			},
			"about": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Über diesen Benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können."
						}
					}
				},
				"grid": {
					"whyExistsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Warum dies existiert"
						}
					},
					"whyExistsDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten."
						}
					},
					"methodologyTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Methodik"
						}
					},
					"methodologyDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten."
						}
					}
				},
				"whatWeMeasure": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Was wir messen"
						}
					},
					"bundleSizeImpact": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Auswirkungen auf die Bundle-Größe"
						}
					},
					"bundleSizeImpactDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus."
						}
					},
					"renderingOverhead": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rendering-Overhead"
						}
					},
					"renderingOverheadDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen."
						}
					},
					"hydrationCost": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Hydrierungskosten"
						}
					},
					"hydrationCostDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird."
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Effektivität von Lazy Loading"
						}
					},
					"lazyLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität)."
						}
					},
					"localeSwitch": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Geschwindigkeit des Sprachwechsels"
						}
					},
					"localeSwitchDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM."
						}
					}
				}
			},
			"blog": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Blog"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Einblicke, Tutorials und Analysen aus der i18n-Community."
						}
					}
				},
				"list": {
					"readMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Mehr lesen →"
						}
					},
					"post1Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick"
						}
					},
					"post1Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15. März 2026"
						}
					},
					"post1Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse."
						}
					},
					"post1Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark"
						}
					},
					"post2Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wie Sie Ihr i18n-Bundle um 60 % reduzieren"
						}
					},
					"post2Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "8. März 2026"
						}
					},
					"post2Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit."
						}
					},
					"post2Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutorial"
						}
					},
					"post3Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Der Stand der Internationalisierung in React"
						}
					},
					"post3Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "28. Februar 2026"
						}
					},
					"post3Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt."
						}
					},
					"post3Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analyse"
						}
					},
					"post4Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Migration von react-i18next zu Lingui"
						}
					},
					"post4Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15. Februar 2026"
						}
					},
					"post4Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui."
						}
					},
					"post4Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutorial"
						}
					},
					"post5Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Server Components und i18n: Was ändert sich?"
						}
					},
					"post5Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "1. Februar 2026"
						}
					},
					"post5Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices."
						}
					},
					"post5Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analyse"
						}
					},
					"post6Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark-Methodik: Wie wir testen"
						}
					},
					"post6Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20. Januar 2026"
						}
					},
					"post6Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit."
						}
					},
					"post6Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Meta"
						}
					}
				}
			},
			"careers": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Karriere"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt."
						}
					}
				},
				"benefits": {
					"remoteLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remote-First"
						}
					},
					"remoteValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Arbeiten Sie von überall auf der Welt"
						}
					},
					"payLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wettbewerbsfähige Bezahlung"
						}
					},
					"payValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Überdurchschnittliche Vergütung"
						}
					},
					"ossLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Open-Source-Zeit"
						}
					},
					"ossValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20 % der Zeit für OSS-Beiträge"
						}
					}
				},
				"openPositions": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Offene Stellen"
						}
					},
					"applyNow": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Jetzt bewerben"
						}
					},
					"remote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remote"
						}
					},
					"fullTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Vollzeit"
						}
					},
					"partTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Teilzeit"
						}
					},
					"engineering": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Engineering"
						}
					},
					"documentation": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dokumentation"
						}
					},
					"community": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Community"
						}
					},
					"sfRemote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "San Francisco / Remote"
						}
					},
					"frontendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Senior Frontend Engineer"
						}
					},
					"frontendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite."
						}
					},
					"backendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Backend-Ingenieur"
						}
					},
					"backendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet."
						}
					},
					"writerTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Technischer Redakteur"
						}
					},
					"writerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform."
						}
					},
					"devrelTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "DevRel-Ingenieur"
						}
					},
					"devrelDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge."
						}
					},
					"qaTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "QA-Ingenieur"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung."
						}
					}
				}
			},
			"contact": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Kontakt aufnehmen"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter"
						}
					}
				},
				"form": {
					"name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Name"
						}
					},
					"yourName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ihr Name"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "E-Mail"
						}
					},
					"emailPlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "ihre@beispiel.de"
						}
					},
					"topic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Thema"
						}
					},
					"bugReport": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Fehlerbericht"
						}
					},
					"newBenchmarkIdea": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Neue Benchmark-Idee"
						}
					},
					"methodologyQuestion": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Frage zur Methodik"
						}
					},
					"contribution": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Beitrag"
						}
					},
					"other": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sonstiges"
						}
					},
					"message": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nachricht"
						}
					},
					"messagePlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Beschreiben Sie Ihre Frage oder Idee..."
						}
					},
					"sendMessage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nachricht senden"
						}
					}
				}
			},
			"faq": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Häufig gestellte Fragen"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Alles, was Sie über i18n Benchmark wissen müssen."
						}
					}
				},
				"list": {
					"q1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Was ist i18n Benchmark?"
						}
					},
					"a1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht."
						}
					},
					"q2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wie werden Benchmarks durchgeführt?"
						}
					},
					"a2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar."
						}
					},
					"q3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Welche Bibliotheken werden derzeit unterstützt?"
						}
					},
					"a3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee."
						}
					},
					"q4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Kann ich meine eigenen Benchmarks einreichen?"
						}
					},
					"a4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen."
						}
					},
					"q5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wie oft werden Benchmarks aktualisiert?"
						}
					},
					"a5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus."
						}
					},
					"q6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sind die Daten zuverlässig?"
						}
					},
					"a6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht."
						}
					},
					"q7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Bieten Sie Beratungsdienstleistungen an?"
						}
					},
					"a7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben."
						}
					},
					"q8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wie kann ich beitragen?"
						}
					},
					"a8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details."
						}
					}
				}
			},
			"pricing": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Einfache, transparente Preisgestaltung"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren."
						}
					}
				},
				"tiers": {
					"starterName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Starter"
						}
					},
					"starterPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "0 $"
						}
					},
					"starterPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "für immer"
						}
					},
					"starterFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "5 Benchmark-Durchläufe/Tag"
						}
					},
					"starterFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "3 Bibliotheken"
						}
					},
					"starterFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Community-Support"
						}
					},
					"starterFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Öffentliche Ergebnisse"
						}
					},
					"proName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pro"
						}
					},
					"proPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $"
						}
					},
					"proPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "/Monat"
						}
					},
					"proFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Unbegrenzte Durchläufe"
						}
					},
					"proFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Alle Bibliotheken"
						}
					},
					"proFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Priorisierter Support"
						}
					},
					"proFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Private Ergebnisse"
						}
					},
					"proFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "CI-Integration"
						}
					},
					"proFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Historische Daten"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Enterprise"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Individuell"
						}
					},
					"enterpriseFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Alles in Pro enthalten"
						}
					},
					"enterpriseFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "On-Premise-Option"
						}
					},
					"enterpriseFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO & SAML"
						}
					},
					"enterpriseFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dedizierter Account Manager"
						}
					},
					"enterpriseFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Individuelle SLAs"
						}
					},
					"enterpriseFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Audit-Protokolle"
						}
					},
					"enterpriseFeature7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Schulungssitzungen"
						}
					},
					"contactSales": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Vertrieb kontaktieren"
						}
					},
					"getStarted": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Erste Schritte"
						}
					}
				}
			},
			"products": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Produkte"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows."
						}
					}
				},
				"grid": {
					"learnMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Mehr erfahren"
						}
					},
					"cliName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark CLI"
						}
					},
					"cliDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration."
						}
					},
					"cliPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Kostenlos"
						}
					},
					"cloudName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Cloud"
						}
					},
					"cloudDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards."
						}
					},
					"cloudPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $/Monat"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Enterprise"
						}
					},
					"enterpriseDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support."
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Kontaktieren Sie uns"
						}
					},
					"migrationName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Migrationsassistent"
						}
					},
					"migrationDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren."
						}
					},
					"migrationPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Einmalig 99 $"
						}
					},
					"qaName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Übersetzungs-QA"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler."
						}
					},
					"qaPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "19 $/Monat"
						}
					},
					"optimizerName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Bundle-Optimierer"
						}
					},
					"optimizerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting."
						}
					},
					"optimizerPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "49 $/Monat"
						}
					}
				}
			},
			"settings": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Einstellungen"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration."
						}
					}
				},
				"profile": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Profil"
						}
					},
					"displayName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Anzeigename"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "E-Mail"
						}
					}
				},
				"preferences": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Einstellungen"
						}
					},
					"emailNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "E-Mail-Benachrichtigungen"
						}
					},
					"weeklyReports": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wöchentliche Benchmark-Berichte erhalten"
						}
					},
					"toggleNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benachrichtigungen umschalten"
						}
					},
					"darkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dunkelmodus"
						}
					},
					"darkColorScheme": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dunkles Farbschema verwenden"
						}
					},
					"toggleDarkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dunkelmodus umschalten"
						}
					},
					"defaultLanguage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Standardsprache"
						}
					},
					"english": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Englisch (en)"
						}
					},
					"french": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Französisch (fr)"
						}
					},
					"german": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Deutsch (de)"
						}
					},
					"spanish": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Spanisch (es)"
						}
					},
					"japanese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Japanisch (ja)"
						}
					},
					"chinese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Chinesisch vereinfacht (zh-CN)"
						}
					},
					"arabic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Arabisch (ar)"
						}
					}
				},
				"apiAccess": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "API-Zugriff"
						}
					},
					"apiKey": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "API-Schlüssel"
						}
					},
					"copy": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Kopieren"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen."
						}
					}
				},
				"footer": {
					"cancel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Abbrechen"
						}
					},
					"saveChanges": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Änderungen speichern"
						}
					}
				}
			},
			"team": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Unser Team"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist."
						}
					}
				},
				"grid": {
					"member1Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sarah Chen"
						}
					},
					"member1Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gründerin & Leitende Ingenieurin"
						}
					},
					"member1Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab."
						}
					},
					"member2Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Marcus Weber"
						}
					},
					"member2Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Performance-Ingenieur"
						}
					},
					"member2Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel."
						}
					},
					"member3Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Aisha Patel"
						}
					},
					"member3Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Developer Advocate"
						}
					},
					"member3Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext."
						}
					},
					"member4Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tomás Rodríguez"
						}
					},
					"member4Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Full-Stack-Entwickler"
						}
					},
					"member4Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui."
						}
					},
					"member5Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yuki Tanaka"
						}
					},
					"member5Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Datenanalyst"
						}
					},
					"member5Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT."
						}
					},
					"member6Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Elena Kowalski"
						}
					},
					"member6Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Community Manager"
						}
					},
					"member6Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance."
						}
					}
				}
			},
			"notFound": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "404"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Hoppla! Seite nicht gefunden"
					}
				},
				"returnHome": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Zurück zur Startseite"
					}
				}
			}
		},
		it: {
			"shared": {
				"appName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Bench"
					}
				},
				"siteName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"contactEmail": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{ "t": 3 },
							{ "t": 9 },
							{ "t": 3 }
						],
						"s": "contact@intlayer.org"
					}
				},
				"goToGithub": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Vai su GitHub"
					}
				}
			},
			"header": {
				"home": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Home"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Metodologia"
					}
				},
				"mockPages": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Pagine di test"
					}
				},
				"products": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Prodotti"
					}
				},
				"pricing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Prezzi"
					}
				},
				"team": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Team"
					}
				},
				"blog": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Blog"
					}
				},
				"careers": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Carriere"
					}
				},
				"faq": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "FAQ"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contatti"
					}
				},
				"settings": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Impostazioni"
					}
				}
			},
			"footer": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app."
					}
				},
				"resources": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Risorse"
					}
				},
				"github": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHub"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Metodologia"
					}
				},
				"contributing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contribuire"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contatti"
					}
				},
				"builtWith": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client."
					}
				}
			},
			"themeToggle": {
				"auto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Tema: Auto"
					}
				},
				"dark": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Tema: Scuro"
					}
				},
				"light": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Tema: Chiaro"
					}
				},
				"labelAuto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara."
					}
				},
				"labelOther": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{
								"t": 3,
								"v": "Modalità tema: "
							},
							{
								"t": 4,
								"k": "mode"
							},
							{
								"t": 3,
								"v": ". Clicca per cambiare modalità."
							}
						]
					}
				}
			},
			"mockBanner": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale."
				}
			},
			"home": {
				"hero": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering."
						}
					},
					"viewResults": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Visualizza i risultati"
						}
					},
					"methodology": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Metodologia"
						}
					}
				},
				"whyItMatters": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Perché queste metriche sono importanti"
						}
					},
					"bundleSizeTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dimensione del bundle"
						}
					},
					"bundleSizeDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi."
						}
					},
					"renderingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rendering e idratazione"
						}
					},
					"renderingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI)."
						}
					},
					"dynamicLoadingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Caricamento dinamico"
						}
					},
					"dynamicLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale."
						}
					}
				},
				"understandingImpact": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Capire l'impatto"
						}
					},
					"singleJsonTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni"
						}
					},
					"singleJsonIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:"
						}
					},
					"singleJsonBullet1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale."
						}
					},
					"singleJsonBullet2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate."
						}
					},
					"singleJsonBullet3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato."
						}
					},
					"tradeOffsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "I compromessi del caricamento dinamico"
						}
					},
					"tradeOffsIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:"
						}
					},
					"waterfallLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Richieste a cascata:"
						}
					},
					"waterfallDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete."
						}
					},
					"foucLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Flash di contenuti non tradotti (FOUC):"
						}
					},
					"foucDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk."
						}
					},
					"cacheLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Invalidazione della cache:"
						}
					},
					"cacheDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati."
						}
					},
					"measuresTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cosa misura questo benchmark"
						}
					},
					"measuresDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili."
						}
					}
				},
				"resultsTable": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Risultati di esempio"
						}
					},
					"library": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Libreria"
						}
					},
					"bundleSize": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dimensione del bundle"
						}
					},
					"lookupTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tempo di ricerca"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Caricamento lazy"
						}
					},
					"yes": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sì"
						}
					},
					"manual": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Manuale"
						}
					},
					"builtIn": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Integrato"
						}
					}
				}
			},
			"about": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Informazioni su questo benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche."
						}
					}
				},
				"grid": {
					"whyExistsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Perché esiste"
						}
					},
					"whyExistsDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali."
						}
					},
					"methodologyTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Metodologia"
						}
					},
					"methodologyDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili."
						}
					}
				},
				"whatWeMeasure": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cosa misuriamo"
						}
					},
					"bundleSizeImpact": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Impatto sulla dimensione del bundle"
						}
					},
					"bundleSizeImpactDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente."
						}
					},
					"renderingOverhead": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sovrapprezzo di rendering"
						}
					},
					"renderingOverheadDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti."
						}
					},
					"hydrationCost": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Costo di idratazione"
						}
					},
					"hydrationCostDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva."
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Efficacia del caricamento pigro"
						}
					},
					"lazyLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache)."
						}
					},
					"localeSwitch": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Velocità di cambio lingua"
						}
					},
					"localeSwitchDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM."
						}
					}
				}
			},
			"blog": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Blog"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Approfondimenti, tutorial e analisi dalla comunità i18n."
						}
					}
				},
				"list": {
					"readMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Leggi di più →"
						}
					},
					"post1Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Confronto delle librerie i18n nel 2026: un'analisi approfondita"
						}
					},
					"post1Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15 marzo 2026"
						}
					},
					"post1Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti."
						}
					},
					"post1Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark"
						}
					},
					"post2Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Come ridurre il bundle i18n del 60%"
						}
					},
					"post2Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "8 marzo 2026"
						}
					},
					"post2Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione."
						}
					},
					"post2Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutorial"
						}
					},
					"post3Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lo stato dell'internazionalizzazione in React"
						}
					},
					"post3Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "28 febbraio 2026"
						}
					},
					"post3Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità."
						}
					},
					"post3Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analisi"
						}
					},
					"post4Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Migrazione da react-i18next a Lingui"
						}
					},
					"post4Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15 febbraio 2026"
						}
					},
					"post4Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui."
						}
					},
					"post4Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutorial"
						}
					},
					"post5Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Server Components e i18n: cosa cambia?"
						}
					},
					"post5Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "1 febbraio 2026"
						}
					},
					"post5Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche."
						}
					},
					"post5Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analisi"
						}
					},
					"post6Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Metodologia del benchmark: come testiamo"
						}
					},
					"post6Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20 gennaio 2026"
						}
					},
					"post6Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità."
						}
					},
					"post6Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Meta"
						}
					}
				}
			},
			"careers": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Carriere"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo."
						}
					}
				},
				"benefits": {
					"remoteLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remote-first"
						}
					},
					"remoteValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lavora da qualsiasi parte del mondo"
						}
					},
					"payLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Retribuzione competitiva"
						}
					},
					"payValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Compensazione ai vertici del mercato"
						}
					},
					"ossLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tempo per l'open source"
						}
					},
					"ossValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20% del tempo per contributi open source"
						}
					}
				},
				"openPositions": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Posizioni aperte"
						}
					},
					"applyNow": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Candidati ora"
						}
					},
					"remote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remoto"
						}
					},
					"fullTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tempo pieno"
						}
					},
					"partTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Part-time"
						}
					},
					"engineering": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Engineering"
						}
					},
					"documentation": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Documentazione"
						}
					},
					"community": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Comunità"
						}
					},
					"sfRemote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "San Francisco / Remoto"
						}
					},
					"frontendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingegnere Frontend Senior"
						}
					},
					"frontendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite."
						}
					},
					"backendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Backend Engineer"
						}
					},
					"backendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno."
						}
					},
					"writerTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Scrittore tecnico"
						}
					},
					"writerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking."
						}
					},
					"devrelTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingegnere DevRel"
						}
					},
					"devrelDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source."
						}
					},
					"qaTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingegnere QA"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi."
						}
					}
				}
			},
			"contact": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contattaci"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo"
						}
					}
				},
				"form": {
					"name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nome"
						}
					},
					"yourName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Il tuo nome"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Email"
						}
					},
					"emailPlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "tu@esempio.com"
						}
					},
					"topic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Argomento"
						}
					},
					"bugReport": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Segnalazione bug"
						}
					},
					"newBenchmarkIdea": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nuova idea di benchmark"
						}
					},
					"methodologyQuestion": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Domanda sulla metodologia"
						}
					},
					"contribution": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contributo"
						}
					},
					"other": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Altro"
						}
					},
					"message": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Messaggio"
						}
					},
					"messagePlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Descrivi la tua domanda o idea..."
						}
					},
					"sendMessage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Invia messaggio"
						}
					}
				}
			},
			"faq": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Domande frequenti"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutto quello che c'è da sapere su i18n Benchmark."
						}
					}
				},
				"list": {
					"q1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cos'è i18n Benchmark?"
						}
					},
					"a1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React."
						}
					},
					"q2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Come vengono condotti i benchmark?"
						}
					},
					"a2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub."
						}
					},
					"q3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Quali librerie sono attualmente supportate?"
						}
					},
					"a3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee."
						}
					},
					"q4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Posso inviare i miei benchmark?"
						}
					},
					"a4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei."
						}
					},
					"q5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Con quale frequenza vengono aggiornati i benchmark?"
						}
					},
					"a5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato."
						}
					},
					"q6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "I dati sono affidabili?"
						}
					},
					"a6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza."
						}
					},
					"q7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Offrite servizi di consulenza?"
						}
					},
					"a7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli."
						}
					},
					"q8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Come posso contribuire?"
						}
					},
					"a8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli."
						}
					}
				}
			},
			"pricing": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Prezzi semplici e trasparenti"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Scegli il piano più adatto al tuo team. Nessun costo nascosto."
						}
					}
				},
				"tiers": {
					"starterName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Starter"
						}
					},
					"starterPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "0 $"
						}
					},
					"starterPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "per sempre"
						}
					},
					"starterFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "5 esecuzioni benchmark al giorno"
						}
					},
					"starterFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "3 librerie"
						}
					},
					"starterFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Supporto della comunità"
						}
					},
					"starterFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Risultati pubblici"
						}
					},
					"proName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pro"
						}
					},
					"proPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $"
						}
					},
					"proPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "/mese"
						}
					},
					"proFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Esecuzioni illimitate"
						}
					},
					"proFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutte le librerie"
						}
					},
					"proFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Supporto prioritario"
						}
					},
					"proFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Risultati privati"
						}
					},
					"proFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Integrazione CI"
						}
					},
					"proFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dati storici"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Enterprise"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Personalizzato"
						}
					},
					"enterpriseFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutto quello che c'è in Pro"
						}
					},
					"enterpriseFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Opzione on-premise"
						}
					},
					"enterpriseFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO e SAML"
						}
					},
					"enterpriseFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Account manager dedicato"
						}
					},
					"enterpriseFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SLA personalizzati"
						}
					},
					"enterpriseFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Log di controllo"
						}
					},
					"enterpriseFeature7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sessioni di formazione"
						}
					},
					"contactSales": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contatta l'ufficio vendite"
						}
					},
					"getStarted": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Inizia ora"
						}
					}
				}
			},
			"products": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Prodotti"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione."
						}
					}
				},
				"grid": {
					"learnMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Scopri di più"
						}
					},
					"cliName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "CLI del Benchmark"
						}
					},
					"cliDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI."
						}
					},
					"cliPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gratis"
						}
					},
					"cloudName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Cloud"
						}
					},
					"cloudDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team."
						}
					},
					"cloudPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $/mese"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Enterprise"
						}
					},
					"enterpriseDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato."
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contattaci"
						}
					},
					"migrationName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Assistente alla migrazione"
						}
					},
					"migrationDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività."
						}
					},
					"migrationPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "99 $ una tantum"
						}
					},
					"qaName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "QA delle traduzioni"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto."
						}
					},
					"qaPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "19 $/mese"
						}
					},
					"optimizerName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ottimizzatore del bundle"
						}
					},
					"optimizerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting."
						}
					},
					"optimizerPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "49 $/mese"
						}
					}
				}
			},
			"settings": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Impostazioni"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gestisci le preferenze del tuo account e la configurazione."
						}
					}
				},
				"profile": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Profilo"
						}
					},
					"displayName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nome visualizzato"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Email"
						}
					}
				},
				"preferences": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Preferenze"
						}
					},
					"emailNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Notifiche via email"
						}
					},
					"weeklyReports": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ricevi rapporti settimanali sui benchmark"
						}
					},
					"toggleNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Attiva/disattiva notifiche"
						}
					},
					"darkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Modalità scura"
						}
					},
					"darkColorScheme": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Usa lo schema colori scuro"
						}
					},
					"toggleDarkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Attiva/disattiva modalità scura"
						}
					},
					"defaultLanguage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Lingua predefinita"
						}
					},
					"english": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Inglese (en)"
						}
					},
					"french": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Francese (fr)"
						}
					},
					"german": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tedesco (de)"
						}
					},
					"spanish": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Spagnolo (es)"
						}
					},
					"japanese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Giapponese (ja)"
						}
					},
					"chinese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cinese semplificato (zh-CN)"
						}
					},
					"arabic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Arabo (ar)"
						}
					}
				},
				"apiAccess": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Accesso API"
						}
					},
					"apiKey": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Chiave API"
						}
					},
					"copy": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Copia"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Usa questa chiave per accedere programmaticamente alle API di benchmarking."
						}
					}
				},
				"footer": {
					"cancel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Annulla"
						}
					},
					"saveChanges": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Salva modifiche"
						}
					}
				}
			},
			"team": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Il nostro team"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori."
						}
					}
				},
				"grid": {
					"member1Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sarah Chen"
						}
					},
					"member1Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Fondatrice e Responsabile tecnico"
						}
					},
					"member1Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala."
						}
					},
					"member2Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Marcus Weber"
						}
					},
					"member2Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ingegnere delle prestazioni"
						}
					},
					"member2Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel."
						}
					},
					"member3Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Aisha Patel"
						}
					},
					"member3Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Developer Advocate"
						}
					},
					"member3Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext."
						}
					},
					"member4Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tomás Rodríguez"
						}
					},
					"member4Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sviluppatore Full-Stack"
						}
					},
					"member4Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui."
						}
					},
					"member5Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yuki Tanaka"
						}
					},
					"member5Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analista dati"
						}
					},
					"member5Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT."
						}
					},
					"member6Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Elena Kowalski"
						}
					},
					"member6Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Responsable della comunità"
						}
					},
					"member6Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source."
						}
					}
				}
			},
			"notFound": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "404"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Ops! Pagina non trovata"
					}
				},
				"returnHome": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Torna alla Home"
					}
				}
			}
		},
		pt: {
			"shared": {
				"appName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Bench"
					}
				},
				"siteName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"contactEmail": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{ "t": 3 },
							{ "t": 9 },
							{ "t": 3 }
						],
						"s": "contact@intlayer.org"
					}
				},
				"goToGithub": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Ir para o GitHub"
					}
				}
			},
			"header": {
				"home": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Início"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Metodologia"
					}
				},
				"mockPages": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Páginas de Teste"
					}
				},
				"products": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Produtos"
					}
				},
				"pricing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Preços"
					}
				},
				"team": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Equipe"
					}
				},
				"blog": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Blog"
					}
				},
				"careers": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Carreiras"
					}
				},
				"faq": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "FAQ"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contato"
					}
				},
				"settings": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Configurações"
					}
				}
			},
			"footer": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação."
					}
				},
				"resources": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Recursos"
					}
				},
				"github": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHub"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Metodologia"
					}
				},
				"contributing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contribuindo"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Contato"
					}
				},
				"builtWith": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente."
					}
				}
			},
			"themeToggle": {
				"auto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Tema: Automático"
					}
				},
				"dark": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Tema: Escuro"
					}
				},
				"light": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Tema: Claro"
					}
				},
				"labelAuto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Modo de tema: auto (sistema). Clique para mudar para o modo claro."
					}
				},
				"labelOther": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{
								"t": 3,
								"v": "Modo de tema: "
							},
							{
								"t": 4,
								"k": "mode"
							},
							{
								"t": 3,
								"v": ". Clique para mudar de modo."
							}
						]
					}
				}
			},
			"mockBanner": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real."
				}
			},
			"home": {
				"hero": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização."
						}
					},
					"viewResults": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ver Resultados"
						}
					},
					"methodology": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Metodologia"
						}
					}
				},
				"whyItMatters": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Por que estas métricas importam"
						}
					},
					"bundleSizeTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tamanho do bundle"
						}
					},
					"bundleSizeDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução."
						}
					},
					"renderingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Renderização e hidratação"
						}
					},
					"renderingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI)."
						}
					},
					"dynamicLoadingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Carregamento dinâmico"
						}
					},
					"dynamicLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial."
						}
					}
				},
				"understandingImpact": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Entendendo o impacto"
						}
					},
					"singleJsonTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Por que um único JSON grande pode prejudicar o desempenho"
						}
					},
					"singleJsonIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:"
						}
					},
					"singleJsonBullet1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal."
						}
					},
					"singleJsonBullet2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado."
						}
					},
					"singleJsonBullet3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado."
						}
					},
					"tradeOffsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Os trade-offs do carregamento dinâmico"
						}
					},
					"tradeOffsIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:"
						}
					},
					"waterfallLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Requisições em cascata:"
						}
					},
					"waterfallDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips."
						}
					},
					"foucLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Flash de conteúdo não traduzido (FOUC):"
						}
					},
					"foucDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar."
						}
					},
					"cacheLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Invalidação de cache:"
						}
					},
					"cacheDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados."
						}
					},
					"measuresTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "O que este benchmark mede"
						}
					},
					"measuresDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis."
						}
					}
				},
				"resultsTable": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Resultados de exemplo"
						}
					},
					"library": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Biblioteca"
						}
					},
					"bundleSize": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tamanho do Bundle"
						}
					},
					"lookupTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tempo de Busca"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Carregamento Lento"
						}
					},
					"yes": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sim"
						}
					},
					"manual": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Manual"
						}
					},
					"builtIn": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Integrado"
						}
					}
				}
			},
			"about": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sobre este benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas."
						}
					}
				},
				"grid": {
					"whyExistsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Por que isto existe"
						}
					},
					"whyExistsDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais."
						}
					},
					"methodologyTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Metodologia"
						}
					},
					"methodologyDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis."
						}
					}
				},
				"whatWeMeasure": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "O que medimos"
						}
					},
					"bundleSizeImpact": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Impacto no tamanho do bundle"
						}
					},
					"bundleSizeImpactDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas."
						}
					},
					"renderingOverhead": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sobrecarga de renderização"
						}
					},
					"renderingOverheadDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes."
						}
					},
					"hydrationCost": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Custo de hidratação"
						}
					},
					"hydrationCostDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa."
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Eficácia do carregamento lento"
						}
					},
					"lazyLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache)."
						}
					},
					"localeSwitch": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Velocidade de troca de localidade"
						}
					},
					"localeSwitchDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM."
						}
					}
				}
			},
			"blog": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Blog"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Insights, tutoriais e análises da comunidade i18n."
						}
					}
				},
				"list": {
					"readMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ler Mais →"
						}
					},
					"post1Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Comparando bibliotecas i18n em 2026: um mergulho profundo"
						}
					},
					"post1Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15 de março de 2026"
						}
					},
					"post1Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes."
						}
					},
					"post1Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark"
						}
					},
					"post2Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Como reduzir seu bundle i18n em 60%"
						}
					},
					"post2Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "8 de março de 2026"
						}
					},
					"post2Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build."
						}
					},
					"post2Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutorial"
						}
					},
					"post3Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "O estado da internacionalização no React"
						}
					},
					"post3Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "28 de fevereiro de 2026"
						}
					},
					"post3Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade."
						}
					},
					"post3Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Análise"
						}
					},
					"post4Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Migrando de react-i18next para o Lingui"
						}
					},
					"post4Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15 de fevereiro de 2026"
						}
					},
					"post4Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui."
						}
					},
					"post4Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tutorial"
						}
					},
					"post5Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Server Components e i18n: o que muda?"
						}
					},
					"post5Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "1 de fevereiro de 2026"
						}
					},
					"post5Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas."
						}
					},
					"post5Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Análise"
						}
					},
					"post6Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Metodologia de benchmark: como testamos"
						}
					},
					"post6Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20 de janeiro de 2026"
						}
					},
					"post6Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade."
						}
					},
					"post6Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Meta"
						}
					}
				}
			},
			"careers": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Carreiras"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo."
						}
					}
				},
				"benefits": {
					"remoteLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remoto primeiro"
						}
					},
					"remoteValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Trabalhe de qualquer lugar do mundo"
						}
					},
					"payLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Salário competitivo"
						}
					},
					"payValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remuneração acima do mercado"
						}
					},
					"ossLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tempo para o código aberto"
						}
					},
					"ossValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20% do tempo para contribuições OSS"
						}
					}
				},
				"openPositions": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Vagas abertas"
						}
					},
					"applyNow": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Candidatar-se agora"
						}
					},
					"remote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Remoto"
						}
					},
					"fullTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tempo integral"
						}
					},
					"partTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tempo parcial"
						}
					},
					"engineering": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Engenharia"
						}
					},
					"documentation": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Documentação"
						}
					},
					"community": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Comunidade"
						}
					},
					"sfRemote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "San Francisco / Remoto"
						}
					},
					"frontendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Engenheiro Frontend Sênior"
						}
					},
					"frontendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite."
						}
					},
					"backendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Engenheiro Backend"
						}
					},
					"backendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente."
						}
					},
					"writerTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Redator técnico"
						}
					},
					"writerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking."
						}
					},
					"devrelTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Engenheiro de DevRel"
						}
					},
					"devrelDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto."
						}
					},
					"qaTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Engenheiro de QA"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos."
						}
					}
				}
			},
			"contact": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Entre em contato"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em"
						}
					}
				},
				"form": {
					"name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nome"
						}
					},
					"yourName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Seu nome"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "E-mail"
						}
					},
					"emailPlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "voce@exemplo.com"
						}
					},
					"topic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Assunto"
						}
					},
					"bugReport": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Relatório de bug"
						}
					},
					"newBenchmarkIdea": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nova ideia de benchmark"
						}
					},
					"methodologyQuestion": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pergunta sobre metodologia"
						}
					},
					"contribution": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contribuição"
						}
					},
					"other": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Outro"
						}
					},
					"message": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Mensagem"
						}
					},
					"messagePlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Descreva sua pergunta ou ideia..."
						}
					},
					"sendMessage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Enviar mensagem"
						}
					}
				}
			},
			"faq": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Perguntas frequentes"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tudo o que você precisa saber sobre o i18n Benchmark."
						}
					}
				},
				"list": {
					"q1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "O que é o i18n Benchmark?"
						}
					},
					"a1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React."
						}
					},
					"q2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Como os benchmarks são conduzidos?"
						}
					},
					"a2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub."
						}
					},
					"q3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Quais bibliotecas são suportadas atualmente?"
						}
					},
					"a3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee."
						}
					},
					"q4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Posso enviar meus próprios benchmarks?"
						}
					},
					"a4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas."
						}
					},
					"q5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Com que frequência os benchmarks são atualizados?"
						}
					},
					"a5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato."
						}
					},
					"q6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Os dados são confiáveis?"
						}
					},
					"a6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência."
						}
					},
					"q7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Vocês oferecem serviços de consultoria?"
						}
					},
					"a7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições."
						}
					},
					"q8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Como posso contribuir?"
						}
					},
					"a8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes."
						}
					}
				}
			},
			"pricing": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Preços simples e transparentes"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas."
						}
					}
				},
				"tiers": {
					"starterName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Starter"
						}
					},
					"starterPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "0 $"
						}
					},
					"starterPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "para sempre"
						}
					},
					"starterFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "5 execuções de benchmark/dia"
						}
					},
					"starterFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "3 bibliotecas"
						}
					},
					"starterFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Suporte da comunidade"
						}
					},
					"starterFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Resultados públicos"
						}
					},
					"proName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pro"
						}
					},
					"proPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $"
						}
					},
					"proPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "/mês"
						}
					},
					"proFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Execuções ilimitadas"
						}
					},
					"proFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Todas as bibliotecas"
						}
					},
					"proFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Suporte prioritário"
						}
					},
					"proFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Resultados privados"
						}
					},
					"proFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Integração CI"
						}
					},
					"proFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Dados históricos"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Enterprise"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Personalizado"
						}
					},
					"enterpriseFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tudo o que está no Pro"
						}
					},
					"enterpriseFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Opção on-premise"
						}
					},
					"enterpriseFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO e SAML"
						}
					},
					"enterpriseFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gerente de conta dedicado"
						}
					},
					"enterpriseFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SLAs personalizados"
						}
					},
					"enterpriseFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Logs de auditoria"
						}
					},
					"enterpriseFeature7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sessões de treinamento"
						}
					},
					"contactSales": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contatar vendas"
						}
					},
					"getStarted": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Começar"
						}
					}
				}
			},
			"products": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Produtos"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização."
						}
					}
				},
				"grid": {
					"learnMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Saiba Mais"
						}
					},
					"cliName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark CLI"
						}
					},
					"cliDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI."
						}
					},
					"cliPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Grátis"
						}
					},
					"cloudName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Cloud"
						}
					},
					"cloudDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe."
						}
					},
					"cloudPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $/mês"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Enterprise"
						}
					},
					"enterpriseDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado."
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Contate-nos"
						}
					},
					"migrationName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Assistente de migração"
						}
					},
					"migrationDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade."
						}
					},
					"migrationPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "99 $ taxa única"
						}
					},
					"qaName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "QA de tradução"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto."
						}
					},
					"qaPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "19 $/mês"
						}
					},
					"optimizerName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Otimizador de bundle"
						}
					},
					"optimizerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código."
						}
					},
					"optimizerPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "49 $/mês"
						}
					}
				}
			},
			"settings": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Configurações"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gerencie suas preferências de conta e configuração."
						}
					}
				},
				"profile": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Perfil"
						}
					},
					"displayName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nome de exibição"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "E-mail"
						}
					}
				},
				"preferences": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Preferências"
						}
					},
					"emailNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Notificações por e-mail"
						}
					},
					"weeklyReports": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Receber relatórios semanais de benchmarks"
						}
					},
					"toggleNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Alternar notificações"
						}
					},
					"darkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Modo Escuro"
						}
					},
					"darkColorScheme": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Usar esquema de cores escuro"
						}
					},
					"toggleDarkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Alternar modo escuro"
						}
					},
					"defaultLanguage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Idioma padrão"
						}
					},
					"english": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Inglês (en)"
						}
					},
					"french": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Francés (fr)"
						}
					},
					"german": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Alemão (de)"
						}
					},
					"spanish": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Espanhol (es)"
						}
					},
					"japanese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Japonês (ja)"
						}
					},
					"chinese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Chinês Simplificado (zh-CN)"
						}
					},
					"arabic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Árabe (ar)"
						}
					}
				},
				"apiAccess": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Acesso API"
						}
					},
					"apiKey": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Chave API"
						}
					},
					"copy": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Copiar"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Use esta chave para acessar a API de benchmarking programaticamente."
						}
					}
				},
				"footer": {
					"cancel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Cancelar"
						}
					},
					"saveChanges": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Salvar alterações"
						}
					}
				}
			},
			"team": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Nossa equipe"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor."
						}
					}
				},
				"grid": {
					"member1Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sarah Chen"
						}
					},
					"member1Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Fundadora e Engenheira Líder"
						}
					},
					"member1Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala."
						}
					},
					"member2Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Marcus Weber"
						}
					},
					"member2Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Engenheiro de performance"
						}
					},
					"member2Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel."
						}
					},
					"member3Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Aisha Patel"
						}
					},
					"member3Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Developer Advocate"
						}
					},
					"member3Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext."
						}
					},
					"member4Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tomás Rodríguez"
						}
					},
					"member4Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Desenvolvedor Full-Stack"
						}
					},
					"member4Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui."
						}
					},
					"member5Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yuki Tanaka"
						}
					},
					"member5Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Analista de dados"
						}
					},
					"member5Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT."
						}
					},
					"member6Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Elena Kowalski"
						}
					},
					"member6Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gerente de comunidade"
						}
					},
					"member6Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto."
						}
					}
				}
			},
			"notFound": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "404"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Ops! Página não encontrada"
					}
				},
				"returnHome": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Voltar para o início"
					}
				}
			}
		},
		zh: {
			"shared": {
				"appName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Bench"
					}
				},
				"siteName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"contactEmail": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{ "t": 3 },
							{ "t": 9 },
							{ "t": 3 }
						],
						"s": "contact@intlayer.org"
					}
				},
				"goToGithub": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "前往 GitHub"
					}
				}
			},
			"header": {
				"home": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "首页"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "方法论"
					}
				},
				"mockPages": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "模拟页面"
					}
				},
				"products": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "产品"
					}
				},
				"pricing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "价格"
					}
				},
				"team": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "团队"
					}
				},
				"blog": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "博客"
					}
				},
				"careers": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "招聘"
					}
				},
				"faq": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "常见问题"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "联系我们"
					}
				},
				"settings": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "设置"
					}
				}
			},
			"footer": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。"
					}
				},
				"resources": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "资源"
					}
				},
				"github": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHub"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "方法论"
					}
				},
				"contributing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "贡献"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "联系我们"
					}
				},
				"builtWith": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。"
					}
				}
			},
			"themeToggle": {
				"auto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "主题：自动"
					}
				},
				"dark": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "主题：深色"
					}
				},
				"light": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "主题：浅色"
					}
				},
				"labelAuto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "主题模式：自动（系统）。点击切换到浅色模式。"
					}
				},
				"labelOther": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{
								"t": 3,
								"v": "主题模式："
							},
							{
								"t": 4,
								"k": "mode"
							},
							{
								"t": 3,
								"v": "。点击切换模式。"
							}
						]
					}
				}
			},
			"mockBanner": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。"
				}
			},
			"home": {
				"hero": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。"
						}
					},
					"viewResults": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "查看结果"
						}
					},
					"methodology": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "方法论"
						}
					}
				},
				"whyItMatters": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "为什么这些指标很重要"
						}
					},
					"bundleSizeTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "包大小"
						}
					},
					"bundleSizeDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。"
						}
					},
					"renderingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "渲染与注水"
						}
					},
					"renderingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。"
						}
					},
					"dynamicLoadingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "动态加载"
						}
					},
					"dynamicLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。"
						}
					}
				},
				"understandingImpact": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "理解影响"
						}
					},
					"singleJsonTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "为什么单个大型 JSON 会损害性能"
						}
					},
					"singleJsonIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着："
						}
					},
					"singleJsonBullet1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "每次页面加载时都必须解析 JSON — 阻塞主线程。"
						}
					},
					"singleJsonBullet2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。"
						}
					},
					"singleJsonBullet3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。"
						}
					},
					"tradeOffsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "动态加载的权衡"
						}
					},
					"tradeOffsIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战："
						}
					},
					"waterfallLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "瀑布流请求："
						}
					},
					"waterfallDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。"
						}
					},
					"foucLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "未翻译内容闪烁 (FOUC)："
						}
					},
					"foucDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "在块到达之前，用户可能会短暂看到翻译键或回退语言。"
						}
					},
					"cacheLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "缓存失效："
						}
					},
					"cacheDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。"
						}
					},
					"measuresTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "此基准测试衡量的内容"
						}
					},
					"measuresDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。"
						}
					}
				},
				"resultsTable": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "示例结果"
						}
					},
					"library": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "库"
						}
					},
					"bundleSize": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "包大小"
						}
					},
					"lookupTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "查找时间"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "延迟加载"
						}
					},
					"yes": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "是"
						}
					},
					"manual": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "手动"
						}
					},
					"builtIn": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "内置"
						}
					}
				}
			},
			"about": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "关于此基准测试"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。"
						}
					}
				},
				"grid": {
					"whyExistsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "为什么存在这个测试"
						}
					},
					"whyExistsDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。"
						}
					},
					"methodologyTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "方法论"
						}
					},
					"methodologyDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。"
						}
					}
				},
				"whatWeMeasure": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "衡量指标"
						}
					},
					"bundleSizeImpact": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "包大小影响"
						}
					},
					"bundleSizeImpactDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。"
						}
					},
					"renderingOverhead": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "渲染开销"
						}
					},
					"renderingOverheadDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。"
						}
					},
					"hydrationCost": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "注水成本"
						}
					},
					"hydrationCostDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "延迟加载有效性"
						}
					},
					"lazyLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。"
						}
					},
					"localeSwitch": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "语言环境切换速度"
						}
					},
					"localeSwitchDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。"
						}
					}
				}
			},
			"blog": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "博客"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "来自 i18n 社区的见解、教程和分析。"
						}
					}
				},
				"list": {
					"readMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "阅读更多 →"
						}
					},
					"post1Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026 年 i18n 库对比：深度分析"
						}
					},
					"post1Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年3月15日"
						}
					},
					"post1Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。"
						}
					},
					"post1Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "基准测试"
						}
					},
					"post2Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "如何将 i18n 包大小减少 60%"
						}
					},
					"post2Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年3月8日"
						}
					},
					"post2Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。"
						}
					},
					"post2Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "教程"
						}
					},
					"post3Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React 国际化现状"
						}
					},
					"post3Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年2月28日"
						}
					},
					"post3Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。"
						}
					},
					"post3Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "分析"
						}
					},
					"post4Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "从 react-i18next 迁移到 Lingui"
						}
					},
					"post4Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年2月15日"
						}
					},
					"post4Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。"
						}
					},
					"post4Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "教程"
						}
					},
					"post5Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Server Components 与 i18n：发生了什么变化？"
						}
					},
					"post5Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年2月1日"
						}
					},
					"post5Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。"
						}
					},
					"post5Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "分析"
						}
					},
					"post6Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "基准测试方法论：我们如何测试"
						}
					},
					"post6Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年1月20日"
						}
					},
					"post6Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。"
						}
					},
					"post6Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Meta"
						}
					}
				}
			},
			"careers": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "招聘"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。"
						}
					}
				},
				"benefits": {
					"remoteLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "远程优先"
						}
					},
					"remoteValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "在世界任何地方工作"
						}
					},
					"payLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "具有竞争力的薪酬"
						}
					},
					"payValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "市场顶尖的薪资水平"
						}
					},
					"ossLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "开源时间"
						}
					},
					"ossValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20% 的时间用于 OSS 贡献"
						}
					}
				},
				"openPositions": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "开放职位"
						}
					},
					"applyNow": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "立即申请"
						}
					},
					"remote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "远程"
						}
					},
					"fullTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "全职"
						}
					},
					"partTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "兼职"
						}
					},
					"engineering": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "工程"
						}
					},
					"documentation": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "文档"
						}
					},
					"community": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "社区"
						}
					},
					"sfRemote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "旧金山 / 远程"
						}
					},
					"frontendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "高级前端工程师"
						}
					},
					"frontendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。"
						}
					},
					"backendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "后端工程师"
						}
					},
					"backendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。"
						}
					},
					"writerTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "技术作家"
						}
					},
					"writerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "为我们的基准测试平台编写全面的指南、API 参考和教程。"
						}
					},
					"devrelTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "DevRel 工程师"
						}
					},
					"devrelDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。"
						}
					},
					"qaTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "QA 工程师"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。"
						}
					}
				}
			},
			"contact": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "取得联系"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "有想法、发现了错误或想贡献基准测试？请联系我们："
						}
					}
				},
				"form": {
					"name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "姓名"
						}
					},
					"yourName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "您的姓名"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "电子邮件"
						}
					},
					"emailPlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "you@example.com"
						}
					},
					"topic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "主题"
						}
					},
					"bugReport": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "错误报告"
						}
					},
					"newBenchmarkIdea": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "新基准测试想法"
						}
					},
					"methodologyQuestion": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "方法论问题"
						}
					},
					"contribution": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "贡献"
						}
					},
					"other": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "其他"
						}
					},
					"message": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "消息"
						}
					},
					"messagePlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "描述您的问题或想法..."
						}
					},
					"sendMessage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "发送消息"
						}
					}
				}
			},
			"faq": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "常见问题"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "关于 i18n 基准测试您需要了解的一切。"
						}
					}
				},
				"list": {
					"q1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "什么是 i18n 基准测试？"
						}
					},
					"a1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。"
						}
					},
					"q2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "基准测试是如何进行的？"
						}
					},
					"a2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。"
						}
					},
					"q3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "目前支持哪些库？"
						}
					},
					"a3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。"
						}
					},
					"q4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "我可以提交我自己的基准测试吗？"
						}
					},
					"a4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。"
						}
					},
					"q5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "基准测试多久更新一次？"
						}
					},
					"a5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。"
						}
					},
					"q6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "数据可靠吗？"
						}
					},
					"a6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。"
						}
					},
					"q7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "你们提供咨询服务吗？"
						}
					},
					"a7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。"
						}
					},
					"q8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "我该如何贡献？"
						}
					},
					"a8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。"
						}
					}
				}
			},
			"pricing": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "简单透明的定价"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "选择适合您团队的计划。无隐藏费用。"
						}
					}
				},
				"tiers": {
					"starterName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "入门版"
						}
					},
					"starterPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "0 $"
						}
					},
					"starterPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "永久"
						}
					},
					"starterFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "每天 5 次基准测试运行"
						}
					},
					"starterFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "3 个库"
						}
					},
					"starterFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "社区支持"
						}
					},
					"starterFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "公开结果"
						}
					},
					"proName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "专业版"
						}
					},
					"proPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $"
						}
					},
					"proPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "/月"
						}
					},
					"proFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "无限次运行"
						}
					},
					"proFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "所有库"
						}
					},
					"proFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "优先支持"
						}
					},
					"proFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "私有结果"
						}
					},
					"proFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "CI 集成"
						}
					},
					"proFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "历史数据"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "企业版"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "定制"
						}
					},
					"enterpriseFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "包含专业版中的所有功能"
						}
					},
					"enterpriseFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "本地部署选项"
						}
					},
					"enterpriseFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO 和 SAML"
						}
					},
					"enterpriseFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "专属客户经理"
						}
					},
					"enterpriseFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "定制 SLA"
						}
					},
					"enterpriseFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "审计日志"
						}
					},
					"enterpriseFeature7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "培训课程"
						}
					},
					"contactSales": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "联系销售"
						}
					},
					"getStarted": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "开始使用"
						}
					}
				}
			},
			"products": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "产品"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "用于简化国际化工作流程的工具和服务。"
						}
					}
				},
				"grid": {
					"learnMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "了解更多"
						}
					},
					"cliName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "基准测试 CLI"
						}
					},
					"cliDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "从您的终端本地运行基准测试。支持自定义配置和 CI 集成。"
						}
					},
					"cliPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "免费"
						}
					},
					"cloudName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "基准测试云"
						}
					},
					"cloudDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "具有历史追踪、警报和团队仪表板的自动化云基准测试。"
						}
					},
					"cloudPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $/月"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "基准测试企业版"
						}
					},
					"enterpriseDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "联系我们"
						}
					},
					"migrationName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "迁移助手"
						}
					},
					"migrationDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。"
						}
					},
					"migrationPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "99 $ 一次性费用"
						}
					},
					"qaName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "翻译 QA"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "自动检查翻译缺失、复数问题和上下文错误。"
						}
					},
					"qaPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "19 $/月"
						}
					},
					"optimizerName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "包优化器"
						}
					},
					"optimizerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。"
						}
					},
					"optimizerPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "49 $/月"
						}
					}
				}
			},
			"settings": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "设置"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "管理您的账户偏好和配置。"
						}
					}
				},
				"profile": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "个人资料"
						}
					},
					"displayName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "显示名称"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "电子邮件"
						}
					}
				},
				"preferences": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "偏好"
						}
					},
					"emailNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "电子邮件通知"
						}
					},
					"weeklyReports": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "接收每周基准测试报告"
						}
					},
					"toggleNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "切换通知"
						}
					},
					"darkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "深色模式"
						}
					},
					"darkColorScheme": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "使用深色配色方案"
						}
					},
					"toggleDarkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "切换深色模式"
						}
					},
					"defaultLanguage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "默认语言"
						}
					},
					"english": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "英语 (en)"
						}
					},
					"french": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "法语 (fr)"
						}
					},
					"german": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "德语 (de)"
						}
					},
					"spanish": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "西班牙语 (es)"
						}
					},
					"japanese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "日语 (ja)"
						}
					},
					"chinese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "简体中文 (zh-CN)"
						}
					},
					"arabic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "阿拉伯语 (ar)"
						}
					}
				},
				"apiAccess": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "API 访问"
						}
					},
					"apiKey": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "API 密钥"
						}
					},
					"copy": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "复制"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "使用此密钥以编程方式访问基准测试 API。"
						}
					}
				},
				"footer": {
					"cancel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "取消"
						}
					},
					"saveChanges": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "保存更改"
						}
					}
				}
			},
			"team": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "我们的团队"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。"
						}
					}
				},
				"grid": {
					"member1Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sarah Chen"
						}
					},
					"member1Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "创始人兼首席工程师"
						}
					},
					"member1Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。"
						}
					},
					"member2Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Marcus Weber"
						}
					},
					"member2Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "性能工程师"
						}
					},
					"member2Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。"
						}
					},
					"member3Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Aisha Patel"
						}
					},
					"member3Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "开发者倡导者"
						}
					},
					"member3Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。"
						}
					},
					"member4Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tomás Rodríguez"
						}
					},
					"member4Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "全栈开发人员"
						}
					},
					"member4Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。"
						}
					},
					"member5Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yuki Tanaka"
						}
					},
					"member5Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "数据分析师"
						}
					},
					"member5Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。"
						}
					},
					"member6Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Elena Kowalski"
						}
					},
					"member6Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "社区经理"
						}
					},
					"member6Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。"
						}
					}
				}
			},
			"notFound": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "404"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "哎呀！页面未找到"
					}
				},
				"returnHome": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "返回首页"
					}
				}
			}
		},
		ja: {
			"shared": {
				"appName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Bench"
					}
				},
				"siteName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"contactEmail": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{ "t": 3 },
							{ "t": 9 },
							{ "t": 3 }
						],
						"s": "contact@intlayer.org"
					}
				},
				"goToGithub": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHubへ"
					}
				}
			},
			"header": {
				"home": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "ホーム"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "手法"
					}
				},
				"mockPages": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "テストページ"
					}
				},
				"products": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "製品"
					}
				},
				"pricing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "価格"
					}
				},
				"team": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "チーム"
					}
				},
				"blog": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "ブログ"
					}
				},
				"careers": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "採用情報"
					}
				},
				"faq": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "FAQ"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "お問い合わせ"
					}
				},
				"settings": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "設定"
					}
				}
			},
			"footer": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。"
					}
				},
				"resources": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "リソース"
					}
				},
				"github": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHub"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "手法"
					}
				},
				"contributing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "貢献する"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "お問い合わせ"
					}
				},
				"builtWith": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。"
					}
				}
			},
			"themeToggle": {
				"auto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "テーマ：自動"
					}
				},
				"dark": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "テーマ：ダーク"
					}
				},
				"light": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "テーマ：ライト"
					}
				},
				"labelAuto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。"
					}
				},
				"labelOther": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{
								"t": 3,
								"v": "テーマモード："
							},
							{
								"t": 4,
								"k": "mode"
							},
							{
								"t": 3,
								"v": "。クリックしてモードを切り替えます。"
							}
						]
					}
				}
			},
			"mockBanner": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。"
				}
			},
			"home": {
				"hero": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。"
						}
					},
					"viewResults": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "結果を見る"
						}
					},
					"methodology": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "手法"
						}
					}
				},
				"whyItMatters": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "なぜこれらの指標が重要なのか"
						}
					},
					"bundleSizeTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "バンドルサイズ"
						}
					},
					"bundleSizeDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。"
						}
					},
					"renderingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "レンダリングとハイドレーション"
						}
					},
					"renderingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。"
						}
					},
					"dynamicLoadingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "動的読み込み"
						}
					},
					"dynamicLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。"
						}
					}
				},
				"understandingImpact": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "影響を理解する"
						}
					},
					"singleJsonTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "なぜ1つの大きなJSONがパフォーマンスを低下させるのか"
						}
					},
					"singleJsonIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します："
						}
					},
					"singleJsonBullet1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。"
						}
					},
					"singleJsonBullet2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。"
						}
					},
					"singleJsonBullet3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。"
						}
					},
					"tradeOffsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "動的読み込みのトレードオフ"
						}
					},
					"tradeOffsIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます："
						}
					},
					"waterfallLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ウォーターフォールリクエスト："
						}
					},
					"waterfallDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。"
						}
					},
					"foucLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "翻訳されていないコンテンツのフラッシュ (FOUC)："
						}
					},
					"foucDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。"
						}
					},
					"cacheLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "キャッシュの無効化："
						}
					},
					"cacheDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。"
						}
					},
					"measuresTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "このベンチマークが測定するもの"
						}
					},
					"measuresDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。"
						}
					}
				},
				"resultsTable": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "サンプル結果"
						}
					},
					"library": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ライブラリ"
						}
					},
					"bundleSize": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "バンドルサイズ"
						}
					},
					"lookupTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ルックアップ時間"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "遅延読み込み"
						}
					},
					"yes": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "はい"
						}
					},
					"manual": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "手動"
						}
					},
					"builtIn": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "内蔵"
						}
					}
				}
			},
			"about": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "このベンチマークについて"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。"
						}
					}
				},
				"grid": {
					"whyExistsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "なぜこれが存在するのか"
						}
					},
					"whyExistsDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。"
						}
					},
					"methodologyTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "手法"
						}
					},
					"methodologyDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。"
						}
					}
				},
				"whatWeMeasure": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "測定項目"
						}
					},
					"bundleSizeImpact": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "バンドルサイズへの影響"
						}
					},
					"bundleSizeImpactDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。"
						}
					},
					"renderingOverhead": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "レンダリングのオーバーヘッド"
						}
					},
					"renderingOverheadDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。"
						}
					},
					"hydrationCost": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ハイドレーションコスト"
						}
					},
					"hydrationCostDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "遅延読み込みの有効性"
						}
					},
					"lazyLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。"
						}
					},
					"localeSwitch": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ロケール切り替え速度"
						}
					},
					"localeSwitchDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。"
						}
					}
				}
			},
			"blog": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ブログ"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18nコミュニティからのインサイト、チュートリアル、分析。"
						}
					}
				},
				"list": {
					"readMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "続きを読む →"
						}
					},
					"post1Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年のi18nライブラリ比較：ディープダイブ"
						}
					},
					"post1Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年3月15日"
						}
					},
					"post1Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。"
						}
					},
					"post1Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ベンチマーク"
						}
					},
					"post2Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18nバンドルを60%削減する方法"
						}
					},
					"post2Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年3月8日"
						}
					},
					"post2Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。"
						}
					},
					"post2Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "チュートリアル"
						}
					},
					"post3Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Reactにおける国際化の現状"
						}
					},
					"post3Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年2月28日"
						}
					},
					"post3Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。"
						}
					},
					"post3Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "分析"
						}
					},
					"post4Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "react-i18nextからLinguiへの移行"
						}
					},
					"post4Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年2月15日"
						}
					},
					"post4Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。"
						}
					},
					"post4Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "チュートリアル"
						}
					},
					"post5Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Server Componentsとi18n：何が変わるのか？"
						}
					},
					"post5Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年2月1日"
						}
					},
					"post5Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。"
						}
					},
					"post5Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "分析"
						}
					},
					"post6Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ベンチマーク手法：テスト方法について"
						}
					},
					"post6Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026年1月20日"
						}
					},
					"post6Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。"
						}
					},
					"post6Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "メタ"
						}
					}
				}
			},
			"careers": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "採用情報"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。"
						}
					}
				},
				"benefits": {
					"remoteLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "リモートファースト"
						}
					},
					"remoteValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "世界中のどこからでも仕事ができます"
						}
					},
					"payLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "競争力のある給与"
						}
					},
					"payValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "市場トップクラスの報酬"
						}
					},
					"ossLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "オープンソースの時間"
						}
					},
					"ossValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "時間の20%をOSSへの貢献に"
						}
					}
				},
				"openPositions": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "募集中の職種"
						}
					},
					"applyNow": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "今すぐ応募"
						}
					},
					"remote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "リモート"
						}
					},
					"fullTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "フルタイム"
						}
					},
					"partTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "パートタイム"
						}
					},
					"engineering": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "エンジニアリング"
						}
					},
					"documentation": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ドキュメンテーション"
						}
					},
					"community": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "コミュニティ"
						}
					},
					"sfRemote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "サンフランシスコ / リモート"
						}
					},
					"frontendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "シニアフロントエンドエンジニア"
						}
					},
					"frontendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。"
						}
					},
					"backendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "バックエンドエンジニア"
						}
					},
					"backendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。"
						}
					},
					"writerTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "テクニカルライター"
						}
					},
					"writerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。"
						}
					},
					"devrelTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "DevRelエンジニア"
						}
					},
					"devrelDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。"
						}
					},
					"qaTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "QAエンジニア"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。"
						}
					}
				}
			},
			"contact": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "お問い合わせ"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください："
						}
					}
				},
				"form": {
					"name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "名前"
						}
					},
					"yourName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "お名前"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "メールアドレス"
						}
					},
					"emailPlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "you@example.com"
						}
					},
					"topic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "トピック"
						}
					},
					"bugReport": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "バグ報告"
						}
					},
					"newBenchmarkIdea": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "新しいベンチマークのアイデア"
						}
					},
					"methodologyQuestion": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "手法に関する質問"
						}
					},
					"contribution": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "貢献"
						}
					},
					"other": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "その他"
						}
					},
					"message": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "メッセージ"
						}
					},
					"messagePlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ご質問やアイデアを記入してください..."
						}
					},
					"sendMessage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "メッセージを送信"
						}
					}
				}
			},
			"faq": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "よくある質問"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmarkについて知っておくべきすべてのこと。"
						}
					}
				},
				"list": {
					"q1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmarkとは何ですか？"
						}
					},
					"a1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。"
						}
					},
					"q2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ベンチマークはどのように実施されますか？"
						}
					},
					"a2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。"
						}
					},
					"q3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "現在サポートされているライブラリは何ですか？"
						}
					},
					"a3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。"
						}
					},
					"q4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "自分のベンチマークを投稿できますか？"
						}
					},
					"a4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。"
						}
					},
					"q5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ベンチマークはどのくらいの頻度で更新されますか？"
						}
					},
					"a5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。"
						}
					},
					"q6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "データは信頼できますか？"
						}
					},
					"a6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。"
						}
					},
					"q7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "コンサルティングサービスは提供していますか？"
						}
					},
					"a7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。"
						}
					},
					"q8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "どのように貢献できますか？"
						}
					},
					"a8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。"
						}
					}
				}
			},
			"pricing": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "シンプルで透明性の高い価格設定"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "チームに合ったプランをお選びください。隠れた費用はありません。"
						}
					}
				},
				"tiers": {
					"starterName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "スターター"
						}
					},
					"starterPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "0円"
						}
					},
					"starterPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ずっと無料"
						}
					},
					"starterFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "1日あたり5回のベンチマーク実行"
						}
					},
					"starterFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "3ライブラリ"
						}
					},
					"starterFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "コミュニティサポート"
						}
					},
					"starterFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "公開結果"
						}
					},
					"proName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "プロ"
						}
					},
					"proPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29ドル"
						}
					},
					"proPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "/月"
						}
					},
					"proFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "無制限の実行"
						}
					},
					"proFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "すべてのライブラリ"
						}
					},
					"proFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "優先サポート"
						}
					},
					"proFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "非公開の結果"
						}
					},
					"proFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "CI統合"
						}
					},
					"proFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "履歴データ"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "エンタープライズ"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "カスタム"
						}
					},
					"enterpriseFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Proプランのすべてを含む"
						}
					},
					"enterpriseFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "オンプレミスオプション"
						}
					},
					"enterpriseFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO & SAML"
						}
					},
					"enterpriseFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "専任のアカウントマネージャー"
						}
					},
					"enterpriseFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "カスタムSLA"
						}
					},
					"enterpriseFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "監査ログ"
						}
					},
					"enterpriseFeature7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "トレーニングセッション"
						}
					},
					"contactSales": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "営業に問い合わせる"
						}
					},
					"getStarted": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "始める"
						}
					}
				}
			},
			"products": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "製品"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "国際化ワークフローを効率化するためのツールとサービス。"
						}
					}
				},
				"grid": {
					"learnMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "詳細はこちら"
						}
					},
					"cliName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark CLI"
						}
					},
					"cliDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。"
						}
					},
					"cliPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "無料"
						}
					},
					"cloudName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Cloud"
						}
					},
					"cloudDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。"
						}
					},
					"cloudPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29ドル/月"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Enterprise"
						}
					},
					"enterpriseDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "お問い合わせ"
						}
					},
					"migrationName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "移行アシスタント"
						}
					},
					"migrationDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。"
						}
					},
					"migrationPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "99ドル（一回限り）"
						}
					},
					"qaName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "翻訳QA"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。"
						}
					},
					"qaPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "19ドル/月"
						}
					},
					"optimizerName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "バンドルオプティマイザー"
						}
					},
					"optimizerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。"
						}
					},
					"optimizerPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "49ドル/月"
						}
					}
				}
			},
			"settings": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "設定"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "アカウント設定と構成を管理します。"
						}
					}
				},
				"profile": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "プロフィール"
						}
					},
					"displayName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "表示名"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "メールアドレス"
						}
					}
				},
				"preferences": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "設定"
						}
					},
					"emailNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "メール通知"
						}
					},
					"weeklyReports": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "毎週のベンチマークレポートを受け取る"
						}
					},
					"toggleNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "通知の切り替え"
						}
					},
					"darkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ダークモード"
						}
					},
					"darkColorScheme": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ダークカラー（暗い配色）を使用する"
						}
					},
					"toggleDarkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ダークモードの切り替え"
						}
					},
					"defaultLanguage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "デフォルトの言語"
						}
					},
					"english": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "英語 (en)"
						}
					},
					"french": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "フランス語 (fr)"
						}
					},
					"german": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ドイツ語 (de)"
						}
					},
					"spanish": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "スペイン語 (es)"
						}
					},
					"japanese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "日本語 (ja)"
						}
					},
					"chinese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "中国語（簡体字） (zh-CN)"
						}
					},
					"arabic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "アラビア語 (ar)"
						}
					}
				},
				"apiAccess": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "APIアクセス"
						}
					},
					"apiKey": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "APIキー"
						}
					},
					"copy": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "コピー"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "このキーを使用して、プログラムでベンチマークAPIにアクセスします。"
						}
					}
				},
				"footer": {
					"cancel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "キャンセル"
						}
					},
					"saveChanges": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "変更を保存"
						}
					}
				}
			},
			"team": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "私たちのチーム"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。"
						}
					}
				},
				"grid": {
					"member1Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sarah Chen"
						}
					},
					"member1Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "創設者 & リードエンジニア"
						}
					},
					"member1Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。"
						}
					},
					"member2Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Marcus Weber"
						}
					},
					"member2Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "パフォーマンスエンジニア"
						}
					},
					"member2Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。"
						}
					},
					"member3Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Aisha Patel"
						}
					},
					"member3Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Developer Advocate"
						}
					},
					"member3Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。"
						}
					},
					"member4Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tomás Rodríguez"
						}
					},
					"member4Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "フルスタックデベロッパー"
						}
					},
					"member4Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。"
						}
					},
					"member5Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yuki Tanaka"
						}
					},
					"member5Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "データアナリスト"
						}
					},
					"member5Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。"
						}
					},
					"member6Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Elena Kowalski"
						}
					},
					"member6Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "コミュニティマネージャー"
						}
					},
					"member6Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。"
						}
					}
				}
			},
			"notFound": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "404"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "おっと！ページが見つかりません"
					}
				},
				"returnHome": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "ホームに戻る"
					}
				}
			}
		},
		ko: {
			"shared": {
				"appName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Bench"
					}
				},
				"siteName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"contactEmail": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{ "t": 3 },
							{ "t": 9 },
							{ "t": 3 }
						],
						"s": "contact@intlayer.org"
					}
				},
				"goToGithub": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHub로 이동"
					}
				}
			},
			"header": {
				"home": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "홈"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "방법론"
					}
				},
				"mockPages": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "모의 페이지"
					}
				},
				"products": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "제품"
					}
				},
				"pricing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "가격"
					}
				},
				"team": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "팀"
					}
				},
				"blog": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "블로그"
					}
				},
				"careers": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "채용"
					}
				},
				"faq": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "FAQ"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "문의"
					}
				},
				"settings": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "설정"
					}
				}
			},
			"footer": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "국제화 라이브러리가 번들 크기, 로딩 시간, 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈소스 테스트 애플리케이션입니다."
					}
				},
				"resources": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "리소스"
					}
				},
				"github": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHub"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "방법론"
					}
				},
				"contributing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "기여"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "문의"
					}
				},
				"builtWith": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark — 오픈소스 프로젝트. Vue, Vite 및 클라이언트 사이드 라우터로 제작되었습니다."
					}
				}
			},
			"themeToggle": {
				"auto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "테마: 자동"
					}
				},
				"dark": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "테마: 다크"
					}
				},
				"light": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "테마: 라이트"
					}
				},
				"labelAuto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "테마 모드: 자동(시스템). 클릭하면 라이트 모드로 전환됩니다."
					}
				},
				"labelOther": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{
								"t": 3,
								"v": "테마 모드: "
							},
							{
								"t": 4,
								"k": "mode"
							},
							{
								"t": 3,
								"v": ". 클릭하여 모드를 전환합니다."
							}
						]
					}
				}
			},
			"mockBanner": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함합니다. 실제 사업이나 서비스와는 관련이 없습니다."
				}
			},
			"home": {
				"hero": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "국제화 라이브러리가 번들 크기, 로딩 성능, 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다."
						}
					},
					"viewResults": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "결과 보기"
						}
					},
					"methodology": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "방법론"
						}
					}
				},
				"whyItMatters": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이 지표가 중요한 이유"
						}
					},
					"bundleSizeTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "번들 크기"
						}
					},
					"bundleSizeDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "번들은 전 세계 모든 사용자에게 전달되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔한 느린 3G 환경에서 그렇습니다. i18n 라이브러리는 몇 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일까지 무게가 크게 다릅니다."
						}
					},
					"renderingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "렌더링 및 하이드레이션"
						}
					},
					"renderingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "큰 JSON 사전을 모든 컴포넌트에 연결하면 숨겨진 의존성이 생깁니다. 번역 컨텍스트가 바뀌면 트리 전체가 다시 그려질 수 있습니다. SSR 하이드레이션 중에는 방대한 번역 객체를 파싱하고 붙이는 데 지연이 생겨, 페이지가 인터랙티브해지기 전까지 시간이 길어지며 Time to Interactive(TTI)에 직접 영향을 줍니다."
						}
					},
					"dynamicLoadingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "동적 로딩"
						}
					},
					"dynamicLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "모든 번역을 미리 불러오면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 번역을 라우트나 네임스페이스별로 나누어 현재 페이지에 필요한 것만 보냅니다. 다만 지연 로딩에는 워터폴 요청, 번역되지 않은 콘텐츠의 깜빡임, 캐시 복잡성 같은 트레이드오프가 따릅니다. 두 전략을 모두 측정하는 것이 중요합니다."
						}
					}
				},
				"understandingImpact": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "영향 이해하기"
						}
					},
					"singleJsonTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "하나의 큰 JSON이 성능을 해치는 이유"
						}
					},
					"singleJsonIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "많은 i18n 라이브러리는 React 컨텍스트로 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 매우 크면(수천 개의 키) 번역을 쓰는 모든 컴포넌트가 전체 사전을 참조하게 됩니다. 즉:"
						}
					},
					"singleJsonBullet1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "페이지를 불러올 때마다 JSON을 파싱해야 하며 메인 스레드를 막습니다."
						}
					},
					"singleJsonBullet2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "컨텍스트 기반 아키텍처에서는 로케일이 바뀔 때 특정 키가 바뀌지 않아도 모든 소비자에게 알림이 가며 연쇄 재렌더링이 일어날 수 있습니다."
						}
					},
					"singleJsonBullet3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "서버 사이드 렌더링에서는 전체 사전이 HTML 페이로드에 직렬화되어 다운로드·하이드레이션해야 할 문서 크기가 커집니다."
						}
					},
					"tradeOffsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "동적 로딩의 트레이드오프"
						}
					},
					"tradeOffsIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "번역을 라우트별 또는 네임스페이스별 청크로 나누면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제도 생깁니다:"
						}
					},
					"waterfallLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "워터폴 요청:"
						}
					},
					"waterfallDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "앱이 먼저 로드되고 로케일을 결정한 뒤 올바른 청크를 가져와야 하며, 네트워크 왕복이 추가됩니다."
						}
					},
					"foucLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "번역되지 않은 콘텐츠의 깜빡임(FOUC):"
						}
					},
					"foucDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "청크가 도착하기 전에 사용자가 번역 키나 대체 언어를 잠깐 볼 수 있습니다."
						}
					},
					"cacheLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "캐시 무효화:"
						}
					},
					"cacheDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "번역을 갱신하려면 사용자가 바뀌지 않은 청크를 다시 받지 않고도 최신 콘텐츠를 받도록 캐시 무효화 전략이 필요합니다."
						}
					},
					"measuresTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이 벤치마크가 측정하는 것"
						}
					},
					"measuresDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이 테스트 앱은 현실적인 콘텐츠가 있는 10개 페이지라는 통제된 환경에서, JavaScript 번들에 더해지는 무게, 번역 콘텐츠 파싱·렌더링에 쓰이는 시간, 코드 분할과 지연 로딩 전략의 효과라는 세 축으로 i18n 라이브러리를 비교합니다. 각 라이브러리는 동일한 앱에 통합되어 있어 결과를 직접 비교할 수 있습니다."
						}
					}
				},
				"resultsTable": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "샘플 결과"
						}
					},
					"library": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "라이브러리"
						}
					},
					"bundleSize": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "번들 크기"
						}
					},
					"lookupTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "조회 시간"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "지연 로딩"
						}
					},
					"yes": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "예"
						}
					},
					"manual": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "수동"
						}
					},
					"builtIn": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "내장"
						}
					}
				}
			},
			"about": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이 벤치마크에 대해"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이것은 오픈소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 목적은 서로 다른 i18n 라이브러리를 동일한 조건에서 통합·측정할 수 있도록 현실적인 다중 페이지 React 앱을 제공하는 것뿐입니다."
						}
					}
				},
				"grid": {
					"whyExistsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "존재 이유"
						}
					},
					"whyExistsDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n 라이브러리 선택은 장기적인 영향을 미치는 아키텍처 결정입니다. 대부분의 비교는 API 사용성에 초점을 맞추지만, 성능 비용을 측정하는 경우는 적습니다. 라이브러리가 번들에 얼마나 무게를 더하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 주는가? 지연 로딩이 실제로 도움이 되는가, 아니면 비용만 옮기는가? 이 벤치마크는 이런 질문에 실제 데이터로 답합니다."
						}
					},
					"methodologyTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "방법론"
						}
					},
					"methodologyDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "동일한 10페이지 앱을 라이브러리마다 한 번씩 구축합니다. 프로덕션 번들(rollup-plugin-visualizer)을 측정하고, 로딩 지표에 대해 Lighthouse를 실행하며, 로케일 전환 시 렌더 시간을 React Profiler로 기록합니다. 모든 테스트는 재현 가능한 결과를 위해 일관된 하드웨어에서 CI로 실행됩니다."
						}
					}
				},
				"whatWeMeasure": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "측정 항목"
						}
					},
					"bundleSizeImpact": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "번들 크기 영향"
						}
					},
					"bundleSizeImpactDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 느린 네트워크에서 다운로드 시간에 직접 영향을 줍니다."
						}
					},
					"renderingOverhead": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "렌더링 오버헤드"
						}
					},
					"renderingOverheadDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "라이브러리가 React 렌더 사이클에 더하는 추가 시간입니다. 단일 컨텍스트 프로바이더로 번역을 주입하는 라이브러리는 컴포넌트 트리 전반에 불필요한 재렌더를 유발할 수 있습니다."
						}
					},
					"hydrationCost": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "하이드레이션 비용"
						}
					},
					"hydrationCostDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSR 중 번역 데이터는 HTML에 직렬화됩니다. 큰 사전은 HTML 페이로드를 키우고 페이지가 인터랙티브해지는 순간인 하이드레이션을 늦춥니다."
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "지연 로딩 효과"
						}
					},
					"lazyLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "라우트나 네임스페이스별로 번역을 나누는 것이 실제로 초기 부하를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 가져오는지입니다."
						}
					},
					"localeSwitch": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "로케일 전환 속도"
						}
					},
					"localeSwitchDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "실행 중에 한 언어에서 다른 언어로 얼마나 빨리 바꿀 수 있는지 — 새 번역 가져오기, 컴포넌트 재렌더, DOM 업데이트를 포함합니다."
						}
					}
				}
			},
			"blog": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "블로그"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n 커뮤니티의 인사이트, 튜토리얼, 분석."
						}
					}
				},
				"list": {
					"readMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "더 읽기 →"
						}
					},
					"post1Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026년 i18n 라이브러리 비교: 심층 분석"
						}
					},
					"post1Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026년 3월 15일"
						}
					},
					"post1Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "성능, 번들 크기, DX를 놓고 12개 국제화 라이브러리를 테스트했습니다. 놀라운 결과를 소개합니다."
						}
					},
					"post1Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "벤치마크"
						}
					},
					"post2Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n 번들을 60% 줄이는 방법"
						}
					},
					"post2Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026년 3월 8일"
						}
					},
					"post2Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "지연 로딩, 코드 분할, 컴파일 타임 최적화를 포함한 번역 번들 최적화 실전 전략."
						}
					},
					"post2Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "튜토리얼"
						}
					},
					"post3Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React에서 국제화의 현주소"
						}
					},
					"post3Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026년 2월 28일"
						}
					},
					"post3Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "트렌드, 신흥 패턴, 커뮤니티 선호를 다루는 React i18n 생태계 개요."
						}
					},
					"post3Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "분석"
						}
					},
					"post4Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "react-i18next에서 Lingui로 마이그레이션"
						}
					},
					"post4Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026년 2월 15일"
						}
					},
					"post4Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "5만 개의 번역 키를 가진 프로덕션 앱을 react-i18next에서 Lingui로 옮기는 단계별 가이드."
						}
					},
					"post4Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "튜토리얼"
						}
					},
					"post5Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Server Components와 i18n: 무엇이 달라지나"
						}
					},
					"post5Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026년 2월 1일"
						}
					},
					"post5Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React Server Components가 국제화에 가져오는 새 패턴과 그 함의, 모범 사례를 살펴봅니다."
						}
					},
					"post5Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "분석"
						}
					},
					"post6Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "벤치마크 방법론: 테스트 방식"
						}
					},
					"post6Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "2026년 1월 20일"
						}
					},
					"post6Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "테스트 환경, 통계 방법, 재현성을 포함한 벤치마크 방법을 투명하게 공개합니다."
						}
					},
					"post6Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "메타"
						}
					}
				}
			},
			"careers": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "채용"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "국제화 생태계를 개선하겠다는 우리의 미션에 합류하세요. 영향력, 투명성, 지속적 학습을 중시하는 원격 우선 팀입니다."
						}
					}
				},
				"benefits": {
					"remoteLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "원격 우선"
						}
					},
					"remoteValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "전 세계 어디서나 근무"
						}
					},
					"payLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "경쟁력 있는 보상"
						}
					},
					"payValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "시장 상위 수준의 급여"
						}
					},
					"ossLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "오픈소스 시간"
						}
					},
					"ossValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "시간의 20%를 OSS 기여에"
						}
					}
				},
				"openPositions": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "채용 중인 포지션"
						}
					},
					"applyNow": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "지원하기"
						}
					},
					"remote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "원격"
						}
					},
					"fullTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "정규"
						}
					},
					"partTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "파트타임"
						}
					},
					"engineering": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "엔지니어링"
						}
					},
					"documentation": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "문서"
						}
					},
					"community": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "커뮤니티"
						}
					},
					"sfRemote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "샌프란시스코 / 원격"
						}
					},
					"frontendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "시니어 프론트엔드 엔지니어"
						}
					},
					"frontendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React, TypeScript, Vite로 벤치마크 대시보드와 개발자 도구를 구축·유지합니다."
						}
					},
					"backendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "백엔드 엔지니어"
						}
					},
					"backendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마크 인프라를 설계·확장합니다."
						}
					},
					"writerTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "기술 작가"
						}
					},
					"writerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "벤치마크 플랫폼을 위한 가이드, API 참조, 튜토리얼을 작성합니다."
						}
					},
					"devrelTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "DevRel 엔지니어"
						}
					},
					"devrelDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "강연, 워크숍, 블로그, 오픈소스 기여를 통해 i18n 커뮤니티와 소통합니다."
						}
					},
					"qaTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "QA 엔지니어"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "엄격한 테스트와 검증으로 벤치마크 결과의 정확성과 신뢰성을 보장합니다."
						}
					}
				}
			},
			"contact": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "문의하기"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "아이디어가 있거나 버그를 찾았거나 벤치마크에 기여하고 싶으신가요? 다음으로 연락 주세요"
						}
					}
				},
				"form": {
					"name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이름"
						}
					},
					"yourName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이름을 입력하세요"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이메일"
						}
					},
					"emailPlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "you@example.com"
						}
					},
					"topic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "주제"
						}
					},
					"bugReport": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "버그 신고"
						}
					},
					"newBenchmarkIdea": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "새 벤치마크 아이디어"
						}
					},
					"methodologyQuestion": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "방법론 질문"
						}
					},
					"contribution": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "기여"
						}
					},
					"other": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "기타"
						}
					},
					"message": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "메시지"
						}
					},
					"messagePlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "질문이나 아이디어를 적어 주세요..."
						}
					},
					"sendMessage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "메시지 보내기"
						}
					}
				}
			},
			"faq": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "자주 묻는 질문"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark에 대해 알아야 할 모든 것."
						}
					}
				},
				"list": {
					"q1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark란 무엇인가요?"
						}
					},
					"a1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기, 개발자 경험을 측정·비교하는 오픈소스 벤치마크 스위트입니다."
						}
					},
					"q2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "벤치마크는 어떻게 진행되나요?"
						}
					},
					"a2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "일관된 하드웨어로 격리된 환경에서 표준화된 테스트를 실행합니다. 통계적 유의성을 위해 각 벤치마크는 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다."
						}
					},
					"q3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "현재 지원되는 라이브러리는 무엇인가요?"
						}
					},
					"a3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee를 지원합니다."
						}
					},
					"q4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "직접 벤치마크를 제출할 수 있나요?"
						}
					},
					"a4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "네, 커뮤니티 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 뒤 풀 리퀘스트를 보내 주세요. 팀이 검토하여 조건을 충족하면 병합합니다."
						}
					},
					"q5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "벤치마크는 얼마나 자주 갱신되나요?"
						}
					},
					"a5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "각 라이브러리의 최신 안정 버전을 대상으로 매주 모든 벤치마크를 다시 실행합니다. 메이저 버전 출시 시에는 즉시 재벤치마크 사이클을 돌립니다."
						}
					},
					"q6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "데이터는 신뢰할 수 있나요?"
						}
					},
					"a6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "웜업 실행, 이상치 제거, 신뢰 구간을 포함한 엄격한 통계 방법을 따릅니다. 완전한 투명성을 위해 모든 원시 데이터를 분석과 함께 공개합니다."
						}
					},
					"q7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "컨설팅 서비스를 제공하나요?"
						}
					},
					"a7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "네. Enterprise 플랜에는 i18n 솔루션을 검토하는 팀을 위한 컨설팅 시간이 포함됩니다. 사용 사례, 규모, 제약에 맞춘 권장 사항을 드릴 수 있습니다."
						}
					},
					"q8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "어떻게 기여할 수 있나요?"
						}
					},
					"a8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "벤치마크 제출, 문서 개선, 버그 신고, 새 지표 제안, 프로젝트 후원 등 다양한 방법이 있습니다. 자세한 내용은 GitHub 저장소를 참고하세요."
						}
					}
				}
			},
			"pricing": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "단순하고 투명한 가격"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "팀에 맞는 플랜을 선택하세요. 숨겨진 요금은 없습니다."
						}
					}
				},
				"tiers": {
					"starterName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "스타터"
						}
					},
					"starterPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$0"
						}
					},
					"starterPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "영구 무료"
						}
					},
					"starterFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "하루 5회 벤치마크 실행"
						}
					},
					"starterFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "3개 라이브러리"
						}
					},
					"starterFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "커뮤니티 지원"
						}
					},
					"starterFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "공개 결과"
						}
					},
					"proName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pro"
						}
					},
					"proPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$29"
						}
					},
					"proPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "/월"
						}
					},
					"proFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "무제한 실행"
						}
					},
					"proFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "모든 라이브러리"
						}
					},
					"proFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "우선 지원"
						}
					},
					"proFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "비공개 결과"
						}
					},
					"proFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "CI 연동"
						}
					},
					"proFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "과거 데이터"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "엔터프라이즈"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "맞춤"
						}
					},
					"enterpriseFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pro의 모든 것"
						}
					},
					"enterpriseFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "온프레미스 옵션"
						}
					},
					"enterpriseFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO 및 SAML"
						}
					},
					"enterpriseFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "전담 계정 매니저"
						}
					},
					"enterpriseFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "맞춤 SLA"
						}
					},
					"enterpriseFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "감사 로그"
						}
					},
					"enterpriseFeature7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "교육 세션"
						}
					},
					"contactSales": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "영업 문의"
						}
					},
					"getStarted": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "시작하기"
						}
					}
				}
			},
			"products": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "제품"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "국제화 워크플로를 간소화하는 도구와 서비스."
						}
					}
				},
				"grid": {
					"learnMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "자세히 보기"
						}
					},
					"cliName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark CLI"
						}
					},
					"cliDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "터미널에서 로컬로 벤치마크를 실행합니다. 사용자 정의 구성과 CI 연동을 지원합니다."
						}
					},
					"cliPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "무료"
						}
					},
					"cloudName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Cloud"
						}
					},
					"cloudDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이력 추적, 알림, 팀 대시보드가 있는 자동화 클라우드 벤치마크."
						}
					},
					"cloudPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$29/월"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Enterprise"
						}
					},
					"enterpriseDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO, 감사 로그, 맞춤 SLA, 전담 지원이 있는 온프레미스 배포."
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "문의"
						}
					},
					"migrationName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "마이그레이션 어시스턴트"
						}
					},
					"migrationDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "다운타임 없이 i18n 라이브러리 간 코드베이스 이전을 돕는 AI 기반 도구."
						}
					},
					"migrationPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$99 일회성"
						}
					},
					"qaName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "번역 QA"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "누락된 번역, 복수형 문제, 맥락 오류에 대한 자동 품질 검사."
						}
					},
					"qaPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$19/월"
						}
					},
					"optimizerName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "번들 옵티마이저"
						}
					},
					"optimizerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "트리 쉐이킹과 코드 분할로 프로덕션용 i18n 번들을 분석·최적화합니다."
						}
					},
					"optimizerPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "$49/월"
						}
					}
				}
			},
			"settings": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "설정"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "계정 기본 설정과 구성을 관리합니다."
						}
					}
				},
				"profile": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "프로필"
						}
					},
					"displayName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "표시 이름"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이메일"
						}
					}
				},
				"preferences": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "환경 설정"
						}
					},
					"emailNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이메일 알림"
						}
					},
					"weeklyReports": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "주간 벤치마크 리포트 받기"
						}
					},
					"toggleNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "알림 켜기/끄기"
						}
					},
					"darkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "다크 모드"
						}
					},
					"darkColorScheme": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "어두운 색 구성 사용"
						}
					},
					"toggleDarkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "다크 모드 전환"
						}
					},
					"defaultLanguage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "기본 언어"
						}
					},
					"english": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "영어 (en)"
						}
					},
					"french": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "프랑스어 (fr)"
						}
					},
					"german": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "독일어 (de)"
						}
					},
					"spanish": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "스페인어 (es)"
						}
					},
					"japanese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "일본어 (ja)"
						}
					},
					"chinese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "중국어 간체 (zh-CN)"
						}
					},
					"arabic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "아랍어 (ar)"
						}
					}
				},
				"apiAccess": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "API 액세스"
						}
					},
					"apiKey": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "API 키"
						}
					},
					"copy": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "복사"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "이 키를 사용하면 벤치마크 API를 프로그래밍 방식으로 호출할 수 있습니다."
						}
					}
				},
				"footer": {
					"cancel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "취소"
						}
					},
					"saveChanges": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "변경 저장"
						}
					}
				}
			},
			"team": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "팀"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark를 만드는 사람들을 소개합니다. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다."
						}
					}
				},
				"grid": {
					"member1Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Sarah Chen"
						}
					},
					"member1Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "창립자 · 리드 엔지니어"
						}
					},
					"member1Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "대규모 국제화 시스템 구축 경험 10년의 전 Google 엔지니어."
						}
					},
					"member2Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Marcus Weber"
						}
					},
					"member2Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "성능 엔지니어"
						}
					},
					"member2Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "JavaScript 성능 최적화와 벤치마크 방법론 전문. 이전 직장 Vercel."
						}
					},
					"member3Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Aisha Patel"
						}
					},
					"member3Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Developer Advocate"
						}
					},
					"member3Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "개발자 경험과 교육에 열정. React Conf, JSConf, i18nNext 연사."
						}
					},
					"member4Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Tomás Rodríguez"
						}
					},
					"member4Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "풀스택 개발자"
						}
					},
					"member4Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "벤치마크 인프라와 CI/CD 파이프라인을 유지합니다. Lingui 오픈소스 기여자."
						}
					},
					"member5Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Yuki Tanaka"
						}
					},
					"member5Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "데이터 분석가"
						}
					},
					"member5Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "모든 벤치마크 결과의 통계적 엄밀함을 담당. MIT 응용통계학 박사."
						}
					},
					"member6Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Elena Kowalski"
						}
					},
					"member6Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "커뮤니티 매니저"
						}
					},
					"member6Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "커뮤니티 기여, 파트너십, 이벤트를 담당. 오픈소스 거버넌스 배경."
						}
					}
				}
			},
			"notFound": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "404"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "페이지를 찾을 수 없습니다"
					}
				},
				"returnHome": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "홈으로 돌아가기"
					}
				}
			}
		},
		ru: {
			"shared": {
				"appName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Bench"
					}
				},
				"siteName": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"contactEmail": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{ "t": 3 },
							{ "t": 9 },
							{ "t": 3 }
						],
						"s": "contact@intlayer.org"
					}
				},
				"goToGithub": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Перейти на GitHub"
					}
				}
			},
			"header": {
				"home": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Главная"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Методология"
					}
				},
				"mockPages": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Тестовые страницы"
					}
				},
				"products": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Продукты"
					}
				},
				"pricing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Цены"
					}
				},
				"team": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Команда"
					}
				},
				"blog": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Блог"
					}
				},
				"careers": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Вакансии"
					}
				},
				"faq": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "FAQ"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Контакт"
					}
				},
				"settings": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Настройки"
					}
				}
			},
			"footer": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения."
					}
				},
				"resources": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Ресурсы"
					}
				},
				"github": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "GitHub"
					}
				},
				"methodology": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Методология"
					}
				},
				"contributing": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Участие в проекте"
					}
				},
				"contact": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Контакт"
					}
				},
				"builtWith": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера."
					}
				}
			},
			"themeToggle": {
				"auto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Тема: Авто"
					}
				},
				"dark": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Тема: Темная"
					}
				},
				"light": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Тема: Светлая"
					}
				},
				"labelAuto": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему."
					}
				},
				"labelOther": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [
							{
								"t": 3,
								"v": "Режим темы: "
							},
							{
								"t": 4,
								"k": "mode"
							},
							{
								"t": 3,
								"v": ". Нажмите, чтобы сменить режим."
							}
						]
					}
				}
			},
			"mockBanner": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом."
				}
			},
			"home": {
				"hero": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга."
						}
					},
					"viewResults": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Посмотреть результаты"
						}
					},
					"methodology": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Методология"
						}
					}
				},
				"whyItMatters": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Почему эти метрики важны"
						}
					},
					"bundleSizeTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Размер бандла"
						}
					},
					"bundleSizeDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов."
						}
					},
					"renderingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Рендеринг и гидратация"
						}
					},
					"renderingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI)."
						}
					},
					"dynamicLoadingTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Динамическая загрузка"
						}
					},
					"dynamicLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии."
						}
					}
				},
				"understandingImpact": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Понимание влияния"
						}
					},
					"singleJsonTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Почему один большой JSON может снизить производительность"
						}
					},
					"singleJsonIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:"
						}
					},
					"singleJsonBullet1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "JSON должен парситься при каждой загрузке страницы, что блокирует основной поток."
						}
					},
					"singleJsonBullet2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились."
						}
					},
					"singleJsonBullet3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать."
						}
					},
					"tradeOffsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Компромиссы динамической загрузки"
						}
					},
					"tradeOffsIntro": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:"
						}
					},
					"waterfallLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Каскадные запросы:"
						}
					},
					"waterfallDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки."
						}
					},
					"foucLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Мерцание непереведенного контента (FOUC):"
						}
					},
					"foucDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части."
						}
					},
					"cacheLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Инвалидация кэша:"
						}
					},
					"cacheDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей."
						}
					},
					"measuresTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Что измеряет этот бенчмарк"
						}
					},
					"measuresDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы."
						}
					}
				},
				"resultsTable": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Примеры результатов"
						}
					},
					"library": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Библиотека"
						}
					},
					"bundleSize": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Размер бандла"
						}
					},
					"lookupTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Время поиска"
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ленивая загрузка"
						}
					},
					"yes": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Да"
						}
					},
					"manual": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Вручную"
						}
					},
					"builtIn": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Встроено"
						}
					}
				}
			},
			"about": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Об этом бенчмарке"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях."
						}
					}
				},
				"grid": {
					"whyExistsTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Зачем это нужно"
						}
					},
					"whyExistsDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных."
						}
					},
					"methodologyTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Методология"
						}
					},
					"methodologyDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов."
						}
					}
				},
				"whatWeMeasure": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Что мы измеряем"
						}
					},
					"bundleSizeImpact": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Влияние на размер бандла"
						}
					},
					"bundleSizeImpactDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях."
						}
					},
					"renderingOverhead": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Накладные расходы на рендеринг"
						}
					},
					"renderingOverheadDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов."
						}
					},
					"hydrationCost": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Стоимость гидратации"
						}
					},
					"hydrationCostDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной."
						}
					},
					"lazyLoading": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Эффективность ленивой загрузки"
						}
					},
					"lazyLoadingDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования)."
						}
					},
					"localeSwitch": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Скорость переключения языка"
						}
					},
					"localeSwitchDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM."
						}
					}
				}
			},
			"blog": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Блог"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Инсайты, туториалы и аналитика от сообщества i18n."
						}
					}
				},
				"list": {
					"readMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Читать далее →"
						}
					},
					"post1Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Сравнение библиотек i18n в 2026 году: глубокое погружение"
						}
					},
					"post1Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15 марта 2026 г."
						}
					},
					"post1Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты."
						}
					},
					"post1Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Бенчмарк"
						}
					},
					"post2Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Как уменьшить бандл i18n на 60%"
						}
					},
					"post2Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "8 марта 2026 г."
						}
					},
					"post2Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки."
						}
					},
					"post2Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Туториал"
						}
					},
					"post3Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Состояние интернационализации в React"
						}
					},
					"post3Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "28 февраля 2026 г."
						}
					},
					"post3Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества."
						}
					},
					"post3Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Анализ"
						}
					},
					"post4Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Миграция с react-i18next на Lingui"
						}
					},
					"post4Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "15 февраля 2026 г."
						}
					},
					"post4Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui."
						}
					},
					"post4Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Туториал"
						}
					},
					"post5Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Server Components и i18n: что меняется?"
						}
					},
					"post5Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "1 февраля 2026 г."
						}
					},
					"post5Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики."
						}
					},
					"post5Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Анализ"
						}
					},
					"post6Title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Методология бенчмарка: как мы тестируем"
						}
					},
					"post6Date": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20 января 2026 г."
						}
					},
					"post6Excerpt": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость."
						}
					},
					"post6Category": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Мета"
						}
					}
				}
			},
			"careers": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Вакансии"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение."
						}
					}
				},
				"benefits": {
					"remoteLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Удаленная работа"
						}
					},
					"remoteValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Работайте из любой точки мира"
						}
					},
					"payLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Конкурентная зарплата"
						}
					},
					"payValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Вознаграждение выше рыночного"
						}
					},
					"ossLabel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Время на open source"
						}
					},
					"ossValue": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "20% времени на вклад в OSS"
						}
					}
				},
				"openPositions": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Открытые вакансии"
						}
					},
					"applyNow": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Подать заявку"
						}
					},
					"remote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Удаленно"
						}
					},
					"fullTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Полная занятость"
						}
					},
					"partTime": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Частичная занятость"
						}
					},
					"engineering": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Разработка"
						}
					},
					"documentation": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Документация"
						}
					},
					"community": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Сообщество"
						}
					},
					"sfRemote": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Сан-Франциско / Удаленно"
						}
					},
					"frontendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Старший фронтенд-инженер"
						}
					},
					"frontendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite."
						}
					},
					"backendTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Бэкенд-инженер"
						}
					},
					"backendDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно."
						}
					},
					"writerTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Технический писатель"
						}
					},
					"writerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга."
						}
					},
					"devrelTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "DevRel-инженер"
						}
					},
					"devrelDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source."
						}
					},
					"qaTitle": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "QA-инженер"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации."
						}
					}
				}
			},
			"contact": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Связаться с нами"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу"
						}
					}
				},
				"form": {
					"name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Имя"
						}
					},
					"yourName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ваше имя"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Электронная почта"
						}
					},
					"emailPlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "you@example.com"
						}
					},
					"topic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Тема"
						}
					},
					"bugReport": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Отчет об ошибке"
						}
					},
					"newBenchmarkIdea": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Идея нового бенчмарка"
						}
					},
					"methodologyQuestion": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Вопрос по методологии"
						}
					},
					"contribution": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Вклад в проект"
						}
					},
					"other": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Другое"
						}
					},
					"message": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Сообщение"
						}
					},
					"messagePlaceholder": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Опишите ваш вопрос или идею..."
						}
					},
					"sendMessage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Отправить сообщение"
						}
					}
				}
			},
			"faq": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Часто задаваемые вопросы"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Все, что вам нужно знать об i18n Benchmark."
						}
					}
				},
				"list": {
					"q1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Что такое i18n Benchmark?"
						}
					},
					"a1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React."
						}
					},
					"q2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Как проводятся бенчмарки?"
						}
					},
					"a2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub."
						}
					},
					"q3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Какие библиотеки поддерживаются в данный момент?"
						}
					},
					"a3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [
								{ "t": 3 },
								{ "t": 9 },
								{ "t": 3 }
							],
							"s": "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee."
						}
					},
					"q4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Могу ли я прислать свои собственные бенчмарки?"
						}
					},
					"a4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки."
						}
					},
					"q5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Как часто обновляются бенчмарки?"
						}
					},
					"a5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования."
						}
					},
					"q6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Можно ли доверять данным?"
						}
					},
					"a6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности."
						}
					},
					"q7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Предоставляете ли вы консалтинговые услуги?"
						}
					},
					"a7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений."
						}
					},
					"q8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Как я могу помочь проекту?"
						}
					},
					"a8": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей."
						}
					}
				}
			},
			"pricing": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Простые и прозрачные цены"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Выберите подходящий план для вашей команды. Никаких скрытых комиссий."
						}
					}
				},
				"tiers": {
					"starterName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Starter"
						}
					},
					"starterPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "0 $"
						}
					},
					"starterPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "навсегда"
						}
					},
					"starterFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "5 запусков бенчмарка в день"
						}
					},
					"starterFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "3 библиотеки"
						}
					},
					"starterFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Поддержка сообщества"
						}
					},
					"starterFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Публичные результаты"
						}
					},
					"proName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Pro"
						}
					},
					"proPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $"
						}
					},
					"proPeriod": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "/мес"
						}
					},
					"proFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Неограниченное число запусков"
						}
					},
					"proFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Все библиотеки"
						}
					},
					"proFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Приоритетная поддержка"
						}
					},
					"proFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Приватные результаты"
						}
					},
					"proFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Интеграция с CI"
						}
					},
					"proFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Исторические данные"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Enterprise"
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Индивидуально"
						}
					},
					"enterpriseFeature1": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Все, что есть в Pro"
						}
					},
					"enterpriseFeature2": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Локальная установка"
						}
					},
					"enterpriseFeature3": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "SSO и SAML"
						}
					},
					"enterpriseFeature4": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Персональный менеджер"
						}
					},
					"enterpriseFeature5": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Индивидуальные SLA"
						}
					},
					"enterpriseFeature6": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Журналы аудита"
						}
					},
					"enterpriseFeature7": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Обучающие сессии"
						}
					},
					"contactSales": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Связаться с отделом продаж"
						}
					},
					"getStarted": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Начать работу"
						}
					}
				}
			},
			"products": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Продукты"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией."
						}
					}
				},
				"grid": {
					"learnMore": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Узнать больше"
						}
					},
					"cliName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark CLI"
						}
					},
					"cliDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI."
						}
					},
					"cliPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Бесплатно"
						}
					},
					"cloudName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Cloud"
						}
					},
					"cloudDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами."
						}
					},
					"cloudPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "29 $/мес"
						}
					},
					"enterpriseName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Benchmark Enterprise"
						}
					},
					"enterpriseDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой."
						}
					},
					"enterprisePrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Связаться с нами"
						}
					},
					"migrationName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Помощник по миграции"
						}
					},
					"migrationDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев."
						}
					},
					"migrationPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "99 $ (разово)"
						}
					},
					"qaName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "QA переводов"
						}
					},
					"qaDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок."
						}
					},
					"qaPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "19 $/мес"
						}
					},
					"optimizerName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Оптимизатор бандла"
						}
					},
					"optimizerDesc": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода."
						}
					},
					"optimizerPrice": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "49 $/мес"
						}
					}
				}
			},
			"settings": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Настройки"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Управляйте предпочтениями и конфигурацией вашей учетной записи."
						}
					}
				},
				"profile": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Профиль"
						}
					},
					"displayName": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Отображаемое имя"
						}
					},
					"email": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Электронная почта"
						}
					}
				},
				"preferences": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Предпочтения"
						}
					},
					"emailNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Уведомления по почте"
						}
					},
					"weeklyReports": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Получать еженедельные отчеты о бенчмарках"
						}
					},
					"toggleNotifications": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Переключить уведомления"
						}
					},
					"darkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Темная тема"
						}
					},
					"darkColorScheme": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Использовать темную цветовую схему"
						}
					},
					"toggleDarkMode": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Переключить темную тему"
						}
					},
					"defaultLanguage": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Язык по умолчанию"
						}
					},
					"english": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Английский (en)"
						}
					},
					"french": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Французский (fr)"
						}
					},
					"german": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Немецкий (de)"
						}
					},
					"spanish": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Испанский (es)"
						}
					},
					"japanese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Японский (ja)"
						}
					},
					"chinese": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Китайский упрощенный (zh-CN)"
						}
					},
					"arabic": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Арабский (ar)"
						}
					}
				},
				"apiAccess": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Доступ к API"
						}
					},
					"apiKey": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Ключ API"
						}
					},
					"copy": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Копировать"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Используйте этот ключ для программного доступа к API бенчмаркинга."
						}
					}
				},
				"footer": {
					"cancel": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Отмена"
						}
					},
					"saveChanges": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Сохранить изменения"
						}
					}
				}
			},
			"team": {
				"header": {
					"title": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Наша команда"
						}
					},
					"description": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков."
						}
					}
				},
				"grid": {
					"member1Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Сара Чен"
						}
					},
					"member1Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Основатель и ведущий инженер"
						}
					},
					"member1Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах."
						}
					},
					"member2Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Маркус Вебер"
						}
					},
					"member2Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Инженер по производительности"
						}
					},
					"member2Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel."
						}
					},
					"member3Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Айша Патель"
						}
					},
					"member3Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Developer Advocate"
						}
					},
					"member3Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext."
						}
					},
					"member4Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Томас Родригес"
						}
					},
					"member4Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Full-Stack разработчик"
						}
					},
					"member4Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui."
						}
					},
					"member5Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Юки Танака"
						}
					},
					"member5Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Аналитик данных"
						}
					},
					"member5Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT)."
						}
					},
					"member6Name": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Елена Ковальски"
						}
					},
					"member6Role": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Комьюнити-менеджер"
						}
					},
					"member6Bio": {
						"t": 0,
						"b": {
							"t": 2,
							"i": [{ "t": 3 }],
							"s": "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами."
						}
					}
				}
			},
			"notFound": {
				"title": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "404"
					}
				},
				"description": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Упс! Страница не найдена"
					}
				},
				"returnHome": {
					"t": 0,
					"b": {
						"t": 2,
						"i": [{ "t": 3 }],
						"s": "Вернуться на главную"
					}
				}
			}
		}
	}
});
var Wrapper_default = defineComponent({
	__name: "Wrapper",
	setup(__props) {
		const app = getCurrentInstance()?.appContext.app;
		if (app && !app.config.globalProperties.$i18n) app.use(i18n);
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default");
		};
	}
});
var WhatWeMeasure_wrapper_default = { render() {
	return h(Wrapper_default, {}, { default: () => h(WhatWeMeasure_default) });
} };
export { WhatWeMeasure_wrapper_default as default };

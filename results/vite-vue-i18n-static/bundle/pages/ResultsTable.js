import * as Vue from "vue";
import { Fragment, Text, computed, createElementBlock, createElementVNode, createVNode, defineComponent, effectScope, getCurrentInstance, getCurrentScope, h, inject, isRef, onBeforeMount, onMounted, onScopeDispose, onUnmounted, openBlock, ref, renderList, renderSlot, shallowRef, toDisplayString, watch } from "vue";
import fr from "../../../../locales/fr.json";
import es from "../../../../locales/es.json";
import de from "../../../../locales/de.json";
import it from "../../../../locales/it.json";
import pt from "../../../../locales/pt.json";
import zh from "../../../../locales/zh.json";
import ja from "../../../../locales/ja.json";
import ko from "../../../../locales/ko.json";
import ru from "../../../../locales/ru.json";
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
		if (onError) onError(createCompileError(code, location ? createLocation(ctx.startLoc, pos) : null, {
			domain: ERROR_DOMAIN$3,
			args
		}));
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
		if (ch === EOF) return EOF;
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
			else if (ch === CHAR_SP || ch === CHAR_LF) if (isTextStart(scnr)) {
				buf += ch;
				scnr.next();
			} else if (isPluralStart(scnr)) break;
			else {
				buf += ch;
				scnr.next();
			}
			else {
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
				break;
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
		if (onError) onError(createCompileError(code, location ? createLocation(start, end) : null, {
			domain: ERROR_DOMAIN$2,
			args
		}));
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
			break;
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
function initFeatureFlags$1() {}
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
	else if (isFunction(locale)) if (locale.resolvedOnce && _resolveLocale != null) return _resolveLocale;
	else if (locale.constructor.name === "Function") {
		const resolve = locale();
		if (isPromise(resolve)) throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
		return _resolveLocale = resolve;
	} else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
}
function fallbackWithSimple(ctx, fallback, start) {
	return [...new Set([start, ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]])];
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
initFeatureFlags$1();
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
function initFeatureFlags() {}
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
					if (componentInstance.__VUE_I18N__ && instanceData) if (i18n.mode === "legacy") {
						if (componentInstance.__VUE_I18N__ !== i18n.global.__composer) inspectComposer(instanceData, componentInstance.__VUE_I18N__);
					} else inspectComposer(instanceData, componentInstance.__VUE_I18N__);
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
			return h(isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag(), assignedAttrs, children);
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
		return h(isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag(), assignedAttrs, children);
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
initFeatureFlags();
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
var ResultsTable_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "ResultsTable",
	setup(__props, { expose: __expose }) {
		__expose();
		usePerformanceMeasure("ResultsTable");
		const { t } = useI18n();
		const __returned__ = {
			t,
			results: computed(() => [
				{
					lib: "react-i18next",
					size: "42.3 kB",
					time: "0.12ms",
					lazy: t("home.resultsTable.yes")
				},
				{
					lib: "react-intl",
					size: "38.1 kB",
					time: "0.15ms",
					lazy: t("home.resultsTable.manual")
				},
				{
					lib: "lingui",
					size: "12.8 kB",
					time: "0.08ms",
					lazy: t("home.resultsTable.yes")
				},
				{
					lib: "typesafe-i18n",
					size: "5.2 kB",
					time: "0.05ms",
					lazy: t("home.resultsTable.builtIn")
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
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = { class: "mb-6 text-2xl font-bold text-foreground" };
var _hoisted_2 = { class: "overflow-x-auto rounded-lg border border-border" };
var _hoisted_3 = { class: "w-full text-sm" };
var _hoisted_4 = { class: "bg-muted" };
var _hoisted_5 = { class: "px-4 py-3 text-left font-medium text-muted-foreground" };
var _hoisted_6 = { class: "px-4 py-3 text-left font-medium text-muted-foreground" };
var _hoisted_7 = { class: "px-4 py-3 text-left font-medium text-muted-foreground" };
var _hoisted_8 = { class: "px-4 py-3 text-left font-medium text-muted-foreground" };
var _hoisted_9 = { class: "px-4 py-3 font-medium text-foreground" };
var _hoisted_10 = { class: "px-4 py-3 text-muted-foreground" };
var _hoisted_11 = { class: "px-4 py-3 text-muted-foreground" };
var _hoisted_12 = { class: "px-4 py-3 text-muted-foreground" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("section", null, [createElementVNode("h2", _hoisted_1, toDisplayString($setup.t("home.resultsTable.title")), 1), createElementVNode("div", _hoisted_2, [createElementVNode("table", _hoisted_3, [createElementVNode("thead", _hoisted_4, [createElementVNode("tr", null, [
		createElementVNode("th", _hoisted_5, toDisplayString($setup.t("home.resultsTable.library")), 1),
		createElementVNode("th", _hoisted_6, toDisplayString($setup.t("home.resultsTable.bundleSize")), 1),
		createElementVNode("th", _hoisted_7, toDisplayString($setup.t("home.resultsTable.lookupTime")), 1),
		createElementVNode("th", _hoisted_8, toDisplayString($setup.t("home.resultsTable.lazyLoading")), 1)
	])]), createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.results, (r) => {
		return openBlock(), createElementBlock("tr", {
			key: r.lib,
			class: "border-t border-border"
		}, [
			createElementVNode("td", _hoisted_9, toDisplayString(r.lib), 1),
			createElementVNode("td", _hoisted_10, toDisplayString(r.size), 1),
			createElementVNode("td", _hoisted_11, toDisplayString(r.time), 1),
			createElementVNode("td", _hoisted_12, toDisplayString(r.lazy), 1)
		]);
	}), 128))])])])]);
}
var ResultsTable_default = _plugin_vue_export_helper_default(ResultsTable_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render$1], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-i18n-app/src/components/pages/home/ResultsTable.vue"]]);
var i18n = createI18n({
	legacy: false,
	locale: "en",
	fallbackLocale: "en",
	messages: {
		en: {
			"shared": {
				"appName": {
					"type": 0,
					"start": 0,
					"end": 10,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 11,
							"offset": 10
						},
						"source": "i18n Bench"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 10,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 11,
								"offset": 10
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 10,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 11,
									"offset": 10
								}
							}
						}],
						"static": "i18n Bench"
					}
				},
				"siteName": {
					"type": 0,
					"start": 0,
					"end": 14,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 15,
							"offset": 14
						},
						"source": "i18n Benchmark"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							}
						}],
						"static": "i18n Benchmark"
					}
				},
				"contactEmail": {
					"type": 0,
					"start": 0,
					"end": 24,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 25,
							"offset": 24
						},
						"source": "contact{'@'}intlayer.org"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 24,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 25,
								"offset": 24
							}
						},
						"items": [
							{
								"type": 3,
								"start": 0,
								"end": 7,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 8,
										"offset": 7
									}
								}
							},
							{
								"type": 9,
								"start": 7,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 8,
										"offset": 7
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							},
							{
								"type": 3,
								"start": 12,
								"end": 24,
								"loc": {
									"start": {
										"line": 1,
										"column": 13,
										"offset": 12
									},
									"end": {
										"line": 1,
										"column": 25,
										"offset": 24
									}
								}
							}
						],
						"static": "contact@intlayer.org"
					}
				},
				"goToGithub": {
					"type": 0,
					"start": 0,
					"end": 12,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 13,
							"offset": 12
						},
						"source": "Go to GitHub"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							}
						}],
						"static": "Go to GitHub"
					}
				}
			},
			"header": {
				"home": {
					"type": 0,
					"start": 0,
					"end": 4,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 5,
							"offset": 4
						},
						"source": "Home"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 4,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 5,
								"offset": 4
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 4,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 5,
									"offset": 4
								}
							}
						}],
						"static": "Home"
					}
				},
				"methodology": {
					"type": 0,
					"start": 0,
					"end": 11,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 12,
							"offset": 11
						},
						"source": "Methodology"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							}
						}],
						"static": "Methodology"
					}
				},
				"mockPages": {
					"type": 0,
					"start": 0,
					"end": 10,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 11,
							"offset": 10
						},
						"source": "Mock Pages"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 10,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 11,
								"offset": 10
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 10,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 11,
									"offset": 10
								}
							}
						}],
						"static": "Mock Pages"
					}
				},
				"products": {
					"type": 0,
					"start": 0,
					"end": 8,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 9,
							"offset": 8
						},
						"source": "Products"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 8,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 9,
								"offset": 8
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 8,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 9,
									"offset": 8
								}
							}
						}],
						"static": "Products"
					}
				},
				"pricing": {
					"type": 0,
					"start": 0,
					"end": 7,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 8,
							"offset": 7
						},
						"source": "Pricing"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 7,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 8,
								"offset": 7
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 7,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 8,
									"offset": 7
								}
							}
						}],
						"static": "Pricing"
					}
				},
				"team": {
					"type": 0,
					"start": 0,
					"end": 4,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 5,
							"offset": 4
						},
						"source": "Team"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 4,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 5,
								"offset": 4
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 4,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 5,
									"offset": 4
								}
							}
						}],
						"static": "Team"
					}
				},
				"blog": {
					"type": 0,
					"start": 0,
					"end": 4,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 5,
							"offset": 4
						},
						"source": "Blog"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 4,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 5,
								"offset": 4
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 4,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 5,
									"offset": 4
								}
							}
						}],
						"static": "Blog"
					}
				},
				"careers": {
					"type": 0,
					"start": 0,
					"end": 7,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 8,
							"offset": 7
						},
						"source": "Careers"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 7,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 8,
								"offset": 7
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 7,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 8,
									"offset": 7
								}
							}
						}],
						"static": "Careers"
					}
				},
				"faq": {
					"type": 0,
					"start": 0,
					"end": 3,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 4,
							"offset": 3
						},
						"source": "FAQ"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 3,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 4,
								"offset": 3
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 3,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 4,
									"offset": 3
								}
							}
						}],
						"static": "FAQ"
					}
				},
				"contact": {
					"type": 0,
					"start": 0,
					"end": 7,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 8,
							"offset": 7
						},
						"source": "Contact"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 7,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 8,
								"offset": 7
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 7,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 8,
									"offset": 7
								}
							}
						}],
						"static": "Contact"
					}
				},
				"settings": {
					"type": 0,
					"start": 0,
					"end": 8,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 9,
							"offset": 8
						},
						"source": "Settings"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 8,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 9,
								"offset": 8
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 8,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 9,
									"offset": 8
								}
							}
						}],
						"static": "Settings"
					}
				}
			},
			"footer": {
				"title": {
					"type": 0,
					"start": 0,
					"end": 14,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 15,
							"offset": 14
						},
						"source": "i18n Benchmark"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							}
						}],
						"static": "i18n Benchmark"
					}
				},
				"description": {
					"type": 0,
					"start": 0,
					"end": 151,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 152,
							"offset": 151
						},
						"source": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 151,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 152,
								"offset": 151
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 151,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 152,
									"offset": 151
								}
							}
						}],
						"static": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					}
				},
				"resources": {
					"type": 0,
					"start": 0,
					"end": 9,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 10,
							"offset": 9
						},
						"source": "Resources"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 9,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 10,
								"offset": 9
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 9,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 10,
									"offset": 9
								}
							}
						}],
						"static": "Resources"
					}
				},
				"github": {
					"type": 0,
					"start": 0,
					"end": 6,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 7,
							"offset": 6
						},
						"source": "GitHub"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 6,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 7,
								"offset": 6
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 6,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 7,
									"offset": 6
								}
							}
						}],
						"static": "GitHub"
					}
				},
				"methodology": {
					"type": 0,
					"start": 0,
					"end": 11,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 12,
							"offset": 11
						},
						"source": "Methodology"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							}
						}],
						"static": "Methodology"
					}
				},
				"contributing": {
					"type": 0,
					"start": 0,
					"end": 12,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 13,
							"offset": 12
						},
						"source": "Contributing"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							}
						}],
						"static": "Contributing"
					}
				},
				"contact": {
					"type": 0,
					"start": 0,
					"end": 7,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 8,
							"offset": 7
						},
						"source": "Contact"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 7,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 8,
								"offset": 7
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 7,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 8,
									"offset": 7
								}
							}
						}],
						"static": "Contact"
					}
				},
				"builtWith": {
					"type": 0,
					"start": 0,
					"end": 82,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 83,
							"offset": 82
						},
						"source": "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 82,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 83,
								"offset": 82
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 82,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 83,
									"offset": 82
								}
							}
						}],
						"static": "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
					}
				}
			},
			"themeToggle": {
				"auto": {
					"type": 0,
					"start": 0,
					"end": 11,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 12,
							"offset": 11
						},
						"source": "Theme: Auto"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							}
						}],
						"static": "Theme: Auto"
					}
				},
				"dark": {
					"type": 0,
					"start": 0,
					"end": 11,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 12,
							"offset": 11
						},
						"source": "Theme: Dark"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							}
						}],
						"static": "Theme: Dark"
					}
				},
				"light": {
					"type": 0,
					"start": 0,
					"end": 12,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 13,
							"offset": 12
						},
						"source": "Theme: Light"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							}
						}],
						"static": "Theme: Light"
					}
				},
				"labelAuto": {
					"type": 0,
					"start": 0,
					"end": 57,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 58,
							"offset": 57
						},
						"source": "Theme mode: auto (system). Click to switch to light mode."
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 57,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 58,
								"offset": 57
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 57,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 58,
									"offset": 57
								}
							}
						}],
						"static": "Theme mode: auto (system). Click to switch to light mode."
					}
				},
				"labelOther": {
					"type": 0,
					"start": 0,
					"end": 41,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 42,
							"offset": 41
						},
						"source": "Theme mode: {mode}. Click to switch mode."
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 41,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 42,
								"offset": 41
							}
						},
						"items": [
							{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								},
								"value": "Theme mode: "
							},
							{
								"type": 4,
								"start": 12,
								"end": 18,
								"loc": {
									"start": {
										"line": 1,
										"column": 13,
										"offset": 12
									},
									"end": {
										"line": 1,
										"column": 19,
										"offset": 18
									}
								},
								"key": "mode"
							},
							{
								"type": 3,
								"start": 18,
								"end": 41,
								"loc": {
									"start": {
										"line": 1,
										"column": 19,
										"offset": 18
									},
									"end": {
										"line": 1,
										"column": 42,
										"offset": 41
									}
								},
								"value": ". Click to switch mode."
							}
						]
					}
				}
			},
			"mockBanner": {
				"type": 0,
				"start": 0,
				"end": 114,
				"loc": {
					"start": {
						"line": 1,
						"column": 1,
						"offset": 0
					},
					"end": {
						"line": 1,
						"column": 115,
						"offset": 114
					},
					"source": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
				},
				"body": {
					"type": 2,
					"start": 0,
					"end": 114,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 115,
							"offset": 114
						}
					},
					"items": [{
						"type": 3,
						"start": 0,
						"end": 114,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 115,
								"offset": 114
							}
						}
					}],
					"static": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
				}
			},
			"home": {
				"hero": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							},
							"source": "i18n Benchmark"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 14,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 15,
										"offset": 14
									}
								}
							}],
							"static": "i18n Benchmark"
						}
					},
					"description": {
						"type": 0,
						"start": 0,
						"end": 157,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 158,
								"offset": 157
							},
							"source": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 157,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 158,
									"offset": 157
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 157,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 158,
										"offset": 157
									}
								}
							}],
							"static": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
						}
					},
					"viewResults": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "View Results"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "View Results"
						}
					},
					"methodology": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Methodology"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Methodology"
						}
					}
				},
				"whyItMatters": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 24,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 25,
								"offset": 24
							},
							"source": "Why These Metrics Matter"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 24,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 25,
									"offset": 24
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 24,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 25,
										"offset": 24
									}
								}
							}],
							"static": "Why These Metrics Matter"
						}
					},
					"bundleSizeTitle": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Bundle Size"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Bundle Size"
						}
					},
					"bundleSizeDesc": {
						"type": 0,
						"start": 0,
						"end": 314,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 315,
								"offset": 314
							},
							"source": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 314,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 315,
									"offset": 314
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 314,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 315,
										"offset": 314
									}
								}
							}],
							"static": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
						}
					},
					"renderingTitle": {
						"type": 0,
						"start": 0,
						"end": 21,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 22,
								"offset": 21
							},
							"source": "Rendering & Hydration"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 21,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 22,
									"offset": 21
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 21,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 22,
										"offset": 21
									}
								}
							}],
							"static": "Rendering & Hydration"
						}
					},
					"renderingDesc": {
						"type": 0,
						"start": 0,
						"end": 336,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 337,
								"offset": 336
							},
							"source": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 336,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 337,
									"offset": 336
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 336,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 337,
										"offset": 336
									}
								}
							}],
							"static": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
						}
					},
					"dynamicLoadingTitle": {
						"type": 0,
						"start": 0,
						"end": 15,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 16,
								"offset": 15
							},
							"source": "Dynamic Loading"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 15,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 16,
									"offset": 15
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 15,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 16,
										"offset": 15
									}
								}
							}],
							"static": "Dynamic Loading"
						}
					},
					"dynamicLoadingDesc": {
						"type": 0,
						"start": 0,
						"end": 339,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 340,
								"offset": 339
							},
							"source": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 339,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 340,
									"offset": 339
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 339,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 340,
										"offset": 339
									}
								}
							}],
							"static": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
						}
					}
				},
				"understandingImpact": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 24,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 25,
								"offset": 24
							},
							"source": "Understanding the Impact"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 24,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 25,
									"offset": 24
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 24,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 25,
										"offset": 24
									}
								}
							}],
							"static": "Understanding the Impact"
						}
					},
					"singleJsonTitle": {
						"type": 0,
						"start": 0,
						"end": 44,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 45,
								"offset": 44
							},
							"source": "Why a single large JSON can hurt performance"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 44,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 45,
									"offset": 44
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 44,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 45,
										"offset": 44
									}
								}
							}],
							"static": "Why a single large JSON can hurt performance"
						}
					},
					"singleJsonIntro": {
						"type": 0,
						"start": 0,
						"end": 236,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 237,
								"offset": 236
							},
							"source": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 236,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 237,
									"offset": 236
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 236,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 237,
										"offset": 236
									}
								}
							}],
							"static": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
						}
					},
					"singleJsonBullet1": {
						"type": 0,
						"start": 0,
						"end": 70,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 71,
								"offset": 70
							},
							"source": "The JSON must be parsed on every page load — blocking the main thread."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 70,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 71,
									"offset": 70
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 70,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 71,
										"offset": 70
									}
								}
							}],
							"static": "The JSON must be parsed on every page load — blocking the main thread."
						}
					},
					"singleJsonBullet2": {
						"type": 0,
						"start": 0,
						"end": 161,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 162,
								"offset": 161
							},
							"source": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 161,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 162,
									"offset": 161
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 161,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 162,
										"offset": 161
									}
								}
							}],
							"static": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change."
						}
					},
					"singleJsonBullet3": {
						"type": 0,
						"start": 0,
						"end": 153,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 154,
								"offset": 153
							},
							"source": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 153,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 154,
									"offset": 153
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 153,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 154,
										"offset": 153
									}
								}
							}],
							"static": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
						}
					},
					"tradeOffsTitle": {
						"type": 0,
						"start": 0,
						"end": 33,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 34,
								"offset": 33
							},
							"source": "The trade-offs of dynamic loading"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 33,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 34,
									"offset": 33
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 33,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 34,
										"offset": 33
									}
								}
							}],
							"static": "The trade-offs of dynamic loading"
						}
					},
					"tradeOffsIntro": {
						"type": 0,
						"start": 0,
						"end": 140,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 141,
								"offset": 140
							},
							"source": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 140,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 141,
									"offset": 140
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 140,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 141,
										"offset": 140
									}
								}
							}],
							"static": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
						}
					},
					"waterfallLabel": {
						"type": 0,
						"start": 0,
						"end": 19,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 20,
								"offset": 19
							},
							"source": "Waterfall requests:"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 19,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 20,
									"offset": 19
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 19,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 20,
										"offset": 19
									}
								}
							}],
							"static": "Waterfall requests:"
						}
					},
					"waterfallDesc": {
						"type": 0,
						"start": 0,
						"end": 103,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 104,
								"offset": 103
							},
							"source": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 103,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 104,
									"offset": 103
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 103,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 104,
										"offset": 103
									}
								}
							}],
							"static": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
						}
					},
					"foucLabel": {
						"type": 0,
						"start": 0,
						"end": 37,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 38,
								"offset": 37
							},
							"source": "Flash of untranslated content (FOUC):"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 37,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 38,
									"offset": 37
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 37,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 38,
										"offset": 37
									}
								}
							}],
							"static": "Flash of untranslated content (FOUC):"
						}
					},
					"foucDesc": {
						"type": 0,
						"start": 0,
						"end": 87,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 88,
								"offset": 87
							},
							"source": "users may briefly see translation keys or a fallback language before the chunk arrives."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 87,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 88,
									"offset": 87
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 87,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 88,
										"offset": 87
									}
								}
							}],
							"static": "users may briefly see translation keys or a fallback language before the chunk arrives."
						}
					},
					"cacheLabel": {
						"type": 0,
						"start": 0,
						"end": 19,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 20,
								"offset": 19
							},
							"source": "Cache invalidation:"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 19,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 20,
									"offset": 19
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 19,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 20,
										"offset": 19
									}
								}
							}],
							"static": "Cache invalidation:"
						}
					},
					"cacheDesc": {
						"type": 0,
						"start": 0,
						"end": 130,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 131,
								"offset": 130
							},
							"source": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 130,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 131,
									"offset": 130
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 130,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 131,
										"offset": 130
									}
								}
							}],
							"static": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
						}
					},
					"measuresTitle": {
						"type": 0,
						"start": 0,
						"end": 28,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 29,
								"offset": 28
							},
							"source": "What this benchmark measures"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 28,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 29,
									"offset": 28
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 28,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 29,
										"offset": 28
									}
								}
							}],
							"static": "What this benchmark measures"
						}
					},
					"measuresDesc": {
						"type": 0,
						"start": 0,
						"end": 388,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 389,
								"offset": 388
							},
							"source": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 388,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 389,
									"offset": 388
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 388,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 389,
										"offset": 388
									}
								}
							}],
							"static": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
						}
					}
				},
				"resultsTable": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							},
							"source": "Sample Results"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 14,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 15,
										"offset": 14
									}
								}
							}],
							"static": "Sample Results"
						}
					},
					"library": {
						"type": 0,
						"start": 0,
						"end": 7,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 8,
								"offset": 7
							},
							"source": "Library"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 7,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 8,
									"offset": 7
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 7,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 8,
										"offset": 7
									}
								}
							}],
							"static": "Library"
						}
					},
					"bundleSize": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Bundle Size"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Bundle Size"
						}
					},
					"lookupTime": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Lookup Time"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Lookup Time"
						}
					},
					"lazyLoading": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "Lazy Loading"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "Lazy Loading"
						}
					},
					"yes": {
						"type": 0,
						"start": 0,
						"end": 3,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 4,
								"offset": 3
							},
							"source": "Yes"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 3,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 4,
									"offset": 3
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 3,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 4,
										"offset": 3
									}
								}
							}],
							"static": "Yes"
						}
					},
					"manual": {
						"type": 0,
						"start": 0,
						"end": 6,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 7,
								"offset": 6
							},
							"source": "Manual"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 6,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 7,
									"offset": 6
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 6,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 7,
										"offset": 6
									}
								}
							}],
							"static": "Manual"
						}
					},
					"builtIn": {
						"type": 0,
						"start": 0,
						"end": 8,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 9,
								"offset": 8
							},
							"source": "Built-in"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 8,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 9,
									"offset": 8
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 8,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 9,
										"offset": 8
									}
								}
							}],
							"static": "Built-in"
						}
					}
				}
			},
			"about": {
				"header": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 20,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 21,
								"offset": 20
							},
							"source": "About This Benchmark"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 20,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 21,
									"offset": 20
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 20,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 21,
										"offset": 20
									}
								}
							}],
							"static": "About This Benchmark"
						}
					},
					"description": {
						"type": 0,
						"start": 0,
						"end": 224,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 225,
								"offset": 224
							},
							"source": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 224,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 225,
									"offset": 224
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 224,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 225,
										"offset": 224
									}
								}
							}],
							"static": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
						}
					}
				},
				"grid": {
					"whyExistsTitle": {
						"type": 0,
						"start": 0,
						"end": 15,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 16,
								"offset": 15
							},
							"source": "Why This Exists"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 15,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 16,
									"offset": 15
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 15,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 16,
										"offset": 15
									}
								}
							}],
							"static": "Why This Exists"
						}
					},
					"whyExistsDesc": {
						"type": 0,
						"start": 0,
						"end": 401,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 402,
								"offset": 401
							},
							"source": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 401,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 402,
									"offset": 401
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 401,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 402,
										"offset": 401
									}
								}
							}],
							"static": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
						}
					},
					"methodologyTitle": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Methodology"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Methodology"
						}
					},
					"methodologyDesc": {
						"type": 0,
						"start": 0,
						"end": 301,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 302,
								"offset": 301
							},
							"source": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 301,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 302,
									"offset": 301
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 301,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 302,
										"offset": 301
									}
								}
							}],
							"static": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
						}
					}
				},
				"whatWeMeasure": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 15,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 16,
								"offset": 15
							},
							"source": "What We Measure"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 15,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 16,
									"offset": 15
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 15,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 16,
										"offset": 15
									}
								}
							}],
							"static": "What We Measure"
						}
					},
					"bundleSizeImpact": {
						"type": 0,
						"start": 0,
						"end": 18,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 19,
								"offset": 18
							},
							"source": "Bundle size impact"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 18,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 19,
									"offset": 18
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 18,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 19,
										"offset": 18
									}
								}
							}],
							"static": "Bundle size impact"
						}
					},
					"bundleSizeImpactDesc": {
						"type": 0,
						"start": 0,
						"end": 161,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 162,
								"offset": 161
							},
							"source": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 161,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 162,
									"offset": 161
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 161,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 162,
										"offset": 161
									}
								}
							}],
							"static": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
						}
					},
					"renderingOverhead": {
						"type": 0,
						"start": 0,
						"end": 18,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 19,
								"offset": 18
							},
							"source": "Rendering overhead"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 18,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 19,
									"offset": 18
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 18,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 19,
										"offset": 18
									}
								}
							}],
							"static": "Rendering overhead"
						}
					},
					"renderingOverheadDesc": {
						"type": 0,
						"start": 0,
						"end": 186,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 187,
								"offset": 186
							},
							"source": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 186,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 187,
									"offset": 186
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 186,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 187,
										"offset": 186
									}
								}
							}],
							"static": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
						}
					},
					"hydrationCost": {
						"type": 0,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							},
							"source": "Hydration cost"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 14,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 15,
										"offset": 14
									}
								}
							}],
							"static": "Hydration cost"
						}
					},
					"hydrationCostDesc": {
						"type": 0,
						"start": 0,
						"end": 165,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 166,
								"offset": 165
							},
							"source": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 165,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 166,
									"offset": 165
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 165,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 166,
										"offset": 165
									}
								}
							}],
							"static": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
						}
					},
					"lazyLoading": {
						"type": 0,
						"start": 0,
						"end": 26,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 27,
								"offset": 26
							},
							"source": "Lazy loading effectiveness"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 26,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 27,
									"offset": 26
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 26,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 27,
										"offset": 26
									}
								}
							}],
							"static": "Lazy loading effectiveness"
						}
					},
					"lazyLoadingDesc": {
						"type": 0,
						"start": 0,
						"end": 167,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 168,
								"offset": 167
							},
							"source": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 167,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 168,
									"offset": 167
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 167,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 168,
										"offset": 167
									}
								}
							}],
							"static": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
						}
					},
					"localeSwitch": {
						"type": 0,
						"start": 0,
						"end": 19,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 20,
								"offset": 19
							},
							"source": "Locale switch speed"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 19,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 20,
									"offset": 19
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 19,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 20,
										"offset": 19
									}
								}
							}],
							"static": "Locale switch speed"
						}
					},
					"localeSwitchDesc": {
						"type": 0,
						"start": 0,
						"end": 153,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 154,
								"offset": 153
							},
							"source": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 153,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 154,
									"offset": 153
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 153,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 154,
										"offset": 153
									}
								}
							}],
							"static": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
						}
					}
				}
			},
			"blog": {
				"header": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 4,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 5,
								"offset": 4
							},
							"source": "Blog"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 4,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 5,
									"offset": 4
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 4,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 5,
										"offset": 4
									}
								}
							}],
							"static": "Blog"
						}
					},
					"description": {
						"type": 0,
						"start": 0,
						"end": 58,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 59,
								"offset": 58
							},
							"source": "Insights, tutorials, and analysis from the i18n community."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 58,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 59,
									"offset": 58
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 58,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 59,
										"offset": 58
									}
								}
							}],
							"static": "Insights, tutorials, and analysis from the i18n community."
						}
					}
				},
				"list": {
					"readMore": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Read More →"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Read More →"
						}
					},
					"post1Title": {
						"type": 0,
						"start": 0,
						"end": 45,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 46,
								"offset": 45
							},
							"source": "Comparing i18n Libraries in 2026: A Deep Dive"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 45,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 46,
									"offset": 45
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 45,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 46,
										"offset": 45
									}
								}
							}],
							"static": "Comparing i18n Libraries in 2026: A Deep Dive"
						}
					},
					"post1Date": {
						"type": 0,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							},
							"source": "March 15, 2026"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 14,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 15,
										"offset": 14
									}
								}
							}],
							"static": "March 15, 2026"
						}
					},
					"post1Excerpt": {
						"type": 0,
						"start": 0,
						"end": 127,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 128,
								"offset": 127
							},
							"source": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 127,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 128,
									"offset": 127
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 127,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 128,
										"offset": 127
									}
								}
							}],
							"static": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results."
						}
					},
					"post1Category": {
						"type": 0,
						"start": 0,
						"end": 9,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 10,
								"offset": 9
							},
							"source": "Benchmark"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 9,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 10,
									"offset": 9
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 9,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 10,
										"offset": 9
									}
								}
							}],
							"static": "Benchmark"
						}
					},
					"post2Title": {
						"type": 0,
						"start": 0,
						"end": 37,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 38,
								"offset": 37
							},
							"source": "How to Reduce Your i18n Bundle by 60%"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 37,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 38,
									"offset": 37
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 37,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 38,
										"offset": 37
									}
								}
							}],
							"static": "How to Reduce Your i18n Bundle by 60%"
						}
					},
					"post2Date": {
						"type": 0,
						"start": 0,
						"end": 13,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 14,
								"offset": 13
							},
							"source": "March 8, 2026"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 13,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 14,
									"offset": 13
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 13,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 14,
										"offset": 13
									}
								}
							}],
							"static": "March 8, 2026"
						}
					},
					"post2Excerpt": {
						"type": 0,
						"start": 0,
						"end": 127,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 128,
								"offset": 127
							},
							"source": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 127,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 128,
									"offset": 127
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 127,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 128,
										"offset": 127
									}
								}
							}],
							"static": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations."
						}
					},
					"post2Category": {
						"type": 0,
						"start": 0,
						"end": 8,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 9,
								"offset": 8
							},
							"source": "Tutorial"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 8,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 9,
									"offset": 8
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 8,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 9,
										"offset": 8
									}
								}
							}],
							"static": "Tutorial"
						}
					},
					"post3Title": {
						"type": 0,
						"start": 0,
						"end": 42,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 43,
								"offset": 42
							},
							"source": "The State of Internationalization in React"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 42,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 43,
									"offset": 42
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 42,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 43,
										"offset": 42
									}
								}
							}],
							"static": "The State of Internationalization in React"
						}
					},
					"post3Date": {
						"type": 0,
						"start": 0,
						"end": 17,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 18,
								"offset": 17
							},
							"source": "February 28, 2026"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 17,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 18,
									"offset": 17
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 17,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 18,
										"offset": 17
									}
								}
							}],
							"static": "February 28, 2026"
						}
					},
					"post3Excerpt": {
						"type": 0,
						"start": 0,
						"end": 114,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 115,
								"offset": 114
							},
							"source": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 114,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 115,
									"offset": 114
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 114,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 115,
										"offset": 114
									}
								}
							}],
							"static": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences."
						}
					},
					"post3Category": {
						"type": 0,
						"start": 0,
						"end": 8,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 9,
								"offset": 8
							},
							"source": "Analysis"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 8,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 9,
									"offset": 8
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 8,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 9,
										"offset": 8
									}
								}
							}],
							"static": "Analysis"
						}
					},
					"post4Title": {
						"type": 0,
						"start": 0,
						"end": 38,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 39,
								"offset": 38
							},
							"source": "Migrating from react-i18next to Lingui"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 38,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 39,
									"offset": 38
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 38,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 39,
										"offset": 38
									}
								}
							}],
							"static": "Migrating from react-i18next to Lingui"
						}
					},
					"post4Date": {
						"type": 0,
						"start": 0,
						"end": 17,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 18,
								"offset": 17
							},
							"source": "February 15, 2026"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 17,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 18,
									"offset": 17
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 17,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 18,
										"offset": 17
									}
								}
							}],
							"static": "February 15, 2026"
						}
					},
					"post4Excerpt": {
						"type": 0,
						"start": 0,
						"end": 109,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 110,
								"offset": 109
							},
							"source": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 109,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 110,
									"offset": 109
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 109,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 110,
										"offset": 109
									}
								}
							}],
							"static": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui."
						}
					},
					"post4Category": {
						"type": 0,
						"start": 0,
						"end": 8,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 9,
								"offset": 8
							},
							"source": "Tutorial"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 8,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 9,
									"offset": 8
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 8,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 9,
										"offset": 8
									}
								}
							}],
							"static": "Tutorial"
						}
					},
					"post5Title": {
						"type": 0,
						"start": 0,
						"end": 41,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 42,
								"offset": 41
							},
							"source": "Server Components and i18n: What Changes?"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 41,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 42,
									"offset": 41
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 41,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 42,
										"offset": 41
									}
								}
							}],
							"static": "Server Components and i18n: What Changes?"
						}
					},
					"post5Date": {
						"type": 0,
						"start": 0,
						"end": 16,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 17,
								"offset": 16
							},
							"source": "February 1, 2026"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 16,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 17,
									"offset": 16
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 16,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 17,
										"offset": 16
									}
								}
							}],
							"static": "February 1, 2026"
						}
					},
					"post5Excerpt": {
						"type": 0,
						"start": 0,
						"end": 120,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 121,
								"offset": 120
							},
							"source": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 120,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 121,
									"offset": 120
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 120,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 121,
										"offset": 120
									}
								}
							}],
							"static": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices."
						}
					},
					"post5Category": {
						"type": 0,
						"start": 0,
						"end": 8,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 9,
								"offset": 8
							},
							"source": "Analysis"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 8,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 9,
									"offset": 8
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 8,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 9,
										"offset": 8
									}
								}
							}],
							"static": "Analysis"
						}
					},
					"post6Title": {
						"type": 0,
						"start": 0,
						"end": 34,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 35,
								"offset": 34
							},
							"source": "Benchmark Methodology: How We Test"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 34,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 35,
									"offset": 34
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 34,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 35,
										"offset": 34
									}
								}
							}],
							"static": "Benchmark Methodology: How We Test"
						}
					},
					"post6Date": {
						"type": 0,
						"start": 0,
						"end": 16,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 17,
								"offset": 16
							},
							"source": "January 20, 2026"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 16,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 17,
									"offset": 16
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 16,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 17,
										"offset": 16
									}
								}
							}],
							"static": "January 20, 2026"
						}
					},
					"post6Excerpt": {
						"type": 0,
						"start": 0,
						"end": 122,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 123,
								"offset": 122
							},
							"source": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 122,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 123,
									"offset": 122
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 122,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 123,
										"offset": 122
									}
								}
							}],
							"static": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility."
						}
					},
					"post6Category": {
						"type": 0,
						"start": 0,
						"end": 4,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 5,
								"offset": 4
							},
							"source": "Meta"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 4,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 5,
									"offset": 4
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 4,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 5,
										"offset": 4
									}
								}
							}],
							"static": "Meta"
						}
					}
				}
			},
			"careers": {
				"header": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 7,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 8,
								"offset": 7
							},
							"source": "Careers"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 7,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 8,
									"offset": 7
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 7,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 8,
										"offset": 7
									}
								}
							}],
							"static": "Careers"
						}
					},
					"description": {
						"type": 0,
						"start": 0,
						"end": 148,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 149,
								"offset": 148
							},
							"source": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 148,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 149,
									"offset": 148
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 148,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 149,
										"offset": 148
									}
								}
							}],
							"static": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
						}
					}
				},
				"benefits": {
					"remoteLabel": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "Remote-first"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "Remote-first"
						}
					},
					"remoteValue": {
						"type": 0,
						"start": 0,
						"end": 31,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 32,
								"offset": 31
							},
							"source": "Work from anywhere in the world"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 31,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 32,
									"offset": 31
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 31,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 32,
										"offset": 31
									}
								}
							}],
							"static": "Work from anywhere in the world"
						}
					},
					"payLabel": {
						"type": 0,
						"start": 0,
						"end": 15,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 16,
								"offset": 15
							},
							"source": "Competitive pay"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 15,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 16,
									"offset": 15
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 15,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 16,
										"offset": 15
									}
								}
							}],
							"static": "Competitive pay"
						}
					},
					"payValue": {
						"type": 0,
						"start": 0,
						"end": 26,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 27,
								"offset": 26
							},
							"source": "Top-of-market compensation"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 26,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 27,
									"offset": 26
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 26,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 27,
										"offset": 26
									}
								}
							}],
							"static": "Top-of-market compensation"
						}
					},
					"ossLabel": {
						"type": 0,
						"start": 0,
						"end": 16,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 17,
								"offset": 16
							},
							"source": "Open source time"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 16,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 17,
									"offset": 16
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 16,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 17,
										"offset": 16
									}
								}
							}],
							"static": "Open source time"
						}
					},
					"ossValue": {
						"type": 0,
						"start": 0,
						"end": 30,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 31,
								"offset": 30
							},
							"source": "20% time for OSS contributions"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 30,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 31,
									"offset": 30
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 30,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 31,
										"offset": 30
									}
								}
							}],
							"static": "20% time for OSS contributions"
						}
					}
				},
				"openPositions": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							},
							"source": "Open Positions"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 14,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 15,
										"offset": 14
									}
								}
							}],
							"static": "Open Positions"
						}
					},
					"applyNow": {
						"type": 0,
						"start": 0,
						"end": 9,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 10,
								"offset": 9
							},
							"source": "Apply Now"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 9,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 10,
									"offset": 9
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 9,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 10,
										"offset": 9
									}
								}
							}],
							"static": "Apply Now"
						}
					},
					"remote": {
						"type": 0,
						"start": 0,
						"end": 6,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 7,
								"offset": 6
							},
							"source": "Remote"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 6,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 7,
									"offset": 6
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 6,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 7,
										"offset": 6
									}
								}
							}],
							"static": "Remote"
						}
					},
					"fullTime": {
						"type": 0,
						"start": 0,
						"end": 9,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 10,
								"offset": 9
							},
							"source": "Full-time"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 9,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 10,
									"offset": 9
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 9,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 10,
										"offset": 9
									}
								}
							}],
							"static": "Full-time"
						}
					},
					"partTime": {
						"type": 0,
						"start": 0,
						"end": 9,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 10,
								"offset": 9
							},
							"source": "Part-time"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 9,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 10,
									"offset": 9
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 9,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 10,
										"offset": 9
									}
								}
							}],
							"static": "Part-time"
						}
					},
					"engineering": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Engineering"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Engineering"
						}
					},
					"documentation": {
						"type": 0,
						"start": 0,
						"end": 13,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 14,
								"offset": 13
							},
							"source": "Documentation"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 13,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 14,
									"offset": 13
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 13,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 14,
										"offset": 13
									}
								}
							}],
							"static": "Documentation"
						}
					},
					"community": {
						"type": 0,
						"start": 0,
						"end": 9,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 10,
								"offset": 9
							},
							"source": "Community"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 9,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 10,
									"offset": 9
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 9,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 10,
										"offset": 9
									}
								}
							}],
							"static": "Community"
						}
					},
					"sfRemote": {
						"type": 0,
						"start": 0,
						"end": 22,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 23,
								"offset": 22
							},
							"source": "San Francisco / Remote"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 22,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 23,
									"offset": 22
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 22,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 23,
										"offset": 22
									}
								}
							}],
							"static": "San Francisco / Remote"
						}
					},
					"frontendTitle": {
						"type": 0,
						"start": 0,
						"end": 24,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 25,
								"offset": 24
							},
							"source": "Senior Frontend Engineer"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 24,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 25,
									"offset": 24
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 24,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 25,
										"offset": 24
									}
								}
							}],
							"static": "Senior Frontend Engineer"
						}
					},
					"frontendDesc": {
						"type": 0,
						"start": 0,
						"end": 100,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 101,
								"offset": 100
							},
							"source": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 100,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 101,
									"offset": 100
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 100,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 101,
										"offset": 100
									}
								}
							}],
							"static": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
						}
					},
					"backendTitle": {
						"type": 0,
						"start": 0,
						"end": 16,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 17,
								"offset": 16
							},
							"source": "Backend Engineer"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 16,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 17,
									"offset": 16
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 16,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 17,
										"offset": 16
									}
								}
							}],
							"static": "Backend Engineer"
						}
					},
					"backendDesc": {
						"type": 0,
						"start": 0,
						"end": 98,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 99,
								"offset": 98
							},
							"source": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 98,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 99,
									"offset": 98
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 98,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 99,
										"offset": 98
									}
								}
							}],
							"static": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
						}
					},
					"writerTitle": {
						"type": 0,
						"start": 0,
						"end": 16,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 17,
								"offset": 16
							},
							"source": "Technical Writer"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 16,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 17,
									"offset": 16
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 16,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 17,
										"offset": 16
									}
								}
							}],
							"static": "Technical Writer"
						}
					},
					"writerDesc": {
						"type": 0,
						"start": 0,
						"end": 89,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 90,
								"offset": 89
							},
							"source": "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 89,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 90,
									"offset": 89
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 89,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 90,
										"offset": 89
									}
								}
							}],
							"static": "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
						}
					},
					"devrelTitle": {
						"type": 0,
						"start": 0,
						"end": 15,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 16,
								"offset": 15
							},
							"source": "DevRel Engineer"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 15,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 16,
									"offset": 15
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 15,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 16,
										"offset": 15
									}
								}
							}],
							"static": "DevRel Engineer"
						}
					},
					"devrelDesc": {
						"type": 0,
						"start": 0,
						"end": 99,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 100,
								"offset": 99
							},
							"source": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 99,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 100,
									"offset": 99
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 99,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 100,
										"offset": 99
									}
								}
							}],
							"static": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
						}
					},
					"qaTitle": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "QA Engineer"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "QA Engineer"
						}
					},
					"qaDesc": {
						"type": 0,
						"start": 0,
						"end": 97,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 98,
								"offset": 97
							},
							"source": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 97,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 98,
									"offset": 97
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 97,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 98,
										"offset": 97
									}
								}
							}],
							"static": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
						}
					}
				}
			},
			"contact": {
				"header": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "Get in Touch"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "Get in Touch"
						}
					},
					"description": {
						"type": 0,
						"start": 0,
						"end": 78,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 79,
								"offset": 78
							},
							"source": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 78,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 79,
									"offset": 78
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 78,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 79,
										"offset": 78
									}
								}
							}],
							"static": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
						}
					}
				},
				"form": {
					"name": {
						"type": 0,
						"start": 0,
						"end": 4,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 5,
								"offset": 4
							},
							"source": "Name"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 4,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 5,
									"offset": 4
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 4,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 5,
										"offset": 4
									}
								}
							}],
							"static": "Name"
						}
					},
					"yourName": {
						"type": 0,
						"start": 0,
						"end": 9,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 10,
								"offset": 9
							},
							"source": "Your name"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 9,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 10,
									"offset": 9
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 9,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 10,
										"offset": 9
									}
								}
							}],
							"static": "Your name"
						}
					},
					"email": {
						"type": 0,
						"start": 0,
						"end": 5,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 6,
								"offset": 5
							},
							"source": "Email"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 5,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 6,
									"offset": 5
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 5,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 6,
										"offset": 5
									}
								}
							}],
							"static": "Email"
						}
					},
					"emailPlaceholder": {
						"type": 0,
						"start": 0,
						"end": 19,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 20,
								"offset": 19
							},
							"source": "you{'@'}example.com"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 19,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 20,
									"offset": 19
								}
							},
							"items": [
								{
									"type": 3,
									"start": 0,
									"end": 3,
									"loc": {
										"start": {
											"line": 1,
											"column": 1,
											"offset": 0
										},
										"end": {
											"line": 1,
											"column": 4,
											"offset": 3
										}
									}
								},
								{
									"type": 9,
									"start": 3,
									"end": 8,
									"loc": {
										"start": {
											"line": 1,
											"column": 4,
											"offset": 3
										},
										"end": {
											"line": 1,
											"column": 9,
											"offset": 8
										}
									}
								},
								{
									"type": 3,
									"start": 8,
									"end": 19,
									"loc": {
										"start": {
											"line": 1,
											"column": 9,
											"offset": 8
										},
										"end": {
											"line": 1,
											"column": 20,
											"offset": 19
										}
									}
								}
							],
							"static": "you@example.com"
						}
					},
					"topic": {
						"type": 0,
						"start": 0,
						"end": 5,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 6,
								"offset": 5
							},
							"source": "Topic"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 5,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 6,
									"offset": 5
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 5,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 6,
										"offset": 5
									}
								}
							}],
							"static": "Topic"
						}
					},
					"bugReport": {
						"type": 0,
						"start": 0,
						"end": 10,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 11,
								"offset": 10
							},
							"source": "Bug Report"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 10,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 11,
									"offset": 10
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 10,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 11,
										"offset": 10
									}
								}
							}],
							"static": "Bug Report"
						}
					},
					"newBenchmarkIdea": {
						"type": 0,
						"start": 0,
						"end": 18,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 19,
								"offset": 18
							},
							"source": "New Benchmark Idea"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 18,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 19,
									"offset": 18
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 18,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 19,
										"offset": 18
									}
								}
							}],
							"static": "New Benchmark Idea"
						}
					},
					"methodologyQuestion": {
						"type": 0,
						"start": 0,
						"end": 20,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 21,
								"offset": 20
							},
							"source": "Methodology Question"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 20,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 21,
									"offset": 20
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 20,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 21,
										"offset": 20
									}
								}
							}],
							"static": "Methodology Question"
						}
					},
					"contribution": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "Contribution"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "Contribution"
						}
					},
					"other": {
						"type": 0,
						"start": 0,
						"end": 5,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 6,
								"offset": 5
							},
							"source": "Other"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 5,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 6,
									"offset": 5
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 5,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 6,
										"offset": 5
									}
								}
							}],
							"static": "Other"
						}
					},
					"message": {
						"type": 0,
						"start": 0,
						"end": 7,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 8,
								"offset": 7
							},
							"source": "Message"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 7,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 8,
									"offset": 7
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 7,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 8,
										"offset": 7
									}
								}
							}],
							"static": "Message"
						}
					},
					"messagePlaceholder": {
						"type": 0,
						"start": 0,
						"end": 33,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 34,
								"offset": 33
							},
							"source": "Describe your question or idea..."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 33,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 34,
									"offset": 33
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 33,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 34,
										"offset": 33
									}
								}
							}],
							"static": "Describe your question or idea..."
						}
					},
					"sendMessage": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "Send Message"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "Send Message"
						}
					}
				}
			},
			"faq": {
				"header": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 26,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 27,
								"offset": 26
							},
							"source": "Frequently Asked Questions"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 26,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 27,
									"offset": 26
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 26,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 27,
										"offset": 26
									}
								}
							}],
							"static": "Frequently Asked Questions"
						}
					},
					"description": {
						"type": 0,
						"start": 0,
						"end": 49,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 50,
								"offset": 49
							},
							"source": "Everything you need to know about i18n Benchmark."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 49,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 50,
									"offset": 49
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 49,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 50,
										"offset": 49
									}
								}
							}],
							"static": "Everything you need to know about i18n Benchmark."
						}
					}
				},
				"list": {
					"q1": {
						"type": 0,
						"start": 0,
						"end": 23,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 24,
								"offset": 23
							},
							"source": "What is i18n Benchmark?"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 23,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 24,
									"offset": 23
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 23,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 24,
										"offset": 23
									}
								}
							}],
							"static": "What is i18n Benchmark?"
						}
					},
					"a1": {
						"type": 0,
						"start": 0,
						"end": 206,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 207,
								"offset": 206
							},
							"source": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 206,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 207,
									"offset": 206
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 206,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 207,
										"offset": 206
									}
								}
							}],
							"static": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
						}
					},
					"q2": {
						"type": 0,
						"start": 0,
						"end": 29,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 30,
								"offset": 29
							},
							"source": "How are benchmarks conducted?"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 29,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 30,
									"offset": 29
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 29,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 30,
										"offset": 29
									}
								}
							}],
							"static": "How are benchmarks conducted?"
						}
					},
					"a2": {
						"type": 0,
						"start": 0,
						"end": 228,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 229,
								"offset": 228
							},
							"source": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 228,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 229,
									"offset": 228
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 228,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 229,
										"offset": 228
									}
								}
							}],
							"static": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
						}
					},
					"q3": {
						"type": 0,
						"start": 0,
						"end": 40,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 41,
								"offset": 40
							},
							"source": "Which libraries are currently supported?"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 40,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 41,
									"offset": 40
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 40,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 41,
										"offset": 40
									}
								}
							}],
							"static": "Which libraries are currently supported?"
						}
					},
					"a3": {
						"type": 0,
						"start": 0,
						"end": 165,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 166,
								"offset": 165
							},
							"source": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {'@'}fluent/react, and Tolgee."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 165,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 166,
									"offset": 165
								}
							},
							"items": [
								{
									"type": 3,
									"start": 0,
									"end": 135,
									"loc": {
										"start": {
											"line": 1,
											"column": 1,
											"offset": 0
										},
										"end": {
											"line": 1,
											"column": 136,
											"offset": 135
										}
									}
								},
								{
									"type": 9,
									"start": 135,
									"end": 140,
									"loc": {
										"start": {
											"line": 1,
											"column": 136,
											"offset": 135
										},
										"end": {
											"line": 1,
											"column": 141,
											"offset": 140
										}
									}
								},
								{
									"type": 3,
									"start": 140,
									"end": 165,
									"loc": {
										"start": {
											"line": 1,
											"column": 141,
											"offset": 140
										},
										"end": {
											"line": 1,
											"column": 166,
											"offset": 165
										}
									}
								}
							],
							"static": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
						}
					},
					"q4": {
						"type": 0,
						"start": 0,
						"end": 31,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 32,
								"offset": 31
							},
							"source": "Can I submit my own benchmarks?"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 31,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 32,
									"offset": 31
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 31,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 32,
										"offset": 31
									}
								}
							}],
							"static": "Can I submit my own benchmarks?"
						}
					},
					"a4": {
						"type": 0,
						"start": 0,
						"end": 205,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 206,
								"offset": 205
							},
							"source": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 205,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 206,
									"offset": 205
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 205,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 206,
										"offset": 205
									}
								}
							}],
							"static": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
						}
					},
					"q5": {
						"type": 0,
						"start": 0,
						"end": 33,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 34,
								"offset": 33
							},
							"source": "How often are benchmarks updated?"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 33,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 34,
									"offset": 33
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 33,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 34,
										"offset": 33
									}
								}
							}],
							"static": "How often are benchmarks updated?"
						}
					},
					"a5": {
						"type": 0,
						"start": 0,
						"end": 147,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 148,
								"offset": 147
							},
							"source": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 147,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 148,
									"offset": 147
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 147,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 148,
										"offset": 147
									}
								}
							}],
							"static": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
						}
					},
					"q6": {
						"type": 0,
						"start": 0,
						"end": 21,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 22,
								"offset": 21
							},
							"source": "Is the data reliable?"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 21,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 22,
									"offset": 21
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 21,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 22,
										"offset": 21
									}
								}
							}],
							"static": "Is the data reliable?"
						}
					},
					"a6": {
						"type": 0,
						"start": 0,
						"end": 183,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 184,
								"offset": 183
							},
							"source": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 183,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 184,
									"offset": 183
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 183,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 184,
										"offset": 183
									}
								}
							}],
							"static": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
						}
					},
					"q7": {
						"type": 0,
						"start": 0,
						"end": 33,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 34,
								"offset": 33
							},
							"source": "Do you offer consulting services?"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 33,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 34,
									"offset": 33
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 33,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 34,
										"offset": 33
									}
								}
							}],
							"static": "Do you offer consulting services?"
						}
					},
					"a7": {
						"type": 0,
						"start": 0,
						"end": 184,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 185,
								"offset": 184
							},
							"source": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 184,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 185,
									"offset": 184
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 184,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 185,
										"offset": 184
									}
								}
							}],
							"static": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
						}
					},
					"q8": {
						"type": 0,
						"start": 0,
						"end": 21,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 22,
								"offset": 21
							},
							"source": "How can I contribute?"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 21,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 22,
									"offset": 21
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 21,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 22,
										"offset": 21
									}
								}
							}],
							"static": "How can I contribute?"
						}
					},
					"a8": {
						"type": 0,
						"start": 0,
						"end": 180,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 181,
								"offset": 180
							},
							"source": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 180,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 181,
									"offset": 180
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 180,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 181,
										"offset": 180
									}
								}
							}],
							"static": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
						}
					}
				}
			},
			"pricing": {
				"header": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 27,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 28,
								"offset": 27
							},
							"source": "Simple, Transparent Pricing"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 27,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 28,
									"offset": 27
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 27,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 28,
										"offset": 27
									}
								}
							}],
							"static": "Simple, Transparent Pricing"
						}
					},
					"description": {
						"type": 0,
						"start": 0,
						"end": 52,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 53,
								"offset": 52
							},
							"source": "Choose the plan that fits your team. No hidden fees."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 52,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 53,
									"offset": 52
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 52,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 53,
										"offset": 52
									}
								}
							}],
							"static": "Choose the plan that fits your team. No hidden fees."
						}
					}
				},
				"tiers": {
					"starterName": {
						"type": 0,
						"start": 0,
						"end": 7,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 8,
								"offset": 7
							},
							"source": "Starter"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 7,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 8,
									"offset": 7
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 7,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 8,
										"offset": 7
									}
								}
							}],
							"static": "Starter"
						}
					},
					"starterPrice": {
						"type": 0,
						"start": 0,
						"end": 2,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 3,
								"offset": 2
							},
							"source": "$0"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 2,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 3,
									"offset": 2
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 2,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 3,
										"offset": 2
									}
								}
							}],
							"static": "$0"
						}
					},
					"starterPeriod": {
						"type": 0,
						"start": 0,
						"end": 7,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 8,
								"offset": 7
							},
							"source": "forever"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 7,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 8,
									"offset": 7
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 7,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 8,
										"offset": 7
									}
								}
							}],
							"static": "forever"
						}
					},
					"starterFeature1": {
						"type": 0,
						"start": 0,
						"end": 20,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 21,
								"offset": 20
							},
							"source": "5 benchmark runs/day"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 20,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 21,
									"offset": 20
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 20,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 21,
										"offset": 20
									}
								}
							}],
							"static": "5 benchmark runs/day"
						}
					},
					"starterFeature2": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "3 libraries"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "3 libraries"
						}
					},
					"starterFeature3": {
						"type": 0,
						"start": 0,
						"end": 17,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 18,
								"offset": 17
							},
							"source": "Community support"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 17,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 18,
									"offset": 17
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 17,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 18,
										"offset": 17
									}
								}
							}],
							"static": "Community support"
						}
					},
					"starterFeature4": {
						"type": 0,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							},
							"source": "Public results"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 14,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 15,
										"offset": 14
									}
								}
							}],
							"static": "Public results"
						}
					},
					"proName": {
						"type": 0,
						"start": 0,
						"end": 3,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 4,
								"offset": 3
							},
							"source": "Pro"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 3,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 4,
									"offset": 3
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 3,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 4,
										"offset": 3
									}
								}
							}],
							"static": "Pro"
						}
					},
					"proPrice": {
						"type": 0,
						"start": 0,
						"end": 3,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 4,
								"offset": 3
							},
							"source": "$29"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 3,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 4,
									"offset": 3
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 3,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 4,
										"offset": 3
									}
								}
							}],
							"static": "$29"
						}
					},
					"proPeriod": {
						"type": 0,
						"start": 0,
						"end": 6,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 7,
								"offset": 6
							},
							"source": "/month"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 6,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 7,
									"offset": 6
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 6,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 7,
										"offset": 6
									}
								}
							}],
							"static": "/month"
						}
					},
					"proFeature1": {
						"type": 0,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							},
							"source": "Unlimited runs"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 14,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 15,
										"offset": 14
									}
								}
							}],
							"static": "Unlimited runs"
						}
					},
					"proFeature2": {
						"type": 0,
						"start": 0,
						"end": 13,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 14,
								"offset": 13
							},
							"source": "All libraries"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 13,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 14,
									"offset": 13
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 13,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 14,
										"offset": 13
									}
								}
							}],
							"static": "All libraries"
						}
					},
					"proFeature3": {
						"type": 0,
						"start": 0,
						"end": 16,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 17,
								"offset": 16
							},
							"source": "Priority support"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 16,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 17,
									"offset": 16
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 16,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 17,
										"offset": 16
									}
								}
							}],
							"static": "Priority support"
						}
					},
					"proFeature4": {
						"type": 0,
						"start": 0,
						"end": 15,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 16,
								"offset": 15
							},
							"source": "Private results"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 15,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 16,
									"offset": 15
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 15,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 16,
										"offset": 15
									}
								}
							}],
							"static": "Private results"
						}
					},
					"proFeature5": {
						"type": 0,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							},
							"source": "CI integration"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 14,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 15,
										"offset": 14
									}
								}
							}],
							"static": "CI integration"
						}
					},
					"proFeature6": {
						"type": 0,
						"start": 0,
						"end": 15,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 16,
								"offset": 15
							},
							"source": "Historical data"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 15,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 16,
									"offset": 15
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 15,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 16,
										"offset": 15
									}
								}
							}],
							"static": "Historical data"
						}
					},
					"enterpriseName": {
						"type": 0,
						"start": 0,
						"end": 10,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 11,
								"offset": 10
							},
							"source": "Enterprise"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 10,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 11,
									"offset": 10
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 10,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 11,
										"offset": 10
									}
								}
							}],
							"static": "Enterprise"
						}
					},
					"enterprisePrice": {
						"type": 0,
						"start": 0,
						"end": 6,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 7,
								"offset": 6
							},
							"source": "Custom"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 6,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 7,
									"offset": 6
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 6,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 7,
										"offset": 6
									}
								}
							}],
							"static": "Custom"
						}
					},
					"enterpriseFeature1": {
						"type": 0,
						"start": 0,
						"end": 17,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 18,
								"offset": 17
							},
							"source": "Everything in Pro"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 17,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 18,
									"offset": 17
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 17,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 18,
										"offset": 17
									}
								}
							}],
							"static": "Everything in Pro"
						}
					},
					"enterpriseFeature2": {
						"type": 0,
						"start": 0,
						"end": 17,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 18,
								"offset": 17
							},
							"source": "On-premise option"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 17,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 18,
									"offset": 17
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 17,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 18,
										"offset": 17
									}
								}
							}],
							"static": "On-premise option"
						}
					},
					"enterpriseFeature3": {
						"type": 0,
						"start": 0,
						"end": 10,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 11,
								"offset": 10
							},
							"source": "SSO & SAML"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 10,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 11,
									"offset": 10
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 10,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 11,
										"offset": 10
									}
								}
							}],
							"static": "SSO & SAML"
						}
					},
					"enterpriseFeature4": {
						"type": 0,
						"start": 0,
						"end": 25,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 26,
								"offset": 25
							},
							"source": "Dedicated account manager"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 25,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 26,
									"offset": 25
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 25,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 26,
										"offset": 25
									}
								}
							}],
							"static": "Dedicated account manager"
						}
					},
					"enterpriseFeature5": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Custom SLAs"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Custom SLAs"
						}
					},
					"enterpriseFeature6": {
						"type": 0,
						"start": 0,
						"end": 10,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 11,
								"offset": 10
							},
							"source": "Audit logs"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 10,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 11,
									"offset": 10
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 10,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 11,
										"offset": 10
									}
								}
							}],
							"static": "Audit logs"
						}
					},
					"enterpriseFeature7": {
						"type": 0,
						"start": 0,
						"end": 17,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 18,
								"offset": 17
							},
							"source": "Training sessions"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 17,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 18,
									"offset": 17
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 17,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 18,
										"offset": 17
									}
								}
							}],
							"static": "Training sessions"
						}
					},
					"contactSales": {
						"type": 0,
						"start": 0,
						"end": 13,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 14,
								"offset": 13
							},
							"source": "Contact Sales"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 13,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 14,
									"offset": 13
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 13,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 14,
										"offset": 13
									}
								}
							}],
							"static": "Contact Sales"
						}
					},
					"getStarted": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Get Started"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Get Started"
						}
					}
				}
			},
			"products": {
				"header": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 8,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 9,
								"offset": 8
							},
							"source": "Products"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 8,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 9,
									"offset": 8
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 8,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 9,
										"offset": 8
									}
								}
							}],
							"static": "Products"
						}
					},
					"description": {
						"type": 0,
						"start": 0,
						"end": 68,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 69,
								"offset": 68
							},
							"source": "Tools and services to streamline your internationalization workflow."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 68,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 69,
									"offset": 68
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 68,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 69,
										"offset": 68
									}
								}
							}],
							"static": "Tools and services to streamline your internationalization workflow."
						}
					}
				},
				"grid": {
					"learnMore": {
						"type": 0,
						"start": 0,
						"end": 10,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 11,
								"offset": 10
							},
							"source": "Learn More"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 10,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 11,
									"offset": 10
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 10,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 11,
										"offset": 10
									}
								}
							}],
							"static": "Learn More"
						}
					},
					"cliName": {
						"type": 0,
						"start": 0,
						"end": 13,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 14,
								"offset": 13
							},
							"source": "Benchmark CLI"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 13,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 14,
									"offset": 13
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 13,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 14,
										"offset": 13
									}
								}
							}],
							"static": "Benchmark CLI"
						}
					},
					"cliDesc": {
						"type": 0,
						"start": 0,
						"end": 93,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 94,
								"offset": 93
							},
							"source": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 93,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 94,
									"offset": 93
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 93,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 94,
										"offset": 93
									}
								}
							}],
							"static": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration."
						}
					},
					"cliPrice": {
						"type": 0,
						"start": 0,
						"end": 4,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 5,
								"offset": 4
							},
							"source": "Free"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 4,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 5,
									"offset": 4
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 4,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 5,
										"offset": 4
									}
								}
							}],
							"static": "Free"
						}
					},
					"cloudName": {
						"type": 0,
						"start": 0,
						"end": 15,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 16,
								"offset": 15
							},
							"source": "Benchmark Cloud"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 15,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 16,
									"offset": 15
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 15,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 16,
										"offset": 15
									}
								}
							}],
							"static": "Benchmark Cloud"
						}
					},
					"cloudDesc": {
						"type": 0,
						"start": 0,
						"end": 89,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 90,
								"offset": 89
							},
							"source": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 89,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 90,
									"offset": 89
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 89,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 90,
										"offset": 89
									}
								}
							}],
							"static": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards."
						}
					},
					"cloudPrice": {
						"type": 0,
						"start": 0,
						"end": 6,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 7,
								"offset": 6
							},
							"source": "$29/mo"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 6,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 7,
									"offset": 6
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 6,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 7,
										"offset": 6
									}
								}
							}],
							"static": "$29/mo"
						}
					},
					"enterpriseName": {
						"type": 0,
						"start": 0,
						"end": 20,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 21,
								"offset": 20
							},
							"source": "Benchmark Enterprise"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 20,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 21,
									"offset": 20
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 20,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 21,
										"offset": 20
									}
								}
							}],
							"static": "Benchmark Enterprise"
						}
					},
					"enterpriseDesc": {
						"type": 0,
						"start": 0,
						"end": 79,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 80,
								"offset": 79
							},
							"source": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 79,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 80,
									"offset": 79
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 79,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 80,
										"offset": 79
									}
								}
							}],
							"static": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support."
						}
					},
					"enterprisePrice": {
						"type": 0,
						"start": 0,
						"end": 10,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 11,
								"offset": 10
							},
							"source": "Contact Us"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 10,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 11,
									"offset": 10
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 10,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 11,
										"offset": 10
									}
								}
							}],
							"static": "Contact Us"
						}
					},
					"migrationName": {
						"type": 0,
						"start": 0,
						"end": 19,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 20,
								"offset": 19
							},
							"source": "Migration Assistant"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 19,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 20,
									"offset": 19
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 19,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 20,
										"offset": 19
									}
								}
							}],
							"static": "Migration Assistant"
						}
					},
					"migrationDesc": {
						"type": 0,
						"start": 0,
						"end": 91,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 92,
								"offset": 91
							},
							"source": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 91,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 92,
									"offset": 91
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 91,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 92,
										"offset": 91
									}
								}
							}],
							"static": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime."
						}
					},
					"migrationPrice": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "$99 one-time"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "$99 one-time"
						}
					},
					"qaName": {
						"type": 0,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							},
							"source": "Translation QA"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 14,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 15,
										"offset": 14
									}
								}
							}],
							"static": "Translation QA"
						}
					},
					"qaDesc": {
						"type": 0,
						"start": 0,
						"end": 92,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 93,
								"offset": 92
							},
							"source": "Automated quality checks for missing translations, pluralization issues, and context errors."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 92,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 93,
									"offset": 92
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 92,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 93,
										"offset": 92
									}
								}
							}],
							"static": "Automated quality checks for missing translations, pluralization issues, and context errors."
						}
					},
					"qaPrice": {
						"type": 0,
						"start": 0,
						"end": 6,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 7,
								"offset": 6
							},
							"source": "$19/mo"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 6,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 7,
									"offset": 6
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 6,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 7,
										"offset": 6
									}
								}
							}],
							"static": "$19/mo"
						}
					},
					"optimizerName": {
						"type": 0,
						"start": 0,
						"end": 16,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 17,
								"offset": 16
							},
							"source": "Bundle Optimizer"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 16,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 17,
									"offset": 16
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 16,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 17,
										"offset": 16
									}
								}
							}],
							"static": "Bundle Optimizer"
						}
					},
					"optimizerDesc": {
						"type": 0,
						"start": 0,
						"end": 92,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 93,
								"offset": 92
							},
							"source": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 92,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 93,
									"offset": 92
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 92,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 93,
										"offset": 92
									}
								}
							}],
							"static": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting."
						}
					},
					"optimizerPrice": {
						"type": 0,
						"start": 0,
						"end": 6,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 7,
								"offset": 6
							},
							"source": "$49/mo"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 6,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 7,
									"offset": 6
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 6,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 7,
										"offset": 6
									}
								}
							}],
							"static": "$49/mo"
						}
					}
				}
			},
			"settings": {
				"header": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 8,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 9,
								"offset": 8
							},
							"source": "Settings"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 8,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 9,
									"offset": 8
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 8,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 9,
										"offset": 8
									}
								}
							}],
							"static": "Settings"
						}
					},
					"description": {
						"type": 0,
						"start": 0,
						"end": 50,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 51,
								"offset": 50
							},
							"source": "Manage your account preferences and configuration."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 50,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 51,
									"offset": 50
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 50,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 51,
										"offset": 50
									}
								}
							}],
							"static": "Manage your account preferences and configuration."
						}
					}
				},
				"profile": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 7,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 8,
								"offset": 7
							},
							"source": "Profile"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 7,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 8,
									"offset": 7
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 7,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 8,
										"offset": 7
									}
								}
							}],
							"static": "Profile"
						}
					},
					"displayName": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "Display Name"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "Display Name"
						}
					},
					"email": {
						"type": 0,
						"start": 0,
						"end": 5,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 6,
								"offset": 5
							},
							"source": "Email"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 5,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 6,
									"offset": 5
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 5,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 6,
										"offset": 5
									}
								}
							}],
							"static": "Email"
						}
					}
				},
				"preferences": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Preferences"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Preferences"
						}
					},
					"emailNotifications": {
						"type": 0,
						"start": 0,
						"end": 19,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 20,
								"offset": 19
							},
							"source": "Email Notifications"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 19,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 20,
									"offset": 19
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 19,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 20,
										"offset": 19
									}
								}
							}],
							"static": "Email Notifications"
						}
					},
					"weeklyReports": {
						"type": 0,
						"start": 0,
						"end": 32,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 33,
								"offset": 32
							},
							"source": "Receive weekly benchmark reports"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 32,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 33,
									"offset": 32
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 32,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 33,
										"offset": 32
									}
								}
							}],
							"static": "Receive weekly benchmark reports"
						}
					},
					"toggleNotifications": {
						"type": 0,
						"start": 0,
						"end": 20,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 21,
								"offset": 20
							},
							"source": "Toggle notifications"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 20,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 21,
									"offset": 20
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 20,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 21,
										"offset": 20
									}
								}
							}],
							"static": "Toggle notifications"
						}
					},
					"darkMode": {
						"type": 0,
						"start": 0,
						"end": 9,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 10,
								"offset": 9
							},
							"source": "Dark Mode"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 9,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 10,
									"offset": 9
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 9,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 10,
										"offset": 9
									}
								}
							}],
							"static": "Dark Mode"
						}
					},
					"darkColorScheme": {
						"type": 0,
						"start": 0,
						"end": 21,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 22,
								"offset": 21
							},
							"source": "Use dark color scheme"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 21,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 22,
									"offset": 21
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 21,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 22,
										"offset": 21
									}
								}
							}],
							"static": "Use dark color scheme"
						}
					},
					"toggleDarkMode": {
						"type": 0,
						"start": 0,
						"end": 16,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 17,
								"offset": 16
							},
							"source": "Toggle dark mode"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 16,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 17,
									"offset": 16
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 16,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 17,
										"offset": 16
									}
								}
							}],
							"static": "Toggle dark mode"
						}
					},
					"defaultLanguage": {
						"type": 0,
						"start": 0,
						"end": 16,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 17,
								"offset": 16
							},
							"source": "Default Language"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 16,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 17,
									"offset": 16
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 16,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 17,
										"offset": 16
									}
								}
							}],
							"static": "Default Language"
						}
					},
					"english": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "English (en)"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "English (en)"
						}
					},
					"french": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "French (fr)"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "French (fr)"
						}
					},
					"german": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "German (de)"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "German (de)"
						}
					},
					"spanish": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "Spanish (es)"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "Spanish (es)"
						}
					},
					"japanese": {
						"type": 0,
						"start": 0,
						"end": 13,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 14,
								"offset": 13
							},
							"source": "Japanese (ja)"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 13,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 14,
									"offset": 13
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 13,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 14,
										"offset": 13
									}
								}
							}],
							"static": "Japanese (ja)"
						}
					},
					"chinese": {
						"type": 0,
						"start": 0,
						"end": 26,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 27,
								"offset": 26
							},
							"source": "Chinese Simplified (zh-CN)"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 26,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 27,
									"offset": 26
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 26,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 27,
										"offset": 26
									}
								}
							}],
							"static": "Chinese Simplified (zh-CN)"
						}
					},
					"arabic": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Arabic (ar)"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Arabic (ar)"
						}
					}
				},
				"apiAccess": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 10,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 11,
								"offset": 10
							},
							"source": "API Access"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 10,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 11,
									"offset": 10
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 10,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 11,
										"offset": 10
									}
								}
							}],
							"static": "API Access"
						}
					},
					"apiKey": {
						"type": 0,
						"start": 0,
						"end": 7,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 8,
								"offset": 7
							},
							"source": "API Key"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 7,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 8,
									"offset": 7
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 7,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 8,
										"offset": 7
									}
								}
							}],
							"static": "API Key"
						}
					},
					"copy": {
						"type": 0,
						"start": 0,
						"end": 4,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 5,
								"offset": 4
							},
							"source": "Copy"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 4,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 5,
									"offset": 4
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 4,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 5,
										"offset": 4
									}
								}
							}],
							"static": "Copy"
						}
					},
					"description": {
						"type": 0,
						"start": 0,
						"end": 61,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 62,
								"offset": 61
							},
							"source": "Use this key to access the benchmarking API programmatically."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 61,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 62,
									"offset": 61
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 61,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 62,
										"offset": 61
									}
								}
							}],
							"static": "Use this key to access the benchmarking API programmatically."
						}
					}
				},
				"footer": {
					"cancel": {
						"type": 0,
						"start": 0,
						"end": 6,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 7,
								"offset": 6
							},
							"source": "Cancel"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 6,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 7,
									"offset": 6
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 6,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 7,
										"offset": 6
									}
								}
							}],
							"static": "Cancel"
						}
					},
					"saveChanges": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "Save Changes"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "Save Changes"
						}
					}
				}
			},
			"team": {
				"header": {
					"title": {
						"type": 0,
						"start": 0,
						"end": 8,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 9,
								"offset": 8
							},
							"source": "Our Team"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 8,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 9,
									"offset": 8
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 8,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 9,
										"offset": 8
									}
								}
							}],
							"static": "Our Team"
						}
					},
					"description": {
						"type": 0,
						"start": 0,
						"end": 107,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 108,
								"offset": 107
							},
							"source": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 107,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 108,
									"offset": 107
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 107,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 108,
										"offset": 107
									}
								}
							}],
							"static": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
						}
					}
				},
				"grid": {
					"member1Name": {
						"type": 0,
						"start": 0,
						"end": 10,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 11,
								"offset": 10
							},
							"source": "Sarah Chen"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 10,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 11,
									"offset": 10
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 10,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 11,
										"offset": 10
									}
								}
							}],
							"static": "Sarah Chen"
						}
					},
					"member1Role": {
						"type": 0,
						"start": 0,
						"end": 23,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 24,
								"offset": 23
							},
							"source": "Founder & Lead Engineer"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 23,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 24,
									"offset": 23
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 23,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 24,
										"offset": 23
									}
								}
							}],
							"static": "Founder & Lead Engineer"
						}
					},
					"member1Bio": {
						"type": 0,
						"start": 0,
						"end": 98,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 99,
								"offset": 98
							},
							"source": "Former Google engineer with 10 years of experience building internationalization systems at scale."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 98,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 99,
									"offset": 98
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 98,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 99,
										"offset": 98
									}
								}
							}],
							"static": "Former Google engineer with 10 years of experience building internationalization systems at scale."
						}
					},
					"member2Name": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "Marcus Weber"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "Marcus Weber"
						}
					},
					"member2Role": {
						"type": 0,
						"start": 0,
						"end": 20,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 21,
								"offset": 20
							},
							"source": "Performance Engineer"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 20,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 21,
									"offset": 20
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 20,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 21,
										"offset": 20
									}
								}
							}],
							"static": "Performance Engineer"
						}
					},
					"member2Bio": {
						"type": 0,
						"start": 0,
						"end": 102,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 103,
								"offset": 102
							},
							"source": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 102,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 103,
									"offset": 102
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 102,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 103,
										"offset": 102
									}
								}
							}],
							"static": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
						}
					},
					"member3Name": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Aisha Patel"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Aisha Patel"
						}
					},
					"member3Role": {
						"type": 0,
						"start": 0,
						"end": 18,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 19,
								"offset": 18
							},
							"source": "Developer Advocate"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 18,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 19,
									"offset": 18
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 18,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 19,
										"offset": 18
									}
								}
							}],
							"static": "Developer Advocate"
						}
					},
					"member3Bio": {
						"type": 0,
						"start": 0,
						"end": 97,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 98,
								"offset": 97
							},
							"source": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 97,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 98,
									"offset": 97
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 97,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 98,
										"offset": 97
									}
								}
							}],
							"static": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
						}
					},
					"member4Name": {
						"type": 0,
						"start": 0,
						"end": 15,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 16,
								"offset": 15
							},
							"source": "Tomás Rodríguez"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 15,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 16,
									"offset": 15
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 15,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 16,
										"offset": 15
									}
								}
							}],
							"static": "Tomás Rodríguez"
						}
					},
					"member4Role": {
						"type": 0,
						"start": 0,
						"end": 20,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 21,
								"offset": 20
							},
							"source": "Full-Stack Developer"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 20,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 21,
									"offset": 20
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 20,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 21,
										"offset": 20
									}
								}
							}],
							"static": "Full-Stack Developer"
						}
					},
					"member4Bio": {
						"type": 0,
						"start": 0,
						"end": 96,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 97,
								"offset": 96
							},
							"source": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 96,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 97,
									"offset": 96
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 96,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 97,
										"offset": 96
									}
								}
							}],
							"static": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
						}
					},
					"member5Name": {
						"type": 0,
						"start": 0,
						"end": 11,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 12,
								"offset": 11
							},
							"source": "Yuki Tanaka"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 11,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 12,
									"offset": 11
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 11,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 12,
										"offset": 11
									}
								}
							}],
							"static": "Yuki Tanaka"
						}
					},
					"member5Role": {
						"type": 0,
						"start": 0,
						"end": 12,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 13,
								"offset": 12
							},
							"source": "Data Analyst"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 12,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 13,
									"offset": 12
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 12,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 13,
										"offset": 12
									}
								}
							}],
							"static": "Data Analyst"
						}
					},
					"member5Bio": {
						"type": 0,
						"start": 0,
						"end": 87,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 88,
								"offset": 87
							},
							"source": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 87,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 88,
									"offset": 87
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 87,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 88,
										"offset": 87
									}
								}
							}],
							"static": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
						}
					},
					"member6Name": {
						"type": 0,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							},
							"source": "Elena Kowalski"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 14,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 15,
										"offset": 14
									}
								}
							}],
							"static": "Elena Kowalski"
						}
					},
					"member6Role": {
						"type": 0,
						"start": 0,
						"end": 17,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 18,
								"offset": 17
							},
							"source": "Community Manager"
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 17,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 18,
									"offset": 17
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 17,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 18,
										"offset": 17
									}
								}
							}],
							"static": "Community Manager"
						}
					},
					"member6Bio": {
						"type": 0,
						"start": 0,
						"end": 96,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 97,
								"offset": 96
							},
							"source": "Manages community contributions, partnerships, and events. Background in open source governance."
						},
						"body": {
							"type": 2,
							"start": 0,
							"end": 96,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 97,
									"offset": 96
								}
							},
							"items": [{
								"type": 3,
								"start": 0,
								"end": 96,
								"loc": {
									"start": {
										"line": 1,
										"column": 1,
										"offset": 0
									},
									"end": {
										"line": 1,
										"column": 97,
										"offset": 96
									}
								}
							}],
							"static": "Manages community contributions, partnerships, and events. Background in open source governance."
						}
					}
				}
			},
			"notFound": {
				"title": {
					"type": 0,
					"start": 0,
					"end": 3,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 4,
							"offset": 3
						},
						"source": "404"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 3,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 4,
								"offset": 3
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 3,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 4,
									"offset": 3
								}
							}
						}],
						"static": "404"
					}
				},
				"description": {
					"type": 0,
					"start": 0,
					"end": 20,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 21,
							"offset": 20
						},
						"source": "Oops! Page not found"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 20,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 21,
								"offset": 20
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 20,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 21,
									"offset": 20
								}
							}
						}],
						"static": "Oops! Page not found"
					}
				},
				"returnHome": {
					"type": 0,
					"start": 0,
					"end": 14,
					"loc": {
						"start": {
							"line": 1,
							"column": 1,
							"offset": 0
						},
						"end": {
							"line": 1,
							"column": 15,
							"offset": 14
						},
						"source": "Return to Home"
					},
					"body": {
						"type": 2,
						"start": 0,
						"end": 14,
						"loc": {
							"start": {
								"line": 1,
								"column": 1,
								"offset": 0
							},
							"end": {
								"line": 1,
								"column": 15,
								"offset": 14
							}
						},
						"items": [{
							"type": 3,
							"start": 0,
							"end": 14,
							"loc": {
								"start": {
									"line": 1,
									"column": 1,
									"offset": 0
								},
								"end": {
									"line": 1,
									"column": 15,
									"offset": 14
								}
							}
						}],
						"static": "Return to Home"
					}
				}
			}
		},
		fr,
		es,
		de,
		it,
		pt,
		zh,
		ja,
		ko,
		ru
	}
});
var Wrapper_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "Wrapper",
	setup(__props, { expose: __expose }) {
		__expose();
		const app = getCurrentInstance()?.appContext.app;
		if (app && !app.config.globalProperties.$i18n) app.use(i18n);
		const __returned__ = { app };
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
var Wrapper_default = _plugin_vue_export_helper_default(Wrapper_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-i18n-app/scripts/Wrapper.vue"]]);
var ResultsTable_wrapper_default = { render() {
	return h(Wrapper_default, {}, { default: () => h(ResultsTable_default) });
} };
export { ResultsTable_wrapper_default as default };

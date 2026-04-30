import * as e from "vue";
import { Fragment as t, Text as n, computed as r, createVNode as i, defineComponent as a, getCurrentScope as o, h as s, inject as c, onMounted as l, onScopeDispose as u, onUnmounted as d, ref as f, shallowRef as p, watch as m } from "vue";
function h(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var g = {};
function _(e) {
	g[e] || (g[e] = !0, h(e));
}
var v = typeof window < "u", y, b;
if (process.env.NODE_ENV !== "production") {
	let e = v && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (y = (t) => {
		e.mark(t);
	}, b = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var x = /\{([0-9a-zA-Z]+)\}/g;
function S(e, ...t) {
	return t.length === 1 && L(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(x, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var C = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), w = (e, t, n) => ee({
	l: e,
	k: t,
	s: n
}), ee = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), T = (e) => typeof e == "number" && isFinite(e), E = (e) => le(e) === "[object Date]", D = (e) => le(e) === "[object RegExp]", O = (e) => R(e) && Object.keys(e).length === 0, k = Object.assign, te = Object.create, A = (e = null) => te(e), j, ne = () => j ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : A();
function re(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ie(e) {
	return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ae(e) {
	return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${ie(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${ie(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && h("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t) => {
		e = e.replace(t, "$1javascript&#58;");
	}), e;
}
var oe = Object.prototype.hasOwnProperty;
function M(e, t) {
	return oe.call(e, t);
}
var N = Array.isArray, P = (e) => typeof e == "function", F = (e) => typeof e == "string", I = (e) => typeof e == "boolean", L = (e) => typeof e == "object" && !!e, se = (e) => L(e) && P(e.then) && P(e.catch), ce = Object.prototype.toString, le = (e) => ce.call(e), R = (e) => le(e) === "[object Object]", ue = (e) => e == null ? "" : N(e) || R(e) && e.toString === ce ? JSON.stringify(e, null, 2) : String(e);
function de(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var z = 2;
function fe(e, t = 0, n = e.length) {
	let r = e.split(/\r?\n/), i = 0, a = [];
	for (let e = 0; e < r.length; e++) if (i += r[e].length + 1, i >= t) {
		for (let o = e - z; o <= e + z || n > i; o++) {
			if (o < 0 || o >= r.length) continue;
			let s = o + 1;
			a.push(`${s}${" ".repeat(3 - String(s).length)}|  ${r[o]}`);
			let c = r[o].length;
			if (o === e) {
				let e = t - (i - c) + 1, r = Math.max(1, n > i ? c - e : n - t);
				a.push("   |  " + " ".repeat(e) + "^".repeat(r));
			} else if (o > e) {
				if (n > i) {
					let e = Math.max(Math.min(n - i, c), 1);
					a.push("   |  " + "^".repeat(e));
				}
				i += c + 1;
			}
		}
		break;
	}
	return a.join("\n");
}
function pe() {
	let e = /* @__PURE__ */ new Map();
	return {
		events: e,
		on(t, n) {
			let r = e.get(t);
			r && r.push(n) || e.set(t, [n]);
		},
		off(t, n) {
			let r = e.get(t);
			r && r.splice(r.indexOf(n) >>> 0, 1);
		},
		emit(t, n) {
			(e.get(t) || []).slice().map((e) => e(n)), (e.get("*") || []).slice().map((e) => e(t, n));
		}
	};
}
var me = (e) => !L(e) || N(e);
function he(e, t) {
	if (me(e) || me(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (L(e[r]) && !L(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : A()), me(t[r]) || me(e[r]) ? t[r] = e[r] : n.push({
				src: e[r],
				des: t[r]
			}));
		});
	}
}
function ge(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function _e(e, t, n) {
	let r = {
		start: e,
		end: t
	};
	return n != null && (r.source = n), r;
}
var B = {
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
}, ve = {
	[B.EXPECTED_TOKEN]: "Expected token: '{0}'",
	[B.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
	[B.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
	[B.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
	[B.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
	[B.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
	[B.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
	[B.EMPTY_PLACEHOLDER]: "Empty placeholder",
	[B.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
	[B.INVALID_LINKED_FORMAT]: "Invalid linked format",
	[B.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
	[B.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
	[B.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
	[B.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
	[B.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
	[B.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function ye(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = process.env.NODE_ENV === "production" ? e : S((i || ve)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function be(e) {
	throw e;
}
var xe = /<\/?[\w\s="/.':;#-\/]+>/, Se = (e) => xe.test(e), V = " ", Ce = "\r", H = "\n", we = "\u2028", Te = "\u2029";
function Ee(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Ce && t[e + 1] === H, s = (e) => t[e] === H, c = (e) => t[e] === Te, l = (e) => t[e] === we, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? H : t[e], g = () => h(n), _ = () => h(n + a);
	function v() {
		return a = 0, u(n) && (r++, i = 0), o(n) && n++, n++, i++, t[n];
	}
	function y() {
		return o(n + a) && a++, a++, t[n + a];
	}
	function b() {
		n = 0, r = 1, i = 1, a = 0;
	}
	function x(e = 0) {
		a = e;
	}
	function S() {
		let e = n + a;
		for (; e !== n;) v();
		a = 0;
	}
	return {
		index: d,
		line: f,
		column: p,
		peekOffset: m,
		charAt: h,
		currentChar: g,
		currentPeek: _,
		next: v,
		peek: y,
		reset: b,
		resetPeek: x,
		skipToPeek: S
	};
}
var U = void 0, De = "'", Oe = "tokenizer";
function ke(e, t = {}) {
	let n = t.location !== !1, r = Ee(e), i = () => r.index(), a = () => ge(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
		currentType: 13,
		offset: s,
		startLoc: o,
		endLoc: o,
		lastType: 13,
		lastOffset: s,
		lastStartLoc: o,
		lastEndLoc: o,
		braceNest: 0,
		inLinked: !1,
		text: ""
	}, l = () => c, { onError: u } = t;
	function d(e, t, r, ...i) {
		let a = l();
		t.column += r, t.offset += r, u && u(ye(e, n ? _e(a.startLoc, t) : null, {
			domain: Oe,
			args: i
		}));
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = _e(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
	}
	let p = (e) => f(e, 13);
	function m(e, t) {
		return e.currentChar() === t ? (e.next(), t) : (d(B.EXPECTED_TOKEN, a(), 0, t), "");
	}
	function h(e) {
		let t = "";
		for (; e.currentPeek() === V || e.currentPeek() === H;) t += e.currentPeek(), e.peek();
		return t;
	}
	function g(e) {
		let t = h(e);
		return e.skipToPeek(), t;
	}
	function _(e) {
		if (e === U) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === U) return !1;
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function y(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function b(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = v(e.currentPeek() === "-" ? e.peek() : e.currentPeek());
		return e.resetPeek(), r;
	}
	function x(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = e.currentPeek() === De;
		return e.resetPeek(), r;
	}
	function S(e, t) {
		let { currentType: n } = t;
		if (n !== 7) return !1;
		h(e);
		let r = e.currentPeek() === ".";
		return e.resetPeek(), r;
	}
	function C(e, t) {
		let { currentType: n } = t;
		if (n !== 8) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function w(e, t) {
		let { currentType: n } = t;
		if (!(n === 7 || n === 11)) return !1;
		h(e);
		let r = e.currentPeek() === ":";
		return e.resetPeek(), r;
	}
	function ee(e, t) {
		let { currentType: n } = t;
		if (n !== 9) return !1;
		let r = () => {
			let t = e.currentPeek();
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === V || !t ? !1 : t === H ? (e.peek(), r()) : E(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function T(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function E(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? !(r === V || r === H) : i === V ? (e.peek(), n(!0, V)) : i === H ? (e.peek(), n(!0, H)) : !0;
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function D(e, t) {
		let n = e.currentChar();
		return n === U ? U : t(n) ? (e.next(), n) : null;
	}
	function O(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function k(e) {
		return D(e, O);
	}
	function te(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function A(e) {
		return D(e, te);
	}
	function j(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function ne(e) {
		return D(e, j);
	}
	function re(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function ie(e) {
		return D(e, re);
	}
	function ae(e) {
		let t = "", n = "";
		for (; t = ne(e);) n += t;
		return n;
	}
	function oe(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === V || n === H) if (E(e)) t += n, e.next();
			else if (T(e)) break;
			else t += n, e.next();
			else t += n, e.next();
		}
		return t;
	}
	function M(e) {
		g(e);
		let t = "", n = "";
		for (; t = A(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== U && r !== V && r !== H && r !== "　") {
			let t = ce(e);
			return d(B.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === U && d(B.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function N(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${ae(e)}`) : t += ae(e), e.currentChar() === U && d(B.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function P(e) {
		return e !== De && e !== H;
	}
	function F(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = D(e, P);) t === "\\" ? n += I(e) : n += t;
		let r = e.currentChar();
		return r === H || r === U ? (d(B.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === H && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function I(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return L(e, t, 4);
			case "U": return L(e, t, 6);
			default: return d(B.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function L(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = ie(e);
			if (!n) {
				d(B.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function se(e) {
		return e !== "{" && e !== "}" && e !== V && e !== H;
	}
	function ce(e) {
		g(e);
		let t = "", n = "";
		for (; t = D(e, se);) n += t;
		return n;
	}
	function le(e) {
		let t = "", n = "";
		for (; t = k(e);) n += t;
		return n;
	}
	function R(e) {
		let t = (n) => {
			let r = e.currentChar();
			return r === "{" || r === "@" || r === "|" || r === "(" || r === ")" || !r || r === V ? n : (n += r, e.next(), t(n));
		};
		return t("");
	}
	function ue(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function de(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(B.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(B.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(B.UNTERMINATED_CLOSING_BRACE, a(), 0), n = z(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (T(e)) return t.braceNest > 0 && d(B.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, ue(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(B.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, fe(e, t);
				if (r = y(e, t)) return n = f(t, 4, M(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, N(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 6, F(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, ce(e)), d(B.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function z(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch ((n === 7 || n === 8 || n === 11 || n === 9) && (i === H || i === V) && d(B.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return T(e) ? (r = f(t, 1, ue(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), z(e, t)) : C(e, t) ? (g(e), f(t, 11, le(e))) : ee(e, t) ? (g(e), i === "{" ? de(e, t) || r : f(t, 10, R(e))) : (n === 7 && d(B.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, fe(e, t));
		}
	}
	function fe(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return de(e, t) || p(t);
		if (t.inLinked) return z(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return de(e, t) || p(t);
			case "}": return d(B.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return z(e, t) || p(t);
			default:
				if (T(e)) return n = f(t, 1, ue(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (E(e)) return f(t, 0, oe(e));
				break;
		}
		return n;
	}
	function pe() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === U ? f(c, 13) : fe(r, c);
	}
	return {
		nextToken: pe,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var Ae = "parser", W = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, je = /\\([\\@{}|])/g;
function Me(e, t) {
	return t;
}
function Ne(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function Pe(e = {}) {
	let t = e.location !== !1, { onError: n } = e;
	function r(e, r, i, a, ...o) {
		let s = e.currentPosition();
		s.offset += a, s.column += a, n && n(ye(r, t ? _e(i, s) : null, {
			domain: Ae,
			args: o
		}));
	}
	function i(e, n, r) {
		let i = { type: e };
		return t && (i.start = n, i.end = n, i.loc = {
			start: r,
			end: r
		}), i;
	}
	function a(e, n, r, i) {
		t && (e.end = n, e.loc && (e.loc.end = r));
	}
	function o(e, t) {
		let n = e.context(), r = i(3, n.offset, n.startLoc);
		return r.value = t.replace(je, Me), a(r, e.currentOffset(), e.currentPosition()), r;
	}
	function s(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(5, n, r);
		return o.index = parseInt(t, 10), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function c(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(4, n, r);
		return o.key = t, e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function l(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(9, n, r);
		return o.value = t.replace(W, Ne), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function u(e) {
		let t = e.nextToken(), n = e.context(), { lastOffset: o, lastStartLoc: s } = n, c = i(8, o, s);
		return t.type === 11 ? (t.value ?? r(e, B.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, G(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, B.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
			nextConsumeToken: t,
			node: c
		});
	}
	function d(e, t) {
		let n = e.context(), r = i(7, n.offset, n.startLoc);
		return r.value = t, a(r, e.currentOffset(), e.currentPosition()), r;
	}
	function f(e) {
		let t = e.context(), n = i(6, t.offset, t.startLoc), o = e.nextToken();
		if (o.type === 8) {
			let t = u(e);
			n.modifier = t.node, o = t.nextConsumeToken || e.nextToken();
		}
		switch (o.type !== 9 && r(e, B.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, G(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, B.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, G(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, B.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, G(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, B.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, G(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, B.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, G(o)), n.key = l(e, o.value || "");
				break;
			default: {
				r(e, B.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
				let s = e.context(), c = i(7, s.offset, s.startLoc);
				return c.value = "", a(c, s.offset, s.startLoc), n.key = c, a(n, s.offset, s.startLoc), {
					nextConsumeToken: o,
					node: n
				};
			}
		}
		return a(n, e.currentOffset(), e.currentPosition()), { node: n };
	}
	function p(e) {
		let t = e.context(), n = i(2, t.currentType === 1 ? e.currentOffset() : t.offset, t.currentType === 1 ? t.endLoc : t.startLoc);
		n.items = [];
		let u = null;
		do {
			let i = u || e.nextToken();
			switch (u = null, i.type) {
				case 0:
					i.value ?? r(e, B.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, G(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, B.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, G(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, B.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, G(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, B.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, G(i)), n.items.push(l(e, i.value || ""));
					break;
				case 7: {
					let t = f(e);
					n.items.push(t.node), u = t.nextConsumeToken || null;
					break;
				}
			}
		} while (t.currentType !== 13 && t.currentType !== 1);
		return a(n, t.currentType === 1 ? t.lastOffset : e.currentOffset(), t.currentType === 1 ? t.lastEndLoc : e.currentPosition()), n;
	}
	function m(e, t, n, o) {
		let s = e.context(), c = o.items.length === 0, l = i(1, t, n);
		l.cases = [], l.cases.push(o);
		do {
			let t = p(e);
			c ||= t.items.length === 0, l.cases.push(t);
		} while (s.currentType !== 13);
		return c && r(e, B.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0), a(l, e.currentOffset(), e.currentPosition()), l;
	}
	function h(e) {
		let t = e.context(), { offset: n, startLoc: r } = t, i = p(e);
		return t.currentType === 13 ? i : m(e, n, r, i);
	}
	function g(n) {
		let o = ke(n, k({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, B.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function G(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Fe(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function Ie(e, t) {
	for (let n = 0; n < e.length; n++) Le(e[n], t);
}
function Le(e, t) {
	switch (e.type) {
		case 1:
			Ie(e.cases, t), t.helper("plural");
			break;
		case 2:
			Ie(e.items, t);
			break;
		case 6:
			Le(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4:
			t.helper("interpolate"), t.helper("named");
			break;
	}
}
function Re(e, t = {}) {
	let n = Fe(e);
	n.helper("normalize"), e.body && Le(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function ze(e) {
	let t = e.body;
	return t.type === 2 ? Be(t) : t.cases.forEach((e) => Be(e)), e;
}
function Be(e) {
	if (e.items.length === 1) {
		let t = e.items[0];
		(t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
	} else {
		let t = [];
		for (let n = 0; n < e.items.length; n++) {
			let r = e.items[n];
			if (!(r.type === 3 || r.type === 9) || r.value == null) break;
			t.push(r.value);
		}
		if (t.length === e.items.length) {
			e.static = de(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
var Ve = "minifier";
function He(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			He(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) He(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) He(n[e]);
			t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
			break;
		}
		case 3:
		case 9:
		case 8:
		case 7: {
			let t = e;
			t.value && (t.v = t.value, delete t.value);
			break;
		}
		case 6: {
			let t = e;
			He(t.key), t.k = t.key, delete t.key, t.modifier && (He(t.modifier), t.m = t.modifier, delete t.modifier);
			break;
		}
		case 5: {
			let t = e;
			t.i = t.index, delete t.index;
			break;
		}
		case 4: {
			let t = e;
			t.k = t.key, delete t.key;
			break;
		}
		default: if (process.env.NODE_ENV !== "production") throw ye(B.UNHANDLED_MINIFIER_NODE_TYPE, null, {
			domain: Ve,
			args: [e.type]
		});
	}
	delete e.type;
}
var Ue = "parser";
function We(e, t) {
	let { sourceMap: n, filename: r, breakLineCode: i, needIndent: a } = t, o = t.location !== !1, s = {
		filename: r,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		map: void 0,
		breakLineCode: i,
		needIndent: a,
		indentLevel: 0
	};
	o && e.loc && (s.source = e.loc.source);
	let c = () => s;
	function l(e, t) {
		s.code += e;
	}
	function u(e, t = !0) {
		let n = t ? i : "";
		l(a ? n + "  ".repeat(e) : n);
	}
	function d(e = !0) {
		let t = ++s.indentLevel;
		e && u(t);
	}
	function f(e = !0) {
		let t = --s.indentLevel;
		e && u(t);
	}
	function p() {
		u(s.indentLevel);
	}
	return {
		context: c,
		push: l,
		indent: d,
		deindent: f,
		newline: p,
		helper: (e) => `_${e}`,
		needIndent: () => s.needIndent
	};
}
function Ge(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), Ye(e, t.key), t.modifier ? (e.push(", "), Ye(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Ke(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (Ye(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function qe(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (Ye(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function Je(e, t) {
	t.body ? Ye(e, t.body) : e.push("null");
}
function Ye(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			Je(e, t);
			break;
		case 1:
			qe(e, t);
			break;
		case 2:
			Ke(e, t);
			break;
		case 6:
			Ge(e, t);
			break;
		case 8:
			e.push(JSON.stringify(t.value), t);
			break;
		case 7:
			e.push(JSON.stringify(t.value), t);
			break;
		case 5:
			e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
			break;
		case 4:
			e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
			break;
		case 9:
			e.push(JSON.stringify(t.value), t);
			break;
		case 3:
			e.push(JSON.stringify(t.value), t);
			break;
		default: if (process.env.NODE_ENV !== "production") throw ye(B.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: Ue,
			args: [t.type]
		});
	}
}
var Xe = (e, t = {}) => {
	let n = F(t.mode) ? t.mode : "normal", r = F(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, o = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = We(e, {
		mode: n,
		filename: r,
		sourceMap: i,
		breakLineCode: a,
		needIndent: o
	});
	c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), s.length > 0 && (c.push(`const { ${de(s.map((e) => `${e}: _${e}`), ", ")} } = ctx`), c.newline()), c.push("return "), Ye(c, e), c.deindent(o), c.push("}"), delete e.helpers;
	let { code: l, map: u } = c.context();
	return {
		ast: e,
		code: l,
		map: u ? u.toJSON() : void 0
	};
};
function Ze(e, t = {}) {
	let n = k({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = Pe(n).parse(e);
	return r ? (a && ze(o), i && He(o), {
		ast: o,
		code: ""
	}) : (Re(o, n), Xe(o, n));
}
function K(e) {
	return L(e) && st(e) === 0 && (M(e, "b") || M(e, "body"));
}
var Qe = ["b", "body"];
function $e(e) {
	return mt(e, Qe);
}
var et = ["c", "cases"];
function tt(e) {
	return mt(e, et, []);
}
var nt = ["s", "static"];
function rt(e) {
	return mt(e, nt);
}
var it = ["i", "items"];
function at(e) {
	return mt(e, it, []);
}
var ot = ["t", "type"];
function st(e) {
	return mt(e, ot);
}
var ct = ["v", "value"];
function lt(e, t) {
	let n = mt(e, ct);
	if (n != null) return n;
	throw gt(t);
}
var ut = ["m", "modifier"];
function dt(e) {
	return mt(e, ut);
}
var ft = ["k", "key"];
function pt(e) {
	let t = mt(e, ft);
	if (t) return t;
	throw gt(6);
}
function mt(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (M(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var ht = [
	...Qe,
	...et,
	...nt,
	...it,
	...ft,
	...ut,
	...ct,
	...ot
];
function gt(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function _t(e) {
	return (t) => vt(t, e);
}
function vt(e, t) {
	let n = $e(t);
	if (n == null) throw gt(0);
	if (st(n) === 1) {
		let t = tt(n);
		return e.plural(t.reduce((t, n) => [...t, yt(e, n)], []));
	} else return yt(e, n);
}
function yt(e, t) {
	let n = rt(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = at(t).reduce((t, n) => [...t, bt(e, n)], []);
		return e.normalize(n);
	}
}
function bt(e, t) {
	let n = st(t);
	switch (n) {
		case 3: return lt(t, n);
		case 9: return lt(t, n);
		case 4: {
			let r = t;
			if (M(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (M(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw gt(n);
		}
		case 5: {
			let r = t;
			if (M(r, "i") && T(r.i)) return e.interpolate(e.list(r.i));
			if (M(r, "index") && T(r.index)) return e.interpolate(e.list(r.index));
			throw gt(n);
		}
		case 6: {
			let n = t, r = dt(n), i = pt(n);
			return e.linked(bt(e, i), r ? bt(e, r) : void 0, e.type);
		}
		case 7: return lt(t, n);
		case 8: return lt(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var xt = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function St(e, t) {
	t && Se(e) && h(S(xt, { source: e }));
}
var Ct = (e) => e, wt = A();
function Tt(e, t = {}) {
	let n = !1, r = t.onError || be;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...Ze(e, t),
		detectError: n
	};
}
function Et(e, t) {
	if (F(e)) {
		let n = I(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
		process.env.NODE_ENV !== "production" && St(e, n);
		let r = (t.onCacheKey || Ct)(e), i = wt[r];
		if (i) return i;
		let { ast: a, detectError: o } = Tt(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = _t(a);
		return o ? s : wt[r] = s;
	} else {
		if (process.env.NODE_ENV !== "production" && !K(e)) return h(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
		let n = e.cacheKey;
		return n ? wt[n] || (wt[n] = _t(e)) : _t(e);
	}
}
var Dt = null;
function Ot(e) {
	Dt = e;
}
function kt(e, t, n) {
	Dt && Dt.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var At = jt("function:translate");
function jt(e) {
	return (t) => Dt && Dt.emit(e, t);
}
var q = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function J(e) {
	return ye(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: Mt });
}
var Mt = {
	[q.INVALID_ARGUMENT]: "Invalid arguments",
	[q.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[q.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[q.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[q.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[q.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[q.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Nt(e, t) {
	return t.locale == null ? Ft(e.locale) : Ft(t.locale);
}
var Pt;
function Ft(e) {
	if (F(e)) return e;
	if (P(e)) {
		if (e.resolvedOnce && Pt != null) return Pt;
		if (e.constructor.name === "Function") {
			let t = e();
			if (se(t)) throw J(q.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return Pt = t;
		} else throw J(q.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw J(q.NOT_SUPPORT_LOCALE_TYPE);
}
function It(e, t, n) {
	return [...new Set([n, ...N(t) ? t : L(t) ? Object.keys(t) : F(t) ? [t] : [n]])];
}
function Lt(e, t, n) {
	let r = F(n) ? n : $t, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; N(e);) e = Rt(a, e, t);
		let o = N(t) || !R(t) ? t : t.default ? t.default : null;
		e = F(o) ? [o] : o, N(e) && Rt(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function Rt(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && I(r); i++) {
		let a = t[i];
		F(a) && (r = zt(e, t[i], n));
	}
	return r;
}
function zt(e, t, n) {
	let r, i = t.split("-");
	do
		r = Bt(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function Bt(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (N(n) || R(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var Vt = [];
Vt[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, Vt[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, Vt[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, Vt[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, Vt[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, Vt[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, Vt[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var Ht = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ut(e) {
	return Ht.test(e);
}
function Wt(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Gt(e) {
	if (e == null) return "o";
	switch (e.charCodeAt(0)) {
		case 91:
		case 93:
		case 46:
		case 34:
		case 39: return e;
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
function Kt(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ut(t) ? Wt(t) : "*" + t;
}
function qt(e) {
	let t = [], n = -1, r = 0, i = 0, a, o, s, c, l, u, d, f = [];
	f[0] = () => {
		o === void 0 ? o = s : o += s;
	}, f[1] = () => {
		o !== void 0 && (t.push(o), o = void 0);
	}, f[2] = () => {
		f[0](), i++;
	}, f[3] = () => {
		if (i > 0) i--, r = 4, f[0]();
		else {
			if (i = 0, o === void 0 || (o = Kt(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = Gt(a), d = Vt[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var Jt = /* @__PURE__ */ new Map();
function Yt(e, t) {
	return L(e) ? e[t] : null;
}
function Xt(e, t) {
	if (!L(e)) return null;
	let n = Jt.get(t);
	if (n || (n = qt(t), n && Jt.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (ht.includes(e) && K(i) || !L(i) || !M(i, e)) return null;
		let t = i[e];
		if (t === void 0 || P(i)) return null;
		i = t, a++;
	}
	return i;
}
var Y = {
	NOT_FOUND_KEY: 1,
	FALLBACK_TO_TRANSLATE: 2,
	CANNOT_FORMAT_NUMBER: 3,
	FALLBACK_TO_NUMBER_FORMAT: 4,
	CANNOT_FORMAT_DATE: 5,
	FALLBACK_TO_DATE_FORMAT: 6,
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
	INVALID_NUMBER_ARGUMENT: 8,
	INVALID_DATE_ARGUMENT: 9
}, Zt = {
	[Y.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
	[Y.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
	[Y.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
	[Y.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
	[Y.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
	[Y.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
	[Y.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.",
	[Y.INVALID_NUMBER_ARGUMENT]: "Invalid argument for number formatting: expected a number but received '{value}'.",
	[Y.INVALID_DATE_ARGUMENT]: "Invalid argument for datetime formatting: expected a Date, number, or ISO string but received '{value}'."
};
function X(e, ...t) {
	return S(Zt[e], ...t);
}
var Qt = "11.4.0", $t = "en-US", en = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function tn() {
	return {
		upper: (e, t) => t === "text" && F(e) ? e.toUpperCase() : t === "vnode" && L(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && F(e) ? e.toLowerCase() : t === "vnode" && L(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && F(e) ? en(e) : t === "vnode" && L(e) && "__v_isVNode" in e ? en(e.children) : e
	};
}
var nn;
function rn(e) {
	nn = e;
}
var an;
function on(e) {
	an = e;
}
var sn;
function cn(e) {
	sn = e;
}
var ln = null, un = (e) => {
	ln = e;
}, dn = () => ln, fn = null, pn = (e) => {
	fn = e;
}, mn = () => fn, hn = 0;
function gn(e = {}) {
	let t = P(e.onWarn) ? e.onWarn : h, n = F(e.version) ? e.version : Qt, r = F(e.locale) || P(e.locale) ? e.locale : $t, i = P(r) ? $t : r, a = N(e.fallbackLocale) || R(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = R(e.messages) ? e.messages : _n(i), s = R(e.datetimeFormats) ? e.datetimeFormats : _n(i), c = R(e.numberFormats) ? e.numberFormats : _n(i), l = k(A(), e.modifiers, tn()), u = e.pluralRules || A(), d = P(e.missing) ? e.missing : null, f = I(e.missingWarn) || D(e.missingWarn) ? e.missingWarn : !0, p = I(e.fallbackWarn) || D(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, g = !!e.unresolving, v = P(e.postTranslation) ? e.postTranslation : null, y = R(e.processor) ? e.processor : null, b = I(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, x = !!e.escapeParameter, S = P(e.messageCompiler) ? e.messageCompiler : nn;
	process.env.NODE_ENV !== "production" && P(e.messageCompiler) && _(X(Y.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let C = P(e.messageResolver) ? e.messageResolver : an || Yt, w = P(e.localeFallbacker) ? e.localeFallbacker : sn || It, ee = L(e.fallbackContext) ? e.fallbackContext : void 0, T = e, E = L(T.__datetimeFormatters) ? T.__datetimeFormatters : /* @__PURE__ */ new Map(), O = L(T.__numberFormatters) ? T.__numberFormatters : /* @__PURE__ */ new Map(), te = L(T.__meta) ? T.__meta : {};
	hn++;
	let j = {
		version: n,
		cid: hn,
		locale: r,
		fallbackLocale: a,
		messages: o,
		modifiers: l,
		pluralRules: u,
		missing: d,
		missingWarn: f,
		fallbackWarn: p,
		fallbackFormat: m,
		unresolving: g,
		postTranslation: v,
		processor: y,
		warnHtmlMessage: b,
		escapeParameter: x,
		messageCompiler: S,
		messageResolver: C,
		localeFallbacker: w,
		fallbackContext: ee,
		onWarn: t,
		__meta: te
	};
	return j.datetimeFormats = s, j.numberFormats = c, j.__datetimeFormatters = E, j.__numberFormatters = O, process.env.NODE_ENV !== "production" && (j.__v_emitter = T.__v_emitter == null ? void 0 : T.__v_emitter), process.env.NODE_ENV !== "production" && kt(j, n, te), j;
}
var _n = (e) => ({ [e]: A() });
function vn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function yn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function bn(e, t, n, r, i) {
	let { missing: a, onWarn: o } = e;
	if (process.env.NODE_ENV !== "production") {
		let r = e.__v_emitter;
		r && r.emit("missing", {
			locale: n,
			key: t,
			type: i,
			groupId: `${i}:${t}`
		});
	}
	if (a !== null) {
		let r = a(e, n, t, i);
		return F(r) ? r : t;
	} else return process.env.NODE_ENV !== "production" && yn(r, t) && o(X(Y.NOT_FOUND_KEY, {
		key: t,
		locale: n
	})), t;
}
function xn(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Sn(e, t) {
	return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Cn(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (Sn(e, t[r])) return !0;
	return !1;
}
var wn = typeof Intl < "u", Tn = {
	dateTimeFormat: wn && Intl.DateTimeFormat !== void 0,
	numberFormat: wn && Intl.NumberFormat !== void 0
};
function En(e, ...t) {
	let { datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !Tn.dateTimeFormat) return a(X(Y.CANNOT_FORMAT_DATE)), "";
	if (!F(t[0]) && !E(t[0]) && !T(t[0])) return process.env.NODE_ENV !== "production" && a(X(Y.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = On(...t), f = I(u.missingWarn) ? u.missingWarn : e.missingWarn, p = I(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Nt(e, u), g = o(e, i, h);
	if (!F(c) || c === "") return new Intl.DateTimeFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "datetime format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && vn(p, c) && a(X(Y.FALLBACK_TO_DATE_FORMAT, {
			key: c,
			target: v
		})), process.env.NODE_ENV !== "production" && h !== v) {
			let t = e.__v_emitter;
			t && t.emit("fallback", {
				type: S,
				key: c,
				from: b,
				to: x,
				groupId: `${S}:${c}`
			});
		}
		if (_ = n[v] || {}, y = _[c], R(y)) break;
		bn(e, c, v, f, S), b = x;
	}
	if (!R(y) || !F(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	O(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.DateTimeFormat(v, k({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Dn = [
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
function On(...e) {
	let [t, n, r, i] = e, a = A(), o = A(), s;
	if (F(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw J(q.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw J(q.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (E(t)) {
		if (isNaN(t.getTime())) throw J(q.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (T(t)) s = t;
	else throw J(q.INVALID_ARGUMENT);
	return F(n) ? a.key = n : R(n) && Object.keys(n).forEach((e) => {
		Dn.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), F(r) ? a.locale = r : R(r) && (o = r), R(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function kn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
	}
}
function An(e, ...t) {
	let { numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !Tn.numberFormat) return a(X(Y.CANNOT_FORMAT_NUMBER)), "";
	if (!T(t[0])) return process.env.NODE_ENV !== "production" && a(X(Y.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Mn(...t), f = I(u.missingWarn) ? u.missingWarn : e.missingWarn, p = I(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Nt(e, u), g = o(e, i, h);
	if (!F(c) || c === "") return new Intl.NumberFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "number format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && vn(p, c) && a(X(Y.FALLBACK_TO_NUMBER_FORMAT, {
			key: c,
			target: v
		})), process.env.NODE_ENV !== "production" && h !== v) {
			let t = e.__v_emitter;
			t && t.emit("fallback", {
				type: S,
				key: c,
				from: b,
				to: x,
				groupId: `${S}:${c}`
			});
		}
		if (_ = n[v] || {}, y = _[c], R(y)) break;
		bn(e, c, v, f, S), b = x;
	}
	if (!R(y) || !F(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	O(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.NumberFormat(v, k({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var jn = [
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
function Mn(...e) {
	let [t, n, r, i] = e, a = A(), o = A();
	if (!T(t)) throw J(q.INVALID_ARGUMENT);
	let s = t;
	return F(n) ? a.key = n : R(n) && Object.keys(n).forEach((e) => {
		jn.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), F(r) ? a.locale = r : R(r) && (o = r), R(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Nn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
	}
}
var Pn = (e) => e, Fn = (e) => "", In = "text", Ln = (e) => e.length === 0 ? "" : de(e), Rn = ue;
function zn(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function Bn(e) {
	let t = T(e.pluralIndex) ? e.pluralIndex : -1;
	return T(e.named?.count) ? e.named.count : T(e.named?.n) ? e.named.n : t;
}
function Vn(e = {}) {
	let t = e.locale, n = Bn(e), r = F(t) && P(e.pluralRules?.[t]) ? e.pluralRules[t] : zn, i = r === zn ? void 0 : zn, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || A();
	T(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
	let l = (e) => c[e];
	function u(t, n) {
		return (P(e.messages) ? e.messages(t, !!n) : L(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : Fn);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : Pn, f = P(e.processor?.normalize) ? e.processor.normalize : Ln, p = P(e.processor?.interpolate) ? e.processor.interpolate : Rn, m = {
		list: s,
		named: l,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? L(n) ? (a = n.modifier || a, i = n.type || i) : F(n) && (a = n || a) : t.length === 2 && (F(n) && (a = n || a), F(r) && (i = r || i));
			let o = u(e, !0)(m), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && N(s) && a ? s[0] : s;
			return a ? d(a)(c, i) : c;
		},
		message: u,
		type: F(e.processor?.type) ? e.processor.type : In,
		interpolate: p,
		normalize: f,
		values: k(A(), o, c)
	};
	return m;
}
var Hn = () => "", Z = (e) => P(e);
function Un(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = Jn(...t), u = I(l.missingWarn) ? l.missingWarn : e.missingWarn, d = I(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = I(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = F(l.default) || I(l.default) ? I(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, g = n || m != null && (F(m) || P(m)), _ = Nt(e, l);
	f && Wn(l);
	let [v, y, b] = p ? [
		c,
		_,
		s[_] || A()
	] : Gn(e, c, _, o, d, u), x = v, S = c;
	if (!p && !(F(x) || K(x) || Z(x)) && g && (x = m, S = x), !p && (!(F(x) || K(x) || Z(x)) || !F(y))) return i ? -1 : c;
	if (process.env.NODE_ENV !== "production" && F(x) && e.messageCompiler == null) return h(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
	let C = !1, w = Z(x) ? x : Kn(e, c, y, x, S, () => {
		C = !0;
	});
	if (C) return x;
	let ee = qn(e, w, Vn(Zn(e, y, b, l))), T = r ? r(ee, c) : ee;
	if (f && F(T) && (T = ae(T)), process.env.NODE_ENV !== "production") {
		let t = {
			timestamp: Date.now(),
			key: F(c) ? c : Z(x) ? x.key : "",
			locale: y || (Z(x) ? x.locale : ""),
			format: F(x) ? x : Z(x) ? x.source : "",
			message: T
		};
		t.meta = k({}, e.__meta, dn() || {}), At(t);
	}
	return T;
}
function Wn(e) {
	N(e.list) ? e.list = e.list.map((e) => F(e) ? re(e) : e) : L(e.named) && Object.keys(e.named).forEach((t) => {
		F(e.named[t]) && (e.named[t] = re(e.named[t]));
	});
}
function Gn(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = A(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !Sn(n, f) && vn(i, t) && s(X(Y.FALLBACK_TO_TRANSLATE, {
			key: t,
			target: f
		}));
		let l = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter;
		process.env.NODE_ENV !== "production" && n !== f && l && l.emit("fallback", {
			type: g,
			key: t,
			from: m,
			to: h,
			groupId: `${g}:${t}`
		}), d = o[f] || A();
		let _ = null, x, S;
		if (process.env.NODE_ENV !== "production" && v && l && (_ = window.performance.now(), x = "intlify-message-resolve-start", S = "intlify-message-resolve-end", y && y(x)), (p = c(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && v && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: `${g}:${t}`
			}), x && S && y && b && (y(S), b("intlify message resolve", x, S));
		}
		if (F(p) || K(p) || Z(p)) break;
		if (!Cn(f, u)) {
			let n = bn(e, t, f, a, g);
			n !== t && (p = n);
		}
		m = h;
	}
	return [
		p,
		f,
		d
	];
}
function Kn(e, t, n, r, i, a) {
	let { messageCompiler: o, warnHtmlMessage: s } = e;
	if (Z(r)) {
		let e = r;
		return e.locale = e.locale || n, e.key = e.key || t, e;
	}
	if (o == null) {
		let e = (() => r);
		return e.locale = n, e.key = t, e;
	}
	let c = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, l = null, u, d;
	process.env.NODE_ENV !== "production" && v && c && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", y && y(u));
	let f = o(r, Yn(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && v && c) {
		let e = window.performance.now();
		c && l && c.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: e - l,
			groupId: `translate:${t}`
		}), u && d && y && b && (y(d), b("intlify message compilation", u, d));
	}
	return f.locale = n, f.key = t, f.source = r, f;
}
function qn(e, t, n) {
	let r = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, i = null, a, o;
	process.env.NODE_ENV !== "production" && v && r && (i = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", y && y(a));
	let s = t(n);
	if (process.env.NODE_ENV !== "production" && v && r) {
		let e = window.performance.now();
		r && i && r.emit("message-evaluation", {
			type: "message-evaluation",
			value: s,
			time: e - i,
			groupId: `translate:${t.key}`
		}), a && o && y && b && (y(o), b("intlify message evaluation", a, o));
	}
	return s;
}
function Jn(...e) {
	let [t, n, r] = e, i = A();
	if (!F(t) && !T(t) && !Z(t) && !K(t)) throw J(q.INVALID_ARGUMENT);
	let a = T(t) ? String(t) : (Z(t), t);
	return T(n) ? i.plural = n : F(n) ? i.default = n : R(n) && !O(n) ? i.named = n : N(n) && (i.list = n), T(r) ? i.plural = r : F(r) ? i.default = r : R(r) && k(i, r), [a, i];
}
function Yn(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = Xn(r), a = t.location && i && fe(i, t.location.start.offset, t.location.end.offset), o = e.__v_emitter;
				o && i && o.emit("compile-error", {
					message: i,
					error: t.message,
					start: t.location && t.location.start.offset,
					end: t.location && t.location.end.offset,
					groupId: `translate:${n}`
				});
				let s = `Message compilation error: ${t.message}`;
				throw SyntaxError(a ? `${s}\n${a}` : s);
			}
			throw t;
		},
		onCacheKey: (e) => w(t, n, e)
	};
}
function Xn(e) {
	if (F(e)) return e;
	if (e.loc && e.loc.source) return e.loc.source;
}
function Zn(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r, i) => {
			let a = o(n, r);
			if (a == null && (u || i)) {
				let [n, , i] = Gn(u || e, r, t, s, c, l);
				a = n ?? o(i, r);
			}
			if (F(a) || K(a)) {
				let n = !1, i = Kn(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? Hn : i;
			} else if (Z(a)) return a;
			else return Hn;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), T(r.plural) && (d.pluralIndex = r.plural), d;
}
var Qn = "11.4.0", Q = {
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
function $n(e, ...t) {
	return ye(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: er,
		args: t
	});
}
var er = {
	[Q.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
	[Q.INVALID_ARGUMENT]: "Invalid argument",
	[Q.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
	[Q.NOT_INSTALLED]: "Need to install with `app.use` function",
	[Q.UNEXPECTED_ERROR]: "Unexpected error",
	[Q.REQUIRED_VALUE]: "Required in value: {0}",
	[Q.INVALID_VALUE]: "Invalid value",
	[Q.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
	[Q.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
	[Q.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
	[Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, tr = C("__translateVNode"), nr = C("__datetimeParts"), rr = C("__numberParts"), ir = C("__enableEmitter"), ar = C("__disableEmitter"), or = C("__setPluralRules");
C("__intlifyMeta");
var sr = C("__injectWithOption"), cr = C("__dispose"), $ = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
}, lr = {
	[$.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[$.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[$.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[$.DEPRECATE_LEGACY_MODE]: "Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html",
	[$.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
	[$.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function ur(e, ...t) {
	return S(lr[e], ...t);
}
function dr(e) {
	if (!L(e) || K(e)) return e;
	for (let t in e) if (M(e, t)) if (!t.includes(".")) L(e[t]) && dr(e[t]);
	else {
		let n = t.split("."), r = n.length - 1, i = e, a = !1;
		for (let e = 0; e < r; e++) {
			if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
			if (n[e] in i || (i[n[e]] = A()), !L(i[n[e]])) {
				process.env.NODE_ENV !== "production" && h(ur($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
				break;
			}
			i = i[n[e]];
		}
		if (a || (K(i) ? ht.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !K(i)) {
			let e = i[n[r]];
			L(e) && dr(e);
		}
	}
	return e;
}
function fr(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = R(n) ? n : N(r) ? A() : { [e]: A() };
	if (N(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || A(), he(n, o[t])) : he(n, o);
		} else F(e) && he(JSON.parse(e), o);
	}), i == null && a) for (let e in o) M(o, e) && dr(o[e]);
	return o;
}
function pr(e) {
	return e.type;
}
function mr(e, t, n) {
	let r = L(t.messages) ? t.messages : A();
	"__i18nGlobal" in n && (r = fr(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), L(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (L(t.numberFormats)) {
		let n = Object.keys(t.numberFormats);
		n.length && n.forEach((n) => {
			e.mergeNumberFormat(n, t.numberFormats[n]);
		});
	}
}
function hr(e) {
	return i(n, null, e, 0);
}
function gr() {
	let t = "currentInstance";
	return t in e ? e[t] : e.getCurrentInstance();
}
var _r = "__INTLIFY_META__", vr = () => [], yr = () => !1, br = 0;
function xr(e) {
	return ((t, n, r, i) => e(n, r, gr() || void 0, i));
}
var Sr = () => {
	let e = gr(), t = null;
	return e && (t = pr(e)[_r]) ? { [_r]: t } : null;
};
function Cr(e = {}) {
	let { __root: t, __injectWithOption: n } = e, i = t === void 0, a = e.flatJson, o = v ? f : p, s = I(e.inheritLocale) ? e.inheritLocale : !0, c = o(t && s ? t.locale.value : F(e.locale) ? e.locale : $t), l = o(t && s ? t.fallbackLocale.value : F(e.fallbackLocale) || N(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(fr(c.value, e)), d = o(R(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), g = o(R(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), _ = t ? t.missingWarn : I(e.missingWarn) || D(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : I(e.fallbackWarn) || D(e.fallbackWarn) ? e.fallbackWarn : !0, b = t ? t.fallbackRoot : I(e.fallbackRoot) ? e.fallbackRoot : !0, x = !!e.fallbackFormat, S = P(e.missing) ? e.missing : null, C = P(e.missing) ? xr(e.missing) : null, w = P(e.postTranslation) ? e.postTranslation : null, ee = t ? t.warnHtmlMessage : I(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, O = t ? t.modifiers : R(e.modifiers) ? e.modifiers : {}, te = e.pluralRules || t && t.pluralRules, A;
	A = (() => {
		i && pn(null);
		let t = {
			version: Qn,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: O,
			pluralRules: te,
			missing: C === null ? void 0 : C,
			missingWarn: _,
			fallbackWarn: y,
			fallbackFormat: x,
			unresolving: !0,
			postTranslation: w === null ? void 0 : w,
			warnHtmlMessage: ee,
			escapeParameter: E,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = g.value, t.__datetimeFormatters = R(A) ? A.__datetimeFormatters : void 0, t.__numberFormatters = R(A) ? A.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (t.__v_emitter = R(A) ? A.__v_emitter : void 0);
		let n = gn(t);
		return i && pn(n), n;
	})(), xn(A, c.value, l.value);
	function j() {
		return [
			c.value,
			l.value,
			u.value,
			d.value,
			g.value
		];
	}
	let ne = r({
		get: () => c.value,
		set: (e) => {
			A.locale = e, c.value = e;
		}
	}), re = r({
		get: () => l.value,
		set: (e) => {
			A.fallbackLocale = e, l.value = e, xn(A, c.value, e);
		}
	}), ie = r(() => u.value), ae = r(() => d.value), oe = r(() => g.value);
	function se() {
		return P(w) ? w : null;
	}
	function ce(e) {
		w = e, A.postTranslation = e;
	}
	function le() {
		return S;
	}
	function ue(e) {
		e !== null && (C = xr(e)), S = e, A.missing = C;
	}
	function de(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let z = (e, n, r, a, o, s) => {
		j();
		let c;
		try {
			process.env.NODE_ENV !== "production" && un(Sr()), i || (A.fallbackContext = t ? mn() : void 0), c = e(A);
		} finally {
			process.env.NODE_ENV !== "production" && un(null), i || (A.fallbackContext = void 0);
		}
		if (r !== "translate exists" && T(c) && c === -1 || r === "translate exists" && !c) {
			let [e, i] = n();
			if (process.env.NODE_ENV !== "production" && t && F(e) && de(r, i) && (b && (vn(y, e) || yn(_, e)) && h(ur($.FALLBACK_TO_ROOT, {
				key: e,
				type: r
			})), process.env.NODE_ENV !== "production")) {
				let { __v_emitter: t } = A;
				t && b && t.emit("fallback", {
					type: r,
					key: e,
					to: "global",
					groupId: `${r}:${e}`
				});
			}
			return t && b ? a(t) : o(e);
		} else if (s(c)) return c;
		else throw $n(Q.UNEXPECTED_RETURN_TYPE);
	};
	function fe(...e) {
		return z((t) => Reflect.apply(Un, null, [t, ...e]), () => Jn(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => F(e));
	}
	function pe(...e) {
		let [t, n, r] = e;
		if (r && !L(r)) throw $n(Q.INVALID_ARGUMENT);
		return fe(t, n, k({ resolvedMessage: !0 }, r || {}));
	}
	function me(...e) {
		return z((t) => Reflect.apply(En, null, [t, ...e]), () => On(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => F(e) || N(e));
	}
	function ge(...e) {
		return z((t) => Reflect.apply(An, null, [t, ...e]), () => Mn(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => F(e) || N(e));
	}
	function _e(e) {
		return e.map((e) => F(e) || T(e) || I(e) ? hr(String(e)) : e);
	}
	let B = {
		normalize: _e,
		interpolate: (e) => e,
		type: "vnode"
	};
	function ve(...e) {
		return z((t) => {
			let n, r = t;
			try {
				r.processor = B, n = Reflect.apply(Un, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => Jn(...e), "translate", (t) => t[tr](...e), (e) => [hr(e)], (e) => N(e));
	}
	function ye(...e) {
		return z((t) => Reflect.apply(An, null, [t, ...e]), () => Mn(...e), "number format", (t) => t[rr](...e), vr, (e) => F(e) || N(e));
	}
	function be(...e) {
		return z((t) => Reflect.apply(En, null, [t, ...e]), () => On(...e), "datetime format", (t) => t[nr](...e), vr, (e) => F(e) || N(e));
	}
	function xe(e) {
		te = e, A.pluralRules = te;
	}
	function Se(e, t) {
		return z(() => {
			if (!e) return !1;
			let n = F(t) ? t : c.value, r = F(t) ? [n] : Lt(A, l.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = H(r[t]), i = A.messageResolver(n, e);
				if (i === null && (i = n[e]), K(i) || Z(i) || F(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), yr, (e) => I(e));
	}
	function V(e) {
		let t = null, n = Lt(A, l.value, c.value);
		for (let r = 0; r < n.length; r++) {
			let i = u.value[n[r]] || {}, a = A.messageResolver(i, e);
			if (a != null) {
				t = a;
				break;
			}
		}
		return t;
	}
	function Ce(e) {
		return V(e) ?? (t && t.tm(e) || {});
	}
	function H(e) {
		return u.value[e] || {};
	}
	function we(e, t) {
		if (a) {
			let n = { [e]: t };
			for (let e in n) M(n, e) && dr(n[e]);
			t = n[e];
		}
		u.value[e] = t, A.messages = u.value;
	}
	function Te(e, t) {
		u.value[e] = u.value[e] || {};
		let n = { [e]: t };
		if (a) for (let e in n) M(n, e) && dr(n[e]);
		t = n[e], he(t, u.value[e]), A.messages = u.value;
	}
	function Ee(e) {
		return d.value[e] || {};
	}
	function U(e, t) {
		d.value[e] = t, A.datetimeFormats = d.value, kn(A, e, t);
	}
	function De(e, t) {
		d.value[e] = k(d.value[e] || {}, t), A.datetimeFormats = d.value, kn(A, e, t);
	}
	function Oe(e) {
		return g.value[e] || {};
	}
	function ke(e, t) {
		g.value[e] = t, A.numberFormats = g.value, Nn(A, e, t);
	}
	function Ae(e, t) {
		g.value[e] = k(g.value[e] || {}, t), A.numberFormats = g.value, Nn(A, e, t);
	}
	br++, t && v && (m(t.locale, (e) => {
		s && (c.value = e, A.locale = e, xn(A, c.value, l.value));
	}), m(t.fallbackLocale, (e) => {
		s && (l.value = e, A.fallbackLocale = e, xn(A, c.value, l.value));
	}));
	let W = {
		id: br,
		locale: ne,
		fallbackLocale: re,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (c.value = t.locale.value, l.value = t.fallbackLocale.value, xn(A, c.value, l.value));
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: ie,
		get modifiers() {
			return O;
		},
		get pluralRules() {
			return te || {};
		},
		get isGlobal() {
			return i;
		},
		get missingWarn() {
			return _;
		},
		set missingWarn(e) {
			_ = e, A.missingWarn = _;
		},
		get fallbackWarn() {
			return y;
		},
		set fallbackWarn(e) {
			y = e, A.fallbackWarn = y;
		},
		get fallbackRoot() {
			return b;
		},
		set fallbackRoot(e) {
			b = e;
		},
		get fallbackFormat() {
			return x;
		},
		set fallbackFormat(e) {
			x = e, A.fallbackFormat = x;
		},
		get warnHtmlMessage() {
			return ee;
		},
		set warnHtmlMessage(e) {
			ee = e, A.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return E;
		},
		set escapeParameter(e) {
			E = e, A.escapeParameter = e;
		},
		t: fe,
		getLocaleMessage: H,
		setLocaleMessage: we,
		mergeLocaleMessage: Te,
		getPostTranslationHandler: se,
		setPostTranslationHandler: ce,
		getMissingHandler: le,
		setMissingHandler: ue,
		[or]: xe
	};
	return W.datetimeFormats = ae, W.numberFormats = oe, W.rt = pe, W.te = Se, W.tm = Ce, W.d = me, W.n = ge, W.getDateTimeFormat = Ee, W.setDateTimeFormat = U, W.mergeDateTimeFormat = De, W.getNumberFormat = Oe, W.setNumberFormat = ke, W.mergeNumberFormat = Ae, W[sr] = n, W[tr] = ve, W[nr] = be, W[rr] = ye, process.env.NODE_ENV !== "production" && (W[ir] = (e) => {
		A.__v_emitter = e;
	}, W[ar] = () => {
		A.__v_emitter = void 0;
	}), W;
}
var wr;
function Tr(e, t) {
	if (wr) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), wr.addTimelineEvent({
			layerId: "vue-i18n-timeline",
			event: {
				title: e,
				groupId: n,
				time: Date.now(),
				meta: {},
				data: t || {},
				logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
			}
		});
	}
}
var Er = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function Dr({ slots: e }, n) {
	return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((e, n) => [...e, ...n.type === t ? n.children : [n]], []) : n.reduce((t, n) => {
		let r = e[n];
		return r && (t[n] = r()), t;
	}, A());
}
function Or() {
	return t;
}
a({
	name: "i18n-t",
	props: k({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => T(e) || !isNaN(e)
		}
	}, Er),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || Mr({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = Object.keys(n).filter((e) => e[0] !== "_"), o = A();
			e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = F(e.plural) ? +e.plural : e.plural);
			let c = Dr(t, a), l = i[tr](e.keypath, c, o), u = k(A(), r);
			return s(F(e.tag) || L(e.tag) ? e.tag : Or(), u, l);
		};
	}
});
function kr(e) {
	return N(e) && !F(e[0]);
}
function Ar(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = { part: !0 }, o = A();
		e.locale && (t.locale = e.locale), F(e.format) ? t.key = e.format : L(e.format) && (F(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format).reduce((t, r) => n.includes(r) ? k(A(), t, { [r]: e.format[r] }) : t, A()));
		let c = r(e.value, t, o), l = [t.key];
		N(c) ? l = c.map((e, t) => {
			let n = i[e.type], r = n ? n({
				[e.type]: e.value,
				index: t,
				parts: c
			}) : [e.value];
			return kr(r) && (r[0].key = `${e.type}-${t}`), r;
		}) : F(c) && (l = [c]);
		let u = k(A(), a);
		return s(F(e.tag) || L(e.tag) ? e.tag : Or(), u, l);
	};
}
a({
	name: "i18n-n",
	props: k({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, Er),
	setup(e, t) {
		let n = e.i18n || Mr({
			useScope: e.scope,
			__useComponent: !0
		});
		return Ar(e, t, jn, (...e) => n[rr](...e));
	}
});
var jr = C("global-vue-i18n");
function Mr(e = {}) {
	let t = gr();
	if (t == null) throw $n(Q.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw $n(Q.NOT_INSTALLED);
	let n = Nr(t), r = Fr(n), i = pr(t), a = Pr(e, i);
	if (a === "global") return mr(r, e, i), r;
	if (a === "parent") {
		let i = Ir(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && h(ur($.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw $n(Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = k({}, e);
		a.__root = Ir(n, t) || r;
		let s = Cr(a);
		i.__composerExtend && (s[cr] = i.__composerExtend(s));
		let c = null;
		if (process.env.NODE_ENV !== "production") {
			c = pe();
			let e = s;
			e[ir] && e[ir](c), c.on("*", Tr);
		}
		return o() && u(() => {
			if (process.env.NODE_ENV !== "production") {
				c && c.off("*", Tr);
				let e = s;
				e[ar] && e[ar]();
			}
			let e = s[cr];
			e && (e(), delete s[cr]);
		}), s;
	}
	let s = n, c = s.__getInstance(t);
	if (c == null) {
		let n = k({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), c = Cr(n), s.__composerExtend && (c[cr] = s.__composerExtend(c)), Rr(s, t, c), s.__setInstance(t, c);
	} else process.env.NODE_ENV !== "production" && a === "local" && h(ur($.DUPLICATE_USE_I18N_CALLING));
	return c;
}
function Nr(e) {
	let t = c(e.isCE ? jr : e.appContext.app.__VUE_I18N_SYMBOL__);
	if (!t) throw $n(e.isCE ? Q.NOT_INSTALLED_WITH_PROVIDE : Q.UNEXPECTED_ERROR);
	return t;
}
function Pr(e, t) {
	return O(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Fr(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function Ir(e, t, n = !1) {
	let r = null, i = t.root, a = Lr(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition" && (r = t.__getInstance(a)), r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Lr(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Rr(e, t, n) {
	let r = null;
	l(() => {
		if (process.env.NODE_ENV !== "production") {
			t.__VUE_I18N__ = n, r = pe();
			let e = n;
			e[ir] && e[ir](r), r.on("*", Tr);
		}
	}, t), d(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && (r && r.off("*", Tr), i[ar] && i[ar](), delete t.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[cr];
		a && (a(), delete i[cr]);
	}, t);
}
if (a({
	name: "i18n-d",
	props: k({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, Er),
	setup(e, t) {
		let n = e.i18n || Mr({
			useScope: e.scope,
			__useComponent: !0
		});
		return Ar(e, t, Dn, (...e) => n[nr](...e));
	}
}), rn(Et), on(Xt), cn(Lt), process.env.NODE_ENV !== "production") {
	let e = ne();
	e.__INTLIFY__ = !0, Ot(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
var zr = a({
	__name: "EmptyComponent",
	setup(e) {
		let { t } = Mr();
		return t("header.home"), (e, t) => null;
	}
});
export { zr as default };

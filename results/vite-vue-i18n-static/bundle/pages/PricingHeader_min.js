import * as e from "vue";
import { Fragment as t, Text as n, computed as r, createElementBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, getCurrentScope as c, h as l, inject as u, onMounted as d, onScopeDispose as f, onUnmounted as p, openBlock as m, ref as h, shallowRef as g, toDisplayString as _, unref as v, watch as y } from "vue";
function b(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var x = {};
function S(e) {
	x[e] || (x[e] = !0, b(e));
}
var C = typeof window < "u", w, T;
if (process.env.NODE_ENV !== "production") {
	let e = C && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (w = (t) => {
		e.mark(t);
	}, T = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var E = /\{([0-9a-zA-Z]+)\}/g;
function D(e, ...t) {
	return t.length === 1 && z(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(E, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var O = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), k = (e, t, n) => A({
	l: e,
	k: t,
	s: n
}), A = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), j = (e) => typeof e == "number" && isFinite(e), ee = (e) => de(e) === "[object Date]", te = (e) => de(e) === "[object RegExp]", ne = (e) => V(e) && Object.keys(e).length === 0, M = Object.assign, re = Object.create, N = (e = null) => re(e), ie, ae = () => ie ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : N();
function oe(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function se(e) {
	return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ce(e) {
	return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${se(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${se(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && b("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t) => {
		e = e.replace(t, "$1javascript&#58;");
	}), e;
}
var le = Object.prototype.hasOwnProperty;
function P(e, t) {
	return le.call(e, t);
}
var F = Array.isArray, I = (e) => typeof e == "function", L = (e) => typeof e == "string", R = (e) => typeof e == "boolean", z = (e) => typeof e == "object" && !!e, B = (e) => z(e) && I(e.then) && I(e.catch), ue = Object.prototype.toString, de = (e) => ue.call(e), V = (e) => de(e) === "[object Object]", fe = (e) => e == null ? "" : F(e) || V(e) && e.toString === ue ? JSON.stringify(e, null, 2) : String(e);
function pe(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var me = 2;
function he(e, t = 0, n = e.length) {
	let r = e.split(/\r?\n/), i = 0, a = [];
	for (let e = 0; e < r.length; e++) if (i += r[e].length + 1, i >= t) {
		for (let o = e - me; o <= e + me || n > i; o++) {
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
function ge() {
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
var _e = (e) => !z(e) || F(e);
function ve(e, t) {
	if (_e(e) || _e(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (z(e[r]) && !z(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : N()), _e(t[r]) || _e(e[r]) ? t[r] = e[r] : n.push({
				src: e[r],
				des: t[r]
			}));
		});
	}
}
function ye(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function be(e, t, n) {
	let r = {
		start: e,
		end: t
	};
	return n != null && (r.source = n), r;
}
var H = {
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
}, xe = {
	[H.EXPECTED_TOKEN]: "Expected token: '{0}'",
	[H.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
	[H.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
	[H.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
	[H.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
	[H.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
	[H.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
	[H.EMPTY_PLACEHOLDER]: "Empty placeholder",
	[H.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
	[H.INVALID_LINKED_FORMAT]: "Invalid linked format",
	[H.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
	[H.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
	[H.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
	[H.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
	[H.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
	[H.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Se(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = process.env.NODE_ENV === "production" ? e : D((i || xe)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function Ce(e) {
	throw e;
}
var we = /<\/?[\w\s="/.':;#-\/]+>/, Te = (e) => we.test(e), U = " ", Ee = "\r", W = "\n", De = "\u2028", Oe = "\u2029";
function ke(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Ee && t[e + 1] === W, s = (e) => t[e] === W, c = (e) => t[e] === Oe, l = (e) => t[e] === De, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? W : t[e], g = () => h(n), _ = () => h(n + a);
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
var G = void 0, Ae = "'", je = "tokenizer";
function Me(e, t = {}) {
	let n = t.location !== !1, r = ke(e), i = () => r.index(), a = () => ye(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
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
		t.column += r, t.offset += r, u && u(Se(e, n ? be(a.startLoc, t) : null, {
			domain: je,
			args: i
		}));
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = be(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
	}
	let p = (e) => f(e, 13);
	function m(e, t) {
		return e.currentChar() === t ? (e.next(), t) : (d(H.EXPECTED_TOKEN, a(), 0, t), "");
	}
	function h(e) {
		let t = "";
		for (; e.currentPeek() === U || e.currentPeek() === W;) t += e.currentPeek(), e.peek();
		return t;
	}
	function g(e) {
		let t = h(e);
		return e.skipToPeek(), t;
	}
	function _(e) {
		if (e === G) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === G) return !1;
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
		let r = e.currentPeek() === Ae;
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
	function T(e, t) {
		let { currentType: n } = t;
		if (n !== 9) return !1;
		let r = () => {
			let t = e.currentPeek();
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === U || !t ? !1 : t === W ? (e.peek(), r()) : D(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function E(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function D(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? !(r === U || r === W) : i === U ? (e.peek(), n(!0, U)) : i === W ? (e.peek(), n(!0, W)) : !0;
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function O(e, t) {
		let n = e.currentChar();
		return n === G ? G : t(n) ? (e.next(), n) : null;
	}
	function k(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function A(e) {
		return O(e, k);
	}
	function j(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function ee(e) {
		return O(e, j);
	}
	function te(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function ne(e) {
		return O(e, te);
	}
	function M(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function re(e) {
		return O(e, M);
	}
	function N(e) {
		let t = "", n = "";
		for (; t = ne(e);) n += t;
		return n;
	}
	function ie(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === U || n === W) if (D(e)) t += n, e.next();
			else if (E(e)) break;
			else t += n, e.next();
			else t += n, e.next();
		}
		return t;
	}
	function ae(e) {
		g(e);
		let t = "", n = "";
		for (; t = ee(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== G && r !== U && r !== W && r !== "　") {
			let t = I(e);
			return d(H.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === G && d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function oe(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${N(e)}`) : t += N(e), e.currentChar() === G && d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function se(e) {
		return e !== Ae && e !== W;
	}
	function ce(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = O(e, se);) t === "\\" ? n += le(e) : n += t;
		let r = e.currentChar();
		return r === W || r === G ? (d(H.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === W && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function le(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return P(e, t, 4);
			case "U": return P(e, t, 6);
			default: return d(H.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function P(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = re(e);
			if (!n) {
				d(H.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function F(e) {
		return e !== "{" && e !== "}" && e !== U && e !== W;
	}
	function I(e) {
		g(e);
		let t = "", n = "";
		for (; t = O(e, F);) n += t;
		return n;
	}
	function L(e) {
		let t = "", n = "";
		for (; t = A(e);) n += t;
		return n;
	}
	function R(e) {
		let t = (n) => {
			let r = e.currentChar();
			return r === "{" || r === "@" || r === "|" || r === "(" || r === ")" || !r || r === U ? n : (n += r, e.next(), t(n));
		};
		return t("");
	}
	function z(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function B(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(H.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(H.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), n = ue(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (E(e)) return t.braceNest > 0 && d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, z(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, de(e, t);
				if (r = y(e, t)) return n = f(t, 4, ae(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, oe(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 6, ce(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, I(e)), d(H.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function ue(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch ((n === 7 || n === 8 || n === 11 || n === 9) && (i === W || i === U) && d(H.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return E(e) ? (r = f(t, 1, z(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), ue(e, t)) : C(e, t) ? (g(e), f(t, 11, L(e))) : T(e, t) ? (g(e), i === "{" ? B(e, t) || r : f(t, 10, R(e))) : (n === 7 && d(H.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, de(e, t));
		}
	}
	function de(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return B(e, t) || p(t);
		if (t.inLinked) return ue(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return B(e, t) || p(t);
			case "}": return d(H.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return ue(e, t) || p(t);
			default:
				if (E(e)) return n = f(t, 1, z(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (D(e)) return f(t, 0, ie(e));
				break;
		}
		return n;
	}
	function V() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === G ? f(c, 13) : de(r, c);
	}
	return {
		nextToken: V,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var Ne = "parser", Pe = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, Fe = /\\([\\@{}|])/g;
function Ie(e, t) {
	return t;
}
function Le(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function Re(e = {}) {
	let t = e.location !== !1, { onError: n } = e;
	function r(e, r, i, a, ...o) {
		let s = e.currentPosition();
		s.offset += a, s.column += a, n && n(Se(r, t ? be(i, s) : null, {
			domain: Ne,
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
		return r.value = t.replace(Fe, Ie), a(r, e.currentOffset(), e.currentPosition()), r;
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
		return o.value = t.replace(Pe, Le), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function u(e) {
		let t = e.nextToken(), n = e.context(), { lastOffset: o, lastStartLoc: s } = n, c = i(8, o, s);
		return t.type === 11 ? (t.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, K(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, H.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
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
		switch (o.type !== 9 && r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = l(e, o.value || "");
				break;
			default: {
				r(e, H.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
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
					i.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(l(e, i.value || ""));
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
		return c && r(e, H.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0), a(l, e.currentOffset(), e.currentPosition()), l;
	}
	function h(e) {
		let t = e.context(), { offset: n, startLoc: r } = t, i = p(e);
		return t.currentType === 13 ? i : m(e, n, r, i);
	}
	function g(n) {
		let o = Me(n, M({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, H.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function K(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function ze(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function Be(e, t) {
	for (let n = 0; n < e.length; n++) Ve(e[n], t);
}
function Ve(e, t) {
	switch (e.type) {
		case 1:
			Be(e.cases, t), t.helper("plural");
			break;
		case 2:
			Be(e.items, t);
			break;
		case 6:
			Ve(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4:
			t.helper("interpolate"), t.helper("named");
			break;
	}
}
function He(e, t = {}) {
	let n = ze(e);
	n.helper("normalize"), e.body && Ve(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function Ue(e) {
	let t = e.body;
	return t.type === 2 ? We(t) : t.cases.forEach((e) => We(e)), e;
}
function We(e) {
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
			e.static = pe(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
var Ge = "minifier";
function Ke(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			Ke(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) Ke(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) Ke(n[e]);
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
			Ke(t.key), t.k = t.key, delete t.key, t.modifier && (Ke(t.modifier), t.m = t.modifier, delete t.modifier);
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
		default: if (process.env.NODE_ENV !== "production") throw Se(H.UNHANDLED_MINIFIER_NODE_TYPE, null, {
			domain: Ge,
			args: [e.type]
		});
	}
	delete e.type;
}
var qe = "parser";
function Je(e, t) {
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
function Ye(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), $e(e, t.key), t.modifier ? (e.push(", "), $e(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Xe(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && ($e(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function Ze(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && ($e(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function Qe(e, t) {
	t.body ? $e(e, t.body) : e.push("null");
}
function $e(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			Qe(e, t);
			break;
		case 1:
			Ze(e, t);
			break;
		case 2:
			Xe(e, t);
			break;
		case 6:
			Ye(e, t);
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
		default: if (process.env.NODE_ENV !== "production") throw Se(H.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: qe,
			args: [t.type]
		});
	}
}
var et = (e, t = {}) => {
	let n = L(t.mode) ? t.mode : "normal", r = L(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, o = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = Je(e, {
		mode: n,
		filename: r,
		sourceMap: i,
		breakLineCode: a,
		needIndent: o
	});
	c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), s.length > 0 && (c.push(`const { ${pe(s.map((e) => `${e}: _${e}`), ", ")} } = ctx`), c.newline()), c.push("return "), $e(c, e), c.deindent(o), c.push("}"), delete e.helpers;
	let { code: l, map: u } = c.context();
	return {
		ast: e,
		code: l,
		map: u ? u.toJSON() : void 0
	};
};
function tt(e, t = {}) {
	let n = M({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = Re(n).parse(e);
	return r ? (a && Ue(o), i && Ke(o), {
		ast: o,
		code: ""
	}) : (He(o, n), et(o, n));
}
function q(e) {
	return z(e) && dt(e) === 0 && (P(e, "b") || P(e, "body"));
}
var nt = ["b", "body"];
function rt(e) {
	return vt(e, nt);
}
var it = ["c", "cases"];
function at(e) {
	return vt(e, it, []);
}
var ot = ["s", "static"];
function st(e) {
	return vt(e, ot);
}
var ct = ["i", "items"];
function lt(e) {
	return vt(e, ct, []);
}
var ut = ["t", "type"];
function dt(e) {
	return vt(e, ut);
}
var ft = ["v", "value"];
function pt(e, t) {
	let n = vt(e, ft);
	if (n != null) return n;
	throw bt(t);
}
var mt = ["m", "modifier"];
function ht(e) {
	return vt(e, mt);
}
var gt = ["k", "key"];
function _t(e) {
	let t = vt(e, gt);
	if (t) return t;
	throw bt(6);
}
function vt(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (P(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var yt = [
	...nt,
	...it,
	...ot,
	...ct,
	...gt,
	...mt,
	...ft,
	...ut
];
function bt(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function xt(e) {
	return (t) => St(t, e);
}
function St(e, t) {
	let n = rt(t);
	if (n == null) throw bt(0);
	if (dt(n) === 1) {
		let t = at(n);
		return e.plural(t.reduce((t, n) => [...t, Ct(e, n)], []));
	} else return Ct(e, n);
}
function Ct(e, t) {
	let n = st(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = lt(t).reduce((t, n) => [...t, wt(e, n)], []);
		return e.normalize(n);
	}
}
function wt(e, t) {
	let n = dt(t);
	switch (n) {
		case 3: return pt(t, n);
		case 9: return pt(t, n);
		case 4: {
			let r = t;
			if (P(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (P(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw bt(n);
		}
		case 5: {
			let r = t;
			if (P(r, "i") && j(r.i)) return e.interpolate(e.list(r.i));
			if (P(r, "index") && j(r.index)) return e.interpolate(e.list(r.index));
			throw bt(n);
		}
		case 6: {
			let n = t, r = ht(n), i = _t(n);
			return e.linked(wt(e, i), r ? wt(e, r) : void 0, e.type);
		}
		case 7: return pt(t, n);
		case 8: return pt(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var Tt = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Et(e, t) {
	t && Te(e) && b(D(Tt, { source: e }));
}
var Dt = (e) => e, Ot = N();
function kt(e, t = {}) {
	let n = !1, r = t.onError || Ce;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...tt(e, t),
		detectError: n
	};
}
function At(e, t) {
	if (L(e)) {
		let n = R(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
		process.env.NODE_ENV !== "production" && Et(e, n);
		let r = (t.onCacheKey || Dt)(e), i = Ot[r];
		if (i) return i;
		let { ast: a, detectError: o } = kt(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = xt(a);
		return o ? s : Ot[r] = s;
	} else {
		if (process.env.NODE_ENV !== "production" && !q(e)) return b(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
		let n = e.cacheKey;
		return n ? Ot[n] || (Ot[n] = xt(e)) : xt(e);
	}
}
var jt = null;
function Mt(e) {
	jt = e;
}
function Nt(e, t, n) {
	jt && jt.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var Pt = Ft("function:translate");
function Ft(e) {
	return (t) => jt && jt.emit(e, t);
}
var J = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function Y(e) {
	return Se(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: It });
}
var It = {
	[J.INVALID_ARGUMENT]: "Invalid arguments",
	[J.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[J.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[J.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[J.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[J.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Lt(e, t) {
	return t.locale == null ? zt(e.locale) : zt(t.locale);
}
var Rt;
function zt(e) {
	if (L(e)) return e;
	if (I(e)) {
		if (e.resolvedOnce && Rt != null) return Rt;
		if (e.constructor.name === "Function") {
			let t = e();
			if (B(t)) throw Y(J.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return Rt = t;
		} else throw Y(J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw Y(J.NOT_SUPPORT_LOCALE_TYPE);
}
function Bt(e, t, n) {
	return [...new Set([n, ...F(t) ? t : z(t) ? Object.keys(t) : L(t) ? [t] : [n]])];
}
function Vt(e, t, n) {
	let r = L(n) ? n : an, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; F(e);) e = Ht(a, e, t);
		let o = F(t) || !V(t) ? t : t.default ? t.default : null;
		e = L(o) ? [o] : o, F(e) && Ht(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function Ht(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && R(r); i++) {
		let a = t[i];
		L(a) && (r = Ut(e, t[i], n));
	}
	return r;
}
function Ut(e, t, n) {
	let r, i = t.split("-");
	do
		r = Wt(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function Wt(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (F(n) || V(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var Gt = [];
Gt[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, Gt[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, Gt[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, Gt[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, Gt[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, Gt[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, Gt[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var Kt = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function qt(e) {
	return Kt.test(e);
}
function Jt(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Yt(e) {
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
function Xt(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : qt(t) ? Jt(t) : "*" + t;
}
function Zt(e) {
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
			if (i = 0, o === void 0 || (o = Xt(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = Yt(a), d = Gt[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var Qt = /* @__PURE__ */ new Map();
function $t(e, t) {
	return z(e) ? e[t] : null;
}
function en(e, t) {
	if (!z(e)) return null;
	let n = Qt.get(t);
	if (n || (n = Zt(t), n && Qt.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (yt.includes(e) && q(i) || !z(i) || !P(i, e)) return null;
		let t = i[e];
		if (t === void 0 || I(i)) return null;
		i = t, a++;
	}
	return i;
}
var X = {
	NOT_FOUND_KEY: 1,
	FALLBACK_TO_TRANSLATE: 2,
	CANNOT_FORMAT_NUMBER: 3,
	FALLBACK_TO_NUMBER_FORMAT: 4,
	CANNOT_FORMAT_DATE: 5,
	FALLBACK_TO_DATE_FORMAT: 6,
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
	INVALID_NUMBER_ARGUMENT: 8,
	INVALID_DATE_ARGUMENT: 9
}, tn = {
	[X.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
	[X.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
	[X.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
	[X.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
	[X.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
	[X.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
	[X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.",
	[X.INVALID_NUMBER_ARGUMENT]: "Invalid argument for number formatting: expected a number but received '{value}'.",
	[X.INVALID_DATE_ARGUMENT]: "Invalid argument for datetime formatting: expected a Date, number, or ISO string but received '{value}'."
};
function nn(e, ...t) {
	return D(tn[e], ...t);
}
var rn = "11.4.0", an = "en-US", on = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function sn() {
	return {
		upper: (e, t) => t === "text" && L(e) ? e.toUpperCase() : t === "vnode" && z(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && L(e) ? e.toLowerCase() : t === "vnode" && z(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && L(e) ? on(e) : t === "vnode" && z(e) && "__v_isVNode" in e ? on(e.children) : e
	};
}
var cn;
function ln(e) {
	cn = e;
}
var un;
function dn(e) {
	un = e;
}
var fn;
function pn(e) {
	fn = e;
}
var mn = null, hn = (e) => {
	mn = e;
}, gn = () => mn, _n = null, vn = (e) => {
	_n = e;
}, yn = () => _n, bn = 0;
function xn(e = {}) {
	let t = I(e.onWarn) ? e.onWarn : b, n = L(e.version) ? e.version : rn, r = L(e.locale) || I(e.locale) ? e.locale : an, i = I(r) ? an : r, a = F(e.fallbackLocale) || V(e.fallbackLocale) || L(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = V(e.messages) ? e.messages : Sn(i), s = V(e.datetimeFormats) ? e.datetimeFormats : Sn(i), c = V(e.numberFormats) ? e.numberFormats : Sn(i), l = M(N(), e.modifiers, sn()), u = e.pluralRules || N(), d = I(e.missing) ? e.missing : null, f = R(e.missingWarn) || te(e.missingWarn) ? e.missingWarn : !0, p = R(e.fallbackWarn) || te(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = I(e.postTranslation) ? e.postTranslation : null, _ = V(e.processor) ? e.processor : null, v = R(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, x = I(e.messageCompiler) ? e.messageCompiler : cn;
	process.env.NODE_ENV !== "production" && I(e.messageCompiler) && S(nn(X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let C = I(e.messageResolver) ? e.messageResolver : un || $t, w = I(e.localeFallbacker) ? e.localeFallbacker : fn || Bt, T = z(e.fallbackContext) ? e.fallbackContext : void 0, E = e, D = z(E.__datetimeFormatters) ? E.__datetimeFormatters : /* @__PURE__ */ new Map(), O = z(E.__numberFormatters) ? E.__numberFormatters : /* @__PURE__ */ new Map(), k = z(E.__meta) ? E.__meta : {};
	bn++;
	let A = {
		version: n,
		cid: bn,
		locale: r,
		fallbackLocale: a,
		messages: o,
		modifiers: l,
		pluralRules: u,
		missing: d,
		missingWarn: f,
		fallbackWarn: p,
		fallbackFormat: m,
		unresolving: h,
		postTranslation: g,
		processor: _,
		warnHtmlMessage: v,
		escapeParameter: y,
		messageCompiler: x,
		messageResolver: C,
		localeFallbacker: w,
		fallbackContext: T,
		onWarn: t,
		__meta: k
	};
	return A.datetimeFormats = s, A.numberFormats = c, A.__datetimeFormatters = D, A.__numberFormatters = O, process.env.NODE_ENV !== "production" && (A.__v_emitter = E.__v_emitter == null ? void 0 : E.__v_emitter), process.env.NODE_ENV !== "production" && Nt(A, n, k), A;
}
var Sn = (e) => ({ [e]: N() });
function Cn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function wn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function Tn(e, t, n, r, i) {
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
		return L(r) ? r : t;
	} else return process.env.NODE_ENV !== "production" && wn(r, t) && o(nn(X.NOT_FOUND_KEY, {
		key: t,
		locale: n
	})), t;
}
function En(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Dn(e, t) {
	return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function On(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (Dn(e, t[r])) return !0;
	return !1;
}
var kn = typeof Intl < "u", An = {
	dateTimeFormat: kn && Intl.DateTimeFormat !== void 0,
	numberFormat: kn && Intl.NumberFormat !== void 0
};
function jn(e, ...t) {
	let { datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !An.dateTimeFormat) return a(nn(X.CANNOT_FORMAT_DATE)), "";
	if (!L(t[0]) && !ee(t[0]) && !j(t[0])) return process.env.NODE_ENV !== "production" && a(nn(X.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Nn(...t), f = R(u.missingWarn) ? u.missingWarn : e.missingWarn, p = R(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Lt(e, u), g = o(e, i, h);
	if (!L(c) || c === "") return new Intl.DateTimeFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "datetime format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Cn(p, c) && a(nn(X.FALLBACK_TO_DATE_FORMAT, {
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
		if (_ = n[v] || {}, y = _[c], V(y)) break;
		Tn(e, c, v, f, S), b = x;
	}
	if (!V(y) || !L(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	ne(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.DateTimeFormat(v, M({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Mn = [
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
function Nn(...e) {
	let [t, n, r, i] = e, a = N(), o = N(), s;
	if (L(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw Y(J.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw Y(J.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (ee(t)) {
		if (isNaN(t.getTime())) throw Y(J.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (j(t)) s = t;
	else throw Y(J.INVALID_ARGUMENT);
	return L(n) ? a.key = n : V(n) && Object.keys(n).forEach((e) => {
		Mn.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), L(r) ? a.locale = r : V(r) && (o = r), V(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Pn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
	}
}
function Fn(e, ...t) {
	let { numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !An.numberFormat) return a(nn(X.CANNOT_FORMAT_NUMBER)), "";
	if (!j(t[0])) return process.env.NODE_ENV !== "production" && a(nn(X.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Ln(...t), f = R(u.missingWarn) ? u.missingWarn : e.missingWarn, p = R(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Lt(e, u), g = o(e, i, h);
	if (!L(c) || c === "") return new Intl.NumberFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "number format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Cn(p, c) && a(nn(X.FALLBACK_TO_NUMBER_FORMAT, {
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
		if (_ = n[v] || {}, y = _[c], V(y)) break;
		Tn(e, c, v, f, S), b = x;
	}
	if (!V(y) || !L(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	ne(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.NumberFormat(v, M({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var In = [
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
function Ln(...e) {
	let [t, n, r, i] = e, a = N(), o = N();
	if (!j(t)) throw Y(J.INVALID_ARGUMENT);
	let s = t;
	return L(n) ? a.key = n : V(n) && Object.keys(n).forEach((e) => {
		In.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), L(r) ? a.locale = r : V(r) && (o = r), V(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Rn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
	}
}
var zn = (e) => e, Bn = (e) => "", Vn = "text", Hn = (e) => e.length === 0 ? "" : pe(e), Un = fe;
function Wn(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function Gn(e) {
	let t = j(e.pluralIndex) ? e.pluralIndex : -1;
	return j(e.named?.count) ? e.named.count : j(e.named?.n) ? e.named.n : t;
}
function Kn(e = {}) {
	let t = e.locale, n = Gn(e), r = L(t) && I(e.pluralRules?.[t]) ? e.pluralRules[t] : Wn, i = r === Wn ? void 0 : Wn, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || N();
	j(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
	let l = (e) => c[e];
	function u(t, n) {
		return (I(e.messages) ? e.messages(t, !!n) : z(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : Bn);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : zn, f = I(e.processor?.normalize) ? e.processor.normalize : Hn, p = I(e.processor?.interpolate) ? e.processor.interpolate : Un, m = {
		list: s,
		named: l,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? z(n) ? (a = n.modifier || a, i = n.type || i) : L(n) && (a = n || a) : t.length === 2 && (L(n) && (a = n || a), L(r) && (i = r || i));
			let o = u(e, !0)(m), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && F(s) && a ? s[0] : s;
			return a ? d(a)(c, i) : c;
		},
		message: u,
		type: L(e.processor?.type) ? e.processor.type : Vn,
		interpolate: p,
		normalize: f,
		values: M(N(), o, c)
	};
	return m;
}
var qn = () => "", Z = (e) => I(e);
function Jn(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = $n(...t), u = R(l.missingWarn) ? l.missingWarn : e.missingWarn, d = R(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = R(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = L(l.default) || R(l.default) ? R(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (L(m) || I(m)), g = Lt(e, l);
	f && Yn(l);
	let [_, v, y] = p ? [
		c,
		g,
		s[g] || N()
	] : Xn(e, c, g, o, d, u), x = _, S = c;
	if (!p && !(L(x) || q(x) || Z(x)) && h && (x = m, S = x), !p && (!(L(x) || q(x) || Z(x)) || !L(v))) return i ? -1 : c;
	if (process.env.NODE_ENV !== "production" && L(x) && e.messageCompiler == null) return b(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
	let C = !1, w = Z(x) ? x : Zn(e, c, v, x, S, () => {
		C = !0;
	});
	if (C) return x;
	let T = Qn(e, w, Kn(nr(e, v, y, l))), E = r ? r(T, c) : T;
	if (f && L(E) && (E = ce(E)), process.env.NODE_ENV !== "production") {
		let t = {
			timestamp: Date.now(),
			key: L(c) ? c : Z(x) ? x.key : "",
			locale: v || (Z(x) ? x.locale : ""),
			format: L(x) ? x : Z(x) ? x.source : "",
			message: E
		};
		t.meta = M({}, e.__meta, gn() || {}), Pt(t);
	}
	return E;
}
function Yn(e) {
	F(e.list) ? e.list = e.list.map((e) => L(e) ? oe(e) : e) : z(e.named) && Object.keys(e.named).forEach((t) => {
		L(e.named[t]) && (e.named[t] = oe(e.named[t]));
	});
}
function Xn(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = N(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !Dn(n, f) && Cn(i, t) && s(nn(X.FALLBACK_TO_TRANSLATE, {
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
		}), d = o[f] || N();
		let _ = null, v, y;
		if (process.env.NODE_ENV !== "production" && C && l && (_ = window.performance.now(), v = "intlify-message-resolve-start", y = "intlify-message-resolve-end", w && w(v)), (p = c(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && C && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: `${g}:${t}`
			}), v && y && w && T && (w(y), T("intlify message resolve", v, y));
		}
		if (L(p) || q(p) || Z(p)) break;
		if (!On(f, u)) {
			let n = Tn(e, t, f, a, g);
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
function Zn(e, t, n, r, i, a) {
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
	process.env.NODE_ENV !== "production" && C && c && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", w && w(u));
	let f = o(r, er(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && C && c) {
		let e = window.performance.now();
		c && l && c.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: e - l,
			groupId: `translate:${t}`
		}), u && d && w && T && (w(d), T("intlify message compilation", u, d));
	}
	return f.locale = n, f.key = t, f.source = r, f;
}
function Qn(e, t, n) {
	let r = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, i = null, a, o;
	process.env.NODE_ENV !== "production" && C && r && (i = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", w && w(a));
	let s = t(n);
	if (process.env.NODE_ENV !== "production" && C && r) {
		let e = window.performance.now();
		r && i && r.emit("message-evaluation", {
			type: "message-evaluation",
			value: s,
			time: e - i,
			groupId: `translate:${t.key}`
		}), a && o && w && T && (w(o), T("intlify message evaluation", a, o));
	}
	return s;
}
function $n(...e) {
	let [t, n, r] = e, i = N();
	if (!L(t) && !j(t) && !Z(t) && !q(t)) throw Y(J.INVALID_ARGUMENT);
	let a = j(t) ? String(t) : (Z(t), t);
	return j(n) ? i.plural = n : L(n) ? i.default = n : V(n) && !ne(n) ? i.named = n : F(n) && (i.list = n), j(r) ? i.plural = r : L(r) ? i.default = r : V(r) && M(i, r), [a, i];
}
function er(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = tr(r), a = t.location && i && he(i, t.location.start.offset, t.location.end.offset), o = e.__v_emitter;
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
		onCacheKey: (e) => k(t, n, e)
	};
}
function tr(e) {
	if (L(e)) return e;
	if (e.loc && e.loc.source) return e.loc.source;
}
function nr(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r, i) => {
			let a = o(n, r);
			if (a == null && (u || i)) {
				let [n, , i] = Xn(u || e, r, t, s, c, l);
				a = n ?? o(i, r);
			}
			if (L(a) || q(a)) {
				let n = !1, i = Zn(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? qn : i;
			} else if (Z(a)) return a;
			else return qn;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), j(r.plural) && (d.pluralIndex = r.plural), d;
}
var rr = "11.4.0", Q = {
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
function ir(e, ...t) {
	return Se(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: ar,
		args: t
	});
}
var ar = {
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
}, or = O("__translateVNode"), sr = O("__datetimeParts"), cr = O("__numberParts"), lr = O("__enableEmitter"), ur = O("__disableEmitter"), dr = O("__setPluralRules");
O("__intlifyMeta");
var fr = O("__injectWithOption"), pr = O("__dispose"), $ = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
}, mr = {
	[$.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[$.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[$.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[$.DEPRECATE_LEGACY_MODE]: "Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html",
	[$.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
	[$.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function hr(e, ...t) {
	return D(mr[e], ...t);
}
function gr(e) {
	if (!z(e) || q(e)) return e;
	for (let t in e) if (P(e, t)) if (!t.includes(".")) z(e[t]) && gr(e[t]);
	else {
		let n = t.split("."), r = n.length - 1, i = e, a = !1;
		for (let e = 0; e < r; e++) {
			if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
			if (n[e] in i || (i[n[e]] = N()), !z(i[n[e]])) {
				process.env.NODE_ENV !== "production" && b(hr($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
				break;
			}
			i = i[n[e]];
		}
		if (a || (q(i) ? yt.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !q(i)) {
			let e = i[n[r]];
			z(e) && gr(e);
		}
	}
	return e;
}
function _r(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = V(n) ? n : F(r) ? N() : { [e]: N() };
	if (F(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || N(), ve(n, o[t])) : ve(n, o);
		} else L(e) && ve(JSON.parse(e), o);
	}), i == null && a) for (let e in o) P(o, e) && gr(o[e]);
	return o;
}
function vr(e) {
	return e.type;
}
function yr(e, t, n) {
	let r = z(t.messages) ? t.messages : N();
	"__i18nGlobal" in n && (r = _r(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), z(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (z(t.numberFormats)) {
		let n = Object.keys(t.numberFormats);
		n.length && n.forEach((n) => {
			e.mergeNumberFormat(n, t.numberFormats[n]);
		});
	}
}
function br(e) {
	return o(n, null, e, 0);
}
function xr() {
	let t = "currentInstance";
	return t in e ? e[t] : e.getCurrentInstance();
}
var Sr = "__INTLIFY_META__", Cr = () => [], wr = () => !1, Tr = 0;
function Er(e) {
	return ((t, n, r, i) => e(n, r, xr() || void 0, i));
}
var Dr = () => {
	let e = xr(), t = null;
	return e && (t = vr(e)[Sr]) ? { [Sr]: t } : null;
};
function Or(e = {}) {
	let { __root: t, __injectWithOption: n } = e, i = t === void 0, a = e.flatJson, o = C ? h : g, s = R(e.inheritLocale) ? e.inheritLocale : !0, c = o(t && s ? t.locale.value : L(e.locale) ? e.locale : an), l = o(t && s ? t.fallbackLocale.value : L(e.fallbackLocale) || F(e.fallbackLocale) || V(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(_r(c.value, e)), d = o(V(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(V(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : R(e.missingWarn) || te(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : R(e.fallbackWarn) || te(e.fallbackWarn) ? e.fallbackWarn : !0, _ = t ? t.fallbackRoot : R(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, x = I(e.missing) ? e.missing : null, S = I(e.missing) ? Er(e.missing) : null, w = I(e.postTranslation) ? e.postTranslation : null, T = t ? t.warnHtmlMessage : R(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, D = t ? t.modifiers : V(e.modifiers) ? e.modifiers : {}, O = e.pluralRules || t && t.pluralRules, k;
	k = (() => {
		i && vn(null);
		let t = {
			version: rr,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: D,
			pluralRules: O,
			missing: S === null ? void 0 : S,
			missingWarn: p,
			fallbackWarn: m,
			fallbackFormat: v,
			unresolving: !0,
			postTranslation: w === null ? void 0 : w,
			warnHtmlMessage: T,
			escapeParameter: E,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value, t.__datetimeFormatters = V(k) ? k.__datetimeFormatters : void 0, t.__numberFormatters = V(k) ? k.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (t.__v_emitter = V(k) ? k.__v_emitter : void 0);
		let n = xn(t);
		return i && vn(n), n;
	})(), En(k, c.value, l.value);
	function A() {
		return [
			c.value,
			l.value,
			u.value,
			d.value,
			f.value
		];
	}
	let ee = r({
		get: () => c.value,
		set: (e) => {
			k.locale = e, c.value = e;
		}
	}), ne = r({
		get: () => l.value,
		set: (e) => {
			k.fallbackLocale = e, l.value = e, En(k, c.value, e);
		}
	}), re = r(() => u.value), N = r(() => d.value), ie = r(() => f.value);
	function ae() {
		return I(w) ? w : null;
	}
	function oe(e) {
		w = e, k.postTranslation = e;
	}
	function se() {
		return x;
	}
	function ce(e) {
		e !== null && (S = Er(e)), x = e, k.missing = S;
	}
	function le(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let B = (e, n, r, a, o, s) => {
		A();
		let c;
		try {
			process.env.NODE_ENV !== "production" && hn(Dr()), i || (k.fallbackContext = t ? yn() : void 0), c = e(k);
		} finally {
			process.env.NODE_ENV !== "production" && hn(null), i || (k.fallbackContext = void 0);
		}
		if (r !== "translate exists" && j(c) && c === -1 || r === "translate exists" && !c) {
			let [e, i] = n();
			if (process.env.NODE_ENV !== "production" && t && L(e) && le(r, i) && (_ && (Cn(m, e) || wn(p, e)) && b(hr($.FALLBACK_TO_ROOT, {
				key: e,
				type: r
			})), process.env.NODE_ENV !== "production")) {
				let { __v_emitter: t } = k;
				t && _ && t.emit("fallback", {
					type: r,
					key: e,
					to: "global",
					groupId: `${r}:${e}`
				});
			}
			return t && _ ? a(t) : o(e);
		} else if (s(c)) return c;
		else throw ir(Q.UNEXPECTED_RETURN_TYPE);
	};
	function ue(...e) {
		return B((t) => Reflect.apply(Jn, null, [t, ...e]), () => $n(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => L(e));
	}
	function de(...e) {
		let [t, n, r] = e;
		if (r && !z(r)) throw ir(Q.INVALID_ARGUMENT);
		return ue(t, n, M({ resolvedMessage: !0 }, r || {}));
	}
	function fe(...e) {
		return B((t) => Reflect.apply(jn, null, [t, ...e]), () => Nn(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => L(e) || F(e));
	}
	function pe(...e) {
		return B((t) => Reflect.apply(Fn, null, [t, ...e]), () => Ln(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => L(e) || F(e));
	}
	function me(e) {
		return e.map((e) => L(e) || j(e) || R(e) ? br(String(e)) : e);
	}
	let he = {
		normalize: me,
		interpolate: (e) => e,
		type: "vnode"
	};
	function ge(...e) {
		return B((t) => {
			let n, r = t;
			try {
				r.processor = he, n = Reflect.apply(Jn, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => $n(...e), "translate", (t) => t[or](...e), (e) => [br(e)], (e) => F(e));
	}
	function _e(...e) {
		return B((t) => Reflect.apply(Fn, null, [t, ...e]), () => Ln(...e), "number format", (t) => t[cr](...e), Cr, (e) => L(e) || F(e));
	}
	function ye(...e) {
		return B((t) => Reflect.apply(jn, null, [t, ...e]), () => Nn(...e), "datetime format", (t) => t[sr](...e), Cr, (e) => L(e) || F(e));
	}
	function be(e) {
		O = e, k.pluralRules = O;
	}
	function H(e, t) {
		return B(() => {
			if (!e) return !1;
			let n = L(t) ? t : c.value, r = L(t) ? [n] : Vt(k, l.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = Ce(r[t]), i = k.messageResolver(n, e);
				if (i === null && (i = n[e]), q(i) || Z(i) || L(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), wr, (e) => R(e));
	}
	function xe(e) {
		let t = null, n = Vt(k, l.value, c.value);
		for (let r = 0; r < n.length; r++) {
			let i = u.value[n[r]] || {}, a = k.messageResolver(i, e);
			if (a != null) {
				t = a;
				break;
			}
		}
		return t;
	}
	function Se(e) {
		return xe(e) ?? (t && t.tm(e) || {});
	}
	function Ce(e) {
		return u.value[e] || {};
	}
	function we(e, t) {
		if (a) {
			let n = { [e]: t };
			for (let e in n) P(n, e) && gr(n[e]);
			t = n[e];
		}
		u.value[e] = t, k.messages = u.value;
	}
	function Te(e, t) {
		u.value[e] = u.value[e] || {};
		let n = { [e]: t };
		if (a) for (let e in n) P(n, e) && gr(n[e]);
		t = n[e], ve(t, u.value[e]), k.messages = u.value;
	}
	function U(e) {
		return d.value[e] || {};
	}
	function Ee(e, t) {
		d.value[e] = t, k.datetimeFormats = d.value, Pn(k, e, t);
	}
	function W(e, t) {
		d.value[e] = M(d.value[e] || {}, t), k.datetimeFormats = d.value, Pn(k, e, t);
	}
	function De(e) {
		return f.value[e] || {};
	}
	function Oe(e, t) {
		f.value[e] = t, k.numberFormats = f.value, Rn(k, e, t);
	}
	function ke(e, t) {
		f.value[e] = M(f.value[e] || {}, t), k.numberFormats = f.value, Rn(k, e, t);
	}
	Tr++, t && C && (y(t.locale, (e) => {
		s && (c.value = e, k.locale = e, En(k, c.value, l.value));
	}), y(t.fallbackLocale, (e) => {
		s && (l.value = e, k.fallbackLocale = e, En(k, c.value, l.value));
	}));
	let G = {
		id: Tr,
		locale: ee,
		fallbackLocale: ne,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (c.value = t.locale.value, l.value = t.fallbackLocale.value, En(k, c.value, l.value));
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: re,
		get modifiers() {
			return D;
		},
		get pluralRules() {
			return O || {};
		},
		get isGlobal() {
			return i;
		},
		get missingWarn() {
			return p;
		},
		set missingWarn(e) {
			p = e, k.missingWarn = p;
		},
		get fallbackWarn() {
			return m;
		},
		set fallbackWarn(e) {
			m = e, k.fallbackWarn = m;
		},
		get fallbackRoot() {
			return _;
		},
		set fallbackRoot(e) {
			_ = e;
		},
		get fallbackFormat() {
			return v;
		},
		set fallbackFormat(e) {
			v = e, k.fallbackFormat = v;
		},
		get warnHtmlMessage() {
			return T;
		},
		set warnHtmlMessage(e) {
			T = e, k.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return E;
		},
		set escapeParameter(e) {
			E = e, k.escapeParameter = e;
		},
		t: ue,
		getLocaleMessage: Ce,
		setLocaleMessage: we,
		mergeLocaleMessage: Te,
		getPostTranslationHandler: ae,
		setPostTranslationHandler: oe,
		getMissingHandler: se,
		setMissingHandler: ce,
		[dr]: be
	};
	return G.datetimeFormats = N, G.numberFormats = ie, G.rt = de, G.te = H, G.tm = Se, G.d = fe, G.n = pe, G.getDateTimeFormat = U, G.setDateTimeFormat = Ee, G.mergeDateTimeFormat = W, G.getNumberFormat = De, G.setNumberFormat = Oe, G.mergeNumberFormat = ke, G[fr] = n, G[or] = ge, G[sr] = ye, G[cr] = _e, process.env.NODE_ENV !== "production" && (G[lr] = (e) => {
		k.__v_emitter = e;
	}, G[ur] = () => {
		k.__v_emitter = void 0;
	}), G;
}
var kr;
function Ar(e, t) {
	if (kr) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), kr.addTimelineEvent({
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
var jr = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function Mr({ slots: e }, n) {
	return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((e, n) => [...e, ...n.type === t ? n.children : [n]], []) : n.reduce((t, n) => {
		let r = e[n];
		return r && (t[n] = r()), t;
	}, N());
}
function Nr() {
	return t;
}
s({
	name: "i18n-t",
	props: M({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => j(e) || !isNaN(e)
		}
	}, jr),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || Lr({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = Object.keys(n).filter((e) => e[0] !== "_"), o = N();
			e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = L(e.plural) ? +e.plural : e.plural);
			let s = Mr(t, a), c = i[or](e.keypath, s, o), u = M(N(), r);
			return l(L(e.tag) || z(e.tag) ? e.tag : Nr(), u, c);
		};
	}
});
function Pr(e) {
	return F(e) && !L(e[0]);
}
function Fr(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = { part: !0 }, o = N();
		e.locale && (t.locale = e.locale), L(e.format) ? t.key = e.format : z(e.format) && (L(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format).reduce((t, r) => n.includes(r) ? M(N(), t, { [r]: e.format[r] }) : t, N()));
		let s = r(e.value, t, o), c = [t.key];
		F(s) ? c = s.map((e, t) => {
			let n = i[e.type], r = n ? n({
				[e.type]: e.value,
				index: t,
				parts: s
			}) : [e.value];
			return Pr(r) && (r[0].key = `${e.type}-${t}`), r;
		}) : L(s) && (c = [s]);
		let u = M(N(), a);
		return l(L(e.tag) || z(e.tag) ? e.tag : Nr(), u, c);
	};
}
s({
	name: "i18n-n",
	props: M({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, jr),
	setup(e, t) {
		let n = e.i18n || Lr({
			useScope: e.scope,
			__useComponent: !0
		});
		return Fr(e, t, In, (...e) => n[cr](...e));
	}
});
var Ir = O("global-vue-i18n");
function Lr(e = {}) {
	let t = xr();
	if (t == null) throw ir(Q.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw ir(Q.NOT_INSTALLED);
	let n = Rr(t), r = Br(n), i = vr(t), a = zr(e, i);
	if (a === "global") return yr(r, e, i), r;
	if (a === "parent") {
		let i = Vr(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && b(hr($.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw ir(Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = M({}, e);
		a.__root = Vr(n, t) || r;
		let o = Or(a);
		i.__composerExtend && (o[pr] = i.__composerExtend(o));
		let s = null;
		if (process.env.NODE_ENV !== "production") {
			s = ge();
			let e = o;
			e[lr] && e[lr](s), s.on("*", Ar);
		}
		return c() && f(() => {
			if (process.env.NODE_ENV !== "production") {
				s && s.off("*", Ar);
				let e = o;
				e[ur] && e[ur]();
			}
			let e = o[pr];
			e && (e(), delete o[pr]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = M({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = Or(n), o.__composerExtend && (s[pr] = o.__composerExtend(s)), Ur(o, t, s), o.__setInstance(t, s);
	} else process.env.NODE_ENV !== "production" && a === "local" && b(hr($.DUPLICATE_USE_I18N_CALLING));
	return s;
}
function Rr(e) {
	let t = u(e.isCE ? Ir : e.appContext.app.__VUE_I18N_SYMBOL__);
	if (!t) throw ir(e.isCE ? Q.NOT_INSTALLED_WITH_PROVIDE : Q.UNEXPECTED_ERROR);
	return t;
}
function zr(e, t) {
	return ne(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Br(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function Vr(e, t, n = !1) {
	let r = null, i = t.root, a = Hr(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition" && (r = t.__getInstance(a)), r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Hr(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Ur(e, t, n) {
	let r = null;
	d(() => {
		if (process.env.NODE_ENV !== "production") {
			t.__VUE_I18N__ = n, r = ge();
			let e = n;
			e[lr] && e[lr](r), r.on("*", Ar);
		}
	}, t), p(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && (r && r.off("*", Ar), i[ur] && i[ur](), delete t.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[pr];
		a && (a(), delete i[pr]);
	}, t);
}
if (s({
	name: "i18n-d",
	props: M({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, jr),
	setup(e, t) {
		let n = e.i18n || Lr({
			useScope: e.scope,
			__useComponent: !0
		});
		return Fr(e, t, Mn, (...e) => n[sr](...e));
	}
}), ln(At), dn(en), pn(Vt), process.env.NODE_ENV !== "production") {
	let e = ae();
	e.__INTLIFY__ = !0, Mt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
var Wr = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" }, Gr = s({
	__name: "MockBanner",
	setup(e) {
		let { t } = Lr();
		return (e, n) => (m(), i("div", Wr, _(v(t)("mockBanner")), 1));
	}
}), Kr = s({
	__name: "PricingHeader",
	setup(e) {
		return (e, n) => (m(), i(t, null, [o(Gr), n[0] ||= a("div", { class: "mb-12 text-center" }, [a("h1", { class: "mb-3 text-3xl font-bold text-foreground" }, " Simple, Transparent Pricing "), a("p", { class: "text-muted-foreground" }, " Choose the plan that fits your team. No hidden fees. ")], -1)], 64));
	}
});
export { Kr as default };

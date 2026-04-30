import * as e from "vue";
import { Fragment as t, Text as n, computed as r, createElementBlock as i, createVNode as a, defineComponent as o, effectScope as s, getCurrentInstance as c, getCurrentScope as l, h as u, inject as d, isRef as f, onMounted as p, onScopeDispose as m, onUnmounted as h, openBlock as g, ref as _, renderSlot as v, shallowRef as y, toDisplayString as b, watch as x } from "vue";
import S from "../../locales/fr.json";
import C from "../../locales/es.json";
import w from "../../locales/de.json";
import T from "../../locales/it.json";
import E from "../../locales/pt.json";
import D from "../../locales/zh.json";
import O from "../../locales/ja.json";
import ee from "../../locales/ko.json";
import te from "../../locales/ru.json";
function k(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var ne = {};
function re(e) {
	ne[e] || (ne[e] = !0, k(e));
}
var A = typeof window < "u", j, ie;
if (process.env.NODE_ENV !== "production") {
	let e = A && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (j = (t) => {
		e.mark(t);
	}, ie = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var ae = /\{([0-9a-zA-Z]+)\}/g;
function oe(e, ...t) {
	return t.length === 1 && V(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(ae, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var M = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), se = (e, t, n) => ce({
	l: e,
	k: t,
	s: n
}), ce = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), N = (e) => typeof e == "number" && isFinite(e), le = (e) => xe(e) === "[object Date]", ue = (e) => xe(e) === "[object RegExp]", de = (e) => H(e) && Object.keys(e).length === 0, P = Object.assign, fe = Object.create, F = (e = null) => fe(e), pe, me = () => pe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : F();
function he(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ge(e) {
	return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _e(e) {
	return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${ge(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${ge(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && k("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t) => {
		e = e.replace(t, "$1javascript&#58;");
	}), e;
}
var ve = Object.prototype.hasOwnProperty;
function I(e, t) {
	return ve.call(e, t);
}
var L = Array.isArray, R = (e) => typeof e == "function", z = (e) => typeof e == "string", B = (e) => typeof e == "boolean", V = (e) => typeof e == "object" && !!e, ye = (e) => V(e) && R(e.then) && R(e.catch), be = Object.prototype.toString, xe = (e) => be.call(e), H = (e) => xe(e) === "[object Object]", Se = (e) => e == null ? "" : L(e) || H(e) && e.toString === be ? JSON.stringify(e, null, 2) : String(e);
function Ce(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var we = 2;
function Te(e, t = 0, n = e.length) {
	let r = e.split(/\r?\n/), i = 0, a = [];
	for (let e = 0; e < r.length; e++) if (i += r[e].length + 1, i >= t) {
		for (let o = e - we; o <= e + we || n > i; o++) {
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
function Ee() {
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
var De = (e) => !V(e) || L(e);
function Oe(e, t) {
	if (De(e) || De(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (V(e[r]) && !V(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : F()), De(t[r]) || De(e[r]) ? t[r] = e[r] : n.push({
				src: e[r],
				des: t[r]
			}));
		});
	}
}
function ke(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function Ae(e, t, n) {
	let r = {
		start: e,
		end: t
	};
	return n != null && (r.source = n), r;
}
var U = {
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
}, W = {
	[U.EXPECTED_TOKEN]: "Expected token: '{0}'",
	[U.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
	[U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
	[U.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
	[U.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
	[U.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
	[U.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
	[U.EMPTY_PLACEHOLDER]: "Empty placeholder",
	[U.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
	[U.INVALID_LINKED_FORMAT]: "Invalid linked format",
	[U.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
	[U.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
	[U.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
	[U.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
	[U.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
	[U.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function je(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = process.env.NODE_ENV === "production" ? e : oe((i || W)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function Me(e) {
	throw e;
}
var Ne = /<\/?[\w\s="/.':;#-\/]+>/, Pe = (e) => Ne.test(e), G = " ", Fe = "\r", K = "\n", Ie = "\u2028", Le = "\u2029";
function Re(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Fe && t[e + 1] === K, s = (e) => t[e] === K, c = (e) => t[e] === Le, l = (e) => t[e] === Ie, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? K : t[e], g = () => h(n), _ = () => h(n + a);
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
var ze = void 0, Be = "'", Ve = "tokenizer";
function He(e, t = {}) {
	let n = t.location !== !1, r = Re(e), i = () => r.index(), a = () => ke(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
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
		t.column += r, t.offset += r, u && u(je(e, n ? Ae(a.startLoc, t) : null, {
			domain: Ve,
			args: i
		}));
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = Ae(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
	}
	let p = (e) => f(e, 13);
	function m(e, t) {
		return e.currentChar() === t ? (e.next(), t) : (d(U.EXPECTED_TOKEN, a(), 0, t), "");
	}
	function h(e) {
		let t = "";
		for (; e.currentPeek() === G || e.currentPeek() === K;) t += e.currentPeek(), e.peek();
		return t;
	}
	function g(e) {
		let t = h(e);
		return e.skipToPeek(), t;
	}
	function _(e) {
		if (e === ze) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === ze) return !1;
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
		let r = e.currentPeek() === Be;
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
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === G || !t ? !1 : t === K ? (e.peek(), r()) : D(e, !1);
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
			return i === "{" || i === "@" || !i ? t : i === "|" ? !(r === G || r === K) : i === G ? (e.peek(), n(!0, G)) : i === K ? (e.peek(), n(!0, K)) : !0;
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function O(e, t) {
		let n = e.currentChar();
		return n === ze ? ze : t(n) ? (e.next(), n) : null;
	}
	function ee(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function te(e) {
		return O(e, ee);
	}
	function k(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function ne(e) {
		return O(e, k);
	}
	function re(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function A(e) {
		return O(e, re);
	}
	function j(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function ie(e) {
		return O(e, j);
	}
	function ae(e) {
		let t = "", n = "";
		for (; t = A(e);) n += t;
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
			else if (n === G || n === K) if (D(e)) t += n, e.next();
			else if (E(e)) break;
			else t += n, e.next();
			else t += n, e.next();
		}
		return t;
	}
	function M(e) {
		g(e);
		let t = "", n = "";
		for (; t = ne(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== ze && r !== G && r !== K && r !== "　") {
			let t = P(e);
			return d(U.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === ze && d(U.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function se(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${ae(e)}`) : t += ae(e), e.currentChar() === ze && d(U.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function ce(e) {
		return e !== Be && e !== K;
	}
	function N(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = O(e, ce);) t === "\\" ? n += le(e) : n += t;
		let r = e.currentChar();
		return r === K || r === ze ? (d(U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === K && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function le(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return ue(e, t, 4);
			case "U": return ue(e, t, 6);
			default: return d(U.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function ue(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = ie(e);
			if (!n) {
				d(U.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function de(e) {
		return e !== "{" && e !== "}" && e !== G && e !== K;
	}
	function P(e) {
		g(e);
		let t = "", n = "";
		for (; t = O(e, de);) n += t;
		return n;
	}
	function fe(e) {
		let t = "", n = "";
		for (; t = te(e);) n += t;
		return n;
	}
	function F(e) {
		let t = (n) => {
			let r = e.currentChar();
			return r === "{" || r === "@" || r === "|" || r === "(" || r === ")" || !r || r === G ? n : (n += r, e.next(), t(n));
		};
		return t("");
	}
	function pe(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function me(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(U.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(U.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(U.UNTERMINATED_CLOSING_BRACE, a(), 0), n = he(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (E(e)) return t.braceNest > 0 && d(U.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, pe(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(U.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, ge(e, t);
				if (r = y(e, t)) return n = f(t, 4, M(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, se(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 6, N(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, P(e)), d(U.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function he(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch ((n === 7 || n === 8 || n === 11 || n === 9) && (i === K || i === G) && d(U.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return E(e) ? (r = f(t, 1, pe(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), he(e, t)) : C(e, t) ? (g(e), f(t, 11, fe(e))) : T(e, t) ? (g(e), i === "{" ? me(e, t) || r : f(t, 10, F(e))) : (n === 7 && d(U.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, ge(e, t));
		}
	}
	function ge(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return me(e, t) || p(t);
		if (t.inLinked) return he(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return me(e, t) || p(t);
			case "}": return d(U.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return he(e, t) || p(t);
			default:
				if (E(e)) return n = f(t, 1, pe(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (D(e)) return f(t, 0, oe(e));
				break;
		}
		return n;
	}
	function _e() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === ze ? f(c, 13) : ge(r, c);
	}
	return {
		nextToken: _e,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var Ue = "parser", We = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, Ge = /\\([\\@{}|])/g;
function Ke(e, t) {
	return t;
}
function qe(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function Je(e = {}) {
	let t = e.location !== !1, { onError: n } = e;
	function r(e, r, i, a, ...o) {
		let s = e.currentPosition();
		s.offset += a, s.column += a, n && n(je(r, t ? Ae(i, s) : null, {
			domain: Ue,
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
		return r.value = t.replace(Ge, Ke), a(r, e.currentOffset(), e.currentPosition()), r;
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
		return o.value = t.replace(We, qe), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function u(e) {
		let t = e.nextToken(), n = e.context(), { lastOffset: o, lastStartLoc: s } = n, c = i(8, o, s);
		return t.type === 11 ? (t.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, Ye(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, U.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
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
		switch (o.type !== 9 && r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Ye(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Ye(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Ye(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Ye(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Ye(o)), n.key = l(e, o.value || "");
				break;
			default: {
				r(e, U.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
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
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Ye(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Ye(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Ye(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Ye(i)), n.items.push(l(e, i.value || ""));
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
		return c && r(e, U.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0), a(l, e.currentOffset(), e.currentPosition()), l;
	}
	function h(e) {
		let t = e.context(), { offset: n, startLoc: r } = t, i = p(e);
		return t.currentType === 13 ? i : m(e, n, r, i);
	}
	function g(n) {
		let o = He(n, P({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, U.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function Ye(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Xe(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function Ze(e, t) {
	for (let n = 0; n < e.length; n++) Qe(e[n], t);
}
function Qe(e, t) {
	switch (e.type) {
		case 1:
			Ze(e.cases, t), t.helper("plural");
			break;
		case 2:
			Ze(e.items, t);
			break;
		case 6:
			Qe(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4:
			t.helper("interpolate"), t.helper("named");
			break;
	}
}
function $e(e, t = {}) {
	let n = Xe(e);
	n.helper("normalize"), e.body && Qe(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function et(e) {
	let t = e.body;
	return t.type === 2 ? tt(t) : t.cases.forEach((e) => tt(e)), e;
}
function tt(e) {
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
			e.static = Ce(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
var nt = "minifier";
function rt(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			rt(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) rt(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) rt(n[e]);
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
			rt(t.key), t.k = t.key, delete t.key, t.modifier && (rt(t.modifier), t.m = t.modifier, delete t.modifier);
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
		default: if (process.env.NODE_ENV !== "production") throw je(U.UNHANDLED_MINIFIER_NODE_TYPE, null, {
			domain: nt,
			args: [e.type]
		});
	}
	delete e.type;
}
var it = "parser";
function at(e, t) {
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
function ot(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), ut(e, t.key), t.modifier ? (e.push(", "), ut(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function st(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (ut(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function ct(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (ut(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function lt(e, t) {
	t.body ? ut(e, t.body) : e.push("null");
}
function ut(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			lt(e, t);
			break;
		case 1:
			ct(e, t);
			break;
		case 2:
			st(e, t);
			break;
		case 6:
			ot(e, t);
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
		default: if (process.env.NODE_ENV !== "production") throw je(U.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: it,
			args: [t.type]
		});
	}
}
var dt = (e, t = {}) => {
	let n = z(t.mode) ? t.mode : "normal", r = z(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, o = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = at(e, {
		mode: n,
		filename: r,
		sourceMap: i,
		breakLineCode: a,
		needIndent: o
	});
	c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), s.length > 0 && (c.push(`const { ${Ce(s.map((e) => `${e}: _${e}`), ", ")} } = ctx`), c.newline()), c.push("return "), ut(c, e), c.deindent(o), c.push("}"), delete e.helpers;
	let { code: l, map: u } = c.context();
	return {
		ast: e,
		code: l,
		map: u ? u.toJSON() : void 0
	};
};
function ft(e, t = {}) {
	let n = P({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = Je(n).parse(e);
	return r ? (a && et(o), i && rt(o), {
		ast: o,
		code: ""
	}) : ($e(o, n), dt(o, n));
}
function q(e) {
	return V(e) && St(e) === 0 && (I(e, "b") || I(e, "body"));
}
var pt = ["b", "body"];
function mt(e) {
	return kt(e, pt);
}
var ht = ["c", "cases"];
function gt(e) {
	return kt(e, ht, []);
}
var _t = ["s", "static"];
function vt(e) {
	return kt(e, _t);
}
var yt = ["i", "items"];
function bt(e) {
	return kt(e, yt, []);
}
var xt = ["t", "type"];
function St(e) {
	return kt(e, xt);
}
var Ct = ["v", "value"];
function wt(e, t) {
	let n = kt(e, Ct);
	if (n != null) return n;
	throw jt(t);
}
var Tt = ["m", "modifier"];
function Et(e) {
	return kt(e, Tt);
}
var Dt = ["k", "key"];
function Ot(e) {
	let t = kt(e, Dt);
	if (t) return t;
	throw jt(6);
}
function kt(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (I(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var At = [
	...pt,
	...ht,
	..._t,
	...yt,
	...Dt,
	...Tt,
	...Ct,
	...xt
];
function jt(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function Mt(e) {
	return (t) => Nt(t, e);
}
function Nt(e, t) {
	let n = mt(t);
	if (n == null) throw jt(0);
	if (St(n) === 1) {
		let t = gt(n);
		return e.plural(t.reduce((t, n) => [...t, Pt(e, n)], []));
	} else return Pt(e, n);
}
function Pt(e, t) {
	let n = vt(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = bt(t).reduce((t, n) => [...t, Ft(e, n)], []);
		return e.normalize(n);
	}
}
function Ft(e, t) {
	let n = St(t);
	switch (n) {
		case 3: return wt(t, n);
		case 9: return wt(t, n);
		case 4: {
			let r = t;
			if (I(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (I(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw jt(n);
		}
		case 5: {
			let r = t;
			if (I(r, "i") && N(r.i)) return e.interpolate(e.list(r.i));
			if (I(r, "index") && N(r.index)) return e.interpolate(e.list(r.index));
			throw jt(n);
		}
		case 6: {
			let n = t, r = Et(n), i = Ot(n);
			return e.linked(Ft(e, i), r ? Ft(e, r) : void 0, e.type);
		}
		case 7: return wt(t, n);
		case 8: return wt(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var It = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Lt(e, t) {
	t && Pe(e) && k(oe(It, { source: e }));
}
var Rt = (e) => e, zt = F();
function Bt(e, t = {}) {
	let n = !1, r = t.onError || Me;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...ft(e, t),
		detectError: n
	};
}
function Vt(e, t) {
	if (z(e)) {
		let n = B(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
		process.env.NODE_ENV !== "production" && Lt(e, n);
		let r = (t.onCacheKey || Rt)(e), i = zt[r];
		if (i) return i;
		let { ast: a, detectError: o } = Bt(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = Mt(a);
		return o ? s : zt[r] = s;
	} else {
		if (process.env.NODE_ENV !== "production" && !q(e)) return k(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
		let n = e.cacheKey;
		return n ? zt[n] || (zt[n] = Mt(e)) : Mt(e);
	}
}
var Ht = null;
function Ut(e) {
	Ht = e;
}
function Wt(e, t, n) {
	Ht && Ht.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var Gt = Kt("function:translate");
function Kt(e) {
	return (t) => Ht && Ht.emit(e, t);
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
function qt(e) {
	return je(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: Jt });
}
var Jt = {
	[J.INVALID_ARGUMENT]: "Invalid arguments",
	[J.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[J.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[J.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[J.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[J.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Yt(e, t) {
	return t.locale == null ? Zt(e.locale) : Zt(t.locale);
}
var Xt;
function Zt(e) {
	if (z(e)) return e;
	if (R(e)) {
		if (e.resolvedOnce && Xt != null) return Xt;
		if (e.constructor.name === "Function") {
			let t = e();
			if (ye(t)) throw qt(J.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return Xt = t;
		} else throw qt(J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw qt(J.NOT_SUPPORT_LOCALE_TYPE);
}
function Qt(e, t, n) {
	return [...new Set([n, ...L(t) ? t : V(t) ? Object.keys(t) : z(t) ? [t] : [n]])];
}
function $t(e, t, n) {
	let r = z(n) ? n : _n, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; L(e);) e = en(a, e, t);
		let o = L(t) || !H(t) ? t : t.default ? t.default : null;
		e = z(o) ? [o] : o, L(e) && en(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function en(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && B(r); i++) {
		let a = t[i];
		z(a) && (r = tn(e, t[i], n));
	}
	return r;
}
function tn(e, t, n) {
	let r, i = t.split("-");
	do
		r = nn(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function nn(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (L(n) || H(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var rn = [];
rn[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, rn[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, rn[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, rn[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, rn[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, rn[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, rn[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var an = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function on(e) {
	return an.test(e);
}
function sn(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function cn(e) {
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
function ln(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : on(t) ? sn(t) : "*" + t;
}
function un(e) {
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
			if (i = 0, o === void 0 || (o = ln(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = cn(a), d = rn[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var dn = /* @__PURE__ */ new Map();
function fn(e, t) {
	return V(e) ? e[t] : null;
}
function pn(e, t) {
	if (!V(e)) return null;
	let n = dn.get(t);
	if (n || (n = un(t), n && dn.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (At.includes(e) && q(i) || !V(i) || !I(i, e)) return null;
		let t = i[e];
		if (t === void 0 || R(i)) return null;
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
}, mn = {
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
function hn(e, ...t) {
	return oe(mn[e], ...t);
}
var gn = "11.4.0", _n = "en-US", vn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function yn() {
	return {
		upper: (e, t) => t === "text" && z(e) ? e.toUpperCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && z(e) ? e.toLowerCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && z(e) ? vn(e) : t === "vnode" && V(e) && "__v_isVNode" in e ? vn(e.children) : e
	};
}
var bn;
function xn(e) {
	bn = e;
}
var Sn;
function Cn(e) {
	Sn = e;
}
var wn;
function Tn(e) {
	wn = e;
}
var En = null, Dn = (e) => {
	En = e;
}, On = () => En, kn = null, An = (e) => {
	kn = e;
}, jn = () => kn, Mn = 0;
function Nn(e = {}) {
	let t = R(e.onWarn) ? e.onWarn : k, n = z(e.version) ? e.version : gn, r = z(e.locale) || R(e.locale) ? e.locale : _n, i = R(r) ? _n : r, a = L(e.fallbackLocale) || H(e.fallbackLocale) || z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = H(e.messages) ? e.messages : Pn(i), s = H(e.datetimeFormats) ? e.datetimeFormats : Pn(i), c = H(e.numberFormats) ? e.numberFormats : Pn(i), l = P(F(), e.modifiers, yn()), u = e.pluralRules || F(), d = R(e.missing) ? e.missing : null, f = B(e.missingWarn) || ue(e.missingWarn) ? e.missingWarn : !0, p = B(e.fallbackWarn) || ue(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = R(e.postTranslation) ? e.postTranslation : null, _ = H(e.processor) ? e.processor : null, v = B(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, b = R(e.messageCompiler) ? e.messageCompiler : bn;
	process.env.NODE_ENV !== "production" && R(e.messageCompiler) && re(hn(Y.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let x = R(e.messageResolver) ? e.messageResolver : Sn || fn, S = R(e.localeFallbacker) ? e.localeFallbacker : wn || Qt, C = V(e.fallbackContext) ? e.fallbackContext : void 0, w = e, T = V(w.__datetimeFormatters) ? w.__datetimeFormatters : /* @__PURE__ */ new Map(), E = V(w.__numberFormatters) ? w.__numberFormatters : /* @__PURE__ */ new Map(), D = V(w.__meta) ? w.__meta : {};
	Mn++;
	let O = {
		version: n,
		cid: Mn,
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
		messageCompiler: b,
		messageResolver: x,
		localeFallbacker: S,
		fallbackContext: C,
		onWarn: t,
		__meta: D
	};
	return O.datetimeFormats = s, O.numberFormats = c, O.__datetimeFormatters = T, O.__numberFormatters = E, process.env.NODE_ENV !== "production" && (O.__v_emitter = w.__v_emitter == null ? void 0 : w.__v_emitter), process.env.NODE_ENV !== "production" && Wt(O, n, D), O;
}
var Pn = (e) => ({ [e]: F() });
function Fn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function In(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function Ln(e, t, n, r, i) {
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
		return z(r) ? r : t;
	} else return process.env.NODE_ENV !== "production" && In(r, t) && o(hn(Y.NOT_FOUND_KEY, {
		key: t,
		locale: n
	})), t;
}
function Rn(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function zn(e, t) {
	return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Bn(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (zn(e, t[r])) return !0;
	return !1;
}
var Vn = typeof Intl < "u", Hn = {
	dateTimeFormat: Vn && Intl.DateTimeFormat !== void 0,
	numberFormat: Vn && Intl.NumberFormat !== void 0
};
function Un(e, ...t) {
	let { datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !Hn.dateTimeFormat) return a(hn(Y.CANNOT_FORMAT_DATE)), "";
	if (!z(t[0]) && !le(t[0]) && !N(t[0])) return process.env.NODE_ENV !== "production" && a(hn(Y.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Gn(...t), f = B(u.missingWarn) ? u.missingWarn : e.missingWarn, p = B(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Yt(e, u), g = o(e, i, h);
	if (!z(c) || c === "") return new Intl.DateTimeFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "datetime format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Fn(p, c) && a(hn(Y.FALLBACK_TO_DATE_FORMAT, {
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
		if (_ = n[v] || {}, y = _[c], H(y)) break;
		Ln(e, c, v, f, S), b = x;
	}
	if (!H(y) || !z(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	de(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.DateTimeFormat(v, P({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Wn = [
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
function Gn(...e) {
	let [t, n, r, i] = e, a = F(), o = F(), s;
	if (z(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw qt(J.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw qt(J.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (le(t)) {
		if (isNaN(t.getTime())) throw qt(J.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (N(t)) s = t;
	else throw qt(J.INVALID_ARGUMENT);
	return z(n) ? a.key = n : H(n) && Object.keys(n).forEach((e) => {
		Wn.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), z(r) ? a.locale = r : H(r) && (o = r), H(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Kn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
	}
}
function qn(e, ...t) {
	let { numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !Hn.numberFormat) return a(hn(Y.CANNOT_FORMAT_NUMBER)), "";
	if (!N(t[0])) return process.env.NODE_ENV !== "production" && a(hn(Y.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Yn(...t), f = B(u.missingWarn) ? u.missingWarn : e.missingWarn, p = B(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Yt(e, u), g = o(e, i, h);
	if (!z(c) || c === "") return new Intl.NumberFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "number format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Fn(p, c) && a(hn(Y.FALLBACK_TO_NUMBER_FORMAT, {
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
		if (_ = n[v] || {}, y = _[c], H(y)) break;
		Ln(e, c, v, f, S), b = x;
	}
	if (!H(y) || !z(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	de(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.NumberFormat(v, P({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Jn = [
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
function Yn(...e) {
	let [t, n, r, i] = e, a = F(), o = F();
	if (!N(t)) throw qt(J.INVALID_ARGUMENT);
	let s = t;
	return z(n) ? a.key = n : H(n) && Object.keys(n).forEach((e) => {
		Jn.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), z(r) ? a.locale = r : H(r) && (o = r), H(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Xn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
	}
}
var Zn = (e) => e, Qn = (e) => "", $n = "text", er = (e) => e.length === 0 ? "" : Ce(e), tr = Se;
function nr(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function rr(e) {
	let t = N(e.pluralIndex) ? e.pluralIndex : -1;
	return N(e.named?.count) ? e.named.count : N(e.named?.n) ? e.named.n : t;
}
function ir(e = {}) {
	let t = e.locale, n = rr(e), r = z(t) && R(e.pluralRules?.[t]) ? e.pluralRules[t] : nr, i = r === nr ? void 0 : nr, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || F();
	N(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
	let l = (e) => c[e];
	function u(t, n) {
		return (R(e.messages) ? e.messages(t, !!n) : V(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : Qn);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : Zn, f = R(e.processor?.normalize) ? e.processor.normalize : er, p = R(e.processor?.interpolate) ? e.processor.interpolate : tr, m = {
		list: s,
		named: l,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? V(n) ? (a = n.modifier || a, i = n.type || i) : z(n) && (a = n || a) : t.length === 2 && (z(n) && (a = n || a), z(r) && (i = r || i));
			let o = u(e, !0)(m), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && L(s) && a ? s[0] : s;
			return a ? d(a)(c, i) : c;
		},
		message: u,
		type: z(e.processor?.type) ? e.processor.type : $n,
		interpolate: p,
		normalize: f,
		values: P(F(), o, c)
	};
	return m;
}
var ar = () => "", X = (e) => R(e);
function or(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = dr(...t), u = B(l.missingWarn) ? l.missingWarn : e.missingWarn, d = B(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = B(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = z(l.default) || B(l.default) ? B(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (z(m) || R(m)), g = Yt(e, l);
	f && sr(l);
	let [_, v, y] = p ? [
		c,
		g,
		s[g] || F()
	] : cr(e, c, g, o, d, u), b = _, x = c;
	if (!p && !(z(b) || q(b) || X(b)) && h && (b = m, x = b), !p && (!(z(b) || q(b) || X(b)) || !z(v))) return i ? -1 : c;
	if (process.env.NODE_ENV !== "production" && z(b) && e.messageCompiler == null) return k(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
	let S = !1, C = X(b) ? b : lr(e, c, v, b, x, () => {
		S = !0;
	});
	if (S) return b;
	let w = ur(e, C, ir(mr(e, v, y, l))), T = r ? r(w, c) : w;
	if (f && z(T) && (T = _e(T)), process.env.NODE_ENV !== "production") {
		let t = {
			timestamp: Date.now(),
			key: z(c) ? c : X(b) ? b.key : "",
			locale: v || (X(b) ? b.locale : ""),
			format: z(b) ? b : X(b) ? b.source : "",
			message: T
		};
		t.meta = P({}, e.__meta, On() || {}), Gt(t);
	}
	return T;
}
function sr(e) {
	L(e.list) ? e.list = e.list.map((e) => z(e) ? he(e) : e) : V(e.named) && Object.keys(e.named).forEach((t) => {
		z(e.named[t]) && (e.named[t] = he(e.named[t]));
	});
}
function cr(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = F(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !zn(n, f) && Fn(i, t) && s(hn(Y.FALLBACK_TO_TRANSLATE, {
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
		}), d = o[f] || F();
		let _ = null, v, y;
		if (process.env.NODE_ENV !== "production" && A && l && (_ = window.performance.now(), v = "intlify-message-resolve-start", y = "intlify-message-resolve-end", j && j(v)), (p = c(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && A && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: `${g}:${t}`
			}), v && y && j && ie && (j(y), ie("intlify message resolve", v, y));
		}
		if (z(p) || q(p) || X(p)) break;
		if (!Bn(f, u)) {
			let n = Ln(e, t, f, a, g);
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
function lr(e, t, n, r, i, a) {
	let { messageCompiler: o, warnHtmlMessage: s } = e;
	if (X(r)) {
		let e = r;
		return e.locale = e.locale || n, e.key = e.key || t, e;
	}
	if (o == null) {
		let e = (() => r);
		return e.locale = n, e.key = t, e;
	}
	let c = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, l = null, u, d;
	process.env.NODE_ENV !== "production" && A && c && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", j && j(u));
	let f = o(r, fr(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && A && c) {
		let e = window.performance.now();
		c && l && c.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: e - l,
			groupId: `translate:${t}`
		}), u && d && j && ie && (j(d), ie("intlify message compilation", u, d));
	}
	return f.locale = n, f.key = t, f.source = r, f;
}
function ur(e, t, n) {
	let r = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, i = null, a, o;
	process.env.NODE_ENV !== "production" && A && r && (i = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", j && j(a));
	let s = t(n);
	if (process.env.NODE_ENV !== "production" && A && r) {
		let e = window.performance.now();
		r && i && r.emit("message-evaluation", {
			type: "message-evaluation",
			value: s,
			time: e - i,
			groupId: `translate:${t.key}`
		}), a && o && j && ie && (j(o), ie("intlify message evaluation", a, o));
	}
	return s;
}
function dr(...e) {
	let [t, n, r] = e, i = F();
	if (!z(t) && !N(t) && !X(t) && !q(t)) throw qt(J.INVALID_ARGUMENT);
	let a = N(t) ? String(t) : (X(t), t);
	return N(n) ? i.plural = n : z(n) ? i.default = n : H(n) && !de(n) ? i.named = n : L(n) && (i.list = n), N(r) ? i.plural = r : z(r) ? i.default = r : H(r) && P(i, r), [a, i];
}
function fr(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = pr(r), a = t.location && i && Te(i, t.location.start.offset, t.location.end.offset), o = e.__v_emitter;
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
		onCacheKey: (e) => se(t, n, e)
	};
}
function pr(e) {
	if (z(e)) return e;
	if (e.loc && e.loc.source) return e.loc.source;
}
function mr(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r, i) => {
			let a = o(n, r);
			if (a == null && (u || i)) {
				let [n, , i] = cr(u || e, r, t, s, c, l);
				a = n ?? o(i, r);
			}
			if (z(a) || q(a)) {
				let n = !1, i = lr(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? ar : i;
			} else if (X(a)) return a;
			else return ar;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), N(r.plural) && (d.pluralIndex = r.plural), d;
}
function hr() {
	return gr().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function gr() {
	return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
var _r = typeof Proxy == "function", vr = "devtools-plugin:setup", yr = "plugin:settings:set", br, xr;
function Sr() {
	return br === void 0 && (typeof window < "u" && window.performance ? (br = !0, xr = window.performance) : typeof globalThis < "u" && globalThis.perf_hooks?.performance ? (br = !0, xr = globalThis.perf_hooks.performance) : br = !1), br;
}
function Cr() {
	return Sr() ? xr.now() : Date.now();
}
var wr = class {
	constructor(e, t) {
		this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = t;
		let n = {};
		if (e.settings) for (let t in e.settings) n[t] = e.settings[t].defaultValue;
		let r = `__vue-devtools-plugin-settings__${e.id}`, i = Object.assign({}, n);
		try {
			let e = localStorage.getItem(r), t = JSON.parse(e);
			Object.assign(i, t);
		} catch {}
		this.fallbacks = {
			getSettings() {
				return i;
			},
			setSettings(e) {
				try {
					localStorage.setItem(r, JSON.stringify(e));
				} catch {}
				i = e;
			},
			now() {
				return Cr();
			}
		}, t && t.on(yr, (e, t) => {
			e === this.plugin.id && this.fallbacks.setSettings(t);
		}), this.proxiedOn = new Proxy({}, { get: (e, t) => this.target ? this.target.on[t] : (...e) => {
			this.onQueue.push({
				method: t,
				args: e
			});
		} }), this.proxiedTarget = new Proxy({}, { get: (e, t) => this.target ? this.target[t] : t === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(t) ? (...e) => (this.targetQueue.push({
			method: t,
			args: e,
			resolve: () => {}
		}), this.fallbacks[t](...e)) : (...e) => new Promise((n) => {
			this.targetQueue.push({
				method: t,
				args: e,
				resolve: n
			});
		}) });
	}
	async setRealTarget(e) {
		this.target = e;
		for (let e of this.onQueue) this.target.on[e.method](...e.args);
		for (let e of this.targetQueue) e.resolve(await this.target[e.method](...e.args));
	}
};
function Tr(e, t) {
	let n = e, r = gr(), i = hr(), a = _r && n.enableEarlyProxy;
	if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a)) i.emit(vr, e, t);
	else {
		let e = a ? new wr(n, i) : null;
		(r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: n,
			setupFn: t,
			proxy: e
		}), e && t(e.proxiedTarget);
	}
}
var Er = "11.4.0", Z = {
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
function Q(e, ...t) {
	return je(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: Dr,
		args: t
	});
}
var Dr = {
	[Z.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
	[Z.INVALID_ARGUMENT]: "Invalid argument",
	[Z.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
	[Z.NOT_INSTALLED]: "Need to install with `app.use` function",
	[Z.UNEXPECTED_ERROR]: "Unexpected error",
	[Z.REQUIRED_VALUE]: "Required in value: {0}",
	[Z.INVALID_VALUE]: "Invalid value",
	[Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
	[Z.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
	[Z.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
	[Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Or = M("__translateVNode"), kr = M("__datetimeParts"), Ar = M("__numberParts"), jr = M("__enableEmitter"), Mr = M("__disableEmitter"), Nr = M("__setPluralRules");
M("__intlifyMeta");
var Pr = M("__injectWithOption"), Fr = M("__dispose"), $ = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
}, Ir = {
	[$.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[$.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[$.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[$.DEPRECATE_LEGACY_MODE]: "Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html",
	[$.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
	[$.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Lr(e, ...t) {
	return oe(Ir[e], ...t);
}
function Rr(e) {
	if (!V(e) || q(e)) return e;
	for (let t in e) if (I(e, t)) if (!t.includes(".")) V(e[t]) && Rr(e[t]);
	else {
		let n = t.split("."), r = n.length - 1, i = e, a = !1;
		for (let e = 0; e < r; e++) {
			if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
			if (n[e] in i || (i[n[e]] = F()), !V(i[n[e]])) {
				process.env.NODE_ENV !== "production" && k(Lr($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
				break;
			}
			i = i[n[e]];
		}
		if (a || (q(i) ? At.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !q(i)) {
			let e = i[n[r]];
			V(e) && Rr(e);
		}
	}
	return e;
}
function zr(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = H(n) ? n : L(r) ? F() : { [e]: F() };
	if (L(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || F(), Oe(n, o[t])) : Oe(n, o);
		} else z(e) && Oe(JSON.parse(e), o);
	}), i == null && a) for (let e in o) I(o, e) && Rr(o[e]);
	return o;
}
function Br(e) {
	return e.type;
}
function Vr(e, t, n) {
	let r = V(t.messages) ? t.messages : F();
	"__i18nGlobal" in n && (r = zr(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), V(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (V(t.numberFormats)) {
		let n = Object.keys(t.numberFormats);
		n.length && n.forEach((n) => {
			e.mergeNumberFormat(n, t.numberFormats[n]);
		});
	}
}
function Hr(e) {
	return a(n, null, e, 0);
}
function Ur() {
	let t = "currentInstance";
	return t in e ? e[t] : e.getCurrentInstance();
}
var Wr = "__INTLIFY_META__", Gr = () => [], Kr = () => !1, qr = 0;
function Jr(e) {
	return ((t, n, r, i) => e(n, r, Ur() || void 0, i));
}
var Yr = () => {
	let e = Ur(), t = null;
	return e && (t = Br(e)[Wr]) ? { [Wr]: t } : null;
};
function Xr(e = {}) {
	let { __root: t, __injectWithOption: n } = e, i = t === void 0, a = e.flatJson, o = A ? _ : y, s = B(e.inheritLocale) ? e.inheritLocale : !0, c = o(t && s ? t.locale.value : z(e.locale) ? e.locale : _n), l = o(t && s ? t.fallbackLocale.value : z(e.fallbackLocale) || L(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(zr(c.value, e)), d = o(H(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(H(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : B(e.missingWarn) || ue(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : B(e.fallbackWarn) || ue(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : B(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, v = R(e.missing) ? e.missing : null, b = R(e.missing) ? Jr(e.missing) : null, S = R(e.postTranslation) ? e.postTranslation : null, C = t ? t.warnHtmlMessage : B(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter, T = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {}, E = e.pluralRules || t && t.pluralRules, D;
	D = (() => {
		i && An(null);
		let t = {
			version: Er,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: T,
			pluralRules: E,
			missing: b === null ? void 0 : b,
			missingWarn: p,
			fallbackWarn: m,
			fallbackFormat: g,
			unresolving: !0,
			postTranslation: S === null ? void 0 : S,
			warnHtmlMessage: C,
			escapeParameter: w,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value, t.__datetimeFormatters = H(D) ? D.__datetimeFormatters : void 0, t.__numberFormatters = H(D) ? D.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (t.__v_emitter = H(D) ? D.__v_emitter : void 0);
		let n = Nn(t);
		return i && An(n), n;
	})(), Rn(D, c.value, l.value);
	function O() {
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
			D.locale = e, c.value = e;
		}
	}), te = r({
		get: () => l.value,
		set: (e) => {
			D.fallbackLocale = e, l.value = e, Rn(D, c.value, e);
		}
	}), ne = r(() => u.value), re = r(() => d.value), j = r(() => f.value);
	function ie() {
		return R(S) ? S : null;
	}
	function ae(e) {
		S = e, D.postTranslation = e;
	}
	function oe() {
		return v;
	}
	function M(e) {
		e !== null && (b = Jr(e)), v = e, D.missing = b;
	}
	function se(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let ce = (e, n, r, a, o, s) => {
		O();
		let c;
		try {
			process.env.NODE_ENV !== "production" && Dn(Yr()), i || (D.fallbackContext = t ? jn() : void 0), c = e(D);
		} finally {
			process.env.NODE_ENV !== "production" && Dn(null), i || (D.fallbackContext = void 0);
		}
		if (r !== "translate exists" && N(c) && c === -1 || r === "translate exists" && !c) {
			let [e, i] = n();
			if (process.env.NODE_ENV !== "production" && t && z(e) && se(r, i) && (h && (Fn(m, e) || In(p, e)) && k(Lr($.FALLBACK_TO_ROOT, {
				key: e,
				type: r
			})), process.env.NODE_ENV !== "production")) {
				let { __v_emitter: t } = D;
				t && h && t.emit("fallback", {
					type: r,
					key: e,
					to: "global",
					groupId: `${r}:${e}`
				});
			}
			return t && h ? a(t) : o(e);
		} else if (s(c)) return c;
		else throw Q(Z.UNEXPECTED_RETURN_TYPE);
	};
	function le(...e) {
		return ce((t) => Reflect.apply(or, null, [t, ...e]), () => dr(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => z(e));
	}
	function de(...e) {
		let [t, n, r] = e;
		if (r && !V(r)) throw Q(Z.INVALID_ARGUMENT);
		return le(t, n, P({ resolvedMessage: !0 }, r || {}));
	}
	function fe(...e) {
		return ce((t) => Reflect.apply(Un, null, [t, ...e]), () => Gn(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => z(e) || L(e));
	}
	function F(...e) {
		return ce((t) => Reflect.apply(qn, null, [t, ...e]), () => Yn(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => z(e) || L(e));
	}
	function pe(e) {
		return e.map((e) => z(e) || N(e) || B(e) ? Hr(String(e)) : e);
	}
	let me = {
		normalize: pe,
		interpolate: (e) => e,
		type: "vnode"
	};
	function he(...e) {
		return ce((t) => {
			let n, r = t;
			try {
				r.processor = me, n = Reflect.apply(or, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => dr(...e), "translate", (t) => t[Or](...e), (e) => [Hr(e)], (e) => L(e));
	}
	function ge(...e) {
		return ce((t) => Reflect.apply(qn, null, [t, ...e]), () => Yn(...e), "number format", (t) => t[Ar](...e), Gr, (e) => z(e) || L(e));
	}
	function _e(...e) {
		return ce((t) => Reflect.apply(Un, null, [t, ...e]), () => Gn(...e), "datetime format", (t) => t[kr](...e), Gr, (e) => z(e) || L(e));
	}
	function ve(e) {
		E = e, D.pluralRules = E;
	}
	function ye(e, t) {
		return ce(() => {
			if (!e) return !1;
			let n = z(t) ? t : c.value, r = z(t) ? [n] : $t(D, l.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = Se(r[t]), i = D.messageResolver(n, e);
				if (i === null && (i = n[e]), q(i) || X(i) || z(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), Kr, (e) => B(e));
	}
	function be(e) {
		let t = null, n = $t(D, l.value, c.value);
		for (let r = 0; r < n.length; r++) {
			let i = u.value[n[r]] || {}, a = D.messageResolver(i, e);
			if (a != null) {
				t = a;
				break;
			}
		}
		return t;
	}
	function xe(e) {
		return be(e) ?? (t && t.tm(e) || {});
	}
	function Se(e) {
		return u.value[e] || {};
	}
	function Ce(e, t) {
		if (a) {
			let n = { [e]: t };
			for (let e in n) I(n, e) && Rr(n[e]);
			t = n[e];
		}
		u.value[e] = t, D.messages = u.value;
	}
	function we(e, t) {
		u.value[e] = u.value[e] || {};
		let n = { [e]: t };
		if (a) for (let e in n) I(n, e) && Rr(n[e]);
		t = n[e], Oe(t, u.value[e]), D.messages = u.value;
	}
	function Te(e) {
		return d.value[e] || {};
	}
	function Ee(e, t) {
		d.value[e] = t, D.datetimeFormats = d.value, Kn(D, e, t);
	}
	function De(e, t) {
		d.value[e] = P(d.value[e] || {}, t), D.datetimeFormats = d.value, Kn(D, e, t);
	}
	function ke(e) {
		return f.value[e] || {};
	}
	function Ae(e, t) {
		f.value[e] = t, D.numberFormats = f.value, Xn(D, e, t);
	}
	function U(e, t) {
		f.value[e] = P(f.value[e] || {}, t), D.numberFormats = f.value, Xn(D, e, t);
	}
	qr++, t && A && (x(t.locale, (e) => {
		s && (c.value = e, D.locale = e, Rn(D, c.value, l.value));
	}), x(t.fallbackLocale, (e) => {
		s && (l.value = e, D.fallbackLocale = e, Rn(D, c.value, l.value));
	}));
	let W = {
		id: qr,
		locale: ee,
		fallbackLocale: te,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (c.value = t.locale.value, l.value = t.fallbackLocale.value, Rn(D, c.value, l.value));
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: ne,
		get modifiers() {
			return T;
		},
		get pluralRules() {
			return E || {};
		},
		get isGlobal() {
			return i;
		},
		get missingWarn() {
			return p;
		},
		set missingWarn(e) {
			p = e, D.missingWarn = p;
		},
		get fallbackWarn() {
			return m;
		},
		set fallbackWarn(e) {
			m = e, D.fallbackWarn = m;
		},
		get fallbackRoot() {
			return h;
		},
		set fallbackRoot(e) {
			h = e;
		},
		get fallbackFormat() {
			return g;
		},
		set fallbackFormat(e) {
			g = e, D.fallbackFormat = g;
		},
		get warnHtmlMessage() {
			return C;
		},
		set warnHtmlMessage(e) {
			C = e, D.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return w;
		},
		set escapeParameter(e) {
			w = e, D.escapeParameter = e;
		},
		t: le,
		getLocaleMessage: Se,
		setLocaleMessage: Ce,
		mergeLocaleMessage: we,
		getPostTranslationHandler: ie,
		setPostTranslationHandler: ae,
		getMissingHandler: oe,
		setMissingHandler: M,
		[Nr]: ve
	};
	return W.datetimeFormats = re, W.numberFormats = j, W.rt = de, W.te = ye, W.tm = xe, W.d = fe, W.n = F, W.getDateTimeFormat = Te, W.setDateTimeFormat = Ee, W.mergeDateTimeFormat = De, W.getNumberFormat = ke, W.setNumberFormat = Ae, W.mergeNumberFormat = U, W[Pr] = n, W[Or] = he, W[kr] = _e, W[Ar] = ge, process.env.NODE_ENV !== "production" && (W[jr] = (e) => {
		D.__v_emitter = e;
	}, W[Mr] = () => {
		D.__v_emitter = void 0;
	}), W;
}
var Zr = "vue-i18n: composer properties", Qr = {
	"vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
	"vue-i18n-resource-inspector": "Vue I18n DevTools",
	"vue-i18n-timeline": "Vue I18n"
}, $r = { "vue-i18n-resource-inspector": "Search for scopes ..." }, ei = { "vue-i18n-timeline": 16764185 }, ti;
async function ni(e, t) {
	return new Promise((n, r) => {
		try {
			Tr({
				id: "vue-devtools-plugin-vue-i18n",
				label: Qr["vue-devtools-plugin-vue-i18n"],
				packageName: "vue-i18n",
				homepage: "https://vue-i18n.intlify.dev",
				logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
				componentStateTypes: [Zr],
				app: e
			}, (r) => {
				ti = r, r.on.visitComponentTree(({ componentInstance: e, treeNode: n }) => {
					ii(e, n, t);
				}), r.on.inspectComponent(({ componentInstance: e, instanceData: n }) => {
					e.__VUE_I18N__ && n && (t.mode === "legacy" ? e.__VUE_I18N__ !== t.global.__composer && ai(n, e.__VUE_I18N__) : ai(n, e.__VUE_I18N__));
				}), r.addInspector({
					id: "vue-i18n-resource-inspector",
					label: Qr["vue-i18n-resource-inspector"],
					icon: "language",
					treeFilterPlaceholder: $r["vue-i18n-resource-inspector"]
				}), r.on.getInspectorTree((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && di(n, t);
				});
				let i = /* @__PURE__ */ new Map();
				r.on.getInspectorState(async (n) => {
					if (n.app === e && n.inspectorId === "vue-i18n-resource-inspector") if (r.unhighlightElement(), mi(n, t), n.nodeId === "global") {
						if (!i.has(n.app)) {
							let [e] = await r.getComponentInstances(n.app);
							i.set(n.app, e);
						}
						r.highlightElement(i.get(n.app));
					} else {
						let e = fi(n.nodeId, t);
						e && r.highlightElement(e);
					}
				}), r.on.editInspectorState((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && _i(n, t);
				}), r.addTimelineLayer({
					id: "vue-i18n-timeline",
					label: Qr["vue-i18n-timeline"],
					color: ei["vue-i18n-timeline"]
				}), n(!0);
			});
		} catch (e) {
			console.error(e), r(!1);
		}
	});
}
function ri(e) {
	return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function ii(e, t, n) {
	let r = n.mode === "composition" ? n.global : n.global.__composer;
	if (e && e.__VUE_I18N__ && e.__VUE_I18N__ !== r) {
		let n = {
			label: `i18n (${ri(e)} Scope)`,
			textColor: 0,
			backgroundColor: 16764185
		};
		t.tags.push(n);
	}
}
function ai(e, t) {
	let n = Zr;
	e.state.push({
		type: n,
		key: "locale",
		editable: !0,
		value: t.locale.value
	}), e.state.push({
		type: n,
		key: "availableLocales",
		editable: !1,
		value: t.availableLocales
	}), e.state.push({
		type: n,
		key: "fallbackLocale",
		editable: !0,
		value: t.fallbackLocale.value
	}), e.state.push({
		type: n,
		key: "inheritLocale",
		editable: !0,
		value: t.inheritLocale
	}), e.state.push({
		type: n,
		key: "messages",
		editable: !1,
		value: oi(t.messages.value)
	}), e.state.push({
		type: n,
		key: "datetimeFormats",
		editable: !1,
		value: t.datetimeFormats.value
	}), e.state.push({
		type: n,
		key: "numberFormats",
		editable: !1,
		value: t.numberFormats.value
	});
}
function oi(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		let r = e[n];
		R(r) && "source" in r ? t[n] = ui(r) : q(r) && r.loc && r.loc.source ? t[n] = r.loc.source : V(r) ? t[n] = oi(r) : t[n] = r;
	}), t;
}
var si = {
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"&": "&amp;"
};
function ci(e) {
	return e.replace(/[<>"&]/g, li);
}
function li(e) {
	return si[e] || e;
}
function ui(e) {
	return { _custom: {
		type: "function",
		display: `<span>ƒ</span> ${e.source ? `("${ci(e.source)}")` : "(?)"}`
	} };
}
function di(e, t) {
	e.rootNodes.push({
		id: "global",
		label: "Global Scope"
	});
	let n = t.mode === "composition" ? t.global : t.global.__composer;
	for (let [r, i] of t.__instances) {
		let a = t.mode === "composition" ? i : i.__composer;
		n !== a && e.rootNodes.push({
			id: a.id.toString(),
			label: `${ri(r)} Scope`
		});
	}
}
function fi(e, t) {
	let n = null;
	if (e !== "global") {
		for (let [r, i] of t.__instances.entries()) if (i.id.toString() === e) {
			n = r;
			break;
		}
	}
	return n;
}
function pi(e, t) {
	if (e === "global") return t.mode === "composition" ? t.global : t.global.__composer;
	{
		let n = Array.from(t.__instances.values()).find((t) => t.id.toString() === e);
		return n ? t.mode === "composition" ? n : n.__composer : null;
	}
}
function mi(e, t) {
	let n = pi(e.nodeId, t);
	return n && (e.state = hi(n)), null;
}
function hi(e) {
	let t = {}, n = "Locale related info";
	t[n] = [
		{
			type: n,
			key: "locale",
			editable: !0,
			value: e.locale.value
		},
		{
			type: n,
			key: "fallbackLocale",
			editable: !0,
			value: e.fallbackLocale.value
		},
		{
			type: n,
			key: "availableLocales",
			editable: !1,
			value: e.availableLocales
		},
		{
			type: n,
			key: "inheritLocale",
			editable: !0,
			value: e.inheritLocale
		}
	];
	let r = "Locale messages info";
	t[r] = [{
		type: r,
		key: "messages",
		editable: !1,
		value: oi(e.messages.value)
	}];
	{
		let n = "Datetime formats info";
		t[n] = [{
			type: n,
			key: "datetimeFormats",
			editable: !1,
			value: e.datetimeFormats.value
		}];
		let r = "Datetime formats info";
		t[r] = [{
			type: r,
			key: "numberFormats",
			editable: !1,
			value: e.numberFormats.value
		}];
	}
	return t;
}
function gi(e, t) {
	if (ti) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), ti.addTimelineEvent({
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
function _i(e, t) {
	let n = pi(e.nodeId, t);
	if (n) {
		let [t] = e.path;
		t === "locale" && z(e.state.value) ? n.locale.value = e.state.value : t === "fallbackLocale" && (z(e.state.value) || L(e.state.value) || V(e.state.value)) ? n.fallbackLocale.value = e.state.value : t === "inheritLocale" && B(e.state.value) && (n.inheritLocale = e.state.value);
	}
}
var vi = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function yi({ slots: e }, n) {
	return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((e, n) => [...e, ...n.type === t ? n.children : [n]], []) : n.reduce((t, n) => {
		let r = e[n];
		return r && (t[n] = r()), t;
	}, F());
}
function bi() {
	return t;
}
var xi = o({
	name: "i18n-t",
	props: P({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => N(e) || !isNaN(e)
		}
	}, vi),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || Mi({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = Object.keys(n).filter((e) => e[0] !== "_"), o = F();
			e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = z(e.plural) ? +e.plural : e.plural);
			let s = yi(t, a), c = i[Or](e.keypath, s, o), l = P(F(), r);
			return u(z(e.tag) || V(e.tag) ? e.tag : bi(), l, c);
		};
	}
});
function Si(e) {
	return L(e) && !z(e[0]);
}
function Ci(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = { part: !0 }, o = F();
		e.locale && (t.locale = e.locale), z(e.format) ? t.key = e.format : V(e.format) && (z(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format).reduce((t, r) => n.includes(r) ? P(F(), t, { [r]: e.format[r] }) : t, F()));
		let s = r(e.value, t, o), c = [t.key];
		L(s) ? c = s.map((e, t) => {
			let n = i[e.type], r = n ? n({
				[e.type]: e.value,
				index: t,
				parts: s
			}) : [e.value];
			return Si(r) && (r[0].key = `${e.type}-${t}`), r;
		}) : z(s) && (c = [s]);
		let l = P(F(), a);
		return u(z(e.tag) || V(e.tag) ? e.tag : bi(), l, c);
	};
}
var wi = o({
	name: "i18n-n",
	props: P({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, vi),
	setup(e, t) {
		let n = e.i18n || Mi({
			useScope: e.scope,
			__useComponent: !0
		});
		return Ci(e, t, Jn, (...e) => n[Ar](...e));
	}
});
function Ti(e, t) {
	let n = e;
	if (e.mode === "composition") return n.__getInstance(t) || e.global;
	{
		let r = n.__getInstance(t);
		return r == null ? e.global.__composer : r.__composer;
	}
}
function Ei(e) {
	let t = (t) => {
		process.env.NODE_ENV !== "production" && re(Lr($.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE));
		let { instance: n, value: r } = t;
		if (!n || !n.$) throw Q(Z.UNEXPECTED_ERROR);
		let i = Ti(e, n.$), a = Di(r);
		return [Reflect.apply(i.t, i, [...Oi(a)]), i];
	};
	return {
		created: (e, n) => {
			let [r, i] = t(n);
			A && (e.__i18nWatcher = x(i.locale, () => {
				n.instance && n.instance.$forceUpdate();
			})), e.__composer = i, e.textContent = r;
		},
		unmounted: (e) => {
			A && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer);
		},
		beforeUpdate: (e, { value: t }) => {
			if (e.__composer) {
				let n = e.__composer, r = Di(t);
				e.textContent = Reflect.apply(n.t, n, [...Oi(r)]);
			}
		},
		getSSRProps: (e) => {
			let [n] = t(e);
			return { textContent: n };
		}
	};
}
function Di(e) {
	if (z(e)) return { path: e };
	if (H(e)) {
		if (!("path" in e)) throw Q(Z.REQUIRED_VALUE, "path");
		return e;
	} else throw Q(Z.INVALID_VALUE);
}
function Oi(e) {
	let { path: t, locale: n, args: r, choice: i, plural: a } = e, o = {}, s = r || {};
	return z(n) && (o.locale = n), N(i) && (o.plural = i), N(a) && (o.plural = a), [
		t,
		s,
		o
	];
}
function ki(e, t, ...n) {
	let r = H(n[0]) ? n[0] : {};
	(!B(r.globalInstall) || r.globalInstall) && ([xi.name, "I18nT"].forEach((t) => e.component(t, xi)), [wi.name, "I18nN"].forEach((t) => e.component(t, wi)), [Ui.name, "I18nD"].forEach((t) => e.component(t, Ui))), e.directive("t", Ei(t));
}
var Ai = M("global-vue-i18n");
function ji(e = {}) {
	process.env.NODE_ENV;
	let t = B(e.globalInjection) ? e.globalInjection : !0, n = /* @__PURE__ */ new Map(), [r, i] = Ni(e, !1), a = M(process.env.NODE_ENV === "production" ? "" : "vue-i18n");
	function o(e) {
		return n.get(e) || null;
	}
	function s(e, t) {
		n.set(e, t);
	}
	function c(e) {
		n.delete(e);
	}
	let l = {
		get mode() {
			return "composition";
		},
		async install(e, ...n) {
			if (process.env.NODE_ENV !== "production" && (e.__VUE_I18N__ = l), e.__VUE_I18N_SYMBOL__ = a, e.provide(e.__VUE_I18N_SYMBOL__, l), H(n[0])) {
				let e = n[0];
				l.__composerExtend = e.__composerExtend, l.__vueI18nExtend = e.__vueI18nExtend;
			}
			let r = null;
			t && (r = Hi(e, l.global)), ki(e, l, ...n);
			let o = e.unmount;
			if (e.unmount = () => {
				r && r(), l.dispose(), o();
			}, process.env.NODE_ENV !== "production") {
				if (!await ni(e, l)) throw Q(Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
				let t = Ee();
				{
					let e = i;
					e[jr] && e[jr](t);
				}
				t.on("*", gi);
			}
		},
		get global() {
			return i;
		},
		dispose() {
			r.stop();
		},
		__instances: n,
		__getInstance: o,
		__setInstance: s,
		__deleteInstance: c
	};
	return l;
}
function Mi(e = {}) {
	let t = Ur();
	if (t == null) throw Q(Z.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Q(Z.NOT_INSTALLED);
	let n = Pi(t), r = Ii(n), i = Br(t), a = Fi(e, i);
	if (a === "global") return Vr(r, e, i), r;
	if (a === "parent") {
		let i = Li(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && k(Lr($.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw Q(Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = P({}, e);
		a.__root = Li(n, t) || r;
		let o = Xr(a);
		i.__composerExtend && (o[Fr] = i.__composerExtend(o));
		let s = null;
		if (process.env.NODE_ENV !== "production") {
			s = Ee();
			let e = o;
			e[jr] && e[jr](s), s.on("*", gi);
		}
		return l() && m(() => {
			if (process.env.NODE_ENV !== "production") {
				s && s.off("*", gi);
				let e = o;
				e[Mr] && e[Mr]();
			}
			let e = o[Fr];
			e && (e(), delete o[Fr]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = P({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = Xr(n), o.__composerExtend && (s[Fr] = o.__composerExtend(s)), zi(o, t, s), o.__setInstance(t, s);
	} else process.env.NODE_ENV !== "production" && a === "local" && k(Lr($.DUPLICATE_USE_I18N_CALLING));
	return s;
}
function Ni(e, t) {
	let n = s(), r = n.run(() => Xr(e));
	if (r == null) throw Q(Z.UNEXPECTED_ERROR);
	return [n, r];
}
function Pi(e) {
	let t = d(e.isCE ? Ai : e.appContext.app.__VUE_I18N_SYMBOL__);
	if (!t) throw Q(e.isCE ? Z.NOT_INSTALLED_WITH_PROVIDE : Z.UNEXPECTED_ERROR);
	return t;
}
function Fi(e, t) {
	return de(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Ii(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function Li(e, t, n = !1) {
	let r = null, i = t.root, a = Ri(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition" && (r = t.__getInstance(a)), r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Ri(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function zi(e, t, n) {
	let r = null;
	p(() => {
		if (process.env.NODE_ENV !== "production") {
			t.__VUE_I18N__ = n, r = Ee();
			let e = n;
			e[jr] && e[jr](r), r.on("*", gi);
		}
	}, t), h(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && (r && r.off("*", gi), i[Mr] && i[Mr](), delete t.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[Fr];
		a && (a(), delete i[Fr]);
	}, t);
}
var Bi = [
	"locale",
	"fallbackLocale",
	"availableLocales"
], Vi = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function Hi(e, t) {
	let n = Object.create(null);
	return Bi.forEach((e) => {
		let r = Object.getOwnPropertyDescriptor(t, e);
		if (!r) throw Q(Z.UNEXPECTED_ERROR);
		let i = f(r.value) ? {
			get() {
				return r.value.value;
			},
			set(e) {
				r.value.value = e;
			}
		} : { get() {
			return r.get && r.get();
		} };
		Object.defineProperty(n, e, i);
	}), e.config.globalProperties.$i18n = n, Vi.forEach((n) => {
		let r = Object.getOwnPropertyDescriptor(t, n);
		if (!r || !r.value) throw Q(Z.UNEXPECTED_ERROR);
		Object.defineProperty(e.config.globalProperties, `$${n}`, r);
	}), () => {
		delete e.config.globalProperties.$i18n, Vi.forEach((t) => {
			delete e.config.globalProperties[`$${t}`];
		});
	};
}
var Ui = o({
	name: "i18n-d",
	props: P({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, vi),
	setup(e, t) {
		let n = e.i18n || Mi({
			useScope: e.scope,
			__useComponent: !0
		});
		return Ci(e, t, Wn, (...e) => n[kr](...e));
	}
});
if (xn(Vt), Cn(pn), Tn($t), process.env.NODE_ENV !== "production") {
	let e = me();
	e.__INTLIFY__ = !0, Ut(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
var Wi = o({
	__name: "MockBanner",
	setup(e, { expose: t }) {
		t();
		let { t: n } = Mi(), r = { t: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), Gi = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ki = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function qi(e, t, n, r, a, o) {
	return g(), i("div", Ki, b(r.t("mockBanner")), 1);
}
var Ji = Gi(Wi, [["render", qi], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-i18n-app/src/components/MockBanner.vue"]]), Yi = ji({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en",
	messages: {
		en: {
			shared: {
				appName: {
					type: 0,
					start: 0,
					end: 10,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 11,
							offset: 10
						},
						source: "i18n Bench"
					},
					body: {
						type: 2,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							}
						}],
						static: "i18n Bench"
					}
				},
				siteName: {
					type: 0,
					start: 0,
					end: 14,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 15,
							offset: 14
						},
						source: "i18n Benchmark"
					},
					body: {
						type: 2,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							}
						}],
						static: "i18n Benchmark"
					}
				},
				contactEmail: {
					type: 0,
					start: 0,
					end: 24,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 25,
							offset: 24
						},
						source: "contact{'@'}intlayer.org"
					},
					body: {
						type: 2,
						start: 0,
						end: 24,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 25,
								offset: 24
							}
						},
						items: [
							{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							},
							{
								type: 9,
								start: 7,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 8,
										offset: 7
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							},
							{
								type: 3,
								start: 12,
								end: 24,
								loc: {
									start: {
										line: 1,
										column: 13,
										offset: 12
									},
									end: {
										line: 1,
										column: 25,
										offset: 24
									}
								}
							}
						],
						static: "contact@intlayer.org"
					}
				},
				goToGithub: {
					type: 0,
					start: 0,
					end: 12,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 13,
							offset: 12
						},
						source: "Go to GitHub"
					},
					body: {
						type: 2,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							}
						}],
						static: "Go to GitHub"
					}
				}
			},
			header: {
				home: {
					type: 0,
					start: 0,
					end: 4,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 5,
							offset: 4
						},
						source: "Home"
					},
					body: {
						type: 2,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							}
						}],
						static: "Home"
					}
				},
				methodology: {
					type: 0,
					start: 0,
					end: 11,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 12,
							offset: 11
						},
						source: "Methodology"
					},
					body: {
						type: 2,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							}
						}],
						static: "Methodology"
					}
				},
				mockPages: {
					type: 0,
					start: 0,
					end: 10,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 11,
							offset: 10
						},
						source: "Mock Pages"
					},
					body: {
						type: 2,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							}
						}],
						static: "Mock Pages"
					}
				},
				products: {
					type: 0,
					start: 0,
					end: 8,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 9,
							offset: 8
						},
						source: "Products"
					},
					body: {
						type: 2,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							}
						}],
						static: "Products"
					}
				},
				pricing: {
					type: 0,
					start: 0,
					end: 7,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 8,
							offset: 7
						},
						source: "Pricing"
					},
					body: {
						type: 2,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							}
						}],
						static: "Pricing"
					}
				},
				team: {
					type: 0,
					start: 0,
					end: 4,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 5,
							offset: 4
						},
						source: "Team"
					},
					body: {
						type: 2,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							}
						}],
						static: "Team"
					}
				},
				blog: {
					type: 0,
					start: 0,
					end: 4,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 5,
							offset: 4
						},
						source: "Blog"
					},
					body: {
						type: 2,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							}
						}],
						static: "Blog"
					}
				},
				careers: {
					type: 0,
					start: 0,
					end: 7,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 8,
							offset: 7
						},
						source: "Careers"
					},
					body: {
						type: 2,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							}
						}],
						static: "Careers"
					}
				},
				faq: {
					type: 0,
					start: 0,
					end: 3,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 4,
							offset: 3
						},
						source: "FAQ"
					},
					body: {
						type: 2,
						start: 0,
						end: 3,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 4,
								offset: 3
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 3,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 4,
									offset: 3
								}
							}
						}],
						static: "FAQ"
					}
				},
				contact: {
					type: 0,
					start: 0,
					end: 7,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 8,
							offset: 7
						},
						source: "Contact"
					},
					body: {
						type: 2,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							}
						}],
						static: "Contact"
					}
				},
				settings: {
					type: 0,
					start: 0,
					end: 8,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 9,
							offset: 8
						},
						source: "Settings"
					},
					body: {
						type: 2,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							}
						}],
						static: "Settings"
					}
				}
			},
			footer: {
				title: {
					type: 0,
					start: 0,
					end: 14,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 15,
							offset: 14
						},
						source: "i18n Benchmark"
					},
					body: {
						type: 2,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							}
						}],
						static: "i18n Benchmark"
					}
				},
				description: {
					type: 0,
					start: 0,
					end: 151,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 152,
							offset: 151
						},
						source: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					},
					body: {
						type: 2,
						start: 0,
						end: 151,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 152,
								offset: 151
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 151,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 152,
									offset: 151
								}
							}
						}],
						static: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					}
				},
				resources: {
					type: 0,
					start: 0,
					end: 9,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 10,
							offset: 9
						},
						source: "Resources"
					},
					body: {
						type: 2,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							}
						}],
						static: "Resources"
					}
				},
				github: {
					type: 0,
					start: 0,
					end: 6,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 7,
							offset: 6
						},
						source: "GitHub"
					},
					body: {
						type: 2,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							}
						}],
						static: "GitHub"
					}
				},
				methodology: {
					type: 0,
					start: 0,
					end: 11,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 12,
							offset: 11
						},
						source: "Methodology"
					},
					body: {
						type: 2,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							}
						}],
						static: "Methodology"
					}
				},
				contributing: {
					type: 0,
					start: 0,
					end: 12,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 13,
							offset: 12
						},
						source: "Contributing"
					},
					body: {
						type: 2,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							}
						}],
						static: "Contributing"
					}
				},
				contact: {
					type: 0,
					start: 0,
					end: 7,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 8,
							offset: 7
						},
						source: "Contact"
					},
					body: {
						type: 2,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							}
						}],
						static: "Contact"
					}
				},
				builtWith: {
					type: 0,
					start: 0,
					end: 82,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 83,
							offset: 82
						},
						source: "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
					},
					body: {
						type: 2,
						start: 0,
						end: 82,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 83,
								offset: 82
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 82,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 83,
									offset: 82
								}
							}
						}],
						static: "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
					}
				}
			},
			themeToggle: {
				auto: {
					type: 0,
					start: 0,
					end: 11,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 12,
							offset: 11
						},
						source: "Theme: Auto"
					},
					body: {
						type: 2,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							}
						}],
						static: "Theme: Auto"
					}
				},
				dark: {
					type: 0,
					start: 0,
					end: 11,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 12,
							offset: 11
						},
						source: "Theme: Dark"
					},
					body: {
						type: 2,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							}
						}],
						static: "Theme: Dark"
					}
				},
				light: {
					type: 0,
					start: 0,
					end: 12,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 13,
							offset: 12
						},
						source: "Theme: Light"
					},
					body: {
						type: 2,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							}
						}],
						static: "Theme: Light"
					}
				},
				labelAuto: {
					type: 0,
					start: 0,
					end: 57,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 58,
							offset: 57
						},
						source: "Theme mode: auto (system). Click to switch to light mode."
					},
					body: {
						type: 2,
						start: 0,
						end: 57,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 58,
								offset: 57
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 57,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 58,
									offset: 57
								}
							}
						}],
						static: "Theme mode: auto (system). Click to switch to light mode."
					}
				},
				labelOther: {
					type: 0,
					start: 0,
					end: 41,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 42,
							offset: 41
						},
						source: "Theme mode: {mode}. Click to switch mode."
					},
					body: {
						type: 2,
						start: 0,
						end: 41,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 42,
								offset: 41
							}
						},
						items: [
							{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								},
								value: "Theme mode: "
							},
							{
								type: 4,
								start: 12,
								end: 18,
								loc: {
									start: {
										line: 1,
										column: 13,
										offset: 12
									},
									end: {
										line: 1,
										column: 19,
										offset: 18
									}
								},
								key: "mode"
							},
							{
								type: 3,
								start: 18,
								end: 41,
								loc: {
									start: {
										line: 1,
										column: 19,
										offset: 18
									},
									end: {
										line: 1,
										column: 42,
										offset: 41
									}
								},
								value: ". Click to switch mode."
							}
						]
					}
				}
			},
			mockBanner: {
				type: 0,
				start: 0,
				end: 114,
				loc: {
					start: {
						line: 1,
						column: 1,
						offset: 0
					},
					end: {
						line: 1,
						column: 115,
						offset: 114
					},
					source: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
				},
				body: {
					type: 2,
					start: 0,
					end: 114,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 115,
							offset: 114
						}
					},
					items: [{
						type: 3,
						start: 0,
						end: 114,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 115,
								offset: 114
							}
						}
					}],
					static: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
				}
			},
			home: {
				hero: {
					title: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "i18n Benchmark"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "i18n Benchmark"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 157,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 158,
								offset: 157
							},
							source: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
						},
						body: {
							type: 2,
							start: 0,
							end: 157,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 158,
									offset: 157
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 157,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 158,
										offset: 157
									}
								}
							}],
							static: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
						}
					},
					viewResults: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "View Results"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "View Results"
						}
					},
					methodology: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Methodology"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Methodology"
						}
					}
				},
				whyItMatters: {
					title: {
						type: 0,
						start: 0,
						end: 24,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 25,
								offset: 24
							},
							source: "Why These Metrics Matter"
						},
						body: {
							type: 2,
							start: 0,
							end: 24,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 25,
									offset: 24
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 24,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 25,
										offset: 24
									}
								}
							}],
							static: "Why These Metrics Matter"
						}
					},
					bundleSizeTitle: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Bundle Size"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Bundle Size"
						}
					},
					bundleSizeDesc: {
						type: 0,
						start: 0,
						end: 314,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 315,
								offset: 314
							},
							source: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
						},
						body: {
							type: 2,
							start: 0,
							end: 314,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 315,
									offset: 314
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 314,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 315,
										offset: 314
									}
								}
							}],
							static: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
						}
					},
					renderingTitle: {
						type: 0,
						start: 0,
						end: 21,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 22,
								offset: 21
							},
							source: "Rendering & Hydration"
						},
						body: {
							type: 2,
							start: 0,
							end: 21,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 22,
									offset: 21
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 21,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 22,
										offset: 21
									}
								}
							}],
							static: "Rendering & Hydration"
						}
					},
					renderingDesc: {
						type: 0,
						start: 0,
						end: 336,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 337,
								offset: 336
							},
							source: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
						},
						body: {
							type: 2,
							start: 0,
							end: 336,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 337,
									offset: 336
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 336,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 337,
										offset: 336
									}
								}
							}],
							static: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
						}
					},
					dynamicLoadingTitle: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Dynamic Loading"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Dynamic Loading"
						}
					},
					dynamicLoadingDesc: {
						type: 0,
						start: 0,
						end: 339,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 340,
								offset: 339
							},
							source: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
						},
						body: {
							type: 2,
							start: 0,
							end: 339,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 340,
									offset: 339
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 339,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 340,
										offset: 339
									}
								}
							}],
							static: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
						}
					}
				},
				understandingImpact: {
					title: {
						type: 0,
						start: 0,
						end: 24,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 25,
								offset: 24
							},
							source: "Understanding the Impact"
						},
						body: {
							type: 2,
							start: 0,
							end: 24,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 25,
									offset: 24
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 24,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 25,
										offset: 24
									}
								}
							}],
							static: "Understanding the Impact"
						}
					},
					singleJsonTitle: {
						type: 0,
						start: 0,
						end: 44,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 45,
								offset: 44
							},
							source: "Why a single large JSON can hurt performance"
						},
						body: {
							type: 2,
							start: 0,
							end: 44,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 45,
									offset: 44
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 44,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 45,
										offset: 44
									}
								}
							}],
							static: "Why a single large JSON can hurt performance"
						}
					},
					singleJsonIntro: {
						type: 0,
						start: 0,
						end: 236,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 237,
								offset: 236
							},
							source: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
						},
						body: {
							type: 2,
							start: 0,
							end: 236,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 237,
									offset: 236
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 236,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 237,
										offset: 236
									}
								}
							}],
							static: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
						}
					},
					singleJsonBullet1: {
						type: 0,
						start: 0,
						end: 70,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 71,
								offset: 70
							},
							source: "The JSON must be parsed on every page load — blocking the main thread."
						},
						body: {
							type: 2,
							start: 0,
							end: 70,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 71,
									offset: 70
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 70,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 71,
										offset: 70
									}
								}
							}],
							static: "The JSON must be parsed on every page load — blocking the main thread."
						}
					},
					singleJsonBullet2: {
						type: 0,
						start: 0,
						end: 161,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 162,
								offset: 161
							},
							source: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change."
						},
						body: {
							type: 2,
							start: 0,
							end: 161,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 162,
									offset: 161
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 161,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 162,
										offset: 161
									}
								}
							}],
							static: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change."
						}
					},
					singleJsonBullet3: {
						type: 0,
						start: 0,
						end: 153,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 154,
								offset: 153
							},
							source: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
						},
						body: {
							type: 2,
							start: 0,
							end: 153,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 154,
									offset: 153
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 153,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 154,
										offset: 153
									}
								}
							}],
							static: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
						}
					},
					tradeOffsTitle: {
						type: 0,
						start: 0,
						end: 33,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 34,
								offset: 33
							},
							source: "The trade-offs of dynamic loading"
						},
						body: {
							type: 2,
							start: 0,
							end: 33,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 34,
									offset: 33
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 33,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 34,
										offset: 33
									}
								}
							}],
							static: "The trade-offs of dynamic loading"
						}
					},
					tradeOffsIntro: {
						type: 0,
						start: 0,
						end: 140,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 141,
								offset: 140
							},
							source: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
						},
						body: {
							type: 2,
							start: 0,
							end: 140,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 141,
									offset: 140
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 140,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 141,
										offset: 140
									}
								}
							}],
							static: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
						}
					},
					waterfallLabel: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "Waterfall requests:"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 19,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 20,
										offset: 19
									}
								}
							}],
							static: "Waterfall requests:"
						}
					},
					waterfallDesc: {
						type: 0,
						start: 0,
						end: 103,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 104,
								offset: 103
							},
							source: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
						},
						body: {
							type: 2,
							start: 0,
							end: 103,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 104,
									offset: 103
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 103,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 104,
										offset: 103
									}
								}
							}],
							static: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
						}
					},
					foucLabel: {
						type: 0,
						start: 0,
						end: 37,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 38,
								offset: 37
							},
							source: "Flash of untranslated content (FOUC):"
						},
						body: {
							type: 2,
							start: 0,
							end: 37,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 38,
									offset: 37
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 37,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 38,
										offset: 37
									}
								}
							}],
							static: "Flash of untranslated content (FOUC):"
						}
					},
					foucDesc: {
						type: 0,
						start: 0,
						end: 87,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 88,
								offset: 87
							},
							source: "users may briefly see translation keys or a fallback language before the chunk arrives."
						},
						body: {
							type: 2,
							start: 0,
							end: 87,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 88,
									offset: 87
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 87,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 88,
										offset: 87
									}
								}
							}],
							static: "users may briefly see translation keys or a fallback language before the chunk arrives."
						}
					},
					cacheLabel: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "Cache invalidation:"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 19,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 20,
										offset: 19
									}
								}
							}],
							static: "Cache invalidation:"
						}
					},
					cacheDesc: {
						type: 0,
						start: 0,
						end: 130,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 131,
								offset: 130
							},
							source: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
						},
						body: {
							type: 2,
							start: 0,
							end: 130,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 131,
									offset: 130
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 130,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 131,
										offset: 130
									}
								}
							}],
							static: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
						}
					},
					measuresTitle: {
						type: 0,
						start: 0,
						end: 28,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 29,
								offset: 28
							},
							source: "What this benchmark measures"
						},
						body: {
							type: 2,
							start: 0,
							end: 28,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 29,
									offset: 28
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 28,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 29,
										offset: 28
									}
								}
							}],
							static: "What this benchmark measures"
						}
					},
					measuresDesc: {
						type: 0,
						start: 0,
						end: 388,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 389,
								offset: 388
							},
							source: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
						},
						body: {
							type: 2,
							start: 0,
							end: 388,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 389,
									offset: 388
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 388,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 389,
										offset: 388
									}
								}
							}],
							static: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
						}
					}
				},
				resultsTable: {
					title: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Sample Results"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Sample Results"
						}
					},
					library: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "Library"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "Library"
						}
					},
					bundleSize: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Bundle Size"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Bundle Size"
						}
					},
					lookupTime: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Lookup Time"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Lookup Time"
						}
					},
					lazyLoading: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Lazy Loading"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Lazy Loading"
						}
					},
					yes: {
						type: 0,
						start: 0,
						end: 3,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 4,
								offset: 3
							},
							source: "Yes"
						},
						body: {
							type: 2,
							start: 0,
							end: 3,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 4,
									offset: 3
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 3,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 4,
										offset: 3
									}
								}
							}],
							static: "Yes"
						}
					},
					manual: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "Manual"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "Manual"
						}
					},
					builtIn: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Built-in"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Built-in"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "About This Benchmark"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "About This Benchmark"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 224,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 225,
								offset: 224
							},
							source: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
						},
						body: {
							type: 2,
							start: 0,
							end: 224,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 225,
									offset: 224
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 224,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 225,
										offset: 224
									}
								}
							}],
							static: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
						}
					}
				},
				grid: {
					whyExistsTitle: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Why This Exists"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Why This Exists"
						}
					},
					whyExistsDesc: {
						type: 0,
						start: 0,
						end: 401,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 402,
								offset: 401
							},
							source: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
						},
						body: {
							type: 2,
							start: 0,
							end: 401,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 402,
									offset: 401
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 401,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 402,
										offset: 401
									}
								}
							}],
							static: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
						}
					},
					methodologyTitle: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Methodology"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Methodology"
						}
					},
					methodologyDesc: {
						type: 0,
						start: 0,
						end: 301,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 302,
								offset: 301
							},
							source: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
						},
						body: {
							type: 2,
							start: 0,
							end: 301,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 302,
									offset: 301
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 301,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 302,
										offset: 301
									}
								}
							}],
							static: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
						}
					}
				},
				whatWeMeasure: {
					title: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "What We Measure"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "What We Measure"
						}
					},
					bundleSizeImpact: {
						type: 0,
						start: 0,
						end: 18,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 19,
								offset: 18
							},
							source: "Bundle size impact"
						},
						body: {
							type: 2,
							start: 0,
							end: 18,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 19,
									offset: 18
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 18,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 19,
										offset: 18
									}
								}
							}],
							static: "Bundle size impact"
						}
					},
					bundleSizeImpactDesc: {
						type: 0,
						start: 0,
						end: 161,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 162,
								offset: 161
							},
							source: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
						},
						body: {
							type: 2,
							start: 0,
							end: 161,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 162,
									offset: 161
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 161,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 162,
										offset: 161
									}
								}
							}],
							static: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
						}
					},
					renderingOverhead: {
						type: 0,
						start: 0,
						end: 18,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 19,
								offset: 18
							},
							source: "Rendering overhead"
						},
						body: {
							type: 2,
							start: 0,
							end: 18,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 19,
									offset: 18
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 18,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 19,
										offset: 18
									}
								}
							}],
							static: "Rendering overhead"
						}
					},
					renderingOverheadDesc: {
						type: 0,
						start: 0,
						end: 186,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 187,
								offset: 186
							},
							source: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
						},
						body: {
							type: 2,
							start: 0,
							end: 186,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 187,
									offset: 186
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 186,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 187,
										offset: 186
									}
								}
							}],
							static: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
						}
					},
					hydrationCost: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Hydration cost"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Hydration cost"
						}
					},
					hydrationCostDesc: {
						type: 0,
						start: 0,
						end: 165,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 166,
								offset: 165
							},
							source: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
						},
						body: {
							type: 2,
							start: 0,
							end: 165,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 166,
									offset: 165
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 165,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 166,
										offset: 165
									}
								}
							}],
							static: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
						}
					},
					lazyLoading: {
						type: 0,
						start: 0,
						end: 26,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 27,
								offset: 26
							},
							source: "Lazy loading effectiveness"
						},
						body: {
							type: 2,
							start: 0,
							end: 26,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 27,
									offset: 26
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 26,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 27,
										offset: 26
									}
								}
							}],
							static: "Lazy loading effectiveness"
						}
					},
					lazyLoadingDesc: {
						type: 0,
						start: 0,
						end: 167,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 168,
								offset: 167
							},
							source: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
						},
						body: {
							type: 2,
							start: 0,
							end: 167,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 168,
									offset: 167
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 167,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 168,
										offset: 167
									}
								}
							}],
							static: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
						}
					},
					localeSwitch: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "Locale switch speed"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 19,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 20,
										offset: 19
									}
								}
							}],
							static: "Locale switch speed"
						}
					},
					localeSwitchDesc: {
						type: 0,
						start: 0,
						end: 153,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 154,
								offset: 153
							},
							source: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
						},
						body: {
							type: 2,
							start: 0,
							end: 153,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 154,
									offset: 153
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 153,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 154,
										offset: 153
									}
								}
							}],
							static: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							},
							source: "Blog"
						},
						body: {
							type: 2,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 4,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 5,
										offset: 4
									}
								}
							}],
							static: "Blog"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 58,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 59,
								offset: 58
							},
							source: "Insights, tutorials, and analysis from the i18n community."
						},
						body: {
							type: 2,
							start: 0,
							end: 58,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 59,
									offset: 58
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 58,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 59,
										offset: 58
									}
								}
							}],
							static: "Insights, tutorials, and analysis from the i18n community."
						}
					}
				},
				list: {
					readMore: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Read More →"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Read More →"
						}
					},
					post1Title: {
						type: 0,
						start: 0,
						end: 45,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 46,
								offset: 45
							},
							source: "Comparing i18n Libraries in 2026: A Deep Dive"
						},
						body: {
							type: 2,
							start: 0,
							end: 45,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 46,
									offset: 45
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 45,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 46,
										offset: 45
									}
								}
							}],
							static: "Comparing i18n Libraries in 2026: A Deep Dive"
						}
					},
					post1Date: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "March 15, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "March 15, 2026"
						}
					},
					post1Excerpt: {
						type: 0,
						start: 0,
						end: 127,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 128,
								offset: 127
							},
							source: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results."
						},
						body: {
							type: 2,
							start: 0,
							end: 127,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 128,
									offset: 127
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 127,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 128,
										offset: 127
									}
								}
							}],
							static: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results."
						}
					},
					post1Category: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Benchmark"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Benchmark"
						}
					},
					post2Title: {
						type: 0,
						start: 0,
						end: 37,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 38,
								offset: 37
							},
							source: "How to Reduce Your i18n Bundle by 60%"
						},
						body: {
							type: 2,
							start: 0,
							end: 37,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 38,
									offset: 37
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 37,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 38,
										offset: 37
									}
								}
							}],
							static: "How to Reduce Your i18n Bundle by 60%"
						}
					},
					post2Date: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "March 8, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "March 8, 2026"
						}
					},
					post2Excerpt: {
						type: 0,
						start: 0,
						end: 127,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 128,
								offset: 127
							},
							source: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations."
						},
						body: {
							type: 2,
							start: 0,
							end: 127,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 128,
									offset: 127
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 127,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 128,
										offset: 127
									}
								}
							}],
							static: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations."
						}
					},
					post2Category: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Tutorial"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Tutorial"
						}
					},
					post3Title: {
						type: 0,
						start: 0,
						end: 42,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 43,
								offset: 42
							},
							source: "The State of Internationalization in React"
						},
						body: {
							type: 2,
							start: 0,
							end: 42,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 43,
									offset: 42
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 42,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 43,
										offset: 42
									}
								}
							}],
							static: "The State of Internationalization in React"
						}
					},
					post3Date: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "February 28, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "February 28, 2026"
						}
					},
					post3Excerpt: {
						type: 0,
						start: 0,
						end: 114,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 115,
								offset: 114
							},
							source: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences."
						},
						body: {
							type: 2,
							start: 0,
							end: 114,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 115,
									offset: 114
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 114,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 115,
										offset: 114
									}
								}
							}],
							static: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences."
						}
					},
					post3Category: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Analysis"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Analysis"
						}
					},
					post4Title: {
						type: 0,
						start: 0,
						end: 38,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 39,
								offset: 38
							},
							source: "Migrating from react-i18next to Lingui"
						},
						body: {
							type: 2,
							start: 0,
							end: 38,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 39,
									offset: 38
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 38,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 39,
										offset: 38
									}
								}
							}],
							static: "Migrating from react-i18next to Lingui"
						}
					},
					post4Date: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "February 15, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "February 15, 2026"
						}
					},
					post4Excerpt: {
						type: 0,
						start: 0,
						end: 109,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 110,
								offset: 109
							},
							source: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui."
						},
						body: {
							type: 2,
							start: 0,
							end: 109,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 110,
									offset: 109
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 109,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 110,
										offset: 109
									}
								}
							}],
							static: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui."
						}
					},
					post4Category: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Tutorial"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Tutorial"
						}
					},
					post5Title: {
						type: 0,
						start: 0,
						end: 41,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 42,
								offset: 41
							},
							source: "Server Components and i18n: What Changes?"
						},
						body: {
							type: 2,
							start: 0,
							end: 41,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 42,
									offset: 41
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 41,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 42,
										offset: 41
									}
								}
							}],
							static: "Server Components and i18n: What Changes?"
						}
					},
					post5Date: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "February 1, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "February 1, 2026"
						}
					},
					post5Excerpt: {
						type: 0,
						start: 0,
						end: 120,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 121,
								offset: 120
							},
							source: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices."
						},
						body: {
							type: 2,
							start: 0,
							end: 120,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 121,
									offset: 120
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 120,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 121,
										offset: 120
									}
								}
							}],
							static: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices."
						}
					},
					post5Category: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Analysis"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Analysis"
						}
					},
					post6Title: {
						type: 0,
						start: 0,
						end: 34,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 35,
								offset: 34
							},
							source: "Benchmark Methodology: How We Test"
						},
						body: {
							type: 2,
							start: 0,
							end: 34,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 35,
									offset: 34
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 34,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 35,
										offset: 34
									}
								}
							}],
							static: "Benchmark Methodology: How We Test"
						}
					},
					post6Date: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "January 20, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "January 20, 2026"
						}
					},
					post6Excerpt: {
						type: 0,
						start: 0,
						end: 122,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 123,
								offset: 122
							},
							source: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility."
						},
						body: {
							type: 2,
							start: 0,
							end: 122,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 123,
									offset: 122
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 122,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 123,
										offset: 122
									}
								}
							}],
							static: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility."
						}
					},
					post6Category: {
						type: 0,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							},
							source: "Meta"
						},
						body: {
							type: 2,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 4,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 5,
										offset: 4
									}
								}
							}],
							static: "Meta"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "Careers"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "Careers"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 148,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 149,
								offset: 148
							},
							source: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
						},
						body: {
							type: 2,
							start: 0,
							end: 148,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 149,
									offset: 148
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 148,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 149,
										offset: 148
									}
								}
							}],
							static: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
						}
					}
				},
				benefits: {
					remoteLabel: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Remote-first"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Remote-first"
						}
					},
					remoteValue: {
						type: 0,
						start: 0,
						end: 31,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 32,
								offset: 31
							},
							source: "Work from anywhere in the world"
						},
						body: {
							type: 2,
							start: 0,
							end: 31,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 32,
									offset: 31
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 31,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 32,
										offset: 31
									}
								}
							}],
							static: "Work from anywhere in the world"
						}
					},
					payLabel: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Competitive pay"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Competitive pay"
						}
					},
					payValue: {
						type: 0,
						start: 0,
						end: 26,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 27,
								offset: 26
							},
							source: "Top-of-market compensation"
						},
						body: {
							type: 2,
							start: 0,
							end: 26,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 27,
									offset: 26
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 26,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 27,
										offset: 26
									}
								}
							}],
							static: "Top-of-market compensation"
						}
					},
					ossLabel: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Open source time"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Open source time"
						}
					},
					ossValue: {
						type: 0,
						start: 0,
						end: 30,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 31,
								offset: 30
							},
							source: "20% time for OSS contributions"
						},
						body: {
							type: 2,
							start: 0,
							end: 30,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 31,
									offset: 30
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 30,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 31,
										offset: 30
									}
								}
							}],
							static: "20% time for OSS contributions"
						}
					}
				},
				openPositions: {
					title: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Open Positions"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Open Positions"
						}
					},
					applyNow: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Apply Now"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Apply Now"
						}
					},
					remote: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "Remote"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "Remote"
						}
					},
					fullTime: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Full-time"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Full-time"
						}
					},
					partTime: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Part-time"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Part-time"
						}
					},
					engineering: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Engineering"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Engineering"
						}
					},
					documentation: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "Documentation"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "Documentation"
						}
					},
					community: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Community"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Community"
						}
					},
					sfRemote: {
						type: 0,
						start: 0,
						end: 22,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 23,
								offset: 22
							},
							source: "San Francisco / Remote"
						},
						body: {
							type: 2,
							start: 0,
							end: 22,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 23,
									offset: 22
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 22,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 23,
										offset: 22
									}
								}
							}],
							static: "San Francisco / Remote"
						}
					},
					frontendTitle: {
						type: 0,
						start: 0,
						end: 24,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 25,
								offset: 24
							},
							source: "Senior Frontend Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 24,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 25,
									offset: 24
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 24,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 25,
										offset: 24
									}
								}
							}],
							static: "Senior Frontend Engineer"
						}
					},
					frontendDesc: {
						type: 0,
						start: 0,
						end: 100,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 101,
								offset: 100
							},
							source: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
						},
						body: {
							type: 2,
							start: 0,
							end: 100,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 101,
									offset: 100
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 100,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 101,
										offset: 100
									}
								}
							}],
							static: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
						}
					},
					backendTitle: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Backend Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Backend Engineer"
						}
					},
					backendDesc: {
						type: 0,
						start: 0,
						end: 98,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 99,
								offset: 98
							},
							source: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
						},
						body: {
							type: 2,
							start: 0,
							end: 98,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 99,
									offset: 98
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 98,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 99,
										offset: 98
									}
								}
							}],
							static: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
						}
					},
					writerTitle: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Technical Writer"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Technical Writer"
						}
					},
					writerDesc: {
						type: 0,
						start: 0,
						end: 89,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 90,
								offset: 89
							},
							source: "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
						},
						body: {
							type: 2,
							start: 0,
							end: 89,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 90,
									offset: 89
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 89,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 90,
										offset: 89
									}
								}
							}],
							static: "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
						}
					},
					devrelTitle: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "DevRel Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "DevRel Engineer"
						}
					},
					devrelDesc: {
						type: 0,
						start: 0,
						end: 99,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 100,
								offset: 99
							},
							source: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
						},
						body: {
							type: 2,
							start: 0,
							end: 99,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 100,
									offset: 99
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 99,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 100,
										offset: 99
									}
								}
							}],
							static: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
						}
					},
					qaTitle: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "QA Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "QA Engineer"
						}
					},
					qaDesc: {
						type: 0,
						start: 0,
						end: 97,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 98,
								offset: 97
							},
							source: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
						},
						body: {
							type: 2,
							start: 0,
							end: 97,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 98,
									offset: 97
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 97,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 98,
										offset: 97
									}
								}
							}],
							static: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Get in Touch"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Get in Touch"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 78,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 79,
								offset: 78
							},
							source: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
						},
						body: {
							type: 2,
							start: 0,
							end: 78,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 79,
									offset: 78
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 78,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 79,
										offset: 78
									}
								}
							}],
							static: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
						}
					}
				},
				form: {
					name: {
						type: 0,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							},
							source: "Name"
						},
						body: {
							type: 2,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 4,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 5,
										offset: 4
									}
								}
							}],
							static: "Name"
						}
					},
					yourName: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Your name"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Your name"
						}
					},
					email: {
						type: 0,
						start: 0,
						end: 5,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 6,
								offset: 5
							},
							source: "Email"
						},
						body: {
							type: 2,
							start: 0,
							end: 5,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 6,
									offset: 5
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 5,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 6,
										offset: 5
									}
								}
							}],
							static: "Email"
						}
					},
					emailPlaceholder: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "you{'@'}example.com"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [
								{
									type: 3,
									start: 0,
									end: 3,
									loc: {
										start: {
											line: 1,
											column: 1,
											offset: 0
										},
										end: {
											line: 1,
											column: 4,
											offset: 3
										}
									}
								},
								{
									type: 9,
									start: 3,
									end: 8,
									loc: {
										start: {
											line: 1,
											column: 4,
											offset: 3
										},
										end: {
											line: 1,
											column: 9,
											offset: 8
										}
									}
								},
								{
									type: 3,
									start: 8,
									end: 19,
									loc: {
										start: {
											line: 1,
											column: 9,
											offset: 8
										},
										end: {
											line: 1,
											column: 20,
											offset: 19
										}
									}
								}
							],
							static: "you@example.com"
						}
					},
					topic: {
						type: 0,
						start: 0,
						end: 5,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 6,
								offset: 5
							},
							source: "Topic"
						},
						body: {
							type: 2,
							start: 0,
							end: 5,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 6,
									offset: 5
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 5,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 6,
										offset: 5
									}
								}
							}],
							static: "Topic"
						}
					},
					bugReport: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Bug Report"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Bug Report"
						}
					},
					newBenchmarkIdea: {
						type: 0,
						start: 0,
						end: 18,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 19,
								offset: 18
							},
							source: "New Benchmark Idea"
						},
						body: {
							type: 2,
							start: 0,
							end: 18,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 19,
									offset: 18
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 18,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 19,
										offset: 18
									}
								}
							}],
							static: "New Benchmark Idea"
						}
					},
					methodologyQuestion: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "Methodology Question"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "Methodology Question"
						}
					},
					contribution: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Contribution"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Contribution"
						}
					},
					other: {
						type: 0,
						start: 0,
						end: 5,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 6,
								offset: 5
							},
							source: "Other"
						},
						body: {
							type: 2,
							start: 0,
							end: 5,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 6,
									offset: 5
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 5,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 6,
										offset: 5
									}
								}
							}],
							static: "Other"
						}
					},
					message: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "Message"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "Message"
						}
					},
					messagePlaceholder: {
						type: 0,
						start: 0,
						end: 33,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 34,
								offset: 33
							},
							source: "Describe your question or idea..."
						},
						body: {
							type: 2,
							start: 0,
							end: 33,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 34,
									offset: 33
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 33,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 34,
										offset: 33
									}
								}
							}],
							static: "Describe your question or idea..."
						}
					},
					sendMessage: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Send Message"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Send Message"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 26,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 27,
								offset: 26
							},
							source: "Frequently Asked Questions"
						},
						body: {
							type: 2,
							start: 0,
							end: 26,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 27,
									offset: 26
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 26,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 27,
										offset: 26
									}
								}
							}],
							static: "Frequently Asked Questions"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 49,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 50,
								offset: 49
							},
							source: "Everything you need to know about i18n Benchmark."
						},
						body: {
							type: 2,
							start: 0,
							end: 49,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 50,
									offset: 49
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 49,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 50,
										offset: 49
									}
								}
							}],
							static: "Everything you need to know about i18n Benchmark."
						}
					}
				},
				list: {
					q1: {
						type: 0,
						start: 0,
						end: 23,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 24,
								offset: 23
							},
							source: "What is i18n Benchmark?"
						},
						body: {
							type: 2,
							start: 0,
							end: 23,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 24,
									offset: 23
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 23,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 24,
										offset: 23
									}
								}
							}],
							static: "What is i18n Benchmark?"
						}
					},
					a1: {
						type: 0,
						start: 0,
						end: 206,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 207,
								offset: 206
							},
							source: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
						},
						body: {
							type: 2,
							start: 0,
							end: 206,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 207,
									offset: 206
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 206,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 207,
										offset: 206
									}
								}
							}],
							static: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
						}
					},
					q2: {
						type: 0,
						start: 0,
						end: 29,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 30,
								offset: 29
							},
							source: "How are benchmarks conducted?"
						},
						body: {
							type: 2,
							start: 0,
							end: 29,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 30,
									offset: 29
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 29,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 30,
										offset: 29
									}
								}
							}],
							static: "How are benchmarks conducted?"
						}
					},
					a2: {
						type: 0,
						start: 0,
						end: 228,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 229,
								offset: 228
							},
							source: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
						},
						body: {
							type: 2,
							start: 0,
							end: 228,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 229,
									offset: 228
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 228,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 229,
										offset: 228
									}
								}
							}],
							static: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
						}
					},
					q3: {
						type: 0,
						start: 0,
						end: 40,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 41,
								offset: 40
							},
							source: "Which libraries are currently supported?"
						},
						body: {
							type: 2,
							start: 0,
							end: 40,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 41,
									offset: 40
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 40,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 41,
										offset: 40
									}
								}
							}],
							static: "Which libraries are currently supported?"
						}
					},
					a3: {
						type: 0,
						start: 0,
						end: 165,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 166,
								offset: 165
							},
							source: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {'@'}fluent/react, and Tolgee."
						},
						body: {
							type: 2,
							start: 0,
							end: 165,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 166,
									offset: 165
								}
							},
							items: [
								{
									type: 3,
									start: 0,
									end: 135,
									loc: {
										start: {
											line: 1,
											column: 1,
											offset: 0
										},
										end: {
											line: 1,
											column: 136,
											offset: 135
										}
									}
								},
								{
									type: 9,
									start: 135,
									end: 140,
									loc: {
										start: {
											line: 1,
											column: 136,
											offset: 135
										},
										end: {
											line: 1,
											column: 141,
											offset: 140
										}
									}
								},
								{
									type: 3,
									start: 140,
									end: 165,
									loc: {
										start: {
											line: 1,
											column: 141,
											offset: 140
										},
										end: {
											line: 1,
											column: 166,
											offset: 165
										}
									}
								}
							],
							static: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
						}
					},
					q4: {
						type: 0,
						start: 0,
						end: 31,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 32,
								offset: 31
							},
							source: "Can I submit my own benchmarks?"
						},
						body: {
							type: 2,
							start: 0,
							end: 31,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 32,
									offset: 31
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 31,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 32,
										offset: 31
									}
								}
							}],
							static: "Can I submit my own benchmarks?"
						}
					},
					a4: {
						type: 0,
						start: 0,
						end: 205,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 206,
								offset: 205
							},
							source: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
						},
						body: {
							type: 2,
							start: 0,
							end: 205,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 206,
									offset: 205
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 205,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 206,
										offset: 205
									}
								}
							}],
							static: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
						}
					},
					q5: {
						type: 0,
						start: 0,
						end: 33,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 34,
								offset: 33
							},
							source: "How often are benchmarks updated?"
						},
						body: {
							type: 2,
							start: 0,
							end: 33,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 34,
									offset: 33
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 33,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 34,
										offset: 33
									}
								}
							}],
							static: "How often are benchmarks updated?"
						}
					},
					a5: {
						type: 0,
						start: 0,
						end: 147,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 148,
								offset: 147
							},
							source: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
						},
						body: {
							type: 2,
							start: 0,
							end: 147,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 148,
									offset: 147
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 147,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 148,
										offset: 147
									}
								}
							}],
							static: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
						}
					},
					q6: {
						type: 0,
						start: 0,
						end: 21,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 22,
								offset: 21
							},
							source: "Is the data reliable?"
						},
						body: {
							type: 2,
							start: 0,
							end: 21,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 22,
									offset: 21
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 21,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 22,
										offset: 21
									}
								}
							}],
							static: "Is the data reliable?"
						}
					},
					a6: {
						type: 0,
						start: 0,
						end: 183,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 184,
								offset: 183
							},
							source: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
						},
						body: {
							type: 2,
							start: 0,
							end: 183,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 184,
									offset: 183
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 183,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 184,
										offset: 183
									}
								}
							}],
							static: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
						}
					},
					q7: {
						type: 0,
						start: 0,
						end: 33,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 34,
								offset: 33
							},
							source: "Do you offer consulting services?"
						},
						body: {
							type: 2,
							start: 0,
							end: 33,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 34,
									offset: 33
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 33,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 34,
										offset: 33
									}
								}
							}],
							static: "Do you offer consulting services?"
						}
					},
					a7: {
						type: 0,
						start: 0,
						end: 184,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 185,
								offset: 184
							},
							source: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
						},
						body: {
							type: 2,
							start: 0,
							end: 184,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 185,
									offset: 184
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 184,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 185,
										offset: 184
									}
								}
							}],
							static: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
						}
					},
					q8: {
						type: 0,
						start: 0,
						end: 21,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 22,
								offset: 21
							},
							source: "How can I contribute?"
						},
						body: {
							type: 2,
							start: 0,
							end: 21,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 22,
									offset: 21
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 21,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 22,
										offset: 21
									}
								}
							}],
							static: "How can I contribute?"
						}
					},
					a8: {
						type: 0,
						start: 0,
						end: 180,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 181,
								offset: 180
							},
							source: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
						},
						body: {
							type: 2,
							start: 0,
							end: 180,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 181,
									offset: 180
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 180,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 181,
										offset: 180
									}
								}
							}],
							static: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 27,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 28,
								offset: 27
							},
							source: "Simple, Transparent Pricing"
						},
						body: {
							type: 2,
							start: 0,
							end: 27,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 28,
									offset: 27
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 27,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 28,
										offset: 27
									}
								}
							}],
							static: "Simple, Transparent Pricing"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 52,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 53,
								offset: 52
							},
							source: "Choose the plan that fits your team. No hidden fees."
						},
						body: {
							type: 2,
							start: 0,
							end: 52,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 53,
									offset: 52
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 52,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 53,
										offset: 52
									}
								}
							}],
							static: "Choose the plan that fits your team. No hidden fees."
						}
					}
				},
				tiers: {
					starterName: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "Starter"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "Starter"
						}
					},
					starterPrice: {
						type: 0,
						start: 0,
						end: 2,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 3,
								offset: 2
							},
							source: "$0"
						},
						body: {
							type: 2,
							start: 0,
							end: 2,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 3,
									offset: 2
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 2,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 3,
										offset: 2
									}
								}
							}],
							static: "$0"
						}
					},
					starterPeriod: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "forever"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "forever"
						}
					},
					starterFeature1: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "5 benchmark runs/day"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "5 benchmark runs/day"
						}
					},
					starterFeature2: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "3 libraries"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "3 libraries"
						}
					},
					starterFeature3: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "Community support"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "Community support"
						}
					},
					starterFeature4: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Public results"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Public results"
						}
					},
					proName: {
						type: 0,
						start: 0,
						end: 3,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 4,
								offset: 3
							},
							source: "Pro"
						},
						body: {
							type: 2,
							start: 0,
							end: 3,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 4,
									offset: 3
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 3,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 4,
										offset: 3
									}
								}
							}],
							static: "Pro"
						}
					},
					proPrice: {
						type: 0,
						start: 0,
						end: 3,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 4,
								offset: 3
							},
							source: "$29"
						},
						body: {
							type: 2,
							start: 0,
							end: 3,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 4,
									offset: 3
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 3,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 4,
										offset: 3
									}
								}
							}],
							static: "$29"
						}
					},
					proPeriod: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "/month"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "/month"
						}
					},
					proFeature1: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Unlimited runs"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Unlimited runs"
						}
					},
					proFeature2: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "All libraries"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "All libraries"
						}
					},
					proFeature3: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Priority support"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Priority support"
						}
					},
					proFeature4: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Private results"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Private results"
						}
					},
					proFeature5: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "CI integration"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "CI integration"
						}
					},
					proFeature6: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Historical data"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Historical data"
						}
					},
					enterpriseName: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Enterprise"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Enterprise"
						}
					},
					enterprisePrice: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "Custom"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "Custom"
						}
					},
					enterpriseFeature1: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "Everything in Pro"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "Everything in Pro"
						}
					},
					enterpriseFeature2: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "On-premise option"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "On-premise option"
						}
					},
					enterpriseFeature3: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "SSO & SAML"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "SSO & SAML"
						}
					},
					enterpriseFeature4: {
						type: 0,
						start: 0,
						end: 25,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 26,
								offset: 25
							},
							source: "Dedicated account manager"
						},
						body: {
							type: 2,
							start: 0,
							end: 25,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 26,
									offset: 25
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 25,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 26,
										offset: 25
									}
								}
							}],
							static: "Dedicated account manager"
						}
					},
					enterpriseFeature5: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Custom SLAs"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Custom SLAs"
						}
					},
					enterpriseFeature6: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Audit logs"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Audit logs"
						}
					},
					enterpriseFeature7: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "Training sessions"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "Training sessions"
						}
					},
					contactSales: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "Contact Sales"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "Contact Sales"
						}
					},
					getStarted: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Get Started"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Get Started"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Products"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Products"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 68,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 69,
								offset: 68
							},
							source: "Tools and services to streamline your internationalization workflow."
						},
						body: {
							type: 2,
							start: 0,
							end: 68,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 69,
									offset: 68
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 68,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 69,
										offset: 68
									}
								}
							}],
							static: "Tools and services to streamline your internationalization workflow."
						}
					}
				},
				grid: {
					learnMore: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Learn More"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Learn More"
						}
					},
					cliName: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "Benchmark CLI"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "Benchmark CLI"
						}
					},
					cliDesc: {
						type: 0,
						start: 0,
						end: 93,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 94,
								offset: 93
							},
							source: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration."
						},
						body: {
							type: 2,
							start: 0,
							end: 93,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 94,
									offset: 93
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 93,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 94,
										offset: 93
									}
								}
							}],
							static: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration."
						}
					},
					cliPrice: {
						type: 0,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							},
							source: "Free"
						},
						body: {
							type: 2,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 4,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 5,
										offset: 4
									}
								}
							}],
							static: "Free"
						}
					},
					cloudName: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Benchmark Cloud"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Benchmark Cloud"
						}
					},
					cloudDesc: {
						type: 0,
						start: 0,
						end: 89,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 90,
								offset: 89
							},
							source: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards."
						},
						body: {
							type: 2,
							start: 0,
							end: 89,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 90,
									offset: 89
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 89,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 90,
										offset: 89
									}
								}
							}],
							static: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards."
						}
					},
					cloudPrice: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "$29/mo"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "$29/mo"
						}
					},
					enterpriseName: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "Benchmark Enterprise"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "Benchmark Enterprise"
						}
					},
					enterpriseDesc: {
						type: 0,
						start: 0,
						end: 79,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 80,
								offset: 79
							},
							source: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support."
						},
						body: {
							type: 2,
							start: 0,
							end: 79,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 80,
									offset: 79
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 79,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 80,
										offset: 79
									}
								}
							}],
							static: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support."
						}
					},
					enterprisePrice: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Contact Us"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Contact Us"
						}
					},
					migrationName: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "Migration Assistant"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 19,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 20,
										offset: 19
									}
								}
							}],
							static: "Migration Assistant"
						}
					},
					migrationDesc: {
						type: 0,
						start: 0,
						end: 91,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 92,
								offset: 91
							},
							source: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime."
						},
						body: {
							type: 2,
							start: 0,
							end: 91,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 92,
									offset: 91
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 91,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 92,
										offset: 91
									}
								}
							}],
							static: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime."
						}
					},
					migrationPrice: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "$99 one-time"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "$99 one-time"
						}
					},
					qaName: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Translation QA"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Translation QA"
						}
					},
					qaDesc: {
						type: 0,
						start: 0,
						end: 92,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 93,
								offset: 92
							},
							source: "Automated quality checks for missing translations, pluralization issues, and context errors."
						},
						body: {
							type: 2,
							start: 0,
							end: 92,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 93,
									offset: 92
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 92,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 93,
										offset: 92
									}
								}
							}],
							static: "Automated quality checks for missing translations, pluralization issues, and context errors."
						}
					},
					qaPrice: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "$19/mo"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "$19/mo"
						}
					},
					optimizerName: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Bundle Optimizer"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Bundle Optimizer"
						}
					},
					optimizerDesc: {
						type: 0,
						start: 0,
						end: 92,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 93,
								offset: 92
							},
							source: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting."
						},
						body: {
							type: 2,
							start: 0,
							end: 92,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 93,
									offset: 92
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 92,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 93,
										offset: 92
									}
								}
							}],
							static: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting."
						}
					},
					optimizerPrice: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "$49/mo"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "$49/mo"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Settings"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Settings"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 50,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 51,
								offset: 50
							},
							source: "Manage your account preferences and configuration."
						},
						body: {
							type: 2,
							start: 0,
							end: 50,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 51,
									offset: 50
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 50,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 51,
										offset: 50
									}
								}
							}],
							static: "Manage your account preferences and configuration."
						}
					}
				},
				profile: {
					title: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "Profile"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "Profile"
						}
					},
					displayName: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Display Name"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Display Name"
						}
					},
					email: {
						type: 0,
						start: 0,
						end: 5,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 6,
								offset: 5
							},
							source: "Email"
						},
						body: {
							type: 2,
							start: 0,
							end: 5,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 6,
									offset: 5
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 5,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 6,
										offset: 5
									}
								}
							}],
							static: "Email"
						}
					}
				},
				preferences: {
					title: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Preferences"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Preferences"
						}
					},
					emailNotifications: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "Email Notifications"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 19,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 20,
										offset: 19
									}
								}
							}],
							static: "Email Notifications"
						}
					},
					weeklyReports: {
						type: 0,
						start: 0,
						end: 32,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 33,
								offset: 32
							},
							source: "Receive weekly benchmark reports"
						},
						body: {
							type: 2,
							start: 0,
							end: 32,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 33,
									offset: 32
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 32,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 33,
										offset: 32
									}
								}
							}],
							static: "Receive weekly benchmark reports"
						}
					},
					toggleNotifications: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "Toggle notifications"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "Toggle notifications"
						}
					},
					darkMode: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Dark Mode"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Dark Mode"
						}
					},
					darkColorScheme: {
						type: 0,
						start: 0,
						end: 21,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 22,
								offset: 21
							},
							source: "Use dark color scheme"
						},
						body: {
							type: 2,
							start: 0,
							end: 21,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 22,
									offset: 21
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 21,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 22,
										offset: 21
									}
								}
							}],
							static: "Use dark color scheme"
						}
					},
					toggleDarkMode: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Toggle dark mode"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Toggle dark mode"
						}
					},
					defaultLanguage: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Default Language"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Default Language"
						}
					},
					english: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "English (en)"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "English (en)"
						}
					},
					french: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "French (fr)"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "French (fr)"
						}
					},
					german: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "German (de)"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "German (de)"
						}
					},
					spanish: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Spanish (es)"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Spanish (es)"
						}
					},
					japanese: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "Japanese (ja)"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "Japanese (ja)"
						}
					},
					chinese: {
						type: 0,
						start: 0,
						end: 26,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 27,
								offset: 26
							},
							source: "Chinese Simplified (zh-CN)"
						},
						body: {
							type: 2,
							start: 0,
							end: 26,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 27,
									offset: 26
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 26,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 27,
										offset: 26
									}
								}
							}],
							static: "Chinese Simplified (zh-CN)"
						}
					},
					arabic: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Arabic (ar)"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Arabic (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "API Access"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "API Access"
						}
					},
					apiKey: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "API Key"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "API Key"
						}
					},
					copy: {
						type: 0,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							},
							source: "Copy"
						},
						body: {
							type: 2,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 4,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 5,
										offset: 4
									}
								}
							}],
							static: "Copy"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 61,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 62,
								offset: 61
							},
							source: "Use this key to access the benchmarking API programmatically."
						},
						body: {
							type: 2,
							start: 0,
							end: 61,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 62,
									offset: 61
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 61,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 62,
										offset: 61
									}
								}
							}],
							static: "Use this key to access the benchmarking API programmatically."
						}
					}
				},
				footer: {
					cancel: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "Cancel"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "Cancel"
						}
					},
					saveChanges: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Save Changes"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Save Changes"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Our Team"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Our Team"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 107,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 108,
								offset: 107
							},
							source: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
						},
						body: {
							type: 2,
							start: 0,
							end: 107,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 108,
									offset: 107
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 107,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 108,
										offset: 107
									}
								}
							}],
							static: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
						}
					}
				},
				grid: {
					member1Name: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Sarah Chen"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Sarah Chen"
						}
					},
					member1Role: {
						type: 0,
						start: 0,
						end: 23,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 24,
								offset: 23
							},
							source: "Founder & Lead Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 23,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 24,
									offset: 23
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 23,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 24,
										offset: 23
									}
								}
							}],
							static: "Founder & Lead Engineer"
						}
					},
					member1Bio: {
						type: 0,
						start: 0,
						end: 98,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 99,
								offset: 98
							},
							source: "Former Google engineer with 10 years of experience building internationalization systems at scale."
						},
						body: {
							type: 2,
							start: 0,
							end: 98,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 99,
									offset: 98
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 98,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 99,
										offset: 98
									}
								}
							}],
							static: "Former Google engineer with 10 years of experience building internationalization systems at scale."
						}
					},
					member2Name: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Marcus Weber"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Marcus Weber"
						}
					},
					member2Role: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "Performance Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "Performance Engineer"
						}
					},
					member2Bio: {
						type: 0,
						start: 0,
						end: 102,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 103,
								offset: 102
							},
							source: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
						},
						body: {
							type: 2,
							start: 0,
							end: 102,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 103,
									offset: 102
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 102,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 103,
										offset: 102
									}
								}
							}],
							static: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
						}
					},
					member3Name: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Aisha Patel"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Aisha Patel"
						}
					},
					member3Role: {
						type: 0,
						start: 0,
						end: 18,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 19,
								offset: 18
							},
							source: "Developer Advocate"
						},
						body: {
							type: 2,
							start: 0,
							end: 18,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 19,
									offset: 18
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 18,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 19,
										offset: 18
									}
								}
							}],
							static: "Developer Advocate"
						}
					},
					member3Bio: {
						type: 0,
						start: 0,
						end: 97,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 98,
								offset: 97
							},
							source: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
						},
						body: {
							type: 2,
							start: 0,
							end: 97,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 98,
									offset: 97
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 97,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 98,
										offset: 97
									}
								}
							}],
							static: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
						}
					},
					member4Name: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Tomás Rodríguez"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Tomás Rodríguez"
						}
					},
					member4Role: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "Full-Stack Developer"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "Full-Stack Developer"
						}
					},
					member4Bio: {
						type: 0,
						start: 0,
						end: 96,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 97,
								offset: 96
							},
							source: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
						},
						body: {
							type: 2,
							start: 0,
							end: 96,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 97,
									offset: 96
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 96,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 97,
										offset: 96
									}
								}
							}],
							static: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
						}
					},
					member5Name: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Yuki Tanaka"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Yuki Tanaka"
						}
					},
					member5Role: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Data Analyst"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Data Analyst"
						}
					},
					member5Bio: {
						type: 0,
						start: 0,
						end: 87,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 88,
								offset: 87
							},
							source: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
						},
						body: {
							type: 2,
							start: 0,
							end: 87,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 88,
									offset: 87
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 87,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 88,
										offset: 87
									}
								}
							}],
							static: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
						}
					},
					member6Name: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Elena Kowalski"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Elena Kowalski"
						}
					},
					member6Role: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "Community Manager"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "Community Manager"
						}
					},
					member6Bio: {
						type: 0,
						start: 0,
						end: 96,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 97,
								offset: 96
							},
							source: "Manages community contributions, partnerships, and events. Background in open source governance."
						},
						body: {
							type: 2,
							start: 0,
							end: 96,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 97,
									offset: 96
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 96,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 97,
										offset: 96
									}
								}
							}],
							static: "Manages community contributions, partnerships, and events. Background in open source governance."
						}
					}
				}
			},
			notFound: {
				title: {
					type: 0,
					start: 0,
					end: 3,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 4,
							offset: 3
						},
						source: "404"
					},
					body: {
						type: 2,
						start: 0,
						end: 3,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 4,
								offset: 3
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 3,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 4,
									offset: 3
								}
							}
						}],
						static: "404"
					}
				},
				description: {
					type: 0,
					start: 0,
					end: 20,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 21,
							offset: 20
						},
						source: "Oops! Page not found"
					},
					body: {
						type: 2,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							}
						}],
						static: "Oops! Page not found"
					}
				},
				returnHome: {
					type: 0,
					start: 0,
					end: 14,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 15,
							offset: 14
						},
						source: "Return to Home"
					},
					body: {
						type: 2,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							}
						}],
						static: "Return to Home"
					}
				}
			}
		},
		fr: S,
		es: C,
		de: w,
		it: T,
		pt: E,
		zh: D,
		ja: O,
		ko: ee,
		ru: te
	}
}), Xi = o({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = c()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(Yi);
		let r = { app: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function Zi(e, t, n, r, i, a) {
	return v(e.$slots, "default");
}
var Qi = Gi(Xi, [["render", Zi], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-i18n-app/scripts/Wrapper.vue"]]), $i = { render() {
	return u(Qi, {}, { default: () => u(Ji) });
} };
export { $i as default };

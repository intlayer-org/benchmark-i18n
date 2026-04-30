import * as e from "vue";
import { Fragment as t, Text as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, getCurrentScope as d, h as f, inject as p, normalizeClass as m, onBeforeMount as h, onMounted as g, onScopeDispose as _, onUnmounted as v, openBlock as y, ref as b, renderList as x, resolveComponent as S, shallowRef as C, toDisplayString as w, unref as T, watch as ee, withCtx as E } from "vue";
import { useRoute as D, useRouter as te } from "vue-router";
import { ChevronDown as ne } from "lucide-vue-next";
function O(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var re = {};
function ie(e) {
	re[e] || (re[e] = !0, O(e));
}
var k = typeof window < "u", A, j;
if (process.env.NODE_ENV !== "production") {
	let e = k && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (A = (t) => {
		e.mark(t);
	}, j = (t, n, r) => {
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
	return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${ge(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${ge(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && O("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t) => {
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
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === G || !t ? !1 : t === K ? (e.peek(), r()) : E(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function ee(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function E(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? !(r === G || r === K) : i === G ? (e.peek(), n(!0, G)) : i === K ? (e.peek(), n(!0, K)) : !0;
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function D(e, t) {
		let n = e.currentChar();
		return n === ze ? ze : t(n) ? (e.next(), n) : null;
	}
	function te(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function ne(e) {
		return D(e, te);
	}
	function O(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function re(e) {
		return D(e, O);
	}
	function ie(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function k(e) {
		return D(e, ie);
	}
	function A(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function j(e) {
		return D(e, A);
	}
	function ae(e) {
		let t = "", n = "";
		for (; t = k(e);) n += t;
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
			else if (n === G || n === K) if (E(e)) t += n, e.next();
			else if (ee(e)) break;
			else t += n, e.next();
			else t += n, e.next();
		}
		return t;
	}
	function M(e) {
		g(e);
		let t = "", n = "";
		for (; t = re(e);) n += t;
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
		for (; t = D(e, ce);) t === "\\" ? n += le(e) : n += t;
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
			let n = j(e);
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
		for (; t = D(e, de);) n += t;
		return n;
	}
	function fe(e) {
		let t = "", n = "";
		for (; t = ne(e);) n += t;
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
				if (ee(e)) return t.braceNest > 0 && d(U.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, pe(e)), t.braceNest = 0, t.inLinked = !1, n;
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
			default: return ee(e) ? (r = f(t, 1, pe(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), he(e, t)) : C(e, t) ? (g(e), f(t, 11, fe(e))) : T(e, t) ? (g(e), i === "{" ? me(e, t) || r : f(t, 10, F(e))) : (n === 7 && d(U.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, ge(e, t));
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
				if (ee(e)) return n = f(t, 1, pe(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (E(e)) return f(t, 0, oe(e));
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
		return t.type === 11 ? (t.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, q(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, U.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
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
		switch (o.type !== 9 && r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = l(e, o.value || "");
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
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(l(e, i.value || ""));
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
function q(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Ye(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function Xe(e, t) {
	for (let n = 0; n < e.length; n++) Ze(e[n], t);
}
function Ze(e, t) {
	switch (e.type) {
		case 1:
			Xe(e.cases, t), t.helper("plural");
			break;
		case 2:
			Xe(e.items, t);
			break;
		case 6:
			Ze(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4:
			t.helper("interpolate"), t.helper("named");
			break;
	}
}
function Qe(e, t = {}) {
	let n = Ye(e);
	n.helper("normalize"), e.body && Ze(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function $e(e) {
	let t = e.body;
	return t.type === 2 ? et(t) : t.cases.forEach((e) => et(e)), e;
}
function et(e) {
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
var tt = "minifier";
function nt(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			nt(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) nt(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) nt(n[e]);
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
			nt(t.key), t.k = t.key, delete t.key, t.modifier && (nt(t.modifier), t.m = t.modifier, delete t.modifier);
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
			domain: tt,
			args: [e.type]
		});
	}
	delete e.type;
}
var rt = "parser";
function it(e, t) {
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
function at(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), lt(e, t.key), t.modifier ? (e.push(", "), lt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ot(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (lt(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function st(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (lt(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function ct(e, t) {
	t.body ? lt(e, t.body) : e.push("null");
}
function lt(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			ct(e, t);
			break;
		case 1:
			st(e, t);
			break;
		case 2:
			ot(e, t);
			break;
		case 6:
			at(e, t);
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
			domain: rt,
			args: [t.type]
		});
	}
}
var ut = (e, t = {}) => {
	let n = z(t.mode) ? t.mode : "normal", r = z(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, o = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = it(e, {
		mode: n,
		filename: r,
		sourceMap: i,
		breakLineCode: a,
		needIndent: o
	});
	c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), s.length > 0 && (c.push(`const { ${Ce(s.map((e) => `${e}: _${e}`), ", ")} } = ctx`), c.newline()), c.push("return "), lt(c, e), c.deindent(o), c.push("}"), delete e.helpers;
	let { code: l, map: u } = c.context();
	return {
		ast: e,
		code: l,
		map: u ? u.toJSON() : void 0
	};
};
function dt(e, t = {}) {
	let n = P({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = Je(n).parse(e);
	return r ? (a && $e(o), i && nt(o), {
		ast: o,
		code: ""
	}) : (Qe(o, n), ut(o, n));
}
function J(e) {
	return V(e) && xt(e) === 0 && (I(e, "b") || I(e, "body"));
}
var ft = ["b", "body"];
function pt(e) {
	return Ot(e, ft);
}
var mt = ["c", "cases"];
function ht(e) {
	return Ot(e, mt, []);
}
var gt = ["s", "static"];
function _t(e) {
	return Ot(e, gt);
}
var vt = ["i", "items"];
function yt(e) {
	return Ot(e, vt, []);
}
var bt = ["t", "type"];
function xt(e) {
	return Ot(e, bt);
}
var St = ["v", "value"];
function Ct(e, t) {
	let n = Ot(e, St);
	if (n != null) return n;
	throw At(t);
}
var wt = ["m", "modifier"];
function Tt(e) {
	return Ot(e, wt);
}
var Et = ["k", "key"];
function Dt(e) {
	let t = Ot(e, Et);
	if (t) return t;
	throw At(6);
}
function Ot(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (I(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var kt = [
	...ft,
	...mt,
	...gt,
	...vt,
	...Et,
	...wt,
	...St,
	...bt
];
function At(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function jt(e) {
	return (t) => Mt(t, e);
}
function Mt(e, t) {
	let n = pt(t);
	if (n == null) throw At(0);
	if (xt(n) === 1) {
		let t = ht(n);
		return e.plural(t.reduce((t, n) => [...t, Nt(e, n)], []));
	} else return Nt(e, n);
}
function Nt(e, t) {
	let n = _t(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = yt(t).reduce((t, n) => [...t, Pt(e, n)], []);
		return e.normalize(n);
	}
}
function Pt(e, t) {
	let n = xt(t);
	switch (n) {
		case 3: return Ct(t, n);
		case 9: return Ct(t, n);
		case 4: {
			let r = t;
			if (I(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (I(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw At(n);
		}
		case 5: {
			let r = t;
			if (I(r, "i") && N(r.i)) return e.interpolate(e.list(r.i));
			if (I(r, "index") && N(r.index)) return e.interpolate(e.list(r.index));
			throw At(n);
		}
		case 6: {
			let n = t, r = Tt(n), i = Dt(n);
			return e.linked(Pt(e, i), r ? Pt(e, r) : void 0, e.type);
		}
		case 7: return Ct(t, n);
		case 8: return Ct(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var Ft = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function It(e, t) {
	t && Pe(e) && O(oe(Ft, { source: e }));
}
var Lt = (e) => e, Rt = F();
function zt(e, t = {}) {
	let n = !1, r = t.onError || Me;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...dt(e, t),
		detectError: n
	};
}
function Bt(e, t) {
	if (z(e)) {
		let n = B(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
		process.env.NODE_ENV !== "production" && It(e, n);
		let r = (t.onCacheKey || Lt)(e), i = Rt[r];
		if (i) return i;
		let { ast: a, detectError: o } = zt(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = jt(a);
		return o ? s : Rt[r] = s;
	} else {
		if (process.env.NODE_ENV !== "production" && !J(e)) return O(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
		let n = e.cacheKey;
		return n ? Rt[n] || (Rt[n] = jt(e)) : jt(e);
	}
}
var Vt = null;
function Ht(e) {
	Vt = e;
}
function Ut(e, t, n) {
	Vt && Vt.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var Wt = Gt("function:translate");
function Gt(e) {
	return (t) => Vt && Vt.emit(e, t);
}
var Y = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function Kt(e) {
	return je(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: qt });
}
var qt = {
	[Y.INVALID_ARGUMENT]: "Invalid arguments",
	[Y.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[Y.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[Y.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[Y.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[Y.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[Y.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Jt(e, t) {
	return t.locale == null ? Xt(e.locale) : Xt(t.locale);
}
var Yt;
function Xt(e) {
	if (z(e)) return e;
	if (R(e)) {
		if (e.resolvedOnce && Yt != null) return Yt;
		if (e.constructor.name === "Function") {
			let t = e();
			if (ye(t)) throw Kt(Y.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return Yt = t;
		} else throw Kt(Y.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw Kt(Y.NOT_SUPPORT_LOCALE_TYPE);
}
function Zt(e, t, n) {
	return [...new Set([n, ...L(t) ? t : V(t) ? Object.keys(t) : z(t) ? [t] : [n]])];
}
function Qt(e, t, n) {
	let r = z(n) ? n : gn, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; L(e);) e = $t(a, e, t);
		let o = L(t) || !H(t) ? t : t.default ? t.default : null;
		e = z(o) ? [o] : o, L(e) && $t(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function $t(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && B(r); i++) {
		let a = t[i];
		z(a) && (r = en(e, t[i], n));
	}
	return r;
}
function en(e, t, n) {
	let r, i = t.split("-");
	do
		r = tn(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function tn(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (L(n) || H(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var nn = [];
nn[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, nn[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, nn[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, nn[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, nn[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, nn[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, nn[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var rn = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function an(e) {
	return rn.test(e);
}
function on(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function sn(e) {
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
function cn(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : an(t) ? on(t) : "*" + t;
}
function ln(e) {
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
			if (i = 0, o === void 0 || (o = cn(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = sn(a), d = nn[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var un = /* @__PURE__ */ new Map();
function dn(e, t) {
	return V(e) ? e[t] : null;
}
function fn(e, t) {
	if (!V(e)) return null;
	let n = un.get(t);
	if (n || (n = ln(t), n && un.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (kt.includes(e) && J(i) || !V(i) || !I(i, e)) return null;
		let t = i[e];
		if (t === void 0 || R(i)) return null;
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
}, pn = {
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
function mn(e, ...t) {
	return oe(pn[e], ...t);
}
var hn = "11.4.0", gn = "en-US", _n = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function vn() {
	return {
		upper: (e, t) => t === "text" && z(e) ? e.toUpperCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && z(e) ? e.toLowerCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && z(e) ? _n(e) : t === "vnode" && V(e) && "__v_isVNode" in e ? _n(e.children) : e
	};
}
var yn;
function bn(e) {
	yn = e;
}
var xn;
function Sn(e) {
	xn = e;
}
var Cn;
function wn(e) {
	Cn = e;
}
var Tn = null, En = (e) => {
	Tn = e;
}, Dn = () => Tn, On = null, kn = (e) => {
	On = e;
}, An = () => On, jn = 0;
function Mn(e = {}) {
	let t = R(e.onWarn) ? e.onWarn : O, n = z(e.version) ? e.version : hn, r = z(e.locale) || R(e.locale) ? e.locale : gn, i = R(r) ? gn : r, a = L(e.fallbackLocale) || H(e.fallbackLocale) || z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = H(e.messages) ? e.messages : Nn(i), s = H(e.datetimeFormats) ? e.datetimeFormats : Nn(i), c = H(e.numberFormats) ? e.numberFormats : Nn(i), l = P(F(), e.modifiers, vn()), u = e.pluralRules || F(), d = R(e.missing) ? e.missing : null, f = B(e.missingWarn) || ue(e.missingWarn) ? e.missingWarn : !0, p = B(e.fallbackWarn) || ue(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = R(e.postTranslation) ? e.postTranslation : null, _ = H(e.processor) ? e.processor : null, v = B(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, b = R(e.messageCompiler) ? e.messageCompiler : yn;
	process.env.NODE_ENV !== "production" && R(e.messageCompiler) && ie(mn(X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let x = R(e.messageResolver) ? e.messageResolver : xn || dn, S = R(e.localeFallbacker) ? e.localeFallbacker : Cn || Zt, C = V(e.fallbackContext) ? e.fallbackContext : void 0, w = e, T = V(w.__datetimeFormatters) ? w.__datetimeFormatters : /* @__PURE__ */ new Map(), ee = V(w.__numberFormatters) ? w.__numberFormatters : /* @__PURE__ */ new Map(), E = V(w.__meta) ? w.__meta : {};
	jn++;
	let D = {
		version: n,
		cid: jn,
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
		__meta: E
	};
	return D.datetimeFormats = s, D.numberFormats = c, D.__datetimeFormatters = T, D.__numberFormatters = ee, process.env.NODE_ENV !== "production" && (D.__v_emitter = w.__v_emitter == null ? void 0 : w.__v_emitter), process.env.NODE_ENV !== "production" && Ut(D, n, E), D;
}
var Nn = (e) => ({ [e]: F() });
function Pn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function Fn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function In(e, t, n, r, i) {
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
	} else return process.env.NODE_ENV !== "production" && Fn(r, t) && o(mn(X.NOT_FOUND_KEY, {
		key: t,
		locale: n
	})), t;
}
function Ln(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Rn(e, t) {
	return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function zn(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (Rn(e, t[r])) return !0;
	return !1;
}
var Bn = typeof Intl < "u", Vn = {
	dateTimeFormat: Bn && Intl.DateTimeFormat !== void 0,
	numberFormat: Bn && Intl.NumberFormat !== void 0
};
function Hn(e, ...t) {
	let { datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !Vn.dateTimeFormat) return a(mn(X.CANNOT_FORMAT_DATE)), "";
	if (!z(t[0]) && !le(t[0]) && !N(t[0])) return process.env.NODE_ENV !== "production" && a(mn(X.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Wn(...t), f = B(u.missingWarn) ? u.missingWarn : e.missingWarn, p = B(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Jt(e, u), g = o(e, i, h);
	if (!z(c) || c === "") return new Intl.DateTimeFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "datetime format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Pn(p, c) && a(mn(X.FALLBACK_TO_DATE_FORMAT, {
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
		In(e, c, v, f, S), b = x;
	}
	if (!H(y) || !z(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	de(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.DateTimeFormat(v, P({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Un = [
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
function Wn(...e) {
	let [t, n, r, i] = e, a = F(), o = F(), s;
	if (z(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw Kt(Y.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw Kt(Y.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (le(t)) {
		if (isNaN(t.getTime())) throw Kt(Y.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (N(t)) s = t;
	else throw Kt(Y.INVALID_ARGUMENT);
	return z(n) ? a.key = n : H(n) && Object.keys(n).forEach((e) => {
		Un.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), z(r) ? a.locale = r : H(r) && (o = r), H(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Gn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
	}
}
function Kn(e, ...t) {
	let { numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !Vn.numberFormat) return a(mn(X.CANNOT_FORMAT_NUMBER)), "";
	if (!N(t[0])) return process.env.NODE_ENV !== "production" && a(mn(X.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Jn(...t), f = B(u.missingWarn) ? u.missingWarn : e.missingWarn, p = B(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Jt(e, u), g = o(e, i, h);
	if (!z(c) || c === "") return new Intl.NumberFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "number format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Pn(p, c) && a(mn(X.FALLBACK_TO_NUMBER_FORMAT, {
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
		In(e, c, v, f, S), b = x;
	}
	if (!H(y) || !z(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	de(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.NumberFormat(v, P({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var qn = [
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
function Jn(...e) {
	let [t, n, r, i] = e, a = F(), o = F();
	if (!N(t)) throw Kt(Y.INVALID_ARGUMENT);
	let s = t;
	return z(n) ? a.key = n : H(n) && Object.keys(n).forEach((e) => {
		qn.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), z(r) ? a.locale = r : H(r) && (o = r), H(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Yn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
	}
}
var Xn = (e) => e, Zn = (e) => "", Qn = "text", $n = (e) => e.length === 0 ? "" : Ce(e), er = Se;
function tr(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function nr(e) {
	let t = N(e.pluralIndex) ? e.pluralIndex : -1;
	return N(e.named?.count) ? e.named.count : N(e.named?.n) ? e.named.n : t;
}
function rr(e = {}) {
	let t = e.locale, n = nr(e), r = z(t) && R(e.pluralRules?.[t]) ? e.pluralRules[t] : tr, i = r === tr ? void 0 : tr, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || F();
	N(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
	let l = (e) => c[e];
	function u(t, n) {
		return (R(e.messages) ? e.messages(t, !!n) : V(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : Zn);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : Xn, f = R(e.processor?.normalize) ? e.processor.normalize : $n, p = R(e.processor?.interpolate) ? e.processor.interpolate : er, m = {
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
		type: z(e.processor?.type) ? e.processor.type : Qn,
		interpolate: p,
		normalize: f,
		values: P(F(), o, c)
	};
	return m;
}
var ir = () => "", Z = (e) => R(e);
function ar(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = ur(...t), u = B(l.missingWarn) ? l.missingWarn : e.missingWarn, d = B(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = B(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = z(l.default) || B(l.default) ? B(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (z(m) || R(m)), g = Jt(e, l);
	f && or(l);
	let [_, v, y] = p ? [
		c,
		g,
		s[g] || F()
	] : sr(e, c, g, o, d, u), b = _, x = c;
	if (!p && !(z(b) || J(b) || Z(b)) && h && (b = m, x = b), !p && (!(z(b) || J(b) || Z(b)) || !z(v))) return i ? -1 : c;
	if (process.env.NODE_ENV !== "production" && z(b) && e.messageCompiler == null) return O(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
	let S = !1, C = Z(b) ? b : cr(e, c, v, b, x, () => {
		S = !0;
	});
	if (S) return b;
	let w = lr(e, C, rr(pr(e, v, y, l))), T = r ? r(w, c) : w;
	if (f && z(T) && (T = _e(T)), process.env.NODE_ENV !== "production") {
		let t = {
			timestamp: Date.now(),
			key: z(c) ? c : Z(b) ? b.key : "",
			locale: v || (Z(b) ? b.locale : ""),
			format: z(b) ? b : Z(b) ? b.source : "",
			message: T
		};
		t.meta = P({}, e.__meta, Dn() || {}), Wt(t);
	}
	return T;
}
function or(e) {
	L(e.list) ? e.list = e.list.map((e) => z(e) ? he(e) : e) : V(e.named) && Object.keys(e.named).forEach((t) => {
		z(e.named[t]) && (e.named[t] = he(e.named[t]));
	});
}
function sr(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = F(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !Rn(n, f) && Pn(i, t) && s(mn(X.FALLBACK_TO_TRANSLATE, {
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
		if (process.env.NODE_ENV !== "production" && k && l && (_ = window.performance.now(), v = "intlify-message-resolve-start", y = "intlify-message-resolve-end", A && A(v)), (p = c(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && k && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: `${g}:${t}`
			}), v && y && A && j && (A(y), j("intlify message resolve", v, y));
		}
		if (z(p) || J(p) || Z(p)) break;
		if (!zn(f, u)) {
			let n = In(e, t, f, a, g);
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
function cr(e, t, n, r, i, a) {
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
	process.env.NODE_ENV !== "production" && k && c && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", A && A(u));
	let f = o(r, dr(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && k && c) {
		let e = window.performance.now();
		c && l && c.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: e - l,
			groupId: `translate:${t}`
		}), u && d && A && j && (A(d), j("intlify message compilation", u, d));
	}
	return f.locale = n, f.key = t, f.source = r, f;
}
function lr(e, t, n) {
	let r = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, i = null, a, o;
	process.env.NODE_ENV !== "production" && k && r && (i = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", A && A(a));
	let s = t(n);
	if (process.env.NODE_ENV !== "production" && k && r) {
		let e = window.performance.now();
		r && i && r.emit("message-evaluation", {
			type: "message-evaluation",
			value: s,
			time: e - i,
			groupId: `translate:${t.key}`
		}), a && o && A && j && (A(o), j("intlify message evaluation", a, o));
	}
	return s;
}
function ur(...e) {
	let [t, n, r] = e, i = F();
	if (!z(t) && !N(t) && !Z(t) && !J(t)) throw Kt(Y.INVALID_ARGUMENT);
	let a = N(t) ? String(t) : (Z(t), t);
	return N(n) ? i.plural = n : z(n) ? i.default = n : H(n) && !de(n) ? i.named = n : L(n) && (i.list = n), N(r) ? i.plural = r : z(r) ? i.default = r : H(r) && P(i, r), [a, i];
}
function dr(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = fr(r), a = t.location && i && Te(i, t.location.start.offset, t.location.end.offset), o = e.__v_emitter;
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
function fr(e) {
	if (z(e)) return e;
	if (e.loc && e.loc.source) return e.loc.source;
}
function pr(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r, i) => {
			let a = o(n, r);
			if (a == null && (u || i)) {
				let [n, , i] = sr(u || e, r, t, s, c, l);
				a = n ?? o(i, r);
			}
			if (z(a) || J(a)) {
				let n = !1, i = cr(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? ir : i;
			} else if (Z(a)) return a;
			else return ir;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), N(r.plural) && (d.pluralIndex = r.plural), d;
}
var mr = "11.4.0", Q = {
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
function hr(e, ...t) {
	return je(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: gr,
		args: t
	});
}
var gr = {
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
}, _r = M("__translateVNode"), vr = M("__datetimeParts"), yr = M("__numberParts"), br = M("__enableEmitter"), xr = M("__disableEmitter"), Sr = M("__setPluralRules");
M("__intlifyMeta");
var Cr = M("__injectWithOption"), wr = M("__dispose"), $ = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
}, Tr = {
	[$.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[$.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[$.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[$.DEPRECATE_LEGACY_MODE]: "Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html",
	[$.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
	[$.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Er(e, ...t) {
	return oe(Tr[e], ...t);
}
function Dr(e) {
	if (!V(e) || J(e)) return e;
	for (let t in e) if (I(e, t)) if (!t.includes(".")) V(e[t]) && Dr(e[t]);
	else {
		let n = t.split("."), r = n.length - 1, i = e, a = !1;
		for (let e = 0; e < r; e++) {
			if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
			if (n[e] in i || (i[n[e]] = F()), !V(i[n[e]])) {
				process.env.NODE_ENV !== "production" && O(Er($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
				break;
			}
			i = i[n[e]];
		}
		if (a || (J(i) ? kt.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !J(i)) {
			let e = i[n[r]];
			V(e) && Dr(e);
		}
	}
	return e;
}
function Or(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = H(n) ? n : L(r) ? F() : { [e]: F() };
	if (L(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || F(), Oe(n, o[t])) : Oe(n, o);
		} else z(e) && Oe(JSON.parse(e), o);
	}), i == null && a) for (let e in o) I(o, e) && Dr(o[e]);
	return o;
}
function kr(e) {
	return e.type;
}
function Ar(e, t, n) {
	let r = V(t.messages) ? t.messages : F();
	"__i18nGlobal" in n && (r = Or(e.locale.value, {
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
function jr(e) {
	return l(n, null, e, 0);
}
function Mr() {
	let t = "currentInstance";
	return t in e ? e[t] : e.getCurrentInstance();
}
var Nr = "__INTLIFY_META__", Pr = () => [], Fr = () => !1, Ir = 0;
function Lr(e) {
	return ((t, n, r, i) => e(n, r, Mr() || void 0, i));
}
var Rr = () => {
	let e = Mr(), t = null;
	return e && (t = kr(e)[Nr]) ? { [Nr]: t } : null;
};
function zr(e = {}) {
	let { __root: t, __injectWithOption: n } = e, i = t === void 0, a = e.flatJson, o = k ? b : C, s = B(e.inheritLocale) ? e.inheritLocale : !0, c = o(t && s ? t.locale.value : z(e.locale) ? e.locale : gn), l = o(t && s ? t.fallbackLocale.value : z(e.fallbackLocale) || L(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(Or(c.value, e)), d = o(H(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(H(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : B(e.missingWarn) || ue(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : B(e.fallbackWarn) || ue(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : B(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, _ = R(e.missing) ? e.missing : null, v = R(e.missing) ? Lr(e.missing) : null, y = R(e.postTranslation) ? e.postTranslation : null, x = t ? t.warnHtmlMessage : B(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter, w = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {}, T = e.pluralRules || t && t.pluralRules, E;
	E = (() => {
		i && kn(null);
		let t = {
			version: mr,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: w,
			pluralRules: T,
			missing: v === null ? void 0 : v,
			missingWarn: p,
			fallbackWarn: m,
			fallbackFormat: g,
			unresolving: !0,
			postTranslation: y === null ? void 0 : y,
			warnHtmlMessage: x,
			escapeParameter: S,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value, t.__datetimeFormatters = H(E) ? E.__datetimeFormatters : void 0, t.__numberFormatters = H(E) ? E.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (t.__v_emitter = H(E) ? E.__v_emitter : void 0);
		let n = Mn(t);
		return i && kn(n), n;
	})(), Ln(E, c.value, l.value);
	function D() {
		return [
			c.value,
			l.value,
			u.value,
			d.value,
			f.value
		];
	}
	let te = r({
		get: () => c.value,
		set: (e) => {
			E.locale = e, c.value = e;
		}
	}), ne = r({
		get: () => l.value,
		set: (e) => {
			E.fallbackLocale = e, l.value = e, Ln(E, c.value, e);
		}
	}), re = r(() => u.value), ie = r(() => d.value), A = r(() => f.value);
	function j() {
		return R(y) ? y : null;
	}
	function ae(e) {
		y = e, E.postTranslation = e;
	}
	function oe() {
		return _;
	}
	function M(e) {
		e !== null && (v = Lr(e)), _ = e, E.missing = v;
	}
	function se(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let ce = (e, n, r, a, o, s) => {
		D();
		let c;
		try {
			process.env.NODE_ENV !== "production" && En(Rr()), i || (E.fallbackContext = t ? An() : void 0), c = e(E);
		} finally {
			process.env.NODE_ENV !== "production" && En(null), i || (E.fallbackContext = void 0);
		}
		if (r !== "translate exists" && N(c) && c === -1 || r === "translate exists" && !c) {
			let [e, i] = n();
			if (process.env.NODE_ENV !== "production" && t && z(e) && se(r, i) && (h && (Pn(m, e) || Fn(p, e)) && O(Er($.FALLBACK_TO_ROOT, {
				key: e,
				type: r
			})), process.env.NODE_ENV !== "production")) {
				let { __v_emitter: t } = E;
				t && h && t.emit("fallback", {
					type: r,
					key: e,
					to: "global",
					groupId: `${r}:${e}`
				});
			}
			return t && h ? a(t) : o(e);
		} else if (s(c)) return c;
		else throw hr(Q.UNEXPECTED_RETURN_TYPE);
	};
	function le(...e) {
		return ce((t) => Reflect.apply(ar, null, [t, ...e]), () => ur(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => z(e));
	}
	function de(...e) {
		let [t, n, r] = e;
		if (r && !V(r)) throw hr(Q.INVALID_ARGUMENT);
		return le(t, n, P({ resolvedMessage: !0 }, r || {}));
	}
	function fe(...e) {
		return ce((t) => Reflect.apply(Hn, null, [t, ...e]), () => Wn(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => z(e) || L(e));
	}
	function F(...e) {
		return ce((t) => Reflect.apply(Kn, null, [t, ...e]), () => Jn(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => z(e) || L(e));
	}
	function pe(e) {
		return e.map((e) => z(e) || N(e) || B(e) ? jr(String(e)) : e);
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
				r.processor = me, n = Reflect.apply(ar, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => ur(...e), "translate", (t) => t[_r](...e), (e) => [jr(e)], (e) => L(e));
	}
	function ge(...e) {
		return ce((t) => Reflect.apply(Kn, null, [t, ...e]), () => Jn(...e), "number format", (t) => t[yr](...e), Pr, (e) => z(e) || L(e));
	}
	function _e(...e) {
		return ce((t) => Reflect.apply(Hn, null, [t, ...e]), () => Wn(...e), "datetime format", (t) => t[vr](...e), Pr, (e) => z(e) || L(e));
	}
	function ve(e) {
		T = e, E.pluralRules = T;
	}
	function ye(e, t) {
		return ce(() => {
			if (!e) return !1;
			let n = z(t) ? t : c.value, r = z(t) ? [n] : Qt(E, l.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = Se(r[t]), i = E.messageResolver(n, e);
				if (i === null && (i = n[e]), J(i) || Z(i) || z(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), Fr, (e) => B(e));
	}
	function be(e) {
		let t = null, n = Qt(E, l.value, c.value);
		for (let r = 0; r < n.length; r++) {
			let i = u.value[n[r]] || {}, a = E.messageResolver(i, e);
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
			for (let e in n) I(n, e) && Dr(n[e]);
			t = n[e];
		}
		u.value[e] = t, E.messages = u.value;
	}
	function we(e, t) {
		u.value[e] = u.value[e] || {};
		let n = { [e]: t };
		if (a) for (let e in n) I(n, e) && Dr(n[e]);
		t = n[e], Oe(t, u.value[e]), E.messages = u.value;
	}
	function Te(e) {
		return d.value[e] || {};
	}
	function Ee(e, t) {
		d.value[e] = t, E.datetimeFormats = d.value, Gn(E, e, t);
	}
	function De(e, t) {
		d.value[e] = P(d.value[e] || {}, t), E.datetimeFormats = d.value, Gn(E, e, t);
	}
	function ke(e) {
		return f.value[e] || {};
	}
	function Ae(e, t) {
		f.value[e] = t, E.numberFormats = f.value, Yn(E, e, t);
	}
	function U(e, t) {
		f.value[e] = P(f.value[e] || {}, t), E.numberFormats = f.value, Yn(E, e, t);
	}
	Ir++, t && k && (ee(t.locale, (e) => {
		s && (c.value = e, E.locale = e, Ln(E, c.value, l.value));
	}), ee(t.fallbackLocale, (e) => {
		s && (l.value = e, E.fallbackLocale = e, Ln(E, c.value, l.value));
	}));
	let W = {
		id: Ir,
		locale: te,
		fallbackLocale: ne,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (c.value = t.locale.value, l.value = t.fallbackLocale.value, Ln(E, c.value, l.value));
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: re,
		get modifiers() {
			return w;
		},
		get pluralRules() {
			return T || {};
		},
		get isGlobal() {
			return i;
		},
		get missingWarn() {
			return p;
		},
		set missingWarn(e) {
			p = e, E.missingWarn = p;
		},
		get fallbackWarn() {
			return m;
		},
		set fallbackWarn(e) {
			m = e, E.fallbackWarn = m;
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
			g = e, E.fallbackFormat = g;
		},
		get warnHtmlMessage() {
			return x;
		},
		set warnHtmlMessage(e) {
			x = e, E.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return S;
		},
		set escapeParameter(e) {
			S = e, E.escapeParameter = e;
		},
		t: le,
		getLocaleMessage: Se,
		setLocaleMessage: Ce,
		mergeLocaleMessage: we,
		getPostTranslationHandler: j,
		setPostTranslationHandler: ae,
		getMissingHandler: oe,
		setMissingHandler: M,
		[Sr]: ve
	};
	return W.datetimeFormats = ie, W.numberFormats = A, W.rt = de, W.te = ye, W.tm = xe, W.d = fe, W.n = F, W.getDateTimeFormat = Te, W.setDateTimeFormat = Ee, W.mergeDateTimeFormat = De, W.getNumberFormat = ke, W.setNumberFormat = Ae, W.mergeNumberFormat = U, W[Cr] = n, W[_r] = he, W[vr] = _e, W[yr] = ge, process.env.NODE_ENV !== "production" && (W[br] = (e) => {
		E.__v_emitter = e;
	}, W[xr] = () => {
		E.__v_emitter = void 0;
	}), W;
}
var Br;
function Vr(e, t) {
	if (Br) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), Br.addTimelineEvent({
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
var Hr = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function Ur({ slots: e }, n) {
	return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((e, n) => [...e, ...n.type === t ? n.children : [n]], []) : n.reduce((t, n) => {
		let r = e[n];
		return r && (t[n] = r()), t;
	}, F());
}
function Wr() {
	return t;
}
u({
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
	}, Hr),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || Jr({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = Object.keys(n).filter((e) => e[0] !== "_"), o = F();
			e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = z(e.plural) ? +e.plural : e.plural);
			let s = Ur(t, a), c = i[_r](e.keypath, s, o), l = P(F(), r);
			return f(z(e.tag) || V(e.tag) ? e.tag : Wr(), l, c);
		};
	}
});
function Gr(e) {
	return L(e) && !z(e[0]);
}
function Kr(e, t, n, r) {
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
			return Gr(r) && (r[0].key = `${e.type}-${t}`), r;
		}) : z(s) && (c = [s]);
		let l = P(F(), a);
		return f(z(e.tag) || V(e.tag) ? e.tag : Wr(), l, c);
	};
}
u({
	name: "i18n-n",
	props: P({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, Hr),
	setup(e, t) {
		let n = e.i18n || Jr({
			useScope: e.scope,
			__useComponent: !0
		});
		return Kr(e, t, qn, (...e) => n[yr](...e));
	}
});
var qr = M("global-vue-i18n");
function Jr(e = {}) {
	let t = Mr();
	if (t == null) throw hr(Q.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw hr(Q.NOT_INSTALLED);
	let n = Yr(t), r = Zr(n), i = kr(t), a = Xr(e, i);
	if (a === "global") return Ar(r, e, i), r;
	if (a === "parent") {
		let i = Qr(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && O(Er($.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw hr(Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = P({}, e);
		a.__root = Qr(n, t) || r;
		let o = zr(a);
		i.__composerExtend && (o[wr] = i.__composerExtend(o));
		let s = null;
		if (process.env.NODE_ENV !== "production") {
			s = Ee();
			let e = o;
			e[br] && e[br](s), s.on("*", Vr);
		}
		return d() && _(() => {
			if (process.env.NODE_ENV !== "production") {
				s && s.off("*", Vr);
				let e = o;
				e[xr] && e[xr]();
			}
			let e = o[wr];
			e && (e(), delete o[wr]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = P({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = zr(n), o.__composerExtend && (s[wr] = o.__composerExtend(s)), ei(o, t, s), o.__setInstance(t, s);
	} else process.env.NODE_ENV !== "production" && a === "local" && O(Er($.DUPLICATE_USE_I18N_CALLING));
	return s;
}
function Yr(e) {
	let t = p(e.isCE ? qr : e.appContext.app.__VUE_I18N_SYMBOL__);
	if (!t) throw hr(e.isCE ? Q.NOT_INSTALLED_WITH_PROVIDE : Q.UNEXPECTED_ERROR);
	return t;
}
function Xr(e, t) {
	return de(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Zr(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function Qr(e, t, n = !1) {
	let r = null, i = t.root, a = $r(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition" && (r = t.__getInstance(a)), r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function $r(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ei(e, t, n) {
	let r = null;
	g(() => {
		if (process.env.NODE_ENV !== "production") {
			t.__VUE_I18N__ = n, r = Ee();
			let e = n;
			e[br] && e[br](r), r.on("*", Vr);
		}
	}, t), v(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && (r && r.off("*", Vr), i[xr] && i[xr](), delete t.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[wr];
		a && (a(), delete i[wr]);
	}, t);
}
if (u({
	name: "i18n-d",
	props: P({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, Hr),
	setup(e, t) {
		let n = e.i18n || Jr({
			useScope: e.scope,
			__useComponent: !0
		});
		return Kr(e, t, Un, (...e) => n[vr](...e));
	}
}), bn(Bt), Sn(fn), wn(Qt), process.env.NODE_ENV !== "production") {
	let e = me();
	e.__INTLIFY__ = !0, Ht(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function ti(e) {
	h(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), g(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var ni = [
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
], ri = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, ii = { class: "flex items-center gap-2" }, ai = ["value"], oi = ["value"], si = u({
	__name: "LocaleSwitcher",
	setup(e) {
		let n = D(), i = te(), a = r(() => n.params.locale || "en"), c = (e) => {
			let t = n.path.replace(/^\/[^/]+/, `/${e}`);
			i.push({
				path: t,
				query: n.query,
				hash: n.hash
			});
		};
		return (e, n) => (y(), o("div", ii, [s("select", {
			value: a.value,
			onChange: n[0] ||= (e) => c(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(y(!0), o(t, null, x(T(ni), (e) => (y(), o("option", {
			key: e,
			value: e
		}, w(T(ri)(e)), 9, oi))), 128))], 40, ai)]));
	}
}), ci = ["aria-label", "title"], li = u({
	__name: "ThemeToggle",
	setup(e) {
		let { t } = Jr(), n = b("auto");
		function r() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function i(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		g(() => {
			let e = r();
			n.value = e, i(e);
		});
		let a = null;
		ee(n, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				a = () => i("auto"), e.addEventListener("change", a);
			} else a &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", a), null);
		}, { immediate: !0 }), v(() => {
			a && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", a);
		});
		function s() {
			let e = n.value === "light" ? "dark" : n.value === "dark" ? "auto" : "light";
			n.value = e, i(e), window.localStorage.setItem("theme", e);
		}
		let c = () => n.value === "auto" ? t("themeToggle.labelAuto") : t("themeToggle.labelOther", { mode: n.value });
		return (e, r) => (y(), o("button", {
			type: "button",
			onClick: s,
			"aria-label": c(),
			title: c(),
			class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
		}, w(n.value === "auto" ? T(t)("themeToggle.auto") : n.value === "dark" ? T(t)("themeToggle.dark") : T(t)("themeToggle.light")), 9, ci));
	}
}), ui = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, di = { class: "container flex h-16 items-center justify-between" }, fi = { class: "flex items-center gap-8" }, pi = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, mi = ["href", "onClick"], hi = ["href", "onClick"], gi = { class: "relative" }, _i = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, vi = { class: "flex items-center gap-4" }, yi = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, bi = { class: "sr-only" }, xi = u({
	__name: "Header",
	setup(e) {
		ti("Header");
		let { t: n } = Jr(), u = b(!1), d = D(), f = r(() => d.params.locale || "en"), p = r(() => [
			{
				to: `/${f.value}/products`,
				label: n("header.products")
			},
			{
				to: `/${f.value}/pricing`,
				label: n("header.pricing")
			},
			{
				to: `/${f.value}/team`,
				label: n("header.team")
			},
			{
				to: `/${f.value}/blog`,
				label: n("header.blog")
			},
			{
				to: `/${f.value}/careers`,
				label: n("header.careers")
			},
			{
				to: `/${f.value}/faq`,
				label: n("header.faq")
			},
			{
				to: `/${f.value}/contact`,
				label: n("header.contact")
			},
			{
				to: `/${f.value}/settings`,
				label: n("header.settings")
			}
		]);
		return (e, r) => {
			let d = S("router-link");
			return y(), o("header", ui, [s("nav", di, [s("div", fi, [l(d, {
				to: `/${f.value}`,
				class: "text-lg font-bold tracking-tight text-primary no-underline"
			}, {
				default: E(() => [c(w(T(n)("shared.appName")), 1)]),
				_: 1
			}, 8, ["to"]), s("div", pi, [
				l(d, {
					to: `/${f.value}`,
					custom: ""
				}, {
					default: E(({ href: e, navigate: t, isExactActive: r }) => [s("a", {
						href: e,
						class: m(["nav-link", { "router-link-active": r }]),
						onClick: t
					}, w(T(n)("header.home")), 11, mi)]),
					_: 1
				}, 8, ["to"]),
				l(d, {
					to: `/${f.value}/about`,
					custom: ""
				}, {
					default: E(({ href: e, navigate: t, isActive: r }) => [s("a", {
						href: e,
						class: m(["nav-link", { "router-link-active": r }]),
						onClick: t
					}, w(T(n)("header.methodology")), 11, hi)]),
					_: 1
				}, 8, ["to"]),
				s("div", gi, [s("button", {
					type: "button",
					class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
					onMouseenter: r[0] ||= (e) => u.value = !0,
					onMouseleave: r[1] ||= (e) => u.value = !1,
					onClick: r[2] ||= (e) => u.value = !u.value
				}, [c(w(T(n)("header.mockPages")) + " ", 1), l(T(ne), {
					size: 14,
					class: m(["transition-transform", u.value ? "rotate-180" : ""])
				}, null, 8, ["class"])], 32), u.value ? (y(), o("div", {
					key: 0,
					class: "absolute left-0 top-full pt-2 w-48",
					onMouseenter: r[4] ||= (e) => u.value = !0,
					onMouseleave: r[5] ||= (e) => u.value = !1
				}, [s("div", _i, [(y(!0), o(t, null, x(p.value, (e) => (y(), i(d, {
					key: e.to,
					to: e.to,
					class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
					onClick: r[3] ||= (e) => u.value = !1
				}, {
					default: E(() => [c(w(e.label), 1)]),
					_: 2
				}, 1032, ["to"]))), 128))])], 32)) : a("v-if", !0)])
			])]), s("div", vi, [
				s("a", yi, [s("span", bi, w(T(n)("shared.goToGithub")), 1), r[6] ||= s("svg", {
					viewBox: "0 0 16 16",
					"aria-hidden": "true",
					width: "20",
					height: "20"
				}, [s("path", {
					fill: "currentColor",
					d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				})], -1)]),
				l(si),
				l(li)
			])])]);
		};
	}
});
export { xi as default };

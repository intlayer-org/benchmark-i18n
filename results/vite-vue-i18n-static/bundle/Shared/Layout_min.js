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
var k = typeof window < "u", A, ae;
if (process.env.NODE_ENV !== "production") {
	let e = k && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (A = (t) => {
		e.mark(t);
	}, ae = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var oe = /\{([0-9a-zA-Z]+)\}/g;
function se(e, ...t) {
	return t.length === 1 && B(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(oe, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var j = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ce = (e, t, n) => le({
	l: e,
	k: t,
	s: n
}), le = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), M = (e) => typeof e == "number" && isFinite(e), ue = (e) => Se(e) === "[object Date]", de = (e) => Se(e) === "[object RegExp]", fe = (e) => V(e) && Object.keys(e).length === 0, N = Object.assign, pe = Object.create, P = (e = null) => pe(e), me, he = () => me ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : P();
function ge(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function _e(e) {
	return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ve(e) {
	return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${_e(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${_e(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && O("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t) => {
		e = e.replace(t, "$1javascript&#58;");
	}), e;
}
var ye = Object.prototype.hasOwnProperty;
function F(e, t) {
	return ye.call(e, t);
}
var I = Array.isArray, L = (e) => typeof e == "function", R = (e) => typeof e == "string", z = (e) => typeof e == "boolean", B = (e) => typeof e == "object" && !!e, be = (e) => B(e) && L(e.then) && L(e.catch), xe = Object.prototype.toString, Se = (e) => xe.call(e), V = (e) => Se(e) === "[object Object]", Ce = (e) => e == null ? "" : I(e) || V(e) && e.toString === xe ? JSON.stringify(e, null, 2) : String(e);
function we(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var Te = 2;
function Ee(e, t = 0, n = e.length) {
	let r = e.split(/\r?\n/), i = 0, a = [];
	for (let e = 0; e < r.length; e++) if (i += r[e].length + 1, i >= t) {
		for (let o = e - Te; o <= e + Te || n > i; o++) {
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
function De() {
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
var Oe = (e) => !B(e) || I(e);
function ke(e, t) {
	if (Oe(e) || Oe(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (B(e[r]) && !B(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : P()), Oe(t[r]) || Oe(e[r]) ? t[r] = e[r] : n.push({
				src: e[r],
				des: t[r]
			}));
		});
	}
}
function Ae(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function je(e, t, n) {
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
}, U = {
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
function Me(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = process.env.NODE_ENV === "production" ? e : se((i || U)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function Ne(e) {
	throw e;
}
var Pe = /<\/?[\w\s="/.':;#-\/]+>/, Fe = (e) => Pe.test(e), W = " ", Ie = "\r", G = "\n", Le = "\u2028", Re = "\u2029";
function ze(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Ie && t[e + 1] === G, s = (e) => t[e] === G, c = (e) => t[e] === Re, l = (e) => t[e] === Le, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? G : t[e], g = () => h(n), _ = () => h(n + a);
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
var K = void 0, Be = "'", Ve = "tokenizer";
function He(e, t = {}) {
	let n = t.location !== !1, r = ze(e), i = () => r.index(), a = () => Ae(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
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
		t.column += r, t.offset += r, u && u(Me(e, n ? je(a.startLoc, t) : null, {
			domain: Ve,
			args: i
		}));
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = je(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
	}
	let p = (e) => f(e, 13);
	function m(e, t) {
		return e.currentChar() === t ? (e.next(), t) : (d(H.EXPECTED_TOKEN, a(), 0, t), "");
	}
	function h(e) {
		let t = "";
		for (; e.currentPeek() === W || e.currentPeek() === G;) t += e.currentPeek(), e.peek();
		return t;
	}
	function g(e) {
		let t = h(e);
		return e.skipToPeek(), t;
	}
	function _(e) {
		if (e === K) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === K) return !1;
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
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === W || !t ? !1 : t === G ? (e.peek(), r()) : E(e, !1);
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
			return i === "{" || i === "@" || !i ? t : i === "|" ? !(r === W || r === G) : i === W ? (e.peek(), n(!0, W)) : i === G ? (e.peek(), n(!0, G)) : !0;
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function D(e, t) {
		let n = e.currentChar();
		return n === K ? K : t(n) ? (e.next(), n) : null;
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
	function ae(e) {
		return D(e, A);
	}
	function oe(e) {
		let t = "", n = "";
		for (; t = k(e);) n += t;
		return n;
	}
	function se(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === W || n === G) if (E(e)) t += n, e.next();
			else if (ee(e)) break;
			else t += n, e.next();
			else t += n, e.next();
		}
		return t;
	}
	function j(e) {
		g(e);
		let t = "", n = "";
		for (; t = re(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== K && r !== W && r !== G && r !== "　") {
			let t = N(e);
			return d(H.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === K && d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function ce(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${oe(e)}`) : t += oe(e), e.currentChar() === K && d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function le(e) {
		return e !== Be && e !== G;
	}
	function M(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = D(e, le);) t === "\\" ? n += ue(e) : n += t;
		let r = e.currentChar();
		return r === G || r === K ? (d(H.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === G && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function ue(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return de(e, t, 4);
			case "U": return de(e, t, 6);
			default: return d(H.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function de(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = ae(e);
			if (!n) {
				d(H.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function fe(e) {
		return e !== "{" && e !== "}" && e !== W && e !== G;
	}
	function N(e) {
		g(e);
		let t = "", n = "";
		for (; t = D(e, fe);) n += t;
		return n;
	}
	function pe(e) {
		let t = "", n = "";
		for (; t = ne(e);) n += t;
		return n;
	}
	function P(e) {
		let t = (n) => {
			let r = e.currentChar();
			return r === "{" || r === "@" || r === "|" || r === "(" || r === ")" || !r || r === W ? n : (n += r, e.next(), t(n));
		};
		return t("");
	}
	function me(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function he(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(H.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(H.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), n = ge(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (ee(e)) return t.braceNest > 0 && d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, me(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, _e(e, t);
				if (r = y(e, t)) return n = f(t, 4, j(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, ce(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 6, M(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, N(e)), d(H.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function ge(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch ((n === 7 || n === 8 || n === 11 || n === 9) && (i === G || i === W) && d(H.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return ee(e) ? (r = f(t, 1, me(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), ge(e, t)) : C(e, t) ? (g(e), f(t, 11, pe(e))) : T(e, t) ? (g(e), i === "{" ? he(e, t) || r : f(t, 10, P(e))) : (n === 7 && d(H.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, _e(e, t));
		}
	}
	function _e(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return he(e, t) || p(t);
		if (t.inLinked) return ge(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return he(e, t) || p(t);
			case "}": return d(H.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return ge(e, t) || p(t);
			default:
				if (ee(e)) return n = f(t, 1, me(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (E(e)) return f(t, 0, se(e));
				break;
		}
		return n;
	}
	function ve() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === K ? f(c, 13) : _e(r, c);
	}
	return {
		nextToken: ve,
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
		s.offset += a, s.column += a, n && n(Me(r, t ? je(i, s) : null, {
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
		return t.type === 11 ? (t.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, q(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, H.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
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
		switch (o.type !== 9 && r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = l(e, o.value || "");
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
					i.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, H.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(l(e, i.value || ""));
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
		let o = He(n, N({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, H.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
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
			e.static = we(t);
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
		default: if (process.env.NODE_ENV !== "production") throw Me(H.UNHANDLED_MINIFIER_NODE_TYPE, null, {
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
		default: if (process.env.NODE_ENV !== "production") throw Me(H.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: rt,
			args: [t.type]
		});
	}
}
var ut = (e, t = {}) => {
	let n = R(t.mode) ? t.mode : "normal", r = R(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, o = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = it(e, {
		mode: n,
		filename: r,
		sourceMap: i,
		breakLineCode: a,
		needIndent: o
	});
	c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), s.length > 0 && (c.push(`const { ${we(s.map((e) => `${e}: _${e}`), ", ")} } = ctx`), c.newline()), c.push("return "), lt(c, e), c.deindent(o), c.push("}"), delete e.helpers;
	let { code: l, map: u } = c.context();
	return {
		ast: e,
		code: l,
		map: u ? u.toJSON() : void 0
	};
};
function dt(e, t = {}) {
	let n = N({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = Je(n).parse(e);
	return r ? (a && $e(o), i && nt(o), {
		ast: o,
		code: ""
	}) : (Qe(o, n), ut(o, n));
}
function J(e) {
	return B(e) && xt(e) === 0 && (F(e, "b") || F(e, "body"));
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
		if (F(e, r) && e[r] != null) return e[r];
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
			if (F(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (F(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw At(n);
		}
		case 5: {
			let r = t;
			if (F(r, "i") && M(r.i)) return e.interpolate(e.list(r.i));
			if (F(r, "index") && M(r.index)) return e.interpolate(e.list(r.index));
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
	t && Fe(e) && O(se(Ft, { source: e }));
}
var Lt = (e) => e, Rt = P();
function zt(e, t = {}) {
	let n = !1, r = t.onError || Ne;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...dt(e, t),
		detectError: n
	};
}
function Bt(e, t) {
	if (R(e)) {
		let n = z(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
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
	return Me(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: qt });
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
	if (R(e)) return e;
	if (L(e)) {
		if (e.resolvedOnce && Yt != null) return Yt;
		if (e.constructor.name === "Function") {
			let t = e();
			if (be(t)) throw Kt(Y.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return Yt = t;
		} else throw Kt(Y.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw Kt(Y.NOT_SUPPORT_LOCALE_TYPE);
}
function Zt(e, t, n) {
	return [...new Set([n, ...I(t) ? t : B(t) ? Object.keys(t) : R(t) ? [t] : [n]])];
}
function Qt(e, t, n) {
	let r = R(n) ? n : gn, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; I(e);) e = $t(a, e, t);
		let o = I(t) || !V(t) ? t : t.default ? t.default : null;
		e = R(o) ? [o] : o, I(e) && $t(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function $t(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && z(r); i++) {
		let a = t[i];
		R(a) && (r = en(e, t[i], n));
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
		e.push(i), (I(n) || V(n)) && n[i] && (r = n[i]);
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
	return B(e) ? e[t] : null;
}
function fn(e, t) {
	if (!B(e)) return null;
	let n = un.get(t);
	if (n || (n = ln(t), n && un.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (kt.includes(e) && J(i) || !B(i) || !F(i, e)) return null;
		let t = i[e];
		if (t === void 0 || L(i)) return null;
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
	return se(pn[e], ...t);
}
var hn = "11.4.0", gn = "en-US", _n = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function vn() {
	return {
		upper: (e, t) => t === "text" && R(e) ? e.toUpperCase() : t === "vnode" && B(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && R(e) ? e.toLowerCase() : t === "vnode" && B(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && R(e) ? _n(e) : t === "vnode" && B(e) && "__v_isVNode" in e ? _n(e.children) : e
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
	let t = L(e.onWarn) ? e.onWarn : O, n = R(e.version) ? e.version : hn, r = R(e.locale) || L(e.locale) ? e.locale : gn, i = L(r) ? gn : r, a = I(e.fallbackLocale) || V(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = V(e.messages) ? e.messages : Nn(i), s = V(e.datetimeFormats) ? e.datetimeFormats : Nn(i), c = V(e.numberFormats) ? e.numberFormats : Nn(i), l = N(P(), e.modifiers, vn()), u = e.pluralRules || P(), d = L(e.missing) ? e.missing : null, f = z(e.missingWarn) || de(e.missingWarn) ? e.missingWarn : !0, p = z(e.fallbackWarn) || de(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = L(e.postTranslation) ? e.postTranslation : null, _ = V(e.processor) ? e.processor : null, v = z(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, b = L(e.messageCompiler) ? e.messageCompiler : yn;
	process.env.NODE_ENV !== "production" && L(e.messageCompiler) && ie(mn(X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let x = L(e.messageResolver) ? e.messageResolver : xn || dn, S = L(e.localeFallbacker) ? e.localeFallbacker : Cn || Zt, C = B(e.fallbackContext) ? e.fallbackContext : void 0, w = e, T = B(w.__datetimeFormatters) ? w.__datetimeFormatters : /* @__PURE__ */ new Map(), ee = B(w.__numberFormatters) ? w.__numberFormatters : /* @__PURE__ */ new Map(), E = B(w.__meta) ? w.__meta : {};
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
var Nn = (e) => ({ [e]: P() });
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
		return R(r) ? r : t;
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
	if (!R(t[0]) && !ue(t[0]) && !M(t[0])) return process.env.NODE_ENV !== "production" && a(mn(X.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Wn(...t), f = z(u.missingWarn) ? u.missingWarn : e.missingWarn, p = z(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Jt(e, u), g = o(e, i, h);
	if (!R(c) || c === "") return new Intl.DateTimeFormat(h.replace(/!/g, ""), d).format(l);
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
		if (_ = n[v] || {}, y = _[c], V(y)) break;
		In(e, c, v, f, S), b = x;
	}
	if (!V(y) || !R(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	fe(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.DateTimeFormat(v, N({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
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
	let [t, n, r, i] = e, a = P(), o = P(), s;
	if (R(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw Kt(Y.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw Kt(Y.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (ue(t)) {
		if (isNaN(t.getTime())) throw Kt(Y.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (M(t)) s = t;
	else throw Kt(Y.INVALID_ARGUMENT);
	return R(n) ? a.key = n : V(n) && Object.keys(n).forEach((e) => {
		Un.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), R(r) ? a.locale = r : V(r) && (o = r), V(i) && (o = i), [
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
	if (!M(t[0])) return process.env.NODE_ENV !== "production" && a(mn(X.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Jn(...t), f = z(u.missingWarn) ? u.missingWarn : e.missingWarn, p = z(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Jt(e, u), g = o(e, i, h);
	if (!R(c) || c === "") return new Intl.NumberFormat(h.replace(/!/g, ""), d).format(l);
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
		if (_ = n[v] || {}, y = _[c], V(y)) break;
		In(e, c, v, f, S), b = x;
	}
	if (!V(y) || !R(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	fe(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.NumberFormat(v, N({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
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
	let [t, n, r, i] = e, a = P(), o = P();
	if (!M(t)) throw Kt(Y.INVALID_ARGUMENT);
	let s = t;
	return R(n) ? a.key = n : V(n) && Object.keys(n).forEach((e) => {
		qn.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), R(r) ? a.locale = r : V(r) && (o = r), V(i) && (o = i), [
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
var Xn = (e) => e, Zn = (e) => "", Qn = "text", $n = (e) => e.length === 0 ? "" : we(e), er = Ce;
function tr(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function nr(e) {
	let t = M(e.pluralIndex) ? e.pluralIndex : -1;
	return M(e.named?.count) ? e.named.count : M(e.named?.n) ? e.named.n : t;
}
function rr(e = {}) {
	let t = e.locale, n = nr(e), r = R(t) && L(e.pluralRules?.[t]) ? e.pluralRules[t] : tr, i = r === tr ? void 0 : tr, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || P();
	M(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
	let l = (e) => c[e];
	function u(t, n) {
		return (L(e.messages) ? e.messages(t, !!n) : B(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : Zn);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : Xn, f = L(e.processor?.normalize) ? e.processor.normalize : $n, p = L(e.processor?.interpolate) ? e.processor.interpolate : er, m = {
		list: s,
		named: l,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? B(n) ? (a = n.modifier || a, i = n.type || i) : R(n) && (a = n || a) : t.length === 2 && (R(n) && (a = n || a), R(r) && (i = r || i));
			let o = u(e, !0)(m), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && I(s) && a ? s[0] : s;
			return a ? d(a)(c, i) : c;
		},
		message: u,
		type: R(e.processor?.type) ? e.processor.type : Qn,
		interpolate: p,
		normalize: f,
		values: N(P(), o, c)
	};
	return m;
}
var ir = () => "", Z = (e) => L(e);
function ar(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = ur(...t), u = z(l.missingWarn) ? l.missingWarn : e.missingWarn, d = z(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = z(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = R(l.default) || z(l.default) ? z(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (R(m) || L(m)), g = Jt(e, l);
	f && or(l);
	let [_, v, y] = p ? [
		c,
		g,
		s[g] || P()
	] : sr(e, c, g, o, d, u), b = _, x = c;
	if (!p && !(R(b) || J(b) || Z(b)) && h && (b = m, x = b), !p && (!(R(b) || J(b) || Z(b)) || !R(v))) return i ? -1 : c;
	if (process.env.NODE_ENV !== "production" && R(b) && e.messageCompiler == null) return O(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
	let S = !1, C = Z(b) ? b : cr(e, c, v, b, x, () => {
		S = !0;
	});
	if (S) return b;
	let w = lr(e, C, rr(pr(e, v, y, l))), T = r ? r(w, c) : w;
	if (f && R(T) && (T = ve(T)), process.env.NODE_ENV !== "production") {
		let t = {
			timestamp: Date.now(),
			key: R(c) ? c : Z(b) ? b.key : "",
			locale: v || (Z(b) ? b.locale : ""),
			format: R(b) ? b : Z(b) ? b.source : "",
			message: T
		};
		t.meta = N({}, e.__meta, Dn() || {}), Wt(t);
	}
	return T;
}
function or(e) {
	I(e.list) ? e.list = e.list.map((e) => R(e) ? ge(e) : e) : B(e.named) && Object.keys(e.named).forEach((t) => {
		R(e.named[t]) && (e.named[t] = ge(e.named[t]));
	});
}
function sr(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = P(), f, p = null, m = n, h = null, g = "translate";
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
		}), d = o[f] || P();
		let _ = null, v, y;
		if (process.env.NODE_ENV !== "production" && k && l && (_ = window.performance.now(), v = "intlify-message-resolve-start", y = "intlify-message-resolve-end", A && A(v)), (p = c(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && k && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: `${g}:${t}`
			}), v && y && A && ae && (A(y), ae("intlify message resolve", v, y));
		}
		if (R(p) || J(p) || Z(p)) break;
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
		}), u && d && A && ae && (A(d), ae("intlify message compilation", u, d));
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
		}), a && o && A && ae && (A(o), ae("intlify message evaluation", a, o));
	}
	return s;
}
function ur(...e) {
	let [t, n, r] = e, i = P();
	if (!R(t) && !M(t) && !Z(t) && !J(t)) throw Kt(Y.INVALID_ARGUMENT);
	let a = M(t) ? String(t) : (Z(t), t);
	return M(n) ? i.plural = n : R(n) ? i.default = n : V(n) && !fe(n) ? i.named = n : I(n) && (i.list = n), M(r) ? i.plural = r : R(r) ? i.default = r : V(r) && N(i, r), [a, i];
}
function dr(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = fr(r), a = t.location && i && Ee(i, t.location.start.offset, t.location.end.offset), o = e.__v_emitter;
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
		onCacheKey: (e) => ce(t, n, e)
	};
}
function fr(e) {
	if (R(e)) return e;
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
			if (R(a) || J(a)) {
				let n = !1, i = cr(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? ir : i;
			} else if (Z(a)) return a;
			else return ir;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), M(r.plural) && (d.pluralIndex = r.plural), d;
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
	return Me(e, null, process.env.NODE_ENV === "production" ? void 0 : {
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
}, _r = j("__translateVNode"), vr = j("__datetimeParts"), yr = j("__numberParts"), br = j("__enableEmitter"), xr = j("__disableEmitter"), Sr = j("__setPluralRules");
j("__intlifyMeta");
var Cr = j("__injectWithOption"), wr = j("__dispose"), $ = {
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
	return se(Tr[e], ...t);
}
function Dr(e) {
	if (!B(e) || J(e)) return e;
	for (let t in e) if (F(e, t)) if (!t.includes(".")) B(e[t]) && Dr(e[t]);
	else {
		let n = t.split("."), r = n.length - 1, i = e, a = !1;
		for (let e = 0; e < r; e++) {
			if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
			if (n[e] in i || (i[n[e]] = P()), !B(i[n[e]])) {
				process.env.NODE_ENV !== "production" && O(Er($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
				break;
			}
			i = i[n[e]];
		}
		if (a || (J(i) ? kt.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !J(i)) {
			let e = i[n[r]];
			B(e) && Dr(e);
		}
	}
	return e;
}
function Or(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = V(n) ? n : I(r) ? P() : { [e]: P() };
	if (I(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || P(), ke(n, o[t])) : ke(n, o);
		} else R(e) && ke(JSON.parse(e), o);
	}), i == null && a) for (let e in o) F(o, e) && Dr(o[e]);
	return o;
}
function kr(e) {
	return e.type;
}
function Ar(e, t, n) {
	let r = B(t.messages) ? t.messages : P();
	"__i18nGlobal" in n && (r = Or(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), B(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (B(t.numberFormats)) {
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
	let { __root: t, __injectWithOption: n } = e, i = t === void 0, a = e.flatJson, o = k ? b : C, s = z(e.inheritLocale) ? e.inheritLocale : !0, c = o(t && s ? t.locale.value : R(e.locale) ? e.locale : gn), l = o(t && s ? t.fallbackLocale.value : R(e.fallbackLocale) || I(e.fallbackLocale) || V(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(Or(c.value, e)), d = o(V(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(V(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : z(e.missingWarn) || de(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : z(e.fallbackWarn) || de(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : z(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, _ = L(e.missing) ? e.missing : null, v = L(e.missing) ? Lr(e.missing) : null, y = L(e.postTranslation) ? e.postTranslation : null, x = t ? t.warnHtmlMessage : z(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter, w = t ? t.modifiers : V(e.modifiers) ? e.modifiers : {}, T = e.pluralRules || t && t.pluralRules, E;
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
		t.datetimeFormats = d.value, t.numberFormats = f.value, t.__datetimeFormatters = V(E) ? E.__datetimeFormatters : void 0, t.__numberFormatters = V(E) ? E.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (t.__v_emitter = V(E) ? E.__v_emitter : void 0);
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
	function ae() {
		return L(y) ? y : null;
	}
	function oe(e) {
		y = e, E.postTranslation = e;
	}
	function se() {
		return _;
	}
	function j(e) {
		e !== null && (v = Lr(e)), _ = e, E.missing = v;
	}
	function ce(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let le = (e, n, r, a, o, s) => {
		D();
		let c;
		try {
			process.env.NODE_ENV !== "production" && En(Rr()), i || (E.fallbackContext = t ? An() : void 0), c = e(E);
		} finally {
			process.env.NODE_ENV !== "production" && En(null), i || (E.fallbackContext = void 0);
		}
		if (r !== "translate exists" && M(c) && c === -1 || r === "translate exists" && !c) {
			let [e, i] = n();
			if (process.env.NODE_ENV !== "production" && t && R(e) && ce(r, i) && (h && (Pn(m, e) || Fn(p, e)) && O(Er($.FALLBACK_TO_ROOT, {
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
	function ue(...e) {
		return le((t) => Reflect.apply(ar, null, [t, ...e]), () => ur(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => R(e));
	}
	function fe(...e) {
		let [t, n, r] = e;
		if (r && !B(r)) throw hr(Q.INVALID_ARGUMENT);
		return ue(t, n, N({ resolvedMessage: !0 }, r || {}));
	}
	function pe(...e) {
		return le((t) => Reflect.apply(Hn, null, [t, ...e]), () => Wn(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => R(e) || I(e));
	}
	function P(...e) {
		return le((t) => Reflect.apply(Kn, null, [t, ...e]), () => Jn(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => R(e) || I(e));
	}
	function me(e) {
		return e.map((e) => R(e) || M(e) || z(e) ? jr(String(e)) : e);
	}
	let he = {
		normalize: me,
		interpolate: (e) => e,
		type: "vnode"
	};
	function ge(...e) {
		return le((t) => {
			let n, r = t;
			try {
				r.processor = he, n = Reflect.apply(ar, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => ur(...e), "translate", (t) => t[_r](...e), (e) => [jr(e)], (e) => I(e));
	}
	function _e(...e) {
		return le((t) => Reflect.apply(Kn, null, [t, ...e]), () => Jn(...e), "number format", (t) => t[yr](...e), Pr, (e) => R(e) || I(e));
	}
	function ve(...e) {
		return le((t) => Reflect.apply(Hn, null, [t, ...e]), () => Wn(...e), "datetime format", (t) => t[vr](...e), Pr, (e) => R(e) || I(e));
	}
	function ye(e) {
		T = e, E.pluralRules = T;
	}
	function be(e, t) {
		return le(() => {
			if (!e) return !1;
			let n = R(t) ? t : c.value, r = R(t) ? [n] : Qt(E, l.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = Ce(r[t]), i = E.messageResolver(n, e);
				if (i === null && (i = n[e]), J(i) || Z(i) || R(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), Fr, (e) => z(e));
	}
	function xe(e) {
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
	function Se(e) {
		return xe(e) ?? (t && t.tm(e) || {});
	}
	function Ce(e) {
		return u.value[e] || {};
	}
	function we(e, t) {
		if (a) {
			let n = { [e]: t };
			for (let e in n) F(n, e) && Dr(n[e]);
			t = n[e];
		}
		u.value[e] = t, E.messages = u.value;
	}
	function Te(e, t) {
		u.value[e] = u.value[e] || {};
		let n = { [e]: t };
		if (a) for (let e in n) F(n, e) && Dr(n[e]);
		t = n[e], ke(t, u.value[e]), E.messages = u.value;
	}
	function Ee(e) {
		return d.value[e] || {};
	}
	function De(e, t) {
		d.value[e] = t, E.datetimeFormats = d.value, Gn(E, e, t);
	}
	function Oe(e, t) {
		d.value[e] = N(d.value[e] || {}, t), E.datetimeFormats = d.value, Gn(E, e, t);
	}
	function Ae(e) {
		return f.value[e] || {};
	}
	function je(e, t) {
		f.value[e] = t, E.numberFormats = f.value, Yn(E, e, t);
	}
	function H(e, t) {
		f.value[e] = N(f.value[e] || {}, t), E.numberFormats = f.value, Yn(E, e, t);
	}
	Ir++, t && k && (ee(t.locale, (e) => {
		s && (c.value = e, E.locale = e, Ln(E, c.value, l.value));
	}), ee(t.fallbackLocale, (e) => {
		s && (l.value = e, E.fallbackLocale = e, Ln(E, c.value, l.value));
	}));
	let U = {
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
		t: ue,
		getLocaleMessage: Ce,
		setLocaleMessage: we,
		mergeLocaleMessage: Te,
		getPostTranslationHandler: ae,
		setPostTranslationHandler: oe,
		getMissingHandler: se,
		setMissingHandler: j,
		[Sr]: ye
	};
	return U.datetimeFormats = ie, U.numberFormats = A, U.rt = fe, U.te = be, U.tm = Se, U.d = pe, U.n = P, U.getDateTimeFormat = Ee, U.setDateTimeFormat = De, U.mergeDateTimeFormat = Oe, U.getNumberFormat = Ae, U.setNumberFormat = je, U.mergeNumberFormat = H, U[Cr] = n, U[_r] = ge, U[vr] = ve, U[yr] = _e, process.env.NODE_ENV !== "production" && (U[br] = (e) => {
		E.__v_emitter = e;
	}, U[xr] = () => {
		E.__v_emitter = void 0;
	}), U;
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
	}, P());
}
function Wr() {
	return t;
}
u({
	name: "i18n-t",
	props: N({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => M(e) || !isNaN(e)
		}
	}, Hr),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || Jr({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = Object.keys(n).filter((e) => e[0] !== "_"), o = P();
			e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = R(e.plural) ? +e.plural : e.plural);
			let s = Ur(t, a), c = i[_r](e.keypath, s, o), l = N(P(), r);
			return f(R(e.tag) || B(e.tag) ? e.tag : Wr(), l, c);
		};
	}
});
function Gr(e) {
	return I(e) && !R(e[0]);
}
function Kr(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = { part: !0 }, o = P();
		e.locale && (t.locale = e.locale), R(e.format) ? t.key = e.format : B(e.format) && (R(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format).reduce((t, r) => n.includes(r) ? N(P(), t, { [r]: e.format[r] }) : t, P()));
		let s = r(e.value, t, o), c = [t.key];
		I(s) ? c = s.map((e, t) => {
			let n = i[e.type], r = n ? n({
				[e.type]: e.value,
				index: t,
				parts: s
			}) : [e.value];
			return Gr(r) && (r[0].key = `${e.type}-${t}`), r;
		}) : R(s) && (c = [s]);
		let l = N(P(), a);
		return f(R(e.tag) || B(e.tag) ? e.tag : Wr(), l, c);
	};
}
u({
	name: "i18n-n",
	props: N({
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
var qr = j("global-vue-i18n");
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
		let i = n, a = N({}, e);
		a.__root = Qr(n, t) || r;
		let o = zr(a);
		i.__composerExtend && (o[wr] = i.__composerExtend(o));
		let s = null;
		if (process.env.NODE_ENV !== "production") {
			s = De();
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
		let n = N({}, e);
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
	return fe(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
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
			t.__VUE_I18N__ = n, r = De();
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
	props: N({
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
	let e = he();
	e.__INTLIFY__ = !0, Ht(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function ti() {
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
function ni(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var ri = { class: "mt-20 border-t border-border bg-card" }, ii = { class: "container py-8" }, ai = { class: "grid gap-8 md:grid-cols-3" }, oi = { class: "mb-2 text-sm font-semibold text-foreground" }, si = { class: "text-sm text-muted-foreground" }, ci = { class: "mb-2 text-sm font-semibold text-foreground" }, li = { class: "space-y-1" }, ui = ["href"], di = { class: "mb-2 text-sm font-semibold text-foreground" }, fi = { class: "text-sm text-muted-foreground" }, pi = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" }, mi = u({
	__name: "Footer",
	setup(e) {
		let { t: n } = Jr(), a = D(), l = r(() => a.params.locale || "en"), u = r(() => [
			{
				label: n("footer.github"),
				href: "https://github.com/intlayer-org/benchmark-i18n",
				isInternal: !1
			},
			{
				label: n("footer.methodology"),
				to: `/${l.value}/about`,
				isInternal: !0
			},
			{
				label: n("footer.contributing"),
				to: `/${l.value}/contact`,
				isInternal: !0
			}
		]);
		return (e, r) => {
			let a = S("router-link");
			return y(), o("footer", ri, [s("div", ii, [s("div", ai, [
				s("div", null, [s("h3", oi, w(T(n)("footer.title")), 1), s("p", si, w(T(n)("footer.description")), 1)]),
				s("div", null, [s("h3", ci, w(T(n)("footer.resources")), 1), s("ul", li, [(y(!0), o(t, null, x(u.value, (e) => (y(), o("li", { key: e.label }, [e.isInternal ? (y(), i(a, {
					key: 0,
					to: e.to,
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, {
					default: E(() => [c(w(e.label), 1)]),
					_: 2
				}, 1032, ["to"])) : (y(), o("a", {
					key: 1,
					href: e.href,
					target: "_blank",
					rel: "noreferrer",
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, w(e.label), 9, ui))]))), 128))])]),
				s("div", null, [s("h3", di, w(T(n)("footer.contact")), 1), s("p", fi, w(T(n)("shared.contactEmail")), 1)])
			]), s("div", pi, w(T(n)("footer.builtWith")), 1)])]);
		};
	}
});
function hi(e) {
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
var gi = [
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
], _i = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, vi = { class: "flex items-center gap-2" }, yi = ["value"], bi = ["value"], xi = u({
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
		return (e, n) => (y(), o("div", vi, [s("select", {
			value: a.value,
			onChange: n[0] ||= (e) => c(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(y(!0), o(t, null, x(T(gi), (e) => (y(), o("option", {
			key: e,
			value: e
		}, w(T(_i)(e)), 9, bi))), 128))], 40, yi)]));
	}
}), Si = ["aria-label", "title"], Ci = u({
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
		}, w(n.value === "auto" ? T(t)("themeToggle.auto") : n.value === "dark" ? T(t)("themeToggle.dark") : T(t)("themeToggle.light")), 9, Si));
	}
}), wi = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, Ti = { class: "container flex h-16 items-center justify-between" }, Ei = { class: "flex items-center gap-8" }, Di = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, Oi = ["href", "onClick"], ki = ["href", "onClick"], Ai = { class: "relative" }, ji = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, Mi = { class: "flex items-center gap-4" }, Ni = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, Pi = { class: "sr-only" }, Fi = u({
	__name: "Header",
	setup(e) {
		hi("Header");
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
			return y(), o("header", wi, [s("nav", Ti, [s("div", Ei, [l(d, {
				to: `/${f.value}`,
				class: "text-lg font-bold tracking-tight text-primary no-underline"
			}, {
				default: E(() => [c(w(T(n)("shared.appName")), 1)]),
				_: 1
			}, 8, ["to"]), s("div", Di, [
				l(d, {
					to: `/${f.value}`,
					custom: ""
				}, {
					default: E(({ href: e, navigate: t, isExactActive: r }) => [s("a", {
						href: e,
						class: m(["nav-link", { "router-link-active": r }]),
						onClick: t
					}, w(T(n)("header.home")), 11, Oi)]),
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
					}, w(T(n)("header.methodology")), 11, ki)]),
					_: 1
				}, 8, ["to"]),
				s("div", Ai, [s("button", {
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
				}, [s("div", ji, [(y(!0), o(t, null, x(p.value, (e) => (y(), i(d, {
					key: e.to,
					to: e.to,
					class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
					onClick: r[3] ||= (e) => u.value = !1
				}, {
					default: E(() => [c(w(e.label), 1)]),
					_: 2
				}, 1032, ["to"]))), 128))])], 32)) : a("v-if", !0)])
			])]), s("div", Mi, [
				s("a", Ni, [s("span", Pi, w(T(n)("shared.goToGithub")), 1), r[6] ||= s("svg", {
					viewBox: "0 0 16 16",
					"aria-hidden": "true",
					width: "20",
					height: "20"
				}, [s("path", {
					fill: "currentColor",
					d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				})], -1)]),
				l(xi),
				l(Ci)
			])])]);
		};
	}
}), Ii = u({
	__name: "Layout",
	setup(e) {
		let n = D(), { locale: r } = Jr(), i = b(0);
		return h(() => {
			i.value = typeof performance < "u" ? performance.now() : 0;
		}), g(() => {
			ti(), ni("AppRoot", i.value);
		}), ee(() => n.params.locale, (e) => {
			e && (document.documentElement.lang = e, r.value = e);
		}, { immediate: !0 }), (e, n) => {
			let r = S("router-view");
			return y(), o(t, null, [
				l(Fi),
				l(r),
				l(mi)
			], 64);
		};
	}
});
export { Ii as default };

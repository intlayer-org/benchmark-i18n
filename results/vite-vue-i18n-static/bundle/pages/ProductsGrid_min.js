import * as e from "vue";
import { Fragment as t, Text as n, computed as r, createElementBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, effectScope as c, getCurrentInstance as l, getCurrentScope as u, h as d, inject as f, isRef as p, onMounted as m, onScopeDispose as h, onUnmounted as g, openBlock as _, ref as v, renderList as y, renderSlot as b, shallowRef as x, toDisplayString as S, watch as C } from "vue";
var w = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, ee = { class: "mb-2 text-lg font-semibold text-foreground" }, te = { class: "mb-4 text-sm text-muted-foreground" }, T = { class: "flex items-center justify-between" }, E = { class: "text-sm font-bold text-primary" }, ne = s({
	__name: "ProductsGrid",
	setup(e) {
		let n = [
			{
				name: "Benchmark CLI",
				desc: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
				price: "Free"
			},
			{
				name: "Benchmark Cloud",
				desc: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
				price: "$29/mo"
			},
			{
				name: "Benchmark Enterprise",
				desc: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
				price: "Contact Us"
			},
			{
				name: "Migration Assistant",
				desc: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
				price: "$99 one-time"
			},
			{
				name: "Translation QA",
				desc: "Automated quality checks for missing translations, pluralization issues, and context errors.",
				price: "$19/mo"
			},
			{
				name: "Bundle Optimizer",
				desc: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
				price: "$49/mo"
			}
		];
		return (e, r) => (_(), i("div", w, [(_(), i(t, null, y(n, (e) => a("div", {
			key: e.name,
			class: "flex flex-col justify-between rounded-lg border border-border bg-card p-6"
		}, [a("div", null, [a("h3", ee, S(e.name), 1), a("p", te, S(e.desc), 1)]), a("div", T, [a("span", E, S(e.price), 1), r[0] ||= a("button", {
			type: "button",
			class: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
		}, " Learn More ", -1)])])), 64))]));
	}
});
function D(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var re = {};
function ie(e) {
	re[e] || (re[e] = !0, D(e));
}
var O = typeof window < "u", k, ae;
if (process.env.NODE_ENV !== "production") {
	let e = O && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (k = (t) => {
		e.mark(t);
	}, ae = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var oe = /\{([0-9a-zA-Z]+)\}/g;
function se(e, ...t) {
	return t.length === 1 && B(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(oe, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var A = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ce = (e, t, n) => le({
	l: e,
	k: t,
	s: n
}), le = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), j = (e) => typeof e == "number" && isFinite(e), M = (e) => xe(e) === "[object Date]", ue = (e) => xe(e) === "[object RegExp]", de = (e) => V(e) && Object.keys(e).length === 0, N = Object.assign, fe = Object.create, P = (e = null) => fe(e), pe, me = () => pe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : P();
function he(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ge(e) {
	return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _e(e) {
	return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${ge(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${ge(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && D("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t) => {
		e = e.replace(t, "$1javascript&#58;");
	}), e;
}
var ve = Object.prototype.hasOwnProperty;
function F(e, t) {
	return ve.call(e, t);
}
var I = Array.isArray, L = (e) => typeof e == "function", R = (e) => typeof e == "string", z = (e) => typeof e == "boolean", B = (e) => typeof e == "object" && !!e, ye = (e) => B(e) && L(e.then) && L(e.catch), be = Object.prototype.toString, xe = (e) => be.call(e), V = (e) => xe(e) === "[object Object]", Se = (e) => e == null ? "" : I(e) || V(e) && e.toString === be ? JSON.stringify(e, null, 2) : String(e);
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
var De = (e) => !B(e) || I(e);
function Oe(e, t) {
	if (De(e) || De(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (B(e[r]) && !B(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : P()), De(t[r]) || De(e[r]) ? t[r] = e[r] : n.push({
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
}, je = {
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
function U(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = process.env.NODE_ENV === "production" ? e : se((i || je)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function Me(e) {
	throw e;
}
var Ne = /<\/?[\w\s="/.':;#-\/]+>/, Pe = (e) => Ne.test(e), W = " ", Fe = "\r", G = "\n", Ie = "\u2028", Le = "\u2029";
function Re(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Fe && t[e + 1] === G, s = (e) => t[e] === G, c = (e) => t[e] === Le, l = (e) => t[e] === Ie, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? G : t[e], g = () => h(n), _ = () => h(n + a);
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
		if (t.column += r, t.offset += r, u) {
			let r = U(e, n ? Ae(a.startLoc, t) : null, {
				domain: Ve,
				args: i
			});
			u(r);
		}
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = Ae(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
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
		if (n !== 7 && n !== 11) return !1;
		h(e);
		let r = e.currentPeek() === ":";
		return e.resetPeek(), r;
	}
	function ee(e, t) {
		let { currentType: n } = t;
		if (n !== 9) return !1;
		let r = () => {
			let t = e.currentPeek();
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === W || !t ? !1 : t === G ? (e.peek(), r()) : T(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function te(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function T(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? r !== W && r !== G : i === W ? (e.peek(), n(!0, W)) : i !== G || (e.peek(), n(!0, G));
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function E(e, t) {
		let n = e.currentChar();
		if (n !== ze) return t(n) ? (e.next(), n) : null;
	}
	function ne(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function D(e) {
		return E(e, ne);
	}
	function re(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function ie(e) {
		return E(e, re);
	}
	function O(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function k(e) {
		return E(e, O);
	}
	function ae(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function oe(e) {
		return E(e, ae);
	}
	function se(e) {
		let t = "", n = "";
		for (; t = k(e);) n += t;
		return n;
	}
	function A(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === W || n === G) {
				if (T(e)) t += n, e.next();
				else if (te(e)) break;
				else t += n, e.next();
			} else t += n, e.next();
		}
		return t;
	}
	function ce(e) {
		g(e);
		let t = "", n = "";
		for (; t = ie(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== ze && r !== W && r !== G && r !== "　") {
			let t = fe(e);
			return d(H.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === ze && d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function le(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${se(e)}`) : t += se(e), e.currentChar() === ze && d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function j(e) {
		return e !== Be && e !== G;
	}
	function M(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = E(e, j);) n += t === "\\" ? ue(e) : t;
		let r = e.currentChar();
		return r === G || r === ze ? (d(H.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === G && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
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
			let n = oe(e);
			if (!n) {
				d(H.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function N(e) {
		return e !== "{" && e !== "}" && e !== W && e !== G;
	}
	function fe(e) {
		g(e);
		let t = "", n = "";
		for (; t = E(e, N);) n += t;
		return n;
	}
	function P(e) {
		let t = "", n = "";
		for (; t = D(e);) n += t;
		return n;
	}
	function pe(e) {
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
				if (te(e)) return t.braceNest > 0 && d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, me(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(H.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, _e(e, t);
				if (r = y(e, t)) return n = f(t, 4, ce(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, le(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 6, M(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, fe(e)), d(H.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
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
			default: return te(e) ? (r = f(t, 1, me(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), ge(e, t)) : C(e, t) ? (g(e), f(t, 11, P(e))) : ee(e, t) ? (g(e), i === "{" ? he(e, t) || r : f(t, 10, pe(e))) : (n === 7 && d(H.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, _e(e, t));
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
				if (te(e)) return n = f(t, 1, me(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (T(e)) return f(t, 0, A(e));
		}
		return n;
	}
	function ve() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === ze ? f(c, 13) : _e(r, c);
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
		if (s.offset += a, s.column += a, n) {
			let e = U(r, t ? Ae(i, s) : null, {
				domain: Ue,
				args: o
			});
			n(e);
		}
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
		let o = He(n, N({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, H.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function K(e) {
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
		case 4: t.helper("interpolate"), t.helper("named");
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
			if (r.type !== 3 && r.type !== 9 || r.value == null) break;
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
		default: if (process.env.NODE_ENV !== "production") throw U(H.UNHANDLED_MINIFIER_NODE_TYPE, null, {
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
		default: if (process.env.NODE_ENV !== "production") throw U(H.UNHANDLED_CODEGEN_NODE_TYPE, null, {
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
	c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), s.length > 0 && (c.push(`const { ${Ce(s.map((e) => `${e}: _${e}`), ", ")} } = ctx`), c.newline()), c.push("return "), lt(c, e), c.deindent(o), c.push("}"), delete e.helpers;
	let { code: l, map: u } = c.context();
	return {
		ast: e,
		code: l,
		map: u ? u.toJSON() : void 0
	};
};
function dt(e, t = {}) {
	let n = N({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null || n.optimize, o = Je(n).parse(e);
	return r ? (a && $e(o), i && nt(o), {
		ast: o,
		code: ""
	}) : (Qe(o, n), ut(o, n));
}
function q(e) {
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
	}
	return Nt(e, n);
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
			if (F(r, "i") && j(r.i)) return e.interpolate(e.list(r.i));
			if (F(r, "index") && j(r.index)) return e.interpolate(e.list(r.index));
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
	t && Pe(e) && D(se(Ft, { source: e }));
}
var Lt = (e) => e, Rt = P();
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
	if (R(e)) {
		let n = !z(t.warnHtmlMessage) || t.warnHtmlMessage;
		process.env.NODE_ENV !== "production" && It(e, n);
		let r = (t.onCacheKey || Lt)(e), i = Rt[r];
		if (i) return i;
		let { ast: a, detectError: o } = zt(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = jt(a);
		return o ? s : Rt[r] = s;
	}
	{
		if (process.env.NODE_ENV !== "production" && !q(e)) return D(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
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
var J = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function Kt(e) {
	return U(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: qt });
}
var qt = {
	[J.INVALID_ARGUMENT]: "Invalid arguments",
	[J.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[J.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[J.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[J.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[J.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
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
			if (ye(t)) throw Kt(J.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return Yt = t;
		}
		throw Kt(J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	}
	throw Kt(J.NOT_SUPPORT_LOCALE_TYPE);
}
function Zt(e, t, n) {
	return [.../* @__PURE__ */ new Set([n, ...I(t) ? t : B(t) ? Object.keys(t) : R(t) ? [t] : [n]])];
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
		if (kt.includes(e) && q(i) || !B(i) || !F(i, e)) return null;
		let t = i[e];
		if (t === void 0 || L(i)) return null;
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
}, pn = {
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
	let t = L(e.onWarn) ? e.onWarn : D, n = R(e.version) ? e.version : hn, r = R(e.locale) || L(e.locale) ? e.locale : gn, i = L(r) ? gn : r, a = I(e.fallbackLocale) || V(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = V(e.messages) ? e.messages : Nn(i), s = V(e.datetimeFormats) ? e.datetimeFormats : Nn(i), c = V(e.numberFormats) ? e.numberFormats : Nn(i), l = N(P(), e.modifiers, vn()), u = e.pluralRules || P(), d = L(e.missing) ? e.missing : null, f = z(e.missingWarn) || ue(e.missingWarn) ? e.missingWarn : !0, p = z(e.fallbackWarn) || ue(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = L(e.postTranslation) ? e.postTranslation : null, _ = V(e.processor) ? e.processor : null, v = !z(e.warnHtmlMessage) || e.warnHtmlMessage, y = !!e.escapeParameter, b = L(e.messageCompiler) ? e.messageCompiler : yn;
	process.env.NODE_ENV !== "production" && L(e.messageCompiler) && ie(mn(Y.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let x = L(e.messageResolver) ? e.messageResolver : xn || dn, S = L(e.localeFallbacker) ? e.localeFallbacker : Cn || Zt, C = B(e.fallbackContext) ? e.fallbackContext : void 0, w = e, ee = B(w.__datetimeFormatters) ? w.__datetimeFormatters : /* @__PURE__ */ new Map(), te = B(w.__numberFormatters) ? w.__numberFormatters : /* @__PURE__ */ new Map(), T = B(w.__meta) ? w.__meta : {};
	jn++;
	let E = {
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
		__meta: T
	};
	return E.datetimeFormats = s, E.numberFormats = c, E.__datetimeFormatters = ee, E.__numberFormatters = te, process.env.NODE_ENV !== "production" && (E.__v_emitter = w.__v_emitter == null ? void 0 : w.__v_emitter), process.env.NODE_ENV !== "production" && Ut(E, n, T), E;
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
	}
	return process.env.NODE_ENV !== "production" && Fn(r, t) && o(mn(Y.NOT_FOUND_KEY, {
		key: t,
		locale: n
	})), t;
}
function Ln(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Rn(e, t) {
	return e !== t && e.split("-")[0] === t.split("-")[0];
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
	if (process.env.NODE_ENV !== "production" && !Vn.dateTimeFormat) return a(mn(Y.CANNOT_FORMAT_DATE)), "";
	if (!R(t[0]) && !M(t[0]) && !j(t[0])) return process.env.NODE_ENV !== "production" && a(mn(Y.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Wn(...t), f = z(u.missingWarn) ? u.missingWarn : e.missingWarn, p = z(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Jt(e, u), g = o(e, i, h);
	if (!R(c) || c === "") return new Intl.DateTimeFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "datetime format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Pn(p, c) && a(mn(Y.FALLBACK_TO_DATE_FORMAT, {
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
	de(d) || (C = `${C}__${JSON.stringify(d)}`);
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
		if (!e) throw Kt(J.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw Kt(J.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (M(t)) {
		if (isNaN(t.getTime())) throw Kt(J.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (j(t)) s = t;
	else throw Kt(J.INVALID_ARGUMENT);
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
	if (process.env.NODE_ENV !== "production" && !Vn.numberFormat) return a(mn(Y.CANNOT_FORMAT_NUMBER)), "";
	if (!j(t[0])) return process.env.NODE_ENV !== "production" && a(mn(Y.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Jn(...t), f = z(u.missingWarn) ? u.missingWarn : e.missingWarn, p = z(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Jt(e, u), g = o(e, i, h);
	if (!R(c) || c === "") return new Intl.NumberFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "number format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Pn(p, c) && a(mn(Y.FALLBACK_TO_NUMBER_FORMAT, {
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
	de(d) || (C = `${C}__${JSON.stringify(d)}`);
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
	if (!j(t)) throw Kt(J.INVALID_ARGUMENT);
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
var Xn = (e) => e, Zn = (e) => "", Qn = "text", $n = (e) => e.length === 0 ? "" : Ce(e), er = Se;
function tr(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function nr(e) {
	let t = j(e.pluralIndex) ? e.pluralIndex : -1;
	return j(e.named?.count) ? e.named.count : j(e.named?.n) ? e.named.n : t;
}
function rr(e = {}) {
	let t = e.locale, n = nr(e), r = R(t) && L(e.pluralRules?.[t]) ? e.pluralRules[t] : tr, i = r === tr ? void 0 : tr, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || P();
	j(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
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
var ir = () => "", X = (e) => L(e);
function ar(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = ur(...t), u = z(l.missingWarn) ? l.missingWarn : e.missingWarn, d = z(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = z(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = R(l.default) || z(l.default) ? z(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (R(m) || L(m)), g = Jt(e, l);
	f && or(l);
	let [_, v, y] = p ? [
		c,
		g,
		s[g] || P()
	] : sr(e, c, g, o, d, u), b = _, x = c;
	if (!p && !(R(b) || q(b) || X(b)) && h && (b = m, x = b), !p && (!(R(b) || q(b) || X(b)) || !R(v))) return i ? -1 : c;
	if (process.env.NODE_ENV !== "production" && R(b) && e.messageCompiler == null) return D(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
	let S = !1, C = X(b) ? b : cr(e, c, v, b, x, () => {
		S = !0;
	});
	if (S) return b;
	let w = lr(e, C, rr(pr(e, v, y, l))), ee = r ? r(w, c) : w;
	if (f && R(ee) && (ee = _e(ee)), process.env.NODE_ENV !== "production") {
		let t = {
			timestamp: Date.now(),
			key: R(c) ? c : X(b) ? b.key : "",
			locale: v || (X(b) ? b.locale : ""),
			format: R(b) ? b : X(b) ? b.source : "",
			message: ee
		};
		t.meta = N({}, e.__meta, Dn() || {}), Wt(t);
	}
	return ee;
}
function or(e) {
	I(e.list) ? e.list = e.list.map((e) => R(e) ? he(e) : e) : B(e.named) && Object.keys(e.named).forEach((t) => {
		R(e.named[t]) && (e.named[t] = he(e.named[t]));
	});
}
function sr(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = P(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !Rn(n, f) && Pn(i, t) && s(mn(Y.FALLBACK_TO_TRANSLATE, {
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
		if (process.env.NODE_ENV !== "production" && O && l && (_ = window.performance.now(), v = "intlify-message-resolve-start", y = "intlify-message-resolve-end", k && k(v)), (p = c(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && O && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: `${g}:${t}`
			}), v && y && k && ae && (k(y), ae("intlify message resolve", v, y));
		}
		if (R(p) || q(p) || X(p)) break;
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
	if (X(r)) {
		let e = r;
		return e.locale = e.locale || n, e.key = e.key || t, e;
	}
	if (o == null) {
		let e = (() => r);
		return e.locale = n, e.key = t, e;
	}
	let c = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, l = null, u, d;
	process.env.NODE_ENV !== "production" && O && c && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", k && k(u));
	let f = o(r, dr(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && O && c) {
		let e = window.performance.now();
		c && l && c.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: e - l,
			groupId: `translate:${t}`
		}), u && d && k && ae && (k(d), ae("intlify message compilation", u, d));
	}
	return f.locale = n, f.key = t, f.source = r, f;
}
function lr(e, t, n) {
	let r = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, i = null, a, o;
	process.env.NODE_ENV !== "production" && O && r && (i = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", k && k(a));
	let s = t(n);
	if (process.env.NODE_ENV !== "production" && O && r) {
		let e = window.performance.now();
		r && i && r.emit("message-evaluation", {
			type: "message-evaluation",
			value: s,
			time: e - i,
			groupId: `translate:${t.key}`
		}), a && o && k && ae && (k(o), ae("intlify message evaluation", a, o));
	}
	return s;
}
function ur(...e) {
	let [t, n, r] = e, i = P();
	if (!R(t) && !j(t) && !X(t) && !q(t)) throw Kt(J.INVALID_ARGUMENT);
	let a = j(t) ? String(t) : (X(t), t);
	return j(n) ? i.plural = n : R(n) ? i.default = n : V(n) && !de(n) ? i.named = n : I(n) && (i.list = n), j(r) ? i.plural = r : R(r) ? i.default = r : V(r) && N(i, r), [a, i];
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
			if (R(a) || q(a)) {
				let n = !1, i = cr(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? ir : i;
			}
			return X(a) ? a : ir;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), j(r.plural) && (d.pluralIndex = r.plural), d;
}
function mr() {
	return hr().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function hr() {
	return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
var gr = typeof Proxy == "function", _r = "devtools-plugin:setup", vr = "plugin:settings:set", yr, br;
function xr() {
	return yr === void 0 && (typeof window < "u" && window.performance ? (yr = !0, br = window.performance) : typeof globalThis < "u" && globalThis.perf_hooks?.performance ? (yr = !0, br = globalThis.perf_hooks.performance) : yr = !1), yr;
}
function Sr() {
	return xr() ? br.now() : Date.now();
}
var Cr = class {
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
				return Sr();
			}
		}, t && t.on(vr, (e, t) => {
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
function wr(e, t) {
	let n = e, r = hr(), i = mr(), a = gr && n.enableEarlyProxy;
	if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a)) i.emit(_r, e, t);
	else {
		let e = a ? new Cr(n, i) : null;
		(r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: n,
			setupFn: t,
			proxy: e
		}), e && t(e.proxiedTarget);
	}
}
var Tr = "11.4.0", Z = {
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
	return U(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: Er,
		args: t
	});
}
var Er = {
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
}, Dr = A("__translateVNode"), Or = A("__datetimeParts"), kr = A("__numberParts"), Ar = A("__enableEmitter"), jr = A("__disableEmitter"), Mr = A("__setPluralRules");
A("__intlifyMeta");
var Nr = A("__injectWithOption"), Pr = A("__dispose"), $ = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
}, Fr = {
	[$.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[$.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[$.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[$.DEPRECATE_LEGACY_MODE]: "Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html",
	[$.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
	[$.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Ir(e, ...t) {
	return se(Fr[e], ...t);
}
function Lr(e) {
	if (!B(e) || q(e)) return e;
	for (let t in e) if (F(e, t)) {
		if (!t.includes(".")) B(e[t]) && Lr(e[t]);
		else {
			let n = t.split("."), r = n.length - 1, i = e, a = !1;
			for (let e = 0; e < r; e++) {
				if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
				if (n[e] in i || (i[n[e]] = P()), !B(i[n[e]])) {
					process.env.NODE_ENV !== "production" && D(Ir($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
					break;
				}
				i = i[n[e]];
			}
			if (a || (q(i) ? kt.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !q(i)) {
				let e = i[n[r]];
				B(e) && Lr(e);
			}
		}
	}
	return e;
}
function Rr(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = V(n) ? n : I(r) ? P() : { [e]: P() };
	if (I(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || P(), Oe(n, o[t])) : Oe(n, o);
		} else R(e) && Oe(JSON.parse(e), o);
	}), i == null && a) for (let e in o) F(o, e) && Lr(o[e]);
	return o;
}
function zr(e) {
	return e.type;
}
function Br(e, t, n) {
	let r = B(t.messages) ? t.messages : P();
	"__i18nGlobal" in n && (r = Rr(e.locale.value, {
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
function Vr(e) {
	return o(n, null, e, 0);
}
function Hr() {
	let t = "currentInstance";
	return t in e ? e[t] : e.getCurrentInstance();
}
var Ur = "__INTLIFY_META__", Wr = () => [], Gr = () => !1, Kr = 0;
function qr(e) {
	return ((t, n, r, i) => e(n, r, Hr() || void 0, i));
}
var Jr = () => {
	let e = Hr(), t = null;
	return e && (t = zr(e)[Ur]) ? { [Ur]: t } : null;
};
function Yr(e = {}) {
	let { __root: t, __injectWithOption: n } = e, i = t === void 0, a = e.flatJson, o = O ? v : x, s = !z(e.inheritLocale) || e.inheritLocale, c = o(t && s ? t.locale.value : R(e.locale) ? e.locale : gn), l = o(t && s ? t.fallbackLocale.value : R(e.fallbackLocale) || I(e.fallbackLocale) || V(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(Rr(c.value, e)), d = o(V(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(V(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : z(e.missingWarn) || ue(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : z(e.fallbackWarn) || ue(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : !z(e.fallbackRoot) || e.fallbackRoot, g = !!e.fallbackFormat, _ = L(e.missing) ? e.missing : null, y = L(e.missing) ? qr(e.missing) : null, b = L(e.postTranslation) ? e.postTranslation : null, S = t ? t.warnHtmlMessage : !z(e.warnHtmlMessage) || e.warnHtmlMessage, w = !!e.escapeParameter, ee = t ? t.modifiers : V(e.modifiers) ? e.modifiers : {}, te = e.pluralRules || t && t.pluralRules, T;
	T = (() => {
		i && kn(null);
		let t = {
			version: Tr,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: ee,
			pluralRules: te,
			missing: y === null ? void 0 : y,
			missingWarn: p,
			fallbackWarn: m,
			fallbackFormat: g,
			unresolving: !0,
			postTranslation: b === null ? void 0 : b,
			warnHtmlMessage: S,
			escapeParameter: w,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value, t.__datetimeFormatters = V(T) ? T.__datetimeFormatters : void 0, t.__numberFormatters = V(T) ? T.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (t.__v_emitter = V(T) ? T.__v_emitter : void 0);
		let n = Mn(t);
		return i && kn(n), n;
	})(), Ln(T, c.value, l.value);
	function E() {
		return [
			c.value,
			l.value,
			u.value,
			d.value,
			f.value
		];
	}
	let ne = r({
		get: () => c.value,
		set: (e) => {
			T.locale = e, c.value = e;
		}
	}), re = r({
		get: () => l.value,
		set: (e) => {
			T.fallbackLocale = e, l.value = e, Ln(T, c.value, e);
		}
	}), ie = r(() => u.value), k = r(() => d.value), ae = r(() => f.value);
	function oe() {
		return L(b) ? b : null;
	}
	function se(e) {
		b = e, T.postTranslation = e;
	}
	function A() {
		return _;
	}
	function ce(e) {
		e !== null && (y = qr(e)), _ = e, T.missing = y;
	}
	function le(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let M = (e, n, r, a, o, s) => {
		E();
		let c;
		try {
			process.env.NODE_ENV !== "production" && En(Jr()), i || (T.fallbackContext = t ? An() : void 0), c = e(T);
		} finally {
			process.env.NODE_ENV !== "production" && En(null), i || (T.fallbackContext = void 0);
		}
		if (r !== "translate exists" && j(c) && c === -1 || r === "translate exists" && !c) {
			let [e, i] = n();
			if (process.env.NODE_ENV !== "production" && t && R(e) && le(r, i) && (h && (Pn(m, e) || Fn(p, e)) && D(Ir($.FALLBACK_TO_ROOT, {
				key: e,
				type: r
			})), process.env.NODE_ENV !== "production")) {
				let { __v_emitter: t } = T;
				t && h && t.emit("fallback", {
					type: r,
					key: e,
					to: "global",
					groupId: `${r}:${e}`
				});
			}
			return t && h ? a(t) : o(e);
		}
		if (s(c)) return c;
		throw Q(Z.UNEXPECTED_RETURN_TYPE);
	};
	function de(...e) {
		return M((t) => Reflect.apply(ar, null, [t, ...e]), () => ur(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => R(e));
	}
	function fe(...e) {
		let [t, n, r] = e;
		if (r && !B(r)) throw Q(Z.INVALID_ARGUMENT);
		return de(t, n, N({ resolvedMessage: !0 }, r || {}));
	}
	function P(...e) {
		return M((t) => Reflect.apply(Hn, null, [t, ...e]), () => Wn(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => R(e) || I(e));
	}
	function pe(...e) {
		return M((t) => Reflect.apply(Kn, null, [t, ...e]), () => Jn(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => R(e) || I(e));
	}
	function me(e) {
		return e.map((e) => R(e) || j(e) || z(e) ? Vr(String(e)) : e);
	}
	let he = {
		normalize: me,
		interpolate: (e) => e,
		type: "vnode"
	};
	function ge(...e) {
		return M((t) => {
			let n, r = t;
			try {
				r.processor = he, n = Reflect.apply(ar, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => ur(...e), "translate", (t) => t[Dr](...e), (e) => [Vr(e)], (e) => I(e));
	}
	function _e(...e) {
		return M((t) => Reflect.apply(Kn, null, [t, ...e]), () => Jn(...e), "number format", (t) => t[kr](...e), Wr, (e) => R(e) || I(e));
	}
	function ve(...e) {
		return M((t) => Reflect.apply(Hn, null, [t, ...e]), () => Wn(...e), "datetime format", (t) => t[Or](...e), Wr, (e) => R(e) || I(e));
	}
	function ye(e) {
		te = e, T.pluralRules = te;
	}
	function be(e, t) {
		return M(() => {
			if (!e) return !1;
			let n = R(t) ? t : c.value, r = R(t) ? [n] : Qt(T, l.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = Ce(r[t]), i = T.messageResolver(n, e);
				if (i === null && (i = n[e]), q(i) || X(i) || R(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), Gr, (e) => z(e));
	}
	function xe(e) {
		let t = null, n = Qt(T, l.value, c.value);
		for (let r = 0; r < n.length; r++) {
			let i = u.value[n[r]] || {}, a = T.messageResolver(i, e);
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
			for (let e in n) F(n, e) && Lr(n[e]);
			t = n[e];
		}
		u.value[e] = t, T.messages = u.value;
	}
	function Te(e, t) {
		u.value[e] = u.value[e] || {};
		let n = { [e]: t };
		if (a) for (let e in n) F(n, e) && Lr(n[e]);
		t = n[e], Oe(t, u.value[e]), T.messages = u.value;
	}
	function Ee(e) {
		return d.value[e] || {};
	}
	function De(e, t) {
		d.value[e] = t, T.datetimeFormats = d.value, Gn(T, e, t);
	}
	function ke(e, t) {
		d.value[e] = N(d.value[e] || {}, t), T.datetimeFormats = d.value, Gn(T, e, t);
	}
	function Ae(e) {
		return f.value[e] || {};
	}
	function H(e, t) {
		f.value[e] = t, T.numberFormats = f.value, Yn(T, e, t);
	}
	function je(e, t) {
		f.value[e] = N(f.value[e] || {}, t), T.numberFormats = f.value, Yn(T, e, t);
	}
	Kr++, t && O && (C(t.locale, (e) => {
		s && (c.value = e, T.locale = e, Ln(T, c.value, l.value));
	}), C(t.fallbackLocale, (e) => {
		s && (l.value = e, T.fallbackLocale = e, Ln(T, c.value, l.value));
	}));
	let U = {
		id: Kr,
		locale: ne,
		fallbackLocale: re,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (c.value = t.locale.value, l.value = t.fallbackLocale.value, Ln(T, c.value, l.value));
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: ie,
		get modifiers() {
			return ee;
		},
		get pluralRules() {
			return te || {};
		},
		get isGlobal() {
			return i;
		},
		get missingWarn() {
			return p;
		},
		set missingWarn(e) {
			p = e, T.missingWarn = p;
		},
		get fallbackWarn() {
			return m;
		},
		set fallbackWarn(e) {
			m = e, T.fallbackWarn = m;
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
			g = e, T.fallbackFormat = g;
		},
		get warnHtmlMessage() {
			return S;
		},
		set warnHtmlMessage(e) {
			S = e, T.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return w;
		},
		set escapeParameter(e) {
			w = e, T.escapeParameter = e;
		},
		t: de,
		getLocaleMessage: Ce,
		setLocaleMessage: we,
		mergeLocaleMessage: Te,
		getPostTranslationHandler: oe,
		setPostTranslationHandler: se,
		getMissingHandler: A,
		setMissingHandler: ce,
		[Mr]: ye
	};
	return U.datetimeFormats = k, U.numberFormats = ae, U.rt = fe, U.te = be, U.tm = Se, U.d = P, U.n = pe, U.getDateTimeFormat = Ee, U.setDateTimeFormat = De, U.mergeDateTimeFormat = ke, U.getNumberFormat = Ae, U.setNumberFormat = H, U.mergeNumberFormat = je, U[Nr] = n, U[Dr] = ge, U[Or] = ve, U[kr] = _e, process.env.NODE_ENV !== "production" && (U[Ar] = (e) => {
		T.__v_emitter = e;
	}, U[jr] = () => {
		T.__v_emitter = void 0;
	}), U;
}
var Xr = "vue-i18n: composer properties", Zr = {
	"vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
	"vue-i18n-resource-inspector": "Vue I18n DevTools",
	"vue-i18n-timeline": "Vue I18n"
}, Qr = { "vue-i18n-resource-inspector": "Search for scopes ..." }, $r = { "vue-i18n-timeline": 16764185 }, ei;
async function ti(e, t) {
	return new Promise((n, r) => {
		try {
			wr({
				id: "vue-devtools-plugin-vue-i18n",
				label: Zr["vue-devtools-plugin-vue-i18n"],
				packageName: "vue-i18n",
				homepage: "https://vue-i18n.intlify.dev",
				logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
				componentStateTypes: [Xr],
				app: e
			}, (r) => {
				ei = r, r.on.visitComponentTree(({ componentInstance: e, treeNode: n }) => {
					ri(e, n, t);
				}), r.on.inspectComponent(({ componentInstance: e, instanceData: n }) => {
					e.__VUE_I18N__ && n && (t.mode === "legacy" ? e.__VUE_I18N__ !== t.global.__composer && ii(n, e.__VUE_I18N__) : ii(n, e.__VUE_I18N__));
				}), r.addInspector({
					id: "vue-i18n-resource-inspector",
					label: Zr["vue-i18n-resource-inspector"],
					icon: "language",
					treeFilterPlaceholder: Qr["vue-i18n-resource-inspector"]
				}), r.on.getInspectorTree((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && ui(n, t);
				});
				let i = /* @__PURE__ */ new Map();
				r.on.getInspectorState(async (n) => {
					if (n.app === e && n.inspectorId === "vue-i18n-resource-inspector") {
						if (r.unhighlightElement(), pi(n, t), n.nodeId === "global") {
							if (!i.has(n.app)) {
								let [e] = await r.getComponentInstances(n.app);
								i.set(n.app, e);
							}
							r.highlightElement(i.get(n.app));
						} else {
							let e = di(n.nodeId, t);
							e && r.highlightElement(e);
						}
					}
				}), r.on.editInspectorState((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && gi(n, t);
				}), r.addTimelineLayer({
					id: "vue-i18n-timeline",
					label: Zr["vue-i18n-timeline"],
					color: $r["vue-i18n-timeline"]
				}), n(!0);
			});
		} catch (e) {
			console.error(e), r(!1);
		}
	});
}
function ni(e) {
	return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function ri(e, t, n) {
	let r = n.mode === "composition" ? n.global : n.global.__composer;
	if (e && e.__VUE_I18N__ && e.__VUE_I18N__ !== r) {
		let n = {
			label: `i18n (${ni(e)} Scope)`,
			textColor: 0,
			backgroundColor: 16764185
		};
		t.tags.push(n);
	}
}
function ii(e, t) {
	let n = Xr;
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
		value: ai(t.messages.value)
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
function ai(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		let r = e[n];
		L(r) && "source" in r ? t[n] = li(r) : q(r) && r.loc && r.loc.source ? t[n] = r.loc.source : B(r) ? t[n] = ai(r) : t[n] = r;
	}), t;
}
var oi = {
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"&": "&amp;"
};
function si(e) {
	return e.replace(/[<>"&]/g, ci);
}
function ci(e) {
	return oi[e] || e;
}
function li(e) {
	return { _custom: {
		type: "function",
		display: `<span>ƒ</span> ${e.source ? `("${si(e.source)}")` : "(?)"}`
	} };
}
function ui(e, t) {
	e.rootNodes.push({
		id: "global",
		label: "Global Scope"
	});
	let n = t.mode === "composition" ? t.global : t.global.__composer;
	for (let [r, i] of t.__instances) {
		let a = t.mode === "composition" ? i : i.__composer;
		n !== a && e.rootNodes.push({
			id: a.id.toString(),
			label: `${ni(r)} Scope`
		});
	}
}
function di(e, t) {
	let n = null;
	if (e !== "global") {
		for (let [r, i] of t.__instances.entries()) if (i.id.toString() === e) {
			n = r;
			break;
		}
	}
	return n;
}
function fi(e, t) {
	if (e === "global") return t.mode === "composition" ? t.global : t.global.__composer;
	{
		let n = Array.from(t.__instances.values()).find((t) => t.id.toString() === e);
		return n ? t.mode === "composition" ? n : n.__composer : null;
	}
}
function pi(e, t) {
	let n = fi(e.nodeId, t);
	return n && (e.state = mi(n)), null;
}
function mi(e) {
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
		value: ai(e.messages.value)
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
function hi(e, t) {
	if (ei) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), ei.addTimelineEvent({
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
function gi(e, t) {
	let n = fi(e.nodeId, t);
	if (n) {
		let [t] = e.path;
		t === "locale" && R(e.state.value) ? n.locale.value = e.state.value : t === "fallbackLocale" && (R(e.state.value) || I(e.state.value) || B(e.state.value)) ? n.fallbackLocale.value = e.state.value : t === "inheritLocale" && z(e.state.value) && (n.inheritLocale = e.state.value);
	}
}
var _i = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function vi({ slots: e }, n) {
	return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((e, n) => [...e, ...n.type === t ? n.children : [n]], []) : n.reduce((t, n) => {
		let r = e[n];
		return r && (t[n] = r()), t;
	}, P());
}
function yi() {
	return t;
}
var bi = s({
	name: "i18n-t",
	props: N({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => j(e) || !isNaN(e)
		}
	}, _i),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || ji({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = Object.keys(n).filter((e) => e[0] !== "_"), o = P();
			e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = R(e.plural) ? +e.plural : e.plural);
			let s = vi(t, a), c = i[Dr](e.keypath, s, o), l = N(P(), r), u = R(e.tag) || B(e.tag) ? e.tag : yi();
			return d(u, l, c);
		};
	}
});
function xi(e) {
	return I(e) && !R(e[0]);
}
function Si(e, t, n, r) {
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
			return xi(r) && (r[0].key = `${e.type}-${t}`), r;
		}) : R(s) && (c = [s]);
		let l = N(P(), a), u = R(e.tag) || B(e.tag) ? e.tag : yi();
		return d(u, l, c);
	};
}
var Ci = s({
	name: "i18n-n",
	props: N({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, _i),
	setup(e, t) {
		let n = e.i18n || ji({
			useScope: e.scope,
			__useComponent: !0
		});
		return Si(e, t, qn, (...e) => n[kr](...e));
	}
});
function wi(e, t) {
	let n = e;
	if (e.mode === "composition") return n.__getInstance(t) || e.global;
	{
		let r = n.__getInstance(t);
		return r == null ? e.global.__composer : r.__composer;
	}
}
function Ti(e) {
	let t = (t) => {
		process.env.NODE_ENV !== "production" && ie(Ir($.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE));
		let { instance: n, value: r } = t;
		if (!n || !n.$) throw Q(Z.UNEXPECTED_ERROR);
		let i = wi(e, n.$), a = Ei(r);
		return [Reflect.apply(i.t, i, [...Di(a)]), i];
	};
	return {
		created: (e, n) => {
			let [r, i] = t(n);
			O && (e.__i18nWatcher = C(i.locale, () => {
				n.instance && n.instance.$forceUpdate();
			})), e.__composer = i, e.textContent = r;
		},
		unmounted: (e) => {
			O && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer);
		},
		beforeUpdate: (e, { value: t }) => {
			if (e.__composer) {
				let n = e.__composer, r = Ei(t);
				e.textContent = Reflect.apply(n.t, n, [...Di(r)]);
			}
		},
		getSSRProps: (e) => {
			let [n] = t(e);
			return { textContent: n };
		}
	};
}
function Ei(e) {
	if (R(e)) return { path: e };
	if (V(e)) {
		if (!("path" in e)) throw Q(Z.REQUIRED_VALUE, "path");
		return e;
	}
	throw Q(Z.INVALID_VALUE);
}
function Di(e) {
	let { path: t, locale: n, args: r, choice: i, plural: a } = e, o = {}, s = r || {};
	return R(n) && (o.locale = n), j(i) && (o.plural = i), j(a) && (o.plural = a), [
		t,
		s,
		o
	];
}
function Oi(e, t, ...n) {
	let r = V(n[0]) ? n[0] : {};
	(!z(r.globalInstall) || r.globalInstall) && ([bi.name, "I18nT"].forEach((t) => e.component(t, bi)), [Ci.name, "I18nN"].forEach((t) => e.component(t, Ci)), [Hi.name, "I18nD"].forEach((t) => e.component(t, Hi))), e.directive("t", Ti(t));
}
var ki = A("global-vue-i18n");
function Ai(e = {}) {
	process.env.NODE_ENV;
	let t = !z(e.globalInjection) || e.globalInjection, n = /* @__PURE__ */ new Map(), [r, i] = Mi(e, !1), a = A(process.env.NODE_ENV === "production" ? "" : "vue-i18n");
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
			if (process.env.NODE_ENV !== "production" && (e.__VUE_I18N__ = l), e.__VUE_I18N_SYMBOL__ = a, e.provide(e.__VUE_I18N_SYMBOL__, l), V(n[0])) {
				let e = n[0];
				l.__composerExtend = e.__composerExtend, l.__vueI18nExtend = e.__vueI18nExtend;
			}
			let r = null;
			t && (r = Vi(e, l.global)), Oi(e, l, ...n);
			let o = e.unmount;
			if (e.unmount = () => {
				r && r(), l.dispose(), o();
			}, process.env.NODE_ENV !== "production") {
				if (!await ti(e, l)) throw Q(Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
				let t = Ee();
				{
					let e = i;
					e[Ar] && e[Ar](t);
				}
				t.on("*", hi);
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
function ji(e = {}) {
	let t = Hr();
	if (t == null) throw Q(Z.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Q(Z.NOT_INSTALLED);
	let n = Ni(t), r = Fi(n), i = zr(t), a = Pi(e, i);
	if (a === "global") return Br(r, e, i), r;
	if (a === "parent") {
		let i = Ii(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && D(Ir($.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw Q(Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = N({}, e);
		a.__root = Ii(n, t) || r;
		let o = Yr(a);
		i.__composerExtend && (o[Pr] = i.__composerExtend(o));
		let s = null;
		if (process.env.NODE_ENV !== "production") {
			s = Ee();
			let e = o;
			e[Ar] && e[Ar](s), s.on("*", hi);
		}
		return u() && h(() => {
			if (process.env.NODE_ENV !== "production") {
				s && s.off("*", hi);
				let e = o;
				e[jr] && e[jr]();
			}
			let e = o[Pr];
			e && (e(), delete o[Pr]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = N({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = Yr(n), o.__composerExtend && (s[Pr] = o.__composerExtend(s)), Ri(o, t, s), o.__setInstance(t, s);
	} else process.env.NODE_ENV !== "production" && a === "local" && D(Ir($.DUPLICATE_USE_I18N_CALLING));
	return s;
}
function Mi(e, t) {
	let n = c(), r = n.run(() => Yr(e));
	if (r == null) throw Q(Z.UNEXPECTED_ERROR);
	return [n, r];
}
function Ni(e) {
	let t = f(e.isCE ? ki : e.appContext.app.__VUE_I18N_SYMBOL__);
	if (!t) throw Q(e.isCE ? Z.NOT_INSTALLED_WITH_PROVIDE : Z.UNEXPECTED_ERROR);
	return t;
}
function Pi(e, t) {
	return de(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Fi(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function Ii(e, t, n = !1) {
	let r = null, i = t.root, a = Li(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition" && (r = t.__getInstance(a)), r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Li(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Ri(e, t, n) {
	let r = null;
	m(() => {
		if (process.env.NODE_ENV !== "production") {
			t.__VUE_I18N__ = n, r = Ee();
			let e = n;
			e[Ar] && e[Ar](r), r.on("*", hi);
		}
	}, t), g(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && (r && r.off("*", hi), i[jr] && i[jr](), delete t.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[Pr];
		a && (a(), delete i[Pr]);
	}, t);
}
var zi = [
	"locale",
	"fallbackLocale",
	"availableLocales"
], Bi = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function Vi(e, t) {
	let n = Object.create(null);
	return zi.forEach((e) => {
		let r = Object.getOwnPropertyDescriptor(t, e);
		if (!r) throw Q(Z.UNEXPECTED_ERROR);
		let i = p(r.value) ? {
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
	}), e.config.globalProperties.$i18n = n, Bi.forEach((n) => {
		let r = Object.getOwnPropertyDescriptor(t, n);
		if (!r || !r.value) throw Q(Z.UNEXPECTED_ERROR);
		Object.defineProperty(e.config.globalProperties, `$${n}`, r);
	}), () => {
		delete e.config.globalProperties.$i18n, Bi.forEach((t) => {
			delete e.config.globalProperties[`$${t}`];
		});
	};
}
var Hi = s({
	name: "i18n-d",
	props: N({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, _i),
	setup(e, t) {
		let n = e.i18n || ji({
			useScope: e.scope,
			__useComponent: !0
		});
		return Si(e, t, Un, (...e) => n[Or](...e));
	}
});
if (bn(Bt), Sn(fn), wn(Qt), process.env.NODE_ENV !== "production") {
	let e = me();
	e.__INTLIFY__ = !0, Ht(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
var Ui = Ai({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en",
	messages: {
		en: {
			shared: {
				appName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Bench"
					}
				},
				siteName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				contactEmail: {
					t: 0,
					b: {
						t: 2,
						i: [
							{ t: 3 },
							{ t: 9 },
							{ t: 3 }
						],
						s: "contact@intlayer.org"
					}
				},
				goToGithub: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Go to GitHub"
					}
				}
			},
			header: {
				home: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Home"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Methodology"
					}
				},
				mockPages: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Mock Pages"
					}
				},
				products: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Products"
					}
				},
				pricing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Pricing"
					}
				},
				team: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Team"
					}
				},
				blog: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Blog"
					}
				},
				careers: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Careers"
					}
				},
				faq: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "FAQ"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contact"
					}
				},
				settings: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Settings"
					}
				}
			},
			footer: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					}
				},
				resources: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Resources"
					}
				},
				github: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHub"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Methodology"
					}
				},
				contributing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contributing"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contact"
					}
				},
				builtWith: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
					}
				}
			},
			themeToggle: {
				auto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Theme: Auto"
					}
				},
				dark: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Theme: Dark"
					}
				},
				light: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Theme: Light"
					}
				},
				labelAuto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Theme mode: auto (system). Click to switch to light mode."
					}
				},
				labelOther: {
					t: 0,
					b: {
						t: 2,
						i: [
							{
								t: 3,
								v: "Theme mode: "
							},
							{
								t: 4,
								k: "mode"
							},
							{
								t: 3,
								v: ". Click to switch mode."
							}
						]
					}
				}
			},
			mockBanner: {
				t: 0,
				b: {
					t: 2,
					i: [{ t: 3 }],
					s: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
				}
			},
			home: {
				hero: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
						}
					},
					viewResults: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "View Results"
						}
					},
					methodology: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Methodology"
						}
					}
				},
				whyItMatters: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Why These Metrics Matter"
						}
					},
					bundleSizeTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Bundle Size"
						}
					},
					bundleSizeDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
						}
					},
					renderingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rendering & Hydration"
						}
					},
					renderingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
						}
					},
					dynamicLoadingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dynamic Loading"
						}
					},
					dynamicLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
						}
					}
				},
				understandingImpact: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Understanding the Impact"
						}
					},
					singleJsonTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Why a single large JSON can hurt performance"
						}
					},
					singleJsonIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
						}
					},
					singleJsonBullet1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "The JSON must be parsed on every page load — blocking the main thread."
						}
					},
					singleJsonBullet2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change."
						}
					},
					singleJsonBullet3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
						}
					},
					tradeOffsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "The trade-offs of dynamic loading"
						}
					},
					tradeOffsIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
						}
					},
					waterfallLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Waterfall requests:"
						}
					},
					waterfallDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
						}
					},
					foucLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Flash of untranslated content (FOUC):"
						}
					},
					foucDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "users may briefly see translation keys or a fallback language before the chunk arrives."
						}
					},
					cacheLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cache invalidation:"
						}
					},
					cacheDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
						}
					},
					measuresTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "What this benchmark measures"
						}
					},
					measuresDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
						}
					}
				},
				resultsTable: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sample Results"
						}
					},
					library: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Library"
						}
					},
					bundleSize: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Bundle Size"
						}
					},
					lookupTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lookup Time"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lazy Loading"
						}
					},
					yes: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yes"
						}
					},
					manual: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Manual"
						}
					},
					builtIn: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Built-in"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "About This Benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
						}
					}
				},
				grid: {
					whyExistsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Why This Exists"
						}
					},
					whyExistsDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
						}
					},
					methodologyTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Methodology"
						}
					},
					methodologyDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
						}
					}
				},
				whatWeMeasure: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "What We Measure"
						}
					},
					bundleSizeImpact: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Bundle size impact"
						}
					},
					bundleSizeImpactDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
						}
					},
					renderingOverhead: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rendering overhead"
						}
					},
					renderingOverheadDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
						}
					},
					hydrationCost: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Hydration cost"
						}
					},
					hydrationCostDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lazy loading effectiveness"
						}
					},
					lazyLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
						}
					},
					localeSwitch: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Locale switch speed"
						}
					},
					localeSwitchDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Blog"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Insights, tutorials, and analysis from the i18n community."
						}
					}
				},
				list: {
					readMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Read More →"
						}
					},
					post1Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Comparing i18n Libraries in 2026: A Deep Dive"
						}
					},
					post1Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "March 15, 2026"
						}
					},
					post1Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results."
						}
					},
					post1Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark"
						}
					},
					post2Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "How to Reduce Your i18n Bundle by 60%"
						}
					},
					post2Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "March 8, 2026"
						}
					},
					post2Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations."
						}
					},
					post2Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutorial"
						}
					},
					post3Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "The State of Internationalization in React"
						}
					},
					post3Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "February 28, 2026"
						}
					},
					post3Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences."
						}
					},
					post3Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analysis"
						}
					},
					post4Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Migrating from react-i18next to Lingui"
						}
					},
					post4Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "February 15, 2026"
						}
					},
					post4Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui."
						}
					},
					post4Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutorial"
						}
					},
					post5Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Server Components and i18n: What Changes?"
						}
					},
					post5Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "February 1, 2026"
						}
					},
					post5Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices."
						}
					},
					post5Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analysis"
						}
					},
					post6Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Methodology: How We Test"
						}
					},
					post6Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "January 20, 2026"
						}
					},
					post6Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility."
						}
					},
					post6Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Meta"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Careers"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
						}
					}
				},
				benefits: {
					remoteLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remote-first"
						}
					},
					remoteValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Work from anywhere in the world"
						}
					},
					payLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Competitive pay"
						}
					},
					payValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Top-of-market compensation"
						}
					},
					ossLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Open source time"
						}
					},
					ossValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20% time for OSS contributions"
						}
					}
				},
				openPositions: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Open Positions"
						}
					},
					applyNow: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Apply Now"
						}
					},
					remote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remote"
						}
					},
					fullTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Full-time"
						}
					},
					partTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Part-time"
						}
					},
					engineering: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Engineering"
						}
					},
					documentation: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Documentation"
						}
					},
					community: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Community"
						}
					},
					sfRemote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "San Francisco / Remote"
						}
					},
					frontendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Senior Frontend Engineer"
						}
					},
					frontendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
						}
					},
					backendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Backend Engineer"
						}
					},
					backendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
						}
					},
					writerTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Technical Writer"
						}
					},
					writerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
						}
					},
					devrelTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "DevRel Engineer"
						}
					},
					devrelDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
						}
					},
					qaTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "QA Engineer"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Get in Touch"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
						}
					}
				},
				form: {
					name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Name"
						}
					},
					yourName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Your name"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Email"
						}
					},
					emailPlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "you@example.com"
						}
					},
					topic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Topic"
						}
					},
					bugReport: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Bug Report"
						}
					},
					newBenchmarkIdea: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "New Benchmark Idea"
						}
					},
					methodologyQuestion: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Methodology Question"
						}
					},
					contribution: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contribution"
						}
					},
					other: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Other"
						}
					},
					message: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Message"
						}
					},
					messagePlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Describe your question or idea..."
						}
					},
					sendMessage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Send Message"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Frequently Asked Questions"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Everything you need to know about i18n Benchmark."
						}
					}
				},
				list: {
					q1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "What is i18n Benchmark?"
						}
					},
					a1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
						}
					},
					q2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "How are benchmarks conducted?"
						}
					},
					a2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
						}
					},
					q3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Which libraries are currently supported?"
						}
					},
					a3: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
						}
					},
					q4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Can I submit my own benchmarks?"
						}
					},
					a4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
						}
					},
					q5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "How often are benchmarks updated?"
						}
					},
					a5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
						}
					},
					q6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Is the data reliable?"
						}
					},
					a6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
						}
					},
					q7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Do you offer consulting services?"
						}
					},
					a7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
						}
					},
					q8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "How can I contribute?"
						}
					},
					a8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Simple, Transparent Pricing"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Choose the plan that fits your team. No hidden fees."
						}
					}
				},
				tiers: {
					starterName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Starter"
						}
					},
					starterPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$0"
						}
					},
					starterPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "forever"
						}
					},
					starterFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "5 benchmark runs/day"
						}
					},
					starterFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "3 libraries"
						}
					},
					starterFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Community support"
						}
					},
					starterFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Public results"
						}
					},
					proName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pro"
						}
					},
					proPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$29"
						}
					},
					proPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "/month"
						}
					},
					proFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Unlimited runs"
						}
					},
					proFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "All libraries"
						}
					},
					proFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Priority support"
						}
					},
					proFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Private results"
						}
					},
					proFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "CI integration"
						}
					},
					proFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Historical data"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Enterprise"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Custom"
						}
					},
					enterpriseFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Everything in Pro"
						}
					},
					enterpriseFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "On-premise option"
						}
					},
					enterpriseFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO & SAML"
						}
					},
					enterpriseFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dedicated account manager"
						}
					},
					enterpriseFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Custom SLAs"
						}
					},
					enterpriseFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Audit logs"
						}
					},
					enterpriseFeature7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Training sessions"
						}
					},
					contactSales: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contact Sales"
						}
					},
					getStarted: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Get Started"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Products"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tools and services to streamline your internationalization workflow."
						}
					}
				},
				grid: {
					learnMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Learn More"
						}
					},
					cliName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark CLI"
						}
					},
					cliDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration."
						}
					},
					cliPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Free"
						}
					},
					cloudName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Cloud"
						}
					},
					cloudDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards."
						}
					},
					cloudPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$29/mo"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Enterprise"
						}
					},
					enterpriseDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support."
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contact Us"
						}
					},
					migrationName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Migration Assistant"
						}
					},
					migrationDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime."
						}
					},
					migrationPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$99 one-time"
						}
					},
					qaName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Translation QA"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Automated quality checks for missing translations, pluralization issues, and context errors."
						}
					},
					qaPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$19/mo"
						}
					},
					optimizerName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Bundle Optimizer"
						}
					},
					optimizerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting."
						}
					},
					optimizerPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$49/mo"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Settings"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Manage your account preferences and configuration."
						}
					}
				},
				profile: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Profile"
						}
					},
					displayName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Display Name"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Email"
						}
					}
				},
				preferences: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Preferences"
						}
					},
					emailNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Email Notifications"
						}
					},
					weeklyReports: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Receive weekly benchmark reports"
						}
					},
					toggleNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Toggle notifications"
						}
					},
					darkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dark Mode"
						}
					},
					darkColorScheme: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Use dark color scheme"
						}
					},
					toggleDarkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Toggle dark mode"
						}
					},
					defaultLanguage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Default Language"
						}
					},
					english: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "English (en)"
						}
					},
					french: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "French (fr)"
						}
					},
					german: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "German (de)"
						}
					},
					spanish: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Spanish (es)"
						}
					},
					japanese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Japanese (ja)"
						}
					},
					chinese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Chinese Simplified (zh-CN)"
						}
					},
					arabic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Arabic (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "API Access"
						}
					},
					apiKey: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "API Key"
						}
					},
					copy: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Copy"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Use this key to access the benchmarking API programmatically."
						}
					}
				},
				footer: {
					cancel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cancel"
						}
					},
					saveChanges: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Save Changes"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Our Team"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
						}
					}
				},
				grid: {
					member1Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sarah Chen"
						}
					},
					member1Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Founder & Lead Engineer"
						}
					},
					member1Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Former Google engineer with 10 years of experience building internationalization systems at scale."
						}
					},
					member2Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Marcus Weber"
						}
					},
					member2Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Performance Engineer"
						}
					},
					member2Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
						}
					},
					member3Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Aisha Patel"
						}
					},
					member3Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Developer Advocate"
						}
					},
					member3Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
						}
					},
					member4Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tomás Rodríguez"
						}
					},
					member4Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Full-Stack Developer"
						}
					},
					member4Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
						}
					},
					member5Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yuki Tanaka"
						}
					},
					member5Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Data Analyst"
						}
					},
					member5Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
						}
					},
					member6Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Elena Kowalski"
						}
					},
					member6Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Community Manager"
						}
					},
					member6Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Manages community contributions, partnerships, and events. Background in open source governance."
						}
					}
				}
			},
			notFound: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "404"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Oops! Page not found"
					}
				},
				returnHome: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Return to Home"
					}
				}
			}
		},
		fr: {
			shared: {
				appName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Bench i18n"
					}
				},
				siteName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Benchmark i18n"
					}
				},
				contactEmail: {
					t: 0,
					b: {
						t: 2,
						i: [
							{ t: 3 },
							{ t: 9 },
							{ t: 3 }
						],
						s: "contact@intlayer.org"
					}
				},
				goToGithub: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Aller sur GitHub"
					}
				}
			},
			header: {
				home: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Accueil"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Méthodologie"
					}
				},
				mockPages: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Pages fictives"
					}
				},
				products: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Produits"
					}
				},
				pricing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Tarifs"
					}
				},
				team: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Équipe"
					}
				},
				blog: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Blog"
					}
				},
				careers: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Carrières"
					}
				},
				faq: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "FAQ"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contact"
					}
				},
				settings: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Paramètres"
					}
				}
			},
			footer: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Benchmark i18n"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application."
					}
				},
				resources: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Ressources"
					}
				},
				github: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHub"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Méthodologie"
					}
				},
				contributing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contribuer"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contact"
					}
				},
				builtWith: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client."
					}
				}
			},
			themeToggle: {
				auto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Thème : automatique"
					}
				},
				dark: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Thème : sombre"
					}
				},
				light: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Thème : clair"
					}
				},
				labelAuto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Mode thème : automatique (système). Cliquez pour passer en mode clair."
					}
				},
				labelOther: {
					t: 0,
					b: {
						t: 2,
						i: [
							{
								t: 3,
								v: "Mode thème : "
							},
							{
								t: 4,
								k: "mode"
							},
							{
								t: 3,
								v: ". Cliquez pour changer de mode."
							}
						]
					}
				}
			},
			mockBanner: {
				t: 0,
				b: {
					t: 2,
					i: [{ t: 3 }],
					s: "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel."
				}
			},
			home: {
				hero: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark i18n"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu."
						}
					},
					viewResults: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Voir les résultats"
						}
					},
					methodology: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Méthodologie"
						}
					}
				},
				whyItMatters: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pourquoi ces métriques comptent"
						}
					},
					bundleSizeTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Taille du bundle"
						}
					},
					bundleSizeDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction."
						}
					},
					renderingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rendu et hydratation"
						}
					},
					renderingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI)."
						}
					},
					dynamicLoadingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Chargement dynamique"
						}
					},
					dynamicLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches."
						}
					}
				},
				understandingImpact: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Comprendre l'impact"
						}
					},
					singleJsonTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pourquoi un unique gros JSON peut nuire aux performances"
						}
					},
					singleJsonIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :"
						}
					},
					singleJsonBullet1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal."
						}
					},
					singleJsonBullet2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé."
						}
					},
					singleJsonBullet3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater."
						}
					},
					tradeOffsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Les compromis du chargement dynamique"
						}
					},
					tradeOffsIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :"
						}
					},
					waterfallLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Requêtes en cascade :"
						}
					},
					waterfallDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires."
						}
					},
					foucLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Flash de contenu non traduit (FOUC) :"
						}
					},
					foucDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment."
						}
					},
					cacheLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Invalidation du cache :"
						}
					},
					cacheDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile."
						}
					},
					measuresTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ce que mesure ce benchmark"
						}
					},
					measuresDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables."
						}
					}
				},
				resultsTable: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Exemple de résultats"
						}
					},
					library: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Bibliothèque"
						}
					},
					bundleSize: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Taille du bundle"
						}
					},
					lookupTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Temps de recherche"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Chargement paresseux"
						}
					},
					yes: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Oui"
						}
					},
					manual: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Manuel"
						}
					},
					builtIn: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Intégré"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "À propos de ce benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions."
						}
					}
				},
				grid: {
					whyExistsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pourquoi ce projet existe"
						}
					},
					whyExistsDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles."
						}
					},
					methodologyTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Méthodologie"
						}
					},
					methodologyDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles."
						}
					}
				},
				whatWeMeasure: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ce que nous mesurons"
						}
					},
					bundleSizeImpact: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Impact sur la taille du bundle"
						}
					},
					bundleSizeImpactDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents."
						}
					},
					renderingOverhead: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Surcharge de rendu"
						}
					},
					renderingOverheadDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles."
						}
					},
					hydrationCost: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Coût d'hydratation"
						}
					},
					hydrationCostDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation."
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Efficacité du chargement paresseux"
						}
					},
					lazyLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?"
						}
					},
					localeSwitch: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Vitesse de changement de langue"
						}
					},
					localeSwitchDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM."
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Blog"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Articles, tutoriels et analyses de la communauté i18n."
						}
					}
				},
				list: {
					readMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lire la suite →"
						}
					},
					post1Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Comparer les bibliothèques i18n en 2026 : plongée détaillée"
						}
					},
					post1Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15 mars 2026"
						}
					},
					post1Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants."
						}
					},
					post1Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark"
						}
					},
					post2Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Réduire votre bundle i18n de 60 %"
						}
					},
					post2Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "8 mars 2026"
						}
					},
					post2Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation."
						}
					},
					post2Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutoriel"
						}
					},
					post3Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "État de l'internationalisation dans l'écosystème React"
						}
					},
					post3Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "28 février 2026"
						}
					},
					post3Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Panorama des tendances, patterns émergents et préférences de la communauté."
						}
					},
					post3Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analyse"
						}
					},
					post4Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Migrer de react-i18next vers Lingui"
						}
					},
					post4Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15 février 2026"
						}
					},
					post4Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction."
						}
					},
					post4Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutoriel"
						}
					},
					post5Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Server Components et i18n : qu'est-ce qui change ?"
						}
					},
					post5Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "1er février 2026"
						}
					},
					post5Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Les React Server Components introduisent de nouveaux motifs pour l'i18n."
						}
					},
					post5Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analyse"
						}
					},
					post6Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Méthodologie de benchmark : comment nous testons"
						}
					},
					post6Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20 janvier 2026"
						}
					},
					post6Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité."
						}
					},
					post6Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Méta"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Carrières"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu."
						}
					}
				},
				benefits: {
					remoteLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remote-first"
						}
					},
					remoteValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Travaillez depuis n'importe où"
						}
					},
					payLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rémunération compétitive"
						}
					},
					payValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Fourchettes haut de marché"
						}
					},
					ossLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Temps open source"
						}
					},
					ossValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20 % du temps pour contribuer à l'OSS"
						}
					}
				},
				openPositions: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Postes ouverts"
						}
					},
					applyNow: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Postuler"
						}
					},
					remote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "À distance"
						}
					},
					fullTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Temps plein"
						}
					},
					partTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Temps partiel"
						}
					},
					engineering: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingénierie"
						}
					},
					documentation: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Documentation"
						}
					},
					community: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Communauté"
						}
					},
					sfRemote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "San Francisco / télétravail"
						}
					},
					frontendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingénieur front-end senior"
						}
					},
					frontendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite."
						}
					},
					backendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingénieur back-end"
						}
					},
					backendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés."
						}
					},
					writerTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rédacteur·rice technique"
						}
					},
					writerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Guides, références d'API et tutoriels pour la plateforme de benchmark."
						}
					},
					devrelTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingénieur DevRel"
						}
					},
					devrelDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Animer la communauté i18n : conférences, ateliers, articles et contributions OSS."
						}
					},
					qaTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingénieur QA"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Garantir la fiabilité des résultats par des tests et validations rigoureux."
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contact"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à"
						}
					}
				},
				form: {
					name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nom"
						}
					},
					yourName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Votre nom"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "E-mail"
						}
					},
					emailPlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "vous@exemple.com"
						}
					},
					topic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sujet"
						}
					},
					bugReport: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rapport de bug"
						}
					},
					newBenchmarkIdea: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Idée de benchmark"
						}
					},
					methodologyQuestion: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Question de méthodologie"
						}
					},
					contribution: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contribution"
						}
					},
					other: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Autre"
						}
					},
					message: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Message"
						}
					},
					messagePlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Décrivez votre question ou idée…"
						}
					},
					sendMessage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Envoyer"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Questions fréquentes"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tout savoir sur i18n Benchmark."
						}
					}
				},
				list: {
					q1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Qu'est-ce qu'i18n Benchmark ?"
						}
					},
					a1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React."
						}
					},
					q2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Comment sont menés les benchmarks ?"
						}
					},
					a2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub."
						}
					},
					q3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Quelles bibliothèques sont prises en charge ?"
						}
					},
					a3: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc."
						}
					},
					q4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Puis-je proposer des benchmarks ?"
						}
					},
					a4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request."
						}
					},
					q5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "À quelle fréquence sont-ils mis à jour ?"
						}
					},
					a5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures."
						}
					},
					q6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Les données sont-elles fiables ?"
						}
					},
					a6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées."
						}
					},
					q7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Proposez-vous du conseil ?"
						}
					},
					a7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n."
						}
					},
					q8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Comment contribuer ?"
						}
					},
					a8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub."
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tarification simple et transparente"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Choisissez l'offre adaptée à votre équipe. Sans frais cachés."
						}
					}
				},
				tiers: {
					starterName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Starter"
						}
					},
					starterPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "0 €"
						}
					},
					starterPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "pour toujours"
						}
					},
					starterFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "5 exécutions de benchmark / jour"
						}
					},
					starterFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "3 bibliothèques"
						}
					},
					starterFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Support communautaire"
						}
					},
					starterFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Résultats publics"
						}
					},
					proName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pro"
						}
					},
					proPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 €"
						}
					},
					proPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "/ mois"
						}
					},
					proFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Exécutions illimitées"
						}
					},
					proFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Toutes les bibliothèques"
						}
					},
					proFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Support prioritaire"
						}
					},
					proFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Résultats privés"
						}
					},
					proFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Intégration CI"
						}
					},
					proFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Historique"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Enterprise"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sur mesure"
						}
					},
					enterpriseFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tout le Pro"
						}
					},
					enterpriseFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Option on-premise"
						}
					},
					enterpriseFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO et SAML"
						}
					},
					enterpriseFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Account manager dédié"
						}
					},
					enterpriseFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SLA sur mesure"
						}
					},
					enterpriseFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Journaux d'audit"
						}
					},
					enterpriseFeature7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sessions de formation"
						}
					},
					contactSales: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contacter les ventes"
						}
					},
					getStarted: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Commencer"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Produits"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Outils et services pour fluidifier votre flux i18n."
						}
					}
				},
				grid: {
					learnMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "En savoir plus"
						}
					},
					cliName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark CLI"
						}
					},
					cliDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lancez des benchmarks en local. Configurations personnalisées et CI."
						}
					},
					cliPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gratuit"
						}
					},
					cloudName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Cloud"
						}
					},
					cloudDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe."
						}
					},
					cloudPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 €/mois"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Enterprise"
						}
					},
					enterpriseDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "On-premise avec SSO, journaux d'audit, SLA et support dédié."
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nous contacter"
						}
					},
					migrationName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Assistant de migration"
						}
					},
					migrationDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption."
						}
					},
					migrationPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "99 € (unique)"
						}
					},
					qaName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "QA des traductions"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contrôles automatiques : clés manquantes, pluriels, contexte."
						}
					},
					qaPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "19 €/mois"
						}
					},
					optimizerName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Optimiseur de bundle"
						}
					},
					optimizerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage)."
						}
					},
					optimizerPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "49 €/mois"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Paramètres"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gérez les préférences et la configuration de votre compte."
						}
					}
				},
				profile: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Profil"
						}
					},
					displayName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nom affiché"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "E-mail"
						}
					}
				},
				preferences: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Préférences"
						}
					},
					emailNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Notifications e-mail"
						}
					},
					weeklyReports: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Recevoir les rapports hebdomadaires"
						}
					},
					toggleNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Activer/désactiver les notifications"
						}
					},
					darkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Mode sombre"
						}
					},
					darkColorScheme: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Utiliser le thème sombre"
						}
					},
					toggleDarkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Basculer le mode sombre"
						}
					},
					defaultLanguage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Langue par défaut"
						}
					},
					english: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Anglais (en)"
						}
					},
					french: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Français (fr)"
						}
					},
					german: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Allemand (de)"
						}
					},
					spanish: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Espagnol (es)"
						}
					},
					japanese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Japonais (ja)"
						}
					},
					chinese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Chinois simplifié (zh-CN)"
						}
					},
					arabic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Arabe (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Accès API"
						}
					},
					apiKey: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Clé API"
						}
					},
					copy: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Copier"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Utilisez cette clé pour appeler l'API de benchmark par programmation."
						}
					}
				},
				footer: {
					cancel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Annuler"
						}
					},
					saveChanges: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Enregistrer"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Notre équipe"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs."
						}
					}
				},
				grid: {
					member1Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sarah Chen"
						}
					},
					member1Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Fondatrice & lead ingénieur"
						}
					},
					member1Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle."
						}
					},
					member2Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Marcus Weber"
						}
					},
					member2Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingénieur performance"
						}
					},
					member2Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel."
						}
					},
					member3Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Aisha Patel"
						}
					},
					member3Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Developer advocate"
						}
					},
					member3Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext."
						}
					},
					member4Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tomás Rodríguez"
						}
					},
					member4Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Développeur full-stack"
						}
					},
					member4Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui."
						}
					},
					member5Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yuki Tanaka"
						}
					},
					member5Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analyste de données"
						}
					},
					member5Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT)."
						}
					},
					member6Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Elena Kowalski"
						}
					},
					member6Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Community manager"
						}
					},
					member6Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contributions communautaires, partenariats et événements — gouvernance open source."
						}
					}
				}
			},
			notFound: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "404"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Oups ! Page introuvable"
					}
				},
				returnHome: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Retour à l'accueil"
					}
				}
			}
		},
		es: {
			shared: {
				appName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Bench"
					}
				},
				siteName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				contactEmail: {
					t: 0,
					b: {
						t: 2,
						i: [
							{ t: 3 },
							{ t: 9 },
							{ t: 3 }
						],
						s: "contact@intlayer.org"
					}
				},
				goToGithub: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Ir a GitHub"
					}
				}
			},
			header: {
				home: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Inicio"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Metodología"
					}
				},
				mockPages: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Páginas de prueba"
					}
				},
				products: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Productos"
					}
				},
				pricing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Precios"
					}
				},
				team: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Equipo"
					}
				},
				blog: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Blog"
					}
				},
				careers: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Carreras"
					}
				},
				faq: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "FAQ"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contacto"
					}
				},
				settings: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Ajustes"
					}
				}
			},
			footer: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación."
					}
				},
				resources: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Recursos"
					}
				},
				github: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHub"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Metodología"
					}
				},
				contributing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contribuir"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contacto"
					}
				},
				builtWith: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente."
					}
				}
			},
			themeToggle: {
				auto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Tema: Auto"
					}
				},
				dark: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Tema: Oscuro"
					}
				},
				light: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Tema: Claro"
					}
				},
				labelAuto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro."
					}
				},
				labelOther: {
					t: 0,
					b: {
						t: 2,
						i: [
							{
								t: 3,
								v: "Modo de tema: "
							},
							{
								t: 4,
								k: "mode"
							},
							{
								t: 3,
								v: ". Haz clic para cambiar de modo."
							}
						]
					}
				}
			},
			mockBanner: {
				t: 0,
				b: {
					t: 2,
					i: [{ t: 3 }],
					s: "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real."
				}
			},
			home: {
				hero: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado."
						}
					},
					viewResults: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ver resultados"
						}
					},
					methodology: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Metodología"
						}
					}
				},
				whyItMatters: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Por qué son importantes estas métricas"
						}
					},
					bundleSizeTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tamaño del bundle"
						}
					},
					bundleSizeDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción."
						}
					},
					renderingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Renderizado e hidratación"
						}
					},
					renderingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI)."
						}
					},
					dynamicLoadingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Carga dinámica"
						}
					},
					dynamicLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial."
						}
					}
				},
				understandingImpact: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Entendiendo el impacto"
						}
					},
					singleJsonTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Por qué un solo JSON grande puede perjudicar el rendimiento"
						}
					},
					singleJsonIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:"
						}
					},
					singleJsonBullet1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal."
						}
					},
					singleJsonBullet2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado."
						}
					},
					singleJsonBullet3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse."
						}
					},
					tradeOffsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Las compensaciones de la carga dinámica"
						}
					},
					tradeOffsIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:"
						}
					},
					waterfallLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Solicitudes en cascada:"
						}
					},
					waterfallDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta."
						}
					},
					foucLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Parpadeo de contenido no traducido (FOUC):"
						}
					},
					foucDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento."
						}
					},
					cacheLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Invalidación de la caché:"
						}
					},
					cacheDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados."
						}
					},
					measuresTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Qué mide este benchmark"
						}
					},
					measuresDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables."
						}
					}
				},
				resultsTable: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Resultados de muestra"
						}
					},
					library: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Biblioteca"
						}
					},
					bundleSize: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tamaño del bundle"
						}
					},
					lookupTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tiempo de búsqueda"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Carga diferida"
						}
					},
					yes: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sí"
						}
					},
					manual: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Manual"
						}
					},
					builtIn: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Integrado"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Acerca de este benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas."
						}
					}
				},
				grid: {
					whyExistsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Por qué existe esto"
						}
					},
					whyExistsDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales."
						}
					},
					methodologyTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Metodología"
						}
					},
					methodologyDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles."
						}
					}
				},
				whatWeMeasure: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Qué medimos"
						}
					},
					bundleSizeImpact: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Impacto en el tamaño del bundle"
						}
					},
					bundleSizeImpactDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas."
						}
					},
					renderingOverhead: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sobrecarga de renderizado"
						}
					},
					renderingOverheadDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes."
						}
					},
					hydrationCost: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Coste de hidratación"
						}
					},
					hydrationCostDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva."
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Eficacia de la carga diferida"
						}
					},
					lazyLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché)."
						}
					},
					localeSwitch: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Velocidad de cambio de idioma"
						}
					},
					localeSwitchDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM."
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Blog"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Información, tutoriales y análisis de la comunidad i18n."
						}
					}
				},
				list: {
					readMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Leer más →"
						}
					},
					post1Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Comparativa de bibliotecas i18n en 2026: Un análisis profundo"
						}
					},
					post1Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15 de marzo de 2026"
						}
					},
					post1Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados."
						}
					},
					post1Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark"
						}
					},
					post2Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cómo reducir tu bundle i18n en un 60%"
						}
					},
					post2Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "8 de marzo de 2026"
						}
					},
					post2Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación."
						}
					},
					post2Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutorial"
						}
					},
					post3Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "El estado de la internacionalización en React"
						}
					},
					post3Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "28 de febrero de 2026"
						}
					},
					post3Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad."
						}
					},
					post3Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Análisis"
						}
					},
					post4Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Migración de react-i18next a Lingui"
						}
					},
					post4Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15 de febrero de 2026"
						}
					},
					post4Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui."
						}
					},
					post4Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutorial"
						}
					},
					post5Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Server Components e i18n: ¿Qué cambia?"
						}
					},
					post5Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "1 de febrero de 2026"
						}
					},
					post5Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas."
						}
					},
					post5Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Análisis"
						}
					},
					post6Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Metodología de benchmark: Cómo probamos"
						}
					},
					post6Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20 de enero de 2026"
						}
					},
					post6Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad."
						}
					},
					post6Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Meta"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Carreras"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo."
						}
					}
				},
				benefits: {
					remoteLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remoto primero"
						}
					},
					remoteValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Trabaja desde cualquier lugar del mundo"
						}
					},
					payLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Salario competitivo"
						}
					},
					payValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Compensación superior a la del mercado"
						}
					},
					ossLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tiempo para el código abierto"
						}
					},
					ossValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20% del tiempo para contribuciones a OSS"
						}
					}
				},
				openPositions: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Puestos vacantes"
						}
					},
					applyNow: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Postular ahora"
						}
					},
					remote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remoto"
						}
					},
					fullTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tiempo completo"
						}
					},
					partTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tiempo parcial"
						}
					},
					engineering: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingeniería"
						}
					},
					documentation: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Documentación"
						}
					},
					community: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Comunidad"
						}
					},
					sfRemote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "San Francisco / Remoto"
						}
					},
					frontendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingeniero Frontend Senior"
						}
					},
					frontendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite."
						}
					},
					backendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingeniero Backend"
						}
					},
					backendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente."
						}
					},
					writerTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Redactor técnico"
						}
					},
					writerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking."
						}
					},
					devrelTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingeniero de DevRel"
						}
					},
					devrelDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto."
						}
					},
					qaTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingeniero de QA"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas."
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ponte en contacto"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en"
						}
					}
				},
				form: {
					name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nombre"
						}
					},
					yourName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tu nombre"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Correo electrónico"
						}
					},
					emailPlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "tu@ejemplo.com"
						}
					},
					topic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tema"
						}
					},
					bugReport: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Informe de error"
						}
					},
					newBenchmarkIdea: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nueva idea de benchmark"
						}
					},
					methodologyQuestion: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pregunta sobre la metodología"
						}
					},
					contribution: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contribución"
						}
					},
					other: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Otro"
						}
					},
					message: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Mensaje"
						}
					},
					messagePlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Describe tu pregunta o idea..."
						}
					},
					sendMessage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Enviar mensaje"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Preguntas frecuentes"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Todo lo que necesitas saber sobre i18n Benchmark."
						}
					}
				},
				list: {
					q1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "¿Qué es i18n Benchmark?"
						}
					},
					a1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React."
						}
					},
					q2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "¿Cómo se realizan los benchmarks?"
						}
					},
					a2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub."
						}
					},
					q3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "¿Qué bibliotecas se admiten actualmente?"
						}
					},
					a3: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee."
						}
					},
					q4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "¿Puedo enviar mis propios benchmarks?"
						}
					},
					a4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen."
						}
					},
					q5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "¿Con qué frecuencia se actualizan los benchmarks?"
						}
					},
					a5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato."
						}
					},
					q6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "¿Son fiables los datos?"
						}
					},
					a6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia."
						}
					},
					q7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "¿Ofrecen servicios de consultoría?"
						}
					},
					a7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones."
						}
					},
					q8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "¿Cómo puedo contribuir?"
						}
					},
					a8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles."
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Precios sencillos y transparentes"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas."
						}
					}
				},
				tiers: {
					starterName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Starter"
						}
					},
					starterPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "0 $"
						}
					},
					starterPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "para siempre"
						}
					},
					starterFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "5 ejecuciones de benchmark al día"
						}
					},
					starterFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "3 bibliotecas"
						}
					},
					starterFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Soporte de la comunidad"
						}
					},
					starterFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Resultados públicos"
						}
					},
					proName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pro"
						}
					},
					proPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $"
						}
					},
					proPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "/mes"
						}
					},
					proFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ejecuciones ilimitadas"
						}
					},
					proFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Todas las bibliotecas"
						}
					},
					proFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Soporte prioritario"
						}
					},
					proFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Resultados privados"
						}
					},
					proFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Integración CI"
						}
					},
					proFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Datos históricos"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Enterprise"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Personalizado"
						}
					},
					enterpriseFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Todo lo que hay en Pro"
						}
					},
					enterpriseFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Opción on-premise"
						}
					},
					enterpriseFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO y SAML"
						}
					},
					enterpriseFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gestor de cuentas dedicado"
						}
					},
					enterpriseFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SLAs personalizados"
						}
					},
					enterpriseFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Registros de auditoría"
						}
					},
					enterpriseFeature7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sesiones de formación"
						}
					},
					contactSales: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contactar con ventas"
						}
					},
					getStarted: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Empezar"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Productos"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Herramientas y servicios para agilizar su flujo de trabajo de internacionalización."
						}
					}
				},
				grid: {
					learnMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Más información"
						}
					},
					cliName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "CLI de Benchmark"
						}
					},
					cliDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI."
						}
					},
					cliPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gratis"
						}
					},
					cloudName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Cloud"
						}
					},
					cloudDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo."
						}
					},
					cloudPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $/mes"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Enterprise"
						}
					},
					enterpriseDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado."
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contáctanos"
						}
					},
					migrationName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Asistente de migración"
						}
					},
					migrationDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad."
						}
					},
					migrationPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "99 $ pago único"
						}
					},
					qaName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "QA de traducción"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto."
						}
					},
					qaPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "19 $/mes"
						}
					},
					optimizerName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Optimizador de bundle"
						}
					},
					optimizerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código."
						}
					},
					optimizerPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "49 $/mes"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ajustes"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gestiona las preferencias y la configuración de tu cuenta."
						}
					}
				},
				profile: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Perfil"
						}
					},
					displayName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nombre visible"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Correo electrónico"
						}
					}
				},
				preferences: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Preferencias"
						}
					},
					emailNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Notificaciones por correo electrónico"
						}
					},
					weeklyReports: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Recibir informes semanales de benchmarks"
						}
					},
					toggleNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cambiar notificaciones"
						}
					},
					darkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Modo oscuro"
						}
					},
					darkColorScheme: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Usar esquema de colores oscuro"
						}
					},
					toggleDarkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cambiar modo oscuro"
						}
					},
					defaultLanguage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Idioma predeterminado"
						}
					},
					english: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Inglés (en)"
						}
					},
					french: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Francés (fr)"
						}
					},
					german: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Alemán (de)"
						}
					},
					spanish: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Español (es)"
						}
					},
					japanese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Japonés (ja)"
						}
					},
					chinese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Chino simplificado (zh-CN)"
						}
					},
					arabic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Árabe (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Acceso API"
						}
					},
					apiKey: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Llave API"
						}
					},
					copy: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Copiar"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Usa esta llave para acceder a la API de benchmarking de forma programática."
						}
					}
				},
				footer: {
					cancel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cancelar"
						}
					},
					saveChanges: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Guardar cambios"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nuestro equipo"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores."
						}
					}
				},
				grid: {
					member1Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sarah Chen"
						}
					},
					member1Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Fundadora e ingeniera principal"
						}
					},
					member1Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala."
						}
					},
					member2Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Marcus Weber"
						}
					},
					member2Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingeniero de rendimiento"
						}
					},
					member2Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel."
						}
					},
					member3Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Aisha Patel"
						}
					},
					member3Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Developer Advocate"
						}
					},
					member3Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext."
						}
					},
					member4Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tomás Rodríguez"
						}
					},
					member4Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Desarrollador Full-Stack"
						}
					},
					member4Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui."
						}
					},
					member5Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yuki Tanaka"
						}
					},
					member5Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analista de datos"
						}
					},
					member5Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT."
						}
					},
					member6Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Elena Kowalski"
						}
					},
					member6Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Responsable de la comunidad"
						}
					},
					member6Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto."
						}
					}
				}
			},
			notFound: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "404"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "¡Ups! Página no encontrada"
					}
				},
				returnHome: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Volver al inicio"
					}
				}
			}
		},
		de: {
			shared: {
				appName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Bench"
					}
				},
				siteName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				contactEmail: {
					t: 0,
					b: {
						t: 2,
						i: [
							{ t: 3 },
							{ t: 9 },
							{ t: 3 }
						],
						s: "contact@intlayer.org"
					}
				},
				goToGithub: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Zu GitHub"
					}
				}
			},
			header: {
				home: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Home"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Methodik"
					}
				},
				mockPages: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Testseiten"
					}
				},
				products: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Produkte"
					}
				},
				pricing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Preise"
					}
				},
				team: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Team"
					}
				},
				blog: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Blog"
					}
				},
				careers: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Karriere"
					}
				},
				faq: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "FAQ"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Kontakt"
					}
				},
				settings: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Einstellungen"
					}
				}
			},
			footer: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität."
					}
				},
				resources: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Ressourcen"
					}
				},
				github: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHub"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Methodik"
					}
				},
				contributing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Beitragen"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Kontakt"
					}
				},
				builtWith: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router."
					}
				}
			},
			themeToggle: {
				auto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Thema: Auto"
					}
				},
				dark: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Thema: Dunkel"
					}
				},
				light: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Thema: Hell"
					}
				},
				labelAuto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln."
					}
				},
				labelOther: {
					t: 0,
					b: {
						t: 2,
						i: [
							{
								t: 3,
								v: "Themenmodus: "
							},
							{
								t: 4,
								k: "mode"
							},
							{
								t: 3,
								v: ". Klicken Sie hier, um den Modus zu wechseln."
							}
						]
					}
				}
			},
			mockBanner: {
				t: 0,
				b: {
					t: 2,
					i: [{ t: 3 }],
					s: "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst."
				}
			},
			home: {
				hero: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen."
						}
					},
					viewResults: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ergebnisse anzeigen"
						}
					},
					methodology: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Methodik"
						}
					}
				},
				whyItMatters: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Warum diese Metriken wichtig sind"
						}
					},
					bundleSizeTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Bundle-Größe"
						}
					},
					bundleSizeDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst."
						}
					},
					renderingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rendering & Hydrierung"
						}
					},
					renderingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt."
						}
					},
					dynamicLoadingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dynamisches Laden"
						}
					},
					dynamicLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich."
						}
					}
				},
				understandingImpact: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Die Auswirkungen verstehen"
						}
					},
					singleJsonTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann"
						}
					},
					singleJsonIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:"
						}
					},
					singleJsonBullet1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert."
						}
					},
					singleJsonBullet2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben."
						}
					},
					singleJsonBullet3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss."
						}
					},
					tradeOffsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Die Kompromisse beim dynamischen Laden"
						}
					},
					tradeOffsIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:"
						}
					},
					waterfallLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Waterfall-Anfragen:"
						}
					},
					waterfallDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht."
						}
					},
					foucLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Flash of Untranslated Content (FOUC):"
						}
					},
					foucDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft."
						}
					},
					cacheLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cache-Invalidierung:"
						}
					},
					cacheDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen."
						}
					},
					measuresTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Was dieser Benchmark misst"
						}
					},
					measuresDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind."
						}
					}
				},
				resultsTable: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Beispielergebnisse"
						}
					},
					library: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Bibliothek"
						}
					},
					bundleSize: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Bundle-Größe"
						}
					},
					lookupTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lookup-Zeit"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lazy Loading"
						}
					},
					yes: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ja"
						}
					},
					manual: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Manuell"
						}
					},
					builtIn: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Integriert"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Über diesen Benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können."
						}
					}
				},
				grid: {
					whyExistsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Warum dies existiert"
						}
					},
					whyExistsDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten."
						}
					},
					methodologyTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Methodik"
						}
					},
					methodologyDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten."
						}
					}
				},
				whatWeMeasure: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Was wir messen"
						}
					},
					bundleSizeImpact: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Auswirkungen auf die Bundle-Größe"
						}
					},
					bundleSizeImpactDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus."
						}
					},
					renderingOverhead: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rendering-Overhead"
						}
					},
					renderingOverheadDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen."
						}
					},
					hydrationCost: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Hydrierungskosten"
						}
					},
					hydrationCostDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird."
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Effektivität von Lazy Loading"
						}
					},
					lazyLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität)."
						}
					},
					localeSwitch: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Geschwindigkeit des Sprachwechsels"
						}
					},
					localeSwitchDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM."
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Blog"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Einblicke, Tutorials und Analysen aus der i18n-Community."
						}
					}
				},
				list: {
					readMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Mehr lesen →"
						}
					},
					post1Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick"
						}
					},
					post1Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15. März 2026"
						}
					},
					post1Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse."
						}
					},
					post1Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark"
						}
					},
					post2Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wie Sie Ihr i18n-Bundle um 60 % reduzieren"
						}
					},
					post2Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "8. März 2026"
						}
					},
					post2Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit."
						}
					},
					post2Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutorial"
						}
					},
					post3Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Der Stand der Internationalisierung in React"
						}
					},
					post3Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "28. Februar 2026"
						}
					},
					post3Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt."
						}
					},
					post3Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analyse"
						}
					},
					post4Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Migration von react-i18next zu Lingui"
						}
					},
					post4Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15. Februar 2026"
						}
					},
					post4Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui."
						}
					},
					post4Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutorial"
						}
					},
					post5Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Server Components und i18n: Was ändert sich?"
						}
					},
					post5Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "1. Februar 2026"
						}
					},
					post5Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices."
						}
					},
					post5Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analyse"
						}
					},
					post6Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark-Methodik: Wie wir testen"
						}
					},
					post6Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20. Januar 2026"
						}
					},
					post6Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit."
						}
					},
					post6Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Meta"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Karriere"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt."
						}
					}
				},
				benefits: {
					remoteLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remote-First"
						}
					},
					remoteValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Arbeiten Sie von überall auf der Welt"
						}
					},
					payLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wettbewerbsfähige Bezahlung"
						}
					},
					payValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Überdurchschnittliche Vergütung"
						}
					},
					ossLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Open-Source-Zeit"
						}
					},
					ossValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20 % der Zeit für OSS-Beiträge"
						}
					}
				},
				openPositions: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Offene Stellen"
						}
					},
					applyNow: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Jetzt bewerben"
						}
					},
					remote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remote"
						}
					},
					fullTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Vollzeit"
						}
					},
					partTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Teilzeit"
						}
					},
					engineering: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Engineering"
						}
					},
					documentation: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dokumentation"
						}
					},
					community: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Community"
						}
					},
					sfRemote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "San Francisco / Remote"
						}
					},
					frontendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Senior Frontend Engineer"
						}
					},
					frontendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite."
						}
					},
					backendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Backend-Ingenieur"
						}
					},
					backendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet."
						}
					},
					writerTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Technischer Redakteur"
						}
					},
					writerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform."
						}
					},
					devrelTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "DevRel-Ingenieur"
						}
					},
					devrelDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge."
						}
					},
					qaTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "QA-Ingenieur"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung."
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Kontakt aufnehmen"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter"
						}
					}
				},
				form: {
					name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Name"
						}
					},
					yourName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ihr Name"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "E-Mail"
						}
					},
					emailPlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "ihre@beispiel.de"
						}
					},
					topic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Thema"
						}
					},
					bugReport: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Fehlerbericht"
						}
					},
					newBenchmarkIdea: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Neue Benchmark-Idee"
						}
					},
					methodologyQuestion: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Frage zur Methodik"
						}
					},
					contribution: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Beitrag"
						}
					},
					other: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sonstiges"
						}
					},
					message: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nachricht"
						}
					},
					messagePlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Beschreiben Sie Ihre Frage oder Idee..."
						}
					},
					sendMessage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nachricht senden"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Häufig gestellte Fragen"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Alles, was Sie über i18n Benchmark wissen müssen."
						}
					}
				},
				list: {
					q1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Was ist i18n Benchmark?"
						}
					},
					a1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht."
						}
					},
					q2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wie werden Benchmarks durchgeführt?"
						}
					},
					a2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar."
						}
					},
					q3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Welche Bibliotheken werden derzeit unterstützt?"
						}
					},
					a3: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee."
						}
					},
					q4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Kann ich meine eigenen Benchmarks einreichen?"
						}
					},
					a4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen."
						}
					},
					q5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wie oft werden Benchmarks aktualisiert?"
						}
					},
					a5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus."
						}
					},
					q6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sind die Daten zuverlässig?"
						}
					},
					a6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht."
						}
					},
					q7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Bieten Sie Beratungsdienstleistungen an?"
						}
					},
					a7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben."
						}
					},
					q8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wie kann ich beitragen?"
						}
					},
					a8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details."
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Einfache, transparente Preisgestaltung"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren."
						}
					}
				},
				tiers: {
					starterName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Starter"
						}
					},
					starterPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "0 $"
						}
					},
					starterPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "für immer"
						}
					},
					starterFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "5 Benchmark-Durchläufe/Tag"
						}
					},
					starterFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "3 Bibliotheken"
						}
					},
					starterFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Community-Support"
						}
					},
					starterFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Öffentliche Ergebnisse"
						}
					},
					proName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pro"
						}
					},
					proPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $"
						}
					},
					proPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "/Monat"
						}
					},
					proFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Unbegrenzte Durchläufe"
						}
					},
					proFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Alle Bibliotheken"
						}
					},
					proFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Priorisierter Support"
						}
					},
					proFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Private Ergebnisse"
						}
					},
					proFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "CI-Integration"
						}
					},
					proFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Historische Daten"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Enterprise"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Individuell"
						}
					},
					enterpriseFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Alles in Pro enthalten"
						}
					},
					enterpriseFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "On-Premise-Option"
						}
					},
					enterpriseFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO & SAML"
						}
					},
					enterpriseFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dedizierter Account Manager"
						}
					},
					enterpriseFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Individuelle SLAs"
						}
					},
					enterpriseFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Audit-Protokolle"
						}
					},
					enterpriseFeature7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Schulungssitzungen"
						}
					},
					contactSales: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Vertrieb kontaktieren"
						}
					},
					getStarted: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Erste Schritte"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Produkte"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows."
						}
					}
				},
				grid: {
					learnMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Mehr erfahren"
						}
					},
					cliName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark CLI"
						}
					},
					cliDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration."
						}
					},
					cliPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Kostenlos"
						}
					},
					cloudName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Cloud"
						}
					},
					cloudDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards."
						}
					},
					cloudPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $/Monat"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Enterprise"
						}
					},
					enterpriseDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support."
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Kontaktieren Sie uns"
						}
					},
					migrationName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Migrationsassistent"
						}
					},
					migrationDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren."
						}
					},
					migrationPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Einmalig 99 $"
						}
					},
					qaName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Übersetzungs-QA"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler."
						}
					},
					qaPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "19 $/Monat"
						}
					},
					optimizerName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Bundle-Optimierer"
						}
					},
					optimizerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting."
						}
					},
					optimizerPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "49 $/Monat"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Einstellungen"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration."
						}
					}
				},
				profile: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Profil"
						}
					},
					displayName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Anzeigename"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "E-Mail"
						}
					}
				},
				preferences: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Einstellungen"
						}
					},
					emailNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "E-Mail-Benachrichtigungen"
						}
					},
					weeklyReports: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wöchentliche Benchmark-Berichte erhalten"
						}
					},
					toggleNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benachrichtigungen umschalten"
						}
					},
					darkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dunkelmodus"
						}
					},
					darkColorScheme: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dunkles Farbschema verwenden"
						}
					},
					toggleDarkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dunkelmodus umschalten"
						}
					},
					defaultLanguage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Standardsprache"
						}
					},
					english: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Englisch (en)"
						}
					},
					french: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Französisch (fr)"
						}
					},
					german: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Deutsch (de)"
						}
					},
					spanish: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Spanisch (es)"
						}
					},
					japanese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Japanisch (ja)"
						}
					},
					chinese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Chinesisch vereinfacht (zh-CN)"
						}
					},
					arabic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Arabisch (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "API-Zugriff"
						}
					},
					apiKey: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "API-Schlüssel"
						}
					},
					copy: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Kopieren"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen."
						}
					}
				},
				footer: {
					cancel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Abbrechen"
						}
					},
					saveChanges: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Änderungen speichern"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Unser Team"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist."
						}
					}
				},
				grid: {
					member1Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sarah Chen"
						}
					},
					member1Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gründerin & Leitende Ingenieurin"
						}
					},
					member1Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab."
						}
					},
					member2Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Marcus Weber"
						}
					},
					member2Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Performance-Ingenieur"
						}
					},
					member2Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel."
						}
					},
					member3Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Aisha Patel"
						}
					},
					member3Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Developer Advocate"
						}
					},
					member3Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext."
						}
					},
					member4Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tomás Rodríguez"
						}
					},
					member4Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Full-Stack-Entwickler"
						}
					},
					member4Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui."
						}
					},
					member5Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yuki Tanaka"
						}
					},
					member5Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Datenanalyst"
						}
					},
					member5Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT."
						}
					},
					member6Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Elena Kowalski"
						}
					},
					member6Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Community Manager"
						}
					},
					member6Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance."
						}
					}
				}
			},
			notFound: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "404"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Hoppla! Seite nicht gefunden"
					}
				},
				returnHome: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Zurück zur Startseite"
					}
				}
			}
		},
		it: {
			shared: {
				appName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Bench"
					}
				},
				siteName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				contactEmail: {
					t: 0,
					b: {
						t: 2,
						i: [
							{ t: 3 },
							{ t: 9 },
							{ t: 3 }
						],
						s: "contact@intlayer.org"
					}
				},
				goToGithub: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Vai su GitHub"
					}
				}
			},
			header: {
				home: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Home"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Metodologia"
					}
				},
				mockPages: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Pagine di test"
					}
				},
				products: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Prodotti"
					}
				},
				pricing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Prezzi"
					}
				},
				team: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Team"
					}
				},
				blog: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Blog"
					}
				},
				careers: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Carriere"
					}
				},
				faq: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "FAQ"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contatti"
					}
				},
				settings: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Impostazioni"
					}
				}
			},
			footer: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app."
					}
				},
				resources: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Risorse"
					}
				},
				github: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHub"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Metodologia"
					}
				},
				contributing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contribuire"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contatti"
					}
				},
				builtWith: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client."
					}
				}
			},
			themeToggle: {
				auto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Tema: Auto"
					}
				},
				dark: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Tema: Scuro"
					}
				},
				light: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Tema: Chiaro"
					}
				},
				labelAuto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara."
					}
				},
				labelOther: {
					t: 0,
					b: {
						t: 2,
						i: [
							{
								t: 3,
								v: "Modalità tema: "
							},
							{
								t: 4,
								k: "mode"
							},
							{
								t: 3,
								v: ". Clicca per cambiare modalità."
							}
						]
					}
				}
			},
			mockBanner: {
				t: 0,
				b: {
					t: 2,
					i: [{ t: 3 }],
					s: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale."
				}
			},
			home: {
				hero: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering."
						}
					},
					viewResults: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Visualizza i risultati"
						}
					},
					methodology: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Metodologia"
						}
					}
				},
				whyItMatters: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Perché queste metriche sono importanti"
						}
					},
					bundleSizeTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dimensione del bundle"
						}
					},
					bundleSizeDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi."
						}
					},
					renderingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rendering e idratazione"
						}
					},
					renderingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI)."
						}
					},
					dynamicLoadingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Caricamento dinamico"
						}
					},
					dynamicLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale."
						}
					}
				},
				understandingImpact: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Capire l'impatto"
						}
					},
					singleJsonTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni"
						}
					},
					singleJsonIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:"
						}
					},
					singleJsonBullet1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale."
						}
					},
					singleJsonBullet2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate."
						}
					},
					singleJsonBullet3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato."
						}
					},
					tradeOffsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "I compromessi del caricamento dinamico"
						}
					},
					tradeOffsIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:"
						}
					},
					waterfallLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Richieste a cascata:"
						}
					},
					waterfallDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete."
						}
					},
					foucLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Flash di contenuti non tradotti (FOUC):"
						}
					},
					foucDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk."
						}
					},
					cacheLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Invalidazione della cache:"
						}
					},
					cacheDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati."
						}
					},
					measuresTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cosa misura questo benchmark"
						}
					},
					measuresDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili."
						}
					}
				},
				resultsTable: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Risultati di esempio"
						}
					},
					library: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Libreria"
						}
					},
					bundleSize: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dimensione del bundle"
						}
					},
					lookupTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tempo di ricerca"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Caricamento lazy"
						}
					},
					yes: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sì"
						}
					},
					manual: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Manuale"
						}
					},
					builtIn: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Integrato"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Informazioni su questo benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche."
						}
					}
				},
				grid: {
					whyExistsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Perché esiste"
						}
					},
					whyExistsDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali."
						}
					},
					methodologyTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Metodologia"
						}
					},
					methodologyDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili."
						}
					}
				},
				whatWeMeasure: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cosa misuriamo"
						}
					},
					bundleSizeImpact: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Impatto sulla dimensione del bundle"
						}
					},
					bundleSizeImpactDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente."
						}
					},
					renderingOverhead: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sovrapprezzo di rendering"
						}
					},
					renderingOverheadDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti."
						}
					},
					hydrationCost: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Costo di idratazione"
						}
					},
					hydrationCostDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva."
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Efficacia del caricamento pigro"
						}
					},
					lazyLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache)."
						}
					},
					localeSwitch: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Velocità di cambio lingua"
						}
					},
					localeSwitchDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM."
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Blog"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Approfondimenti, tutorial e analisi dalla comunità i18n."
						}
					}
				},
				list: {
					readMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Leggi di più →"
						}
					},
					post1Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Confronto delle librerie i18n nel 2026: un'analisi approfondita"
						}
					},
					post1Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15 marzo 2026"
						}
					},
					post1Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti."
						}
					},
					post1Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark"
						}
					},
					post2Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Come ridurre il bundle i18n del 60%"
						}
					},
					post2Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "8 marzo 2026"
						}
					},
					post2Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione."
						}
					},
					post2Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutorial"
						}
					},
					post3Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lo stato dell'internazionalizzazione in React"
						}
					},
					post3Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "28 febbraio 2026"
						}
					},
					post3Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità."
						}
					},
					post3Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analisi"
						}
					},
					post4Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Migrazione da react-i18next a Lingui"
						}
					},
					post4Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15 febbraio 2026"
						}
					},
					post4Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui."
						}
					},
					post4Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutorial"
						}
					},
					post5Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Server Components e i18n: cosa cambia?"
						}
					},
					post5Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "1 febbraio 2026"
						}
					},
					post5Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche."
						}
					},
					post5Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analisi"
						}
					},
					post6Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Metodologia del benchmark: come testiamo"
						}
					},
					post6Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20 gennaio 2026"
						}
					},
					post6Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità."
						}
					},
					post6Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Meta"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Carriere"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo."
						}
					}
				},
				benefits: {
					remoteLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remote-first"
						}
					},
					remoteValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lavora da qualsiasi parte del mondo"
						}
					},
					payLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Retribuzione competitiva"
						}
					},
					payValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Compensazione ai vertici del mercato"
						}
					},
					ossLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tempo per l'open source"
						}
					},
					ossValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20% del tempo per contributi open source"
						}
					}
				},
				openPositions: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Posizioni aperte"
						}
					},
					applyNow: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Candidati ora"
						}
					},
					remote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remoto"
						}
					},
					fullTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tempo pieno"
						}
					},
					partTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Part-time"
						}
					},
					engineering: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Engineering"
						}
					},
					documentation: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Documentazione"
						}
					},
					community: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Comunità"
						}
					},
					sfRemote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "San Francisco / Remoto"
						}
					},
					frontendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingegnere Frontend Senior"
						}
					},
					frontendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite."
						}
					},
					backendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Backend Engineer"
						}
					},
					backendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno."
						}
					},
					writerTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Scrittore tecnico"
						}
					},
					writerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking."
						}
					},
					devrelTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingegnere DevRel"
						}
					},
					devrelDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source."
						}
					},
					qaTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingegnere QA"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi."
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contattaci"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo"
						}
					}
				},
				form: {
					name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nome"
						}
					},
					yourName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Il tuo nome"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Email"
						}
					},
					emailPlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "tu@esempio.com"
						}
					},
					topic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Argomento"
						}
					},
					bugReport: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Segnalazione bug"
						}
					},
					newBenchmarkIdea: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nuova idea di benchmark"
						}
					},
					methodologyQuestion: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Domanda sulla metodologia"
						}
					},
					contribution: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contributo"
						}
					},
					other: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Altro"
						}
					},
					message: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Messaggio"
						}
					},
					messagePlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Descrivi la tua domanda o idea..."
						}
					},
					sendMessage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Invia messaggio"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Domande frequenti"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutto quello che c'è da sapere su i18n Benchmark."
						}
					}
				},
				list: {
					q1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cos'è i18n Benchmark?"
						}
					},
					a1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React."
						}
					},
					q2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Come vengono condotti i benchmark?"
						}
					},
					a2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub."
						}
					},
					q3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Quali librerie sono attualmente supportate?"
						}
					},
					a3: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee."
						}
					},
					q4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Posso inviare i miei benchmark?"
						}
					},
					a4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei."
						}
					},
					q5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Con quale frequenza vengono aggiornati i benchmark?"
						}
					},
					a5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato."
						}
					},
					q6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "I dati sono affidabili?"
						}
					},
					a6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza."
						}
					},
					q7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Offrite servizi di consulenza?"
						}
					},
					a7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli."
						}
					},
					q8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Come posso contribuire?"
						}
					},
					a8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli."
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Prezzi semplici e trasparenti"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Scegli il piano più adatto al tuo team. Nessun costo nascosto."
						}
					}
				},
				tiers: {
					starterName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Starter"
						}
					},
					starterPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "0 $"
						}
					},
					starterPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "per sempre"
						}
					},
					starterFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "5 esecuzioni benchmark al giorno"
						}
					},
					starterFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "3 librerie"
						}
					},
					starterFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Supporto della comunità"
						}
					},
					starterFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Risultati pubblici"
						}
					},
					proName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pro"
						}
					},
					proPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $"
						}
					},
					proPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "/mese"
						}
					},
					proFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Esecuzioni illimitate"
						}
					},
					proFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutte le librerie"
						}
					},
					proFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Supporto prioritario"
						}
					},
					proFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Risultati privati"
						}
					},
					proFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Integrazione CI"
						}
					},
					proFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dati storici"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Enterprise"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Personalizzato"
						}
					},
					enterpriseFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutto quello che c'è in Pro"
						}
					},
					enterpriseFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Opzione on-premise"
						}
					},
					enterpriseFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO e SAML"
						}
					},
					enterpriseFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Account manager dedicato"
						}
					},
					enterpriseFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SLA personalizzati"
						}
					},
					enterpriseFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Log di controllo"
						}
					},
					enterpriseFeature7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sessioni di formazione"
						}
					},
					contactSales: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contatta l'ufficio vendite"
						}
					},
					getStarted: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Inizia ora"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Prodotti"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione."
						}
					}
				},
				grid: {
					learnMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Scopri di più"
						}
					},
					cliName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "CLI del Benchmark"
						}
					},
					cliDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI."
						}
					},
					cliPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gratis"
						}
					},
					cloudName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Cloud"
						}
					},
					cloudDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team."
						}
					},
					cloudPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $/mese"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Enterprise"
						}
					},
					enterpriseDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato."
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contattaci"
						}
					},
					migrationName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Assistente alla migrazione"
						}
					},
					migrationDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività."
						}
					},
					migrationPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "99 $ una tantum"
						}
					},
					qaName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "QA delle traduzioni"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto."
						}
					},
					qaPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "19 $/mese"
						}
					},
					optimizerName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ottimizzatore del bundle"
						}
					},
					optimizerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting."
						}
					},
					optimizerPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "49 $/mese"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Impostazioni"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gestisci le preferenze del tuo account e la configurazione."
						}
					}
				},
				profile: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Profilo"
						}
					},
					displayName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nome visualizzato"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Email"
						}
					}
				},
				preferences: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Preferenze"
						}
					},
					emailNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Notifiche via email"
						}
					},
					weeklyReports: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ricevi rapporti settimanali sui benchmark"
						}
					},
					toggleNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Attiva/disattiva notifiche"
						}
					},
					darkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Modalità scura"
						}
					},
					darkColorScheme: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Usa lo schema colori scuro"
						}
					},
					toggleDarkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Attiva/disattiva modalità scura"
						}
					},
					defaultLanguage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Lingua predefinita"
						}
					},
					english: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Inglese (en)"
						}
					},
					french: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Francese (fr)"
						}
					},
					german: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tedesco (de)"
						}
					},
					spanish: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Spagnolo (es)"
						}
					},
					japanese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Giapponese (ja)"
						}
					},
					chinese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cinese semplificato (zh-CN)"
						}
					},
					arabic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Arabo (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Accesso API"
						}
					},
					apiKey: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Chiave API"
						}
					},
					copy: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Copia"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Usa questa chiave per accedere programmaticamente alle API di benchmarking."
						}
					}
				},
				footer: {
					cancel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Annulla"
						}
					},
					saveChanges: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Salva modifiche"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Il nostro team"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori."
						}
					}
				},
				grid: {
					member1Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sarah Chen"
						}
					},
					member1Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Fondatrice e Responsabile tecnico"
						}
					},
					member1Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala."
						}
					},
					member2Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Marcus Weber"
						}
					},
					member2Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ingegnere delle prestazioni"
						}
					},
					member2Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel."
						}
					},
					member3Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Aisha Patel"
						}
					},
					member3Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Developer Advocate"
						}
					},
					member3Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext."
						}
					},
					member4Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tomás Rodríguez"
						}
					},
					member4Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sviluppatore Full-Stack"
						}
					},
					member4Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui."
						}
					},
					member5Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yuki Tanaka"
						}
					},
					member5Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analista dati"
						}
					},
					member5Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT."
						}
					},
					member6Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Elena Kowalski"
						}
					},
					member6Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Responsable della comunità"
						}
					},
					member6Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source."
						}
					}
				}
			},
			notFound: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "404"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Ops! Pagina non trovata"
					}
				},
				returnHome: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Torna alla Home"
					}
				}
			}
		},
		pt: {
			shared: {
				appName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Bench"
					}
				},
				siteName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				contactEmail: {
					t: 0,
					b: {
						t: 2,
						i: [
							{ t: 3 },
							{ t: 9 },
							{ t: 3 }
						],
						s: "contact@intlayer.org"
					}
				},
				goToGithub: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Ir para o GitHub"
					}
				}
			},
			header: {
				home: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Início"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Metodologia"
					}
				},
				mockPages: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Páginas de Teste"
					}
				},
				products: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Produtos"
					}
				},
				pricing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Preços"
					}
				},
				team: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Equipe"
					}
				},
				blog: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Blog"
					}
				},
				careers: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Carreiras"
					}
				},
				faq: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "FAQ"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contato"
					}
				},
				settings: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Configurações"
					}
				}
			},
			footer: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação."
					}
				},
				resources: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Recursos"
					}
				},
				github: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHub"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Metodologia"
					}
				},
				contributing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contribuindo"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Contato"
					}
				},
				builtWith: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente."
					}
				}
			},
			themeToggle: {
				auto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Tema: Automático"
					}
				},
				dark: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Tema: Escuro"
					}
				},
				light: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Tema: Claro"
					}
				},
				labelAuto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Modo de tema: auto (sistema). Clique para mudar para o modo claro."
					}
				},
				labelOther: {
					t: 0,
					b: {
						t: 2,
						i: [
							{
								t: 3,
								v: "Modo de tema: "
							},
							{
								t: 4,
								k: "mode"
							},
							{
								t: 3,
								v: ". Clique para mudar de modo."
							}
						]
					}
				}
			},
			mockBanner: {
				t: 0,
				b: {
					t: 2,
					i: [{ t: 3 }],
					s: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real."
				}
			},
			home: {
				hero: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização."
						}
					},
					viewResults: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ver Resultados"
						}
					},
					methodology: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Metodologia"
						}
					}
				},
				whyItMatters: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Por que estas métricas importam"
						}
					},
					bundleSizeTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tamanho do bundle"
						}
					},
					bundleSizeDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução."
						}
					},
					renderingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Renderização e hidratação"
						}
					},
					renderingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI)."
						}
					},
					dynamicLoadingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Carregamento dinâmico"
						}
					},
					dynamicLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial."
						}
					}
				},
				understandingImpact: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Entendendo o impacto"
						}
					},
					singleJsonTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Por que um único JSON grande pode prejudicar o desempenho"
						}
					},
					singleJsonIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:"
						}
					},
					singleJsonBullet1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal."
						}
					},
					singleJsonBullet2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado."
						}
					},
					singleJsonBullet3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado."
						}
					},
					tradeOffsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Os trade-offs do carregamento dinâmico"
						}
					},
					tradeOffsIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:"
						}
					},
					waterfallLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Requisições em cascata:"
						}
					},
					waterfallDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips."
						}
					},
					foucLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Flash de conteúdo não traduzido (FOUC):"
						}
					},
					foucDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar."
						}
					},
					cacheLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Invalidação de cache:"
						}
					},
					cacheDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados."
						}
					},
					measuresTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "O que este benchmark mede"
						}
					},
					measuresDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis."
						}
					}
				},
				resultsTable: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Resultados de exemplo"
						}
					},
					library: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Biblioteca"
						}
					},
					bundleSize: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tamanho do Bundle"
						}
					},
					lookupTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tempo de Busca"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Carregamento Lento"
						}
					},
					yes: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sim"
						}
					},
					manual: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Manual"
						}
					},
					builtIn: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Integrado"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sobre este benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas."
						}
					}
				},
				grid: {
					whyExistsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Por que isto existe"
						}
					},
					whyExistsDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais."
						}
					},
					methodologyTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Metodologia"
						}
					},
					methodologyDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis."
						}
					}
				},
				whatWeMeasure: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "O que medimos"
						}
					},
					bundleSizeImpact: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Impacto no tamanho do bundle"
						}
					},
					bundleSizeImpactDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas."
						}
					},
					renderingOverhead: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sobrecarga de renderização"
						}
					},
					renderingOverheadDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes."
						}
					},
					hydrationCost: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Custo de hidratação"
						}
					},
					hydrationCostDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa."
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Eficácia do carregamento lento"
						}
					},
					lazyLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache)."
						}
					},
					localeSwitch: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Velocidade de troca de localidade"
						}
					},
					localeSwitchDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM."
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Blog"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Insights, tutoriais e análises da comunidade i18n."
						}
					}
				},
				list: {
					readMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ler Mais →"
						}
					},
					post1Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Comparando bibliotecas i18n em 2026: um mergulho profundo"
						}
					},
					post1Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15 de março de 2026"
						}
					},
					post1Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes."
						}
					},
					post1Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark"
						}
					},
					post2Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Como reduzir seu bundle i18n em 60%"
						}
					},
					post2Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "8 de março de 2026"
						}
					},
					post2Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build."
						}
					},
					post2Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutorial"
						}
					},
					post3Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "O estado da internacionalização no React"
						}
					},
					post3Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "28 de fevereiro de 2026"
						}
					},
					post3Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade."
						}
					},
					post3Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Análise"
						}
					},
					post4Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Migrando de react-i18next para o Lingui"
						}
					},
					post4Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15 de fevereiro de 2026"
						}
					},
					post4Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui."
						}
					},
					post4Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tutorial"
						}
					},
					post5Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Server Components e i18n: o que muda?"
						}
					},
					post5Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "1 de fevereiro de 2026"
						}
					},
					post5Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas."
						}
					},
					post5Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Análise"
						}
					},
					post6Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Metodologia de benchmark: como testamos"
						}
					},
					post6Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20 de janeiro de 2026"
						}
					},
					post6Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade."
						}
					},
					post6Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Meta"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Carreiras"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo."
						}
					}
				},
				benefits: {
					remoteLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remoto primeiro"
						}
					},
					remoteValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Trabalhe de qualquer lugar do mundo"
						}
					},
					payLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Salário competitivo"
						}
					},
					payValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remuneração acima do mercado"
						}
					},
					ossLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tempo para o código aberto"
						}
					},
					ossValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20% do tempo para contribuições OSS"
						}
					}
				},
				openPositions: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Vagas abertas"
						}
					},
					applyNow: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Candidatar-se agora"
						}
					},
					remote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Remoto"
						}
					},
					fullTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tempo integral"
						}
					},
					partTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tempo parcial"
						}
					},
					engineering: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Engenharia"
						}
					},
					documentation: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Documentação"
						}
					},
					community: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Comunidade"
						}
					},
					sfRemote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "San Francisco / Remoto"
						}
					},
					frontendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Engenheiro Frontend Sênior"
						}
					},
					frontendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite."
						}
					},
					backendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Engenheiro Backend"
						}
					},
					backendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente."
						}
					},
					writerTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Redator técnico"
						}
					},
					writerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking."
						}
					},
					devrelTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Engenheiro de DevRel"
						}
					},
					devrelDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto."
						}
					},
					qaTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Engenheiro de QA"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos."
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Entre em contato"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em"
						}
					}
				},
				form: {
					name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nome"
						}
					},
					yourName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Seu nome"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "E-mail"
						}
					},
					emailPlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "voce@exemplo.com"
						}
					},
					topic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Assunto"
						}
					},
					bugReport: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Relatório de bug"
						}
					},
					newBenchmarkIdea: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nova ideia de benchmark"
						}
					},
					methodologyQuestion: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pergunta sobre metodologia"
						}
					},
					contribution: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contribuição"
						}
					},
					other: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Outro"
						}
					},
					message: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Mensagem"
						}
					},
					messagePlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Descreva sua pergunta ou ideia..."
						}
					},
					sendMessage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Enviar mensagem"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Perguntas frequentes"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tudo o que você precisa saber sobre o i18n Benchmark."
						}
					}
				},
				list: {
					q1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "O que é o i18n Benchmark?"
						}
					},
					a1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React."
						}
					},
					q2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Como os benchmarks são conduzidos?"
						}
					},
					a2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub."
						}
					},
					q3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Quais bibliotecas são suportadas atualmente?"
						}
					},
					a3: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee."
						}
					},
					q4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Posso enviar meus próprios benchmarks?"
						}
					},
					a4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas."
						}
					},
					q5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Com que frequência os benchmarks são atualizados?"
						}
					},
					a5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato."
						}
					},
					q6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Os dados são confiáveis?"
						}
					},
					a6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência."
						}
					},
					q7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Vocês oferecem serviços de consultoria?"
						}
					},
					a7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições."
						}
					},
					q8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Como posso contribuir?"
						}
					},
					a8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes."
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Preços simples e transparentes"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas."
						}
					}
				},
				tiers: {
					starterName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Starter"
						}
					},
					starterPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "0 $"
						}
					},
					starterPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "para sempre"
						}
					},
					starterFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "5 execuções de benchmark/dia"
						}
					},
					starterFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "3 bibliotecas"
						}
					},
					starterFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Suporte da comunidade"
						}
					},
					starterFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Resultados públicos"
						}
					},
					proName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pro"
						}
					},
					proPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $"
						}
					},
					proPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "/mês"
						}
					},
					proFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Execuções ilimitadas"
						}
					},
					proFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Todas as bibliotecas"
						}
					},
					proFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Suporte prioritário"
						}
					},
					proFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Resultados privados"
						}
					},
					proFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Integração CI"
						}
					},
					proFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Dados históricos"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Enterprise"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Personalizado"
						}
					},
					enterpriseFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tudo o que está no Pro"
						}
					},
					enterpriseFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Opção on-premise"
						}
					},
					enterpriseFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO e SAML"
						}
					},
					enterpriseFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gerente de conta dedicado"
						}
					},
					enterpriseFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SLAs personalizados"
						}
					},
					enterpriseFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Logs de auditoria"
						}
					},
					enterpriseFeature7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sessões de treinamento"
						}
					},
					contactSales: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contatar vendas"
						}
					},
					getStarted: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Começar"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Produtos"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização."
						}
					}
				},
				grid: {
					learnMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Saiba Mais"
						}
					},
					cliName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark CLI"
						}
					},
					cliDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI."
						}
					},
					cliPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Grátis"
						}
					},
					cloudName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Cloud"
						}
					},
					cloudDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe."
						}
					},
					cloudPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $/mês"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Enterprise"
						}
					},
					enterpriseDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado."
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Contate-nos"
						}
					},
					migrationName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Assistente de migração"
						}
					},
					migrationDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade."
						}
					},
					migrationPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "99 $ taxa única"
						}
					},
					qaName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "QA de tradução"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto."
						}
					},
					qaPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "19 $/mês"
						}
					},
					optimizerName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Otimizador de bundle"
						}
					},
					optimizerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código."
						}
					},
					optimizerPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "49 $/mês"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Configurações"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gerencie suas preferências de conta e configuração."
						}
					}
				},
				profile: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Perfil"
						}
					},
					displayName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nome de exibição"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "E-mail"
						}
					}
				},
				preferences: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Preferências"
						}
					},
					emailNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Notificações por e-mail"
						}
					},
					weeklyReports: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Receber relatórios semanais de benchmarks"
						}
					},
					toggleNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Alternar notificações"
						}
					},
					darkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Modo Escuro"
						}
					},
					darkColorScheme: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Usar esquema de cores escuro"
						}
					},
					toggleDarkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Alternar modo escuro"
						}
					},
					defaultLanguage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Idioma padrão"
						}
					},
					english: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Inglês (en)"
						}
					},
					french: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Francés (fr)"
						}
					},
					german: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Alemão (de)"
						}
					},
					spanish: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Espanhol (es)"
						}
					},
					japanese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Japonês (ja)"
						}
					},
					chinese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Chinês Simplificado (zh-CN)"
						}
					},
					arabic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Árabe (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Acesso API"
						}
					},
					apiKey: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Chave API"
						}
					},
					copy: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Copiar"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Use esta chave para acessar a API de benchmarking programaticamente."
						}
					}
				},
				footer: {
					cancel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Cancelar"
						}
					},
					saveChanges: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Salvar alterações"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Nossa equipe"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor."
						}
					}
				},
				grid: {
					member1Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sarah Chen"
						}
					},
					member1Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Fundadora e Engenheira Líder"
						}
					},
					member1Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala."
						}
					},
					member2Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Marcus Weber"
						}
					},
					member2Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Engenheiro de performance"
						}
					},
					member2Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel."
						}
					},
					member3Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Aisha Patel"
						}
					},
					member3Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Developer Advocate"
						}
					},
					member3Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext."
						}
					},
					member4Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tomás Rodríguez"
						}
					},
					member4Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Desenvolvedor Full-Stack"
						}
					},
					member4Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui."
						}
					},
					member5Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yuki Tanaka"
						}
					},
					member5Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Analista de dados"
						}
					},
					member5Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT."
						}
					},
					member6Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Elena Kowalski"
						}
					},
					member6Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gerente de comunidade"
						}
					},
					member6Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto."
						}
					}
				}
			},
			notFound: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "404"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Ops! Página não encontrada"
					}
				},
				returnHome: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Voltar para o início"
					}
				}
			}
		},
		zh: {
			shared: {
				appName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Bench"
					}
				},
				siteName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				contactEmail: {
					t: 0,
					b: {
						t: 2,
						i: [
							{ t: 3 },
							{ t: 9 },
							{ t: 3 }
						],
						s: "contact@intlayer.org"
					}
				},
				goToGithub: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "前往 GitHub"
					}
				}
			},
			header: {
				home: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "首页"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "方法论"
					}
				},
				mockPages: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "模拟页面"
					}
				},
				products: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "产品"
					}
				},
				pricing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "价格"
					}
				},
				team: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "团队"
					}
				},
				blog: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "博客"
					}
				},
				careers: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "招聘"
					}
				},
				faq: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "常见问题"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "联系我们"
					}
				},
				settings: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "设置"
					}
				}
			},
			footer: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。"
					}
				},
				resources: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "资源"
					}
				},
				github: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHub"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "方法论"
					}
				},
				contributing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "贡献"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "联系我们"
					}
				},
				builtWith: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。"
					}
				}
			},
			themeToggle: {
				auto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "主题：自动"
					}
				},
				dark: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "主题：深色"
					}
				},
				light: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "主题：浅色"
					}
				},
				labelAuto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "主题模式：自动（系统）。点击切换到浅色模式。"
					}
				},
				labelOther: {
					t: 0,
					b: {
						t: 2,
						i: [
							{
								t: 3,
								v: "主题模式："
							},
							{
								t: 4,
								k: "mode"
							},
							{
								t: 3,
								v: "。点击切换模式。"
							}
						]
					}
				}
			},
			mockBanner: {
				t: 0,
				b: {
					t: 2,
					i: [{ t: 3 }],
					s: "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。"
				}
			},
			home: {
				hero: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。"
						}
					},
					viewResults: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "查看结果"
						}
					},
					methodology: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "方法论"
						}
					}
				},
				whyItMatters: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "为什么这些指标很重要"
						}
					},
					bundleSizeTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "包大小"
						}
					},
					bundleSizeDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。"
						}
					},
					renderingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "渲染与注水"
						}
					},
					renderingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。"
						}
					},
					dynamicLoadingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "动态加载"
						}
					},
					dynamicLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。"
						}
					}
				},
				understandingImpact: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "理解影响"
						}
					},
					singleJsonTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "为什么单个大型 JSON 会损害性能"
						}
					},
					singleJsonIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着："
						}
					},
					singleJsonBullet1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "每次页面加载时都必须解析 JSON — 阻塞主线程。"
						}
					},
					singleJsonBullet2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。"
						}
					},
					singleJsonBullet3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。"
						}
					},
					tradeOffsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "动态加载的权衡"
						}
					},
					tradeOffsIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战："
						}
					},
					waterfallLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "瀑布流请求："
						}
					},
					waterfallDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。"
						}
					},
					foucLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "未翻译内容闪烁 (FOUC)："
						}
					},
					foucDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "在块到达之前，用户可能会短暂看到翻译键或回退语言。"
						}
					},
					cacheLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "缓存失效："
						}
					},
					cacheDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。"
						}
					},
					measuresTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "此基准测试衡量的内容"
						}
					},
					measuresDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。"
						}
					}
				},
				resultsTable: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "示例结果"
						}
					},
					library: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "库"
						}
					},
					bundleSize: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "包大小"
						}
					},
					lookupTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "查找时间"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "延迟加载"
						}
					},
					yes: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "是"
						}
					},
					manual: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "手动"
						}
					},
					builtIn: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "内置"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "关于此基准测试"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。"
						}
					}
				},
				grid: {
					whyExistsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "为什么存在这个测试"
						}
					},
					whyExistsDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。"
						}
					},
					methodologyTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "方法论"
						}
					},
					methodologyDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。"
						}
					}
				},
				whatWeMeasure: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "衡量指标"
						}
					},
					bundleSizeImpact: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "包大小影响"
						}
					},
					bundleSizeImpactDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。"
						}
					},
					renderingOverhead: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "渲染开销"
						}
					},
					renderingOverheadDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。"
						}
					},
					hydrationCost: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "注水成本"
						}
					},
					hydrationCostDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "延迟加载有效性"
						}
					},
					lazyLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。"
						}
					},
					localeSwitch: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "语言环境切换速度"
						}
					},
					localeSwitchDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。"
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "博客"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "来自 i18n 社区的见解、教程和分析。"
						}
					}
				},
				list: {
					readMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "阅读更多 →"
						}
					},
					post1Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026 年 i18n 库对比：深度分析"
						}
					},
					post1Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年3月15日"
						}
					},
					post1Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。"
						}
					},
					post1Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "基准测试"
						}
					},
					post2Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "如何将 i18n 包大小减少 60%"
						}
					},
					post2Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年3月8日"
						}
					},
					post2Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。"
						}
					},
					post2Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "教程"
						}
					},
					post3Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React 国际化现状"
						}
					},
					post3Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年2月28日"
						}
					},
					post3Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。"
						}
					},
					post3Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "分析"
						}
					},
					post4Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "从 react-i18next 迁移到 Lingui"
						}
					},
					post4Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年2月15日"
						}
					},
					post4Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。"
						}
					},
					post4Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "教程"
						}
					},
					post5Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Server Components 与 i18n：发生了什么变化？"
						}
					},
					post5Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年2月1日"
						}
					},
					post5Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。"
						}
					},
					post5Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "分析"
						}
					},
					post6Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "基准测试方法论：我们如何测试"
						}
					},
					post6Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年1月20日"
						}
					},
					post6Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。"
						}
					},
					post6Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Meta"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "招聘"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。"
						}
					}
				},
				benefits: {
					remoteLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "远程优先"
						}
					},
					remoteValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "在世界任何地方工作"
						}
					},
					payLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "具有竞争力的薪酬"
						}
					},
					payValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "市场顶尖的薪资水平"
						}
					},
					ossLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "开源时间"
						}
					},
					ossValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20% 的时间用于 OSS 贡献"
						}
					}
				},
				openPositions: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "开放职位"
						}
					},
					applyNow: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "立即申请"
						}
					},
					remote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "远程"
						}
					},
					fullTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "全职"
						}
					},
					partTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "兼职"
						}
					},
					engineering: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "工程"
						}
					},
					documentation: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "文档"
						}
					},
					community: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "社区"
						}
					},
					sfRemote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "旧金山 / 远程"
						}
					},
					frontendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "高级前端工程师"
						}
					},
					frontendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。"
						}
					},
					backendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "后端工程师"
						}
					},
					backendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。"
						}
					},
					writerTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "技术作家"
						}
					},
					writerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "为我们的基准测试平台编写全面的指南、API 参考和教程。"
						}
					},
					devrelTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "DevRel 工程师"
						}
					},
					devrelDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。"
						}
					},
					qaTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "QA 工程师"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。"
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "取得联系"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "有想法、发现了错误或想贡献基准测试？请联系我们："
						}
					}
				},
				form: {
					name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "姓名"
						}
					},
					yourName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "您的姓名"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "电子邮件"
						}
					},
					emailPlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "you@example.com"
						}
					},
					topic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "主题"
						}
					},
					bugReport: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "错误报告"
						}
					},
					newBenchmarkIdea: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "新基准测试想法"
						}
					},
					methodologyQuestion: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "方法论问题"
						}
					},
					contribution: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "贡献"
						}
					},
					other: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "其他"
						}
					},
					message: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "消息"
						}
					},
					messagePlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "描述您的问题或想法..."
						}
					},
					sendMessage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "发送消息"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "常见问题"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "关于 i18n 基准测试您需要了解的一切。"
						}
					}
				},
				list: {
					q1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "什么是 i18n 基准测试？"
						}
					},
					a1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。"
						}
					},
					q2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "基准测试是如何进行的？"
						}
					},
					a2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。"
						}
					},
					q3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "目前支持哪些库？"
						}
					},
					a3: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。"
						}
					},
					q4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "我可以提交我自己的基准测试吗？"
						}
					},
					a4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。"
						}
					},
					q5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "基准测试多久更新一次？"
						}
					},
					a5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。"
						}
					},
					q6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "数据可靠吗？"
						}
					},
					a6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。"
						}
					},
					q7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "你们提供咨询服务吗？"
						}
					},
					a7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。"
						}
					},
					q8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "我该如何贡献？"
						}
					},
					a8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。"
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "简单透明的定价"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "选择适合您团队的计划。无隐藏费用。"
						}
					}
				},
				tiers: {
					starterName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "入门版"
						}
					},
					starterPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "0 $"
						}
					},
					starterPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "永久"
						}
					},
					starterFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "每天 5 次基准测试运行"
						}
					},
					starterFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "3 个库"
						}
					},
					starterFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "社区支持"
						}
					},
					starterFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "公开结果"
						}
					},
					proName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "专业版"
						}
					},
					proPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $"
						}
					},
					proPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "/月"
						}
					},
					proFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "无限次运行"
						}
					},
					proFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "所有库"
						}
					},
					proFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "优先支持"
						}
					},
					proFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "私有结果"
						}
					},
					proFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "CI 集成"
						}
					},
					proFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "历史数据"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "企业版"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "定制"
						}
					},
					enterpriseFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "包含专业版中的所有功能"
						}
					},
					enterpriseFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "本地部署选项"
						}
					},
					enterpriseFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO 和 SAML"
						}
					},
					enterpriseFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "专属客户经理"
						}
					},
					enterpriseFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "定制 SLA"
						}
					},
					enterpriseFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "审计日志"
						}
					},
					enterpriseFeature7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "培训课程"
						}
					},
					contactSales: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "联系销售"
						}
					},
					getStarted: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "开始使用"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "产品"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "用于简化国际化工作流程的工具和服务。"
						}
					}
				},
				grid: {
					learnMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "了解更多"
						}
					},
					cliName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "基准测试 CLI"
						}
					},
					cliDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "从您的终端本地运行基准测试。支持自定义配置和 CI 集成。"
						}
					},
					cliPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "免费"
						}
					},
					cloudName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "基准测试云"
						}
					},
					cloudDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "具有历史追踪、警报和团队仪表板的自动化云基准测试。"
						}
					},
					cloudPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $/月"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "基准测试企业版"
						}
					},
					enterpriseDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "联系我们"
						}
					},
					migrationName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "迁移助手"
						}
					},
					migrationDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。"
						}
					},
					migrationPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "99 $ 一次性费用"
						}
					},
					qaName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "翻译 QA"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "自动检查翻译缺失、复数问题和上下文错误。"
						}
					},
					qaPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "19 $/月"
						}
					},
					optimizerName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "包优化器"
						}
					},
					optimizerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。"
						}
					},
					optimizerPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "49 $/月"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "设置"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "管理您的账户偏好和配置。"
						}
					}
				},
				profile: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "个人资料"
						}
					},
					displayName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "显示名称"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "电子邮件"
						}
					}
				},
				preferences: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "偏好"
						}
					},
					emailNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "电子邮件通知"
						}
					},
					weeklyReports: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "接收每周基准测试报告"
						}
					},
					toggleNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "切换通知"
						}
					},
					darkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "深色模式"
						}
					},
					darkColorScheme: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "使用深色配色方案"
						}
					},
					toggleDarkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "切换深色模式"
						}
					},
					defaultLanguage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "默认语言"
						}
					},
					english: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "英语 (en)"
						}
					},
					french: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "法语 (fr)"
						}
					},
					german: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "德语 (de)"
						}
					},
					spanish: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "西班牙语 (es)"
						}
					},
					japanese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "日语 (ja)"
						}
					},
					chinese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "简体中文 (zh-CN)"
						}
					},
					arabic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "阿拉伯语 (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "API 访问"
						}
					},
					apiKey: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "API 密钥"
						}
					},
					copy: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "复制"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "使用此密钥以编程方式访问基准测试 API。"
						}
					}
				},
				footer: {
					cancel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "取消"
						}
					},
					saveChanges: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "保存更改"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "我们的团队"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。"
						}
					}
				},
				grid: {
					member1Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sarah Chen"
						}
					},
					member1Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "创始人兼首席工程师"
						}
					},
					member1Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。"
						}
					},
					member2Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Marcus Weber"
						}
					},
					member2Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "性能工程师"
						}
					},
					member2Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。"
						}
					},
					member3Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Aisha Patel"
						}
					},
					member3Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "开发者倡导者"
						}
					},
					member3Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。"
						}
					},
					member4Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tomás Rodríguez"
						}
					},
					member4Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "全栈开发人员"
						}
					},
					member4Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。"
						}
					},
					member5Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yuki Tanaka"
						}
					},
					member5Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "数据分析师"
						}
					},
					member5Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。"
						}
					},
					member6Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Elena Kowalski"
						}
					},
					member6Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "社区经理"
						}
					},
					member6Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。"
						}
					}
				}
			},
			notFound: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "404"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "哎呀！页面未找到"
					}
				},
				returnHome: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "返回首页"
					}
				}
			}
		},
		ja: {
			shared: {
				appName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Bench"
					}
				},
				siteName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				contactEmail: {
					t: 0,
					b: {
						t: 2,
						i: [
							{ t: 3 },
							{ t: 9 },
							{ t: 3 }
						],
						s: "contact@intlayer.org"
					}
				},
				goToGithub: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHubへ"
					}
				}
			},
			header: {
				home: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "ホーム"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "手法"
					}
				},
				mockPages: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "テストページ"
					}
				},
				products: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "製品"
					}
				},
				pricing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "価格"
					}
				},
				team: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "チーム"
					}
				},
				blog: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "ブログ"
					}
				},
				careers: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "採用情報"
					}
				},
				faq: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "FAQ"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "お問い合わせ"
					}
				},
				settings: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "設定"
					}
				}
			},
			footer: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。"
					}
				},
				resources: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "リソース"
					}
				},
				github: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHub"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "手法"
					}
				},
				contributing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "貢献する"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "お問い合わせ"
					}
				},
				builtWith: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。"
					}
				}
			},
			themeToggle: {
				auto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "テーマ：自動"
					}
				},
				dark: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "テーマ：ダーク"
					}
				},
				light: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "テーマ：ライト"
					}
				},
				labelAuto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。"
					}
				},
				labelOther: {
					t: 0,
					b: {
						t: 2,
						i: [
							{
								t: 3,
								v: "テーマモード："
							},
							{
								t: 4,
								k: "mode"
							},
							{
								t: 3,
								v: "。クリックしてモードを切り替えます。"
							}
						]
					}
				}
			},
			mockBanner: {
				t: 0,
				b: {
					t: 2,
					i: [{ t: 3 }],
					s: "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。"
				}
			},
			home: {
				hero: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。"
						}
					},
					viewResults: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "結果を見る"
						}
					},
					methodology: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "手法"
						}
					}
				},
				whyItMatters: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "なぜこれらの指標が重要なのか"
						}
					},
					bundleSizeTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "バンドルサイズ"
						}
					},
					bundleSizeDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。"
						}
					},
					renderingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "レンダリングとハイドレーション"
						}
					},
					renderingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。"
						}
					},
					dynamicLoadingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "動的読み込み"
						}
					},
					dynamicLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。"
						}
					}
				},
				understandingImpact: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "影響を理解する"
						}
					},
					singleJsonTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "なぜ1つの大きなJSONがパフォーマンスを低下させるのか"
						}
					},
					singleJsonIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します："
						}
					},
					singleJsonBullet1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。"
						}
					},
					singleJsonBullet2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。"
						}
					},
					singleJsonBullet3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。"
						}
					},
					tradeOffsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "動的読み込みのトレードオフ"
						}
					},
					tradeOffsIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます："
						}
					},
					waterfallLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ウォーターフォールリクエスト："
						}
					},
					waterfallDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。"
						}
					},
					foucLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "翻訳されていないコンテンツのフラッシュ (FOUC)："
						}
					},
					foucDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。"
						}
					},
					cacheLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "キャッシュの無効化："
						}
					},
					cacheDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。"
						}
					},
					measuresTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "このベンチマークが測定するもの"
						}
					},
					measuresDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。"
						}
					}
				},
				resultsTable: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "サンプル結果"
						}
					},
					library: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ライブラリ"
						}
					},
					bundleSize: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "バンドルサイズ"
						}
					},
					lookupTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ルックアップ時間"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "遅延読み込み"
						}
					},
					yes: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "はい"
						}
					},
					manual: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "手動"
						}
					},
					builtIn: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "内蔵"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "このベンチマークについて"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。"
						}
					}
				},
				grid: {
					whyExistsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "なぜこれが存在するのか"
						}
					},
					whyExistsDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。"
						}
					},
					methodologyTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "手法"
						}
					},
					methodologyDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。"
						}
					}
				},
				whatWeMeasure: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "測定項目"
						}
					},
					bundleSizeImpact: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "バンドルサイズへの影響"
						}
					},
					bundleSizeImpactDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。"
						}
					},
					renderingOverhead: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "レンダリングのオーバーヘッド"
						}
					},
					renderingOverheadDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。"
						}
					},
					hydrationCost: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ハイドレーションコスト"
						}
					},
					hydrationCostDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "遅延読み込みの有効性"
						}
					},
					lazyLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。"
						}
					},
					localeSwitch: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ロケール切り替え速度"
						}
					},
					localeSwitchDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。"
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ブログ"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18nコミュニティからのインサイト、チュートリアル、分析。"
						}
					}
				},
				list: {
					readMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "続きを読む →"
						}
					},
					post1Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年のi18nライブラリ比較：ディープダイブ"
						}
					},
					post1Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年3月15日"
						}
					},
					post1Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。"
						}
					},
					post1Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ベンチマーク"
						}
					},
					post2Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18nバンドルを60%削減する方法"
						}
					},
					post2Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年3月8日"
						}
					},
					post2Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。"
						}
					},
					post2Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "チュートリアル"
						}
					},
					post3Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Reactにおける国際化の現状"
						}
					},
					post3Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年2月28日"
						}
					},
					post3Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。"
						}
					},
					post3Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "分析"
						}
					},
					post4Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "react-i18nextからLinguiへの移行"
						}
					},
					post4Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年2月15日"
						}
					},
					post4Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。"
						}
					},
					post4Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "チュートリアル"
						}
					},
					post5Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Server Componentsとi18n：何が変わるのか？"
						}
					},
					post5Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年2月1日"
						}
					},
					post5Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。"
						}
					},
					post5Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "分析"
						}
					},
					post6Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ベンチマーク手法：テスト方法について"
						}
					},
					post6Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026年1月20日"
						}
					},
					post6Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。"
						}
					},
					post6Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "メタ"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "採用情報"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。"
						}
					}
				},
				benefits: {
					remoteLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "リモートファースト"
						}
					},
					remoteValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "世界中のどこからでも仕事ができます"
						}
					},
					payLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "競争力のある給与"
						}
					},
					payValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "市場トップクラスの報酬"
						}
					},
					ossLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "オープンソースの時間"
						}
					},
					ossValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "時間の20%をOSSへの貢献に"
						}
					}
				},
				openPositions: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "募集中の職種"
						}
					},
					applyNow: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "今すぐ応募"
						}
					},
					remote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "リモート"
						}
					},
					fullTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "フルタイム"
						}
					},
					partTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "パートタイム"
						}
					},
					engineering: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "エンジニアリング"
						}
					},
					documentation: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ドキュメンテーション"
						}
					},
					community: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "コミュニティ"
						}
					},
					sfRemote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "サンフランシスコ / リモート"
						}
					},
					frontendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "シニアフロントエンドエンジニア"
						}
					},
					frontendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。"
						}
					},
					backendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "バックエンドエンジニア"
						}
					},
					backendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。"
						}
					},
					writerTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "テクニカルライター"
						}
					},
					writerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。"
						}
					},
					devrelTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "DevRelエンジニア"
						}
					},
					devrelDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。"
						}
					},
					qaTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "QAエンジニア"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。"
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "お問い合わせ"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください："
						}
					}
				},
				form: {
					name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "名前"
						}
					},
					yourName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "お名前"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "メールアドレス"
						}
					},
					emailPlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "you@example.com"
						}
					},
					topic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "トピック"
						}
					},
					bugReport: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "バグ報告"
						}
					},
					newBenchmarkIdea: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "新しいベンチマークのアイデア"
						}
					},
					methodologyQuestion: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "手法に関する質問"
						}
					},
					contribution: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "貢献"
						}
					},
					other: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "その他"
						}
					},
					message: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "メッセージ"
						}
					},
					messagePlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ご質問やアイデアを記入してください..."
						}
					},
					sendMessage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "メッセージを送信"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "よくある質問"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmarkについて知っておくべきすべてのこと。"
						}
					}
				},
				list: {
					q1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmarkとは何ですか？"
						}
					},
					a1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。"
						}
					},
					q2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ベンチマークはどのように実施されますか？"
						}
					},
					a2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。"
						}
					},
					q3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "現在サポートされているライブラリは何ですか？"
						}
					},
					a3: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。"
						}
					},
					q4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "自分のベンチマークを投稿できますか？"
						}
					},
					a4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。"
						}
					},
					q5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ベンチマークはどのくらいの頻度で更新されますか？"
						}
					},
					a5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。"
						}
					},
					q6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "データは信頼できますか？"
						}
					},
					a6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。"
						}
					},
					q7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "コンサルティングサービスは提供していますか？"
						}
					},
					a7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。"
						}
					},
					q8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "どのように貢献できますか？"
						}
					},
					a8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。"
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "シンプルで透明性の高い価格設定"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "チームに合ったプランをお選びください。隠れた費用はありません。"
						}
					}
				},
				tiers: {
					starterName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "スターター"
						}
					},
					starterPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "0円"
						}
					},
					starterPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ずっと無料"
						}
					},
					starterFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "1日あたり5回のベンチマーク実行"
						}
					},
					starterFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "3ライブラリ"
						}
					},
					starterFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "コミュニティサポート"
						}
					},
					starterFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "公開結果"
						}
					},
					proName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "プロ"
						}
					},
					proPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29ドル"
						}
					},
					proPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "/月"
						}
					},
					proFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "無制限の実行"
						}
					},
					proFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "すべてのライブラリ"
						}
					},
					proFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "優先サポート"
						}
					},
					proFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "非公開の結果"
						}
					},
					proFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "CI統合"
						}
					},
					proFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "履歴データ"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "エンタープライズ"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "カスタム"
						}
					},
					enterpriseFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Proプランのすべてを含む"
						}
					},
					enterpriseFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "オンプレミスオプション"
						}
					},
					enterpriseFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO & SAML"
						}
					},
					enterpriseFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "専任のアカウントマネージャー"
						}
					},
					enterpriseFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "カスタムSLA"
						}
					},
					enterpriseFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "監査ログ"
						}
					},
					enterpriseFeature7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "トレーニングセッション"
						}
					},
					contactSales: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "営業に問い合わせる"
						}
					},
					getStarted: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "始める"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "製品"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "国際化ワークフローを効率化するためのツールとサービス。"
						}
					}
				},
				grid: {
					learnMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "詳細はこちら"
						}
					},
					cliName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark CLI"
						}
					},
					cliDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。"
						}
					},
					cliPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "無料"
						}
					},
					cloudName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Cloud"
						}
					},
					cloudDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。"
						}
					},
					cloudPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29ドル/月"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Enterprise"
						}
					},
					enterpriseDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "お問い合わせ"
						}
					},
					migrationName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "移行アシスタント"
						}
					},
					migrationDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。"
						}
					},
					migrationPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "99ドル（一回限り）"
						}
					},
					qaName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "翻訳QA"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。"
						}
					},
					qaPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "19ドル/月"
						}
					},
					optimizerName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "バンドルオプティマイザー"
						}
					},
					optimizerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。"
						}
					},
					optimizerPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "49ドル/月"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "設定"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "アカウント設定と構成を管理します。"
						}
					}
				},
				profile: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "プロフィール"
						}
					},
					displayName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "表示名"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "メールアドレス"
						}
					}
				},
				preferences: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "設定"
						}
					},
					emailNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "メール通知"
						}
					},
					weeklyReports: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "毎週のベンチマークレポートを受け取る"
						}
					},
					toggleNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "通知の切り替え"
						}
					},
					darkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ダークモード"
						}
					},
					darkColorScheme: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ダークカラー（暗い配色）を使用する"
						}
					},
					toggleDarkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ダークモードの切り替え"
						}
					},
					defaultLanguage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "デフォルトの言語"
						}
					},
					english: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "英語 (en)"
						}
					},
					french: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "フランス語 (fr)"
						}
					},
					german: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ドイツ語 (de)"
						}
					},
					spanish: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "スペイン語 (es)"
						}
					},
					japanese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "日本語 (ja)"
						}
					},
					chinese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "中国語（簡体字） (zh-CN)"
						}
					},
					arabic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "アラビア語 (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "APIアクセス"
						}
					},
					apiKey: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "APIキー"
						}
					},
					copy: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "コピー"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "このキーを使用して、プログラムでベンチマークAPIにアクセスします。"
						}
					}
				},
				footer: {
					cancel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "キャンセル"
						}
					},
					saveChanges: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "変更を保存"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "私たちのチーム"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。"
						}
					}
				},
				grid: {
					member1Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sarah Chen"
						}
					},
					member1Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "創設者 & リードエンジニア"
						}
					},
					member1Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。"
						}
					},
					member2Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Marcus Weber"
						}
					},
					member2Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "パフォーマンスエンジニア"
						}
					},
					member2Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。"
						}
					},
					member3Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Aisha Patel"
						}
					},
					member3Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Developer Advocate"
						}
					},
					member3Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。"
						}
					},
					member4Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tomás Rodríguez"
						}
					},
					member4Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "フルスタックデベロッパー"
						}
					},
					member4Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。"
						}
					},
					member5Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yuki Tanaka"
						}
					},
					member5Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "データアナリスト"
						}
					},
					member5Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。"
						}
					},
					member6Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Elena Kowalski"
						}
					},
					member6Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "コミュニティマネージャー"
						}
					},
					member6Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。"
						}
					}
				}
			},
			notFound: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "404"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "おっと！ページが見つかりません"
					}
				},
				returnHome: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "ホームに戻る"
					}
				}
			}
		},
		ko: {
			shared: {
				appName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Bench"
					}
				},
				siteName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				contactEmail: {
					t: 0,
					b: {
						t: 2,
						i: [
							{ t: 3 },
							{ t: 9 },
							{ t: 3 }
						],
						s: "contact@intlayer.org"
					}
				},
				goToGithub: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHub로 이동"
					}
				}
			},
			header: {
				home: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "홈"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "방법론"
					}
				},
				mockPages: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "모의 페이지"
					}
				},
				products: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "제품"
					}
				},
				pricing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "가격"
					}
				},
				team: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "팀"
					}
				},
				blog: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "블로그"
					}
				},
				careers: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "채용"
					}
				},
				faq: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "FAQ"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "문의"
					}
				},
				settings: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "설정"
					}
				}
			},
			footer: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "국제화 라이브러리가 번들 크기, 로딩 시간, 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈소스 테스트 애플리케이션입니다."
					}
				},
				resources: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "리소스"
					}
				},
				github: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHub"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "방법론"
					}
				},
				contributing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "기여"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "문의"
					}
				},
				builtWith: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark — 오픈소스 프로젝트. Vue, Vite 및 클라이언트 사이드 라우터로 제작되었습니다."
					}
				}
			},
			themeToggle: {
				auto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "테마: 자동"
					}
				},
				dark: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "테마: 다크"
					}
				},
				light: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "테마: 라이트"
					}
				},
				labelAuto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "테마 모드: 자동(시스템). 클릭하면 라이트 모드로 전환됩니다."
					}
				},
				labelOther: {
					t: 0,
					b: {
						t: 2,
						i: [
							{
								t: 3,
								v: "테마 모드: "
							},
							{
								t: 4,
								k: "mode"
							},
							{
								t: 3,
								v: ". 클릭하여 모드를 전환합니다."
							}
						]
					}
				}
			},
			mockBanner: {
				t: 0,
				b: {
					t: 2,
					i: [{ t: 3 }],
					s: "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함합니다. 실제 사업이나 서비스와는 관련이 없습니다."
				}
			},
			home: {
				hero: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "국제화 라이브러리가 번들 크기, 로딩 성능, 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다."
						}
					},
					viewResults: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "결과 보기"
						}
					},
					methodology: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "방법론"
						}
					}
				},
				whyItMatters: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이 지표가 중요한 이유"
						}
					},
					bundleSizeTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "번들 크기"
						}
					},
					bundleSizeDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "번들은 전 세계 모든 사용자에게 전달되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔한 느린 3G 환경에서 그렇습니다. i18n 라이브러리는 몇 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일까지 무게가 크게 다릅니다."
						}
					},
					renderingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "렌더링 및 하이드레이션"
						}
					},
					renderingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "큰 JSON 사전을 모든 컴포넌트에 연결하면 숨겨진 의존성이 생깁니다. 번역 컨텍스트가 바뀌면 트리 전체가 다시 그려질 수 있습니다. SSR 하이드레이션 중에는 방대한 번역 객체를 파싱하고 붙이는 데 지연이 생겨, 페이지가 인터랙티브해지기 전까지 시간이 길어지며 Time to Interactive(TTI)에 직접 영향을 줍니다."
						}
					},
					dynamicLoadingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "동적 로딩"
						}
					},
					dynamicLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "모든 번역을 미리 불러오면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 번역을 라우트나 네임스페이스별로 나누어 현재 페이지에 필요한 것만 보냅니다. 다만 지연 로딩에는 워터폴 요청, 번역되지 않은 콘텐츠의 깜빡임, 캐시 복잡성 같은 트레이드오프가 따릅니다. 두 전략을 모두 측정하는 것이 중요합니다."
						}
					}
				},
				understandingImpact: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "영향 이해하기"
						}
					},
					singleJsonTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "하나의 큰 JSON이 성능을 해치는 이유"
						}
					},
					singleJsonIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "많은 i18n 라이브러리는 React 컨텍스트로 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 매우 크면(수천 개의 키) 번역을 쓰는 모든 컴포넌트가 전체 사전을 참조하게 됩니다. 즉:"
						}
					},
					singleJsonBullet1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "페이지를 불러올 때마다 JSON을 파싱해야 하며 메인 스레드를 막습니다."
						}
					},
					singleJsonBullet2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "컨텍스트 기반 아키텍처에서는 로케일이 바뀔 때 특정 키가 바뀌지 않아도 모든 소비자에게 알림이 가며 연쇄 재렌더링이 일어날 수 있습니다."
						}
					},
					singleJsonBullet3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "서버 사이드 렌더링에서는 전체 사전이 HTML 페이로드에 직렬화되어 다운로드·하이드레이션해야 할 문서 크기가 커집니다."
						}
					},
					tradeOffsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "동적 로딩의 트레이드오프"
						}
					},
					tradeOffsIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "번역을 라우트별 또는 네임스페이스별 청크로 나누면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제도 생깁니다:"
						}
					},
					waterfallLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "워터폴 요청:"
						}
					},
					waterfallDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "앱이 먼저 로드되고 로케일을 결정한 뒤 올바른 청크를 가져와야 하며, 네트워크 왕복이 추가됩니다."
						}
					},
					foucLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "번역되지 않은 콘텐츠의 깜빡임(FOUC):"
						}
					},
					foucDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "청크가 도착하기 전에 사용자가 번역 키나 대체 언어를 잠깐 볼 수 있습니다."
						}
					},
					cacheLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "캐시 무효화:"
						}
					},
					cacheDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "번역을 갱신하려면 사용자가 바뀌지 않은 청크를 다시 받지 않고도 최신 콘텐츠를 받도록 캐시 무효화 전략이 필요합니다."
						}
					},
					measuresTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이 벤치마크가 측정하는 것"
						}
					},
					measuresDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이 테스트 앱은 현실적인 콘텐츠가 있는 10개 페이지라는 통제된 환경에서, JavaScript 번들에 더해지는 무게, 번역 콘텐츠 파싱·렌더링에 쓰이는 시간, 코드 분할과 지연 로딩 전략의 효과라는 세 축으로 i18n 라이브러리를 비교합니다. 각 라이브러리는 동일한 앱에 통합되어 있어 결과를 직접 비교할 수 있습니다."
						}
					}
				},
				resultsTable: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "샘플 결과"
						}
					},
					library: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "라이브러리"
						}
					},
					bundleSize: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "번들 크기"
						}
					},
					lookupTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "조회 시간"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "지연 로딩"
						}
					},
					yes: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "예"
						}
					},
					manual: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "수동"
						}
					},
					builtIn: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "내장"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이 벤치마크에 대해"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이것은 오픈소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 목적은 서로 다른 i18n 라이브러리를 동일한 조건에서 통합·측정할 수 있도록 현실적인 다중 페이지 React 앱을 제공하는 것뿐입니다."
						}
					}
				},
				grid: {
					whyExistsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "존재 이유"
						}
					},
					whyExistsDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n 라이브러리 선택은 장기적인 영향을 미치는 아키텍처 결정입니다. 대부분의 비교는 API 사용성에 초점을 맞추지만, 성능 비용을 측정하는 경우는 적습니다. 라이브러리가 번들에 얼마나 무게를 더하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 주는가? 지연 로딩이 실제로 도움이 되는가, 아니면 비용만 옮기는가? 이 벤치마크는 이런 질문에 실제 데이터로 답합니다."
						}
					},
					methodologyTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "방법론"
						}
					},
					methodologyDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "동일한 10페이지 앱을 라이브러리마다 한 번씩 구축합니다. 프로덕션 번들(rollup-plugin-visualizer)을 측정하고, 로딩 지표에 대해 Lighthouse를 실행하며, 로케일 전환 시 렌더 시간을 React Profiler로 기록합니다. 모든 테스트는 재현 가능한 결과를 위해 일관된 하드웨어에서 CI로 실행됩니다."
						}
					}
				},
				whatWeMeasure: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "측정 항목"
						}
					},
					bundleSizeImpact: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "번들 크기 영향"
						}
					},
					bundleSizeImpactDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 느린 네트워크에서 다운로드 시간에 직접 영향을 줍니다."
						}
					},
					renderingOverhead: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "렌더링 오버헤드"
						}
					},
					renderingOverheadDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "라이브러리가 React 렌더 사이클에 더하는 추가 시간입니다. 단일 컨텍스트 프로바이더로 번역을 주입하는 라이브러리는 컴포넌트 트리 전반에 불필요한 재렌더를 유발할 수 있습니다."
						}
					},
					hydrationCost: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "하이드레이션 비용"
						}
					},
					hydrationCostDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSR 중 번역 데이터는 HTML에 직렬화됩니다. 큰 사전은 HTML 페이로드를 키우고 페이지가 인터랙티브해지는 순간인 하이드레이션을 늦춥니다."
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "지연 로딩 효과"
						}
					},
					lazyLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "라우트나 네임스페이스별로 번역을 나누는 것이 실제로 초기 부하를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 가져오는지입니다."
						}
					},
					localeSwitch: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "로케일 전환 속도"
						}
					},
					localeSwitchDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "실행 중에 한 언어에서 다른 언어로 얼마나 빨리 바꿀 수 있는지 — 새 번역 가져오기, 컴포넌트 재렌더, DOM 업데이트를 포함합니다."
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "블로그"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n 커뮤니티의 인사이트, 튜토리얼, 분석."
						}
					}
				},
				list: {
					readMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "더 읽기 →"
						}
					},
					post1Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026년 i18n 라이브러리 비교: 심층 분석"
						}
					},
					post1Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026년 3월 15일"
						}
					},
					post1Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "성능, 번들 크기, DX를 놓고 12개 국제화 라이브러리를 테스트했습니다. 놀라운 결과를 소개합니다."
						}
					},
					post1Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "벤치마크"
						}
					},
					post2Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n 번들을 60% 줄이는 방법"
						}
					},
					post2Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026년 3월 8일"
						}
					},
					post2Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "지연 로딩, 코드 분할, 컴파일 타임 최적화를 포함한 번역 번들 최적화 실전 전략."
						}
					},
					post2Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "튜토리얼"
						}
					},
					post3Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React에서 국제화의 현주소"
						}
					},
					post3Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026년 2월 28일"
						}
					},
					post3Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "트렌드, 신흥 패턴, 커뮤니티 선호를 다루는 React i18n 생태계 개요."
						}
					},
					post3Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "분석"
						}
					},
					post4Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "react-i18next에서 Lingui로 마이그레이션"
						}
					},
					post4Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026년 2월 15일"
						}
					},
					post4Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "5만 개의 번역 키를 가진 프로덕션 앱을 react-i18next에서 Lingui로 옮기는 단계별 가이드."
						}
					},
					post4Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "튜토리얼"
						}
					},
					post5Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Server Components와 i18n: 무엇이 달라지나"
						}
					},
					post5Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026년 2월 1일"
						}
					},
					post5Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React Server Components가 국제화에 가져오는 새 패턴과 그 함의, 모범 사례를 살펴봅니다."
						}
					},
					post5Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "분석"
						}
					},
					post6Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "벤치마크 방법론: 테스트 방식"
						}
					},
					post6Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "2026년 1월 20일"
						}
					},
					post6Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "테스트 환경, 통계 방법, 재현성을 포함한 벤치마크 방법을 투명하게 공개합니다."
						}
					},
					post6Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "메타"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "채용"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "국제화 생태계를 개선하겠다는 우리의 미션에 합류하세요. 영향력, 투명성, 지속적 학습을 중시하는 원격 우선 팀입니다."
						}
					}
				},
				benefits: {
					remoteLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "원격 우선"
						}
					},
					remoteValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "전 세계 어디서나 근무"
						}
					},
					payLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "경쟁력 있는 보상"
						}
					},
					payValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "시장 상위 수준의 급여"
						}
					},
					ossLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "오픈소스 시간"
						}
					},
					ossValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "시간의 20%를 OSS 기여에"
						}
					}
				},
				openPositions: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "채용 중인 포지션"
						}
					},
					applyNow: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "지원하기"
						}
					},
					remote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "원격"
						}
					},
					fullTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "정규"
						}
					},
					partTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "파트타임"
						}
					},
					engineering: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "엔지니어링"
						}
					},
					documentation: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "문서"
						}
					},
					community: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "커뮤니티"
						}
					},
					sfRemote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "샌프란시스코 / 원격"
						}
					},
					frontendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "시니어 프론트엔드 엔지니어"
						}
					},
					frontendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React, TypeScript, Vite로 벤치마크 대시보드와 개발자 도구를 구축·유지합니다."
						}
					},
					backendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "백엔드 엔지니어"
						}
					},
					backendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마크 인프라를 설계·확장합니다."
						}
					},
					writerTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "기술 작가"
						}
					},
					writerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "벤치마크 플랫폼을 위한 가이드, API 참조, 튜토리얼을 작성합니다."
						}
					},
					devrelTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "DevRel 엔지니어"
						}
					},
					devrelDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "강연, 워크숍, 블로그, 오픈소스 기여를 통해 i18n 커뮤니티와 소통합니다."
						}
					},
					qaTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "QA 엔지니어"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "엄격한 테스트와 검증으로 벤치마크 결과의 정확성과 신뢰성을 보장합니다."
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "문의하기"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "아이디어가 있거나 버그를 찾았거나 벤치마크에 기여하고 싶으신가요? 다음으로 연락 주세요"
						}
					}
				},
				form: {
					name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이름"
						}
					},
					yourName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이름을 입력하세요"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이메일"
						}
					},
					emailPlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "you@example.com"
						}
					},
					topic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "주제"
						}
					},
					bugReport: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "버그 신고"
						}
					},
					newBenchmarkIdea: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "새 벤치마크 아이디어"
						}
					},
					methodologyQuestion: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "방법론 질문"
						}
					},
					contribution: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "기여"
						}
					},
					other: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "기타"
						}
					},
					message: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "메시지"
						}
					},
					messagePlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "질문이나 아이디어를 적어 주세요..."
						}
					},
					sendMessage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "메시지 보내기"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "자주 묻는 질문"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark에 대해 알아야 할 모든 것."
						}
					}
				},
				list: {
					q1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark란 무엇인가요?"
						}
					},
					a1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기, 개발자 경험을 측정·비교하는 오픈소스 벤치마크 스위트입니다."
						}
					},
					q2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "벤치마크는 어떻게 진행되나요?"
						}
					},
					a2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "일관된 하드웨어로 격리된 환경에서 표준화된 테스트를 실행합니다. 통계적 유의성을 위해 각 벤치마크는 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다."
						}
					},
					q3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "현재 지원되는 라이브러리는 무엇인가요?"
						}
					},
					a3: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee를 지원합니다."
						}
					},
					q4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "직접 벤치마크를 제출할 수 있나요?"
						}
					},
					a4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "네, 커뮤니티 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 뒤 풀 리퀘스트를 보내 주세요. 팀이 검토하여 조건을 충족하면 병합합니다."
						}
					},
					q5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "벤치마크는 얼마나 자주 갱신되나요?"
						}
					},
					a5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "각 라이브러리의 최신 안정 버전을 대상으로 매주 모든 벤치마크를 다시 실행합니다. 메이저 버전 출시 시에는 즉시 재벤치마크 사이클을 돌립니다."
						}
					},
					q6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "데이터는 신뢰할 수 있나요?"
						}
					},
					a6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "웜업 실행, 이상치 제거, 신뢰 구간을 포함한 엄격한 통계 방법을 따릅니다. 완전한 투명성을 위해 모든 원시 데이터를 분석과 함께 공개합니다."
						}
					},
					q7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "컨설팅 서비스를 제공하나요?"
						}
					},
					a7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "네. Enterprise 플랜에는 i18n 솔루션을 검토하는 팀을 위한 컨설팅 시간이 포함됩니다. 사용 사례, 규모, 제약에 맞춘 권장 사항을 드릴 수 있습니다."
						}
					},
					q8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "어떻게 기여할 수 있나요?"
						}
					},
					a8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "벤치마크 제출, 문서 개선, 버그 신고, 새 지표 제안, 프로젝트 후원 등 다양한 방법이 있습니다. 자세한 내용은 GitHub 저장소를 참고하세요."
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "단순하고 투명한 가격"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "팀에 맞는 플랜을 선택하세요. 숨겨진 요금은 없습니다."
						}
					}
				},
				tiers: {
					starterName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "스타터"
						}
					},
					starterPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$0"
						}
					},
					starterPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "영구 무료"
						}
					},
					starterFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "하루 5회 벤치마크 실행"
						}
					},
					starterFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "3개 라이브러리"
						}
					},
					starterFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "커뮤니티 지원"
						}
					},
					starterFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "공개 결과"
						}
					},
					proName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pro"
						}
					},
					proPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$29"
						}
					},
					proPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "/월"
						}
					},
					proFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "무제한 실행"
						}
					},
					proFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "모든 라이브러리"
						}
					},
					proFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "우선 지원"
						}
					},
					proFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "비공개 결과"
						}
					},
					proFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "CI 연동"
						}
					},
					proFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "과거 데이터"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "엔터프라이즈"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "맞춤"
						}
					},
					enterpriseFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pro의 모든 것"
						}
					},
					enterpriseFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "온프레미스 옵션"
						}
					},
					enterpriseFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO 및 SAML"
						}
					},
					enterpriseFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "전담 계정 매니저"
						}
					},
					enterpriseFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "맞춤 SLA"
						}
					},
					enterpriseFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "감사 로그"
						}
					},
					enterpriseFeature7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "교육 세션"
						}
					},
					contactSales: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "영업 문의"
						}
					},
					getStarted: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "시작하기"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "제품"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "국제화 워크플로를 간소화하는 도구와 서비스."
						}
					}
				},
				grid: {
					learnMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "자세히 보기"
						}
					},
					cliName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark CLI"
						}
					},
					cliDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "터미널에서 로컬로 벤치마크를 실행합니다. 사용자 정의 구성과 CI 연동을 지원합니다."
						}
					},
					cliPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "무료"
						}
					},
					cloudName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Cloud"
						}
					},
					cloudDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이력 추적, 알림, 팀 대시보드가 있는 자동화 클라우드 벤치마크."
						}
					},
					cloudPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$29/월"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Enterprise"
						}
					},
					enterpriseDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO, 감사 로그, 맞춤 SLA, 전담 지원이 있는 온프레미스 배포."
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "문의"
						}
					},
					migrationName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "마이그레이션 어시스턴트"
						}
					},
					migrationDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "다운타임 없이 i18n 라이브러리 간 코드베이스 이전을 돕는 AI 기반 도구."
						}
					},
					migrationPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$99 일회성"
						}
					},
					qaName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "번역 QA"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "누락된 번역, 복수형 문제, 맥락 오류에 대한 자동 품질 검사."
						}
					},
					qaPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$19/월"
						}
					},
					optimizerName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "번들 옵티마이저"
						}
					},
					optimizerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "트리 쉐이킹과 코드 분할로 프로덕션용 i18n 번들을 분석·최적화합니다."
						}
					},
					optimizerPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "$49/월"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "설정"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "계정 기본 설정과 구성을 관리합니다."
						}
					}
				},
				profile: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "프로필"
						}
					},
					displayName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "표시 이름"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이메일"
						}
					}
				},
				preferences: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "환경 설정"
						}
					},
					emailNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이메일 알림"
						}
					},
					weeklyReports: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "주간 벤치마크 리포트 받기"
						}
					},
					toggleNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "알림 켜기/끄기"
						}
					},
					darkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "다크 모드"
						}
					},
					darkColorScheme: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "어두운 색 구성 사용"
						}
					},
					toggleDarkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "다크 모드 전환"
						}
					},
					defaultLanguage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "기본 언어"
						}
					},
					english: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "영어 (en)"
						}
					},
					french: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "프랑스어 (fr)"
						}
					},
					german: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "독일어 (de)"
						}
					},
					spanish: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "스페인어 (es)"
						}
					},
					japanese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "일본어 (ja)"
						}
					},
					chinese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "중국어 간체 (zh-CN)"
						}
					},
					arabic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "아랍어 (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "API 액세스"
						}
					},
					apiKey: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "API 키"
						}
					},
					copy: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "복사"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "이 키를 사용하면 벤치마크 API를 프로그래밍 방식으로 호출할 수 있습니다."
						}
					}
				},
				footer: {
					cancel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "취소"
						}
					},
					saveChanges: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "변경 저장"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "팀"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark를 만드는 사람들을 소개합니다. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다."
						}
					}
				},
				grid: {
					member1Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Sarah Chen"
						}
					},
					member1Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "창립자 · 리드 엔지니어"
						}
					},
					member1Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "대규모 국제화 시스템 구축 경험 10년의 전 Google 엔지니어."
						}
					},
					member2Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Marcus Weber"
						}
					},
					member2Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "성능 엔지니어"
						}
					},
					member2Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "JavaScript 성능 최적화와 벤치마크 방법론 전문. 이전 직장 Vercel."
						}
					},
					member3Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Aisha Patel"
						}
					},
					member3Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Developer Advocate"
						}
					},
					member3Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "개발자 경험과 교육에 열정. React Conf, JSConf, i18nNext 연사."
						}
					},
					member4Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Tomás Rodríguez"
						}
					},
					member4Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "풀스택 개발자"
						}
					},
					member4Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "벤치마크 인프라와 CI/CD 파이프라인을 유지합니다. Lingui 오픈소스 기여자."
						}
					},
					member5Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Yuki Tanaka"
						}
					},
					member5Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "데이터 분석가"
						}
					},
					member5Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "모든 벤치마크 결과의 통계적 엄밀함을 담당. MIT 응용통계학 박사."
						}
					},
					member6Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Elena Kowalski"
						}
					},
					member6Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "커뮤니티 매니저"
						}
					},
					member6Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "커뮤니티 기여, 파트너십, 이벤트를 담당. 오픈소스 거버넌스 배경."
						}
					}
				}
			},
			notFound: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "404"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "페이지를 찾을 수 없습니다"
					}
				},
				returnHome: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "홈으로 돌아가기"
					}
				}
			}
		},
		ru: {
			shared: {
				appName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Bench"
					}
				},
				siteName: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				contactEmail: {
					t: 0,
					b: {
						t: 2,
						i: [
							{ t: 3 },
							{ t: 9 },
							{ t: 3 }
						],
						s: "contact@intlayer.org"
					}
				},
				goToGithub: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Перейти на GitHub"
					}
				}
			},
			header: {
				home: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Главная"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Методология"
					}
				},
				mockPages: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Тестовые страницы"
					}
				},
				products: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Продукты"
					}
				},
				pricing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Цены"
					}
				},
				team: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Команда"
					}
				},
				blog: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Блог"
					}
				},
				careers: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Вакансии"
					}
				},
				faq: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "FAQ"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Контакт"
					}
				},
				settings: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Настройки"
					}
				}
			},
			footer: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения."
					}
				},
				resources: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Ресурсы"
					}
				},
				github: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "GitHub"
					}
				},
				methodology: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Методология"
					}
				},
				contributing: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Участие в проекте"
					}
				},
				contact: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Контакт"
					}
				},
				builtWith: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера."
					}
				}
			},
			themeToggle: {
				auto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Тема: Авто"
					}
				},
				dark: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Тема: Темная"
					}
				},
				light: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Тема: Светлая"
					}
				},
				labelAuto: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему."
					}
				},
				labelOther: {
					t: 0,
					b: {
						t: 2,
						i: [
							{
								t: 3,
								v: "Режим темы: "
							},
							{
								t: 4,
								k: "mode"
							},
							{
								t: 3,
								v: ". Нажмите, чтобы сменить режим."
							}
						]
					}
				}
			},
			mockBanner: {
				t: 0,
				b: {
					t: 2,
					i: [{ t: 3 }],
					s: "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом."
				}
			},
			home: {
				hero: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга."
						}
					},
					viewResults: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Посмотреть результаты"
						}
					},
					methodology: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Методология"
						}
					}
				},
				whyItMatters: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Почему эти метрики важны"
						}
					},
					bundleSizeTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Размер бандла"
						}
					},
					bundleSizeDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов."
						}
					},
					renderingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Рендеринг и гидратация"
						}
					},
					renderingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI)."
						}
					},
					dynamicLoadingTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Динамическая загрузка"
						}
					},
					dynamicLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии."
						}
					}
				},
				understandingImpact: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Понимание влияния"
						}
					},
					singleJsonTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Почему один большой JSON может снизить производительность"
						}
					},
					singleJsonIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:"
						}
					},
					singleJsonBullet1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "JSON должен парситься при каждой загрузке страницы, что блокирует основной поток."
						}
					},
					singleJsonBullet2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились."
						}
					},
					singleJsonBullet3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать."
						}
					},
					tradeOffsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Компромиссы динамической загрузки"
						}
					},
					tradeOffsIntro: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:"
						}
					},
					waterfallLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Каскадные запросы:"
						}
					},
					waterfallDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки."
						}
					},
					foucLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Мерцание непереведенного контента (FOUC):"
						}
					},
					foucDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части."
						}
					},
					cacheLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Инвалидация кэша:"
						}
					},
					cacheDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей."
						}
					},
					measuresTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Что измеряет этот бенчмарк"
						}
					},
					measuresDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы."
						}
					}
				},
				resultsTable: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Примеры результатов"
						}
					},
					library: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Библиотека"
						}
					},
					bundleSize: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Размер бандла"
						}
					},
					lookupTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Время поиска"
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ленивая загрузка"
						}
					},
					yes: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Да"
						}
					},
					manual: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Вручную"
						}
					},
					builtIn: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Встроено"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Об этом бенчмарке"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях."
						}
					}
				},
				grid: {
					whyExistsTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Зачем это нужно"
						}
					},
					whyExistsDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных."
						}
					},
					methodologyTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Методология"
						}
					},
					methodologyDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов."
						}
					}
				},
				whatWeMeasure: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Что мы измеряем"
						}
					},
					bundleSizeImpact: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Влияние на размер бандла"
						}
					},
					bundleSizeImpactDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях."
						}
					},
					renderingOverhead: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Накладные расходы на рендеринг"
						}
					},
					renderingOverheadDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов."
						}
					},
					hydrationCost: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Стоимость гидратации"
						}
					},
					hydrationCostDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной."
						}
					},
					lazyLoading: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Эффективность ленивой загрузки"
						}
					},
					lazyLoadingDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования)."
						}
					},
					localeSwitch: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Скорость переключения языка"
						}
					},
					localeSwitchDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM."
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Блог"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Инсайты, туториалы и аналитика от сообщества i18n."
						}
					}
				},
				list: {
					readMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Читать далее →"
						}
					},
					post1Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Сравнение библиотек i18n в 2026 году: глубокое погружение"
						}
					},
					post1Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15 марта 2026 г."
						}
					},
					post1Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты."
						}
					},
					post1Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Бенчмарк"
						}
					},
					post2Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Как уменьшить бандл i18n на 60%"
						}
					},
					post2Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "8 марта 2026 г."
						}
					},
					post2Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки."
						}
					},
					post2Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Туториал"
						}
					},
					post3Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Состояние интернационализации в React"
						}
					},
					post3Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "28 февраля 2026 г."
						}
					},
					post3Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества."
						}
					},
					post3Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Анализ"
						}
					},
					post4Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Миграция с react-i18next на Lingui"
						}
					},
					post4Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "15 февраля 2026 г."
						}
					},
					post4Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui."
						}
					},
					post4Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Туториал"
						}
					},
					post5Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Server Components и i18n: что меняется?"
						}
					},
					post5Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "1 февраля 2026 г."
						}
					},
					post5Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики."
						}
					},
					post5Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Анализ"
						}
					},
					post6Title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Методология бенчмарка: как мы тестируем"
						}
					},
					post6Date: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20 января 2026 г."
						}
					},
					post6Excerpt: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость."
						}
					},
					post6Category: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Мета"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Вакансии"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение."
						}
					}
				},
				benefits: {
					remoteLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Удаленная работа"
						}
					},
					remoteValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Работайте из любой точки мира"
						}
					},
					payLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Конкурентная зарплата"
						}
					},
					payValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Вознаграждение выше рыночного"
						}
					},
					ossLabel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Время на open source"
						}
					},
					ossValue: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "20% времени на вклад в OSS"
						}
					}
				},
				openPositions: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Открытые вакансии"
						}
					},
					applyNow: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Подать заявку"
						}
					},
					remote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Удаленно"
						}
					},
					fullTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Полная занятость"
						}
					},
					partTime: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Частичная занятость"
						}
					},
					engineering: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Разработка"
						}
					},
					documentation: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Документация"
						}
					},
					community: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Сообщество"
						}
					},
					sfRemote: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Сан-Франциско / Удаленно"
						}
					},
					frontendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Старший фронтенд-инженер"
						}
					},
					frontendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite."
						}
					},
					backendTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Бэкенд-инженер"
						}
					},
					backendDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно."
						}
					},
					writerTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Технический писатель"
						}
					},
					writerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга."
						}
					},
					devrelTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "DevRel-инженер"
						}
					},
					devrelDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source."
						}
					},
					qaTitle: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "QA-инженер"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации."
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Связаться с нами"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу"
						}
					}
				},
				form: {
					name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Имя"
						}
					},
					yourName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ваше имя"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Электронная почта"
						}
					},
					emailPlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "you@example.com"
						}
					},
					topic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Тема"
						}
					},
					bugReport: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Отчет об ошибке"
						}
					},
					newBenchmarkIdea: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Идея нового бенчмарка"
						}
					},
					methodologyQuestion: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Вопрос по методологии"
						}
					},
					contribution: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Вклад в проект"
						}
					},
					other: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Другое"
						}
					},
					message: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Сообщение"
						}
					},
					messagePlaceholder: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Опишите ваш вопрос или идею..."
						}
					},
					sendMessage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Отправить сообщение"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Часто задаваемые вопросы"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Все, что вам нужно знать об i18n Benchmark."
						}
					}
				},
				list: {
					q1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Что такое i18n Benchmark?"
						}
					},
					a1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React."
						}
					},
					q2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Как проводятся бенчмарки?"
						}
					},
					a2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub."
						}
					},
					q3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Какие библиотеки поддерживаются в данный момент?"
						}
					},
					a3: {
						t: 0,
						b: {
							t: 2,
							i: [
								{ t: 3 },
								{ t: 9 },
								{ t: 3 }
							],
							s: "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee."
						}
					},
					q4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Могу ли я прислать свои собственные бенчмарки?"
						}
					},
					a4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки."
						}
					},
					q5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Как часто обновляются бенчмарки?"
						}
					},
					a5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования."
						}
					},
					q6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Можно ли доверять данным?"
						}
					},
					a6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности."
						}
					},
					q7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Предоставляете ли вы консалтинговые услуги?"
						}
					},
					a7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений."
						}
					},
					q8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Как я могу помочь проекту?"
						}
					},
					a8: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей."
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Простые и прозрачные цены"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Выберите подходящий план для вашей команды. Никаких скрытых комиссий."
						}
					}
				},
				tiers: {
					starterName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Starter"
						}
					},
					starterPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "0 $"
						}
					},
					starterPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "навсегда"
						}
					},
					starterFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "5 запусков бенчмарка в день"
						}
					},
					starterFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "3 библиотеки"
						}
					},
					starterFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Поддержка сообщества"
						}
					},
					starterFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Публичные результаты"
						}
					},
					proName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Pro"
						}
					},
					proPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $"
						}
					},
					proPeriod: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "/мес"
						}
					},
					proFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Неограниченное число запусков"
						}
					},
					proFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Все библиотеки"
						}
					},
					proFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Приоритетная поддержка"
						}
					},
					proFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Приватные результаты"
						}
					},
					proFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Интеграция с CI"
						}
					},
					proFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Исторические данные"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Enterprise"
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Индивидуально"
						}
					},
					enterpriseFeature1: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Все, что есть в Pro"
						}
					},
					enterpriseFeature2: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Локальная установка"
						}
					},
					enterpriseFeature3: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "SSO и SAML"
						}
					},
					enterpriseFeature4: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Персональный менеджер"
						}
					},
					enterpriseFeature5: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Индивидуальные SLA"
						}
					},
					enterpriseFeature6: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Журналы аудита"
						}
					},
					enterpriseFeature7: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Обучающие сессии"
						}
					},
					contactSales: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Связаться с отделом продаж"
						}
					},
					getStarted: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Начать работу"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Продукты"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией."
						}
					}
				},
				grid: {
					learnMore: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Узнать больше"
						}
					},
					cliName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark CLI"
						}
					},
					cliDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI."
						}
					},
					cliPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Бесплатно"
						}
					},
					cloudName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Cloud"
						}
					},
					cloudDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами."
						}
					},
					cloudPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "29 $/мес"
						}
					},
					enterpriseName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Benchmark Enterprise"
						}
					},
					enterpriseDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой."
						}
					},
					enterprisePrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Связаться с нами"
						}
					},
					migrationName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Помощник по миграции"
						}
					},
					migrationDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев."
						}
					},
					migrationPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "99 $ (разово)"
						}
					},
					qaName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "QA переводов"
						}
					},
					qaDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок."
						}
					},
					qaPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "19 $/мес"
						}
					},
					optimizerName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Оптимизатор бандла"
						}
					},
					optimizerDesc: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода."
						}
					},
					optimizerPrice: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "49 $/мес"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Настройки"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Управляйте предпочтениями и конфигурацией вашей учетной записи."
						}
					}
				},
				profile: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Профиль"
						}
					},
					displayName: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Отображаемое имя"
						}
					},
					email: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Электронная почта"
						}
					}
				},
				preferences: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Предпочтения"
						}
					},
					emailNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Уведомления по почте"
						}
					},
					weeklyReports: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Получать еженедельные отчеты о бенчмарках"
						}
					},
					toggleNotifications: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Переключить уведомления"
						}
					},
					darkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Темная тема"
						}
					},
					darkColorScheme: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Использовать темную цветовую схему"
						}
					},
					toggleDarkMode: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Переключить темную тему"
						}
					},
					defaultLanguage: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Язык по умолчанию"
						}
					},
					english: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Английский (en)"
						}
					},
					french: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Французский (fr)"
						}
					},
					german: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Немецкий (de)"
						}
					},
					spanish: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Испанский (es)"
						}
					},
					japanese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Японский (ja)"
						}
					},
					chinese: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Китайский упрощенный (zh-CN)"
						}
					},
					arabic: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Арабский (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Доступ к API"
						}
					},
					apiKey: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Ключ API"
						}
					},
					copy: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Копировать"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Используйте этот ключ для программного доступа к API бенчмаркинга."
						}
					}
				},
				footer: {
					cancel: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Отмена"
						}
					},
					saveChanges: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Сохранить изменения"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Наша команда"
						}
					},
					description: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков."
						}
					}
				},
				grid: {
					member1Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Сара Чен"
						}
					},
					member1Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Основатель и ведущий инженер"
						}
					},
					member1Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах."
						}
					},
					member2Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Маркус Вебер"
						}
					},
					member2Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Инженер по производительности"
						}
					},
					member2Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel."
						}
					},
					member3Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Айша Патель"
						}
					},
					member3Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Developer Advocate"
						}
					},
					member3Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext."
						}
					},
					member4Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Томас Родригес"
						}
					},
					member4Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Full-Stack разработчик"
						}
					},
					member4Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui."
						}
					},
					member5Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Юки Танака"
						}
					},
					member5Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Аналитик данных"
						}
					},
					member5Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT)."
						}
					},
					member6Name: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Елена Ковальски"
						}
					},
					member6Role: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Комьюнити-менеджер"
						}
					},
					member6Bio: {
						t: 0,
						b: {
							t: 2,
							i: [{ t: 3 }],
							s: "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами."
						}
					}
				}
			},
			notFound: {
				title: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "404"
					}
				},
				description: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Упс! Страница не найдена"
					}
				},
				returnHome: {
					t: 0,
					b: {
						t: 2,
						i: [{ t: 3 }],
						s: "Вернуться на главную"
					}
				}
			}
		}
	}
}), Wi = s({
	__name: "Wrapper",
	setup(e) {
		let t = l()?.appContext.app;
		return t && !t.config.globalProperties.$i18n && t.use(Ui), (e, t) => b(e.$slots, "default");
	}
}), Gi = { render() {
	return d(Wi, {}, { default: () => d(ne) });
} };
export { Gi as default };

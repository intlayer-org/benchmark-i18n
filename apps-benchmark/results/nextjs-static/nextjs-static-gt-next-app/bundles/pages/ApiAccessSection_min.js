import { Profiler as e, useEffect as t, useId as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var a = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), o = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), s = /* @__PURE__ */ a(((e, t) => {
	t.exports = {};
})), c = /* @__PURE__ */ a(((e) => {
	var t = function(e, n) {
		return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, t(e, n);
	};
	function n(e, n) {
		if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
		function r() {
			this.constructor = e;
		}
		t(e, n), e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	}
	var r = function() {
		return r = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, r.apply(this, arguments);
	};
	function i(e, t) {
		var n = {};
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (e != null && typeof Object.getOwnPropertySymbols == "function") {
			var i = 0;
			for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
		}
		return n;
	}
	function a(e, t, n, r) {
		var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
		if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
		else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
		return a > 3 && o && Object.defineProperty(t, n, o), o;
	}
	function o(e, t) {
		return function(n, r) {
			t(n, r, e);
		};
	}
	function c(e, t, n, r, i, a) {
		function o(e) {
			if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
			return e;
		}
		for (var s, c = r.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
			var m = {};
			for (var h in r) m[h] = h === "access" ? {} : r[h];
			for (var h in r.access) m.access[h] = r.access[h];
			m.addInitializer = function(e) {
				if (f) throw TypeError("Cannot add initializers after decoration has completed");
				a.push(o(e || null));
			};
			var g = (0, n[p])(c === "accessor" ? {
				get: d.get,
				set: d.set
			} : d[l], m);
			if (c === "accessor") {
				if (g === void 0) continue;
				if (typeof g != "object" || !g) throw TypeError("Object expected");
				(s = o(g.get)) && (d.get = s), (s = o(g.set)) && (d.set = s), (s = o(g.init)) && i.unshift(s);
			} else (s = o(g)) && (c === "field" ? i.unshift(s) : d[l] = s);
		}
		u && Object.defineProperty(u, r.name, d), f = !0;
	}
	function l(e, t, n) {
		for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
		return r ? n : void 0;
	}
	function u(e) {
		return typeof e == "symbol" ? e : `${e}`;
	}
	function d(e, t, n) {
		return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
			configurable: !0,
			value: n ? `${n} ${t}` : t
		});
	}
	function f(e, t) {
		if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
	}
	function p(e, t, n, r) {
		return new (n ||= Promise)(function(i, a) {
			function o(e) {
				try {
					c(r.next(e));
				} catch (e) {
					a(e);
				}
			}
			function s(e) {
				try {
					c(r.throw(e));
				} catch (e) {
					a(e);
				}
			}
			function c(e) {
				var t;
				e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
					e(t);
				})).then(o, s);
			}
			c((r = r.apply(e, t || [])).next());
		});
	}
	function m(e, t) {
		var n, r, i, a = {
			label: 0,
			sent: function() {
				if (1 & i[0]) throw i[1];
				return i[1];
			},
			trys: [],
			ops: []
		}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
		return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
			return this;
		}), o;
		function s(s) {
			return function(c) {
				return function(s) {
					if (n) throw TypeError("Generator is already executing.");
					for (; o && (o = 0, s[0] && (a = 0)), a;) try {
						if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
						switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
							case 0:
							case 1:
								i = s;
								break;
							case 4: return a.label++, {
								value: s[1],
								done: !1
							};
							case 5:
								a.label++, r = s[1], s = [0];
								continue;
							case 7:
								s = a.ops.pop(), a.trys.pop();
								continue;
							default:
								if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
									a = 0;
									continue;
								}
								if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
									a.label = s[1];
									break;
								}
								if (s[0] === 6 && a.label < i[1]) {
									a.label = i[1], i = s;
									break;
								}
								if (i && a.label < i[2]) {
									a.label = i[2], a.ops.push(s);
									break;
								}
								i[2] && a.ops.pop(), a.trys.pop();
								continue;
						}
						s = t.call(e, a);
					} catch (e) {
						s = [6, e], r = 0;
					} finally {
						n = i = 0;
					}
					if (5 & s[0]) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					};
				}([s, c]);
			};
		}
	}
	var h = Object.create ? function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	} : function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	};
	function g(e, t) {
		for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || h(t, e, n);
	}
	function _(e) {
		var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
		if (n) return n.call(e);
		if (e && typeof e.length == "number") return { next: function() {
			return e && r >= e.length && (e = void 0), {
				value: e && e[r++],
				done: !e
			};
		} };
		throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function v(e, t) {
		var n = typeof Symbol == "function" && e[Symbol.iterator];
		if (!n) return e;
		var r, i, a = n.call(e), o = [];
		try {
			for (; (t === void 0 || t-- > 0) && !(r = a.next()).done;) o.push(r.value);
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				r && !r.done && (n = a.return) && n.call(a);
			} finally {
				if (i) throw i.error;
			}
		}
		return o;
	}
	function y() {
		for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
		return e;
	}
	function b() {
		for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
		var r = Array(e), i = 0;
		for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
		return r;
	}
	function x(e, t, n) {
		if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
		return e.concat(r || Array.prototype.slice.call(t));
	}
	function S(e) {
		return this instanceof S ? (this.v = e, this) : new S(e);
	}
	function C(e, t, n) {
		if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
		var r, i = n.apply(e, t || []), a = [];
		return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
			return function(t) {
				return Promise.resolve(t).then(e, l);
			};
		}), r[Symbol.asyncIterator] = function() {
			return this;
		}, r;
		function o(e, t) {
			i[e] && (r[e] = function(t) {
				return new Promise(function(n, r) {
					a.push([
						e,
						t,
						n,
						r
					]) > 1 || s(e, t);
				});
			}, t && (r[e] = t(r[e])));
		}
		function s(e, t) {
			try {
				(n = i[e](t)).value instanceof S ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
			} catch (e) {
				u(a[0][3], e);
			}
			var n;
		}
		function c(e) {
			s("next", e);
		}
		function l(e) {
			s("throw", e);
		}
		function u(e, t) {
			e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
		}
	}
	function w(e) {
		var t, n;
		return t = {}, r("next"), r("throw", function(e) {
			throw e;
		}), r("return"), t[Symbol.iterator] = function() {
			return this;
		}, t;
		function r(r, i) {
			t[r] = e[r] ? function(t) {
				return (n = !n) ? {
					value: S(e[r](t)),
					done: !1
				} : i ? i(t) : t;
			} : i;
		}
	}
	function T(e) {
		if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
		var t, n = e[Symbol.asyncIterator];
		return n ? n.call(e) : (e = _(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
			return this;
		}, t);
		function r(n) {
			t[n] = e[n] && function(t) {
				return new Promise(function(r, i) {
					(function(e, t, n, r) {
						Promise.resolve(r).then(function(t) {
							e({
								value: t,
								done: n
							});
						}, t);
					})(r, i, (t = e[n](t)).done, t.value);
				});
			};
		}
	}
	function E(e, t) {
		return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
	}
	var D = Object.create ? function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	} : function(e, t) {
		e.default = t;
	}, O = function(e) {
		return O = Object.getOwnPropertyNames || function(e) {
			var t = [];
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
			return t;
		}, O(e);
	};
	function k(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (e != null) for (var n = O(e), r = 0; r < n.length; r++) n[r] !== "default" && h(t, e, n[r]);
		return D(t, e), t;
	}
	function A(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function j(e, t, n, r) {
		if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
		if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
		return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
	}
	function M(e, t, n, r, i) {
		if (r === "m") throw TypeError("Private method is not writable");
		if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
		if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
		return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
	}
	function N(e, t) {
		if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
		return typeof e == "function" ? t === e : e.has(t);
	}
	function P(e, t, n) {
		if (t != null) {
			if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
			var r, i;
			if (n) {
				if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
				r = t[Symbol.asyncDispose];
			}
			if (r === void 0) {
				if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
				r = t[Symbol.dispose], n && (i = r);
			}
			if (typeof r != "function") throw TypeError("Object not disposable.");
			i && (r = function() {
				try {
					i.call(this);
				} catch (e) {
					return Promise.reject(e);
				}
			}), e.stack.push({
				value: t,
				dispose: r,
				async: n
			});
		} else n && e.stack.push({ async: !0 });
		return t;
	}
	var F = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
		var r = Error(n);
		return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
	};
	function I(e) {
		function t(t) {
			e.error = e.hasError ? new F(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
		}
		var n, r = 0;
		return function i() {
			for (; n = e.stack.pop();) try {
				if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
				if (n.dispose) {
					var a = n.dispose.call(n.value);
					if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
						return t(e), i();
					});
				} else r |= 1;
			} catch (e) {
				t(e);
			}
			if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
			if (e.hasError) throw e.error;
		}();
	}
	function L(e, t) {
		return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
			return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
		}) : e;
	}
	var R, ee, te, ne, re, ie, ae = Object.freeze({
		__proto__: null,
		__addDisposableResource: P,
		get __assign() {
			return r;
		},
		__asyncDelegator: w,
		__asyncGenerator: C,
		__asyncValues: T,
		__await: S,
		__awaiter: p,
		__classPrivateFieldGet: j,
		__classPrivateFieldIn: N,
		__classPrivateFieldSet: M,
		__createBinding: h,
		__decorate: a,
		__disposeResources: I,
		__esDecorate: c,
		__exportStar: g,
		__extends: n,
		__generator: m,
		__importDefault: A,
		__importStar: k,
		__makeTemplateObject: E,
		__metadata: f,
		__param: o,
		__propKey: u,
		__read: v,
		__rest: i,
		__rewriteRelativeImportExtension: L,
		__runInitializers: l,
		__setFunctionName: d,
		__spread: y,
		__spreadArray: x,
		__spreadArrays: b,
		__values: _,
		default: {
			__extends: n,
			__assign: r,
			__rest: i,
			__decorate: a,
			__param: o,
			__esDecorate: c,
			__runInitializers: l,
			__propKey: u,
			__setFunctionName: d,
			__metadata: f,
			__awaiter: p,
			__generator: m,
			__createBinding: h,
			__exportStar: g,
			__values: _,
			__read: v,
			__spread: y,
			__spreadArrays: b,
			__spreadArray: x,
			__await: S,
			__asyncGenerator: C,
			__asyncDelegator: w,
			__asyncValues: T,
			__makeTemplateObject: E,
			__importStar: k,
			__importDefault: A,
			__classPrivateFieldGet: j,
			__classPrivateFieldSet: M,
			__classPrivateFieldIn: N,
			__addDisposableResource: P,
			__disposeResources: I,
			__rewriteRelativeImportExtension: L
		}
	}), z = "en", B = 6e4, V = "ellipsis", H = "DEFAULT_TERMINATOR_KEY", U = {
		ellipsis: (R = {
			fr: {
				terminator: "…",
				separator: " "
			},
			zh: {
				terminator: "……",
				separator: void 0
			},
			ja: {
				terminator: "……",
				separator: void 0
			}
		}, R[H] = {
			terminator: "…",
			separator: void 0
		}, R),
		none: (ee = {}, ee[H] = {
			terminator: void 0,
			separator: void 0
		}, ee)
	}, W = function() {
		function e(e, t) {
			var n, r;
			t === void 0 && (t = {});
			try {
				var i = e ? Array.isArray(e) ? e.map(function(e) {
					return String(e);
				}) : [String(e)] : [z], a = Intl.getCanonicalLocales(i);
				this.locale = a.length ? a[0] : z;
			} catch {
				this.locale = z;
			}
			if (!U[t.style ?? V]) throw Error(function(e) {
				return `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`;
			}(t.style ?? V));
			if (t.maxChars !== void 0) {
				n = t.style ?? V;
				var o = new Intl.Locale(this.locale).language;
				r = U[n][o] || U[n][H];
			}
			var s = t.terminator ?? r?.terminator, c = s == null ? void 0 : t.separator ?? r?.separator;
			this.additionLength = (s?.length ?? 0) + (c?.length ?? 0), t.maxChars !== void 0 && Math.abs(t.maxChars) < this.additionLength && (s = void 0, c = void 0), this.options = {
				maxChars: t.maxChars,
				style: n,
				terminator: s,
				separator: c
			};
		}
		return e.prototype.format = function(e) {
			return this.formatToParts(e).join("");
		}, e.prototype.formatToParts = function(e) {
			var t = this.options, n = t.maxChars, r = t.terminator, i = t.separator, a = n === void 0 || Math.abs(n) >= e.length ? n : n >= 0 ? Math.max(0, n - this.additionLength) : Math.min(0, n + this.additionLength), o = a !== void 0 && a > -1 ? e.slice(0, a) : e.slice(a);
			return n == null || a == null || a === 0 || r == null || e.length <= Math.abs(n) ? [o] : a > 0 ? i == null ? [o, r] : [
				o,
				i,
				r
			] : i == null ? [r, o] : [
				r,
				i,
				o
			];
		}, e.prototype.resolvedOptions = function() {
			return this.options;
		}, e;
	}(), oe = {
		Collator: Intl.Collator,
		DateTimeFormat: Intl.DateTimeFormat,
		DisplayNames: Intl.DisplayNames,
		ListFormat: Intl.ListFormat,
		Locale: Intl.Locale,
		NumberFormat: Intl.NumberFormat,
		PluralRules: Intl.PluralRules,
		RelativeTimeFormat: Intl.RelativeTimeFormat,
		Segmenter: Intl.Segmenter,
		CutoffFormat: W
	}, G = new (function() {
		function e() {
			this.cache = {};
		}
		return e.prototype._generateKey = function(e, t) {
			return t === void 0 && (t = {}), `${e ? Array.isArray(e) ? e.map(function(e) {
				return String(e);
			}).join(",") : String(e) : "undefined"}:${t ? JSON.stringify(t, Object.keys(t).sort()) : "{}"}`;
		}, e.prototype.get = function(e) {
			for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
			var i = n[0], a = i === void 0 ? z : i, o = n[1], s = o === void 0 ? {} : o, c = this._generateKey(a, s), l = this.cache[e]?.[c];
			return l === void 0 && (l = new ((t = oe[e]).bind.apply(t, x([void 0], n, !1)))(), this.cache[e] || (this.cache[e] = {}), this.cache[e][c] = l), l;
		}, e;
	}())(), se = "https://api2.gtx.dev";
	function ce(e) {
		if (typeof Buffer < "u") return Buffer.from(e, "utf8").toString("base64");
		for (var t = new TextEncoder().encode(e), n = "", r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
		return btoa(n);
	}
	function le(e) {
		if (typeof Buffer < "u") return Buffer.from(e, "base64").toString("utf8");
		for (var t = atob(e), n = new Uint8Array(t.length), r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
		return new TextDecoder().decode(n);
	}
	(function(e) {
		e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
	})(te ||= {}), function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(ne ||= {}), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(re ||= {});
	try {
		(ie = (/* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu")).exec("a")) == null || ie[0];
	} catch {}
	var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
	function de(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
	}
	function fe(e) {
		if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
		var t = e.default;
		if (typeof t == "function") {
			var n = function e() {
				var n = !1;
				try {
					n = this instanceof e;
				} catch {}
				return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
			};
			n.prototype = t.prototype;
		} else n = {};
		return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
			var r = Object.getOwnPropertyDescriptor(e, t);
			Object.defineProperty(n, t, r.get ? r : {
				enumerable: !0,
				get: function() {
					return e[t];
				}
			});
		}), n;
	}
	var pe, me = {};
	function he() {
		if (pe) return me;
		var e, t;
		return pe = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.SKELETON_TYPE = me.TYPE = void 0, me.isLiteralElement = function(t) {
			return t.type === e.literal;
		}, me.isArgumentElement = function(t) {
			return t.type === e.argument;
		}, me.isNumberElement = function(t) {
			return t.type === e.number;
		}, me.isDateElement = function(t) {
			return t.type === e.date;
		}, me.isTimeElement = function(t) {
			return t.type === e.time;
		}, me.isSelectElement = function(t) {
			return t.type === e.select;
		}, me.isPluralElement = function(t) {
			return t.type === e.plural;
		}, me.isPoundElement = function(t) {
			return t.type === e.pound;
		}, me.isTagElement = function(t) {
			return t.type === e.tag;
		}, me.isNumberSkeleton = function(e) {
			return !(!e || typeof e != "object" || e.type !== t.number);
		}, me.isDateTimeSkeleton = function(e) {
			return !(!e || typeof e != "object" || e.type !== t.dateTime);
		}, me.createLiteralElement = function(t) {
			return {
				type: e.literal,
				value: t
			};
		}, me.createNumberElement = function(t, n) {
			return {
				type: e.number,
				value: t,
				style: n
			};
		}, function(e) {
			e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
		}(e || (me.TYPE = e = {})), function(e) {
			e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
		}(t || (me.SKELETON_TYPE = t = {})), me;
	}
	he();
	var ge, _e, ve, K = {}, ye = fe(ae);
	(function() {
		if (ge) return K;
		ge = 1, Object.defineProperty(K, "__esModule", { value: !0 }), K.printAST = n, K.doPrintAST = r, K.printDateTimeSkeleton = o;
		var e = ye, t = he();
		function n(e) {
			return r(e, !1);
		}
		function r(s, c) {
			return s.map(function(l, u) {
				return (0, t.isLiteralElement)(l) ? function(e, t, n, r) {
					var a = e.value;
					return n || a[0] !== "'" || (a = `''${a.slice(1)}`), r || a[a.length - 1] !== "'" || (a = `${a.slice(0, a.length - 1)}''`), a = i(a), t ? a.replace("#", "'#'") : a;
				}(l, c, u === 0, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
					return `{${e.value}}`;
				}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
					return `{${e.value}, ${t.TYPE[e.type]}${e.style ? `, ${n = e.style, typeof n == "string" ? i(n) : n.type === t.SKELETON_TYPE.dateTime ? `::${o(n)}` : `::${n.tokens.map(a).join(" ")}`}` : ""}}`;
					var n;
				}(l) : (0, t.isPluralElement)(l) ? function(t) {
					var n = t.pluralType === "cardinal" ? "plural" : "selectordinal";
					return `{${[
						t.value,
						n,
						e.__spreadArray([t.offset ? `offset:${t.offset}` : ""], Object.keys(t.options).map(function(e) {
							return `${e}{${r(t.options[e].value, !0)}}`;
						}), !0).filter(Boolean).join(" ")
					].join(",")}}`;
				}(l) : (0, t.isSelectElement)(l) ? function(e) {
					return `{${[
						e.value,
						"select",
						Object.keys(e.options).map(function(t) {
							return `${t}{${r(e.options[t].value, !1)}}`;
						}).join(" ")
					].join(",")}}`;
				}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
					return `<${e.value}>${n(e.children)}</${e.value}>`;
				}(l) : void 0;
			}).join("");
		}
		function i(e) {
			return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
		}
		function a(e) {
			var t = e.stem, n = e.options;
			return n.length === 0 ? t : `${t}${n.map(function(e) {
				return `/${e}`;
			}).join("")}`;
		}
		function o(e) {
			return e.pattern;
		}
	})();
	var be = de((ve || (ve = 1, _e = function(e, t) {
		t ||= {}, typeof t == "function" && (t = { cmp: t });
		var n, r = typeof t.cycles == "boolean" && t.cycles, i = t.cmp && (n = t.cmp, function(e) {
			return function(t, r) {
				var i = {
					key: t,
					value: e[t]
				}, a = {
					key: r,
					value: e[r]
				};
				return n(i, a);
			};
		}), a = [];
		return function e(t) {
			if (t && t.toJSON && typeof t.toJSON == "function" && (t = t.toJSON()), t !== void 0) {
				if (typeof t == "number") return isFinite(t) ? "" + t : "null";
				if (typeof t != "object") return JSON.stringify(t);
				var n, o;
				if (Array.isArray(t)) {
					for (o = "[", n = 0; n < t.length; n++) n && (o += ","), o += e(t[n]) || "null";
					return o + "]";
				}
				if (t === null) return "null";
				if (a.indexOf(t) !== -1) {
					if (r) return JSON.stringify("__cycle__");
					throw TypeError("Converting circular structure to JSON");
				}
				var s = a.push(t) - 1, c = Object.keys(t).sort(i && i(t));
				for (o = "", n = 0; n < c.length; n++) {
					var l = c[n], u = e(t[l]);
					u && (o && (o += ","), o += JSON.stringify(l) + ":" + u);
				}
				return a.splice(s, 1), "{" + o + "}";
			}
		}(e);
	}), _e)), xe = { exports: {} }, q, J = { exports: {} };
	function Y() {
		return q || (q = 1, J.exports = function() {
			var e = e || function(e, t) {
				var n;
				if (typeof window < "u" && window.crypto && (n = window.crypto), typeof self < "u" && self.crypto && (n = self.crypto), typeof globalThis < "u" && globalThis.crypto && (n = globalThis.crypto), !n && typeof window < "u" && window.msCrypto && (n = window.msCrypto), !n && ue !== void 0 && ue.crypto && (n = ue.crypto), !n) try {
					n = s();
				} catch {}
				var r = function() {
					if (n) {
						if (typeof n.getRandomValues == "function") try {
							return n.getRandomValues(new Uint32Array(1))[0];
						} catch {}
						if (typeof n.randomBytes == "function") try {
							return n.randomBytes(4).readInt32LE();
						} catch {}
					}
					throw Error("Native crypto module could not be used to get secure random number.");
				}, i = Object.create || function() {
					function e() {}
					return function(t) {
						var n;
						return e.prototype = t, n = new e(), e.prototype = null, n;
					};
				}(), a = {}, o = a.lib = {}, c = o.Base = {
					extend: function(e) {
						var t = i(this);
						return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
							t.$super.init.apply(this, arguments);
						}), t.init.prototype = t, t.$super = this, t;
					},
					create: function() {
						var e = this.extend();
						return e.init.apply(e, arguments), e;
					},
					init: function() {},
					mixIn: function(e) {
						for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
						e.hasOwnProperty("toString") && (this.toString = e.toString);
					},
					clone: function() {
						return this.init.prototype.extend(this);
					}
				}, l = o.WordArray = c.extend({
					init: function(e, n) {
						e = this.words = e || [], this.sigBytes = n == t ? 4 * e.length : n;
					},
					toString: function(e) {
						return (e || d).stringify(this);
					},
					concat: function(e) {
						var t = this.words, n = e.words, r = this.sigBytes, i = e.sigBytes;
						if (this.clamp(), r % 4) for (var a = 0; a < i; a++) {
							var o = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
							t[r + a >>> 2] |= o << 24 - (r + a) % 4 * 8;
						}
						else for (var s = 0; s < i; s += 4) t[r + s >>> 2] = n[s >>> 2];
						return this.sigBytes += i, this;
					},
					clamp: function() {
						var t = this.words, n = this.sigBytes;
						t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
					},
					clone: function() {
						var e = c.clone.call(this);
						return e.words = this.words.slice(0), e;
					},
					random: function(e) {
						for (var t = [], n = 0; n < e; n += 4) t.push(r());
						return new l.init(t, e);
					}
				}), u = a.enc = {}, d = u.Hex = {
					stringify: function(e) {
						for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
							var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
							r.push((a >>> 4).toString(16)), r.push((15 & a).toString(16));
						}
						return r.join("");
					},
					parse: function(e) {
						for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
						return new l.init(n, t / 2);
					}
				}, f = u.Latin1 = {
					stringify: function(e) {
						for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
							var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
							r.push(String.fromCharCode(a));
						}
						return r.join("");
					},
					parse: function(e) {
						for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
						return new l.init(n, t);
					}
				}, p = u.Utf8 = {
					stringify: function(e) {
						try {
							return decodeURIComponent(escape(f.stringify(e)));
						} catch {
							throw Error("Malformed UTF-8 data");
						}
					},
					parse: function(e) {
						return f.parse(unescape(encodeURIComponent(e)));
					}
				}, m = o.BufferedBlockAlgorithm = c.extend({
					reset: function() {
						this._data = new l.init(), this._nDataBytes = 0;
					},
					_append: function(e) {
						typeof e == "string" && (e = p.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
					},
					_process: function(t) {
						var n, r = this._data, i = r.words, a = r.sigBytes, o = this.blockSize, s = a / (4 * o), c = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * o, u = e.min(4 * c, a);
						if (c) {
							for (var d = 0; d < c; d += o) this._doProcessBlock(i, d);
							n = i.splice(0, c), r.sigBytes -= u;
						}
						return new l.init(n, u);
					},
					clone: function() {
						var e = c.clone.call(this);
						return e._data = this._data.clone(), e;
					},
					_minBufferSize: 0
				});
				o.Hasher = m.extend({
					cfg: c.extend(),
					init: function(e) {
						this.cfg = this.cfg.extend(e), this.reset();
					},
					reset: function() {
						m.reset.call(this), this._doReset();
					},
					update: function(e) {
						return this._append(e), this._process(), this;
					},
					finalize: function(e) {
						return e && this._append(e), this._doFinalize();
					},
					blockSize: 16,
					_createHelper: function(e) {
						return function(t, n) {
							return new e.init(n).finalize(t);
						};
					},
					_createHmacHelper: function(e) {
						return function(t, n) {
							return new h.HMAC.init(e, n).finalize(t);
						};
					}
				});
				var h = a.algo = {};
				return a;
			}(Math);
			return e;
		}()), J.exports;
	}
	var Se, Ce = { exports: {} };
	function we() {
		return Se || (Se = 1, Ce.exports = function(e) {
			return r = (n = e).lib, i = r.Base, a = r.WordArray, (o = n.x64 = {}).Word = i.extend({ init: function(e, t) {
				this.high = e, this.low = t;
			} }), o.WordArray = i.extend({
				init: function(e, n) {
					e = this.words = e || [], this.sigBytes = n == t ? 8 * e.length : n;
				},
				toX32: function() {
					for (var e = this.words, t = e.length, n = [], r = 0; r < t; r++) {
						var i = e[r];
						n.push(i.high), n.push(i.low);
					}
					return a.create(n, this.sigBytes);
				},
				clone: function() {
					for (var e = i.clone.call(this), t = e.words = this.words.slice(0), n = t.length, r = 0; r < n; r++) t[r] = t[r].clone();
					return e;
				}
			}), e;
			var t, n, r, i, a, o;
		}(Y())), Ce.exports;
	}
	var Te, Ee = { exports: {} };
	function De() {
		return Te || (Te = 1, Ee.exports = function(e) {
			return function() {
				if (typeof ArrayBuffer == "function") {
					var t = e.lib.WordArray, n = t.init, r = t.init = function(e) {
						if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || typeof Uint8ClampedArray < "u" && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
							for (var t = e.byteLength, r = [], i = 0; i < t; i++) r[i >>> 2] |= e[i] << 24 - i % 4 * 8;
							n.call(this, r, t);
						} else n.apply(this, arguments);
					};
					r.prototype = t;
				}
			}(), e.lib.WordArray;
		}(Y())), Ee.exports;
	}
	var Oe, ke = { exports: {} };
	function Ae() {
		return Oe || (Oe = 1, ke.exports = function(e) {
			return function() {
				var t = e, n = t.lib.WordArray, r = t.enc;
				function i(e) {
					return e << 8 & 4278255360 | e >>> 8 & 16711935;
				}
				r.Utf16 = r.Utf16BE = {
					stringify: function(e) {
						for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i += 2) {
							var a = t[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
							r.push(String.fromCharCode(a));
						}
						return r.join("");
					},
					parse: function(e) {
						for (var t = e.length, r = [], i = 0; i < t; i++) r[i >>> 1] |= e.charCodeAt(i) << 16 - i % 2 * 16;
						return n.create(r, 2 * t);
					}
				}, r.Utf16LE = {
					stringify: function(e) {
						for (var t = e.words, n = e.sigBytes, r = [], a = 0; a < n; a += 2) {
							var o = i(t[a >>> 2] >>> 16 - a % 4 * 8 & 65535);
							r.push(String.fromCharCode(o));
						}
						return r.join("");
					},
					parse: function(e) {
						for (var t = e.length, r = [], a = 0; a < t; a++) r[a >>> 1] |= i(e.charCodeAt(a) << 16 - a % 2 * 16);
						return n.create(r, 2 * t);
					}
				};
			}(), e.enc.Utf16;
		}(Y())), ke.exports;
	}
	var je, Me = { exports: {} };
	function Ne() {
		return je || (je = 1, Me.exports = function(e) {
			return function() {
				var t = e, n = t.lib.WordArray;
				function r(e, t, r) {
					for (var i = [], a = 0, o = 0; o < t; o++) if (o % 4) {
						var s = r[e.charCodeAt(o - 1)] << o % 4 * 2 | r[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
						i[a >>> 2] |= s << 24 - a % 4 * 8, a++;
					}
					return n.create(i, a);
				}
				t.enc.Base64 = {
					stringify: function(e) {
						var t = e.words, n = e.sigBytes, r = this._map;
						e.clamp();
						for (var i = [], a = 0; a < n; a += 3) for (var o = (t[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (t[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | t[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, s = 0; s < 4 && a + .75 * s < n; s++) i.push(r.charAt(o >>> 6 * (3 - s) & 63));
						var c = r.charAt(64);
						if (c) for (; i.length % 4;) i.push(c);
						return i.join("");
					},
					parse: function(e) {
						var t = e.length, n = this._map, i = this._reverseMap;
						if (!i) {
							i = this._reverseMap = [];
							for (var a = 0; a < n.length; a++) i[n.charCodeAt(a)] = a;
						}
						var o = n.charAt(64);
						if (o) {
							var s = e.indexOf(o);
							s !== -1 && (t = s);
						}
						return r(e, t, i);
					},
					_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
				};
			}(), e.enc.Base64;
		}(Y())), Me.exports;
	}
	var Pe, Fe = { exports: {} };
	function Ie() {
		return Pe || (Pe = 1, Fe.exports = function(e) {
			return function() {
				var t = e, n = t.lib.WordArray;
				function r(e, t, r) {
					for (var i = [], a = 0, o = 0; o < t; o++) if (o % 4) {
						var s = r[e.charCodeAt(o - 1)] << o % 4 * 2 | r[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
						i[a >>> 2] |= s << 24 - a % 4 * 8, a++;
					}
					return n.create(i, a);
				}
				t.enc.Base64url = {
					stringify: function(e, t) {
						t === void 0 && (t = !0);
						var n = e.words, r = e.sigBytes, i = t ? this._safe_map : this._map;
						e.clamp();
						for (var a = [], o = 0; o < r; o += 3) for (var s = (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (n[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | n[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, c = 0; c < 4 && o + .75 * c < r; c++) a.push(i.charAt(s >>> 6 * (3 - c) & 63));
						var l = i.charAt(64);
						if (l) for (; a.length % 4;) a.push(l);
						return a.join("");
					},
					parse: function(e, t) {
						t === void 0 && (t = !0);
						var n = e.length, i = t ? this._safe_map : this._map, a = this._reverseMap;
						if (!a) {
							a = this._reverseMap = [];
							for (var o = 0; o < i.length; o++) a[i.charCodeAt(o)] = o;
						}
						var s = i.charAt(64);
						if (s) {
							var c = e.indexOf(s);
							c !== -1 && (n = c);
						}
						return r(e, n, a);
					},
					_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
					_safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
				};
			}(), e.enc.Base64url;
		}(Y())), Fe.exports;
	}
	var Le, Re = { exports: {} };
	function ze() {
		return Le || (Le = 1, Re.exports = function(e) {
			return function(t) {
				var n = e, r = n.lib, i = r.WordArray, a = r.Hasher, o = n.algo, s = [];
				(function() {
					for (var e = 0; e < 64; e++) s[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0;
				})();
				var c = o.MD5 = a.extend({
					_doReset: function() {
						this._hash = new i.init([
							1732584193,
							4023233417,
							2562383102,
							271733878
						]);
					},
					_doProcessBlock: function(e, t) {
						for (var n = 0; n < 16; n++) {
							var r = t + n, i = e[r];
							e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
						}
						var a = this._hash.words, o = e[t + 0], c = e[t + 1], p = e[t + 2], m = e[t + 3], h = e[t + 4], g = e[t + 5], _ = e[t + 6], v = e[t + 7], y = e[t + 8], b = e[t + 9], x = e[t + 10], S = e[t + 11], C = e[t + 12], w = e[t + 13], T = e[t + 14], E = e[t + 15], D = a[0], O = a[1], k = a[2], A = a[3];
						D = l(D, O, k, A, o, 7, s[0]), A = l(A, D, O, k, c, 12, s[1]), k = l(k, A, D, O, p, 17, s[2]), O = l(O, k, A, D, m, 22, s[3]), D = l(D, O, k, A, h, 7, s[4]), A = l(A, D, O, k, g, 12, s[5]), k = l(k, A, D, O, _, 17, s[6]), O = l(O, k, A, D, v, 22, s[7]), D = l(D, O, k, A, y, 7, s[8]), A = l(A, D, O, k, b, 12, s[9]), k = l(k, A, D, O, x, 17, s[10]), O = l(O, k, A, D, S, 22, s[11]), D = l(D, O, k, A, C, 7, s[12]), A = l(A, D, O, k, w, 12, s[13]), k = l(k, A, D, O, T, 17, s[14]), D = u(D, O = l(O, k, A, D, E, 22, s[15]), k, A, c, 5, s[16]), A = u(A, D, O, k, _, 9, s[17]), k = u(k, A, D, O, S, 14, s[18]), O = u(O, k, A, D, o, 20, s[19]), D = u(D, O, k, A, g, 5, s[20]), A = u(A, D, O, k, x, 9, s[21]), k = u(k, A, D, O, E, 14, s[22]), O = u(O, k, A, D, h, 20, s[23]), D = u(D, O, k, A, b, 5, s[24]), A = u(A, D, O, k, T, 9, s[25]), k = u(k, A, D, O, m, 14, s[26]), O = u(O, k, A, D, y, 20, s[27]), D = u(D, O, k, A, w, 5, s[28]), A = u(A, D, O, k, p, 9, s[29]), k = u(k, A, D, O, v, 14, s[30]), D = d(D, O = u(O, k, A, D, C, 20, s[31]), k, A, g, 4, s[32]), A = d(A, D, O, k, y, 11, s[33]), k = d(k, A, D, O, S, 16, s[34]), O = d(O, k, A, D, T, 23, s[35]), D = d(D, O, k, A, c, 4, s[36]), A = d(A, D, O, k, h, 11, s[37]), k = d(k, A, D, O, v, 16, s[38]), O = d(O, k, A, D, x, 23, s[39]), D = d(D, O, k, A, w, 4, s[40]), A = d(A, D, O, k, o, 11, s[41]), k = d(k, A, D, O, m, 16, s[42]), O = d(O, k, A, D, _, 23, s[43]), D = d(D, O, k, A, b, 4, s[44]), A = d(A, D, O, k, C, 11, s[45]), k = d(k, A, D, O, E, 16, s[46]), D = f(D, O = d(O, k, A, D, p, 23, s[47]), k, A, o, 6, s[48]), A = f(A, D, O, k, v, 10, s[49]), k = f(k, A, D, O, T, 15, s[50]), O = f(O, k, A, D, g, 21, s[51]), D = f(D, O, k, A, C, 6, s[52]), A = f(A, D, O, k, m, 10, s[53]), k = f(k, A, D, O, x, 15, s[54]), O = f(O, k, A, D, c, 21, s[55]), D = f(D, O, k, A, y, 6, s[56]), A = f(A, D, O, k, E, 10, s[57]), k = f(k, A, D, O, _, 15, s[58]), O = f(O, k, A, D, w, 21, s[59]), D = f(D, O, k, A, h, 6, s[60]), A = f(A, D, O, k, S, 10, s[61]), k = f(k, A, D, O, p, 15, s[62]), O = f(O, k, A, D, b, 21, s[63]), a[0] = a[0] + D | 0, a[1] = a[1] + O | 0, a[2] = a[2] + k | 0, a[3] = a[3] + A | 0;
					},
					_doFinalize: function() {
						var e = this._data, n = e.words, r = 8 * this._nDataBytes, i = 8 * e.sigBytes;
						n[i >>> 5] |= 128 << 24 - i % 32;
						var a = t.floor(r / 4294967296), o = r;
						n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), e.sigBytes = 4 * (n.length + 1), this._process();
						for (var s = this._hash, c = s.words, l = 0; l < 4; l++) {
							var u = c[l];
							c[l] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
						}
						return s;
					},
					clone: function() {
						var e = a.clone.call(this);
						return e._hash = this._hash.clone(), e;
					}
				});
				function l(e, t, n, r, i, a, o) {
					var s = e + (t & n | ~t & r) + i + o;
					return (s << a | s >>> 32 - a) + t;
				}
				function u(e, t, n, r, i, a, o) {
					var s = e + (t & r | n & ~r) + i + o;
					return (s << a | s >>> 32 - a) + t;
				}
				function d(e, t, n, r, i, a, o) {
					var s = e + (t ^ n ^ r) + i + o;
					return (s << a | s >>> 32 - a) + t;
				}
				function f(e, t, n, r, i, a, o) {
					var s = e + (n ^ (t | ~r)) + i + o;
					return (s << a | s >>> 32 - a) + t;
				}
				n.MD5 = a._createHelper(c), n.HmacMD5 = a._createHmacHelper(c);
			}(Math), e.MD5;
		}(Y())), Re.exports;
	}
	var Be, Ve = { exports: {} };
	function He() {
		return Be || (Be = 1, Ve.exports = function(e) {
			return n = (t = e).lib, r = n.WordArray, i = n.Hasher, a = t.algo, o = [], s = a.SHA1 = i.extend({
				_doReset: function() {
					this._hash = new r.init([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], s = n[3], c = n[4], l = 0; l < 80; l++) {
						if (l < 16) o[l] = 0 | e[t + l];
						else {
							var u = o[l - 3] ^ o[l - 8] ^ o[l - 14] ^ o[l - 16];
							o[l] = u << 1 | u >>> 31;
						}
						var d = (r << 5 | r >>> 27) + c + o[l];
						d += l < 20 ? 1518500249 + (i & a | ~i & s) : l < 40 ? 1859775393 + (i ^ a ^ s) : l < 60 ? (i & a | i & s | a & s) - 1894007588 : (i ^ a ^ s) - 899497514, c = s, s = a, a = i << 30 | i >>> 2, i = r, r = d;
					}
					n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, n[4] = n[4] + c | 0;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
					return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
				},
				clone: function() {
					var e = i.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			}), t.SHA1 = i._createHelper(s), t.HmacSHA1 = i._createHmacHelper(s), e.SHA1;
			var t, n, r, i, a, o, s;
		}(Y())), Ve.exports;
	}
	var Ue, We = { exports: {} };
	function Ge() {
		return Ue || (Ue = 1, We.exports = function(e) {
			return function(t) {
				var n = e, r = n.lib, i = r.WordArray, a = r.Hasher, o = n.algo, s = [], c = [];
				(function() {
					function e(e) {
						for (var n = t.sqrt(e), r = 2; r <= n; r++) if (!(e % r)) return !1;
						return !0;
					}
					function n(e) {
						return 4294967296 * (e - (0 | e)) | 0;
					}
					for (var r = 2, i = 0; i < 64;) e(r) && (i < 8 && (s[i] = n(t.pow(r, .5))), c[i] = n(t.pow(r, 1 / 3)), i++), r++;
				})();
				var l = [], u = o.SHA256 = a.extend({
					_doReset: function() {
						this._hash = new i.init(s.slice(0));
					},
					_doProcessBlock: function(e, t) {
						for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], u = n[5], d = n[6], f = n[7], p = 0; p < 64; p++) {
							if (p < 16) l[p] = 0 | e[t + p];
							else {
								var m = l[p - 15], h = (m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3, g = l[p - 2], _ = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
								l[p] = h + l[p - 7] + _ + l[p - 16];
							}
							var v = r & i ^ r & a ^ i & a, y = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22), b = f + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & u ^ ~s & d) + c[p] + l[p];
							f = d, d = u, u = s, s = o + b | 0, o = a, a = i, i = r, r = b + (y + v) | 0;
						}
						n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + a | 0, n[3] = n[3] + o | 0, n[4] = n[4] + s | 0, n[5] = n[5] + u | 0, n[6] = n[6] + d | 0, n[7] = n[7] + f | 0;
					},
					_doFinalize: function() {
						var e = this._data, n = e.words, r = 8 * this._nDataBytes, i = 8 * e.sigBytes;
						return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = t.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * n.length, this._process(), this._hash;
					},
					clone: function() {
						var e = a.clone.call(this);
						return e._hash = this._hash.clone(), e;
					}
				});
				n.SHA256 = a._createHelper(u), n.HmacSHA256 = a._createHmacHelper(u);
			}(Math), e.SHA256;
		}(Y())), We.exports;
	}
	var Ke, qe = { exports: {} }, Je, Ye = { exports: {} };
	function Xe() {
		return Je || (Je = 1, Ye.exports = function(e) {
			return function() {
				var t = e, n = t.lib.Hasher, r = t.x64, i = r.Word, a = r.WordArray, o = t.algo;
				function s() {
					return i.create.apply(i, arguments);
				}
				var c = [
					s(1116352408, 3609767458),
					s(1899447441, 602891725),
					s(3049323471, 3964484399),
					s(3921009573, 2173295548),
					s(961987163, 4081628472),
					s(1508970993, 3053834265),
					s(2453635748, 2937671579),
					s(2870763221, 3664609560),
					s(3624381080, 2734883394),
					s(310598401, 1164996542),
					s(607225278, 1323610764),
					s(1426881987, 3590304994),
					s(1925078388, 4068182383),
					s(2162078206, 991336113),
					s(2614888103, 633803317),
					s(3248222580, 3479774868),
					s(3835390401, 2666613458),
					s(4022224774, 944711139),
					s(264347078, 2341262773),
					s(604807628, 2007800933),
					s(770255983, 1495990901),
					s(1249150122, 1856431235),
					s(1555081692, 3175218132),
					s(1996064986, 2198950837),
					s(2554220882, 3999719339),
					s(2821834349, 766784016),
					s(2952996808, 2566594879),
					s(3210313671, 3203337956),
					s(3336571891, 1034457026),
					s(3584528711, 2466948901),
					s(113926993, 3758326383),
					s(338241895, 168717936),
					s(666307205, 1188179964),
					s(773529912, 1546045734),
					s(1294757372, 1522805485),
					s(1396182291, 2643833823),
					s(1695183700, 2343527390),
					s(1986661051, 1014477480),
					s(2177026350, 1206759142),
					s(2456956037, 344077627),
					s(2730485921, 1290863460),
					s(2820302411, 3158454273),
					s(3259730800, 3505952657),
					s(3345764771, 106217008),
					s(3516065817, 3606008344),
					s(3600352804, 1432725776),
					s(4094571909, 1467031594),
					s(275423344, 851169720),
					s(430227734, 3100823752),
					s(506948616, 1363258195),
					s(659060556, 3750685593),
					s(883997877, 3785050280),
					s(958139571, 3318307427),
					s(1322822218, 3812723403),
					s(1537002063, 2003034995),
					s(1747873779, 3602036899),
					s(1955562222, 1575990012),
					s(2024104815, 1125592928),
					s(2227730452, 2716904306),
					s(2361852424, 442776044),
					s(2428436474, 593698344),
					s(2756734187, 3733110249),
					s(3204031479, 2999351573),
					s(3329325298, 3815920427),
					s(3391569614, 3928383900),
					s(3515267271, 566280711),
					s(3940187606, 3454069534),
					s(4118630271, 4000239992),
					s(116418474, 1914138554),
					s(174292421, 2731055270),
					s(289380356, 3203993006),
					s(460393269, 320620315),
					s(685471733, 587496836),
					s(852142971, 1086792851),
					s(1017036298, 365543100),
					s(1126000580, 2618297676),
					s(1288033470, 3409855158),
					s(1501505948, 4234509866),
					s(1607167915, 987167468),
					s(1816402316, 1246189591)
				], l = [];
				(function() {
					for (var e = 0; e < 80; e++) l[e] = s();
				})();
				var u = o.SHA512 = n.extend({
					_doReset: function() {
						this._hash = new a.init([
							new i.init(1779033703, 4089235720),
							new i.init(3144134277, 2227873595),
							new i.init(1013904242, 4271175723),
							new i.init(2773480762, 1595750129),
							new i.init(1359893119, 2917565137),
							new i.init(2600822924, 725511199),
							new i.init(528734635, 4215389547),
							new i.init(1541459225, 327033209)
						]);
					},
					_doProcessBlock: function(e, t) {
						for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], u = n[5], d = n[6], f = n[7], p = r.high, m = r.low, h = i.high, g = i.low, _ = a.high, v = a.low, y = o.high, b = o.low, x = s.high, S = s.low, C = u.high, w = u.low, T = d.high, E = d.low, D = f.high, O = f.low, k = p, A = m, j = h, M = g, N = _, P = v, F = y, I = b, L = x, R = S, ee = C, te = w, ne = T, re = E, ie = D, ae = O, z = 0; z < 80; z++) {
							var B, V, H = l[z];
							if (z < 16) V = H.high = 0 | e[t + 2 * z], B = H.low = 0 | e[t + 2 * z + 1];
							else {
								var U = l[z - 15], W = U.high, oe = U.low, G = (W >>> 1 | oe << 31) ^ (W >>> 8 | oe << 24) ^ W >>> 7, se = (oe >>> 1 | W << 31) ^ (oe >>> 8 | W << 24) ^ (oe >>> 7 | W << 25), ce = l[z - 2], le = ce.high, ue = ce.low, de = (le >>> 19 | ue << 13) ^ (le << 3 | ue >>> 29) ^ le >>> 6, fe = (ue >>> 19 | le << 13) ^ (ue << 3 | le >>> 29) ^ (ue >>> 6 | le << 26), pe = l[z - 7], me = pe.high, he = pe.low, ge = l[z - 16], _e = ge.high, ve = ge.low;
								V = (V = (V = G + me + +((B = se + he) >>> 0 < se >>> 0)) + de + +((B += fe) >>> 0 < fe >>> 0)) + _e + +((B += ve) >>> 0 < ve >>> 0), H.high = V, H.low = B;
							}
							var K, ye = L & ee ^ ~L & ne, be = R & te ^ ~R & re, xe = k & j ^ k & N ^ j & N, q = A & M ^ A & P ^ M & P, J = (k >>> 28 | A << 4) ^ (k << 30 | A >>> 2) ^ (k << 25 | A >>> 7), Y = (A >>> 28 | k << 4) ^ (A << 30 | k >>> 2) ^ (A << 25 | k >>> 7), Se = (L >>> 14 | R << 18) ^ (L >>> 18 | R << 14) ^ (L << 23 | R >>> 9), Ce = (R >>> 14 | L << 18) ^ (R >>> 18 | L << 14) ^ (R << 23 | L >>> 9), we = c[z], Te = we.high, Ee = we.low, De = ie + Se + +((K = ae + Ce) >>> 0 < ae >>> 0), Oe = Y + q;
							ie = ne, ae = re, ne = ee, re = te, ee = L, te = R, L = F + (De = (De = (De = De + ye + +((K += be) >>> 0 < be >>> 0)) + Te + +((K += Ee) >>> 0 < Ee >>> 0)) + V + +((K += B) >>> 0 < B >>> 0)) + +((R = I + K | 0) >>> 0 < I >>> 0) | 0, F = N, I = P, N = j, P = M, j = k, M = A, k = De + (J + xe + +(Oe >>> 0 < Y >>> 0)) + +((A = K + Oe | 0) >>> 0 < K >>> 0) | 0;
						}
						m = r.low = m + A, r.high = p + k + +(m >>> 0 < A >>> 0), g = i.low = g + M, i.high = h + j + +(g >>> 0 < M >>> 0), v = a.low = v + P, a.high = _ + N + +(v >>> 0 < P >>> 0), b = o.low = b + I, o.high = y + F + +(b >>> 0 < I >>> 0), S = s.low = S + R, s.high = x + L + +(S >>> 0 < R >>> 0), w = u.low = w + te, u.high = C + ee + +(w >>> 0 < te >>> 0), E = d.low = E + re, d.high = T + ne + +(E >>> 0 < re >>> 0), O = f.low = O + ae, f.high = D + ie + +(O >>> 0 < ae >>> 0);
					},
					_doFinalize: function() {
						var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
						return t[r >>> 5] |= 128 << 24 - r % 32, t[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296), t[31 + (r + 128 >>> 10 << 5)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash.toX32();
					},
					clone: function() {
						var e = n.clone.call(this);
						return e._hash = this._hash.clone(), e;
					},
					blockSize: 32
				});
				t.SHA512 = n._createHelper(u), t.HmacSHA512 = n._createHmacHelper(u);
			}(), e.SHA512;
		}(Y(), we())), Ye.exports;
	}
	var Ze, Qe = { exports: {} }, $e, et = { exports: {} };
	function tt() {
		return $e || ($e = 1, et.exports = function(e) {
			return function(t) {
				var n = e, r = n.lib, i = r.WordArray, a = r.Hasher, o = n.x64.Word, s = n.algo, c = [], l = [], u = [];
				(function() {
					for (var e = 1, t = 0, n = 0; n < 24; n++) {
						c[e + 5 * t] = (n + 1) * (n + 2) / 2 % 64;
						var r = (2 * e + 3 * t) % 5;
						e = t % 5, t = r;
					}
					for (e = 0; e < 5; e++) for (t = 0; t < 5; t++) l[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
					for (var i = 1, a = 0; a < 24; a++) {
						for (var s = 0, d = 0, f = 0; f < 7; f++) {
							if (1 & i) {
								var p = (1 << f) - 1;
								p < 32 ? d ^= 1 << p : s ^= 1 << p - 32;
							}
							128 & i ? i = i << 1 ^ 113 : i <<= 1;
						}
						u[a] = o.create(s, d);
					}
				})();
				var d = [];
				(function() {
					for (var e = 0; e < 25; e++) d[e] = o.create();
				})();
				var f = s.SHA3 = a.extend({
					cfg: a.cfg.extend({ outputLength: 512 }),
					_doReset: function() {
						for (var e = this._state = [], t = 0; t < 25; t++) e[t] = new o.init();
						this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
					},
					_doProcessBlock: function(e, t) {
						for (var n = this._state, r = this.blockSize / 2, i = 0; i < r; i++) {
							var a = e[t + 2 * i], o = e[t + 2 * i + 1];
							a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), (O = n[i]).high ^= o, O.low ^= a;
						}
						for (var s = 0; s < 24; s++) {
							for (var f = 0; f < 5; f++) {
								for (var p = 0, m = 0, h = 0; h < 5; h++) p ^= (O = n[f + 5 * h]).high, m ^= O.low;
								var g = d[f];
								g.high = p, g.low = m;
							}
							for (f = 0; f < 5; f++) {
								var _ = d[(f + 4) % 5], v = d[(f + 1) % 5], y = v.high, b = v.low;
								for (p = _.high ^ (y << 1 | b >>> 31), m = _.low ^ (b << 1 | y >>> 31), h = 0; h < 5; h++) (O = n[f + 5 * h]).high ^= p, O.low ^= m;
							}
							for (var x = 1; x < 25; x++) {
								var S = (O = n[x]).high, C = O.low, w = c[x];
								w < 32 ? (p = S << w | C >>> 32 - w, m = C << w | S >>> 32 - w) : (p = C << w - 32 | S >>> 64 - w, m = S << w - 32 | C >>> 64 - w);
								var T = d[l[x]];
								T.high = p, T.low = m;
							}
							var E = d[0], D = n[0];
							for (E.high = D.high, E.low = D.low, f = 0; f < 5; f++) for (h = 0; h < 5; h++) {
								var O = n[x = f + 5 * h], k = d[x], A = d[(f + 1) % 5 + 5 * h], j = d[(f + 2) % 5 + 5 * h];
								O.high = k.high ^ ~A.high & j.high, O.low = k.low ^ ~A.low & j.low;
							}
							O = n[0];
							var M = u[s];
							O.high ^= M.high, O.low ^= M.low;
						}
					},
					_doFinalize: function() {
						var e = this._data, n = e.words;
						this._nDataBytes;
						var r = 8 * e.sigBytes, a = 32 * this.blockSize;
						n[r >>> 5] |= 1 << 24 - r % 32, n[(t.ceil((r + 1) / a) * a >>> 5) - 1] |= 128, e.sigBytes = 4 * n.length, this._process();
						for (var o = this._state, s = this.cfg.outputLength / 8, c = s / 8, l = [], u = 0; u < c; u++) {
							var d = o[u], f = d.high, p = d.low;
							f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), p = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8), l.push(p), l.push(f);
						}
						return new i.init(l, s);
					},
					clone: function() {
						for (var e = a.clone.call(this), t = e._state = this._state.slice(0), n = 0; n < 25; n++) t[n] = t[n].clone();
						return e;
					}
				});
				n.SHA3 = a._createHelper(f), n.HmacSHA3 = a._createHmacHelper(f);
			}(Math), e.SHA3;
		}(Y(), we())), et.exports;
	}
	var nt, rt = { exports: {} }, it, at = { exports: {} };
	function X() {
		return it || (it = 1, at.exports = function(e) {
			var t, n = (t = e).lib.Base, r = t.enc.Utf8;
			t.algo.HMAC = n.extend({
				init: function(e, t) {
					e = this._hasher = new e.init(), typeof t == "string" && (t = r.parse(t));
					var n = e.blockSize, i = 4 * n;
					t.sigBytes > i && (t = e.finalize(t)), t.clamp();
					for (var a = this._oKey = t.clone(), o = this._iKey = t.clone(), s = a.words, c = o.words, l = 0; l < n; l++) s[l] ^= 1549556828, c[l] ^= 909522486;
					a.sigBytes = o.sigBytes = i, this.reset();
				},
				reset: function() {
					var e = this._hasher;
					e.reset(), e.update(this._iKey);
				},
				update: function(e) {
					return this._hasher.update(e), this;
				},
				finalize: function(e) {
					var t = this._hasher, n = t.finalize(e);
					return t.reset(), t.finalize(this._oKey.clone().concat(n));
				}
			});
		}(Y())), at.exports;
	}
	var ot, Z = { exports: {} }, st, ct = { exports: {} };
	function lt() {
		return st || (st = 1, ct.exports = function(e) {
			return n = (t = e).lib, r = n.Base, i = n.WordArray, a = t.algo, o = a.MD5, s = a.EvpKDF = r.extend({
				cfg: r.extend({
					keySize: 4,
					hasher: o,
					iterations: 1
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e);
				},
				compute: function(e, t) {
					for (var n, r = this.cfg, a = r.hasher.create(), o = i.create(), s = o.words, c = r.keySize, l = r.iterations; s.length < c;) {
						n && a.update(n), n = a.update(e).finalize(t), a.reset();
						for (var u = 1; u < l; u++) n = a.finalize(n), a.reset();
						o.concat(n);
					}
					return o.sigBytes = 4 * c, o;
				}
			}), t.EvpKDF = function(e, t, n) {
				return s.create(n).compute(e, t);
			}, e.EvpKDF;
			var t, n, r, i, a, o, s;
		}(Y(), He(), X())), ct.exports;
	}
	var ut, dt = { exports: {} };
	function ft() {
		return ut || (ut = 1, dt.exports = function(e) {
			e.lib.Cipher || function(t) {
				var n = e, r = n.lib, i = r.Base, a = r.WordArray, o = r.BufferedBlockAlgorithm, s = n.enc;
				s.Utf8;
				var c = s.Base64, l = n.algo.EvpKDF, u = r.Cipher = o.extend({
					cfg: i.extend(),
					createEncryptor: function(e, t) {
						return this.create(this._ENC_XFORM_MODE, e, t);
					},
					createDecryptor: function(e, t) {
						return this.create(this._DEC_XFORM_MODE, e, t);
					},
					init: function(e, t, n) {
						this.cfg = this.cfg.extend(n), this._xformMode = e, this._key = t, this.reset();
					},
					reset: function() {
						o.reset.call(this), this._doReset();
					},
					process: function(e) {
						return this._append(e), this._process();
					},
					finalize: function(e) {
						return e && this._append(e), this._doFinalize();
					},
					keySize: 4,
					ivSize: 4,
					_ENC_XFORM_MODE: 1,
					_DEC_XFORM_MODE: 2,
					_createHelper: function() {
						function e(e) {
							return typeof e == "string" ? y : _;
						}
						return function(t) {
							return {
								encrypt: function(n, r, i) {
									return e(r).encrypt(t, n, r, i);
								},
								decrypt: function(n, r, i) {
									return e(r).decrypt(t, n, r, i);
								}
							};
						};
					}()
				});
				r.StreamCipher = u.extend({
					_doFinalize: function() {
						return this._process(!0);
					},
					blockSize: 1
				});
				var d = n.mode = {}, f = r.BlockCipherMode = i.extend({
					createEncryptor: function(e, t) {
						return this.Encryptor.create(e, t);
					},
					createDecryptor: function(e, t) {
						return this.Decryptor.create(e, t);
					},
					init: function(e, t) {
						this._cipher = e, this._iv = t;
					}
				}), p = d.CBC = function() {
					var e = f.extend();
					function n(e, n, r) {
						var i, a = this._iv;
						a ? (i = a, this._iv = t) : i = this._prevBlock;
						for (var o = 0; o < r; o++) e[n + o] ^= i[o];
					}
					return e.Encryptor = e.extend({ processBlock: function(e, t) {
						var r = this._cipher, i = r.blockSize;
						n.call(this, e, t, i), r.encryptBlock(e, t), this._prevBlock = e.slice(t, t + i);
					} }), e.Decryptor = e.extend({ processBlock: function(e, t) {
						var r = this._cipher, i = r.blockSize, a = e.slice(t, t + i);
						r.decryptBlock(e, t), n.call(this, e, t, i), this._prevBlock = a;
					} }), e;
				}(), m = (n.pad = {}).Pkcs7 = {
					pad: function(e, t) {
						for (var n = 4 * t, r = n - e.sigBytes % n, i = r << 24 | r << 16 | r << 8 | r, o = [], s = 0; s < r; s += 4) o.push(i);
						var c = a.create(o, r);
						e.concat(c);
					},
					unpad: function(e) {
						var t = 255 & e.words[e.sigBytes - 1 >>> 2];
						e.sigBytes -= t;
					}
				};
				r.BlockCipher = u.extend({
					cfg: u.cfg.extend({
						mode: p,
						padding: m
					}),
					reset: function() {
						var e;
						u.reset.call(this);
						var t = this.cfg, n = t.iv, r = t.mode;
						this._xformMode == this._ENC_XFORM_MODE ? e = r.createEncryptor : (e = r.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == e ? this._mode.init(this, n && n.words) : (this._mode = e.call(r, this, n && n.words), this._mode.__creator = e);
					},
					_doProcessBlock: function(e, t) {
						this._mode.processBlock(e, t);
					},
					_doFinalize: function() {
						var e, t = this.cfg.padding;
						return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize), e = this._process(!0)) : (e = this._process(!0), t.unpad(e)), e;
					},
					blockSize: 4
				});
				var h = r.CipherParams = i.extend({
					init: function(e) {
						this.mixIn(e);
					},
					toString: function(e) {
						return (e || this.formatter).stringify(this);
					}
				}), g = (n.format = {}).OpenSSL = {
					stringify: function(e) {
						var t = e.ciphertext, n = e.salt;
						return (n ? a.create([1398893684, 1701076831]).concat(n).concat(t) : t).toString(c);
					},
					parse: function(e) {
						var t, n = c.parse(e), r = n.words;
						return r[0] == 1398893684 && r[1] == 1701076831 && (t = a.create(r.slice(2, 4)), r.splice(0, 4), n.sigBytes -= 16), h.create({
							ciphertext: n,
							salt: t
						});
					}
				}, _ = r.SerializableCipher = i.extend({
					cfg: i.extend({ format: g }),
					encrypt: function(e, t, n, r) {
						r = this.cfg.extend(r);
						var i = e.createEncryptor(n, r), a = i.finalize(t), o = i.cfg;
						return h.create({
							ciphertext: a,
							key: n,
							iv: o.iv,
							algorithm: e,
							mode: o.mode,
							padding: o.padding,
							blockSize: e.blockSize,
							formatter: r.format
						});
					},
					decrypt: function(e, t, n, r) {
						return r = this.cfg.extend(r), t = this._parse(t, r.format), e.createDecryptor(n, r).finalize(t.ciphertext);
					},
					_parse: function(e, t) {
						return typeof e == "string" ? t.parse(e, this) : e;
					}
				}), v = (n.kdf = {}).OpenSSL = { execute: function(e, t, n, r, i) {
					if (r ||= a.random(8), i) o = l.create({
						keySize: t + n,
						hasher: i
					}).compute(e, r);
					else var o = l.create({ keySize: t + n }).compute(e, r);
					var s = a.create(o.words.slice(t), 4 * n);
					return o.sigBytes = 4 * t, h.create({
						key: o,
						iv: s,
						salt: r
					});
				} }, y = r.PasswordBasedCipher = _.extend({
					cfg: _.cfg.extend({ kdf: v }),
					encrypt: function(e, t, n, r) {
						var i = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize, r.salt, r.hasher);
						r.iv = i.iv;
						var a = _.encrypt.call(this, e, t, i.key, r);
						return a.mixIn(i), a;
					},
					decrypt: function(e, t, n, r) {
						r = this.cfg.extend(r), t = this._parse(t, r.format);
						var i = r.kdf.execute(n, e.keySize, e.ivSize, t.salt, r.hasher);
						return r.iv = i.iv, _.decrypt.call(this, e, t, i.key, r);
					}
				});
			}();
		}(Y(), lt())), dt.exports;
	}
	var pt, mt = { exports: {} };
	function ht() {
		return pt || (pt = 1, mt.exports = function(e) {
			return e.mode.CFB = function() {
				var t = e.lib.BlockCipherMode.extend();
				function n(e, t, n, r) {
					var i, a = this._iv;
					a ? (i = a.slice(0), this._iv = void 0) : i = this._prevBlock, r.encryptBlock(i, 0);
					for (var o = 0; o < n; o++) e[t + o] ^= i[o];
				}
				return t.Encryptor = t.extend({ processBlock: function(e, t) {
					var r = this._cipher, i = r.blockSize;
					n.call(this, e, t, i, r), this._prevBlock = e.slice(t, t + i);
				} }), t.Decryptor = t.extend({ processBlock: function(e, t) {
					var r = this._cipher, i = r.blockSize, a = e.slice(t, t + i);
					n.call(this, e, t, i, r), this._prevBlock = a;
				} }), t;
			}(), e.mode.CFB;
		}(Y(), ft())), mt.exports;
	}
	var gt, _t = { exports: {} };
	function vt() {
		return gt || (gt = 1, _t.exports = function(e) {
			return e.mode.CTR = (t = e.lib.BlockCipherMode.extend(), n = t.Encryptor = t.extend({ processBlock: function(e, t) {
				var n = this._cipher, r = n.blockSize, i = this._iv, a = this._counter;
				i && (a = this._counter = i.slice(0), this._iv = void 0);
				var o = a.slice(0);
				n.encryptBlock(o, 0), a[r - 1] = a[r - 1] + 1 | 0;
				for (var s = 0; s < r; s++) e[t + s] ^= o[s];
			} }), t.Decryptor = n, t), e.mode.CTR;
			var t, n;
		}(Y(), ft())), _t.exports;
	}
	var yt, bt = { exports: {} };
	function xt() {
		return yt || (yt = 1, bt.exports = function(e) {
			return e.mode.CTRGladman = function() {
				var t = e.lib.BlockCipherMode.extend();
				function n(e) {
					if (255 & ~(e >> 24)) e += 1 << 24;
					else {
						var t = e >> 16 & 255, n = e >> 8 & 255, r = 255 & e;
						t === 255 ? (t = 0, n === 255 ? (n = 0, r === 255 ? r = 0 : ++r) : ++n) : ++t, e = 0, e += t << 16, e += n << 8, e += r;
					}
					return e;
				}
				function r(e) {
					return (e[0] = n(e[0])) === 0 && (e[1] = n(e[1])), e;
				}
				return t.Decryptor = t.Encryptor = t.extend({ processBlock: function(e, t) {
					var n = this._cipher, i = n.blockSize, a = this._iv, o = this._counter;
					a && (o = this._counter = a.slice(0), this._iv = void 0), r(o);
					var s = o.slice(0);
					n.encryptBlock(s, 0);
					for (var c = 0; c < i; c++) e[t + c] ^= s[c];
				} }), t;
			}(), e.mode.CTRGladman;
		}(Y(), ft())), bt.exports;
	}
	var St, Ct = { exports: {} };
	function wt() {
		return St || (St = 1, Ct.exports = function(e) {
			return e.mode.OFB = (t = e.lib.BlockCipherMode.extend(), n = t.Encryptor = t.extend({ processBlock: function(e, t) {
				var n = this._cipher, r = n.blockSize, i = this._iv, a = this._keystream;
				i && (a = this._keystream = i.slice(0), this._iv = void 0), n.encryptBlock(a, 0);
				for (var o = 0; o < r; o++) e[t + o] ^= a[o];
			} }), t.Decryptor = n, t), e.mode.OFB;
			var t, n;
		}(Y(), ft())), Ct.exports;
	}
	var Tt, Et = { exports: {} }, Dt, Ot = { exports: {} }, kt, At = { exports: {} }, jt, Mt = { exports: {} }, Nt, Pt = { exports: {} }, Ft, It = { exports: {} }, Lt, Rt = { exports: {} }, zt, Bt = { exports: {} }, Vt, Ht = { exports: {} };
	function Ut() {
		return Vt || (Vt = 1, Ht.exports = function(e) {
			return function() {
				var t = e, n = t.lib, r = n.WordArray, i = n.BlockCipher, a = t.algo, o = [
					57,
					49,
					41,
					33,
					25,
					17,
					9,
					1,
					58,
					50,
					42,
					34,
					26,
					18,
					10,
					2,
					59,
					51,
					43,
					35,
					27,
					19,
					11,
					3,
					60,
					52,
					44,
					36,
					63,
					55,
					47,
					39,
					31,
					23,
					15,
					7,
					62,
					54,
					46,
					38,
					30,
					22,
					14,
					6,
					61,
					53,
					45,
					37,
					29,
					21,
					13,
					5,
					28,
					20,
					12,
					4
				], s = [
					14,
					17,
					11,
					24,
					1,
					5,
					3,
					28,
					15,
					6,
					21,
					10,
					23,
					19,
					12,
					4,
					26,
					8,
					16,
					7,
					27,
					20,
					13,
					2,
					41,
					52,
					31,
					37,
					47,
					55,
					30,
					40,
					51,
					45,
					33,
					48,
					44,
					49,
					39,
					56,
					34,
					53,
					46,
					42,
					50,
					36,
					29,
					32
				], c = [
					1,
					2,
					4,
					6,
					8,
					10,
					12,
					14,
					15,
					17,
					19,
					21,
					23,
					25,
					27,
					28
				], l = [
					{
						0: 8421888,
						268435456: 32768,
						536870912: 8421378,
						805306368: 2,
						1073741824: 512,
						1342177280: 8421890,
						1610612736: 8389122,
						1879048192: 8388608,
						2147483648: 514,
						2415919104: 8389120,
						2684354560: 33280,
						2952790016: 8421376,
						3221225472: 32770,
						3489660928: 8388610,
						3758096384: 0,
						4026531840: 33282,
						134217728: 0,
						402653184: 8421890,
						671088640: 33282,
						939524096: 32768,
						1207959552: 8421888,
						1476395008: 512,
						1744830464: 8421378,
						2013265920: 2,
						2281701376: 8389120,
						2550136832: 33280,
						2818572288: 8421376,
						3087007744: 8389122,
						3355443200: 8388610,
						3623878656: 32770,
						3892314112: 514,
						4160749568: 8388608,
						1: 32768,
						268435457: 2,
						536870913: 8421888,
						805306369: 8388608,
						1073741825: 8421378,
						1342177281: 33280,
						1610612737: 512,
						1879048193: 8389122,
						2147483649: 8421890,
						2415919105: 8421376,
						2684354561: 8388610,
						2952790017: 33282,
						3221225473: 514,
						3489660929: 8389120,
						3758096385: 32770,
						4026531841: 0,
						134217729: 8421890,
						402653185: 8421376,
						671088641: 8388608,
						939524097: 512,
						1207959553: 32768,
						1476395009: 8388610,
						1744830465: 2,
						2013265921: 33282,
						2281701377: 32770,
						2550136833: 8389122,
						2818572289: 514,
						3087007745: 8421888,
						3355443201: 8389120,
						3623878657: 0,
						3892314113: 33280,
						4160749569: 8421378
					},
					{
						0: 1074282512,
						16777216: 16384,
						33554432: 524288,
						50331648: 1074266128,
						67108864: 1073741840,
						83886080: 1074282496,
						100663296: 1073758208,
						117440512: 16,
						134217728: 540672,
						150994944: 1073758224,
						167772160: 1073741824,
						184549376: 540688,
						201326592: 524304,
						218103808: 0,
						234881024: 16400,
						251658240: 1074266112,
						8388608: 1073758208,
						25165824: 540688,
						41943040: 16,
						58720256: 1073758224,
						75497472: 1074282512,
						92274688: 1073741824,
						109051904: 524288,
						125829120: 1074266128,
						142606336: 524304,
						159383552: 0,
						176160768: 16384,
						192937984: 1074266112,
						209715200: 1073741840,
						226492416: 540672,
						243269632: 1074282496,
						260046848: 16400,
						268435456: 0,
						285212672: 1074266128,
						301989888: 1073758224,
						318767104: 1074282496,
						335544320: 1074266112,
						352321536: 16,
						369098752: 540688,
						385875968: 16384,
						402653184: 16400,
						419430400: 524288,
						436207616: 524304,
						452984832: 1073741840,
						469762048: 540672,
						486539264: 1073758208,
						503316480: 1073741824,
						520093696: 1074282512,
						276824064: 540688,
						293601280: 524288,
						310378496: 1074266112,
						327155712: 16384,
						343932928: 1073758208,
						360710144: 1074282512,
						377487360: 16,
						394264576: 1073741824,
						411041792: 1074282496,
						427819008: 1073741840,
						444596224: 1073758224,
						461373440: 524304,
						478150656: 0,
						494927872: 16400,
						511705088: 1074266128,
						528482304: 540672
					},
					{
						0: 260,
						1048576: 0,
						2097152: 67109120,
						3145728: 65796,
						4194304: 65540,
						5242880: 67108868,
						6291456: 67174660,
						7340032: 67174400,
						8388608: 67108864,
						9437184: 67174656,
						10485760: 65792,
						11534336: 67174404,
						12582912: 67109124,
						13631488: 65536,
						14680064: 4,
						15728640: 256,
						524288: 67174656,
						1572864: 67174404,
						2621440: 0,
						3670016: 67109120,
						4718592: 67108868,
						5767168: 65536,
						6815744: 65540,
						7864320: 260,
						8912896: 4,
						9961472: 256,
						11010048: 67174400,
						12058624: 65796,
						13107200: 65792,
						14155776: 67109124,
						15204352: 67174660,
						16252928: 67108864,
						16777216: 67174656,
						17825792: 65540,
						18874368: 65536,
						19922944: 67109120,
						20971520: 256,
						22020096: 67174660,
						23068672: 67108868,
						24117248: 0,
						25165824: 67109124,
						26214400: 67108864,
						27262976: 4,
						28311552: 65792,
						29360128: 67174400,
						30408704: 260,
						31457280: 65796,
						32505856: 67174404,
						17301504: 67108864,
						18350080: 260,
						19398656: 67174656,
						20447232: 0,
						21495808: 65540,
						22544384: 67109120,
						23592960: 256,
						24641536: 67174404,
						25690112: 65536,
						26738688: 67174660,
						27787264: 65796,
						28835840: 67108868,
						29884416: 67109124,
						30932992: 67174400,
						31981568: 4,
						33030144: 65792
					},
					{
						0: 2151682048,
						65536: 2147487808,
						131072: 4198464,
						196608: 2151677952,
						262144: 0,
						327680: 4198400,
						393216: 2147483712,
						458752: 4194368,
						524288: 2147483648,
						589824: 4194304,
						655360: 64,
						720896: 2147487744,
						786432: 2151678016,
						851968: 4160,
						917504: 4096,
						983040: 2151682112,
						32768: 2147487808,
						98304: 64,
						163840: 2151678016,
						229376: 2147487744,
						294912: 4198400,
						360448: 2151682112,
						425984: 0,
						491520: 2151677952,
						557056: 4096,
						622592: 2151682048,
						688128: 4194304,
						753664: 4160,
						819200: 2147483648,
						884736: 4194368,
						950272: 4198464,
						1015808: 2147483712,
						1048576: 4194368,
						1114112: 4198400,
						1179648: 2147483712,
						1245184: 0,
						1310720: 4160,
						1376256: 2151678016,
						1441792: 2151682048,
						1507328: 2147487808,
						1572864: 2151682112,
						1638400: 2147483648,
						1703936: 2151677952,
						1769472: 4198464,
						1835008: 2147487744,
						1900544: 4194304,
						1966080: 64,
						2031616: 4096,
						1081344: 2151677952,
						1146880: 2151682112,
						1212416: 0,
						1277952: 4198400,
						1343488: 4194368,
						1409024: 2147483648,
						1474560: 2147487808,
						1540096: 64,
						1605632: 2147483712,
						1671168: 4096,
						1736704: 2147487744,
						1802240: 2151678016,
						1867776: 4160,
						1933312: 2151682048,
						1998848: 4194304,
						2064384: 4198464
					},
					{
						0: 128,
						4096: 17039360,
						8192: 262144,
						12288: 536870912,
						16384: 537133184,
						20480: 16777344,
						24576: 553648256,
						28672: 262272,
						32768: 16777216,
						36864: 537133056,
						40960: 536871040,
						45056: 553910400,
						49152: 553910272,
						53248: 0,
						57344: 17039488,
						61440: 553648128,
						2048: 17039488,
						6144: 553648256,
						10240: 128,
						14336: 17039360,
						18432: 262144,
						22528: 537133184,
						26624: 553910272,
						30720: 536870912,
						34816: 537133056,
						38912: 0,
						43008: 553910400,
						47104: 16777344,
						51200: 536871040,
						55296: 553648128,
						59392: 16777216,
						63488: 262272,
						65536: 262144,
						69632: 128,
						73728: 536870912,
						77824: 553648256,
						81920: 16777344,
						86016: 553910272,
						90112: 537133184,
						94208: 16777216,
						98304: 553910400,
						102400: 553648128,
						106496: 17039360,
						110592: 537133056,
						114688: 262272,
						118784: 536871040,
						122880: 0,
						126976: 17039488,
						67584: 553648256,
						71680: 16777216,
						75776: 17039360,
						79872: 537133184,
						83968: 536870912,
						88064: 17039488,
						92160: 128,
						96256: 553910272,
						100352: 262272,
						104448: 553910400,
						108544: 0,
						112640: 553648128,
						116736: 16777344,
						120832: 262144,
						124928: 537133056,
						129024: 536871040
					},
					{
						0: 268435464,
						256: 8192,
						512: 270532608,
						768: 270540808,
						1024: 268443648,
						1280: 2097152,
						1536: 2097160,
						1792: 268435456,
						2048: 0,
						2304: 268443656,
						2560: 2105344,
						2816: 8,
						3072: 270532616,
						3328: 2105352,
						3584: 8200,
						3840: 270540800,
						128: 270532608,
						384: 270540808,
						640: 8,
						896: 2097152,
						1152: 2105352,
						1408: 268435464,
						1664: 268443648,
						1920: 8200,
						2176: 2097160,
						2432: 8192,
						2688: 268443656,
						2944: 270532616,
						3200: 0,
						3456: 270540800,
						3712: 2105344,
						3968: 268435456,
						4096: 268443648,
						4352: 270532616,
						4608: 270540808,
						4864: 8200,
						5120: 2097152,
						5376: 268435456,
						5632: 268435464,
						5888: 2105344,
						6144: 2105352,
						6400: 0,
						6656: 8,
						6912: 270532608,
						7168: 8192,
						7424: 268443656,
						7680: 270540800,
						7936: 2097160,
						4224: 8,
						4480: 2105344,
						4736: 2097152,
						4992: 268435464,
						5248: 268443648,
						5504: 8200,
						5760: 270540808,
						6016: 270532608,
						6272: 270540800,
						6528: 270532616,
						6784: 8192,
						7040: 2105352,
						7296: 2097160,
						7552: 0,
						7808: 268435456,
						8064: 268443656
					},
					{
						0: 1048576,
						16: 33555457,
						32: 1024,
						48: 1049601,
						64: 34604033,
						80: 0,
						96: 1,
						112: 34603009,
						128: 33555456,
						144: 1048577,
						160: 33554433,
						176: 34604032,
						192: 34603008,
						208: 1025,
						224: 1049600,
						240: 33554432,
						8: 34603009,
						24: 0,
						40: 33555457,
						56: 34604032,
						72: 1048576,
						88: 33554433,
						104: 33554432,
						120: 1025,
						136: 1049601,
						152: 33555456,
						168: 34603008,
						184: 1048577,
						200: 1024,
						216: 34604033,
						232: 1,
						248: 1049600,
						256: 33554432,
						272: 1048576,
						288: 33555457,
						304: 34603009,
						320: 1048577,
						336: 33555456,
						352: 34604032,
						368: 1049601,
						384: 1025,
						400: 34604033,
						416: 1049600,
						432: 1,
						448: 0,
						464: 34603008,
						480: 33554433,
						496: 1024,
						264: 1049600,
						280: 33555457,
						296: 34603009,
						312: 1,
						328: 33554432,
						344: 1048576,
						360: 1025,
						376: 34604032,
						392: 33554433,
						408: 34603008,
						424: 0,
						440: 34604033,
						456: 1049601,
						472: 1024,
						488: 33555456,
						504: 1048577
					},
					{
						0: 134219808,
						1: 131072,
						2: 134217728,
						3: 32,
						4: 131104,
						5: 134350880,
						6: 134350848,
						7: 2048,
						8: 134348800,
						9: 134219776,
						10: 133120,
						11: 134348832,
						12: 2080,
						13: 0,
						14: 134217760,
						15: 133152,
						2147483648: 2048,
						2147483649: 134350880,
						2147483650: 134219808,
						2147483651: 134217728,
						2147483652: 134348800,
						2147483653: 133120,
						2147483654: 133152,
						2147483655: 32,
						2147483656: 134217760,
						2147483657: 2080,
						2147483658: 131104,
						2147483659: 134350848,
						2147483660: 0,
						2147483661: 134348832,
						2147483662: 134219776,
						2147483663: 131072,
						16: 133152,
						17: 134350848,
						18: 32,
						19: 2048,
						20: 134219776,
						21: 134217760,
						22: 134348832,
						23: 131072,
						24: 0,
						25: 131104,
						26: 134348800,
						27: 134219808,
						28: 134350880,
						29: 133120,
						30: 2080,
						31: 134217728,
						2147483664: 131072,
						2147483665: 2048,
						2147483666: 134348832,
						2147483667: 133152,
						2147483668: 32,
						2147483669: 134348800,
						2147483670: 134217728,
						2147483671: 134219808,
						2147483672: 134350880,
						2147483673: 134217760,
						2147483674: 134219776,
						2147483675: 0,
						2147483676: 133120,
						2147483677: 2080,
						2147483678: 131104,
						2147483679: 134350848
					}
				], u = [
					4160749569,
					528482304,
					33030144,
					2064384,
					129024,
					8064,
					504,
					2147483679
				], d = a.DES = i.extend({
					_doReset: function() {
						for (var e = this._key.words, t = [], n = 0; n < 56; n++) {
							var r = o[n] - 1;
							t[n] = e[r >>> 5] >>> 31 - r % 32 & 1;
						}
						for (var i = this._subKeys = [], a = 0; a < 16; a++) {
							var l = i[a] = [], u = c[a];
							for (n = 0; n < 24; n++) l[n / 6 | 0] |= t[(s[n] - 1 + u) % 28] << 31 - n % 6, l[4 + (n / 6 | 0)] |= t[28 + (s[n + 24] - 1 + u) % 28] << 31 - n % 6;
							for (l[0] = l[0] << 1 | l[0] >>> 31, n = 1; n < 7; n++) l[n] = l[n] >>> 4 * (n - 1) + 3;
							l[7] = l[7] << 5 | l[7] >>> 27;
						}
						var d = this._invSubKeys = [];
						for (n = 0; n < 16; n++) d[n] = i[15 - n];
					},
					encryptBlock: function(e, t) {
						this._doCryptBlock(e, t, this._subKeys);
					},
					decryptBlock: function(e, t) {
						this._doCryptBlock(e, t, this._invSubKeys);
					},
					_doCryptBlock: function(e, t, n) {
						this._lBlock = e[t], this._rBlock = e[t + 1], f.call(this, 4, 252645135), f.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), f.call(this, 1, 1431655765);
						for (var r = 0; r < 16; r++) {
							for (var i = n[r], a = this._lBlock, o = this._rBlock, s = 0, c = 0; c < 8; c++) s |= l[c][((o ^ i[c]) & u[c]) >>> 0];
							this._lBlock = o, this._rBlock = a ^ s;
						}
						var d = this._lBlock;
						this._lBlock = this._rBlock, this._rBlock = d, f.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), f.call(this, 16, 65535), f.call(this, 4, 252645135), e[t] = this._lBlock, e[t + 1] = this._rBlock;
					},
					keySize: 2,
					ivSize: 2,
					blockSize: 2
				});
				function f(e, t) {
					var n = (this._lBlock >>> e ^ this._rBlock) & t;
					this._rBlock ^= n, this._lBlock ^= n << e;
				}
				function p(e, t) {
					var n = (this._rBlock >>> e ^ this._lBlock) & t;
					this._lBlock ^= n, this._rBlock ^= n << e;
				}
				t.DES = i._createHelper(d);
				var m = a.TripleDES = i.extend({
					_doReset: function() {
						var e = this._key.words;
						if (e.length !== 2 && e.length !== 4 && e.length < 6) throw Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
						var t = e.slice(0, 2), n = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4), i = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
						this._des1 = d.createEncryptor(r.create(t)), this._des2 = d.createEncryptor(r.create(n)), this._des3 = d.createEncryptor(r.create(i));
					},
					encryptBlock: function(e, t) {
						this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t);
					},
					decryptBlock: function(e, t) {
						this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t);
					},
					keySize: 6,
					ivSize: 2,
					blockSize: 2
				});
				t.TripleDES = i._createHelper(m);
			}(), e.TripleDES;
		}(Y(), Ne(), ze(), lt(), ft())), Ht.exports;
	}
	var Wt, Gt = { exports: {} }, Kt, qt = { exports: {} }, Jt, Yt = { exports: {} }, Xt, Zt = { exports: {} };
	function Qt() {
		return Xt || (Xt = 1, Zt.exports = function(e) {
			return function() {
				var t = e, n = t.lib.BlockCipher, r = t.algo;
				let i = [
					608135816,
					2242054355,
					320440878,
					57701188,
					2752067618,
					698298832,
					137296536,
					3964562569,
					1160258022,
					953160567,
					3193202383,
					887688300,
					3232508343,
					3380367581,
					1065670069,
					3041331479,
					2450970073,
					2306472731
				], a = [
					[
						3509652390,
						2564797868,
						805139163,
						3491422135,
						3101798381,
						1780907670,
						3128725573,
						4046225305,
						614570311,
						3012652279,
						134345442,
						2240740374,
						1667834072,
						1901547113,
						2757295779,
						4103290238,
						227898511,
						1921955416,
						1904987480,
						2182433518,
						2069144605,
						3260701109,
						2620446009,
						720527379,
						3318853667,
						677414384,
						3393288472,
						3101374703,
						2390351024,
						1614419982,
						1822297739,
						2954791486,
						3608508353,
						3174124327,
						2024746970,
						1432378464,
						3864339955,
						2857741204,
						1464375394,
						1676153920,
						1439316330,
						715854006,
						3033291828,
						289532110,
						2706671279,
						2087905683,
						3018724369,
						1668267050,
						732546397,
						1947742710,
						3462151702,
						2609353502,
						2950085171,
						1814351708,
						2050118529,
						680887927,
						999245976,
						1800124847,
						3300911131,
						1713906067,
						1641548236,
						4213287313,
						1216130144,
						1575780402,
						4018429277,
						3917837745,
						3693486850,
						3949271944,
						596196993,
						3549867205,
						258830323,
						2213823033,
						772490370,
						2760122372,
						1774776394,
						2652871518,
						566650946,
						4142492826,
						1728879713,
						2882767088,
						1783734482,
						3629395816,
						2517608232,
						2874225571,
						1861159788,
						326777828,
						3124490320,
						2130389656,
						2716951837,
						967770486,
						1724537150,
						2185432712,
						2364442137,
						1164943284,
						2105845187,
						998989502,
						3765401048,
						2244026483,
						1075463327,
						1455516326,
						1322494562,
						910128902,
						469688178,
						1117454909,
						936433444,
						3490320968,
						3675253459,
						1240580251,
						122909385,
						2157517691,
						634681816,
						4142456567,
						3825094682,
						3061402683,
						2540495037,
						79693498,
						3249098678,
						1084186820,
						1583128258,
						426386531,
						1761308591,
						1047286709,
						322548459,
						995290223,
						1845252383,
						2603652396,
						3431023940,
						2942221577,
						3202600964,
						3727903485,
						1712269319,
						422464435,
						3234572375,
						1170764815,
						3523960633,
						3117677531,
						1434042557,
						442511882,
						3600875718,
						1076654713,
						1738483198,
						4213154764,
						2393238008,
						3677496056,
						1014306527,
						4251020053,
						793779912,
						2902807211,
						842905082,
						4246964064,
						1395751752,
						1040244610,
						2656851899,
						3396308128,
						445077038,
						3742853595,
						3577915638,
						679411651,
						2892444358,
						2354009459,
						1767581616,
						3150600392,
						3791627101,
						3102740896,
						284835224,
						4246832056,
						1258075500,
						768725851,
						2589189241,
						3069724005,
						3532540348,
						1274779536,
						3789419226,
						2764799539,
						1660621633,
						3471099624,
						4011903706,
						913787905,
						3497959166,
						737222580,
						2514213453,
						2928710040,
						3937242737,
						1804850592,
						3499020752,
						2949064160,
						2386320175,
						2390070455,
						2415321851,
						4061277028,
						2290661394,
						2416832540,
						1336762016,
						1754252060,
						3520065937,
						3014181293,
						791618072,
						3188594551,
						3933548030,
						2332172193,
						3852520463,
						3043980520,
						413987798,
						3465142937,
						3030929376,
						4245938359,
						2093235073,
						3534596313,
						375366246,
						2157278981,
						2479649556,
						555357303,
						3870105701,
						2008414854,
						3344188149,
						4221384143,
						3956125452,
						2067696032,
						3594591187,
						2921233993,
						2428461,
						544322398,
						577241275,
						1471733935,
						610547355,
						4027169054,
						1432588573,
						1507829418,
						2025931657,
						3646575487,
						545086370,
						48609733,
						2200306550,
						1653985193,
						298326376,
						1316178497,
						3007786442,
						2064951626,
						458293330,
						2589141269,
						3591329599,
						3164325604,
						727753846,
						2179363840,
						146436021,
						1461446943,
						4069977195,
						705550613,
						3059967265,
						3887724982,
						4281599278,
						3313849956,
						1404054877,
						2845806497,
						146425753,
						1854211946
					],
					[
						1266315497,
						3048417604,
						3681880366,
						3289982499,
						290971e4,
						1235738493,
						2632868024,
						2414719590,
						3970600049,
						1771706367,
						1449415276,
						3266420449,
						422970021,
						1963543593,
						2690192192,
						3826793022,
						1062508698,
						1531092325,
						1804592342,
						2583117782,
						2714934279,
						4024971509,
						1294809318,
						4028980673,
						1289560198,
						2221992742,
						1669523910,
						35572830,
						157838143,
						1052438473,
						1016535060,
						1802137761,
						1753167236,
						1386275462,
						3080475397,
						2857371447,
						1040679964,
						2145300060,
						2390574316,
						1461121720,
						2956646967,
						4031777805,
						4028374788,
						33600511,
						2920084762,
						1018524850,
						629373528,
						3691585981,
						3515945977,
						2091462646,
						2486323059,
						586499841,
						988145025,
						935516892,
						3367335476,
						2599673255,
						2839830854,
						265290510,
						3972581182,
						2759138881,
						3795373465,
						1005194799,
						847297441,
						406762289,
						1314163512,
						1332590856,
						1866599683,
						4127851711,
						750260880,
						613907577,
						1450815602,
						3165620655,
						3734664991,
						3650291728,
						3012275730,
						3704569646,
						1427272223,
						778793252,
						1343938022,
						2676280711,
						2052605720,
						1946737175,
						3164576444,
						3914038668,
						3967478842,
						3682934266,
						1661551462,
						3294938066,
						4011595847,
						840292616,
						3712170807,
						616741398,
						312560963,
						711312465,
						1351876610,
						322626781,
						1910503582,
						271666773,
						2175563734,
						1594956187,
						70604529,
						3617834859,
						1007753275,
						1495573769,
						4069517037,
						2549218298,
						2663038764,
						504708206,
						2263041392,
						3941167025,
						2249088522,
						1514023603,
						1998579484,
						1312622330,
						694541497,
						2582060303,
						2151582166,
						1382467621,
						776784248,
						2618340202,
						3323268794,
						2497899128,
						2784771155,
						503983604,
						4076293799,
						907881277,
						423175695,
						432175456,
						1378068232,
						4145222326,
						3954048622,
						3938656102,
						3820766613,
						2793130115,
						2977904593,
						26017576,
						3274890735,
						3194772133,
						1700274565,
						1756076034,
						4006520079,
						3677328699,
						720338349,
						1533947780,
						354530856,
						688349552,
						3973924725,
						1637815568,
						332179504,
						3949051286,
						53804574,
						2852348879,
						3044236432,
						1282449977,
						3583942155,
						3416972820,
						4006381244,
						1617046695,
						2628476075,
						3002303598,
						1686838959,
						431878346,
						2686675385,
						1700445008,
						1080580658,
						1009431731,
						832498133,
						3223435511,
						2605976345,
						2271191193,
						2516031870,
						1648197032,
						4164389018,
						2548247927,
						300782431,
						375919233,
						238389289,
						3353747414,
						2531188641,
						2019080857,
						1475708069,
						455242339,
						2609103871,
						448939670,
						3451063019,
						1395535956,
						2413381860,
						1841049896,
						1491858159,
						885456874,
						4264095073,
						4001119347,
						1565136089,
						3898914787,
						1108368660,
						540939232,
						1173283510,
						2745871338,
						3681308437,
						4207628240,
						3343053890,
						4016749493,
						1699691293,
						1103962373,
						3625875870,
						2256883143,
						3830138730,
						1031889488,
						3479347698,
						1535977030,
						4236805024,
						3251091107,
						2132092099,
						1774941330,
						1199868427,
						1452454533,
						157007616,
						2904115357,
						342012276,
						595725824,
						1480756522,
						206960106,
						497939518,
						591360097,
						863170706,
						2375253569,
						3596610801,
						1814182875,
						2094937945,
						3421402208,
						1082520231,
						3463918190,
						2785509508,
						435703966,
						3908032597,
						1641649973,
						2842273706,
						3305899714,
						1510255612,
						2148256476,
						2655287854,
						3276092548,
						4258621189,
						236887753,
						3681803219,
						274041037,
						1734335097,
						3815195456,
						3317970021,
						1899903192,
						1026095262,
						4050517792,
						356393447,
						2410691914,
						3873677099,
						3682840055
					],
					[
						3913112168,
						2491498743,
						4132185628,
						2489919796,
						1091903735,
						1979897079,
						3170134830,
						3567386728,
						3557303409,
						857797738,
						1136121015,
						1342202287,
						507115054,
						2535736646,
						337727348,
						3213592640,
						1301675037,
						2528481711,
						1895095763,
						1721773893,
						3216771564,
						62756741,
						2142006736,
						835421444,
						2531993523,
						1442658625,
						3659876326,
						2882144922,
						676362277,
						1392781812,
						170690266,
						3921047035,
						1759253602,
						3611846912,
						1745797284,
						664899054,
						1329594018,
						3901205900,
						3045908486,
						2062866102,
						2865634940,
						3543621612,
						3464012697,
						1080764994,
						553557557,
						3656615353,
						3996768171,
						991055499,
						499776247,
						1265440854,
						648242737,
						3940784050,
						980351604,
						3713745714,
						1749149687,
						3396870395,
						4211799374,
						3640570775,
						1161844396,
						3125318951,
						1431517754,
						545492359,
						4268468663,
						3499529547,
						1437099964,
						2702547544,
						3433638243,
						2581715763,
						2787789398,
						1060185593,
						1593081372,
						2418618748,
						4260947970,
						69676912,
						2159744348,
						86519011,
						2512459080,
						3838209314,
						1220612927,
						3339683548,
						133810670,
						1090789135,
						1078426020,
						1569222167,
						845107691,
						3583754449,
						4072456591,
						1091646820,
						628848692,
						1613405280,
						3757631651,
						526609435,
						236106946,
						48312990,
						2942717905,
						3402727701,
						1797494240,
						859738849,
						992217954,
						4005476642,
						2243076622,
						3870952857,
						3732016268,
						765654824,
						3490871365,
						2511836413,
						1685915746,
						3888969200,
						1414112111,
						2273134842,
						3281911079,
						4080962846,
						172450625,
						2569994100,
						980381355,
						4109958455,
						2819808352,
						2716589560,
						2568741196,
						3681446669,
						3329971472,
						1835478071,
						660984891,
						3704678404,
						4045999559,
						3422617507,
						3040415634,
						1762651403,
						1719377915,
						3470491036,
						2693910283,
						3642056355,
						3138596744,
						1364962596,
						2073328063,
						1983633131,
						926494387,
						3423689081,
						2150032023,
						4096667949,
						1749200295,
						3328846651,
						309677260,
						2016342300,
						1779581495,
						3079819751,
						111262694,
						1274766160,
						443224088,
						298511866,
						1025883608,
						3806446537,
						1145181785,
						168956806,
						3641502830,
						3584813610,
						1689216846,
						3666258015,
						3200248200,
						1692713982,
						2646376535,
						4042768518,
						1618508792,
						1610833997,
						3523052358,
						4130873264,
						2001055236,
						3610705100,
						2202168115,
						4028541809,
						2961195399,
						1006657119,
						2006996926,
						3186142756,
						1430667929,
						3210227297,
						1314452623,
						4074634658,
						4101304120,
						2273951170,
						1399257539,
						3367210612,
						3027628629,
						1190975929,
						2062231137,
						2333990788,
						2221543033,
						2438960610,
						1181637006,
						548689776,
						2362791313,
						3372408396,
						3104550113,
						3145860560,
						296247880,
						1970579870,
						3078560182,
						3769228297,
						1714227617,
						3291629107,
						3898220290,
						166772364,
						1251581989,
						493813264,
						448347421,
						195405023,
						2709975567,
						677966185,
						3703036547,
						1463355134,
						2715995803,
						1338867538,
						1343315457,
						2802222074,
						2684532164,
						233230375,
						2599980071,
						2000651841,
						3277868038,
						1638401717,
						4028070440,
						3237316320,
						6314154,
						819756386,
						300326615,
						590932579,
						1405279636,
						3267499572,
						3150704214,
						2428286686,
						3959192993,
						3461946742,
						1862657033,
						1266418056,
						963775037,
						2089974820,
						2263052895,
						1917689273,
						448879540,
						3550394620,
						3981727096,
						150775221,
						3627908307,
						1303187396,
						508620638,
						2975983352,
						2726630617,
						1817252668,
						1876281319,
						1457606340,
						908771278,
						3720792119,
						3617206836,
						2455994898,
						1729034894,
						1080033504
					],
					[
						976866871,
						3556439503,
						2881648439,
						1522871579,
						1555064734,
						1336096578,
						3548522304,
						2579274686,
						3574697629,
						3205460757,
						3593280638,
						3338716283,
						3079412587,
						564236357,
						2993598910,
						1781952180,
						1464380207,
						3163844217,
						3332601554,
						1699332808,
						1393555694,
						1183702653,
						3581086237,
						1288719814,
						691649499,
						2847557200,
						2895455976,
						3193889540,
						2717570544,
						1781354906,
						1676643554,
						2592534050,
						3230253752,
						1126444790,
						2770207658,
						2633158820,
						2210423226,
						2615765581,
						2414155088,
						3127139286,
						673620729,
						2805611233,
						1269405062,
						4015350505,
						3341807571,
						4149409754,
						1057255273,
						2012875353,
						2162469141,
						2276492801,
						2601117357,
						993977747,
						3918593370,
						2654263191,
						753973209,
						36408145,
						2530585658,
						25011837,
						3520020182,
						2088578344,
						530523599,
						2918365339,
						1524020338,
						1518925132,
						3760827505,
						3759777254,
						1202760957,
						3985898139,
						3906192525,
						674977740,
						4174734889,
						2031300136,
						2019492241,
						3983892565,
						4153806404,
						3822280332,
						352677332,
						2297720250,
						60907813,
						90501309,
						3286998549,
						1016092578,
						2535922412,
						2839152426,
						457141659,
						509813237,
						4120667899,
						652014361,
						1966332200,
						2975202805,
						55981186,
						2327461051,
						676427537,
						3255491064,
						2882294119,
						3433927263,
						1307055953,
						942726286,
						933058658,
						2468411793,
						3933900994,
						4215176142,
						1361170020,
						2001714738,
						2830558078,
						3274259782,
						1222529897,
						1679025792,
						2729314320,
						3714953764,
						1770335741,
						151462246,
						3013232138,
						1682292957,
						1483529935,
						471910574,
						1539241949,
						458788160,
						3436315007,
						1807016891,
						3718408830,
						978976581,
						1043663428,
						3165965781,
						1927990952,
						4200891579,
						2372276910,
						3208408903,
						3533431907,
						1412390302,
						2931980059,
						4132332400,
						1947078029,
						3881505623,
						4168226417,
						2941484381,
						1077988104,
						1320477388,
						886195818,
						18198404,
						3786409e3,
						2509781533,
						112762804,
						3463356488,
						1866414978,
						891333506,
						18488651,
						661792760,
						1628790961,
						3885187036,
						3141171499,
						876946877,
						2693282273,
						1372485963,
						791857591,
						2686433993,
						3759982718,
						3167212022,
						3472953795,
						2716379847,
						445679433,
						3561995674,
						3504004811,
						3574258232,
						54117162,
						3331405415,
						2381918588,
						3769707343,
						4154350007,
						1140177722,
						4074052095,
						668550556,
						3214352940,
						367459370,
						261225585,
						2610173221,
						4209349473,
						3468074219,
						3265815641,
						314222801,
						3066103646,
						3808782860,
						282218597,
						3406013506,
						3773591054,
						379116347,
						1285071038,
						846784868,
						2669647154,
						3771962079,
						3550491691,
						2305946142,
						453669953,
						1268987020,
						3317592352,
						3279303384,
						3744833421,
						2610507566,
						3859509063,
						266596637,
						3847019092,
						517658769,
						3462560207,
						3443424879,
						370717030,
						4247526661,
						2224018117,
						4143653529,
						4112773975,
						2788324899,
						2477274417,
						1456262402,
						2901442914,
						1517677493,
						1846949527,
						2295493580,
						3734397586,
						2176403920,
						1280348187,
						1908823572,
						3871786941,
						846861322,
						1172426758,
						3287448474,
						3383383037,
						1655181056,
						3139813346,
						901632758,
						1897031941,
						2986607138,
						3066810236,
						3447102507,
						1393639104,
						373351379,
						950779232,
						625454576,
						3124240540,
						4148612726,
						2007998917,
						544563296,
						2244738638,
						2330496472,
						2058025392,
						1291430526,
						424198748,
						50039436,
						29584100,
						3605783033,
						2429876329,
						2791104160,
						1057563949,
						3255363231,
						3075367218,
						3463963227,
						1469046755,
						985887462
					]
				];
				var o = {
					pbox: [],
					sbox: []
				};
				function s(e, t) {
					let n = t >> 24 & 255, r = t >> 16 & 255, i = t >> 8 & 255, a = 255 & t, o = e.sbox[0][n] + e.sbox[1][r];
					return o ^= e.sbox[2][i], o += e.sbox[3][a], o;
				}
				function c(e, t, n) {
					let r, i = t, a = n;
					for (let t = 0; t < 16; ++t) i ^= e.pbox[t], a = s(e, i) ^ a, r = i, i = a, a = r;
					return r = i, i = a, a = r, a ^= e.pbox[16], i ^= e.pbox[17], {
						left: i,
						right: a
					};
				}
				function l(e, t, n) {
					let r, i = t, a = n;
					for (let t = 17; t > 1; --t) i ^= e.pbox[t], a = s(e, i) ^ a, r = i, i = a, a = r;
					return r = i, i = a, a = r, a ^= e.pbox[1], i ^= e.pbox[0], {
						left: i,
						right: a
					};
				}
				function u(e, t, n) {
					for (let t = 0; t < 4; t++) {
						e.sbox[t] = [];
						for (let n = 0; n < 256; n++) e.sbox[t][n] = a[t][n];
					}
					let r = 0;
					for (let a = 0; a < 18; a++) e.pbox[a] = i[a] ^ t[r], r++, r >= n && (r = 0);
					let o = 0, s = 0, l = 0;
					for (let t = 0; t < 18; t += 2) l = c(e, o, s), o = l.left, s = l.right, e.pbox[t] = o, e.pbox[t + 1] = s;
					for (let t = 0; t < 4; t++) for (let n = 0; n < 256; n += 2) l = c(e, o, s), o = l.left, s = l.right, e.sbox[t][n] = o, e.sbox[t][n + 1] = s;
					return !0;
				}
				var d = r.Blowfish = n.extend({
					_doReset: function() {
						if (this._keyPriorReset !== this._key) {
							var e = this._keyPriorReset = this._key, t = e.words;
							u(o, t, e.sigBytes / 4);
						}
					},
					encryptBlock: function(e, t) {
						var n = c(o, e[t], e[t + 1]);
						e[t] = n.left, e[t + 1] = n.right;
					},
					decryptBlock: function(e, t) {
						var n = l(o, e[t], e[t + 1]);
						e[t] = n.left, e[t + 1] = n.right;
					},
					blockSize: 2,
					keySize: 4,
					ivSize: 2
				});
				t.Blowfish = n._createHelper(d);
			}(), e.Blowfish;
		}(Y(), Ne(), ze(), lt(), ft())), Zt.exports;
	}
	var $t, en = de(($t || ($t = 1, xe.exports = function(e) {
		return e;
	}(Y(), we(), De(), Ae(), Ne(), Ie(), ze(), He(), Ge(), Ke || (Ke = 1, qe.exports = function(e) {
		return n = (t = e).lib.WordArray, r = t.algo, i = r.SHA256, a = r.SHA224 = i.extend({
			_doReset: function() {
				this._hash = new n.init([
					3238371032,
					914150663,
					812702999,
					4144912697,
					4290775857,
					1750603025,
					1694076839,
					3204075428
				]);
			},
			_doFinalize: function() {
				var e = i._doFinalize.call(this);
				return e.sigBytes -= 4, e;
			}
		}), t.SHA224 = i._createHelper(a), t.HmacSHA224 = i._createHmacHelper(a), e.SHA224;
		var t, n, r, i, a;
	}(Y(), Ge())), Xe(), Ze || (Ze = 1, Qe.exports = function(e) {
		return n = (t = e).x64, r = n.Word, i = n.WordArray, a = t.algo, o = a.SHA512, s = a.SHA384 = o.extend({
			_doReset: function() {
				this._hash = new i.init([
					new r.init(3418070365, 3238371032),
					new r.init(1654270250, 914150663),
					new r.init(2438529370, 812702999),
					new r.init(355462360, 4144912697),
					new r.init(1731405415, 4290775857),
					new r.init(2394180231, 1750603025),
					new r.init(3675008525, 1694076839),
					new r.init(1203062813, 3204075428)
				]);
			},
			_doFinalize: function() {
				var e = o._doFinalize.call(this);
				return e.sigBytes -= 16, e;
			}
		}), t.SHA384 = o._createHelper(s), t.HmacSHA384 = o._createHmacHelper(s), e.SHA384;
		var t, n, r, i, a, o, s;
	}(Y(), we(), Xe())), tt(), nt || (nt = 1, rt.exports = function(e) {
		return function() {
			var t = e, n = t.lib, r = n.WordArray, i = n.Hasher, a = t.algo, o = r.create([
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				7,
				4,
				13,
				1,
				10,
				6,
				15,
				3,
				12,
				0,
				9,
				5,
				2,
				14,
				11,
				8,
				3,
				10,
				14,
				4,
				9,
				15,
				8,
				1,
				2,
				7,
				0,
				6,
				13,
				11,
				5,
				12,
				1,
				9,
				11,
				10,
				0,
				8,
				12,
				4,
				13,
				3,
				7,
				15,
				14,
				5,
				6,
				2,
				4,
				0,
				5,
				9,
				7,
				12,
				2,
				10,
				14,
				1,
				3,
				8,
				11,
				6,
				15,
				13
			]), s = r.create([
				5,
				14,
				7,
				0,
				9,
				2,
				11,
				4,
				13,
				6,
				15,
				8,
				1,
				10,
				3,
				12,
				6,
				11,
				3,
				7,
				0,
				13,
				5,
				10,
				14,
				15,
				8,
				12,
				4,
				9,
				1,
				2,
				15,
				5,
				1,
				3,
				7,
				14,
				6,
				9,
				11,
				8,
				12,
				2,
				10,
				0,
				4,
				13,
				8,
				6,
				4,
				1,
				3,
				11,
				15,
				0,
				5,
				12,
				2,
				13,
				9,
				7,
				10,
				14,
				12,
				15,
				10,
				4,
				1,
				5,
				8,
				7,
				6,
				2,
				13,
				14,
				0,
				3,
				9,
				11
			]), c = r.create([
				11,
				14,
				15,
				12,
				5,
				8,
				7,
				9,
				11,
				13,
				14,
				15,
				6,
				7,
				9,
				8,
				7,
				6,
				8,
				13,
				11,
				9,
				7,
				15,
				7,
				12,
				15,
				9,
				11,
				7,
				13,
				12,
				11,
				13,
				6,
				7,
				14,
				9,
				13,
				15,
				14,
				8,
				13,
				6,
				5,
				12,
				7,
				5,
				11,
				12,
				14,
				15,
				14,
				15,
				9,
				8,
				9,
				14,
				5,
				6,
				8,
				6,
				5,
				12,
				9,
				15,
				5,
				11,
				6,
				8,
				13,
				12,
				5,
				12,
				13,
				14,
				11,
				8,
				5,
				6
			]), l = r.create([
				8,
				9,
				9,
				11,
				13,
				15,
				15,
				5,
				7,
				7,
				8,
				11,
				14,
				14,
				12,
				6,
				9,
				13,
				15,
				7,
				12,
				8,
				9,
				11,
				7,
				7,
				12,
				7,
				6,
				15,
				13,
				11,
				9,
				7,
				15,
				11,
				8,
				6,
				6,
				14,
				12,
				13,
				5,
				14,
				13,
				13,
				7,
				5,
				15,
				5,
				8,
				11,
				14,
				14,
				6,
				14,
				6,
				9,
				12,
				9,
				12,
				5,
				15,
				8,
				8,
				5,
				12,
				9,
				12,
				5,
				14,
				6,
				8,
				13,
				6,
				5,
				15,
				13,
				11,
				11
			]), u = r.create([
				0,
				1518500249,
				1859775393,
				2400959708,
				2840853838
			]), d = r.create([
				1352829926,
				1548603684,
				1836072691,
				2053994217,
				0
			]), f = a.RIPEMD160 = i.extend({
				_doReset: function() {
					this._hash = r.create([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var n = 0; n < 16; n++) {
						var r = t + n, i = e[r];
						e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
					}
					var a, f, y, b, x, S, C, w, T, E, D, O = this._hash.words, k = u.words, A = d.words, j = o.words, M = s.words, N = c.words, P = l.words;
					for (S = a = O[0], C = f = O[1], w = y = O[2], T = b = O[3], E = x = O[4], n = 0; n < 80; n += 1) D = a + e[t + j[n]] | 0, D += n < 16 ? p(f, y, b) + k[0] : n < 32 ? m(f, y, b) + k[1] : n < 48 ? h(f, y, b) + k[2] : n < 64 ? g(f, y, b) + k[3] : _(f, y, b) + k[4], D = (D = v(D |= 0, N[n])) + x | 0, a = x, x = b, b = v(y, 10), y = f, f = D, D = S + e[t + M[n]] | 0, D += n < 16 ? _(C, w, T) + A[0] : n < 32 ? g(C, w, T) + A[1] : n < 48 ? h(C, w, T) + A[2] : n < 64 ? m(C, w, T) + A[3] : p(C, w, T) + A[4], D = (D = v(D |= 0, P[n])) + E | 0, S = E, E = T, T = v(w, 10), w = C, C = D;
					D = O[1] + y + T | 0, O[1] = O[2] + b + E | 0, O[2] = O[3] + x + S | 0, O[3] = O[4] + a + C | 0, O[4] = O[0] + f + w | 0, O[0] = D;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
					t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();
					for (var i = this._hash, a = i.words, o = 0; o < 5; o++) {
						var s = a[o];
						a[o] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
					}
					return i;
				},
				clone: function() {
					var e = i.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			function p(e, t, n) {
				return e ^ t ^ n;
			}
			function m(e, t, n) {
				return e & t | ~e & n;
			}
			function h(e, t, n) {
				return (e | ~t) ^ n;
			}
			function g(e, t, n) {
				return e & n | t & ~n;
			}
			function _(e, t, n) {
				return e ^ (t | ~n);
			}
			function v(e, t) {
				return e << t | e >>> 32 - t;
			}
			t.RIPEMD160 = i._createHelper(f), t.HmacRIPEMD160 = i._createHmacHelper(f);
		}(), e.RIPEMD160;
	}(Y())), X(), ot || (ot = 1, Z.exports = function(e) {
		return r = (n = (t = e).lib).Base, i = n.WordArray, o = (a = t.algo).SHA256, s = a.HMAC, c = a.PBKDF2 = r.extend({
			cfg: r.extend({
				keySize: 4,
				hasher: o,
				iterations: 25e4
			}),
			init: function(e) {
				this.cfg = this.cfg.extend(e);
			},
			compute: function(e, t) {
				for (var n = this.cfg, r = s.create(n.hasher, e), a = i.create(), o = i.create([1]), c = a.words, l = o.words, u = n.keySize, d = n.iterations; c.length < u;) {
					var f = r.update(t).finalize(o);
					r.reset();
					for (var p = f.words, m = p.length, h = f, g = 1; g < d; g++) {
						h = r.finalize(h), r.reset();
						for (var _ = h.words, v = 0; v < m; v++) p[v] ^= _[v];
					}
					a.concat(f), l[0]++;
				}
				return a.sigBytes = 4 * u, a;
			}
		}), t.PBKDF2 = function(e, t, n) {
			return c.create(n).compute(e, t);
		}, e.PBKDF2;
		var t, n, r, i, a, o, s, c;
	}(Y(), Ge(), X())), lt(), ft(), ht(), vt(), xt(), wt(), Tt || (Tt = 1, Et.exports = function(e) {
		return e.mode.ECB = ((t = e.lib.BlockCipherMode.extend()).Encryptor = t.extend({ processBlock: function(e, t) {
			this._cipher.encryptBlock(e, t);
		} }), t.Decryptor = t.extend({ processBlock: function(e, t) {
			this._cipher.decryptBlock(e, t);
		} }), t), e.mode.ECB;
		var t;
	}(Y(), ft())), Dt || (Dt = 1, Ot.exports = function(e) {
		return e.pad.AnsiX923 = {
			pad: function(e, t) {
				var n = e.sigBytes, r = 4 * t, i = r - n % r, a = n + i - 1;
				e.clamp(), e.words[a >>> 2] |= i << 24 - a % 4 * 8, e.sigBytes += i;
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Ansix923;
	}(Y(), ft())), kt || (kt = 1, At.exports = function(e) {
		return e.pad.Iso10126 = {
			pad: function(t, n) {
				var r = 4 * n, i = r - t.sigBytes % r;
				t.concat(e.lib.WordArray.random(i - 1)).concat(e.lib.WordArray.create([i << 24], 1));
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Iso10126;
	}(Y(), ft())), jt || (jt = 1, Mt.exports = function(e) {
		return e.pad.Iso97971 = {
			pad: function(t, n) {
				t.concat(e.lib.WordArray.create([2147483648], 1)), e.pad.ZeroPadding.pad(t, n);
			},
			unpad: function(t) {
				e.pad.ZeroPadding.unpad(t), t.sigBytes--;
			}
		}, e.pad.Iso97971;
	}(Y(), ft())), Nt || (Nt = 1, Pt.exports = function(e) {
		return e.pad.ZeroPadding = {
			pad: function(e, t) {
				var n = 4 * t;
				e.clamp(), e.sigBytes += n - (e.sigBytes % n || n);
			},
			unpad: function(e) {
				var t = e.words, n = e.sigBytes - 1;
				for (n = e.sigBytes - 1; n >= 0; n--) if (t[n >>> 2] >>> 24 - n % 4 * 8 & 255) {
					e.sigBytes = n + 1;
					break;
				}
			}
		}, e.pad.ZeroPadding;
	}(Y(), ft())), Ft || (Ft = 1, It.exports = function(e) {
		return e.pad.NoPadding = {
			pad: function() {},
			unpad: function() {}
		}, e.pad.NoPadding;
	}(Y(), ft())), Lt || (Lt = 1, Rt.exports = function(e) {
		return n = (t = e).lib.CipherParams, r = t.enc.Hex, t.format.Hex = {
			stringify: function(e) {
				return e.ciphertext.toString(r);
			},
			parse: function(e) {
				var t = r.parse(e);
				return n.create({ ciphertext: t });
			}
		}, e.format.Hex;
		var t, n, r;
	}(Y(), ft())), zt || (zt = 1, Bt.exports = function(e) {
		return function() {
			var t = e, n = t.lib.BlockCipher, r = t.algo, i = [], a = [], o = [], s = [], c = [], l = [], u = [], d = [], f = [], p = [];
			(function() {
				for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
				var n = 0, r = 0;
				for (t = 0; t < 256; t++) {
					var m = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
					m = m >>> 8 ^ 255 & m ^ 99, i[n] = m, a[m] = n;
					var h = e[n], g = e[h], _ = e[g], v = 257 * e[m] ^ 16843008 * m;
					o[n] = v << 24 | v >>> 8, s[n] = v << 16 | v >>> 16, c[n] = v << 8 | v >>> 24, l[n] = v, v = 16843009 * _ ^ 65537 * g ^ 257 * h ^ 16843008 * n, u[m] = v << 24 | v >>> 8, d[m] = v << 16 | v >>> 16, f[m] = v << 8 | v >>> 24, p[m] = v, n ? (n = h ^ e[e[e[_ ^ h]]], r ^= e[e[r]]) : n = r = 1;
				}
			})();
			var m = [
				0,
				1,
				2,
				4,
				8,
				16,
				32,
				64,
				128,
				27,
				54
			], h = r.AES = n.extend({
				_doReset: function() {
					if (!this._nRounds || this._keyPriorReset !== this._key) {
						for (var e = this._keyPriorReset = this._key, t = e.words, n = e.sigBytes / 4, r = 4 * ((this._nRounds = n + 6) + 1), a = this._keySchedule = [], o = 0; o < r; o++) o < n ? a[o] = t[o] : (l = a[o - 1], o % n ? n > 6 && o % n == 4 && (l = i[l >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l]) : (l = i[(l = l << 8 | l >>> 24) >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l], l ^= m[o / n | 0] << 24), a[o] = a[o - n] ^ l);
						for (var s = this._invKeySchedule = [], c = 0; c < r; c++) {
							if (o = r - c, c % 4) var l = a[o];
							else l = a[o - 4];
							s[c] = c < 4 || o <= 4 ? l : u[i[l >>> 24]] ^ d[i[l >>> 16 & 255]] ^ f[i[l >>> 8 & 255]] ^ p[i[255 & l]];
						}
					}
				},
				encryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._keySchedule, o, s, c, l, i);
				},
				decryptBlock: function(e, t) {
					var n = e[t + 1];
					e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, u, d, f, p, a), n = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = n;
				},
				_doCryptBlock: function(e, t, n, r, i, a, o, s) {
					for (var c = this._nRounds, l = e[t] ^ n[0], u = e[t + 1] ^ n[1], d = e[t + 2] ^ n[2], f = e[t + 3] ^ n[3], p = 4, m = 1; m < c; m++) {
						var h = r[l >>> 24] ^ i[u >>> 16 & 255] ^ a[d >>> 8 & 255] ^ o[255 & f] ^ n[p++], g = r[u >>> 24] ^ i[d >>> 16 & 255] ^ a[f >>> 8 & 255] ^ o[255 & l] ^ n[p++], _ = r[d >>> 24] ^ i[f >>> 16 & 255] ^ a[l >>> 8 & 255] ^ o[255 & u] ^ n[p++], v = r[f >>> 24] ^ i[l >>> 16 & 255] ^ a[u >>> 8 & 255] ^ o[255 & d] ^ n[p++];
						l = h, u = g, d = _, f = v;
					}
					h = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & f]) ^ n[p++], g = (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[p++], _ = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & u]) ^ n[p++], v = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & d]) ^ n[p++], e[t] = h, e[t + 1] = g, e[t + 2] = _, e[t + 3] = v;
				},
				keySize: 8
			});
			t.AES = n._createHelper(h);
		}(), e.AES;
	}(Y(), Ne(), ze(), lt(), ft())), Ut(), Wt || (Wt = 1, Gt.exports = function(e) {
		return function() {
			var t = e, n = t.lib.StreamCipher, r = t.algo, i = r.RC4 = n.extend({
				_doReset: function() {
					for (var e = this._key, t = e.words, n = e.sigBytes, r = this._S = [], i = 0; i < 256; i++) r[i] = i;
					i = 0;
					for (var a = 0; i < 256; i++) {
						var o = i % n, s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
						a = (a + r[i] + s) % 256;
						var c = r[i];
						r[i] = r[a], r[a] = c;
					}
					this._i = this._j = 0;
				},
				_doProcessBlock: function(e, t) {
					e[t] ^= a.call(this);
				},
				keySize: 8,
				ivSize: 0
			});
			function a() {
				for (var e = this._S, t = this._i, n = this._j, r = 0, i = 0; i < 4; i++) {
					n = (n + e[t = (t + 1) % 256]) % 256;
					var a = e[t];
					e[t] = e[n], e[n] = a, r |= e[(e[t] + e[n]) % 256] << 24 - 8 * i;
				}
				return this._i = t, this._j = n, r;
			}
			t.RC4 = n._createHelper(i);
			var o = r.RC4Drop = i.extend({
				cfg: i.cfg.extend({ drop: 192 }),
				_doReset: function() {
					i._doReset.call(this);
					for (var e = this.cfg.drop; e > 0; e--) a.call(this);
				}
			});
			t.RC4Drop = n._createHelper(o);
		}(), e.RC4;
	}(Y(), Ne(), ze(), lt(), ft())), Kt || (Kt = 1, qt.exports = function(e) {
		return function() {
			var t = e, n = t.lib.StreamCipher, r = t.algo, i = [], a = [], o = [], s = r.Rabbit = n.extend({
				_doReset: function() {
					for (var e = this._key.words, t = this.cfg.iv, n = 0; n < 4; n++) e[n] = 16711935 & (e[n] << 8 | e[n] >>> 24) | 4278255360 & (e[n] << 24 | e[n] >>> 8);
					var r = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], i = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					for (this._b = 0, n = 0; n < 4; n++) c.call(this);
					for (n = 0; n < 8; n++) i[n] ^= r[n + 4 & 7];
					if (t) {
						var a = t.words, o = a[0], s = a[1], l = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), d = l >>> 16 | 4294901760 & u, f = u << 16 | 65535 & l;
						for (i[0] ^= l, i[1] ^= d, i[2] ^= u, i[3] ^= f, i[4] ^= l, i[5] ^= d, i[6] ^= u, i[7] ^= f, n = 0; n < 4; n++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var n = this._X;
					c.call(this), i[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16, i[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16, i[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16, i[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
					for (var r = 0; r < 4; r++) i[r] = 16711935 & (i[r] << 8 | i[r] >>> 24) | 4278255360 & (i[r] << 24 | i[r] >>> 8), e[t + r] ^= i[r];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, n = 0; n < 8; n++) a[n] = t[n];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + +(t[0] >>> 0 < a[0] >>> 0) | 0, t[2] = t[2] + 886263092 + +(t[1] >>> 0 < a[1] >>> 0) | 0, t[3] = t[3] + 1295307597 + +(t[2] >>> 0 < a[2] >>> 0) | 0, t[4] = t[4] + 3545052371 + +(t[3] >>> 0 < a[3] >>> 0) | 0, t[5] = t[5] + 886263092 + +(t[4] >>> 0 < a[4] >>> 0) | 0, t[6] = t[6] + 1295307597 + +(t[5] >>> 0 < a[5] >>> 0) | 0, t[7] = t[7] + 3545052371 + +(t[6] >>> 0 < a[6] >>> 0) | 0, this._b = +(t[7] >>> 0 < a[7] >>> 0), n = 0; n < 8; n++) {
					var r = e[n] + t[n], i = 65535 & r, s = r >>> 16;
					o[n] = ((i * i >>> 17) + i * s >>> 15) + s * s ^ ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
				}
				e[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, e[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, e[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, e[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, e[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, e[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, e[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, e[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
			}
			t.Rabbit = n._createHelper(s);
		}(), e.Rabbit;
	}(Y(), Ne(), ze(), lt(), ft())), Jt || (Jt = 1, Yt.exports = function(e) {
		return function() {
			var t = e, n = t.lib.StreamCipher, r = t.algo, i = [], a = [], o = [], s = r.RabbitLegacy = n.extend({
				_doReset: function() {
					var e = this._key.words, t = this.cfg.iv, n = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], r = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					this._b = 0;
					for (var i = 0; i < 4; i++) c.call(this);
					for (i = 0; i < 8; i++) r[i] ^= n[i + 4 & 7];
					if (t) {
						var a = t.words, o = a[0], s = a[1], l = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), d = l >>> 16 | 4294901760 & u, f = u << 16 | 65535 & l;
						for (r[0] ^= l, r[1] ^= d, r[2] ^= u, r[3] ^= f, r[4] ^= l, r[5] ^= d, r[6] ^= u, r[7] ^= f, i = 0; i < 4; i++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var n = this._X;
					c.call(this), i[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16, i[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16, i[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16, i[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
					for (var r = 0; r < 4; r++) i[r] = 16711935 & (i[r] << 8 | i[r] >>> 24) | 4278255360 & (i[r] << 24 | i[r] >>> 8), e[t + r] ^= i[r];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, n = 0; n < 8; n++) a[n] = t[n];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + +(t[0] >>> 0 < a[0] >>> 0) | 0, t[2] = t[2] + 886263092 + +(t[1] >>> 0 < a[1] >>> 0) | 0, t[3] = t[3] + 1295307597 + +(t[2] >>> 0 < a[2] >>> 0) | 0, t[4] = t[4] + 3545052371 + +(t[3] >>> 0 < a[3] >>> 0) | 0, t[5] = t[5] + 886263092 + +(t[4] >>> 0 < a[4] >>> 0) | 0, t[6] = t[6] + 1295307597 + +(t[5] >>> 0 < a[5] >>> 0) | 0, t[7] = t[7] + 3545052371 + +(t[6] >>> 0 < a[6] >>> 0) | 0, this._b = +(t[7] >>> 0 < a[7] >>> 0), n = 0; n < 8; n++) {
					var r = e[n] + t[n], i = 65535 & r, s = r >>> 16;
					o[n] = ((i * i >>> 17) + i * s >>> 15) + s * s ^ ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
				}
				e[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, e[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, e[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, e[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, e[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, e[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, e[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, e[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
			}
			t.RabbitLegacy = n._createHelper(s);
		}(), e.RabbitLegacy;
	}(Y(), Ne(), ze(), lt(), ft())), Qt())), xe.exports)), tn = [
		"Cham",
		"Jamo",
		"Kawi",
		"Lisu",
		"Toto",
		"Thai"
	], nn = function(e, t) {
		t != null && t[e] && typeof t[e] == "object" && "code" in t[e] && t[e].code && (e = t[e].code);
		try {
			var n = G.get("Locale", e), r = n.language, i = n.region, a = n.script;
			return !(e.split("-").length !== (o = 1, i && (o += 1), a && (o += 1), o) || G.get("DisplayNames", [z], { type: "language" }).of(r) === r && !function(e) {
				return e >= "qaa" && e <= "qtz";
			}(r) || i && G.get("DisplayNames", [z], { type: "region" }).of(i) === i || a && G.get("DisplayNames", [z], { type: "script" }).of(a) === a && !tn.includes(a));
		} catch {
			return !1;
		}
		var o;
	}, rn = function(e) {
		try {
			return Intl.getCanonicalLocales(e)[0];
		} catch {
			return e;
		}
	};
	function an(e, t) {
		var n = G.get("Locale", e), r = n.language, i = n.region, a = n.script, o = G.get("Locale", t), s = o.language, c = o.region, l = o.script;
		return r === s && (!i || !c || i === c) && (!a || !l || a === l);
	}
	function on() {
		var e = [...arguments];
		try {
			for (var t = e.flat().map(rn), n = 0; n < t.length; n++) for (var r = n + 1; r < t.length; r++) if (!an(t[n], t[r])) return !1;
			return !0;
		} catch (e) {
			return console.error(e), !1;
		}
	}
	function sn() {
		var e = [...arguments];
		try {
			var t = e.flat().map(function(e) {
				return G.get("Locale", e).language;
			});
			return t.every(function(e) {
				return e === t[0];
			});
		} catch (e) {
			return console.error(e), !1;
		}
	}
	function cn(e, t, n, r) {
		return !(!nn(e, r) || !nn(t, r) || n && n.some(function(e) {
			return !nn(e, r);
		})) && !on(e, t) && !(n && !n.some(function(e) {
			return sn(t, e);
		}));
	}
	var ln = function(e, t, n) {
		if (e?.[t]) return typeof e[t] == "string" ? n === "name" ? e[t] : void 0 : e[t][n];
	}, un = function(e, t) {
		return !!(t?.[e] && typeof t[e] == "object" && "code" in t[e] && t[e].code && nn(t[e].code));
	};
	function dn(e, t) {
		var n = e;
		t && un(e, t) && (e = t[e].code);
		try {
			var r = rn(e), i = G.get("Locale", r), a = i.language, o = i.region;
			if (t) for (var s = 0, c = [
				n,
				e,
				r,
				a
			]; s < c.length; s++) {
				var l = ln(t, c[s], "emoji");
				if (l) return l;
			}
			if (o && hn[o]) return hn[o];
			var u = i.maximize(), d = u.region || "";
			return mn[u.language] || hn[d] || pn;
		} catch {
			return pn;
		}
	}
	var fn = "🌍", pn = fn, mn = {
		ca: fn,
		eu: fn,
		ku: fn,
		bo: "🌏",
		ug: "🌏",
		gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
		cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
		gv: "🇮🇲",
		grc: "🏺"
	}, hn = {
		AF: "🇦🇫",
		AX: "🇦🇽",
		AL: "🇦🇱",
		DZ: "🇩🇿",
		AS: "🇦🇸",
		AD: "🇦🇩",
		AO: "🇦🇴",
		AI: "🇦🇮",
		AQ: "🇦🇶",
		AG: "🇦🇬",
		AR: "🇦🇷",
		AM: "🇦🇲",
		AW: "🇦🇼",
		AU: "🇦🇺",
		AT: "🇦🇹",
		AZ: "🇦🇿",
		BS: "🇧🇸",
		BH: "🇧🇭",
		BD: "🇧🇩",
		BB: "🇧🇧",
		BY: "🇧🇾",
		BE: "🇧🇪",
		BZ: "🇧🇿",
		BJ: "🇧🇯",
		BM: "🇧🇲",
		BT: "🇧🇹",
		BO: "🇧🇴",
		BQ: "🇧🇶",
		BA: "🇧🇦",
		BW: "🇧🇼",
		BV: "🇧🇻",
		BR: "🇧🇷",
		IO: "🇮🇴",
		BN: "🇧🇳",
		BG: "🇧🇬",
		BF: "🇧🇫",
		BI: "🇧🇮",
		CV: "🇨🇻",
		KH: "🇰🇭",
		CM: "🇨🇲",
		CA: "🇨🇦",
		KY: "🇰🇾",
		CF: "🇨🇫",
		TD: "🇹🇩",
		CL: "🇨🇱",
		CN: "🇨🇳",
		CX: "🇨🇽",
		CC: "🇨🇨",
		CO: "🇨🇴",
		KM: "🇰🇲",
		CD: "🇨🇩",
		CG: "🇨🇬",
		CK: "🇨🇰",
		CR: "🇨🇷",
		CI: "🇨🇮",
		HR: "🇭🇷",
		CU: "🇨🇺",
		CW: "🇨🇼",
		CY: "🇨🇾",
		CZ: "🇨🇿",
		DK: "🇩🇰",
		DJ: "🇩🇯",
		DM: "🇩🇲",
		DO: "🇩🇴",
		EC: "🇪🇨",
		EG: "🇪🇬",
		SV: "🇸🇻",
		GQ: "🇬🇶",
		ER: "🇪🇷",
		EE: "🇪🇪",
		SZ: "🇸🇿",
		ET: "🇪🇹",
		FK: "🇫🇰",
		FO: "🇫🇴",
		FJ: "🇫🇯",
		FI: "🇫🇮",
		FR: "🇫🇷",
		GF: "🇬🇫",
		PF: "🇵🇫",
		TF: "🇹🇫",
		GA: "🇬🇦",
		GM: "🇬🇲",
		GE: "🇬🇪",
		DE: "🇩🇪",
		GH: "🇬🇭",
		GI: "🇬🇮",
		GR: "🇬🇷",
		GL: "🇬🇱",
		GD: "🇬🇩",
		GP: "🇬🇵",
		GU: "🇬🇺",
		GT: "🇬🇹",
		GG: "🇬🇬",
		GN: "🇬🇳",
		GW: "🇬🇼",
		GY: "🇬🇾",
		HT: "🇭🇹",
		HM: "🇭🇲",
		VA: "🇻🇦",
		HN: "🇭🇳",
		HK: "🇭🇰",
		HU: "🇭🇺",
		IS: "🇮🇸",
		IN: "🇮🇳",
		ID: "🇮🇩",
		IR: "🇮🇷",
		IQ: "🇮🇶",
		IE: "🇮🇪",
		IM: "🇮🇲",
		IL: "🇮🇱",
		IT: "🇮🇹",
		JM: "🇯🇲",
		JP: "🇯🇵",
		JE: "🇯🇪",
		JO: "🇯🇴",
		KZ: "🇰🇿",
		KE: "🇰🇪",
		KI: "🇰🇮",
		KP: "🇰🇵",
		KR: "🇰🇷",
		KW: "🇰🇼",
		KG: "🇰🇬",
		LA: "🇱🇦",
		LV: "🇱🇻",
		LB: "🇱🇧",
		LS: "🇱🇸",
		LR: "🇱🇷",
		LY: "🇱🇾",
		LI: "🇱🇮",
		LT: "🇱🇹",
		LU: "🇱🇺",
		MO: "🇲🇴",
		MG: "🇲🇬",
		MW: "🇲🇼",
		MY: "🇲🇾",
		MV: "🇲🇻",
		ML: "🇲🇱",
		MT: "🇲🇹",
		MH: "🇲🇭",
		MQ: "🇲🇶",
		MR: "🇲🇷",
		MU: "🇲🇺",
		YT: "🇾🇹",
		MX: "🇲🇽",
		FM: "🇫🇲",
		MD: "🇲🇩",
		MC: "🇲🇨",
		MN: "🇲🇳",
		ME: "🇲🇪",
		MS: "🇲🇸",
		MA: "🇲🇦",
		MZ: "🇲🇿",
		MM: "🇲🇲",
		NA: "🇳🇦",
		NR: "🇳🇷",
		NP: "🇳🇵",
		NL: "🇳🇱",
		NC: "🇳🇨",
		NZ: "🇳🇿",
		NI: "🇳🇮",
		NE: "🇳🇪",
		NG: "🇳🇬",
		NU: "🇳🇺",
		NF: "🇳🇫",
		MK: "🇲🇰",
		MP: "🇲🇵",
		NO: "🇳🇴",
		OM: "🇴🇲",
		PK: "🇵🇰",
		PW: "🇵🇼",
		PS: "🇵🇸",
		PA: "🇵🇦",
		PG: "🇵🇬",
		PY: "🇵🇾",
		PE: "🇵🇪",
		PH: "🇵🇭",
		PN: "🇵🇳",
		PL: "🇵🇱",
		PT: "🇵🇹",
		PR: "🇵🇷",
		QA: "🇶🇦",
		RE: "🇷🇪",
		RO: "🇷🇴",
		RU: "🇷🇺",
		RW: "🇷🇼",
		BL: "🇧🇱",
		SH: "🇸🇭",
		KN: "🇰🇳",
		LC: "🇱🇨",
		MF: "🇲🇫",
		PM: "🇵🇲",
		VC: "🇻🇨",
		WS: "🇼🇸",
		SM: "🇸🇲",
		ST: "🇸🇹",
		SA: "🇸🇦",
		SN: "🇸🇳",
		RS: "🇷🇸",
		SC: "🇸🇨",
		SL: "🇸🇱",
		SG: "🇸🇬",
		SX: "🇸🇽",
		SK: "🇸🇰",
		SI: "🇸🇮",
		SB: "🇸🇧",
		SO: "🇸🇴",
		ZA: "🇿🇦",
		GS: "🇬🇸",
		SS: "🇸🇸",
		ES: "🇪🇸",
		LK: "🇱🇰",
		SD: "🇸🇩",
		SR: "🇸🇷",
		SJ: "🇸🇯",
		SE: "🇸🇪",
		CH: "🇨🇭",
		SY: "🇸🇾",
		TW: "🇹🇼",
		TJ: "🇹🇯",
		TZ: "🇹🇿",
		TH: "🇹🇭",
		TL: "🇹🇱",
		TG: "🇹🇬",
		TK: "🇹🇰",
		TO: "🇹🇴",
		TT: "🇹🇹",
		TN: "🇹🇳",
		TR: "🇹🇷",
		TM: "🇹🇲",
		TC: "🇹🇨",
		TV: "🇹🇻",
		UG: "🇺🇬",
		UA: "🇺🇦",
		AE: "🇦🇪",
		GB: "🇬🇧",
		US: "🇺🇸",
		UM: "🇺🇲",
		UY: "🇺🇾",
		UZ: "🇺🇿",
		VU: "🇻🇺",
		VE: "🇻🇪",
		VN: "🇻🇳",
		VG: "🇻🇬",
		VI: "🇻🇮",
		WF: "🇼🇫",
		EH: "🇪🇭",
		YE: "🇾🇪",
		ZM: "🇿🇲",
		ZW: "🇿🇼",
		EU: "🇪🇺",
		419: "🌎"
	};
	function gn(e, t) {
		if (t) {
			for (var n = {}, i = 0, a = e; i < a.length; i++) {
				var o = t[a[i]];
				o && (typeof o == "string" ? n.name ||= o : o && (n = r(r({}, o), n)));
			}
			return n;
		}
	}
	function _n(e, t, n) {
		t === void 0 && (t = z);
		var r = e;
		n && un(e, n) && (e = n[e].code), t ||= z;
		try {
			var i = rn(e), a = G.get("Locale", e), o = gn([
				r,
				e,
				i,
				L = a.language
			], n), s = a.region, c = a.maximize(), l = c.toString(), u = a.region || o?.regionCode || c.region || "", d = a.script || o?.scriptCode || c.script || "", f = a.minimize().toString(), p = [
				t,
				e,
				z
			], m = [
				e,
				t,
				z
			], h = G.get("DisplayNames", p, { type: "language" }), g = G.get("DisplayNames", m, { type: "language" }), _ = o?.name, v = o?.nativeName || o?.name, y = _ || h.of(e) || e, b = v || g.of(e) || e, x = o?.maximizedName || _ || h.of(l) || e, S = o?.nativeMaximizedName || v || g.of(l) || e, C = o?.minimizedName || _ || h.of(f) || e, w = o?.nativeMinimizedName || v || g.of(f) || e, T = o?.languageName || _ || h.of(L) || e, E = o?.nativeLanguageName || v || g.of(L) || e, D = o?.nameWithRegionCode || s ? `${T} (${s})` : y, O = o?.nativeNameWithRegionCode || (s ? `${E} (${s})` : b) || D, k = G.get("DisplayNames", p, { type: "region" }), A = G.get("DisplayNames", m, { type: "region" }), j = o?.regionName || (u ? k.of(u) : "") || "", M = o?.nativeRegionName || (u ? A.of(u) : "") || "", N = G.get("DisplayNames", p, { type: "script" }), P = G.get("DisplayNames", m, { type: "script" });
			return {
				code: i,
				name: y,
				nativeName: b,
				maximizedCode: l,
				maximizedName: x,
				nativeMaximizedName: S,
				minimizedCode: f,
				minimizedName: C,
				nativeMinimizedName: w,
				languageCode: L,
				languageName: T,
				nativeLanguageName: E,
				nameWithRegionCode: D,
				nativeNameWithRegionCode: O,
				regionCode: u,
				regionName: j,
				nativeRegionName: M,
				scriptCode: d,
				scriptName: R = o?.scriptName || (d ? N.of(d) : "") || "",
				nativeScriptName: ee = o?.nativeScriptName || (d ? P.of(d) : "") || "",
				emoji: o?.emoji || dn(i, n)
			};
		} catch {
			var F = nn(e) ? rn(e) : e, I = F?.split("-"), L = I?.[0] || F || "";
			u = I.length > 2 ? I?.[2] : I?.[1] || "", d = I?.[3] || "", F = (o = gn([F, L], n))?.code || F, y = o?.name || F, b = o?.nativeName || y, l = o?.maximizedCode || F, x = o?.maximizedName || y, S = o?.nativeMaximizedName || b, f = o?.minimizedCode || F, C = o?.minimizedName || y, w = o?.nativeMinimizedName || b, L = o?.languageCode || L, T = o?.languageName || y, E = o?.nativeLanguageName || b, u = o?.regionCode || u, j = o?.regionName || "", M = o?.nativeRegionName || "", d = o?.scriptCode || d;
			var R = o?.scriptName || "", ee = o?.nativeScriptName || "";
			return {
				code: F,
				name: y,
				nativeName: b,
				maximizedCode: l,
				maximizedName: x,
				nativeMaximizedName: S,
				minimizedCode: f,
				minimizedName: C,
				nativeMinimizedName: w,
				languageCode: L,
				languageName: T,
				nativeLanguageName: E,
				nameWithRegionCode: D = o?.nameWithRegionCode || (j ? `${T} (${j})` : y),
				nativeNameWithRegionCode: O = o?.nativeNameWithRegionCode || (M ? `${E} (${M})` : b),
				regionCode: u,
				regionName: j,
				nativeRegionName: M,
				scriptCode: d,
				scriptName: R,
				nativeScriptName: ee,
				emoji: o?.emoji || pn
			};
		}
	}
	function vn(e, t, n) {
		typeof e == "string" && (e = [e]), e = e.filter(function(e) {
			return nn(e, n);
		}).map(rn), t = t.filter(function(e) {
			return nn(e, n);
		}).map(rn);
		for (var a = function(e) {
			var n = t.filter(function(t) {
				return sn(e, t);
			}), a = function(e) {
				for (var t = e.locale, r = e.languageCode, i = e.minimizedCode, a = e.regionCode, o = e.scriptCode, s = 0, c = [
					t,
					`${r}-${a}`,
					`${r}-${o}`,
					i
				]; s < c.length; s++) {
					var l = c[s];
					if (n.includes(l)) return l;
				}
				return null;
			}, o = _n(e), s = o.languageCode, c = i(o, ["languageCode"]), l = a(r({
				locale: e,
				languageCode: s
			}, c)) || a(r({ locale: s }, _n(s)));
			if (l) return { value: l };
		}, o = 0, s = e; o < s.length; o++) {
			var c = a(s[o]);
			if (typeof c == "object") return c.value;
		}
	}
	function yn(e, t) {
		var n = t && t.cache ? t.cache : On, r = t && t.serializer ? t.serializer : En;
		return (t && t.strategy ? t.strategy : Cn)(e, {
			cache: n,
			serializer: r
		});
	}
	function bn(e, t, n, r) {
		var i, a = (i = r) == null || typeof i == "number" || typeof i == "boolean" ? r : n(r), o = t.get(a);
		return o === void 0 && (o = e.call(this, r), t.set(a, o)), o;
	}
	function xn(e, t, n) {
		var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
		return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
	}
	function Sn(e, t, n, r, i) {
		return n.bind(t, e, r, i);
	}
	function Cn(e, t) {
		return Sn(e, this, e.length === 1 ? bn : xn, t.cache.create(), t.serializer);
	}
	var Q, wn, Tn, En = function() {
		return JSON.stringify(arguments);
	}, Dn = function() {
		function e() {
			this.cache = Object.create(null);
		}
		return e.prototype.get = function(e) {
			return this.cache[e];
		}, e.prototype.set = function(e, t) {
			this.cache[e] = t;
		}, e;
	}(), On = { create: function() {
		return new Dn();
	} }, kn = { variadic: function(e, t) {
		return Sn(e, this, xn, t.cache.create(), t.serializer);
	} };
	function An(e) {
		return e.type === wn.literal;
	}
	function jn(e) {
		return e.type === wn.argument;
	}
	function Mn(e) {
		return e.type === wn.number;
	}
	function Nn(e) {
		return e.type === wn.date;
	}
	function Pn(e) {
		return e.type === wn.time;
	}
	function Fn(e) {
		return e.type === wn.select;
	}
	function In(e) {
		return e.type === wn.plural;
	}
	function Ln(e) {
		return e.type === wn.pound;
	}
	function Rn(e) {
		return e.type === wn.tag;
	}
	function zn(e) {
		return !(!e || typeof e != "object" || e.type !== Tn.number);
	}
	function Bn(e) {
		return !(!e || typeof e != "object" || e.type !== Tn.dateTime);
	}
	(function(e) {
		e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
	})(Q ||= {}), function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(wn ||= {}), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(Tn ||= {});
	var Vn = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Hn = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
	function Un(e) {
		var t = {};
		return e.replace(Hn, function(e) {
			var n = e.length;
			switch (e[0]) {
				case "G":
					t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
					break;
				case "y":
					t.year = n === 2 ? "2-digit" : "numeric";
					break;
				case "Y":
				case "u":
				case "U":
				case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
				case "q":
				case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
				case "M":
				case "L":
					t.month = [
						"numeric",
						"2-digit",
						"short",
						"long",
						"narrow"
					][n - 1];
					break;
				case "w":
				case "W": throw RangeError("`w/W` (week) patterns are not supported");
				case "d":
					t.day = ["numeric", "2-digit"][n - 1];
					break;
				case "D":
				case "F":
				case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
				case "E":
					t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
					break;
				case "e":
					if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][n - 4];
					break;
				case "c":
					if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][n - 4];
					break;
				case "a":
					t.hour12 = !0;
					break;
				case "b":
				case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
				case "h":
					t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "H":
					t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "K":
					t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "k":
					t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "j":
				case "J":
				case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
				case "m":
					t.minute = ["numeric", "2-digit"][n - 1];
					break;
				case "s":
					t.second = ["numeric", "2-digit"][n - 1];
					break;
				case "S":
				case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
				case "z":
					t.timeZoneName = n < 4 ? "short" : "long";
					break;
				case "Z":
				case "O":
				case "v":
				case "V":
				case "X":
				case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
			}
			return "";
		}), t;
	}
	var Wn = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
	function Gn(e) {
		return e.replace(/^(.*?)-/, "");
	}
	var Kn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, qn = /^(@+)?(\+|#+)?[rs]?$/g, Jn = /(\*)(0+)|(#+)(0+)|(0+)/g, Yn = /^(0+)$/;
	function Xn(e) {
		var t = {};
		return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(qn, function(e, n, r) {
			return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
		}), t;
	}
	function Zn(e) {
		switch (e) {
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
	function Qn(e) {
		var t;
		if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
			var n = e.slice(0, 2);
			if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Yn.test(e)) throw Error("Malformed concise eng/scientific notation");
			t.minimumIntegerDigits = e.length;
		}
		return t;
	}
	function $n(e) {
		return Zn(e) || {};
	}
	function er(e) {
		for (var t = {}, n = 0, i = e; n < i.length; n++) {
			var a = i[n];
			switch (a.stem) {
				case "percent":
				case "%":
					t.style = "percent";
					continue;
				case "%x100":
					t.style = "percent", t.scale = 100;
					continue;
				case "currency":
					t.style = "currency", t.currency = a.options[0];
					continue;
				case "group-off":
				case ",_":
					t.useGrouping = !1;
					continue;
				case "precision-integer":
				case ".":
					t.maximumFractionDigits = 0;
					continue;
				case "measure-unit":
				case "unit":
					t.style = "unit", t.unit = Gn(a.options[0]);
					continue;
				case "compact-short":
				case "K":
					t.notation = "compact", t.compactDisplay = "short";
					continue;
				case "compact-long":
				case "KK":
					t.notation = "compact", t.compactDisplay = "long";
					continue;
				case "scientific":
					t = r(r(r({}, t), { notation: "scientific" }), a.options.reduce(function(e, t) {
						return r(r({}, e), $n(t));
					}, {}));
					continue;
				case "engineering":
					t = r(r(r({}, t), { notation: "engineering" }), a.options.reduce(function(e, t) {
						return r(r({}, e), $n(t));
					}, {}));
					continue;
				case "notation-simple":
					t.notation = "standard";
					continue;
				case "unit-width-narrow":
					t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
					continue;
				case "unit-width-short":
					t.currencyDisplay = "code", t.unitDisplay = "short";
					continue;
				case "unit-width-full-name":
					t.currencyDisplay = "name", t.unitDisplay = "long";
					continue;
				case "unit-width-iso-code":
					t.currencyDisplay = "symbol";
					continue;
				case "scale":
					t.scale = parseFloat(a.options[0]);
					continue;
				case "rounding-mode-floor":
					t.roundingMode = "floor";
					continue;
				case "rounding-mode-ceiling":
					t.roundingMode = "ceil";
					continue;
				case "rounding-mode-down":
					t.roundingMode = "trunc";
					continue;
				case "rounding-mode-up":
					t.roundingMode = "expand";
					continue;
				case "rounding-mode-half-even":
					t.roundingMode = "halfEven";
					continue;
				case "rounding-mode-half-down":
					t.roundingMode = "halfTrunc";
					continue;
				case "rounding-mode-half-up":
					t.roundingMode = "halfExpand";
					continue;
				case "integer-width":
					if (a.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
					a.options[0].replace(Jn, function(e, n, r, i, a, o) {
						if (n) t.minimumIntegerDigits = r.length;
						else {
							if (i && a) throw Error("We currently do not support maximum integer digits");
							if (o) throw Error("We currently do not support exact integer digits");
						}
						return "";
					});
					continue;
			}
			if (Yn.test(a.stem)) t.minimumIntegerDigits = a.stem.length;
			else if (Kn.test(a.stem)) {
				if (a.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
				a.stem.replace(Kn, function(e, n, r, i, a, o) {
					return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
				});
				var o = a.options[0];
				o === "w" ? t = r(r({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = r(r({}, t), Xn(o)));
			} else if (qn.test(a.stem)) t = r(r({}, t), Xn(a.stem));
			else {
				var s = Zn(a.stem);
				s && (t = r(r({}, t), s));
				var c = Qn(a.stem);
				c && (t = r(r({}, t), c));
			}
		}
		return t;
	}
	var tr = {
		"001": ["H", "h"],
		419: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AD: ["H", "hB"],
		AE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		AF: [
			"H",
			"hb",
			"hB",
			"h"
		],
		AG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AL: [
			"h",
			"H",
			"hB"
		],
		AM: ["H", "hB"],
		AO: ["H", "hB"],
		AR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AS: ["h", "H"],
		AT: ["H", "hB"],
		AU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AW: ["H", "hB"],
		AX: ["H"],
		AZ: [
			"H",
			"hB",
			"h"
		],
		BA: [
			"H",
			"hB",
			"h"
		],
		BB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BD: [
			"h",
			"hB",
			"H"
		],
		BE: ["H", "hB"],
		BF: ["H", "hB"],
		BG: [
			"H",
			"hB",
			"h"
		],
		BH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		BI: ["H", "h"],
		BJ: ["H", "hB"],
		BL: ["H", "hB"],
		BM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BN: [
			"hb",
			"hB",
			"h",
			"H"
		],
		BO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		BQ: ["H"],
		BR: ["H", "hB"],
		BS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BT: ["h", "H"],
		BW: [
			"H",
			"h",
			"hb",
			"hB"
		],
		BY: ["H", "h"],
		BZ: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CA: [
			"h",
			"hb",
			"H",
			"hB"
		],
		CC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CD: ["hB", "H"],
		CF: [
			"H",
			"h",
			"hB"
		],
		CG: ["H", "hB"],
		CH: [
			"H",
			"hB",
			"h"
		],
		CI: ["H", "hB"],
		CK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CL: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CM: [
			"H",
			"h",
			"hB"
		],
		CN: [
			"H",
			"hB",
			"hb",
			"h"
		],
		CO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CP: ["H"],
		CR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CU: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CV: ["H", "hB"],
		CW: ["H", "hB"],
		CX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CY: [
			"h",
			"H",
			"hb",
			"hB"
		],
		CZ: ["H"],
		DE: ["H", "hB"],
		DG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		DJ: ["h", "H"],
		DK: ["H"],
		DM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		DO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		DZ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		EC: [
			"h",
			"H",
			"hB",
			"hb"
		],
		EE: ["H", "hB"],
		EG: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		ER: ["h", "H"],
		ES: [
			"H",
			"hB",
			"h",
			"hb"
		],
		ET: [
			"hB",
			"hb",
			"h",
			"H"
		],
		FI: ["H"],
		FJ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		FM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FO: ["H", "h"],
		FR: ["H", "hB"],
		GA: ["H", "hB"],
		GB: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GD: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GE: [
			"H",
			"hB",
			"h"
		],
		GF: ["H", "hB"],
		GG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GH: ["h", "H"],
		GI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GL: ["H", "h"],
		GM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GN: ["H", "hB"],
		GP: ["H", "hB"],
		GQ: [
			"H",
			"hB",
			"h",
			"hb"
		],
		GR: [
			"h",
			"H",
			"hb",
			"hB"
		],
		GT: [
			"h",
			"H",
			"hB",
			"hb"
		],
		GU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GW: ["H", "hB"],
		GY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		HK: [
			"h",
			"hB",
			"hb",
			"H"
		],
		HN: [
			"h",
			"H",
			"hB",
			"hb"
		],
		HR: ["H", "hB"],
		HU: ["H", "h"],
		IC: [
			"H",
			"h",
			"hB",
			"hb"
		],
		ID: ["H"],
		IE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IL: ["H", "hB"],
		IM: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IN: ["h", "H"],
		IO: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IQ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		IR: ["hB", "H"],
		IS: ["H"],
		IT: ["H", "hB"],
		JE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		JM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		JO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		JP: [
			"H",
			"K",
			"h"
		],
		KE: [
			"hB",
			"hb",
			"H",
			"h"
		],
		KG: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KH: [
			"hB",
			"h",
			"H",
			"hb"
		],
		KI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KM: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KN: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KP: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KW: [
			"h",
			"hB",
			"hb",
			"H"
		],
		KY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KZ: ["H", "hB"],
		LA: [
			"H",
			"hb",
			"hB",
			"h"
		],
		LB: [
			"h",
			"hB",
			"hb",
			"H"
		],
		LC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LI: [
			"H",
			"hB",
			"h"
		],
		LK: [
			"H",
			"h",
			"hB",
			"hb"
		],
		LR: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LS: ["h", "H"],
		LT: [
			"H",
			"h",
			"hb",
			"hB"
		],
		LU: [
			"H",
			"h",
			"hB"
		],
		LV: [
			"H",
			"hB",
			"hb",
			"h"
		],
		LY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		MC: ["H", "hB"],
		MD: ["H", "hB"],
		ME: [
			"H",
			"hB",
			"h"
		],
		MF: ["H", "hB"],
		MG: ["H", "h"],
		MH: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ML: ["H"],
		MM: [
			"hB",
			"hb",
			"H",
			"h"
		],
		MN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MP: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MQ: ["H", "hB"],
		MR: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MS: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MT: ["H", "h"],
		MU: ["H", "h"],
		MV: ["H", "h"],
		MW: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MX: [
			"h",
			"H",
			"hB",
			"hb"
		],
		MY: [
			"hb",
			"hB",
			"h",
			"H"
		],
		MZ: ["H", "hB"],
		NA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NC: ["H", "hB"],
		NE: ["H"],
		NF: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NI: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NL: ["H", "hB"],
		NO: ["H", "h"],
		NP: [
			"H",
			"h",
			"hB"
		],
		NR: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NU: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		OM: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PF: [
			"H",
			"h",
			"hB"
		],
		PG: ["h", "H"],
		PH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PK: [
			"h",
			"hB",
			"H"
		],
		PL: ["H", "h"],
		PM: ["H", "hB"],
		PN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		PR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PS: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PT: ["H", "hB"],
		PW: ["h", "H"],
		PY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		QA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		RE: ["H", "hB"],
		RO: ["H", "hB"],
		RS: [
			"H",
			"hB",
			"h"
		],
		RU: ["H"],
		RW: ["H", "h"],
		SA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SC: [
			"H",
			"h",
			"hB"
		],
		SD: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SE: ["H"],
		SG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SH: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SI: ["H", "hB"],
		SJ: ["H"],
		SK: ["H"],
		SL: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SM: [
			"H",
			"h",
			"hB"
		],
		SN: [
			"H",
			"h",
			"hB"
		],
		SO: ["h", "H"],
		SR: ["H", "hB"],
		SS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ST: ["H", "hB"],
		SV: [
			"h",
			"H",
			"hB",
			"hb"
		],
		SX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		TC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TD: [
			"h",
			"H",
			"hB"
		],
		TF: [
			"H",
			"h",
			"hB"
		],
		TG: ["H", "hB"],
		TH: ["H", "h"],
		TJ: ["H", "h"],
		TL: [
			"H",
			"hB",
			"hb",
			"h"
		],
		TM: ["H", "h"],
		TN: [
			"h",
			"hB",
			"hb",
			"H"
		],
		TO: ["h", "H"],
		TR: ["H", "hB"],
		TT: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TW: [
			"hB",
			"hb",
			"h",
			"H"
		],
		TZ: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UA: [
			"H",
			"hB",
			"h"
		],
		UG: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		US: [
			"h",
			"hb",
			"H",
			"hB"
		],
		UY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		UZ: [
			"H",
			"hB",
			"h"
		],
		VA: [
			"H",
			"h",
			"hB"
		],
		VC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		VG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VN: ["H", "h"],
		VU: ["h", "H"],
		WF: ["H", "hB"],
		WS: ["h", "H"],
		XK: [
			"H",
			"hB",
			"h"
		],
		YE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		YT: ["H", "hB"],
		ZA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ZM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ZW: ["H", "h"],
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
	function nr(e) {
		var t = e.hourCycle;
		if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
			case "h24": return "k";
			case "h23": return "H";
			case "h12": return "h";
			case "h11": return "K";
			default: throw Error("Invalid hourCycle");
		}
		var n, r = e.language;
		return r !== "root" && (n = e.maximize().region), (tr[n || ""] || tr[r || ""] || tr[`${r}-001`] || tr["001"])[0];
	}
	var rr = RegExp(`^${Vn.source}*`), ir = RegExp(`${Vn.source}*\$`);
	function $(e, t) {
		return {
			start: e,
			end: t
		};
	}
	var ar = !!String.prototype.startsWith && "_a".startsWith("a", 1), or = !!String.fromCodePoint, sr = !!Object.fromEntries, cr = !!String.prototype.codePointAt, lr = !!String.prototype.trimStart, ur = !!String.prototype.trimEnd, dr = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
		return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
	}, fr = !0;
	try {
		fr = br("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
	} catch {
		fr = !1;
	}
	var pr, mr = ar ? function(e, t, n) {
		return e.startsWith(t, n);
	} : function(e, t, n) {
		return e.slice(n, n + t.length) === t;
	}, hr = or ? String.fromCodePoint : function() {
		for (var e = [...arguments], t, n = "", r = e.length, i = 0; r > i;) {
			if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
			n += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320);
		}
		return n;
	}, gr = sr ? Object.fromEntries : function(e) {
		for (var t = {}, n = 0, r = e; n < r.length; n++) {
			var i = r[n], a = i[0];
			t[a] = i[1];
		}
		return t;
	}, _r = cr ? function(e, t) {
		return e.codePointAt(t);
	} : function(e, t) {
		var n = e.length;
		if (!(t < 0 || t >= n)) {
			var r, i = e.charCodeAt(t);
			return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536;
		}
	}, vr = lr ? function(e) {
		return e.trimStart();
	} : function(e) {
		return e.replace(rr, "");
	}, yr = ur ? function(e) {
		return e.trimEnd();
	} : function(e) {
		return e.replace(ir, "");
	};
	function br(e, t) {
		return new RegExp(e, t);
	}
	if (fr) {
		var xr = br("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
		pr = function(e, t) {
			return xr.lastIndex = t, xr.exec(e)[1] ?? "";
		};
	} else pr = function(e, t) {
		for (var n = [];;) {
			var r = _r(e, t);
			if (r === void 0 || Er(r) || Dr(r)) break;
			n.push(r), t += r >= 65536 ? 2 : 1;
		}
		return hr.apply(void 0, n);
	};
	var Sr, Cr = function() {
		function e(e, t) {
			t === void 0 && (t = {}), this.message = e, this.position = {
				offset: 0,
				line: 1,
				column: 1
			}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
		}
		return e.prototype.parse = function() {
			if (this.offset() !== 0) throw Error("parser can only be used once");
			return this.parseMessage(0, "", !1);
		}, e.prototype.parseMessage = function(e, t, n) {
			for (var r = []; !this.isEOF();) {
				var i = this.char();
				if (i === 123) {
					if ((a = this.parseArgument(e, n)).err) return a;
					r.push(a.val);
				} else {
					if (i === 125 && e > 0) break;
					if (i !== 35 || t !== "plural" && t !== "selectordinal") {
						if (i === 60 && !this.ignoreTag && this.peek() === 47) {
							if (n) break;
							return this.error(Q.UNMATCHED_CLOSING_TAG, $(this.clonePosition(), this.clonePosition()));
						}
						if (i === 60 && !this.ignoreTag && wr(this.peek() || 0)) {
							if ((a = this.parseTag(e, t)).err) return a;
							r.push(a.val);
						} else {
							var a;
							if ((a = this.parseLiteral(e, t)).err) return a;
							r.push(a.val);
						}
					} else {
						var o = this.clonePosition();
						this.bump(), r.push({
							type: wn.pound,
							location: $(o, this.clonePosition())
						});
					}
				}
			}
			return {
				val: r,
				err: null
			};
		}, e.prototype.parseTag = function(e, t) {
			var n = this.clonePosition();
			this.bump();
			var r = this.parseTagName();
			if (this.bumpSpace(), this.bumpIf("/>")) return {
				val: {
					type: wn.literal,
					value: `<${r}/>`,
					location: $(n, this.clonePosition())
				},
				err: null
			};
			if (this.bumpIf(">")) {
				var i = this.parseMessage(e + 1, t, !0);
				if (i.err) return i;
				var a = i.val, o = this.clonePosition();
				if (this.bumpIf("</")) {
					if (this.isEOF() || !wr(this.char())) return this.error(Q.INVALID_TAG, $(o, this.clonePosition()));
					var s = this.clonePosition();
					return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
						val: {
							type: wn.tag,
							value: r,
							children: a,
							location: $(n, this.clonePosition())
						},
						err: null
					} : this.error(Q.INVALID_TAG, $(o, this.clonePosition()))) : this.error(Q.UNMATCHED_CLOSING_TAG, $(s, this.clonePosition()));
				}
				return this.error(Q.UNCLOSED_TAG, $(n, this.clonePosition()));
			}
			return this.error(Q.INVALID_TAG, $(n, this.clonePosition()));
		}, e.prototype.parseTagName = function() {
			var e = this.offset();
			for (this.bump(); !this.isEOF() && Tr(this.char());) this.bump();
			return this.message.slice(e, this.offset());
		}, e.prototype.parseLiteral = function(e, t) {
			for (var n = this.clonePosition(), r = "";;) {
				var i = this.tryParseQuote(t);
				if (i) r += i;
				else {
					var a = this.tryParseUnquoted(e, t);
					if (a) r += a;
					else {
						var o = this.tryParseLeftAngleBracket();
						if (!o) break;
						r += o;
					}
				}
			}
			var s = $(n, this.clonePosition());
			return {
				val: {
					type: wn.literal,
					value: r,
					location: s
				},
				err: null
			};
		}, e.prototype.tryParseLeftAngleBracket = function() {
			return this.isEOF() || this.char() !== 60 || !this.ignoreTag && (wr(e = this.peek() || 0) || e === 47) ? null : (this.bump(), "<");
			var e;
		}, e.prototype.tryParseQuote = function(e) {
			if (this.isEOF() || this.char() !== 39) return null;
			switch (this.peek()) {
				case 39: return this.bump(), this.bump(), "'";
				case 123:
				case 60:
				case 62:
				case 125: break;
				case 35:
					if (e === "plural" || e === "selectordinal") break;
					return null;
				default: return null;
			}
			this.bump();
			var t = [this.char()];
			for (this.bump(); !this.isEOF();) {
				var n = this.char();
				if (n === 39) {
					if (this.peek() !== 39) {
						this.bump();
						break;
					}
					t.push(39), this.bump();
				} else t.push(n);
				this.bump();
			}
			return hr.apply(void 0, t);
		}, e.prototype.tryParseUnquoted = function(e, t) {
			if (this.isEOF()) return null;
			var n = this.char();
			return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), hr(n));
		}, e.prototype.parseArgument = function(e, t) {
			var n = this.clonePosition();
			if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE, $(n, this.clonePosition()));
			if (this.char() === 125) return this.bump(), this.error(Q.EMPTY_ARGUMENT, $(n, this.clonePosition()));
			var r = this.parseIdentifierIfPossible().value;
			if (!r) return this.error(Q.MALFORMED_ARGUMENT, $(n, this.clonePosition()));
			if (this.bumpSpace(), this.isEOF()) return this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE, $(n, this.clonePosition()));
			switch (this.char()) {
				case 125: return this.bump(), {
					val: {
						type: wn.argument,
						value: r,
						location: $(n, this.clonePosition())
					},
					err: null
				};
				case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE, $(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
				default: return this.error(Q.MALFORMED_ARGUMENT, $(n, this.clonePosition()));
			}
		}, e.prototype.parseIdentifierIfPossible = function() {
			var e = this.clonePosition(), t = this.offset(), n = pr(this.message, t), r = t + n.length;
			return this.bumpTo(r), {
				value: n,
				location: $(e, this.clonePosition())
			};
		}, e.prototype.parseArgumentOptions = function(e, t, n, i) {
			var a = this.clonePosition(), o = this.parseIdentifierIfPossible().value, s = this.clonePosition();
			switch (o) {
				case "": return this.error(Q.EXPECT_ARGUMENT_TYPE, $(a, s));
				case "number":
				case "date":
				case "time":
					this.bumpSpace();
					var c = null;
					if (this.bumpIf(",")) {
						this.bumpSpace();
						var l = this.clonePosition();
						if ((_ = this.parseSimpleArgStyleIfPossible()).err) return _;
						if ((p = yr(_.val)).length === 0) return this.error(Q.EXPECT_ARGUMENT_STYLE, $(this.clonePosition(), this.clonePosition()));
						c = {
							style: p,
							styleLocation: $(l, this.clonePosition())
						};
					}
					if ((v = this.tryParseArgumentClose(i)).err) return v;
					var u = $(i, this.clonePosition());
					if (c && mr(c?.style, "::", 0)) {
						var d = vr(c.style.slice(2));
						if (o === "number") return (_ = this.parseNumberSkeletonFromString(d, c.styleLocation)).err ? _ : {
							val: {
								type: wn.number,
								value: n,
								location: u,
								style: _.val
							},
							err: null
						};
						if (d.length === 0) return this.error(Q.EXPECT_DATE_TIME_SKELETON, u);
						var f = d;
						this.locale && (f = function(e, t) {
							for (var n = "", r = 0; r < e.length; r++) {
								var i = e.charAt(r);
								if (i === "j") {
									for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
									var o = 1 + (1 & a), s = a < 2 ? 1 : 3 + (a >> 1), c = nr(t);
									for (c != "H" && c != "k" || (s = 0); s-- > 0;) n += "a";
									for (; o-- > 0;) n = c + n;
								} else n += i === "J" ? "H" : i;
							}
							return n;
						}(d, this.locale));
						var p = {
							type: Tn.dateTime,
							pattern: f,
							location: c.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? Un(f) : {}
						};
						return {
							val: {
								type: o === "date" ? wn.date : wn.time,
								value: n,
								location: u,
								style: p
							},
							err: null
						};
					}
					return {
						val: {
							type: o === "number" ? wn.number : o === "date" ? wn.date : wn.time,
							value: n,
							location: u,
							style: c?.style ?? null
						},
						err: null
					};
				case "plural":
				case "selectordinal":
				case "select":
					var m = this.clonePosition();
					if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Q.EXPECT_SELECT_ARGUMENT_OPTIONS, $(m, r({}, m)));
					this.bumpSpace();
					var h = this.parseIdentifierIfPossible(), g = 0;
					if (o !== "select" && h.value === "offset") {
						if (!this.bumpIf(":")) return this.error(Q.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, $(this.clonePosition(), this.clonePosition()));
						var _;
						if (this.bumpSpace(), (_ = this.tryParseDecimalInteger(Q.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Q.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return _;
						this.bumpSpace(), h = this.parseIdentifierIfPossible(), g = _.val;
					}
					var v, y = this.tryParsePluralOrSelectOptions(e, o, t, h);
					if (y.err) return y;
					if ((v = this.tryParseArgumentClose(i)).err) return v;
					var b = $(i, this.clonePosition());
					return o === "select" ? {
						val: {
							type: wn.select,
							value: n,
							options: gr(y.val),
							location: b
						},
						err: null
					} : {
						val: {
							type: wn.plural,
							value: n,
							options: gr(y.val),
							offset: g,
							pluralType: o === "plural" ? "cardinal" : "ordinal",
							location: b
						},
						err: null
					};
				default: return this.error(Q.INVALID_ARGUMENT_TYPE, $(a, s));
			}
		}, e.prototype.tryParseArgumentClose = function(e) {
			return this.isEOF() || this.char() !== 125 ? this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE, $(e, this.clonePosition())) : (this.bump(), {
				val: !0,
				err: null
			});
		}, e.prototype.parseSimpleArgStyleIfPossible = function() {
			for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
				case 39:
					this.bump();
					var n = this.clonePosition();
					if (!this.bumpUntil("'")) return this.error(Q.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, $(n, this.clonePosition()));
					this.bump();
					break;
				case 123:
					e += 1, this.bump();
					break;
				case 125:
					if (!(e > 0)) return {
						val: this.message.slice(t.offset, this.offset()),
						err: null
					};
					--e;
					break;
				default: this.bump();
			}
			return {
				val: this.message.slice(t.offset, this.offset()),
				err: null
			};
		}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
			var n = [];
			try {
				n = function(e) {
					if (e.length === 0) throw Error("Number skeleton cannot be empty");
					for (var t = [], n = 0, r = e.split(Wn).filter(function(e) {
						return e.length > 0;
					}); n < r.length; n++) {
						var i = r[n].split("/");
						if (i.length === 0) throw Error("Invalid number skeleton");
						for (var a = i[0], o = i.slice(1), s = 0, c = o; s < c.length; s++) if (c[s].length === 0) throw Error("Invalid number skeleton");
						t.push({
							stem: a,
							options: o
						});
					}
					return t;
				}(e);
			} catch {
				return this.error(Q.INVALID_NUMBER_SKELETON, t);
			}
			return {
				val: {
					type: Tn.number,
					tokens: n,
					location: t,
					parsedOptions: this.shouldParseSkeletons ? er(n) : {}
				},
				err: null
			};
		}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
			for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
				if (c.length === 0) {
					var u = this.clonePosition();
					if (t === "select" || !this.bumpIf("=")) break;
					var d = this.tryParseDecimalInteger(Q.EXPECT_PLURAL_ARGUMENT_SELECTOR, Q.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = $(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				}
				if (s.has(c)) return this.error(t === "select" ? Q.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Q.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
				c === "other" && (a = !0), this.bumpSpace();
				var f = this.clonePosition();
				if (!this.bumpIf("{")) return this.error(t === "select" ? Q.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Q.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, $(this.clonePosition(), this.clonePosition()));
				var p = this.parseMessage(e + 1, t, n);
				if (p.err) return p;
				var m = this.tryParseArgumentClose(f);
				if (m.err) return m;
				o.push([c, {
					value: p.val,
					location: $(f, this.clonePosition())
				}]), s.add(c), this.bumpSpace(), c = (i = this.parseIdentifierIfPossible()).value, l = i.location;
			}
			return o.length === 0 ? this.error(t === "select" ? Q.EXPECT_SELECT_ARGUMENT_SELECTOR : Q.EXPECT_PLURAL_ARGUMENT_SELECTOR, $(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(Q.MISSING_OTHER_CLAUSE, $(this.clonePosition(), this.clonePosition())) : {
				val: o,
				err: null
			};
		}, e.prototype.tryParseDecimalInteger = function(e, t) {
			var n = 1, r = this.clonePosition();
			this.bumpIf("+") || this.bumpIf("-") && (n = -1);
			for (var i = !1, a = 0; !this.isEOF();) {
				var o = this.char();
				if (!(o >= 48 && o <= 57)) break;
				i = !0, a = 10 * a + (o - 48), this.bump();
			}
			var s = $(r, this.clonePosition());
			return i ? dr(a *= n) ? {
				val: a,
				err: null
			} : this.error(t, s) : this.error(e, s);
		}, e.prototype.offset = function() {
			return this.position.offset;
		}, e.prototype.isEOF = function() {
			return this.offset() === this.message.length;
		}, e.prototype.clonePosition = function() {
			return {
				offset: this.position.offset,
				line: this.position.line,
				column: this.position.column
			};
		}, e.prototype.char = function() {
			var e = this.position.offset;
			if (e >= this.message.length) throw Error("out of bound");
			var t = _r(this.message, e);
			if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
			return t;
		}, e.prototype.error = function(e, t) {
			return {
				val: null,
				err: {
					kind: e,
					message: this.message,
					location: t
				}
			};
		}, e.prototype.bump = function() {
			if (!this.isEOF()) {
				var e = this.char();
				e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
			}
		}, e.prototype.bumpIf = function(e) {
			if (mr(this.message, e, this.offset())) {
				for (var t = 0; t < e.length; t++) this.bump();
				return !0;
			}
			return !1;
		}, e.prototype.bumpUntil = function(e) {
			var t = this.offset(), n = this.message.indexOf(e, t);
			return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
		}, e.prototype.bumpTo = function(e) {
			if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
			for (e = Math.min(e, this.message.length);;) {
				var t = this.offset();
				if (t === e) break;
				if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
				if (this.bump(), this.isEOF()) break;
			}
		}, e.prototype.bumpSpace = function() {
			for (; !this.isEOF() && Er(this.char());) this.bump();
		}, e.prototype.peek = function() {
			if (this.isEOF()) return null;
			var e = this.char(), t = this.offset();
			return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
		}, e;
	}();
	function wr(e) {
		return e >= 97 && e <= 122 || e >= 65 && e <= 90;
	}
	function Tr(e) {
		return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
	}
	function Er(e) {
		return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
	}
	function Dr(e) {
		return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
	}
	function Or(e) {
		e.forEach(function(e) {
			if (delete e.location, Fn(e) || In(e)) for (var t in e.options) delete e.options[t].location, Or(e.options[t].value);
			else Mn(e) && zn(e.style) || (Nn(e) || Pn(e)) && Bn(e.style) ? delete e.style.location : Rn(e) && Or(e.children);
		});
	}
	function kr(e, t) {
		t === void 0 && (t = {}), t = r({
			shouldParseSkeletons: !0,
			requiresOtherClause: !0
		}, t);
		var n = new Cr(e, t).parse();
		if (n.err) {
			var i = SyntaxError(Q[n.err.kind]);
			throw i.location = n.err.location, i.originalMessage = n.err.message, i;
		}
		return t != null && t.captureLocation || Or(n.val), n.val;
	}
	(function(e) {
		e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
	})(Sr ||= {});
	var Ar, jr = function(e) {
		function t(t, n, r) {
			var i = e.call(this, t) || this;
			return i.code = n, i.originalMessage = r, i;
		}
		return n(t, e), t.prototype.toString = function() {
			return `[formatjs Error: ${this.code}] ${this.message}`;
		}, t;
	}(Error), Mr = function(e) {
		function t(t, n, r, i) {
			return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, Sr.INVALID_VALUE, i) || this;
		}
		return n(t, e), t;
	}(jr), Nr = function(e) {
		function t(t, n, r) {
			return e.call(this, `Value for "${t}" must be of type ${n}`, Sr.INVALID_VALUE, r) || this;
		}
		return n(t, e), t;
	}(jr), Pr = function(e) {
		function t(t, n) {
			return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, Sr.MISSING_VALUE, n) || this;
		}
		return n(t, e), t;
	}(jr);
	function Fr(e) {
		return typeof e == "function";
	}
	function Ir(e, t, n, r, i, a, o) {
		if (e.length === 1 && An(e[0])) return [{
			type: Ar.literal,
			value: e[0].value
		}];
		for (var s = [], c = 0, l = e; c < l.length; c++) {
			var u = l[c];
			if (An(u)) s.push({
				type: Ar.literal,
				value: u.value
			});
			else if (Ln(u)) typeof a == "number" && s.push({
				type: Ar.literal,
				value: n.getNumberFormat(t).format(a)
			});
			else {
				var d = u.value;
				if (!i || !(d in i)) throw new Pr(d, o);
				var f = i[d];
				if (jn(u)) f && typeof f != "string" && typeof f != "number" || (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
					type: typeof f == "string" ? Ar.literal : Ar.object,
					value: f
				});
				else if (Nn(u)) {
					var p = typeof u.style == "string" ? r.date[u.style] : Bn(u.style) ? u.style.parsedOptions : void 0;
					s.push({
						type: Ar.literal,
						value: n.getDateTimeFormat(t, p).format(f)
					});
				} else if (Pn(u)) p = typeof u.style == "string" ? r.time[u.style] : Bn(u.style) ? u.style.parsedOptions : r.time.medium, s.push({
					type: Ar.literal,
					value: n.getDateTimeFormat(t, p).format(f)
				});
				else if (Mn(u)) (p = typeof u.style == "string" ? r.number[u.style] : zn(u.style) ? u.style.parsedOptions : void 0) && p.scale && (f *= p.scale || 1), s.push({
					type: Ar.literal,
					value: n.getNumberFormat(t, p).format(f)
				});
				else {
					if (Rn(u)) {
						var m = u.children, h = u.value, g = i[h];
						if (!Fr(g)) throw new Nr(h, "function", o);
						var _ = g(Ir(m, t, n, r, i, a).map(function(e) {
							return e.value;
						}));
						Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
							return {
								type: typeof e == "string" ? Ar.literal : Ar.object,
								value: e
							};
						}));
					}
					if (Fn(u)) {
						if (!(v = u.options[f] || u.options.other)) throw new Mr(u.value, f, Object.keys(u.options), o);
						s.push.apply(s, Ir(v.value, t, n, r, i));
					} else if (In(u)) {
						var v;
						if (!(v = u.options[`=${f}`])) {
							if (!Intl.PluralRules) throw new jr("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", Sr.MISSING_INTL_API, o);
							var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
							v = u.options[y] || u.options.other;
						}
						if (!v) throw new Mr(u.value, f, Object.keys(u.options), o);
						s.push.apply(s, Ir(v.value, t, n, r, i, f - (u.offset || 0)));
					}
				}
			}
		}
		return function(e) {
			return e.length < 2 ? e : e.reduce(function(e, t) {
				var n = e[e.length - 1];
				return n && n.type === Ar.literal && t.type === Ar.literal ? n.value += t.value : e.push(t), e;
			}, []);
		}(s);
	}
	function Lr(e, t) {
		return t ? Object.keys(e).reduce(function(n, i) {
			var a, o;
			return n[i] = (a = e[i], (o = t[i]) ? r(r(r({}, a || {}), o || {}), Object.keys(a).reduce(function(e, t) {
				return e[t] = r(r({}, a[t]), o[t] || {}), e;
			}, {})) : a), n;
		}, r({}, e)) : e;
	}
	function Rr(e) {
		return { create: function() {
			return {
				get: function(t) {
					return e[t];
				},
				set: function(t, n) {
					e[t] = n;
				}
			};
		} };
	}
	(function(e) {
		e[e.literal = 0] = "literal", e[e.object = 1] = "object";
	})(Ar ||= {});
	var zr = function() {
		function e(t, n, a, o) {
			n === void 0 && (n = e.defaultLocale);
			var s, c = this;
			if (this.formatterCache = {
				number: {},
				dateTime: {},
				pluralRules: {}
			}, this.format = function(e) {
				var t = c.formatToParts(e);
				if (t.length === 1) return t[0].value;
				var n = t.reduce(function(e, t) {
					return e.length && t.type === Ar.literal && typeof e[e.length - 1] == "string" ? e[e.length - 1] += t.value : e.push(t.value), e;
				}, []);
				return n.length <= 1 ? n[0] || "" : n;
			}, this.formatToParts = function(e) {
				return Ir(c.ast, c.locales, c.formatters, c.formats, e, void 0, c.message);
			}, this.resolvedOptions = function() {
				return { locale: c.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(c.locales)[0] };
			}, this.getAst = function() {
				return c.ast;
			}, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
				if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
				var l = o || {};
				l.formatters;
				var u = i(l, ["formatters"]);
				this.ast = e.__parse(t, r(r({}, u), { locale: this.resolvedLocale }));
			} else this.ast = t;
			if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
			this.formats = Lr(e.formats, a), this.formatters = o && o.formatters || ((s = this.formatterCache) === void 0 && (s = {
				number: {},
				dateTime: {},
				pluralRules: {}
			}), {
				getNumberFormat: yn(function() {
					for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return new ((e = Intl.NumberFormat).bind.apply(e, x([void 0], t, !1)))();
				}, {
					cache: Rr(s.number),
					strategy: kn.variadic
				}),
				getDateTimeFormat: yn(function() {
					for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return new ((e = Intl.DateTimeFormat).bind.apply(e, x([void 0], t, !1)))();
				}, {
					cache: Rr(s.dateTime),
					strategy: kn.variadic
				}),
				getPluralRules: yn(function() {
					for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return new ((e = Intl.PluralRules).bind.apply(e, x([void 0], t, !1)))();
				}, {
					cache: Rr(s.pluralRules),
					strategy: kn.variadic
				})
			});
		}
		return Object.defineProperty(e, "defaultLocale", {
			get: function() {
				return e.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale, e.memoizedDefaultLocale;
			},
			enumerable: !1,
			configurable: !0
		}), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
			if (Intl.Locale !== void 0) {
				var t = Intl.NumberFormat.supportedLocalesOf(e);
				return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
			}
		}, e.__parse = kr, e.formats = {
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
		}, e;
	}(), Br = {
		debug: 0,
		info: 1,
		warn: 2,
		error: 3,
		off: 4
	}, Vr = {
		debug: "\x1B[36m",
		info: "\x1B[32m",
		warn: "\x1B[33m",
		error: "\x1B[31m",
		off: ""
	};
	function Hr() {
		if (typeof process < "u" && process.env?._GT_LOG_LEVEL) {
			var e = process.env._GT_LOG_LEVEL.toLowerCase();
			if (e in Br) return e;
		}
		return "warn";
	}
	var Ur = function() {
		function e(e) {
			this.config = e;
		}
		return e.prototype.handle = function(e) {
			var t = [];
			this.config.includeTimestamp && t.push(`[${e.timestamp.toISOString()}]`);
			var n = Vr[e.level], r = `[${e.level.toUpperCase()}]`;
			t.push(`${n}${r}[0m`), this.config.prefix && t.push(`[${this.config.prefix}]`), this.config.includeContext && e.context && t.push(`[${e.context}]`), t.push(e.message), e.metadata && Object.keys(e.metadata).length > 0 && t.push(`
  Metadata: ${JSON.stringify(e.metadata, null, 2)}`);
			var i = t.join(" ");
			switch (e.level) {
				case "debug":
					console.debug(i);
					break;
				case "info":
					console.info(i);
					break;
				case "warn":
					console.warn(i);
					break;
				case "error": console.error(i);
			}
		}, e;
	}(), Wr = function() {
		function e(e) {
			e === void 0 && (e = {}), this.config = r({
				level: Hr(),
				includeTimestamp: !0,
				includeContext: !0,
				enableConsole: !0,
				handlers: []
			}, e), this.handlers = x([], this.config.handlers || [], !0), this.config.enableConsole && this.handlers.push(new Ur(this.config));
		}
		return e.prototype.addHandler = function(e) {
			this.handlers.push(e);
		}, e.prototype.removeHandler = function(e) {
			var t = this.handlers.indexOf(e);
			t > -1 && this.handlers.splice(t, 1);
		}, e.prototype.configure = function(e) {
			this.config = r(r({}, this.config), e);
		}, e.prototype.shouldLog = function(e) {
			return Br[e] >= Br[this.config.level];
		}, e.prototype.log = function(e, t, n, r) {
			if (this.shouldLog(e)) {
				var i = {
					level: e,
					message: t,
					timestamp: /* @__PURE__ */ new Date(),
					context: n,
					metadata: r
				};
				this.handlers.forEach(function(e) {
					try {
						e.handle(i);
					} catch (e) {
						console.error("Error in log handler:", e);
					}
				});
			}
		}, e.prototype.debug = function(e, t, n) {
			this.log("debug", e, t, n);
		}, e.prototype.info = function(e, t, n) {
			this.log("info", e, t, n);
		}, e.prototype.warn = function(e, t, n) {
			this.log("warn", e, t, n);
		}, e.prototype.error = function(e, t, n) {
			this.log("error", e, t, n);
		}, e.prototype.child = function(e) {
			return new Gr(this, e);
		}, e.prototype.getConfig = function() {
			return r({}, this.config);
		}, e;
	}(), Gr = function() {
		function e(e, t) {
			this.logger = e, this.context = t;
		}
		return e.prototype.debug = function(e, t) {
			this.logger.debug(e, this.context, t);
		}, e.prototype.info = function(e, t) {
			this.logger.info(e, this.context, t);
		}, e.prototype.warn = function(e, t) {
			this.logger.warn(e, this.context, t);
		}, e.prototype.error = function(e, t) {
			this.logger.error(e, this.context, t);
		}, e.prototype.child = function(t) {
			return new e(this.logger, `${this.context}:${t}`);
		}, e;
	}(), Kr = new Wr({
		level: Hr(),
		includeTimestamp: !0,
		includeContext: !0,
		prefix: "GT"
	}), qr = Kr.child("fetch");
	Kr.child("validation"), Kr.child("formatting"), Kr.child("locale");
	var Jr = Kr.child("GT instance");
	function Yr(e) {
		var t = e.value, n = e.locales, i = n === void 0 ? [z] : n, a = e.options, o = a === void 0 ? {} : a;
		return G.get("ListFormat", i, r({
			type: "conjunction",
			style: "long"
		}, o)).format(t);
	}
	function Xr(e) {
		var t = e.value, n = e.locales, i = n === void 0 ? [z] : n, a = e.options, o = a === void 0 ? {} : a, s = G.get("ListFormat", i, r({
			type: "conjunction",
			style: "long"
		}, o)).formatToParts(t.map(function() {
			return "1";
		})), c = 0;
		return s.map(function(e) {
			return e.type === "element" ? t[c++] : e.value;
		});
	}
	function Zr(e) {
		var t = e.date, n = e.baseDate, r = e.locales, i = r === void 0 ? [z] : r, a = e.options, o = a === void 0 ? {} : a, s = function(e, t) {
			var n = t.getTime(), r = e.getTime() - n, i = Math.abs(r), a = r < 0 ? -1 : 1, o = Math.floor(i / 1e3), s = Math.floor(i / 6e4), c = Math.floor(i / 36e5), l = Math.floor(i / 864e5), u = Math.floor(i / 6048e5), d = Math.floor(i / 2592e6), f = Math.floor(i / 31536e6);
			return o < 60 ? {
				value: a * o,
				unit: "second"
			} : s < 60 ? {
				value: a * s,
				unit: "minute"
			} : c < 24 ? {
				value: a * c,
				unit: "hour"
			} : l < 7 ? {
				value: a * l,
				unit: "day"
			} : l < 28 || d < 1 ? {
				value: a * u,
				unit: "week"
			} : d < 12 || f < 1 ? {
				value: a * d,
				unit: "month"
			} : {
				value: a * f,
				unit: "year"
			};
		}(t, n);
		return Qr({
			value: s.value,
			unit: s.unit,
			locales: i,
			options: o
		});
	}
	function Qr(e) {
		var t = e.value, n = e.unit, i = e.locales, a = i === void 0 ? [z] : i, o = e.options, s = o === void 0 ? {} : o;
		return G.get("RelativeTimeFormat", a, r({
			style: "long",
			numeric: "auto"
		}, s)).format(t, n);
	}
	function $r(e, t, n) {
		t === void 0 && (t = z);
		var r = e;
		n && un(e, n) && (e = n[e].code), t ||= z;
		try {
			var i = rn(e);
			if (n) for (var a = 0, o = [
				r,
				e,
				i,
				G.get("Locale", i).language
			]; a < o.length; a++) {
				var s = ln(n, o[a], "name");
				if (s) return s;
			}
			return G.get("DisplayNames", [
				t,
				i,
				z
			], { type: "language" }).of(i) || "";
		} catch {
			return "";
		}
	}
	function ei(e) {
		try {
			var t = function(e) {
				if ("textInfo" in e && typeof e.textInfo == "object" && e.textInfo !== null && "direction" in e.textInfo && (e.textInfo?.direction === "rtl" || e.textInfo?.direction === "ltr")) return e.textInfo?.direction;
			}(G.get("Locale", e));
			if (t) return t;
		} catch {}
		var n, r, i = _n(e), a = i.scriptCode, o = i.languageCode;
		return a ? (n = a) && ti.has(n.toLowerCase()) ? "rtl" : "ltr" : o && (r = o) && ni.has(r.toLowerCase()) ? "rtl" : "ltr";
	}
	var ti = new Set([
		"arab",
		"adlm",
		"hebr",
		"nkoo",
		"rohg",
		"samr",
		"syrc",
		"thaa",
		"yezi"
	]), ni = new Set([
		"ar",
		"arc",
		"ckb",
		"dv",
		"fa",
		"he",
		"iw",
		"ku",
		"lrc",
		"nqo",
		"ps",
		"pnb",
		"sd",
		"syr",
		"ug",
		"ur",
		"yi"
	]), ri = "GT Error:", ii = function(e) {
		return `${ri} Translation request timed out after ${e}ms.`;
	}, ai = function(e) {
		return `${ri} Cannot call \`${e}\` without a specified locale. Either pass a locale to the \`${e}\` function or specify a targetLocale in the GT constructor.`;
	}, oi = function(e) {
		return `${ri} Cannot call \`${e}\` without a specified locale. Either pass a locale to the \`${e}\` function or specify a sourceLocale in the GT constructor.`;
	}, si = function(e) {
		return `${ri} Invalid locale: ${e}.`;
	};
	function ci(e, t, n) {
		return p(this, void 0, void 0, function() {
			var i, a, o, s;
			return m(this, function(c) {
				switch (c.label) {
					case 0: i = new AbortController(), a = i.signal, o = (n ||= B) ? setTimeout(function() {
						return i.abort();
					}, n) : null, c.label = 1;
					case 1: return c.trys.push([
						1,
						3,
						4,
						5
					]), [4, fetch(e, r(r({}, t), { signal: a }))];
					case 2: return [2, c.sent()];
					case 3: throw (s = c.sent()) instanceof Error && s.name === "AbortError" ? ii(n) : s;
					case 4: return o && clearTimeout(o), [7];
					case 5: return [2];
				}
			});
		});
	}
	var li = function(e) {
		function t(t, n, r) {
			var i = e.call(this, t) || this;
			return i.name = "ApiError", i.code = n, i.message = r, i;
		}
		return n(t, e), t.prototype.getCode = function() {
			return this.code;
		}, t.prototype.getMessage = function() {
			return this.message;
		}, t;
	}(Error);
	function ui(e) {
		return p(this, void 0, void 0, function() {
			var t, n, r, i;
			return m(this, function(a) {
				switch (a.label) {
					case 0:
						if (e.ok) return [3, 5];
						t = "Unknown error", a.label = 1;
					case 1: return a.trys.push([
						1,
						3,
						,
						4
					]), [4, e.text()];
					case 2:
						n = a.sent();
						try {
							r = JSON.parse(n), t = r.error;
						} catch {
							t = n || "Unknown error";
						}
						return [3, 4];
					case 3: return a.sent(), [3, 4];
					case 4: throw i = function(e, t, n) {
						return `${ri} API returned error status. Status: ${e}, Status Text: ${t}, Error: ${n}`;
					}(e.status, e.statusText, t), new li(i, e.status, t);
					case 5: return [2];
				}
			});
		});
	}
	function di(e, t) {
		if (e instanceof Error && e.name === "AbortError") {
			var n = ii(t);
			throw qr.error(n), Error(n);
		}
		var r = function(e) {
			return `${ri} Translation request failed. Error: ${e}`;
		}(e instanceof Error ? e.message : String(e));
		throw qr.error(r), e;
	}
	var fi = "2026-03-06.v1";
	function pi(e, t) {
		t === void 0 && (t = !1);
		var n = r(r({}, !t && { "Content-Type": "application/json" }), { "x-gt-project-id": e.projectId });
		return e.apiKey && (e.apiKey.startsWith("gtx-internal-") ? n["x-gt-internal-api-key"] = e.apiKey : n["x-gt-api-key"] = e.apiKey), n["gt-api-version"] = fi, n;
	}
	function mi(e) {
		return new Promise(function(t) {
			return setTimeout(t, e);
		});
	}
	function hi(e, t) {
		switch (e) {
			case "linear": return 500 * (t + 1);
			case "exponential": return 500 * 2 ** t;
			default: return 0;
		}
	}
	function gi(e, t, n) {
		return p(this, void 0, void 0, function() {
			var r, i, a, o, s, c, l, u, d;
			return m(this, function(f) {
				switch (f.label) {
					case 0: r = n?.timeout ?? B, i = `${e.baseUrl || se}${t}`, a = n?.method ?? "POST", o = n?.retryPolicy ?? "exponential", s = o === "none" ? 0 : 3, c = {
						method: a,
						headers: pi(e)
					}, n?.body !== void 0 && (c.body = JSON.stringify(n.body)), l = 0, f.label = 1;
					case 1:
						if (!(l <= s)) return [3, 13];
						u = void 0, f.label = 2;
					case 2: return f.trys.push([
						2,
						4,
						,
						7
					]), [4, ci(i, c, r)];
					case 3: return u = f.sent(), [3, 7];
					case 4: return d = f.sent(), l < s ? [4, mi(hi(o, l))] : [3, 6];
					case 5: return f.sent(), [3, 12];
					case 6: return di(d, r), [3, 7];
					case 7: return u.status >= 500 && l < s ? [4, mi(hi(o, l))] : [3, 9];
					case 8: return f.sent(), [3, 12];
					case 9: return [4, ui(u)];
					case 10: return f.sent(), [4, u.json()];
					case 11: return [2, f.sent()];
					case 12: return l++, [3, 1];
					case 13: throw Error("Max retries exceeded");
				}
			});
		});
	}
	function _i(e) {
		return en.SHA256(e).toString(en.enc.Hex).slice(0, 16);
	}
	function vi(e, t) {
		var n, i = e.source, a = e.context, o = e.id, s = e.maxChars, c = e.dataFormat;
		t === void 0 && (t = _i), n = c === "JSX" ? bi(i) : i;
		var l = r(r(r(r({ source: n }, o && { id: o }), a && { context: a }), s != null && { maxChars: Math.abs(s) }), c && { dataFormat: c });
		return t(be(l));
	}
	var yi = function(e) {
		if (e && typeof e == "object") {
			var t = {};
			if ("c" in e && e.c && (t.c = bi(e.c)), "d" in e) {
				var n = e?.d;
				n != null && n.b && (t.b = Object.fromEntries(Object.entries(n.b).map(function(e) {
					return [e[0], bi(e[1])];
				}))), n != null && n.t && (t.t = n.t);
			}
			return function(e) {
				var t = e;
				if (t && typeof t == "object" && typeof t.k == "string") {
					var n = Object.keys(t);
					if (n.length === 1 || n.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || n.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
				}
				return !1;
			}(e) ? r({ k: e.k }, e.v && { v: e.v }) : t;
		}
		return e;
	};
	function bi(e) {
		return Array.isArray(e) ? e.map(yi) : yi(e);
	}
	function xi(e, t, n, i) {
		return p(this, void 0, void 0, function() {
			var a, o, s, c, l, u, d, f, p, h, g, _, v, y;
			return m(this, function(m) {
				switch (m.label) {
					case 0:
						for (a = Array.isArray(e), o = a ? [] : void 0, s = {}, c = a ? e.map(function(e) {
							return [void 0, e];
						}) : Object.entries(e), l = 0, u = c; l < u.length; l++) d = u[l], f = d[0], p = d[1], g = (h = typeof p == "string" ? { source: p } : p).source, _ = h.metadata, v = f ?? _?.hash ?? vi(r({
							source: g,
							dataFormat: _?.dataFormat ?? "STRING"
						}, _ ?? {})), o?.push(v), s[v] = {
							source: g,
							metadata: _
						};
						return [4, gi(r(r({}, n), { baseUrl: n.baseUrl || "https://runtime2.gtx.dev" }), "/v2/translate", {
							body: {
								requests: s,
								targetLocale: t.targetLocale,
								sourceLocale: t.sourceLocale,
								metadata: t
							},
							timeout: i,
							retryPolicy: "none"
						})];
					case 1: return y = m.sent(), o ? [2, o.map(function(e) {
						return y[e] ?? {
							success: !1,
							error: "No translation returned",
							code: 500
						};
					})] : [2, y];
				}
			});
		});
	}
	function Si(e, t, n) {
		return p(this, void 0, void 0, function() {
			return m(this, function(r) {
				return [2, gi(t, "/v2/project/setup/generate", {
					body: {
						files: e.map(function(e) {
							return {
								branchId: e.branchId,
								fileId: e.fileId,
								versionId: e.versionId
							};
						}),
						locales: n?.locales,
						force: n?.force
					},
					timeout: n?.timeoutMs
				})];
			});
		});
	}
	function Ci(e, t) {
		for (var n = [], r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
		return n;
	}
	function wi(e, t) {
		return p(this, arguments, void 0, function(e, t, n) {
			var r, i, a, o, s, c, l, u, d, f, p, h, g;
			return n === void 0 && (n = {}), m(this, function(m) {
				switch (m.label) {
					case 0: return r = n.batchSize, i = r === void 0 ? 100 : r, a = n.parallel, o = a === void 0 || a, e.length === 0 ? [2, {
						data: [],
						count: 0,
						batchCount: 0
					}] : (s = Ci(e, i), c = [], o ? [4, Promise.all(s.map(function(e) {
						return t(e);
					}))] : [3, 2]);
					case 1:
						for (l = m.sent(), u = 0, d = l; u < d.length; u++) (g = d[u]) && c.push.apply(c, g);
						return [3, 6];
					case 2: f = 0, p = s, m.label = 3;
					case 3: return f < p.length ? (h = p[f], [4, t(h)]) : [3, 6];
					case 4: (g = m.sent()) && c.push.apply(c, g), m.label = 5;
					case 5: return f++, [3, 3];
					case 6: return [2, {
						data: c,
						count: c.length,
						batchCount: s.length
					}];
				}
			});
		});
	}
	function Ti(e, t, n) {
		return p(this, void 0, void 0, function() {
			var r, i, a = this;
			return m(this, function(o) {
				switch (o.label) {
					case 0: return [4, wi(e, function(e) {
						return p(a, void 0, void 0, function() {
							var r, i;
							return m(this, function(a) {
								switch (a.label) {
									case 0: return r = {
										files: e.map(function(e) {
											return {
												branchId: e.branchId,
												fileId: e.fileId,
												versionId: e.versionId,
												fileName: e.fileName
											};
										}),
										targetLocales: t.targetLocales,
										sourceLocale: t.sourceLocale,
										requireApproval: t.requireApproval,
										modelProvider: t.modelProvider,
										force: t.force
									}, [4, gi(n, "/v2/project/translations/enqueue", {
										body: r,
										timeout: t.timeout
									})];
									case 1: return i = a.sent(), [2, Array.from(Object.entries(i.jobData))];
								}
							});
						});
					}, { batchSize: 100 })];
					case 1: return r = o.sent(), i = Object.fromEntries(r.data.map(function(e) {
						return [e[0], e[1]];
					})), [2, {
						jobData: i,
						locales: t.targetLocales,
						message: `Successfully enqueued ${r.count} file translation jobs in ${r.batchCount} batch(es)`
					}];
				}
			});
		});
	}
	function Ei(e, t) {
		return p(this, void 0, void 0, function() {
			return m(this, function(n) {
				switch (n.label) {
					case 0: return [4, gi(t, "/v2/project/tags/create", { body: r({
						tagId: e.tagId,
						files: e.files
					}, e.message && { message: e.message }) })];
					case 1: return [2, n.sent()];
				}
			});
		});
	}
	function Di(e, t, n) {
		return p(this, void 0, void 0, function() {
			var i = this;
			return m(this, function(a) {
				return [2, wi(e, function(e) {
					return p(i, void 0, void 0, function() {
						var i;
						return m(this, function(a) {
							switch (a.label) {
								case 0: return [4, gi(n, "/v2/project/files/download", {
									body: e,
									timeout: t.timeout
								})];
								case 1: return i = a.sent(), [2, i.files.map(function(e) {
									return r(r({}, e), { data: le(e.data) });
								})];
							}
						});
					});
				}, { batchSize: 100 })];
			});
		});
	}
	function Oi(e, t) {
		return p(this, arguments, void 0, function(e, t, n) {
			var r = this;
			return n === void 0 && (n = {}), m(this, function(i) {
				switch (i.label) {
					case 0: return [4, wi(e.diffs, function(e) {
						return p(r, void 0, void 0, function() {
							return m(this, function(r) {
								switch (r.label) {
									case 0: return [4, gi(t, "/v2/project/files/diffs", {
										body: { diffs: e },
										timeout: n.timeout
									})];
									case 1: return r.sent(), [2, [{ success: !0 }]];
								}
							});
						});
					}, { batchSize: 100 })];
					case 1: return i.sent(), [2, { success: !0 }];
				}
			});
		});
	}
	function ki(e, t, n) {
		t === void 0 && (t = z), t ||= z;
		try {
			var i = G.get("DisplayNames", [t, z], { type: "region" });
			return r({
				code: e,
				name: i.of(e) || e,
				emoji: hn[e] || pn
			}, n?.[e]);
		} catch {
			return r({
				code: e,
				name: e,
				emoji: pn
			}, n?.[e]);
		}
	}
	function Ai(e, t) {
		var n;
		return t && (n = Object.fromEntries(Object.entries(t).filter(function(e) {
			var t = e[1];
			return t && typeof t == "object" && "code" in t;
		}).map(function(e) {
			var t = e[0];
			return [e[1].code, t];
		}))), n?.[e] || e;
	}
	function ji(e, t) {
		return t && un(e, t) ? t[e].code : e;
	}
	function Mi(e, t, n) {
		return p(this, void 0, void 0, function() {
			var r = this;
			return m(this, function(i) {
				return [2, wi(e, function(e) {
					return p(r, void 0, void 0, function() {
						var r;
						return m(this, function(i) {
							switch (i.label) {
								case 0: return r = {
									data: e.map(function(e) {
										var t = e.source;
										return { source: {
											content: ce(t.content),
											fileName: t.fileName,
											fileFormat: t.fileFormat,
											locale: t.locale,
											dataFormat: t.dataFormat,
											formatMetadata: t.formatMetadata,
											fileId: t.fileId,
											versionId: t.versionId,
											branchId: t.branchId,
											incomingBranchId: t.incomingBranchId,
											checkedOutBranchId: t.checkedOutBranchId
										} };
									}),
									sourceLocale: t.sourceLocale
								}, [4, gi(n, "/v2/project/files/upload-files", {
									body: r,
									timeout: t.timeout
								})];
								case 1: return [2, i.sent().uploadedFiles || []];
							}
						});
					});
				}, { batchSize: 100 })];
			});
		});
	}
	function Ni(e, t, n) {
		return p(this, void 0, void 0, function() {
			var r = this;
			return m(this, function(i) {
				return [2, wi(e, function(e) {
					return p(r, void 0, void 0, function() {
						var r;
						return m(this, function(i) {
							switch (i.label) {
								case 0: return r = {
									data: e.map(function(e) {
										var t = e.source, n = e.translations;
										return {
											source: {
												content: ce(t.content),
												fileName: t.fileName,
												fileFormat: t.fileFormat,
												locale: t.locale,
												dataFormat: t.dataFormat,
												formatMetadata: t.formatMetadata,
												fileId: t.fileId,
												versionId: t.versionId,
												branchId: t.branchId
											},
											translations: n.map(function(e) {
												return {
													content: ce(e.content),
													fileName: e.fileName,
													fileFormat: e.fileFormat,
													locale: e.locale,
													dataFormat: e.dataFormat,
													fileId: e.fileId,
													versionId: e.versionId,
													branchId: e.branchId
												};
											})
										};
									}),
									sourceLocale: t.sourceLocale
								}, [4, gi(n, "/v2/project/files/upload-translations", {
									body: r,
									timeout: t.timeout
								})];
								case 1: return [2, i.sent().uploadedFiles || []];
							}
						});
					});
				}, { batchSize: 100 })];
			});
		});
	}
	function Pi(e, t, n) {
		return p(this, void 0, void 0, function() {
			var r, i, a, o, s;
			return m(this, function(c) {
				return r = e.branchId, i = e.versionId, a = e.fileId, o = new URLSearchParams(), r && o.set("branchId", r), i && o.set("versionId", i), s = `/v2/project/translations/files/status/${encodeURIComponent(a)}?${o.toString()}`, [2, gi(n, s, {
					method: "GET",
					timeout: t.timeout
				})];
			});
		});
	}
	function Fi(e, t, n) {
		return p(this, void 0, void 0, function() {
			var r, i, a, o;
			return m(this, function(s) {
				switch (s.label) {
					case 0: r = n.baseUrl, i = t.timeout ? t.timeout : B, a = `${r || se}/v2/project/info/${encodeURIComponent(e)}`, s.label = 1;
					case 1: return s.trys.push([
						1,
						3,
						,
						4
					]), [4, ci(a, {
						method: "GET",
						headers: pi(n)
					}, i)];
					case 2: return o = s.sent(), [3, 4];
					case 3: return di(s.sent(), i), [3, 4];
					case 4: return [4, ui(o)];
					case 5: return s.sent(), [4, o.json()];
					case 6: return [2, s.sent()];
				}
			});
		});
	}
	function Ii(e, t, n) {
		return p(this, void 0, void 0, function() {
			return m(this, function(r) {
				return [2, gi(t, "/v2/project/jobs/info", {
					body: { jobIds: e },
					timeout: n
				})];
			});
		});
	}
	function Li(e, t, n) {
		return p(this, void 0, void 0, function() {
			var i, a, o, s, c, l, u, d, f, p;
			return m(this, function(m) {
				switch (m.label) {
					case 0:
						if (i = 1e3 * (t?.pollingIntervalSeconds ?? 5), a = t?.timeoutSeconds === void 0 ? 6e5 : 1e3 * t.timeoutSeconds, (o = Object.keys(e.jobData)).length === 0) return [2, {
							complete: !0,
							jobs: []
						}];
						s = Date.now(), c = new Map(o.map(function(e) {
							return [e, {
								jobId: e,
								status: "unknown"
							}];
						})), l = new Set(o), m.label = 1;
					case 1: return l.size > 0 ? [4, Ii(Array.from(l), n)] : [3, 4];
					case 2:
						for (u = m.sent(), d = 0, f = u; d < f.length; d++) (p = f[d]).status === "completed" || p.status === "failed" || p.status === "unknown" ? (c.set(p.jobId, r({
							jobId: p.jobId,
							status: p.status
						}, p.error ? { error: p.error } : {})), l.delete(p.jobId)) : c.set(p.jobId, {
							jobId: p.jobId,
							status: p.status
						});
						return l.size === 0 || Date.now() - s >= a ? [3, 4] : [4, new Promise(function(e) {
							return setTimeout(e, i);
						})];
					case 3: return m.sent(), [3, 1];
					case 4: return [2, {
						complete: l.size === 0,
						jobs: Array.from(c.values())
					}];
				}
			});
		});
	}
	function Ri(e) {
		return p(this, arguments, void 0, function(e, t, n) {
			var r;
			return t === void 0 && (t = {}), m(this, function(i) {
				return r = {
					sourceFiles: e.sourceFiles?.map(function(e) {
						return {
							fileId: e.fileId,
							versionId: e.versionId,
							branchId: e.branchId
						};
					}),
					translatedFiles: e.translatedFiles?.map(function(e) {
						return {
							fileId: e.fileId,
							versionId: e.versionId,
							branchId: e.branchId,
							locale: e.locale
						};
					})
				}, [2, gi(n, "/v2/project/files/info", {
					body: r,
					timeout: t.timeout
				})];
			});
		});
	}
	function zi(e, t) {
		return p(this, void 0, void 0, function() {
			return m(this, function(n) {
				return [2, gi(t, "/v2/project/branches/info", { body: e })];
			});
		});
	}
	function Bi(e, t) {
		return p(this, void 0, void 0, function() {
			return m(this, function(n) {
				return [2, gi(t, "/v2/project/branches/create", { body: e })];
			});
		});
	}
	function Vi(e, t, n) {
		return p(this, void 0, void 0, function() {
			var r, i, a, o = this;
			return m(this, function(s) {
				switch (s.label) {
					case 0: return e.length === 0 ? [2, {
						results: [],
						summary: {
							total: 0,
							succeeded: 0,
							failed: 0
						}
					}] : [4, wi(e, function(e) {
						return p(o, void 0, void 0, function() {
							return m(this, function(r) {
								switch (r.label) {
									case 0: return [4, gi(n, "/v2/project/files/moves", {
										body: {
											branchId: t.branchId,
											moves: e
										},
										timeout: t.timeout
									})];
									case 1: return [2, r.sent().results];
								}
							});
						});
					}, { batchSize: 100 })];
					case 1: return r = s.sent(), i = r.data.filter(function(e) {
						return e.success;
					}).length, a = r.data.filter(function(e) {
						return !e.success;
					}).length, [2, {
						results: r.data,
						summary: {
							total: e.length,
							succeeded: i,
							failed: a
						}
					}];
				}
			});
		});
	}
	function Hi(e, t) {
		return p(this, arguments, void 0, function(e, t, n, r) {
			var i, a, o, s, c, l, u, d, f;
			return n === void 0 && (n = {}), m(this, function(p) {
				switch (p.label) {
					case 0: return i = function(t) {
						return gi(r, "/v2/project/files/orphaned", {
							body: {
								branchId: e,
								fileIds: t
							},
							timeout: n.timeout
						});
					}, t.length === 0 ? [2, i([])] : (a = Ci(t, 100), [4, Promise.all(a.map(function(e) {
						return i(e);
					}))]);
					case 1:
						if ((o = p.sent()).length === 1) return [2, o[0]];
						for (s = /* @__PURE__ */ new Map(), c = 0, l = o[0].orphanedFiles; c < l.length; c++) u = l[c], s.set(u.fileId, u);
						for (d = function(e) {
							var t = new Set(o[e].orphanedFiles.map(function(e) {
								return e.fileId;
							}));
							Array.from(s.keys()).forEach(function(e) {
								t.has(e) || s.delete(e);
							});
						}, f = 1; f < o.length; f++) d(f);
						return [2, { orphanedFiles: Array.from(s.values()) }];
				}
			});
		});
	}
	function Ui(e, t) {
		return p(this, void 0, void 0, function() {
			return m(this, function(n) {
				switch (n.label) {
					case 0: return [4, gi(t, "/v2/project/files/publish", { body: { files: e } })];
					case 1: return [2, n.sent()];
				}
			});
		});
	}
	var Wi = function() {
		function e(e) {
			e === void 0 && (e = {}), this._renderingLocales = [], typeof process < "u" && (this.apiKey ||= process.env?.GT_API_KEY, this.devApiKey ||= process.env?.GT_DEV_API_KEY, this.projectId ||= process.env?.GT_PROJECT_ID), this.setConfig(e);
		}
		return e.prototype.setConfig = function(e) {
			var t = e.apiKey, n = e.devApiKey, r = e.sourceLocale, i = e.targetLocale, a = e.locales, o = e.projectId, s = e.customMapping, c = e.baseUrl;
			if (t && (this.apiKey = t), n && (this.devApiKey = n), o && (this.projectId = o), r && (this.sourceLocale = rn(r), !nn(this.sourceLocale, s))) throw Error(si(this.sourceLocale));
			if (i && (this.targetLocale = rn(i), !nn(this.targetLocale, s))) throw Error(si(this.targetLocale));
			if (this._renderingLocales = [], this.sourceLocale && this._renderingLocales.push(this.sourceLocale), this.targetLocale && this._renderingLocales.push(this.targetLocale), this._renderingLocales.push(z), a) {
				var l = [], u = [];
				if (a.forEach(function(e) {
					var t = rn(e);
					nn(t) ? l.push(t) : u.push(e);
				}), u.length > 0) throw Error(function(e) {
					return `${ri} Invalid locales: ${e.join(", ")}.`;
				}(u));
				this.locales = l;
			}
			c && (this.baseUrl = c), s && (this.customMapping = s, this.reverseCustomMapping = Object.fromEntries(Object.entries(s).filter(function(e) {
				var t = e[1];
				return t && typeof t == "object" && "code" in t;
			}).map(function(e) {
				var t = e[0];
				return [e[1].code, t];
			})));
		}, e.prototype._getTranslationConfig = function() {
			return {
				baseUrl: this.baseUrl,
				apiKey: this.apiKey || this.devApiKey,
				projectId: this.projectId || ""
			};
		}, e.prototype._validateAuth = function(e) {
			var t = [];
			if (!this.apiKey && !this.devApiKey) {
				var n = function(e) {
					return `${ri} Cannot call \`${e}\` without a specified API key. Either pass an API key to the \`${e}\` function or specify an apiKey in the GT constructor.`;
				}(e);
				t.push(n);
			}
			if (this.projectId || (n = function(e) {
				return `${ri} Cannot call \`${e}\` without a specified project ID. Either pass a project ID to the \`${e}\` function or specify a projectId in the GT constructor.`;
			}(e), t.push(n)), t.length) throw Error(t.join("\n"));
		}, e.prototype.queryBranchData = function(e) {
			return p(this, void 0, void 0, function() {
				return m(this, function(t) {
					switch (t.label) {
						case 0: return this._validateAuth("queryBranchData"), [4, zi(e, this._getTranslationConfig())];
						case 1: return [2, t.sent()];
					}
				});
			});
		}, e.prototype.createBranch = function(e) {
			return p(this, void 0, void 0, function() {
				return m(this, function(t) {
					switch (t.label) {
						case 0: return this._validateAuth("createBranch"), [4, Bi(e, this._getTranslationConfig())];
						case 1: return [2, t.sent()];
					}
				});
			});
		}, e.prototype.processFileMoves = function(e) {
			return p(this, arguments, void 0, function(e, t) {
				return t === void 0 && (t = {}), m(this, function(n) {
					switch (n.label) {
						case 0: return this._validateAuth("processFileMoves"), [4, Vi(e, t, this._getTranslationConfig())];
						case 1: return [2, n.sent()];
					}
				});
			});
		}, e.prototype.getOrphanedFiles = function(e, t) {
			return p(this, arguments, void 0, function(e, t, n) {
				return n === void 0 && (n = {}), m(this, function(r) {
					switch (r.label) {
						case 0: return this._validateAuth("getOrphanedFiles"), [4, Hi(e, t, n, this._getTranslationConfig())];
						case 1: return [2, r.sent()];
					}
				});
			});
		}, e.prototype.setupProject = function(e, t) {
			return p(this, void 0, void 0, function() {
				var n = this;
				return m(this, function(i) {
					switch (i.label) {
						case 0: return this._validateAuth("setupProject"), t = r(r({}, t), { locales: (t?.locales)?.map(function(e) {
							return n.resolveCanonicalLocale(e);
						}) }), [4, Si(e, this._getTranslationConfig(), t)];
						case 1: return [2, i.sent()];
					}
				});
			});
		}, e.prototype.checkJobStatus = function(e, t) {
			return p(this, void 0, void 0, function() {
				return m(this, function(n) {
					switch (n.label) {
						case 0: return this._validateAuth("checkJobStatus"), [4, Ii(e, this._getTranslationConfig(), t)];
						case 1: return [2, n.sent()];
					}
				});
			});
		}, e.prototype.awaitJobs = function(e, t) {
			return p(this, void 0, void 0, function() {
				return m(this, function(n) {
					switch (n.label) {
						case 0: return this._validateAuth("awaitJobs"), [4, Li(e, t, this._getTranslationConfig())];
						case 1: return [2, n.sent()];
					}
				});
			});
		}, e.prototype.enqueueFiles = function(e, t) {
			return p(this, void 0, void 0, function() {
				var n, i, a = this;
				return m(this, function(o) {
					switch (o.label) {
						case 0:
							if (this._validateAuth("enqueueFiles"), !(n = r(r({}, t), {
								sourceLocale: t.sourceLocale ?? this.sourceLocale,
								targetLocales: t.targetLocales ?? [this.targetLocale]
							})).sourceLocale) throw i = oi("enqueueFiles"), Jr.error(i), Error(i);
							if (!n.targetLocales || n.targetLocales.length === 0) throw i = ai("enqueueFiles"), Jr.error(i), Error(i);
							return n = r(r({}, n), { targetLocales: n.targetLocales.map(function(e) {
								return a.resolveCanonicalLocale(e);
							}) }), [4, Ti(e, n, this._getTranslationConfig())];
						case 1: return [2, o.sent()];
					}
				});
			});
		}, e.prototype.createTag = function(e) {
			return p(this, void 0, void 0, function() {
				return m(this, function(t) {
					switch (t.label) {
						case 0: return this._validateAuth("createTag"), [4, Ei(e, this._getTranslationConfig())];
						case 1: return [2, t.sent()];
					}
				});
			});
		}, e.prototype.publishFiles = function(e) {
			return p(this, void 0, void 0, function() {
				return m(this, function(t) {
					switch (t.label) {
						case 0: return this._validateAuth("publishFiles"), [4, Ui(e, this._getTranslationConfig())];
						case 1: return [2, t.sent()];
					}
				});
			});
		}, e.prototype.submitUserEditDiffs = function(e) {
			return p(this, void 0, void 0, function() {
				var t = this;
				return m(this, function(n) {
					switch (n.label) {
						case 0: return this._validateAuth("submitUserEditDiffs"), [4, Oi(r(r({}, e), { diffs: (e.diffs || []).map(function(e) {
							return r(r({}, e), { locale: t.resolveCanonicalLocale(e.locale) });
						}) }), this._getTranslationConfig())];
						case 1: return n.sent(), [2];
					}
				});
			});
		}, e.prototype.queryFileData = function(e) {
			return p(this, arguments, void 0, function(e, t) {
				var n, i = this;
				return t === void 0 && (t = {}), m(this, function(a) {
					switch (a.label) {
						case 0: return this._validateAuth("queryFileData"), e.translatedFiles = e.translatedFiles?.map(function(e) {
							return r(r({}, e), { locale: i.resolveCanonicalLocale(e.locale) });
						}), [4, Ri(e, t, this._getTranslationConfig())];
						case 1: return (n = a.sent()).translatedFiles = n.translatedFiles?.map(function(e) {
							return r(r({}, e), e.locale && { locale: i.resolveAliasLocale(e.locale) });
						}), n.sourceFiles = n.sourceFiles?.map(function(e) {
							return r(r(r({}, e), e.sourceLocale && { sourceLocale: i.resolveAliasLocale(e.sourceLocale) }), { locales: e.locales.map(function(e) {
								return i.resolveAliasLocale(e);
							}) });
						}), [2, n];
					}
				});
			});
		}, e.prototype.querySourceFile = function(e) {
			return p(this, arguments, void 0, function(e, t) {
				var n, i = this;
				return t === void 0 && (t = {}), m(this, function(a) {
					switch (a.label) {
						case 0: return this._validateAuth("querySourceFile"), [4, Pi(e, t, this._getTranslationConfig())];
						case 1: return (n = a.sent()).translations = n.translations.map(function(e) {
							return r(r({}, e), e.locale && { locale: i.resolveAliasLocale(e.locale) });
						}), n.sourceFile.locales = n.sourceFile.locales.map(function(e) {
							return i.resolveAliasLocale(e);
						}), n.sourceFile.sourceLocale && (n.sourceFile.sourceLocale = this.resolveAliasLocale(n.sourceFile.sourceLocale)), [2, n];
					}
				});
			});
		}, e.prototype.getProjectData = function(e) {
			return p(this, arguments, void 0, function(e, t) {
				var n, r = this;
				return t === void 0 && (t = {}), m(this, function(i) {
					switch (i.label) {
						case 0: return this._validateAuth("getProjectData"), [4, Fi(e, t, this._getTranslationConfig())];
						case 1: return (n = i.sent()).currentLocales = n.currentLocales.map(function(e) {
							return r.resolveAliasLocale(e);
						}), n.defaultLocale = this.resolveAliasLocale(n.defaultLocale), [2, n];
					}
				});
			});
		}, e.prototype.downloadFile = function(e) {
			return p(this, arguments, void 0, function(e, t) {
				var n;
				return t === void 0 && (t = {}), m(this, function(r) {
					switch (r.label) {
						case 0: return this._validateAuth("downloadTranslatedFile"), [4, Di([{
							fileId: e.fileId,
							branchId: e.branchId,
							locale: e.locale ? this.resolveCanonicalLocale(e.locale) : void 0,
							versionId: e.versionId,
							useLatestAvailableVersion: e.useLatestAvailableVersion
						}], t, this._getTranslationConfig())];
						case 1: return n = r.sent(), [2, n.data?.[0]?.data ?? ""];
					}
				});
			});
		}, e.prototype.downloadFileBatch = function(e) {
			return p(this, arguments, void 0, function(e, t) {
				var n, i = this;
				return t === void 0 && (t = {}), m(this, function(a) {
					switch (a.label) {
						case 0: return this._validateAuth("downloadFileBatch"), [4, Di(e = e.map(function(e) {
							return r(r({}, e), { locale: e.locale ? i.resolveCanonicalLocale(e.locale) : void 0 });
						}), t, this._getTranslationConfig())];
						case 1: return [2, {
							files: (n = a.sent()).data.map(function(e) {
								return r(r({}, e), e.locale && { locale: i.resolveAliasLocale(e.locale) });
							}),
							count: n.count
						}];
					}
				});
			});
		}, e.prototype.translate = function(e, t, n) {
			return p(this, void 0, void 0, function() {
				var i, a, o;
				return m(this, function(s) {
					switch (s.label) {
						case 0:
							if (typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translate"), !(i = t?.targetLocale || this.targetLocale)) throw a = ai("translate"), Jr.error(a), Error(a);
							return i = this.resolveCanonicalLocale(i), o = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || z), [4, xi([e], r(r({}, t), {
								targetLocale: i,
								sourceLocale: o
							}), this._getTranslationConfig(), n)];
						case 1: return [2, s.sent()[0]];
					}
				});
			});
		}, e.prototype.translateMany = function(e, t, n) {
			return p(this, void 0, void 0, function() {
				var i, a, o;
				return m(this, function(s) {
					switch (s.label) {
						case 0:
							if (typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translateMany"), !(i = t?.targetLocale || this.targetLocale)) throw a = ai("translateMany"), Jr.error(a), Error(a);
							return i = this.resolveCanonicalLocale(i), o = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || z), [4, xi(e, r(r({}, t), {
								targetLocale: i,
								sourceLocale: o
							}), this._getTranslationConfig(), n)];
						case 1: return [2, s.sent()];
					}
				});
			});
		}, e.prototype.uploadSourceFiles = function(e, t) {
			return p(this, void 0, void 0, function() {
				var n, i, a = this;
				return m(this, function(o) {
					switch (o.label) {
						case 0: return this._validateAuth("uploadSourceFiles"), n = r(r({}, t), { sourceLocale: this.resolveCanonicalLocale(t.sourceLocale ?? this.sourceLocale ?? z) }), [4, Mi(e = e.map(function(e) {
							return r(r({}, e), { source: r(r({}, e.source), { locale: a.resolveCanonicalLocale(e.source.locale) }) });
						}), n, this._getTranslationConfig())];
						case 1: return [2, {
							uploadedFiles: (i = o.sent()).data,
							count: i.count,
							message: `Successfully uploaded ${i.count} files in ${i.batchCount} batch(es)`
						}];
					}
				});
			});
		}, e.prototype.uploadTranslations = function(e, t) {
			return p(this, void 0, void 0, function() {
				var n, i, a, o = this;
				return m(this, function(s) {
					switch (s.label) {
						case 0:
							if (this._validateAuth("uploadTranslations"), !(n = r(r({}, t), { sourceLocale: t.sourceLocale ?? this.sourceLocale })).sourceLocale) throw i = oi("uploadTranslations"), Jr.error(i), Error(i);
							return [4, Ni(e.map(function(e) {
								return r(r({}, e), { translations: e.translations.map(function(e) {
									return r(r({}, e), { locale: o.resolveCanonicalLocale(e.locale) });
								}) });
							}), n, this._getTranslationConfig())];
						case 1: return [2, {
							uploadedFiles: (a = s.sent()).data,
							count: a.count,
							message: `Successfully uploaded ${a.count} files in ${a.batchCount} batch(es)`
						}];
					}
				});
			});
		}, e.prototype.formatCutoff = function(e, t) {
			return Gi(e, r({ locales: this._renderingLocales }, t));
		}, e.prototype.formatMessage = function(e, t) {
			return Ki(e, r({ locales: this._renderingLocales }, t));
		}, e.prototype.formatNum = function(e, t) {
			return qi(e, r({ locales: this._renderingLocales }, t));
		}, e.prototype.formatDateTime = function(e, t) {
			return Ji(e, r({ locales: this._renderingLocales }, t));
		}, e.prototype.formatCurrency = function(e, t, n) {
			return Yi(e, t, r({ locales: this._renderingLocales }, n));
		}, e.prototype.formatList = function(e, t) {
			return Yr({
				value: e,
				locales: t?.locales || this._renderingLocales,
				options: t
			});
		}, e.prototype.formatListToParts = function(e, t) {
			return Xr({
				value: e,
				locales: t?.locales || this._renderingLocales,
				options: t
			});
		}, e.prototype.formatRelativeTime = function(e, t, n) {
			return Xi(e, t, r({ locales: this._renderingLocales }, n));
		}, e.prototype.formatRelativeTimeFromDate = function(e, t) {
			return Zi(e, r({ locales: this._renderingLocales }, t));
		}, e.prototype.getLocaleName = function(e) {
			if (e === void 0 && (e = this.targetLocale), !e) throw Error(ai("getLocaleName"));
			return $r(e, this.sourceLocale, this.customMapping);
		}, e.prototype.getLocaleEmoji = function(e) {
			if (e === void 0 && (e = this.targetLocale), !e) throw Error(ai("getLocaleEmoji"));
			return Qi(e, this.customMapping);
		}, e.prototype.getLocaleProperties = function(e) {
			if (e === void 0 && (e = this.targetLocale), !e) throw Error(ai("getLocaleProperties"));
			return $i(e, this.sourceLocale, this.customMapping);
		}, e.prototype.getRegionProperties = function(e, t) {
			if (e === void 0 && (e = this.getLocaleProperties().regionCode), !t) {
				if (this.customMapping && !this.customRegionMapping) {
					for (var n = {}, i = 0, a = Object.entries(this.customMapping); i < a.length; i++) {
						var o = a[i], s = o[0], c = o[1];
						if (c && typeof c == "object" && c.regionCode && !n[c.regionCode]) {
							var l = c.regionName, u = c.emoji;
							n[c.regionCode] = r(r({ locale: s }, l && { name: l }), u && { emoji: u });
						}
					}
					this.customRegionMapping = n;
				}
				t = this.customRegionMapping;
			}
			return ki(e, this.targetLocale, t);
		}, e.prototype.requiresTranslation = function(e, t, n, r) {
			if (e === void 0 && (e = this.sourceLocale), t === void 0 && (t = this.targetLocale), n === void 0 && (n = this.locales), r === void 0 && (r = this.customMapping), !e) throw Error(oi("requiresTranslation"));
			if (!t) throw Error(ai("requiresTranslation"));
			return cn(e, t, n, r);
		}, e.prototype.determineLocale = function(e, t, n) {
			return t === void 0 && (t = this.locales || []), n === void 0 && (n = this.customMapping), vn(e, t, n);
		}, e.prototype.getLocaleDirection = function(e) {
			if (e === void 0 && (e = this.targetLocale), !e) throw Error(ai("getLocaleDirection"));
			return ea(e);
		}, e.prototype.isValidLocale = function(e, t) {
			if (e === void 0 && (e = this.targetLocale), t === void 0 && (t = this.customMapping), !e) throw Error(ai("isValidLocale"));
			return ta(e, t);
		}, e.prototype.resolveCanonicalLocale = function(e, t) {
			if (e === void 0 && (e = this.targetLocale), t === void 0 && (t = this.customMapping), !e) throw Error(ai("resolveCanonicalLocale"));
			return ji(e, t);
		}, e.prototype.resolveAliasLocale = function(e, t) {
			if (t === void 0 && (t = this.customMapping), !e) throw Error(ai("resolveAliasLocale"));
			return Ai(e, t);
		}, e.prototype.standardizeLocale = function(e) {
			if (e === void 0 && (e = this.targetLocale), !e) throw Error(ai("standardizeLocale"));
			return rn(e);
		}, e.prototype.isSameDialect = function() {
			var e = [...arguments];
			return na.apply(void 0, e);
		}, e.prototype.isSameLanguage = function() {
			var e = [...arguments];
			return sn.apply(void 0, e);
		}, e.prototype.isSupersetLocale = function(e, t) {
			return ra(e, t);
		}, e;
	}();
	function Gi(e, t) {
		return function(e) {
			var t = e.value, n = e.locales, r = n === void 0 ? z : n, i = e.options, a = i === void 0 ? {} : i;
			return G.get("CutoffFormat", r, a).format(t);
		}({
			value: e,
			locales: t?.locales,
			options: t
		});
	}
	function Ki(e, t) {
		return t?.dataFormat === "STRING" ? e : function(e, t, n) {
			return t === void 0 && (t = z), n === void 0 && (n = {}), new zr(e, t).format(n)?.toString() ?? "";
		}(e, t?.locales, t?.variables);
	}
	function qi(e, t) {
		return function(e) {
			var t = e.value, n = e.locales, i = n === void 0 ? [z] : n, a = e.options, o = a === void 0 ? {} : a;
			return G.get("NumberFormat", i, r({ numberingSystem: "latn" }, o)).format(t);
		}({
			value: e,
			locales: t.locales,
			options: t
		});
	}
	function Ji(e, t) {
		return function(e) {
			var t = e.value, n = e.locales, i = n === void 0 ? [z] : n, a = e.options, o = a === void 0 ? {} : a;
			return G.get("DateTimeFormat", i, r({
				calendar: "gregory",
				numberingSystem: "latn"
			}, o)).format(t);
		}({
			value: e,
			locales: t?.locales,
			options: t
		});
	}
	function Yi(e, t, n) {
		return function(e) {
			var t = e.value, n = e.locales, i = n === void 0 ? [z] : n, a = e.currency, o = a === void 0 ? "USD" : a, s = e.options, c = s === void 0 ? {} : s;
			return G.get("NumberFormat", i, r({
				style: "currency",
				currency: o,
				numberingSystem: "latn"
			}, c)).format(t);
		}({
			value: e,
			currency: t,
			locales: n.locales,
			options: n
		});
	}
	function Xi(e, t, n) {
		return Qr({
			value: e,
			unit: t,
			locales: n.locales,
			options: n
		});
	}
	function Zi(e, t) {
		var n = t.locales, r = t.baseDate, a = i(t, ["locales", "baseDate"]);
		return Zr({
			date: e,
			baseDate: r ?? /* @__PURE__ */ new Date(),
			locales: n,
			options: a
		});
	}
	function Qi(e, t) {
		return dn(e, t);
	}
	function $i(e, t, n) {
		return _n(e, t, n);
	}
	function ea(e) {
		return ei(e);
	}
	function ta(e, t) {
		return nn(e, t);
	}
	function na() {
		var e = [...arguments];
		return on.apply(void 0, e);
	}
	function ra(e, t) {
		return function(e, t) {
			try {
				var n = G.get("Locale", rn(e)), r = n.language, i = n.region, a = n.script, o = G.get("Locale", rn(t)), s = o.language, c = o.region, l = o.script;
				return !(r !== s || i && i !== c || a && a !== l);
			} catch (e) {
				return console.error(e), !1;
			}
		}(e, t);
	}
	e.API_VERSION = fi, e.GT = Wi, e.determineLocale = function(e, t, n) {
		return t === void 0 && (t = []), n === void 0 && (n = void 0), vn(e, t, n);
	}, e.formatCurrency = Yi, e.formatCutoff = Gi, e.formatDateTime = Ji, e.formatList = function(e, t) {
		return Yr({
			value: e,
			locales: t.locales,
			options: t
		});
	}, e.formatListToParts = function(e, t) {
		return Xr({
			value: e,
			locales: t?.locales,
			options: t
		});
	}, e.formatMessage = Ki, e.formatNum = qi, e.formatRelativeTime = Xi, e.formatRelativeTimeFromDate = Zi, e.getLocaleDirection = ea, e.getLocaleEmoji = Qi, e.getLocaleName = function(e, t, n) {
		return $r(e, t, n);
	}, e.getLocaleProperties = $i, e.getRegionProperties = function(e, t, n) {
		return ki(e, t, n);
	}, e.isSameDialect = na, e.isSameLanguage = function() {
		var e = [...arguments];
		return sn.apply(void 0, e);
	}, e.isSupersetLocale = ra, e.isValidLocale = ta, e.requiresTranslation = function(e, t, n, r) {
		return cn(e, t, n, r);
	}, e.resolveAliasLocale = function(e, t) {
		return Ai(e, t);
	}, e.resolveCanonicalLocale = function(e, t) {
		return ji(e, t);
	}, e.standardizeLocale = function(e) {
		return rn(e);
	};
})), l = /* @__PURE__ */ a(((e) => {
	var t = c(), n = function() {
		return n = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, n.apply(this, arguments);
	}, r = {
		af: ["af"],
		am: ["am"],
		ar: [
			"ar",
			"ar-AE",
			"ar-EG",
			"ar-LB",
			"ar-MA",
			"ar-SA"
		],
		bg: ["bg"],
		bn: ["bn"],
		bs: ["bs"],
		ca: ["ca"],
		cs: ["cs"],
		cy: ["cy"],
		da: ["da"],
		de: [
			"de",
			"de-DE",
			"de-AT",
			"de-CH"
		],
		el: [
			"el",
			"el-EL",
			"el-CY"
		],
		en: [
			"en",
			"en-AU",
			"en-CA",
			"en-GB",
			"en-NZ",
			"en-US"
		],
		es: [
			"es",
			"es-ES",
			"es-419",
			"es-AR",
			"es-CL",
			"es-CO",
			"es-MX",
			"es-PE",
			"es-US",
			"es-VE"
		],
		et: ["et"],
		fa: ["fa"],
		fi: ["fi"],
		fil: ["fil"],
		fr: [
			"fr",
			"fr-FR",
			"fr-BE",
			"fr-CM",
			"fr-CA",
			"fr-CH",
			"fr-SN"
		],
		gu: ["gu"],
		ha: ["ha"],
		hi: ["hi"],
		he: ["he"],
		hr: ["hr"],
		hu: ["hu"],
		hy: ["hy"],
		id: ["id"],
		ig: ["ig"],
		is: ["is"],
		it: [
			"it",
			"it-IT",
			"it-CH"
		],
		ja: ["ja"],
		ka: ["ka"],
		kk: ["kk"],
		kn: ["kn"],
		ko: ["ko"],
		la: ["la"],
		lt: ["lt"],
		lv: ["lv"],
		mk: ["mk"],
		ml: ["ml"],
		mn: ["mn"],
		mr: ["mr"],
		ms: ["ms"],
		my: ["my"],
		nl: [
			"nl",
			"nl-NL",
			"nl-BE"
		],
		nb: ["nb", "nb-NO"],
		no: ["no", "no-NO"],
		nn: ["nn", "nn-NO"],
		pa: ["pa"],
		pl: ["pl"],
		pt: [
			"pt",
			"pt-BR",
			"pt-PT"
		],
		ro: ["ro"],
		ru: ["ru"],
		sk: ["sk"],
		sl: ["sl"],
		so: ["so"],
		sq: ["sq"],
		sr: ["sr"],
		sv: ["sv"],
		sw: [
			"sw",
			"sw-KE",
			"sw-TZ"
		],
		ta: ["ta"],
		te: ["te"],
		th: ["th"],
		tl: ["tl"],
		tr: ["tr"],
		uk: ["uk"],
		ur: ["ur"],
		uz: ["uz"],
		vi: ["vi"],
		yo: ["yo"],
		zh: [
			"zh",
			"zh-CN",
			"zh-Hans",
			"zh-Hant",
			"zh-HK",
			"zh-SG",
			"zh-TW"
		],
		qbr: ["qbr"]
	};
	e.getSupportedLocale = function(e) {
		if (!t.isValidLocale(e)) return null;
		e = t.standardizeLocale(e);
		var i = t.getLocaleProperties(e), a = i.languageCode, o = function(e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == "function") {
				var i = 0;
				for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
			}
			return n;
		}(i, ["languageCode"]);
		if (r[a]?.length) {
			var s = r[a], c = function(e) {
				for (var t = e.locale, n = e.languageCode, r = e.minimizedCode, i = e.regionCode, a = e.scriptCode, o = 0, c = [
					t,
					`${n}-${i}`,
					`${n}-${a}`,
					r
				]; o < c.length; o++) {
					var l = c[o];
					if (s.includes(l)) return l;
				}
				return null;
			};
			return c(n({
				locale: e,
				languageCode: a
			}, o)) || c(n({ locale: a }, t.getLocaleProperties(a)));
		}
		return null;
	}, e.listSupportedLocales = function() {
		for (var e = [], t = 0, n = Object.values(r); t < n.length; t++) {
			var i = n[t];
			e.push.apply(e, i);
		}
		return e.sort();
	};
})), u = /* @__PURE__ */ a(((e) => {
	var t = o("react/jsx-runtime"), n = o("react"), r = c(), i = l();
	function a(e) {
		var t = Object.create(null);
		return e && Object.keys(e).forEach(function(n) {
			if (n !== "default") {
				var r = Object.getOwnPropertyDescriptor(e, n);
				Object.defineProperty(t, n, r.get ? r : {
					enumerable: !0,
					get: function() {
						return e[n];
					}
				});
			}
		}), t.default = e, Object.freeze(t);
	}
	var s = a(n), u = {
		variable: "value",
		number: "n",
		datetime: "date",
		currency: "cost",
		"relative-time": "time"
	};
	function d(e = {}, t) {
		return e.name ? e.name : `_gt_${u[t] || "value"}_${e["data-_gt"]?.id}`;
	}
	var f = function(e, t) {
		return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, f(e, t);
	};
	function p(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
		function n() {
			this.constructor = e;
		}
		f(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
	}
	var m = function() {
		return m = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, m.apply(this, arguments);
	};
	function h(e, t) {
		var n = {};
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (e != null && typeof Object.getOwnPropertySymbols == "function") {
			var i = 0;
			for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
		}
		return n;
	}
	function g(e, t, n, r) {
		var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
		if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
		else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
		return a > 3 && o && Object.defineProperty(t, n, o), o;
	}
	function _(e, t) {
		return function(n, r) {
			t(n, r, e);
		};
	}
	function v(e, t, n, r, i, a) {
		function o(e) {
			if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
			return e;
		}
		for (var s, c = r.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
			var m = {};
			for (var h in r) m[h] = h === "access" ? {} : r[h];
			for (var h in r.access) m.access[h] = r.access[h];
			m.addInitializer = function(e) {
				if (f) throw TypeError("Cannot add initializers after decoration has completed");
				a.push(o(e || null));
			};
			var g = (0, n[p])(c === "accessor" ? {
				get: d.get,
				set: d.set
			} : d[l], m);
			if (c === "accessor") {
				if (g === void 0) continue;
				if (typeof g != "object" || !g) throw TypeError("Object expected");
				(s = o(g.get)) && (d.get = s), (s = o(g.set)) && (d.set = s), (s = o(g.init)) && i.unshift(s);
			} else (s = o(g)) && (c === "field" ? i.unshift(s) : d[l] = s);
		}
		u && Object.defineProperty(u, r.name, d), f = !0;
	}
	function y(e, t, n) {
		for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
		return r ? n : void 0;
	}
	function b(e) {
		return typeof e == "symbol" ? e : `${e}`;
	}
	function x(e, t, n) {
		return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
			configurable: !0,
			value: n ? `${n} ${t}` : t
		});
	}
	function S(e, t) {
		if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
	}
	function C(e, t, n, r) {
		return new (n ||= Promise)(function(i, a) {
			function o(e) {
				try {
					c(r.next(e));
				} catch (e) {
					a(e);
				}
			}
			function s(e) {
				try {
					c(r.throw(e));
				} catch (e) {
					a(e);
				}
			}
			function c(e) {
				var t;
				e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
					e(t);
				})).then(o, s);
			}
			c((r = r.apply(e, t || [])).next());
		});
	}
	function w(e, t) {
		var n, r, i, a = {
			label: 0,
			sent: function() {
				if (1 & i[0]) throw i[1];
				return i[1];
			},
			trys: [],
			ops: []
		}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
		return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
			return this;
		}), o;
		function s(s) {
			return function(c) {
				return function(s) {
					if (n) throw TypeError("Generator is already executing.");
					for (; o && (o = 0, s[0] && (a = 0)), a;) try {
						if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
						switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
							case 0:
							case 1:
								i = s;
								break;
							case 4: return a.label++, {
								value: s[1],
								done: !1
							};
							case 5:
								a.label++, r = s[1], s = [0];
								continue;
							case 7:
								s = a.ops.pop(), a.trys.pop();
								continue;
							default:
								if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
									a = 0;
									continue;
								}
								if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
									a.label = s[1];
									break;
								}
								if (s[0] === 6 && a.label < i[1]) {
									a.label = i[1], i = s;
									break;
								}
								if (i && a.label < i[2]) {
									a.label = i[2], a.ops.push(s);
									break;
								}
								i[2] && a.ops.pop(), a.trys.pop();
								continue;
						}
						s = t.call(e, a);
					} catch (e) {
						s = [6, e], r = 0;
					} finally {
						n = i = 0;
					}
					if (5 & s[0]) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					};
				}([s, c]);
			};
		}
	}
	var T = Object.create ? function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	} : function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	};
	function E(e, t) {
		for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || T(t, e, n);
	}
	function D(e) {
		var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
		if (n) return n.call(e);
		if (e && typeof e.length == "number") return { next: function() {
			return e && r >= e.length && (e = void 0), {
				value: e && e[r++],
				done: !e
			};
		} };
		throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function O(e, t) {
		var n = typeof Symbol == "function" && e[Symbol.iterator];
		if (!n) return e;
		var r, i, a = n.call(e), o = [];
		try {
			for (; (t === void 0 || t-- > 0) && !(r = a.next()).done;) o.push(r.value);
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				r && !r.done && (n = a.return) && n.call(a);
			} finally {
				if (i) throw i.error;
			}
		}
		return o;
	}
	function k() {
		for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(O(arguments[t]));
		return e;
	}
	function A() {
		for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
		var r = Array(e), i = 0;
		for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
		return r;
	}
	function j(e, t, n) {
		if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
		return e.concat(r || Array.prototype.slice.call(t));
	}
	function M(e) {
		return this instanceof M ? (this.v = e, this) : new M(e);
	}
	function N(e, t, n) {
		if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
		var r, i = n.apply(e, t || []), a = [];
		return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
			return function(t) {
				return Promise.resolve(t).then(e, l);
			};
		}), r[Symbol.asyncIterator] = function() {
			return this;
		}, r;
		function o(e, t) {
			i[e] && (r[e] = function(t) {
				return new Promise(function(n, r) {
					a.push([
						e,
						t,
						n,
						r
					]) > 1 || s(e, t);
				});
			}, t && (r[e] = t(r[e])));
		}
		function s(e, t) {
			try {
				(function(e) {
					e.value instanceof M ? Promise.resolve(e.value.v).then(c, l) : u(a[0][2], e);
				})(i[e](t));
			} catch (e) {
				u(a[0][3], e);
			}
		}
		function c(e) {
			s("next", e);
		}
		function l(e) {
			s("throw", e);
		}
		function u(e, t) {
			e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
		}
	}
	function P(e) {
		var t, n;
		return t = {}, r("next"), r("throw", function(e) {
			throw e;
		}), r("return"), t[Symbol.iterator] = function() {
			return this;
		}, t;
		function r(r, i) {
			t[r] = e[r] ? function(t) {
				return (n = !n) ? {
					value: M(e[r](t)),
					done: !1
				} : i ? i(t) : t;
			} : i;
		}
	}
	function F(e) {
		if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
		var t, n = e[Symbol.asyncIterator];
		return n ? n.call(e) : (e = D(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
			return this;
		}, t);
		function r(n) {
			t[n] = e[n] && function(t) {
				return new Promise(function(r, i) {
					(function(e, t, n, r) {
						Promise.resolve(r).then(function(t) {
							e({
								value: t,
								done: n
							});
						}, t);
					})(r, i, (t = e[n](t)).done, t.value);
				});
			};
		}
	}
	function I(e, t) {
		return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
	}
	var L = Object.create ? function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	} : function(e, t) {
		e.default = t;
	}, R = function(e) {
		return R = Object.getOwnPropertyNames || function(e) {
			var t = [];
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
			return t;
		}, R(e);
	};
	function ee(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (e != null) for (var n = R(e), r = 0; r < n.length; r++) n[r] !== "default" && T(t, e, n[r]);
		return L(t, e), t;
	}
	function te(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function ne(e, t, n, r) {
		if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
		if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
		return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
	}
	function re(e, t, n, r, i) {
		if (r === "m") throw TypeError("Private method is not writable");
		if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
		if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
		return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
	}
	function ie(e, t) {
		if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
		return typeof e == "function" ? t === e : e.has(t);
	}
	function ae(e, t, n) {
		if (t != null) {
			if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
			var r, i;
			if (n) {
				if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
				r = t[Symbol.asyncDispose];
			}
			if (r === void 0) {
				if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
				r = t[Symbol.dispose], n && (i = r);
			}
			if (typeof r != "function") throw TypeError("Object not disposable.");
			i && (r = function() {
				try {
					i.call(this);
				} catch (e) {
					return Promise.reject(e);
				}
			}), e.stack.push({
				value: t,
				dispose: r,
				async: n
			});
		} else n && e.stack.push({ async: !0 });
		return t;
	}
	var z = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
		var r = Error(n);
		return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
	};
	function B(e) {
		function t(t) {
			e.error = e.hasError ? new z(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
		}
		var n, r = 0;
		return function i() {
			for (; n = e.stack.pop();) try {
				if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
				if (n.dispose) {
					var a = n.dispose.call(n.value);
					if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
						return t(e), i();
					});
				} else r |= 1;
			} catch (e) {
				t(e);
			}
			if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
			if (e.hasError) throw e.error;
		}();
	}
	function V(e, t) {
		return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
			return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
		}) : e;
	}
	var H, U, W, oe = Object.freeze({
		__proto__: null,
		__addDisposableResource: ae,
		get __assign() {
			return m;
		},
		__asyncDelegator: P,
		__asyncGenerator: N,
		__asyncValues: F,
		__await: M,
		__awaiter: C,
		__classPrivateFieldGet: ne,
		__classPrivateFieldIn: ie,
		__classPrivateFieldSet: re,
		__createBinding: T,
		__decorate: g,
		__disposeResources: B,
		__esDecorate: v,
		__exportStar: E,
		__extends: p,
		__generator: w,
		__importDefault: te,
		__importStar: ee,
		__makeTemplateObject: I,
		__metadata: S,
		__param: _,
		__propKey: b,
		__read: O,
		__rest: h,
		__rewriteRelativeImportExtension: V,
		__runInitializers: y,
		__setFunctionName: x,
		__spread: k,
		__spreadArray: j,
		__spreadArrays: A,
		__values: D,
		default: {
			__extends: p,
			__assign: m,
			__rest: h,
			__decorate: g,
			__param: _,
			__esDecorate: v,
			__runInitializers: y,
			__propKey: b,
			__setFunctionName: x,
			__metadata: S,
			__awaiter: C,
			__generator: w,
			__createBinding: T,
			__exportStar: E,
			__values: D,
			__read: O,
			__spread: k,
			__spreadArrays: A,
			__spreadArray: j,
			__await: M,
			__asyncGenerator: N,
			__asyncDelegator: P,
			__asyncValues: F,
			__makeTemplateObject: I,
			__importStar: ee,
			__importDefault: te,
			__classPrivateFieldGet: ne,
			__classPrivateFieldSet: re,
			__classPrivateFieldIn: ie,
			__addDisposableResource: ae,
			__disposeResources: B,
			__rewriteRelativeImportExtension: V
		}
	});
	(function(e) {
		e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
	})(H ||= {}), function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(U ||= {}), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(W ||= {});
	var G = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, se = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
	function ce(e) {
		var t = {};
		return e.replace(se, function(e) {
			var n = e.length;
			switch (e[0]) {
				case "G":
					t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
					break;
				case "y":
					t.year = n === 2 ? "2-digit" : "numeric";
					break;
				case "Y":
				case "u":
				case "U":
				case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
				case "q":
				case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
				case "M":
				case "L":
					t.month = [
						"numeric",
						"2-digit",
						"short",
						"long",
						"narrow"
					][n - 1];
					break;
				case "w":
				case "W": throw RangeError("`w/W` (week) patterns are not supported");
				case "d":
					t.day = ["numeric", "2-digit"][n - 1];
					break;
				case "D":
				case "F":
				case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
				case "E":
					t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
					break;
				case "e":
					if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][n - 4];
					break;
				case "c":
					if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][n - 4];
					break;
				case "a":
					t.hour12 = !0;
					break;
				case "b":
				case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
				case "h":
					t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "H":
					t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "K":
					t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "k":
					t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "j":
				case "J":
				case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
				case "m":
					t.minute = ["numeric", "2-digit"][n - 1];
					break;
				case "s":
					t.second = ["numeric", "2-digit"][n - 1];
					break;
				case "S":
				case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
				case "z":
					t.timeZoneName = n < 4 ? "short" : "long";
					break;
				case "Z":
				case "O":
				case "v":
				case "V":
				case "X":
				case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
			}
			return "";
		}), t;
	}
	var le = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
	function ue(e) {
		return e.replace(/^(.*?)-/, "");
	}
	var de = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, fe = /^(@+)?(\+|#+)?[rs]?$/g, pe = /(\*)(0+)|(#+)(0+)|(0+)/g, me = /^(0+)$/;
	function he(e) {
		var t = {};
		return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(fe, function(e, n, r) {
			return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
		}), t;
	}
	function ge(e) {
		switch (e) {
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
	function _e(e) {
		var t;
		if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
			var n = e.slice(0, 2);
			if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !me.test(e)) throw Error("Malformed concise eng/scientific notation");
			t.minimumIntegerDigits = e.length;
		}
		return t;
	}
	function ve(e) {
		return ge(e) || {};
	}
	function K(e) {
		for (var t = {}, n = 0, r = e; n < r.length; n++) {
			var i = r[n];
			switch (i.stem) {
				case "percent":
				case "%":
					t.style = "percent";
					continue;
				case "%x100":
					t.style = "percent", t.scale = 100;
					continue;
				case "currency":
					t.style = "currency", t.currency = i.options[0];
					continue;
				case "group-off":
				case ",_":
					t.useGrouping = !1;
					continue;
				case "precision-integer":
				case ".":
					t.maximumFractionDigits = 0;
					continue;
				case "measure-unit":
				case "unit":
					t.style = "unit", t.unit = ue(i.options[0]);
					continue;
				case "compact-short":
				case "K":
					t.notation = "compact", t.compactDisplay = "short";
					continue;
				case "compact-long":
				case "KK":
					t.notation = "compact", t.compactDisplay = "long";
					continue;
				case "scientific":
					t = m(m(m({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
						return m(m({}, e), ve(t));
					}, {}));
					continue;
				case "engineering":
					t = m(m(m({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
						return m(m({}, e), ve(t));
					}, {}));
					continue;
				case "notation-simple":
					t.notation = "standard";
					continue;
				case "unit-width-narrow":
					t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
					continue;
				case "unit-width-short":
					t.currencyDisplay = "code", t.unitDisplay = "short";
					continue;
				case "unit-width-full-name":
					t.currencyDisplay = "name", t.unitDisplay = "long";
					continue;
				case "unit-width-iso-code":
					t.currencyDisplay = "symbol";
					continue;
				case "scale":
					t.scale = parseFloat(i.options[0]);
					continue;
				case "rounding-mode-floor":
					t.roundingMode = "floor";
					continue;
				case "rounding-mode-ceiling":
					t.roundingMode = "ceil";
					continue;
				case "rounding-mode-down":
					t.roundingMode = "trunc";
					continue;
				case "rounding-mode-up":
					t.roundingMode = "expand";
					continue;
				case "rounding-mode-half-even":
					t.roundingMode = "halfEven";
					continue;
				case "rounding-mode-half-down":
					t.roundingMode = "halfTrunc";
					continue;
				case "rounding-mode-half-up":
					t.roundingMode = "halfExpand";
					continue;
				case "integer-width":
					if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
					i.options[0].replace(pe, function(e, n, r, i, a, o) {
						if (n) t.minimumIntegerDigits = r.length;
						else {
							if (i && a) throw Error("We currently do not support maximum integer digits");
							if (o) throw Error("We currently do not support exact integer digits");
						}
						return "";
					});
					continue;
			}
			if (me.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
			else if (de.test(i.stem)) {
				if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
				i.stem.replace(de, function(e, n, r, i, a, o) {
					return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
				});
				var a = i.options[0];
				a === "w" ? t = m(m({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = m(m({}, t), he(a)));
			} else if (fe.test(i.stem)) t = m(m({}, t), he(i.stem));
			else {
				var o = ge(i.stem);
				o && (t = m(m({}, t), o));
				var s = _e(i.stem);
				s && (t = m(m({}, t), s));
			}
		}
		return t;
	}
	var ye = {
		"001": ["H", "h"],
		419: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AD: ["H", "hB"],
		AE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		AF: [
			"H",
			"hb",
			"hB",
			"h"
		],
		AG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AL: [
			"h",
			"H",
			"hB"
		],
		AM: ["H", "hB"],
		AO: ["H", "hB"],
		AR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AS: ["h", "H"],
		AT: ["H", "hB"],
		AU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AW: ["H", "hB"],
		AX: ["H"],
		AZ: [
			"H",
			"hB",
			"h"
		],
		BA: [
			"H",
			"hB",
			"h"
		],
		BB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BD: [
			"h",
			"hB",
			"H"
		],
		BE: ["H", "hB"],
		BF: ["H", "hB"],
		BG: [
			"H",
			"hB",
			"h"
		],
		BH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		BI: ["H", "h"],
		BJ: ["H", "hB"],
		BL: ["H", "hB"],
		BM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BN: [
			"hb",
			"hB",
			"h",
			"H"
		],
		BO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		BQ: ["H"],
		BR: ["H", "hB"],
		BS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BT: ["h", "H"],
		BW: [
			"H",
			"h",
			"hb",
			"hB"
		],
		BY: ["H", "h"],
		BZ: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CA: [
			"h",
			"hb",
			"H",
			"hB"
		],
		CC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CD: ["hB", "H"],
		CF: [
			"H",
			"h",
			"hB"
		],
		CG: ["H", "hB"],
		CH: [
			"H",
			"hB",
			"h"
		],
		CI: ["H", "hB"],
		CK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CL: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CM: [
			"H",
			"h",
			"hB"
		],
		CN: [
			"H",
			"hB",
			"hb",
			"h"
		],
		CO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CP: ["H"],
		CR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CU: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CV: ["H", "hB"],
		CW: ["H", "hB"],
		CX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CY: [
			"h",
			"H",
			"hb",
			"hB"
		],
		CZ: ["H"],
		DE: ["H", "hB"],
		DG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		DJ: ["h", "H"],
		DK: ["H"],
		DM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		DO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		DZ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		EC: [
			"h",
			"H",
			"hB",
			"hb"
		],
		EE: ["H", "hB"],
		EG: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		ER: ["h", "H"],
		ES: [
			"H",
			"hB",
			"h",
			"hb"
		],
		ET: [
			"hB",
			"hb",
			"h",
			"H"
		],
		FI: ["H"],
		FJ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		FM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FO: ["H", "h"],
		FR: ["H", "hB"],
		GA: ["H", "hB"],
		GB: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GD: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GE: [
			"H",
			"hB",
			"h"
		],
		GF: ["H", "hB"],
		GG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GH: ["h", "H"],
		GI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GL: ["H", "h"],
		GM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GN: ["H", "hB"],
		GP: ["H", "hB"],
		GQ: [
			"H",
			"hB",
			"h",
			"hb"
		],
		GR: [
			"h",
			"H",
			"hb",
			"hB"
		],
		GT: [
			"h",
			"H",
			"hB",
			"hb"
		],
		GU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GW: ["H", "hB"],
		GY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		HK: [
			"h",
			"hB",
			"hb",
			"H"
		],
		HN: [
			"h",
			"H",
			"hB",
			"hb"
		],
		HR: ["H", "hB"],
		HU: ["H", "h"],
		IC: [
			"H",
			"h",
			"hB",
			"hb"
		],
		ID: ["H"],
		IE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IL: ["H", "hB"],
		IM: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IN: ["h", "H"],
		IO: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IQ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		IR: ["hB", "H"],
		IS: ["H"],
		IT: ["H", "hB"],
		JE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		JM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		JO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		JP: [
			"H",
			"K",
			"h"
		],
		KE: [
			"hB",
			"hb",
			"H",
			"h"
		],
		KG: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KH: [
			"hB",
			"h",
			"H",
			"hb"
		],
		KI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KM: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KN: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KP: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KW: [
			"h",
			"hB",
			"hb",
			"H"
		],
		KY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KZ: ["H", "hB"],
		LA: [
			"H",
			"hb",
			"hB",
			"h"
		],
		LB: [
			"h",
			"hB",
			"hb",
			"H"
		],
		LC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LI: [
			"H",
			"hB",
			"h"
		],
		LK: [
			"H",
			"h",
			"hB",
			"hb"
		],
		LR: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LS: ["h", "H"],
		LT: [
			"H",
			"h",
			"hb",
			"hB"
		],
		LU: [
			"H",
			"h",
			"hB"
		],
		LV: [
			"H",
			"hB",
			"hb",
			"h"
		],
		LY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		MC: ["H", "hB"],
		MD: ["H", "hB"],
		ME: [
			"H",
			"hB",
			"h"
		],
		MF: ["H", "hB"],
		MG: ["H", "h"],
		MH: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ML: ["H"],
		MM: [
			"hB",
			"hb",
			"H",
			"h"
		],
		MN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MP: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MQ: ["H", "hB"],
		MR: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MS: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MT: ["H", "h"],
		MU: ["H", "h"],
		MV: ["H", "h"],
		MW: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MX: [
			"h",
			"H",
			"hB",
			"hb"
		],
		MY: [
			"hb",
			"hB",
			"h",
			"H"
		],
		MZ: ["H", "hB"],
		NA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NC: ["H", "hB"],
		NE: ["H"],
		NF: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NI: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NL: ["H", "hB"],
		NO: ["H", "h"],
		NP: [
			"H",
			"h",
			"hB"
		],
		NR: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NU: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		OM: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PF: [
			"H",
			"h",
			"hB"
		],
		PG: ["h", "H"],
		PH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PK: [
			"h",
			"hB",
			"H"
		],
		PL: ["H", "h"],
		PM: ["H", "hB"],
		PN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		PR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PS: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PT: ["H", "hB"],
		PW: ["h", "H"],
		PY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		QA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		RE: ["H", "hB"],
		RO: ["H", "hB"],
		RS: [
			"H",
			"hB",
			"h"
		],
		RU: ["H"],
		RW: ["H", "h"],
		SA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SC: [
			"H",
			"h",
			"hB"
		],
		SD: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SE: ["H"],
		SG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SH: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SI: ["H", "hB"],
		SJ: ["H"],
		SK: ["H"],
		SL: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SM: [
			"H",
			"h",
			"hB"
		],
		SN: [
			"H",
			"h",
			"hB"
		],
		SO: ["h", "H"],
		SR: ["H", "hB"],
		SS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ST: ["H", "hB"],
		SV: [
			"h",
			"H",
			"hB",
			"hb"
		],
		SX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		TC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TD: [
			"h",
			"H",
			"hB"
		],
		TF: [
			"H",
			"h",
			"hB"
		],
		TG: ["H", "hB"],
		TH: ["H", "h"],
		TJ: ["H", "h"],
		TL: [
			"H",
			"hB",
			"hb",
			"h"
		],
		TM: ["H", "h"],
		TN: [
			"h",
			"hB",
			"hb",
			"H"
		],
		TO: ["h", "H"],
		TR: ["H", "hB"],
		TT: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TW: [
			"hB",
			"hb",
			"h",
			"H"
		],
		TZ: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UA: [
			"H",
			"hB",
			"h"
		],
		UG: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		US: [
			"h",
			"hb",
			"H",
			"hB"
		],
		UY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		UZ: [
			"H",
			"hB",
			"h"
		],
		VA: [
			"H",
			"h",
			"hB"
		],
		VC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		VG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VN: ["H", "h"],
		VU: ["h", "H"],
		WF: ["H", "hB"],
		WS: ["h", "H"],
		XK: [
			"H",
			"hB",
			"h"
		],
		YE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		YT: ["H", "hB"],
		ZA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ZM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ZW: ["H", "h"],
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
	function be(e) {
		var t = e.hourCycle;
		if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
			case "h24": return "k";
			case "h23": return "H";
			case "h12": return "h";
			case "h11": return "K";
			default: throw Error("Invalid hourCycle");
		}
		var n, r = e.language;
		return r !== "root" && (n = e.maximize().region), (ye[n || ""] || ye[r || ""] || ye[`${r}-001`] || ye["001"])[0];
	}
	var xe = RegExp(`^${G.source}*`), q = RegExp(`${G.source}*\$`);
	function J(e, t) {
		return {
			start: e,
			end: t
		};
	}
	var Y = !!String.prototype.startsWith && "_a".startsWith("a", 1), Se = !!String.fromCodePoint, Ce = !!Object.fromEntries, we = !!String.prototype.codePointAt, Te = !!String.prototype.trimStart, Ee = !!String.prototype.trimEnd, De = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
		return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
	}, Oe = !0;
	try {
		Oe = Ie("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
	} catch {
		Oe = !1;
	}
	var ke, Ae = Y ? function(e, t, n) {
		return e.startsWith(t, n);
	} : function(e, t, n) {
		return e.slice(n, n + t.length) === t;
	}, je = Se ? String.fromCodePoint : function() {
		for (var e = [...arguments], t, n = "", r = e.length, i = 0; r > i;) {
			if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
			n += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320);
		}
		return n;
	}, Me = Ce ? Object.fromEntries : function(e) {
		for (var t = {}, n = 0, r = e; n < r.length; n++) {
			var i = r[n], a = i[0];
			t[a] = i[1];
		}
		return t;
	}, Ne = we ? function(e, t) {
		return e.codePointAt(t);
	} : function(e, t) {
		var n = e.length;
		if (!(t < 0 || t >= n)) {
			var r, i = e.charCodeAt(t);
			return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536;
		}
	}, Pe = Te ? function(e) {
		return e.trimStart();
	} : function(e) {
		return e.replace(xe, "");
	}, Fe = Ee ? function(e) {
		return e.trimEnd();
	} : function(e) {
		return e.replace(q, "");
	};
	function Ie(e, t) {
		return new RegExp(e, t);
	}
	if (Oe) {
		var Le = Ie("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
		ke = function(e, t) {
			return Le.lastIndex = t, Le.exec(e)[1] ?? "";
		};
	} else ke = function(e, t) {
		for (var n = [];;) {
			var r = Ne(e, t);
			if (r === void 0 || Ve(r) || He(r)) break;
			n.push(r), t += r >= 65536 ? 2 : 1;
		}
		return je.apply(void 0, n);
	};
	var Re = function() {
		function e(e, t) {
			t === void 0 && (t = {}), this.message = e, this.position = {
				offset: 0,
				line: 1,
				column: 1
			}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
		}
		return e.prototype.parse = function() {
			if (this.offset() !== 0) throw Error("parser can only be used once");
			return this.parseMessage(0, "", !1);
		}, e.prototype.parseMessage = function(e, t, n) {
			for (var r = []; !this.isEOF();) {
				var i = this.char();
				if (i === 123) {
					if ((a = this.parseArgument(e, n)).err) return a;
					r.push(a.val);
				} else {
					if (i === 125 && e > 0) break;
					if (i !== 35 || t !== "plural" && t !== "selectordinal") {
						if (i === 60 && !this.ignoreTag && this.peek() === 47) {
							if (n) break;
							return this.error(H.UNMATCHED_CLOSING_TAG, J(this.clonePosition(), this.clonePosition()));
						}
						if (i === 60 && !this.ignoreTag && ze(this.peek() || 0)) {
							if ((a = this.parseTag(e, t)).err) return a;
							r.push(a.val);
						} else {
							var a;
							if ((a = this.parseLiteral(e, t)).err) return a;
							r.push(a.val);
						}
					} else {
						var o = this.clonePosition();
						this.bump(), r.push({
							type: U.pound,
							location: J(o, this.clonePosition())
						});
					}
				}
			}
			return {
				val: r,
				err: null
			};
		}, e.prototype.parseTag = function(e, t) {
			var n = this.clonePosition();
			this.bump();
			var r = this.parseTagName();
			if (this.bumpSpace(), this.bumpIf("/>")) return {
				val: {
					type: U.literal,
					value: `<${r}/>`,
					location: J(n, this.clonePosition())
				},
				err: null
			};
			if (this.bumpIf(">")) {
				var i = this.parseMessage(e + 1, t, !0);
				if (i.err) return i;
				var a = i.val, o = this.clonePosition();
				if (this.bumpIf("</")) {
					if (this.isEOF() || !ze(this.char())) return this.error(H.INVALID_TAG, J(o, this.clonePosition()));
					var s = this.clonePosition();
					return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
						val: {
							type: U.tag,
							value: r,
							children: a,
							location: J(n, this.clonePosition())
						},
						err: null
					} : this.error(H.INVALID_TAG, J(o, this.clonePosition()))) : this.error(H.UNMATCHED_CLOSING_TAG, J(s, this.clonePosition()));
				}
				return this.error(H.UNCLOSED_TAG, J(n, this.clonePosition()));
			}
			return this.error(H.INVALID_TAG, J(n, this.clonePosition()));
		}, e.prototype.parseTagName = function() {
			var e = this.offset();
			for (this.bump(); !this.isEOF() && Be(this.char());) this.bump();
			return this.message.slice(e, this.offset());
		}, e.prototype.parseLiteral = function(e, t) {
			for (var n = this.clonePosition(), r = "";;) {
				var i = this.tryParseQuote(t);
				if (i) r += i;
				else {
					var a = this.tryParseUnquoted(e, t);
					if (a) r += a;
					else {
						var o = this.tryParseLeftAngleBracket();
						if (!o) break;
						r += o;
					}
				}
			}
			var s = J(n, this.clonePosition());
			return {
				val: {
					type: U.literal,
					value: r,
					location: s
				},
				err: null
			};
		}, e.prototype.tryParseLeftAngleBracket = function() {
			return this.isEOF() || this.char() !== 60 || !this.ignoreTag && (ze(e = this.peek() || 0) || e === 47) ? null : (this.bump(), "<");
			var e;
		}, e.prototype.tryParseQuote = function(e) {
			if (this.isEOF() || this.char() !== 39) return null;
			switch (this.peek()) {
				case 39: return this.bump(), this.bump(), "'";
				case 123:
				case 60:
				case 62:
				case 125: break;
				case 35:
					if (e === "plural" || e === "selectordinal") break;
					return null;
				default: return null;
			}
			this.bump();
			var t = [this.char()];
			for (this.bump(); !this.isEOF();) {
				var n = this.char();
				if (n === 39) {
					if (this.peek() !== 39) {
						this.bump();
						break;
					}
					t.push(39), this.bump();
				} else t.push(n);
				this.bump();
			}
			return je.apply(void 0, t);
		}, e.prototype.tryParseUnquoted = function(e, t) {
			if (this.isEOF()) return null;
			var n = this.char();
			return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), je(n));
		}, e.prototype.parseArgument = function(e, t) {
			var n = this.clonePosition();
			if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition()));
			if (this.char() === 125) return this.bump(), this.error(H.EMPTY_ARGUMENT, J(n, this.clonePosition()));
			var r = this.parseIdentifierIfPossible().value;
			if (!r) return this.error(H.MALFORMED_ARGUMENT, J(n, this.clonePosition()));
			if (this.bumpSpace(), this.isEOF()) return this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition()));
			switch (this.char()) {
				case 125: return this.bump(), {
					val: {
						type: U.argument,
						value: r,
						location: J(n, this.clonePosition())
					},
					err: null
				};
				case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
				default: return this.error(H.MALFORMED_ARGUMENT, J(n, this.clonePosition()));
			}
		}, e.prototype.parseIdentifierIfPossible = function() {
			var e = this.clonePosition(), t = this.offset(), n = ke(this.message, t), r = t + n.length;
			return this.bumpTo(r), {
				value: n,
				location: J(e, this.clonePosition())
			};
		}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
			var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
			switch (a) {
				case "": return this.error(H.EXPECT_ARGUMENT_TYPE, J(i, o));
				case "number":
				case "date":
				case "time":
					this.bumpSpace();
					var s = null;
					if (this.bumpIf(",")) {
						this.bumpSpace();
						var c = this.clonePosition();
						if ((_ = this.parseSimpleArgStyleIfPossible()).err) return _;
						if ((f = Fe(_.val)).length === 0) return this.error(H.EXPECT_ARGUMENT_STYLE, J(this.clonePosition(), this.clonePosition()));
						s = {
							style: f,
							styleLocation: J(c, this.clonePosition())
						};
					}
					if ((v = this.tryParseArgumentClose(r)).err) return v;
					var l = J(r, this.clonePosition());
					if (s && Ae(s?.style, "::", 0)) {
						var u = Pe(s.style.slice(2));
						if (a === "number") return (_ = this.parseNumberSkeletonFromString(u, s.styleLocation)).err ? _ : {
							val: {
								type: U.number,
								value: n,
								location: l,
								style: _.val
							},
							err: null
						};
						if (u.length === 0) return this.error(H.EXPECT_DATE_TIME_SKELETON, l);
						var d = u;
						this.locale && (d = function(e, t) {
							for (var n = "", r = 0; r < e.length; r++) {
								var i = e.charAt(r);
								if (i === "j") {
									for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
									var o = 1 + (1 & a), s = a < 2 ? 1 : 3 + (a >> 1), c = be(t);
									for (c != "H" && c != "k" || (s = 0); s-- > 0;) n += "a";
									for (; o-- > 0;) n = c + n;
								} else n += i === "J" ? "H" : i;
							}
							return n;
						}(u, this.locale));
						var f = {
							type: W.dateTime,
							pattern: d,
							location: s.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? ce(d) : {}
						};
						return {
							val: {
								type: a === "date" ? U.date : U.time,
								value: n,
								location: l,
								style: f
							},
							err: null
						};
					}
					return {
						val: {
							type: a === "number" ? U.number : a === "date" ? U.date : U.time,
							value: n,
							location: l,
							style: s?.style ?? null
						},
						err: null
					};
				case "plural":
				case "selectordinal":
				case "select":
					var p = this.clonePosition();
					if (this.bumpSpace(), !this.bumpIf(",")) return this.error(H.EXPECT_SELECT_ARGUMENT_OPTIONS, J(p, m({}, p)));
					this.bumpSpace();
					var h = this.parseIdentifierIfPossible(), g = 0;
					if (a !== "select" && h.value === "offset") {
						if (!this.bumpIf(":")) return this.error(H.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, J(this.clonePosition(), this.clonePosition()));
						var _;
						if (this.bumpSpace(), (_ = this.tryParseDecimalInteger(H.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, H.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return _;
						this.bumpSpace(), h = this.parseIdentifierIfPossible(), g = _.val;
					}
					var v, y = this.tryParsePluralOrSelectOptions(e, a, t, h);
					if (y.err) return y;
					if ((v = this.tryParseArgumentClose(r)).err) return v;
					var b = J(r, this.clonePosition());
					return a === "select" ? {
						val: {
							type: U.select,
							value: n,
							options: Me(y.val),
							location: b
						},
						err: null
					} : {
						val: {
							type: U.plural,
							value: n,
							options: Me(y.val),
							offset: g,
							pluralType: a === "plural" ? "cardinal" : "ordinal",
							location: b
						},
						err: null
					};
				default: return this.error(H.INVALID_ARGUMENT_TYPE, J(i, o));
			}
		}, e.prototype.tryParseArgumentClose = function(e) {
			return this.isEOF() || this.char() !== 125 ? this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, J(e, this.clonePosition())) : (this.bump(), {
				val: !0,
				err: null
			});
		}, e.prototype.parseSimpleArgStyleIfPossible = function() {
			for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
				case 39:
					this.bump();
					var n = this.clonePosition();
					if (!this.bumpUntil("'")) return this.error(H.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, J(n, this.clonePosition()));
					this.bump();
					break;
				case 123:
					e += 1, this.bump();
					break;
				case 125:
					if (!(e > 0)) return {
						val: this.message.slice(t.offset, this.offset()),
						err: null
					};
					--e;
					break;
				default: this.bump();
			}
			return {
				val: this.message.slice(t.offset, this.offset()),
				err: null
			};
		}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
			var n = [];
			try {
				n = function(e) {
					if (e.length === 0) throw Error("Number skeleton cannot be empty");
					for (var t = e.split(le).filter(function(e) {
						return e.length > 0;
					}), n = [], r = 0, i = t; r < i.length; r++) {
						var a = i[r].split("/");
						if (a.length === 0) throw Error("Invalid number skeleton");
						for (var o = a[0], s = a.slice(1), c = 0, l = s; c < l.length; c++) if (l[c].length === 0) throw Error("Invalid number skeleton");
						n.push({
							stem: o,
							options: s
						});
					}
					return n;
				}(e);
			} catch {
				return this.error(H.INVALID_NUMBER_SKELETON, t);
			}
			return {
				val: {
					type: W.number,
					tokens: n,
					location: t,
					parsedOptions: this.shouldParseSkeletons ? K(n) : {}
				},
				err: null
			};
		}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
			for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
				if (c.length === 0) {
					var u = this.clonePosition();
					if (t === "select" || !this.bumpIf("=")) break;
					var d = this.tryParseDecimalInteger(H.EXPECT_PLURAL_ARGUMENT_SELECTOR, H.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = J(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				}
				if (s.has(c)) return this.error(t === "select" ? H.DUPLICATE_SELECT_ARGUMENT_SELECTOR : H.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
				c === "other" && (a = !0), this.bumpSpace();
				var f = this.clonePosition();
				if (!this.bumpIf("{")) return this.error(t === "select" ? H.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : H.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, J(this.clonePosition(), this.clonePosition()));
				var p = this.parseMessage(e + 1, t, n);
				if (p.err) return p;
				var m = this.tryParseArgumentClose(f);
				if (m.err) return m;
				o.push([c, {
					value: p.val,
					location: J(f, this.clonePosition())
				}]), s.add(c), this.bumpSpace(), c = (i = this.parseIdentifierIfPossible()).value, l = i.location;
			}
			return o.length === 0 ? this.error(t === "select" ? H.EXPECT_SELECT_ARGUMENT_SELECTOR : H.EXPECT_PLURAL_ARGUMENT_SELECTOR, J(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(H.MISSING_OTHER_CLAUSE, J(this.clonePosition(), this.clonePosition())) : {
				val: o,
				err: null
			};
		}, e.prototype.tryParseDecimalInteger = function(e, t) {
			var n = 1, r = this.clonePosition();
			this.bumpIf("+") || this.bumpIf("-") && (n = -1);
			for (var i = !1, a = 0; !this.isEOF();) {
				var o = this.char();
				if (!(o >= 48 && o <= 57)) break;
				i = !0, a = 10 * a + (o - 48), this.bump();
			}
			var s = J(r, this.clonePosition());
			return i ? De(a *= n) ? {
				val: a,
				err: null
			} : this.error(t, s) : this.error(e, s);
		}, e.prototype.offset = function() {
			return this.position.offset;
		}, e.prototype.isEOF = function() {
			return this.offset() === this.message.length;
		}, e.prototype.clonePosition = function() {
			return {
				offset: this.position.offset,
				line: this.position.line,
				column: this.position.column
			};
		}, e.prototype.char = function() {
			var e = this.position.offset;
			if (e >= this.message.length) throw Error("out of bound");
			var t = Ne(this.message, e);
			if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
			return t;
		}, e.prototype.error = function(e, t) {
			return {
				val: null,
				err: {
					kind: e,
					message: this.message,
					location: t
				}
			};
		}, e.prototype.bump = function() {
			if (!this.isEOF()) {
				var e = this.char();
				e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
			}
		}, e.prototype.bumpIf = function(e) {
			if (Ae(this.message, e, this.offset())) {
				for (var t = 0; t < e.length; t++) this.bump();
				return !0;
			}
			return !1;
		}, e.prototype.bumpUntil = function(e) {
			var t = this.offset(), n = this.message.indexOf(e, t);
			return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
		}, e.prototype.bumpTo = function(e) {
			if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
			for (e = Math.min(e, this.message.length);;) {
				var t = this.offset();
				if (t === e) break;
				if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
				if (this.bump(), this.isEOF()) break;
			}
		}, e.prototype.bumpSpace = function() {
			for (; !this.isEOF() && Ve(this.char());) this.bump();
		}, e.prototype.peek = function() {
			if (this.isEOF()) return null;
			var e = this.char(), t = this.offset();
			return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
		}, e;
	}();
	function ze(e) {
		return e >= 97 && e <= 122 || e >= 65 && e <= 90;
	}
	function Be(e) {
		return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
	}
	function Ve(e) {
		return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
	}
	function He(e) {
		return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
	}
	function Ue(e) {
		e.forEach(function(e) {
			if (delete e.location, function(e) {
				return e.type === U.select;
			}(e) || function(e) {
				return e.type === U.plural;
			}(e)) for (var t in e.options) delete e.options[t].location, Ue(e.options[t].value);
			else (function(e) {
				return e.type === U.number;
			})(e) && function(e) {
				return !(!e || typeof e != "object" || e.type !== W.number);
			}(e.style) ? delete e.style.location : !function(e) {
				return e.type === U.date;
			}(e) && !function(e) {
				return e.type === U.time;
			}(e) || !function(e) {
				return !(!e || typeof e != "object" || e.type !== W.dateTime);
			}(e.style) ? function(e) {
				return e.type === U.tag;
			}(e) && Ue(e.children) : delete e.style.location;
		});
	}
	var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
	function Ge(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
	}
	function Ke(e) {
		if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
		var t = e.default;
		if (typeof t == "function") {
			var n = function e() {
				var n = !1;
				try {
					n = this instanceof e;
				} catch {}
				return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
			};
			n.prototype = t.prototype;
		} else n = {};
		return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
			var r = Object.getOwnPropertyDescriptor(e, t);
			Object.defineProperty(n, t, r.get ? r : {
				enumerable: !0,
				get: function() {
					return e[t];
				}
			});
		}), n;
	}
	var qe, Je = {};
	function Ye() {
		if (qe) return Je;
		var e, t;
		return qe = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.SKELETON_TYPE = Je.TYPE = void 0, Je.isLiteralElement = function(t) {
			return t.type === e.literal;
		}, Je.isArgumentElement = function(t) {
			return t.type === e.argument;
		}, Je.isNumberElement = function(t) {
			return t.type === e.number;
		}, Je.isDateElement = function(t) {
			return t.type === e.date;
		}, Je.isTimeElement = function(t) {
			return t.type === e.time;
		}, Je.isSelectElement = function(t) {
			return t.type === e.select;
		}, Je.isPluralElement = function(t) {
			return t.type === e.plural;
		}, Je.isPoundElement = function(t) {
			return t.type === e.pound;
		}, Je.isTagElement = function(t) {
			return t.type === e.tag;
		}, Je.isNumberSkeleton = function(e) {
			return !(!e || typeof e != "object" || e.type !== t.number);
		}, Je.isDateTimeSkeleton = function(e) {
			return !(!e || typeof e != "object" || e.type !== t.dateTime);
		}, Je.createLiteralElement = function(t) {
			return {
				type: e.literal,
				value: t
			};
		}, Je.createNumberElement = function(t, n) {
			return {
				type: e.number,
				value: t,
				style: n
			};
		}, function(e) {
			e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
		}(e || (Je.TYPE = e = {})), function(e) {
			e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
		}(t || (Je.SKELETON_TYPE = t = {})), Je;
	}
	var Xe, Ze = Ye(), Qe = {}, $e = Ke(oe), et, tt, nt = function() {
		if (Xe) return Qe;
		Xe = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.printAST = n, Qe.doPrintAST = r, Qe.printDateTimeSkeleton = o;
		var e = $e, t = Ye();
		function n(e) {
			return r(e, !1);
		}
		function r(s, c) {
			return s.map(function(l, u) {
				return (0, t.isLiteralElement)(l) ? function(e, t, n, r) {
					var a = e.value;
					return n || a[0] !== "'" || (a = `''${a.slice(1)}`), r || a[a.length - 1] !== "'" || (a = `${a.slice(0, a.length - 1)}''`), a = i(a), t ? a.replace("#", "'#'") : a;
				}(l, c, u === 0, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
					return `{${e.value}}`;
				}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
					return `{${e.value}, ${t.TYPE[e.type]}${e.style ? `, ${n = e.style, typeof n == "string" ? i(n) : n.type === t.SKELETON_TYPE.dateTime ? `::${o(n)}` : `::${n.tokens.map(a).join(" ")}`}` : ""}}`;
					var n;
				}(l) : (0, t.isPluralElement)(l) ? function(t) {
					var n = t.pluralType === "cardinal" ? "plural" : "selectordinal";
					return `{${[
						t.value,
						n,
						e.__spreadArray([t.offset ? `offset:${t.offset}` : ""], Object.keys(t.options).map(function(e) {
							return `${e}{${r(t.options[e].value, !0)}}`;
						}), !0).filter(Boolean).join(" ")
					].join(",")}}`;
				}(l) : (0, t.isSelectElement)(l) ? function(e) {
					return `{${[
						e.value,
						"select",
						Object.keys(e.options).map(function(t) {
							return `${t}{${r(e.options[t].value, !1)}}`;
						}).join(" ")
					].join(",")}}`;
				}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
					return `<${e.value}>${n(e.children)}</${e.value}>`;
				}(l) : void 0;
			}).join("");
		}
		function i(e) {
			return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
		}
		function a(e) {
			var t = e.stem, n = e.options;
			return n.length === 0 ? t : `${t}${n.map(function(e) {
				return `/${e}`;
			}).join("")}`;
		}
		function o(e) {
			return e.pattern;
		}
		return Qe;
	}(), rt = Ge((tt || (tt = 1, et = function(e, t) {
		t ||= {}, typeof t == "function" && (t = { cmp: t });
		var n = typeof t.cycles == "boolean" && t.cycles, r = t.cmp && function(e) {
			return function(t) {
				return function(n, r) {
					return e({
						key: n,
						value: t[n]
					}, {
						key: r,
						value: t[r]
					});
				};
			};
		}(t.cmp), i = [];
		return function e(t) {
			if (t && t.toJSON && typeof t.toJSON == "function" && (t = t.toJSON()), t !== void 0) {
				if (typeof t == "number") return isFinite(t) ? "" + t : "null";
				if (typeof t != "object") return JSON.stringify(t);
				var a, o;
				if (Array.isArray(t)) {
					for (o = "[", a = 0; a < t.length; a++) a && (o += ","), o += e(t[a]) || "null";
					return o + "]";
				}
				if (t === null) return "null";
				if (i.indexOf(t) !== -1) {
					if (n) return JSON.stringify("__cycle__");
					throw TypeError("Converting circular structure to JSON");
				}
				var s = i.push(t) - 1, c = Object.keys(t).sort(r && r(t));
				for (o = "", a = 0; a < c.length; a++) {
					var l = c[a], u = e(t[l]);
					u && (o && (o += ","), o += JSON.stringify(l) + ":" + u);
				}
				return i.splice(s, 1), "{" + o + "}";
			}
		}(e);
	}), et)), it = { exports: {} }, at, X = { exports: {} }, ot = Ke(Object.freeze({
		__proto__: null,
		default: {}
	}));
	function Z() {
		return at || (at = 1, X.exports = (e ||= function(e, t) {
			var n;
			if (typeof window < "u" && window.crypto && (n = window.crypto), typeof self < "u" && self.crypto && (n = self.crypto), typeof globalThis < "u" && globalThis.crypto && (n = globalThis.crypto), !n && typeof window < "u" && window.msCrypto && (n = window.msCrypto), !n && We !== void 0 && We.crypto && (n = We.crypto), !n) try {
				n = ot;
			} catch {}
			var r = function() {
				if (n) {
					if (typeof n.getRandomValues == "function") try {
						return n.getRandomValues(new Uint32Array(1))[0];
					} catch {}
					if (typeof n.randomBytes == "function") try {
						return n.randomBytes(4).readInt32LE();
					} catch {}
				}
				throw Error("Native crypto module could not be used to get secure random number.");
			}, i = Object.create || function() {
				function e() {}
				return function(t) {
					var n;
					return e.prototype = t, n = new e(), e.prototype = null, n;
				};
			}(), a = {}, o = a.lib = {}, s = o.Base = {
				extend: function(e) {
					var t = i(this);
					return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
						t.$super.init.apply(this, arguments);
					}), t.init.prototype = t, t.$super = this, t;
				},
				create: function() {
					var e = this.extend();
					return e.init.apply(e, arguments), e;
				},
				init: function() {},
				mixIn: function(e) {
					for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
					e.hasOwnProperty("toString") && (this.toString = e.toString);
				},
				clone: function() {
					return this.init.prototype.extend(this);
				}
			}, c = o.WordArray = s.extend({
				init: function(e, n) {
					e = this.words = e || [], this.sigBytes = n == t ? 4 * e.length : n;
				},
				toString: function(e) {
					return (e || u).stringify(this);
				},
				concat: function(e) {
					var t = this.words, n = e.words, r = this.sigBytes, i = e.sigBytes;
					if (this.clamp(), r % 4) for (var a = 0; a < i; a++) {
						var o = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
						t[r + a >>> 2] |= o << 24 - (r + a) % 4 * 8;
					}
					else for (var s = 0; s < i; s += 4) t[r + s >>> 2] = n[s >>> 2];
					return this.sigBytes += i, this;
				},
				clamp: function() {
					var t = this.words, n = this.sigBytes;
					t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
				},
				clone: function() {
					var e = s.clone.call(this);
					return e.words = this.words.slice(0), e;
				},
				random: function(e) {
					for (var t = [], n = 0; n < e; n += 4) t.push(r());
					return new c.init(t, e);
				}
			}), l = a.enc = {}, u = l.Hex = {
				stringify: function(e) {
					for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
						var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
						r.push((a >>> 4).toString(16)), r.push((15 & a).toString(16));
					}
					return r.join("");
				},
				parse: function(e) {
					for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
					return new c.init(n, t / 2);
				}
			}, d = l.Latin1 = {
				stringify: function(e) {
					for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
						var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
						r.push(String.fromCharCode(a));
					}
					return r.join("");
				},
				parse: function(e) {
					for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
					return new c.init(n, t);
				}
			}, f = l.Utf8 = {
				stringify: function(e) {
					try {
						return decodeURIComponent(escape(d.stringify(e)));
					} catch {
						throw Error("Malformed UTF-8 data");
					}
				},
				parse: function(e) {
					return d.parse(unescape(encodeURIComponent(e)));
				}
			}, p = o.BufferedBlockAlgorithm = s.extend({
				reset: function() {
					this._data = new c.init(), this._nDataBytes = 0;
				},
				_append: function(e) {
					typeof e == "string" && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
				},
				_process: function(t) {
					var n, r = this._data, i = r.words, a = r.sigBytes, o = this.blockSize, s = a / (4 * o), l = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * o, u = e.min(4 * l, a);
					if (l) {
						for (var d = 0; d < l; d += o) this._doProcessBlock(i, d);
						n = i.splice(0, l), r.sigBytes -= u;
					}
					return new c.init(n, u);
				},
				clone: function() {
					var e = s.clone.call(this);
					return e._data = this._data.clone(), e;
				},
				_minBufferSize: 0
			});
			o.Hasher = p.extend({
				cfg: s.extend(),
				init: function(e) {
					this.cfg = this.cfg.extend(e), this.reset();
				},
				reset: function() {
					p.reset.call(this), this._doReset();
				},
				update: function(e) {
					return this._append(e), this._process(), this;
				},
				finalize: function(e) {
					return e && this._append(e), this._doFinalize();
				},
				blockSize: 16,
				_createHelper: function(e) {
					return function(t, n) {
						return new e.init(n).finalize(t);
					};
				},
				_createHmacHelper: function(e) {
					return function(t, n) {
						return new m.HMAC.init(e, n).finalize(t);
					};
				}
			});
			var m = a.algo = {};
			return a;
		}(Math), e)), X.exports;
		var e;
	}
	var st, ct = { exports: {} };
	function lt() {
		return st || (st = 1, ct.exports = (e = Z(), function(t) {
			var n = e, r = n.lib, i = r.Base, a = r.WordArray, o = n.x64 = {};
			o.Word = i.extend({ init: function(e, t) {
				this.high = e, this.low = t;
			} }), o.WordArray = i.extend({
				init: function(e, n) {
					e = this.words = e || [], this.sigBytes = n == t ? 8 * e.length : n;
				},
				toX32: function() {
					for (var e = this.words, t = e.length, n = [], r = 0; r < t; r++) {
						var i = e[r];
						n.push(i.high), n.push(i.low);
					}
					return a.create(n, this.sigBytes);
				},
				clone: function() {
					for (var e = i.clone.call(this), t = e.words = this.words.slice(0), n = t.length, r = 0; r < n; r++) t[r] = t[r].clone();
					return e;
				}
			});
		}(), e)), ct.exports;
		var e;
	}
	var ut, dt = { exports: {} };
	function ft() {
		return ut || (ut = 1, dt.exports = (e = Z(), function() {
			if (typeof ArrayBuffer == "function") {
				var t = e.lib.WordArray, n = t.init, r = t.init = function(e) {
					if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || typeof Uint8ClampedArray < "u" && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
						for (var t = e.byteLength, r = [], i = 0; i < t; i++) r[i >>> 2] |= e[i] << 24 - i % 4 * 8;
						n.call(this, r, t);
					} else n.apply(this, arguments);
				};
				r.prototype = t;
			}
		}(), e.lib.WordArray)), dt.exports;
		var e;
	}
	var pt, mt = { exports: {} };
	function ht() {
		return pt || (pt = 1, mt.exports = (e = Z(), function() {
			var t = e, n = t.lib.WordArray, r = t.enc;
			function i(e) {
				return e << 8 & 4278255360 | e >>> 8 & 16711935;
			}
			r.Utf16 = r.Utf16BE = {
				stringify: function(e) {
					for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i += 2) {
						var a = t[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
						r.push(String.fromCharCode(a));
					}
					return r.join("");
				},
				parse: function(e) {
					for (var t = e.length, r = [], i = 0; i < t; i++) r[i >>> 1] |= e.charCodeAt(i) << 16 - i % 2 * 16;
					return n.create(r, 2 * t);
				}
			}, r.Utf16LE = {
				stringify: function(e) {
					for (var t = e.words, n = e.sigBytes, r = [], a = 0; a < n; a += 2) {
						var o = i(t[a >>> 2] >>> 16 - a % 4 * 8 & 65535);
						r.push(String.fromCharCode(o));
					}
					return r.join("");
				},
				parse: function(e) {
					for (var t = e.length, r = [], a = 0; a < t; a++) r[a >>> 1] |= i(e.charCodeAt(a) << 16 - a % 2 * 16);
					return n.create(r, 2 * t);
				}
			};
		}(), e.enc.Utf16)), mt.exports;
		var e;
	}
	var gt, _t = { exports: {} };
	function vt() {
		return gt || (gt = 1, _t.exports = (e = Z(), function() {
			var t = e, n = t.lib.WordArray;
			function r(e, t, r) {
				for (var i = [], a = 0, o = 0; o < t; o++) if (o % 4) {
					var s = r[e.charCodeAt(o - 1)] << o % 4 * 2 | r[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
					i[a >>> 2] |= s << 24 - a % 4 * 8, a++;
				}
				return n.create(i, a);
			}
			t.enc.Base64 = {
				stringify: function(e) {
					var t = e.words, n = e.sigBytes, r = this._map;
					e.clamp();
					for (var i = [], a = 0; a < n; a += 3) for (var o = (t[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (t[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | t[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, s = 0; s < 4 && a + .75 * s < n; s++) i.push(r.charAt(o >>> 6 * (3 - s) & 63));
					var c = r.charAt(64);
					if (c) for (; i.length % 4;) i.push(c);
					return i.join("");
				},
				parse: function(e) {
					var t = e.length, n = this._map, i = this._reverseMap;
					if (!i) {
						i = this._reverseMap = [];
						for (var a = 0; a < n.length; a++) i[n.charCodeAt(a)] = a;
					}
					var o = n.charAt(64);
					if (o) {
						var s = e.indexOf(o);
						s !== -1 && (t = s);
					}
					return r(e, t, i);
				},
				_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
			};
		}(), e.enc.Base64)), _t.exports;
		var e;
	}
	var yt, bt = { exports: {} };
	function xt() {
		return yt || (yt = 1, bt.exports = (e = Z(), function() {
			var t = e, n = t.lib.WordArray;
			function r(e, t, r) {
				for (var i = [], a = 0, o = 0; o < t; o++) if (o % 4) {
					var s = r[e.charCodeAt(o - 1)] << o % 4 * 2 | r[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
					i[a >>> 2] |= s << 24 - a % 4 * 8, a++;
				}
				return n.create(i, a);
			}
			t.enc.Base64url = {
				stringify: function(e, t) {
					t === void 0 && (t = !0);
					var n = e.words, r = e.sigBytes, i = t ? this._safe_map : this._map;
					e.clamp();
					for (var a = [], o = 0; o < r; o += 3) for (var s = (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (n[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | n[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, c = 0; c < 4 && o + .75 * c < r; c++) a.push(i.charAt(s >>> 6 * (3 - c) & 63));
					var l = i.charAt(64);
					if (l) for (; a.length % 4;) a.push(l);
					return a.join("");
				},
				parse: function(e, t) {
					t === void 0 && (t = !0);
					var n = e.length, i = t ? this._safe_map : this._map, a = this._reverseMap;
					if (!a) {
						a = this._reverseMap = [];
						for (var o = 0; o < i.length; o++) a[i.charCodeAt(o)] = o;
					}
					var s = i.charAt(64);
					if (s) {
						var c = e.indexOf(s);
						c !== -1 && (n = c);
					}
					return r(e, n, a);
				},
				_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				_safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
			};
		}(), e.enc.Base64url)), bt.exports;
		var e;
	}
	var St, Ct = { exports: {} };
	function wt() {
		return St || (St = 1, Ct.exports = (e = Z(), function(t) {
			var n = e, r = n.lib, i = r.WordArray, a = r.Hasher, o = n.algo, s = [];
			(function() {
				for (var e = 0; e < 64; e++) s[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0;
			})();
			var c = o.MD5 = a.extend({
				_doReset: function() {
					this._hash = new i.init([
						1732584193,
						4023233417,
						2562383102,
						271733878
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var n = 0; n < 16; n++) {
						var r = t + n, i = e[r];
						e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
					}
					var a = this._hash.words, o = e[t + 0], c = e[t + 1], p = e[t + 2], m = e[t + 3], h = e[t + 4], g = e[t + 5], _ = e[t + 6], v = e[t + 7], y = e[t + 8], b = e[t + 9], x = e[t + 10], S = e[t + 11], C = e[t + 12], w = e[t + 13], T = e[t + 14], E = e[t + 15], D = a[0], O = a[1], k = a[2], A = a[3];
					D = l(D, O, k, A, o, 7, s[0]), A = l(A, D, O, k, c, 12, s[1]), k = l(k, A, D, O, p, 17, s[2]), O = l(O, k, A, D, m, 22, s[3]), D = l(D, O, k, A, h, 7, s[4]), A = l(A, D, O, k, g, 12, s[5]), k = l(k, A, D, O, _, 17, s[6]), O = l(O, k, A, D, v, 22, s[7]), D = l(D, O, k, A, y, 7, s[8]), A = l(A, D, O, k, b, 12, s[9]), k = l(k, A, D, O, x, 17, s[10]), O = l(O, k, A, D, S, 22, s[11]), D = l(D, O, k, A, C, 7, s[12]), A = l(A, D, O, k, w, 12, s[13]), k = l(k, A, D, O, T, 17, s[14]), D = u(D, O = l(O, k, A, D, E, 22, s[15]), k, A, c, 5, s[16]), A = u(A, D, O, k, _, 9, s[17]), k = u(k, A, D, O, S, 14, s[18]), O = u(O, k, A, D, o, 20, s[19]), D = u(D, O, k, A, g, 5, s[20]), A = u(A, D, O, k, x, 9, s[21]), k = u(k, A, D, O, E, 14, s[22]), O = u(O, k, A, D, h, 20, s[23]), D = u(D, O, k, A, b, 5, s[24]), A = u(A, D, O, k, T, 9, s[25]), k = u(k, A, D, O, m, 14, s[26]), O = u(O, k, A, D, y, 20, s[27]), D = u(D, O, k, A, w, 5, s[28]), A = u(A, D, O, k, p, 9, s[29]), k = u(k, A, D, O, v, 14, s[30]), D = d(D, O = u(O, k, A, D, C, 20, s[31]), k, A, g, 4, s[32]), A = d(A, D, O, k, y, 11, s[33]), k = d(k, A, D, O, S, 16, s[34]), O = d(O, k, A, D, T, 23, s[35]), D = d(D, O, k, A, c, 4, s[36]), A = d(A, D, O, k, h, 11, s[37]), k = d(k, A, D, O, v, 16, s[38]), O = d(O, k, A, D, x, 23, s[39]), D = d(D, O, k, A, w, 4, s[40]), A = d(A, D, O, k, o, 11, s[41]), k = d(k, A, D, O, m, 16, s[42]), O = d(O, k, A, D, _, 23, s[43]), D = d(D, O, k, A, b, 4, s[44]), A = d(A, D, O, k, C, 11, s[45]), k = d(k, A, D, O, E, 16, s[46]), D = f(D, O = d(O, k, A, D, p, 23, s[47]), k, A, o, 6, s[48]), A = f(A, D, O, k, v, 10, s[49]), k = f(k, A, D, O, T, 15, s[50]), O = f(O, k, A, D, g, 21, s[51]), D = f(D, O, k, A, C, 6, s[52]), A = f(A, D, O, k, m, 10, s[53]), k = f(k, A, D, O, x, 15, s[54]), O = f(O, k, A, D, c, 21, s[55]), D = f(D, O, k, A, y, 6, s[56]), A = f(A, D, O, k, E, 10, s[57]), k = f(k, A, D, O, _, 15, s[58]), O = f(O, k, A, D, w, 21, s[59]), D = f(D, O, k, A, h, 6, s[60]), A = f(A, D, O, k, S, 10, s[61]), k = f(k, A, D, O, p, 15, s[62]), O = f(O, k, A, D, b, 21, s[63]), a[0] = a[0] + D | 0, a[1] = a[1] + O | 0, a[2] = a[2] + k | 0, a[3] = a[3] + A | 0;
				},
				_doFinalize: function() {
					var e = this._data, n = e.words, r = 8 * this._nDataBytes, i = 8 * e.sigBytes;
					n[i >>> 5] |= 128 << 24 - i % 32;
					var a = t.floor(r / 4294967296), o = r;
					n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), e.sigBytes = 4 * (n.length + 1), this._process();
					for (var s = this._hash, c = s.words, l = 0; l < 4; l++) {
						var u = c[l];
						c[l] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
					}
					return s;
				},
				clone: function() {
					var e = a.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			function l(e, t, n, r, i, a, o) {
				var s = e + (t & n | ~t & r) + i + o;
				return (s << a | s >>> 32 - a) + t;
			}
			function u(e, t, n, r, i, a, o) {
				var s = e + (t & r | n & ~r) + i + o;
				return (s << a | s >>> 32 - a) + t;
			}
			function d(e, t, n, r, i, a, o) {
				var s = e + (t ^ n ^ r) + i + o;
				return (s << a | s >>> 32 - a) + t;
			}
			function f(e, t, n, r, i, a, o) {
				var s = e + (n ^ (t | ~r)) + i + o;
				return (s << a | s >>> 32 - a) + t;
			}
			n.MD5 = a._createHelper(c), n.HmacMD5 = a._createHmacHelper(c);
		}(Math), e.MD5)), Ct.exports;
		var e;
	}
	var Tt, Et = { exports: {} };
	function Dt() {
		return Tt || (Tt = 1, Et.exports = (e = Z(), function() {
			var t = e, n = t.lib, r = n.WordArray, i = n.Hasher, a = t.algo, o = [], s = a.SHA1 = i.extend({
				_doReset: function() {
					this._hash = new r.init([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], s = n[3], c = n[4], l = 0; l < 80; l++) {
						if (l < 16) o[l] = 0 | e[t + l];
						else {
							var u = o[l - 3] ^ o[l - 8] ^ o[l - 14] ^ o[l - 16];
							o[l] = u << 1 | u >>> 31;
						}
						var d = (r << 5 | r >>> 27) + c + o[l];
						d += l < 20 ? 1518500249 + (i & a | ~i & s) : l < 40 ? 1859775393 + (i ^ a ^ s) : l < 60 ? (i & a | i & s | a & s) - 1894007588 : (i ^ a ^ s) - 899497514, c = s, s = a, a = i << 30 | i >>> 2, i = r, r = d;
					}
					n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, n[4] = n[4] + c | 0;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
					return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
				},
				clone: function() {
					var e = i.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			t.SHA1 = i._createHelper(s), t.HmacSHA1 = i._createHmacHelper(s);
		}(), e.SHA1)), Et.exports;
		var e;
	}
	var Ot, kt = { exports: {} };
	function At() {
		return Ot || (Ot = 1, kt.exports = (e = Z(), function(t) {
			var n = e, r = n.lib, i = r.WordArray, a = r.Hasher, o = n.algo, s = [], c = [];
			(function() {
				function e(e) {
					for (var n = t.sqrt(e), r = 2; r <= n; r++) if (!(e % r)) return !1;
					return !0;
				}
				function n(e) {
					return 4294967296 * (e - (0 | e)) | 0;
				}
				for (var r = 2, i = 0; i < 64;) e(r) && (i < 8 && (s[i] = n(t.pow(r, .5))), c[i] = n(t.pow(r, 1 / 3)), i++), r++;
			})();
			var l = [], u = o.SHA256 = a.extend({
				_doReset: function() {
					this._hash = new i.init(s.slice(0));
				},
				_doProcessBlock: function(e, t) {
					for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], u = n[5], d = n[6], f = n[7], p = 0; p < 64; p++) {
						if (p < 16) l[p] = 0 | e[t + p];
						else {
							var m = l[p - 15], h = (m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3, g = l[p - 2], _ = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
							l[p] = h + l[p - 7] + _ + l[p - 16];
						}
						var v = r & i ^ r & a ^ i & a, y = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22), b = f + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & u ^ ~s & d) + c[p] + l[p];
						f = d, d = u, u = s, s = o + b | 0, o = a, a = i, i = r, r = b + (y + v) | 0;
					}
					n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + a | 0, n[3] = n[3] + o | 0, n[4] = n[4] + s | 0, n[5] = n[5] + u | 0, n[6] = n[6] + d | 0, n[7] = n[7] + f | 0;
				},
				_doFinalize: function() {
					var e = this._data, n = e.words, r = 8 * this._nDataBytes, i = 8 * e.sigBytes;
					return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = t.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * n.length, this._process(), this._hash;
				},
				clone: function() {
					var e = a.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			n.SHA256 = a._createHelper(u), n.HmacSHA256 = a._createHmacHelper(u);
		}(Math), e.SHA256)), kt.exports;
		var e;
	}
	var jt, Mt = { exports: {} }, Nt, Pt = { exports: {} };
	function Ft() {
		return Nt || (Nt = 1, Pt.exports = (e = Z(), lt(), function() {
			var t = e, n = t.lib.Hasher, r = t.x64, i = r.Word, a = r.WordArray, o = t.algo;
			function s() {
				return i.create.apply(i, arguments);
			}
			var c = [
				s(1116352408, 3609767458),
				s(1899447441, 602891725),
				s(3049323471, 3964484399),
				s(3921009573, 2173295548),
				s(961987163, 4081628472),
				s(1508970993, 3053834265),
				s(2453635748, 2937671579),
				s(2870763221, 3664609560),
				s(3624381080, 2734883394),
				s(310598401, 1164996542),
				s(607225278, 1323610764),
				s(1426881987, 3590304994),
				s(1925078388, 4068182383),
				s(2162078206, 991336113),
				s(2614888103, 633803317),
				s(3248222580, 3479774868),
				s(3835390401, 2666613458),
				s(4022224774, 944711139),
				s(264347078, 2341262773),
				s(604807628, 2007800933),
				s(770255983, 1495990901),
				s(1249150122, 1856431235),
				s(1555081692, 3175218132),
				s(1996064986, 2198950837),
				s(2554220882, 3999719339),
				s(2821834349, 766784016),
				s(2952996808, 2566594879),
				s(3210313671, 3203337956),
				s(3336571891, 1034457026),
				s(3584528711, 2466948901),
				s(113926993, 3758326383),
				s(338241895, 168717936),
				s(666307205, 1188179964),
				s(773529912, 1546045734),
				s(1294757372, 1522805485),
				s(1396182291, 2643833823),
				s(1695183700, 2343527390),
				s(1986661051, 1014477480),
				s(2177026350, 1206759142),
				s(2456956037, 344077627),
				s(2730485921, 1290863460),
				s(2820302411, 3158454273),
				s(3259730800, 3505952657),
				s(3345764771, 106217008),
				s(3516065817, 3606008344),
				s(3600352804, 1432725776),
				s(4094571909, 1467031594),
				s(275423344, 851169720),
				s(430227734, 3100823752),
				s(506948616, 1363258195),
				s(659060556, 3750685593),
				s(883997877, 3785050280),
				s(958139571, 3318307427),
				s(1322822218, 3812723403),
				s(1537002063, 2003034995),
				s(1747873779, 3602036899),
				s(1955562222, 1575990012),
				s(2024104815, 1125592928),
				s(2227730452, 2716904306),
				s(2361852424, 442776044),
				s(2428436474, 593698344),
				s(2756734187, 3733110249),
				s(3204031479, 2999351573),
				s(3329325298, 3815920427),
				s(3391569614, 3928383900),
				s(3515267271, 566280711),
				s(3940187606, 3454069534),
				s(4118630271, 4000239992),
				s(116418474, 1914138554),
				s(174292421, 2731055270),
				s(289380356, 3203993006),
				s(460393269, 320620315),
				s(685471733, 587496836),
				s(852142971, 1086792851),
				s(1017036298, 365543100),
				s(1126000580, 2618297676),
				s(1288033470, 3409855158),
				s(1501505948, 4234509866),
				s(1607167915, 987167468),
				s(1816402316, 1246189591)
			], l = [];
			(function() {
				for (var e = 0; e < 80; e++) l[e] = s();
			})();
			var u = o.SHA512 = n.extend({
				_doReset: function() {
					this._hash = new a.init([
						new i.init(1779033703, 4089235720),
						new i.init(3144134277, 2227873595),
						new i.init(1013904242, 4271175723),
						new i.init(2773480762, 1595750129),
						new i.init(1359893119, 2917565137),
						new i.init(2600822924, 725511199),
						new i.init(528734635, 4215389547),
						new i.init(1541459225, 327033209)
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], u = n[5], d = n[6], f = n[7], p = r.high, m = r.low, h = i.high, g = i.low, _ = a.high, v = a.low, y = o.high, b = o.low, x = s.high, S = s.low, C = u.high, w = u.low, T = d.high, E = d.low, D = f.high, O = f.low, k = p, A = m, j = h, M = g, N = _, P = v, F = y, I = b, L = x, R = S, ee = C, te = w, ne = T, re = E, ie = D, ae = O, z = 0; z < 80; z++) {
						var B, V, H = l[z];
						if (z < 16) V = H.high = 0 | e[t + 2 * z], B = H.low = 0 | e[t + 2 * z + 1];
						else {
							var U = l[z - 15], W = U.high, oe = U.low, G = (W >>> 1 | oe << 31) ^ (W >>> 8 | oe << 24) ^ W >>> 7, se = (oe >>> 1 | W << 31) ^ (oe >>> 8 | W << 24) ^ (oe >>> 7 | W << 25), ce = l[z - 2], le = ce.high, ue = ce.low, de = (le >>> 19 | ue << 13) ^ (le << 3 | ue >>> 29) ^ le >>> 6, fe = (ue >>> 19 | le << 13) ^ (ue << 3 | le >>> 29) ^ (ue >>> 6 | le << 26), pe = l[z - 7], me = pe.high, he = pe.low, ge = l[z - 16], _e = ge.high, ve = ge.low;
							V = (V = (V = G + me + +((B = se + he) >>> 0 < se >>> 0)) + de + +((B += fe) >>> 0 < fe >>> 0)) + _e + +((B += ve) >>> 0 < ve >>> 0), H.high = V, H.low = B;
						}
						var K, ye = L & ee ^ ~L & ne, be = R & te ^ ~R & re, xe = k & j ^ k & N ^ j & N, q = A & M ^ A & P ^ M & P, J = (k >>> 28 | A << 4) ^ (k << 30 | A >>> 2) ^ (k << 25 | A >>> 7), Y = (A >>> 28 | k << 4) ^ (A << 30 | k >>> 2) ^ (A << 25 | k >>> 7), Se = (L >>> 14 | R << 18) ^ (L >>> 18 | R << 14) ^ (L << 23 | R >>> 9), Ce = (R >>> 14 | L << 18) ^ (R >>> 18 | L << 14) ^ (R << 23 | L >>> 9), we = c[z], Te = we.high, Ee = we.low, De = ie + Se + +((K = ae + Ce) >>> 0 < ae >>> 0), Oe = Y + q;
						ie = ne, ae = re, ne = ee, re = te, ee = L, te = R, L = F + (De = (De = (De = De + ye + +((K += be) >>> 0 < be >>> 0)) + Te + +((K += Ee) >>> 0 < Ee >>> 0)) + V + +((K += B) >>> 0 < B >>> 0)) + +((R = I + K | 0) >>> 0 < I >>> 0) | 0, F = N, I = P, N = j, P = M, j = k, M = A, k = De + (J + xe + +(Oe >>> 0 < Y >>> 0)) + +((A = K + Oe | 0) >>> 0 < K >>> 0) | 0;
					}
					m = r.low = m + A, r.high = p + k + +(m >>> 0 < A >>> 0), g = i.low = g + M, i.high = h + j + +(g >>> 0 < M >>> 0), v = a.low = v + P, a.high = _ + N + +(v >>> 0 < P >>> 0), b = o.low = b + I, o.high = y + F + +(b >>> 0 < I >>> 0), S = s.low = S + R, s.high = x + L + +(S >>> 0 < R >>> 0), w = u.low = w + te, u.high = C + ee + +(w >>> 0 < te >>> 0), E = d.low = E + re, d.high = T + ne + +(E >>> 0 < re >>> 0), O = f.low = O + ae, f.high = D + ie + +(O >>> 0 < ae >>> 0);
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
					return t[r >>> 5] |= 128 << 24 - r % 32, t[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296), t[31 + (r + 128 >>> 10 << 5)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash.toX32();
				},
				clone: function() {
					var e = n.clone.call(this);
					return e._hash = this._hash.clone(), e;
				},
				blockSize: 32
			});
			t.SHA512 = n._createHelper(u), t.HmacSHA512 = n._createHmacHelper(u);
		}(), e.SHA512)), Pt.exports;
		var e;
	}
	var It, Lt = { exports: {} }, Rt, zt = { exports: {} };
	function Bt() {
		return Rt || (Rt = 1, zt.exports = (e = Z(), lt(), function(t) {
			var n = e, r = n.lib, i = r.WordArray, a = r.Hasher, o = n.x64.Word, s = n.algo, c = [], l = [], u = [];
			(function() {
				for (var e = 1, t = 0, n = 0; n < 24; n++) {
					c[e + 5 * t] = (n + 1) * (n + 2) / 2 % 64;
					var r = (2 * e + 3 * t) % 5;
					e = t % 5, t = r;
				}
				for (e = 0; e < 5; e++) for (t = 0; t < 5; t++) l[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
				for (var i = 1, a = 0; a < 24; a++) {
					for (var s = 0, d = 0, f = 0; f < 7; f++) {
						if (1 & i) {
							var p = (1 << f) - 1;
							p < 32 ? d ^= 1 << p : s ^= 1 << p - 32;
						}
						128 & i ? i = i << 1 ^ 113 : i <<= 1;
					}
					u[a] = o.create(s, d);
				}
			})();
			var d = [];
			(function() {
				for (var e = 0; e < 25; e++) d[e] = o.create();
			})();
			var f = s.SHA3 = a.extend({
				cfg: a.cfg.extend({ outputLength: 512 }),
				_doReset: function() {
					for (var e = this._state = [], t = 0; t < 25; t++) e[t] = new o.init();
					this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
				},
				_doProcessBlock: function(e, t) {
					for (var n = this._state, r = this.blockSize / 2, i = 0; i < r; i++) {
						var a = e[t + 2 * i], o = e[t + 2 * i + 1];
						a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), (O = n[i]).high ^= o, O.low ^= a;
					}
					for (var s = 0; s < 24; s++) {
						for (var f = 0; f < 5; f++) {
							for (var p = 0, m = 0, h = 0; h < 5; h++) p ^= (O = n[f + 5 * h]).high, m ^= O.low;
							var g = d[f];
							g.high = p, g.low = m;
						}
						for (f = 0; f < 5; f++) {
							var _ = d[(f + 4) % 5], v = d[(f + 1) % 5], y = v.high, b = v.low;
							for (p = _.high ^ (y << 1 | b >>> 31), m = _.low ^ (b << 1 | y >>> 31), h = 0; h < 5; h++) (O = n[f + 5 * h]).high ^= p, O.low ^= m;
						}
						for (var x = 1; x < 25; x++) {
							var S = (O = n[x]).high, C = O.low, w = c[x];
							w < 32 ? (p = S << w | C >>> 32 - w, m = C << w | S >>> 32 - w) : (p = C << w - 32 | S >>> 64 - w, m = S << w - 32 | C >>> 64 - w);
							var T = d[l[x]];
							T.high = p, T.low = m;
						}
						var E = d[0], D = n[0];
						for (E.high = D.high, E.low = D.low, f = 0; f < 5; f++) for (h = 0; h < 5; h++) {
							var O = n[x = f + 5 * h], k = d[x], A = d[(f + 1) % 5 + 5 * h], j = d[(f + 2) % 5 + 5 * h];
							O.high = k.high ^ ~A.high & j.high, O.low = k.low ^ ~A.low & j.low;
						}
						O = n[0];
						var M = u[s];
						O.high ^= M.high, O.low ^= M.low;
					}
				},
				_doFinalize: function() {
					var e = this._data, n = e.words;
					this._nDataBytes;
					var r = 8 * e.sigBytes, a = 32 * this.blockSize;
					n[r >>> 5] |= 1 << 24 - r % 32, n[(t.ceil((r + 1) / a) * a >>> 5) - 1] |= 128, e.sigBytes = 4 * n.length, this._process();
					for (var o = this._state, s = this.cfg.outputLength / 8, c = s / 8, l = [], u = 0; u < c; u++) {
						var d = o[u], f = d.high, p = d.low;
						f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), p = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8), l.push(p), l.push(f);
					}
					return new i.init(l, s);
				},
				clone: function() {
					for (var e = a.clone.call(this), t = e._state = this._state.slice(0), n = 0; n < 25; n++) t[n] = t[n].clone();
					return e;
				}
			});
			n.SHA3 = a._createHelper(f), n.HmacSHA3 = a._createHmacHelper(f);
		}(Math), e.SHA3)), zt.exports;
		var e;
	}
	var Vt, Ht = { exports: {} }, Ut, Wt = { exports: {} };
	function Gt() {
		return Ut || (Ut = 1, Wt.exports = (e = Z(), void function() {
			var t = e, n = t.lib.Base, r = t.enc.Utf8;
			t.algo.HMAC = n.extend({
				init: function(e, t) {
					e = this._hasher = new e.init(), typeof t == "string" && (t = r.parse(t));
					var n = e.blockSize, i = 4 * n;
					t.sigBytes > i && (t = e.finalize(t)), t.clamp();
					for (var a = this._oKey = t.clone(), o = this._iKey = t.clone(), s = a.words, c = o.words, l = 0; l < n; l++) s[l] ^= 1549556828, c[l] ^= 909522486;
					a.sigBytes = o.sigBytes = i, this.reset();
				},
				reset: function() {
					var e = this._hasher;
					e.reset(), e.update(this._iKey);
				},
				update: function(e) {
					return this._hasher.update(e), this;
				},
				finalize: function(e) {
					var t = this._hasher, n = t.finalize(e);
					return t.reset(), t.finalize(this._oKey.clone().concat(n));
				}
			});
		}())), Wt.exports;
		var e;
	}
	var Kt, qt = { exports: {} }, Jt, Yt = { exports: {} };
	function Xt() {
		return Jt || (Jt = 1, Yt.exports = (e = Z(), Dt(), Gt(), function() {
			var t = e, n = t.lib, r = n.Base, i = n.WordArray, a = t.algo, o = a.MD5, s = a.EvpKDF = r.extend({
				cfg: r.extend({
					keySize: 4,
					hasher: o,
					iterations: 1
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e);
				},
				compute: function(e, t) {
					for (var n, r = this.cfg, a = r.hasher.create(), o = i.create(), s = o.words, c = r.keySize, l = r.iterations; s.length < c;) {
						n && a.update(n), n = a.update(e).finalize(t), a.reset();
						for (var u = 1; u < l; u++) n = a.finalize(n), a.reset();
						o.concat(n);
					}
					return o.sigBytes = 4 * c, o;
				}
			});
			t.EvpKDF = function(e, t, n) {
				return s.create(n).compute(e, t);
			};
		}(), e.EvpKDF)), Yt.exports;
		var e;
	}
	var Zt, Qt = { exports: {} };
	function $t() {
		return Zt || (Zt = 1, Qt.exports = (e = Z(), Xt(), void (e.lib.Cipher || function(t) {
			var n = e, r = n.lib, i = r.Base, a = r.WordArray, o = r.BufferedBlockAlgorithm, s = n.enc;
			s.Utf8;
			var c = s.Base64, l = n.algo.EvpKDF, u = r.Cipher = o.extend({
				cfg: i.extend(),
				createEncryptor: function(e, t) {
					return this.create(this._ENC_XFORM_MODE, e, t);
				},
				createDecryptor: function(e, t) {
					return this.create(this._DEC_XFORM_MODE, e, t);
				},
				init: function(e, t, n) {
					this.cfg = this.cfg.extend(n), this._xformMode = e, this._key = t, this.reset();
				},
				reset: function() {
					o.reset.call(this), this._doReset();
				},
				process: function(e) {
					return this._append(e), this._process();
				},
				finalize: function(e) {
					return e && this._append(e), this._doFinalize();
				},
				keySize: 4,
				ivSize: 4,
				_ENC_XFORM_MODE: 1,
				_DEC_XFORM_MODE: 2,
				_createHelper: function() {
					function e(e) {
						return typeof e == "string" ? y : _;
					}
					return function(t) {
						return {
							encrypt: function(n, r, i) {
								return e(r).encrypt(t, n, r, i);
							},
							decrypt: function(n, r, i) {
								return e(r).decrypt(t, n, r, i);
							}
						};
					};
				}()
			});
			r.StreamCipher = u.extend({
				_doFinalize: function() {
					return this._process(!0);
				},
				blockSize: 1
			});
			var d = n.mode = {}, f = r.BlockCipherMode = i.extend({
				createEncryptor: function(e, t) {
					return this.Encryptor.create(e, t);
				},
				createDecryptor: function(e, t) {
					return this.Decryptor.create(e, t);
				},
				init: function(e, t) {
					this._cipher = e, this._iv = t;
				}
			}), p = d.CBC = function() {
				var e = f.extend();
				function n(e, n, r) {
					var i, a = this._iv;
					a ? (i = a, this._iv = t) : i = this._prevBlock;
					for (var o = 0; o < r; o++) e[n + o] ^= i[o];
				}
				return e.Encryptor = e.extend({ processBlock: function(e, t) {
					var r = this._cipher, i = r.blockSize;
					n.call(this, e, t, i), r.encryptBlock(e, t), this._prevBlock = e.slice(t, t + i);
				} }), e.Decryptor = e.extend({ processBlock: function(e, t) {
					var r = this._cipher, i = r.blockSize, a = e.slice(t, t + i);
					r.decryptBlock(e, t), n.call(this, e, t, i), this._prevBlock = a;
				} }), e;
			}(), m = (n.pad = {}).Pkcs7 = {
				pad: function(e, t) {
					for (var n = 4 * t, r = n - e.sigBytes % n, i = r << 24 | r << 16 | r << 8 | r, o = [], s = 0; s < r; s += 4) o.push(i);
					var c = a.create(o, r);
					e.concat(c);
				},
				unpad: function(e) {
					var t = 255 & e.words[e.sigBytes - 1 >>> 2];
					e.sigBytes -= t;
				}
			};
			r.BlockCipher = u.extend({
				cfg: u.cfg.extend({
					mode: p,
					padding: m
				}),
				reset: function() {
					var e;
					u.reset.call(this);
					var t = this.cfg, n = t.iv, r = t.mode;
					this._xformMode == this._ENC_XFORM_MODE ? e = r.createEncryptor : (e = r.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == e ? this._mode.init(this, n && n.words) : (this._mode = e.call(r, this, n && n.words), this._mode.__creator = e);
				},
				_doProcessBlock: function(e, t) {
					this._mode.processBlock(e, t);
				},
				_doFinalize: function() {
					var e, t = this.cfg.padding;
					return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize), e = this._process(!0)) : (e = this._process(!0), t.unpad(e)), e;
				},
				blockSize: 4
			});
			var h = r.CipherParams = i.extend({
				init: function(e) {
					this.mixIn(e);
				},
				toString: function(e) {
					return (e || this.formatter).stringify(this);
				}
			}), g = (n.format = {}).OpenSSL = {
				stringify: function(e) {
					var t = e.ciphertext, n = e.salt;
					return (n ? a.create([1398893684, 1701076831]).concat(n).concat(t) : t).toString(c);
				},
				parse: function(e) {
					var t, n = c.parse(e), r = n.words;
					return r[0] == 1398893684 && r[1] == 1701076831 && (t = a.create(r.slice(2, 4)), r.splice(0, 4), n.sigBytes -= 16), h.create({
						ciphertext: n,
						salt: t
					});
				}
			}, _ = r.SerializableCipher = i.extend({
				cfg: i.extend({ format: g }),
				encrypt: function(e, t, n, r) {
					r = this.cfg.extend(r);
					var i = e.createEncryptor(n, r), a = i.finalize(t), o = i.cfg;
					return h.create({
						ciphertext: a,
						key: n,
						iv: o.iv,
						algorithm: e,
						mode: o.mode,
						padding: o.padding,
						blockSize: e.blockSize,
						formatter: r.format
					});
				},
				decrypt: function(e, t, n, r) {
					return r = this.cfg.extend(r), t = this._parse(t, r.format), e.createDecryptor(n, r).finalize(t.ciphertext);
				},
				_parse: function(e, t) {
					return typeof e == "string" ? t.parse(e, this) : e;
				}
			}), v = (n.kdf = {}).OpenSSL = { execute: function(e, t, n, r, i) {
				if (r ||= a.random(8), i) o = l.create({
					keySize: t + n,
					hasher: i
				}).compute(e, r);
				else var o = l.create({ keySize: t + n }).compute(e, r);
				var s = a.create(o.words.slice(t), 4 * n);
				return o.sigBytes = 4 * t, h.create({
					key: o,
					iv: s,
					salt: r
				});
			} }, y = r.PasswordBasedCipher = _.extend({
				cfg: _.cfg.extend({ kdf: v }),
				encrypt: function(e, t, n, r) {
					var i = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize, r.salt, r.hasher);
					r.iv = i.iv;
					var a = _.encrypt.call(this, e, t, i.key, r);
					return a.mixIn(i), a;
				},
				decrypt: function(e, t, n, r) {
					r = this.cfg.extend(r), t = this._parse(t, r.format);
					var i = r.kdf.execute(n, e.keySize, e.ivSize, t.salt, r.hasher);
					return r.iv = i.iv, _.decrypt.call(this, e, t, i.key, r);
				}
			});
		}()))), Qt.exports;
		var e;
	}
	var en, tn = { exports: {} };
	function nn() {
		return en || (en = 1, tn.exports = (e = Z(), $t(), e.mode.CFB = function() {
			var t = e.lib.BlockCipherMode.extend();
			function n(e, t, n, r) {
				var i, a = this._iv;
				a ? (i = a.slice(0), this._iv = void 0) : i = this._prevBlock, r.encryptBlock(i, 0);
				for (var o = 0; o < n; o++) e[t + o] ^= i[o];
			}
			return t.Encryptor = t.extend({ processBlock: function(e, t) {
				var r = this._cipher, i = r.blockSize;
				n.call(this, e, t, i, r), this._prevBlock = e.slice(t, t + i);
			} }), t.Decryptor = t.extend({ processBlock: function(e, t) {
				var r = this._cipher, i = r.blockSize, a = e.slice(t, t + i);
				n.call(this, e, t, i, r), this._prevBlock = a;
			} }), t;
		}(), e.mode.CFB)), tn.exports;
		var e;
	}
	var rn, an = { exports: {} };
	function on() {
		return rn || (rn = 1, an.exports = (n = Z(), $t(), n.mode.CTR = (e = n.lib.BlockCipherMode.extend(), t = e.Encryptor = e.extend({ processBlock: function(e, t) {
			var n = this._cipher, r = n.blockSize, i = this._iv, a = this._counter;
			i && (a = this._counter = i.slice(0), this._iv = void 0);
			var o = a.slice(0);
			n.encryptBlock(o, 0), a[r - 1] = a[r - 1] + 1 | 0;
			for (var s = 0; s < r; s++) e[t + s] ^= o[s];
		} }), e.Decryptor = t, e), n.mode.CTR)), an.exports;
		var e, t, n;
	}
	var sn, cn = { exports: {} };
	function ln() {
		return sn || (sn = 1, cn.exports = (e = Z(), $t(), e.mode.CTRGladman = function() {
			var t = e.lib.BlockCipherMode.extend();
			function n(e) {
				if (255 & ~(e >> 24)) e += 1 << 24;
				else {
					var t = e >> 16 & 255, n = e >> 8 & 255, r = 255 & e;
					t === 255 ? (t = 0, n === 255 ? (n = 0, r === 255 ? r = 0 : ++r) : ++n) : ++t, e = 0, e += t << 16, e += n << 8, e += r;
				}
				return e;
			}
			function r(e) {
				return (e[0] = n(e[0])) === 0 && (e[1] = n(e[1])), e;
			}
			return t.Decryptor = t.Encryptor = t.extend({ processBlock: function(e, t) {
				var n = this._cipher, i = n.blockSize, a = this._iv, o = this._counter;
				a && (o = this._counter = a.slice(0), this._iv = void 0), r(o);
				var s = o.slice(0);
				n.encryptBlock(s, 0);
				for (var c = 0; c < i; c++) e[t + c] ^= s[c];
			} }), t;
		}(), e.mode.CTRGladman)), cn.exports;
		var e;
	}
	var un, dn = { exports: {} };
	function fn() {
		return un || (un = 1, dn.exports = (n = Z(), $t(), n.mode.OFB = (e = n.lib.BlockCipherMode.extend(), t = e.Encryptor = e.extend({ processBlock: function(e, t) {
			var n = this._cipher, r = n.blockSize, i = this._iv, a = this._keystream;
			i && (a = this._keystream = i.slice(0), this._iv = void 0), n.encryptBlock(a, 0);
			for (var o = 0; o < r; o++) e[t + o] ^= a[o];
		} }), e.Decryptor = t, e), n.mode.OFB)), dn.exports;
		var e, t, n;
	}
	var pn, mn = { exports: {} }, hn, gn = { exports: {} }, _n, vn = { exports: {} }, yn, bn = { exports: {} }, xn, Sn = { exports: {} }, Cn, Q = { exports: {} }, wn, Tn = { exports: {} }, En, Dn = { exports: {} }, On, kn = { exports: {} };
	function An() {
		return On || (On = 1, kn.exports = (e = Z(), vt(), wt(), Xt(), $t(), function() {
			var t = e, n = t.lib, r = n.WordArray, i = n.BlockCipher, a = t.algo, o = [
				57,
				49,
				41,
				33,
				25,
				17,
				9,
				1,
				58,
				50,
				42,
				34,
				26,
				18,
				10,
				2,
				59,
				51,
				43,
				35,
				27,
				19,
				11,
				3,
				60,
				52,
				44,
				36,
				63,
				55,
				47,
				39,
				31,
				23,
				15,
				7,
				62,
				54,
				46,
				38,
				30,
				22,
				14,
				6,
				61,
				53,
				45,
				37,
				29,
				21,
				13,
				5,
				28,
				20,
				12,
				4
			], s = [
				14,
				17,
				11,
				24,
				1,
				5,
				3,
				28,
				15,
				6,
				21,
				10,
				23,
				19,
				12,
				4,
				26,
				8,
				16,
				7,
				27,
				20,
				13,
				2,
				41,
				52,
				31,
				37,
				47,
				55,
				30,
				40,
				51,
				45,
				33,
				48,
				44,
				49,
				39,
				56,
				34,
				53,
				46,
				42,
				50,
				36,
				29,
				32
			], c = [
				1,
				2,
				4,
				6,
				8,
				10,
				12,
				14,
				15,
				17,
				19,
				21,
				23,
				25,
				27,
				28
			], l = [
				{
					0: 8421888,
					268435456: 32768,
					536870912: 8421378,
					805306368: 2,
					1073741824: 512,
					1342177280: 8421890,
					1610612736: 8389122,
					1879048192: 8388608,
					2147483648: 514,
					2415919104: 8389120,
					2684354560: 33280,
					2952790016: 8421376,
					3221225472: 32770,
					3489660928: 8388610,
					3758096384: 0,
					4026531840: 33282,
					134217728: 0,
					402653184: 8421890,
					671088640: 33282,
					939524096: 32768,
					1207959552: 8421888,
					1476395008: 512,
					1744830464: 8421378,
					2013265920: 2,
					2281701376: 8389120,
					2550136832: 33280,
					2818572288: 8421376,
					3087007744: 8389122,
					3355443200: 8388610,
					3623878656: 32770,
					3892314112: 514,
					4160749568: 8388608,
					1: 32768,
					268435457: 2,
					536870913: 8421888,
					805306369: 8388608,
					1073741825: 8421378,
					1342177281: 33280,
					1610612737: 512,
					1879048193: 8389122,
					2147483649: 8421890,
					2415919105: 8421376,
					2684354561: 8388610,
					2952790017: 33282,
					3221225473: 514,
					3489660929: 8389120,
					3758096385: 32770,
					4026531841: 0,
					134217729: 8421890,
					402653185: 8421376,
					671088641: 8388608,
					939524097: 512,
					1207959553: 32768,
					1476395009: 8388610,
					1744830465: 2,
					2013265921: 33282,
					2281701377: 32770,
					2550136833: 8389122,
					2818572289: 514,
					3087007745: 8421888,
					3355443201: 8389120,
					3623878657: 0,
					3892314113: 33280,
					4160749569: 8421378
				},
				{
					0: 1074282512,
					16777216: 16384,
					33554432: 524288,
					50331648: 1074266128,
					67108864: 1073741840,
					83886080: 1074282496,
					100663296: 1073758208,
					117440512: 16,
					134217728: 540672,
					150994944: 1073758224,
					167772160: 1073741824,
					184549376: 540688,
					201326592: 524304,
					218103808: 0,
					234881024: 16400,
					251658240: 1074266112,
					8388608: 1073758208,
					25165824: 540688,
					41943040: 16,
					58720256: 1073758224,
					75497472: 1074282512,
					92274688: 1073741824,
					109051904: 524288,
					125829120: 1074266128,
					142606336: 524304,
					159383552: 0,
					176160768: 16384,
					192937984: 1074266112,
					209715200: 1073741840,
					226492416: 540672,
					243269632: 1074282496,
					260046848: 16400,
					268435456: 0,
					285212672: 1074266128,
					301989888: 1073758224,
					318767104: 1074282496,
					335544320: 1074266112,
					352321536: 16,
					369098752: 540688,
					385875968: 16384,
					402653184: 16400,
					419430400: 524288,
					436207616: 524304,
					452984832: 1073741840,
					469762048: 540672,
					486539264: 1073758208,
					503316480: 1073741824,
					520093696: 1074282512,
					276824064: 540688,
					293601280: 524288,
					310378496: 1074266112,
					327155712: 16384,
					343932928: 1073758208,
					360710144: 1074282512,
					377487360: 16,
					394264576: 1073741824,
					411041792: 1074282496,
					427819008: 1073741840,
					444596224: 1073758224,
					461373440: 524304,
					478150656: 0,
					494927872: 16400,
					511705088: 1074266128,
					528482304: 540672
				},
				{
					0: 260,
					1048576: 0,
					2097152: 67109120,
					3145728: 65796,
					4194304: 65540,
					5242880: 67108868,
					6291456: 67174660,
					7340032: 67174400,
					8388608: 67108864,
					9437184: 67174656,
					10485760: 65792,
					11534336: 67174404,
					12582912: 67109124,
					13631488: 65536,
					14680064: 4,
					15728640: 256,
					524288: 67174656,
					1572864: 67174404,
					2621440: 0,
					3670016: 67109120,
					4718592: 67108868,
					5767168: 65536,
					6815744: 65540,
					7864320: 260,
					8912896: 4,
					9961472: 256,
					11010048: 67174400,
					12058624: 65796,
					13107200: 65792,
					14155776: 67109124,
					15204352: 67174660,
					16252928: 67108864,
					16777216: 67174656,
					17825792: 65540,
					18874368: 65536,
					19922944: 67109120,
					20971520: 256,
					22020096: 67174660,
					23068672: 67108868,
					24117248: 0,
					25165824: 67109124,
					26214400: 67108864,
					27262976: 4,
					28311552: 65792,
					29360128: 67174400,
					30408704: 260,
					31457280: 65796,
					32505856: 67174404,
					17301504: 67108864,
					18350080: 260,
					19398656: 67174656,
					20447232: 0,
					21495808: 65540,
					22544384: 67109120,
					23592960: 256,
					24641536: 67174404,
					25690112: 65536,
					26738688: 67174660,
					27787264: 65796,
					28835840: 67108868,
					29884416: 67109124,
					30932992: 67174400,
					31981568: 4,
					33030144: 65792
				},
				{
					0: 2151682048,
					65536: 2147487808,
					131072: 4198464,
					196608: 2151677952,
					262144: 0,
					327680: 4198400,
					393216: 2147483712,
					458752: 4194368,
					524288: 2147483648,
					589824: 4194304,
					655360: 64,
					720896: 2147487744,
					786432: 2151678016,
					851968: 4160,
					917504: 4096,
					983040: 2151682112,
					32768: 2147487808,
					98304: 64,
					163840: 2151678016,
					229376: 2147487744,
					294912: 4198400,
					360448: 2151682112,
					425984: 0,
					491520: 2151677952,
					557056: 4096,
					622592: 2151682048,
					688128: 4194304,
					753664: 4160,
					819200: 2147483648,
					884736: 4194368,
					950272: 4198464,
					1015808: 2147483712,
					1048576: 4194368,
					1114112: 4198400,
					1179648: 2147483712,
					1245184: 0,
					1310720: 4160,
					1376256: 2151678016,
					1441792: 2151682048,
					1507328: 2147487808,
					1572864: 2151682112,
					1638400: 2147483648,
					1703936: 2151677952,
					1769472: 4198464,
					1835008: 2147487744,
					1900544: 4194304,
					1966080: 64,
					2031616: 4096,
					1081344: 2151677952,
					1146880: 2151682112,
					1212416: 0,
					1277952: 4198400,
					1343488: 4194368,
					1409024: 2147483648,
					1474560: 2147487808,
					1540096: 64,
					1605632: 2147483712,
					1671168: 4096,
					1736704: 2147487744,
					1802240: 2151678016,
					1867776: 4160,
					1933312: 2151682048,
					1998848: 4194304,
					2064384: 4198464
				},
				{
					0: 128,
					4096: 17039360,
					8192: 262144,
					12288: 536870912,
					16384: 537133184,
					20480: 16777344,
					24576: 553648256,
					28672: 262272,
					32768: 16777216,
					36864: 537133056,
					40960: 536871040,
					45056: 553910400,
					49152: 553910272,
					53248: 0,
					57344: 17039488,
					61440: 553648128,
					2048: 17039488,
					6144: 553648256,
					10240: 128,
					14336: 17039360,
					18432: 262144,
					22528: 537133184,
					26624: 553910272,
					30720: 536870912,
					34816: 537133056,
					38912: 0,
					43008: 553910400,
					47104: 16777344,
					51200: 536871040,
					55296: 553648128,
					59392: 16777216,
					63488: 262272,
					65536: 262144,
					69632: 128,
					73728: 536870912,
					77824: 553648256,
					81920: 16777344,
					86016: 553910272,
					90112: 537133184,
					94208: 16777216,
					98304: 553910400,
					102400: 553648128,
					106496: 17039360,
					110592: 537133056,
					114688: 262272,
					118784: 536871040,
					122880: 0,
					126976: 17039488,
					67584: 553648256,
					71680: 16777216,
					75776: 17039360,
					79872: 537133184,
					83968: 536870912,
					88064: 17039488,
					92160: 128,
					96256: 553910272,
					100352: 262272,
					104448: 553910400,
					108544: 0,
					112640: 553648128,
					116736: 16777344,
					120832: 262144,
					124928: 537133056,
					129024: 536871040
				},
				{
					0: 268435464,
					256: 8192,
					512: 270532608,
					768: 270540808,
					1024: 268443648,
					1280: 2097152,
					1536: 2097160,
					1792: 268435456,
					2048: 0,
					2304: 268443656,
					2560: 2105344,
					2816: 8,
					3072: 270532616,
					3328: 2105352,
					3584: 8200,
					3840: 270540800,
					128: 270532608,
					384: 270540808,
					640: 8,
					896: 2097152,
					1152: 2105352,
					1408: 268435464,
					1664: 268443648,
					1920: 8200,
					2176: 2097160,
					2432: 8192,
					2688: 268443656,
					2944: 270532616,
					3200: 0,
					3456: 270540800,
					3712: 2105344,
					3968: 268435456,
					4096: 268443648,
					4352: 270532616,
					4608: 270540808,
					4864: 8200,
					5120: 2097152,
					5376: 268435456,
					5632: 268435464,
					5888: 2105344,
					6144: 2105352,
					6400: 0,
					6656: 8,
					6912: 270532608,
					7168: 8192,
					7424: 268443656,
					7680: 270540800,
					7936: 2097160,
					4224: 8,
					4480: 2105344,
					4736: 2097152,
					4992: 268435464,
					5248: 268443648,
					5504: 8200,
					5760: 270540808,
					6016: 270532608,
					6272: 270540800,
					6528: 270532616,
					6784: 8192,
					7040: 2105352,
					7296: 2097160,
					7552: 0,
					7808: 268435456,
					8064: 268443656
				},
				{
					0: 1048576,
					16: 33555457,
					32: 1024,
					48: 1049601,
					64: 34604033,
					80: 0,
					96: 1,
					112: 34603009,
					128: 33555456,
					144: 1048577,
					160: 33554433,
					176: 34604032,
					192: 34603008,
					208: 1025,
					224: 1049600,
					240: 33554432,
					8: 34603009,
					24: 0,
					40: 33555457,
					56: 34604032,
					72: 1048576,
					88: 33554433,
					104: 33554432,
					120: 1025,
					136: 1049601,
					152: 33555456,
					168: 34603008,
					184: 1048577,
					200: 1024,
					216: 34604033,
					232: 1,
					248: 1049600,
					256: 33554432,
					272: 1048576,
					288: 33555457,
					304: 34603009,
					320: 1048577,
					336: 33555456,
					352: 34604032,
					368: 1049601,
					384: 1025,
					400: 34604033,
					416: 1049600,
					432: 1,
					448: 0,
					464: 34603008,
					480: 33554433,
					496: 1024,
					264: 1049600,
					280: 33555457,
					296: 34603009,
					312: 1,
					328: 33554432,
					344: 1048576,
					360: 1025,
					376: 34604032,
					392: 33554433,
					408: 34603008,
					424: 0,
					440: 34604033,
					456: 1049601,
					472: 1024,
					488: 33555456,
					504: 1048577
				},
				{
					0: 134219808,
					1: 131072,
					2: 134217728,
					3: 32,
					4: 131104,
					5: 134350880,
					6: 134350848,
					7: 2048,
					8: 134348800,
					9: 134219776,
					10: 133120,
					11: 134348832,
					12: 2080,
					13: 0,
					14: 134217760,
					15: 133152,
					2147483648: 2048,
					2147483649: 134350880,
					2147483650: 134219808,
					2147483651: 134217728,
					2147483652: 134348800,
					2147483653: 133120,
					2147483654: 133152,
					2147483655: 32,
					2147483656: 134217760,
					2147483657: 2080,
					2147483658: 131104,
					2147483659: 134350848,
					2147483660: 0,
					2147483661: 134348832,
					2147483662: 134219776,
					2147483663: 131072,
					16: 133152,
					17: 134350848,
					18: 32,
					19: 2048,
					20: 134219776,
					21: 134217760,
					22: 134348832,
					23: 131072,
					24: 0,
					25: 131104,
					26: 134348800,
					27: 134219808,
					28: 134350880,
					29: 133120,
					30: 2080,
					31: 134217728,
					2147483664: 131072,
					2147483665: 2048,
					2147483666: 134348832,
					2147483667: 133152,
					2147483668: 32,
					2147483669: 134348800,
					2147483670: 134217728,
					2147483671: 134219808,
					2147483672: 134350880,
					2147483673: 134217760,
					2147483674: 134219776,
					2147483675: 0,
					2147483676: 133120,
					2147483677: 2080,
					2147483678: 131104,
					2147483679: 134350848
				}
			], u = [
				4160749569,
				528482304,
				33030144,
				2064384,
				129024,
				8064,
				504,
				2147483679
			], d = a.DES = i.extend({
				_doReset: function() {
					for (var e = this._key.words, t = [], n = 0; n < 56; n++) {
						var r = o[n] - 1;
						t[n] = e[r >>> 5] >>> 31 - r % 32 & 1;
					}
					for (var i = this._subKeys = [], a = 0; a < 16; a++) {
						var l = i[a] = [], u = c[a];
						for (n = 0; n < 24; n++) l[n / 6 | 0] |= t[(s[n] - 1 + u) % 28] << 31 - n % 6, l[4 + (n / 6 | 0)] |= t[28 + (s[n + 24] - 1 + u) % 28] << 31 - n % 6;
						for (l[0] = l[0] << 1 | l[0] >>> 31, n = 1; n < 7; n++) l[n] = l[n] >>> 4 * (n - 1) + 3;
						l[7] = l[7] << 5 | l[7] >>> 27;
					}
					var d = this._invSubKeys = [];
					for (n = 0; n < 16; n++) d[n] = i[15 - n];
				},
				encryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._subKeys);
				},
				decryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._invSubKeys);
				},
				_doCryptBlock: function(e, t, n) {
					this._lBlock = e[t], this._rBlock = e[t + 1], f.call(this, 4, 252645135), f.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), f.call(this, 1, 1431655765);
					for (var r = 0; r < 16; r++) {
						for (var i = n[r], a = this._lBlock, o = this._rBlock, s = 0, c = 0; c < 8; c++) s |= l[c][((o ^ i[c]) & u[c]) >>> 0];
						this._lBlock = o, this._rBlock = a ^ s;
					}
					var d = this._lBlock;
					this._lBlock = this._rBlock, this._rBlock = d, f.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), f.call(this, 16, 65535), f.call(this, 4, 252645135), e[t] = this._lBlock, e[t + 1] = this._rBlock;
				},
				keySize: 2,
				ivSize: 2,
				blockSize: 2
			});
			function f(e, t) {
				var n = (this._lBlock >>> e ^ this._rBlock) & t;
				this._rBlock ^= n, this._lBlock ^= n << e;
			}
			function p(e, t) {
				var n = (this._rBlock >>> e ^ this._lBlock) & t;
				this._lBlock ^= n, this._rBlock ^= n << e;
			}
			t.DES = i._createHelper(d);
			var m = a.TripleDES = i.extend({
				_doReset: function() {
					var e = this._key.words;
					if (e.length !== 2 && e.length !== 4 && e.length < 6) throw Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
					var t = e.slice(0, 2), n = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4), i = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
					this._des1 = d.createEncryptor(r.create(t)), this._des2 = d.createEncryptor(r.create(n)), this._des3 = d.createEncryptor(r.create(i));
				},
				encryptBlock: function(e, t) {
					this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t);
				},
				decryptBlock: function(e, t) {
					this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t);
				},
				keySize: 6,
				ivSize: 2,
				blockSize: 2
			});
			t.TripleDES = i._createHelper(m);
		}(), e.TripleDES)), kn.exports;
		var e;
	}
	var jn, Mn = { exports: {} }, Nn, Pn = { exports: {} }, Fn, In = { exports: {} }, Ln, Rn = { exports: {} };
	function zn() {
		return Ln || (Ln = 1, Rn.exports = (e = Z(), vt(), wt(), Xt(), $t(), function() {
			var t = e, n = t.lib.BlockCipher, r = t.algo;
			let i = [
				608135816,
				2242054355,
				320440878,
				57701188,
				2752067618,
				698298832,
				137296536,
				3964562569,
				1160258022,
				953160567,
				3193202383,
				887688300,
				3232508343,
				3380367581,
				1065670069,
				3041331479,
				2450970073,
				2306472731
			], a = [
				[
					3509652390,
					2564797868,
					805139163,
					3491422135,
					3101798381,
					1780907670,
					3128725573,
					4046225305,
					614570311,
					3012652279,
					134345442,
					2240740374,
					1667834072,
					1901547113,
					2757295779,
					4103290238,
					227898511,
					1921955416,
					1904987480,
					2182433518,
					2069144605,
					3260701109,
					2620446009,
					720527379,
					3318853667,
					677414384,
					3393288472,
					3101374703,
					2390351024,
					1614419982,
					1822297739,
					2954791486,
					3608508353,
					3174124327,
					2024746970,
					1432378464,
					3864339955,
					2857741204,
					1464375394,
					1676153920,
					1439316330,
					715854006,
					3033291828,
					289532110,
					2706671279,
					2087905683,
					3018724369,
					1668267050,
					732546397,
					1947742710,
					3462151702,
					2609353502,
					2950085171,
					1814351708,
					2050118529,
					680887927,
					999245976,
					1800124847,
					3300911131,
					1713906067,
					1641548236,
					4213287313,
					1216130144,
					1575780402,
					4018429277,
					3917837745,
					3693486850,
					3949271944,
					596196993,
					3549867205,
					258830323,
					2213823033,
					772490370,
					2760122372,
					1774776394,
					2652871518,
					566650946,
					4142492826,
					1728879713,
					2882767088,
					1783734482,
					3629395816,
					2517608232,
					2874225571,
					1861159788,
					326777828,
					3124490320,
					2130389656,
					2716951837,
					967770486,
					1724537150,
					2185432712,
					2364442137,
					1164943284,
					2105845187,
					998989502,
					3765401048,
					2244026483,
					1075463327,
					1455516326,
					1322494562,
					910128902,
					469688178,
					1117454909,
					936433444,
					3490320968,
					3675253459,
					1240580251,
					122909385,
					2157517691,
					634681816,
					4142456567,
					3825094682,
					3061402683,
					2540495037,
					79693498,
					3249098678,
					1084186820,
					1583128258,
					426386531,
					1761308591,
					1047286709,
					322548459,
					995290223,
					1845252383,
					2603652396,
					3431023940,
					2942221577,
					3202600964,
					3727903485,
					1712269319,
					422464435,
					3234572375,
					1170764815,
					3523960633,
					3117677531,
					1434042557,
					442511882,
					3600875718,
					1076654713,
					1738483198,
					4213154764,
					2393238008,
					3677496056,
					1014306527,
					4251020053,
					793779912,
					2902807211,
					842905082,
					4246964064,
					1395751752,
					1040244610,
					2656851899,
					3396308128,
					445077038,
					3742853595,
					3577915638,
					679411651,
					2892444358,
					2354009459,
					1767581616,
					3150600392,
					3791627101,
					3102740896,
					284835224,
					4246832056,
					1258075500,
					768725851,
					2589189241,
					3069724005,
					3532540348,
					1274779536,
					3789419226,
					2764799539,
					1660621633,
					3471099624,
					4011903706,
					913787905,
					3497959166,
					737222580,
					2514213453,
					2928710040,
					3937242737,
					1804850592,
					3499020752,
					2949064160,
					2386320175,
					2390070455,
					2415321851,
					4061277028,
					2290661394,
					2416832540,
					1336762016,
					1754252060,
					3520065937,
					3014181293,
					791618072,
					3188594551,
					3933548030,
					2332172193,
					3852520463,
					3043980520,
					413987798,
					3465142937,
					3030929376,
					4245938359,
					2093235073,
					3534596313,
					375366246,
					2157278981,
					2479649556,
					555357303,
					3870105701,
					2008414854,
					3344188149,
					4221384143,
					3956125452,
					2067696032,
					3594591187,
					2921233993,
					2428461,
					544322398,
					577241275,
					1471733935,
					610547355,
					4027169054,
					1432588573,
					1507829418,
					2025931657,
					3646575487,
					545086370,
					48609733,
					2200306550,
					1653985193,
					298326376,
					1316178497,
					3007786442,
					2064951626,
					458293330,
					2589141269,
					3591329599,
					3164325604,
					727753846,
					2179363840,
					146436021,
					1461446943,
					4069977195,
					705550613,
					3059967265,
					3887724982,
					4281599278,
					3313849956,
					1404054877,
					2845806497,
					146425753,
					1854211946
				],
				[
					1266315497,
					3048417604,
					3681880366,
					3289982499,
					290971e4,
					1235738493,
					2632868024,
					2414719590,
					3970600049,
					1771706367,
					1449415276,
					3266420449,
					422970021,
					1963543593,
					2690192192,
					3826793022,
					1062508698,
					1531092325,
					1804592342,
					2583117782,
					2714934279,
					4024971509,
					1294809318,
					4028980673,
					1289560198,
					2221992742,
					1669523910,
					35572830,
					157838143,
					1052438473,
					1016535060,
					1802137761,
					1753167236,
					1386275462,
					3080475397,
					2857371447,
					1040679964,
					2145300060,
					2390574316,
					1461121720,
					2956646967,
					4031777805,
					4028374788,
					33600511,
					2920084762,
					1018524850,
					629373528,
					3691585981,
					3515945977,
					2091462646,
					2486323059,
					586499841,
					988145025,
					935516892,
					3367335476,
					2599673255,
					2839830854,
					265290510,
					3972581182,
					2759138881,
					3795373465,
					1005194799,
					847297441,
					406762289,
					1314163512,
					1332590856,
					1866599683,
					4127851711,
					750260880,
					613907577,
					1450815602,
					3165620655,
					3734664991,
					3650291728,
					3012275730,
					3704569646,
					1427272223,
					778793252,
					1343938022,
					2676280711,
					2052605720,
					1946737175,
					3164576444,
					3914038668,
					3967478842,
					3682934266,
					1661551462,
					3294938066,
					4011595847,
					840292616,
					3712170807,
					616741398,
					312560963,
					711312465,
					1351876610,
					322626781,
					1910503582,
					271666773,
					2175563734,
					1594956187,
					70604529,
					3617834859,
					1007753275,
					1495573769,
					4069517037,
					2549218298,
					2663038764,
					504708206,
					2263041392,
					3941167025,
					2249088522,
					1514023603,
					1998579484,
					1312622330,
					694541497,
					2582060303,
					2151582166,
					1382467621,
					776784248,
					2618340202,
					3323268794,
					2497899128,
					2784771155,
					503983604,
					4076293799,
					907881277,
					423175695,
					432175456,
					1378068232,
					4145222326,
					3954048622,
					3938656102,
					3820766613,
					2793130115,
					2977904593,
					26017576,
					3274890735,
					3194772133,
					1700274565,
					1756076034,
					4006520079,
					3677328699,
					720338349,
					1533947780,
					354530856,
					688349552,
					3973924725,
					1637815568,
					332179504,
					3949051286,
					53804574,
					2852348879,
					3044236432,
					1282449977,
					3583942155,
					3416972820,
					4006381244,
					1617046695,
					2628476075,
					3002303598,
					1686838959,
					431878346,
					2686675385,
					1700445008,
					1080580658,
					1009431731,
					832498133,
					3223435511,
					2605976345,
					2271191193,
					2516031870,
					1648197032,
					4164389018,
					2548247927,
					300782431,
					375919233,
					238389289,
					3353747414,
					2531188641,
					2019080857,
					1475708069,
					455242339,
					2609103871,
					448939670,
					3451063019,
					1395535956,
					2413381860,
					1841049896,
					1491858159,
					885456874,
					4264095073,
					4001119347,
					1565136089,
					3898914787,
					1108368660,
					540939232,
					1173283510,
					2745871338,
					3681308437,
					4207628240,
					3343053890,
					4016749493,
					1699691293,
					1103962373,
					3625875870,
					2256883143,
					3830138730,
					1031889488,
					3479347698,
					1535977030,
					4236805024,
					3251091107,
					2132092099,
					1774941330,
					1199868427,
					1452454533,
					157007616,
					2904115357,
					342012276,
					595725824,
					1480756522,
					206960106,
					497939518,
					591360097,
					863170706,
					2375253569,
					3596610801,
					1814182875,
					2094937945,
					3421402208,
					1082520231,
					3463918190,
					2785509508,
					435703966,
					3908032597,
					1641649973,
					2842273706,
					3305899714,
					1510255612,
					2148256476,
					2655287854,
					3276092548,
					4258621189,
					236887753,
					3681803219,
					274041037,
					1734335097,
					3815195456,
					3317970021,
					1899903192,
					1026095262,
					4050517792,
					356393447,
					2410691914,
					3873677099,
					3682840055
				],
				[
					3913112168,
					2491498743,
					4132185628,
					2489919796,
					1091903735,
					1979897079,
					3170134830,
					3567386728,
					3557303409,
					857797738,
					1136121015,
					1342202287,
					507115054,
					2535736646,
					337727348,
					3213592640,
					1301675037,
					2528481711,
					1895095763,
					1721773893,
					3216771564,
					62756741,
					2142006736,
					835421444,
					2531993523,
					1442658625,
					3659876326,
					2882144922,
					676362277,
					1392781812,
					170690266,
					3921047035,
					1759253602,
					3611846912,
					1745797284,
					664899054,
					1329594018,
					3901205900,
					3045908486,
					2062866102,
					2865634940,
					3543621612,
					3464012697,
					1080764994,
					553557557,
					3656615353,
					3996768171,
					991055499,
					499776247,
					1265440854,
					648242737,
					3940784050,
					980351604,
					3713745714,
					1749149687,
					3396870395,
					4211799374,
					3640570775,
					1161844396,
					3125318951,
					1431517754,
					545492359,
					4268468663,
					3499529547,
					1437099964,
					2702547544,
					3433638243,
					2581715763,
					2787789398,
					1060185593,
					1593081372,
					2418618748,
					4260947970,
					69676912,
					2159744348,
					86519011,
					2512459080,
					3838209314,
					1220612927,
					3339683548,
					133810670,
					1090789135,
					1078426020,
					1569222167,
					845107691,
					3583754449,
					4072456591,
					1091646820,
					628848692,
					1613405280,
					3757631651,
					526609435,
					236106946,
					48312990,
					2942717905,
					3402727701,
					1797494240,
					859738849,
					992217954,
					4005476642,
					2243076622,
					3870952857,
					3732016268,
					765654824,
					3490871365,
					2511836413,
					1685915746,
					3888969200,
					1414112111,
					2273134842,
					3281911079,
					4080962846,
					172450625,
					2569994100,
					980381355,
					4109958455,
					2819808352,
					2716589560,
					2568741196,
					3681446669,
					3329971472,
					1835478071,
					660984891,
					3704678404,
					4045999559,
					3422617507,
					3040415634,
					1762651403,
					1719377915,
					3470491036,
					2693910283,
					3642056355,
					3138596744,
					1364962596,
					2073328063,
					1983633131,
					926494387,
					3423689081,
					2150032023,
					4096667949,
					1749200295,
					3328846651,
					309677260,
					2016342300,
					1779581495,
					3079819751,
					111262694,
					1274766160,
					443224088,
					298511866,
					1025883608,
					3806446537,
					1145181785,
					168956806,
					3641502830,
					3584813610,
					1689216846,
					3666258015,
					3200248200,
					1692713982,
					2646376535,
					4042768518,
					1618508792,
					1610833997,
					3523052358,
					4130873264,
					2001055236,
					3610705100,
					2202168115,
					4028541809,
					2961195399,
					1006657119,
					2006996926,
					3186142756,
					1430667929,
					3210227297,
					1314452623,
					4074634658,
					4101304120,
					2273951170,
					1399257539,
					3367210612,
					3027628629,
					1190975929,
					2062231137,
					2333990788,
					2221543033,
					2438960610,
					1181637006,
					548689776,
					2362791313,
					3372408396,
					3104550113,
					3145860560,
					296247880,
					1970579870,
					3078560182,
					3769228297,
					1714227617,
					3291629107,
					3898220290,
					166772364,
					1251581989,
					493813264,
					448347421,
					195405023,
					2709975567,
					677966185,
					3703036547,
					1463355134,
					2715995803,
					1338867538,
					1343315457,
					2802222074,
					2684532164,
					233230375,
					2599980071,
					2000651841,
					3277868038,
					1638401717,
					4028070440,
					3237316320,
					6314154,
					819756386,
					300326615,
					590932579,
					1405279636,
					3267499572,
					3150704214,
					2428286686,
					3959192993,
					3461946742,
					1862657033,
					1266418056,
					963775037,
					2089974820,
					2263052895,
					1917689273,
					448879540,
					3550394620,
					3981727096,
					150775221,
					3627908307,
					1303187396,
					508620638,
					2975983352,
					2726630617,
					1817252668,
					1876281319,
					1457606340,
					908771278,
					3720792119,
					3617206836,
					2455994898,
					1729034894,
					1080033504
				],
				[
					976866871,
					3556439503,
					2881648439,
					1522871579,
					1555064734,
					1336096578,
					3548522304,
					2579274686,
					3574697629,
					3205460757,
					3593280638,
					3338716283,
					3079412587,
					564236357,
					2993598910,
					1781952180,
					1464380207,
					3163844217,
					3332601554,
					1699332808,
					1393555694,
					1183702653,
					3581086237,
					1288719814,
					691649499,
					2847557200,
					2895455976,
					3193889540,
					2717570544,
					1781354906,
					1676643554,
					2592534050,
					3230253752,
					1126444790,
					2770207658,
					2633158820,
					2210423226,
					2615765581,
					2414155088,
					3127139286,
					673620729,
					2805611233,
					1269405062,
					4015350505,
					3341807571,
					4149409754,
					1057255273,
					2012875353,
					2162469141,
					2276492801,
					2601117357,
					993977747,
					3918593370,
					2654263191,
					753973209,
					36408145,
					2530585658,
					25011837,
					3520020182,
					2088578344,
					530523599,
					2918365339,
					1524020338,
					1518925132,
					3760827505,
					3759777254,
					1202760957,
					3985898139,
					3906192525,
					674977740,
					4174734889,
					2031300136,
					2019492241,
					3983892565,
					4153806404,
					3822280332,
					352677332,
					2297720250,
					60907813,
					90501309,
					3286998549,
					1016092578,
					2535922412,
					2839152426,
					457141659,
					509813237,
					4120667899,
					652014361,
					1966332200,
					2975202805,
					55981186,
					2327461051,
					676427537,
					3255491064,
					2882294119,
					3433927263,
					1307055953,
					942726286,
					933058658,
					2468411793,
					3933900994,
					4215176142,
					1361170020,
					2001714738,
					2830558078,
					3274259782,
					1222529897,
					1679025792,
					2729314320,
					3714953764,
					1770335741,
					151462246,
					3013232138,
					1682292957,
					1483529935,
					471910574,
					1539241949,
					458788160,
					3436315007,
					1807016891,
					3718408830,
					978976581,
					1043663428,
					3165965781,
					1927990952,
					4200891579,
					2372276910,
					3208408903,
					3533431907,
					1412390302,
					2931980059,
					4132332400,
					1947078029,
					3881505623,
					4168226417,
					2941484381,
					1077988104,
					1320477388,
					886195818,
					18198404,
					3786409e3,
					2509781533,
					112762804,
					3463356488,
					1866414978,
					891333506,
					18488651,
					661792760,
					1628790961,
					3885187036,
					3141171499,
					876946877,
					2693282273,
					1372485963,
					791857591,
					2686433993,
					3759982718,
					3167212022,
					3472953795,
					2716379847,
					445679433,
					3561995674,
					3504004811,
					3574258232,
					54117162,
					3331405415,
					2381918588,
					3769707343,
					4154350007,
					1140177722,
					4074052095,
					668550556,
					3214352940,
					367459370,
					261225585,
					2610173221,
					4209349473,
					3468074219,
					3265815641,
					314222801,
					3066103646,
					3808782860,
					282218597,
					3406013506,
					3773591054,
					379116347,
					1285071038,
					846784868,
					2669647154,
					3771962079,
					3550491691,
					2305946142,
					453669953,
					1268987020,
					3317592352,
					3279303384,
					3744833421,
					2610507566,
					3859509063,
					266596637,
					3847019092,
					517658769,
					3462560207,
					3443424879,
					370717030,
					4247526661,
					2224018117,
					4143653529,
					4112773975,
					2788324899,
					2477274417,
					1456262402,
					2901442914,
					1517677493,
					1846949527,
					2295493580,
					3734397586,
					2176403920,
					1280348187,
					1908823572,
					3871786941,
					846861322,
					1172426758,
					3287448474,
					3383383037,
					1655181056,
					3139813346,
					901632758,
					1897031941,
					2986607138,
					3066810236,
					3447102507,
					1393639104,
					373351379,
					950779232,
					625454576,
					3124240540,
					4148612726,
					2007998917,
					544563296,
					2244738638,
					2330496472,
					2058025392,
					1291430526,
					424198748,
					50039436,
					29584100,
					3605783033,
					2429876329,
					2791104160,
					1057563949,
					3255363231,
					3075367218,
					3463963227,
					1469046755,
					985887462
				]
			];
			var o = {
				pbox: [],
				sbox: []
			};
			function s(e, t) {
				let n = t >> 24 & 255, r = t >> 16 & 255, i = t >> 8 & 255, a = 255 & t, o = e.sbox[0][n] + e.sbox[1][r];
				return o ^= e.sbox[2][i], o += e.sbox[3][a], o;
			}
			function c(e, t, n) {
				let r, i = t, a = n;
				for (let t = 0; t < 16; ++t) i ^= e.pbox[t], a = s(e, i) ^ a, r = i, i = a, a = r;
				return r = i, i = a, a = r, a ^= e.pbox[16], i ^= e.pbox[17], {
					left: i,
					right: a
				};
			}
			function l(e, t, n) {
				let r, i = t, a = n;
				for (let t = 17; t > 1; --t) i ^= e.pbox[t], a = s(e, i) ^ a, r = i, i = a, a = r;
				return r = i, i = a, a = r, a ^= e.pbox[1], i ^= e.pbox[0], {
					left: i,
					right: a
				};
			}
			function u(e, t, n) {
				for (let t = 0; t < 4; t++) {
					e.sbox[t] = [];
					for (let n = 0; n < 256; n++) e.sbox[t][n] = a[t][n];
				}
				let r = 0;
				for (let a = 0; a < 18; a++) e.pbox[a] = i[a] ^ t[r], r++, r >= n && (r = 0);
				let o = 0, s = 0, l = 0;
				for (let t = 0; t < 18; t += 2) l = c(e, o, s), o = l.left, s = l.right, e.pbox[t] = o, e.pbox[t + 1] = s;
				for (let t = 0; t < 4; t++) for (let n = 0; n < 256; n += 2) l = c(e, o, s), o = l.left, s = l.right, e.sbox[t][n] = o, e.sbox[t][n + 1] = s;
				return !0;
			}
			var d = r.Blowfish = n.extend({
				_doReset: function() {
					if (this._keyPriorReset !== this._key) {
						var e = this._keyPriorReset = this._key, t = e.words;
						u(o, t, e.sigBytes / 4);
					}
				},
				encryptBlock: function(e, t) {
					var n = c(o, e[t], e[t + 1]);
					e[t] = n.left, e[t + 1] = n.right;
				},
				decryptBlock: function(e, t) {
					var n = l(o, e[t], e[t + 1]);
					e[t] = n.left, e[t + 1] = n.right;
				},
				blockSize: 2,
				keySize: 4,
				ivSize: 2
			});
			t.Blowfish = n._createHelper(d);
		}(), e.Blowfish)), Rn.exports;
		var e;
	}
	var Bn, Vn, Hn = Ge((Bn || (Bn = 1, it.exports = function(e) {
		return e;
	}(Z(), lt(), ft(), ht(), vt(), xt(), wt(), Dt(), At(), jt || (jt = 1, Mt.exports = (Vn = Z(), At(), function() {
		var e = Vn, t = e.lib.WordArray, n = e.algo, r = n.SHA256, i = n.SHA224 = r.extend({
			_doReset: function() {
				this._hash = new t.init([
					3238371032,
					914150663,
					812702999,
					4144912697,
					4290775857,
					1750603025,
					1694076839,
					3204075428
				]);
			},
			_doFinalize: function() {
				var e = r._doFinalize.call(this);
				return e.sigBytes -= 4, e;
			}
		});
		e.SHA224 = r._createHelper(i), e.HmacSHA224 = r._createHmacHelper(i);
	}(), Vn.SHA224)), Ft(), function() {
		return It || (It = 1, Lt.exports = (e = Z(), lt(), Ft(), function() {
			var t = e, n = t.x64, r = n.Word, i = n.WordArray, a = t.algo, o = a.SHA512, s = a.SHA384 = o.extend({
				_doReset: function() {
					this._hash = new i.init([
						new r.init(3418070365, 3238371032),
						new r.init(1654270250, 914150663),
						new r.init(2438529370, 812702999),
						new r.init(355462360, 4144912697),
						new r.init(1731405415, 4290775857),
						new r.init(2394180231, 1750603025),
						new r.init(3675008525, 1694076839),
						new r.init(1203062813, 3204075428)
					]);
				},
				_doFinalize: function() {
					var e = o._doFinalize.call(this);
					return e.sigBytes -= 16, e;
				}
			});
			t.SHA384 = o._createHelper(s), t.HmacSHA384 = o._createHmacHelper(s);
		}(), e.SHA384)), Lt.exports;
		var e;
	}(), Bt(), function() {
		return Vt || (Vt = 1, Ht.exports = (e = Z(), function() {
			var t = e, n = t.lib, r = n.WordArray, i = n.Hasher, a = t.algo, o = r.create([
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				7,
				4,
				13,
				1,
				10,
				6,
				15,
				3,
				12,
				0,
				9,
				5,
				2,
				14,
				11,
				8,
				3,
				10,
				14,
				4,
				9,
				15,
				8,
				1,
				2,
				7,
				0,
				6,
				13,
				11,
				5,
				12,
				1,
				9,
				11,
				10,
				0,
				8,
				12,
				4,
				13,
				3,
				7,
				15,
				14,
				5,
				6,
				2,
				4,
				0,
				5,
				9,
				7,
				12,
				2,
				10,
				14,
				1,
				3,
				8,
				11,
				6,
				15,
				13
			]), s = r.create([
				5,
				14,
				7,
				0,
				9,
				2,
				11,
				4,
				13,
				6,
				15,
				8,
				1,
				10,
				3,
				12,
				6,
				11,
				3,
				7,
				0,
				13,
				5,
				10,
				14,
				15,
				8,
				12,
				4,
				9,
				1,
				2,
				15,
				5,
				1,
				3,
				7,
				14,
				6,
				9,
				11,
				8,
				12,
				2,
				10,
				0,
				4,
				13,
				8,
				6,
				4,
				1,
				3,
				11,
				15,
				0,
				5,
				12,
				2,
				13,
				9,
				7,
				10,
				14,
				12,
				15,
				10,
				4,
				1,
				5,
				8,
				7,
				6,
				2,
				13,
				14,
				0,
				3,
				9,
				11
			]), c = r.create([
				11,
				14,
				15,
				12,
				5,
				8,
				7,
				9,
				11,
				13,
				14,
				15,
				6,
				7,
				9,
				8,
				7,
				6,
				8,
				13,
				11,
				9,
				7,
				15,
				7,
				12,
				15,
				9,
				11,
				7,
				13,
				12,
				11,
				13,
				6,
				7,
				14,
				9,
				13,
				15,
				14,
				8,
				13,
				6,
				5,
				12,
				7,
				5,
				11,
				12,
				14,
				15,
				14,
				15,
				9,
				8,
				9,
				14,
				5,
				6,
				8,
				6,
				5,
				12,
				9,
				15,
				5,
				11,
				6,
				8,
				13,
				12,
				5,
				12,
				13,
				14,
				11,
				8,
				5,
				6
			]), l = r.create([
				8,
				9,
				9,
				11,
				13,
				15,
				15,
				5,
				7,
				7,
				8,
				11,
				14,
				14,
				12,
				6,
				9,
				13,
				15,
				7,
				12,
				8,
				9,
				11,
				7,
				7,
				12,
				7,
				6,
				15,
				13,
				11,
				9,
				7,
				15,
				11,
				8,
				6,
				6,
				14,
				12,
				13,
				5,
				14,
				13,
				13,
				7,
				5,
				15,
				5,
				8,
				11,
				14,
				14,
				6,
				14,
				6,
				9,
				12,
				9,
				12,
				5,
				15,
				8,
				8,
				5,
				12,
				9,
				12,
				5,
				14,
				6,
				8,
				13,
				6,
				5,
				15,
				13,
				11,
				11
			]), u = r.create([
				0,
				1518500249,
				1859775393,
				2400959708,
				2840853838
			]), d = r.create([
				1352829926,
				1548603684,
				1836072691,
				2053994217,
				0
			]), f = a.RIPEMD160 = i.extend({
				_doReset: function() {
					this._hash = r.create([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var n = 0; n < 16; n++) {
						var r = t + n, i = e[r];
						e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
					}
					var a, f, y, b, x, S, C, w, T, E, D, O = this._hash.words, k = u.words, A = d.words, j = o.words, M = s.words, N = c.words, P = l.words;
					for (S = a = O[0], C = f = O[1], w = y = O[2], T = b = O[3], E = x = O[4], n = 0; n < 80; n += 1) D = a + e[t + j[n]] | 0, D += n < 16 ? p(f, y, b) + k[0] : n < 32 ? m(f, y, b) + k[1] : n < 48 ? h(f, y, b) + k[2] : n < 64 ? g(f, y, b) + k[3] : _(f, y, b) + k[4], D = (D = v(D |= 0, N[n])) + x | 0, a = x, x = b, b = v(y, 10), y = f, f = D, D = S + e[t + M[n]] | 0, D += n < 16 ? _(C, w, T) + A[0] : n < 32 ? g(C, w, T) + A[1] : n < 48 ? h(C, w, T) + A[2] : n < 64 ? m(C, w, T) + A[3] : p(C, w, T) + A[4], D = (D = v(D |= 0, P[n])) + E | 0, S = E, E = T, T = v(w, 10), w = C, C = D;
					D = O[1] + y + T | 0, O[1] = O[2] + b + E | 0, O[2] = O[3] + x + S | 0, O[3] = O[4] + a + C | 0, O[4] = O[0] + f + w | 0, O[0] = D;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
					t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();
					for (var i = this._hash, a = i.words, o = 0; o < 5; o++) {
						var s = a[o];
						a[o] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
					}
					return i;
				},
				clone: function() {
					var e = i.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			function p(e, t, n) {
				return e ^ t ^ n;
			}
			function m(e, t, n) {
				return e & t | ~e & n;
			}
			function h(e, t, n) {
				return (e | ~t) ^ n;
			}
			function g(e, t, n) {
				return e & n | t & ~n;
			}
			function _(e, t, n) {
				return e ^ (t | ~n);
			}
			function v(e, t) {
				return e << t | e >>> 32 - t;
			}
			t.RIPEMD160 = i._createHelper(f), t.HmacRIPEMD160 = i._createHmacHelper(f);
		}(), e.RIPEMD160)), Ht.exports;
		var e;
	}(), Gt(), function() {
		return Kt || (Kt = 1, qt.exports = (e = Z(), At(), Gt(), function() {
			var t = e, n = t.lib, r = n.Base, i = n.WordArray, a = t.algo, o = a.SHA256, s = a.HMAC, c = a.PBKDF2 = r.extend({
				cfg: r.extend({
					keySize: 4,
					hasher: o,
					iterations: 25e4
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e);
				},
				compute: function(e, t) {
					for (var n = this.cfg, r = s.create(n.hasher, e), a = i.create(), o = i.create([1]), c = a.words, l = o.words, u = n.keySize, d = n.iterations; c.length < u;) {
						var f = r.update(t).finalize(o);
						r.reset();
						for (var p = f.words, m = p.length, h = f, g = 1; g < d; g++) {
							h = r.finalize(h), r.reset();
							for (var _ = h.words, v = 0; v < m; v++) p[v] ^= _[v];
						}
						a.concat(f), l[0]++;
					}
					return a.sigBytes = 4 * u, a;
				}
			});
			t.PBKDF2 = function(e, t, n) {
				return c.create(n).compute(e, t);
			};
		}(), e.PBKDF2)), qt.exports;
		var e;
	}(), Xt(), $t(), nn(), on(), ln(), fn(), function() {
		return pn ? mn.exports : (pn = 1, mn.exports = (t = Z(), $t(), t.mode.ECB = ((e = t.lib.BlockCipherMode.extend()).Encryptor = e.extend({ processBlock: function(e, t) {
			this._cipher.encryptBlock(e, t);
		} }), e.Decryptor = e.extend({ processBlock: function(e, t) {
			this._cipher.decryptBlock(e, t);
		} }), e), t.mode.ECB));
		var e, t;
	}(), function() {
		return hn ? gn.exports : (hn = 1, gn.exports = (e = Z(), $t(), e.pad.AnsiX923 = {
			pad: function(e, t) {
				var n = e.sigBytes, r = 4 * t, i = r - n % r, a = n + i - 1;
				e.clamp(), e.words[a >>> 2] |= i << 24 - a % 4 * 8, e.sigBytes += i;
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Ansix923));
		var e;
	}(), function() {
		return _n ? vn.exports : (_n = 1, vn.exports = (e = Z(), $t(), e.pad.Iso10126 = {
			pad: function(t, n) {
				var r = 4 * n, i = r - t.sigBytes % r;
				t.concat(e.lib.WordArray.random(i - 1)).concat(e.lib.WordArray.create([i << 24], 1));
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Iso10126));
		var e;
	}(), function() {
		return yn ? bn.exports : (yn = 1, bn.exports = (e = Z(), $t(), e.pad.Iso97971 = {
			pad: function(t, n) {
				t.concat(e.lib.WordArray.create([2147483648], 1)), e.pad.ZeroPadding.pad(t, n);
			},
			unpad: function(t) {
				e.pad.ZeroPadding.unpad(t), t.sigBytes--;
			}
		}, e.pad.Iso97971));
		var e;
	}(), function() {
		return xn || (xn = 1, Sn.exports = (e = Z(), $t(), e.pad.ZeroPadding = {
			pad: function(e, t) {
				var n = 4 * t;
				e.clamp(), e.sigBytes += n - (e.sigBytes % n || n);
			},
			unpad: function(e) {
				var t = e.words, n = e.sigBytes - 1;
				for (n = e.sigBytes - 1; n >= 0; n--) if (t[n >>> 2] >>> 24 - n % 4 * 8 & 255) {
					e.sigBytes = n + 1;
					break;
				}
			}
		}, e.pad.ZeroPadding)), Sn.exports;
		var e;
	}(), function() {
		return Cn ? Q.exports : (Cn = 1, Q.exports = (e = Z(), $t(), e.pad.NoPadding = {
			pad: function() {},
			unpad: function() {}
		}, e.pad.NoPadding));
		var e;
	}(), function() {
		return wn || (wn = 1, Tn.exports = (e = Z(), $t(), function() {
			var t = e, n = t.lib.CipherParams, r = t.enc.Hex;
			t.format.Hex = {
				stringify: function(e) {
					return e.ciphertext.toString(r);
				},
				parse: function(e) {
					var t = r.parse(e);
					return n.create({ ciphertext: t });
				}
			};
		}(), e.format.Hex)), Tn.exports;
		var e;
	}(), function() {
		return En || (En = 1, Dn.exports = (e = Z(), vt(), wt(), Xt(), $t(), function() {
			var t = e, n = t.lib.BlockCipher, r = t.algo, i = [], a = [], o = [], s = [], c = [], l = [], u = [], d = [], f = [], p = [];
			(function() {
				for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
				var n = 0, r = 0;
				for (t = 0; t < 256; t++) {
					var m = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
					m = m >>> 8 ^ 255 & m ^ 99, i[n] = m, a[m] = n;
					var h = e[n], g = e[h], _ = e[g], v = 257 * e[m] ^ 16843008 * m;
					o[n] = v << 24 | v >>> 8, s[n] = v << 16 | v >>> 16, c[n] = v << 8 | v >>> 24, l[n] = v, v = 16843009 * _ ^ 65537 * g ^ 257 * h ^ 16843008 * n, u[m] = v << 24 | v >>> 8, d[m] = v << 16 | v >>> 16, f[m] = v << 8 | v >>> 24, p[m] = v, n ? (n = h ^ e[e[e[_ ^ h]]], r ^= e[e[r]]) : n = r = 1;
				}
			})();
			var m = [
				0,
				1,
				2,
				4,
				8,
				16,
				32,
				64,
				128,
				27,
				54
			], h = r.AES = n.extend({
				_doReset: function() {
					if (!this._nRounds || this._keyPriorReset !== this._key) {
						for (var e = this._keyPriorReset = this._key, t = e.words, n = e.sigBytes / 4, r = 4 * ((this._nRounds = n + 6) + 1), a = this._keySchedule = [], o = 0; o < r; o++) o < n ? a[o] = t[o] : (l = a[o - 1], o % n ? n > 6 && o % n == 4 && (l = i[l >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l]) : (l = i[(l = l << 8 | l >>> 24) >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l], l ^= m[o / n | 0] << 24), a[o] = a[o - n] ^ l);
						for (var s = this._invKeySchedule = [], c = 0; c < r; c++) {
							if (o = r - c, c % 4) var l = a[o];
							else l = a[o - 4];
							s[c] = c < 4 || o <= 4 ? l : u[i[l >>> 24]] ^ d[i[l >>> 16 & 255]] ^ f[i[l >>> 8 & 255]] ^ p[i[255 & l]];
						}
					}
				},
				encryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._keySchedule, o, s, c, l, i);
				},
				decryptBlock: function(e, t) {
					var n = e[t + 1];
					e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, u, d, f, p, a), n = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = n;
				},
				_doCryptBlock: function(e, t, n, r, i, a, o, s) {
					for (var c = this._nRounds, l = e[t] ^ n[0], u = e[t + 1] ^ n[1], d = e[t + 2] ^ n[2], f = e[t + 3] ^ n[3], p = 4, m = 1; m < c; m++) {
						var h = r[l >>> 24] ^ i[u >>> 16 & 255] ^ a[d >>> 8 & 255] ^ o[255 & f] ^ n[p++], g = r[u >>> 24] ^ i[d >>> 16 & 255] ^ a[f >>> 8 & 255] ^ o[255 & l] ^ n[p++], _ = r[d >>> 24] ^ i[f >>> 16 & 255] ^ a[l >>> 8 & 255] ^ o[255 & u] ^ n[p++], v = r[f >>> 24] ^ i[l >>> 16 & 255] ^ a[u >>> 8 & 255] ^ o[255 & d] ^ n[p++];
						l = h, u = g, d = _, f = v;
					}
					h = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & f]) ^ n[p++], g = (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[p++], _ = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & u]) ^ n[p++], v = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & d]) ^ n[p++], e[t] = h, e[t + 1] = g, e[t + 2] = _, e[t + 3] = v;
				},
				keySize: 8
			});
			t.AES = n._createHelper(h);
		}(), e.AES)), Dn.exports;
		var e;
	}(), An(), function() {
		return jn || (jn = 1, Mn.exports = (e = Z(), vt(), wt(), Xt(), $t(), function() {
			var t = e, n = t.lib.StreamCipher, r = t.algo, i = r.RC4 = n.extend({
				_doReset: function() {
					for (var e = this._key, t = e.words, n = e.sigBytes, r = this._S = [], i = 0; i < 256; i++) r[i] = i;
					i = 0;
					for (var a = 0; i < 256; i++) {
						var o = i % n, s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
						a = (a + r[i] + s) % 256;
						var c = r[i];
						r[i] = r[a], r[a] = c;
					}
					this._i = this._j = 0;
				},
				_doProcessBlock: function(e, t) {
					e[t] ^= a.call(this);
				},
				keySize: 8,
				ivSize: 0
			});
			function a() {
				for (var e = this._S, t = this._i, n = this._j, r = 0, i = 0; i < 4; i++) {
					n = (n + e[t = (t + 1) % 256]) % 256;
					var a = e[t];
					e[t] = e[n], e[n] = a, r |= e[(e[t] + e[n]) % 256] << 24 - 8 * i;
				}
				return this._i = t, this._j = n, r;
			}
			t.RC4 = n._createHelper(i);
			var o = r.RC4Drop = i.extend({
				cfg: i.cfg.extend({ drop: 192 }),
				_doReset: function() {
					i._doReset.call(this);
					for (var e = this.cfg.drop; e > 0; e--) a.call(this);
				}
			});
			t.RC4Drop = n._createHelper(o);
		}(), e.RC4)), Mn.exports;
		var e;
	}(), function() {
		return Nn || (Nn = 1, Pn.exports = (e = Z(), vt(), wt(), Xt(), $t(), function() {
			var t = e, n = t.lib.StreamCipher, r = t.algo, i = [], a = [], o = [], s = r.Rabbit = n.extend({
				_doReset: function() {
					for (var e = this._key.words, t = this.cfg.iv, n = 0; n < 4; n++) e[n] = 16711935 & (e[n] << 8 | e[n] >>> 24) | 4278255360 & (e[n] << 24 | e[n] >>> 8);
					var r = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], i = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					for (this._b = 0, n = 0; n < 4; n++) c.call(this);
					for (n = 0; n < 8; n++) i[n] ^= r[n + 4 & 7];
					if (t) {
						var a = t.words, o = a[0], s = a[1], l = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), d = l >>> 16 | 4294901760 & u, f = u << 16 | 65535 & l;
						for (i[0] ^= l, i[1] ^= d, i[2] ^= u, i[3] ^= f, i[4] ^= l, i[5] ^= d, i[6] ^= u, i[7] ^= f, n = 0; n < 4; n++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var n = this._X;
					c.call(this), i[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16, i[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16, i[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16, i[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
					for (var r = 0; r < 4; r++) i[r] = 16711935 & (i[r] << 8 | i[r] >>> 24) | 4278255360 & (i[r] << 24 | i[r] >>> 8), e[t + r] ^= i[r];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, n = 0; n < 8; n++) a[n] = t[n];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + +(t[0] >>> 0 < a[0] >>> 0) | 0, t[2] = t[2] + 886263092 + +(t[1] >>> 0 < a[1] >>> 0) | 0, t[3] = t[3] + 1295307597 + +(t[2] >>> 0 < a[2] >>> 0) | 0, t[4] = t[4] + 3545052371 + +(t[3] >>> 0 < a[3] >>> 0) | 0, t[5] = t[5] + 886263092 + +(t[4] >>> 0 < a[4] >>> 0) | 0, t[6] = t[6] + 1295307597 + +(t[5] >>> 0 < a[5] >>> 0) | 0, t[7] = t[7] + 3545052371 + +(t[6] >>> 0 < a[6] >>> 0) | 0, this._b = +(t[7] >>> 0 < a[7] >>> 0), n = 0; n < 8; n++) {
					var r = e[n] + t[n], i = 65535 & r, s = r >>> 16;
					o[n] = ((i * i >>> 17) + i * s >>> 15) + s * s ^ ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
				}
				e[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, e[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, e[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, e[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, e[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, e[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, e[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, e[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
			}
			t.Rabbit = n._createHelper(s);
		}(), e.Rabbit)), Pn.exports;
		var e;
	}(), function() {
		return Fn || (Fn = 1, In.exports = (e = Z(), vt(), wt(), Xt(), $t(), function() {
			var t = e, n = t.lib.StreamCipher, r = t.algo, i = [], a = [], o = [], s = r.RabbitLegacy = n.extend({
				_doReset: function() {
					var e = this._key.words, t = this.cfg.iv, n = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], r = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					this._b = 0;
					for (var i = 0; i < 4; i++) c.call(this);
					for (i = 0; i < 8; i++) r[i] ^= n[i + 4 & 7];
					if (t) {
						var a = t.words, o = a[0], s = a[1], l = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), d = l >>> 16 | 4294901760 & u, f = u << 16 | 65535 & l;
						for (r[0] ^= l, r[1] ^= d, r[2] ^= u, r[3] ^= f, r[4] ^= l, r[5] ^= d, r[6] ^= u, r[7] ^= f, i = 0; i < 4; i++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var n = this._X;
					c.call(this), i[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16, i[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16, i[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16, i[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
					for (var r = 0; r < 4; r++) i[r] = 16711935 & (i[r] << 8 | i[r] >>> 24) | 4278255360 & (i[r] << 24 | i[r] >>> 8), e[t + r] ^= i[r];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, n = 0; n < 8; n++) a[n] = t[n];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + +(t[0] >>> 0 < a[0] >>> 0) | 0, t[2] = t[2] + 886263092 + +(t[1] >>> 0 < a[1] >>> 0) | 0, t[3] = t[3] + 1295307597 + +(t[2] >>> 0 < a[2] >>> 0) | 0, t[4] = t[4] + 3545052371 + +(t[3] >>> 0 < a[3] >>> 0) | 0, t[5] = t[5] + 886263092 + +(t[4] >>> 0 < a[4] >>> 0) | 0, t[6] = t[6] + 1295307597 + +(t[5] >>> 0 < a[5] >>> 0) | 0, t[7] = t[7] + 3545052371 + +(t[6] >>> 0 < a[6] >>> 0) | 0, this._b = +(t[7] >>> 0 < a[7] >>> 0), n = 0; n < 8; n++) {
					var r = e[n] + t[n], i = 65535 & r, s = r >>> 16;
					o[n] = ((i * i >>> 17) + i * s >>> 15) + s * s ^ ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
				}
				e[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, e[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, e[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, e[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, e[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, e[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, e[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, e[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
			}
			t.RabbitLegacy = n._createHelper(s);
		}(), e.RabbitLegacy)), In.exports;
		var e;
	}(), zn())), it.exports)), Un = "https://cdn.gtx.dev", Wn = "https://runtime2.gtx.dev", Gn = "en", Kn = [
		"singular",
		"plural",
		"dual",
		"zero",
		"one",
		"two",
		"few",
		"many",
		"other"
	], qn, Jn, Yn = "ellipsis", Xn = "DEFAULT_TERMINATOR_KEY", Zn = {
		ellipsis: (qn = {
			fr: {
				terminator: "…",
				separator: " "
			},
			zh: {
				terminator: "……",
				separator: void 0
			},
			ja: {
				terminator: "……",
				separator: void 0
			}
		}, qn[Xn] = {
			terminator: "…",
			separator: void 0
		}, qn),
		none: (Jn = {}, Jn[Xn] = {
			terminator: void 0,
			separator: void 0
		}, Jn)
	}, Qn = function() {
		function e(e, t) {
			var n, r;
			t === void 0 && (t = {});
			try {
				var i = e ? Array.isArray(e) ? e.map(function(e) {
					return String(e);
				}) : [String(e)] : [Gn], a = Intl.getCanonicalLocales(i);
				this.locale = a.length ? a[0] : Gn;
			} catch {
				this.locale = Gn;
			}
			if (!Zn[t.style ?? Yn]) throw Error(function(e) {
				return `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`;
			}(t.style ?? Yn));
			if (t.maxChars !== void 0) {
				n = t.style ?? Yn;
				var o = new Intl.Locale(this.locale).language;
				r = Zn[n][o] || Zn[n][Xn];
			}
			var s = t.terminator ?? r?.terminator, c = s == null ? void 0 : t.separator ?? r?.separator;
			this.additionLength = (s?.length ?? 0) + (c?.length ?? 0), t.maxChars !== void 0 && Math.abs(t.maxChars) < this.additionLength && (s = void 0, c = void 0), this.options = {
				maxChars: t.maxChars,
				style: n,
				terminator: s,
				separator: c
			};
		}
		return e.prototype.format = function(e) {
			return this.formatToParts(e).join("");
		}, e.prototype.formatToParts = function(e) {
			var t = this.options, n = t.maxChars, r = t.terminator, i = t.separator, a = n === void 0 || Math.abs(n) >= e.length ? n : n >= 0 ? Math.max(0, n - this.additionLength) : Math.min(0, n + this.additionLength), o = a !== void 0 && a > -1 ? e.slice(0, a) : e.slice(a);
			return n == null || a == null || a === 0 || r == null || e.length <= Math.abs(n) ? [o] : a > 0 ? i == null ? [o, r] : [
				o,
				i,
				r
			] : i == null ? [r, o] : [
				r,
				i,
				o
			];
		}, e.prototype.resolvedOptions = function() {
			return this.options;
		}, e;
	}(), $n = {
		Collator: Intl.Collator,
		DateTimeFormat: Intl.DateTimeFormat,
		DisplayNames: Intl.DisplayNames,
		ListFormat: Intl.ListFormat,
		Locale: Intl.Locale,
		NumberFormat: Intl.NumberFormat,
		PluralRules: Intl.PluralRules,
		RelativeTimeFormat: Intl.RelativeTimeFormat,
		Segmenter: Intl.Segmenter,
		CutoffFormat: Qn
	}, er = new (function() {
		function e() {
			this.cache = {};
		}
		return e.prototype._generateKey = function(e, t) {
			return t === void 0 && (t = {}), `${e ? Array.isArray(e) ? e.map(function(e) {
				return String(e);
			}).join(",") : String(e) : "undefined"}:${t ? JSON.stringify(t, Object.keys(t).sort()) : "{}"}`;
		}, e.prototype.get = function(e) {
			for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
			var i = n[0], a = i === void 0 ? Gn : i, o = n[1], s = o === void 0 ? {} : o, c = this._generateKey(a, s), l = this.cache[e]?.[c];
			return l === void 0 && (l = new ((t = $n[e]).bind.apply(t, function(e, t, n) {
				if (arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
				return e.concat(r || Array.prototype.slice.call(t));
			}([void 0], n, !1)))(), this.cache[e] || (this.cache[e] = {}), this.cache[e][c] = l), l;
		}, e;
	}())();
	function tr(e) {
		var t = e;
		if (t && typeof t == "object" && typeof t.k == "string") {
			var n = Object.keys(t);
			if (n.length === 1 || n.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || n.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
		}
		return !1;
	}
	var nr = {
		variable: "v",
		number: "n",
		datetime: "d",
		currency: "c",
		"relative-time": "rt"
	};
	function rr(e) {
		return nr[e];
	}
	function ir(e) {
		if (typeof Buffer < "u") return Buffer.from(e, "base64").toString("utf8");
		for (var t = atob(e), n = new Uint8Array(t.length), r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
		return new TextDecoder().decode(n);
	}
	function $(e) {
		var t = e.icuString, n = e.shouldVisit, r = e.visitor, i = e.options, a = i.recurseIntoVisited, o = a === void 0 || a, s = function(e, t) {
			t === void 0 && (t = {}), t = m({
				shouldParseSkeletons: !0,
				requiresOtherClause: !0
			}, t);
			var n = new Re(e, t).parse();
			if (n.err) {
				var r = SyntaxError(H[n.err.kind]);
				throw r.location = n.err.location, r.originalMessage = n.err.message, r;
			}
			return t != null && t.captureLocation || Ue(n.val), n.val;
		}(t, function(e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == "function") {
				var i = 0;
				for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
			}
			return n;
		}(i, ["recurseIntoVisited"]));
		return c(s), s;
		function c(e) {
			e.map(l);
		}
		function l(e) {
			var t = !1;
			n(e) && (r(e), t = !0), t && !o || (e.type === U.select || e.type === U.plural ? Object.values(e.options).map(function(e) {
				return e.value;
			}).map(c) : e.type === U.tag && c(e.children));
		}
	}
	var ar = "_gt_", or = RegExp(`^${ar}\\d+\$`), sr = RegExp(`^${ar}\$`);
	function cr(e) {
		return e.type === Ze.TYPE.select && or.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === Ze.TYPE.literal);
	}
	function lr(e) {
		return e.type === Ze.TYPE.select && sr.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === Ze.TYPE.literal);
	}
	function ur(e) {
		var t = e.replace(/['\']/g, "''"), n = /[{}<>]/, r = t.search(n);
		if (r === -1) return t;
		for (var i = -1, a = t.length - 1; a >= 0; a--) if (n.test(t[a])) {
			i = a;
			break;
		}
		return t.slice(0, r) + "'" + t.slice(r, i + 1) + "'" + t.slice(i + 1);
	}
	function dr(e) {
		return e;
	}
	var fr = dr;
	function pr(e) {
		if (!e.includes(ar)) return e;
		var t = [];
		$({
			icuString: e,
			shouldVisit: lr,
			visitor: function(e) {
				t.push({
					start: e.location?.start.offset ?? 0,
					end: e.location?.end.offset ?? 0,
					otherStart: e.options.other.location?.start.offset ?? 0,
					otherEnd: e.options.other.location?.end.offset ?? 0
				});
			},
			options: {
				recurseIntoVisited: !1,
				captureLocation: !0
			}
		});
		for (var n = [], r = 0, i = 0; i < t.length; i++) {
			var a = t[i], o = a.start, s = a.end, c = a.otherStart, l = a.otherEnd;
			n.push(e.slice(r, o)), n.push(e.slice(o, o + 4 + 1)), n.push(String(i + 1)), n.push(e.slice(o + 4 + 1, c)), n.push("{}"), n.push(e.slice(l, s)), r = s;
		}
		return n.push(e.slice(r, e.length)), n.join("");
	}
	function mr(e) {
		if (!e.includes(ar)) return {};
		var t = 1, n = {};
		return $({
			icuString: e,
			shouldVisit: lr,
			visitor: function(e) {
				n[e.value + t] = e.options.other.value.length ? e.options.other.value[0]?.value : "", t += 1;
			},
			options: { recurseIntoVisited: !1 }
		}), n;
	}
	function hr(e) {
		if (!e.includes(ar)) return e;
		var t = $({
			icuString: e,
			shouldVisit: cr,
			visitor: function(e) {
				e.type = Ze.TYPE.argument, delete e.options;
			},
			options: { recurseIntoVisited: !1 }
		});
		return nt.printAST(t);
	}
	function gr(e) {
		return typeof e == "object" && !!e && "data-_gt" in e && typeof e["data-_gt"] == "object" && !!e["data-_gt"] && "transformation" in e["data-_gt"] && e["data-_gt"]?.transformation === "variable";
	}
	function _r(e) {
		let t = e["data-_gt"]?.variableType || "variable";
		return {
			variableName: d(e, t),
			variableType: rr(t),
			injectionType: e["data-_gt"]?.injectionType || "manual",
			variableValue: e.value === void 0 ? e.date === void 0 ? e["data-_gt-unformatted-value"] === void 0 ? e.children === void 0 ? void 0 : e.children : e["data-_gt-unformatted-value"] : e.date : e.value,
			variableOptions: (() => {
				let t = {
					...e.currency !== void 0 && { currency: e.currency },
					...e.unit !== void 0 && { unit: e.unit },
					...e.baseDate !== void 0 && { baseDate: e.baseDate },
					...e.options !== void 0 && e.options
				};
				return Object.keys(t).length ? t : typeof e["data-_gt-variable-options"] == "string" ? JSON.parse(e["data-_gt-variable-options"]) : e["data-_gt-variable-options"] || void 0;
			})()
		};
	}
	function vr(e, t, n) {
		let r = "", i = null;
		return typeof e == "number" && !i && n && (r = function(e, t, n) {
			t === void 0 && (t = Kn), n === void 0 && (n = [Gn]);
			var r = er.get("PluralRules", n).select(e), i = Math.abs(e);
			if (i === 0 && t.includes("zero")) return "zero";
			if (i === 1) {
				if (t.includes("singular")) return "singular";
				if (t.includes("one")) return "one";
			}
			if (r === "one" && t.includes("singular")) return "singular";
			if (i === 2) {
				if (t.includes("dual")) return "dual";
				if (t.includes("two")) return "two";
			}
			return r === "two" && t.includes("dual") ? "dual" : t.includes(r) ? r : r === "two" && t.includes("dual") ? "dual" : r === "two" && t.includes("plural") ? "plural" : r === "two" && t.includes("other") ? "other" : r === "few" && t.includes("plural") ? "plural" : r === "few" && t.includes("other") ? "other" : r === "many" && t.includes("plural") ? "plural" : r === "many" && t.includes("other") ? "other" : r === "other" && t.includes("plural") ? "plural" : "";
		}(e, Object.keys(n), t)), r && !i && (i = n[r]), i;
	}
	function yr(e) {
		return e && e.props && e.props["data-_gt"] ? e.props["data-_gt"] : null;
	}
	function br({ children: e, defaultLocale: t = Gn, renderVariable: r }) {
		let i = (e) => n.isValidElement(e) ? ((e) => {
			let i = yr(e);
			if (gr(e.props)) {
				let { variableType: n, variableValue: i, variableOptions: a, injectionType: o } = _r(e.props);
				return r({
					variableType: n,
					variableValue: i,
					variableOptions: a,
					locales: [t],
					injectionType: o
				});
			}
			if (i?.transformation === "plural") {
				let n = i.branches || {};
				return a(vr(e.props.n, [t], n) || e.props.children);
			}
			if (i?.transformation === "branch") {
				let { children: t, branch: n, "data-_gt": r, ...o } = e.props;
				return o = i.branches || {}, a(o[n] === void 0 ? t : o[n]);
			}
			return i?.transformation === "fragment" ? n.createElement(n.Fragment, {
				key: e.props.key,
				children: a(e.props.children)
			}) : e.props.children ? n.cloneElement(e, {
				...e.props,
				"data-_gt": void 0,
				children: a(e.props.children)
			}) : n.cloneElement(e, {
				...e.props,
				"data-_gt": void 0
			});
		})(e) : e, a = (e) => Array.isArray(e) ? n.Children.map(e, i) : i(e);
		return a(e);
	}
	function xr(e, t) {
		if (e == null) throw Error("Cannot index into an undefined dictionary");
		return e[t];
	}
	function Sr(e, t, n) {
		e[t] = n;
	}
	function Cr(e, t = 0) {
		let r = t, i = (e) => {
			let { type: t, props: n } = e;
			r += 1;
			let i = {
				id: r,
				injectionType: "manual"
			}, a;
			try {
				a = typeof t == "function" && t._gtt || "";
			} catch {}
			if (a) {
				let e = a.split("-");
				if (e[1] !== "automatic" && e[2] !== "automatic" || (i.injectionType = "automatic"), e[0] === "translate" && (e[0] = "fragment"), e[0] === "variable" && (i.variableType = e?.[1] || "variable"), e[0] === "plural") {
					let e = Object.entries(n).reduce((e, [t, n]) => (function(e) {
						return Kn.includes(e);
					}(t) && (e[t] = Cr(n, r)), e), {});
					Object.keys(e).length && (i.branches = e);
				}
				if (e[0] === "branch") {
					let { children: e, branch: t, ...a } = n, o = Object.fromEntries(Object.entries(a).filter(([e]) => !e.startsWith("data-"))), s = Object.entries(o).reduce((e, [t, n]) => (e[t] = Cr(n, r), e), {});
					Object.keys(s).length && (i.branches = s);
				}
				i.transformation = e[0];
			}
			return i;
		};
		function a(e) {
			return n.isValidElement(e) ? function(e) {
				let { props: t } = e, r = i(e), a = {
					...t,
					"data-_gt": r
				};
				return t.children && !r.variableType && (a.children = o(t.children)), e.type === n.Fragment && (a["data-_gt"].transformation = "fragment"), n.cloneElement(e, a);
			}(e) : e;
		}
		function o(e) {
			return Array.isArray(e) ? n.Children.map(e, a) : a(e);
		}
		return o(e);
	}
	var wr = "@generaltranslation/react-core", Tr = `${wr} Error: Production environments cannot include an api key.`, Er = `${wr} Error: Fetching batched translations failed`, Dr = (e, t) => e ? `${wr} Error: Translation failed for id: ${e}, hash: ${t} ` : `${wr} Error: Translation failed for hash: ${t}`, Or = (e, t) => `${wr} Error: error rendering string ${t ? `for id: "${t}"` : ""} original message: "${e}"`, kr = (e, t, n = "tx") => `${wr} Error: string translation error. ${n}("${e}")${t ? ` with id "${t}"` : ""} could not locate translation.`, Ar = (e) => `${wr} Error: Dictionary subtree not found for id: "${e}"`, jr = (e) => `${wr} Error: Invalid ICU string dictionary entry found for id: "${e}"`, Mr = `${wr} Warning: Translation cloud services require a project ID! Find yours at generaltranslation.com/dashboard.`, Nr = (e) => `${wr} Warning: No valid dictionary entry found for id: "${e}"`, Pr = `${wr} Warning: A development API key is required for runtime translation!  Find your development API key: generaltranslation.com/dashboard.  (Or, disable this warning message by setting runtimeUrl to an empty string which disables runtime translation.)`, Fr = `${wr} Warning: Runtime translation timed out.`, Ir = `${wr} Warning: No dictionary was found. Ensure you are either passing your dictionary to the <GTProvider>.`;
	function Lr(e) {
		return /* @__PURE__ */ Error(`${wr}: The ${e} function was not overridden. This is likely the result of importing directly from "generaltranslation/react-core".`);
	}
	function Rr({}) {
		throw Lr("readAuthFromEnv");
	}
	var zr = {
		pl: "placeholder",
		ti: "title",
		alt: "alt",
		arl: "aria-label",
		arb: "aria-labelledby",
		ard: "aria-describedby"
	}, Br = (e) => {
		if (!e) return "";
		let { type: t, props: n } = e;
		if (t && typeof t == "function") {
			if ("displayName" in t && typeof t.displayName == "string" && t.displayName) return t.displayName;
			if ("name" in t && typeof t.name == "string" && t.name) return t.name;
		}
		return t && typeof t == "string" ? t : n.href ? "a" : n["data-_gt"]?.id ? `C${n["data-_gt"].id}` : "function";
	}, Vr = (e) => {
		let { props: t } = e, n = { t: Br(e) };
		if (t["data-_gt"]) {
			let e = t["data-_gt"], r = e.transformation;
			if (r === "variable") {
				let n = e.variableType || "variable", r = d(t, n), i = rr(n);
				return {
					i: e.id,
					k: r,
					v: i
				};
			}
			n.i = e.id, n.d = ((e, t, n) => {
				let r = Object.entries(zr).reduce((e, [n, r]) => (t[r] && (e[n] = t[r]), e), {});
				if (e === "plural" && n) {
					let e = {};
					Object.entries(n).forEach(([t, n]) => {
						e[t] = Ur(n);
					}), r = {
						...r,
						b: e,
						t: "p"
					};
				}
				if (e === "branch" && n) {
					let e = {};
					Object.entries(n).forEach(([t, n]) => {
						e[t] = Ur(n);
					}), r = {
						...r,
						b: e,
						t: "b"
					};
				}
				return Object.keys(r).length ? r : void 0;
			})(r, t, e.branches);
			let i = Object.entries(zr).reduce((e, [n, r]) => (t[r] && (e[n] = t[r]), e), {});
			if (r === "plural" && e.branches) {
				let t = {};
				Object.entries(e.branches).forEach(([e, n]) => {
					t[e] = Ur(n);
				}), i = {
					...i,
					b: t,
					t: "p"
				};
			}
			if (r === "branch" && e.branches) {
				let t = {};
				Object.entries(e.branches).forEach(([e, n]) => {
					t[e] = Ur(n);
				}), i = {
					...i,
					b: t,
					t: "b"
				};
			}
			n.d = Object.keys(i).length ? i : void 0;
		}
		return t.children && (n.c = Ur(t.children)), n;
	}, Hr = (e) => {
		return t = e, n.isValidElement(t) ? Vr(e) : typeof e == "number" ? e.toString() : e;
		var t;
	};
	function Ur(e) {
		return Array.isArray(e) ? e.map(Hr) : Hr(e);
	}
	function Wr(e) {
		if (typeof e == "string") return !0;
		if (Array.isArray(e)) {
			if (typeof e?.[0] != "string") return !1;
			let t = e?.[1];
			if (t === void 0 || t && typeof t == "object") return !0;
		}
		return !1;
	}
	function Gr(e, t) {
		let n = e, r = t.split(".");
		for (let e of r) {
			if (typeof n != "object" && !Array.isArray(n)) return;
			n = xr(n, e);
		}
		return n;
	}
	function Kr(e) {
		if (Array.isArray(e)) {
			if (e.length === 1) return { entry: e[0] };
			if (e.length === 2) return {
				entry: e[0],
				metadata: e[1]
			};
		}
		return { entry: e };
	}
	function qr({ sourceElement: e, targetElement: t, locales: r = [Gn], renderVariable: i }) {
		let { props: a } = e, o = a["data-_gt"], s = o?.transformation, c = t.d, l = {};
		if (c && Object.entries(zr).forEach(([e, t]) => {
			c[e] && (l[t] = c[e]);
		}), s === "plural") {
			let n = e.props.n;
			return Jr({
				source: vr(n, r, o.branches || {}) || e.props.children,
				target: vr(n, r, t.d?.b || {}) || t.c,
				locales: r,
				renderVariable: i
			});
		}
		if (s === "branch") {
			let { branch: e, children: n } = a;
			return Jr({
				source: (o.branches || {})[e] || n,
				target: (t.d?.b || {})[e] || t.c,
				locales: r,
				renderVariable: i
			});
		}
		return s === "fragment" && t.c ? n.createElement(n.Fragment, {
			key: e.props.key,
			children: Jr({
				source: a.children,
				target: t.c,
				locales: r,
				renderVariable: i
			})
		}) : a?.children && t?.c ? n.cloneElement(e, {
			...a,
			...l,
			"data-_gt": void 0,
			children: Jr({
				source: a.children,
				target: t.c,
				locales: r,
				renderVariable: i
			})
		}) : br({
			children: e,
			defaultLocale: r[0],
			renderVariable: i
		});
	}
	function Jr({ source: e, target: r, locales: i = [Gn], renderVariable: a }) {
		if (r == null && e) return br({
			children: e,
			defaultLocale: i[0],
			renderVariable: a
		});
		if (typeof r == "string") return r;
		if (Array.isArray(r) && !Array.isArray(e) && e && (e = [e]), Array.isArray(e) && Array.isArray(r)) {
			let o = {}, s = {}, c = {}, l = e.filter((e) => {
				if (n.isValidElement(e)) {
					if (!gr(e.props)) return !0;
					{
						let { variableName: t, variableValue: n, variableOptions: r, injectionType: i } = _r(e.props);
						o[t] = n, s[t] = r, c[t] = i;
					}
				}
				return !1;
			}), u = (e) => l.find((t) => {
				let n = yr(t);
				return n?.id === void 0 ? !1 : n.id === e.i;
			}) || l.shift();
			return r.map((e, r) => {
				if (typeof e == "string") return t.jsx(n.Fragment, { children: e }, `string_${r}`);
				if (tr(e)) return t.jsx(n.Fragment, { children: a({
					variableType: e.v || "v",
					variableValue: o[e.k],
					variableOptions: s[e.k],
					locales: i,
					injectionType: c[e.k] || "manual"
				}) }, `var_${r}`);
				let l = u(e);
				return l ? t.jsx(n.Fragment, { children: qr({
					sourceElement: l,
					targetElement: e,
					locales: i,
					renderVariable: a
				}) }, `element_${r}`) : null;
			});
		}
		if (r && typeof r == "object" && !Array.isArray(r)) {
			let t = tr(r) ? "variable" : "element";
			if (n.isValidElement(e)) {
				if (t === "element") return qr({
					sourceElement: e,
					targetElement: r,
					locales: i,
					renderVariable: a
				});
				if (gr(e.props)) {
					let { variableValue: t, variableOptions: n, variableType: r, injectionType: o } = _r(e.props);
					return a({
						variableType: r,
						variableValue: t,
						variableOptions: n,
						locales: i,
						injectionType: o
					});
				}
			}
		}
		return br({
			children: e,
			defaultLocale: i[0],
			renderVariable: a
		});
	}
	var Yr = (e = "production") => ({
		method: "default",
		timeout: e === "development" ? 8e3 : 12e3
	});
	function Xr(e) {
		return e !== void 0 && (typeof e == "string" || !!Array.isArray(e) && (e.length === 1 || e.length === 2) && typeof e[0] == "string" && (e.length !== 2 || typeof e[1] == "object" && e[1] !== null && ("$context" in e[1] || "$maxChars" in e[1] || "$_hash" in e[1])));
	}
	var Zr = (e) => typeof e == "string" || Array.isArray(e), Qr = (e) => typeof e == "object" && !!e && !Array.isArray(e);
	function $r(e, t) {
		if (Array.isArray(e)) return e.map((e, n) => Xr(e) ? t[n] : $r(e, t[n]));
		let n = {
			...Object.fromEntries(Object.entries(e).filter(([, e]) => Zr(e))),
			...Object.fromEntries(Object.entries(t).filter(([, e]) => Zr(e)))
		}, r = Object.entries(e).filter(([, e]) => Qr(e)).map(([e]) => e), i = Object.entries(t).filter(([, e]) => Qr(e)).map(([e]) => e), a = new Set([...r, ...i]);
		for (let r of a) n[r] = $r(xr(e, r) || {}, xr(t, r) || {});
		return n;
	}
	function ei({ dictionary: e, id: t }) {
		if (t === "") return e;
		let n = e, r = t.split(".");
		for (let e of r) n = xr(n, e);
		return n;
	}
	var ti = [
		"constructor",
		"prototype",
		"__proto__"
	];
	function ni(e, t, n, r) {
		if (Xr(t)) return e;
		let i = n.split(".");
		i.forEach((e) => {
			if (function(e) {
				return !!ti.includes(e);
			}(e)) throw Error(`Invalid key: ${e}`);
		}), t ||= {};
		for (let e of i.slice(0, -1)) xr(t, e) ?? Sr(t, e, Array.isArray(xr(r, e)) ? [] : {}), t = xr(t, e), r = xr(r, e);
		Sr(t, i[i.length - 1], e);
	}
	function ri(e) {
		let t = {};
		return Array.isArray(e) && (t = []), Object.entries(e).forEach(([e, n]) => {
			if (Xr(n)) {
				let { entry: r } = Kr(n);
				Sr(t, e, r);
			} else Sr(t, e, ri(n));
		}), t;
	}
	var ii = function() {
		return ii = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, ii.apply(this, arguments);
	};
	function ai(e) {
		return Hn.SHA256(e).toString(Hn.enc.Hex).slice(0, 16);
	}
	function oi(e, t) {
		var n, r = e.source, i = e.context, a = e.id, o = e.maxChars, s = e.dataFormat;
		t === void 0 && (t = ai), n = s === "JSX" ? ci(r) : r;
		var c = ii(ii(ii(ii({ source: n }, a && { id: a }), i && { context: i }), o != null && { maxChars: Math.abs(o) }), s && { dataFormat: s });
		return t(rt(c));
	}
	var si = function(e) {
		if (e && typeof e == "object") {
			var t = {};
			if ("c" in e && e.c && (t.c = ci(e.c)), "d" in e) {
				var n = e?.d;
				n != null && n.b && (t.b = Object.fromEntries(Object.entries(n.b).map(function(e) {
					return [e[0], ci(e[1])];
				}))), n != null && n.t && (t.t = n.t);
			}
			return function(e) {
				var t = e;
				if (t && typeof t == "object" && typeof t.k == "string") {
					var n = Object.keys(t);
					if (n.length === 1 || n.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || n.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
				}
				return !1;
			}(e) ? ii({ k: e.k }, e.v && { v: e.v }) : t;
		}
		return e;
	};
	function ci(e) {
		return Array.isArray(e) ? e.map(si) : si(e);
	}
	function li(e, t = "") {
		let n = !1;
		return Object.entries(e).forEach(([r, i]) => {
			let a = t ? `${t}.${r}` : r;
			if (Xr(i)) {
				let { entry: t, metadata: o } = Kr(i);
				o?.$_hash || (o ||= {}, o.$_hash = oi({
					source: pr(t),
					...o?.$context && { context: o.$context },
					...o?.$maxChars != null && { maxChars: Math.abs(o.$maxChars) },
					id: a,
					dataFormat: "ICU"
				}), Sr(e, r, [t, o]), n = !0);
			} else {
				let { updateDictionary: e } = li(i, a);
				n ||= e;
			}
		}), {
			dictionary: e,
			updateDictionary: n
		};
	}
	function ui(e, t, n) {
		let r = ei({
			dictionary: e,
			id: n
		});
		if (!r) throw Error(Ar(n));
		if (Xr(r)) throw Error(`${wr} Error: Cannot inject and merge a dictionary entry`);
		return function(e, t, n) {
			let r = Gr(e, n);
			if (!r) throw Error(Ar(n));
			if (Xr(r)) throw Error(`${wr} Error: Cannot inject and merge a dictionary entry`);
			let i = n.split("."), a = i.slice(0, -1), o = i[i.length - 1], s = e;
			return a.forEach((e) => {
				s = xr(s, e);
			}), Sr(s, o, t), e;
		}(e, $r(r, t), n);
	}
	function di(e, t, n = "") {
		let r = [];
		return Object.entries(e).forEach(([e, i]) => {
			let a = n ? `${n}.${e}` : e;
			if (Xr(i)) {
				let { entry: n, metadata: o } = Kr(i);
				xr(t, e) || r.push({
					source: n,
					metadata: {
						$id: a,
						$context: o?.$context,
						$maxChars: o?.$maxChars,
						$_hash: o?.$_hash || ""
					}
				});
			} else r.push(...di(i, xr(t, e) || (Array.isArray(i) ? [] : {}), a));
		}), r;
	}
	var fi = function(e, t) {
		return fi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, fi(e, t);
	};
	function pi(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
		function n() {
			this.constructor = e;
		}
		fi(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
	}
	var mi = function() {
		return mi = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, mi.apply(this, arguments);
	};
	function hi(e, t, n, r) {
		return new (n ||= Promise)(function(t, i) {
			function a(e) {
				try {
					s(r.next(e));
				} catch (e) {
					i(e);
				}
			}
			function o(e) {
				try {
					s(r.throw(e));
				} catch (e) {
					i(e);
				}
			}
			function s(e) {
				var r;
				e.done ? t(e.value) : (r = e.value, r instanceof n ? r : new n(function(e) {
					e(r);
				})).then(a, o);
			}
			s((r = r.apply(e, [])).next());
		});
	}
	function gi(e, t) {
		var n, r, i, a = {
			label: 0,
			sent: function() {
				if (1 & i[0]) throw i[1];
				return i[1];
			},
			trys: [],
			ops: []
		}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
		return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
			return this;
		}), o;
		function s(s) {
			return function(c) {
				return function(s) {
					if (n) throw TypeError("Generator is already executing.");
					for (; o && (o = 0, s[0] && (a = 0)), a;) try {
						if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
						switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
							case 0:
							case 1:
								i = s;
								break;
							case 4: return a.label++, {
								value: s[1],
								done: !1
							};
							case 5:
								a.label++, r = s[1], s = [0];
								continue;
							case 7:
								s = a.ops.pop(), a.trys.pop();
								continue;
							default:
								if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
									a = 0;
									continue;
								}
								if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
									a.label = s[1];
									break;
								}
								if (s[0] === 6 && a.label < i[1]) {
									a.label = i[1], i = s;
									break;
								}
								if (i && a.label < i[2]) {
									a.label = i[2], a.ops.push(s);
									break;
								}
								i[2] && a.ops.pop(), a.trys.pop();
								continue;
						}
						s = t.call(e, a);
					} catch (e) {
						s = [6, e], r = 0;
					} finally {
						n = i = 0;
					}
					if (5 & s[0]) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					};
				}([s, c]);
			};
		}
	}
	var _i, vi;
	(function(e) {
		e.GT_REMOTE = "gt-remote", e.REMOTE = "remote", e.CUSTOM = "custom", e.DISABLED = "disabled";
	})(_i ||= {}), function(e) {
		e.GT = "gt", e.CUSTOM = "custom", e.DISABLED = "disabled";
	}(vi ||= {}), function(e) {
		function t() {
			var t = e !== null && e.apply(this, arguments) || this;
			return t.type = "fallback-storage-adapter", t.storage = {}, t;
		}
		pi(t, e), t.prototype.getItem = function(e) {
			return this.storage[e];
		}, t.prototype.setItem = function(e, t) {
			this.storage[e] = t;
		}, t.prototype.removeItem = function(e) {
			delete this.storage[e];
		};
	}(function() {});
	var yi = function() {
		function e(e) {
			this.cache = {}, this.fallbackPromises = {}, this.cache = structuredClone(e);
		}
		return e.prototype.setCache = function(e, t) {
			this.cache[e] = t;
		}, e.prototype.getCache = function(e) {
			var t = this.genKey(e);
			return this.cache[t];
		}, e.prototype.getInternalCache = function() {
			return this.cache;
		}, e.prototype.missCache = function(e) {
			return hi(this, 0, void 0, function() {
				var t, n, r;
				return gi(this, function(i) {
					switch (i.label) {
						case 0: return t = this.genKey(e), this.fallbackPromises[t] === void 0 ? [3, 2] : [4, this.fallbackPromises[t]];
						case 1: return [2, i.sent()];
						case 2: n = this.fallback(e), this.fallbackPromises[t] = n, i.label = 3;
						case 3: return i.trys.push([
							3,
							,
							5,
							6
						]), [4, n];
						case 4: return r = i.sent(), this.cache[t] = r, [2, r];
						case 5: return delete this.fallbackPromises[t], [7];
						case 6: return [2];
					}
				});
			});
		}, e;
	}();
	function bi(e, t) {
		return oi(mi(mi(mi(mi({ source: t.$format === "ICU" ? pr(e) : e }, t?.$context && { context: t.$context }), t?.$id && { id: t.$id }), "$maxChars" in t && t.$maxChars != null && { $maxChars: Math.abs(t.$maxChars) }), { dataFormat: t.$format }));
	}
	var xi = function(e) {
		function t(t) {
			var n = t.init, r = t.translateMany, i = e.call(this, n) || this;
			return i._queue = [], i._batchTimer = null, i._activeRequests = 0, i._translateMany = r, i;
		}
		return pi(t, e), t.prototype.get = function(e) {
			return this.getCache(e);
		}, t.prototype.miss = function(e) {
			return this.missCache(e);
		}, t.prototype.genKey = function(e) {
			return bi(e.message, e.options);
		}, t.prototype.fallback = function(e) {
			var t = this._enqueueTranslation(e);
			return this._queue.length >= 25 ? this._flushNow() : this._scheduleBatch(), t;
		}, t.prototype._flushNow = function() {
			this._batchTimer &&= (clearTimeout(this._batchTimer), null), this._drainQueue();
		}, t.prototype._scheduleBatch = function() {
			var e = this;
			this._batchTimer ||= setTimeout(function() {
				e._batchTimer = null, e._drainQueue();
			}, 50);
		}, t.prototype._drainQueue = function() {
			for (; this._queue.length > 0 && this._activeRequests < 100;) {
				var e = this._queue.splice(0, 25);
				this._sendBatchRequest(e);
			}
			this._queue.length > 0 && this._scheduleBatch();
		}, t.prototype._enqueueTranslation = function(e) {
			var t = this, n = this.genKey(e), r = e.options;
			return new Promise(function(i, a) {
				t._queue.push({
					key: n,
					source: e.message,
					metadata: mi(mi(mi(mi({}, r?.$context && { context: r.$context }), r?.$id && { id: r.$id }), "$maxChars" in r && r.$maxChars != null && { $maxChars: Math.abs(r.$maxChars) }), { dataFormat: r.$format }),
					resolve: function(e) {
						return i(e);
					},
					reject: a
				});
			});
		}, t.prototype._sendBatchRequest = function(e) {
			return hi(this, 0, void 0, function() {
				var t, n;
				return gi(this, function(r) {
					switch (r.label) {
						case 0: return this._activeRequests++, t = function(e) {
							return e.reduce(function(e, t) {
								return e[t.key] = {
									source: t.source,
									metadata: t.metadata
								}, e;
							}, {});
						}(e), [4, this._sendBatchRequestWithErrorHandling(e, t)];
						case 1: return (n = r.sent()) && this._handleTranslationResponse(e, n), this._activeRequests--, [2];
					}
				});
			});
		}, t.prototype._sendBatchRequestWithErrorHandling = function(e, t) {
			return hi(this, 0, void 0, function() {
				var n, r, i;
				return gi(this, function(a) {
					switch (a.label) {
						case 0: return a.trys.push([
							0,
							2,
							,
							3
						]), [4, this._translateMany(t)];
						case 1: return [2, a.sent()];
						case 2:
							for (n = a.sent(), r = 0, i = e; r < i.length; r++) i[r].reject(n);
							return [2, void 0];
						case 3: return [2];
					}
				});
			});
		}, t.prototype._handleTranslationResponse = function(e, t) {
			for (var n = 0, r = e; n < r.length; n++) {
				var i = r[n], a = i.key, o = t[a];
				if (o && o.success) {
					var s = o.translation;
					this.setCache(a, s), i.resolve(s);
				} else i.reject(o?.error);
			}
		}, t;
	}(yi);
	(function(e) {
		function t(t) {
			var n = t.init, r = n === void 0 ? {} : n, i = t.ttl, a = t.loadTranslations, o = t.createTranslateMany, s = e.call(this, r) || this;
			return s.ttl = 6e4, s.ttl = i === null ? -1 : i ?? 6e4, s._translationLoader = a, s._createTranslateMany = o, s;
		}
		pi(t, e), t.prototype.get = function(e) {
			var t = this.getCache(e);
			if (t && !(t.expiresAt > 0 && t.expiresAt < Date.now())) return t.translationsCache;
		}, t.prototype.miss = function(e) {
			return hi(this, 0, void 0, function() {
				return gi(this, function(t) {
					switch (t.label) {
						case 0: return [4, this.missCache(e)];
						case 1: return [2, t.sent().translationsCache];
					}
				});
			});
		}, t.prototype.genKey = function(e) {
			return e;
		}, t.prototype.fallback = function(e) {
			return hi(this, 0, void 0, function() {
				var t, n, r, i;
				return gi(this, function(a) {
					switch (a.label) {
						case 0: return t = this._translationLoader(e), n = this.ttl < 0 ? this.ttl : Date.now() + this.ttl, r = xi.bind, i = {}, [4, t];
						case 1: return [2, {
							translationsCache: new (r.apply(xi, [void 0, (i.init = a.sent(), i.translateMany = this._createTranslateMany(e), i)]))(),
							expiresAt: n
						}];
					}
				});
			});
		};
	})(yi);
	function Si(e) {
		return typeof e == "string" && e.lastIndexOf(":") !== -1 ? e.slice(0, e.lastIndexOf(":")) : e;
	}
	function Ci(e) {
		if (e.lastIndexOf(":") === -1) return null;
		var t = e.slice(e.lastIndexOf(":") + 1);
		try {
			return JSON.parse(ir(t));
		} catch {
			return null;
		}
	}
	function wi({ children: e }) {
		return e;
	}
	function Ti(e) {
		return wi(e);
	}
	wi._gtt = "derive", Ti._gtt = "derive";
	var Ei = n.createContext(void 0);
	function Di(e = "useGTContext() must be used within a <GTProvider>!") {
		let t = n.useContext(Ei);
		if (t === void 0) throw Error(e);
		return t;
	}
	function Oi({ children: e, locales: i, options: a = {} }) {
		let o = n.useContext(Ei);
		if (e == null) return null;
		let s = o?.gt || new r.GT(), c = typeof e == "string" ? parseFloat(e) : e;
		return typeof c == "number" && (i || (i ||= [], o?.locale && i.push(o.locale), o?.defaultLocale && i.push(o.defaultLocale)), c = s.formatNum(c, {
			locales: i,
			...a
		})), t.jsx(t.Fragment, { children: c });
	}
	function ki({ children: e }) {
		return t.jsx(t.Fragment, { children: e });
	}
	function Ai({ children: e, currency: i = "USD", locales: a, options: o = {} }) {
		let s = n.useContext(Ei);
		if (e == null) return null;
		let c = s?.gt || new r.GT(), l = typeof e == "string" ? parseFloat(e) : e;
		return typeof l == "number" && (a || (a ||= [], s?.locale && a.push(s.locale), s?.defaultLocale && a.push(s.defaultLocale)), l = c.formatCurrency(l, i, {
			locales: a,
			...o
		})), t.jsx(t.Fragment, { children: l });
	}
	function ji({ children: e, locales: i, options: a = {} }) {
		let o = n.useContext(Ei);
		if (e == null) return null;
		let s = o?.gt || new r.GT();
		i || (i = [], o?.locale && i.push(o.locale), o?.defaultLocale && i.push(o.defaultLocale));
		let c = s.formatDateTime(e, {
			locales: i,
			...a
		}).replace(/[\u200F\u202B\u202E]/g, "");
		return t.jsx(t.Fragment, { children: c });
	}
	function Mi({ date: e, children: i, value: a, unit: o, baseDate: s, locales: c, options: l = {} }) {
		let u = n.useContext(Ei), d = u?.gt || new r.GT();
		c || (c = [], u?.locale && c.push(u.locale), u?.defaultLocale && c.push(u.defaultLocale));
		let f = e ?? i, p;
		if (process.env.NODE_ENV !== "development" || a === void 0 || o || console.warn("<RelativeTime>: `value` was provided without `unit`. The `value` prop will be ignored."), a !== void 0 && o) p = d.formatRelativeTime(a, o, {
			locales: c,
			numeric: l.numeric,
			style: l.style,
			localeMatcher: l.localeMatcher
		});
		else {
			if (f == null) return null;
			p = d.formatRelativeTimeFromDate(f, {
				locales: c,
				baseDate: s ?? /* @__PURE__ */ new Date(),
				numeric: l.numeric,
				style: l.style,
				localeMatcher: l.localeMatcher
			});
		}
		return t.jsx(t.Fragment, { children: p });
	}
	Oi._gtt = "variable-number", ki._gtt = "variable-variable", Ai._gtt = "variable-currency", ji._gtt = "variable-datetime", Mi._gtt = "variable-relative-time";
	var Ni = ({ variableType: e, variableValue: n, variableOptions: r }) => {
		if (e === "n") {
			let e = r;
			return t.jsx(Oi, {
				options: e,
				children: n
			});
		}
		if (e === "d") {
			let e = r;
			return t.jsx(ji, {
				options: e,
				children: n
			});
		}
		if (e === "c") {
			let e = r;
			return t.jsx(Ai, {
				options: e,
				children: n
			});
		}
		if (e === "rt") {
			let e = r;
			if (typeof n == "number" && e?.unit) return t.jsx(Mi, {
				value: n,
				unit: e.unit,
				baseDate: e?.baseDate,
				options: e
			});
			let i = n instanceof Date ? n : typeof n == "string" || typeof n == "number" ? new Date(n) : void 0;
			return t.jsx(Mi, {
				date: i && !isNaN(i.getTime()) ? i : void 0,
				baseDate: e?.baseDate,
				options: e
			});
		}
		return t.jsx(ki, { children: n });
	}, Pi = function() {
		return Pi = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, Pi.apply(this, arguments);
	}, Fi = function(e) {
		console.warn(e);
	}, Ii = function(e) {
		return `String interpolation failed for message: "${e}".`;
	};
	function Li(e, t) {
		var n;
		if (!e) return e;
		var i = t.$_fallback, a = function(e) {
			return Object.fromEntries(Object.entries(e).filter(function(e) {
				var t = e[0];
				return t !== "$id" && t !== "$context" && t !== "$maxChars" && t !== "$hash" && t !== "$_hash" && t !== "$_source" && t !== "$_fallback" && t !== "$format" && t !== "$_locales" && t !== "$locale";
			}));
		}(t);
		try {
			var o = mr(i || ""), s = function(e, t, n, i) {
				try {
					return r.formatMessage(e, {
						variables: t,
						locales: n,
						dataFormat: i
					});
				} catch {
					return Fi(Ii(e)), e;
				}
			}(Object.keys(o).length ? hr(e) : e, Pi(Pi(Pi({}, a), o), ((n = {})[ar] = "other", n)), t.$locale ?? t.$_locales, t.$format);
			return r.formatCutoff(s, { maxChars: t.$maxChars });
		} catch {
			return Fi(Ii(e)), t.$_fallback == null ? r.formatCutoff(e, { maxChars: t.$maxChars }) : Li(t.$_fallback, Pi(Pi({}, t), { $_fallback: void 0 }));
		}
	}
	var Ri = Infinity, zi = globalThis.__DANGEROUS_USE_REGISTRY__ ?? (globalThis.__DANGEROUS_USE_REGISTRY__ = /* @__PURE__ */ new Map());
	function Bi(e, t = /* @__PURE__ */ new WeakSet()) {
		let n = typeof e;
		if (e == null || n === "number" || n === "boolean" || n === "bigint") return String(e);
		if (n === "string") return JSON.stringify(e);
		if (n === "symbol") return `:sym(${e.description ?? ""})`;
		if (n === "function") return `:fn(${e.name || "anon"})`;
		if (Array.isArray(e)) return `[${e.map((e) => Bi(e, t)).join(",")}]`;
		if (n === "object") {
			let n = e;
			if (t.has(n)) return ":circular";
			t.add(n);
			let r = Object.keys(n).sort().map((e) => `${JSON.stringify(e)}:${Bi(n[e], t)}`).join(",");
			return t.delete(n), `{${r}}`;
		}
		return String(e);
	}
	function Vi(e) {
		return typeof e == "string" || typeof e == "number" || typeof e == "symbol" ? String(e) : Bi(e);
	}
	function Hi(e, t, n) {
		let r = zi, i = Date.now(), a = Ri, o = Vi(e), s = r.get(o);
		if (s && s.expiresAt > i) return s.thenable;
		let c = function(e) {
			let t = e;
			return t.status ?? (t.status = "pending", e.then((e) => {
				t.status = "fulfilled", t.value = e;
			}, (e) => {
				t.status = "rejected", t.reason = e;
			})), t;
		}(t()), l = {
			thenable: c,
			createdAt: i,
			expiresAt: i + a
		};
		if (r.set(o, l), a !== Infinity) {
			let e = () => {
				let e = r.get(o);
				e && e.thenable === c && setTimeout(() => {
					let e = r.get(o);
					e && e.thenable === c && r.delete(o);
				}, Math.max(0, a));
			};
			c.then(e, e);
		}
		return c;
	}
	var Ui;
	try {
		Ui = Function("o", "k", "return o[k]")(s, "use");
	} catch {}
	var Wi = Ui;
	function Gi({ children: e, id: r, context: i, _hash: a, ...o }) {
		if (!e) return;
		r ??= o?.$id, i ??= o?.$context;
		let s = o?.$maxChars, { translations: c, translationRequired: l, developmentApiEnabled: u, dialectTranslationRequired: d, registerJsxForTranslation: f, renderSettings: p, locale: m, defaultLocale: h } = Di("<T> used on the client-side outside of <GTProvider>"), g = n.useMemo(() => Cr(e), [e]), _;
		r && (_ = c?.[r]), _ === void 0 && a && (_ = c?.[a]);
		let [v, y] = n.useMemo(() => {
			if (!l || _) return [void 0, ""];
			let e = Ur(g);
			return [e, oi({
				source: e,
				...i && { context: i },
				...s != null && { maxChars: Math.abs(s) },
				...r && { id: r },
				dataFormat: "JSX"
			})];
		}, [
			g,
			i,
			r,
			s,
			l,
			_
		]);
		_ === void 0 && (_ = c?.[y]);
		let b = () => br({
			children: g,
			defaultLocale: h,
			renderVariable: Ni
		}), x = (e) => Jr({
			source: g,
			target: e,
			locales: [m, h],
			renderVariable: Ni
		});
		if (!l || c && !_ && !u || _ === null) return t.jsx(t.Fragment, { children: b() });
		if (_) return t.jsx(n.Suspense, {
			fallback: x(_),
			children: x(_)
		});
		let S = async () => {
			if (!u || !m) return b();
			if (_) return x(_);
			try {
				let e = await f({
					source: v,
					targetLocale: m,
					metadata: {
						id: r,
						hash: y,
						context: i,
						...s != null && { maxChars: s }
					}
				});
				return e ? x(e) : b();
			} catch (e) {
				return console.warn(e), b();
			}
		};
		if (Wi) {
			let e = Wi(Hi([
				"getTranslationPromise",
				u,
				JSON.stringify(v),
				m,
				r,
				y,
				i,
				s
			], () => S()));
			return t.jsx(n.Suspense, {
				fallback: e,
				children: e
			});
		}
		let C;
		return C = p.method === "skeleton" ? "" : p.method === "replace" || d ? b() : "", t.jsx(n.Suspense, {
			fallback: C,
			children: S()
		});
	}
	Gi._gtt = "translate-client";
	function Ki({ gt: e, locale: t, versionId: r, defaultLocale: i, runtimeUrl: a, renderSettings: o, setTranslations: s, environment: c, ...l }) {
		let u = !!e.projectId && !!a && !!e.devApiKey && c === "development";
		if (!u) {
			let e = (e) => Promise.reject(/* @__PURE__ */ Error(`${e}() failed because translation is disabled`));
			return {
				developmentApiEnabled: u,
				registerIcuForTranslation: () => e("registerIcuForTranslation"),
				registerJsxForTranslation: () => e("registerJsxForTranslation")
			};
		}
		let d = n.useRef({
			gt: e,
			locale: t,
			baseMetadata: {
				...l,
				projectId: e.projectId,
				sourceLocale: i
			},
			timeout: o.timeout
		});
		d.current.gt = e, d.current.locale = t, d.current.baseMetadata = {
			...l,
			projectId: e.projectId,
			sourceLocale: i
		}, d.current.timeout = o.timeout;
		let f = n.useRef(!1), p = n.useRef(null), [m, h] = n.useState(0), g = n.useCallback((e) => {
			s((t) => {
				let n = Object.keys(e);
				if (n.length === 0) return t;
				let r = t ? { ...t } : {}, i = !1;
				for (let a of n) {
					let n = e[a], o = t?.[a];
					Object.is(o, n) || (r[a] = n, i = !0);
				}
				return i ? r : t;
			});
		}, [s]), _ = n.useCallback((e) => {
			p.current = {
				...p.current ?? {},
				...e
			}, f.current && h((e) => e + 1);
		}, []);
		n.useEffect(() => {
			if (f.current = !0, p.current) {
				let e = p.current;
				p.current = null, g(e);
			}
			return () => {
				f.current = !1;
			};
		}, [g]), n.useEffect(() => {
			if (!f.current) return;
			let e = p.current;
			e && (p.current = null, g(e));
		}, [m, g]);
		let v = n.useRef(0), y = n.useRef(/* @__PURE__ */ new Map()), b = n.useRef(/* @__PURE__ */ new Map()), x = n.useCallback(async (e) => {
			if (e.size === 0) return {};
			v.current += 1;
			let { gt: t, locale: n, baseMetadata: r, timeout: i } = d.current, a = Array.from(e.values()), o = {}, s = /* @__PURE__ */ new Map();
			try {
				let e = {};
				for (let t of a) {
					let { source: n, metadata: r } = t;
					e[r.hash] = {
						source: n,
						metadata: {
							...r,
							dataFormat: t.dataFormat
						}
					};
				}
				let c = await t.translateMany(e, {
					...r,
					targetLocale: n
				}, i);
				for (let e of a) {
					let { hash: t, id: n } = e.metadata, r = c[t];
					if (r && r.success) {
						let e = r.translation;
						o[t] = e, s.set(t, e);
					} else if (r && r.error) {
						let e = Dr(n, t);
						console.warn(`${e} ${r.error || "An upstream error occurred."}`), o[t] = null, s.set(t, null);
					} else {
						let e = Dr(n, t);
						console.warn(`${e} Unknown response format.`, r), o[t] = null, s.set(t, null);
					}
				}
			} catch (e) {
				e?.name === "AbortError" ? console.warn(Fr) : console.warn(Er, e), a.forEach((e) => {
					o[e.metadata.hash] = null, s.set(e.metadata.hash, null);
				});
			} finally {
				--v.current, a.forEach((e) => {
					let t = s.get(e.metadata.hash);
					t === void 0 ? (console.warn(`No translation result for ${e.metadata.hash}; resolving as null.`), e.resolve(null)) : e.resolve(t);
				});
			}
			return o;
		}, []), S = n.useRef(null), C = n.useRef(async () => {}), w = n.useCallback((e) => {
			_(e), y.current.size > 0 && (S.current = setTimeout(() => {
				S.current = null, C.current();
			}, 50));
		}, [_]), T = n.useCallback(() => {
			C.current = async () => {
				if (v.current >= 100) return void (S.current = setTimeout(() => {
					S.current = null, C.current();
				}, 50));
				let e = y.current;
				if (e.size === 0) return;
				let t = Array.from(e.entries()).slice(0, Math.min(25, e.size)), n = new Map(t);
				t.forEach(([t]) => e.delete(t)), w(await x(n));
			};
		}, [x, w]), E = n.useCallback((e = !1) => {
			if (T(), e) return S.current &&= (clearTimeout(S.current), null), void C.current();
			S.current ||= setTimeout(() => {
				S.current = null, C.current();
			}, 50);
		}, [T]), D = n.useCallback((e) => (t) => {
			let n = `${t.metadata.hash}:${t.targetLocale}`, r = b.current.get(n);
			if (r) return r;
			let i = new Promise((r) => {
				let i = e === "JSX" ? {
					dataFormat: "JSX",
					source: t.source,
					metadata: {
						...t.metadata,
						...t.metadata.maxChars != null && { maxChars: Math.abs(t.metadata.maxChars) }
					},
					resolve: r,
					reject: () => {}
				} : {
					dataFormat: "ICU",
					source: t.source,
					metadata: {
						...t.metadata,
						...t.metadata.maxChars != null && { maxChars: Math.abs(t.metadata.maxChars) }
					},
					resolve: r,
					reject: () => {}
				};
				y.current.set(n, i), E(y.current.size >= 25 && v.current < 100);
			}).finally(() => {
				b.current.delete(n);
			});
			return b.current.set(n, i), i;
		}, [E]), O = n.useMemo(() => D("ICU"), [D]), k = n.useMemo(() => D("JSX"), [D]);
		return n.useEffect(() => () => {
			S.current && clearTimeout(S.current);
		}, []), {
			developmentApiEnabled: u,
			registerIcuForTranslation: O,
			registerJsxForTranslation: k
		};
	}
	function qi({ gt: e, translations: t, locale: n, defaultLocale: r, translationRequired: i, developmentApiEnabled: a, registerIcuForTranslation: o, environment: s }) {
		function c({ message: t, variables: n, locales: r, fallback: i, id: a, maxChars: o, format: l }) {
			try {
				let a = mr(i || ""), s = e.formatMessage(Object.keys(a).length ? hr(t) : t, {
					locales: r,
					variables: {
						...n,
						...a,
						[ar]: "other"
					},
					dataFormat: l
				});
				return e.formatCutoff(s, { maxChars: o });
			} catch (l) {
				if (s === "production") console.warn(((e, t) => `${wr} Warning: failed to render string ${t ? `for id: "${t}"` : ""} original message: "${e}"`)(t, a), "Error: ", l);
				else {
					if (!i) throw Error(`${Or(t, a)} Error: ${l}`);
					console.error(Or(t, a), "Error: ", l);
				}
				return i ? c({
					message: i,
					locales: r,
					variables: n,
					id: a,
					maxChars: o
				}) : e.formatCutoff(t, { maxChars: o });
			}
		}
		function l(e, t = {}) {
			if (!e || typeof e != "string") return null;
			let { $id: n, $context: r, $maxChars: i, $_hash: a, $format: o, ...s } = t;
			return {
				id: n,
				context: r,
				maxChars: i,
				_hash: a,
				variables: s,
				calculateHash: () => oi({
					source: pr(e),
					...r && { context: r },
					...i != null && { maxChars: Math.abs(i) },
					...n && { id: n },
					dataFormat: o || "ICU"
				}),
				renderMessage: (e, t, r) => c({
					message: e,
					locales: t,
					variables: s,
					id: n,
					fallback: r,
					maxChars: i,
					format: o
				})
			};
		}
		function u(e, n, r) {
			let i, a = "";
			return n && (i = t?.[n]), r && i === void 0 && (a = r, i = t?.[r]), i === void 0 && (a = e(), i = t?.[a]), {
				translationEntry: i,
				hash: a
			};
		}
		let d = (e, t = {}, s) => {
			let c = l(e, t);
			if (!c) return "";
			let { id: d, context: f, maxChars: p, _hash: m, calculateHash: h, renderMessage: g } = c;
			if (!i) return g(e, [r]);
			let { translationEntry: _, hash: v } = u(h, d, m);
			return _ === null ? g(e, [r]) : _ ? g(_, [n, r], e) : s?.[v] === void 0 ? a ? (o({
				source: pr(e),
				targetLocale: n,
				metadata: {
					...f && { context: f },
					...d && { id: d },
					...p != null && { maxChars: p },
					hash: v || ""
				}
			}), g(e, [r])) : (console.warn(kr(e, d, "gt")), g(e, [r])) : s?.[v] ? g(s?.[v], [n, r], e) : g(e, [r]);
		};
		return {
			_gtFunction: d,
			_mFunction: (e, s = {}, l) => {
				if (!e) return e;
				let u = Ci(e);
				if (!u || !u.$_hash || !u.$_source) return d(e, s, l);
				let { $_hash: f, $_source: p, $context: m, $hash: h, $id: g, $maxChars: _, $format: v, ...y } = u, b = (e, t, n) => c({
					message: e,
					locales: t,
					variables: y,
					fallback: n,
					maxChars: _,
					format: v
				});
				if (!i) return b(p, [r]);
				let x = t?.[u.$_hash];
				return x === null ? b(p, [r]) : x ? b(x, [n, r], p) : a ? l?.[f] === void 0 ? (o({
					source: pr(p),
					targetLocale: n,
					metadata: {
						...m && { context: m },
						..._ != null && { maxChars: _ },
						hash: f
					}
				}), b(p, [r])) : l?.[f] ? b(l?.[f], [n, r], p) : b(p, [r]) : (console.warn(kr(p, Si(e), "m")), b(p, [r]));
			},
			_filterMessagesForPreload: (e) => {
				let t = [];
				for (let { message: n, ...r } of e) {
					let e = l(n, r);
					if (!e) continue;
					let { id: i, _hash: a, calculateHash: o } = e, { translationEntry: s, hash: c } = u(o, i, a);
					s || t.push({
						message: n,
						...r,
						$_hash: c
					});
				}
				return t;
			},
			_preloadMessages: async (e) => {
				let t = {};
				return await Promise.all(e.map(async ({ message: e, ...r }) => {
					let i = l(e, r);
					if (!i) return;
					let { id: a, context: s, maxChars: c, _hash: d, calculateHash: f } = i, { translationEntry: p, hash: m } = u(f, a, d);
					p && (t[m] = p), t[m] = await o({
						source: pr(e),
						targetLocale: n,
						metadata: {
							...s && { context: s },
							...a && { id: a },
							...c != null && { maxChars: c },
							hash: m
						}
					});
				})), t;
			}
		};
	}
	function Ji(e, t, r, i, a, o, s, c, l, u, d) {
		return n.useCallback((n, c = {}) => {
			if (!t) return "";
			let f = Gr(t, n);
			if (!f) return console.warn(Nr(n)), "";
			if (!Wr(f)) return console.warn(((e) => `${wr} Warning: Invalid dictionary entry found for id: "${e}"`)(n)), "";
			let { entry: p, metadata: m } = Kr(f);
			if (!p || typeof p != "string") return "";
			let { $format: h, ...g } = c, _ = (t, r, i) => {
				try {
					let n = mr(i || ""), a = e.formatMessage(Object.keys(n).length ? hr(t) : t, {
						locales: r,
						variables: {
							...g,
							...n,
							[ar]: "other"
						},
						dataFormat: h
					});
					return e.formatCutoff(a, { maxChars: m?.$maxChars ?? c.$maxChars });
				} catch (a) {
					if (d === "production") console.warn(((e) => `${wr} Warning: Invalid ICU string dictionary entry found for id: "${e}"`)(n), "Error: ", a);
					else {
						if (!i) throw Error(`${jr(n)} Error: ${a}`);
						console.error(jr(n), "Error: ", a);
					}
					return i ? _(i, r) : e.formatCutoff(t, { maxChars: m?.$maxChars ?? c.$maxChars });
				}
			};
			if (!s) return _(p, [o]);
			let v = Gr(r || {}, n);
			if (v && Wr(v)) {
				let { entry: e } = Kr(v);
				return _(e, [a, o]);
			}
			let y = i?.[n], b = "", x = () => oi({
				source: pr(p),
				...m?.$context && { context: m.$context },
				...m?.$maxChars != null && { maxChars: Math.abs(m.$maxChars) },
				id: n,
				dataFormat: "ICU"
			});
			return y ||= (b = x(), i?.[b]), y ? _(y, [a, o], p) : (y === null || l && u({
				source: pr(p),
				targetLocale: a,
				metadata: {
					...m?.$context && { context: m.$context },
					...m?.$maxChars != null && { maxChars: m.$maxChars },
					id: n,
					hash: b || x()
				}
			}), _(p, [o]));
		}, [
			t,
			r,
			i,
			a,
			o,
			s,
			l,
			u,
			c
		]);
	}
	function Yi({ _locale: e, defaultLocale: t, locales: i, ssr: a, localeCookieName: o, customMapping: s, useDetermineLocale: c, enableI18n: l, reloadOnLocaleUpdate: u }) {
		let d = n.useMemo(() => Array.from(new Set([t, ...l ? i : []])), [
			t,
			i,
			l
		]), [f, p] = c({
			locale: e,
			defaultLocale: t,
			locales: d,
			ssr: a,
			localeCookieName: o,
			customMapping: s,
			enableI18n: l,
			reloadOnLocaleUpdate: u
		}), [m, h] = n.useMemo(() => {
			let e = r.requiresTranslation(t, f, d, s), n = e && r.isSameLanguage(t, f);
			if (!s) {
				let e = [];
				if (d.forEach((t) => {
					r.isValidLocale(t) || e.push(t);
				}), e.length) throw Error(((e) => `${wr} Error: Invalid locale codes in your configuration. Specify a list of valid locales or use "customMapping" to define aliases for the following invalid locales: ${e.join(", ")}.`)(e));
			}
			if (s) {
				let e = [];
				if (d.forEach((t) => {
					r.isValidLocale(t, s) || e.push(t);
				}), e.length) throw Error(((e) => `${wr} Error: Invalid canonical locale codes in your configuration: ${e.join(", ")}.`)(e));
			}
			return [e, n];
		}, [
			t,
			f,
			d
		]);
		return {
			locale: f,
			setLocale: p,
			locales: d,
			translationRequired: m,
			dialectTranslationRequired: h
		};
	}
	function Xi({ devApiKey: e, projectId: t, runtimeUrl: a, loadTranslationsType: o, cacheUrl: s, locales: c, environment: l }) {
		n.useEffect(() => {
			if (l === "production" && e) throw Error(Tr);
			if (o === "custom" || !s && !a || t || l !== "development" || console.warn(Mr), t && a && o !== "custom" && !e && l === "development" && console.warn(Pr), a === Wn || s === Un && o === "default") {
				let e = c.filter((e) => !i.getSupportedLocale(e));
				e.length && console.warn(((e) => `${wr} Warning: The following locales are currently unsupported by our service: ${e.map((e) => {
					let { name: t } = r.getLocaleProperties(e);
					return `${e} (${t})`;
				}).join(", ")}`)(e));
			}
		}, [
			e,
			o,
			s,
			a,
			t,
			c
		]);
	}
	async function Zi(e, t) {
		let n = Array.from(new Set([e, r.getLocaleProperties(e).languageCode]));
		for (let e of n) try {
			let n = await t(e);
			if (n) return n;
		} catch {}
		console.warn(Ir);
	}
	function Qi({ _translations: e, translationRequired: t, loadTranslationsType: r, loadTranslations: i, locale: a, cacheUrl: o, projectId: s, _versionId: c, gt: l }) {
		let [u, d] = n.useState(e || (t && r !== "disabled" ? null : {})), f = n.useRef(!1);
		return n.useEffect(() => {
			f.current ? d(t && r !== "disabled" ? null : {}) : f.current = !0;
		}, [a, r]), n.useEffect(() => {
			if (u || !t || r === "disabled") return;
			let e = !0;
			return (async () => {
				let t;
				switch (r) {
					case "custom":
						if (i) try {
							t = await i(a);
						} catch (e) {
							console.error(((e = "") => `${wr} Error: Failed to fetch locally stored translations. If using a custom loadTranslations(${e}), make sure it is correctly implemented.`)(a), e);
						}
						break;
					case "default": try {
						t = await async function({ cacheUrl: e, projectId: t, locale: n, versionId: r, gt: i }) {
							return !t || !e || !n ? {} : (n = i.resolveCanonicalLocale(n), await (await fetch(r ? `${e}/${t}/${n}/${r}` : `${e}/${t}/${n}`)).json());
						}({
							cacheUrl: o || Un,
							projectId: s,
							locale: a,
							versionId: c,
							gt: l
						});
					} catch (e) {
						console.error(e);
					}
				}
				t ||= {}, e && d(t);
			})(), () => {
				e = !1;
			};
		}, [
			u,
			t,
			r,
			o,
			s,
			a,
			c,
			l
		]), {
			translations: u,
			setTranslations: d
		};
	}
	function $i(e, t, r, i, a, o, s, c, l, u, d, f) {
		return n.useCallback((n, s, l = {}) => {
			if (s === "") throw Error(`${wr} Error: You cannot provide an empty id to t.obj()`);
			let p = ei({
				dictionary: e,
				id: s
			});
			if (!p) return console.warn(Nr(s)), {};
			if (Xr(p)) return f(n, l);
			if (!c) return ri(p);
			let m = function({ dictionary: e, id: t, sourceDictionary: n }) {
				if (t === "") return e;
				let r = e, i = n, a = t.split(".");
				for (let e of a) xr(r, e) === void 0 && (Array.isArray(xr(i, e)) ? Sr(r, e, []) : Sr(r, e, {})), r = xr(r, e);
				return r;
			}({
				dictionary: t,
				id: s,
				sourceDictionary: t
			}), { dictionary: h, updateDictionary: g } = li(structuredClone(p), s), _ = di(h, m, s), { dictionary: v, updateDictionary: y } = function(e, t, n, r, i = "") {
				let a = !1, o = i ? i.split(".") : [];
				return r.forEach(({ metadata: r }) => {
					let { $_hash: i, $id: s } = r, c = o.length > 0 ? s.split(".").slice(o.length).join(".") : s, l = Gr(t, c), u;
					Xr(l) && (u = Kr(l).entry);
					let d = n[i] || u;
					d && (ni(d, t, c, e), a = !0);
				}), {
					dictionary: t,
					updateDictionary: a
				};
			}(h, structuredClone(m), a || {}, _, s), b = function(e, t, n, r = "") {
				let i = r ? r.split(".") : [];
				return n.forEach(({ source: n, metadata: r }) => {
					let { $id: a } = r, o = i.length > 0 ? a.split(".").slice(i.length).join(".") : a, s = Gr(t, o), c;
					Xr(s) && (c = Kr(s).entry), ni(c || n, t, o, e);
				}), t;
			}(h, structuredClone(v), _, s);
			return u && Promise.allSettled(_.map(async (e) => {
				let { source: t, metadata: n } = e, r = n?.$id;
				return [r, await d({
					source: pr(t),
					targetLocale: o,
					metadata: {
						...n?.$context && { context: n.$context },
						...n?.$maxChars != null && { maxChars: n.$maxChars },
						id: r,
						hash: n?.$_hash
					}
				})];
			})).then((t) => {
				let n = t.filter((e) => e.status === "fulfilled").map((e) => e.value);
				n.length > 0 && i((t) => function(e, t, n) {
					return t.forEach(([t, r]) => {
						ni(r, e, t, n);
					}), e;
				}(t, n, e));
			}), g && setTimeout(() => {
				r((e) => ui(e, h, s));
			}, 0), y && setTimeout(() => {
				i((e) => $r(e, v));
			}, 0), structuredClone(b);
		}, [
			e,
			a,
			o,
			s,
			c,
			l,
			u,
			d,
			t
		]);
	}
	function ea({ enableI18n: e }) {
		let [t] = n.useState(e);
		return { enableI18n: t };
	}
	function ta() {
		throw Lr("isSSREnabled");
	}
	function na({}) {
		throw Lr("useDetermineLocale");
	}
	function ra({}) {
		throw Lr("useRegionState");
	}
	function ia({ children: e, n: r, locales: i, ...a }) {
		let o = n.useContext(Ei), s;
		o && (i ||= o.locale, s ||= o.defaultLocale);
		let c = [...i ? [i] : [], s || Gn];
		if (typeof r != "number") throw Error(((e) => `${wr} Error: <Plural> component with children "${e}" requires "n" option.`)(e));
		return t.jsx(t.Fragment, { children: vr(r, c, a) || e });
	}
	function aa({ children: e, branch: n, ...r }) {
		n = n?.toString(), typeof n == "string" && n.startsWith("data-") && (n = void 0);
		let i = n && r[n] !== void 0 ? r[n] : e;
		return t.jsx(t.Fragment, { children: i });
	}
	function oa() {
		return Di("useGTClass(): Unable to access configured GT class instance outside of a <GTProvider>").gt;
	}
	ia._gtt = "plural", aa._gtt = "branch", e.Branch = aa, e.Currency = Ai, e.DateTime = ji, e.Derive = wi, e.GTContext = Ei, e.GTProvider = function({ children: e, config: i, environment: a = "production", projectId: o = i?.projectId || "", devApiKey: s = i?.devApiKey || "", _versionId: c = i?._versionId, dictionary: l = i?.dictionary || {}, locales: u = i?.locales || [], defaultLocale: d = i?.defaultLocale || Gn, cacheUrl: f = i?.cacheUrl || Un, runtimeUrl: p = i?.runtimeUrl || Wn, renderSettings: m = i?.renderSettings || Yr(a), ssr: h = i?.ssr || ta(), localeCookieName: g = i?.localeCookieName || "generaltranslation.locale", locale: _ = "", region: v, loadDictionary: y, loadTranslations: b, fallback: x, translations: S = null, customMapping: C = i?.customMapping, enableI18n: w = i?.enableI18n === void 0 || i.enableI18n, enableI18nLoaded: T, reloadOnLocaleUpdate: E, useEnableI18n: D = ea, readAuthFromEnv: O = Rr, useDetermineLocale: k = na, useRegionState: A = ra, ...j }) {
		_ &&= r.resolveAliasLocale(_, C);
		let { projectId: M, devApiKey: N } = O({
			projectId: o,
			devApiKey: s
		}), { enableI18n: P } = D({
			enableI18n: w,
			enableI18nLoaded: T,
			enableI18nCookieName: "generaltranslation.enable-i18n",
			ssr: h
		}), { locale: F, setLocale: I, locales: L, translationRequired: R, dialectTranslationRequired: ee } = Yi({
			_locale: _,
			defaultLocale: d,
			locales: u,
			ssr: h,
			localeCookieName: g,
			customMapping: C,
			useDetermineLocale: k,
			enableI18n: P,
			reloadOnLocaleUpdate: E
		}), { region: te, setRegion: ne } = A({
			_region: v,
			ssr: h,
			regionCookieName: "generaltranslation.region"
		}), re = n.useMemo(() => new r.GT({
			devApiKey: N,
			sourceLocale: d,
			targetLocale: F,
			projectId: M,
			baseUrl: p || void 0,
			customMapping: C
		}), [
			N,
			d,
			M,
			p,
			C
		]), ie = n.useMemo(() => (b ? "custom" : f && M && "default") || "disabled", [
			b,
			f,
			M
		]), { dictionary: ae, setDictionary: z, dictionaryTranslations: B, setDictionaryTranslations: V } = function({ _dictionary: e, _dictionaryTranslations: t = {}, loadDictionary: r, locale: i, defaultLocale: a }) {
			let [o, s] = n.useState(e), [c, l] = n.useState(t);
			return n.useEffect(() => {
				if (!r) return;
				let e = !0;
				return (async () => {
					let t = await Zi(a, r) || {}, n = await Zi(i, r) || {};
					e && s(t || {}), e && l(n || {});
				})(), () => {
					e = !1;
				};
			}, [
				r,
				i,
				a
			]), {
				dictionary: o,
				setDictionary: s,
				dictionaryTranslations: c,
				setDictionaryTranslations: l
			};
		}({
			_dictionary: l,
			_dictionaryTranslations: {},
			loadDictionary: y,
			locale: F,
			defaultLocale: d
		});
		Xi({
			devApiKey: N,
			projectId: M,
			runtimeUrl: p,
			loadTranslationsType: ie,
			cacheUrl: f,
			locales: u,
			environment: a
		});
		let { translations: H, setTranslations: U } = Qi({
			_translations: S,
			translationRequired: R,
			loadTranslationsType: ie,
			loadTranslations: b,
			locale: F,
			cacheUrl: f,
			projectId: M,
			_versionId: c,
			gt: re
		}), { registerIcuForTranslation: W, registerJsxForTranslation: oe, developmentApiEnabled: G } = Ki({
			gt: re,
			locale: F,
			versionId: c,
			defaultLocale: d,
			runtimeUrl: p,
			renderSettings: m,
			setTranslations: U,
			environment: a,
			...j
		}), { _gtFunction: se, _mFunction: ce, _filterMessagesForPreload: le, _preloadMessages: ue } = qi({
			gt: re,
			translations: H,
			locale: F,
			defaultLocale: d,
			translationRequired: R,
			developmentApiEnabled: G,
			registerIcuForTranslation: W,
			environment: a
		}), de = Ji(re, ae, B, H, F, d, R, ee, G, W, a), fe = $i(ae || {}, B || {}, z, V, H, F, d, R, ee, G, W, de), pe = !(R && !H || !F);
		return t.jsx(Ei.Provider, {
			value: {
				gt: re,
				registerIcuForTranslation: W,
				registerJsxForTranslation: oe,
				_gtFunction: se,
				_mFunction: ce,
				_filterMessagesForPreload: le,
				_preloadMessages: ue,
				_dictionaryFunction: de,
				_dictionaryObjFunction: fe,
				developmentApiEnabled: G,
				locale: F,
				locales: L,
				setLocale: I,
				defaultLocale: d,
				region: te,
				setRegion: ne,
				translations: H,
				translationRequired: R,
				dialectTranslationRequired: ee,
				projectId: M,
				renderSettings: m,
				_versionId: c
			},
			children: t.jsx(n.Suspense, {
				fallback: x,
				children: pe ? e : x
			})
		});
	}, e.LocaleSelector = function({}) {
		throw Lr("LocaleSelector");
	}, e.Num = Oi, e.Plural = ia, e.RegionSelector = function({}) {
		throw Lr("RegionSelector");
	}, e.RelativeTime = Mi, e.Static = Ti, e.T = Gi, e.Var = ki, e.declareStatic = fr, e.declareVar = function(e, t) {
		var n = ` other {${ur(String(e ?? ""))}}`, r = "";
		return t?.$name && (r = ` _gt_var_name {${ur(t.$name)}}`), `{${ar}, select,${n}${r}}`;
	}, e.decodeMsg = Si, e.decodeOptions = Ci, e.decodeVars = function(e) {
		if (!e.includes(ar)) return e;
		var t = [];
		$({
			icuString: e,
			shouldVisit: lr,
			visitor: function(e) {
				t.push({
					start: e.location?.start.offset ?? 0,
					end: e.location?.end.offset ?? 0,
					value: e.options.other.value.length > 0 ? e.options.other.value[0].value : ""
				});
			},
			options: {
				recurseIntoVisited: !1,
				captureLocation: !0
			}
		});
		for (var n = 0, r = [], i = 0; i < t.length; i++) r.push(e.slice(n, t[i].start)), r.push(t[i].value), n = t[i].end;
		return n < e.length && r.push(e.slice(n)), r.join("");
	}, e.derive = dr, e.gtFallback = function(e, t) {
		return t === void 0 && (t = {}), Li(e, t);
	}, e.mFallback = function(e, t) {
		return t === void 0 && (t = {}), e && (function(e) {
			return !(!e.$_hash || !e.$_source);
		}(function(e) {
			if (e.lastIndexOf(":") === -1) return null;
			var t = e.slice(e.lastIndexOf(":") + 1);
			try {
				return JSON.parse(ir(t));
			} catch {
				return null;
			}
		}(e) ?? {}) ? function(e) {
			return typeof e == "string" && e.lastIndexOf(":") !== -1 ? e.slice(0, e.lastIndexOf(":")) : e;
		}(e) : Li(e, t));
	}, e.msg = function e(t, n) {
		var i;
		if (typeof t != "string") return n ? t.map(function(t, r) {
			return e(t, mi(mi({}, n), n.$id && { $id: `${n.$id}.${r}` }));
		}) : t;
		if (!n) return t;
		var a = function(e) {
			return Object.fromEntries(Object.entries(e).filter(function(e) {
				var t = e[0];
				return t !== "$id" && t !== "$context" && t !== "$maxChars" && t !== "$hash" && t !== "$_hash" && t !== "$_source" && t !== "$_fallback" && t !== "$format" && t !== "$_locales" && t !== "$locale";
			}));
		}(n), o = t;
		try {
			o = r.formatMessage(t, {
				locales: [Gn],
				variables: mi(mi({}, a), (i = {}, i[ar] = "other", i))
			});
		} catch {
			return function(e) {
				console.warn(e);
			}(function(e) {
				return `String interpolation failed for message: "${e}".`;
			}(t)), t;
		}
		var s = t, c = n.$_hash || bi(t, mi({ $format: "ICU" }, n)), l = mi(mi({}, n), {
			$_source: s,
			$_hash: c
		}), u = function(e) {
			if (typeof Buffer < "u") return Buffer.from(e, "utf8").toString("base64");
			for (var t = new TextEncoder().encode(e), n = "", r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
			return btoa(n);
		}(JSON.stringify(l));
		return `${o}:${u}`;
	}, e.useCreateInternalUseGTFunction = qi, e.useCreateInternalUseTranslationsFunction = Ji, e.useCreateInternalUseTranslationsObjFunction = $i, e.useDefaultLocale = function() {
		return Di("useDefaultLocale(): Unable to access default locale outside of a <GTProvider>").defaultLocale;
	}, e.useGT = function(e) {
		let { developmentApiEnabled: t, translationRequired: r, _preloadMessages: i, _filterMessagesForPreload: a, _gtFunction: o, locale: s } = Di("useGT(): No context provided. You're trying to get the gt() function from the useGT() hook, which can be called within a <GTProvider>."), c;
		if (e && Wi && t && r) {
			let t = a(e);
			t.length > 0 && (c = Wi(Hi([
				"_preloadMessages",
				s,
				JSON.stringify(t)
			], () => i(t))));
		}
		return n.useCallback(function(e, t = {}) {
			return o(e, t, c);
		}, [c, o]);
	}, e.useGTClass = oa, e.useLocale = function() {
		return Di("useLocale(): Unable to access user's locale outside of a <GTProvider>").locale;
	}, e.useLocaleDirection = function(e) {
		let { gt: t } = Di("useLocaleDirection(): Unable to access configured GT class instance outside of a <GTProvider>");
		return t.getLocaleDirection(e);
	}, e.useLocaleProperties = function(e) {
		return oa().getLocaleProperties(e);
	}, e.useLocaleSelector = function(e) {
		let { locales: t, locale: r, setLocale: i, gt: a } = Di(), o = n.useMemo(() => !t || t.length === 0 ? [] : t.sort((e, t) => new Intl.Collator().compare(a.getLocaleProperties(e).nativeNameWithRegionCode, a.getLocaleProperties(t).nativeNameWithRegionCode)), [t]), s = n.useCallback((e) => a.getLocaleProperties(e), [a]);
		return {
			locale: r,
			locales: e || o,
			setLocale: i,
			getLocaleProperties: s
		};
	}, e.useLocales = function() {
		return Di("useLocales(): Unable to access configured locales outside of a <GTProvider>").locales;
	}, e.useMessages = function(e) {
		let { developmentApiEnabled: t, translationRequired: r, _preloadMessages: i, _filterMessagesForPreload: a, _mFunction: o, locale: s } = Di("useMessages(): No context provided. You're trying to get the m() function from the useMessages() hook, which can be called within a <GTProvider>."), c;
		if (e && Wi && t && r) {
			let t = a(e);
			t.length > 0 && (c = Wi(Hi([
				"_preloadMessages",
				s,
				JSON.stringify(t)
			], () => i(t))));
		}
		return n.useCallback(function(e, t = {}) {
			return o(e, t, c);
		}, [c, o]);
	}, e.useRegion = function() {
		return Di("useRegion(): Unable to access user's region outside of a <GTProvider>").region;
	}, e.useRegionSelector = function({ regions: e, customMapping: t, prioritizeCurrentLocaleRegion: i = !0, sortRegionsAlphabetically: a = !0 } = {
		prioritizeCurrentLocaleRegion: !0,
		sortRegionsAlphabetically: !0
	}) {
		let { locales: o, locale: s, setLocale: c, gt: l, region: u, setRegion: d } = Di(), { regionCode: f } = l.getLocaleProperties(s), [p, m] = n.useMemo(() => {
			let n = new Map(o.map((e) => {
				let t = r.getLocaleProperties(e, s, l.customMapping);
				return [t.regionCode, t];
			})), c = e ? [...e] : Array.from(n?.keys() || [f]), u = new Map(c.map((e) => [e, {
				locale: n?.get(e)?.code || s,
				...l.getRegionProperties(e),
				...typeof t?.[e] == "string" ? { name: t?.[e] } : t?.[e]
			}]));
			if (a && c.sort((e, t) => new Intl.Collator().compare(u.get(e).name, u.get(t).name)), i) {
				let e = c.indexOf(f);
				e > 0 && (c.splice(e, 1), c.unshift(f));
			}
			return [c, u];
		}, [
			e,
			u,
			s,
			o,
			l
		]);
		return {
			region: u,
			setRegion: d,
			regions: p,
			regionData: m,
			locales: o,
			locale: s,
			localeRegion: f,
			setLocale: c
		};
	}, e.useRuntimeTranslation = Ki, e.useSetLocale = function() {
		let { setLocale: e } = Di("setLocale(): Unable to access user's locale outside of a <GTProvider>");
		return e;
	}, e.useTranslations = function(e) {
		let t = (t) => e ? `${e}.${t}` : t, { _dictionaryFunction: n, _dictionaryObjFunction: r } = Di(`useTranslations('${e}'): No context provided. You're trying to get the t() function on the client, which can only be done inside a <GTProvider>.`);
		function i(e, r = {}) {
			return n(t(e), r);
		}
		return i.obj = function(e, n = {}) {
			return r(e, t(e), n);
		}, i;
	}, e.useVersionId = function() {
		return Di("useVersionId(): Unable to access version ID outside of a <GTProvider>")._versionId;
	};
})), d = /* @__PURE__ */ a(((e) => {
	var t = o("react/jsx-runtime"), n = o("react"), r = c(), i = u();
	function a(e) {
		var t = Object.create(null);
		return e && Object.keys(e).forEach(function(n) {
			if (n !== "default") {
				var r = Object.getOwnPropertyDescriptor(e, n);
				Object.defineProperty(t, n, r.get ? r : {
					enumerable: !0,
					get: function() {
						return e[n];
					}
				});
			}
		}), t.default = e, Object.freeze(t);
	}
	var s = a(n), l = function(e, t) {
		return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, l(e, t);
	};
	function d(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
		function n() {
			this.constructor = e;
		}
		l(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
	}
	var f = function() {
		return f = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, f.apply(this, arguments);
	};
	function p(e, t) {
		var n = {};
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (e != null && typeof Object.getOwnPropertySymbols == "function") {
			var i = 0;
			for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
		}
		return n;
	}
	function m(e, t, n, r) {
		var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
		if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
		else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
		return a > 3 && o && Object.defineProperty(t, n, o), o;
	}
	function h(e, t) {
		return function(n, r) {
			t(n, r, e);
		};
	}
	function g(e, t, n, r, i, a) {
		function o(e) {
			if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
			return e;
		}
		for (var s, c = r.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
			var m = {};
			for (var h in r) m[h] = h === "access" ? {} : r[h];
			for (var h in r.access) m.access[h] = r.access[h];
			m.addInitializer = function(e) {
				if (f) throw TypeError("Cannot add initializers after decoration has completed");
				a.push(o(e || null));
			};
			var g = (0, n[p])(c === "accessor" ? {
				get: d.get,
				set: d.set
			} : d[l], m);
			if (c === "accessor") {
				if (g === void 0) continue;
				if (typeof g != "object" || !g) throw TypeError("Object expected");
				(s = o(g.get)) && (d.get = s), (s = o(g.set)) && (d.set = s), (s = o(g.init)) && i.unshift(s);
			} else (s = o(g)) && (c === "field" ? i.unshift(s) : d[l] = s);
		}
		u && Object.defineProperty(u, r.name, d), f = !0;
	}
	function _(e, t, n) {
		for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
		return r ? n : void 0;
	}
	function v(e) {
		return typeof e == "symbol" ? e : `${e}`;
	}
	function y(e, t, n) {
		return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
			configurable: !0,
			value: n ? `${n} ${t}` : t
		});
	}
	function b(e, t) {
		if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
	}
	function x(e, t, n, r) {
		return new (n ||= Promise)(function(i, a) {
			function o(e) {
				try {
					c(r.next(e));
				} catch (e) {
					a(e);
				}
			}
			function s(e) {
				try {
					c(r.throw(e));
				} catch (e) {
					a(e);
				}
			}
			function c(e) {
				var t;
				e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
					e(t);
				})).then(o, s);
			}
			c((r = r.apply(e, t || [])).next());
		});
	}
	function S(e, t) {
		var n, r, i, a = {
			label: 0,
			sent: function() {
				if (1 & i[0]) throw i[1];
				return i[1];
			},
			trys: [],
			ops: []
		}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
		return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
			return this;
		}), o;
		function s(s) {
			return function(c) {
				return function(s) {
					if (n) throw TypeError("Generator is already executing.");
					for (; o && (o = 0, s[0] && (a = 0)), a;) try {
						if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
						switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
							case 0:
							case 1:
								i = s;
								break;
							case 4: return a.label++, {
								value: s[1],
								done: !1
							};
							case 5:
								a.label++, r = s[1], s = [0];
								continue;
							case 7:
								s = a.ops.pop(), a.trys.pop();
								continue;
							default:
								if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
									a = 0;
									continue;
								}
								if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
									a.label = s[1];
									break;
								}
								if (s[0] === 6 && a.label < i[1]) {
									a.label = i[1], i = s;
									break;
								}
								if (i && a.label < i[2]) {
									a.label = i[2], a.ops.push(s);
									break;
								}
								i[2] && a.ops.pop(), a.trys.pop();
								continue;
						}
						s = t.call(e, a);
					} catch (e) {
						s = [6, e], r = 0;
					} finally {
						n = i = 0;
					}
					if (5 & s[0]) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					};
				}([s, c]);
			};
		}
	}
	var C = Object.create ? function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	} : function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	};
	function w(e, t) {
		for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || C(t, e, n);
	}
	function T(e) {
		var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
		if (n) return n.call(e);
		if (e && typeof e.length == "number") return { next: function() {
			return e && r >= e.length && (e = void 0), {
				value: e && e[r++],
				done: !e
			};
		} };
		throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function E(e, t) {
		var n = typeof Symbol == "function" && e[Symbol.iterator];
		if (!n) return e;
		var r, i, a = n.call(e), o = [];
		try {
			for (; (t === void 0 || t-- > 0) && !(r = a.next()).done;) o.push(r.value);
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				r && !r.done && (n = a.return) && n.call(a);
			} finally {
				if (i) throw i.error;
			}
		}
		return o;
	}
	function D() {
		for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(E(arguments[t]));
		return e;
	}
	function O() {
		for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
		var r = Array(e), i = 0;
		for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
		return r;
	}
	function k(e, t, n) {
		if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
		return e.concat(r || Array.prototype.slice.call(t));
	}
	function A(e) {
		return this instanceof A ? (this.v = e, this) : new A(e);
	}
	function j(e, t, n) {
		if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
		var r, i = n.apply(e, t || []), a = [];
		return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
			return function(t) {
				return Promise.resolve(t).then(e, l);
			};
		}), r[Symbol.asyncIterator] = function() {
			return this;
		}, r;
		function o(e, t) {
			i[e] && (r[e] = function(t) {
				return new Promise(function(n, r) {
					a.push([
						e,
						t,
						n,
						r
					]) > 1 || s(e, t);
				});
			}, t && (r[e] = t(r[e])));
		}
		function s(e, t) {
			try {
				(function(e) {
					e.value instanceof A ? Promise.resolve(e.value.v).then(c, l) : u(a[0][2], e);
				})(i[e](t));
			} catch (e) {
				u(a[0][3], e);
			}
		}
		function c(e) {
			s("next", e);
		}
		function l(e) {
			s("throw", e);
		}
		function u(e, t) {
			e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
		}
	}
	function M(e) {
		var t, n;
		return t = {}, r("next"), r("throw", function(e) {
			throw e;
		}), r("return"), t[Symbol.iterator] = function() {
			return this;
		}, t;
		function r(r, i) {
			t[r] = e[r] ? function(t) {
				return (n = !n) ? {
					value: A(e[r](t)),
					done: !1
				} : i ? i(t) : t;
			} : i;
		}
	}
	function N(e) {
		if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
		var t, n = e[Symbol.asyncIterator];
		return n ? n.call(e) : (e = T(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
			return this;
		}, t);
		function r(n) {
			t[n] = e[n] && function(t) {
				return new Promise(function(r, i) {
					(function(e, t, n, r) {
						Promise.resolve(r).then(function(t) {
							e({
								value: t,
								done: n
							});
						}, t);
					})(r, i, (t = e[n](t)).done, t.value);
				});
			};
		}
	}
	function P(e, t) {
		return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
	}
	var F = Object.create ? function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	} : function(e, t) {
		e.default = t;
	}, I = function(e) {
		return I = Object.getOwnPropertyNames || function(e) {
			var t = [];
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
			return t;
		}, I(e);
	};
	function L(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (e != null) for (var n = I(e), r = 0; r < n.length; r++) n[r] !== "default" && C(t, e, n[r]);
		return F(t, e), t;
	}
	function R(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function ee(e, t, n, r) {
		if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
		if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
		return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
	}
	function te(e, t, n, r, i) {
		if (r === "m") throw TypeError("Private method is not writable");
		if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
		if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
		return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
	}
	function ne(e, t) {
		if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
		return typeof e == "function" ? t === e : e.has(t);
	}
	function re(e, t, n) {
		if (t != null) {
			if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
			var r, i;
			if (n) {
				if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
				r = t[Symbol.asyncDispose];
			}
			if (r === void 0) {
				if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
				r = t[Symbol.dispose], n && (i = r);
			}
			if (typeof r != "function") throw TypeError("Object not disposable.");
			i && (r = function() {
				try {
					i.call(this);
				} catch (e) {
					return Promise.reject(e);
				}
			}), e.stack.push({
				value: t,
				dispose: r,
				async: n
			});
		} else n && e.stack.push({ async: !0 });
		return t;
	}
	var ie = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
		var r = Error(n);
		return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
	};
	function ae(e) {
		function t(t) {
			e.error = e.hasError ? new ie(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
		}
		var n, r = 0;
		return function i() {
			for (; n = e.stack.pop();) try {
				if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
				if (n.dispose) {
					var a = n.dispose.call(n.value);
					if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
						return t(e), i();
					});
				} else r |= 1;
			} catch (e) {
				t(e);
			}
			if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
			if (e.hasError) throw e.error;
		}();
	}
	function z(e, t) {
		return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
			return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
		}) : e;
	}
	var B, V, H, U, W = Object.freeze({
		__proto__: null,
		__addDisposableResource: re,
		get __assign() {
			return f;
		},
		__asyncDelegator: M,
		__asyncGenerator: j,
		__asyncValues: N,
		__await: A,
		__awaiter: x,
		__classPrivateFieldGet: ee,
		__classPrivateFieldIn: ne,
		__classPrivateFieldSet: te,
		__createBinding: C,
		__decorate: m,
		__disposeResources: ae,
		__esDecorate: g,
		__exportStar: w,
		__extends: d,
		__generator: S,
		__importDefault: R,
		__importStar: L,
		__makeTemplateObject: P,
		__metadata: b,
		__param: h,
		__propKey: v,
		__read: E,
		__rest: p,
		__rewriteRelativeImportExtension: z,
		__runInitializers: _,
		__setFunctionName: y,
		__spread: D,
		__spreadArray: k,
		__spreadArrays: O,
		__values: T,
		default: {
			__extends: d,
			__assign: f,
			__rest: p,
			__decorate: m,
			__param: h,
			__esDecorate: g,
			__runInitializers: _,
			__propKey: v,
			__setFunctionName: y,
			__metadata: b,
			__awaiter: x,
			__generator: S,
			__createBinding: C,
			__exportStar: w,
			__values: T,
			__read: E,
			__spread: D,
			__spreadArrays: O,
			__spreadArray: k,
			__await: A,
			__asyncGenerator: j,
			__asyncDelegator: M,
			__asyncValues: N,
			__makeTemplateObject: P,
			__importStar: L,
			__importDefault: R,
			__classPrivateFieldGet: ee,
			__classPrivateFieldSet: te,
			__classPrivateFieldIn: ne,
			__addDisposableResource: re,
			__disposeResources: ae,
			__rewriteRelativeImportExtension: z
		}
	});
	(U = B ||= {})[U.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", U[U.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", U[U.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", U[U.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", U[U.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", U[U.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", U[U.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", U[U.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", U[U.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", U[U.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", U[U.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", U[U.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", U[U.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", U[U.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", U[U.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", U[U.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", U[U.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", U[U.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", U[U.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", U[U.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", U[U.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", U[U.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", U[U.INVALID_TAG = 23] = "INVALID_TAG", U[U.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", U[U.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", U[U.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(V ||= {}), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(H ||= {});
	var oe = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, G = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
	function se(e) {
		var t = {};
		return e.replace(G, function(e) {
			var n = e.length;
			switch (e[0]) {
				case "G":
					t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
					break;
				case "y":
					t.year = n === 2 ? "2-digit" : "numeric";
					break;
				case "Y":
				case "u":
				case "U":
				case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
				case "q":
				case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
				case "M":
				case "L":
					t.month = [
						"numeric",
						"2-digit",
						"short",
						"long",
						"narrow"
					][n - 1];
					break;
				case "w":
				case "W": throw RangeError("`w/W` (week) patterns are not supported");
				case "d":
					t.day = ["numeric", "2-digit"][n - 1];
					break;
				case "D":
				case "F":
				case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
				case "E":
					t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
					break;
				case "e":
					if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][n - 4];
					break;
				case "c":
					if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][n - 4];
					break;
				case "a":
					t.hour12 = !0;
					break;
				case "b":
				case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
				case "h":
					t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "H":
					t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "K":
					t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "k":
					t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
					break;
				case "j":
				case "J":
				case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
				case "m":
					t.minute = ["numeric", "2-digit"][n - 1];
					break;
				case "s":
					t.second = ["numeric", "2-digit"][n - 1];
					break;
				case "S":
				case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
				case "z":
					t.timeZoneName = n < 4 ? "short" : "long";
					break;
				case "Z":
				case "O":
				case "v":
				case "V":
				case "X":
				case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
			}
			return "";
		}), t;
	}
	var ce = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
	function le(e) {
		return e.replace(/^(.*?)-/, "");
	}
	var ue = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, de = /^(@+)?(\+|#+)?[rs]?$/g, fe = /(\*)(0+)|(#+)(0+)|(0+)/g, pe = /^(0+)$/;
	function me(e) {
		var t = {};
		return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(de, function(e, n, r) {
			return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
		}), t;
	}
	function he(e) {
		switch (e) {
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
	function ge(e) {
		var t;
		if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
			var n = e.slice(0, 2);
			if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !pe.test(e)) throw Error("Malformed concise eng/scientific notation");
			t.minimumIntegerDigits = e.length;
		}
		return t;
	}
	function _e(e) {
		return he(e) || {};
	}
	function ve(e) {
		for (var t = {}, n = 0, r = e; n < r.length; n++) {
			var i = r[n];
			switch (i.stem) {
				case "percent":
				case "%":
					t.style = "percent";
					continue;
				case "%x100":
					t.style = "percent", t.scale = 100;
					continue;
				case "currency":
					t.style = "currency", t.currency = i.options[0];
					continue;
				case "group-off":
				case ",_":
					t.useGrouping = !1;
					continue;
				case "precision-integer":
				case ".":
					t.maximumFractionDigits = 0;
					continue;
				case "measure-unit":
				case "unit":
					t.style = "unit", t.unit = le(i.options[0]);
					continue;
				case "compact-short":
				case "K":
					t.notation = "compact", t.compactDisplay = "short";
					continue;
				case "compact-long":
				case "KK":
					t.notation = "compact", t.compactDisplay = "long";
					continue;
				case "scientific":
					t = f(f(f({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
						return f(f({}, e), _e(t));
					}, {}));
					continue;
				case "engineering":
					t = f(f(f({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
						return f(f({}, e), _e(t));
					}, {}));
					continue;
				case "notation-simple":
					t.notation = "standard";
					continue;
				case "unit-width-narrow":
					t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
					continue;
				case "unit-width-short":
					t.currencyDisplay = "code", t.unitDisplay = "short";
					continue;
				case "unit-width-full-name":
					t.currencyDisplay = "name", t.unitDisplay = "long";
					continue;
				case "unit-width-iso-code":
					t.currencyDisplay = "symbol";
					continue;
				case "scale":
					t.scale = parseFloat(i.options[0]);
					continue;
				case "rounding-mode-floor":
					t.roundingMode = "floor";
					continue;
				case "rounding-mode-ceiling":
					t.roundingMode = "ceil";
					continue;
				case "rounding-mode-down":
					t.roundingMode = "trunc";
					continue;
				case "rounding-mode-up":
					t.roundingMode = "expand";
					continue;
				case "rounding-mode-half-even":
					t.roundingMode = "halfEven";
					continue;
				case "rounding-mode-half-down":
					t.roundingMode = "halfTrunc";
					continue;
				case "rounding-mode-half-up":
					t.roundingMode = "halfExpand";
					continue;
				case "integer-width":
					if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
					i.options[0].replace(fe, function(e, n, r, i, a, o) {
						if (n) t.minimumIntegerDigits = r.length;
						else {
							if (i && a) throw Error("We currently do not support maximum integer digits");
							if (o) throw Error("We currently do not support exact integer digits");
						}
						return "";
					});
					continue;
			}
			if (pe.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
			else if (ue.test(i.stem)) {
				if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
				i.stem.replace(ue, function(e, n, r, i, a, o) {
					return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
				});
				var a = i.options[0];
				a === "w" ? t = f(f({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = f(f({}, t), me(a)));
			} else if (de.test(i.stem)) t = f(f({}, t), me(i.stem));
			else {
				var o = he(i.stem);
				o && (t = f(f({}, t), o));
				var s = ge(i.stem);
				s && (t = f(f({}, t), s));
			}
		}
		return t;
	}
	var K = {
		"001": ["H", "h"],
		419: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AD: ["H", "hB"],
		AE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		AF: [
			"H",
			"hb",
			"hB",
			"h"
		],
		AG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AL: [
			"h",
			"H",
			"hB"
		],
		AM: ["H", "hB"],
		AO: ["H", "hB"],
		AR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AS: ["h", "H"],
		AT: ["H", "hB"],
		AU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AW: ["H", "hB"],
		AX: ["H"],
		AZ: [
			"H",
			"hB",
			"h"
		],
		BA: [
			"H",
			"hB",
			"h"
		],
		BB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BD: [
			"h",
			"hB",
			"H"
		],
		BE: ["H", "hB"],
		BF: ["H", "hB"],
		BG: [
			"H",
			"hB",
			"h"
		],
		BH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		BI: ["H", "h"],
		BJ: ["H", "hB"],
		BL: ["H", "hB"],
		BM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BN: [
			"hb",
			"hB",
			"h",
			"H"
		],
		BO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		BQ: ["H"],
		BR: ["H", "hB"],
		BS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BT: ["h", "H"],
		BW: [
			"H",
			"h",
			"hb",
			"hB"
		],
		BY: ["H", "h"],
		BZ: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CA: [
			"h",
			"hb",
			"H",
			"hB"
		],
		CC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CD: ["hB", "H"],
		CF: [
			"H",
			"h",
			"hB"
		],
		CG: ["H", "hB"],
		CH: [
			"H",
			"hB",
			"h"
		],
		CI: ["H", "hB"],
		CK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CL: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CM: [
			"H",
			"h",
			"hB"
		],
		CN: [
			"H",
			"hB",
			"hb",
			"h"
		],
		CO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CP: ["H"],
		CR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CU: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CV: ["H", "hB"],
		CW: ["H", "hB"],
		CX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CY: [
			"h",
			"H",
			"hb",
			"hB"
		],
		CZ: ["H"],
		DE: ["H", "hB"],
		DG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		DJ: ["h", "H"],
		DK: ["H"],
		DM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		DO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		DZ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		EC: [
			"h",
			"H",
			"hB",
			"hb"
		],
		EE: ["H", "hB"],
		EG: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		ER: ["h", "H"],
		ES: [
			"H",
			"hB",
			"h",
			"hb"
		],
		ET: [
			"hB",
			"hb",
			"h",
			"H"
		],
		FI: ["H"],
		FJ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		FM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FO: ["H", "h"],
		FR: ["H", "hB"],
		GA: ["H", "hB"],
		GB: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GD: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GE: [
			"H",
			"hB",
			"h"
		],
		GF: ["H", "hB"],
		GG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GH: ["h", "H"],
		GI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GL: ["H", "h"],
		GM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GN: ["H", "hB"],
		GP: ["H", "hB"],
		GQ: [
			"H",
			"hB",
			"h",
			"hb"
		],
		GR: [
			"h",
			"H",
			"hb",
			"hB"
		],
		GT: [
			"h",
			"H",
			"hB",
			"hb"
		],
		GU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GW: ["H", "hB"],
		GY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		HK: [
			"h",
			"hB",
			"hb",
			"H"
		],
		HN: [
			"h",
			"H",
			"hB",
			"hb"
		],
		HR: ["H", "hB"],
		HU: ["H", "h"],
		IC: [
			"H",
			"h",
			"hB",
			"hb"
		],
		ID: ["H"],
		IE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IL: ["H", "hB"],
		IM: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IN: ["h", "H"],
		IO: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IQ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		IR: ["hB", "H"],
		IS: ["H"],
		IT: ["H", "hB"],
		JE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		JM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		JO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		JP: [
			"H",
			"K",
			"h"
		],
		KE: [
			"hB",
			"hb",
			"H",
			"h"
		],
		KG: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KH: [
			"hB",
			"h",
			"H",
			"hb"
		],
		KI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KM: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KN: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KP: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KW: [
			"h",
			"hB",
			"hb",
			"H"
		],
		KY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KZ: ["H", "hB"],
		LA: [
			"H",
			"hb",
			"hB",
			"h"
		],
		LB: [
			"h",
			"hB",
			"hb",
			"H"
		],
		LC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LI: [
			"H",
			"hB",
			"h"
		],
		LK: [
			"H",
			"h",
			"hB",
			"hb"
		],
		LR: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LS: ["h", "H"],
		LT: [
			"H",
			"h",
			"hb",
			"hB"
		],
		LU: [
			"H",
			"h",
			"hB"
		],
		LV: [
			"H",
			"hB",
			"hb",
			"h"
		],
		LY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		MC: ["H", "hB"],
		MD: ["H", "hB"],
		ME: [
			"H",
			"hB",
			"h"
		],
		MF: ["H", "hB"],
		MG: ["H", "h"],
		MH: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ML: ["H"],
		MM: [
			"hB",
			"hb",
			"H",
			"h"
		],
		MN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MP: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MQ: ["H", "hB"],
		MR: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MS: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MT: ["H", "h"],
		MU: ["H", "h"],
		MV: ["H", "h"],
		MW: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MX: [
			"h",
			"H",
			"hB",
			"hb"
		],
		MY: [
			"hb",
			"hB",
			"h",
			"H"
		],
		MZ: ["H", "hB"],
		NA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NC: ["H", "hB"],
		NE: ["H"],
		NF: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NI: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NL: ["H", "hB"],
		NO: ["H", "h"],
		NP: [
			"H",
			"h",
			"hB"
		],
		NR: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NU: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		OM: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PF: [
			"H",
			"h",
			"hB"
		],
		PG: ["h", "H"],
		PH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PK: [
			"h",
			"hB",
			"H"
		],
		PL: ["H", "h"],
		PM: ["H", "hB"],
		PN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		PR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PS: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PT: ["H", "hB"],
		PW: ["h", "H"],
		PY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		QA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		RE: ["H", "hB"],
		RO: ["H", "hB"],
		RS: [
			"H",
			"hB",
			"h"
		],
		RU: ["H"],
		RW: ["H", "h"],
		SA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SC: [
			"H",
			"h",
			"hB"
		],
		SD: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SE: ["H"],
		SG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SH: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SI: ["H", "hB"],
		SJ: ["H"],
		SK: ["H"],
		SL: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SM: [
			"H",
			"h",
			"hB"
		],
		SN: [
			"H",
			"h",
			"hB"
		],
		SO: ["h", "H"],
		SR: ["H", "hB"],
		SS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ST: ["H", "hB"],
		SV: [
			"h",
			"H",
			"hB",
			"hb"
		],
		SX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		TC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TD: [
			"h",
			"H",
			"hB"
		],
		TF: [
			"H",
			"h",
			"hB"
		],
		TG: ["H", "hB"],
		TH: ["H", "h"],
		TJ: ["H", "h"],
		TL: [
			"H",
			"hB",
			"hb",
			"h"
		],
		TM: ["H", "h"],
		TN: [
			"h",
			"hB",
			"hb",
			"H"
		],
		TO: ["h", "H"],
		TR: ["H", "hB"],
		TT: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TW: [
			"hB",
			"hb",
			"h",
			"H"
		],
		TZ: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UA: [
			"H",
			"hB",
			"h"
		],
		UG: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		US: [
			"h",
			"hb",
			"H",
			"hB"
		],
		UY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		UZ: [
			"H",
			"hB",
			"h"
		],
		VA: [
			"H",
			"h",
			"hB"
		],
		VC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		VG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VN: ["H", "h"],
		VU: ["h", "H"],
		WF: ["H", "hB"],
		WS: ["h", "H"],
		XK: [
			"H",
			"hB",
			"h"
		],
		YE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		YT: ["H", "hB"],
		ZA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ZM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ZW: ["H", "h"],
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
	function ye(e) {
		var t = e.hourCycle;
		if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
			case "h24": return "k";
			case "h23": return "H";
			case "h12": return "h";
			case "h11": return "K";
			default: throw Error("Invalid hourCycle");
		}
		var n, r = e.language;
		return r !== "root" && (n = e.maximize().region), (K[n || ""] || K[r || ""] || K[`${r}-001`] || K["001"])[0];
	}
	var be = RegExp(`^${oe.source}*`), xe = RegExp(`${oe.source}*\$`);
	function q(e, t) {
		return {
			start: e,
			end: t
		};
	}
	var J = !!String.prototype.startsWith && "_a".startsWith("a", 1), Y = !!String.fromCodePoint, Se = !!Object.fromEntries, Ce = !!String.prototype.codePointAt, we = !!String.prototype.trimStart, Te = !!String.prototype.trimEnd, Ee = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
		return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
	}, De = !0;
	try {
		De = Fe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
	} catch {
		De = !1;
	}
	var Oe, ke = J ? function(e, t, n) {
		return e.startsWith(t, n);
	} : function(e, t, n) {
		return e.slice(n, n + t.length) === t;
	}, Ae = Y ? String.fromCodePoint : function() {
		for (var e = [...arguments], t, n = "", r = e.length, i = 0; r > i;) {
			if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
			n += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320);
		}
		return n;
	}, je = Se ? Object.fromEntries : function(e) {
		for (var t = {}, n = 0, r = e; n < r.length; n++) {
			var i = r[n], a = i[0];
			t[a] = i[1];
		}
		return t;
	}, Me = Ce ? function(e, t) {
		return e.codePointAt(t);
	} : function(e, t) {
		var n = e.length;
		if (!(t < 0 || t >= n)) {
			var r, i = e.charCodeAt(t);
			return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536;
		}
	}, Ne = we ? function(e) {
		return e.trimStart();
	} : function(e) {
		return e.replace(be, "");
	}, Pe = Te ? function(e) {
		return e.trimEnd();
	} : function(e) {
		return e.replace(xe, "");
	};
	function Fe(e, t) {
		return new RegExp(e, t);
	}
	if (De) {
		var Ie = Fe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
		Oe = function(e, t) {
			return Ie.lastIndex = t, Ie.exec(e)[1] ?? "";
		};
	} else Oe = function(e, t) {
		for (var n = [];;) {
			var r = Me(e, t);
			if (r === void 0 || Be(r) || Ve(r)) break;
			n.push(r), t += r >= 65536 ? 2 : 1;
		}
		return Ae.apply(void 0, n);
	};
	var Le = function() {
		function e(e, t) {
			t === void 0 && (t = {}), this.message = e, this.position = {
				offset: 0,
				line: 1,
				column: 1
			}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
		}
		return e.prototype.parse = function() {
			if (this.offset() !== 0) throw Error("parser can only be used once");
			return this.parseMessage(0, "", !1);
		}, e.prototype.parseMessage = function(e, t, n) {
			for (var r = []; !this.isEOF();) {
				var i = this.char();
				if (i === 123) {
					if ((a = this.parseArgument(e, n)).err) return a;
					r.push(a.val);
				} else {
					if (i === 125 && e > 0) break;
					if (i !== 35 || t !== "plural" && t !== "selectordinal") {
						if (i === 60 && !this.ignoreTag && this.peek() === 47) {
							if (n) break;
							return this.error(B.UNMATCHED_CLOSING_TAG, q(this.clonePosition(), this.clonePosition()));
						}
						if (i === 60 && !this.ignoreTag && Re(this.peek() || 0)) {
							if ((a = this.parseTag(e, t)).err) return a;
							r.push(a.val);
						} else {
							var a;
							if ((a = this.parseLiteral(e, t)).err) return a;
							r.push(a.val);
						}
					} else {
						var o = this.clonePosition();
						this.bump(), r.push({
							type: V.pound,
							location: q(o, this.clonePosition())
						});
					}
				}
			}
			return {
				val: r,
				err: null
			};
		}, e.prototype.parseTag = function(e, t) {
			var n = this.clonePosition();
			this.bump();
			var r = this.parseTagName();
			if (this.bumpSpace(), this.bumpIf("/>")) return {
				val: {
					type: V.literal,
					value: `<${r}/>`,
					location: q(n, this.clonePosition())
				},
				err: null
			};
			if (this.bumpIf(">")) {
				var i = this.parseMessage(e + 1, t, !0);
				if (i.err) return i;
				var a = i.val, o = this.clonePosition();
				if (this.bumpIf("</")) {
					if (this.isEOF() || !Re(this.char())) return this.error(B.INVALID_TAG, q(o, this.clonePosition()));
					var s = this.clonePosition();
					return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
						val: {
							type: V.tag,
							value: r,
							children: a,
							location: q(n, this.clonePosition())
						},
						err: null
					} : this.error(B.INVALID_TAG, q(o, this.clonePosition()))) : this.error(B.UNMATCHED_CLOSING_TAG, q(s, this.clonePosition()));
				}
				return this.error(B.UNCLOSED_TAG, q(n, this.clonePosition()));
			}
			return this.error(B.INVALID_TAG, q(n, this.clonePosition()));
		}, e.prototype.parseTagName = function() {
			var e = this.offset();
			for (this.bump(); !this.isEOF() && ze(this.char());) this.bump();
			return this.message.slice(e, this.offset());
		}, e.prototype.parseLiteral = function(e, t) {
			for (var n = this.clonePosition(), r = "";;) {
				var i = this.tryParseQuote(t);
				if (i) r += i;
				else {
					var a = this.tryParseUnquoted(e, t);
					if (a) r += a;
					else {
						var o = this.tryParseLeftAngleBracket();
						if (!o) break;
						r += o;
					}
				}
			}
			var s = q(n, this.clonePosition());
			return {
				val: {
					type: V.literal,
					value: r,
					location: s
				},
				err: null
			};
		}, e.prototype.tryParseLeftAngleBracket = function() {
			return this.isEOF() || this.char() !== 60 || !this.ignoreTag && (Re(e = this.peek() || 0) || e === 47) ? null : (this.bump(), "<");
			var e;
		}, e.prototype.tryParseQuote = function(e) {
			if (this.isEOF() || this.char() !== 39) return null;
			switch (this.peek()) {
				case 39: return this.bump(), this.bump(), "'";
				case 123:
				case 60:
				case 62:
				case 125: break;
				case 35:
					if (e === "plural" || e === "selectordinal") break;
					return null;
				default: return null;
			}
			this.bump();
			var t = [this.char()];
			for (this.bump(); !this.isEOF();) {
				var n = this.char();
				if (n === 39) {
					if (this.peek() !== 39) {
						this.bump();
						break;
					}
					t.push(39), this.bump();
				} else t.push(n);
				this.bump();
			}
			return Ae.apply(void 0, t);
		}, e.prototype.tryParseUnquoted = function(e, t) {
			if (this.isEOF()) return null;
			var n = this.char();
			return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), Ae(n));
		}, e.prototype.parseArgument = function(e, t) {
			var n = this.clonePosition();
			if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE, q(n, this.clonePosition()));
			if (this.char() === 125) return this.bump(), this.error(B.EMPTY_ARGUMENT, q(n, this.clonePosition()));
			var r = this.parseIdentifierIfPossible().value;
			if (!r) return this.error(B.MALFORMED_ARGUMENT, q(n, this.clonePosition()));
			if (this.bumpSpace(), this.isEOF()) return this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE, q(n, this.clonePosition()));
			switch (this.char()) {
				case 125: return this.bump(), {
					val: {
						type: V.argument,
						value: r,
						location: q(n, this.clonePosition())
					},
					err: null
				};
				case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE, q(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
				default: return this.error(B.MALFORMED_ARGUMENT, q(n, this.clonePosition()));
			}
		}, e.prototype.parseIdentifierIfPossible = function() {
			var e = this.clonePosition(), t = this.offset(), n = Oe(this.message, t), r = t + n.length;
			return this.bumpTo(r), {
				value: n,
				location: q(e, this.clonePosition())
			};
		}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
			var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
			switch (a) {
				case "": return this.error(B.EXPECT_ARGUMENT_TYPE, q(i, o));
				case "number":
				case "date":
				case "time":
					this.bumpSpace();
					var s = null;
					if (this.bumpIf(",")) {
						this.bumpSpace();
						var c = this.clonePosition();
						if ((_ = this.parseSimpleArgStyleIfPossible()).err) return _;
						if ((p = Pe(_.val)).length === 0) return this.error(B.EXPECT_ARGUMENT_STYLE, q(this.clonePosition(), this.clonePosition()));
						s = {
							style: p,
							styleLocation: q(c, this.clonePosition())
						};
					}
					if ((v = this.tryParseArgumentClose(r)).err) return v;
					var l = q(r, this.clonePosition());
					if (s && ke(s?.style, "::", 0)) {
						var u = Ne(s.style.slice(2));
						if (a === "number") return (_ = this.parseNumberSkeletonFromString(u, s.styleLocation)).err ? _ : {
							val: {
								type: V.number,
								value: n,
								location: l,
								style: _.val
							},
							err: null
						};
						if (u.length === 0) return this.error(B.EXPECT_DATE_TIME_SKELETON, l);
						var d = u;
						this.locale && (d = function(e, t) {
							for (var n = "", r = 0; r < e.length; r++) {
								var i = e.charAt(r);
								if (i === "j") {
									for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
									var o = 1 + (1 & a), s = a < 2 ? 1 : 3 + (a >> 1), c = ye(t);
									for (c != "H" && c != "k" || (s = 0); s-- > 0;) n += "a";
									for (; o-- > 0;) n = c + n;
								} else n += i === "J" ? "H" : i;
							}
							return n;
						}(u, this.locale));
						var p = {
							type: H.dateTime,
							pattern: d,
							location: s.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? se(d) : {}
						};
						return {
							val: {
								type: a === "date" ? V.date : V.time,
								value: n,
								location: l,
								style: p
							},
							err: null
						};
					}
					return {
						val: {
							type: a === "number" ? V.number : a === "date" ? V.date : V.time,
							value: n,
							location: l,
							style: s?.style ?? null
						},
						err: null
					};
				case "plural":
				case "selectordinal":
				case "select":
					var m = this.clonePosition();
					if (this.bumpSpace(), !this.bumpIf(",")) return this.error(B.EXPECT_SELECT_ARGUMENT_OPTIONS, q(m, f({}, m)));
					this.bumpSpace();
					var h = this.parseIdentifierIfPossible(), g = 0;
					if (a !== "select" && h.value === "offset") {
						if (!this.bumpIf(":")) return this.error(B.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, q(this.clonePosition(), this.clonePosition()));
						var _;
						if (this.bumpSpace(), (_ = this.tryParseDecimalInteger(B.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, B.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return _;
						this.bumpSpace(), h = this.parseIdentifierIfPossible(), g = _.val;
					}
					var v, y = this.tryParsePluralOrSelectOptions(e, a, t, h);
					if (y.err) return y;
					if ((v = this.tryParseArgumentClose(r)).err) return v;
					var b = q(r, this.clonePosition());
					return a === "select" ? {
						val: {
							type: V.select,
							value: n,
							options: je(y.val),
							location: b
						},
						err: null
					} : {
						val: {
							type: V.plural,
							value: n,
							options: je(y.val),
							offset: g,
							pluralType: a === "plural" ? "cardinal" : "ordinal",
							location: b
						},
						err: null
					};
				default: return this.error(B.INVALID_ARGUMENT_TYPE, q(i, o));
			}
		}, e.prototype.tryParseArgumentClose = function(e) {
			return this.isEOF() || this.char() !== 125 ? this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE, q(e, this.clonePosition())) : (this.bump(), {
				val: !0,
				err: null
			});
		}, e.prototype.parseSimpleArgStyleIfPossible = function() {
			for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
				case 39:
					this.bump();
					var n = this.clonePosition();
					if (!this.bumpUntil("'")) return this.error(B.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, q(n, this.clonePosition()));
					this.bump();
					break;
				case 123:
					e += 1, this.bump();
					break;
				case 125:
					if (!(e > 0)) return {
						val: this.message.slice(t.offset, this.offset()),
						err: null
					};
					--e;
					break;
				default: this.bump();
			}
			return {
				val: this.message.slice(t.offset, this.offset()),
				err: null
			};
		}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
			var n = [];
			try {
				n = function(e) {
					if (e.length === 0) throw Error("Number skeleton cannot be empty");
					for (var t = [], n = 0, r = e.split(ce).filter(function(e) {
						return e.length > 0;
					}); n < r.length; n++) {
						var i = r[n].split("/");
						if (i.length === 0) throw Error("Invalid number skeleton");
						for (var a = i[0], o = i.slice(1), s = 0, c = o; s < c.length; s++) if (c[s].length === 0) throw Error("Invalid number skeleton");
						t.push({
							stem: a,
							options: o
						});
					}
					return t;
				}(e);
			} catch {
				return this.error(B.INVALID_NUMBER_SKELETON, t);
			}
			return {
				val: {
					type: H.number,
					tokens: n,
					location: t,
					parsedOptions: this.shouldParseSkeletons ? ve(n) : {}
				},
				err: null
			};
		}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
			for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
				if (c.length === 0) {
					var u = this.clonePosition();
					if (t === "select" || !this.bumpIf("=")) break;
					var d = this.tryParseDecimalInteger(B.EXPECT_PLURAL_ARGUMENT_SELECTOR, B.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = q(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				}
				if (s.has(c)) return this.error(t === "select" ? B.DUPLICATE_SELECT_ARGUMENT_SELECTOR : B.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
				c === "other" && (a = !0), this.bumpSpace();
				var f = this.clonePosition();
				if (!this.bumpIf("{")) return this.error(t === "select" ? B.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : B.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, q(this.clonePosition(), this.clonePosition()));
				var p = this.parseMessage(e + 1, t, n);
				if (p.err) return p;
				var m = this.tryParseArgumentClose(f);
				if (m.err) return m;
				o.push([c, {
					value: p.val,
					location: q(f, this.clonePosition())
				}]), s.add(c), this.bumpSpace(), c = (i = this.parseIdentifierIfPossible()).value, l = i.location;
			}
			return o.length === 0 ? this.error(t === "select" ? B.EXPECT_SELECT_ARGUMENT_SELECTOR : B.EXPECT_PLURAL_ARGUMENT_SELECTOR, q(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(B.MISSING_OTHER_CLAUSE, q(this.clonePosition(), this.clonePosition())) : {
				val: o,
				err: null
			};
		}, e.prototype.tryParseDecimalInteger = function(e, t) {
			var n = 1, r = this.clonePosition();
			this.bumpIf("+") || this.bumpIf("-") && (n = -1);
			for (var i = !1, a = 0; !this.isEOF();) {
				var o = this.char();
				if (!(o >= 48 && o <= 57)) break;
				i = !0, a = 10 * a + (o - 48), this.bump();
			}
			var s = q(r, this.clonePosition());
			return i ? Ee(a *= n) ? {
				val: a,
				err: null
			} : this.error(t, s) : this.error(e, s);
		}, e.prototype.offset = function() {
			return this.position.offset;
		}, e.prototype.isEOF = function() {
			return this.offset() === this.message.length;
		}, e.prototype.clonePosition = function() {
			return {
				offset: this.position.offset,
				line: this.position.line,
				column: this.position.column
			};
		}, e.prototype.char = function() {
			var e = this.position.offset;
			if (e >= this.message.length) throw Error("out of bound");
			var t = Me(this.message, e);
			if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
			return t;
		}, e.prototype.error = function(e, t) {
			return {
				val: null,
				err: {
					kind: e,
					message: this.message,
					location: t
				}
			};
		}, e.prototype.bump = function() {
			if (!this.isEOF()) {
				var e = this.char();
				e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
			}
		}, e.prototype.bumpIf = function(e) {
			if (ke(this.message, e, this.offset())) {
				for (var t = 0; t < e.length; t++) this.bump();
				return !0;
			}
			return !1;
		}, e.prototype.bumpUntil = function(e) {
			var t = this.offset(), n = this.message.indexOf(e, t);
			return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
		}, e.prototype.bumpTo = function(e) {
			if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
			for (e = Math.min(e, this.message.length);;) {
				var t = this.offset();
				if (t === e) break;
				if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
				if (this.bump(), this.isEOF()) break;
			}
		}, e.prototype.bumpSpace = function() {
			for (; !this.isEOF() && Be(this.char());) this.bump();
		}, e.prototype.peek = function() {
			if (this.isEOF()) return null;
			var e = this.char(), t = this.offset();
			return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
		}, e;
	}();
	function Re(e) {
		return e >= 97 && e <= 122 || e >= 65 && e <= 90;
	}
	function ze(e) {
		return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
	}
	function Be(e) {
		return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
	}
	function Ve(e) {
		return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
	}
	function He(e) {
		e.forEach(function(e) {
			if (delete e.location, function(e) {
				return e.type === V.select;
			}(e) || function(e) {
				return e.type === V.plural;
			}(e)) for (var t in e.options) delete e.options[t].location, He(e.options[t].value);
			else (function(e) {
				return e.type === V.number;
			})(e) && function(e) {
				return !(!e || typeof e != "object" || e.type !== H.number);
			}(e.style) || (function(e) {
				return e.type === V.date;
			}(e) || function(e) {
				return e.type === V.time;
			}(e)) && function(e) {
				return !(!e || typeof e != "object" || e.type !== H.dateTime);
			}(e.style) ? delete e.style.location : function(e) {
				return e.type === V.tag;
			}(e) && He(e.children);
		});
	}
	var Ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
	function We(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
	}
	function Ge(e) {
		if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
		var t = e.default;
		if (typeof t == "function") {
			var n = function e() {
				var n = !1;
				try {
					n = this instanceof e;
				} catch {}
				return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
			};
			n.prototype = t.prototype;
		} else n = {};
		return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
			var r = Object.getOwnPropertyDescriptor(e, t);
			Object.defineProperty(n, t, r.get ? r : {
				enumerable: !0,
				get: function() {
					return e[t];
				}
			});
		}), n;
	}
	var Ke, qe = {};
	function Je() {
		return Ke || (Ke = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.SKELETON_TYPE = qe.TYPE = void 0, qe.isLiteralElement = function(t) {
			return t.type === e.literal;
		}, qe.isArgumentElement = function(t) {
			return t.type === e.argument;
		}, qe.isNumberElement = function(t) {
			return t.type === e.number;
		}, qe.isDateElement = function(t) {
			return t.type === e.date;
		}, qe.isTimeElement = function(t) {
			return t.type === e.time;
		}, qe.isSelectElement = function(t) {
			return t.type === e.select;
		}, qe.isPluralElement = function(t) {
			return t.type === e.plural;
		}, qe.isPoundElement = function(t) {
			return t.type === e.pound;
		}, qe.isTagElement = function(t) {
			return t.type === e.tag;
		}, qe.isNumberSkeleton = function(e) {
			return !(!e || typeof e != "object" || e.type !== t.number);
		}, qe.isDateTimeSkeleton = function(e) {
			return !(!e || typeof e != "object" || e.type !== t.dateTime);
		}, qe.createLiteralElement = function(t) {
			return {
				type: e.literal,
				value: t
			};
		}, qe.createNumberElement = function(t, n) {
			return {
				type: e.number,
				value: t,
				style: n
			};
		}, function(e) {
			e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
		}(e || (qe.TYPE = e = {})), function(e) {
			e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
		}(t || (qe.SKELETON_TYPE = t = {}))), qe;
		var e, t;
	}
	var Ye, Xe, Ze, Qe = Je(), $e = {}, et = Ge(W);
	(function() {
		if (Ye) return $e;
		Ye = 1, Object.defineProperty($e, "__esModule", { value: !0 }), $e.printAST = n, $e.doPrintAST = r, $e.printDateTimeSkeleton = o;
		var e = et, t = Je();
		function n(e) {
			return r(e, !1);
		}
		function r(s, c) {
			return s.map(function(l, u) {
				return (0, t.isLiteralElement)(l) ? function(e, t, n, r) {
					var a = e.value;
					return n || a[0] !== "'" || (a = `''${a.slice(1)}`), r || a[a.length - 1] !== "'" || (a = `${a.slice(0, a.length - 1)}''`), a = i(a), t ? a.replace("#", "'#'") : a;
				}(l, c, u === 0, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
					return `{${e.value}}`;
				}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
					return `{${e.value}, ${t.TYPE[e.type]}${e.style ? `, ${typeof (n = e.style) == "string" ? i(n) : n.type === t.SKELETON_TYPE.dateTime ? `::${o(n)}` : `::${n.tokens.map(a).join(" ")}`}` : ""}}`;
					var n;
				}(l) : (0, t.isPluralElement)(l) ? function(t) {
					var n = t.pluralType === "cardinal" ? "plural" : "selectordinal";
					return `{${[
						t.value,
						n,
						e.__spreadArray([t.offset ? `offset:${t.offset}` : ""], Object.keys(t.options).map(function(e) {
							return `${e}{${r(t.options[e].value, !0)}}`;
						}), !0).filter(Boolean).join(" ")
					].join(",")}}`;
				}(l) : (0, t.isSelectElement)(l) ? function(e) {
					return `{${[
						e.value,
						"select",
						Object.keys(e.options).map(function(t) {
							return `${t}{${r(e.options[t].value, !1)}}`;
						}).join(" ")
					].join(",")}}`;
				}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
					return `<${e.value}>${n(e.children)}</${e.value}>`;
				}(l) : void 0;
			}).join("");
		}
		function i(e) {
			return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
		}
		function a(e) {
			var t = e.stem, n = e.options;
			return n.length === 0 ? t : `${t}${n.map(function(e) {
				return `/${e}`;
			}).join("")}`;
		}
		function o(e) {
			return e.pattern;
		}
	})();
	var tt, nt = We((Ze || (Ze = 1, Xe = function(e, t) {
		t ||= {}, typeof t == "function" && (t = { cmp: t });
		var n = typeof t.cycles == "boolean" && t.cycles, r = t.cmp && function(e) {
			return function(t) {
				return function(n, r) {
					return e({
						key: n,
						value: t[n]
					}, {
						key: r,
						value: t[r]
					});
				};
			};
		}(t.cmp), i = [];
		return function e(t) {
			if (t && t.toJSON && typeof t.toJSON == "function" && (t = t.toJSON()), t !== void 0) {
				if (typeof t == "number") return isFinite(t) ? "" + t : "null";
				if (typeof t != "object") return JSON.stringify(t);
				var a, o;
				if (Array.isArray(t)) {
					for (o = "[", a = 0; a < t.length; a++) a && (o += ","), o += e(t[a]) || "null";
					return o + "]";
				}
				if (t === null) return "null";
				if (i.indexOf(t) !== -1) {
					if (n) return JSON.stringify("__cycle__");
					throw TypeError("Converting circular structure to JSON");
				}
				var s = i.push(t) - 1, c = Object.keys(t).sort(r && r(t));
				for (o = "", a = 0; a < c.length; a++) {
					var l = c[a], u = e(t[l]);
					u && (o && (o += ","), o += JSON.stringify(l) + ":" + u);
				}
				return i.splice(s, 1), "{" + o + "}";
			}
		}(e);
	}), Xe)), rt = { exports: {} }, it = { exports: {} }, at = Ge(Object.freeze({
		__proto__: null,
		default: {}
	}));
	function X() {
		return tt || (tt = 1, it.exports = (e ||= function(e) {
			var t;
			if (typeof window < "u" && window.crypto && (t = window.crypto), typeof self < "u" && self.crypto && (t = self.crypto), typeof globalThis < "u" && globalThis.crypto && (t = globalThis.crypto), !t && typeof window < "u" && window.msCrypto && (t = window.msCrypto), !t && Ue !== void 0 && Ue.crypto && (t = Ue.crypto), !t) try {
				t = at;
			} catch {}
			var n = function() {
				if (t) {
					if (typeof t.getRandomValues == "function") try {
						return t.getRandomValues(new Uint32Array(1))[0];
					} catch {}
					if (typeof t.randomBytes == "function") try {
						return t.randomBytes(4).readInt32LE();
					} catch {}
				}
				throw Error("Native crypto module could not be used to get secure random number.");
			}, r = Object.create || function() {
				function e() {}
				return function(t) {
					var n;
					return e.prototype = t, n = new e(), e.prototype = null, n;
				};
			}(), i = {}, a = i.lib = {}, o = a.Base = {
				extend: function(e) {
					var t = r(this);
					return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
						t.$super.init.apply(this, arguments);
					}), t.init.prototype = t, t.$super = this, t;
				},
				create: function() {
					var e = this.extend();
					return e.init.apply(e, arguments), e;
				},
				init: function() {},
				mixIn: function(e) {
					for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
					e.hasOwnProperty("toString") && (this.toString = e.toString);
				},
				clone: function() {
					return this.init.prototype.extend(this);
				}
			}, s = a.WordArray = o.extend({
				init: function(e, t) {
					e = this.words = e || [], this.sigBytes = t ?? 4 * e.length;
				},
				toString: function(e) {
					return (e || l).stringify(this);
				},
				concat: function(e) {
					var t = this.words, n = e.words, r = this.sigBytes, i = e.sigBytes;
					if (this.clamp(), r % 4) for (var a = 0; a < i; a++) {
						var o = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
						t[r + a >>> 2] |= o << 24 - (r + a) % 4 * 8;
					}
					else for (var s = 0; s < i; s += 4) t[r + s >>> 2] = n[s >>> 2];
					return this.sigBytes += i, this;
				},
				clamp: function() {
					var t = this.words, n = this.sigBytes;
					t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
				},
				clone: function() {
					var e = o.clone.call(this);
					return e.words = this.words.slice(0), e;
				},
				random: function(e) {
					for (var t = [], r = 0; r < e; r += 4) t.push(n());
					return new s.init(t, e);
				}
			}), c = i.enc = {}, l = c.Hex = {
				stringify: function(e) {
					for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
						var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
						r.push((a >>> 4).toString(16)), r.push((15 & a).toString(16));
					}
					return r.join("");
				},
				parse: function(e) {
					for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
					return new s.init(n, t / 2);
				}
			}, u = c.Latin1 = {
				stringify: function(e) {
					for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
						var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
						r.push(String.fromCharCode(a));
					}
					return r.join("");
				},
				parse: function(e) {
					for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
					return new s.init(n, t);
				}
			}, d = c.Utf8 = {
				stringify: function(e) {
					try {
						return decodeURIComponent(escape(u.stringify(e)));
					} catch {
						throw Error("Malformed UTF-8 data");
					}
				},
				parse: function(e) {
					return u.parse(unescape(encodeURIComponent(e)));
				}
			}, f = a.BufferedBlockAlgorithm = o.extend({
				reset: function() {
					this._data = new s.init(), this._nDataBytes = 0;
				},
				_append: function(e) {
					typeof e == "string" && (e = d.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
				},
				_process: function(t) {
					var n, r = this._data, i = r.words, a = r.sigBytes, o = this.blockSize, c = a / (4 * o), l = (c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0)) * o, u = e.min(4 * l, a);
					if (l) {
						for (var d = 0; d < l; d += o) this._doProcessBlock(i, d);
						n = i.splice(0, l), r.sigBytes -= u;
					}
					return new s.init(n, u);
				},
				clone: function() {
					var e = o.clone.call(this);
					return e._data = this._data.clone(), e;
				},
				_minBufferSize: 0
			});
			a.Hasher = f.extend({
				cfg: o.extend(),
				init: function(e) {
					this.cfg = this.cfg.extend(e), this.reset();
				},
				reset: function() {
					f.reset.call(this), this._doReset();
				},
				update: function(e) {
					return this._append(e), this._process(), this;
				},
				finalize: function(e) {
					return e && this._append(e), this._doFinalize();
				},
				blockSize: 16,
				_createHelper: function(e) {
					return function(t, n) {
						return new e.init(n).finalize(t);
					};
				},
				_createHmacHelper: function(e) {
					return function(t, n) {
						return new p.HMAC.init(e, n).finalize(t);
					};
				}
			});
			var p = i.algo = {};
			return i;
		}(Math), e)), it.exports;
		var e;
	}
	var ot, Z = { exports: {} };
	function st() {
		return ot || (ot = 1, Z.exports = (a = X(), t = (e = a).lib, n = t.Base, r = t.WordArray, (i = e.x64 = {}).Word = n.extend({ init: function(e, t) {
			this.high = e, this.low = t;
		} }), i.WordArray = n.extend({
			init: function(e, t) {
				e = this.words = e || [], this.sigBytes = t ?? 8 * e.length;
			},
			toX32: function() {
				for (var e = this.words, t = e.length, n = [], i = 0; i < t; i++) {
					var a = e[i];
					n.push(a.high), n.push(a.low);
				}
				return r.create(n, this.sigBytes);
			},
			clone: function() {
				for (var e = n.clone.call(this), t = e.words = this.words.slice(0), r = t.length, i = 0; i < r; i++) t[i] = t[i].clone();
				return e;
			}
		}), a)), Z.exports;
		var e, t, n, r, i, a;
	}
	var ct, lt = { exports: {} }, ut, dt = { exports: {} }, ft, pt = { exports: {} };
	function mt() {
		return ft || (ft = 1, pt.exports = (e = X(), function() {
			var t = e, n = t.lib.WordArray;
			function r(e, t, r) {
				for (var i = [], a = 0, o = 0; o < t; o++) if (o % 4) {
					var s = r[e.charCodeAt(o - 1)] << o % 4 * 2 | r[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
					i[a >>> 2] |= s << 24 - a % 4 * 8, a++;
				}
				return n.create(i, a);
			}
			t.enc.Base64 = {
				stringify: function(e) {
					var t = e.words, n = e.sigBytes, r = this._map;
					e.clamp();
					for (var i = [], a = 0; a < n; a += 3) for (var o = (t[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (t[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | t[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, s = 0; s < 4 && a + .75 * s < n; s++) i.push(r.charAt(o >>> 6 * (3 - s) & 63));
					var c = r.charAt(64);
					if (c) for (; i.length % 4;) i.push(c);
					return i.join("");
				},
				parse: function(e) {
					var t = e.length, n = this._map, i = this._reverseMap;
					if (!i) {
						i = this._reverseMap = [];
						for (var a = 0; a < n.length; a++) i[n.charCodeAt(a)] = a;
					}
					var o = n.charAt(64);
					if (o) {
						var s = e.indexOf(o);
						s !== -1 && (t = s);
					}
					return r(e, t, i);
				},
				_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
			};
		}(), e.enc.Base64)), pt.exports;
		var e;
	}
	var ht, gt = { exports: {} }, _t, vt = { exports: {} };
	function yt() {
		return _t || (_t = 1, vt.exports = (e = X(), function(t) {
			var n = e, r = n.lib, i = r.WordArray, a = r.Hasher, o = n.algo, s = [];
			(function() {
				for (var e = 0; e < 64; e++) s[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0;
			})();
			var c = o.MD5 = a.extend({
				_doReset: function() {
					this._hash = new i.init([
						1732584193,
						4023233417,
						2562383102,
						271733878
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var n = 0; n < 16; n++) {
						var r = t + n, i = e[r];
						e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
					}
					var a = this._hash.words, o = e[t + 0], c = e[t + 1], p = e[t + 2], m = e[t + 3], h = e[t + 4], g = e[t + 5], _ = e[t + 6], v = e[t + 7], y = e[t + 8], b = e[t + 9], x = e[t + 10], S = e[t + 11], C = e[t + 12], w = e[t + 13], T = e[t + 14], E = e[t + 15], D = a[0], O = a[1], k = a[2], A = a[3];
					D = l(D, O, k, A, o, 7, s[0]), A = l(A, D, O, k, c, 12, s[1]), k = l(k, A, D, O, p, 17, s[2]), O = l(O, k, A, D, m, 22, s[3]), D = l(D, O, k, A, h, 7, s[4]), A = l(A, D, O, k, g, 12, s[5]), k = l(k, A, D, O, _, 17, s[6]), O = l(O, k, A, D, v, 22, s[7]), D = l(D, O, k, A, y, 7, s[8]), A = l(A, D, O, k, b, 12, s[9]), k = l(k, A, D, O, x, 17, s[10]), O = l(O, k, A, D, S, 22, s[11]), D = l(D, O, k, A, C, 7, s[12]), A = l(A, D, O, k, w, 12, s[13]), k = l(k, A, D, O, T, 17, s[14]), D = u(D, O = l(O, k, A, D, E, 22, s[15]), k, A, c, 5, s[16]), A = u(A, D, O, k, _, 9, s[17]), k = u(k, A, D, O, S, 14, s[18]), O = u(O, k, A, D, o, 20, s[19]), D = u(D, O, k, A, g, 5, s[20]), A = u(A, D, O, k, x, 9, s[21]), k = u(k, A, D, O, E, 14, s[22]), O = u(O, k, A, D, h, 20, s[23]), D = u(D, O, k, A, b, 5, s[24]), A = u(A, D, O, k, T, 9, s[25]), k = u(k, A, D, O, m, 14, s[26]), O = u(O, k, A, D, y, 20, s[27]), D = u(D, O, k, A, w, 5, s[28]), A = u(A, D, O, k, p, 9, s[29]), k = u(k, A, D, O, v, 14, s[30]), D = d(D, O = u(O, k, A, D, C, 20, s[31]), k, A, g, 4, s[32]), A = d(A, D, O, k, y, 11, s[33]), k = d(k, A, D, O, S, 16, s[34]), O = d(O, k, A, D, T, 23, s[35]), D = d(D, O, k, A, c, 4, s[36]), A = d(A, D, O, k, h, 11, s[37]), k = d(k, A, D, O, v, 16, s[38]), O = d(O, k, A, D, x, 23, s[39]), D = d(D, O, k, A, w, 4, s[40]), A = d(A, D, O, k, o, 11, s[41]), k = d(k, A, D, O, m, 16, s[42]), O = d(O, k, A, D, _, 23, s[43]), D = d(D, O, k, A, b, 4, s[44]), A = d(A, D, O, k, C, 11, s[45]), k = d(k, A, D, O, E, 16, s[46]), D = f(D, O = d(O, k, A, D, p, 23, s[47]), k, A, o, 6, s[48]), A = f(A, D, O, k, v, 10, s[49]), k = f(k, A, D, O, T, 15, s[50]), O = f(O, k, A, D, g, 21, s[51]), D = f(D, O, k, A, C, 6, s[52]), A = f(A, D, O, k, m, 10, s[53]), k = f(k, A, D, O, x, 15, s[54]), O = f(O, k, A, D, c, 21, s[55]), D = f(D, O, k, A, y, 6, s[56]), A = f(A, D, O, k, E, 10, s[57]), k = f(k, A, D, O, _, 15, s[58]), O = f(O, k, A, D, w, 21, s[59]), D = f(D, O, k, A, h, 6, s[60]), A = f(A, D, O, k, S, 10, s[61]), k = f(k, A, D, O, p, 15, s[62]), O = f(O, k, A, D, b, 21, s[63]), a[0] = a[0] + D | 0, a[1] = a[1] + O | 0, a[2] = a[2] + k | 0, a[3] = a[3] + A | 0;
				},
				_doFinalize: function() {
					var e = this._data, n = e.words, r = 8 * this._nDataBytes, i = 8 * e.sigBytes;
					n[i >>> 5] |= 128 << 24 - i % 32;
					var a = t.floor(r / 4294967296), o = r;
					n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), e.sigBytes = 4 * (n.length + 1), this._process();
					for (var s = this._hash, c = s.words, l = 0; l < 4; l++) {
						var u = c[l];
						c[l] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
					}
					return s;
				},
				clone: function() {
					var e = a.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			function l(e, t, n, r, i, a, o) {
				var s = e + (t & n | ~t & r) + i + o;
				return (s << a | s >>> 32 - a) + t;
			}
			function u(e, t, n, r, i, a, o) {
				var s = e + (t & r | n & ~r) + i + o;
				return (s << a | s >>> 32 - a) + t;
			}
			function d(e, t, n, r, i, a, o) {
				var s = e + (t ^ n ^ r) + i + o;
				return (s << a | s >>> 32 - a) + t;
			}
			function f(e, t, n, r, i, a, o) {
				var s = e + (n ^ (t | ~r)) + i + o;
				return (s << a | s >>> 32 - a) + t;
			}
			n.MD5 = a._createHelper(c), n.HmacMD5 = a._createHmacHelper(c);
		}(Math), e.MD5)), vt.exports;
		var e;
	}
	var bt, xt = { exports: {} };
	function St() {
		return bt || (bt = 1, xt.exports = (e = X(), function() {
			var t = e, n = t.lib, r = n.WordArray, i = n.Hasher, a = t.algo, o = [], s = a.SHA1 = i.extend({
				_doReset: function() {
					this._hash = new r.init([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], s = n[3], c = n[4], l = 0; l < 80; l++) {
						if (l < 16) o[l] = 0 | e[t + l];
						else {
							var u = o[l - 3] ^ o[l - 8] ^ o[l - 14] ^ o[l - 16];
							o[l] = u << 1 | u >>> 31;
						}
						var d = (r << 5 | r >>> 27) + c + o[l];
						d += l < 20 ? 1518500249 + (i & a | ~i & s) : l < 40 ? 1859775393 + (i ^ a ^ s) : l < 60 ? (i & a | i & s | a & s) - 1894007588 : (i ^ a ^ s) - 899497514, c = s, s = a, a = i << 30 | i >>> 2, i = r, r = d;
					}
					n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, n[4] = n[4] + c | 0;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
					return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
				},
				clone: function() {
					var e = i.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			t.SHA1 = i._createHelper(s), t.HmacSHA1 = i._createHmacHelper(s);
		}(), e.SHA1)), xt.exports;
		var e;
	}
	var Ct, wt, Tt = { exports: {} };
	function Et() {
		return Ct || (Ct = 1, Tt.exports = (e = X(), function(t) {
			var n = e, r = n.lib, i = r.WordArray, a = r.Hasher, o = n.algo, s = [], c = [];
			(function() {
				function e(e) {
					for (var n = t.sqrt(e), r = 2; r <= n; r++) if (!(e % r)) return !1;
					return !0;
				}
				function n(e) {
					return 4294967296 * (e - (0 | e)) | 0;
				}
				for (var r = 2, i = 0; i < 64;) e(r) && (i < 8 && (s[i] = n(t.pow(r, .5))), c[i] = n(t.pow(r, 1 / 3)), i++), r++;
			})();
			var l = [], u = o.SHA256 = a.extend({
				_doReset: function() {
					this._hash = new i.init(s.slice(0));
				},
				_doProcessBlock: function(e, t) {
					for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], u = n[5], d = n[6], f = n[7], p = 0; p < 64; p++) {
						if (p < 16) l[p] = 0 | e[t + p];
						else {
							var m = l[p - 15], h = (m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3, g = l[p - 2], _ = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
							l[p] = h + l[p - 7] + _ + l[p - 16];
						}
						var v = r & i ^ r & a ^ i & a, y = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22), b = f + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & u ^ ~s & d) + c[p] + l[p];
						f = d, d = u, u = s, s = o + b | 0, o = a, a = i, i = r, r = b + (y + v) | 0;
					}
					n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + a | 0, n[3] = n[3] + o | 0, n[4] = n[4] + s | 0, n[5] = n[5] + u | 0, n[6] = n[6] + d | 0, n[7] = n[7] + f | 0;
				},
				_doFinalize: function() {
					var e = this._data, n = e.words, r = 8 * this._nDataBytes, i = 8 * e.sigBytes;
					return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = t.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * n.length, this._process(), this._hash;
				},
				clone: function() {
					var e = a.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			n.SHA256 = a._createHelper(u), n.HmacSHA256 = a._createHmacHelper(u);
		}(Math), e.SHA256)), Tt.exports;
		var e;
	}
	var Dt, Ot = { exports: {} };
	function kt() {
		return Dt || (Dt = 1, Ot.exports = (e = X(), st(), function() {
			var t = e, n = t.lib.Hasher, r = t.x64, i = r.Word, a = r.WordArray, o = t.algo;
			function s() {
				return i.create.apply(i, arguments);
			}
			var c = [
				s(1116352408, 3609767458),
				s(1899447441, 602891725),
				s(3049323471, 3964484399),
				s(3921009573, 2173295548),
				s(961987163, 4081628472),
				s(1508970993, 3053834265),
				s(2453635748, 2937671579),
				s(2870763221, 3664609560),
				s(3624381080, 2734883394),
				s(310598401, 1164996542),
				s(607225278, 1323610764),
				s(1426881987, 3590304994),
				s(1925078388, 4068182383),
				s(2162078206, 991336113),
				s(2614888103, 633803317),
				s(3248222580, 3479774868),
				s(3835390401, 2666613458),
				s(4022224774, 944711139),
				s(264347078, 2341262773),
				s(604807628, 2007800933),
				s(770255983, 1495990901),
				s(1249150122, 1856431235),
				s(1555081692, 3175218132),
				s(1996064986, 2198950837),
				s(2554220882, 3999719339),
				s(2821834349, 766784016),
				s(2952996808, 2566594879),
				s(3210313671, 3203337956),
				s(3336571891, 1034457026),
				s(3584528711, 2466948901),
				s(113926993, 3758326383),
				s(338241895, 168717936),
				s(666307205, 1188179964),
				s(773529912, 1546045734),
				s(1294757372, 1522805485),
				s(1396182291, 2643833823),
				s(1695183700, 2343527390),
				s(1986661051, 1014477480),
				s(2177026350, 1206759142),
				s(2456956037, 344077627),
				s(2730485921, 1290863460),
				s(2820302411, 3158454273),
				s(3259730800, 3505952657),
				s(3345764771, 106217008),
				s(3516065817, 3606008344),
				s(3600352804, 1432725776),
				s(4094571909, 1467031594),
				s(275423344, 851169720),
				s(430227734, 3100823752),
				s(506948616, 1363258195),
				s(659060556, 3750685593),
				s(883997877, 3785050280),
				s(958139571, 3318307427),
				s(1322822218, 3812723403),
				s(1537002063, 2003034995),
				s(1747873779, 3602036899),
				s(1955562222, 1575990012),
				s(2024104815, 1125592928),
				s(2227730452, 2716904306),
				s(2361852424, 442776044),
				s(2428436474, 593698344),
				s(2756734187, 3733110249),
				s(3204031479, 2999351573),
				s(3329325298, 3815920427),
				s(3391569614, 3928383900),
				s(3515267271, 566280711),
				s(3940187606, 3454069534),
				s(4118630271, 4000239992),
				s(116418474, 1914138554),
				s(174292421, 2731055270),
				s(289380356, 3203993006),
				s(460393269, 320620315),
				s(685471733, 587496836),
				s(852142971, 1086792851),
				s(1017036298, 365543100),
				s(1126000580, 2618297676),
				s(1288033470, 3409855158),
				s(1501505948, 4234509866),
				s(1607167915, 987167468),
				s(1816402316, 1246189591)
			], l = [];
			(function() {
				for (var e = 0; e < 80; e++) l[e] = s();
			})();
			var u = o.SHA512 = n.extend({
				_doReset: function() {
					this._hash = new a.init([
						new i.init(1779033703, 4089235720),
						new i.init(3144134277, 2227873595),
						new i.init(1013904242, 4271175723),
						new i.init(2773480762, 1595750129),
						new i.init(1359893119, 2917565137),
						new i.init(2600822924, 725511199),
						new i.init(528734635, 4215389547),
						new i.init(1541459225, 327033209)
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], u = n[5], d = n[6], f = n[7], p = r.high, m = r.low, h = i.high, g = i.low, _ = a.high, v = a.low, y = o.high, b = o.low, x = s.high, S = s.low, C = u.high, w = u.low, T = d.high, E = d.low, D = f.high, O = f.low, k = p, A = m, j = h, M = g, N = _, P = v, F = y, I = b, L = x, R = S, ee = C, te = w, ne = T, re = E, ie = D, ae = O, z = 0; z < 80; z++) {
						var B, V, H = l[z];
						if (z < 16) V = H.high = 0 | e[t + 2 * z], B = H.low = 0 | e[t + 2 * z + 1];
						else {
							var U = l[z - 15], W = U.high, oe = U.low, G = (W >>> 1 | oe << 31) ^ (W >>> 8 | oe << 24) ^ W >>> 7, se = (oe >>> 1 | W << 31) ^ (oe >>> 8 | W << 24) ^ (oe >>> 7 | W << 25), ce = l[z - 2], le = ce.high, ue = ce.low, de = (le >>> 19 | ue << 13) ^ (le << 3 | ue >>> 29) ^ le >>> 6, fe = (ue >>> 19 | le << 13) ^ (ue << 3 | le >>> 29) ^ (ue >>> 6 | le << 26), pe = l[z - 7], me = pe.high, he = pe.low, ge = l[z - 16], _e = ge.high, ve = ge.low;
							V = (V = (V = G + me + +((B = se + he) >>> 0 < se >>> 0)) + de + +((B += fe) >>> 0 < fe >>> 0)) + _e + +((B += ve) >>> 0 < ve >>> 0), H.high = V, H.low = B;
						}
						var K, ye = L & ee ^ ~L & ne, be = R & te ^ ~R & re, xe = k & j ^ k & N ^ j & N, q = A & M ^ A & P ^ M & P, J = (k >>> 28 | A << 4) ^ (k << 30 | A >>> 2) ^ (k << 25 | A >>> 7), Y = (A >>> 28 | k << 4) ^ (A << 30 | k >>> 2) ^ (A << 25 | k >>> 7), Se = (L >>> 14 | R << 18) ^ (L >>> 18 | R << 14) ^ (L << 23 | R >>> 9), Ce = (R >>> 14 | L << 18) ^ (R >>> 18 | L << 14) ^ (R << 23 | L >>> 9), we = c[z], Te = we.high, Ee = we.low, De = ie + Se + +((K = ae + Ce) >>> 0 < ae >>> 0), Oe = Y + q;
						ie = ne, ae = re, ne = ee, re = te, ee = L, te = R, L = F + (De = (De = (De = De + ye + +((K += be) >>> 0 < be >>> 0)) + Te + +((K += Ee) >>> 0 < Ee >>> 0)) + V + +((K += B) >>> 0 < B >>> 0)) + +((R = I + K | 0) >>> 0 < I >>> 0) | 0, F = N, I = P, N = j, P = M, j = k, M = A, k = De + (J + xe + +(Oe >>> 0 < Y >>> 0)) + +((A = K + Oe | 0) >>> 0 < K >>> 0) | 0;
					}
					m = r.low = m + A, r.high = p + k + +(m >>> 0 < A >>> 0), g = i.low = g + M, i.high = h + j + +(g >>> 0 < M >>> 0), v = a.low = v + P, a.high = _ + N + +(v >>> 0 < P >>> 0), b = o.low = b + I, o.high = y + F + +(b >>> 0 < I >>> 0), S = s.low = S + R, s.high = x + L + +(S >>> 0 < R >>> 0), w = u.low = w + te, u.high = C + ee + +(w >>> 0 < te >>> 0), E = d.low = E + re, d.high = T + ne + +(E >>> 0 < re >>> 0), O = f.low = O + ae, f.high = D + ie + +(O >>> 0 < ae >>> 0);
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
					return t[r >>> 5] |= 128 << 24 - r % 32, t[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296), t[31 + (r + 128 >>> 10 << 5)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash.toX32();
				},
				clone: function() {
					var e = n.clone.call(this);
					return e._hash = this._hash.clone(), e;
				},
				blockSize: 32
			});
			t.SHA512 = n._createHelper(u), t.HmacSHA512 = n._createHmacHelper(u);
		}(), e.SHA512)), Ot.exports;
		var e;
	}
	var At, jt, Mt = { exports: {} }, Nt = { exports: {} }, Pt, Ft, It = { exports: {} }, Lt = { exports: {} };
	function Rt() {
		return Ft || (Ft = 1, Lt.exports = (e = X(), void function() {
			var t = e, n = t.lib.Base, r = t.enc.Utf8;
			t.algo.HMAC = n.extend({
				init: function(e, t) {
					e = this._hasher = new e.init(), typeof t == "string" && (t = r.parse(t));
					var n = e.blockSize, i = 4 * n;
					t.sigBytes > i && (t = e.finalize(t)), t.clamp();
					for (var a = this._oKey = t.clone(), o = this._iKey = t.clone(), s = a.words, c = o.words, l = 0; l < n; l++) s[l] ^= 1549556828, c[l] ^= 909522486;
					a.sigBytes = o.sigBytes = i, this.reset();
				},
				reset: function() {
					var e = this._hasher;
					e.reset(), e.update(this._iKey);
				},
				update: function(e) {
					return this._hasher.update(e), this;
				},
				finalize: function(e) {
					var t = this._hasher, n = t.finalize(e);
					return t.reset(), t.finalize(this._oKey.clone().concat(n));
				}
			});
		}())), Lt.exports;
		var e;
	}
	var zt, Bt, Vt = { exports: {} }, Ht = { exports: {} };
	function Ut() {
		return Bt || (Bt = 1, Ht.exports = (e = X(), St(), Rt(), function() {
			var t = e, n = t.lib, r = n.Base, i = n.WordArray, a = t.algo, o = a.MD5, s = a.EvpKDF = r.extend({
				cfg: r.extend({
					keySize: 4,
					hasher: o,
					iterations: 1
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e);
				},
				compute: function(e, t) {
					for (var n, r = this.cfg, a = r.hasher.create(), o = i.create(), s = o.words, c = r.keySize, l = r.iterations; s.length < c;) {
						n && a.update(n), n = a.update(e).finalize(t), a.reset();
						for (var u = 1; u < l; u++) n = a.finalize(n), a.reset();
						o.concat(n);
					}
					return o.sigBytes = 4 * c, o;
				}
			});
			t.EvpKDF = function(e, t, n) {
				return s.create(n).compute(e, t);
			};
		}(), e.EvpKDF)), Ht.exports;
		var e;
	}
	var Wt, Gt = { exports: {} };
	function Kt() {
		return Wt || (Wt = 1, Gt.exports = (e = X(), Ut(), void (e.lib.Cipher || function() {
			var t = e, n = t.lib, r = n.Base, i = n.WordArray, a = n.BufferedBlockAlgorithm, o = t.enc;
			o.Utf8;
			var s = o.Base64, c = t.algo.EvpKDF, l = n.Cipher = a.extend({
				cfg: r.extend(),
				createEncryptor: function(e, t) {
					return this.create(this._ENC_XFORM_MODE, e, t);
				},
				createDecryptor: function(e, t) {
					return this.create(this._DEC_XFORM_MODE, e, t);
				},
				init: function(e, t, n) {
					this.cfg = this.cfg.extend(n), this._xformMode = e, this._key = t, this.reset();
				},
				reset: function() {
					a.reset.call(this), this._doReset();
				},
				process: function(e) {
					return this._append(e), this._process();
				},
				finalize: function(e) {
					return e && this._append(e), this._doFinalize();
				},
				keySize: 4,
				ivSize: 4,
				_ENC_XFORM_MODE: 1,
				_DEC_XFORM_MODE: 2,
				_createHelper: function() {
					function e(e) {
						return typeof e == "string" ? v : g;
					}
					return function(t) {
						return {
							encrypt: function(n, r, i) {
								return e(r).encrypt(t, n, r, i);
							},
							decrypt: function(n, r, i) {
								return e(r).decrypt(t, n, r, i);
							}
						};
					};
				}()
			});
			n.StreamCipher = l.extend({
				_doFinalize: function() {
					return this._process(!0);
				},
				blockSize: 1
			});
			var u = t.mode = {}, d = n.BlockCipherMode = r.extend({
				createEncryptor: function(e, t) {
					return this.Encryptor.create(e, t);
				},
				createDecryptor: function(e, t) {
					return this.Decryptor.create(e, t);
				},
				init: function(e, t) {
					this._cipher = e, this._iv = t;
				}
			}), f = u.CBC = function() {
				var e = d.extend();
				function t(e, t, n) {
					var r, i = this._iv;
					i ? (r = i, this._iv = void 0) : r = this._prevBlock;
					for (var a = 0; a < n; a++) e[t + a] ^= r[a];
				}
				return e.Encryptor = e.extend({ processBlock: function(e, n) {
					var r = this._cipher, i = r.blockSize;
					t.call(this, e, n, i), r.encryptBlock(e, n), this._prevBlock = e.slice(n, n + i);
				} }), e.Decryptor = e.extend({ processBlock: function(e, n) {
					var r = this._cipher, i = r.blockSize, a = e.slice(n, n + i);
					r.decryptBlock(e, n), t.call(this, e, n, i), this._prevBlock = a;
				} }), e;
			}(), p = (t.pad = {}).Pkcs7 = {
				pad: function(e, t) {
					for (var n = 4 * t, r = n - e.sigBytes % n, a = r << 24 | r << 16 | r << 8 | r, o = [], s = 0; s < r; s += 4) o.push(a);
					var c = i.create(o, r);
					e.concat(c);
				},
				unpad: function(e) {
					var t = 255 & e.words[e.sigBytes - 1 >>> 2];
					e.sigBytes -= t;
				}
			};
			n.BlockCipher = l.extend({
				cfg: l.cfg.extend({
					mode: f,
					padding: p
				}),
				reset: function() {
					var e;
					l.reset.call(this);
					var t = this.cfg, n = t.iv, r = t.mode;
					this._xformMode == this._ENC_XFORM_MODE ? e = r.createEncryptor : (e = r.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == e ? this._mode.init(this, n && n.words) : (this._mode = e.call(r, this, n && n.words), this._mode.__creator = e);
				},
				_doProcessBlock: function(e, t) {
					this._mode.processBlock(e, t);
				},
				_doFinalize: function() {
					var e, t = this.cfg.padding;
					return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize), e = this._process(!0)) : (e = this._process(!0), t.unpad(e)), e;
				},
				blockSize: 4
			});
			var m = n.CipherParams = r.extend({
				init: function(e) {
					this.mixIn(e);
				},
				toString: function(e) {
					return (e || this.formatter).stringify(this);
				}
			}), h = (t.format = {}).OpenSSL = {
				stringify: function(e) {
					var t = e.ciphertext, n = e.salt;
					return (n ? i.create([1398893684, 1701076831]).concat(n).concat(t) : t).toString(s);
				},
				parse: function(e) {
					var t, n = s.parse(e), r = n.words;
					return r[0] == 1398893684 && r[1] == 1701076831 && (t = i.create(r.slice(2, 4)), r.splice(0, 4), n.sigBytes -= 16), m.create({
						ciphertext: n,
						salt: t
					});
				}
			}, g = n.SerializableCipher = r.extend({
				cfg: r.extend({ format: h }),
				encrypt: function(e, t, n, r) {
					r = this.cfg.extend(r);
					var i = e.createEncryptor(n, r), a = i.finalize(t), o = i.cfg;
					return m.create({
						ciphertext: a,
						key: n,
						iv: o.iv,
						algorithm: e,
						mode: o.mode,
						padding: o.padding,
						blockSize: e.blockSize,
						formatter: r.format
					});
				},
				decrypt: function(e, t, n, r) {
					return r = this.cfg.extend(r), t = this._parse(t, r.format), e.createDecryptor(n, r).finalize(t.ciphertext);
				},
				_parse: function(e, t) {
					return typeof e == "string" ? t.parse(e, this) : e;
				}
			}), _ = (t.kdf = {}).OpenSSL = { execute: function(e, t, n, r, a) {
				if (r ||= i.random(8), a) o = c.create({
					keySize: t + n,
					hasher: a
				}).compute(e, r);
				else var o = c.create({ keySize: t + n }).compute(e, r);
				var s = i.create(o.words.slice(t), 4 * n);
				return o.sigBytes = 4 * t, m.create({
					key: o,
					iv: s,
					salt: r
				});
			} }, v = n.PasswordBasedCipher = g.extend({
				cfg: g.cfg.extend({ kdf: _ }),
				encrypt: function(e, t, n, r) {
					var i = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize, r.salt, r.hasher);
					r.iv = i.iv;
					var a = g.encrypt.call(this, e, t, i.key, r);
					return a.mixIn(i), a;
				},
				decrypt: function(e, t, n, r) {
					r = this.cfg.extend(r), t = this._parse(t, r.format);
					var i = r.kdf.execute(n, e.keySize, e.ivSize, t.salt, r.hasher);
					return r.iv = i.iv, g.decrypt.call(this, e, t, i.key, r);
				}
			});
		}()))), Gt.exports;
		var e;
	}
	var qt, Jt = { exports: {} }, Yt, Xt = { exports: {} }, Zt, Qt = { exports: {} }, $t, en = { exports: {} }, tn, nn, rn, an, on, sn, cn, ln, un, dn = { exports: {} }, fn = { exports: {} }, pn = { exports: {} }, mn = { exports: {} }, hn = { exports: {} }, gn = { exports: {} }, _n = { exports: {} }, vn = { exports: {} }, yn = { exports: {} }, bn, xn, Sn, Cn, Q, wn = { exports: {} }, Tn = { exports: {} }, En = { exports: {} }, Dn = { exports: {} }, On, kn = We((Q || (Q = 1, rt.exports = function(e) {
		return e;
	}(X(), st(), function() {
		return ct || (ct = 1, lt.exports = (e = X(), function() {
			if (typeof ArrayBuffer == "function") {
				var t = e.lib.WordArray, n = t.init, r = t.init = function(e) {
					if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || typeof Uint8ClampedArray < "u" && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
						for (var t = e.byteLength, r = [], i = 0; i < t; i++) r[i >>> 2] |= e[i] << 24 - i % 4 * 8;
						n.call(this, r, t);
					} else n.apply(this, arguments);
				};
				r.prototype = t;
			}
		}(), e.lib.WordArray)), lt.exports;
		var e;
	}(), function() {
		return ut || (ut = 1, dt.exports = (e = X(), function() {
			var t = e, n = t.lib.WordArray, r = t.enc;
			function i(e) {
				return e << 8 & 4278255360 | e >>> 8 & 16711935;
			}
			r.Utf16 = r.Utf16BE = {
				stringify: function(e) {
					for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i += 2) {
						var a = t[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
						r.push(String.fromCharCode(a));
					}
					return r.join("");
				},
				parse: function(e) {
					for (var t = e.length, r = [], i = 0; i < t; i++) r[i >>> 1] |= e.charCodeAt(i) << 16 - i % 2 * 16;
					return n.create(r, 2 * t);
				}
			}, r.Utf16LE = {
				stringify: function(e) {
					for (var t = e.words, n = e.sigBytes, r = [], a = 0; a < n; a += 2) {
						var o = i(t[a >>> 2] >>> 16 - a % 4 * 8 & 65535);
						r.push(String.fromCharCode(o));
					}
					return r.join("");
				},
				parse: function(e) {
					for (var t = e.length, r = [], a = 0; a < t; a++) r[a >>> 1] |= i(e.charCodeAt(a) << 16 - a % 2 * 16);
					return n.create(r, 2 * t);
				}
			};
		}(), e.enc.Utf16)), dt.exports;
		var e;
	}(), mt(), function() {
		return ht || (ht = 1, gt.exports = (e = X(), function() {
			var t = e, n = t.lib.WordArray;
			function r(e, t, r) {
				for (var i = [], a = 0, o = 0; o < t; o++) if (o % 4) {
					var s = r[e.charCodeAt(o - 1)] << o % 4 * 2 | r[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
					i[a >>> 2] |= s << 24 - a % 4 * 8, a++;
				}
				return n.create(i, a);
			}
			t.enc.Base64url = {
				stringify: function(e, t) {
					t === void 0 && (t = !0);
					var n = e.words, r = e.sigBytes, i = t ? this._safe_map : this._map;
					e.clamp();
					for (var a = [], o = 0; o < r; o += 3) for (var s = (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (n[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | n[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, c = 0; c < 4 && o + .75 * c < r; c++) a.push(i.charAt(s >>> 6 * (3 - c) & 63));
					var l = i.charAt(64);
					if (l) for (; a.length % 4;) a.push(l);
					return a.join("");
				},
				parse: function(e, t) {
					t === void 0 && (t = !0);
					var n = e.length, i = t ? this._safe_map : this._map, a = this._reverseMap;
					if (!a) {
						a = this._reverseMap = [];
						for (var o = 0; o < i.length; o++) a[i.charCodeAt(o)] = o;
					}
					var s = i.charAt(64);
					if (s) {
						var c = e.indexOf(s);
						c !== -1 && (n = c);
					}
					return r(e, n, a);
				},
				_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				_safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
			};
		}(), e.enc.Base64url)), gt.exports;
		var e;
	}(), yt(), St(), Et(), wt || (wt = 1, On = X(), Et(), function() {
		var e = On, t = e.lib.WordArray, n = e.algo, r = n.SHA256, i = n.SHA224 = r.extend({
			_doReset: function() {
				this._hash = new t.init([
					3238371032,
					914150663,
					812702999,
					4144912697,
					4290775857,
					1750603025,
					1694076839,
					3204075428
				]);
			},
			_doFinalize: function() {
				var e = r._doFinalize.call(this);
				return e.sigBytes -= 4, e;
			}
		});
		e.SHA224 = r._createHelper(i), e.HmacSHA224 = r._createHmacHelper(i);
	}(), On.SHA224), kt(), function() {
		return At || (At = 1, Mt.exports = (e = X(), st(), kt(), function() {
			var t = e, n = t.x64, r = n.Word, i = n.WordArray, a = t.algo, o = a.SHA512, s = a.SHA384 = o.extend({
				_doReset: function() {
					this._hash = new i.init([
						new r.init(3418070365, 3238371032),
						new r.init(1654270250, 914150663),
						new r.init(2438529370, 812702999),
						new r.init(355462360, 4144912697),
						new r.init(1731405415, 4290775857),
						new r.init(2394180231, 1750603025),
						new r.init(3675008525, 1694076839),
						new r.init(1203062813, 3204075428)
					]);
				},
				_doFinalize: function() {
					var e = o._doFinalize.call(this);
					return e.sigBytes -= 16, e;
				}
			});
			t.SHA384 = o._createHelper(s), t.HmacSHA384 = o._createHmacHelper(s);
		}(), e.SHA384)), Mt.exports;
		var e;
	}(), function() {
		return jt || (jt = 1, Nt.exports = (e = X(), st(), function(t) {
			var n = e, r = n.lib, i = r.WordArray, a = r.Hasher, o = n.x64.Word, s = n.algo, c = [], l = [], u = [];
			(function() {
				for (var e = 1, t = 0, n = 0; n < 24; n++) {
					c[e + 5 * t] = (n + 1) * (n + 2) / 2 % 64;
					var r = (2 * e + 3 * t) % 5;
					e = t % 5, t = r;
				}
				for (e = 0; e < 5; e++) for (t = 0; t < 5; t++) l[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
				for (var i = 1, a = 0; a < 24; a++) {
					for (var s = 0, d = 0, f = 0; f < 7; f++) {
						if (1 & i) {
							var p = (1 << f) - 1;
							p < 32 ? d ^= 1 << p : s ^= 1 << p - 32;
						}
						128 & i ? i = i << 1 ^ 113 : i <<= 1;
					}
					u[a] = o.create(s, d);
				}
			})();
			var d = [];
			(function() {
				for (var e = 0; e < 25; e++) d[e] = o.create();
			})();
			var f = s.SHA3 = a.extend({
				cfg: a.cfg.extend({ outputLength: 512 }),
				_doReset: function() {
					for (var e = this._state = [], t = 0; t < 25; t++) e[t] = new o.init();
					this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
				},
				_doProcessBlock: function(e, t) {
					for (var n = this._state, r = this.blockSize / 2, i = 0; i < r; i++) {
						var a = e[t + 2 * i], o = e[t + 2 * i + 1];
						a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), (O = n[i]).high ^= o, O.low ^= a;
					}
					for (var s = 0; s < 24; s++) {
						for (var f = 0; f < 5; f++) {
							for (var p = 0, m = 0, h = 0; h < 5; h++) p ^= (O = n[f + 5 * h]).high, m ^= O.low;
							var g = d[f];
							g.high = p, g.low = m;
						}
						for (f = 0; f < 5; f++) {
							var _ = d[(f + 4) % 5], v = d[(f + 1) % 5], y = v.high, b = v.low;
							for (p = _.high ^ (y << 1 | b >>> 31), m = _.low ^ (b << 1 | y >>> 31), h = 0; h < 5; h++) (O = n[f + 5 * h]).high ^= p, O.low ^= m;
						}
						for (var x = 1; x < 25; x++) {
							var S = (O = n[x]).high, C = O.low, w = c[x];
							w < 32 ? (p = S << w | C >>> 32 - w, m = C << w | S >>> 32 - w) : (p = C << w - 32 | S >>> 64 - w, m = S << w - 32 | C >>> 64 - w);
							var T = d[l[x]];
							T.high = p, T.low = m;
						}
						var E = d[0], D = n[0];
						for (E.high = D.high, E.low = D.low, f = 0; f < 5; f++) for (h = 0; h < 5; h++) {
							var O = n[x = f + 5 * h], k = d[x], A = d[(f + 1) % 5 + 5 * h], j = d[(f + 2) % 5 + 5 * h];
							O.high = k.high ^ ~A.high & j.high, O.low = k.low ^ ~A.low & j.low;
						}
						O = n[0];
						var M = u[s];
						O.high ^= M.high, O.low ^= M.low;
					}
				},
				_doFinalize: function() {
					var e = this._data, n = e.words;
					this._nDataBytes;
					var r = 8 * e.sigBytes, a = 32 * this.blockSize;
					n[r >>> 5] |= 1 << 24 - r % 32, n[(t.ceil((r + 1) / a) * a >>> 5) - 1] |= 128, e.sigBytes = 4 * n.length, this._process();
					for (var o = this._state, s = this.cfg.outputLength / 8, c = s / 8, l = [], u = 0; u < c; u++) {
						var d = o[u], f = d.high, p = d.low;
						f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), p = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8), l.push(p), l.push(f);
					}
					return new i.init(l, s);
				},
				clone: function() {
					for (var e = a.clone.call(this), t = e._state = this._state.slice(0), n = 0; n < 25; n++) t[n] = t[n].clone();
					return e;
				}
			});
			n.SHA3 = a._createHelper(f), n.HmacSHA3 = a._createHmacHelper(f);
		}(Math), e.SHA3)), Nt.exports;
		var e;
	}(), function() {
		return Pt || (Pt = 1, It.exports = (e = X(), function() {
			var t = e, n = t.lib, r = n.WordArray, i = n.Hasher, a = t.algo, o = r.create([
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				7,
				4,
				13,
				1,
				10,
				6,
				15,
				3,
				12,
				0,
				9,
				5,
				2,
				14,
				11,
				8,
				3,
				10,
				14,
				4,
				9,
				15,
				8,
				1,
				2,
				7,
				0,
				6,
				13,
				11,
				5,
				12,
				1,
				9,
				11,
				10,
				0,
				8,
				12,
				4,
				13,
				3,
				7,
				15,
				14,
				5,
				6,
				2,
				4,
				0,
				5,
				9,
				7,
				12,
				2,
				10,
				14,
				1,
				3,
				8,
				11,
				6,
				15,
				13
			]), s = r.create([
				5,
				14,
				7,
				0,
				9,
				2,
				11,
				4,
				13,
				6,
				15,
				8,
				1,
				10,
				3,
				12,
				6,
				11,
				3,
				7,
				0,
				13,
				5,
				10,
				14,
				15,
				8,
				12,
				4,
				9,
				1,
				2,
				15,
				5,
				1,
				3,
				7,
				14,
				6,
				9,
				11,
				8,
				12,
				2,
				10,
				0,
				4,
				13,
				8,
				6,
				4,
				1,
				3,
				11,
				15,
				0,
				5,
				12,
				2,
				13,
				9,
				7,
				10,
				14,
				12,
				15,
				10,
				4,
				1,
				5,
				8,
				7,
				6,
				2,
				13,
				14,
				0,
				3,
				9,
				11
			]), c = r.create([
				11,
				14,
				15,
				12,
				5,
				8,
				7,
				9,
				11,
				13,
				14,
				15,
				6,
				7,
				9,
				8,
				7,
				6,
				8,
				13,
				11,
				9,
				7,
				15,
				7,
				12,
				15,
				9,
				11,
				7,
				13,
				12,
				11,
				13,
				6,
				7,
				14,
				9,
				13,
				15,
				14,
				8,
				13,
				6,
				5,
				12,
				7,
				5,
				11,
				12,
				14,
				15,
				14,
				15,
				9,
				8,
				9,
				14,
				5,
				6,
				8,
				6,
				5,
				12,
				9,
				15,
				5,
				11,
				6,
				8,
				13,
				12,
				5,
				12,
				13,
				14,
				11,
				8,
				5,
				6
			]), l = r.create([
				8,
				9,
				9,
				11,
				13,
				15,
				15,
				5,
				7,
				7,
				8,
				11,
				14,
				14,
				12,
				6,
				9,
				13,
				15,
				7,
				12,
				8,
				9,
				11,
				7,
				7,
				12,
				7,
				6,
				15,
				13,
				11,
				9,
				7,
				15,
				11,
				8,
				6,
				6,
				14,
				12,
				13,
				5,
				14,
				13,
				13,
				7,
				5,
				15,
				5,
				8,
				11,
				14,
				14,
				6,
				14,
				6,
				9,
				12,
				9,
				12,
				5,
				15,
				8,
				8,
				5,
				12,
				9,
				12,
				5,
				14,
				6,
				8,
				13,
				6,
				5,
				15,
				13,
				11,
				11
			]), u = r.create([
				0,
				1518500249,
				1859775393,
				2400959708,
				2840853838
			]), d = r.create([
				1352829926,
				1548603684,
				1836072691,
				2053994217,
				0
			]), f = a.RIPEMD160 = i.extend({
				_doReset: function() {
					this._hash = r.create([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var n = 0; n < 16; n++) {
						var r = t + n, i = e[r];
						e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
					}
					var a, f, y, b, x, S, C, w, T, E, D, O = this._hash.words, k = u.words, A = d.words, j = o.words, M = s.words, N = c.words, P = l.words;
					for (S = a = O[0], C = f = O[1], w = y = O[2], T = b = O[3], E = x = O[4], n = 0; n < 80; n += 1) D = a + e[t + j[n]] | 0, D += n < 16 ? p(f, y, b) + k[0] : n < 32 ? m(f, y, b) + k[1] : n < 48 ? h(f, y, b) + k[2] : n < 64 ? g(f, y, b) + k[3] : _(f, y, b) + k[4], D = (D = v(D |= 0, N[n])) + x | 0, a = x, x = b, b = v(y, 10), y = f, f = D, D = S + e[t + M[n]] | 0, D += n < 16 ? _(C, w, T) + A[0] : n < 32 ? g(C, w, T) + A[1] : n < 48 ? h(C, w, T) + A[2] : n < 64 ? m(C, w, T) + A[3] : p(C, w, T) + A[4], D = (D = v(D |= 0, P[n])) + E | 0, S = E, E = T, T = v(w, 10), w = C, C = D;
					D = O[1] + y + T | 0, O[1] = O[2] + b + E | 0, O[2] = O[3] + x + S | 0, O[3] = O[4] + a + C | 0, O[4] = O[0] + f + w | 0, O[0] = D;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
					t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();
					for (var i = this._hash, a = i.words, o = 0; o < 5; o++) {
						var s = a[o];
						a[o] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
					}
					return i;
				},
				clone: function() {
					var e = i.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			function p(e, t, n) {
				return e ^ t ^ n;
			}
			function m(e, t, n) {
				return e & t | ~e & n;
			}
			function h(e, t, n) {
				return (e | ~t) ^ n;
			}
			function g(e, t, n) {
				return e & n | t & ~n;
			}
			function _(e, t, n) {
				return e ^ (t | ~n);
			}
			function v(e, t) {
				return e << t | e >>> 32 - t;
			}
			t.RIPEMD160 = i._createHelper(f), t.HmacRIPEMD160 = i._createHmacHelper(f);
		}(), e.RIPEMD160)), It.exports;
		var e;
	}(), Rt(), function() {
		return zt || (zt = 1, Vt.exports = (e = X(), Et(), Rt(), function() {
			var t = e, n = t.lib, r = n.Base, i = n.WordArray, a = t.algo, o = a.SHA256, s = a.HMAC, c = a.PBKDF2 = r.extend({
				cfg: r.extend({
					keySize: 4,
					hasher: o,
					iterations: 25e4
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e);
				},
				compute: function(e, t) {
					for (var n = this.cfg, r = s.create(n.hasher, e), a = i.create(), o = i.create([1]), c = a.words, l = o.words, u = n.keySize, d = n.iterations; c.length < u;) {
						var f = r.update(t).finalize(o);
						r.reset();
						for (var p = f.words, m = p.length, h = f, g = 1; g < d; g++) {
							h = r.finalize(h), r.reset();
							for (var _ = h.words, v = 0; v < m; v++) p[v] ^= _[v];
						}
						a.concat(f), l[0]++;
					}
					return a.sigBytes = 4 * u, a;
				}
			});
			t.PBKDF2 = function(e, t, n) {
				return c.create(n).compute(e, t);
			};
		}(), e.PBKDF2)), Vt.exports;
		var e;
	}(), Ut(), Kt(), function() {
		return qt || (qt = 1, Jt.exports = (e = X(), Kt(), e.mode.CFB = function() {
			var t = e.lib.BlockCipherMode.extend();
			function n(e, t, n, r) {
				var i, a = this._iv;
				a ? (i = a.slice(0), this._iv = void 0) : i = this._prevBlock, r.encryptBlock(i, 0);
				for (var o = 0; o < n; o++) e[t + o] ^= i[o];
			}
			return t.Encryptor = t.extend({ processBlock: function(e, t) {
				var r = this._cipher, i = r.blockSize;
				n.call(this, e, t, i, r), this._prevBlock = e.slice(t, t + i);
			} }), t.Decryptor = t.extend({ processBlock: function(e, t) {
				var r = this._cipher, i = r.blockSize, a = e.slice(t, t + i);
				n.call(this, e, t, i, r), this._prevBlock = a;
			} }), t;
		}(), e.mode.CFB)), Jt.exports;
		var e;
	}(), function() {
		return Yt || (Yt = 1, Xt.exports = (n = X(), Kt(), n.mode.CTR = (t = (e = n.lib.BlockCipherMode.extend()).Encryptor = e.extend({ processBlock: function(e, t) {
			var n = this._cipher, r = n.blockSize, i = this._iv, a = this._counter;
			i && (a = this._counter = i.slice(0), this._iv = void 0);
			var o = a.slice(0);
			n.encryptBlock(o, 0), a[r - 1] = a[r - 1] + 1 | 0;
			for (var s = 0; s < r; s++) e[t + s] ^= o[s];
		} }), e.Decryptor = t, e), n.mode.CTR)), Xt.exports;
		var e, t, n;
	}(), function() {
		return Zt || (Zt = 1, Qt.exports = (e = X(), Kt(), e.mode.CTRGladman = function() {
			var t = e.lib.BlockCipherMode.extend();
			function n(e) {
				if (255 & ~(e >> 24)) e += 1 << 24;
				else {
					var t = e >> 16 & 255, n = e >> 8 & 255, r = 255 & e;
					t === 255 ? (t = 0, n === 255 ? (n = 0, r === 255 ? r = 0 : ++r) : ++n) : ++t, e = 0, e += t << 16, e += n << 8, e += r;
				}
				return e;
			}
			function r(e) {
				return (e[0] = n(e[0])) === 0 && (e[1] = n(e[1])), e;
			}
			return t.Decryptor = t.Encryptor = t.extend({ processBlock: function(e, t) {
				var n = this._cipher, i = n.blockSize, a = this._iv, o = this._counter;
				a && (o = this._counter = a.slice(0), this._iv = void 0), r(o);
				var s = o.slice(0);
				n.encryptBlock(s, 0);
				for (var c = 0; c < i; c++) e[t + c] ^= s[c];
			} }), t;
		}(), e.mode.CTRGladman)), Qt.exports;
		var e;
	}(), function() {
		return $t || ($t = 1, en.exports = (n = X(), Kt(), n.mode.OFB = (t = (e = n.lib.BlockCipherMode.extend()).Encryptor = e.extend({ processBlock: function(e, t) {
			var n = this._cipher, r = n.blockSize, i = this._iv, a = this._keystream;
			i && (a = this._keystream = i.slice(0), this._iv = void 0), n.encryptBlock(a, 0);
			for (var o = 0; o < r; o++) e[t + o] ^= a[o];
		} }), e.Decryptor = t, e), n.mode.OFB)), en.exports;
		var e, t, n;
	}(), function() {
		return tn ? dn.exports : (tn = 1, dn.exports = (t = X(), Kt(), t.mode.ECB = ((e = t.lib.BlockCipherMode.extend()).Encryptor = e.extend({ processBlock: function(e, t) {
			this._cipher.encryptBlock(e, t);
		} }), e.Decryptor = e.extend({ processBlock: function(e, t) {
			this._cipher.decryptBlock(e, t);
		} }), e), t.mode.ECB));
		var e, t;
	}(), function() {
		return nn ? fn.exports : (nn = 1, fn.exports = (e = X(), Kt(), e.pad.AnsiX923 = {
			pad: function(e, t) {
				var n = e.sigBytes, r = 4 * t, i = r - n % r, a = n + i - 1;
				e.clamp(), e.words[a >>> 2] |= i << 24 - a % 4 * 8, e.sigBytes += i;
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Ansix923));
		var e;
	}(), function() {
		return rn ? pn.exports : (rn = 1, pn.exports = (e = X(), Kt(), e.pad.Iso10126 = {
			pad: function(t, n) {
				var r = 4 * n, i = r - t.sigBytes % r;
				t.concat(e.lib.WordArray.random(i - 1)).concat(e.lib.WordArray.create([i << 24], 1));
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Iso10126));
		var e;
	}(), function() {
		return an ? mn.exports : (an = 1, mn.exports = (e = X(), Kt(), e.pad.Iso97971 = {
			pad: function(t, n) {
				t.concat(e.lib.WordArray.create([2147483648], 1)), e.pad.ZeroPadding.pad(t, n);
			},
			unpad: function(t) {
				e.pad.ZeroPadding.unpad(t), t.sigBytes--;
			}
		}, e.pad.Iso97971));
		var e;
	}(), function() {
		return on || (on = 1, hn.exports = (e = X(), Kt(), e.pad.ZeroPadding = {
			pad: function(e, t) {
				var n = 4 * t;
				e.clamp(), e.sigBytes += n - (e.sigBytes % n || n);
			},
			unpad: function(e) {
				var t = e.words, n = e.sigBytes - 1;
				for (n = e.sigBytes - 1; n >= 0; n--) if (t[n >>> 2] >>> 24 - n % 4 * 8 & 255) {
					e.sigBytes = n + 1;
					break;
				}
			}
		}, e.pad.ZeroPadding)), hn.exports;
		var e;
	}(), function() {
		return sn ? gn.exports : (sn = 1, gn.exports = (e = X(), Kt(), e.pad.NoPadding = {
			pad: function() {},
			unpad: function() {}
		}, e.pad.NoPadding));
		var e;
	}(), function() {
		return cn || (cn = 1, _n.exports = (e = X(), Kt(), function() {
			var t = e, n = t.lib.CipherParams, r = t.enc.Hex;
			t.format.Hex = {
				stringify: function(e) {
					return e.ciphertext.toString(r);
				},
				parse: function(e) {
					var t = r.parse(e);
					return n.create({ ciphertext: t });
				}
			};
		}(), e.format.Hex)), _n.exports;
		var e;
	}(), function() {
		return ln || (ln = 1, vn.exports = (e = X(), mt(), yt(), Ut(), Kt(), function() {
			var t = e, n = t.lib.BlockCipher, r = t.algo, i = [], a = [], o = [], s = [], c = [], l = [], u = [], d = [], f = [], p = [];
			(function() {
				for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
				var n = 0, r = 0;
				for (t = 0; t < 256; t++) {
					var m = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
					m = m >>> 8 ^ 255 & m ^ 99, i[n] = m, a[m] = n;
					var h = e[n], g = e[h], _ = e[g], v = 257 * e[m] ^ 16843008 * m;
					o[n] = v << 24 | v >>> 8, s[n] = v << 16 | v >>> 16, c[n] = v << 8 | v >>> 24, l[n] = v, v = 16843009 * _ ^ 65537 * g ^ 257 * h ^ 16843008 * n, u[m] = v << 24 | v >>> 8, d[m] = v << 16 | v >>> 16, f[m] = v << 8 | v >>> 24, p[m] = v, n ? (n = h ^ e[e[e[_ ^ h]]], r ^= e[e[r]]) : n = r = 1;
				}
			})();
			var m = [
				0,
				1,
				2,
				4,
				8,
				16,
				32,
				64,
				128,
				27,
				54
			], h = r.AES = n.extend({
				_doReset: function() {
					if (!this._nRounds || this._keyPriorReset !== this._key) {
						for (var e = this._keyPriorReset = this._key, t = e.words, n = e.sigBytes / 4, r = 4 * ((this._nRounds = n + 6) + 1), a = this._keySchedule = [], o = 0; o < r; o++) o < n ? a[o] = t[o] : (l = a[o - 1], o % n ? n > 6 && o % n == 4 && (l = i[l >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l]) : (l = i[(l = l << 8 | l >>> 24) >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l], l ^= m[o / n | 0] << 24), a[o] = a[o - n] ^ l);
						for (var s = this._invKeySchedule = [], c = 0; c < r; c++) {
							if (o = r - c, c % 4) var l = a[o];
							else l = a[o - 4];
							s[c] = c < 4 || o <= 4 ? l : u[i[l >>> 24]] ^ d[i[l >>> 16 & 255]] ^ f[i[l >>> 8 & 255]] ^ p[i[255 & l]];
						}
					}
				},
				encryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._keySchedule, o, s, c, l, i);
				},
				decryptBlock: function(e, t) {
					var n = e[t + 1];
					e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, u, d, f, p, a), n = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = n;
				},
				_doCryptBlock: function(e, t, n, r, i, a, o, s) {
					for (var c = this._nRounds, l = e[t] ^ n[0], u = e[t + 1] ^ n[1], d = e[t + 2] ^ n[2], f = e[t + 3] ^ n[3], p = 4, m = 1; m < c; m++) {
						var h = r[l >>> 24] ^ i[u >>> 16 & 255] ^ a[d >>> 8 & 255] ^ o[255 & f] ^ n[p++], g = r[u >>> 24] ^ i[d >>> 16 & 255] ^ a[f >>> 8 & 255] ^ o[255 & l] ^ n[p++], _ = r[d >>> 24] ^ i[f >>> 16 & 255] ^ a[l >>> 8 & 255] ^ o[255 & u] ^ n[p++], v = r[f >>> 24] ^ i[l >>> 16 & 255] ^ a[u >>> 8 & 255] ^ o[255 & d] ^ n[p++];
						l = h, u = g, d = _, f = v;
					}
					h = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & f]) ^ n[p++], g = (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[p++], _ = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & u]) ^ n[p++], v = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & d]) ^ n[p++], e[t] = h, e[t + 1] = g, e[t + 2] = _, e[t + 3] = v;
				},
				keySize: 8
			});
			t.AES = n._createHelper(h);
		}(), e.AES)), vn.exports;
		var e;
	}(), function() {
		return un || (un = 1, yn.exports = (e = X(), mt(), yt(), Ut(), Kt(), function() {
			var t = e, n = t.lib, r = n.WordArray, i = n.BlockCipher, a = t.algo, o = [
				57,
				49,
				41,
				33,
				25,
				17,
				9,
				1,
				58,
				50,
				42,
				34,
				26,
				18,
				10,
				2,
				59,
				51,
				43,
				35,
				27,
				19,
				11,
				3,
				60,
				52,
				44,
				36,
				63,
				55,
				47,
				39,
				31,
				23,
				15,
				7,
				62,
				54,
				46,
				38,
				30,
				22,
				14,
				6,
				61,
				53,
				45,
				37,
				29,
				21,
				13,
				5,
				28,
				20,
				12,
				4
			], s = [
				14,
				17,
				11,
				24,
				1,
				5,
				3,
				28,
				15,
				6,
				21,
				10,
				23,
				19,
				12,
				4,
				26,
				8,
				16,
				7,
				27,
				20,
				13,
				2,
				41,
				52,
				31,
				37,
				47,
				55,
				30,
				40,
				51,
				45,
				33,
				48,
				44,
				49,
				39,
				56,
				34,
				53,
				46,
				42,
				50,
				36,
				29,
				32
			], c = [
				1,
				2,
				4,
				6,
				8,
				10,
				12,
				14,
				15,
				17,
				19,
				21,
				23,
				25,
				27,
				28
			], l = [
				{
					0: 8421888,
					268435456: 32768,
					536870912: 8421378,
					805306368: 2,
					1073741824: 512,
					1342177280: 8421890,
					1610612736: 8389122,
					1879048192: 8388608,
					2147483648: 514,
					2415919104: 8389120,
					2684354560: 33280,
					2952790016: 8421376,
					3221225472: 32770,
					3489660928: 8388610,
					3758096384: 0,
					4026531840: 33282,
					134217728: 0,
					402653184: 8421890,
					671088640: 33282,
					939524096: 32768,
					1207959552: 8421888,
					1476395008: 512,
					1744830464: 8421378,
					2013265920: 2,
					2281701376: 8389120,
					2550136832: 33280,
					2818572288: 8421376,
					3087007744: 8389122,
					3355443200: 8388610,
					3623878656: 32770,
					3892314112: 514,
					4160749568: 8388608,
					1: 32768,
					268435457: 2,
					536870913: 8421888,
					805306369: 8388608,
					1073741825: 8421378,
					1342177281: 33280,
					1610612737: 512,
					1879048193: 8389122,
					2147483649: 8421890,
					2415919105: 8421376,
					2684354561: 8388610,
					2952790017: 33282,
					3221225473: 514,
					3489660929: 8389120,
					3758096385: 32770,
					4026531841: 0,
					134217729: 8421890,
					402653185: 8421376,
					671088641: 8388608,
					939524097: 512,
					1207959553: 32768,
					1476395009: 8388610,
					1744830465: 2,
					2013265921: 33282,
					2281701377: 32770,
					2550136833: 8389122,
					2818572289: 514,
					3087007745: 8421888,
					3355443201: 8389120,
					3623878657: 0,
					3892314113: 33280,
					4160749569: 8421378
				},
				{
					0: 1074282512,
					16777216: 16384,
					33554432: 524288,
					50331648: 1074266128,
					67108864: 1073741840,
					83886080: 1074282496,
					100663296: 1073758208,
					117440512: 16,
					134217728: 540672,
					150994944: 1073758224,
					167772160: 1073741824,
					184549376: 540688,
					201326592: 524304,
					218103808: 0,
					234881024: 16400,
					251658240: 1074266112,
					8388608: 1073758208,
					25165824: 540688,
					41943040: 16,
					58720256: 1073758224,
					75497472: 1074282512,
					92274688: 1073741824,
					109051904: 524288,
					125829120: 1074266128,
					142606336: 524304,
					159383552: 0,
					176160768: 16384,
					192937984: 1074266112,
					209715200: 1073741840,
					226492416: 540672,
					243269632: 1074282496,
					260046848: 16400,
					268435456: 0,
					285212672: 1074266128,
					301989888: 1073758224,
					318767104: 1074282496,
					335544320: 1074266112,
					352321536: 16,
					369098752: 540688,
					385875968: 16384,
					402653184: 16400,
					419430400: 524288,
					436207616: 524304,
					452984832: 1073741840,
					469762048: 540672,
					486539264: 1073758208,
					503316480: 1073741824,
					520093696: 1074282512,
					276824064: 540688,
					293601280: 524288,
					310378496: 1074266112,
					327155712: 16384,
					343932928: 1073758208,
					360710144: 1074282512,
					377487360: 16,
					394264576: 1073741824,
					411041792: 1074282496,
					427819008: 1073741840,
					444596224: 1073758224,
					461373440: 524304,
					478150656: 0,
					494927872: 16400,
					511705088: 1074266128,
					528482304: 540672
				},
				{
					0: 260,
					1048576: 0,
					2097152: 67109120,
					3145728: 65796,
					4194304: 65540,
					5242880: 67108868,
					6291456: 67174660,
					7340032: 67174400,
					8388608: 67108864,
					9437184: 67174656,
					10485760: 65792,
					11534336: 67174404,
					12582912: 67109124,
					13631488: 65536,
					14680064: 4,
					15728640: 256,
					524288: 67174656,
					1572864: 67174404,
					2621440: 0,
					3670016: 67109120,
					4718592: 67108868,
					5767168: 65536,
					6815744: 65540,
					7864320: 260,
					8912896: 4,
					9961472: 256,
					11010048: 67174400,
					12058624: 65796,
					13107200: 65792,
					14155776: 67109124,
					15204352: 67174660,
					16252928: 67108864,
					16777216: 67174656,
					17825792: 65540,
					18874368: 65536,
					19922944: 67109120,
					20971520: 256,
					22020096: 67174660,
					23068672: 67108868,
					24117248: 0,
					25165824: 67109124,
					26214400: 67108864,
					27262976: 4,
					28311552: 65792,
					29360128: 67174400,
					30408704: 260,
					31457280: 65796,
					32505856: 67174404,
					17301504: 67108864,
					18350080: 260,
					19398656: 67174656,
					20447232: 0,
					21495808: 65540,
					22544384: 67109120,
					23592960: 256,
					24641536: 67174404,
					25690112: 65536,
					26738688: 67174660,
					27787264: 65796,
					28835840: 67108868,
					29884416: 67109124,
					30932992: 67174400,
					31981568: 4,
					33030144: 65792
				},
				{
					0: 2151682048,
					65536: 2147487808,
					131072: 4198464,
					196608: 2151677952,
					262144: 0,
					327680: 4198400,
					393216: 2147483712,
					458752: 4194368,
					524288: 2147483648,
					589824: 4194304,
					655360: 64,
					720896: 2147487744,
					786432: 2151678016,
					851968: 4160,
					917504: 4096,
					983040: 2151682112,
					32768: 2147487808,
					98304: 64,
					163840: 2151678016,
					229376: 2147487744,
					294912: 4198400,
					360448: 2151682112,
					425984: 0,
					491520: 2151677952,
					557056: 4096,
					622592: 2151682048,
					688128: 4194304,
					753664: 4160,
					819200: 2147483648,
					884736: 4194368,
					950272: 4198464,
					1015808: 2147483712,
					1048576: 4194368,
					1114112: 4198400,
					1179648: 2147483712,
					1245184: 0,
					1310720: 4160,
					1376256: 2151678016,
					1441792: 2151682048,
					1507328: 2147487808,
					1572864: 2151682112,
					1638400: 2147483648,
					1703936: 2151677952,
					1769472: 4198464,
					1835008: 2147487744,
					1900544: 4194304,
					1966080: 64,
					2031616: 4096,
					1081344: 2151677952,
					1146880: 2151682112,
					1212416: 0,
					1277952: 4198400,
					1343488: 4194368,
					1409024: 2147483648,
					1474560: 2147487808,
					1540096: 64,
					1605632: 2147483712,
					1671168: 4096,
					1736704: 2147487744,
					1802240: 2151678016,
					1867776: 4160,
					1933312: 2151682048,
					1998848: 4194304,
					2064384: 4198464
				},
				{
					0: 128,
					4096: 17039360,
					8192: 262144,
					12288: 536870912,
					16384: 537133184,
					20480: 16777344,
					24576: 553648256,
					28672: 262272,
					32768: 16777216,
					36864: 537133056,
					40960: 536871040,
					45056: 553910400,
					49152: 553910272,
					53248: 0,
					57344: 17039488,
					61440: 553648128,
					2048: 17039488,
					6144: 553648256,
					10240: 128,
					14336: 17039360,
					18432: 262144,
					22528: 537133184,
					26624: 553910272,
					30720: 536870912,
					34816: 537133056,
					38912: 0,
					43008: 553910400,
					47104: 16777344,
					51200: 536871040,
					55296: 553648128,
					59392: 16777216,
					63488: 262272,
					65536: 262144,
					69632: 128,
					73728: 536870912,
					77824: 553648256,
					81920: 16777344,
					86016: 553910272,
					90112: 537133184,
					94208: 16777216,
					98304: 553910400,
					102400: 553648128,
					106496: 17039360,
					110592: 537133056,
					114688: 262272,
					118784: 536871040,
					122880: 0,
					126976: 17039488,
					67584: 553648256,
					71680: 16777216,
					75776: 17039360,
					79872: 537133184,
					83968: 536870912,
					88064: 17039488,
					92160: 128,
					96256: 553910272,
					100352: 262272,
					104448: 553910400,
					108544: 0,
					112640: 553648128,
					116736: 16777344,
					120832: 262144,
					124928: 537133056,
					129024: 536871040
				},
				{
					0: 268435464,
					256: 8192,
					512: 270532608,
					768: 270540808,
					1024: 268443648,
					1280: 2097152,
					1536: 2097160,
					1792: 268435456,
					2048: 0,
					2304: 268443656,
					2560: 2105344,
					2816: 8,
					3072: 270532616,
					3328: 2105352,
					3584: 8200,
					3840: 270540800,
					128: 270532608,
					384: 270540808,
					640: 8,
					896: 2097152,
					1152: 2105352,
					1408: 268435464,
					1664: 268443648,
					1920: 8200,
					2176: 2097160,
					2432: 8192,
					2688: 268443656,
					2944: 270532616,
					3200: 0,
					3456: 270540800,
					3712: 2105344,
					3968: 268435456,
					4096: 268443648,
					4352: 270532616,
					4608: 270540808,
					4864: 8200,
					5120: 2097152,
					5376: 268435456,
					5632: 268435464,
					5888: 2105344,
					6144: 2105352,
					6400: 0,
					6656: 8,
					6912: 270532608,
					7168: 8192,
					7424: 268443656,
					7680: 270540800,
					7936: 2097160,
					4224: 8,
					4480: 2105344,
					4736: 2097152,
					4992: 268435464,
					5248: 268443648,
					5504: 8200,
					5760: 270540808,
					6016: 270532608,
					6272: 270540800,
					6528: 270532616,
					6784: 8192,
					7040: 2105352,
					7296: 2097160,
					7552: 0,
					7808: 268435456,
					8064: 268443656
				},
				{
					0: 1048576,
					16: 33555457,
					32: 1024,
					48: 1049601,
					64: 34604033,
					80: 0,
					96: 1,
					112: 34603009,
					128: 33555456,
					144: 1048577,
					160: 33554433,
					176: 34604032,
					192: 34603008,
					208: 1025,
					224: 1049600,
					240: 33554432,
					8: 34603009,
					24: 0,
					40: 33555457,
					56: 34604032,
					72: 1048576,
					88: 33554433,
					104: 33554432,
					120: 1025,
					136: 1049601,
					152: 33555456,
					168: 34603008,
					184: 1048577,
					200: 1024,
					216: 34604033,
					232: 1,
					248: 1049600,
					256: 33554432,
					272: 1048576,
					288: 33555457,
					304: 34603009,
					320: 1048577,
					336: 33555456,
					352: 34604032,
					368: 1049601,
					384: 1025,
					400: 34604033,
					416: 1049600,
					432: 1,
					448: 0,
					464: 34603008,
					480: 33554433,
					496: 1024,
					264: 1049600,
					280: 33555457,
					296: 34603009,
					312: 1,
					328: 33554432,
					344: 1048576,
					360: 1025,
					376: 34604032,
					392: 33554433,
					408: 34603008,
					424: 0,
					440: 34604033,
					456: 1049601,
					472: 1024,
					488: 33555456,
					504: 1048577
				},
				{
					0: 134219808,
					1: 131072,
					2: 134217728,
					3: 32,
					4: 131104,
					5: 134350880,
					6: 134350848,
					7: 2048,
					8: 134348800,
					9: 134219776,
					10: 133120,
					11: 134348832,
					12: 2080,
					13: 0,
					14: 134217760,
					15: 133152,
					2147483648: 2048,
					2147483649: 134350880,
					2147483650: 134219808,
					2147483651: 134217728,
					2147483652: 134348800,
					2147483653: 133120,
					2147483654: 133152,
					2147483655: 32,
					2147483656: 134217760,
					2147483657: 2080,
					2147483658: 131104,
					2147483659: 134350848,
					2147483660: 0,
					2147483661: 134348832,
					2147483662: 134219776,
					2147483663: 131072,
					16: 133152,
					17: 134350848,
					18: 32,
					19: 2048,
					20: 134219776,
					21: 134217760,
					22: 134348832,
					23: 131072,
					24: 0,
					25: 131104,
					26: 134348800,
					27: 134219808,
					28: 134350880,
					29: 133120,
					30: 2080,
					31: 134217728,
					2147483664: 131072,
					2147483665: 2048,
					2147483666: 134348832,
					2147483667: 133152,
					2147483668: 32,
					2147483669: 134348800,
					2147483670: 134217728,
					2147483671: 134219808,
					2147483672: 134350880,
					2147483673: 134217760,
					2147483674: 134219776,
					2147483675: 0,
					2147483676: 133120,
					2147483677: 2080,
					2147483678: 131104,
					2147483679: 134350848
				}
			], u = [
				4160749569,
				528482304,
				33030144,
				2064384,
				129024,
				8064,
				504,
				2147483679
			], d = a.DES = i.extend({
				_doReset: function() {
					for (var e = this._key.words, t = [], n = 0; n < 56; n++) {
						var r = o[n] - 1;
						t[n] = e[r >>> 5] >>> 31 - r % 32 & 1;
					}
					for (var i = this._subKeys = [], a = 0; a < 16; a++) {
						var l = i[a] = [], u = c[a];
						for (n = 0; n < 24; n++) l[n / 6 | 0] |= t[(s[n] - 1 + u) % 28] << 31 - n % 6, l[4 + (n / 6 | 0)] |= t[28 + (s[n + 24] - 1 + u) % 28] << 31 - n % 6;
						for (l[0] = l[0] << 1 | l[0] >>> 31, n = 1; n < 7; n++) l[n] = l[n] >>> 4 * (n - 1) + 3;
						l[7] = l[7] << 5 | l[7] >>> 27;
					}
					var d = this._invSubKeys = [];
					for (n = 0; n < 16; n++) d[n] = i[15 - n];
				},
				encryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._subKeys);
				},
				decryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._invSubKeys);
				},
				_doCryptBlock: function(e, t, n) {
					this._lBlock = e[t], this._rBlock = e[t + 1], f.call(this, 4, 252645135), f.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), f.call(this, 1, 1431655765);
					for (var r = 0; r < 16; r++) {
						for (var i = n[r], a = this._lBlock, o = this._rBlock, s = 0, c = 0; c < 8; c++) s |= l[c][((o ^ i[c]) & u[c]) >>> 0];
						this._lBlock = o, this._rBlock = a ^ s;
					}
					var d = this._lBlock;
					this._lBlock = this._rBlock, this._rBlock = d, f.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), f.call(this, 16, 65535), f.call(this, 4, 252645135), e[t] = this._lBlock, e[t + 1] = this._rBlock;
				},
				keySize: 2,
				ivSize: 2,
				blockSize: 2
			});
			function f(e, t) {
				var n = (this._lBlock >>> e ^ this._rBlock) & t;
				this._rBlock ^= n, this._lBlock ^= n << e;
			}
			function p(e, t) {
				var n = (this._rBlock >>> e ^ this._lBlock) & t;
				this._lBlock ^= n, this._rBlock ^= n << e;
			}
			t.DES = i._createHelper(d);
			var m = a.TripleDES = i.extend({
				_doReset: function() {
					var e = this._key.words;
					if (e.length !== 2 && e.length !== 4 && e.length < 6) throw Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
					var t = e.slice(0, 2), n = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4), i = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
					this._des1 = d.createEncryptor(r.create(t)), this._des2 = d.createEncryptor(r.create(n)), this._des3 = d.createEncryptor(r.create(i));
				},
				encryptBlock: function(e, t) {
					this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t);
				},
				decryptBlock: function(e, t) {
					this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t);
				},
				keySize: 6,
				ivSize: 2,
				blockSize: 2
			});
			t.TripleDES = i._createHelper(m);
		}(), e.TripleDES)), yn.exports;
		var e;
	}(), function() {
		return bn || (bn = 1, wn.exports = (e = X(), mt(), yt(), Ut(), Kt(), function() {
			var t = e, n = t.lib.StreamCipher, r = t.algo, i = r.RC4 = n.extend({
				_doReset: function() {
					for (var e = this._key, t = e.words, n = e.sigBytes, r = this._S = [], i = 0; i < 256; i++) r[i] = i;
					i = 0;
					for (var a = 0; i < 256; i++) {
						var o = i % n, s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
						a = (a + r[i] + s) % 256;
						var c = r[i];
						r[i] = r[a], r[a] = c;
					}
					this._i = this._j = 0;
				},
				_doProcessBlock: function(e, t) {
					e[t] ^= a.call(this);
				},
				keySize: 8,
				ivSize: 0
			});
			function a() {
				for (var e = this._S, t = this._i, n = this._j, r = 0, i = 0; i < 4; i++) {
					n = (n + e[t = (t + 1) % 256]) % 256;
					var a = e[t];
					e[t] = e[n], e[n] = a, r |= e[(e[t] + e[n]) % 256] << 24 - 8 * i;
				}
				return this._i = t, this._j = n, r;
			}
			t.RC4 = n._createHelper(i);
			var o = r.RC4Drop = i.extend({
				cfg: i.cfg.extend({ drop: 192 }),
				_doReset: function() {
					i._doReset.call(this);
					for (var e = this.cfg.drop; e > 0; e--) a.call(this);
				}
			});
			t.RC4Drop = n._createHelper(o);
		}(), e.RC4)), wn.exports;
		var e;
	}(), function() {
		return xn || (xn = 1, Tn.exports = (e = X(), mt(), yt(), Ut(), Kt(), function() {
			var t = e, n = t.lib.StreamCipher, r = t.algo, i = [], a = [], o = [], s = r.Rabbit = n.extend({
				_doReset: function() {
					for (var e = this._key.words, t = this.cfg.iv, n = 0; n < 4; n++) e[n] = 16711935 & (e[n] << 8 | e[n] >>> 24) | 4278255360 & (e[n] << 24 | e[n] >>> 8);
					var r = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], i = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					for (this._b = 0, n = 0; n < 4; n++) c.call(this);
					for (n = 0; n < 8; n++) i[n] ^= r[n + 4 & 7];
					if (t) {
						var a = t.words, o = a[0], s = a[1], l = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), d = l >>> 16 | 4294901760 & u, f = u << 16 | 65535 & l;
						for (i[0] ^= l, i[1] ^= d, i[2] ^= u, i[3] ^= f, i[4] ^= l, i[5] ^= d, i[6] ^= u, i[7] ^= f, n = 0; n < 4; n++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var n = this._X;
					c.call(this), i[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16, i[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16, i[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16, i[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
					for (var r = 0; r < 4; r++) i[r] = 16711935 & (i[r] << 8 | i[r] >>> 24) | 4278255360 & (i[r] << 24 | i[r] >>> 8), e[t + r] ^= i[r];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, n = 0; n < 8; n++) a[n] = t[n];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + +(t[0] >>> 0 < a[0] >>> 0) | 0, t[2] = t[2] + 886263092 + +(t[1] >>> 0 < a[1] >>> 0) | 0, t[3] = t[3] + 1295307597 + +(t[2] >>> 0 < a[2] >>> 0) | 0, t[4] = t[4] + 3545052371 + +(t[3] >>> 0 < a[3] >>> 0) | 0, t[5] = t[5] + 886263092 + +(t[4] >>> 0 < a[4] >>> 0) | 0, t[6] = t[6] + 1295307597 + +(t[5] >>> 0 < a[5] >>> 0) | 0, t[7] = t[7] + 3545052371 + +(t[6] >>> 0 < a[6] >>> 0) | 0, this._b = +(t[7] >>> 0 < a[7] >>> 0), n = 0; n < 8; n++) {
					var r = e[n] + t[n], i = 65535 & r, s = r >>> 16;
					o[n] = ((i * i >>> 17) + i * s >>> 15) + s * s ^ ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
				}
				e[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, e[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, e[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, e[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, e[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, e[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, e[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, e[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
			}
			t.Rabbit = n._createHelper(s);
		}(), e.Rabbit)), Tn.exports;
		var e;
	}(), function() {
		return Sn || (Sn = 1, En.exports = (e = X(), mt(), yt(), Ut(), Kt(), function() {
			var t = e, n = t.lib.StreamCipher, r = t.algo, i = [], a = [], o = [], s = r.RabbitLegacy = n.extend({
				_doReset: function() {
					var e = this._key.words, t = this.cfg.iv, n = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], r = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					this._b = 0;
					for (var i = 0; i < 4; i++) c.call(this);
					for (i = 0; i < 8; i++) r[i] ^= n[i + 4 & 7];
					if (t) {
						var a = t.words, o = a[0], s = a[1], l = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), d = l >>> 16 | 4294901760 & u, f = u << 16 | 65535 & l;
						for (r[0] ^= l, r[1] ^= d, r[2] ^= u, r[3] ^= f, r[4] ^= l, r[5] ^= d, r[6] ^= u, r[7] ^= f, i = 0; i < 4; i++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var n = this._X;
					c.call(this), i[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16, i[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16, i[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16, i[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
					for (var r = 0; r < 4; r++) i[r] = 16711935 & (i[r] << 8 | i[r] >>> 24) | 4278255360 & (i[r] << 24 | i[r] >>> 8), e[t + r] ^= i[r];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, n = 0; n < 8; n++) a[n] = t[n];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + +(t[0] >>> 0 < a[0] >>> 0) | 0, t[2] = t[2] + 886263092 + +(t[1] >>> 0 < a[1] >>> 0) | 0, t[3] = t[3] + 1295307597 + +(t[2] >>> 0 < a[2] >>> 0) | 0, t[4] = t[4] + 3545052371 + +(t[3] >>> 0 < a[3] >>> 0) | 0, t[5] = t[5] + 886263092 + +(t[4] >>> 0 < a[4] >>> 0) | 0, t[6] = t[6] + 1295307597 + +(t[5] >>> 0 < a[5] >>> 0) | 0, t[7] = t[7] + 3545052371 + +(t[6] >>> 0 < a[6] >>> 0) | 0, this._b = +(t[7] >>> 0 < a[7] >>> 0), n = 0; n < 8; n++) {
					var r = e[n] + t[n], i = 65535 & r, s = r >>> 16;
					o[n] = ((i * i >>> 17) + i * s >>> 15) + s * s ^ ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
				}
				e[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, e[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, e[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, e[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, e[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, e[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, e[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, e[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
			}
			t.RabbitLegacy = n._createHelper(s);
		}(), e.RabbitLegacy)), En.exports;
		var e;
	}(), function() {
		return Cn || (Cn = 1, Dn.exports = (e = X(), mt(), yt(), Ut(), Kt(), function() {
			var t = e, n = t.lib.BlockCipher, r = t.algo;
			let i = [
				608135816,
				2242054355,
				320440878,
				57701188,
				2752067618,
				698298832,
				137296536,
				3964562569,
				1160258022,
				953160567,
				3193202383,
				887688300,
				3232508343,
				3380367581,
				1065670069,
				3041331479,
				2450970073,
				2306472731
			], a = [
				[
					3509652390,
					2564797868,
					805139163,
					3491422135,
					3101798381,
					1780907670,
					3128725573,
					4046225305,
					614570311,
					3012652279,
					134345442,
					2240740374,
					1667834072,
					1901547113,
					2757295779,
					4103290238,
					227898511,
					1921955416,
					1904987480,
					2182433518,
					2069144605,
					3260701109,
					2620446009,
					720527379,
					3318853667,
					677414384,
					3393288472,
					3101374703,
					2390351024,
					1614419982,
					1822297739,
					2954791486,
					3608508353,
					3174124327,
					2024746970,
					1432378464,
					3864339955,
					2857741204,
					1464375394,
					1676153920,
					1439316330,
					715854006,
					3033291828,
					289532110,
					2706671279,
					2087905683,
					3018724369,
					1668267050,
					732546397,
					1947742710,
					3462151702,
					2609353502,
					2950085171,
					1814351708,
					2050118529,
					680887927,
					999245976,
					1800124847,
					3300911131,
					1713906067,
					1641548236,
					4213287313,
					1216130144,
					1575780402,
					4018429277,
					3917837745,
					3693486850,
					3949271944,
					596196993,
					3549867205,
					258830323,
					2213823033,
					772490370,
					2760122372,
					1774776394,
					2652871518,
					566650946,
					4142492826,
					1728879713,
					2882767088,
					1783734482,
					3629395816,
					2517608232,
					2874225571,
					1861159788,
					326777828,
					3124490320,
					2130389656,
					2716951837,
					967770486,
					1724537150,
					2185432712,
					2364442137,
					1164943284,
					2105845187,
					998989502,
					3765401048,
					2244026483,
					1075463327,
					1455516326,
					1322494562,
					910128902,
					469688178,
					1117454909,
					936433444,
					3490320968,
					3675253459,
					1240580251,
					122909385,
					2157517691,
					634681816,
					4142456567,
					3825094682,
					3061402683,
					2540495037,
					79693498,
					3249098678,
					1084186820,
					1583128258,
					426386531,
					1761308591,
					1047286709,
					322548459,
					995290223,
					1845252383,
					2603652396,
					3431023940,
					2942221577,
					3202600964,
					3727903485,
					1712269319,
					422464435,
					3234572375,
					1170764815,
					3523960633,
					3117677531,
					1434042557,
					442511882,
					3600875718,
					1076654713,
					1738483198,
					4213154764,
					2393238008,
					3677496056,
					1014306527,
					4251020053,
					793779912,
					2902807211,
					842905082,
					4246964064,
					1395751752,
					1040244610,
					2656851899,
					3396308128,
					445077038,
					3742853595,
					3577915638,
					679411651,
					2892444358,
					2354009459,
					1767581616,
					3150600392,
					3791627101,
					3102740896,
					284835224,
					4246832056,
					1258075500,
					768725851,
					2589189241,
					3069724005,
					3532540348,
					1274779536,
					3789419226,
					2764799539,
					1660621633,
					3471099624,
					4011903706,
					913787905,
					3497959166,
					737222580,
					2514213453,
					2928710040,
					3937242737,
					1804850592,
					3499020752,
					2949064160,
					2386320175,
					2390070455,
					2415321851,
					4061277028,
					2290661394,
					2416832540,
					1336762016,
					1754252060,
					3520065937,
					3014181293,
					791618072,
					3188594551,
					3933548030,
					2332172193,
					3852520463,
					3043980520,
					413987798,
					3465142937,
					3030929376,
					4245938359,
					2093235073,
					3534596313,
					375366246,
					2157278981,
					2479649556,
					555357303,
					3870105701,
					2008414854,
					3344188149,
					4221384143,
					3956125452,
					2067696032,
					3594591187,
					2921233993,
					2428461,
					544322398,
					577241275,
					1471733935,
					610547355,
					4027169054,
					1432588573,
					1507829418,
					2025931657,
					3646575487,
					545086370,
					48609733,
					2200306550,
					1653985193,
					298326376,
					1316178497,
					3007786442,
					2064951626,
					458293330,
					2589141269,
					3591329599,
					3164325604,
					727753846,
					2179363840,
					146436021,
					1461446943,
					4069977195,
					705550613,
					3059967265,
					3887724982,
					4281599278,
					3313849956,
					1404054877,
					2845806497,
					146425753,
					1854211946
				],
				[
					1266315497,
					3048417604,
					3681880366,
					3289982499,
					290971e4,
					1235738493,
					2632868024,
					2414719590,
					3970600049,
					1771706367,
					1449415276,
					3266420449,
					422970021,
					1963543593,
					2690192192,
					3826793022,
					1062508698,
					1531092325,
					1804592342,
					2583117782,
					2714934279,
					4024971509,
					1294809318,
					4028980673,
					1289560198,
					2221992742,
					1669523910,
					35572830,
					157838143,
					1052438473,
					1016535060,
					1802137761,
					1753167236,
					1386275462,
					3080475397,
					2857371447,
					1040679964,
					2145300060,
					2390574316,
					1461121720,
					2956646967,
					4031777805,
					4028374788,
					33600511,
					2920084762,
					1018524850,
					629373528,
					3691585981,
					3515945977,
					2091462646,
					2486323059,
					586499841,
					988145025,
					935516892,
					3367335476,
					2599673255,
					2839830854,
					265290510,
					3972581182,
					2759138881,
					3795373465,
					1005194799,
					847297441,
					406762289,
					1314163512,
					1332590856,
					1866599683,
					4127851711,
					750260880,
					613907577,
					1450815602,
					3165620655,
					3734664991,
					3650291728,
					3012275730,
					3704569646,
					1427272223,
					778793252,
					1343938022,
					2676280711,
					2052605720,
					1946737175,
					3164576444,
					3914038668,
					3967478842,
					3682934266,
					1661551462,
					3294938066,
					4011595847,
					840292616,
					3712170807,
					616741398,
					312560963,
					711312465,
					1351876610,
					322626781,
					1910503582,
					271666773,
					2175563734,
					1594956187,
					70604529,
					3617834859,
					1007753275,
					1495573769,
					4069517037,
					2549218298,
					2663038764,
					504708206,
					2263041392,
					3941167025,
					2249088522,
					1514023603,
					1998579484,
					1312622330,
					694541497,
					2582060303,
					2151582166,
					1382467621,
					776784248,
					2618340202,
					3323268794,
					2497899128,
					2784771155,
					503983604,
					4076293799,
					907881277,
					423175695,
					432175456,
					1378068232,
					4145222326,
					3954048622,
					3938656102,
					3820766613,
					2793130115,
					2977904593,
					26017576,
					3274890735,
					3194772133,
					1700274565,
					1756076034,
					4006520079,
					3677328699,
					720338349,
					1533947780,
					354530856,
					688349552,
					3973924725,
					1637815568,
					332179504,
					3949051286,
					53804574,
					2852348879,
					3044236432,
					1282449977,
					3583942155,
					3416972820,
					4006381244,
					1617046695,
					2628476075,
					3002303598,
					1686838959,
					431878346,
					2686675385,
					1700445008,
					1080580658,
					1009431731,
					832498133,
					3223435511,
					2605976345,
					2271191193,
					2516031870,
					1648197032,
					4164389018,
					2548247927,
					300782431,
					375919233,
					238389289,
					3353747414,
					2531188641,
					2019080857,
					1475708069,
					455242339,
					2609103871,
					448939670,
					3451063019,
					1395535956,
					2413381860,
					1841049896,
					1491858159,
					885456874,
					4264095073,
					4001119347,
					1565136089,
					3898914787,
					1108368660,
					540939232,
					1173283510,
					2745871338,
					3681308437,
					4207628240,
					3343053890,
					4016749493,
					1699691293,
					1103962373,
					3625875870,
					2256883143,
					3830138730,
					1031889488,
					3479347698,
					1535977030,
					4236805024,
					3251091107,
					2132092099,
					1774941330,
					1199868427,
					1452454533,
					157007616,
					2904115357,
					342012276,
					595725824,
					1480756522,
					206960106,
					497939518,
					591360097,
					863170706,
					2375253569,
					3596610801,
					1814182875,
					2094937945,
					3421402208,
					1082520231,
					3463918190,
					2785509508,
					435703966,
					3908032597,
					1641649973,
					2842273706,
					3305899714,
					1510255612,
					2148256476,
					2655287854,
					3276092548,
					4258621189,
					236887753,
					3681803219,
					274041037,
					1734335097,
					3815195456,
					3317970021,
					1899903192,
					1026095262,
					4050517792,
					356393447,
					2410691914,
					3873677099,
					3682840055
				],
				[
					3913112168,
					2491498743,
					4132185628,
					2489919796,
					1091903735,
					1979897079,
					3170134830,
					3567386728,
					3557303409,
					857797738,
					1136121015,
					1342202287,
					507115054,
					2535736646,
					337727348,
					3213592640,
					1301675037,
					2528481711,
					1895095763,
					1721773893,
					3216771564,
					62756741,
					2142006736,
					835421444,
					2531993523,
					1442658625,
					3659876326,
					2882144922,
					676362277,
					1392781812,
					170690266,
					3921047035,
					1759253602,
					3611846912,
					1745797284,
					664899054,
					1329594018,
					3901205900,
					3045908486,
					2062866102,
					2865634940,
					3543621612,
					3464012697,
					1080764994,
					553557557,
					3656615353,
					3996768171,
					991055499,
					499776247,
					1265440854,
					648242737,
					3940784050,
					980351604,
					3713745714,
					1749149687,
					3396870395,
					4211799374,
					3640570775,
					1161844396,
					3125318951,
					1431517754,
					545492359,
					4268468663,
					3499529547,
					1437099964,
					2702547544,
					3433638243,
					2581715763,
					2787789398,
					1060185593,
					1593081372,
					2418618748,
					4260947970,
					69676912,
					2159744348,
					86519011,
					2512459080,
					3838209314,
					1220612927,
					3339683548,
					133810670,
					1090789135,
					1078426020,
					1569222167,
					845107691,
					3583754449,
					4072456591,
					1091646820,
					628848692,
					1613405280,
					3757631651,
					526609435,
					236106946,
					48312990,
					2942717905,
					3402727701,
					1797494240,
					859738849,
					992217954,
					4005476642,
					2243076622,
					3870952857,
					3732016268,
					765654824,
					3490871365,
					2511836413,
					1685915746,
					3888969200,
					1414112111,
					2273134842,
					3281911079,
					4080962846,
					172450625,
					2569994100,
					980381355,
					4109958455,
					2819808352,
					2716589560,
					2568741196,
					3681446669,
					3329971472,
					1835478071,
					660984891,
					3704678404,
					4045999559,
					3422617507,
					3040415634,
					1762651403,
					1719377915,
					3470491036,
					2693910283,
					3642056355,
					3138596744,
					1364962596,
					2073328063,
					1983633131,
					926494387,
					3423689081,
					2150032023,
					4096667949,
					1749200295,
					3328846651,
					309677260,
					2016342300,
					1779581495,
					3079819751,
					111262694,
					1274766160,
					443224088,
					298511866,
					1025883608,
					3806446537,
					1145181785,
					168956806,
					3641502830,
					3584813610,
					1689216846,
					3666258015,
					3200248200,
					1692713982,
					2646376535,
					4042768518,
					1618508792,
					1610833997,
					3523052358,
					4130873264,
					2001055236,
					3610705100,
					2202168115,
					4028541809,
					2961195399,
					1006657119,
					2006996926,
					3186142756,
					1430667929,
					3210227297,
					1314452623,
					4074634658,
					4101304120,
					2273951170,
					1399257539,
					3367210612,
					3027628629,
					1190975929,
					2062231137,
					2333990788,
					2221543033,
					2438960610,
					1181637006,
					548689776,
					2362791313,
					3372408396,
					3104550113,
					3145860560,
					296247880,
					1970579870,
					3078560182,
					3769228297,
					1714227617,
					3291629107,
					3898220290,
					166772364,
					1251581989,
					493813264,
					448347421,
					195405023,
					2709975567,
					677966185,
					3703036547,
					1463355134,
					2715995803,
					1338867538,
					1343315457,
					2802222074,
					2684532164,
					233230375,
					2599980071,
					2000651841,
					3277868038,
					1638401717,
					4028070440,
					3237316320,
					6314154,
					819756386,
					300326615,
					590932579,
					1405279636,
					3267499572,
					3150704214,
					2428286686,
					3959192993,
					3461946742,
					1862657033,
					1266418056,
					963775037,
					2089974820,
					2263052895,
					1917689273,
					448879540,
					3550394620,
					3981727096,
					150775221,
					3627908307,
					1303187396,
					508620638,
					2975983352,
					2726630617,
					1817252668,
					1876281319,
					1457606340,
					908771278,
					3720792119,
					3617206836,
					2455994898,
					1729034894,
					1080033504
				],
				[
					976866871,
					3556439503,
					2881648439,
					1522871579,
					1555064734,
					1336096578,
					3548522304,
					2579274686,
					3574697629,
					3205460757,
					3593280638,
					3338716283,
					3079412587,
					564236357,
					2993598910,
					1781952180,
					1464380207,
					3163844217,
					3332601554,
					1699332808,
					1393555694,
					1183702653,
					3581086237,
					1288719814,
					691649499,
					2847557200,
					2895455976,
					3193889540,
					2717570544,
					1781354906,
					1676643554,
					2592534050,
					3230253752,
					1126444790,
					2770207658,
					2633158820,
					2210423226,
					2615765581,
					2414155088,
					3127139286,
					673620729,
					2805611233,
					1269405062,
					4015350505,
					3341807571,
					4149409754,
					1057255273,
					2012875353,
					2162469141,
					2276492801,
					2601117357,
					993977747,
					3918593370,
					2654263191,
					753973209,
					36408145,
					2530585658,
					25011837,
					3520020182,
					2088578344,
					530523599,
					2918365339,
					1524020338,
					1518925132,
					3760827505,
					3759777254,
					1202760957,
					3985898139,
					3906192525,
					674977740,
					4174734889,
					2031300136,
					2019492241,
					3983892565,
					4153806404,
					3822280332,
					352677332,
					2297720250,
					60907813,
					90501309,
					3286998549,
					1016092578,
					2535922412,
					2839152426,
					457141659,
					509813237,
					4120667899,
					652014361,
					1966332200,
					2975202805,
					55981186,
					2327461051,
					676427537,
					3255491064,
					2882294119,
					3433927263,
					1307055953,
					942726286,
					933058658,
					2468411793,
					3933900994,
					4215176142,
					1361170020,
					2001714738,
					2830558078,
					3274259782,
					1222529897,
					1679025792,
					2729314320,
					3714953764,
					1770335741,
					151462246,
					3013232138,
					1682292957,
					1483529935,
					471910574,
					1539241949,
					458788160,
					3436315007,
					1807016891,
					3718408830,
					978976581,
					1043663428,
					3165965781,
					1927990952,
					4200891579,
					2372276910,
					3208408903,
					3533431907,
					1412390302,
					2931980059,
					4132332400,
					1947078029,
					3881505623,
					4168226417,
					2941484381,
					1077988104,
					1320477388,
					886195818,
					18198404,
					3786409e3,
					2509781533,
					112762804,
					3463356488,
					1866414978,
					891333506,
					18488651,
					661792760,
					1628790961,
					3885187036,
					3141171499,
					876946877,
					2693282273,
					1372485963,
					791857591,
					2686433993,
					3759982718,
					3167212022,
					3472953795,
					2716379847,
					445679433,
					3561995674,
					3504004811,
					3574258232,
					54117162,
					3331405415,
					2381918588,
					3769707343,
					4154350007,
					1140177722,
					4074052095,
					668550556,
					3214352940,
					367459370,
					261225585,
					2610173221,
					4209349473,
					3468074219,
					3265815641,
					314222801,
					3066103646,
					3808782860,
					282218597,
					3406013506,
					3773591054,
					379116347,
					1285071038,
					846784868,
					2669647154,
					3771962079,
					3550491691,
					2305946142,
					453669953,
					1268987020,
					3317592352,
					3279303384,
					3744833421,
					2610507566,
					3859509063,
					266596637,
					3847019092,
					517658769,
					3462560207,
					3443424879,
					370717030,
					4247526661,
					2224018117,
					4143653529,
					4112773975,
					2788324899,
					2477274417,
					1456262402,
					2901442914,
					1517677493,
					1846949527,
					2295493580,
					3734397586,
					2176403920,
					1280348187,
					1908823572,
					3871786941,
					846861322,
					1172426758,
					3287448474,
					3383383037,
					1655181056,
					3139813346,
					901632758,
					1897031941,
					2986607138,
					3066810236,
					3447102507,
					1393639104,
					373351379,
					950779232,
					625454576,
					3124240540,
					4148612726,
					2007998917,
					544563296,
					2244738638,
					2330496472,
					2058025392,
					1291430526,
					424198748,
					50039436,
					29584100,
					3605783033,
					2429876329,
					2791104160,
					1057563949,
					3255363231,
					3075367218,
					3463963227,
					1469046755,
					985887462
				]
			];
			var o = {
				pbox: [],
				sbox: []
			};
			function s(e, t) {
				let n = t >> 24 & 255, r = t >> 16 & 255, i = t >> 8 & 255, a = 255 & t, o = e.sbox[0][n] + e.sbox[1][r];
				return o ^= e.sbox[2][i], o += e.sbox[3][a], o;
			}
			function c(e, t, n) {
				let r, i = t, a = n;
				for (let t = 0; t < 16; ++t) i ^= e.pbox[t], a = s(e, i) ^ a, r = i, i = a, a = r;
				return r = i, i = a, a = r, a ^= e.pbox[16], i ^= e.pbox[17], {
					left: i,
					right: a
				};
			}
			var l = r.Blowfish = n.extend({
				_doReset: function() {
					if (this._keyPriorReset !== this._key) {
						var e = this._keyPriorReset = this._key;
						(function(e, t, n) {
							for (let t = 0; t < 4; t++) {
								e.sbox[t] = [];
								for (let n = 0; n < 256; n++) e.sbox[t][n] = a[t][n];
							}
							let r = 0;
							for (let a = 0; a < 18; a++) e.pbox[a] = i[a] ^ t[r], r++, r >= n && (r = 0);
							let o = 0, s = 0, l = 0;
							for (let t = 0; t < 18; t += 2) l = c(e, o, s), o = l.left, s = l.right, e.pbox[t] = o, e.pbox[t + 1] = s;
							for (let t = 0; t < 4; t++) for (let n = 0; n < 256; n += 2) l = c(e, o, s), o = l.left, s = l.right, e.sbox[t][n] = o, e.sbox[t][n + 1] = s;
						})(o, e.words, e.sigBytes / 4);
					}
				},
				encryptBlock: function(e, t) {
					var n = c(o, e[t], e[t + 1]);
					e[t] = n.left, e[t + 1] = n.right;
				},
				decryptBlock: function(e, t) {
					var n = function(e, t, n) {
						let r, i = t, a = n;
						for (let t = 17; t > 1; --t) i ^= e.pbox[t], a = s(e, i) ^ a, r = i, i = a, a = r;
						return r = i, i = a, a = r, a ^= e.pbox[1], i ^= e.pbox[0], {
							left: i,
							right: a
						};
					}(o, e[t], e[t + 1]);
					e[t] = n.left, e[t + 1] = n.right;
				},
				blockSize: 2,
				keySize: 4,
				ivSize: 2
			});
			t.Blowfish = n._createHelper(l);
		}(), e.Blowfish)), Dn.exports;
		var e;
	}())), rt.exports));
	function An(e) {
		var t = e.icuString, n = e.shouldVisit, r = e.visitor, i = e.options, a = i.recurseIntoVisited, o = a === void 0 || a, s = function(e, t) {
			t === void 0 && (t = {}), t = f({
				shouldParseSkeletons: !0,
				requiresOtherClause: !0
			}, t);
			var n = new Le(e, t).parse();
			if (n.err) {
				var r = SyntaxError(B[n.err.kind]);
				throw r.location = n.err.location, r.originalMessage = n.err.message, r;
			}
			return t != null && t.captureLocation || He(n.val), n.val;
		}(t, function(e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == "function") {
				var i = 0;
				for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
			}
			return n;
		}(i, ["recurseIntoVisited"]));
		return c(s), s;
		function c(e) {
			e.map(l);
		}
		function l(e) {
			var t = !1;
			n(e) && (r(e), t = !0), t && !o || (e.type === V.select || e.type === V.plural ? Object.values(e.options).map(function(e) {
				return e.value;
			}).map(c) : e.type === V.tag && c(e.children));
		}
	}
	var jn = "_gt_", Mn = RegExp(`^${jn}\$`);
	function Nn(e) {
		return e.type === Qe.TYPE.select && Mn.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === Qe.TYPE.literal);
	}
	function Pn(e) {
		if (!e.includes(jn)) return e;
		var t = [];
		An({
			icuString: e,
			shouldVisit: Nn,
			visitor: function(e) {
				t.push({
					start: e.location?.start.offset ?? 0,
					end: e.location?.end.offset ?? 0,
					otherStart: e.options.other.location?.start.offset ?? 0,
					otherEnd: e.options.other.location?.end.offset ?? 0
				});
			},
			options: {
				recurseIntoVisited: !1,
				captureLocation: !0
			}
		});
		for (var n = [], r = 0, i = 0; i < t.length; i++) {
			var a = t[i], o = a.start, s = a.end, c = a.otherStart, l = a.otherEnd;
			n.push(e.slice(r, o)), n.push(e.slice(o, o + 4 + 1)), n.push(String(i + 1)), n.push(e.slice(o + 4 + 1, c)), n.push("{}"), n.push(e.slice(l, s)), r = s;
		}
		return n.push(e.slice(r, e.length)), n.join("");
	}
	var Fn = function() {
		return Fn = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, Fn.apply(this, arguments);
	};
	function In(e) {
		return kn.SHA256(e).toString(kn.enc.Hex).slice(0, 16);
	}
	var Ln = function(e) {
		if (e && typeof e == "object") {
			var t = {};
			if ("c" in e && e.c && (t.c = Rn(e.c)), "d" in e) {
				var n = e?.d;
				n != null && n.b && (t.b = Object.fromEntries(Object.entries(n.b).map(function(e) {
					return [e[0], Rn(e[1])];
				}))), n != null && n.t && (t.t = n.t);
			}
			return function(e) {
				var t = e;
				if (t && typeof t == "object" && typeof t.k == "string") {
					var n = Object.keys(t);
					if (n.length === 1 || n.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || n.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
				}
				return !1;
			}(e) ? Fn({ k: e.k }, e.v && { v: e.v }) : t;
		}
		return e;
	};
	function Rn(e) {
		return Array.isArray(e) ? e.map(Ln) : Ln(e);
	}
	var zn = function(e, t) {
		return zn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, zn(e, t);
	};
	function Bn(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
		function n() {
			this.constructor = e;
		}
		zn(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
	}
	var Vn, Hn, Un = function() {
		return Un = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, Un.apply(this, arguments);
	};
	function Wn(e, t, n, r) {
		return new (n ||= Promise)(function(t, i) {
			function a(e) {
				try {
					s(r.next(e));
				} catch (e) {
					i(e);
				}
			}
			function o(e) {
				try {
					s(r.throw(e));
				} catch (e) {
					i(e);
				}
			}
			function s(e) {
				var r;
				e.done ? t(e.value) : (r = e.value, r instanceof n ? r : new n(function(e) {
					e(r);
				})).then(a, o);
			}
			s((r = r.apply(e, [])).next());
		});
	}
	function Gn(e, t) {
		var n, r, i, a = {
			label: 0,
			sent: function() {
				if (1 & i[0]) throw i[1];
				return i[1];
			},
			trys: [],
			ops: []
		}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
		return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
			return this;
		}), o;
		function s(s) {
			return function(c) {
				return function(s) {
					if (n) throw TypeError("Generator is already executing.");
					for (; o && (o = 0, s[0] && (a = 0)), a;) try {
						if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
						switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
							case 0:
							case 1:
								i = s;
								break;
							case 4: return a.label++, {
								value: s[1],
								done: !1
							};
							case 5:
								a.label++, r = s[1], s = [0];
								continue;
							case 7:
								s = a.ops.pop(), a.trys.pop();
								continue;
							default:
								if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
									a = 0;
									continue;
								}
								if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
									a.label = s[1];
									break;
								}
								if (s[0] === 6 && a.label < i[1]) {
									a.label = i[1], i = s;
									break;
								}
								if (i && a.label < i[2]) {
									a.label = i[2], a.ops.push(s);
									break;
								}
								i[2] && a.ops.pop(), a.trys.pop();
								continue;
						}
						s = t.call(e, a);
					} catch (e) {
						s = [6, e], r = 0;
					} finally {
						n = i = 0;
					}
					if (5 & s[0]) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					};
				}([s, c]);
			};
		}
	}
	(function(e) {
		e.GT_REMOTE = "gt-remote", e.REMOTE = "remote", e.CUSTOM = "custom", e.DISABLED = "disabled";
	})(Vn ||= {}), function(e) {
		e.GT = "gt", e.CUSTOM = "custom", e.DISABLED = "disabled";
	}(Hn ||= {}), function(e) {
		function t() {
			var t = e !== null && e.apply(this, arguments) || this;
			return t.type = "fallback-storage-adapter", t.storage = {}, t;
		}
		Bn(t, e), t.prototype.getItem = function(e) {
			return this.storage[e];
		}, t.prototype.setItem = function(e, t) {
			this.storage[e] = t;
		}, t.prototype.removeItem = function(e) {
			delete this.storage[e];
		};
	}(function() {});
	var Kn = function() {
		function e(e) {
			this.cache = {}, this.fallbackPromises = {}, this.cache = structuredClone(e);
		}
		return e.prototype.setCache = function(e, t) {
			this.cache[e] = t;
		}, e.prototype.getCache = function(e) {
			var t = this.genKey(e);
			return this.cache[t];
		}, e.prototype.getInternalCache = function() {
			return this.cache;
		}, e.prototype.missCache = function(e) {
			return Wn(this, 0, void 0, function() {
				var t, n, r;
				return Gn(this, function(i) {
					switch (i.label) {
						case 0: return t = this.genKey(e), this.fallbackPromises[t] === void 0 ? [3, 2] : [4, this.fallbackPromises[t]];
						case 1: return [2, i.sent()];
						case 2: n = this.fallback(e), this.fallbackPromises[t] = n, i.label = 3;
						case 3: return i.trys.push([
							3,
							,
							5,
							6
						]), [4, n];
						case 4: return r = i.sent(), this.cache[t] = r, [2, r];
						case 5: return delete this.fallbackPromises[t], [7];
						case 6: return [2];
					}
				});
			});
		}, e;
	}();
	function qn(e, t) {
		return function(e, t) {
			var n, r = e.source, i = e.context, a = e.id, o = e.maxChars, s = e.dataFormat;
			t === void 0 && (t = In), n = s === "JSX" ? Rn(r) : r;
			var c = Fn(Fn(Fn(Fn({ source: n }, a && { id: a }), i && { context: i }), o != null && { maxChars: Math.abs(o) }), s && { dataFormat: s });
			return t(nt(c));
		}(Un(Un(Un(Un({ source: t.$format === "ICU" ? Pn(e) : e }, t?.$context && { context: t.$context }), t?.$id && { id: t.$id }), "$maxChars" in t && t.$maxChars != null && { $maxChars: Math.abs(t.$maxChars) }), { dataFormat: t.$format }));
	}
	var Jn = function(e) {
		function t(t) {
			var n = t.init, r = t.translateMany, i = e.call(this, n) || this;
			return i._queue = [], i._batchTimer = null, i._activeRequests = 0, i._translateMany = r, i;
		}
		return Bn(t, e), t.prototype.get = function(e) {
			return this.getCache(e);
		}, t.prototype.miss = function(e) {
			return this.missCache(e);
		}, t.prototype.genKey = function(e) {
			return qn(e.message, e.options);
		}, t.prototype.fallback = function(e) {
			var t = this._enqueueTranslation(e);
			return this._queue.length >= 25 ? this._flushNow() : this._scheduleBatch(), t;
		}, t.prototype._flushNow = function() {
			this._batchTimer &&= (clearTimeout(this._batchTimer), null), this._drainQueue();
		}, t.prototype._scheduleBatch = function() {
			var e = this;
			this._batchTimer ||= setTimeout(function() {
				e._batchTimer = null, e._drainQueue();
			}, 50);
		}, t.prototype._drainQueue = function() {
			for (; this._queue.length > 0 && this._activeRequests < 100;) {
				var e = this._queue.splice(0, 25);
				this._sendBatchRequest(e);
			}
			this._queue.length > 0 && this._scheduleBatch();
		}, t.prototype._enqueueTranslation = function(e) {
			var t = this, n = this.genKey(e), r = e.options;
			return new Promise(function(i, a) {
				t._queue.push({
					key: n,
					source: e.message,
					metadata: Un(Un(Un(Un({}, r?.$context && { context: r.$context }), r?.$id && { id: r.$id }), "$maxChars" in r && r.$maxChars != null && { $maxChars: Math.abs(r.$maxChars) }), { dataFormat: r.$format }),
					resolve: function(e) {
						return i(e);
					},
					reject: a
				});
			});
		}, t.prototype._sendBatchRequest = function(e) {
			return Wn(this, 0, void 0, function() {
				var t, n;
				return Gn(this, function(r) {
					switch (r.label) {
						case 0: return this._activeRequests++, t = function(e) {
							return e.reduce(function(e, t) {
								return e[t.key] = {
									source: t.source,
									metadata: t.metadata
								}, e;
							}, {});
						}(e), [4, this._sendBatchRequestWithErrorHandling(e, t)];
						case 1: return (n = r.sent()) && this._handleTranslationResponse(e, n), this._activeRequests--, [2];
					}
				});
			});
		}, t.prototype._sendBatchRequestWithErrorHandling = function(e, t) {
			return Wn(this, 0, void 0, function() {
				var n, r, i;
				return Gn(this, function(a) {
					switch (a.label) {
						case 0: return a.trys.push([
							0,
							2,
							,
							3
						]), [4, this._translateMany(t)];
						case 1: return [2, a.sent()];
						case 2:
							for (n = a.sent(), r = 0, i = e; r < i.length; r++) i[r].reject(n);
							return [2, void 0];
						case 3: return [2];
					}
				});
			});
		}, t.prototype._handleTranslationResponse = function(e, t) {
			for (var n = 0, r = e; n < r.length; n++) {
				var i = r[n], a = i.key, o = t[a];
				if (o && o.success) {
					var s = o.translation;
					this.setCache(a, s), i.resolve(s);
				} else i.reject(o?.error);
			}
		}, t;
	}(Kn);
	function Yn(e, t) {
		var n = {};
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (e != null && typeof Object.getOwnPropertySymbols == "function") {
			var i = 0;
			for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
		}
		return n;
	}
	function Xn(e) {
		if (!e) return;
		let t = {};
		for (let n in e) t[n] = { name: e[n] };
		return t;
	}
	function Zn(e) {
		var { locale: n, locales: r, customNames: i, customMapping: a = Xn(i), setLocale: o, getLocaleProperties: s } = e, c = Yn(e, [
			"locale",
			"locales",
			"customNames",
			"customMapping",
			"setLocale",
			"getLocaleProperties"
		]);
		let l = (e) => {
			if (a && a[e]) {
				if (typeof a[e] == "string") return a[e];
				if (a[e].name) return a[e].name;
			}
			return (t = s(e).nativeNameWithRegionCode) ? t.charAt(0).toUpperCase() + (t.length > 1 ? t.slice(1) : "") : "";
			var t;
		};
		return r && r.length !== 0 && o ? t.jsxs("select", Object.assign({}, c, {
			value: n || "",
			onChange: (e) => o(e.target.value),
			children: [!n && t.jsx("option", { value: "" }), r.map((e) => t.jsx("option", {
				value: e,
				suppressHydrationWarning: !0,
				children: l(e)
			}, e))]
		})) : null;
	}
	(function(e) {
		function t(t) {
			var n = t.init, r = n === void 0 ? {} : n, i = t.ttl, a = t.loadTranslations, o = t.createTranslateMany, s = e.call(this, r) || this;
			return s.ttl = 6e4, s.ttl = i === null ? -1 : i ?? 6e4, s._translationLoader = a, s._createTranslateMany = o, s;
		}
		Bn(t, e), t.prototype.get = function(e) {
			var t = this.getCache(e);
			if (t && !(t.expiresAt > 0 && t.expiresAt < Date.now())) return t.translationsCache;
		}, t.prototype.miss = function(e) {
			return Wn(this, 0, void 0, function() {
				return Gn(this, function(t) {
					switch (t.label) {
						case 0: return [4, this.missCache(e)];
						case 1: return [2, t.sent().translationsCache];
					}
				});
			});
		}, t.prototype.genKey = function(e) {
			return e;
		}, t.prototype.fallback = function(e) {
			return Wn(this, 0, void 0, function() {
				var t, n, r, i;
				return Gn(this, function(a) {
					switch (a.label) {
						case 0: return t = this._translationLoader(e), n = this.ttl < 0 ? this.ttl : Date.now() + this.ttl, r = Jn.bind, i = {}, [4, t];
						case 1: return [2, {
							translationsCache: new (r.apply(Jn, [void 0, (i.init = a.sent(), i.translateMany = this._createTranslateMany(e), i)]))(),
							expiresAt: n
						}];
					}
				});
			});
		};
	})(Kn), Object.defineProperty(e, "Branch", {
		enumerable: !0,
		get: function() {
			return i.Branch;
		}
	}), Object.defineProperty(e, "Currency", {
		enumerable: !0,
		get: function() {
			return i.Currency;
		}
	}), Object.defineProperty(e, "DateTime", {
		enumerable: !0,
		get: function() {
			return i.DateTime;
		}
	}), Object.defineProperty(e, "Derive", {
		enumerable: !0,
		get: function() {
			return i.Derive;
		}
	}), Object.defineProperty(e, "GTProvider", {
		enumerable: !0,
		get: function() {
			return i.GTProvider;
		}
	}), Object.defineProperty(e, "Num", {
		enumerable: !0,
		get: function() {
			return i.Num;
		}
	}), Object.defineProperty(e, "Plural", {
		enumerable: !0,
		get: function() {
			return i.Plural;
		}
	}), Object.defineProperty(e, "RelativeTime", {
		enumerable: !0,
		get: function() {
			return i.RelativeTime;
		}
	}), Object.defineProperty(e, "Static", {
		enumerable: !0,
		get: function() {
			return i.Static;
		}
	}), Object.defineProperty(e, "T", {
		enumerable: !0,
		get: function() {
			return i.T;
		}
	}), Object.defineProperty(e, "Var", {
		enumerable: !0,
		get: function() {
			return i.Var;
		}
	}), Object.defineProperty(e, "declareStatic", {
		enumerable: !0,
		get: function() {
			return i.declareStatic;
		}
	}), Object.defineProperty(e, "declareVar", {
		enumerable: !0,
		get: function() {
			return i.declareVar;
		}
	}), Object.defineProperty(e, "decodeMsg", {
		enumerable: !0,
		get: function() {
			return i.decodeMsg;
		}
	}), Object.defineProperty(e, "decodeOptions", {
		enumerable: !0,
		get: function() {
			return i.decodeOptions;
		}
	}), Object.defineProperty(e, "decodeVars", {
		enumerable: !0,
		get: function() {
			return i.decodeVars;
		}
	}), Object.defineProperty(e, "derive", {
		enumerable: !0,
		get: function() {
			return i.derive;
		}
	}), Object.defineProperty(e, "gtFallback", {
		enumerable: !0,
		get: function() {
			return i.gtFallback;
		}
	}), Object.defineProperty(e, "mFallback", {
		enumerable: !0,
		get: function() {
			return i.mFallback;
		}
	}), Object.defineProperty(e, "msg", {
		enumerable: !0,
		get: function() {
			return i.msg;
		}
	}), Object.defineProperty(e, "useDefaultLocale", {
		enumerable: !0,
		get: function() {
			return i.useDefaultLocale;
		}
	}), Object.defineProperty(e, "useGT", {
		enumerable: !0,
		get: function() {
			return i.useGT;
		}
	}), Object.defineProperty(e, "useGTClass", {
		enumerable: !0,
		get: function() {
			return i.useGTClass;
		}
	}), Object.defineProperty(e, "useLocale", {
		enumerable: !0,
		get: function() {
			return i.useLocale;
		}
	}), Object.defineProperty(e, "useLocaleDirection", {
		enumerable: !0,
		get: function() {
			return i.useLocaleDirection;
		}
	}), Object.defineProperty(e, "useLocaleProperties", {
		enumerable: !0,
		get: function() {
			return i.useLocaleProperties;
		}
	}), Object.defineProperty(e, "useLocaleSelector", {
		enumerable: !0,
		get: function() {
			return i.useLocaleSelector;
		}
	}), Object.defineProperty(e, "useLocales", {
		enumerable: !0,
		get: function() {
			return i.useLocales;
		}
	}), Object.defineProperty(e, "useMessages", {
		enumerable: !0,
		get: function() {
			return i.useMessages;
		}
	}), Object.defineProperty(e, "useRegion", {
		enumerable: !0,
		get: function() {
			return i.useRegion;
		}
	}), Object.defineProperty(e, "useRegionSelector", {
		enumerable: !0,
		get: function() {
			return i.useRegionSelector;
		}
	}), Object.defineProperty(e, "useSetLocale", {
		enumerable: !0,
		get: function() {
			return i.useSetLocale;
		}
	}), Object.defineProperty(e, "useTranslations", {
		enumerable: !0,
		get: function() {
			return i.useTranslations;
		}
	}), Object.defineProperty(e, "useVersionId", {
		enumerable: !0,
		get: function() {
			return i.useVersionId;
		}
	}), e.ClientProvider = function({ children: e, dictionary: a, dictionaryTranslations: o, translations: c, locale: l, region: u, _versionId: d, defaultLocale: f, translationRequired: p, dialectTranslationRequired: m, locales: h = [], renderSettings: g, projectId: _, devApiKey: v, runtimeUrl: y, developmentApiEnabled: b, resetLocaleCookieName: x, localeCookieName: S = "generaltranslation.locale", regionCookieName: C = "generaltranslation.region", customMapping: w, environment: T, reloadServer: E }) {
		let D = n.useRef(!1), [O, k] = n.useState(c);
		n.useEffect(() => {
			D.current && k(c);
		}, [c]);
		let [A, j] = n.useState(l && r.determineLocale(l, h, w) || "");
		n.useEffect(() => {
			let e = document.cookie.split("; ").find((e) => e.startsWith(`${S}=`))?.split("=")[1];
			e &&= R.resolveAliasLocale(e), A && e && e !== A && (document.cookie = `${S}=;path=/`);
		}, [A, S]);
		let [M, N] = n.useState(o || {}), [P, F] = n.useState(a || {});
		n.useEffect(() => {
			D.current && N(o);
		}, [o]), n.useEffect(() => {
			D.current && F(a);
		}, [a]);
		let [I, L] = n.useState(u);
		n.useEffect(() => {
			let e = document.cookie.split("; ").find((e) => e.startsWith(`${C}=`))?.split("=")[1];
			I && e && e !== I && (document.cookie = `${C}=;path=/`);
		}, [I, C]);
		let R = n.useMemo(() => new r.GT({
			devApiKey: v,
			sourceLocale: f,
			targetLocale: A,
			projectId: _,
			baseUrl: y || void 0,
			customMapping: w
		}), [
			v,
			f,
			A,
			_,
			y,
			w
		]), { registerIcuForTranslation: ee, registerJsxForTranslation: te } = i.useRuntimeTranslation({
			gt: R,
			locale: A,
			versionId: d,
			runtimeUrl: y,
			setTranslations: k,
			defaultLocale: f,
			renderSettings: g,
			developmentApiEnabled: b,
			environment: T
		}), { _gtFunction: ne, _mFunction: re, _filterMessagesForPreload: ie, _preloadMessages: ae } = i.useCreateInternalUseGTFunction({
			gt: R,
			translations: O,
			locale: A,
			defaultLocale: f,
			translationRequired: p,
			developmentApiEnabled: b,
			registerIcuForTranslation: ee,
			environment: T
		}), z = i.useCreateInternalUseTranslationsFunction(R, P, M, O, A, f, p, m, b, ee, T), B = i.useCreateInternalUseTranslationsObjFunction(P, M, F, N, O, A, f, p, m, b, ee, z), V = !(p && !O) && A;
		return n.useEffect(() => {
			D.current = !0;
		}, []), t.jsx(i.GTContext.Provider, {
			value: {
				gt: R,
				registerIcuForTranslation: ee,
				registerJsxForTranslation: te,
				setLocale: (e) => {
					e = r.determineLocale(e, h, w) || A || f, e = R.resolveAliasLocale(e), document.cookie = `${S}=${e};path=/`, document.cookie = `${x}=true;path=/`, j(e), E();
				},
				_gtFunction: ne,
				_mFunction: re,
				_filterMessagesForPreload: ie,
				_preloadMessages: ae,
				_dictionaryFunction: z,
				_dictionaryObjFunction: B,
				locale: A,
				locales: h,
				defaultLocale: f,
				region: I,
				setRegion: (e) => {
					document.cookie = `${C}=${e || ""};path=/`, L(e);
				},
				translations: O,
				translationRequired: p,
				dialectTranslationRequired: m,
				renderSettings: g,
				developmentApiEnabled: b,
				_versionId: d
			},
			children: t.jsx(s.Suspense, {
				fallback: V && e,
				children: V && e
			})
		});
	}, e.LocaleSelector = function(e) {
		var { locales: n } = e, r = Yn(e, ["locales"]);
		let { locale: a, locales: o, setLocale: s, getLocaleProperties: c } = i.useLocaleSelector(n);
		return t.jsx(Zn, Object.assign({
			locale: a,
			locales: o,
			setLocale: s,
			getLocaleProperties: c
		}, r));
	}, e.RegionSelector = function(e) {
		var { regions: n, placeholder: r, customMapping: a, prioritizeCurrentLocaleRegion: o, sortRegionsAlphabetically: s, asLocaleSelector: c = !1 } = e, l = Yn(e, [
			"regions",
			"placeholder",
			"customMapping",
			"prioritizeCurrentLocaleRegion",
			"sortRegionsAlphabetically",
			"asLocaleSelector"
		]);
		let { region: u, setRegion: d, regions: f, regionData: p, locale: m, setLocale: h } = i.useRegionSelector({
			regions: n,
			customMapping: a,
			prioritizeCurrentLocaleRegion: o,
			sortRegionsAlphabetically: s
		});
		return t.jsxs("select", Object.assign({}, l, {
			value: u || "",
			onChange: (e) => ((e) => {
				if (d(e), c) {
					let t = p.get(e).locale;
					m !== t && h(t);
				}
			})(e.target.value),
			children: [!u && t.jsx("option", {
				value: "",
				disabled: !!u,
				hidden: !!u,
				suppressHydrationWarning: !0,
				children: r || ""
			}, "placeholder"), f.map((e) => t.jsx("option", {
				value: e,
				suppressHydrationWarning: !0,
				children: p.get(e).name
			}, e))]
		}));
	};
})), f = /* @__PURE__ */ a(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.STABLE_TURBO_CONFIG_VERSION = e.ROOT_PARAM_STABILITY = e.SWC_PLUGIN_SUPPORT = e.BABEL_PLUGIN_SUPPORT = void 0, e.BABEL_PLUGIN_SUPPORT = "17.0.0", e.SWC_PLUGIN_SUPPORT = "16.1.0", e.ROOT_PARAM_STABILITY = {
		unsupported: "0.0.0",
		unstable: "15.2.0",
		experimental: "15.5.0"
	}, e.STABLE_TURBO_CONFIG_VERSION = "15.3.0";
})), p = /* @__PURE__ */ a(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.swcPluginCompatibilityChangeWarning = e.createStringRenderWarning = e.disablingCompileTimeHashWarning = e.createGTCompilerUnavailableWarning = e.createGTCompilerUnresolvedWarning = e.deprecatedLocaleMappingWarning = e.standardizedCanonicalLocalesWarning = e.standardizedLocalesWarning = e.dictionaryNotFoundWarning = e.runtimeTranslationTimeoutWarning = e.createTranslationLoadingWarning = e.APIKeyMissingWarn = e.noInitGTWarn = e.projectIdMissingWarn = e.createMismatchingHashWarning = e.createUnsupportedLocalesWarning = e.createInvalidDictionaryTranslationEntryWarning = e.createInvalidDictionaryEntryWarning = e.createNoEntryFoundWarning = e.usingDefaultsWarning = e.createBadFilepathWarning = e.createInvalidIcuDictionaryEntryWarning = e.createInvalidIcuDictionaryEntryError = e.invalidCanonicalLocalesError = e.invalidLocalesError = e.createStringRenderError = e.missingVariablesError = e.txUseClientError = e.gtProviderUseClientError = e.typesFileError = e.conflictingConfigurationBuildError = e.unresolvedGetLocaleBuildError = e.unresolvedLoadTranslationsBuildError = e.unresolvedLoadDictionaryBuildError = e.unresolvedCustomLoadTranslationsError = e.unresolvedCustomLoadDictionaryError = e.dictionaryDisabledError = e.createDictionarySubsetError = e.devApiKeyIncludedInProductionError = e.createRequiredPrefixError = e.createDictionaryTranslationError = e.createStringTranslationError = e.createUnresolvedReactVersionError = e.createUnresolvedNextVersionError = e.customLoadDictionaryWarning = e.customLoadTranslationsError = e.remoteTranslationsError = void 0;
	var t = c(), n = f();
	e.remoteTranslationsError = "gt-next Error: fetching remote translation.", e.customLoadTranslationsError = function(e) {
		return e === void 0 && (e = ""), `gt-next Error: Failed to fetch locally stored translations. If using a custom loadTranslations("${e}"), make sure it is correctly implemented.`;
	}, e.customLoadDictionaryWarning = function(e) {
		return e === void 0 && (e = ""), `gt-next Warning: Failed to fetch locally stored translation dictionary. If using a custom loadDictionary("${e}"), make sure it is correctly implemented.`;
	}, e.createUnresolvedNextVersionError = function(e) {
		return `gt-next Error: Unable to resolve next version. ${e.message}`;
	}, e.createUnresolvedReactVersionError = function(e) {
		return `gt-next Error: Unable to resolve react version. ${e.message}`;
	}, e.createStringTranslationError = function(e, t, n) {
		return n === void 0 && (n = "tx"), `gt-next string translation error. ${n}("${e}")${t ? ` with id "${t}"` : ""} could not locate translation.`;
	}, e.createDictionaryTranslationError = function(e) {
		return `gt-next Error: Dictionary translation entry with id: ${e} could not be found.`;
	}, e.createRequiredPrefixError = function(e, t) {
		return `gt-next Error: <GTProvider> has prefix id "${t}", but a child has id "${e}". Change the <GTProvider> id prop or your dictionary structure to proceed.`;
	}, e.devApiKeyIncludedInProductionError = "gt-next Error: Production builds cannot use a development API key. Replace it with a production API key.", e.createDictionarySubsetError = function(e, t) {
		return `gt-next Error: ${t} with id: "${e}". Invalid dictionary entry. Make sure the ID maps to the correct subroute of the dictionary.`;
	}, e.dictionaryDisabledError = "gt-next Error: Dictionaries require the withGTConfig() plugin. Add withGTConfig() to your app. For more information, visit generaltranslation.com/docs", e.unresolvedCustomLoadDictionaryError = "gt-next Error: loadDictionary() was resolved by plug-in but could not be resolved at run time. This usually means that the file was found, but the loadDictionary() function itself could not be resolved.", e.unresolvedCustomLoadTranslationsError = "gt-next Error: loadTranslations() was resolved by plug-in but could not be resolved at run time. This usually means that the file was found, but the loadTranslations() function itself could not be resolved.", e.unresolvedLoadDictionaryBuildError = function(e) {
		return `gt-next Error: File defining loadDictionary() could not be resolved at ${e}`;
	}, e.unresolvedLoadTranslationsBuildError = function(e) {
		return `gt-next Error: File defining loadTranslations() function could not be resolved at ${e}`;
	}, e.unresolvedGetLocaleBuildError = function(e) {
		return `gt-next Error: File defining custom getLocale() function could not be resolved at ${e}`;
	}, e.conflictingConfigurationBuildError = function(e) {
		return `gt-next Error: Conflicting configuration${e.length > 1 ? "s" : ""} detected. Resolve the following conflicts before building your app:
${e.join("\n")}`;
	}, e.typesFileError = "gt-next Error: There is no scenario in which you should be seeing this error.", e.gtProviderUseClientError = "You're attempting to import the Next.js <GTProvider> in a client component. Are you sure you want to do this? It's better to import <GTProvider> in a file not marked 'use client' so that it can fetch translations on the server. If you really need to put <GTProvider> on the client, import <GTClientProvider> from 'gt-next/client' instead (discouraged when using the Next.js App Router).", e.txUseClientError = "You're attempting to use the <Tx> runtime translation component in a client component. This is currently unsupported. Please use <T> with variables, or make sure <Tx> rendered on the server only. ", e.missingVariablesError = function(e, t) {
		return `gt-next Error: missing variables: "${e.join("\", \"")}" in message: "${t}"`;
	}, e.createStringRenderError = function(e, t) {
		return `gt-next Error: error rendering string ${t ? `for id: "${t}"` : ""} original message: "${e}"`;
	}, e.invalidLocalesError = function(e) {
		return `gt-next Error: Invalid locale codes in your configuration. Specify a list of valid locales or use "customMapping" to define aliases for the following invalid locales: ${e.join(", ")}.`;
	}, e.invalidCanonicalLocalesError = function(e) {
		return `gt-next Error: Invalid canonical locale codes in your configuration: ${e.join(", ")}.`;
	}, e.createInvalidIcuDictionaryEntryError = function(e) {
		return `gt-next Error: Invalid ICU string dictionary entry found for id: "${e}"`;
	}, e.createInvalidIcuDictionaryEntryWarning = function(e) {
		return `gt-next: Invalid ICU string dictionary entry found for id: "${e}"`;
	}, e.createBadFilepathWarning = function(e, t) {
		return `gt-next: Found ${e} in ${t.join(" or ")} directory. This is not supported. Move it to your root directory.`;
	}, e.usingDefaultsWarning = "gt-next: Unable to access gt-next configuration. Using defaults.", e.createNoEntryFoundWarning = function(e) {
		return `gt-next: No valid dictionary entry found for id: "${e}"`;
	}, e.createInvalidDictionaryEntryWarning = function(e) {
		return `gt-next: Invalid dictionary entry found for id: "${e}"`;
	}, e.createInvalidDictionaryTranslationEntryWarning = function(e) {
		return `gt-next: Invalid dictionary translation entry found for id: "${e}"`;
	}, e.createUnsupportedLocalesWarning = function(e) {
		return `gt-next: The following locales are currently unsupported by our service: ${e.map(function(e) {
			return `${e} (${(0, t.getLocaleProperties)(e).name})`;
		}).join(", ")}`;
	}, e.createMismatchingHashWarning = function(e, t) {
		return `gt-next: Mismatching hashes! Expected hash: ${e}, but got hash: ${t}. We will still render your translation, but make sure to update to the newest version: generaltranslation.com/docs`;
	}, e.projectIdMissingWarn = "gt-next: Project ID missing! Set projectId as GT_PROJECT_ID in your environment or by passing the projectId parameter to withGTConfig(). Find your project ID: generaltranslation.com/dashboard.", e.noInitGTWarn = "gt-next: You are running General Translation without the withGTConfig() plugin. This means that you are not translating your app. To activate translation, add the withGTConfig() plugin to your app, and set the projectId and apiKey in your environment. For more information, visit https://generaltranslation.com/docs/next/tutorials/quickstart", e.APIKeyMissingWarn = "gt-next (plugin): A Development API key is required for runtime translation!  Find your Development API key: generaltranslation.com/dashboard.  (Or, disable this warning message by setting runtimeUrl to an empty string which disables runtime translation.)", e.createTranslationLoadingWarning = function(e) {
		var t = e.source, n = e.translation, r = e.id;
		return `[DEV ONLY] Warning: gt-next created translation "${t}" -> "${n}"` + (r ? ` for id "${r}"` : "") + ". In development, hot-reloaded translations may not be be displayed until the page is refreshed. In production, translations will be preloaded and there won't be a warning.";
	}, e.runtimeTranslationTimeoutWarning = "gt-next: Runtime translation timed out.", e.dictionaryNotFoundWarning = "gt-next: Dictionary not found. Make sure you have added a dictionary to your project (either dictionary.js or [defaultLocale].json), and you have added the withGTConfig() plugin.", e.standardizedLocalesWarning = function(e) {
		return `gt-next: You are using The following locales were standardized: ${e.join(", ")}.`;
	}, e.standardizedCanonicalLocalesWarning = function(e) {
		return `gt-next: You are using The following canonical locales were standardized: ${e.join(", ")}.`;
	}, e.deprecatedLocaleMappingWarning = "gt-next: You are using the deprecated localeMapping configuration. Please move \"customMapping\" to your gt.config.json file.", e.createGTCompilerUnresolvedWarning = function(e) {
		return `gt-next (plugin): The GT ${e} compiler could not be resolved. Skipping compiler optimizations.`;
	}, e.createGTCompilerUnavailableWarning = function(e) {
		return e === "swc" ? `gt-next (plugin): The GT swc compiler is compatible with < next@${n.SWC_PLUGIN_SUPPORT}. Skipping compiler optimizations.` : `gt-next (plugin): The GT babel compiler is compatible with turbopack or < react@${n.BABEL_PLUGIN_SUPPORT}. Skipping compiler optimizations.`;
	}, e.disablingCompileTimeHashWarning = "gt-next (plugin): Compile-time hash is disabled. Compiler optimizations are inactive.", e.createStringRenderWarning = function(e, t) {
		return `gt-next: failed to render string ${t ? `for id: "${t}"` : ""} original message: "${e}"`;
	}, e.swcPluginCompatibilityChangeWarning = `gt-next (plugin): As of gt-next@6.12.4, SWC plugin support is disabled for Next.js versions prior to ${n.SWC_PLUGIN_SUPPORT}. Update to the latest version of Next.js.`;
})), m = (/* @__PURE__ */ a(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.gtFallback = e.mFallback = e.decodeVars = e.declareVar = e.derive = e.declareStatic = e.decodeOptions = e.decodeMsg = e.msg = e.useMessages = e.useVersionId = e.useLocaleDirection = e.useLocaleProperties = e.useGTClass = e.useDefaultLocale = e.useLocales = e.useLocale = e.useTranslations = e.useGT = e.RegionSelector = e.LocaleSelector = e.Plural = e.Branch = e.Derive = e.Static = e.RelativeTime = e.DateTime = e.Currency = e.Num = e.Var = e.T = void 0, e.GTProvider = r;
	var t = d();
	Object.defineProperty(e, "Var", {
		enumerable: !0,
		get: function() {
			return t.Var;
		}
	}), Object.defineProperty(e, "Num", {
		enumerable: !0,
		get: function() {
			return t.Num;
		}
	}), Object.defineProperty(e, "Currency", {
		enumerable: !0,
		get: function() {
			return t.Currency;
		}
	}), Object.defineProperty(e, "DateTime", {
		enumerable: !0,
		get: function() {
			return t.DateTime;
		}
	}), Object.defineProperty(e, "RelativeTime", {
		enumerable: !0,
		get: function() {
			return t.RelativeTime;
		}
	}), Object.defineProperty(e, "Static", {
		enumerable: !0,
		get: function() {
			return t.Static;
		}
	}), Object.defineProperty(e, "Derive", {
		enumerable: !0,
		get: function() {
			return t.Derive;
		}
	}), Object.defineProperty(e, "T", {
		enumerable: !0,
		get: function() {
			return t.T;
		}
	}), Object.defineProperty(e, "Branch", {
		enumerable: !0,
		get: function() {
			return t.Branch;
		}
	}), Object.defineProperty(e, "Plural", {
		enumerable: !0,
		get: function() {
			return t.Plural;
		}
	}), Object.defineProperty(e, "LocaleSelector", {
		enumerable: !0,
		get: function() {
			return t.LocaleSelector;
		}
	}), Object.defineProperty(e, "RegionSelector", {
		enumerable: !0,
		get: function() {
			return t.RegionSelector;
		}
	}), Object.defineProperty(e, "useGT", {
		enumerable: !0,
		get: function() {
			return t.useGT;
		}
	}), Object.defineProperty(e, "useTranslations", {
		enumerable: !0,
		get: function() {
			return t.useTranslations;
		}
	}), Object.defineProperty(e, "useLocale", {
		enumerable: !0,
		get: function() {
			return t.useLocale;
		}
	}), Object.defineProperty(e, "useLocales", {
		enumerable: !0,
		get: function() {
			return t.useLocales;
		}
	}), Object.defineProperty(e, "useDefaultLocale", {
		enumerable: !0,
		get: function() {
			return t.useDefaultLocale;
		}
	}), Object.defineProperty(e, "useGTClass", {
		enumerable: !0,
		get: function() {
			return t.useGTClass;
		}
	}), Object.defineProperty(e, "useLocaleProperties", {
		enumerable: !0,
		get: function() {
			return t.useLocaleProperties;
		}
	}), Object.defineProperty(e, "useLocaleDirection", {
		enumerable: !0,
		get: function() {
			return t.useLocaleDirection;
		}
	}), Object.defineProperty(e, "useVersionId", {
		enumerable: !0,
		get: function() {
			return t.useVersionId;
		}
	}), Object.defineProperty(e, "useMessages", {
		enumerable: !0,
		get: function() {
			return t.useMessages;
		}
	}), Object.defineProperty(e, "msg", {
		enumerable: !0,
		get: function() {
			return t.msg;
		}
	}), Object.defineProperty(e, "decodeMsg", {
		enumerable: !0,
		get: function() {
			return t.decodeMsg;
		}
	}), Object.defineProperty(e, "decodeOptions", {
		enumerable: !0,
		get: function() {
			return t.decodeOptions;
		}
	}), Object.defineProperty(e, "declareStatic", {
		enumerable: !0,
		get: function() {
			return t.declareStatic;
		}
	}), Object.defineProperty(e, "derive", {
		enumerable: !0,
		get: function() {
			return t.derive;
		}
	}), Object.defineProperty(e, "declareVar", {
		enumerable: !0,
		get: function() {
			return t.declareVar;
		}
	}), Object.defineProperty(e, "decodeVars", {
		enumerable: !0,
		get: function() {
			return t.decodeVars;
		}
	}), Object.defineProperty(e, "mFallback", {
		enumerable: !0,
		get: function() {
			return t.mFallback;
		}
	}), Object.defineProperty(e, "gtFallback", {
		enumerable: !0,
		get: function() {
			return t.gtFallback;
		}
	});
	var n = p();
	function r() {
		throw Error(n.gtProviderUseClientError);
	}
})))();
function h() {
	let e = n();
	return /* @__PURE__ */ i("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [/* @__PURE__ */ r("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: /* @__PURE__ */ r(m.T, { children: "API Access" })
		}), /* @__PURE__ */ i("div", { children: [
			/* @__PURE__ */ r("label", {
				htmlFor: e,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: /* @__PURE__ */ r(m.T, { children: "API Key" })
			}),
			/* @__PURE__ */ i("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ r("input", {
					id: e,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), /* @__PURE__ */ r("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: /* @__PURE__ */ r(m.T, { children: "Copy" })
				})]
			}),
			/* @__PURE__ */ r("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: /* @__PURE__ */ r(m.T, { children: "Use this key to access the benchmarking API programmatically." })
			})
		] })]
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function g() {
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
function _(e, t, n) {
	typeof window > "u" || t !== "nested-update" && (window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n));
}
//#endregion
//#region components/AppProviders.tsx
function v({ children: n, locale: i }) {
	return t(() => {
		document.documentElement.lang = i;
	}, [i]), t(() => {
		g();
	}, []), /* @__PURE__ */ r(e, {
		id: "AppRoot",
		onRender: _,
		children: n
	});
}
//#endregion
//#region scripts/Wrapper.tsx
var y = "en";
function b({ children: e }) {
	return /* @__PURE__ */ r(m.GTProvider, {
		locale: y,
		children: /* @__PURE__ */ r(v, {
			locale: y,
			children: e
		})
	});
}
//#endregion
//#region components/pages/settings/ApiAccessSection.wrapper.tsx
function x() {
	return /* @__PURE__ */ r(b, { children: /* @__PURE__ */ r(h, {}) });
}
//#endregion
export { x as default };

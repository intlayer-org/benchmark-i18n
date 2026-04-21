"use client";
import e, { createContext as t, useContext as n, useMemo as r } from "react";
import { useRouter as i } from "next/router";
import { jsx as a } from "react/jsx-runtime";
var o;
typeof e.createContext == "function" && (o = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var s = o;
function c(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
var l = function() {
	return l = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, l.apply(this, arguments);
};
function u(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function d(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? g : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, d = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return d(e, n);
		}) : e instanceof Object ? h({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : m({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, _ = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, m = t.nsSeparator, h = m === void 0 ? ":" : m, g = t.loggerEnvironment, v = g === void 0 ? "browser" : g, y = u(s, h), b = y.i18nKey, x = y.namespace, S = x === void 0 ? a?.ns ?? t.defaultNS : x, C = S && n[S] || {}, w = f(C, p(r, C, b, t, i, a), t, a), T = typeof w == "object" ? JSON.parse(JSON.stringify(w)) : w, E = T === void 0 || typeof T == "object" && !Object.keys(T).length || T === "" && !c, D = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (E && (v === "both" || v === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: S,
			i18nKey: b
		}), E && Array.isArray(D) && D.length) {
			var O = D[0], k = D.slice(1);
			if (typeof O == "string") return _(O, i, l(l({}, a), { fallback: k }));
		}
		return E && a && a.hasOwnProperty("default") && !D?.length ? a.default ? d(a.default, i) : a.default : E ? s : d(T, i);
	};
	return _;
}
function f(e, t, n, r) {
	t === void 0 && (t = ""), r === void 0 && (r = { returnObjects: !1 });
	var i = (n || {}).keySeparator, a = i === void 0 ? "." : i, o = a ? t.split(a) : [t];
	if (t === a && r.returnObjects) return e;
	var s = o.reduce(function(e, t) {
		if (typeof e == "string") return {};
		var n = e[t];
		return n || (typeof n == "string" ? n : {});
	}, e);
	if (typeof s == "string" || s instanceof Object && r.returnObjects && Object.keys(s).length > 0 || Array.isArray(s) && r.returnObjects) return s;
}
function p(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (f(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (f(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (f(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return f(t, l, r, a) === void 0 ? n : l;
}
function m(e) {
	var t = e.text, n = e.query, r = e.config, i = e.lang;
	if (!t || !n) return t || "";
	var a = function(e) {
		return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	}, o = r.interpolation || {}, s = o.format, c = s === void 0 ? null : s, l = o.prefix, u = l === void 0 ? "{{" : l, d = o.suffix, f = d === void 0 ? "}}" : d, p = f === "" ? "" : `(?:[\\s,]+([\\w-]*))?\\s*${a(f)}`;
	return Object.keys(n).reduce(function(e, t) {
		var r = RegExp(`${a(u)}\\s*${t}${p}`, "gm");
		return e.replace(r, function(e, r) {
			return r && c ? c(n[t], r, i) : n[t];
		});
	}, t);
}
function h(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && h({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = m({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function g(e) {
	var t = e.namespace, n = e.i18nKey;
	if (process.env.NODE_ENV !== "production") {
		if (!t) {
			console.warn(`[next-translate] The text "${n}" has no namespace in front of it.`);
			return;
		}
		console.warn(`[next-translate] "${t}:${n}" is missing in current namespace configuration. Try adding "${n}" to the namespace "${t}".`);
	}
}
var _ = function() {
	return _ = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, _.apply(this, arguments);
};
function v(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, _({ ns: t }, i));
	} : e;
}
function y() {
	return typeof window > "u";
}
function b(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, i = t.namespaces, a = t.config, o = a.localesToIgnore || ["default"], s = !n || o.includes(n), l = function() {
		return v(d({
			config: a,
			allNamespaces: i,
			pluralRules: c(s ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: y() ? l() : r(l, [e, n]),
		lang: n
	};
}
var x = function() {
	return x = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, x.apply(this, arguments);
};
function S(e) {
	var t = n(s);
	return r(function() {
		return x(x({}, t), { t: v(t.t, e) });
	}, [t, e]);
}
function C(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? b : S)(e);
}
var w = function() {
	return w = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, w.apply(this, arguments);
}, T = t({
	ns: {},
	config: {}
});
function E(t) {
	var a = t.lang, o = t.namespaces, l = o === void 0 ? {} : o, u = t.children, f = t.config, p = f === void 0 ? {} : f, m = C().lang, h = i() || {}, g = h.locale, _ = h.defaultLocale, v = n(T), y = w(w(w({}, D()), v.ns), l), b = a || m || g || _ || "", x = w(w({}, v.config), p), S = x.localesToIgnore || ["default"], E = !b || S.includes(b), O = r(function() {
		return c(E ? void 0 : b);
	}, [E, b]), k = r(function() {
		return d({
			config: x,
			allNamespaces: y,
			pluralRules: O,
			lang: b
		});
	}, [
		x,
		y,
		O,
		b
	]);
	return e.createElement(s.Provider, { value: {
		lang: b,
		t: k
	} }, e.createElement(T.Provider, { value: {
		ns: y,
		config: x
	} }, u));
}
function D() {
	return typeof window > "u" ? {} : window.__NEXT_DATA__?.props?.__namespaces || {};
}
var O = () => {
	let { t: e } = C("common");
	return null;
};
function k() {
	return a(E, {
		lang: "en",
		namespaces: {},
		children: a(O, {})
	});
}
export { k as default };

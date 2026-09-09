import e, { createContext as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useState as o } from "react";
import { useRouter as s } from "next/router";
import { Fragment as c, jsxDEV as l } from "react/jsx-dev-runtime";
import u from "../locales/en.json";
import d from "../locales/fr.json";
import f from "../locales/es.json";
import p from "../locales/de.json";
import m from "../locales/it.json";
import h from "../locales/pt.json";
import g from "../locales/zh.json";
import _ from "../locales/ja.json";
import v from "../locales/ko.json";
import y from "../locales/ru.json";
var b;
typeof e.createContext == "function" && (b = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var x = b;
function S(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
var C = function() {
	return C = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, C.apply(this, arguments);
};
function w(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function T(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? A : a, s = t.allowEmptyStrings, c = s === void 0 || s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? k({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : O({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, d = t.nsSeparator, f = d === void 0 ? ":" : d, p = t.loggerEnvironment, m = p === void 0 ? "browser" : p, h = w(s, f), g = h.i18nKey, _ = h.namespace, v = _ === void 0 ? a?.ns ?? t.defaultNS : _, y = v && n[v] || {}, b = E(y, D(r, y, g, t, i, a), t, a), x = typeof b == "object" ? JSON.parse(JSON.stringify(b)) : b, S = x === void 0 || typeof x == "object" && !Object.keys(x).length || x === "" && !c, T = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (S && (m === "both" || m === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: v,
			i18nKey: g
		}), S && Array.isArray(T) && T.length) {
			var O = T[0], k = T.slice(1);
			if (typeof O == "string") return u(O, i, C(C({}, a), { fallback: k }));
		}
		return S && a && a.hasOwnProperty("default") && !T?.length ? a.default ? l(a.default, i) : a.default : S ? s : l(x, i);
	};
	return u;
}
function E(e, t, n, r) {
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
function D(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (E(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (E(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (E(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return E(t, l, r, a) === void 0 ? n : l;
}
function O(e) {
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
function k(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && k({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = O({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function A(e) {
	var t = e.namespace, n = e.i18nKey;
	if (process.env.NODE_ENV !== "production") {
		if (!t) {
			console.warn(`[next-translate] The text "${n}" has no namespace in front of it.`);
			return;
		}
		console.warn(`[next-translate] "${t}:${n}" is missing in current namespace configuration. Try adding "${n}" to the namespace "${t}".`);
	}
}
var j = function() {
	return j = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, j.apply(this, arguments);
};
function M(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, j({ ns: t }, i));
	} : e;
}
function N() {
	return typeof window > "u";
}
function P(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, i = t.config, o = i.localesToIgnore || ["default"], s = !n || o.includes(n), c = function() {
		return M(T({
			config: i,
			allNamespaces: r,
			pluralRules: S(s ? void 0 : n),
			lang: n
		}), e);
	}, l = r ? Object.keys(r).sort().join("|") : "";
	return {
		t: N() ? c() : a(c, [
			e,
			n,
			l
		]),
		lang: n
	};
}
var F = function() {
	return F = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, F.apply(this, arguments);
};
function I(e) {
	var t = n(x);
	return a(function() {
		return F(F({}, t), { t: M(t.t, e) });
	}, [t, e]);
}
function L(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? P : I)(e);
}
var R = function() {
	return R = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, R.apply(this, arguments);
}, z = t({
	ns: {},
	config: {}
});
function B(t) {
	var r = t.lang, i = t.namespaces, o = i === void 0 ? {} : i, c = t.children, l = t.config, u = l === void 0 ? {} : l, d = L().lang, f = s() || {}, p = f.locale, m = f.defaultLocale, h = n(z), g = R(R(R({}, V()), h.ns), o), _ = r || d || p || m || "", v = R(R({}, h.config), u), y = v.localesToIgnore || ["default"], b = !_ || y.includes(_), C = a(function() {
		return S(b ? void 0 : _);
	}, [b, _]), w = a(function() {
		return T({
			config: v,
			allNamespaces: g,
			pluralRules: C,
			lang: _
		});
	}, [
		v,
		g,
		C,
		_
	]);
	return e.createElement(x.Provider, { value: {
		lang: _,
		t: w
	} }, e.createElement(z.Provider, { value: {
		ns: g,
		config: v
	} }, c));
}
function V() {
	return typeof window > "u" ? {} : window.__NEXT_DATA__?.props?.__namespaces || {};
}
var H = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-translate-app/scripts/EmptyComponent.tsx", U = () => {
	let { t: e } = L("common");
	return null;
};
function W() {
	return l(B, {
		lang: "en",
		namespaces: {},
		children: l(U, {}, void 0, !1, {
			fileName: H,
			lineNumber: 16,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: H,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
var G = {
	en: u,
	fr: d,
	es: f,
	de: p,
	it: m,
	pt: h,
	zh: g,
	ja: _,
	ko: v,
	ru: y
}, K = {
	locales: [
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
	],
	defaultLocale: "en",
	keySeparator: !1,
	nsSeparator: !1,
	pages: { "*": ["common"] },
	loadLocaleFrom: async (e) => G[e]
};
function q() {
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
function J(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Y = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-translate-app/components/AppProviders.tsx";
function X({ children: e, locale: t }) {
	let [n] = o(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		J("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		q();
	}, []), l(c, { children: e }, void 0, !1, {
		fileName: Y,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var Z = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-translate-app/scripts/Wrapper.tsx";
function Q({ children: e }) {
	let [t, n] = o({}), [i, a] = o(!1);
	return r(() => {
		(async () => {
			try {
				let e = await K.loadLocaleFrom?.("en", "common");
				n(e ?? {}), a(!0);
			} catch (e) {
				console.error("Failed to load translations:", e), a(!0);
			}
		})();
	}, ["en"]), i ? l(B, {
		lang: "en",
		namespaces: { common: t },
		children: l(X, {
			locale: "en",
			children: e
		}, void 0, !1, {
			fileName: Z,
			lineNumber: 37,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Z,
		lineNumber: 36,
		columnNumber: 5
	}, this) : null;
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-translate-app/scripts/EmptyComponent.wrapper.tsx";
function ee() {
	return l(Q, { children: l(W, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { ee as default };

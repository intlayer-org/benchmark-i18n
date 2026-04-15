"use client";
import e, { useContext as t, useEffect as n, useMemo as r, useState as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/wrapTWithDefaultNs.js
var o = function() {
	return o = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, o.apply(this, arguments);
};
function s(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, o({ ns: t }, i));
	} : e;
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/context.js
var c;
typeof e.createContext == "function" && (c = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var l = c;
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/isServer.js
function u() {
	return typeof window > "u";
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/safePluralRules.js
function d(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/transCore.js
var f = function() {
	return f = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, f.apply(this, arguments);
};
function p(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function m(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? y : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? v({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : _({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, d = t.nsSeparator, m = d === void 0 ? ":" : d, _ = t.loggerEnvironment, v = _ === void 0 ? "browser" : _, y = p(s, m), b = y.i18nKey, x = y.namespace, S = x === void 0 ? a?.ns ?? t.defaultNS : x, C = S && n[S] || {}, w = h(C, g(r, C, b, t, i, a), t, a), T = typeof w == "object" ? JSON.parse(JSON.stringify(w)) : w, E = T === void 0 || typeof T == "object" && !Object.keys(T).length || T === "" && !c, D = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (E && (v === "both" || v === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: S,
			i18nKey: b
		}), E && Array.isArray(D) && D.length) {
			var O = D[0], k = D.slice(1);
			if (typeof O == "string") return u(O, i, f(f({}, a), { fallback: k }));
		}
		return E && a && a.hasOwnProperty("default") && !D?.length ? a.default ? l(a.default, i) : a.default : E ? s : l(T, i);
	};
	return u;
}
function h(e, t, n, r) {
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
function g(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (h(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (h(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (h(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return h(t, l, r, a) === void 0 ? n : l;
}
function _(e) {
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
function v(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && v({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = _({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function y(e) {
	var t = e.namespace, n = e.i18nKey;
	if (process.env.NODE_ENV !== "production") {
		if (!t) {
			console.warn(`[next-translate] The text "${n}" has no namespace in front of it.`);
			return;
		}
		console.warn(`[next-translate] "${t}:${n}" is missing in current namespace configuration. Try adding "${n}" to the namespace "${t}".`);
	}
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/createTranslation.js
function b(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, i = t.namespaces, a = t.config, o = a.localesToIgnore || ["default"], c = !n || o.includes(n), l = function() {
		return s(m({
			config: a,
			allNamespaces: i,
			pluralRules: d(c ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: u() ? l() : r(l, [e, n]),
		lang: n
	};
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/useTranslation.js
var x = function() {
	return x = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, x.apply(this, arguments);
};
function S(e) {
	var n = t(l);
	return r(function() {
		return x(x({}, n), { t: s(n.t, e) });
	}, [n, e]);
}
function C(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? b : S)(e);
}
//#endregion
//#region components/ThemeToggle.tsx
function w() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function T(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function E() {
	let { t: e } = C("common"), [t, r] = i("auto");
	n(() => {
		let e = w();
		r(e), T(e);
	}, []), n(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => T("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function o() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		r(e), T(e), window.localStorage.setItem("theme", e);
	}
	let s = e(t === "auto" ? "shared.themeToggle.themeModeAutoSystemClick" : t === "light" ? "shared.themeToggle.themeModeLightClick" : "shared.themeToggle.themeModeDarkClick");
	return /* @__PURE__ */ a("button", {
		type: "button",
		onClick: o,
		"aria-label": s,
		title: s,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "shared.themeToggle.themeAuto" : t === "dark" ? "shared.themeToggle.themeDark" : "shared.themeToggle.themeLight")
	});
}
//#endregion
export { E as default };

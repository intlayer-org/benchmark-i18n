import e, { Profiler as t, useContext as n, useEffect as r, useMemo as i } from "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/wrapTWithDefaultNs.js
var c = function() {
	return c = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, c.apply(this, arguments);
};
function l(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, c({ ns: t }, i));
	} : e;
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/context.js
var u;
typeof e.createContext == "function" && (u = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var d = u;
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/isServer.js
function f() {
	return typeof window > "u";
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/safePluralRules.js
function p(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/transCore.js
var m = function() {
	return m = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, m.apply(this, arguments);
};
function h(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function g(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? x : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? b({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : y({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, d = t.nsSeparator, f = d === void 0 ? ":" : d, p = t.loggerEnvironment, g = p === void 0 ? "browser" : p, y = h(s, f), b = y.i18nKey, x = y.namespace, S = x === void 0 ? a?.ns ?? t.defaultNS : x, C = S && n[S] || {}, w = _(C, v(r, C, b, t, i, a), t, a), T = typeof w == "object" ? JSON.parse(JSON.stringify(w)) : w, E = T === void 0 || typeof T == "object" && !Object.keys(T).length || T === "" && !c, D = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (E && (g === "both" || g === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: S,
			i18nKey: b
		}), E && Array.isArray(D) && D.length) {
			var O = D[0], k = D.slice(1);
			if (typeof O == "string") return u(O, i, m(m({}, a), { fallback: k }));
		}
		return E && a && a.hasOwnProperty("default") && !D?.length ? a.default ? l(a.default, i) : a.default : E ? s : l(T, i);
	};
	return u;
}
function _(e, t, n, r) {
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
function v(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (_(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (_(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (_(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return _(t, l, r, a) === void 0 ? n : l;
}
function y(e) {
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
function b(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && b({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = y({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function x(e) {
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
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/createTranslation.js
function S(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, a = t.config, o = a.localesToIgnore || ["default"], s = !n || o.includes(n), c = function() {
		return l(g({
			config: a,
			allNamespaces: r,
			pluralRules: p(s ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: f() ? c() : i(c, [e, n]),
		lang: n
	};
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/useTranslation.js
var C = function() {
	return C = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, C.apply(this, arguments);
};
function w(e) {
	var t = n(d);
	return i(function() {
		return C(C({}, t), { t: l(t.t, e) });
	}, [t, e]);
}
function T(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? S : w)(e);
}
//#endregion
//#region components/MockBanner.tsx
var E = () => {
	let { t: e } = T("common");
	return o("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("shared.mockBanner.text")
	});
};
//#endregion
//#region components/pages/settings/SettingsHeader.tsx
function D() {
	let { t: e } = T("common");
	return s(a, { children: [
		o(E, {}),
		o("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e("settings.settingsHeader.settings")
		}),
		o("p", {
			className: "mb-8 text-muted-foreground",
			children: e("settings.settingsHeader.manageYourAccountPreferences")
		})
	] });
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function O() {
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
function k(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region components/AppProviders.tsx
function A({ children: e, locale: n }) {
	return r(() => {
		document.documentElement.lang = n;
	}, [n]), r(() => {
		O();
	}, []), o(t, {
		id: "AppRoot",
		onRender: k,
		children: e
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function j({ children: e }) {
	return o(A, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region components/pages/settings/SettingsHeader.wrapper.tsx
function M() {
	return o(j, { children: o(D, {}) });
}
//#endregion
export { M as default };

import e, { Profiler as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/wrapTWithDefaultNs.js
var l = function() {
	return l = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, l.apply(this, arguments);
};
function u(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, l({ ns: t }, i));
	} : e;
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/context.js
var d;
typeof e.createContext == "function" && (d = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var f = d;
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/isServer.js
function p() {
	return typeof window > "u";
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/safePluralRules.js
function m(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/transCore.js
var h = function() {
	return h = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, h.apply(this, arguments);
};
function g(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function _(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? S : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? x({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : b({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, d = t.nsSeparator, f = d === void 0 ? ":" : d, p = t.loggerEnvironment, m = p === void 0 ? "browser" : p, _ = g(s, f), b = _.i18nKey, x = _.namespace, S = x === void 0 ? a?.ns ?? t.defaultNS : x, C = S && n[S] || {}, w = v(C, y(r, C, b, t, i, a), t, a), T = typeof w == "object" ? JSON.parse(JSON.stringify(w)) : w, E = T === void 0 || typeof T == "object" && !Object.keys(T).length || T === "" && !c, D = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (E && (m === "both" || m === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: S,
			i18nKey: b
		}), E && Array.isArray(D) && D.length) {
			var O = D[0], k = D.slice(1);
			if (typeof O == "string") return u(O, i, h(h({}, a), { fallback: k }));
		}
		return E && a && a.hasOwnProperty("default") && !D?.length ? a.default ? l(a.default, i) : a.default : E ? s : l(T, i);
	};
	return u;
}
function v(e, t, n, r) {
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
function y(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (v(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (v(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (v(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return v(t, l, r, a) === void 0 ? n : l;
}
function b(e) {
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
function x(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && x({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = b({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function S(e) {
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
function C(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, i = t.config, o = i.localesToIgnore || ["default"], s = !n || o.includes(n), c = function() {
		return u(_({
			config: i,
			allNamespaces: r,
			pluralRules: m(s ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: p() ? c() : a(c, [e, n]),
		lang: n
	};
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/useTranslation.js
var w = function() {
	return w = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, w.apply(this, arguments);
};
function T(e) {
	var t = n(f);
	return a(function() {
		return w(w({}, t), { t: u(t.t, e) });
	}, [t, e]);
}
function E(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? C : T)(e);
}
//#endregion
//#region hooks/usePerformanceMeasure.ts
function D(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), i(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
//#endregion
//#region components/pages/about/AboutHeader.tsx
function O() {
	let { t: e } = E("common");
	return D("AboutHeader"), c(o, { children: [s("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: e("about.aboutHeader.methodology")
	}), s("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: e("about.aboutHeader.weDesignedThisBenchmarkTo")
	})] });
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function k() {
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
function A(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region components/AppProviders.tsx
function j({ children: e, locale: n }) {
	return r(() => {
		document.documentElement.lang = n;
	}, [n]), r(() => {
		k();
	}, []), s(t, {
		id: "AppRoot",
		onRender: A,
		children: e
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function M({ children: e }) {
	return s(j, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region components/pages/about/AboutHeader.wrapper.tsx
function N() {
	return s(M, { children: s(O, {}) });
}
//#endregion
export { N as default };

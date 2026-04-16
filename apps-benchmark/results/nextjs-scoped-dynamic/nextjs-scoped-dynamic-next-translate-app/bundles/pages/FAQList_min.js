import e, { Profiler as t, useContext as n, useEffect as r, useMemo as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/wrapTWithDefaultNs.js
var s = function() {
	return s = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, s.apply(this, arguments);
};
function c(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, s({ ns: t }, i));
	} : e;
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/context.js
var l;
typeof e.createContext == "function" && (l = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var u = l;
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/isServer.js
function d() {
	return typeof window > "u";
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/safePluralRules.js
function f(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/transCore.js
var p = function() {
	return p = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, p.apply(this, arguments);
};
function m(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function h(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? b : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? y({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : v({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, d = t.nsSeparator, f = d === void 0 ? ":" : d, h = t.loggerEnvironment, v = h === void 0 ? "browser" : h, y = m(s, f), b = y.i18nKey, x = y.namespace, S = x === void 0 ? a?.ns ?? t.defaultNS : x, C = S && n[S] || {}, w = g(C, _(r, C, b, t, i, a), t, a), T = typeof w == "object" ? JSON.parse(JSON.stringify(w)) : w, E = T === void 0 || typeof T == "object" && !Object.keys(T).length || T === "" && !c, D = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (E && (v === "both" || v === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: S,
			i18nKey: b
		}), E && Array.isArray(D) && D.length) {
			var O = D[0], k = D.slice(1);
			if (typeof O == "string") return u(O, i, p(p({}, a), { fallback: k }));
		}
		return E && a && a.hasOwnProperty("default") && !D?.length ? a.default ? l(a.default, i) : a.default : E ? s : l(T, i);
	};
	return u;
}
function g(e, t, n, r) {
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
function _(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (g(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (g(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (g(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return g(t, l, r, a) === void 0 ? n : l;
}
function v(e) {
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
function y(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && y({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = v({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function b(e) {
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
function x(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, a = t.config, o = a.localesToIgnore || ["default"], s = !n || o.includes(n), l = function() {
		return c(h({
			config: a,
			allNamespaces: r,
			pluralRules: f(s ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: d() ? l() : i(l, [e, n]),
		lang: n
	};
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/useTranslation.js
var S = function() {
	return S = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, S.apply(this, arguments);
};
function C(e) {
	var t = n(u);
	return i(function() {
		return S(S({}, t), { t: c(t.t, e) });
	}, [t, e]);
}
function w(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? x : C)(e);
}
//#endregion
//#region components/pages/faq/FAQList.tsx
function T() {
	let { t: e } = w("common");
	return a("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: [
			{
				q: e("faq.faqList.howAreTheBenchmarks"),
				a: e("faq.faqList.allBenchmarksAreRun")
			},
			{
				q: e("faq.faqList.whatLibrariesAreCurrently"),
				a: e("faq.faqList.weCurrentlyBenchmarkReactI18next")
			},
			{
				q: e("faq.faqList.canIContributeA"),
				a: e("faq.faqList.absolutelyWeWelcomeCommunity")
			},
			{
				q: e("faq.faqList.howOftenAreResults"),
				a: e("faq.faqList.benchmarksRunAutomaticallyVia")
			},
			{
				q: e("faq.faqList.areTheResultsStatistically"),
				a: e("faq.faqList.yesWeUseThe")
			}
		].map((e) => o("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [a("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: e.q
			}), a("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: e.a
			})]
		}, e.q))
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function E() {
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
function D(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region components/AppProviders.tsx
function O({ children: e, locale: n }) {
	return r(() => {
		document.documentElement.lang = n;
	}, [n]), r(() => {
		E();
	}, []), a(t, {
		id: "AppRoot",
		onRender: D,
		children: e
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function k({ children: e }) {
	return a(O, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region components/pages/faq/FAQList.wrapper.tsx
function A() {
	return a(k, { children: a(T, {}) });
}
//#endregion
export { A as default };

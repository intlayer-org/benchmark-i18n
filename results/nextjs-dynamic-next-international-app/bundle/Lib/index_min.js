import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { jsxDEV as r } from "react/jsx-dev-runtime";
var i = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), a = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), o = i((() => {})), s = (0, i(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, c = Object.getOwnPropertySymbols, l = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable, f = (e, t, n) => t in e ? r(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n, p = (e, t) => {
		for (var n in t ||= {}) u.call(t, n) && f(e, n, t[n]);
		if (c) for (var n of c(t)) d.call(t, n) && f(e, n, t[n]);
		return e;
	}, m = (e, t) => {
		for (var n in t) r(e, n, {
			get: t[n],
			enumerable: !0
		});
	}, h = (e, t, n, a) => {
		if (t && typeof t == "object" || typeof t == "function") for (let o of s(t)) !u.call(e, o) && o !== n && r(e, o, {
			get: () => t[o],
			enumerable: !(a = i(t, o)) || a.enumerable
		});
		return e;
	}, g = (e, t, i) => (i = e == null ? {} : n(l(e)), h(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), _ = (e) => h(r({}, "__esModule", { value: !0 }), e), v = {};
	m(v, { createI18nClient: () => V }), t.exports = _(v), o();
	var y = a("next/navigation"), b = g(a("react")), x = (e, t = "") => Object.entries(e).reduce((e, [n, r]) => p(p({}, e), typeof r == "string" ? { [t + n]: r } : x(r, `${t}${n}.`)), {});
	function S(e, t) {
		return process.env.NODE_ENV !== "production" && console[e](`[next-international] ${t}`), null;
	}
	var C = (e) => S("warn", e), w = (e) => S("error", e), T = /* @__PURE__ */ new Map();
	function E(e, t, n) {
		function r({ locale: t, importLocale: r, children: i }) {
			let a = T.get(t) ?? (0, b.use)(r).default;
			T.has(t) || T.set(t, a);
			let o = (0, b.useMemo)(() => ({
				localeContent: x(a),
				fallbackLocale: n ? x(n) : void 0,
				locale: t
			}), [a, t]);
			return b.default.createElement(e.Provider, { value: o }, i);
		}
		return function({ locale: e, fallback: n, children: i }) {
			let a = t[e];
			return a || (w(`The locale '${e}' is not supported. Defined locales are: [${Object.keys(t).join(", ")}].`), (0, y.notFound)()), b.default.createElement(b.Suspense, { fallback: n }, b.default.createElement(r, {
				locale: e,
				importLocale: a()
			}, i));
		};
	}
	var D = a("react"), O = a("react"), k = a("react");
	function A(e, t) {
		let { localeContent: n, fallbackLocale: r } = e, i = r && typeof n == "string" ? r : Object.assign(r ?? {}, n), a = new Set(Object.keys(i).filter((e) => e.includes("#")).map((e) => e.split("#", 1)[0])), o = new Intl.PluralRules(e.locale);
		function s(e) {
			return e === 0 ? "zero" : o.select(e);
		}
		function c(e, ...n) {
			let r = n[0], o = !1;
			r && "count" in r && (t ? a.has(`${t}.${e}`) : a.has(e)) && (e = `${e}#${s(r.count)}`, o = !0);
			let c = t ? i[`${t}.${e}`] : i[e];
			if (!c && o) {
				let t = e.split("#", 1)[0];
				c = (i[`${t}#other`] || e)?.toString();
			} else c = (c || e)?.toString();
			if (!r) return c;
			let l = !0, u = c?.split(/({[^}]*})/).map((e, t) => {
				let n = e.match(/{(.*)}/);
				if (n) {
					let e = n[1], i = r[e];
					return (0, k.isValidElement)(i) ? (l = !1, (0, k.cloneElement)(i, { key: `${String(e)}-${t}` })) : i;
				}
				return e;
			});
			return l ? u?.join("") : u;
		}
		return c;
	}
	function j(e) {
		return function() {
			let t = (0, O.useContext)(e);
			if (!t) throw Error("`useI18n` must be used inside `I18nProvider`");
			return (0, O.useMemo)(() => A(t, void 0), [t]);
		};
	}
	var M = a("react");
	function N(e) {
		return function(t) {
			let n = (0, M.useContext)(e);
			if (!n) throw Error("`useI18n` must be used inside `I18nProvider`");
			return (0, M.useMemo)(() => A(n, t), [n, t]);
		};
	}
	var P = a("next/navigation");
	function F(e, t, n) {
		return function(r) {
			let { push: i, refresh: a } = (0, P.useRouter)(), o = e(), s = (0, P.usePathname)(), c = r?.preserveSearchParams ? (0, P.useSearchParams)().toString() : void 0, l = c ? `?${c}` : "", u = s;
			return n.basePath && (u = u.replace(n.basePath, "")), u.startsWith(`/${o}/`) ? u = u.replace(`/${o}/`, "/") : u === `/${o}` && (u = "/"), function(e) {
				if (e === o) return;
				let n = t[e];
				if (!n) {
					C(`The locale '${e}' is not supported. Defined locales are: [${Object.keys(t).join(", ")}].`);
					return;
				}
				n().then((t) => {
					T.set(e, t.default), i(`/${e}${u}${l}`), a();
				});
			};
		};
	}
	function I() {
		return function(e) {
			return e;
		};
	}
	var L = a("next/navigation"), R = a("react"), z = "locale";
	function B(e, t) {
		return function() {
			let n = (0, L.useParams)()[t.segmentName ?? z];
			return (0, R.useMemo)(() => {
				for (let t of e) if (n === t) return t;
				w(`Locale "${n}" not found in locales (${e.join(", ")}), returning "notFound()"`), (0, L.notFound)();
			}, [n]);
		};
	}
	function V(e, t = {}) {
		let n = Object.keys(e), r = (0, D.createContext)(null), i = B(n, t), a = E(r, e, t.fallbackLocale);
		return {
			useI18n: j(r),
			useScopedI18n: N(r),
			I18nProviderClient: a,
			I18nClientContext: r,
			useChangeLocale: F(i, e, t),
			defineLocale: I(),
			useCurrentLocale: i
		};
	}
	0 && (t.exports = { createI18nClient: V });
}))().createI18nClient)({
	en: () => import("./en-BWTLM3P1.js"),
	fr: () => import("./fr-DOkdQC8B.js"),
	es: () => import("./es-CwgLPlwN.js"),
	de: () => import("./de-DLCj-A0S.js"),
	it: () => import("./it-DdDR_SOd.js"),
	pt: () => import("./pt-0cvnCkG1.js"),
	zh: () => import("./zh-DcQYdncF.js"),
	ja: () => import("./ja-BvBjKrwS.js"),
	ko: () => import("./ko-BO3urTDG.js"),
	ru: () => import("./ru-CCiwUS4O.js")
});
function c() {
	return s.useI18n();
}
var { useScopedI18n: l, I18nProviderClient: u, useChangeLocale: d, useCurrentLocale: f } = s, p = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-international-app/scripts/EmptyComponent.tsx", m = () => (c(), null);
function h() {
	let e = f();
	return r(u, {
		locale: e,
		children: r(m, {}, void 0, !1, {
			fileName: p,
			lineNumber: 15,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: p,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
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
function _(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var v = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-international-app/components/AppProviders.tsx";
function y({ children: i, locale: a }) {
	let [o] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		_("AppRoot", o);
	}, [o]), e(() => {
		document.documentElement.lang = a;
	}, [a]), e(() => {
		g();
	}, []), r(u, {
		locale: a,
		children: i
	}, void 0, !1, {
		fileName: v,
		lineNumber: 30,
		columnNumber: 7
	}, this);
}
var b = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-international-app/scripts/Wrapper.tsx", x = "en";
function S({ children: e }) {
	return r(y, {
		locale: x,
		children: e
	}, void 0, !1, {
		fileName: b,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
var C = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-international-app/scripts/EmptyComponent.wrapper.tsx";
function w() {
	return r(S, { children: r(h, {}, void 0, !1, {
		fileName: C,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: C,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { w as default };
import { t as e } from "./flatten-DDFH6wLI.js";
import t from "../messages/de.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-DDFH6wLI.js";
import t from "../messages/en.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-DDFH6wLI.js";
import t from "../messages/es.json";
var n = e(t);
export { n as default };
function e(t, n = "") {
	let r = {};
	for (let i in t) {
		let a = n ? `${n}.${i}` : i;
		typeof t[i] == "object" && t[i] !== null ? Object.assign(r, e(t[i], a)) : r[a] = String(t[i]);
	}
	return r;
}
export { e as t };
import { t as e } from "./flatten-DDFH6wLI.js";
import t from "../messages/fr.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-DDFH6wLI.js";
import t from "../messages/it.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-DDFH6wLI.js";
import t from "../messages/ja.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-DDFH6wLI.js";
import t from "../messages/ko.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-DDFH6wLI.js";
import t from "../messages/pt.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-DDFH6wLI.js";
import t from "../messages/ru.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-DDFH6wLI.js";
import t from "../messages/zh.json";
var n = e(t);
export { n as default };

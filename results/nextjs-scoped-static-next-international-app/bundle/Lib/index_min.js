import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import r from "../locales/de.ts";
import i from "../locales/en.ts";
import a from "../locales/es.ts";
import o from "../locales/fr.ts";
import s from "../locales/it.ts";
import c from "../locales/ja.ts";
import l from "../locales/ko.ts";
import u from "../locales/pt.ts";
import d from "../locales/ru.ts";
import f from "../locales/zh.ts";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var m = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), h = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), g = m((() => {})), _ = (0, m(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getOwnPropertySymbols, s = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable, u = (e, t, n) => t in e ? r(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n, d = (e, t) => {
		for (var n in t ||= {}) c.call(t, n) && u(e, n, t[n]);
		if (o) for (var n of o(t)) l.call(t, n) && u(e, n, t[n]);
		return e;
	}, f = (e, t) => {
		for (var n in t) r(e, n, {
			get: t[n],
			enumerable: !0
		});
	}, p = (e, t, n, o) => {
		if (t && typeof t == "object" || typeof t == "function") for (let s of a(t)) !c.call(e, s) && s !== n && r(e, s, {
			get: () => t[s],
			enumerable: !(o = i(t, s)) || o.enumerable
		});
		return e;
	}, m = (e, t, i) => (i = e == null ? {} : n(s(e)), p(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), _ = (e) => p(r({}, "__esModule", { value: !0 }), e), v = {};
	f(v, { createI18nClient: () => V }), t.exports = _(v), g();
	var y = h("next/navigation"), b = m(h("react")), x = (e, t = "") => Object.entries(e).reduce((e, [n, r]) => d(d({}, e), typeof r == "string" ? { [t + n]: r } : x(r, `${t}${n}.`)), {});
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
	var D = h("react"), O = h("react"), k = h("react");
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
	var M = h("react");
	function N(e) {
		return function(t) {
			let n = (0, M.useContext)(e);
			if (!n) throw Error("`useI18n` must be used inside `I18nProvider`");
			return (0, M.useMemo)(() => A(n, t), [n, t]);
		};
	}
	var P = h("next/navigation");
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
	var L = h("next/navigation"), R = h("react"), z = "locale";
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
	en: () => Promise.resolve({ default: i }),
	fr: () => Promise.resolve({ default: o }),
	es: () => Promise.resolve({ default: a }),
	de: () => Promise.resolve({ default: r }),
	it: () => Promise.resolve({ default: s }),
	pt: () => Promise.resolve({ default: u }),
	zh: () => Promise.resolve({ default: f }),
	ja: () => Promise.resolve({ default: c }),
	ko: () => Promise.resolve({ default: l }),
	ru: () => Promise.resolve({ default: d })
}), v = _.useScopedI18n, { I18nProviderClient: y, useChangeLocale: b, useCurrentLocale: x } = _, S = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-international-app/scripts/EmptyComponent.tsx", C = () => (v("header"), null);
function w() {
	let e = x();
	return p(y, {
		locale: e,
		children: p(C, {}, void 0, !1, {
			fileName: S,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: S,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
function T() {
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
function E(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var D = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-international-app/components/AppProviders.tsx";
function O({ children: r, locale: i }) {
	let [a] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		E("AppRoot", a);
	}, [a]), e(() => {
		document.documentElement.lang = i;
	}, [i]), e(() => {
		T();
	}, []), p(y, {
		locale: i,
		children: r
	}, void 0, !1, {
		fileName: D,
		lineNumber: 30,
		columnNumber: 7
	}, this);
}
var k = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-international-app/scripts/Wrapper.tsx", A = "en";
function j({ children: e }) {
	return p(O, {
		locale: A,
		children: e
	}, void 0, !1, {
		fileName: k,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
var M = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-international-app/scripts/EmptyComponent.wrapper.tsx";
function N() {
	return p(j, { children: p(w, {}, void 0, !1, {
		fileName: M,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: M,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { N as default };

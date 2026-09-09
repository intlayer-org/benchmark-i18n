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
	en: () => import("./en-DIYX5nj9.js"),
	fr: () => import("./fr-CasHq4og.js"),
	es: () => import("./es-b0L9lZ98.js"),
	de: () => import("./de-CqAONIB7.js"),
	it: () => import("./it-YCXrqntH.js"),
	pt: () => import("./pt-oi5cbcQN.js"),
	zh: () => import("./zh-D9HG8cPB.js"),
	ja: () => import("./ja-B1S-GRLK.js"),
	ko: () => import("./ko-C6DeYIDJ.js"),
	ru: () => import("./ru-GMiu7d6N.js")
}), c = s.useScopedI18n, { I18nProviderClient: l, useChangeLocale: u, useCurrentLocale: d } = s, f = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-dynamic/next-international-app/scripts/EmptyComponent.tsx", p = () => (c("header"), null);
function m() {
	let e = d();
	return r(l, {
		locale: e,
		children: r(p, {}, void 0, !1, {
			fileName: f,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: f,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
function h() {
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
function g(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var _ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-dynamic/next-international-app/components/AppProviders.tsx";
function v({ children: i, locale: a }) {
	let [o] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		g("AppRoot", o);
	}, [o]), e(() => {
		document.documentElement.lang = a;
	}, [a]), e(() => {
		h();
	}, []), r(l, {
		locale: a,
		children: i
	}, void 0, !1, {
		fileName: _,
		lineNumber: 30,
		columnNumber: 7
	}, this);
}
var y = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-dynamic/next-international-app/scripts/Wrapper.tsx", b = "en";
function x({ children: e }) {
	return r(v, {
		locale: b,
		children: e
	}, void 0, !1, {
		fileName: y,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
var S = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-dynamic/next-international-app/scripts/EmptyComponent.wrapper.tsx";
function C() {
	return r(x, { children: r(m, {}, void 0, !1, {
		fileName: S,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: S,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { C as default };
import { n as e, t } from "./scopedMessages-DrpBZPpZ.js";
import n from "../messages/de/about.json";
import r from "../messages/de/blog.json";
import i from "../messages/de/careers.json";
import a from "../messages/de/contact.json";
import o from "../messages/de/faq.json";
import s from "../messages/de/home.json";
import c from "../messages/de/pricing.json";
import l from "../messages/de/products.json";
import u from "../messages/de/route.json";
import d from "../messages/de/settings.json";
import f from "../messages/de/shared.json";
import p from "../messages/de/team.json";
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
export { m as default };
import { n as e, t } from "./scopedMessages-DrpBZPpZ.js";
import n from "../messages/en/about.json";
import r from "../messages/en/blog.json";
import i from "../messages/en/careers.json";
import a from "../messages/en/contact.json";
import o from "../messages/en/faq.json";
import s from "../messages/en/home.json";
import c from "../messages/en/pricing.json";
import l from "../messages/en/products.json";
import u from "../messages/en/route.json";
import d from "../messages/en/settings.json";
import f from "../messages/en/shared.json";
import p from "../messages/en/team.json";
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
export { m as default };
import { n as e, t } from "./scopedMessages-DrpBZPpZ.js";
import n from "../messages/es/about.json";
import r from "../messages/es/blog.json";
import i from "../messages/es/careers.json";
import a from "../messages/es/contact.json";
import o from "../messages/es/faq.json";
import s from "../messages/es/home.json";
import c from "../messages/es/pricing.json";
import l from "../messages/es/products.json";
import u from "../messages/es/route.json";
import d from "../messages/es/settings.json";
import f from "../messages/es/shared.json";
import p from "../messages/es/team.json";
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
export { m as default };
import { n as e, t } from "./scopedMessages-DrpBZPpZ.js";
import n from "../messages/fr/about.json";
import r from "../messages/fr/blog.json";
import i from "../messages/fr/careers.json";
import a from "../messages/fr/contact.json";
import o from "../messages/fr/faq.json";
import s from "../messages/fr/home.json";
import c from "../messages/fr/pricing.json";
import l from "../messages/fr/products.json";
import u from "../messages/fr/route.json";
import d from "../messages/fr/settings.json";
import f from "../messages/fr/shared.json";
import p from "../messages/fr/team.json";
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
export { m as default };
import { n as e, t } from "./scopedMessages-DrpBZPpZ.js";
import n from "../messages/it/about.json";
import r from "../messages/it/blog.json";
import i from "../messages/it/careers.json";
import a from "../messages/it/contact.json";
import o from "../messages/it/faq.json";
import s from "../messages/it/home.json";
import c from "../messages/it/pricing.json";
import l from "../messages/it/products.json";
import u from "../messages/it/route.json";
import d from "../messages/it/settings.json";
import f from "../messages/it/shared.json";
import p from "../messages/it/team.json";
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
export { m as default };
import { n as e, t } from "./scopedMessages-DrpBZPpZ.js";
import n from "../messages/ja/about.json";
import r from "../messages/ja/blog.json";
import i from "../messages/ja/careers.json";
import a from "../messages/ja/contact.json";
import o from "../messages/ja/faq.json";
import s from "../messages/ja/home.json";
import c from "../messages/ja/pricing.json";
import l from "../messages/ja/products.json";
import u from "../messages/ja/route.json";
import d from "../messages/ja/settings.json";
import f from "../messages/ja/shared.json";
import p from "../messages/ja/team.json";
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
export { m as default };
import { n as e, t } from "./scopedMessages-DrpBZPpZ.js";
import n from "../messages/ko/about.json";
import r from "../messages/ko/blog.json";
import i from "../messages/ko/careers.json";
import a from "../messages/ko/contact.json";
import o from "../messages/ko/faq.json";
import s from "../messages/ko/home.json";
import c from "../messages/ko/pricing.json";
import l from "../messages/ko/products.json";
import u from "../messages/ko/route.json";
import d from "../messages/ko/settings.json";
import f from "../messages/ko/shared.json";
import p from "../messages/ko/team.json";
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
export { m as default };
import { n as e, t } from "./scopedMessages-DrpBZPpZ.js";
import n from "../messages/pt/about.json";
import r from "../messages/pt/blog.json";
import i from "../messages/pt/careers.json";
import a from "../messages/pt/contact.json";
import o from "../messages/pt/faq.json";
import s from "../messages/pt/home.json";
import c from "../messages/pt/pricing.json";
import l from "../messages/pt/products.json";
import u from "../messages/pt/route.json";
import d from "../messages/pt/settings.json";
import f from "../messages/pt/shared.json";
import p from "../messages/pt/team.json";
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
export { m as default };
import { n as e, t } from "./scopedMessages-DrpBZPpZ.js";
import n from "../messages/ru/about.json";
import r from "../messages/ru/blog.json";
import i from "../messages/ru/careers.json";
import a from "../messages/ru/contact.json";
import o from "../messages/ru/faq.json";
import s from "../messages/ru/home.json";
import c from "../messages/ru/pricing.json";
import l from "../messages/ru/products.json";
import u from "../messages/ru/route.json";
import d from "../messages/ru/settings.json";
import f from "../messages/ru/shared.json";
import p from "../messages/ru/team.json";
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
export { m as default };
function e(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) {
		let e = n.split("."), i = t;
		for (let t = 0; t < e.length - 1; t++) {
			let n = e[t], r = i[n];
			(typeof r != "object" || !r || Array.isArray(r)) && (i[n] = {}), i = i[n];
		}
		i[e[e.length - 1]] = r;
	}
	return t;
}
function t(e, n) {
	let r = { ...e };
	for (let [e, i] of Object.entries(n)) {
		let n = r[e];
		r[e] = typeof i == "object" && i && !Array.isArray(i) && typeof n == "object" && n && !Array.isArray(n) ? t(n, i) : i;
	}
	return r;
}
function n(e) {
	return e.reduce((e, n) => t(e, n), {});
}
export { e as n, n as t };
import { n as e, t } from "./scopedMessages-DrpBZPpZ.js";
import n from "../messages/zh/about.json";
import r from "../messages/zh/blog.json";
import i from "../messages/zh/careers.json";
import a from "../messages/zh/contact.json";
import o from "../messages/zh/faq.json";
import s from "../messages/zh/home.json";
import c from "../messages/zh/pricing.json";
import l from "../messages/zh/products.json";
import u from "../messages/zh/route.json";
import d from "../messages/zh/settings.json";
import f from "../messages/zh/shared.json";
import p from "../messages/zh/team.json";
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
export { m as default };

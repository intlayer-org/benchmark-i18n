import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import r from "../messages/en/about.json";
import i from "../messages/en/blog.json";
import a from "../messages/en/careers.json";
import o from "../messages/en/contact.json";
import s from "../messages/en/faq.json";
import c from "../messages/en/home.json";
import l from "../messages/en/pricing.json";
import u from "../messages/en/products.json";
import d from "../messages/en/route.json";
import f from "../messages/en/settings.json";
import p from "../messages/en/shared.json";
import m from "../messages/en/team.json";
import h from "../messages/fr/about.json";
import g from "../messages/fr/blog.json";
import _ from "../messages/fr/careers.json";
import v from "../messages/fr/contact.json";
import y from "../messages/fr/faq.json";
import b from "../messages/fr/home.json";
import x from "../messages/fr/pricing.json";
import S from "../messages/fr/products.json";
import C from "../messages/fr/route.json";
import w from "../messages/fr/settings.json";
import T from "../messages/fr/shared.json";
import E from "../messages/fr/team.json";
import D from "../messages/es/about.json";
import O from "../messages/es/blog.json";
import k from "../messages/es/careers.json";
import A from "../messages/es/contact.json";
import j from "../messages/es/faq.json";
import M from "../messages/es/home.json";
import N from "../messages/es/pricing.json";
import P from "../messages/es/products.json";
import F from "../messages/es/route.json";
import I from "../messages/es/settings.json";
import L from "../messages/es/shared.json";
import R from "../messages/es/team.json";
import z from "../messages/de/about.json";
import ee from "../messages/de/blog.json";
import te from "../messages/de/careers.json";
import ne from "../messages/de/contact.json";
import re from "../messages/de/faq.json";
import ie from "../messages/de/home.json";
import ae from "../messages/de/pricing.json";
import oe from "../messages/de/products.json";
import se from "../messages/de/route.json";
import ce from "../messages/de/settings.json";
import le from "../messages/de/shared.json";
import ue from "../messages/de/team.json";
import de from "../messages/it/about.json";
import B from "../messages/it/blog.json";
import V from "../messages/it/careers.json";
import H from "../messages/it/contact.json";
import fe from "../messages/it/faq.json";
import pe from "../messages/it/home.json";
import me from "../messages/it/pricing.json";
import he from "../messages/it/products.json";
import ge from "../messages/it/route.json";
import _e from "../messages/it/settings.json";
import ve from "../messages/it/shared.json";
import ye from "../messages/it/team.json";
import be from "../messages/pt/about.json";
import xe from "../messages/pt/blog.json";
import Se from "../messages/pt/careers.json";
import Ce from "../messages/pt/contact.json";
import we from "../messages/pt/faq.json";
import Te from "../messages/pt/home.json";
import Ee from "../messages/pt/pricing.json";
import De from "../messages/pt/products.json";
import Oe from "../messages/pt/route.json";
import ke from "../messages/pt/settings.json";
import Ae from "../messages/pt/shared.json";
import je from "../messages/pt/team.json";
import Me from "../messages/zh/about.json";
import Ne from "../messages/zh/blog.json";
import Pe from "../messages/zh/careers.json";
import Fe from "../messages/zh/contact.json";
import Ie from "../messages/zh/faq.json";
import Le from "../messages/zh/home.json";
import Re from "../messages/zh/pricing.json";
import ze from "../messages/zh/products.json";
import Be from "../messages/zh/route.json";
import Ve from "../messages/zh/settings.json";
import He from "../messages/zh/shared.json";
import Ue from "../messages/zh/team.json";
import We from "../messages/ja/about.json";
import Ge from "../messages/ja/blog.json";
import Ke from "../messages/ja/careers.json";
import qe from "../messages/ja/contact.json";
import Je from "../messages/ja/faq.json";
import Ye from "../messages/ja/home.json";
import Xe from "../messages/ja/pricing.json";
import Ze from "../messages/ja/products.json";
import Qe from "../messages/ja/route.json";
import $e from "../messages/ja/settings.json";
import et from "../messages/ja/shared.json";
import tt from "../messages/ja/team.json";
import nt from "../messages/ko/about.json";
import rt from "../messages/ko/blog.json";
import it from "../messages/ko/careers.json";
import at from "../messages/ko/contact.json";
import ot from "../messages/ko/faq.json";
import st from "../messages/ko/home.json";
import ct from "../messages/ko/pricing.json";
import lt from "../messages/ko/products.json";
import ut from "../messages/ko/route.json";
import dt from "../messages/ko/settings.json";
import ft from "../messages/ko/shared.json";
import pt from "../messages/ko/team.json";
import mt from "../messages/ru/about.json";
import ht from "../messages/ru/blog.json";
import gt from "../messages/ru/careers.json";
import _t from "../messages/ru/contact.json";
import vt from "../messages/ru/faq.json";
import yt from "../messages/ru/home.json";
import bt from "../messages/ru/pricing.json";
import xt from "../messages/ru/products.json";
import St from "../messages/ru/route.json";
import Ct from "../messages/ru/settings.json";
import wt from "../messages/ru/shared.json";
import Tt from "../messages/ru/team.json";
import { jsxDEV as U } from "react/jsx-dev-runtime";
var W = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), G = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), Et = W((() => {})), Dt = W(((e, t) => {
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
	}) : i, e)), h = (e) => p(r({}, "__esModule", { value: !0 }), e), g = {};
	f(g, { createI18nClient: () => z }), t.exports = h(g), Et();
	var _ = G("next/navigation"), v = m(G("react")), y = (e, t = "") => Object.entries(e).reduce((e, [n, r]) => d(d({}, e), typeof r == "string" ? { [t + n]: r } : y(r, `${t}${n}.`)), {});
	function b(e, t) {
		return process.env.NODE_ENV !== "production" && console[e](`[next-international] ${t}`), null;
	}
	var x = (e) => b("warn", e), S = (e) => b("error", e), C = /* @__PURE__ */ new Map();
	function w(e, t, n) {
		function r({ locale: t, importLocale: r, children: i }) {
			let a = C.get(t) ?? (0, v.use)(r).default;
			C.has(t) || C.set(t, a);
			let o = (0, v.useMemo)(() => ({
				localeContent: y(a),
				fallbackLocale: n ? y(n) : void 0,
				locale: t
			}), [a, t]);
			return v.default.createElement(e.Provider, { value: o }, i);
		}
		return function({ locale: e, fallback: n, children: i }) {
			let a = t[e];
			return a || (S(`The locale '${e}' is not supported. Defined locales are: [${Object.keys(t).join(", ")}].`), (0, _.notFound)()), v.default.createElement(v.Suspense, { fallback: n }, v.default.createElement(r, {
				locale: e,
				importLocale: a()
			}, i));
		};
	}
	var T = G("react"), E = G("react"), D = G("react");
	function O(e, t) {
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
					return (0, D.isValidElement)(i) ? (l = !1, (0, D.cloneElement)(i, { key: `${String(e)}-${t}` })) : i;
				}
				return e;
			});
			return l ? u?.join("") : u;
		}
		return c;
	}
	function k(e) {
		return function() {
			let t = (0, E.useContext)(e);
			if (!t) throw Error("`useI18n` must be used inside `I18nProvider`");
			return (0, E.useMemo)(() => O(t, void 0), [t]);
		};
	}
	var A = G("react");
	function j(e) {
		return function(t) {
			let n = (0, A.useContext)(e);
			if (!n) throw Error("`useI18n` must be used inside `I18nProvider`");
			return (0, A.useMemo)(() => O(n, t), [n, t]);
		};
	}
	var M = G("next/navigation");
	function N(e, t, n) {
		return function(r) {
			let { push: i, refresh: a } = (0, M.useRouter)(), o = e(), s = (0, M.usePathname)(), c = r?.preserveSearchParams ? (0, M.useSearchParams)().toString() : void 0, l = c ? `?${c}` : "", u = s;
			return n.basePath && (u = u.replace(n.basePath, "")), u.startsWith(`/${o}/`) ? u = u.replace(`/${o}/`, "/") : u === `/${o}` && (u = "/"), function(e) {
				if (e === o) return;
				let n = t[e];
				if (!n) {
					x(`The locale '${e}' is not supported. Defined locales are: [${Object.keys(t).join(", ")}].`);
					return;
				}
				n().then((t) => {
					C.set(e, t.default), i(`/${e}${u}${l}`), a();
				});
			};
		};
	}
	function P() {
		return function(e) {
			return e;
		};
	}
	var F = G("next/navigation"), I = G("react"), L = "locale";
	function R(e, t) {
		return function() {
			let n = (0, F.useParams)()[t.segmentName ?? L];
			return (0, I.useMemo)(() => {
				for (let t of e) if (n === t) return t;
				S(`Locale "${n}" not found in locales (${e.join(", ")}), returning "notFound()"`), (0, F.notFound)();
			}, [n]);
		};
	}
	function z(e, t = {}) {
		let n = Object.keys(e), r = (0, T.createContext)(null), i = R(n, t), a = w(r, e, t.fallbackLocale);
		return {
			useI18n: k(r),
			useScopedI18n: j(r),
			I18nProviderClient: a,
			I18nClientContext: r,
			useChangeLocale: N(i, e, t),
			defineLocale: P(),
			useCurrentLocale: i
		};
	}
	0 && (t.exports = { createI18nClient: z });
}))(), Ot = [
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"home",
	"pricing",
	"products",
	"route",
	"settings",
	"shared",
	"team"
], K = {
	en: {
		about: r,
		blog: i,
		careers: a,
		contact: o,
		faq: s,
		home: c,
		pricing: l,
		products: u,
		route: d,
		settings: f,
		shared: p,
		team: m
	},
	fr: {
		about: h,
		blog: g,
		careers: _,
		contact: v,
		faq: y,
		home: b,
		pricing: x,
		products: S,
		route: C,
		settings: w,
		shared: T,
		team: E
	},
	es: {
		about: D,
		blog: O,
		careers: k,
		contact: A,
		faq: j,
		home: M,
		pricing: N,
		products: P,
		route: F,
		settings: I,
		shared: L,
		team: R
	},
	de: {
		about: z,
		blog: ee,
		careers: te,
		contact: ne,
		faq: re,
		home: ie,
		pricing: ae,
		products: oe,
		route: se,
		settings: ce,
		shared: le,
		team: ue
	},
	it: {
		about: de,
		blog: B,
		careers: V,
		contact: H,
		faq: fe,
		home: pe,
		pricing: me,
		products: he,
		route: ge,
		settings: _e,
		shared: ve,
		team: ye
	},
	pt: {
		about: be,
		blog: xe,
		careers: Se,
		contact: Ce,
		faq: we,
		home: Te,
		pricing: Ee,
		products: De,
		route: Oe,
		settings: ke,
		shared: Ae,
		team: je
	},
	zh: {
		about: Me,
		blog: Ne,
		careers: Pe,
		contact: Fe,
		faq: Ie,
		home: Le,
		pricing: Re,
		products: ze,
		route: Be,
		settings: Ve,
		shared: He,
		team: Ue
	},
	ja: {
		about: We,
		blog: Ge,
		careers: Ke,
		contact: qe,
		faq: Je,
		home: Ye,
		pricing: Xe,
		products: Ze,
		route: Qe,
		settings: $e,
		shared: et,
		team: tt
	},
	ko: {
		about: nt,
		blog: rt,
		careers: it,
		contact: at,
		faq: ot,
		home: st,
		pricing: ct,
		products: lt,
		route: ut,
		settings: dt,
		shared: ft,
		team: pt
	},
	ru: {
		about: mt,
		blog: ht,
		careers: gt,
		contact: _t,
		faq: vt,
		home: yt,
		pricing: bt,
		products: xt,
		route: St,
		settings: Ct,
		shared: wt,
		team: Tt
	}
};
function kt(e) {
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
function q(e, t) {
	let n = { ...e };
	for (let [e, r] of Object.entries(t)) {
		let t = n[e];
		n[e] = typeof r == "object" && r && !Array.isArray(r) && typeof t == "object" && t && !Array.isArray(t) ? q(t, r) : r;
	}
	return n;
}
function At(e) {
	return e.reduce((e, t) => q(e, t), {});
}
function jt(e, t) {
	let n = K[e] ?? K.en, r = new Set(t);
	r.add("shared");
	let i = [];
	for (let e of r) {
		let t = n[e];
		t && i.push(kt(t));
	}
	return At(i);
}
function J(e) {
	return jt(e, Ot);
}
var Mt = J("de"), Nt = J("en"), Pt = J("es"), Ft = J("fr"), It = J("it"), Y = J("ja"), Lt = J("ko"), Rt = J("pt"), zt = J("ru"), Bt = J("zh"), X = (0, Dt.createI18nClient)({
	en: () => Promise.resolve({ default: Nt }),
	fr: () => Promise.resolve({ default: Ft }),
	es: () => Promise.resolve({ default: Pt }),
	de: () => Promise.resolve({ default: Mt }),
	it: () => Promise.resolve({ default: It }),
	pt: () => Promise.resolve({ default: Rt }),
	zh: () => Promise.resolve({ default: Bt }),
	ja: () => Promise.resolve({ default: Y }),
	ko: () => Promise.resolve({ default: Lt }),
	ru: () => Promise.resolve({ default: zt })
}), Vt = X.useScopedI18n, { I18nProviderClient: Z, useChangeLocale: Ht, useCurrentLocale: Ut } = X, Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-international-app/scripts/EmptyComponent.tsx", Wt = () => (Vt("header"), null);
function Gt() {
	let e = Ut();
	return U(Z, {
		locale: e,
		children: U(Wt, {}, void 0, !1, {
			fileName: Q,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
function Kt() {
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
function qt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Jt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-international-app/components/AppProviders.tsx";
function Yt({ children: r, locale: i }) {
	let [a] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		qt("AppRoot", a);
	}, [a]), e(() => {
		document.documentElement.lang = i;
	}, [i]), e(() => {
		Kt();
	}, []), U(Z, {
		locale: i,
		children: r
	}, void 0, !1, {
		fileName: Jt,
		lineNumber: 30,
		columnNumber: 7
	}, this);
}
var Xt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-international-app/scripts/Wrapper.tsx", Zt = "en";
function Qt({ children: e }) {
	return U(Yt, {
		locale: Zt,
		children: e
	}, void 0, !1, {
		fileName: Xt,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-international-app/scripts/EmptyComponent.wrapper.tsx";
function $t() {
	return U(Qt, { children: U(Gt, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { $t as default };

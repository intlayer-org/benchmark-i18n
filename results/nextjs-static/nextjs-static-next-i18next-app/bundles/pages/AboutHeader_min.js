"use client";
import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), f = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), p = (e, t, n, r) => {
	let i = [n, {
		code: t,
		...r || {}
	}];
	if (e?.services?.logger?.forward) return e.services.logger.forward(i, "warn", "react-i18next::", !0);
	b(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...i) : console?.warn && console.warn(...i);
}, m = {}, h = (e, t, n, r) => {
	b(n) && m[n] || (b(n) && (m[n] = /* @__PURE__ */ new Date()), p(e, t, n, r));
}, g = (e, t) => () => {
	if (e.isInitialized) t();
	else {
		let n = () => {
			setTimeout(() => {
				e.off("initialized", n);
			}, 0), t();
		};
		e.on("initialized", n);
	}
}, _ = (e, t, n) => {
	e.loadNamespaces(t, g(e, n));
}, v = (e, t, n, r) => {
	if (b(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return _(e, n, r);
	n.forEach((t) => {
		e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
	}), e.loadLanguages(t, g(e, r));
}, y = (e, t, n = {}) => !t.languages || !t.languages.length ? (h(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: t.languages }), !0) : t.hasLoadedNamespace(e, {
	lng: n.lng,
	precheck: (t, r) => {
		if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1;
	}
}), b = (e) => typeof e == "string", x = (e) => typeof e == "object" && !!e, S = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, C = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#39;": "'",
	"&quot;": "\"",
	"&#34;": "\"",
	"&nbsp;": " ",
	"&#160;": " ",
	"&copy;": "©",
	"&#169;": "©",
	"&reg;": "®",
	"&#174;": "®",
	"&hellip;": "…",
	"&#8230;": "…",
	"&#x2F;": "/",
	"&#47;": "/"
}, w = (e) => C[e], T = {
	bindI18n: "languageChanged",
	bindI18nStore: "",
	transEmptyNodeValue: "",
	transSupportBasicHtmlNodes: !0,
	transWrapTextNodes: "",
	transKeepBasicHtmlNodesFor: [
		"br",
		"strong",
		"i",
		"p"
	],
	useSuspense: !0,
	unescape: (e) => e.replace(S, w),
	transDefaultProps: void 0
}, E = () => T, D, O = () => D, k = e(), A = class {
	constructor() {
		this.usedNamespaces = {};
	}
	addUsedNamespaces(e) {
		e.forEach((e) => {
			this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
		});
	}
	getUsedNamespaces() {
		return Object.keys(this.usedNamespaces);
	}
}, j = /* @__PURE__ */ d(((e) => {
	var t = f("react");
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), M = /* @__PURE__ */ d(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			d || a.startTransition === void 0 || (d = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!p) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), p = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var f = i[0].inst, m = i[1];
			return l(function() {
				f.value = n, f.getSnapshot = t, r(f) && m({ inst: f });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(f) && m({ inst: f }), e(function() {
					r(f) && m({ inst: f });
				});
			}, [e]), u(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !o(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = f("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, d = !1, p = !1, m = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? m : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), N = (/* @__PURE__ */ d(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = j() : t.exports = M();
})))(), P = {
	t: (e, t) => {
		if (b(t)) return t;
		if (x(t) && b(t.defaultValue)) return t.defaultValue;
		if (typeof e == "function") return "";
		if (Array.isArray(e)) {
			let t = e[e.length - 1];
			return typeof t == "function" ? "" : t;
		}
		return e;
	},
	ready: !1
}, F = () => () => {}, I = (e, i = {}) => {
	let { i18n: c } = i, { i18n: l, defaultNS: u } = n(k) || {}, d = c || l || O();
	d && !d.reportNamespaces && (d.reportNamespaces = new A()), d || h(d, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
	let f = a(() => ({
		...E(),
		...d?.options?.react,
		...i
	}), [d, i]), { useSuspense: p, keyPrefix: m } = f, g = e || u || d?.options?.defaultNS, x = b(g) ? [g] : g || ["translation"], S = a(() => x, x);
	d?.reportNamespaces?.addUsedNamespaces?.(S);
	let C = o(0), w = t((e) => {
		if (!d) return F;
		let { bindI18n: t, bindI18nStore: n } = f, r = () => {
			C.current += 1, e();
		};
		return t && d.on(t, r), n && d.store.on(n, r), () => {
			t && t.split(" ").forEach((e) => d.off(e, r)), n && n.split(" ").forEach((e) => d.store.off(e, r));
		};
	}, [d, f]), T = o(), D = t(() => {
		if (!d) return P;
		let e = !!(d.isInitialized || d.initializedStoreOnce) && S.every((e) => y(e, d, f)), t = i.lng || d.language, n = C.current, r = T.current;
		if (r && r.ready === e && r.lng === t && r.keyPrefix === m && r.revision === n) return r;
		let a = {
			t: d.getFixedT(t, f.nsMode === "fallback" ? S : S[0], m),
			ready: e,
			lng: t,
			keyPrefix: m,
			revision: n
		};
		return T.current = a, a;
	}, [
		d,
		S,
		m,
		f,
		i.lng
	]), [j, M] = s(0), { t: I, ready: L } = (0, N.useSyncExternalStore)(w, D, D);
	r(() => {
		if (d && !L && !p) {
			let e = () => M((e) => e + 1);
			i.lng ? v(d, i.lng, S, e) : _(d, S, e);
		}
	}, [
		d,
		i.lng,
		S,
		L,
		p,
		j
	]);
	let R = d || {}, z = o(null), B = o(), V = (e) => {
		let t = Object.getOwnPropertyDescriptors(e);
		t.__original && delete t.__original;
		let n = Object.create(Object.getPrototypeOf(e), t);
		if (!Object.prototype.hasOwnProperty.call(n, "__original")) try {
			Object.defineProperty(n, "__original", {
				value: e,
				writable: !1,
				enumerable: !1,
				configurable: !1
			});
		} catch {}
		return n;
	}, H = a(() => {
		let e = R, t = e?.language, n = e;
		e && (z.current && z.current.__original === e && B.current === t ? n = z.current : (n = V(e), z.current = n, B.current = t));
		let r = !L && !p ? (...e) => (h(d, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."), I(...e)) : I, i = [
			r,
			n,
			L
		];
		return i.t = r, i.i18n = n, i.ready = L, i;
	}, [
		I,
		R,
		L,
		R.resolvedLanguage,
		R.language,
		R.languages
	]);
	if (d && p && !L) throw new Promise((e) => {
		let t = () => e();
		i.lng ? v(d, i.lng, S, t) : _(d, S, t);
	});
	return H;
};
//#endregion
//#region hooks/usePerformanceMeasure.ts
function L(e) {
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
function R() {
	let { t: e } = I();
	return L("AboutHeader"), /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: e("about.aboutHeader.methodology")
	}), /* @__PURE__ */ l("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: e("about.aboutHeader.weDesignedThisBenchmarkTo")
	})] });
}
//#endregion
export { R as default };

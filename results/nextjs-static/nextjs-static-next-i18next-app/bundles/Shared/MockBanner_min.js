"use client";
import { createContext as e, useCallback as t, useContext as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), l = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), u = (e, t, n, r) => {
	let i = [n, {
		code: t,
		...r || {}
	}];
	if (e?.services?.logger?.forward) return e.services.logger.forward(i, "warn", "react-i18next::", !0);
	_(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...i) : console?.warn && console.warn(...i);
}, d = {}, f = (e, t, n, r) => {
	_(n) && d[n] || (_(n) && (d[n] = /* @__PURE__ */ new Date()), u(e, t, n, r));
}, p = (e, t) => () => {
	if (e.isInitialized) t();
	else {
		let n = () => {
			setTimeout(() => {
				e.off("initialized", n);
			}, 0), t();
		};
		e.on("initialized", n);
	}
}, m = (e, t, n) => {
	e.loadNamespaces(t, p(e, n));
}, h = (e, t, n, r) => {
	if (_(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return m(e, n, r);
	n.forEach((t) => {
		e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
	}), e.loadLanguages(t, p(e, r));
}, g = (e, t, n = {}) => !t.languages || !t.languages.length ? (f(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: t.languages }), !0) : t.hasLoadedNamespace(e, {
	lng: n.lng,
	precheck: (t, r) => {
		if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1;
	}
}), _ = (e) => typeof e == "string", v = (e) => typeof e == "object" && !!e, y = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, b = {
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
}, x = (e) => b[e], S = {
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
	unescape: (e) => e.replace(y, x),
	transDefaultProps: void 0
}, C = () => S, w, T = () => w, E = e(), D = class {
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
}, O = /* @__PURE__ */ c(((e) => {
	var t = l("react");
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, l = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, u(c) && l({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return u(c) && l({ inst: c }), e(function() {
				u(c) && l({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function u(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function d(e, t) {
		return t();
	}
	var f = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? d : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
})), k = /* @__PURE__ */ c(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			f || a.startTransition === void 0 || (f = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!p) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), p = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var l = i[0].inst, m = i[1];
			return u(function() {
				l.value = n, l.getSnapshot = t, r(l) && m({ inst: l });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(l) && m({ inst: l }), e(function() {
					r(l) && m({ inst: l });
				});
			}, [e]), d(n), n;
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
		var a = l("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, u = a.useLayoutEffect, d = a.useDebugValue, f = !1, p = !1, m = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? m : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), A = (/* @__PURE__ */ c(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = O() : t.exports = k();
})))(), j = {
	t: (e, t) => {
		if (_(t)) return t;
		if (v(t) && _(t.defaultValue)) return t.defaultValue;
		if (typeof e == "function") return "";
		if (Array.isArray(e)) {
			let t = e[e.length - 1];
			return typeof t == "function" ? "" : t;
		}
		return e;
	},
	ready: !1
}, M = () => () => {}, N = (e, s = {}) => {
	let { i18n: c } = s, { i18n: l, defaultNS: u } = n(E) || {}, d = c || l || T();
	d && !d.reportNamespaces && (d.reportNamespaces = new D()), d || f(d, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
	let p = i(() => ({
		...C(),
		...d?.options?.react,
		...s
	}), [d, s]), { useSuspense: v, keyPrefix: y } = p, b = e || u || d?.options?.defaultNS, x = _(b) ? [b] : b || ["translation"], S = i(() => x, x);
	d?.reportNamespaces?.addUsedNamespaces?.(S);
	let w = a(0), O = t((e) => {
		if (!d) return M;
		let { bindI18n: t, bindI18nStore: n } = p, r = () => {
			w.current += 1, e();
		};
		return t && d.on(t, r), n && d.store.on(n, r), () => {
			t && t.split(" ").forEach((e) => d.off(e, r)), n && n.split(" ").forEach((e) => d.store.off(e, r));
		};
	}, [d, p]), k = a(), N = t(() => {
		if (!d) return j;
		let e = !!(d.isInitialized || d.initializedStoreOnce) && S.every((e) => g(e, d, p)), t = s.lng || d.language, n = w.current, r = k.current;
		if (r && r.ready === e && r.lng === t && r.keyPrefix === y && r.revision === n) return r;
		let i = {
			t: d.getFixedT(t, p.nsMode === "fallback" ? S : S[0], y),
			ready: e,
			lng: t,
			keyPrefix: y,
			revision: n
		};
		return k.current = i, i;
	}, [
		d,
		S,
		y,
		p,
		s.lng
	]), [P, F] = o(0), { t: I, ready: L } = (0, A.useSyncExternalStore)(O, N, N);
	r(() => {
		if (d && !L && !v) {
			let e = () => F((e) => e + 1);
			s.lng ? h(d, s.lng, S, e) : m(d, S, e);
		}
	}, [
		d,
		s.lng,
		S,
		L,
		v,
		P
	]);
	let R = d || {}, z = a(null), B = a(), V = (e) => {
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
	}, H = i(() => {
		let e = R, t = e?.language, n = e;
		e && (z.current && z.current.__original === e && B.current === t ? n = z.current : (n = V(e), z.current = n, B.current = t));
		let r = !L && !v ? (...e) => (f(d, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."), I(...e)) : I, i = [
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
	if (d && v && !L) throw new Promise((e) => {
		let t = () => e();
		s.lng ? h(d, s.lng, S, t) : m(d, S, t);
	});
	return H;
}, P = () => {
	let { t: e } = N();
	return /* @__PURE__ */ s("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("shared.mockBanner.text")
	});
};
//#endregion
export { P as default };

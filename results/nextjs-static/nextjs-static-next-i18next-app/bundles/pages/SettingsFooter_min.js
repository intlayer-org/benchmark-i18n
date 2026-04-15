"use client";
import { createContext as e, useCallback as t, useContext as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), u = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), d = (e, t, n, r) => {
	let i = [n, {
		code: t,
		...r || {}
	}];
	if (e?.services?.logger?.forward) return e.services.logger.forward(i, "warn", "react-i18next::", !0);
	v(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...i) : console?.warn && console.warn(...i);
}, f = {}, p = (e, t, n, r) => {
	v(n) && f[n] || (v(n) && (f[n] = /* @__PURE__ */ new Date()), d(e, t, n, r));
}, m = (e, t) => () => {
	if (e.isInitialized) t();
	else {
		let n = () => {
			setTimeout(() => {
				e.off("initialized", n);
			}, 0), t();
		};
		e.on("initialized", n);
	}
}, h = (e, t, n) => {
	e.loadNamespaces(t, m(e, n));
}, g = (e, t, n, r) => {
	if (v(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return h(e, n, r);
	n.forEach((t) => {
		e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
	}), e.loadLanguages(t, m(e, r));
}, _ = (e, t, n = {}) => !t.languages || !t.languages.length ? (p(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: t.languages }), !0) : t.hasLoadedNamespace(e, {
	lng: n.lng,
	precheck: (t, r) => {
		if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1;
	}
}), v = (e) => typeof e == "string", y = (e) => typeof e == "object" && !!e, b = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, x = {
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
}, S = (e) => x[e], C = {
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
	unescape: (e) => e.replace(b, S),
	transDefaultProps: void 0
}, w = () => C, T, E = () => T, D = e(), O = class {
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
}, k = /* @__PURE__ */ l(((e) => {
	var t = u("react");
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
	function d(e, t) {
		return t();
	}
	var f = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? d : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
})), A = /* @__PURE__ */ l(((e) => {
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
			var u = i[0].inst, m = i[1];
			return l(function() {
				u.value = n, u.getSnapshot = t, r(u) && m({ inst: u });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(u) && m({ inst: u }), e(function() {
					r(u) && m({ inst: u });
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
		var a = u("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, d = a.useDebugValue, f = !1, p = !1, m = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? m : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), j = (/* @__PURE__ */ l(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = k() : t.exports = A();
})))(), M = {
	t: (e, t) => {
		if (v(t)) return t;
		if (y(t) && v(t.defaultValue)) return t.defaultValue;
		if (typeof e == "function") return "";
		if (Array.isArray(e)) {
			let t = e[e.length - 1];
			return typeof t == "function" ? "" : t;
		}
		return e;
	},
	ready: !1
}, N = () => () => {}, P = (e, s = {}) => {
	let { i18n: c } = s, { i18n: l, defaultNS: u } = n(D) || {}, d = c || l || E();
	d && !d.reportNamespaces && (d.reportNamespaces = new O()), d || p(d, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
	let f = i(() => ({
		...w(),
		...d?.options?.react,
		...s
	}), [d, s]), { useSuspense: m, keyPrefix: y } = f, b = e || u || d?.options?.defaultNS, x = v(b) ? [b] : b || ["translation"], S = i(() => x, x);
	d?.reportNamespaces?.addUsedNamespaces?.(S);
	let C = a(0), T = t((e) => {
		if (!d) return N;
		let { bindI18n: t, bindI18nStore: n } = f, r = () => {
			C.current += 1, e();
		};
		return t && d.on(t, r), n && d.store.on(n, r), () => {
			t && t.split(" ").forEach((e) => d.off(e, r)), n && n.split(" ").forEach((e) => d.store.off(e, r));
		};
	}, [d, f]), k = a(), A = t(() => {
		if (!d) return M;
		let e = !!(d.isInitialized || d.initializedStoreOnce) && S.every((e) => _(e, d, f)), t = s.lng || d.language, n = C.current, r = k.current;
		if (r && r.ready === e && r.lng === t && r.keyPrefix === y && r.revision === n) return r;
		let i = {
			t: d.getFixedT(t, f.nsMode === "fallback" ? S : S[0], y),
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
		f,
		s.lng
	]), [P, F] = o(0), { t: I, ready: L } = (0, j.useSyncExternalStore)(T, A, A);
	r(() => {
		if (d && !L && !m) {
			let e = () => F((e) => e + 1);
			s.lng ? g(d, s.lng, S, e) : h(d, S, e);
		}
	}, [
		d,
		s.lng,
		S,
		L,
		m,
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
		let r = !L && !m ? (...e) => (p(d, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."), I(...e)) : I, i = [
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
	if (d && m && !L) throw new Promise((e) => {
		let t = () => e();
		s.lng ? g(d, s.lng, S, t) : h(d, S, t);
	});
	return H;
};
//#endregion
//#region components/pages/settings/SettingsFooter.tsx
function F() {
	let { t: e } = P();
	return /* @__PURE__ */ c("div", {
		className: "flex justify-end gap-3",
		children: [/* @__PURE__ */ s("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: e("settings.settingsFooter.cancel")
		}), /* @__PURE__ */ s("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: e("settings.settingsFooter.saveChanges")
		})]
	});
}
//#endregion
export { F as default };

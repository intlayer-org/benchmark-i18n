"use client";
import { createContext as e, useCallback as t, useContext as n, useEffect as r, useId as i, useMemo as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), d = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), f = (e, t, n, r) => {
	let i = [n, {
		code: t,
		...r || {}
	}];
	if (e?.services?.logger?.forward) return e.services.logger.forward(i, "warn", "react-i18next::", !0);
	y(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...i) : console?.warn && console.warn(...i);
}, p = {}, m = (e, t, n, r) => {
	y(n) && p[n] || (y(n) && (p[n] = /* @__PURE__ */ new Date()), f(e, t, n, r));
}, h = (e, t) => () => {
	if (e.isInitialized) t();
	else {
		let n = () => {
			setTimeout(() => {
				e.off("initialized", n);
			}, 0), t();
		};
		e.on("initialized", n);
	}
}, g = (e, t, n) => {
	e.loadNamespaces(t, h(e, n));
}, _ = (e, t, n, r) => {
	if (y(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return g(e, n, r);
	n.forEach((t) => {
		e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
	}), e.loadLanguages(t, h(e, r));
}, v = (e, t, n = {}) => !t.languages || !t.languages.length ? (m(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: t.languages }), !0) : t.hasLoadedNamespace(e, {
	lng: n.lng,
	precheck: (t, r) => {
		if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1;
	}
}), y = (e) => typeof e == "string", b = (e) => typeof e == "object" && !!e, x = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, S = {
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
}, C = (e) => S[e], w = {
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
	unescape: (e) => e.replace(x, C),
	transDefaultProps: void 0
}, T = () => w, E, D = () => E, O = e(), k = class {
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
}, A = /* @__PURE__ */ u(((e) => {
	var t = d("react");
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
	var f = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
})), j = /* @__PURE__ */ u(((e) => {
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
			var d = i[0].inst, m = i[1];
			return l(function() {
				d.value = n, d.getSnapshot = t, r(d) && m({ inst: d });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(d) && m({ inst: d }), e(function() {
					r(d) && m({ inst: d });
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
		var a = d("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, f = !1, p = !1, m = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? m : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), M = (/* @__PURE__ */ u(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = A() : t.exports = j();
})))(), N = {
	t: (e, t) => {
		if (y(t)) return t;
		if (b(t) && y(t.defaultValue)) return t.defaultValue;
		if (typeof e == "function") return "";
		if (Array.isArray(e)) {
			let t = e[e.length - 1];
			return typeof t == "function" ? "" : t;
		}
		return e;
	},
	ready: !1
}, P = () => () => {}, F = (e, i = {}) => {
	let { i18n: c } = i, { i18n: l, defaultNS: u } = n(O) || {}, d = c || l || D();
	d && !d.reportNamespaces && (d.reportNamespaces = new k()), d || m(d, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
	let f = a(() => ({
		...T(),
		...d?.options?.react,
		...i
	}), [d, i]), { useSuspense: p, keyPrefix: h } = f, b = e || u || d?.options?.defaultNS, x = y(b) ? [b] : b || ["translation"], S = a(() => x, x);
	d?.reportNamespaces?.addUsedNamespaces?.(S);
	let C = o(0), w = t((e) => {
		if (!d) return P;
		let { bindI18n: t, bindI18nStore: n } = f, r = () => {
			C.current += 1, e();
		};
		return t && d.on(t, r), n && d.store.on(n, r), () => {
			t && t.split(" ").forEach((e) => d.off(e, r)), n && n.split(" ").forEach((e) => d.store.off(e, r));
		};
	}, [d, f]), E = o(), A = t(() => {
		if (!d) return N;
		let e = !!(d.isInitialized || d.initializedStoreOnce) && S.every((e) => v(e, d, f)), t = i.lng || d.language, n = C.current, r = E.current;
		if (r && r.ready === e && r.lng === t && r.keyPrefix === h && r.revision === n) return r;
		let a = {
			t: d.getFixedT(t, f.nsMode === "fallback" ? S : S[0], h),
			ready: e,
			lng: t,
			keyPrefix: h,
			revision: n
		};
		return E.current = a, a;
	}, [
		d,
		S,
		h,
		f,
		i.lng
	]), [j, F] = s(0), { t: I, ready: L } = (0, M.useSyncExternalStore)(w, A, A);
	r(() => {
		if (d && !L && !p) {
			let e = () => F((e) => e + 1);
			i.lng ? _(d, i.lng, S, e) : g(d, S, e);
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
		let r = !L && !p ? (...e) => (m(d, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."), I(...e)) : I, i = [
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
		i.lng ? _(d, i.lng, S, t) : g(d, S, t);
	});
	return H;
};
//#endregion
//#region components/pages/settings/ProfileSection.tsx
function I() {
	let { t: e } = F(), t = i(), n = i();
	return /* @__PURE__ */ l("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [/* @__PURE__ */ c("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e("settings.profileSection.profile")
		}), /* @__PURE__ */ l("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ l("div", { children: [/* @__PURE__ */ c("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e("settings.profileSection.displayName")
			}), /* @__PURE__ */ c("input", {
				id: t,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), /* @__PURE__ */ l("div", { children: [/* @__PURE__ */ c("label", {
				htmlFor: n,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e("settings.profileSection.email")
			}), /* @__PURE__ */ c("input", {
				id: n,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
//#endregion
export { I as default };

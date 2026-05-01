import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
var i = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/de.json").then((e) => e.default),
	en: () => import("./en-t1qP4mr1.js").then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/zh.json").then((e) => e.default)
}, a = Symbol("intlayer"), o = () => t(a), s = {
	locales: [
		"en",
		"fr",
		"es",
		"de",
		"it",
		"pt",
		"zh",
		"ja",
		"ko",
		"ru"
	],
	requiredLocales: [
		"en",
		"fr",
		"es",
		"de",
		"it",
		"pt",
		"zh",
		"ja",
		"ko",
		"ru"
	],
	strictMode: "inclusive",
	defaultLocale: "en"
}, c = s?.defaultLocale, l = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: c });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: c })
	};
})(), u = "translation", d = "object", f = "array", p = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => p(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => p(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: f,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: d,
					key: r
				}]
			}, i = p(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, m = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, h = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (m(e) && m(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : h(e[r], t[r]));
		return n;
	}
	return e;
}, g = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => h(e, t));
}, _ = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, v = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? _ : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: u,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return g(o, e, t);
	}
}, y = _, b = _, x = _, S = _, C = (e) => _, w = _, T = (e, t = !0) => [
	v(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
	y,
	b,
	x,
	C(e ?? s.defaultLocale),
	w,
	S
], E = (e, t, n = []) => p(e, {
	...t,
	plugins: n
}), D = (e, t, n = T(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return E(e.content, r, n);
};
function O(t, n) {
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0);
	var o = e.comment(), s = e.first_child(o), c = (t) => {
		var n = e.comment(), o = e.first_child(n);
		e.element(o, r, !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, l = (t) => {
		r()(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, u = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(s, (e) => {
		typeof r() == "string" ? e(c) : typeof r() == "function" ? e(l, 1) : e(u, -1);
	}), e.append(t, o);
}
var k = (e) => {
	let t = !!O.prototype?.$destroy, n;
	return n = t ? class extends O {
		constructor(t) {
			super({
				...t,
				props: {
					...t.props,
					Renderer: e.component,
					rendererProps: e.props,
					value: e.value
				}
			});
		}
	} : (t) => O(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => e.value?.toString() ?? "",
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), n;
}, A = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => k({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, j = A, M = _, N = _, P = _, F = /* @__PURE__ */ new Map(), I = (e, t = !0) => {
	let n = `${e ?? s.defaultLocale}_${t}`;
	if (F.has(n)) return F.get(n);
	let r = [
		v(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
		y,
		b,
		C(e ?? s.defaultLocale),
		w,
		S,
		A,
		j,
		M,
		N,
		P
	];
	return F.set(n, r), r;
}, L = (e, t) => D(e, t, I(t)), R = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return R;
	},
	apply: () => R
});
function z(e, t, r) {
	let i = o();
	return n(n(l, (e) => r ?? i?.locale ?? e.locale), (t, n) => {
		n(new Proxy({
			isLoading: !0,
			error: null
		}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : R }));
		let r = !1;
		return (async () => {
			try {
				let i = e[t];
				if (!i) return;
				let a = await i();
				if (r) return;
				n({
					...L(a, t),
					isLoading: !1,
					error: null
				});
			} catch (e) {
				if (r) return;
				console.error(e), n({
					isLoading: !1,
					error: e
				});
			}
		})(), () => {
			r = !0;
		};
	}, new Proxy({
		isLoading: !0,
		error: null
	}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : R }));
}
var B = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div class=\"space-y-4\"><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div> <div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div> <div><label for=\"settings-default-language\" class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select id=\"settings-default-language\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div></div></section>");
function V(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = z(i, "preferences-section");
	e.init();
	var c = B(), l = e.child(c), u = e.child(l, !0);
	e.reset(l);
	var d = e.sibling(l, 2), f = e.child(d), p = e.child(f), m = e.child(p), h = e.child(m, !0);
	e.reset(m);
	var g = e.sibling(m, 2), _ = e.child(g, !0);
	e.reset(g), e.reset(p);
	var v = e.sibling(p, 2);
	e.reset(f);
	var y = e.sibling(f, 2), b = e.child(y), x = e.child(b), S = e.child(x, !0);
	e.reset(x);
	var C = e.sibling(x, 2), w = e.child(C, !0);
	e.reset(C), e.reset(b);
	var T = e.sibling(b, 2);
	e.reset(y);
	var E = e.sibling(y, 2), D = e.child(E), O = e.child(D, !0);
	e.reset(D);
	var k = e.sibling(D, 2), A = e.child(k), j = e.child(A, !0);
	e.reset(A);
	var M = {}, N = e.sibling(A), P = e.child(N, !0);
	e.reset(N);
	var F = {}, I = e.sibling(N), L = e.child(I, !0);
	e.reset(I);
	var R = {}, V = e.sibling(I), H = e.child(V, !0);
	e.reset(V);
	var U = {}, W = e.sibling(V), G = e.child(W, !0);
	e.reset(W);
	var K = {}, q = e.sibling(W), J = e.child(q, !0);
	e.reset(q);
	var Y = {}, X = e.sibling(q), Z = e.child(X, !0);
	e.reset(X);
	var Q = {};
	e.reset(k), e.reset(E), e.reset(d), e.reset(c), e.template_effect(() => {
		e.set_text(u, r().preferences), e.set_text(h, r().emailNotifications), e.set_text(_, r().receiveWeeklyBenchmarkReports), e.set_attribute(v, "aria-label", r().toggleNotifications), e.set_text(S, r().darkMode), e.set_text(w, r().useDarkColorScheme), e.set_attribute(T, "aria-label", r().toggleDarkMode), e.set_text(O, r().defaultLanguage), e.set_text(j, r().englishEn), M !== (M = r().englishEn) && (A.__value = r().englishEn), e.set_text(P, r().frenchFr), F !== (F = r().frenchFr) && (N.__value = r().frenchFr), e.set_text(L, r().germanDe), R !== (R = r().germanDe) && (I.__value = r().germanDe), e.set_text(H, r().spanishEs), U !== (U = r().spanishEs) && (V.__value = r().spanishEs), e.set_text(G, r().japaneseJa), K !== (K = r().japaneseJa) && (W.__value = r().japaneseJa), e.set_text(J, r().chineseSimplifiedZhCn), Y !== (Y = r().chineseSimplifiedZhCn) && (q.__value = r().chineseSimplifiedZhCn), e.set_text(Z, r().arabicAr), Q !== (Q = r().arabicAr) && (X.__value = r().arabicAr);
	}), e.append(t, c), e.pop(), o();
}
export { V as default };
var e = {
	key: "preferences-section",
	content: {
		arabicAr: "Arabic (ar)",
		chineseSimplifiedZhCn: "Chinese Simplified (zh-CN)",
		japaneseJa: "Japanese (ja)",
		spanishEs: "Spanish (es)",
		germanDe: "German (de)",
		frenchFr: "French (fr)",
		englishEn: "English (en)",
		defaultLanguage: "Default Language",
		toggleDarkMode: "Toggle dark mode",
		useDarkColorScheme: "Use dark color scheme",
		darkMode: "Dark Mode",
		toggleNotifications: "Toggle notifications",
		receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
		emailNotifications: "Email Notifications",
		preferences: "Preferences"
	}
};
export { e as default };

import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n } from "svelte";
import { derived as r, writable as i } from "svelte/store";
var a = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/de.json").then((e) => e.default),
	en: () => import("./en-yBJ7IxrD.js").then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/zh.json").then((e) => e.default)
}, o = Symbol("intlayer"), s = () => t(o), c = {
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
}, l = c?.defaultLocale, u = (() => {
	let { subscribe: e, set: t, update: n } = i({ locale: l });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => r({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: l })
	};
})(), d = "translation", f = "object", p = "array", m = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => m(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => m(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: p,
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
					type: f,
					key: r
				}]
			}, i = m(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, h = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, g = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (h(e) && h(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : g(e[r], t[r]));
		return n;
	}
	return e;
}, _ = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => g(e, t));
}, v = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, y = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? v : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: d,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return _(o, e, t);
	}
}, b = v, x = v, S = v, C = v, w = (e) => v, T = v, E = (e, t = !0) => [
	y(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	b,
	x,
	S,
	w(e ?? c.defaultLocale),
	T,
	C
], D = (e, t, n = []) => m(e, {
	...t,
	plugins: n
}), O = (e, t, n = E(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return D(e.content, r, n);
};
function k(t, n) {
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
var A = (e) => {
	let t = !!k.prototype?.$destroy, n;
	return n = t ? class extends k {
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
	} : (t) => k(t, {
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
}, j = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => A({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, M = j, N = v, P = v, F = v, I = /* @__PURE__ */ new Map(), L = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (I.has(n)) return I.get(n);
	let r = [
		y(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		b,
		x,
		w(e ?? c.defaultLocale),
		T,
		C,
		j,
		M,
		N,
		P,
		F
	];
	return I.set(n, r), r;
}, R = (e, t) => O(e, t, L(t)), z = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return z;
	},
	apply: () => z
});
function B(e, t, n) {
	let i = s();
	return r(r(u, (e) => n ?? i?.locale ?? e.locale), (t, n) => {
		n(new Proxy({
			isLoading: !0,
			error: null
		}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : z }));
		let r = !1;
		return (async () => {
			try {
				let i = e[t];
				if (!i) return;
				let a = await i();
				if (r) return;
				n({
					...R(a, t),
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
	}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : z }));
}
function V(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var H = e.from_html("<section class=\"mb-16\"><h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"grid gap-6 md:grid-cols-3\"><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div></section>");
function U(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", i), [i, o] = e.setup_stores();
	V("WhyItMatters");
	let s = B(a, "why-it-matters");
	e.init();
	var c = H(), l = e.child(c), u = e.child(l, !0);
	e.reset(l);
	var d = e.sibling(l, 2), f = e.child(d), p = e.child(f), m = e.child(p, !0);
	e.reset(p);
	var h = e.sibling(p, 2), g = e.child(h, !0);
	e.reset(h), e.reset(f);
	var _ = e.sibling(f, 2), v = e.child(_), y = e.child(v, !0);
	e.reset(v);
	var b = e.sibling(v, 2), x = e.child(b, !0);
	e.reset(b), e.reset(_);
	var S = e.sibling(_, 2), C = e.child(S), w = e.child(C, !0);
	e.reset(C);
	var T = e.sibling(C, 2), E = e.child(T, !0);
	e.reset(T), e.reset(S), e.reset(d), e.reset(c), e.template_effect(() => {
		e.set_text(u, r().title), e.set_text(m, r().bundleSize.title), e.set_text(g, r().bundleSize.description), e.set_text(y, r().renderingHydration.title), e.set_text(x, r().renderingHydration.description), e.set_text(w, r().dynamicLoading.title), e.set_text(E, r().dynamicLoading.description);
	}), e.append(t, c), e.pop(), o();
}
export { U as default };
var e = {
	key: "why-it-matters",
	content: {
		title: "Why These Metrics Matter",
		bundleSize: {
			title: "Bundle Size",
			description: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
		},
		renderingHydration: {
			title: "Rendering & Hydration",
			description: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
		},
		dynamicLoading: {
			title: "Dynamic Loading",
			description: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
		}
	}
};
export { e as default };

import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n, setContext as r } from "svelte";
import { derived as i, get as a, writable as o } from "svelte/store";
import "svelte/internal/flags/legacy";
import { recordHydrationDuration as s, recordRenderTime as c } from "test-utils/browser-metrics";
import l from "lucide-svelte/icons/chevron-down";
var u = {
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
}, d = {
	internationalization: u,
	routing: {
		mode: "prefix-all",
		storage: {
			cookies: [{
				name: "INTLAYER_LOCALE",
				attributes: {}
			}],
			headers: [{ name: "x-intlayer-locale" }]
		},
		basePath: ""
	},
	editor: {
		applicationURL: "http://localhost:3000",
		editorURL: "http://localhost:8000",
		cmsURL: "https://app.intlayer.org",
		backendURL: "https://back.intlayer.org",
		port: 8e3,
		enabled: !1,
		dictionaryPriorityStrategy: "local_first",
		liveSync: !0,
		liveSyncPort: 4e3,
		liveSyncURL: "http://localhost:4000"
	},
	log: {
		mode: "default",
		prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
	},
	system: {
		baseDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app",
		moduleAugmentationDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/types",
		unmergedDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/unmerged_dictionary",
		remoteDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/remote_dictionary",
		dictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/dictionary",
		dynamicDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/dynamic_dictionary",
		fetchDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/fetch_dictionary",
		typesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/types",
		mainDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/main",
		configDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/config",
		cacheDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/cache",
		tempDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/tmp"
	},
	content: {
		fileExtensions: [
			".content.ts",
			".content.js",
			".content.cjs",
			".content.mjs",
			".content.json",
			".content.json5",
			".content.jsonc",
			".content.tsx",
			".content.jsx"
		],
		contentDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app"],
		codeDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app"],
		excludedPath: [
			"**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
			"!**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.config.*",
			"!***.spec.*",
			"!***.d.ts",
			"!***.map"
		],
		outputFormat: ["esm", "cjs"],
		cache: !0,
		checkTypes: !1
	},
	ai,
	dictionary,
	build,
	compiler: {
		enabled: !0,
		dictionaryKeyPrefix: "",
		noMetadata: !1,
		saveComponents: !1
	}
}, f = "translation", p = "object", m = "array", h = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => h(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => h(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: m,
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
					type: p,
					key: r
				}]
			}, i = h(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, g = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, _ = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (g(e) && g(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : _(e[r], t[r]));
		return n;
	}
	return e;
}, v = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => _(e, t));
}, y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, b = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: f,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return v(o, e, t);
	}
}, x = y, S = y, C = y, w = y, T = (e) => y, E = y, D = (e, t = !0) => [
	b(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	x,
	S,
	C,
	T(e ?? u.defaultLocale),
	E,
	w
], O = (e, t, n = []) => h(e, {
	...t,
	plugins: n
}), k = (e, t, n = D(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return O(e.content, r, n);
}, A = d.internationalization.locales;
d.internationalization.requiredLocales, d.internationalization.defaultLocale, d.editor;
var j = Symbol("intlayer"), M = (e) => {
	r(j, e);
}, N = () => t(j), P = u?.defaultLocale, F = (() => {
	let { subscribe: e, set: t, update: n } = o({ locale: P });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => i({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: P })
	};
})(), I = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, L = (t) => {
	I();
	let n = e.state(e.proxy(t));
	t && F.setLocale(t);
	let r = {
		get locale() {
			return e.get(n) ?? u.defaultLocale;
		},
		setLocale: (t) => {
			e.set(n, t, !0), F.setLocale(t);
		}
	};
	return M(r), r;
};
function R(t, n) {
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
var z = (e) => {
	let t = !!R.prototype?.$destroy, n;
	return n = t ? class extends R {
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
	} : (t) => R(t, {
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
}, B = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => z({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, ee = B, V = y, te = y, H = y, U = /* @__PURE__ */ new Map(), ne = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (U.has(n)) return U.get(n);
	let r = [
		b(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		x,
		S,
		T(e ?? u.defaultLocale),
		E,
		w,
		B,
		ee,
		V,
		te,
		H
	];
	return U.set(n, r), r;
}, W = (e, t) => k(e, t, ne(t)), G = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return G;
	},
	apply: () => G
});
function K(e, t, n) {
	let r = N();
	return i(i(F, (e) => n ?? r?.locale ?? e.locale), (t, n) => {
		n(new Proxy({
			isLoading: !0,
			error: null
		}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : G }));
		let r = !1;
		return (async () => {
			try {
				let i = e[t];
				if (!i) return;
				let a = await i();
				if (r) return;
				n({
					...W(a, t),
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
	}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : G }));
}
var q = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/footer/de.json").then((e) => e.default),
	en: () => import("./en-DSS-fDCe.js").then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/footer/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/footer/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/footer/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/footer/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/footer/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/footer/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/footer/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/footer/zh.json").then((e) => e.default)
}, J = [
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
];
function Y(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function X(e) {
	return J.includes(e);
}
var re = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function ie(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!X(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !re.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Z = o(typeof window < "u" ? window.location.pathname : "/en"), Q = i(Z, (e) => ie(e));
function ae(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), Z.set(window.location.pathname));
}
var oe = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), se = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), ce = e.from_html("<li><!></li>"), le = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"> </div></div></footer>");
function ue(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(Q, "$route", a), i = () => e.store_get(s, "$footer", a), [a, o] = e.setup_stores(), s = K(q, "footer"), c = e.derived(() => r().kind === "ok" ? r().locale : "en"), l = e.derived(() => [
		{
			label: i().github,
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: i().methodology,
			to: `/${e.get(c)}/about`,
			isInternal: !0
		},
		{
			label: i().contributing,
			to: `/${e.get(c)}/contact`,
			isInternal: !0
		}
	]);
	var u = le(), d = e.child(u), f = e.child(d), p = e.child(f), m = e.child(p), h = e.child(m, !0);
	e.reset(m);
	var g = e.sibling(m, 2), _ = e.child(g, !0);
	e.reset(g), e.reset(p);
	var v = e.sibling(p, 2), y = e.child(v), b = e.child(y, !0);
	e.reset(y);
	var x = e.sibling(y, 2);
	e.each(x, 21, () => e.get(l), e.index, (t, n) => {
		var r = ce(), i = e.child(r), a = (t) => {
			var r = oe(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = se(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(x), e.reset(v);
	var S = e.sibling(v, 2), C = e.child(S), w = e.child(C, !0);
	e.reset(C);
	var T = e.sibling(C, 2), E = e.child(T, !0);
	e.reset(T), e.reset(S), e.reset(f);
	var D = e.sibling(f, 2), O = e.child(D, !0);
	e.reset(D), e.reset(d), e.reset(u), e.template_effect(() => {
		e.set_text(h, i().appName), e.set_text(_, i().description), e.set_text(b, i().resources), e.set_text(w, i().contact), e.set_text(E, i().contactEmail), e.set_text(O, i().footerText);
	}), e.append(t, u), e.pop(), o();
}
var de = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./en-BxYRYkur.js").then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
};
function fe(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var pe = e.from_html("<option> </option>"), me = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function he(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(Z, "$pathname", i), [i, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		ae(a(Z).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = me(), l = e.child(c);
	e.each(l, 5, () => A, (e) => e, (t, n) => {
		var r = pe(), i = e.child(r, !0);
		e.reset(r);
		var a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = e.get(n)) ?? "");
		}, [() => Y(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = t) ?? "", e.select_option(l, t));
	}, [() => r().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var $ = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json").then((e) => e.default),
	en: () => import("./en-CT7AOg2w.js").then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json").then((e) => e.default)
}, ge = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function _e(t, r) {
	e.push(r, !0);
	let i = () => e.store_get(s, "$tt", a), [a, o] = e.setup_stores(), s = K($, "theme-toggle");
	function c() {
		if (typeof window > "u") return "auto";
		let e = window.localStorage.getItem("theme");
		return e === "light" || e === "dark" || e === "auto" ? e : "auto";
	}
	function l(e) {
		let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
		document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
	}
	let u = e.state("auto");
	n(() => {
		let t = c();
		e.set(u, t, !0), l(t);
	}), e.user_effect(() => {
		if (e.get(u) !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => l("auto");
		return t.addEventListener("change", n), () => t.removeEventListener("change", n);
	});
	function d() {
		let t = e.get(u) === "light" ? "dark" : e.get(u) === "dark" ? "auto" : "light";
		e.set(u, t, !0), l(t), window.localStorage.setItem("theme", t);
	}
	let f = e.derived(() => e.get(u) === "auto" ? i().ariaLabelAuto : e.get(u) === "light" ? i().ariaLabelLight : i().ariaLabelDark), p = e.derived(() => e.get(u) === "auto" ? i().auto : e.get(u) === "dark" ? i().dark : i().light);
	var m = ge(), h = e.child(m, !0);
	e.reset(m), e.template_effect(() => {
		e.set_attribute(m, "aria-label", e.get(f)), e.set_attribute(m, "title", e.get(f)), e.set_text(h, e.get(p));
	}), e.delegated("click", m, d), e.append(t, m), e.pop(), o();
}
e.delegate(["click"]);
var ve = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), ye = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), be = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function xe(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(Q, "$route", o), i = () => e.store_get(c, "$header", o), [o, s] = e.setup_stores(), c = K(de, "header");
	fe(a(c).header);
	let u = e.state(!1), d = e.derived(() => r().kind === "ok" ? r().locale : "en"), f = e.derived(() => [
		{
			to: `/${e.get(d)}/products`,
			label: i().products
		},
		{
			to: `/${e.get(d)}/pricing`,
			label: i().pricing
		},
		{
			to: `/${e.get(d)}/team`,
			label: i().team
		},
		{
			to: `/${e.get(d)}/blog`,
			label: i().blog
		},
		{
			to: `/${e.get(d)}/careers`,
			label: i().careers
		},
		{
			to: `/${e.get(d)}/faq`,
			label: i().faq
		},
		{
			to: `/${e.get(d)}/contact`,
			label: i().contact
		},
		{
			to: `/${e.get(d)}/settings`,
			label: i().settings
		}
	]), p = e.derived(() => r().kind === "ok" && r().page === ""), m = e.derived(() => r().kind === "ok" && r().page === "about");
	var h = be(), g = e.child(h), _ = e.child(g), v = e.child(_), y = e.child(v, !0);
	e.reset(v);
	var b = e.sibling(v, 2), x = e.child(b);
	let S;
	var C = e.child(x, !0);
	e.reset(x);
	var w = e.sibling(x, 2);
	let T;
	var E = e.child(w, !0);
	e.reset(w);
	var D = e.sibling(w, 2), O = e.child(D), k = e.child(O), A = e.sibling(k);
	{
		let t = e.derived(() => e.get(u) ? "transition-transform rotate-180" : "transition-transform");
		l(A, {
			size: 14,
			get class() {
				return e.get(t);
			}
		});
	}
	e.reset(O);
	var j = e.sibling(O, 2), M = (t) => {
		var n = ye(), r = e.child(n);
		e.each(r, 21, () => e.get(f), (e) => e.to, (t, n) => {
			var r = ve(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(u, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(u, !0)), e.event("mouseleave", n, () => e.set(u, !1)), e.append(t, n);
	};
	e.if(j, (t) => {
		e.get(u) && t(M);
	}), e.reset(D), e.reset(b), e.reset(_);
	var N = e.sibling(_, 2), P = e.child(N), F = e.child(P), I = e.child(F, !0);
	e.reset(F), e.next(2), e.reset(P);
	var L = e.sibling(P, 2);
	he(L, {}), _e(e.sibling(L, 2), {}), e.reset(N), e.reset(g), e.reset(h), e.template_effect(() => {
		e.set_attribute(v, "href", `/${e.get(d)}`), e.set_text(y, i().appName), e.set_attribute(x, "href", `/${e.get(d)}`), S = e.set_class(x, 1, "nav-link", null, S, { "is-active": e.get(p) }), e.set_text(C, i().home), e.set_attribute(w, "href", `/${e.get(d)}/about`), T = e.set_class(w, 1, "nav-link", null, T, { "is-active": e.get(m) }), e.set_text(E, i().methodology), e.set_text(k, `${i().mockPages ?? ""} `), e.set_text(I, i().goToGithub);
	}), e.event("mouseenter", O, () => e.set(u, !0)), e.event("mouseleave", O, () => e.set(u, !1)), e.delegated("click", O, () => e.set(u, !e.get(u))), e.append(t, h), e.pop(), s();
}
e.delegate(["click"]);
var Se = e.from_html("<!> <!> <!>", 1);
function Ce(t, r) {
	e.push(r, !0);
	let i = L("en"), a = typeof performance < "u" ? performance.now() : 0;
	n(() => {
		s(), c("AppRoot", a);
	}), e.user_effect(() => {
		i.setLocale(r.locale), document.documentElement.lang = r.locale;
	});
	var o = Se(), l = e.first_child(o);
	xe(l, {});
	var u = e.sibling(l, 2);
	e.snippet(u, () => r.children), ue(e.sibling(u, 2), {}), e.append(t, o), e.pop();
}
export { Ce as default };
var e = {
	key: "header",
	content: {
		home: "Home",
		methodology: "Methodology",
		mockPages: "Mock Pages",
		products: "Products",
		pricing: "Pricing",
		team: "Team",
		blog: "Blog",
		careers: "Careers",
		faq: "FAQ",
		contact: "Contact",
		settings: "Settings",
		appName: "i18n Bench",
		goToGithub: "Go to GitHub",
		header: "Header"
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		auto: "Theme: Auto",
		dark: "Theme: Dark",
		light: "Theme: Light",
		ariaLabelAuto: "Theme mode: auto (system). Click to switch to light mode.",
		ariaLabelLight: "Theme mode: light. Click to switch to dark mode.",
		ariaLabelDark: "Theme mode: dark. Click to switch to auto mode."
	}
};
export { e as default };
var e = {
	key: "footer",
	content: {
		description: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
		resources: "Resources",
		contact: "Contact",
		github: "GitHub",
		methodology: "Methodology",
		contributing: "Contributing",
		footerText: "i18n Benchmark — Open-source project. Built with Svelte, Vite, and a client-side router.",
		appName: "i18n Benchmark",
		contactEmail: "contact@intlayer.org"
	}
};
export { e as default };

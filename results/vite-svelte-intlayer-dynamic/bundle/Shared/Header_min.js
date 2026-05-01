import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { derived as t, get as n, writable as r } from "svelte/store";
import i from "lucide-svelte/icons/chevron-down";
import { getContext as a, onMount as o } from "svelte";
import "svelte/internal/flags/legacy";
var s = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./en-COOS_jJ3.js").then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, c = Symbol("intlayer"), l = () => a(c), u = {
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
}, f = u?.defaultLocale, p = (() => {
	let { subscribe: e, set: n, update: i } = r({ locale: f });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => t({ subscribe: e }, (e) => e.locale),
		reset: () => n({ locale: f })
	};
})(), m = "translation", h = "object", g = "array", _ = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => _(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => _(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: g,
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
					type: h,
					key: r
				}]
			}, i = _(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, v = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, y = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (v(e) && v(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : y(e[r], t[r]));
		return n;
	}
	return e;
}, b = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => y(e, t));
}, x = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, S = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? x : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: m,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return b(o, e, t);
	}
}, C = x, w = x, T = x, E = x, D = (e) => x, O = x, k = (e, t = !0) => [
	S(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	C,
	w,
	T,
	D(e ?? u.defaultLocale),
	O,
	E
], A = (e, t, n = []) => _(e, {
	...t,
	plugins: n
}), j = (e, t, n = k(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return A(e.content, r, n);
};
function M(t, n) {
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
var N = (e) => {
	let t = !!M.prototype?.$destroy, n;
	return n = t ? class extends M {
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
	} : (t) => M(t, {
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
}, P = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => N({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, F = P, I = x, L = x, R = x, z = /* @__PURE__ */ new Map(), B = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (z.has(n)) return z.get(n);
	let r = [
		S(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		C,
		w,
		D(e ?? u.defaultLocale),
		O,
		E,
		P,
		F,
		I,
		L,
		R
	];
	return z.set(n, r), r;
}, ee = (e, t) => j(e, t, B(t)), V = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return V;
	},
	apply: () => V
});
function H(e, n, r) {
	let i = l();
	return t(t(p, (e) => r ?? i?.locale ?? e.locale), (t, n) => {
		n(new Proxy({
			isLoading: !0,
			error: null
		}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : V }));
		let r = !1;
		return (async () => {
			try {
				let i = e[t];
				if (!i) return;
				let a = await i();
				if (r) return;
				n({
					...ee(a, t),
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
	}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : V }));
}
function U(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), o(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var W = [
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
function G(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function K(e) {
	return W.includes(e);
}
var q = new Set([
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
function J(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!K(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !q.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Y = r(typeof window < "u" ? window.location.pathname : "/en"), X = t(Y, (e) => J(e));
function Z(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), Y.set(window.location.pathname));
}
var Q = d.internationalization.locales;
d.internationalization.requiredLocales, d.internationalization.defaultLocale, d.editor;
var te = e.from_html("<option> </option>"), ne = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function re(t, r) {
	e.push(r, !1);
	let i = () => e.store_get(Y, "$pathname", a), [a, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		Z(n(Y).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = ne(), l = e.child(c);
	e.each(l, 5, () => Q, (e) => e, (t, n) => {
		var r = te(), i = e.child(r, !0);
		e.reset(r);
		var a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = e.get(n)) ?? "");
		}, [() => G(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = t) ?? "", e.select_option(l, t));
	}, [() => i().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var ie = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json").then((e) => e.default),
	en: () => import("./en-C5ePg7iX.js").then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json").then((e) => e.default)
}, ae = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function $(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$tt", i), [i, a] = e.setup_stores(), s = H(ie, "theme-toggle");
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
	o(() => {
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
	let f = e.derived(() => e.get(u) === "auto" ? r().ariaLabelAuto : e.get(u) === "light" ? r().ariaLabelLight : r().ariaLabelDark), p = e.derived(() => e.get(u) === "auto" ? r().auto : e.get(u) === "dark" ? r().dark : r().light);
	var m = ae(), h = e.child(m, !0);
	e.reset(m), e.template_effect(() => {
		e.set_attribute(m, "aria-label", e.get(f)), e.set_attribute(m, "title", e.get(f)), e.set_text(h, e.get(p));
	}), e.delegated("click", m, d), e.append(t, m), e.pop(), a();
}
e.delegate(["click"]);
var oe = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), se = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), ce = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function le(t, r) {
	e.push(r, !0);
	let a = () => e.store_get(X, "$route", c), o = () => e.store_get(u, "$header", c), [c, l] = e.setup_stores(), u = H(s, "header");
	U(n(u).header);
	let d = e.state(!1), f = e.derived(() => a().kind === "ok" ? a().locale : "en"), p = e.derived(() => [
		{
			to: `/${e.get(f)}/products`,
			label: o().products
		},
		{
			to: `/${e.get(f)}/pricing`,
			label: o().pricing
		},
		{
			to: `/${e.get(f)}/team`,
			label: o().team
		},
		{
			to: `/${e.get(f)}/blog`,
			label: o().blog
		},
		{
			to: `/${e.get(f)}/careers`,
			label: o().careers
		},
		{
			to: `/${e.get(f)}/faq`,
			label: o().faq
		},
		{
			to: `/${e.get(f)}/contact`,
			label: o().contact
		},
		{
			to: `/${e.get(f)}/settings`,
			label: o().settings
		}
	]), m = e.derived(() => a().kind === "ok" && a().page === ""), h = e.derived(() => a().kind === "ok" && a().page === "about");
	var g = ce(), _ = e.child(g), v = e.child(_), y = e.child(v), b = e.child(y, !0);
	e.reset(y);
	var x = e.sibling(y, 2), S = e.child(x);
	let C;
	var w = e.child(S, !0);
	e.reset(S);
	var T = e.sibling(S, 2);
	let E;
	var D = e.child(T, !0);
	e.reset(T);
	var O = e.sibling(T, 2), k = e.child(O), A = e.child(k), j = e.sibling(A);
	{
		let t = e.derived(() => e.get(d) ? "transition-transform rotate-180" : "transition-transform");
		i(j, {
			size: 14,
			get class() {
				return e.get(t);
			}
		});
	}
	e.reset(k);
	var M = e.sibling(k, 2), N = (t) => {
		var n = se(), r = e.child(n);
		e.each(r, 21, () => e.get(p), (e) => e.to, (t, n) => {
			var r = oe(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(d, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(d, !0)), e.event("mouseleave", n, () => e.set(d, !1)), e.append(t, n);
	};
	e.if(M, (t) => {
		e.get(d) && t(N);
	}), e.reset(O), e.reset(x), e.reset(v);
	var P = e.sibling(v, 2), F = e.child(P), I = e.child(F), L = e.child(I, !0);
	e.reset(I), e.next(2), e.reset(F);
	var R = e.sibling(F, 2);
	re(R, {}), $(e.sibling(R, 2), {}), e.reset(P), e.reset(_), e.reset(g), e.template_effect(() => {
		e.set_attribute(y, "href", `/${e.get(f)}`), e.set_text(b, o().appName), e.set_attribute(S, "href", `/${e.get(f)}`), C = e.set_class(S, 1, "nav-link", null, C, { "is-active": e.get(m) }), e.set_text(w, o().home), e.set_attribute(T, "href", `/${e.get(f)}/about`), E = e.set_class(T, 1, "nav-link", null, E, { "is-active": e.get(h) }), e.set_text(D, o().methodology), e.set_text(A, `${o().mockPages ?? ""} `), e.set_text(L, o().goToGithub);
	}), e.event("mouseenter", k, () => e.set(d, !0)), e.event("mouseleave", k, () => e.set(d, !1)), e.delegated("click", k, () => e.set(d, !e.get(d))), e.append(t, g), e.pop(), l();
}
e.delegate(["click"]);
export { le as default };
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

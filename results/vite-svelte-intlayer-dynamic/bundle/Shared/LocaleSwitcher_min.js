import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { derived as t, get as n, writable as r } from "svelte/store";
var i = [
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
function a(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function o(e) {
	return i.includes(e);
}
var s = new Set([
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
function c(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!o(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !s.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var l = r(typeof window < "u" ? window.location.pathname : "/en");
t(l, (e) => c(e));
function u(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), l.set(window.location.pathname));
}
var d = {
	internationalization: {
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
	},
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
}, f = d.internationalization.locales;
d.internationalization.requiredLocales, d.internationalization.defaultLocale, d.editor;
var p = e.from_html("<option> </option>"), m = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function h(t, r) {
	e.push(r, !1);
	let i = () => e.store_get(l, "$pathname", o), [o, s] = e.setup_stores();
	function c(e) {
		let t = e.target.value;
		u(n(l).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var d = m(), h = e.child(d);
	e.each(h, 5, () => f, (e) => e, (t, n) => {
		var r = p(), i = e.child(r, !0);
		e.reset(r);
		var o = {};
		e.template_effect((t) => {
			e.set_text(i, t), o !== (o = e.get(n)) && (r.value = (r.__value = e.get(n)) ?? "");
		}, [() => a(e.get(n))]), e.append(t, r);
	}), e.reset(h);
	var g;
	e.init_select(h), e.reset(d), e.template_effect((t) => {
		g !== (g = t) && (h.value = (h.__value = t) ?? "", e.select_option(h, t));
	}, [() => i().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", h, c), e.append(t, d), e.pop(), s();
}
e.delegate(["change"]);
export { h as default };

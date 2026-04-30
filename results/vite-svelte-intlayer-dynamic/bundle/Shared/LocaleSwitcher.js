import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { derived, get, writable } from "svelte/store";
var locales$1 = [
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
function getLocaleName(locale) {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch {
		return locale.toUpperCase();
	}
}
function isLocale(value) {
	return locales$1.includes(value);
}
var PAGE_SEGMENTS = new Set([
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
function parsePath(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	if (parts.length === 0) return { kind: "notfound" };
	const [locale, ...rest] = parts;
	if (!isLocale(locale)) return { kind: "notfound" };
	const seg = rest[0] ?? "";
	if (rest.length > 1) return { kind: "notfound" };
	if (!PAGE_SEGMENTS.has(seg)) return { kind: "notfound" };
	return {
		kind: "ok",
		locale,
		page: seg
	};
}
var pathname = writable(typeof window !== "undefined" ? window.location.pathname : "/en");
derived(pathname, (p) => parsePath(p));
function navigate(url, replace = false) {
	if (typeof window === "undefined") return;
	if (replace) history.replaceState(null, "", url);
	else history.pushState(null, "", url);
	pathname.set(window.location.pathname);
}
var configuration = {
	internationalization: {
		"locales": [
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
		"requiredLocales": [
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
		"strictMode": "inclusive",
		"defaultLocale": "en"
	},
	routing: {
		"mode": "prefix-all",
		"storage": {
			"cookies": [{
				"name": "INTLAYER_LOCALE",
				"attributes": {}
			}],
			"headers": [{ "name": "x-intlayer-locale" }]
		},
		"basePath": ""
	},
	editor: {
		"applicationURL": "http://localhost:3000",
		"editorURL": "http://localhost:8000",
		"cmsURL": "https://app.intlayer.org",
		"backendURL": "https://back.intlayer.org",
		"port": 8e3,
		"enabled": false,
		"dictionaryPriorityStrategy": "local_first",
		"liveSync": true,
		"liveSyncPort": 4e3,
		"liveSyncURL": "http://localhost:4000"
	},
	log: {
		"mode": "default",
		"prefix": "\x1B[38;5;239m[intlayer] \x1B[0m"
	},
	system: {
		"baseDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app",
		"moduleAugmentationDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/types",
		"unmergedDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/unmerged_dictionary",
		"remoteDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/remote_dictionary",
		"dictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/dictionary",
		"dynamicDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/dynamic_dictionary",
		"fetchDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/fetch_dictionary",
		"typesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/types",
		"mainDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/main",
		"configDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/config",
		"cacheDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/cache",
		"tempDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app/.intlayer/tmp"
	},
	content: {
		"fileExtensions": [
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
		"contentDir": ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app"],
		"codeDir": ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-dynamic/svelte-intlayer-app"],
		"excludedPath": [
			"**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
			"!**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.config.*",
			"!***.spec.*",
			"!***.d.ts",
			"!***.map"
		],
		"outputFormat": ["esm", "cjs"],
		"cache": true,
		"checkTypes": false
	},
	ai,
	dictionary,
	build,
	compiler: {
		"enabled": true,
		"dictionaryKeyPrefix": "",
		"noMetadata": false,
		"saveComponents": false
	}
};
var locales = configuration.internationalization.locales;
configuration.internationalization.requiredLocales;
configuration.internationalization.defaultLocale;
configuration.editor;
var root_1 = $.from_html(`<option> </option>`);
var root = $.from_html(`<div class="flex items-center gap-2"><select class="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none"></select></div>`);
function LocaleSwitcher($$anchor, $$props) {
	$.push($$props, false);
	const $pathname = () => $.store_get(pathname, "$pathname", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	function handleLocaleChange(e) {
		const newLocale = e.target.value;
		navigate(get(pathname).replace(/^\/[^/]+/, `/${newLocale}`) + window.location.search + window.location.hash, false);
	}
	$.init();
	var div = root();
	var select = $.child(div);
	$.each(select, 5, () => locales, (localeItem) => localeItem, ($$anchor, localeItem) => {
		var option = root_1();
		var text = $.child(option, true);
		$.reset(option);
		var option_value = {};
		$.template_effect(($0) => {
			$.set_text(text, $0);
			if (option_value !== (option_value = $.get(localeItem))) option.value = (option.__value = $.get(localeItem)) ?? "";
		}, [() => getLocaleName($.get(localeItem))]);
		$.append($$anchor, option);
	});
	$.reset(select);
	var select_value;
	$.init_select(select);
	$.reset(div);
	$.template_effect(($0) => {
		if (select_value !== (select_value = $0)) select.value = (select.__value = $0) ?? "", $.select_option(select, $0);
	}, [() => $pathname().split("/").filter(Boolean)[0] ?? "en"]);
	$.delegated("change", select, handleLocaleChange);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
$.delegate(["change"]);
export { LocaleSwitcher as default };

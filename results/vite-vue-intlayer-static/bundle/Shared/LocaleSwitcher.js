import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, inject, openBlock, renderList, toDisplayString, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
var internationalization = {
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
}, routing = {
	"mode": "prefix-all",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
}, configuration = {
	internationalization,
	routing,
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
		"baseDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app",
		"moduleAugmentationDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/types",
		"unmergedDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/unmerged_dictionary",
		"remoteDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/remote_dictionary",
		"dictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/dictionary",
		"dynamicDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/dynamic_dictionary",
		"fetchDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/fetch_dictionary",
		"typesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/types",
		"mainDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/main",
		"configDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/config",
		"cacheDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/cache",
		"tempDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/tmp"
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
		"contentDir": ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app"],
		"codeDir": ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app"],
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
}, i = Symbol("intlayer");
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	if (attributes.expires instanceof Date) parts.push(`Expires=${attributes.expires.toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
};
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	if (!TREE_SHAKE_STORAGE_COOKIES && routing.storage.cookies) for (let i = 0; i < routing.storage.cookies.length; i++) {
		const { name, attributes } = routing.storage.cookies[i];
		try {
			if (options?.setCookieStore) options.setCookieStore(name, locale, {
				...attributes,
				expires: attributes.expires instanceof Date ? attributes.expires.getTime() : attributes.expires
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
};
var localeStorageOptions = {
	getCookie: (name) => document.cookie.split(";").find((c) => c.trim().startsWith(`${name}=`))?.split("=")[1],
	getLocaleStorage: (name) => localStorage.getItem(name),
	getSessionStorage: (name) => sessionStorage.getItem(name),
	isCookieEnabled: true,
	setCookieStore: (name, value, attributes) => cookieStore.set({
		name,
		value,
		path: attributes.path,
		domain: attributes.domain,
		expires: attributes.expires,
		sameSite: attributes.sameSite
	}),
	setCookieString: (_name, cookie) => {
		document.cookie = cookie;
	},
	setSessionStorage: (name, value) => sessionStorage.setItem(name, value),
	setLocaleStorage: (name, value) => localStorage.setItem(name, value)
};
getLocaleFromStorageClient(localeStorageOptions);
var s = (e, n) => setLocaleInStorageClient(e, {
	...localeStorageOptions,
	isCookieEnabled: n
});
var a = ({ isCookieEnabled: a, onLocaleChange: o } = {}) => {
	let { defaultLocale: s$2, locales: c } = internationalization ?? {}, l = inject(i);
	return {
		locale: computed(() => l?.locale?.value ?? s$2),
		defaultLocale: s$2,
		availableLocales: c,
		setLocale: (e) => {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			l && l.setLocale(e), s(e, a ?? l?.isCookieEnabled ?? !0), o?.(e);
		}
	};
};
var locales = configuration.internationalization.locales;
configuration.internationalization.requiredLocales;
configuration.internationalization.defaultLocale;
configuration.editor;
var getLocaleName = (locale) => {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch (e) {
		return locale.toUpperCase();
	}
};
var LocaleSwitcher_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "LocaleSwitcher",
	setup(__props, { expose: __expose }) {
		__expose();
		const route = useRoute();
		const router = useRouter();
		const { setLocale } = a();
		const currentLocale = computed(() => route.params.locale || "en");
		const handleLocaleChange = (newLocale) => {
			setLocale(newLocale);
			const newPath = route.path.replace(/^\/[^/]+/, `/${newLocale}`);
			router.push({
				path: newPath,
				query: route.query,
				hash: route.hash
			});
		};
		watch(currentLocale, (newLocale) => {
			setLocale(newLocale);
		}, { immediate: true });
		const __returned__ = {
			route,
			router,
			setLocale,
			currentLocale,
			handleLocaleChange,
			get locales() {
				return locales;
			},
			get getLocaleName() {
				return getLocaleName;
			}
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = { class: "flex items-center gap-2" };
var _hoisted_2 = ["value"];
var _hoisted_3 = ["value"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("select", {
		value: $setup.currentLocale,
		onChange: _cache[0] || (_cache[0] = (e) => $setup.handleLocaleChange(e.target.value)),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.locales, (localeItem) => {
		return openBlock(), createElementBlock("option", {
			key: localeItem,
			value: localeItem
		}, toDisplayString($setup.getLocaleName(localeItem)), 9, _hoisted_3);
	}), 128))], 40, _hoisted_2)]);
}
var LocaleSwitcher_default = _plugin_vue_export_helper_default(LocaleSwitcher_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/LocaleSwitcher.vue"]]);
export { LocaleSwitcher_default as default };

import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, inject, openBlock, renderList, toDisplayString, unref, watch } from "vue";
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
};
var routing = {
	"mode": "prefix-all",
	"enableProxy": false,
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": { "path": "/" }
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
var i = Symbol("intlayer");
var resolveExpiresToTimestamp = (expires) => {
	if (typeof expires === "number") return Date.now() + expires * 1e3;
	if (typeof expires === "string") {
		const time = Date.parse(expires);
		return Number.isNaN(time) ? void 0 : time;
	}
};
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	const expiresTimestamp = resolveExpiresToTimestamp(attributes.expires);
	if (expiresTimestamp !== void 0) parts.push(`Expires=${new Date(expiresTimestamp).toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
};
var TREE_SHAKE_STORAGE_COOKIES = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
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
				expires: resolveExpiresToTimestamp(attributes.expires)
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
};
getLocaleFromStorageClient(localeStorageOptions);
var s$1 = (e, t) => setLocaleInStorageClient(e, {
	...localeStorageOptions,
	isCookieEnabled: t
});
var { defaultLocale: a, locales: o } = internationalization ?? {}, s = ({ isCookieEnabled: n, onLocaleChange: s } = {}) => {
	let c = inject(i);
	return {
		locale: computed(() => c?.locale?.value ?? a),
		defaultLocale: a,
		availableLocales: o,
		setLocale: (e) => {
			if (!o?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			c && c.setLocale(e), s$1(e, n ?? c?.isCookieEnabled ?? !0), s?.(e);
		}
	};
};
var locales = internationalization.locales;
internationalization.requiredLocales;
internationalization.defaultLocale;
var getLocaleName = (locale) => {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch (e) {
		return locale.toUpperCase();
	}
};
var _hoisted_1 = { class: "flex items-center gap-2" };
var _hoisted_2 = ["value"];
var _hoisted_3 = ["value"];
var LocaleSwitcher_default = defineComponent({
	__name: "LocaleSwitcher",
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const { setLocale } = s();
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("select", {
				value: currentLocale.value,
				onChange: _cache[0] || (_cache[0] = (e) => handleLocaleChange(e.target.value)),
				class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(locales), (localeItem) => {
				return openBlock(), createElementBlock("option", {
					key: localeItem,
					value: localeItem
				}, toDisplayString(unref(getLocaleName)(localeItem)), 9, _hoisted_3);
			}), 128))], 40, _hoisted_2)]);
		};
	}
});
export { LocaleSwitcher_default as default };

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region .intlayer/config/configuration.mjs
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
	"defaultLocale": "en"
};
var routing = {
	"mode": "prefix-no-default",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/utils/intl.mjs
/**
* Cached Intl helper – drop‑in replacement for the global `Intl` object.
* ‑‑‑
* • Uses a `Proxy` to lazily wrap every *constructor* hanging off `Intl` (NumberFormat, DateTimeFormat, …).
* • Each wrapped constructor keeps an in‑memory cache keyed by `[locales, options]` so that identical requests
* reuse the same heavy instance instead of reparsing CLDR data every time.
* • A polyfill warning for `Intl.DisplayNames` is emitted only once and only in dev.
* • The public API is fully type‑safe and mirrors the native `Intl` surface exactly –
* you can treat `CachedIntl` just like the built‑in `Intl`.
*
* Usage @example:
* ---------------
* ```ts
* import { CachedIntl } from "./cached-intl";
*
* const nf = CachedIntl.NumberFormat("en-US", { style: "currency", currency: "USD" });
* console.log(nf.format(1234));
*
* const dn = CachedIntl.DisplayNames(["fr"], { type: "language" });
* console.log(dn.of("en")); * → "anglais"
*
* You can also spin up an isolated instance with its own caches (handy in test suites):
* const TestIntl = createCachedIntl();
* ```
*/
var MAX_CACHE_SIZE = 50;
var cache = /* @__PURE__ */ new Map();
/**
* Generic caching instantiator for Intl constructors.
*/
var getCachedIntl = (Ctor, locale, options) => {
	const resLoc = locale ?? internationalization?.defaultLocale;
	const key = `${resLoc}|${options ? JSON.stringify(options) : ""}`;
	let ctorCache = cache.get(Ctor);
	if (!ctorCache) {
		ctorCache = /* @__PURE__ */ new Map();
		cache.set(Ctor, ctorCache);
	}
	let instance = ctorCache.get(key);
	if (!instance) {
		if (ctorCache.size > MAX_CACHE_SIZE) ctorCache.clear();
		instance = new Ctor(resLoc, options);
		ctorCache.set(key, instance);
	}
	return instance;
};
var CachedIntl = {
	Collator: function Collator(locales, options) {
		return getCachedIntl(Intl.Collator, locales, options);
	},
	DateTimeFormat: function DateTimeFormat(locales, options) {
		return getCachedIntl(Intl.DateTimeFormat, locales, options);
	},
	DisplayNames: function DisplayNames(locales, options) {
		return getCachedIntl(Intl.DisplayNames, locales, options);
	},
	ListFormat: function ListFormat(locales, options) {
		return getCachedIntl(Intl.ListFormat, locales, options);
	},
	NumberFormat: function NumberFormat(locales, options) {
		return getCachedIntl(Intl.NumberFormat, locales, options);
	},
	PluralRules: function PluralRules(locales, options) {
		return getCachedIntl(Intl.PluralRules, locales, options);
	},
	RelativeTimeFormat: function RelativeTimeFormat(locales, options) {
		return getCachedIntl(Intl.RelativeTimeFormat, locales, options);
	},
	Segmenter: function Segmenter(locales, options) {
		return getCachedIntl(Intl.Segmenter, locales, options);
	}
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/localization/localeResolver.mjs
/**
* Resolves the most specific locale from a user-provided list,
* or falls back to the default locale if no match is found.
*/
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
	const requestedLocales = [selectedLocale].flat();
	const normalize = (locale) => locale.trim().toLowerCase();
	try {
		for (const requested of requestedLocales) {
			const normalizedRequested = normalize(requested);
			const exactMatch = locales.find((locale) => normalize(locale) === normalizedRequested);
			if (exactMatch) return exactMatch;
			const [requestedLang] = normalizedRequested.split("-");
			const partialMatch = locales.find((locale) => normalize(locale).split("-")[0] === requestedLang);
			if (partialMatch) return partialMatch;
		}
	} catch {}
	return defaultLocale;
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/utils/localeStorage.mjs
/**
* True when cookie storage is explicitly disabled at build time.
*/
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
/**
* Retrieves the locale from browser storage mechanisms
* (cookies, localStorage, sessionStorage).
* Does not read from headers — use `getLocaleFromStorageServer` for that.
*/
var getLocaleFromStorageClient = (options) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
/**
* Stores the locale in browser storage mechanisms
* (cookies, localStorage, sessionStorage).
* Does not write to headers — use `setLocaleInStorageServer` for that.
*/
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
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/localization/getBrowserLocale.mjs
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
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/localization/getLocaleName.mjs
var getLocaleName = (displayLocale, targetLocale = displayLocale) => {
	return new CachedIntl.DisplayNames(targetLocale, { type: "language" }).of(displayLocale) ?? "Unknown locale";
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/client/useLocaleStorage.mjs
/**
* Get the locale cookie
*/
/**
* Get the locale cookie
*/
var localeInStorage = getLocaleFromStorageClient(localeStorageOptions);
/**
* Set the locale cookie
*/
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/editor/useEditor.mjs
/**
* Initializes the Intlayer editor client singleton when the editor is enabled.
* Syncs the current locale from the Intlayer context into the editor manager so
* the editor always knows which locale the app is displaying.
*/
var useEditor = () => {
	const { locale } = useContext(IntlayerClientContext) ?? {};
	const managerRef = useRef(null);
	useEffect(() => {}, []);
	useEffect(() => {
		if (!locale || !managerRef.current) return;
		managerRef.current.currentLocale.set(locale);
	}, [locale]);
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/editor/EditorProvider.mjs
var EditorProvider = ({ children }) => {
	useEditor();
	return children;
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+config@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/config/dist/esm/utils/setIntlayerIdentifier.mjs
/**
* Sets the version of Intlayer in the window object.
* This is used for Intlayer detection in the browser.
*/
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/client/IntlayerProvider.mjs
/**
* Context that stores the current locale on the client side.
*/
var IntlayerClientContext = createContext({
	locale: localeInStorage ?? internationalization?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: true
});
/**
* Provider that stores the current locale on the client side.
*
* This component is focused on content delivery without the editor features.
*
* @param props - The provider props.
* @returns The provider component.
*/
var IntlayerProviderContent = ({ locale: localeProp, defaultLocale: defaultLocaleProp, children, setLocale: setLocaleProp, disableEditor, isCookieEnabled }) => {
	const { locales: availableLocales, defaultLocale: defaultLocaleConfig } = internationalization ?? {};
	const [currentLocale, setCurrentLocale] = useState(localeProp ?? localeInStorage ?? defaultLocaleProp ?? defaultLocaleConfig);
	useEffect(() => {
		if (localeProp && localeProp !== currentLocale) setCurrentLocale(localeProp);
	}, [localeProp]);
	useEffect(() => {
		setIntlayerIdentifier();
	}, []);
	const setLocaleBase = (newLocale) => {
		if (currentLocale.toString() === newLocale.toString()) return;
		if (!availableLocales?.map(String).includes(newLocale)) {
			console.error(`Locale ${newLocale} is not available`);
			return;
		}
		setCurrentLocale(newLocale);
		setLocaleInStorage(newLocale, isCookieEnabled);
	};
	const setLocale = setLocaleProp ?? setLocaleBase;
	const resolvedLocale = localeResolver(currentLocale);
	return /* @__PURE__ */ jsx(IntlayerClientContext.Provider, {
		value: {
			locale: resolvedLocale,
			setLocale,
			disableEditor
		},
		children
	});
};
/**
* Main provider for Intlayer in React applications.
*
* It includes the editor provider by default, allowing for live content editing
* if configured.
*
* @param props - The provider props.
* @returns The provider component with editor support.
*
* @example
* ```tsx
* import { IntlayerProvider } from 'react-intlayer';
*
* const App = () => (
*   <IntlayerProvider>
*     <MyComponent />
*   </IntlayerProvider>
* );
* ```
*/
var IntlayerProvider = ({ children, ...props }) => /* @__PURE__ */ jsxs(IntlayerProviderContent, {
	...props,
	children: [/* @__PURE__ */ jsx(EditorProvider, {}), children]
});
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/client/useLocale.mjs
/**
* Client-side hook to get the current locale and related locale management functions.
*
* @param props - Optional properties for the hook.
* @returns An object containing the current locale, default locale, available locales, and a function to update the locale.
*
* @example
* ```tsx
* import { useLocale } from 'react-intlayer';
*
* const LocaleSwitcher = () => {
*   const { locale, setLocale, availableLocales } = useLocale();
*
*   return (
*     <select value={locale} onChange={(e) => setLocale(e.target.value)}>
*       {availableLocales.map((loc) => (
*         <option key={loc} value={loc}>{loc}</option>
*       ))}
*     </select>
*   );
* };
* ```
*/
var useLocale = ({ isCookieEnabled, onLocaleChange } = {}) => {
	const { defaultLocale, locales: availableLocales } = internationalization ?? {};
	const { locale, setLocale: setLocaleState, isCookieEnabled: isCookieEnabledContext } = useContext(IntlayerClientContext) ?? {};
	return {
		locale,
		defaultLocale,
		availableLocales,
		setLocale: useCallback((locale) => {
			if (!availableLocales?.map(String).includes(locale)) {
				console.error(`Locale ${locale} is not available`);
				return;
			}
			setLocaleState(locale);
			setLocaleInStorage(locale, isCookieEnabled ?? isCookieEnabledContext ?? true);
			onLocaleChange?.(locale);
		}, [
			availableLocales,
			onLocaleChange,
			setLocaleState,
			isCookieEnabled
		])
	};
};
//#endregion
//#region src/components/LocaleSwitcher.tsx
function LocaleSwitcher() {
	const navigate = useNavigate();
	const { locale, availableLocales, setLocale } = useLocale({ onLocaleChange: (newLocale) => {
		navigate({
			to: ".",
			params: (prev) => ({
				...prev,
				locale: newLocale
			})
		});
	} });
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ jsx("select", {
			value: locale,
			onChange: (e) => setLocale(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: availableLocales.map((locale) => /* @__PURE__ */ jsx("option", {
				value: locale,
				children: getLocaleName(locale)
			}, locale))
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function Wrapper({ children }) {
	return /* @__PURE__ */ jsx(IntlayerProvider, {
		locale: "en",
		children
	});
}
//#endregion
//#region src/components/LocaleSwitcher.wrapper.tsx
function Wrapped() {
	return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(LocaleSwitcher, {}) });
}
//#endregion
export { Wrapped as default };

"use client";
import NextLink from "next/link";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { jsx } from "react/jsx-runtime";
import { usePathname, useRouter } from "next/navigation.js";
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
	"mode": "prefix-all",
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
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/utils/checkIsURLAbsolute.mjs
var checkIsURLAbsolute = (url) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/getPathWithoutLocale.mjs
/**
* Removes the locale segment from the given URL or pathname if present.
* Also removes locale from search parameters if present.
*
* This function get the locales from the configuration if not provided.
*
* Example:
*
* ```ts
* getPathWithoutLocale('/en/dashboard') // Returns '/dashboard'
* getPathWithoutLocale('/fr/dashboard') // Returns '/dashboard'
* getPathWithoutLocale('/dashboard') // Returns '/dashboard'
* getPathWithoutLocale('dashboard') // Returns 'dashboard'
* getPathWithoutLocale('/dashboard?locale=fr') // Returns '/dashboard'
* getPathWithoutLocale('https://example.com/en/dashboard') // Returns 'https://example.com/dashboard'
* getPathWithoutLocale('https://example.com/fr/dashboard') // Returns 'https://example.com/dashboard'
* getPathWithoutLocale('https://example.com/dashboard') // Returns 'https://example.com/dashboard'
* getPathWithoutLocale('https://example.com/dashboard?locale=fr') // Returns 'https://example.com/dashboard'
* ```
*
* @param inputUrl - The complete URL string or pathname to process.
* @param locales - Optional array of supported locales. Defaults to `localesDefault`.
* @returns The URL string or pathname without the locale segment or locale search parameter.
*/
var getPathWithoutLocale = (inputUrl, locales = internationalization?.locales) => {
	const isAbsoluteUrl = checkIsURLAbsolute(inputUrl);
	let fixedInputUrl = inputUrl;
	if (inputUrl?.endsWith("/")) fixedInputUrl = inputUrl.slice(0, -1);
	const url = isAbsoluteUrl ? new URL(fixedInputUrl) : new URL(fixedInputUrl, "http://example.com");
	const pathname = url.pathname;
	if (!pathname.startsWith("/")) url.pathname = `/${pathname}`;
	{
		const pathSegments = pathname.split("/");
		const firstSegment = pathSegments[1];
		if (locales?.includes(firstSegment)) {
			pathSegments.splice(1, 1);
			url.pathname = pathSegments.join("/") ?? "/";
		}
	}
	if (isAbsoluteUrl) return url.toString();
	return url.toString().replace("http://example.com", "");
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+config@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/config/dist/esm/defaultValues/internationalization.mjs
var LOCALES = ["en"];
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/getPrefix.mjs
/**
* Resolves routing configuration by merging provided options with configuration defaults.
* Single source of truth for default routing config resolution across all localization functions.
*/
var resolveRoutingConfig = (options = {}) => ({
	defaultLocale: internationalization?.defaultLocale ?? "en",
	mode: routing?.mode ?? "prefix-no-default",
	locales: internationalization?.locales ?? LOCALES,
	rewrite: routing?.rewrite,
	domains: routing?.domains,
	...options
});
/**
* Determines the URL prefix for a given locale based on the routing mode configuration.
*
* Example:
*
* ```ts
*  // prefix-no-default mode with default locale
*  getPrefix('en', { defaultLocale: 'en', mode: 'prefix-no-default' })
*     // Returns { prefix: '', localePrefix: undefined }
*
*  // prefix-no-default mode with non-default locale
*  getPrefix('fr', { defaultLocale: 'en', mode: 'prefix-no-default' })
*     // Returns { prefix: '/fr', localePrefix: 'fr' }
*
*  // prefix-all mode
*  getPrefix('en', { defaultLocale: 'en', mode: 'prefix-all' })
*     // Returns { prefix: '/en', localePrefix: locale }
*
*  // search-params mode
*  getPrefix('en', { defaultLocale: 'en', mode: 'search-params' })
*     // Returns { prefix: '', localePrefix: undefined }
*
*  // no-prefix mode
*  getPrefix('en', { defaultLocale: 'en', mode: 'no-prefix' })
*     // Returns { prefix: '', localePrefix: undefined }
* ```
*
* @param locale - The locale to check for prefix. If not provided, uses configured default locale.
* @param options - Configuration options
* @param options.defaultLocale - The default locale. Defaults to configured default locale.
* @param options.mode - URL routing mode for locale handling. Defaults to configured mode.
* @returns An object containing pathPrefix, prefix, and localePrefix for the given locale.
*/
var getPrefix = (locale, options = {}) => {
	const { defaultLocale, mode, locales, domains } = resolveRoutingConfig(options);
	if (!locale || !locales.includes(locale)) return {
		prefix: "",
		localePrefix: void 0
	};
	if (mode === "prefix-all" || mode === "prefix-no-default" && defaultLocale !== locale) return {
		prefix: `${locale}/`,
		localePrefix: locale
	};
	return {
		prefix: "",
		localePrefix: void 0
	};
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/rewriteUtils.mjs
/**
* Normalizes legacy Record format or extracts specialized rules from RewriteObject.
*/
var getRewriteRules = (rewrite, context = "url") => {};
/**
* Given a localized URL (e.g., "/produits/123"), finds the canonical internal path (e.g., "/products/123").
* If locale is provided, only check for that locale. Otherwise, check for all locales.
*/
var getCanonicalPath = (localizedPath, locale, rewriteRules) => {
	return localizedPath;
};
/**
* Given a canonical path (e.g., "/products/123"), finds the localized URL pattern (e.g., "/produits/123").
*/
var getLocalizedPath = (canonicalPath, locale, rewriteRules) => {
	return {
		path: canonicalPath,
		isRewritten: false
	};
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/getLocalizedUrl.mjs
/**
* Generate URL by prefixing the given URL with the referenced locale or adding search parameters
* based on the routing mode. Handles both absolute and relative URLs appropriately.
*
* This function gets the locales, default locale, and routing mode from the configuration if not provided.
*
* Example:
*
* ```ts
*  // prefix-no-default mode
*  getLocalizedUrl('/about', 'fr', { locales: ['en', 'fr'], defaultLocale: 'en', mode: 'prefix-no-default' });
*  // Returns '/fr/about' for the French locale
*  // Returns '/about' for the English locale (default)
*
*  // prefix-all mode
*  getLocalizedUrl('/about', 'en', { locales: ['en', 'fr'], defaultLocale: 'en', mode: 'prefix-all' });
*  // Returns '/en/about' for the English locale
*  // Returns '/fr/about' for the French locale
*
*  // search-params mode
*  getLocalizedUrl('/about', 'fr', { locales: ['en', 'fr'], defaultLocale: 'en', mode: 'search-params' });
*  // Returns '/about?locale=fr' for the French locale
*
*  // no-prefix mode
*  getLocalizedUrl('/about', 'fr', { locales: ['en', 'fr'], defaultLocale: 'en', mode: 'no-prefix' });
*  // Returns '/about' for any locale
* ```
*
* @param url - The original URL string to be processed.
* @param currentLocale - The current locale.
* @param options - Configuration options
* @param options.locales - Optional array of supported locales. Defaults to configured locales.
* @param options.defaultLocale - The default locale. Defaults to configured default locale.
* @param options.mode - URL routing mode for locale handling. Defaults to configured mode.
* @param options.currentDomain - Hostname of the page being rendered. Used to decide
*   whether to emit a relative URL (same domain) or an absolute URL (cross-domain).
*   Auto-detected from the input URL or `window.location` when omitted.
* @returns The localized URL for the current locale.
*/
var getLocalizedUrl = (url, currentLocale = internationalization?.defaultLocale, options = {}) => {
	const { defaultLocale, mode, locales, rewrite, domains, currentDomain } = resolveRoutingConfig(options);
	const urlWithoutLocale = getPathWithoutLocale(url, locales);
	const rewriteRules = getRewriteRules(rewrite, "url");
	const isAbsoluteUrl = checkIsURLAbsolute(urlWithoutLocale);
	const parsedUrl = isAbsoluteUrl ? new URL(urlWithoutLocale) : new URL(urlWithoutLocale, "http://example.com");
	const translatedPathname = getLocalizedPath(getCanonicalPath(parsedUrl.pathname, void 0, rewriteRules), currentLocale, rewriteRules).path;
	const baseUrl = isAbsoluteUrl ? `${parsedUrl.protocol}//${parsedUrl.host}` : "";
	const { prefix } = getPrefix(currentLocale, {
		defaultLocale,
		mode,
		locales,
		domains
	});
	let localizedPath = `/${prefix}${translatedPathname}`.replace(/\/+/g, "/");
	if (localizedPath.length > 1 && localizedPath.endsWith("/")) localizedPath = localizedPath.slice(0, -1);
	return `${baseUrl}${localizedPath}${parsedUrl.search}${parsedUrl.hash}`;
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/utils/localeStorage.mjs
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
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/getBrowserLocale.mjs
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
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/useLocaleStorage.mjs
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
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/IntlayerProvider.mjs
/**
* Context that stores the current locale on the client side.
*/
var IntlayerClientContext = createContext({
	locale: localeInStorage ?? internationalization?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: true
});
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/useLocale.mjs
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
var useLocale$1 = ({ isCookieEnabled, onLocaleChange } = {}) => {
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
//#region ../../node_modules/.bun/next-intlayer@8.7.1-canary-0+c0daa947c99913c1/node_modules/next-intlayer/dist/esm/client/useLocale.mjs
var usePathWithoutLocale = () => {
	const pathname = usePathname();
	const [fullPath, setFullPath] = useState(pathname);
	useEffect(() => {
		const search = typeof window !== "undefined" ? window.location.search : "";
		setFullPath(search ? `${pathname}${search}` : pathname);
	}, [pathname]);
	return useMemo(() => getPathWithoutLocale(fullPath), [fullPath]);
};
/**
* Hook to manage the current locale in Next.js App Router.
*
* This hook extends the base `useLocale` from `react-intlayer` by adding
* Next.js-specific navigation logic for locale changes.
*
* @param props - Optional properties to configure locale change behavior.
* @returns An object containing the current locale, path without locale, and functions to update the locale.
*
* @example
* ```tsx
* 'use client';
*
* import { useLocale } from 'next-intlayer';
*
* const LocaleSwitcher = () => {
*   const { setLocale } = useLocale({ onChange: 'push' });
*
*   return (
*     <button onClick={() => setLocale('fr')}>Switch to French</button>
*   );
* };
* ```
*/
var useLocale = ({ onChange = "replace" } = {}) => {
	const { replace, push } = useRouter();
	const pathWithoutLocale = usePathWithoutLocale();
	return {
		...useLocale$1({ onLocaleChange: useCallback((locale) => {
			if (!onChange) return;
			const pathWithLocale = getLocalizedUrl(pathWithoutLocale, locale, { currentDomain: void 0 });
			if (typeof onChange === "function") {
				onChange({
					locale,
					path: pathWithLocale
				});
				return;
			}
			if (onChange === "replace") replace(pathWithLocale);
			if (onChange === "push") push(pathWithLocale);
		}, [
			replace,
			push,
			pathWithoutLocale,
			onChange
		]) }),
		pathWithoutLocale
	};
};
//#endregion
//#region src/components/Link.tsx
/**
* Utility function to check whether a given URL is external.
* If the URL starts with http:// or https://, it's considered external.
*/
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
/**
* A custom Link component that adapts the href attribute based on the current locale.
* For internal links, it uses `getLocalizedUrl` to prefix the URL with the locale (e.g., /fr/about).
* This ensures that navigation stays within the same locale context.
*/
var Link = ({ href, children, ...props }) => {
	const { locale } = useLocale();
	const isExternalLink = checkIsExternalLink(href.toString());
	return /* @__PURE__ */ jsx(NextLink, {
		href: href && !isExternalLink ? getLocalizedUrl(href.toString(), locale) : href,
		...props,
		children
	});
};
//#endregion
export { Link, checkIsExternalLink };

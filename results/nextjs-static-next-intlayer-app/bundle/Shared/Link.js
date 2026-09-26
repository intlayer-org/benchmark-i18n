import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import NextLink from "next/link";
import { jsx } from "react/jsx-runtime";
import { usePathname, useRouter } from "next/navigation.js";
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
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": { "path": "/" }
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
var LOCALES = ["en"];
var checkIsURLAbsolute = (url) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
var getPathWithoutLocale = (inputUrl, locales = internationalization?.locales) => {
	const isAbsoluteUrl = checkIsURLAbsolute(inputUrl);
	let fixedInputUrl = inputUrl;
	if (inputUrl?.endsWith("/")) fixedInputUrl = inputUrl.slice(0, -1);
	const url = isAbsoluteUrl ? new URL(fixedInputUrl) : new URL(fixedInputUrl, "http://e.com");
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
	return url.toString().replace("http://e.com", "");
};
var getCanonicalPath = (localizedPath, locale, rewriteRules) => {
	rewriteRules ?? routing?.rewrite;
	return localizedPath;
};
var resolveRoutingConfig = (options = {}) => ({
	...options,
	defaultLocale: options.defaultLocale ?? internationalization?.defaultLocale ?? "en",
	mode: options.mode ?? routing?.mode ?? "prefix-no-default",
	locales: options.locales ?? internationalization?.locales ?? LOCALES,
	rewrite: options.rewrite ?? routing?.rewrite,
	domains: options.domains ?? routing?.domains
});
var isDeclaredLocale = (value, locales) => !!value && (locales ?? internationalization.locales).includes(value);
var getPrefix = (locale, options = {}) => {
	const { defaultLocale, mode, locales, domains } = resolveRoutingConfig(options);
	if (!locale || !isDeclaredLocale(locale, locales)) return {
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
var resolveLocalizedPath = (canonicalPath, locale, rewriteRules) => {
	return {
		path: canonicalPath,
		isRewritten: false
	};
};
var getLocalizedPath = (canonicalPath, locale = internationalization?.defaultLocale, options = {}) => {
	const { defaultLocale, mode, locales, rewrite, domains } = resolveRoutingConfig(options);
	const pathWithoutLocale = getPathWithoutLocale(canonicalPath, locales);
	const rewriteRules = void 0;
	const parsedPath = new URL(pathWithoutLocale, "http://e.com");
	const translatedPathname = resolveLocalizedPath(getCanonicalPath(parsedPath.pathname, void 0, rewriteRules), locale, rewriteRules).path;
	const { prefix } = getPrefix(locale, {
		defaultLocale,
		mode,
		locales,
		domains
	});
	let localizedPath = `/${prefix}${translatedPathname}`.replace(/\/+/g, "/");
	if (localizedPath.length > 1 && localizedPath.endsWith("/")) localizedPath = localizedPath.slice(0, -1);
	return `${localizedPath}${parsedPath.search}${parsedPath.hash}`;
};
var getLocalizedUrl = (url, currentLocale = internationalization?.defaultLocale, options = {}) => {
	const { domains, currentDomain } = resolveRoutingConfig(options);
	const isAbsoluteUrl = checkIsURLAbsolute(url);
	const parsedUrl = isAbsoluteUrl ? new URL(url) : new URL(url, "http://e.com");
	return `${isAbsoluteUrl ? `${parsedUrl.protocol}//${parsedUrl.host}` : ""}${getLocalizedPath(`${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`, currentLocale, options)}`;
};
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
var isStoredLocaleCached = false;
var storedLocale;
var getCachedLocaleFromStorageClient = () => {
	if (typeof window === "undefined") return getLocaleFromStorageClient(localeStorageOptions);
	if (!isStoredLocaleCached) {
		storedLocale = getLocaleFromStorageClient(localeStorageOptions);
		isStoredLocaleCached = true;
	}
	return storedLocale;
};
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	isStoredLocaleCached = false;
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
var getLocaleInStorage = getCachedLocaleFromStorageClient;
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
var IntlayerClientContext = createContext({
	get locale() {
		return getLocaleInStorage() ?? internationalization?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: true
});
var { defaultLocale, locales: availableLocales } = internationalization ?? {};
var useLocale$1 = ({ isCookieEnabled, onLocaleChange } = {}) => {
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
var usePathname$1 = () => {
	const nextPathname = usePathname();
	const [searchParams, setSearchParams] = useState("");
	useEffect(() => {
		const search = typeof window !== "undefined" ? window.location.search : "";
		setSearchParams(search);
	}, [nextPathname]);
	const fullPath = searchParams ? `${nextPathname}${searchParams}` : nextPathname;
	return useMemo(() => getPathWithoutLocale(fullPath), [fullPath]);
};
var useLocale = ({ onChange = "replace", onLocaleChange, isCookieEnabled } = {}) => {
	const { replace, push } = useRouter();
	const pathWithoutLocale = usePathname$1();
	return {
		...useLocale$1({
			onLocaleChange: useCallback((locale) => {
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
				onLocaleChange?.(locale);
			}, [
				replace,
				push,
				pathWithoutLocale,
				onChange,
				onLocaleChange
			]),
			isCookieEnabled
		}),
		pathWithoutLocale
	};
};
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
var Link = ({ href, children, ...props }) => {
	const { locale } = useLocale();
	const isExternalLink = checkIsExternalLink(href.toString());
	const hrefI18n = href && !isExternalLink ? getLocalizedUrl(href.toString(), locale) : href;
	return jsx(NextLink, {
		href: hrefI18n,
		prefetch: false,
		...props,
		children
	});
};
function recordHydrationDuration() {
	if (typeof window === "undefined") return;
	console.log("--- BROWSER: RootDocument mounted");
	performance.mark("hydration_end");
	try {
		if (performance.getEntriesByName("hydration_start").length > 0) {
			performance.measure("hydration_duration", "hydration_start", "hydration_end");
			console.log("--- BROWSER: hydration_duration measured");
			const duration = performance.getEntriesByName("hydration_duration")[0]?.duration;
			if (duration) console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
		} else console.warn("--- BROWSER: hydration_start NOT FOUND");
	} catch (err) {
		console.warn("Could not measure hydration duration:", err);
	}
}
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
function AppProviders({ children, locale }) {
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		if (locale) document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return children;
}
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale: "en",
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(Link, {}) });
}
export { Wrapped as default };

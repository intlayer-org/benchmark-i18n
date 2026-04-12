import { useEffect, useState } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
/** @type {any} */
var URLPattern = {};
/**
* The project's locales that have been specified in the settings.
*
* @example
*   if (locales.includes(userSelectedLocale) === false) {
*     throw new Error('Locale is not available');
*   }
*/
var locales = [
	"en",
	"de",
	"fr",
	"es",
	"ja",
	"zh",
	"ko",
	"it",
	"pt"
];
/** @type {string} */
var cookieName = "PARAGLIDE_LOCALE";
/** @type {number} */
var cookieMaxAge = 3456e4;
/**
* @type {Array<"cookie" | "baseLocale" | "globalVariable" | "url" | "preferredLanguage" | "localStorage" | `custom-${string}`>}
*/
var strategy = [
	"cookie",
	"globalVariable",
	"baseLocale"
];
/**
* Route-level strategy overrides.
*
* `match` uses URLPattern syntax.
*
* @type {Array<{
*   match: string;
*   strategy?: Array<"cookie" | "baseLocale" | "globalVariable" | "url" | "preferredLanguage" | "localStorage" | `custom-${string}`>;
*   exclude?: boolean;
* }>}
*/
var routeStrategies = [];
/** @type {string | undefined} */
var cachedRouteStrategyUrl;
/** @type {{ match: string; strategy?: typeof strategy; exclude?: boolean } | undefined} */
var cachedRouteStrategy;
/**
* @param {string | URL} url
* @returns {{ match: string; strategy?: typeof strategy; exclude?: boolean } | undefined}
*/
function findMatchingRouteStrategy(url) {
	if (routeStrategies.length === 0) return;
	const urlString = typeof url === "string" ? url : url.href;
	if (cachedRouteStrategyUrl === urlString) return cachedRouteStrategy;
	const urlObject = new URL(urlString, "http://dummy.com");
	let match;
	for (const routeStrategy of routeStrategies) if (new URLPattern(routeStrategy.match, urlObject.href).exec(urlObject.href)) {
		match = routeStrategy;
		break;
	}
	cachedRouteStrategyUrl = urlString;
	cachedRouteStrategy = match;
	return match;
}
/**
* Returns the strategy to use for a specific URL.
*
* If no route strategy matches (or the matching rule is `exclude: true`),
* the global strategy is returned.
*
* @param {string | URL} url
* @returns {typeof strategy}
*/
function getStrategyForUrl(url) {
	const routeStrategy = findMatchingRouteStrategy(url);
	if (routeStrategy && routeStrategy.exclude !== true && Array.isArray(routeStrategy.strategy)) return routeStrategy.strategy;
	return strategy;
}
/**
* @typedef {{
* 		getStore(): {
*   		locale?: Locale,
* 			origin?: string,
* 			messageCalls?: Set<string>
*   	} | undefined,
* 		run: (store: { locale?: Locale, origin?: string, messageCalls?: Set<string>},
*    cb: any) => any
* }} ParaglideAsyncLocalStorage
*/
/**
* Server side async local storage that is set by `serverMiddleware()`.
*
* The variable is used to retrieve the locale and origin in a server-side
* rendering context without effecting other requests.
*
* @type {ParaglideAsyncLocalStorage | undefined}
*/
var serverAsyncLocalStorage = void 0;
/** @type {any} */ globalThis.__paraglide = globalThis.__paraglide ?? {};
/** @type {any} */ globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
/**
* This is a fallback to get started with a custom
* strategy and avoid type errors.
*
* The implementation is overwritten
* by `overwriteGetLocale()` and `defineSetLocale()`.
*
* @type {Locale | undefined}
*/
var _locale;
var localeInitiallySet = false;
/**
* Get the current locale.
*
* The locale is resolved using your configured strategies (URL, cookie, localStorage, etc.)
* in the order they are defined. In SSR contexts, the locale is retrieved from AsyncLocalStorage
* which is set by the `paraglideMiddleware()`.
*
* @see https://inlang.com/m/gerre34r/library-inlang-paraglideJs/strategy - Configure locale detection strategies
*
* @example
*   if (getLocale() === 'de') {
*     console.log('Germany 🇩🇪');
*   } else if (getLocale() === 'nl') {
*     console.log('Netherlands 🇳🇱');
*   }
*
* @returns {Locale} The current locale.
*/
var getLocale = () => {
	if (serverAsyncLocalStorage) {
		const locale = serverAsyncLocalStorage?.getStore()?.locale;
		if (locale) return locale;
	}
	let strategyToUse = strategy;
	if (typeof window !== "undefined" && window.location?.href) strategyToUse = getStrategyForUrl(window.location.href);
	const resolved = resolveLocaleWithStrategies(strategyToUse, typeof window !== "undefined" ? window.location?.href : void 0);
	if (resolved) {
		if (!localeInitiallySet) {
			_locale = resolved;
			localeInitiallySet = true;
			setLocale(resolved, { reload: false });
		}
		return resolved;
	}
	throw new Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
/**
* @param {typeof strategy} strategyToUse
* @param {string | undefined} urlForUrlStrategy
* @returns {Locale | undefined}
*/
function resolveLocaleWithStrategies(strategyToUse, urlForUrlStrategy) {
	/** @type {string | undefined} */
	let locale;
	for (const strat of strategyToUse) {
		if (strat === "cookie") locale = extractLocaleFromCookie();
		else if (strat === "baseLocale") locale = "en";
		else if (strat === "globalVariable" && _locale !== void 0) locale = _locale;
		else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
			const handler = customClientStrategies.get(strat);
			if (handler) {
				const result = handler.getLocale();
				if (result instanceof Promise) continue;
				if (result !== void 0) return assertIsLocale(result);
			}
		}
		const matchedLocale = toLocale(locale);
		if (matchedLocale) return matchedLocale;
	}
}
/**
* Navigates to the localized URL, or reloads the current page
*
* @param {string} [newLocation] The new location
*/
var navigateOrReload = (newLocation) => {
	if (newLocation) window.location.href = newLocation;
	else window.location.reload();
};
/**
* @typedef {(newLocale: Locale, options?: { reload?: boolean }) => void | Promise<void>} SetLocaleFn
*/
/**
* Set the locale.
*
* Updates the locale using your configured strategies (cookie, localStorage, URL, etc.).
* By default, this reloads the page on the client to reflect the new locale. Reloading
* can be disabled by passing `reload: false` as an option, but you'll need to ensure
* the UI updates to reflect the new locale.
*
* If any custom strategy's `setLocale` function is async, then this function
* will become async as well.
*
* @see https://inlang.com/m/gerre34r/library-inlang-paraglideJs/strategy
*
* @example
*   setLocale('en');
*
* @example
*   setLocale('en', { reload: false });
*
* @type {SetLocaleFn}
*/
var setLocale = (newLocale, options) => {
	const optionsWithDefaults = {
		reload: true,
		...options
	};
	/** @type {Locale | undefined} */
	let currentLocale;
	try {
		currentLocale = getLocale();
	} catch {}
	/** @type {Array<Promise<void>>} */
	const customSetLocalePromises = [];
	/** @type {string | undefined} */
	let newLocation = void 0;
	let strategyToUse = strategy;
	if (typeof window !== "undefined" && window.location?.href) strategyToUse = getStrategyForUrl(window.location.href);
	for (const strat of strategyToUse) if (strat === "globalVariable") _locale = newLocale;
	else if (strat === "cookie") {
		if (typeof document === "undefined" || typeof window === "undefined") continue;
		const cookieString = `${cookieName}=${newLocale}; path=/; max-age=${cookieMaxAge}`;
		document.cookie = cookieString;
	} else if (strat === "baseLocale") continue;
	else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
		const handler = customClientStrategies.get(strat);
		if (handler) {
			let result = handler.setLocale(newLocale);
			if (result instanceof Promise) {
				result = result.catch((error) => {
					throw new Error(`Custom strategy "${strat}" setLocale failed.`, { cause: error });
				});
				customSetLocalePromises.push(result);
			}
		}
	}
	const runReload = () => {
		if (optionsWithDefaults.reload && window.location && newLocale !== currentLocale) navigateOrReload(newLocation);
	};
	if (customSetLocalePromises.length) return Promise.all(customSetLocalePromises).then(() => {
		runReload();
	});
	runReload();
};
/**
* Coerces a locale-like string to the canonical locale value used by the runtime.
*
* @param {unknown} value
* @returns {Locale | undefined}
*/
function toLocale(value) {
	if (typeof value !== "string") return;
	const lowerValue = value.toLowerCase();
	for (const locale of locales) if (locale.toLowerCase() === lowerValue) return locale;
}
/**
* Asserts that the input can be normalized to a locale.
*
* @param {unknown} input - The input to check.
* @returns {Locale} The input normalized to a Locale.
* @throws {Error} If the input is not a locale.
*/
function assertIsLocale(input) {
	const locale = toLocale(input);
	if (locale) return locale;
	throw new Error(`Invalid locale: ${input}. Expected one of: ${locales.join(", ")}`);
}
/**
* Extracts a cookie from the document.
*
* Will return undefined if the document is not available or if the cookie is not set.
* The `document` object is not available in server-side rendering, so this function should not be called in that context.
*
* @returns {Locale | undefined}
*/
function extractLocaleFromCookie() {
	if (typeof document === "undefined" || !document.cookie) return;
	const locale = document.cookie.match(new RegExp(`(^| )${cookieName}=([^;]+)`))?.[2];
	return toLocale(locale);
}
/** @type {Map<string, CustomClientStrategyHandler>} */
var customClientStrategies = /* @__PURE__ */ new Map();
/**
* Checks if the given strategy is a custom strategy.
*
* @param {unknown} strategy The name of the custom strategy to validate.
* Must be a string that starts with "custom-" followed by alphanumeric characters, hyphens, or underscores.
* @returns {boolean} Returns true if it is a custom strategy, false otherwise.
*/
function isCustomStrategy(strategy) {
	return typeof strategy === "string" && /^custom-[A-Za-z0-9_-]+$/.test(strategy);
}
/**
* A locale that is available in the project.
*
* @example
*   setLocale(request.locale as Locale)
*
* @typedef {typeof locales[number]} Locale
*/
/**
* A branded type representing a localized string.
*
* Message functions return this type instead of \`string\`, enabling TypeScript
* to distinguish translated strings from regular strings at compile time.
* This allows you to enforce that only properly localized content is used
* in your UI components.
*
* Since \`LocalizedString\` is a branded subtype of \`string\`, it remains fully
* backward compatible—you can pass it anywhere a \`string\` is expected.
*
* @example
*   // Enforce localized strings in your components
*   function PageTitle(props: { title: LocalizedString }) {
*     return <h1>{props.title}</h1>
*   }
*
*   // ✅ Correct: using a message function
*   <PageTitle title={m.welcome_title()} />
*
*   // ❌ Type error: raw strings are not LocalizedString
*   <PageTitle title="Welcome" />
*
* @example
*   // LocalizedString is assignable to string (backward compatible)
*   const localized: LocalizedString = m.greeting()
*   const str: string = localized  // ✅ works fine
*
*   // But string is not assignable to LocalizedString
*   const raw: LocalizedString = "Hello"  // ❌ Type error
*
* @example
*   // Catches accidental string concatenation
*   function showMessage(msg: LocalizedString) { ... }
*
*   showMessage(m.hello())                    // ✅
*   showMessage("Hello " + userName)          // ❌ Type error
*   showMessage(m.hello_user({ name: userName }))  // ✅ use params instead
*
* @typedef {string & { readonly __brand: 'LocalizedString' }} LocalizedString
*/
/**
* A single markup option passed to a tag instance.
*
* @typedef {{
*   name: string;
*   value: unknown;
* }} MessageMarkupOption
*/
/**
* A single static markup attribute attached to a tag instance.
*
* @typedef {{
*   name: string;
*   value: string | true;
* }} MessageMarkupAttribute
*/
/**
* Record of markup options for a tag instance.
*
* @typedef {Record<string, unknown>} MessageMarkupOptions
*/
/**
* Record of markup attributes for a tag instance.
*
* @typedef {Record<string, string | true>} MessageMarkupAttributes
*/
/**
* Type-level schema for a single markup tag.
*
* @typedef {{
*   options: MessageMarkupOptions;
*   attributes: MessageMarkupAttributes;
*   children: boolean;
* }} MessageMarkupTag
*/
/**
* Type-level schema for all markup tags in a message.
*
* @typedef {Record<string, MessageMarkupTag>} MessageMarkupSchema
*/
/**
* Type-only metadata attached to compiled message functions.
*
* @template Inputs
* @template Options
* @template {MessageMarkupSchema} [Markup = MessageMarkupSchema]
* @typedef {{
*   readonly __paraglide?: {
*     inputs: Inputs;
*     options: Options;
*     markup: Markup;
*   };
* }} MessageMetadata
*/
/**
* A compiled, framework-neutral message part.
*
* @typedef {{
*   type: "text";
*   value: string;
* } | {
*   type: "markup-start";
*   name: string;
*   options: MessageMarkupOptions;
*   attributes: MessageMarkupAttributes;
* } | {
*   type: "markup-end";
*   name: string;
*   options: MessageMarkupOptions;
*   attributes: MessageMarkupAttributes;
* } | {
*   type: "markup-standalone";
*   name: string;
*   options: MessageMarkupOptions;
*   attributes: MessageMarkupAttributes;
* }} MessagePart
*/
/**
* A message function is a message for a specific locale.
*
* @example
*   m.hello({ name: 'world' })
*
* @typedef {(inputs?: Record<string, never>) => LocalizedString} MessageFunction
*/
/**
* A message bundle function that selects the message to be returned.
*
* Uses `getLocale()` under the hood to determine the locale with an option.
*
* @template {string} T
*
* @example
*   *   m.hello({ name: 'world' }, { locale: "en" })
*
* @typedef {(params: Record<string, never>, options: { locale: T }) => LocalizedString} MessageBundleFunction
*/
//#endregion
//#region src/paraglide/messages/theme_toggle_thememodeautosystemclick4.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Theme_Toggle_Thememodeautosystemclick4Inputs */
var en_theme_toggle_thememodeautosystemclick4 = () => {
	return `Theme mode: auto (system). Click to switch to light mode.`;
};
var de_theme_toggle_thememodeautosystemclick4 = () => {
	return `Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.`;
};
var fr_theme_toggle_thememodeautosystemclick4 = () => {
	return `Mode thématique : auto (système). Cliquez pour passer en mode clair.`;
};
var es_theme_toggle_thememodeautosystemclick4 = () => {
	return `Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.`;
};
var ja_theme_toggle_thememodeautosystemclick4 = () => {
	return `テーマモード：自動（システム）。クリックしてライトモードに切り替えます。`;
};
var zh_theme_toggle_thememodeautosystemclick4 = () => {
	return `主题模式：自动（系统）。点击切换到明亮模式。`;
};
var ko_theme_toggle_thememodeautosystemclick4 = () => {
	return `테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.`;
};
var it_theme_toggle_thememodeautosystemclick4 = () => {
	return `Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.`;
};
var pt_theme_toggle_thememodeautosystemclick4 = () => {
	return `Modo de tema: automático (sistema). Clique para mudar para o modo claro.`;
};
/**
* | output |
* | --- |
* | "Theme mode: auto (system). Click to switch to light mode." |
*
* @param {Theme_Toggle_Thememodeautosystemclick4Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var theme_toggle_thememodeautosystemclick4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "de") return de_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "fr") return fr_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "es") return es_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "ja") return ja_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "zh") return zh_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "ko") return ko_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "it") return it_theme_toggle_thememodeautosystemclick4(inputs);
	return pt_theme_toggle_thememodeautosystemclick4(inputs);
});
//#endregion
//#region src/paraglide/messages/theme_toggle_thememodelightclick3.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Theme_Toggle_Thememodelightclick3Inputs */
var en_theme_toggle_thememodelightclick3 = () => {
	return `Theme mode: light. Click to switch to dark mode.`;
};
var de_theme_toggle_thememodelightclick3 = () => {
	return `Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.`;
};
var fr_theme_toggle_thememodelightclick3 = () => {
	return `Mode thématique : clair. Cliquez pour passer en mode sombre.`;
};
var es_theme_toggle_thememodelightclick3 = () => {
	return `Modo de tema: claro. Haz clic para cambiar al modo oscuro.`;
};
var ja_theme_toggle_thememodelightclick3 = () => {
	return `テーマモード：ライト。クリックしてダークモードに切り替えます。`;
};
var zh_theme_toggle_thememodelightclick3 = () => {
	return `主题模式：明亮。点击切换到暗黑模式。`;
};
var ko_theme_toggle_thememodelightclick3 = () => {
	return `테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.`;
};
var it_theme_toggle_thememodelightclick3 = () => {
	return `Modalità tema: chiara. Clicca per passare alla modalità scura.`;
};
var pt_theme_toggle_thememodelightclick3 = () => {
	return `Modo de tema: claro. Clique para mudar para o modo escuro.`;
};
/**
* | output |
* | --- |
* | "Theme mode: light. Click to switch to dark mode." |
*
* @param {Theme_Toggle_Thememodelightclick3Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var theme_toggle_thememodelightclick3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_thememodelightclick3(inputs);
	if (locale === "de") return de_theme_toggle_thememodelightclick3(inputs);
	if (locale === "fr") return fr_theme_toggle_thememodelightclick3(inputs);
	if (locale === "es") return es_theme_toggle_thememodelightclick3(inputs);
	if (locale === "ja") return ja_theme_toggle_thememodelightclick3(inputs);
	if (locale === "zh") return zh_theme_toggle_thememodelightclick3(inputs);
	if (locale === "ko") return ko_theme_toggle_thememodelightclick3(inputs);
	if (locale === "it") return it_theme_toggle_thememodelightclick3(inputs);
	return pt_theme_toggle_thememodelightclick3(inputs);
});
//#endregion
//#region src/paraglide/messages/theme_toggle_thememodedarkclick3.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Theme_Toggle_Thememodedarkclick3Inputs */
var en_theme_toggle_thememodedarkclick3 = () => {
	return `Theme mode: dark. Click to switch to auto (system) mode.`;
};
var de_theme_toggle_thememodedarkclick3 = () => {
	return `Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.`;
};
var fr_theme_toggle_thememodedarkclick3 = () => {
	return `Mode thématique : sombre. Cliquez pour passer en mode auto (système).`;
};
var es_theme_toggle_thememodedarkclick3 = () => {
	return `Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).`;
};
var ja_theme_toggle_thememodedarkclick3 = () => {
	return `テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。`;
};
var zh_theme_toggle_thememodedarkclick3 = () => {
	return `主题模式：暗黑。点击切换到自动（系统）模式。`;
};
var ko_theme_toggle_thememodedarkclick3 = () => {
	return `테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.`;
};
var it_theme_toggle_thememodedarkclick3 = () => {
	return `Modalità tema: scura. Clicca per passare alla modalità auto (sistema).`;
};
var pt_theme_toggle_thememodedarkclick3 = () => {
	return `Modo de tema: escuro. Clique para mudar para o modo automático (sistema).`;
};
/**
* | output |
* | --- |
* | "Theme mode: dark. Click to switch to auto (system) mode." |
*
* @param {Theme_Toggle_Thememodedarkclick3Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var theme_toggle_thememodedarkclick3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "de") return de_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "fr") return fr_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "es") return es_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "ja") return ja_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "zh") return zh_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "ko") return ko_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "it") return it_theme_toggle_thememodedarkclick3(inputs);
	return pt_theme_toggle_thememodedarkclick3(inputs);
});
//#endregion
//#region src/paraglide/messages/theme_toggle_themeauto1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Theme_Toggle_Themeauto1Inputs */
var en_theme_toggle_themeauto1 = () => {
	return `Theme: Auto`;
};
var de_theme_toggle_themeauto1 = () => {
	return `Thema: Auto`;
};
var fr_theme_toggle_themeauto1 = () => {
	return `Thème : Auto`;
};
var es_theme_toggle_themeauto1 = () => {
	return `Tema: Auto`;
};
var ja_theme_toggle_themeauto1 = () => {
	return `テーマ：自動`;
};
var zh_theme_toggle_themeauto1 = () => {
	return `主题：自动`;
};
var ko_theme_toggle_themeauto1 = () => {
	return `테마: 자동`;
};
var it_theme_toggle_themeauto1 = () => {
	return `Tema: Auto`;
};
var pt_theme_toggle_themeauto1 = () => {
	return `Tema: Auto`;
};
/**
* | output |
* | --- |
* | "Theme: Auto" |
*
* @param {Theme_Toggle_Themeauto1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var theme_toggle_themeauto1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_themeauto1(inputs);
	if (locale === "de") return de_theme_toggle_themeauto1(inputs);
	if (locale === "fr") return fr_theme_toggle_themeauto1(inputs);
	if (locale === "es") return es_theme_toggle_themeauto1(inputs);
	if (locale === "ja") return ja_theme_toggle_themeauto1(inputs);
	if (locale === "zh") return zh_theme_toggle_themeauto1(inputs);
	if (locale === "ko") return ko_theme_toggle_themeauto1(inputs);
	if (locale === "it") return it_theme_toggle_themeauto1(inputs);
	return pt_theme_toggle_themeauto1(inputs);
});
//#endregion
//#region src/paraglide/messages/theme_toggle_themedark1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Theme_Toggle_Themedark1Inputs */
var en_theme_toggle_themedark1 = () => {
	return `Theme: Dark`;
};
var de_theme_toggle_themedark1 = () => {
	return `Thema: Dunkel`;
};
var fr_theme_toggle_themedark1 = () => {
	return `Thème : Sombre`;
};
var es_theme_toggle_themedark1 = () => {
	return `Tema: Oscuro`;
};
var ja_theme_toggle_themedark1 = () => {
	return `テーマ：ダーク`;
};
var zh_theme_toggle_themedark1 = () => {
	return `主题：暗黑`;
};
var ko_theme_toggle_themedark1 = () => {
	return `테마: 다크`;
};
var it_theme_toggle_themedark1 = () => {
	return `Tema: Scuro`;
};
var pt_theme_toggle_themedark1 = () => {
	return `Tema: Escuro`;
};
/**
* | output |
* | --- |
* | "Theme: Dark" |
*
* @param {Theme_Toggle_Themedark1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var theme_toggle_themedark1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_themedark1(inputs);
	if (locale === "de") return de_theme_toggle_themedark1(inputs);
	if (locale === "fr") return fr_theme_toggle_themedark1(inputs);
	if (locale === "es") return es_theme_toggle_themedark1(inputs);
	if (locale === "ja") return ja_theme_toggle_themedark1(inputs);
	if (locale === "zh") return zh_theme_toggle_themedark1(inputs);
	if (locale === "ko") return ko_theme_toggle_themedark1(inputs);
	if (locale === "it") return it_theme_toggle_themedark1(inputs);
	return pt_theme_toggle_themedark1(inputs);
});
//#endregion
//#region src/paraglide/messages/theme_toggle_themelight1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Theme_Toggle_Themelight1Inputs */
var en_theme_toggle_themelight1 = () => {
	return `Theme: Light`;
};
var de_theme_toggle_themelight1 = () => {
	return `Thema: Hell`;
};
var fr_theme_toggle_themelight1 = () => {
	return `Thème : Clair`;
};
var es_theme_toggle_themelight1 = () => {
	return `Tema: Claro`;
};
var ja_theme_toggle_themelight1 = () => {
	return `テーマ：ライト`;
};
var zh_theme_toggle_themelight1 = () => {
	return `主题：明亮`;
};
var ko_theme_toggle_themelight1 = () => {
	return `테마: 라이트`;
};
var it_theme_toggle_themelight1 = () => {
	return `Tema: Chiaro`;
};
var pt_theme_toggle_themelight1 = () => {
	return `Tema: Claro`;
};
/**
* | output |
* | --- |
* | "Theme: Light" |
*
* @param {Theme_Toggle_Themelight1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var theme_toggle_themelight1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_themelight1(inputs);
	if (locale === "de") return de_theme_toggle_themelight1(inputs);
	if (locale === "fr") return fr_theme_toggle_themelight1(inputs);
	if (locale === "es") return es_theme_toggle_themelight1(inputs);
	if (locale === "ja") return ja_theme_toggle_themelight1(inputs);
	if (locale === "zh") return zh_theme_toggle_themelight1(inputs);
	if (locale === "ko") return ko_theme_toggle_themelight1(inputs);
	if (locale === "it") return it_theme_toggle_themelight1(inputs);
	return pt_theme_toggle_themelight1(inputs);
});
//#endregion
//#region src/components/ThemeToggle.tsx
function getInitialMode() {
	if (typeof window === "undefined") return "auto";
	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") return stored;
	return "auto";
}
function applyThemeMode(mode) {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);
	if (mode === "auto") document.documentElement.removeAttribute("data-theme");
	else document.documentElement.setAttribute("data-theme", mode);
	document.documentElement.style.colorScheme = resolved;
}
function ThemeToggle() {
	const [mode, setMode] = useState("auto");
	useEffect(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);
	useEffect(() => {
		if (mode !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);
	function toggleMode() {
		const nextMode = mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = mode === "auto" ? theme_toggle_thememodeautosystemclick4() : mode === "light" ? theme_toggle_thememodelightclick3() : theme_toggle_thememodedarkclick3();
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick: toggleMode,
		"aria-label": label,
		title: label,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: mode === "auto" ? theme_toggle_themeauto1() : mode === "dark" ? theme_toggle_themedark1() : theme_toggle_themelight1()
	});
}
//#endregion
//#region scripts/Wrapper.tsx
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/components/ThemeToggle.wrapper.tsx
function Wrapped() {
	return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(ThemeToggle, {}) });
}
//#endregion
export { Wrapped as default };

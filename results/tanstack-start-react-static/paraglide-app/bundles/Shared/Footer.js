import "react";
import { Link, useParams } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
//#region src/paraglide/messages/footer_resources.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Footer_ResourcesInputs */
var en_footer_resources = () => {
	return `Resources`;
};
var de_footer_resources = () => {
	return `Ressourcen`;
};
var fr_footer_resources = () => {
	return `Ressources`;
};
var es_footer_resources = () => {
	return `Recursos`;
};
var ja_footer_resources = () => {
	return `リソース`;
};
var zh_footer_resources = () => {
	return `资源`;
};
var ko_footer_resources = () => {
	return `리소스`;
};
var it_footer_resources = () => {
	return `Risorse`;
};
var pt_footer_resources = () => {
	return `Recursos`;
};
/**
* | output |
* | --- |
* | "Resources" |
*
* @param {Footer_ResourcesInputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var footer_resources = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_resources(inputs);
	if (locale === "de") return de_footer_resources(inputs);
	if (locale === "fr") return fr_footer_resources(inputs);
	if (locale === "es") return es_footer_resources(inputs);
	if (locale === "ja") return ja_footer_resources(inputs);
	if (locale === "zh") return zh_footer_resources(inputs);
	if (locale === "ko") return ko_footer_resources(inputs);
	if (locale === "it") return it_footer_resources(inputs);
	return pt_footer_resources(inputs);
});
//#endregion
//#region src/paraglide/messages/footer_contact.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Footer_ContactInputs */
var en_footer_contact = () => {
	return `Contact`;
};
var de_footer_contact = () => {
	return `Kontakt`;
};
var fr_footer_contact = () => {
	return `Contact`;
};
var es_footer_contact = () => {
	return `Contacto`;
};
var ja_footer_contact = () => {
	return `お問い合わせ`;
};
var zh_footer_contact = () => {
	return `联系我们`;
};
var ko_footer_contact = () => {
	return `문의하기`;
};
var it_footer_contact = () => {
	return `Contatti`;
};
var pt_footer_contact = () => {
	return `Contato`;
};
/**
* | output |
* | --- |
* | "Contact" |
*
* @param {Footer_ContactInputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var footer_contact = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_contact(inputs);
	if (locale === "de") return de_footer_contact(inputs);
	if (locale === "fr") return fr_footer_contact(inputs);
	if (locale === "es") return es_footer_contact(inputs);
	if (locale === "ja") return ja_footer_contact(inputs);
	if (locale === "zh") return zh_footer_contact(inputs);
	if (locale === "ko") return ko_footer_contact(inputs);
	if (locale === "it") return it_footer_contact(inputs);
	return pt_footer_contact(inputs);
});
//#endregion
//#region src/paraglide/messages/footer_github.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Footer_GithubInputs */
var en_footer_github = () => {
	return `GitHub`;
};
var de_footer_github = () => {
	return `GitHub`;
};
var fr_footer_github = () => {
	return `GitHub`;
};
var es_footer_github = () => {
	return `GitHub`;
};
var ja_footer_github = () => {
	return `GitHub`;
};
var zh_footer_github = () => {
	return `GitHub`;
};
var ko_footer_github = () => {
	return `GitHub`;
};
var it_footer_github = () => {
	return `GitHub`;
};
var pt_footer_github = () => {
	return `GitHub`;
};
/**
* | output |
* | --- |
* | "GitHub" |
*
* @param {Footer_GithubInputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var footer_github = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_github(inputs);
	if (locale === "de") return de_footer_github(inputs);
	if (locale === "fr") return fr_footer_github(inputs);
	if (locale === "es") return es_footer_github(inputs);
	if (locale === "ja") return ja_footer_github(inputs);
	if (locale === "zh") return zh_footer_github(inputs);
	if (locale === "ko") return ko_footer_github(inputs);
	if (locale === "it") return it_footer_github(inputs);
	return pt_footer_github(inputs);
});
//#endregion
//#region src/paraglide/messages/footer_methodology.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Footer_MethodologyInputs */
var en_footer_methodology = () => {
	return `Methodology`;
};
var de_footer_methodology = () => {
	return `Methodik`;
};
var fr_footer_methodology = () => {
	return `Méthodologie`;
};
var es_footer_methodology = () => {
	return `Metodología`;
};
var ja_footer_methodology = () => {
	return `方法論`;
};
var zh_footer_methodology = () => {
	return `方法论`;
};
var ko_footer_methodology = () => {
	return `방법론`;
};
var it_footer_methodology = () => {
	return `Metodologia`;
};
var pt_footer_methodology = () => {
	return `Metodologia`;
};
/**
* | output |
* | --- |
* | "Methodology" |
*
* @param {Footer_MethodologyInputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var footer_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_methodology(inputs);
	if (locale === "de") return de_footer_methodology(inputs);
	if (locale === "fr") return fr_footer_methodology(inputs);
	if (locale === "es") return es_footer_methodology(inputs);
	if (locale === "ja") return ja_footer_methodology(inputs);
	if (locale === "zh") return zh_footer_methodology(inputs);
	if (locale === "ko") return ko_footer_methodology(inputs);
	if (locale === "it") return it_footer_methodology(inputs);
	return pt_footer_methodology(inputs);
});
//#endregion
//#region src/paraglide/messages/footer_contributing.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Footer_ContributingInputs */
var en_footer_contributing = () => {
	return `Contributing`;
};
var de_footer_contributing = () => {
	return `Beitragen`;
};
var fr_footer_contributing = () => {
	return `Contribuer`;
};
var es_footer_contributing = () => {
	return `Contribuir`;
};
var ja_footer_contributing = () => {
	return `貢献する`;
};
var zh_footer_contributing = () => {
	return `贡献`;
};
var ko_footer_contributing = () => {
	return `기여하기`;
};
var it_footer_contributing = () => {
	return `Contribuire`;
};
var pt_footer_contributing = () => {
	return `Contribuir`;
};
/**
* | output |
* | --- |
* | "Contributing" |
*
* @param {Footer_ContributingInputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var footer_contributing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_contributing(inputs);
	if (locale === "de") return de_footer_contributing(inputs);
	if (locale === "fr") return fr_footer_contributing(inputs);
	if (locale === "es") return es_footer_contributing(inputs);
	if (locale === "ja") return ja_footer_contributing(inputs);
	if (locale === "zh") return zh_footer_contributing(inputs);
	if (locale === "ko") return ko_footer_contributing(inputs);
	if (locale === "it") return it_footer_contributing(inputs);
	return pt_footer_contributing(inputs);
});
//#endregion
//#region src/paraglide/messages/footer_builtwith1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Footer_Builtwith1Inputs */
var en_footer_builtwith1 = () => {
	return `i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.`;
};
var de_footer_builtwith1 = () => {
	return `i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.`;
};
var fr_footer_builtwith1 = () => {
	return `i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.`;
};
var es_footer_builtwith1 = () => {
	return `i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.`;
};
var ja_footer_builtwith1 = () => {
	return `i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。`;
};
var zh_footer_builtwith1 = () => {
	return `i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。`;
};
var ko_footer_builtwith1 = () => {
	return `i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.`;
};
var it_footer_builtwith1 = () => {
	return `i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.`;
};
var pt_footer_builtwith1 = () => {
	return `i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.`;
};
/**
* | output |
* | --- |
* | "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router." |
*
* @param {Footer_Builtwith1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var footer_builtwith1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_builtwith1(inputs);
	if (locale === "de") return de_footer_builtwith1(inputs);
	if (locale === "fr") return fr_footer_builtwith1(inputs);
	if (locale === "es") return es_footer_builtwith1(inputs);
	if (locale === "ja") return ja_footer_builtwith1(inputs);
	if (locale === "zh") return zh_footer_builtwith1(inputs);
	if (locale === "ko") return ko_footer_builtwith1(inputs);
	if (locale === "it") return it_footer_builtwith1(inputs);
	return pt_footer_builtwith1(inputs);
});
//#endregion
//#region src/paraglide/messages/footer_anopensourcetestapplication4.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Footer_Anopensourcetestapplication4Inputs */
var en_footer_anopensourcetestapplication4 = () => {
	return `An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.`;
};
var de_footer_anopensourcetestapplication4 = () => {
	return `Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.`;
};
var fr_footer_anopensourcetestapplication4 = () => {
	return `Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.`;
};
var es_footer_anopensourcetestapplication4 = () => {
	return `Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.`;
};
var ja_footer_anopensourcetestapplication4 = () => {
	return `国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。`;
};
var zh_footer_anopensourcetestapplication4 = () => {
	return `一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。`;
};
var ko_footer_anopensourcetestapplication4 = () => {
	return `국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.`;
};
var it_footer_anopensourcetestapplication4 = () => {
	return `Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.`;
};
var pt_footer_anopensourcetestapplication4 = () => {
	return `Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.`;
};
/**
* | output |
* | --- |
* | "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity." |
*
* @param {Footer_Anopensourcetestapplication4Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var footer_anopensourcetestapplication4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_anopensourcetestapplication4(inputs);
	if (locale === "de") return de_footer_anopensourcetestapplication4(inputs);
	if (locale === "fr") return fr_footer_anopensourcetestapplication4(inputs);
	if (locale === "es") return es_footer_anopensourcetestapplication4(inputs);
	if (locale === "ja") return ja_footer_anopensourcetestapplication4(inputs);
	if (locale === "zh") return zh_footer_anopensourcetestapplication4(inputs);
	if (locale === "ko") return ko_footer_anopensourcetestapplication4(inputs);
	if (locale === "it") return it_footer_anopensourcetestapplication4(inputs);
	return pt_footer_anopensourcetestapplication4(inputs);
});
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	const currentLocale = useParams({ strict: false }).locale ?? "en";
	const footerLinks = [
		{
			label: footer_github(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: false
		},
		{
			label: footer_methodology(),
			to: "/$locale/about",
			isInternal: true
		},
		{
			label: footer_contributing(),
			to: "/$locale/contact",
			isInternal: true
		}
	];
	return /* @__PURE__ */ jsx("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container py-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: footer_anopensourcetestapplication4()
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: footer_resources()
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-1",
						children: footerLinks.map((linkEl) => /* @__PURE__ */ jsx("li", { children: linkEl.isInternal ? /* @__PURE__ */ jsx(Link, {
							to: linkEl.to,
							params: { locale: currentLocale },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}) : /* @__PURE__ */ jsx("a", {
							href: linkEl.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}) }, linkEl.label))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: footer_contact()
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: footer_builtwith1()
			})]
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/components/Footer.wrapper.tsx
function Wrapped() {
	return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(Footer, {}) });
}
//#endregion
export { Wrapped as default };

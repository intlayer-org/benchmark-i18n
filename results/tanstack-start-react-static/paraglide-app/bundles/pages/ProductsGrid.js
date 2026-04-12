import "react";
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
//#region src/paraglide/messages/products_grid_benchmarkcli1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Benchmarkcli1Inputs */
var en_products_grid_benchmarkcli1 = () => {
	return `Benchmark CLI`;
};
var de_products_grid_benchmarkcli1 = () => {
	return `Benchmark CLI`;
};
var fr_products_grid_benchmarkcli1 = () => {
	return `CLI Benchmark`;
};
var es_products_grid_benchmarkcli1 = () => {
	return `CLI de Benchmark`;
};
var ja_products_grid_benchmarkcli1 = () => {
	return `Benchmark CLI`;
};
var zh_products_grid_benchmarkcli1 = () => {
	return `基准测试 CLI`;
};
var ko_products_grid_benchmarkcli1 = () => {
	return `Benchmark CLI`;
};
var it_products_grid_benchmarkcli1 = () => {
	return `CLI del Benchmark`;
};
var pt_products_grid_benchmarkcli1 = () => {
	return `CLI de Benchmark`;
};
/**
* | output |
* | --- |
* | "Benchmark CLI" |
*
* @param {Products_Grid_Benchmarkcli1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_benchmarkcli1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_benchmarkcli1(inputs);
	if (locale === "de") return de_products_grid_benchmarkcli1(inputs);
	if (locale === "fr") return fr_products_grid_benchmarkcli1(inputs);
	if (locale === "es") return es_products_grid_benchmarkcli1(inputs);
	if (locale === "ja") return ja_products_grid_benchmarkcli1(inputs);
	if (locale === "zh") return zh_products_grid_benchmarkcli1(inputs);
	if (locale === "ko") return ko_products_grid_benchmarkcli1(inputs);
	if (locale === "it") return it_products_grid_benchmarkcli1(inputs);
	return pt_products_grid_benchmarkcli1(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_runbenchmarkslocallyfromyour4.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Runbenchmarkslocallyfromyour4Inputs */
var en_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Run benchmarks locally from your terminal. Supports custom configurations and CI integration.`;
};
var de_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.`;
};
var fr_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.`;
};
var es_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.`;
};
var ja_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。`;
};
var zh_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `在终端本地运行基准测试。支持自定义配置和 CI 集成。`;
};
var ko_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.`;
};
var it_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.`;
};
var pt_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.`;
};
/**
* | output |
* | --- |
* | "Run benchmarks locally from your terminal. Supports custom configurations and CI integration." |
*
* @param {Products_Grid_Runbenchmarkslocallyfromyour4Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_runbenchmarkslocallyfromyour4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "de") return de_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "fr") return fr_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "es") return es_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "ja") return ja_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "zh") return zh_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "ko") return ko_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "it") return it_products_grid_runbenchmarkslocallyfromyour4(inputs);
	return pt_products_grid_runbenchmarkslocallyfromyour4(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_benchmarkcloud1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Benchmarkcloud1Inputs */
var en_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var de_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var fr_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var es_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var ja_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var zh_products_grid_benchmarkcloud1 = () => {
	return `云基准测试`;
};
var ko_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var it_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var pt_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
/**
* | output |
* | --- |
* | "Benchmark Cloud" |
*
* @param {Products_Grid_Benchmarkcloud1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_benchmarkcloud1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_benchmarkcloud1(inputs);
	if (locale === "de") return de_products_grid_benchmarkcloud1(inputs);
	if (locale === "fr") return fr_products_grid_benchmarkcloud1(inputs);
	if (locale === "es") return es_products_grid_benchmarkcloud1(inputs);
	if (locale === "ja") return ja_products_grid_benchmarkcloud1(inputs);
	if (locale === "zh") return zh_products_grid_benchmarkcloud1(inputs);
	if (locale === "ko") return ko_products_grid_benchmarkcloud1(inputs);
	if (locale === "it") return it_products_grid_benchmarkcloud1(inputs);
	return pt_products_grid_benchmarkcloud1(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_automatedcloudbasedbenchmarkingwith4.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Automatedcloudbasedbenchmarkingwith4Inputs */
var en_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.`;
};
var de_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.`;
};
var fr_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.`;
};
var es_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.`;
};
var ja_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。`;
};
var zh_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `自动化的云基准测试，支持历史追踪、警报和团队仪表板。`;
};
var ko_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.`;
};
var it_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.`;
};
var pt_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.`;
};
/**
* | output |
* | --- |
* | "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards." |
*
* @param {Products_Grid_Automatedcloudbasedbenchmarkingwith4Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_automatedcloudbasedbenchmarkingwith4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "de") return de_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "fr") return fr_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "es") return es_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "ja") return ja_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "zh") return zh_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "ko") return ko_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "it") return it_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	return pt_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_benchmarkenterprise1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Benchmarkenterprise1Inputs */
var en_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var de_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var fr_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var es_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var ja_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var zh_products_grid_benchmarkenterprise1 = () => {
	return `企业级基准测试`;
};
var ko_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var it_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var pt_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
/**
* | output |
* | --- |
* | "Benchmark Enterprise" |
*
* @param {Products_Grid_Benchmarkenterprise1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_benchmarkenterprise1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_benchmarkenterprise1(inputs);
	if (locale === "de") return de_products_grid_benchmarkenterprise1(inputs);
	if (locale === "fr") return fr_products_grid_benchmarkenterprise1(inputs);
	if (locale === "es") return es_products_grid_benchmarkenterprise1(inputs);
	if (locale === "ja") return ja_products_grid_benchmarkenterprise1(inputs);
	if (locale === "zh") return zh_products_grid_benchmarkenterprise1(inputs);
	if (locale === "ko") return ko_products_grid_benchmarkenterprise1(inputs);
	if (locale === "it") return it_products_grid_benchmarkenterprise1(inputs);
	return pt_products_grid_benchmarkenterprise1(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_onpremisedeploymentwithsso4.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Onpremisedeploymentwithsso4Inputs */
var en_products_grid_onpremisedeploymentwithsso4 = () => {
	return `On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.`;
};
var de_products_grid_onpremisedeploymentwithsso4 = () => {
	return `On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.`;
};
var fr_products_grid_onpremisedeploymentwithsso4 = () => {
	return `Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.`;
};
var es_products_grid_onpremisedeploymentwithsso4 = () => {
	return `Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.`;
};
var ja_products_grid_onpremisedeploymentwithsso4 = () => {
	return `SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。`;
};
var zh_products_grid_onpremisedeploymentwithsso4 = () => {
	return `支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。`;
};
var ko_products_grid_onpremisedeploymentwithsso4 = () => {
	return `SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.`;
};
var it_products_grid_onpremisedeploymentwithsso4 = () => {
	return `Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.`;
};
var pt_products_grid_onpremisedeploymentwithsso4 = () => {
	return `Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.`;
};
/**
* | output |
* | --- |
* | "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support." |
*
* @param {Products_Grid_Onpremisedeploymentwithsso4Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_onpremisedeploymentwithsso4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "de") return de_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "fr") return fr_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "es") return es_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "ja") return ja_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "zh") return zh_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "ko") return ko_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "it") return it_products_grid_onpremisedeploymentwithsso4(inputs);
	return pt_products_grid_onpremisedeploymentwithsso4(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_contactus1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Contactus1Inputs */
var en_products_grid_contactus1 = () => {
	return `Contact Us`;
};
var de_products_grid_contactus1 = () => {
	return `Kontaktieren Sie uns`;
};
var fr_products_grid_contactus1 = () => {
	return `Contactez-nous`;
};
var es_products_grid_contactus1 = () => {
	return `Contáctanos`;
};
var ja_products_grid_contactus1 = () => {
	return `お問い合わせ`;
};
var zh_products_grid_contactus1 = () => {
	return `联系我们`;
};
var ko_products_grid_contactus1 = () => {
	return `문의하기`;
};
var it_products_grid_contactus1 = () => {
	return `Contattaci`;
};
var pt_products_grid_contactus1 = () => {
	return `Contate-nos`;
};
/**
* | output |
* | --- |
* | "Contact Us" |
*
* @param {Products_Grid_Contactus1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_contactus1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_contactus1(inputs);
	if (locale === "de") return de_products_grid_contactus1(inputs);
	if (locale === "fr") return fr_products_grid_contactus1(inputs);
	if (locale === "es") return es_products_grid_contactus1(inputs);
	if (locale === "ja") return ja_products_grid_contactus1(inputs);
	if (locale === "zh") return zh_products_grid_contactus1(inputs);
	if (locale === "ko") return ko_products_grid_contactus1(inputs);
	if (locale === "it") return it_products_grid_contactus1(inputs);
	return pt_products_grid_contactus1(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_migrationassistant1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Migrationassistant1Inputs */
var en_products_grid_migrationassistant1 = () => {
	return `Migration Assistant`;
};
var de_products_grid_migrationassistant1 = () => {
	return `Migrationsassistent`;
};
var fr_products_grid_migrationassistant1 = () => {
	return `Assistant de migration`;
};
var es_products_grid_migrationassistant1 = () => {
	return `Asistente de migración`;
};
var ja_products_grid_migrationassistant1 = () => {
	return `移行アシスタント`;
};
var zh_products_grid_migrationassistant1 = () => {
	return `迁移助手`;
};
var ko_products_grid_migrationassistant1 = () => {
	return `마이그레이션 어시스턴트`;
};
var it_products_grid_migrationassistant1 = () => {
	return `Assistente alla Migrazione`;
};
var pt_products_grid_migrationassistant1 = () => {
	return `Assistente de Migração`;
};
/**
* | output |
* | --- |
* | "Migration Assistant" |
*
* @param {Products_Grid_Migrationassistant1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_migrationassistant1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_migrationassistant1(inputs);
	if (locale === "de") return de_products_grid_migrationassistant1(inputs);
	if (locale === "fr") return fr_products_grid_migrationassistant1(inputs);
	if (locale === "es") return es_products_grid_migrationassistant1(inputs);
	if (locale === "ja") return ja_products_grid_migrationassistant1(inputs);
	if (locale === "zh") return zh_products_grid_migrationassistant1(inputs);
	if (locale === "ko") return ko_products_grid_migrationassistant1(inputs);
	if (locale === "it") return it_products_grid_migrationassistant1(inputs);
	return pt_products_grid_migrationassistant1(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_aipoweredtoolthathelps4.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Aipoweredtoolthathelps4Inputs */
var en_products_grid_aipoweredtoolthathelps4 = () => {
	return `AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.`;
};
var de_products_grid_aipoweredtoolthathelps4 = () => {
	return `KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.`;
};
var fr_products_grid_aipoweredtoolthathelps4 = () => {
	return `Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.`;
};
var es_products_grid_aipoweredtoolthathelps4 = () => {
	return `Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.`;
};
var ja_products_grid_aipoweredtoolthathelps4 = () => {
	return `ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。`;
};
var zh_products_grid_aipoweredtoolthathelps4 = () => {
	return `人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。`;
};
var ko_products_grid_aipoweredtoolthathelps4 = () => {
	return `다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.`;
};
var it_products_grid_aipoweredtoolthathelps4 = () => {
	return `Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.`;
};
var pt_products_grid_aipoweredtoolthathelps4 = () => {
	return `Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.`;
};
/**
* | output |
* | --- |
* | "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime." |
*
* @param {Products_Grid_Aipoweredtoolthathelps4Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_aipoweredtoolthathelps4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "de") return de_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "fr") return fr_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "es") return es_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "ja") return ja_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "zh") return zh_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "ko") return ko_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "it") return it_products_grid_aipoweredtoolthathelps4(inputs);
	return pt_products_grid_aipoweredtoolthathelps4(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_translationqa1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Translationqa1Inputs */
var en_products_grid_translationqa1 = () => {
	return `Translation QA`;
};
var de_products_grid_translationqa1 = () => {
	return `Übersetzungs-QA`;
};
var fr_products_grid_translationqa1 = () => {
	return `QA de traduction`;
};
var es_products_grid_translationqa1 = () => {
	return `QA de traducción`;
};
var ja_products_grid_translationqa1 = () => {
	return `翻訳QA`;
};
var zh_products_grid_translationqa1 = () => {
	return `翻译质量保证`;
};
var ko_products_grid_translationqa1 = () => {
	return `번역 QA`;
};
var it_products_grid_translationqa1 = () => {
	return `QA delle Traduzioni`;
};
var pt_products_grid_translationqa1 = () => {
	return `QA de Tradução`;
};
/**
* | output |
* | --- |
* | "Translation QA" |
*
* @param {Products_Grid_Translationqa1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_translationqa1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_translationqa1(inputs);
	if (locale === "de") return de_products_grid_translationqa1(inputs);
	if (locale === "fr") return fr_products_grid_translationqa1(inputs);
	if (locale === "es") return es_products_grid_translationqa1(inputs);
	if (locale === "ja") return ja_products_grid_translationqa1(inputs);
	if (locale === "zh") return zh_products_grid_translationqa1(inputs);
	if (locale === "ko") return ko_products_grid_translationqa1(inputs);
	if (locale === "it") return it_products_grid_translationqa1(inputs);
	return pt_products_grid_translationqa1(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_automatedqualitychecksformissing4.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Automatedqualitychecksformissing4Inputs */
var en_products_grid_automatedqualitychecksformissing4 = () => {
	return `Automated quality checks for missing translations, pluralization issues, and context errors.`;
};
var de_products_grid_automatedqualitychecksformissing4 = () => {
	return `Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.`;
};
var fr_products_grid_automatedqualitychecksformissing4 = () => {
	return `Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.`;
};
var es_products_grid_automatedqualitychecksformissing4 = () => {
	return `Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.`;
};
var ja_products_grid_automatedqualitychecksformissing4 = () => {
	return `翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。`;
};
var zh_products_grid_automatedqualitychecksformissing4 = () => {
	return `针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。`;
};
var ko_products_grid_automatedqualitychecksformissing4 = () => {
	return `누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.`;
};
var it_products_grid_automatedqualitychecksformissing4 = () => {
	return `Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.`;
};
var pt_products_grid_automatedqualitychecksformissing4 = () => {
	return `Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.`;
};
/**
* | output |
* | --- |
* | "Automated quality checks for missing translations, pluralization issues, and context errors." |
*
* @param {Products_Grid_Automatedqualitychecksformissing4Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_automatedqualitychecksformissing4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "de") return de_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "fr") return fr_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "es") return es_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "ja") return ja_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "zh") return zh_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "ko") return ko_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "it") return it_products_grid_automatedqualitychecksformissing4(inputs);
	return pt_products_grid_automatedqualitychecksformissing4(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_bundleoptimizer1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Bundleoptimizer1Inputs */
var en_products_grid_bundleoptimizer1 = () => {
	return `Bundle Optimizer`;
};
var de_products_grid_bundleoptimizer1 = () => {
	return `Bundle-Optimierer`;
};
var fr_products_grid_bundleoptimizer1 = () => {
	return `Optimiseur de bundle`;
};
var es_products_grid_bundleoptimizer1 = () => {
	return `Optimizador de bundle`;
};
var ja_products_grid_bundleoptimizer1 = () => {
	return `バンドルオプティマイザー`;
};
var zh_products_grid_bundleoptimizer1 = () => {
	return `包优化器`;
};
var ko_products_grid_bundleoptimizer1 = () => {
	return `번들 옵티마이저`;
};
var it_products_grid_bundleoptimizer1 = () => {
	return `Ottimizzatore del Bundle`;
};
var pt_products_grid_bundleoptimizer1 = () => {
	return `Otimizador de Bundle`;
};
/**
* | output |
* | --- |
* | "Bundle Optimizer" |
*
* @param {Products_Grid_Bundleoptimizer1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_bundleoptimizer1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_bundleoptimizer1(inputs);
	if (locale === "de") return de_products_grid_bundleoptimizer1(inputs);
	if (locale === "fr") return fr_products_grid_bundleoptimizer1(inputs);
	if (locale === "es") return es_products_grid_bundleoptimizer1(inputs);
	if (locale === "ja") return ja_products_grid_bundleoptimizer1(inputs);
	if (locale === "zh") return zh_products_grid_bundleoptimizer1(inputs);
	if (locale === "ko") return ko_products_grid_bundleoptimizer1(inputs);
	if (locale === "it") return it_products_grid_bundleoptimizer1(inputs);
	return pt_products_grid_bundleoptimizer1(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_analyzesandoptimizesyouri18n4.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Analyzesandoptimizesyouri18n4Inputs */
var en_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.`;
};
var de_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.`;
};
var fr_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.`;
};
var es_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.`;
};
var ja_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。`;
};
var zh_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。`;
};
var ko_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.`;
};
var it_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.`;
};
var pt_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.`;
};
/**
* | output |
* | --- |
* | "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting." |
*
* @param {Products_Grid_Analyzesandoptimizesyouri18n4Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_analyzesandoptimizesyouri18n4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "de") return de_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "fr") return fr_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "es") return es_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "ja") return ja_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "zh") return zh_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "ko") return ko_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "it") return it_products_grid_analyzesandoptimizesyouri18n4(inputs);
	return pt_products_grid_analyzesandoptimizesyouri18n4(inputs);
});
//#endregion
//#region src/paraglide/messages/products_grid_learnmore1.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Products_Grid_Learnmore1Inputs */
var en_products_grid_learnmore1 = () => {
	return `Learn More`;
};
var de_products_grid_learnmore1 = () => {
	return `Mehr erfahren`;
};
var fr_products_grid_learnmore1 = () => {
	return `En savoir plus`;
};
var es_products_grid_learnmore1 = () => {
	return `Más información`;
};
var ja_products_grid_learnmore1 = () => {
	return `詳細を見る`;
};
var zh_products_grid_learnmore1 = () => {
	return `了解更多`;
};
var ko_products_grid_learnmore1 = () => {
	return `더 알아보기`;
};
var it_products_grid_learnmore1 = () => {
	return `Scopri di più`;
};
var pt_products_grid_learnmore1 = () => {
	return `Saiba Mais`;
};
/**
* | output |
* | --- |
* | "Learn More" |
*
* @param {Products_Grid_Learnmore1Inputs} inputs
* @param {{ locale?: "en" | "de" | "fr" | "es" | "ja" | "zh" | "ko" | "it" | "pt" }} options
* @returns {LocalizedString}
*/
var products_grid_learnmore1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_learnmore1(inputs);
	if (locale === "de") return de_products_grid_learnmore1(inputs);
	if (locale === "fr") return fr_products_grid_learnmore1(inputs);
	if (locale === "es") return es_products_grid_learnmore1(inputs);
	if (locale === "ja") return ja_products_grid_learnmore1(inputs);
	if (locale === "zh") return zh_products_grid_learnmore1(inputs);
	if (locale === "ko") return ko_products_grid_learnmore1(inputs);
	if (locale === "it") return it_products_grid_learnmore1(inputs);
	return pt_products_grid_learnmore1(inputs);
});
//#endregion
//#region src/components/pages/products/ProductsGrid.tsx
function ProductsGrid() {
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: products_grid_benchmarkcli1(),
				desc: products_grid_runbenchmarkslocallyfromyour4(),
				price: "Free"
			},
			{
				name: products_grid_benchmarkcloud1(),
				desc: products_grid_automatedcloudbasedbenchmarkingwith4(),
				price: "$29/mo"
			},
			{
				name: products_grid_benchmarkenterprise1(),
				desc: products_grid_onpremisedeploymentwithsso4(),
				price: products_grid_contactus1()
			},
			{
				name: products_grid_migrationassistant1(),
				desc: products_grid_aipoweredtoolthathelps4(),
				price: "$99 one-time"
			},
			{
				name: products_grid_translationqa1(),
				desc: products_grid_automatedqualitychecksformissing4(),
				price: "$19/mo"
			},
			{
				name: products_grid_bundleoptimizer1(),
				desc: products_grid_analyzesandoptimizesyouri18n4(),
				price: "$49/mo"
			}
		].map((p) => /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: p.name
			}), /* @__PURE__ */ jsx("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: p.desc
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-sm font-bold text-primary",
					children: p.price
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: products_grid_learnmore1()
				})]
			})]
		}, p.name))
	});
}
//#endregion
//#region scripts/Wrapper.tsx
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/components/pages/products/ProductsGrid.wrapper.tsx
function Wrapped() {
	return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(ProductsGrid, {}) });
}
//#endregion
export { Wrapped as default };

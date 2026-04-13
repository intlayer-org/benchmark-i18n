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
//#region src/paraglide/messages/about_grid_whythisexists2.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} About_Grid_Whythisexists2Inputs */
var en_about_grid_whythisexists2 = () => {
	return `Why This Exists`;
};
var fr_about_grid_whythisexists2 = () => {
	return `Pourquoi cela existe`;
};
var es_about_grid_whythisexists2 = () => {
	return `Por qué existe`;
};
var de_about_grid_whythisexists2 = () => {
	return `Warum dieses Projekt existiert`;
};
var it_about_grid_whythisexists2 = () => {
	return `Perché esiste questo progetto`;
};
var pt_about_grid_whythisexists2 = () => {
	return `Por que isso existe`;
};
var zh_about_grid_whythisexists2 = () => {
	return `为什么存在这个基准测试`;
};
var ja_about_grid_whythisexists2 = () => {
	return `なぜこれが存在するのか`;
};
var ko_about_grid_whythisexists2 = () => {
	return `이것이 존재하는 이유`;
};
var ru_about_grid_whythisexists2 = () => {
	return `Почему это существует`;
};
/**
* | output |
* | --- |
* | "Why This Exists" |
*
* @param {About_Grid_Whythisexists2Inputs} inputs
* @param {{ locale?: "en" | "fr" | "es" | "de" | "it" | "pt" | "zh" | "ja" | "ko" | "ru" }} options
* @returns {LocalizedString}
*/
var about_grid_whythisexists2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_grid_whythisexists2(inputs);
	if (locale === "fr") return fr_about_grid_whythisexists2(inputs);
	if (locale === "es") return es_about_grid_whythisexists2(inputs);
	if (locale === "de") return de_about_grid_whythisexists2(inputs);
	if (locale === "it") return it_about_grid_whythisexists2(inputs);
	if (locale === "pt") return pt_about_grid_whythisexists2(inputs);
	if (locale === "zh") return zh_about_grid_whythisexists2(inputs);
	if (locale === "ja") return ja_about_grid_whythisexists2(inputs);
	if (locale === "ko") return ko_about_grid_whythisexists2(inputs);
	return ru_about_grid_whythisexists2(inputs);
});
//#endregion
//#region src/paraglide/messages/about_grid_choosingani18nlibraryis4.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} About_Grid_Choosingani18nlibraryis4Inputs */
var en_about_grid_choosingani18nlibraryis4 = () => {
	return `Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.`;
};
var fr_about_grid_choosingani18nlibraryis4 = () => {
	return `Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.`;
};
var es_about_grid_choosingani18nlibraryis4 = () => {
	return `Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo traslada el coste? Este benchmark responde a estas preguntas con datos reales.`;
};
var de_about_grid_choosingani18nlibraryis4 = () => {
	return `Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt sie sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading wirklich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.`;
};
var it_about_grid_choosingani18nlibraryis4 = () => {
	return `Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.`;
};
var pt_about_grid_choosingani18nlibraryis4 = () => {
	return `Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao pacote? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento tardio realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.`;
};
var zh_about_grid_choosingani18nlibraryis4 = () => {
	return `选择 i18n 库是一项具有长期影响的架构决策。大多数比较侧重于 API 的易用性，但很少衡量性能成本：库为包增加了多少权重？加载数千个翻译键时它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试用真实数据回答了这些问题。`;
};
var ja_about_grid_choosingani18nlibraryis4 = () => {
	return `i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使い勝手に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を加えるのか？数千の翻訳キーが読み込まれたとき、レンダリングにどのような影響を与えるのか？遅延読み込みは実際に役立つのか、それとも単にコストをシフトさせているだけなのか？このベンチマークは、実際のデータでそれらの疑問に答えます。`;
};
var ko_about_grid_choosingani18nlibraryis4 = () => {
	return `i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API의 사용 편의성에 중점을 두지만, 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 무게를 더하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 주는가? 지연 로딩이 실제로 도움이 되는가 아니면 단순히 비용을 나중으로 미루는 것인가? 이 벤치마크는 실제 데이터를 사용하여 이러한 질문에 답합니다.`;
};
var ru_about_grid_choosingani18nlibraryis4 = () => {
	return `Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.`;
};
/**
* | output |
* | --- |
* | "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance ..." |
*
* @param {About_Grid_Choosingani18nlibraryis4Inputs} inputs
* @param {{ locale?: "en" | "fr" | "es" | "de" | "it" | "pt" | "zh" | "ja" | "ko" | "ru" }} options
* @returns {LocalizedString}
*/
var about_grid_choosingani18nlibraryis4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_grid_choosingani18nlibraryis4(inputs);
	if (locale === "fr") return fr_about_grid_choosingani18nlibraryis4(inputs);
	if (locale === "es") return es_about_grid_choosingani18nlibraryis4(inputs);
	if (locale === "de") return de_about_grid_choosingani18nlibraryis4(inputs);
	if (locale === "it") return it_about_grid_choosingani18nlibraryis4(inputs);
	if (locale === "pt") return pt_about_grid_choosingani18nlibraryis4(inputs);
	if (locale === "zh") return zh_about_grid_choosingani18nlibraryis4(inputs);
	if (locale === "ja") return ja_about_grid_choosingani18nlibraryis4(inputs);
	if (locale === "ko") return ko_about_grid_choosingani18nlibraryis4(inputs);
	return ru_about_grid_choosingani18nlibraryis4(inputs);
});
//#endregion
//#region src/paraglide/messages/about_grid_methodology.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} About_Grid_MethodologyInputs */
var en_about_grid_methodology = () => {
	return `Methodology`;
};
var fr_about_grid_methodology = () => {
	return `Méthodologie`;
};
var es_about_grid_methodology = () => {
	return `Metodología`;
};
var de_about_grid_methodology = () => {
	return `Methodik`;
};
var it_about_grid_methodology = () => {
	return `Metodologia`;
};
var pt_about_grid_methodology = () => {
	return `Metodologia`;
};
var zh_about_grid_methodology = () => {
	return `方法论`;
};
var ja_about_grid_methodology = () => {
	return `方法論`;
};
var ko_about_grid_methodology = () => {
	return `방법론`;
};
var ru_about_grid_methodology = () => {
	return `Методология`;
};
/**
* | output |
* | --- |
* | "Methodology" |
*
* @param {About_Grid_MethodologyInputs} inputs
* @param {{ locale?: "en" | "fr" | "es" | "de" | "it" | "pt" | "zh" | "ja" | "ko" | "ru" }} options
* @returns {LocalizedString}
*/
var about_grid_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_grid_methodology(inputs);
	if (locale === "fr") return fr_about_grid_methodology(inputs);
	if (locale === "es") return es_about_grid_methodology(inputs);
	if (locale === "de") return de_about_grid_methodology(inputs);
	if (locale === "it") return it_about_grid_methodology(inputs);
	if (locale === "pt") return pt_about_grid_methodology(inputs);
	if (locale === "zh") return zh_about_grid_methodology(inputs);
	if (locale === "ja") return ja_about_grid_methodology(inputs);
	if (locale === "ko") return ko_about_grid_methodology(inputs);
	return ru_about_grid_methodology(inputs);
});
//#endregion
//#region src/paraglide/messages/about_grid_thesame10pageapp3.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} About_Grid_Thesame10pageapp3Inputs */
var en_about_grid_thesame10pageapp3 = () => {
	return `The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.`;
};
var fr_about_grid_thesame10pageapp3 = () => {
	return `La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles.`;
};
var es_about_grid_thesame10pageapp3 = () => {
	return `La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en un hardware consistente para garantizar resultados reproducibles.`;
};
var de_about_grid_thesame10pageapp3 = () => {
	return `Dieselbe 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Gebietsschemawechsel zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.`;
};
var it_about_grid_thesame10pageapp3 = () => {
	return `La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.`;
};
var pt_about_grid_thesame10pageapp3 = () => {
	return `O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.`;
};
var zh_about_grid_thesame10pageapp3 = () => {
	return `同一个 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审计以获取加载指标，并使用 React Profiler 捕获语言切换期间的渲染时间。所有测试都在一致的硬件上在 CI 中运行，以确保结果的可复现性。`;
};
var ja_about_grid_thesame10pageapp3 = () => {
	return `同じ10ページのアプリがライブラリごとに1回構築されます。rollup-plugin-visualizerを介してプロダクションバンドルを測定し、ロード指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を確実にするために、一貫したハードウェアを使用してCI上で実行されます。`;
};
var ko_about_grid_thesame10pageapp3 = () => {
	return `동일한 10페이지 앱이 라이브러리마다 한 번씩 구축됩니다. rollup-plugin-visualizer를 통해 프로덕션 번들을 측정하고, 로딩 지표에 대한 Lighthouse 감사를 실행하며, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.`;
};
var ru_about_grid_thesame10pageapp3 = () => {
	return `Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов.`;
};
/**
* | output |
* | --- |
* | "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, a..." |
*
* @param {About_Grid_Thesame10pageapp3Inputs} inputs
* @param {{ locale?: "en" | "fr" | "es" | "de" | "it" | "pt" | "zh" | "ja" | "ko" | "ru" }} options
* @returns {LocalizedString}
*/
var about_grid_thesame10pageapp3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_grid_thesame10pageapp3(inputs);
	if (locale === "fr") return fr_about_grid_thesame10pageapp3(inputs);
	if (locale === "es") return es_about_grid_thesame10pageapp3(inputs);
	if (locale === "de") return de_about_grid_thesame10pageapp3(inputs);
	if (locale === "it") return it_about_grid_thesame10pageapp3(inputs);
	if (locale === "pt") return pt_about_grid_thesame10pageapp3(inputs);
	if (locale === "zh") return zh_about_grid_thesame10pageapp3(inputs);
	if (locale === "ja") return ja_about_grid_thesame10pageapp3(inputs);
	if (locale === "ko") return ko_about_grid_thesame10pageapp3(inputs);
	return ru_about_grid_thesame10pageapp3(inputs);
});
//#endregion
//#region src/components/pages/about/AboutGrid.tsx
function AboutGrid() {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid gap-8 md:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: about_grid_whythisexists2()
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: about_grid_choosingani18nlibraryis4()
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: about_grid_methodology()
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: about_grid_thesame10pageapp3()
			})]
		})]
	});
}
//#endregion
//#region scripts/Wrapper.tsx
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/components/pages/about/AboutGrid.wrapper.tsx
function Wrapped() {
	return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(AboutGrid, {}) });
}
//#endregion
export { Wrapped as default };

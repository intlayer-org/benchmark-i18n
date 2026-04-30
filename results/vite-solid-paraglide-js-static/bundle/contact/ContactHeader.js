import { createComponent, effect, insert, setAttribute, template } from "solid-js/web";
var URLPattern = {};
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
var cookieName = "PARAGLIDE_LOCALE";
var cookieMaxAge = 3456e4;
var strategy = [
	"cookie",
	"globalVariable",
	"baseLocale"
];
var routeStrategies = [];
var cachedRouteStrategyUrl;
var cachedRouteStrategy;
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
function getStrategyForUrl(url) {
	const routeStrategy = findMatchingRouteStrategy(url);
	if (routeStrategy && routeStrategy.exclude !== true && Array.isArray(routeStrategy.strategy)) return routeStrategy.strategy;
	return strategy;
}
var serverAsyncLocalStorage = void 0;
var isServer = typeof window === "undefined";
globalThis.__paraglide = globalThis.__paraglide ?? {};
globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _locale;
var localeInitiallySet = false;
var getLocale = () => {
	if (serverAsyncLocalStorage) {
		const locale = serverAsyncLocalStorage?.getStore()?.locale;
		if (locale) return locale;
	}
	let strategyToUse = strategy;
	if (!isServer && typeof window !== "undefined" && window.location?.href) strategyToUse = getStrategyForUrl(window.location.href);
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
function resolveLocaleWithStrategies(strategyToUse, urlForUrlStrategy) {
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
var navigateOrReload = (newLocation) => {
	if (newLocation) window.location.href = newLocation;
	else window.location.reload();
};
var setLocale = (newLocale, options) => {
	const optionsWithDefaults = {
		reload: true,
		...options
	};
	let currentLocale;
	try {
		currentLocale = getLocale();
	} catch {}
	const customSetLocalePromises = [];
	let newLocation = void 0;
	let strategyToUse = strategy;
	if (!isServer && typeof window !== "undefined" && window.location?.href) strategyToUse = getStrategyForUrl(window.location.href);
	for (const strat of strategyToUse) if (strat === "globalVariable") _locale = newLocale;
	else if (strat === "cookie") {
		if (isServer || typeof document === "undefined" || typeof window === "undefined") continue;
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
		if (!isServer && optionsWithDefaults.reload && window.location && newLocale !== currentLocale) navigateOrReload(newLocation);
	};
	if (customSetLocalePromises.length) return Promise.all(customSetLocalePromises).then(() => {
		runReload();
	});
	runReload();
};
function toLocale(value) {
	if (typeof value !== "string") return;
	const lowerValue = value.toLowerCase();
	for (const locale of locales) if (locale.toLowerCase() === lowerValue) return locale;
}
function assertIsLocale(input) {
	const locale = toLocale(input);
	if (locale) return locale;
	throw new Error(`Invalid locale: ${input}. Expected one of: ${locales.join(", ")}`);
}
function extractLocaleFromCookie() {
	if (typeof document === "undefined" || !document.cookie) return;
	const locale = document.cookie.match(new RegExp(`(^| )${cookieName}=([^;]+)`))?.[2];
	return toLocale(locale);
}
var customClientStrategies = /* @__PURE__ */ new Map();
function isCustomStrategy(strategy) {
	return typeof strategy === "string" && /^custom-[A-Za-z0-9_-]+$/.test(strategy);
}
var en_shared_contactemail1 = () => {
	return `contact@intlayer.org`;
};
var fr_shared_contactemail1 = () => {
	return `contact@intlayer.org`;
};
var es_shared_contactemail1 = () => {
	return `contact@intlayer.org`;
};
var de_shared_contactemail1 = () => {
	return `contact@intlayer.org`;
};
var it_shared_contactemail1 = () => {
	return `contact@intlayer.org`;
};
var pt_shared_contactemail1 = () => {
	return `contact@intlayer.org`;
};
var zh_shared_contactemail1 = () => {
	return `contact@intlayer.org`;
};
var ja_shared_contactemail1 = () => {
	return `contact@intlayer.org`;
};
var ko_shared_contactemail1 = () => {
	return `contact@intlayer.org`;
};
var ru_shared_contactemail1 = () => {
	return `contact@intlayer.org`;
};
var shared_contactemail1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_shared_contactemail1(inputs);
	if (locale === "fr") return fr_shared_contactemail1(inputs);
	if (locale === "es") return es_shared_contactemail1(inputs);
	if (locale === "de") return de_shared_contactemail1(inputs);
	if (locale === "it") return it_shared_contactemail1(inputs);
	if (locale === "pt") return pt_shared_contactemail1(inputs);
	if (locale === "zh") return zh_shared_contactemail1(inputs);
	if (locale === "ja") return ja_shared_contactemail1(inputs);
	if (locale === "ko") return ko_shared_contactemail1(inputs);
	return ru_shared_contactemail1(inputs);
});
var en_mockbanner1 = () => {
	return `⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.`;
};
var fr_mockbanner1 = () => {
	return `⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.`;
};
var es_mockbanner1 = () => {
	return `⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.`;
};
var de_mockbanner1 = () => {
	return `⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.`;
};
var it_mockbanner1 = () => {
	return `⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.`;
};
var pt_mockbanner1 = () => {
	return `⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.`;
};
var zh_mockbanner1 = () => {
	return `⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。`;
};
var ja_mockbanner1 = () => {
	return `⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。`;
};
var ko_mockbanner1 = () => {
	return `⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.`;
};
var ru_mockbanner1 = () => {
	return `⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.`;
};
var mockbanner1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_mockbanner1(inputs);
	if (locale === "fr") return fr_mockbanner1(inputs);
	if (locale === "es") return es_mockbanner1(inputs);
	if (locale === "de") return de_mockbanner1(inputs);
	if (locale === "it") return it_mockbanner1(inputs);
	if (locale === "pt") return pt_mockbanner1(inputs);
	if (locale === "zh") return zh_mockbanner1(inputs);
	if (locale === "ja") return ja_mockbanner1(inputs);
	if (locale === "ko") return ko_mockbanner1(inputs);
	return ru_mockbanner1(inputs);
});
var en_contact_header_title = () => {
	return `Get in Touch`;
};
var fr_contact_header_title = () => {
	return `Contact`;
};
var es_contact_header_title = () => {
	return `Ponte en contacto`;
};
var de_contact_header_title = () => {
	return `Kontakt aufnehmen`;
};
var it_contact_header_title = () => {
	return `Contattaci`;
};
var pt_contact_header_title = () => {
	return `Entre em contato`;
};
var zh_contact_header_title = () => {
	return `取得联系`;
};
var ja_contact_header_title = () => {
	return `お問い合わせ`;
};
var ko_contact_header_title = () => {
	return `Get in Touch`;
};
var ru_contact_header_title = () => {
	return `Связаться с нами`;
};
var contact_header_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_header_title(inputs);
	if (locale === "fr") return fr_contact_header_title(inputs);
	if (locale === "es") return es_contact_header_title(inputs);
	if (locale === "de") return de_contact_header_title(inputs);
	if (locale === "it") return it_contact_header_title(inputs);
	if (locale === "pt") return pt_contact_header_title(inputs);
	if (locale === "zh") return zh_contact_header_title(inputs);
	if (locale === "ja") return ja_contact_header_title(inputs);
	if (locale === "ko") return ko_contact_header_title(inputs);
	return ru_contact_header_title(inputs);
});
var en_contact_header_description = () => {
	return `Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at`;
};
var fr_contact_header_description = () => {
	return `Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à`;
};
var es_contact_header_description = () => {
	return `¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en`;
};
var de_contact_header_description = () => {
	return `Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter`;
};
var it_contact_header_description = () => {
	return `Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo`;
};
var pt_contact_header_description = () => {
	return `Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em`;
};
var zh_contact_header_description = () => {
	return `有想法、发现了错误或想贡献基准测试？请联系我们：`;
};
var ja_contact_header_description = () => {
	return `アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：`;
};
var ko_contact_header_description = () => {
	return `Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at`;
};
var ru_contact_header_description = () => {
	return `Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу`;
};
var contact_header_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_header_description(inputs);
	if (locale === "fr") return fr_contact_header_description(inputs);
	if (locale === "es") return es_contact_header_description(inputs);
	if (locale === "de") return de_contact_header_description(inputs);
	if (locale === "it") return it_contact_header_description(inputs);
	if (locale === "pt") return pt_contact_header_description(inputs);
	if (locale === "zh") return zh_contact_header_description(inputs);
	if (locale === "ja") return ja_contact_header_description(inputs);
	if (locale === "ko") return ko_contact_header_description(inputs);
	return ru_contact_header_description(inputs);
});
var _tmpl$$1 = template(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">`);
function MockBanner() {
	return (() => {
		var _el$ = _tmpl$$1();
		insert(_el$, () => mockbanner1());
		return _el$;
	})();
}
var _tmpl$ = template(`<h1 class="mb-2 text-3xl font-bold text-foreground">`), _tmpl$2 = template(`<p class="mb-8 text-muted-foreground"> <a class="text-primary hover:underline"></a>.`);
function ContactHeader() {
	return [
		createComponent(MockBanner, {}),
		(() => {
			var _el$ = _tmpl$();
			insert(_el$, () => contact_header_title());
			return _el$;
		})(),
		(() => {
			var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
			insert(_el$2, () => contact_header_description(), _el$3);
			insert(_el$4, () => shared_contactemail1());
			effect(() => setAttribute(_el$4, "href", `mailto:${shared_contactemail1()}`));
			return _el$2;
		})()
	];
}
export { ContactHeader as default };
